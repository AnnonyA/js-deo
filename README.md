# Js-confuser deobfuscator

**This tool is under development**

Currently supported presets:
- [x] low
- [ ] medium
- [ ] high

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
Running transform: Pack
  No targets found
Running transform: ASTScrambler
  Detected scrambler function name: __p_gff6_ast
  Expanded 4 statements
  Expanded 2 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 2 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 4 statements
  Expanded 5 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 4 statements
  Expanded 2 statements
  Expanded 4 statements
  Expanded 5 statements
  Expanded 2 statements
  Expanded 3 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
  Expanded 2 statements
  Expanded 8 statements
  Expanded 3 statements
  Expanded 3 statements
Running transform: ControlFlowFlattening
  No targets found
Running transform: Shuffle
  No targets found
Running transform: Shuffle (Post)
  No targets found
Running transform: DuplicateLiteralsRemoval
  Detected literals array: __p_sQNF_dlrArray
  Reversed 1409 literals
  Removed literals array: __p_sQNF_dlrArray
Running transform: VariableMasking
  Arguments member key 75 type name: _var_69
  Predicted function parameter length: 0
  Merged variable _var_69 into let
  Arguments member key 0 type name: _param_50
  Arguments member key a type name: _var_a0
  Arguments member key 1 type name: _param_51
  Predicted function parameter length: 2
  Merged variable _var_a0 into let
  Arguments member key 0 type name: _param_52
  Arguments member key a type name: _var_a1
  Predicted function parameter length: 1
  Merged variable _var_a1 into let
  Arguments member key 0 type name: _param_53
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_54
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_55
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_56
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_57
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_58
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_59
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_60
  Arguments member key a type name: _var_a10
  Predicted function parameter length: 1
  Merged variable _var_a10 into let
  Arguments member key 0 type name: _param_61
  Arguments member key a type name: _var_a11
  Predicted function parameter length: 1
  Merged variable _var_a11 into let
  Arguments member key 0 type name: _param_62
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_63
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_64
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_65
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_66
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_67
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_68
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_69
  Arguments member key 1 type name: _param_70
  Arguments member key 2 type name: _param_71
  Predicted function parameter length: 3
  Arguments member key 0 type name: _param_72
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_73
  Predicted function parameter length: 1
  Arguments member key 2 type name: _param_74
  Arguments member key 1 type name: _param_75
  Arguments member key 0 type name: _param_76
  Predicted function parameter length: 3
  Arguments member key a type name: _var_a12
  Arguments member key 1 type name: _var_70
  Arguments member key 165 type name: _var_71
  Predicted function parameter length: 0
  Merged variable _var_a12 into let
  Merged variable _var_70 into let
  Merged variable _var_71 into let
  Arguments member key 0 type name: _param_77
  Predicted function parameter length: 1
  Arguments member key 1 type name: _var_72
  Arguments member key 99 type name: _var_73
  Arguments member key 0 type name: _param_78
  Arguments member key c type name: _var_c6
  Arguments member key d type name: _var_d5
  Arguments member key 5 type name: _var_74
  Arguments member key -181 type name: _var_75
  Arguments member key -205 type name: _var_76
  Arguments member key 220 type name: _var_77
  Arguments member key i type name: _var_i5
  Predicted function parameter length: 1
  Merged variable _var_72 into let
  Merged variable _var_73 into let
  Merged variable _var_c6 into let
  Merged variable _var_d5 into let
  Merged variable _var_74 into let
  Merged variable _var_75 into let
  Merged variable _var_76 into let
  Merged variable _var_77 into let
  Merged variable _var_i5 into let
  Arguments member key 0 type name: _param_79
  Predicted function parameter length: 1
  Arguments member key a type name: _var_a13
  Arguments member key 1 type name: _var_78
  Arguments member key 2 type name: _var_79
  Arguments member key 247 type name: _var_80
  Arguments member key 112 type name: _var_81
  Predicted function parameter length: 0
  Merged variable _var_a13 into let
  Merged variable _var_78 into let
  Merged variable _var_79 into let
  Merged variable _var_80 into let
  Merged variable _var_81 into let
  Arguments member key -160 type name: _var_82
  Arguments member key c type name: _var_c7
  Arguments member key d type name: _var_d6
  Predicted function parameter length: 0
  Merged variable _var_82 into let
  Merged variable _var_c7 into let
  Merged variable _var_d6 into let
  Arguments member key a type name: _var_a14
  Arguments member key -43 type name: _var_83
  Arguments member key 3 type name: _var_84
  Arguments member key 0 type name: _param_80
  Arguments member key 4 type name: _var_85
  Predicted function parameter length: 1
  Merged variable _var_a14 into let
  Merged variable _var_83 into let
  Merged variable _var_84 into let
  Merged variable _var_85 into let
  Arguments member key 0 type name: _param_81
  Predicted function parameter length: 1
  Arguments member key -1 type name: _var_86
  Arguments member key b type name: _var_b6
  Arguments member key c type name: _var_c8
  Arguments member key d type name: _var_d7
  Arguments member key -187 type name: _var_87
  Predicted function parameter length: 0
  Merged variable _var_86 into let
  Merged variable _var_b6 into let
  Merged variable _var_c8 into let
  Merged variable _var_d7 into let
  Merged variable _var_87 into let
  Arguments member key -182 type name: _var_88
  Arguments member key 2 type name: _var_89
  Arguments member key 0 type name: _param_82
  Arguments member key -193 type name: _var_90
  Arguments member key 4 type name: _var_91
  Arguments member key e type name: _var_e8
  Arguments member key f type name: _var_f4
  Arguments member key g type name: _var_g5
  Arguments member key h type name: _var_h5
  Arguments member key 9 type name: _var_92
  Predicted function parameter length: 1
  Merged variable _var_88 into let
  Merged variable _var_89 into let
  Merged variable _var_90 into let
  Merged variable _var_91 into let
  Merged variable _var_e8 into let
  Merged variable _var_f4 into let
  Merged variable _var_g5 into let
  Merged variable _var_h5 into let
  Merged variable _var_92 into let
  Arguments member key 0 type name: _param_83
  Predicted function parameter length: 1
  Predicted function parameter length: 0
  Arguments member key 1 type name: _var_93
  Arguments member key 220 type name: _var_94
  Arguments member key 0 type name: _param_84
  Arguments member key 161 type name: _var_95
  Arguments member key 11 type name: _var_96
  Arguments member key e type name: _var_e9
  Arguments member key -173 type name: _var_97
  Arguments member key 7 type name: _var_98
  Arguments member key -71 type name: _var_99
  Arguments member key i type name: _var_i6
  Predicted function parameter length: 1
  Merged variable _var_93 into let
  Merged variable _var_94 into let
  Merged variable _var_95 into let
  Merged variable _var_96 into let
  Merged variable _var_e9 into let
  Merged variable _var_97 into let
  Merged variable _var_98 into let
  Merged variable _var_99 into let
  Merged variable _var_i6 into let
  Arguments member key 0 type name: _param_85
  Predicted function parameter length: 1
  Arguments member key 103 type name: _var_100
  Arguments member key b type name: _var_b7
  Arguments member key 0 type name: _param_86
  Arguments member key -19 type name: _var_101
  Arguments member key 4 type name: _var_102
  Arguments member key e type name: _var_e0
  Arguments member key f type name: _var_f5
  Arguments member key 7 type name: _var_103
  Arguments member key 8 type name: _var_104
  Arguments member key -56 type name: _var_105
  Predicted function parameter length: 1
  Merged variable _var_100 into let
  Merged variable _var_b7 into let
  Merged variable _var_101 into let
  Merged variable _var_102 into let
  Merged variable _var_e0 into let
  Merged variable _var_f5 into let
  Merged variable _var_103 into let
  Merged variable _var_104 into let
  Merged variable _var_105 into let
  Arguments member key 0 type name: _param_87
  Predicted function parameter length: 1
  Arguments member key a type name: _var_a15
  Arguments member key b type name: _var_b8
  Arguments member key 0 type name: _param_88
  Arguments member key c type name: _var_c9
  Arguments member key 4 type name: _var_106
  Arguments member key e type name: _var_e1
  Arguments member key 160 type name: _var_107
  Arguments member key 7 type name: _var_108
  Arguments member key 8 type name: _var_109
  Arguments member key i type name: _var_i7
  Predicted function parameter length: 1
  Merged variable _var_a15 into let
  Merged variable _var_b8 into let
  Merged variable _var_c9 into let
  Merged variable _var_106 into let
  Merged variable _var_e1 into let
  Merged variable _var_107 into let
  Merged variable _var_108 into let
  Merged variable _var_109 into let
  Merged variable _var_i7 into let
  Arguments member key 0 type name: _param_89
  Predicted function parameter length: 1
  Arguments member key 1 type name: _var_110
  Arguments member key 2 type name: _var_111
  Arguments member key 0 type name: _param_90
  Arguments member key c type name: _var_c0
  Arguments member key -77 type name: _var_112
  Arguments member key 5 type name: _var_113
  Arguments member key 6 type name: _var_114
  Arguments member key 7 type name: _var_115
  Arguments member key h type name: _var_h6
  Arguments member key 97 type name: _var_116
  Predicted function parameter length: 1
  Merged variable _var_110 into let
  Merged variable _var_111 into let
  Merged variable _var_c0 into let
  Merged variable _var_112 into let
  Merged variable _var_113 into let
  Merged variable _var_114 into let
  Merged variable _var_115 into let
  Merged variable _var_h6 into let
  Merged variable _var_116 into let
  Arguments member key 0 type name: _param_91
  Predicted function parameter length: 1
  Arguments member key 0 type name: _param_92
  Predicted function parameter length: 1
  Arguments member key 1 type name: _var_117
  Arguments member key b type name: _var_b9
  Arguments member key 0 type name: _param_93
  Arguments member key 3 type name: _var_118
  Arguments member key 4 type name: _var_119
  Arguments member key e type name: _var_e10
  Arguments member key f type name: _var_f6
  Arguments member key g type name: _var_g6
  Arguments member key h type name: _var_h7
  Arguments member key -237 type name: _var_120
  Predicted function parameter length: 1
  Merged variable _var_117 into let
  Merged variable _var_b9 into let
  Merged variable _var_118 into let
  Merged variable _var_119 into let
  Merged variable _var_e10 into let
  Merged variable _var_f6 into let
  Merged variable _var_g6 into let
  Merged variable _var_h7 into let
  Merged variable _var_120 into let
  Arguments member key 0 type name: _param_94
  Predicted function parameter length: 1
  Arguments member key 1 type name: _var_121
  Arguments member key b type name: _var_b0
  Arguments member key 0 type name: _param_95
  Arguments member key -54 type name: _var_122
  Arguments member key 4 type name: _var_123
  Arguments member key e type name: _var_e11
  Arguments member key -25 type name: _var_124
  Arguments member key -118 type name: _var_125
  Arguments member key h type name: _var_h8
  Arguments member key i type name: _var_i8
  Predicted function parameter length: 1
  Merged variable _var_121 into let
  Merged variable _var_b0 into let
  Merged variable _var_122 into let
  Merged variable _var_123 into let
  Merged variable _var_e11 into let
  Merged variable _var_124 into let
  Merged variable _var_125 into let
  Merged variable _var_h8 into let
  Merged variable _var_i8 into let
  Arguments member key 0 type name: _param_96
  Predicted function parameter length: 1
  Arguments member key -114 type name: _var_126
  Arguments member key 2 type name: _var_127
  Arguments member key 0 type name: _param_97
  Arguments member key 33 type name: _var_128
  Arguments member key d type name: _var_d8
  Arguments member key e type name: _var_e12
  Arguments member key -175 type name: _var_129
  Arguments member key g type name: _var_g7
  Arguments member key 102 type name: _var_130
  Arguments member key -191 type name: _var_131
  Predicted function parameter length: 1
  Merged variable _var_126 into let
  Merged variable _var_127 into let
  Merged variable _var_128 into let
  Merged variable _var_d8 into let
  Merged variable _var_e12 into let
  Merged variable _var_129 into let
  Merged variable _var_g7 into let
  Merged variable _var_130 into let
  Merged variable _var_131 into let
  Arguments member key 0 type name: _param_98
  Predicted function parameter length: 1
  Normal spread function detected, returning
  Arguments member key a type name: _var_a16
  Arguments member key 212 type name: _var_132
  Arguments member key 0 type name: _param_99
  Arguments member key 109 type name: _var_133
  Arguments member key 238 type name: _var_134
  Arguments member key -167 type name: _var_135
  Arguments member key 6 type name: _var_136
  Arguments member key g type name: _var_g8
  Arguments member key 8 type name: _var_137
  Arguments member key 9 type name: _var_138
  Predicted function parameter length: 1
  Merged variable _var_a16 into let
  Merged variable _var_132 into let
  Merged variable _var_133 into let
  Merged variable _var_134 into let
  Merged variable _var_135 into let
  Merged variable _var_136 into let
  Merged variable _var_g8 into let
  Merged variable _var_137 into let
  Merged variable _var_138 into let
  Arguments member key 0 type name: _param_100
  Predicted function parameter length: 1
