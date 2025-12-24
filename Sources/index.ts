import * as parser from "@babel/parser";
import generate from "@babel/generator";
import { readFileSync, writeFileSync } from "fs";
import { transform } from "./Transforms/Transform";

(async function () {
    const obfuscatedCode = readFileSync("input/obfuscated.js").toString();

    const ast = parser.parse(obfuscatedCode);

    await transform(ast);

    console.log("Successfully deobfuscated, writing result to output/deobfuscated.js");

    const { code: generatedASTCode } = generate(ast);

    writeFileSync("output/deobfuscated.js", generatedASTCode);
})();