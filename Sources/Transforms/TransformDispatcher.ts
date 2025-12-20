import type { Transform } from "./Transform";
import * as t from "@babel/types";

export default {
    name: "Dispatcher",
    preRunWebcrack: false,
    postRunWebcrack: false,
    contextedVisitor: context => ({
        on(isEstimate) {
            const isNotEstimate = !isEstimate;

            return {
                FunctionDeclaration(path) {
                    const {
                        node,
                        node: {
                            params,
                            body: { body },
                        },
                    } = path;

                    if (params.length !== 4)
                        return;

                    if (body.length !== 5)
                        return;

                    const { 3: lastParam } = params;

                    if (!(
                        t.isAssignmentPattern(lastParam) &&
                        t.isIdentifier(lastParam.left) &&
                        t.isObjectExpression(lastParam.right) &&
                        lastParam.right.properties.every(
                            (property): property is t.ObjectProperty & {
                                key: t.Identifier;
                                value: t.NumericLiteral;
                            } =>
                                t.isObjectProperty(property) &&
                                t.isIdentifier(property.key) &&
                                t.isNumericLiteral(property.value),
                        )
                    ))
                        return;

                    const nameToFunctionLength = new Map<string, number>;

                    lastParam.right.properties.forEach(
                        ({ key: { name: keyName }, value: { value } }) =>
                            nameToFunctionLength.set(keyName, value),
                    );

                    const {
                        0: bodyFirstStatement,
                        1: bodySecondStatement,
                        2: bodyThirdStatement,
                        3: bodyFourthStatement,
                        4: bodyLastStatement,
                    } = body;

                    if (!(
                        t.isVariableDeclaration(bodyFirstStatement) &&
                        bodyFirstStatement.declarations.length === 1 &&
                        t.isIdentifier(bodyFirstStatement.declarations[0].id) &&
                        !bodyFirstStatement.declarations[0].init
                    ))
                        return;

                    const { declarations: { 0: { id: { name: outputVariableName } } } } = bodyFirstStatement;

                    if (!(
                        t.isVariableDeclaration(bodySecondStatement) &&
                        bodySecondStatement.declarations.length === 1 &&
                        t.isIdentifier(bodySecondStatement.declarations[0].id) &&
                        t.isObjectExpression(bodySecondStatement.declarations[0].init)
                    ))
                        return;

                    const { declarations: { 0: { init: { properties: bodySecondStatementDeclarationInitProperties } } } } =
                        bodySecondStatement;

                    if (!bodySecondStatementDeclarationInitProperties.every(
                        (property): property is t.ObjectProperty & {
                            key: t.Identifier;
                            value: t.FunctionExpression;
                        } =>
                            t.isObjectProperty(property) &&
                            t.isIdentifier(property.key) &&
                            t.isFunctionExpression(property.value),
                    ))
                        return;

                    const nameToFunctionExpression = new Map<string, t.FunctionExpression>;

                    bodySecondStatementDeclarationInitProperties.forEach(
                        ({ key: { name: keyName }, value }) =>
                            nameToFunctionExpression.set(keyName, value),
                    );

                    if (!(
                        t.isIfStatement(bodyThirdStatement) &&
                        t.isBinaryExpression(bodyThirdStatement.test) &&
                        !bodyThirdStatement.alternate &&
                        t.isBlockStatement(bodyThirdStatement.consequent) &&
                        bodyThirdStatement.consequent.body.length === 1
                    ))
                        return;

                    const { test: bodyThirdStatementTest } = bodyThirdStatement;

                    const flagInitalizePayload =
                        [bodyThirdStatementTest.left, bodyThirdStatementTest.right]
                            .find(t.isStringLiteral);
                    if (!flagInitalizePayload)
                        return;

                    const { value: flagInitializePayloadValue } = flagInitalizePayload;

                    if (!(
                        t.isIfStatement(bodyFourthStatement) &&
                        t.isBinaryExpression(bodyFourthStatement.test) &&
                        bodyFourthStatement.alternate &&
                        t.isBlockStatement(bodyFourthStatement.alternate) &&
                        t.isBlockStatement(bodyFourthStatement.consequent) &&
                        bodyFourthStatement.consequent.body.length === 2 &&
                        t.isFunctionDeclaration(bodyFourthStatement.consequent.body[0]) &&
                        t.isExpressionStatement(bodyFourthStatement.consequent.body[1]) &&
                        bodyFourthStatement.alternate.body.length === 1 &&
                        t.isExpressionStatement(bodyFourthStatement.alternate.body[0])
                    ))
                        return;

                    const { test: bodyFourthStatementTest } = bodyFourthStatement;

                    const flagCreateFunction =
                        [bodyFourthStatementTest.left, bodyFourthStatementTest.right]
                            .find(t.isStringLiteral);
                    if (!flagCreateFunction)
                        return;

                    const { value: flagCreateFunctionValue } = flagCreateFunction;

                    if (!(
                        t.isIfStatement(bodyLastStatement) &&
                        t.isBinaryExpression(bodyLastStatement.test) &&
                        bodyLastStatement.alternate &&
                        t.isBlockStatement(bodyLastStatement.alternate) &&
                        t.isBlockStatement(bodyLastStatement.consequent) &&
                        bodyLastStatement.consequent.body.length === 1 &&
                        t.isReturnStatement(bodyLastStatement.consequent.body[0]) &&
                        t.isObjectExpression(bodyLastStatement.consequent.body[0].argument) &&
                        bodyLastStatement.consequent.body[0].argument.properties.length === 1 &&
                        t.isObjectProperty(bodyLastStatement.consequent.body[0].argument.properties[0]) &&
                        t.isIdentifier(bodyLastStatement.consequent.body[0].argument.properties[0].key) &&
                        t.isIdentifier(bodyLastStatement.consequent.body[0].argument.properties[0].value, { name: outputVariableName }) &&
                        bodyLastStatement.alternate.body.length === 1 &&
                        t.isReturnStatement(bodyLastStatement.alternate.body[0]) &&
                        bodyLastStatement.alternate.body[0].argument &&
                        t.isIdentifier(bodyLastStatement.alternate.body[0].argument, { name: outputVariableName })
                    ))
                        return;

                    const { test: bodyLastStatementTest } = bodyLastStatement;

                    const returnAsObject =
                        [bodyLastStatementTest.left, bodyLastStatementTest.right]
                            .find(t.isStringLiteral);
                    if (!returnAsObject)
                        return;

                    const { value: returnAsObjectValue } = returnAsObject;

                    const {
                        consequent: {
                            body: {
                                0: {
                                    argument: {
                                        properties: {
                                            0: {
                                                key: { name: returnAsObjectPropertyName },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    } =
                        bodyLastStatement;

                    console.log(
                        outputVariableName,
                        nameToFunctionExpression,
                        flagInitializePayloadValue,
                        flagCreateFunctionValue,
                        returnAsObjectValue,
                        returnAsObjectPropertyName,
                    );
                },
            };
        },
        pre: null,
        post: null,

        first: null,
        final: null,
    }),
} satisfies Transform;