Running transform: VariableMasking (Post)
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
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
  Simplified arguments length set function call, length: 1
  Simplified arguments length set function call, length: 1
  Removed arguments length set function: __p_6JJG_fnLength
Running transform: StringCompression
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(1) => "nCYGG8wO_]FQ1qPj~@v!H*@%j]Qi/3"
  Replaced __p_fq0m_SC(2) => "y/]MU9,/J=tc>4v"
  Replaced __p_fq0m_SC(3) => "y1:oa$*Qw)gC<r54j"qieS^%FuPF<PPQI/jLrY7"
  Replaced __p_fq0m_SC(4) => "$Dy"T<KM@AXURO[Q+!C@D]m=5A:,]#"
  Replaced __p_fq0m_SC(5) => "D/N^A:?KFukHU`"
  Replaced __p_fq0m_SC(6) => "qj=@3_J+"
  Replaced __p_fq0m_SC(7) => "J41U%yjQ;)5/.r7j^B#oEt{Q.0$Wh1yNH],5v!G[8g#6M(;A}OTUV}sdmq"
  Replaced __p_fq0m_SC(8) => "N@+lRcN0ju"
  Replaced __p_fq0m_SC(9) => "F!"BmE.$+9Kr88jXmYTG=Ua3"
  Replaced __p_fq0m_SC(10) => "Rt`ozrk]+DFkeEi>~dTGmSaQEVOL#`"
  Replaced __p_fq0m_SC(11) => "fcQzNfAAOq)<<Pq"
  Replaced __p_fq0m_SC(12) => "!tachNc"uT,c^3)l1qja;(!Z3DyrXh8/24MURrvY)v^``ok4[CBG"
  Replaced __p_fq0m_SC(13) => "ZF@i#iKMDyzcqq(/A%ID"
  Replaced __p_fq0m_SC(14) => "i{Y!:PnMs=?Yq_CI81ez;6gQpq@UpqNOSt$!b&Ud5vRKTv"dr@/U~"
  Replaced __p_fq0m_SC(15) => "^4iDAo3gekb<1yKd#BaMA"
  Replaced __p_fq0m_SC(16) => "Z@4UNt>+"
  Replaced __p_fq0m_SC(17) => "KVPWG[sUM0MhEr5WL7"
  Replaced __p_fq0m_SC(18) => "KO<S^!J9EY;J}$+/+wVMU"auJJp=TOUXr;7@a$HG(Jl=+"
  Replaced __p_fq0m_SC(19) => "~15^FJPKckj<M?9=hp&~T8<BHJu^N1p~n"h@,idjXTw=iq]>mT/D]87"
  Replaced __p_fq0m_SC(20) => "zkSYKNX0N0W{C:>Ig!3L}o5v3u{?8`*$j4#BSCq0}@.r(#"
  Replaced __p_fq0m_SC(21) => "Zp36i%5+En"V0lmh@@@XOJm$@A"
  Replaced __p_fq0m_SC(22) => "t`SY6!5.RT_,TqnN(=3"HC3j<u"
  Replaced __p_fq0m_SC(23) => "8k`L2920,A"
  Replaced __p_fq0m_SC(24) => "Z8T#7NLQ;VGt=(}d&c_M[[Xj<YSaRO[QK{LM"
  Replaced __p_fq0m_SC(25) => "d~6g}[Qg6ThQzCk4>=j6z4&/A00gul9B2{[!XU6GG0:o>hDI~!qG"
  Replaced __p_fq0m_SC(26) => "l@rGbUABDTYK(8h~%]OMxE6[;Jv<Rv/dtW*W&Si9EwqtN19B`uPW:;0uq)yV+"
  Replaced __p_fq0m_SC(27) => "va&12(j0$D#/&KE~]D9z!!=Y<gkrV8D"
  Replaced __p_fq0m_SC(28) => "Wu]"AT!QuqxJM4nQf4Izoz=>=9J$zL($@"KMdc0uSY1X)NyXg/lLv"
  Replaced __p_fq0m_SC(29) => "eIf#o6O6#"
  Replaced __p_fq0m_SC(30) => "Q!"g4$dj_u&]yO^{I=WD"
  Replaced __p_fq0m_SC(31) => ""C^lLC?yKw}HNEJ$S4*1Q]sU4yBLCL,W2~%G$$FZ~kQluEDAFFFlrFgUM^"
  Replaced __p_fq0m_SC(32) => "d`xlE(Nu&0i#Nl8Bw+"
  Replaced __p_fq0m_SC(33) => "1tmgi?BB3],cllsbb"}!CI4ARk?wAotWV;la(}oZ]k]$v}%~"
  Replaced __p_fq0m_SC(34) => "1`=@TIeKH=lG(N#WL=#o]LI92VlL:JG4j~Wz)[nymk7t58@>od.z38K%G"
  Replaced __p_fq0m_SC(35) => "C`)ii"&G`"
  Replaced __p_fq0m_SC(36) => "E"SW9!wEn@Sa<3$O6T>l]}N3"
  Replaced __p_fq0m_SC(37) => "^zEDsxi6DkLr7"
  Replaced __p_fq0m_SC(38) => "X8bS}:R0byP"
  Replaced __p_fq0m_SC(39) => "`8^LPtMR(jsYgI;lx`Ra>9o%yTYON1g"
  Replaced __p_fq0m_SC(40) => "t`%X:1wvlJcHeE1W"
  Replaced __p_fq0m_SC(41) => "VCI@h_[9g{&9p3e>5]>@?SCdauVKKL44<W{BF(7"
  Replaced __p_fq0m_SC(42) => "]{IzST?u,8)S(CxWI`ZGC">+"
  Replaced __p_fq0m_SC(43) => "r=9S1F~gL{e8.r<lw1t^l:x$B)fY<P;lZDIzrL./>qnqX1,4k7"
  Replaced __p_fq0m_SC(44) => ":4#5bU~3JqW^F52AMzKzPKiBG{dW&##ZA9(ijfVthup"
  Replaced __p_fq0m_SC(45) => "M@+Z@LT3"
  Replaced __p_fq0m_SC(46) => ","H!lfjy$]#ttC[A;d`"
  Replaced __p_fq0m_SC(47) => "I@%SSN6[k]A6N#/Bl/9ztL}*gyA4mQ%A#B`"
  Replaced __p_fq0m_SC(48) => "3$`a1<9>RJES+"
  Replaced __p_fq0m_SC(49) => ":qBG9y!ZJ=EQK1X/,R>@L_?Q8Ya<*rvII1`"
  Replaced __p_fq0m_SC(50) => "N@alP4"/=D<#X`"
  Replaced __p_fq0m_SC(51) => "@t`a"rLQ(Jj6<wjl!k+@b[sdfg`vXldWLTnB.PI+A@{`_KTB<c+"u"
  Replaced __p_fq0m_SC(52) => "7#rGV?*%BqVG^(BN@`dZv[g%Ej[rEy0j"
  Replaced __p_fq0m_SC(53) => "V`?ax1[>SgyJg`y/]{`BLFiv9YeaJq5Z"
  Replaced __p_fq0m_SC(54) => "";7xaU7rHk~`+"
  Replaced __p_fq0m_SC(55) => "J{Aa{fRU=wd"
  Replaced __p_fq0m_SC(56) => "B@#BMN"$SHRJIy9=bt^BPVz>_ufONl<~#zY^3NEE;)q/1yCIVtu^d@@U,D"
  Replaced __p_fq0m_SC(57) => "p~ecq]j3aw"n+"
  Replaced __p_fq0m_SC(58) => "A8wxqTnuuk&!Oz`p{+"
  Replaced __p_fq0m_SC(59) => "8d~LePlGgv#E8l[4kC"Y@IB>~{73]C%~SW6Y8%Ny[vMyUwsX)k/ZJL9B5"
  Replaced __p_fq0m_SC(60) => "r{,5y}.GIvZk+Nhd8~m"^]9"Tg]G&Q]Ba`)W*]1[W)_w4CuPlF3"
  Replaced __p_fq0m_SC(61) => ".`MGd@=vU@g6Go=d<W9S~Pj*PyYS{`cW~8,B{"
  Replaced __p_fq0m_SC(62) => "X{BWATH+lT$QClu"
  Replaced __p_fq0m_SC(63) => "]@2^^Sau0Y0%APtj<"s"]9#Rhj"
  Replaced __p_fq0m_SC(64) => "y45GnLMgJHZSXL`ZLW@S6o@3"
  Replaced __p_fq0m_SC(65) => "Zdf#c<<"x@5{>L@Feg<#8r"E(Y~i%(oF"C?ae]AYA]18iPv"
  Replaced __p_fq0m_SC(66) => "XkgDy%m/VvZLW?]$}q8YH*Sy&v@"
  Replaced __p_fq0m_SC(67) => "t!GsA*P="
  Replaced __p_fq0m_SC(68) => "VV$M!d+"
  Replaced __p_fq0m_SC(69) => "X8v^~"
  Replaced __p_fq0m_SC(70) => "g%.h4vbl"
  Replaced __p_fq0m_SC(71) => "5%4k"
  Replaced __p_fq0m_SC(72) => "]op+zzIl"
  Replaced __p_fq0m_SC(73) => "XG}+o.T"
  Replaced __p_fq0m_SC(74) => "lKe2V"
  Replaced __p_fq0m_SC(75) => "b]m;?aO8"
  Replaced __p_fq0m_SC(76) => "@%qHEX{F"
  Replaced __p_fq0m_SC(77) => "j9&O"
  Replaced __p_fq0m_SC(78) => "Ku~BFa23"
  Replaced __p_fq0m_SC(79) => "/r[%u]yF"
  Replaced __p_fq0m_SC(80) => "@siCa]jF"
  Replaced __p_fq0m_SC(81) => "mpX6`&WG"
  Replaced __p_fq0m_SC(82) => "[s?Iuy9G"
  Replaced __p_fq0m_SC(83) => ":)JMLt+F"
  Replaced __p_fq0m_SC(84) => "PeJHmqjF"
  Replaced __p_fq0m_SC(85) => "`}UJ"EJG"
  Replaced __p_fq0m_SC(86) => "LT<fq?qG"
  Replaced __p_fq0m_SC(87) => "zLlcQZNF"
  Replaced __p_fq0m_SC(88) => "i&kj.>1G"
  Replaced __p_fq0m_SC(89) => "T.sI)qiF"
  Replaced __p_fq0m_SC(90) => "smGcwN1G"
  Replaced __p_fq0m_SC(91) => "ioBCly2F"
  Replaced __p_fq0m_SC(92) => "$>2H}NyF"
  Replaced __p_fq0m_SC(93) => "W2fL:};G"
  Replaced __p_fq0m_SC(94) => "@2Rk6N:F"
  Replaced __p_fq0m_SC(95) => "E<a8n>cG"
  Replaced __p_fq0m_SC(96) => "#DE%#{*G"
  Replaced __p_fq0m_SC(97) => "g>[%kyfF"
  Replaced __p_fq0m_SC(98) => ">*g*#1aG"
  Replaced __p_fq0m_SC(99) => "Wsb8HojF"
  Replaced __p_fq0m_SC(100) => "E`O*.1OG"
  Replaced __p_fq0m_SC(101) => "KLOCa%mG"
  Replaced __p_fq0m_SC(102) => "SkqHpV(G"
  Replaced __p_fq0m_SC(103) => "wkKS@&:F"
  Replaced __p_fq0m_SC(104) => "hIB*?EfF"
  Replaced __p_fq0m_SC(105) => "pw18!rOG"
  Replaced __p_fq0m_SC(106) => "7s}siy[F"
  Replaced __p_fq0m_SC(107) => "p8QwS>iF"
  Replaced __p_fq0m_SC(108) => "cKF*u?PF"
  Replaced __p_fq0m_SC(109) => "pmljm6NF"
  Replaced __p_fq0m_SC(110) => "pLI%podG"
  Replaced __p_fq0m_SC(111) => "q*"8J1qG"
  Replaced __p_fq0m_SC(112) => "kMlL_}[F"
  Replaced __p_fq0m_SC(113) => "v&m=Ry]F"
  Replaced __p_fq0m_SC(114) => "OLnf7M)F"
  Replaced __p_fq0m_SC(115) => "2Y`w`E<G"
  Replaced __p_fq0m_SC(116) => "trM8i1dG"
  Replaced __p_fq0m_SC(117) => "jT4J6n*G"
  Replaced __p_fq0m_SC(118) => "#&:*6kEG"
  Replaced __p_fq0m_SC(119) => "&LkM=Z7F"
  Replaced __p_fq0m_SC(120) => "4*@}pDxF"
  Replaced __p_fq0m_SC(121) => "D.n9Z]1G"
  Replaced __p_fq0m_SC(122) => "Khmgw$bG"
  Replaced __p_fq0m_SC(123) => "VMhfNn$F"
  Replaced __p_fq0m_SC(124) => "JDZ8Jn;G"
  Replaced __p_fq0m_SC(125) => "ee*;},Im"
  Replaced __p_fq0m_SC(126) => "pQnL;8*m"
  Replaced __p_fq0m_SC(127) => "VeI,x2sm"
  Replaced __p_fq0m_SC(128) => "SMCPP8G"
  Replaced __p_fq0m_SC(129) => "s+t5Y>ym"
  Replaced __p_fq0m_SC(130) => "~QTNIZIm"
  Replaced __p_fq0m_SC(131) => "fqCDxf07"
  Replaced __p_fq0m_SC(132) => "8#>U=lU9"
  Replaced __p_fq0m_SC(133) => "YTUX"
  Replaced __p_fq0m_SC(134) => "(FU!efD+"
  Replaced __p_fq0m_SC(135) => "Mnt3gzAf"
  Replaced __p_fq0m_SC(136) => "=d,a>KP3"
  Replaced __p_fq0m_SC(137) => "F]aO^_{3"
  Replaced __p_fq0m_SC(138) => "return this"
  Replaced __p_fq0m_SC(139) => "push"
  Replaced __p_fq0m_SC(140) => "__proto__"
  Replaced __p_fq0m_SC(141) => "constructor"
  Replaced __p_fq0m_SC(142) => "name"
  Replaced __p_fq0m_SC(143) => "length"
  Replaced __p_fq0m_SC(143) => "length"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(144) => "TextDecoder"
  Replaced __p_fq0m_SC(145) => "Uint8Array"
  Replaced __p_fq0m_SC(146) => "Buffer"
  Replaced __p_fq0m_SC(147) => "String"
  Replaced __p_fq0m_SC(148) => "Array"
  Replaced __p_fq0m_SC(149) => "fromCodePoint"
  Replaced __p_fq0m_SC(150) => "fromCharCode"
  Replaced __p_fq0m_SC(143) => "length"
  Replaced __p_fq0m_SC(143) => "length"
  Replaced __p_fq0m_SC(149) => "fromCodePoint"
  Replaced __p_fq0m_SC(139) => "push"
  Replaced __p_fq0m_SC(151) => "join"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(152) => "decode"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(153) => "from"
  Replaced __p_fq0m_SC(154) => "toString"
  Replaced __p_fq0m_SC(155) => "utf-8"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
  Replaced __p_fq0m_SC(0) => "undefined"
Running transform: StringConcealing
  Found table: "7+3`#5MGgD^Huvqwh=jA{)b/QO~lXBZWaxF$N4PId>Rp2;%ECzo"UY@iV]yJ8(T90kn,t[r1Lc!6S|f<K_?:}&*.ems"
  Index 90 decoded: "push"
  Index 155 decoded: "Hello "
  Index 158 decoded: "SLPKp2"
  Index 160 decoded: "Intern"
  Index 161 decoded: "et Use"
  Found table: "638zoVD`WuinwAv][G.xmJ(by@OTBe_Lp5Zl<0S^1N9fR/Md&{*gE>~%+rh,tHCX=PcIK2$kFsY!|;?Q7aq"j)4}#U:"
  Index 96 decoded: "length"
  Index 100 decoded: "wCEMtP"
  Index 101 decoded: "bTS7Up"
  Found table: "+x=w`z1~&|)?#<v!E%jS;2OlY^C:it.MsKHZr"P(oR9y{ALh}NTau8e@Vq[0>5$,UnpG/3]g_BmWX4k6*dc7DbFIJfQ"
  Index 88 decoded: "return"
  Index 89 decoded: " this"
  Found table: "TalJKQHAkGDejMNESmFLpOfgYV]:UBsC2"4*;t&5P=|odrI8Z6b(q7h<R>Wcwn_u@[X0}^!y~3)x1+v$.z9{`?/#%,i"
  Index 91 decoded: "__prot"
  Index 92 decoded: "o__"
  Index 93 decoded: "constr"
  Index 94 decoded: "uctor"
  Index 95 decoded: "name"
  Found table: "0z~y{Ic`K/eRB1UX(V"oqaO|9sPN!#bd?gF%D3=_>.^672rj)x+,ZlphfYT@W$wEAiM&v4JGkLm:uQ8C[n}H5*]t;S<"
  Index 97 decoded: "length"
  Found table: "8EFLJBWQOYcIsma9C5$x1?4t~j}v{,qH^dDK)*!.%3z6/N<U([i_VpTr]7ekA@bo`|#R:Pf=X;>&uSGMw2yZhn"+l0g"
  Index 98 decoded: "undefi"
  Index 99 decoded: "ned"
  Found table: "#FGXSjsiJwz+dAv^O2!P<R,0B5LHa8(IcCqo1pE:Y_;Tb[K7>D9M%=*gW&4|mxreQ.U{hy~)6}klnf?$VNu]Zt@/`3""
  Index 102 decoded: "a6UNwP"
  Index 103 decoded: "xBxuv0"
  Index 104 decoded: "cm3oRw"
  Index 105 decoded: "Object"
  Index 106 decoded: "d9EFy3"
  Index 107 decoded: "x64I10"
  Index 108 decoded: "KZcp7_"
  Index 109 decoded: "consol"
  Index 110 decoded: "HiuqxV"
  Index 111 decoded: "J4BDEm"
  Index 112 decoded: "Fwau11"
  Index 113 decoded: "ZUlQsm"
  Index 114 decoded: "xlzIc6"
  Index 115 decoded: "_Q5QtP"
  Index 116 decoded: "Cf1ihp"
  Index 117 decoded: "afLOtA"
  Index 118 decoded: "BgMqEk"
  Index 119 decoded: "kQTF_v"
  Index 120 decoded: "G1UFcT"
  Index 121 decoded: "b3m23i"
  Index 122 decoded: "ZbO120"
  Index 123 decoded: "n_h64c"
  Index 124 decoded: "liyaJy"
  Index 125 decoded: "Rz7Urj"
  Index 126 decoded: "WZ3dRA"
  Index 127 decoded: "IKiB7T"
  Index 128 decoded: "XcNqXc"
  Index 129 decoded: "QbM8bD"
  Index 130 decoded: "tjnPD1"
  Index 131 decoded: "zpf2p7"
  Index 132 decoded: "yUBPgV"
  Index 133 decoded: "ciSZ2a"
  Index 134 decoded: "T3UQ3l"
  Index 135 decoded: "k21qhD"
  Index 136 decoded: "QtbrbW"
  Index 137 decoded: "NiuCIQ"
  Index 138 decoded: "Inqh7e"
  Index 139 decoded: "_VPM3a"
  Index 140 decoded: "NOb0mv"
  Index 141 decoded: "C4kZjn"
  Index 142 decoded: "wiMFxE"
  Index 143 decoded: "l3ICFL"
  Index 144 decoded: "LWBVwm"
  Index 145 decoded: "Z8yzpq"
  Index 146 decoded: "qrtWmU"
  Index 147 decoded: "sqT1lp"
  Found table: "GUmCM4iaoLSY(0_e"/B!IHrVyhsJD1b;Pl&vdwz7uf:+qX*p)#cQTN53|Aj}gFORkt<^{9.8n@>KZ,x`E2[]~$?6%W="
  Index 148 decoded: "cm3oRw"
  Index 149 decoded: "define"
  Index 150 decoded: "Proper"
  Index 151 decoded: "length"
  Index 152 decoded: "value"
  Index 153 decoded: "config"
  Index 154 decoded: "urable"
  Found table: "uC9eZB!+UXzOqPnR$vDE<^G6;Kcry.Qk~b{YgMl%mIWT`V,&A])aNL[s_JiwF|10o?>HS5@d}#32:hf"pt4/jx(*87="
  Index 156 decoded: "KZcp7_"
  Index 157 decoded: "log"
  Found table: "HCfWpYsUrNXPGItaRZBqOLAFoeiDMnh=bSd:`z[mcJ$Q8gu*V6Ej39KTl"&#()^<y.1;75!],~>40_w2x|}+v?/{@%k"
  Index 159 decoded: "kJQR5f"
Running transform: OpaquePredicates
  Simplified opaque if: "!("wCEMtP" in __p_epWo_dummyFunction)" => true
  Simplified opaque if: "!("SLPKp2" in __p_epWo_dummyFunction)" => true
Running transform: GlobalConcealing
  String to global: Map(23) {
    'a6UNwP' => 'xBxuv0Q',
    'cm3oRwT' => 'Object',
    'd9EFy3' => 'x64I109',
    'KZcp7_H' => 'console',
    'HiuqxVn' => 'J4BDEm',
    'Fwau11y' => 'ZUlQsmZ',
    'xlzIc6O' => '_Q5QtP3',
    'Cf1ihp' => 'afLOtAa',
    'BgMqEk' => 'kQTF_vq',
    'G1UFcT8' => 'b3m23iy',
    'ZbO120' => 'n_h64cU',
    'liyaJy' => 'Rz7Urj',
    'WZ3dRA' => 'IKiB7T1',
    'XcNqXc' => 'QbM8bD',
    'tjnPD1G' => 'zpf2p7',
    'yUBPgVZ' => 'ciSZ2a',
    'T3UQ3l' => 'k21qhD1',
    'QtbrbW' => 'NiuCIQ',
    'Inqh7es' => '_VPM3al',
    'NOb0mvO' => 'C4kZjn0',
    'wiMFxE' => 'l3ICFLV',
    'LWBVwmM' => 'Z8yzpqF',
    'qrtWmU' => 'sqT1lp'
  }
  Replaced string access __p_Slpj_getGlobal("cm3oRwT") => "Object"
  Replaced string access __p_Slpj_getGlobal("KZcp7_H") => "console"
Running transform: Calculator
  No targets found
Running transform: DeadCode
  No targets found
Running transform: Flatten
Running transform: Flatten (Post)
  Simplified arguments length set function call, length: 1
  Removed arguments length set function: __p_55pd_fnLength
Running transform: Preparation
  No targets found
Successfully deobfuscated, writing result to output/deobfuscated.js
```

</details>

Open `output/deobfuscated.js`, and you will have the deobfuscated code.

## Limitation

1. This script unable to handle: "CFF in CFF", I will fix this later