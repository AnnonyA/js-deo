import type { Transform } from "./Transform";
import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";

const getExtractionParts = (name: string): { base: string; property: string } | null => {
    const lastUnderscoreIndex = name.lastIndexOf("_");
    if (lastUnderscoreIndex <= 0 || lastUnderscoreIndex === name.length - 1)
        return null;

    return {
        base: name.slice(0, lastUnderscoreIndex),
        property: name.slice(lastUnderscoreIndex + 1),
    };
};

const buildMemberExpression = (objectName: string, propertyName: string) => {
    if (t.isValidIdentifier(propertyName))
        return t.memberExpression(t.identifier(objectName), t.identifier(propertyName));

    return t.memberExpression(
        t.identifier(objectName),
        t.stringLiteral(propertyName),
        true,
    );
};

export default {
    name: "ObjectExtraction",
    preRunWebcrack: false,
    postRunWebcrack: true,
    contextedVisitor: context => ({
        on(isEstimate) {
            const isNotEstimate = !isEstimate;

            const rebuildExtractedObjects = (bodyPaths: Array<NodePath<t.Statement>>, scope: NodePath["scope"]) => {
                for (let i = 0; i < bodyPaths.length; i++) {
                    const statementPath = bodyPaths[i];

                    if (!statementPath.isVariableDeclaration())
                        continue;

                    const { declarations, kind } = statementPath.node;
                    if (declarations.length !== 1)
                        continue;

                    const declaratorPath = statementPath.get("declarations.0") as NodePath<t.VariableDeclarator>;
                    const idPath = declaratorPath.get("id");
                    const initPath = declaratorPath.get("init");

                    if (!idPath.isIdentifier() || !initPath.isExpression())
                        continue;

                    const extractionParts = getExtractionParts(idPath.node.name);
                    if (!extractionParts)
                        continue;

                    const { base } = extractionParts;
                    if (scope.getBinding(base))
                        continue;

                    const groupPaths: Array<NodePath<t.VariableDeclarator>> = [declaratorPath];
                    const groupNames: Array<{ variable: string; property: string }> = [{
                        variable: idPath.node.name,
                        property: extractionParts.property,
                    }];

                    let j = i + 1;
                    for (; j < bodyPaths.length; j++) {
                        const nextStatementPath = bodyPaths[j];

                        if (!nextStatementPath.isVariableDeclaration())
                            break;

                        if (nextStatementPath.node.kind !== kind)
                            break;

                        const nextDeclarationPath = nextStatementPath.get("declarations.0") as NodePath<t.VariableDeclarator>;
                        if (nextStatementPath.node.declarations.length !== 1)
                            break;

                        const nextIdPath = nextDeclarationPath.get("id");
                        const nextInitPath = nextDeclarationPath.get("init");

                        if (!nextIdPath.isIdentifier() || !nextInitPath.isExpression())
                            break;

                        const nextParts = getExtractionParts(nextIdPath.node.name);
                        if (!nextParts || nextParts.base !== base)
                            break;

                        groupPaths.push(nextDeclarationPath);
                        groupNames.push({
                            variable: nextIdPath.node.name,
                            property: nextParts.property,
                        });
                    }

                    if (groupPaths.length < 2)
                        continue;

                    const bindings = groupNames.map(({ variable }) => scope.getBinding(variable));
                    if (bindings.some(binding => !binding || binding.constantViolations.length > 0))
                        continue;

                    const referenceCount = bindings.reduce((total, binding) => total + binding.referencePaths.length, 0);
                    if (referenceCount === 0)
                        continue;

                    if (!isNotEstimate) {
                        context.targetCount += referenceCount + 1;
                        i = j - 1;
                        continue;
                    }

                    bindings.forEach((binding, index) => {
                        const { property } = groupNames[index];

                        binding.referencePaths.forEach(referencePath => {
                            referencePath.replaceWith(buildMemberExpression(base, property));

                            context.targetCount--;
                        });
                    });

                    const objectProperties = groupPaths.map((declaratorPath, index) => {
                        const { property } = groupNames[index];
                        const keyNode = t.isValidIdentifier(property)
                            ? t.identifier(property)
                            : t.stringLiteral(property);

                        return t.objectProperty(keyNode, declaratorPath.node.init as t.Expression);
                    });

                    const objectDeclaration = t.variableDeclaration(
                        kind,
                        [t.variableDeclarator(
                            t.identifier(base),
                            t.objectExpression(objectProperties),
                        )],
                    );

                    statementPath.replaceWith(objectDeclaration);

                    for (let removeIndex = j - 1; removeIndex > i; removeIndex--)
                        bodyPaths[removeIndex].remove();

                    scope.crawl();

                    console.log("Reconstructed extracted object:", base);

                    context.targetCount--;

                    i = j - 1;
                }
            };

            return {
                Program(path) {
                    rebuildExtractedObjects(path.get("body") as Array<NodePath<t.Statement>>, path.scope);
                },
                BlockStatement(path) {
                    rebuildExtractedObjects(path.get("body") as Array<NodePath<t.Statement>>, path.scope);
                },
            };
        },
        pre: null,
        post: null,

        first: null,
        final: null,
    }),
} satisfies Transform;
