import generate from "@babel/generator";
import type { Transform } from "./Transform";
import * as t from "@babel/types";

const collectStringParts = (expression: t.Expression): Array<string> | null => {
    if (t.isStringLiteral(expression))
        return [expression.value];

    if (t.isBinaryExpression(expression) && expression.operator === "+") {
        const leftParts = collectStringParts(expression.left);
        if (!leftParts)
            return null;

        const rightParts = collectStringParts(expression.right);
        if (!rightParts)
            return null;

        return [...leftParts, ...rightParts];
    }

    return null;
};

export default {
    name: "StringSplitting",
    preRunWebcrack: false,
    postRunWebcrack: true,
    contextedVisitor: context => ({
        on(isEstimate) {
            const isNotEstimate = !isEstimate;

            return {
                BinaryExpression(path) {
                    const { node } = path;

                    if (node.operator !== "+")
                        return;

                    const parts = collectStringParts(node);
                    if (!parts || parts.length < 2)
                        return;

                    const merged = parts.join("");

                    if (isNotEstimate) {
                        const { code: beforeCode } = generate(node);
                        path.replaceWith(t.stringLiteral(merged));

                        console.log(`Merged split string: ${beforeCode} -> "${merged}"`);

                        context.targetCount--;
                    } else
                        context.targetCount++;
                },
            };
        },
        pre: null,
        post: null,

        first: null,
        final: null,
    }),
} satisfies Transform;
