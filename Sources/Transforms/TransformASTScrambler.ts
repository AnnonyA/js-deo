import type { Transform } from "./Transform";
import * as t from "@babel/types";

export default {
    name: "ASTScrambler",
    preRunWebcrack: false,
    postRunWebcrack: true, // We transform minify with this
    contextedVisitor: context => {
        return {
            on(isEstimate) {
                const isNotEstimate = !isEstimate;

                return {
                    Program(path) {
                        let scramblerFunctionName: string = null;

                        path.traverse({
                            FunctionDeclaration(innerPath) {
                                const { node: { id: innerId, body: { body: innerBody } } } = innerPath;

                                if (innerBody.length !== 1)
                                    return;

                                const { 0: innerBodyFirstStatement } = innerBody;

                                if (!(
                                    t.isExpressionStatement(innerBodyFirstStatement) &&
                                    t.isAssignmentExpression(innerBodyFirstStatement.expression)
                                ))
                                    return;

                                const { expression: innerBodyFirstStatementExpression } = innerBodyFirstStatement;

                                if (!(
                                    t.isIdentifier(innerBodyFirstStatementExpression.left, { name: innerId.name }) &&
                                    t.isFunctionExpression(innerBodyFirstStatementExpression.right)
                                ))
                                    return;

                                scramblerFunctionName = innerId.name;

                                if (isNotEstimate) // We don't need scrambler function anymore
                                    innerPath.remove();

                                innerPath.stop();
                            },
                        });

                        if (!scramblerFunctionName) // If scrambler function name not detected, return
                            return;

                        if (isNotEstimate)
                            console.log("Detected scrambler function name:", scramblerFunctionName);

                        path.traverse({
                            ExpressionStatement(innerPath) {
                                const { node: { expression: innerExpression } } = innerPath;

                                if (!(
                                    t.isCallExpression(innerExpression) &&
                                    t.isIdentifier(innerExpression.callee, { name: scramblerFunctionName })
                                ))
                                    return;

                                if (isNotEstimate) {
                                    const { arguments: ownArguments } = innerExpression;

                                    const argumentsFlattened =
                                        ownArguments.map(
                                            argument =>
                                                t.isExpression(argument) &&
                                                t.expressionStatement(argument),
                                        );

                                    innerPath.replaceWithMultiple(argumentsFlattened);

                                    { // Log
                                        console.log(`Expanded ${argumentsFlattened.length} statements`);
                                    }

                                    context.targetCount--;
                                } else
                                    context.targetCount++;
                            },
                        });
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