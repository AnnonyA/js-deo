# Js-confuser deobfuscator

**This tool is under development**

Currently supported presets:
- [x] low
- [x] medium
- [ ] high

## Setup and Usage

### 1. Prerequisites

This tool requires **Node.js**. If you do not have it installed:

1. Download the **LTS version** from [nodejs.org](https://nodejs.org/).
2. Run the installer. This will automatically set up `npm` and `npx` on your system.

### 2. Installation

1. Download and unzip this project.
2. Open a terminal.
3. Navigate to the project directory:

```bash
cd path/to/your/unzipped-folder
```

4. Install the dependencies:

```bash
npm install
```

### 3. Deobfuscation

1. Place the obfuscated code into `input/obfuscated.js`.
2. Run the deobfuscator using the following command:

```bash
npx tsx Sources/index.ts
```

3. Once the process completes, the deobfuscated code will be available at `output/deobfuscated.js`.

---

## Limitations

* **Nested CFF:** Supported via recursive re-traversal of reconstructed blocks, with depth/step guards to avoid infinite loops.
* **Identifier renaming:** `renameVariables` / `renameGlobals` are irreversible, so randomized names may remain in medium/high outputs.
