# Js-confuser deobfuscator

**This tool is under development**

## Instruction

1. Download and unzip this project
2. Open a terminal in the unzipped directory, then paste and enter:

```bash
npm install
```

And then put the code to deobfuscate at `input/obfuscated.js`

And then run `Sources/index.ts` with:

```bash
npx tsx Sources/index.ts
```

You will see output like:

<details>

<summary>Terminal</summary>

```
Running transformation: Pack
  Unpacked the program: "function __p_DrWL_shuffle(arr,shift){for(var i=0;i..."
Running transformation: ASTScrambler
  Detected scrambler function name: __p_ORy8_ast
  Flattened 2 statements
  Flattened 2 statements
  Flattened 2 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 3 statements
  Flattened 2 statements
  Flattened 3 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 3 statements
  Flattened 3 statements
  Flattened 3 statements
  Flattened 3 statements
  Flattened 2 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 5 statements
  Flattened 3 statements
  Flattened 2 statements
  Flattened 2 statements
  Flattened 3 statements
  Flattened 2 statements
  Flattened 3 statements
  Flattened 3 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 5 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 4 statements
  Flattened 5 statements
  Flattened 3 statements
  Flattened 4 statements
  Flattened 2 statements
  Flattened 2 statements
Running transformation: ControlFlowFlattening
  Dispatch switch and loop found, eliminating deadcode...
  Simplified destructuring assignment to multiple assignments
  Simplified destructuring assignment to multiple assignments
  Constant holder: _0x06E34DC
  Constant holder internal property: _0xEC4E0A
  Constant holder with context property: _0xCAEE65
  Reached flow: -154 type: branch
  Branch information:
    if:
      Literal constants: {"_0x4D95894":127}
      Flow positions:    {"_0x98B04B8":-179,"_0x2680CC1":-226,"_0x2BCE28":215}
      Flow with context: _0xEC4E0A
    else:
      Literal constants: {"_0x4D95894":127}
      Flow positions:    {"_0x98B04B8":-179,"_0x2680CC1":64,"_0x2BCE28":215}
      Flow with context: _0xEC4E0A
  Linear flow with context changed: _0xEC4E0A
  Linear flow with context changed: _0xEC4E0A
  Reached flow: -190 type: linear
  Reached flow: 100 type: end
  Dispatch switch and loop found, eliminating deadcode...
  Simplified destructuring assignment to multiple assignments
  Simplified destructuring assignment to multiple assignments
  Simplified destructuring assignment to multiple assignments
  Constant holder: _0xCB19C99
  Constant holder internal property: _0x448575
  Constant holder with context property: _0x318BDD
  Linear flow with context changed: _0x448575
  Reached flow: -239 type: linear
  Fake linear flow with context change found, fallback to default: _0x07CE0E3 => _0xCB19C99
  Reached flow: 37 type: linear
  Loop condition met (false) at sum 67. Exiting flow
  Dispatch switch and loop found, eliminating deadcode...
  Simplified destructuring assignment to multiple assignments
  Simplified destructuring assignment to multiple assignments
  Constant holder: _0x3D96CA
  Constant holder internal property: _0x0244243
  Constant holder with context property: _0xA7A8565
  Reached flow: 2 type: end
Running transformation: Shuffle
  Detected shuffle function name: __p_DrWL_shuffle
  Unshuffled array, shift: 5
Running transformation: Shuffle (post)
  Removed unshuffle function: __p_DrWL_shuffle
Running transformation: DuplicateLiteralsRemoval
  Detected literals array: __p_5Noy_dlrArray
  Reversed 462 literals
Running transformation: VariableMasking
  Arguments member key -117 type name: _var_10
  Predicted function parameter length: 0
  Merged variable _var_10 into let
  Arguments member key 0 type name: _param_29
  Arguments member key 2 type name: _var_11
  Arguments member key 1 type name: _param_30
  Predicted function parameter length: 2
  Merged variable _var_11 into let
  Arguments member key 0 type name: _param_31
  Arguments member key -144 type name: _var_12
  Predicted function parameter length: 1
  Merged variable _var_12 into let
  Arguments member key 0 type name: _param_32
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_33
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_34
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_35
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_36
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_37
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_38
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_39
  Arguments member key 177 type name: _var_13
  Predicted function parameter length: 1
  Merged variable _var_13 into let
  Arguments member key 0 type name: _param_40
  Arguments member key a type name: _var_a2
  Predicted function parameter length: 1
  Merged variable _var_a2 into let
  Arguments member key 0 type name: _param_41
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_42
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_43
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_44
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_45
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_46
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_47
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_48
  Arguments member key 1 type name: _param_49
  Arguments member key 2 type name: _param_50
  Predicted function parameter length: 3
  Arguments member key 0 type name: _param_51
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_52
  Predicted function parameter length: 1
  Arguments member key 2 type name: _param_53
  Arguments member key 1 type name: _param_54
  Arguments member key 0 type name: _param_55
  Predicted function parameter length: 3
  Arguments member key 125 type name: _var_14
  Arguments member key -53 type name: _var_15
  Arguments member key d type name: _var_d2
  Predicted function parameter length: 0
  Merged variable _var_14 into let
  Merged variable _var_15 into let
  Merged variable _var_d2 into let
  Arguments member key 0 type name: _param_56
  Predicted function parameter length: 1
  Arguments member key -18 type name: _var_16
  Arguments member key -185 type name: _var_17
  Arguments member key e type name: _var_e2
  Arguments member key 47 type name: _var_18
  Arguments member key 4 type name: _var_19
  Predicted function parameter length: 0
  Merged variable _var_16 into let
  Merged variable _var_17 into let
  Merged variable _var_e2 into let
  Merged variable _var_18 into let
  Merged variable _var_19 into let
  Arguments member key 0 type name: _param_57
  Predicted function parameter length: 1
  Arguments member key -101 type name: _var_20
  Arguments member key 0 type name: _param_58
  Predicted function parameter length: 1
  Merged variable _var_20 into let
Running transformation: VariableMasking (post)
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 2
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 2
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 2
  Simplified arguments length set function call, length: 1
  Removed arguments length set function: __p_HcFX_fnLength
Running transformation: StringCompression
  Replaced __p_K0d6_SC(0) => "return this"
  Replaced __p_K0d6_SC(1) => "push"
  Replaced __p_K0d6_SC(2) => "__proto__"
  Replaced __p_K0d6_SC(3) => "constructor"
  Replaced __p_K0d6_SC(4) => "name"
  Replaced __p_K0d6_SC(5) => "length"
  Replaced __p_K0d6_SC(5) => "length"
  Replaced __p_K0d6_SC(6) => "undefined"
  Replaced __p_K0d6_SC(7) => "ZXJMLFg"
  Replaced __p_K0d6_SC(8) => "z4q2Dx"
  Replaced __p_K0d6_SC(9) => "X6CBQPA"
  Replaced __p_K0d6_SC(10) => "svOCBw"
  Replaced __p_K0d6_SC(11) => "CJ5JEGA"
  Replaced __p_K0d6_SC(12) => "TshX6I"
  Replaced __p_K0d6_SC(13) => "UIEMG2q"
  Replaced __p_K0d6_SC(14) => "irEx1K"
  Replaced __p_K0d6_SC(15) => "lM3TKx"
  Replaced __p_K0d6_SC(16) => "__d4Mv"
  Replaced __p_K0d6_SC(17) => "J5YQXF3"
  Replaced __p_K0d6_SC(18) => "ySVgr9"
  Replaced __p_K0d6_SC(19) => "ZFTCBIX"
  Replaced __p_K0d6_SC(20) => "nkbj2h"
  Replaced __p_K0d6_SC(21) => "xoNgtPe"
  Replaced __p_K0d6_SC(22) => "n0SRLN"
  Replaced __p_K0d6_SC(23) => "TEeJPW"
  Replaced __p_K0d6_SC(24) => "JZIVin"
  Replaced __p_K0d6_SC(25) => "smiipb"
  Replaced __p_K0d6_SC(26) => "c1DI8G"
  Replaced __p_K0d6_SC(27) => "vZpKKdb"
  Replaced __p_K0d6_SC(28) => "X6xi7J"
  Replaced __p_K0d6_SC(29) => "KtAVdT"
  Replaced __p_K0d6_SC(30) => "Cwd_sT"
  Replaced __p_K0d6_SC(31) => "pHw4V2"
  Replaced __p_K0d6_SC(32) => "SMchle"
  Replaced __p_K0d6_SC(33) => "aSFRtl"
  Replaced __p_K0d6_SC(34) => "uxEF_h"
  Replaced __p_K0d6_SC(35) => "SFQmuaB"
  Replaced __p_K0d6_SC(36) => "hwRLn5"
  Replaced __p_K0d6_SC(37) => "HfI7U9Y"
  Replaced __p_K0d6_SC(38) => "cIKqCUA"
  Replaced __p_K0d6_SC(39) => "0mNj13C"
  Replaced __p_K0d6_SC(40) => "SEhUOvW"
  Replaced __p_K0d6_SC(41) => "TdnU3p"
  Replaced __p_K0d6_SC(42) => "bVQoGpQ"
  Replaced __p_K0d6_SC(43) => "hAjWjx"
  Replaced __p_K0d6_SC(44) => "console"
  Replaced __p_K0d6_SC(45) => "AFTlV71"
  Replaced __p_K0d6_SC(46) => "CfoGsCH"
  Replaced __p_K0d6_SC(47) => "lKDJNe"
  Replaced __p_K0d6_SC(48) => "NpO54Q"
  Replaced __p_K0d6_SC(49) => "34N7Rn"
  Replaced __p_K0d6_SC(50) => "qR0NqT"
  Replaced __p_K0d6_SC(51) => "MrBzWCL"
  Replaced __p_K0d6_SC(52) => "jlBhDHt"
  Replaced __p_K0d6_SC(53) => "0QSJJx"
  Replaced __p_K0d6_SC(54) => "w4ddeu"
  Replaced __p_K0d6_SC(55) => "Hello "
  Replaced __p_K0d6_SC(43) => "hAjWjx"
  Replaced __p_K0d6_SC(56) => "log"
  Replaced __p_K0d6_SC(57) => "Internet User"
Running transformation: OpaquePredicates
  Simplified opaque if: "!("ZXJMLFg" in __p_2zym_dummyFunction)" => true
Running transformation: GlobalConcealing
  String to global: Map(23) {
    'X6CBQPA' => 'svOCBw',
    'CJ5JEGA' => 'TshX6I',
    'UIEMG2q' => 'irEx1K',
    'lM3TKx' => '__d4Mv',
    'J5YQXF3' => 'ySVgr9',
    'ZFTCBIX' => 'nkbj2h',
    'xoNgtPe' => 'n0SRLN',
    'TEeJPW' => 'JZIVin',
    'smiipb' => 'c1DI8G',
    'vZpKKdb' => 'X6xi7J',
    'KtAVdT' => 'Cwd_sT',
    'pHw4V2' => 'SMchle',
    'aSFRtl' => 'uxEF_h',
    'SFQmuaB' => 'hwRLn5',
    'HfI7U9Y' => 'cIKqCUA',
    '0mNj13C' => 'SEhUOvW',
    'TdnU3p' => 'bVQoGpQ',
    'hAjWjx' => 'console',
    'AFTlV71' => 'CfoGsCH',
    'lKDJNe' => 'NpO54Q',
    '34N7Rn' => 'qR0NqT',
    'MrBzWCL' => 'jlBhDHt',
    '0QSJJx' => 'w4ddeu'
  }
  Replaced string access __p_21mW_getGlobal("hAjWjx") => "console"
Running transformation: Calculator
  No targets found
Running transformation: DeadCode
  No targets found
Running transformation: DeadCode (post)
  Removed predicate function: __p_2zym_dummyFunction
Running transformation: Preparation
Successfully deobfuscated, writing result to output/deobfuscated.js
```

</details>

Open `output/deobfuscated.js`, and you will have the deobfuscated code.

## Limitation

1. This script unable to handle: "CFF in CFF", I will fix this later