import type { NodePath } from "@babel/traverse";
import type { Transform } from "./Transform";
import * as t from "@babel/types";

interface LabelInterface {
    label: string;
    renamed?: string;
    removed: boolean;
    required: boolean;
    paths: NodePath<t.BreakStatement | t.ContinueStatement>[];
}

const LABEL = Symbol("label");

interface NodeLabel {
    [LABEL]?: LabelInterface;
}

export default {
    name: "RenameLabels",
    preRunWebcrack: false,
    postRunWebcrack: false,
    contextedVisitor: context => {
        return {
            on(isEstimate) {
                const isNotEstimate = !isEstimate;

                return {
                    Program(path) {
                        const allLabelInterfaces: Array<LabelInterface> = [];
                        let labelCounter = 0;

                        let estimatedTargets = 0;

                        path.traverse({
                            LabeledStatement(labelPath) {
                                if (!isNotEstimate) {
                                    estimatedTargets++;
                                    return;
                                }

                                const labelInterface: LabelInterface = {
                                    label: labelPath.node.label.name,
                                    removed: false,
                                    required: false,
                                    paths: [],
                                };

                                allLabelInterfaces.push(labelInterface);
                                (labelPath.node as NodeLabel)[LABEL] = labelInterface;
                            },
                            "BreakStatement|ContinueStatement"(innerPath) {
                                if (!isNotEstimate)
                                    return;

                                const statementPath =
                                    innerPath as NodePath<t.BreakStatement | t.ContinueStatement>;

                                if (!statementPath.node.label)
                                    return;

                                const labelName = statementPath.node.label.name;
                                let targets: Array<NodePath<t.For | t.While | t.BlockStatement | t.SwitchStatement>> = [];

                                let onlySearchLoops = statementPath.isContinueStatement();

                                let currentPath: NodePath | null = statementPath;
                                while (currentPath) {
                                    if (
                                        currentPath.isFor() ||
                                        currentPath.isWhile() ||
                                        currentPath.isSwitchStatement()
                                    )
                                        targets.push(currentPath);

                                    if (
                                        currentPath.isBlockStatement() &&
                                        currentPath.parentPath.isLabeledStatement()
                                    )
                                        targets.push(currentPath);

                                    currentPath = currentPath.parentPath;
                                }

                                const target = targets.find(targetPath =>
                                    targetPath.parentPath &&
                                    targetPath.parentPath.isLabeledStatement() &&
                                    targetPath.parentPath.node.label.name === labelName,
                                );

                                if (!target)
                                    return;

                                if (onlySearchLoops)
                                    targets = targets.filter(
                                        targetPath => !targetPath.isBlockStatement() && !targetPath.isSwitchStatement(),
                                    );

                                const isRequired = target.isBlockStatement() || targets[0] !== target;

                                const labelInterface = (target.parentPath.node as NodeLabel)[LABEL];

                                if (isRequired)
                                    labelInterface.required = true;
                                else
                                    statementPath.node.label = null;

                                labelInterface.paths.push(statementPath);
                            },
                        });

                        if (!isNotEstimate) {
                            context.targetCount += estimatedTargets;
                            return;
                        }

                        allLabelInterfaces.forEach(labelInterface => {
                            if (labelInterface.required)
                                labelInterface.renamed = `label_${labelCounter++}`;
                            else
                                labelInterface.removed = true;
                        });

                        path.traverse({
                            LabeledStatement(labelPath) {
                                const labelInterface = (labelPath.node as NodeLabel)[LABEL];
                                if (!labelInterface)
                                    return;

                                if (labelInterface.removed)
                                    labelPath.replaceWith(labelPath.node.body);

                                if (labelInterface.renamed)
                                    labelPath.node.label.name = labelInterface.renamed;

                                labelInterface.paths.forEach(breakPath => {
                                    if (labelInterface.removed)
                                        breakPath.node.label = null;
                                    else if (labelInterface.renamed)
                                        breakPath.node.label = t.identifier(labelInterface.renamed);
                                });
                            },
                        });

                        if (allLabelInterfaces.length > 0)
                            context.targetCount -= allLabelInterfaces.length;
                    },
                };
            },
            pre: null,
            post: null,

            first: null,
            final: null,
        };
    },
} satisfies Transform;
