import * as parser from "@babel/parser";
import generate from "@babel/generator";
import { readFileSync, writeFileSync } from "fs";
import { webcrack } from "webcrack";
import { transform } from "./Transforms/Transform";

(async function () {
    const obfuscatedCode = readFileSync("input/obfuscated.js").toString();

    const ast = parser.parse(obfuscatedCode);

    await transform(ast);

    console.log("Successfully deobfuscated, writing result to output/deobfuscated.js");

    const { code: generatedAstCode } = generate(ast);

    // This will simplifies overall transformation result
    // https://github.com/MichaelXF/js-confuser/blob/master/src/transforms/preparation.ts
    const { code: webcrackedDefobfuscatedCode } = await webcrack(generatedAstCode);

    writeFileSync("output/deobfuscated.js", webcrackedDefobfuscatedCode);
})();