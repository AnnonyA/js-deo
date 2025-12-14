(JJ, ZJ, lJ) => {
  "use strict";

  lJ.d(ZJ, {
    c: () => sZ,
    e: () => BZ,
    j: () => ZZ,
    i: () => aZ,
    m: () => kZ
  });
  var rJ = lJ(526);
  var jZ = lJ(15028);
  var aJ = lJ(1466);
  var GJ = lJ(15034);
  var sJ = lJ(15050);
  var CJ = lJ(551);
  var uJ = lJ(15618);
  var YJ = lJ(102);
  var iZ = lJ(39);
  var gJ = lJ(317);
  var BJ = lJ(89);
  var mZ = lJ(1332);
  var nJ = lJ(15020);
  var wJ = lJ(504);
  var HJ = lJ(1585);
  class vJ {
    constructor(JJ) {
      this.storeForMs = JJ;
      this.clicks = new HJ.e();
    }
    click() {
      this.clicks.enqueue(Date.now());
      const JJ = Date.now() - this.storeForMs;
      while (this.clicks.size > 0 && this.clicks.peek() < JJ) {
        this.clicks.dequeue();
      }
    }
    getNumClicksInMs(JJ) {
      let ZJ = 0;
      this.clicks.forEach(lJ => {
        if (lJ > Date.now() - JJ) {
          ZJ++;
        }
      });
      return ZJ;
    }
    getMaxClickSeparationInMs(JJ) {
      if (this.clicks.size === 0) {
        return this.storeForMs;
      }
      let ZJ = 0;
      let lJ = Date.now() - JJ;
      this.clicks.forEach(rJ => {
        if (!(rJ < Date.now() - JJ)) {
          ZJ = Math.max(ZJ, Math.abs(rJ - lJ));
          lJ = rJ;
        }
      });
      const rJ = Math.abs(Date.now() - lJ);
      return Math.max(ZJ, rJ);
    }
  }
  class xJ {
    constructor(JJ) {
      this.storeForMs = JJ;
      this.clickDownDurations = new HJ.e();
    }
    registerClickDownDuration(JJ) {
      this.clickDownDurations.enqueue({
        dur: JJ,
        atTime: Date.now()
      });
      const ZJ = Date.now() - this.storeForMs;
      while (this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ZJ) {
        this.clickDownDurations.dequeue();
      }
    }
    clickDownDurationsCheck(JJ) {
      if (JJ > this.storeForMs) {
        console.error("overDuration is greater than storeForMs");
        return "0:0";
      }
      let ZJ = 0;
      let lJ = 0;
      this.clickDownDurations.forEach(rJ => {
        if (rJ.atTime > Date.now() - JJ) {
          ZJ++;
          lJ = Math.max(lJ, rJ.dur);
        }
      });
      return `${ZJ}:${lJ}`;
    }
  }
  var AJ = lJ(13);
  var NJ = lJ(1038);
  var VJ = lJ(334);
  var yJ = lJ(15550);
  var KJ = lJ(69);
  const qJ = lJ(327).m;
  const TJ = 1;
  let DJ;
  let RJ = TJ;
  let WJ = 0;
  const XJ = true;
  let UJ;
  let zJ;
  let IJ = XJ;
  var PJ = {};
  var bJ = ["?Nhbx(rg1VoIR9Ag?12a/jeT<^D,pRdB~9n_OQ&6US4?P1,JT^(7.Wn6", "S:oI}/F|IAB|=FpNv@lIgDyHO~%Hwv5", "R)}@>=~:~UAgT4u8XBA#[AT[6%`SW8{}&^aGH!%[?b~", "y7Z5Vj;Lq*~S*pS.[.Mb)D&~(HD?gE3I@>f_ERty9.,7](/]5O!I5Lqj5", "4IqJr4oc@SYSV4Et{}p@/LMEc", ".B^ev=.[ubP:T9~m=51p5+cDA&#`KkImfTdqa^j!}S(n#(Igm6", "H(\"ew3J!IUU\"Q8x]LNFc2g,ak^Nci<~m#*9Wu9%@cGtt6", "c:|c`HX$Zw", "@tGnS3\"V,V}KK(a:v1pc[iY@;.", "c^Eqp0)g[|Tu_1gN%nh,lostVw", "K0z5c0YQF|kW~OOTfA}@+D6ygbQqkRdB<&#Z8~CcO^`AsuSll~,J_n4|c", "]ms5;An~cVVASE", "nS4HY=)6", ":$o^/H.$e|!Ss[+I|*:x", "CTs5YL&DT.A*9/n]0.5Go!u3Hy/u;<*.%n}:44uLFy$A{1", "X&s7s4my2&^uf=O8+({D3F}!nt[jk,hIRNvb?UsF|K$%SlWB", "`n*7mo%ue^&*UFvJ4&W:}n26B&1D`kdy%QQx", "Kmq+M+Ao1^Ru[8\"v:$O5`fFD+wq@4BZ[.!:W6$UfFy\".ylH2]6", ")~P+3iawwUyxBpe26T?:0v@$AA@OzCSyC5P+a9g:Pys0)M9N<]1", "5wbDf$1]O%T(6", "n(QcZu@[U#?SZ(B>9(pG2g{", "6_|c%U{[_%oJf<}lG)0GTYt:DU7FC8w]d9%#hZ>w=!(eT1X2ZwL8KF{3N|", "b9@#8^m<pyG/VCZNk^0qyln|eb&%043Xt~in}^^f,", "89Ub5jm2O~YIj\"V*j]znX9o~)U0*pPNNVNB8i)W5q\"T", "L~{inWE#B&H!~[v[jIdqNn4c1", "|wyRQ@Hmr^nu\"psX", "q7jWQH&~%bPY*NVkyw6i~/8:iHVgr(:m791", "<5`ca9lfgbX(olYgX@BD^$@[_~$,m=cJT9gRAH5[,", "E0FW_Q<FY.&S:R!N,}f7[+(azfj?LBh:vw,+n0!|[t!n{", "N}`xcGFcdHf_g\";g:.T^v^c<LwYeE`\"", "|$;_hZHrK|9?e8+L}795{G}!m|Hu,v#", "5@jnAq:~%~L", "PIHxv!Efp|:Jn0Jm0Q,:B", "8@E_P)6y9.1L~,nB@m>_[4}|3|7YaO/[e&(8U@{", "Z}5W(PIEv.qHDB=TBNJnc0toPb9u_Mh:|9w:d7y2,", "h)o^tk{", ":TKJulV[9|", "R&hOs4Ta:*GWpMIkGAR7!HW*s&y8}\"\"v._Xc4);L)*i6UFDv:6", "JT|JAj;TRf/q@\"x]r{", "T.[n)!Jo:KQn4g!mD)in2n9cn&CaA/gtY&7H/0#kf&j/;l.I,C[Zy", ":.[aQ@1h;UHcUN<8.0x7?HOyb&A_W1DlT~Epv`FcLCu<1lJN/1le^HQa&C", "5!lOu@l[l|", "4/n75Hc]0\"q!(8yLZQMDIgPe<*]R}l;XHQ<^y", "5:jI{jYaS.*j<(5lCBWB/j{", "N9rWVjbHj0dxgE+TM~FB|+>uf\"", "/1[57fV*4y@?T4Z[OwGIGfB[3V0cGlEN|O4B7O:D+^s@KM,toLZD+/q6", "?N\"Wov|o@..j&0;XM^[7gg{", "60wqyiB#nfeFhBnvk1jI\"", "P\"JIP+H:rfH", "l@#5ZQD7O%X5f`SyE0dGy~jj6bu,[1", "S_MiYj0[LC_UT1*T[0y:gnU[4y966", "=AlO^vBa5", "s##bQ$i*(Ceu~knvTUrJ#@%aDY[1$Nx]Ow7#mrU*$C", "s\",:?Lp]VwTI2R,[#BD#", "%ntDYPXflf*R^/~IhIQH2O>T5", "s77q<Z5$}tf", "?mL_yURf)#3?#k`t;(%_nU[V`ANn`|qy&m1", ",9Mi:`Tk\"!0", "hIn73W9:b.Wg#1[L", "b:G,2D<|e~=quogaT}$c", "09x8Me2cdSp|jEHLR)4H1jR5}Awa~(TJ%>}qS+{", "HQ39t4Gmo!pN#v|.+.iJ`j}yhV;+{1A>c6", "l9{D0Rc]US~IF(iT=Aub", "T7,G.A[kEy{D*\".TzA.:LO~go#RS](6mbNr+ikx#K|$A|M8gqY<_2D{", ";t]^6Rj:k^oSzg}lqIrJYPefLbVKJE", "At\"cITo|Rt", "hUV^e7N|xt\"Nt(!:p@E", "T7[87!lE>&,j}BWyV7;7gDakw&,`S+zXp!_aZO96", "u&;pW4D7ZwL&r,", "#gzOj+BkLw+WW[8:(&]73+pDWUm&,8py", "MTMaK4kw:*Gn{", "L}yq8rh~.~I(R9KIPnO5so!m,^#``,N[+5^J|G6h5", "TNbDLnYEvVOu]<bv+Bq+l=kf`A>uIM>J(J/90j9|!wj].A78^7ac:", "U.,x5+D7iC", "H74#pk|oq#gL/FiTy*ie}Dx*5foWLE", "qY8_WFj7ZbYuk8X20TWHsrYft0*1VCm:QI!WpG1yY&W*SEny%LA_D()6C0`O6", "t!iW?UH6v.a&*p<vp^NJ<Uluyb(tjl)8).^J#kqFoCmfvBOT:$_b", "#:+#HYQ5`HgjH|P8g~{iXiaw2&T[H,\"8Ab5c070a!!%$aNV>DAF,K95fUS", "$Un5UL/30\"r]K(!m\"Tb^d^!7MbfcW9!mUTaI$`Z:O*(n=l2J1@ic", "n)W:EP0*j0Z[Bp", "~B[aNOZ~Qy!%&R!N09Rb3Wlwo%oK.44LZ1Q+=).u5", "`tr+|(K|8\"VId1Kg7JjI<kgy%^^u8+KgNQE", "E:%_BW!oLy0qd1+8|OXIan5>5", "qA:e&H}c$!+URCGT%t`GE3iLP~XtUNSvT:YnP+v<C!s6QCbvG5E", "C9#bzWY@oC", "X0A@E@@*V!(FzohLjJs^1LZ:CC$GpP,*^9HJ1@V*Zb?qn<Am?n25y", "JNjWtkZ::\"h~,vny", "~T6^kTsm607*8+U[Xbq@\"+~ml|.W/lgtg165k^/$G.(nC\"n*", "?EkuQ6fa", "o}3c+qBE", "oiZ_,.&L", "HH2e]#)A", "wJXYeT2A", "=;SvvT:", "fDi_tap`uivIA{u", "IDmOWiVZ", "v}plr:xZ", "XhmUm=2&", "8xIR*J9p", "N}?_]", "M1@_2TCp", "U@U&G!>", "?9<\"#z?.", "nRQ.kO[M_~+F<YOe\"_>@Jr8Nn6$9]+)LXpBgFQ\"&&RyEcKe", "N*av?;?:9/x1+exr7<W7xMvOR_4JbTUczwG0VoB?2UOPt\"Lfi;0l|u6&`iH2EL`balORH^q_{Hv", "z(342n|+q>m0Epw4S{rLVoyFNKX@T:JfQT/&{", "wn7OtMbk{_eDyDaclQmBaMY&/W(1!|u^og9O:", "{wWL`^yF{HdY[<n(~1R.k1G\"o?z@+e._JT/&j", "nRlRpxPXXSqA4YL_<6jLk1HXO_<@+e4U]TjL{", "=2jLXr(k!RY;Hn~N#p),yZ(AJ8*Pbe4UyT#", "kt%hq&Df", ":%$h1rVf", "];0#A*Df", "CgR.VTc~X", "XyAMLtxf", "c+k5r{<p", "}/=yoYM*fA^nPBx{R!lQ44?uZqFj,ix{ZV80ZR}%;IjHEcR/i/mkQ", "i*051=T<xDZ76:yaHgd.mmw\"l@uk(3ya7IFo!!BpH1ZSOq69/>", "q=l;bzUj2roF]!Lpp={x)4bc}5.#_b>)JG|#^", "+FLc", "bs{y&W$N", "Rkqd0qm_", "\"S*)S.5_", "RP%9", "}GDw[Qh@", "<N9,OQ)J", "WX8dUL44", "2vU,)>?@", "M7+R}saA", "&L,G", "4l)JwfaeXQ2`fO8ftZxG+f!LBS", "{cPMg!kn>G+!*kpt<`kDr*2x^S", "C(rDrasOI1{,X_cdPtsJ4YdKGt", "PLC7gM5|", "m5z4pGPA", "ZrbZ8/aA", ">\"g1<", "q23u&*GK", ".{B.9jyN", "pL3xD", "RL{Qr5zbryF]75`Z", "Q&;7(yuEoP%mHPfR", "6pYj^v_x?6##~3G}", "XG*<M(US#\"Lm3%pG", "<dJv{zJO{`M(,(W", "V&LR72lA", "[&B$w:D_", "@7Dt/%/R", "(%c=!>3C", "U{05S*rJk73cgRfMnQw;VV]1HiXZ^NfMH#mbHnUGd}Z\"BFn{N{=8;", "XKY=#P03SZ;)]i,jIu}V^^$|r\"Jc8@,j).x{nn9CI#;RL_]5Q~", "Pu.2gpv+DI{_~slGGuA%8(g\"L,E4cgZ8Fk64n", "M_l\"", "`W@l0;qH"];
  var EJ;
  var cJ;
  var hJ;
  var SJ;
  var OJ;
  var MJ;
  var oJ;
  iZ.h.subscribe("serverOption|_ignoreBasicBoards", JJ => {
    IJ = JJ;
  });
  (0, rJ.mc)(() => {
    IJ = XJ;
  });
  function pJ(_param_98) {
    if (typeof cJ !== "undefined" && cJ) {
      return new cJ().decode(new hJ(_param_98));
    } else if (typeof SJ !== "undefined" && SJ) {
      return SJ.from(_param_98).toString("utf-8");
    } else {
      return oJ(_param_98);
    }
  }
  function LJ(_param_99, _param_100, _param_101) {
    function ZJ(_param_102) {
      let _var_a21 = "gaHOxf*MJY[bkS4hT_85vn!NKp;Wsu$P0^e{t+\"?~<|d/]r:U,X(Z.`CF293wRj%oE6y17=>zBl#&L}ic)ADIGQVqm@";
      let _var_b11 = "" + (_param_102 || "");
      let _var_143 = _var_b11.length;
      let _var_144 = [];
      let _var_145 = 0;
      let _var_146 = 0;
      let _var_147 = -1;
      let _var_h9 = 0;
      for (; _var_h9 < _var_143; _var_h9++) {
        let _var_148 = _var_a21.indexOf(_var_b11[_var_h9]);
        if (_var_148 !== -1) {
          if (_var_147 < 0) {
            _var_147 = _var_148;
          } else {
            _var_147 += _var_148 * 91;
            _var_145 |= _var_147 << _var_146;
            _var_146 += (_var_147 & 8191) > 88 ? 13 : 14;
            do {
              _var_144.push(_var_145 & 255);
              _var_145 >>= 8;
              _var_146 -= 8;
            } while (_var_146 > 7);
            _var_147 = -1;
          }
        }
      }
      if (_var_147 > -1) {
        _var_144.push((_var_145 | _var_147 << _var_146) & 255);
      }
      return pJ(_var_144);
    }
    if (_param_99 === function (JJ) {
      if (typeof PJ[JJ] === "undefined") {
        return PJ[JJ] = ZJ(bJ[JJ]);
      } else {
        return PJ[JJ];
      }
    }(88)) {
      return _param_100 + _param_101;
    }
  }
  function eJ() {}
  function kZ(JJ) {
    function ZJ() {
      return JJ.sC.oC(JJ.rZ);
    }
    const lJ = new vJ(30000);
    const aJ = new xJ(40000);
    let uJ = false;
    let BJ = false;
    let mZ = 0;
    JJ.inputs.down.on("primary-fire", function (jZ) {
      mZ = Date.now();
      if (Math.abs(performance.now() - jZ.timeStamp) > 5000) {
        return;
      }
      if (jZ.altKey) {
        HJ();
      } else {
        (0, yJ.incrementClientClickCounter)();
        ZJ().downFirePrimary();
        uJ = true;
        iZ.h.KJ("mouseState", {
          isDown: uJ || BJ
        });
      }
      JJ.MC = BZ(JJ, JJ.MC) ?? JJ.MC;
      const gJ = JJ.MC?.position ?? null;
      (0, rJ.Ic)(CJ.hg, {
        vr: YJ.J.DownFirePrimary,
        Ar: (0, rJ.cb)(),
        MZ: gJ
      }, true);
      lJ.click();
      const nJ = lJ.getMaxClickSeparationInMs(30000) < 1000 / 30;
      const wJ = lJ.getMaxClickSeparationInMs(10000) < 20;
      const vJ = lJ.getMaxClickSeparationInMs(4000) < 1000 / 70;
      if (nJ || wJ || vJ) {
        let JJ;
        if (nJ) {
          JJ = 30;
        } else if (wJ) {
          JJ = 50;
        } else {
          if (!vJ) {
            throw new Error("???");
          }
          JJ = 70;
        }
        (0, rJ.Ic)(CJ.oi, JJ);
      }
      UJ(jZ);
    });
    JJ.inputs.up.on("primary-fire", function (JJ) {
      const lJ = Date.now() - mZ;
      aJ.registerClickDownDuration(lJ);
      ZJ().upFirePrimary();
      uJ = false;
      iZ.h.KJ("mouseState", {
        isDown: uJ || BJ
      });
      UJ(JJ);
      const jZ = aJ.clickDownDurationsCheck(40000);
      (0, rJ.Ic)(CJ.sf, jZ);
    });
    JJ.inputs.down.on("alt-fire", function (lJ) {
      JJ.MC = BZ(JJ, JJ.MC) ?? JJ.MC;
      const gJ = JJ.MC?.position ?? null;
      (0, rJ.Ic)(CJ.hg, {
        vr: YJ.J.DownFireSecondary,
        Ar: (0, rJ.cb)(),
        MZ: gJ
      }, true);
      ZJ().downFireSecondary();
      BJ = true;
      iZ.h.KJ("mouseState", {
        isDown: uJ || BJ
      });
      if (JJ.MC && !JJ.MC.position) {
        (0, sJ.d)();
      }
      UJ(lJ);
    });
    JJ.inputs.up.on("alt-fire", function (JJ) {
      ZJ().upFireSecondary();
      BJ = false;
      iZ.h.KJ("mouseState", {
        isDown: uJ || BJ
      });
      UJ(JJ);
    });
    const HJ = () => {
      ZJ().downFireTertiary();
    };
    JJ.inputs.down.on("mid-fire", () => {
      HJ();
    });
    JJ.inputs.down.on("SpecialAction1", () => {
      (0, rJ.Ic)(CJ.og, "SpecialAction1");
    });
    JJ.inputs.up.on("SpecialAction1", () => {
      (0, rJ.Ic)(CJ.qg, {
        gj: "SpecialAction1",
        Bj: VJ()
      });
    });
    JJ.inputs.down.on("SpecialAction2", () => {
      (0, rJ.Ic)(CJ.og, "SpecialAction2");
    });
    JJ.inputs.up.on("SpecialAction2", () => {
      (0, rJ.Ic)(CJ.qg, {
        gj: "SpecialAction2",
        Bj: VJ()
      });
    });
    JJ.inputs.down.on("ReloadGun", () => {
      if (JJ.entities.qC(JJ.rZ).heldType === "Gun") {
        ZJ().reload();
      }
    });
    const VJ = () => {
      let ZJ = "a";
      if (!JJ.physics.testSolid.toString().includes("Qu")) {
        ZJ = "b";
      }
      return ZJ;
    };
    JJ.inputs.down.on("OpenInventory", JJ => {
      JJ.preventDefault();
      if ((0, nJ.h)((0, NJ.yJ)())) {
        iZ.h.KJ("toggleMenu", "inventory");
      }
    });
    JJ.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
    JJ.inputs.down.on("DropItem", () => {
      iZ.h.KJ("DropItemKeyPressed", JJ.inputs.state.crouch);
    });
    JJ.inputs.down.on("crouch", () => {
      if (AJ.c.get("clientEscMenuOptions").crouchIsToggle) {
        JJ.entities.getState(JJ.rZ, "receivesInputs").crouchToggled = !JJ.entities.getState(JJ.rZ, "receivesInputs").crouchToggled;
      }
    });
    JJ.inputs.down.on("jump", lJ => {
      if (JJ.entities.qC(JJ.rZ).heldType === "Gun") {
        ZJ().inaccuracyCalculator.jump();
      }
      UJ(lJ);
    });
    JJ.inputs.down.on("OpenShop", () => {
      if (AJ.c.get("gameState") === "inGame") {
        if (!(0, rJ.Rc)(JJ.VJ.shopInfo)) {
          AJ.c.set({
            openMenuName: AJ.c.get("openMenuName") === YJ.bb.SHOP ? null : YJ.bb.SHOP
          });
        }
      }
    });
    JJ.inputs.down.on("OpenLobbyLeaderboard", () => {
      if (AJ.c.get("gameState") === "inGame" && JJ.VJ.lobbyLeaderboardInfo) {
        AJ.c.set({
          openMenuName: AJ.c.get("openMenuName") === YJ.bb.LOBBY_LEADERBOARD ? null : YJ.bb.LOBBY_LEADERBOARD
        });
      }
    });
    JJ.inputs.down.on("HideUi", () => {
      iZ.h.KJ("showUi", false);
    });
    JJ.inputs.up.on("HideUi", () => {
      iZ.h.KJ("showUi", true);
    });
    const KJ = JJ => {
      if (JJ === 0) {
        JJ = 10;
      }
      iZ.h.KJ("setSelectedInventorySlotI", JJ - 1);
      iZ.h.KJ("numkeyPressed", JJ);
    };
    for (let rJ = 1; rJ <= 10; rJ++) {
      JJ.inputs.down.on("HotBarSlot" + rJ.toString(), () => {
        KJ(rJ);
      });
    }
    function DJ(JJ) {
      if (AJ.c.get("gameState") === "inGame" && AJ.c.get("openMenuName") === null) {
        iZ.h.KJ("ctrlCrouchWithoutFullscreen");
        JJ.preventDefault();
      }
    }
    JJ.inputs.down.on("OpenTasksAndLeaderboard", () => {
      if (JJ.VJ._tasks || JJ.VJ._availableLeaderboards) {
        iZ.h.KJ("toggleMenu", "retentionFeatures");
      }
    });
    JJ.inputs.down.on("OpenCodeEditor", () => {
      if (!(0, rJ.xb)(NJ.singletons.connectedLobbyName) || !!NJ.singletons.connectedGameNameWithVariation.startsWith("testGym")) {
        iZ.h.KJ("EditLobbyCode", JJ.sC.Hs(JJ.rZ).map(Math.floor));
      }
    });
    JJ.inputs.bind("ToggleFullCoordinateOverlay", "F3");
    JJ.inputs.down.on("ToggleFullCoordinateOverlay", () => {
      iZ.h.KJ("toggleFullCoordinateOverlay");
    });
    JJ.inputs.down.on("SwapCameraZoom", () => {
      rZ(JJ);
    });
    iZ.h.subscribe("SwapCameraZoom", () => {
      rZ(JJ);
    });
    JJ.inputs.down.on("OpenInviteLink", () => {
      if (gJ.f.canUseInviteLinks) {
        iZ.h.KJ("toggleMenu", "inviteLink");
      }
    });
    JJ.inputs.bind("Y", "KeyY");
    JJ.inputs.down.on("Y", JJ => {
      iZ.h.KJ("YKeyPressed");
    });
    JJ.inputs.bind("X", "KeyX");
    JJ.inputs.down.on("X", JJ => {
      iZ.h.KJ("XKeyPressed");
    });
    JJ.inputs.down.on("Zoom", ZJ => {
      if (AJ.c.get("gameState") === "inGame" && !JJ.VJ.canUseZoomKey) {
        iZ.h.KJ("showError", {
          error: "Zoom is disabled",
          timeoutLength: 2000
        });
      }
    });
    JZ();
    JJ.inputs.down.on("ctrlCrouch", DJ);
    JJ.inputs.up.on("ctrlCrouch", DJ);
    JJ.inputs.bind("ctrlCrouch", "ControlLeft");
    const WJ = JJ => {
      if (AJ.c.get("gameState") === "inGame" && JJ.ctrlKey && AJ.c.get("openMenuName") === null) {
        JJ.preventDefault();
      }
    };
    document.addEventListener("keydown", WJ);
    document.addEventListener("keyup", WJ);
    document.addEventListener("keypress", WJ);
    JJ.inputs.bind("Alt", "AltLeft", "AltRight");
    JJ.inputs.down.on("Alt", JJ => {
      JJ.preventDefault();
    });
    JJ.on("afterRender", ZJ => {
      (0, jZ.g)(JJ);
    });
    let XJ = 0;
    JJ.on("ls", function (ZJ) {
      iZ.h.KJ("noaTick");
      if (!JJ.entities.pu(JJ.rZ).isAlive) {
        return;
      }
      if (Date.now() - XJ > 9000) {
        (function () {
          const JJ = (0, NJ.yJ)();
          if (typeof JJ.VJ.speedMultiplier === "number" && typeof JJ.VJ.jumpAmount === "number") {
            (0, rJ.Ic)(CJ.Dg, {
              ir: (0, rJ.d)(JJ.VJ.speedMultiplier),
              gl: (0, rJ.c)(JJ.VJ.jumpAmount),
              Bl: (0, rJ.d)(JJ.VJ.crouchingSpeed),
              mr: (0, rJ.d)(JJ.VJ.walkingSpeed),
              nl: (0, rJ.d)(JJ.VJ.runningSpeed),
              wl: (0, rJ.c)(JJ.Lu),
              Hl: JJ.sC.tC(JJ.rZ).jumpForce,
              vl: JJ.sC.GC(1).width,
              xl: JJ.sC.GC(1).height,
              Al: JJ.sC.Nu(1).Al
            }, true);
          }
        })();
        XJ = Date.now();
      }
      const lJ = JJ.inputs.state;
      if (lJ.jump || lJ.forward || lJ.backward || lJ.left || lJ.right) {
        iZ.h.KJ("usedKeyboard");
      }
      if (JJ.sC.UC(JJ.rZ) && JJ.VJ.canPickUpItems === true) {
        const ZJ = JJ.sC.Hs(JJ.rZ);
        const lJ = (0, wJ.m)(RJ);
        const jZ = (0, wJ.q)(RJ);
        const aJ = [ZJ[0] - lJ, ZJ[1] - jZ * 0.6, ZJ[2] - lJ];
        const uJ = [ZJ[0] + lJ, ZJ[1] + qJ.cG + jZ * 0.6, ZJ[2] + lJ];
        const YJ = JJ.sC.eu({
          base: aJ,
          max: uJ
        }, JJ.sC.names.autoRotate);
        if (YJ.length > 0) {
          for (const iZ of YJ) {
            const ZJ = JJ.sC.getState(iZ, "itemState");
            if (ZJ === undefined || ZJ.oj || Date.now() - ZJ.creationTime < 500) {
              continue;
            }
            const lJ = JJ.sC.RC(JJ.rZ).pickUpItem({
              name: ZJ.name,
              typeObj: ZJ.typeObj,
              amount: ZJ.amount,
              attributes: ZJ.attributes
            });
            if (lJ !== 0) {
              if (lJ === null || lJ === -1) {
                JJ.sC.deleteEntity(iZ);
              } else {
                ZJ.amount -= lJ;
                if (ZJ.amount < 0) {
                  console.error("Picking up led to less than 0 of item!");
                } else if (ZJ.amount === 0) {
                  JJ.sC.deleteEntity(iZ);
                }
              }
              (0, rJ.Ic)(CJ.jg, {
                Nr: iZ,
                Vr: lJ,
                yr: sJ.c
              }, true);
              GJ.e.play("pickUp", qJ.pickupSoundVol).rate(1 + Math.random() * qJ.pickupSoundRateVariation);
            }
          }
        }
      }
      if (!JJ.sC.jY(JJ.rZ)) {
        return;
      }
      zJ &&= false;
      const jZ = JJ.inputs.kY.fu;
      if (jZ !== 0) {
        const ZJ = jZ > 0 ? 1 : -1;
        if (JJ.inputs.state["mid-fire"] || JJ.inputs.state.Alt || !JJ.VJ.useInventory) {
          lZ(JJ, ZJ);
        } else {
          iZ.h.KJ("ScrollInventorySlot", ZJ);
        }
      }
    });
    let zJ = false;
    iZ.h.subscribe("serverOption|playerZoom", ZJ => {
      ZZ(JJ, ZJ);
      if (!JJ.sC.jY(JJ.rZ)) {
        zJ = true;
      }
    });
    iZ.h.subscribe("serverOption|droppedItemScale", JJ => {
      RJ = typeof JJ === "number" && isFinite(JJ) ? JJ : TJ;
    });
    JJ.camera.JY = (ZJ, lJ) => {
      JJ.entities.oC(JJ.rZ).cameraZoomChanged(lJ, ZJ);
    };
    JJ.camera.ZY = (ZJ, lJ) => {
      GZ(JJ, ZJ, lJ);
    };
  }
  function JZ() {
    const JJ = (0, NJ.yJ)();
    if (JJ) {
      for (const ZJ of Object.keys(mZ.l)) {
        JJ.inputs.unbind(ZJ);
        for (const lJ of mZ.l[ZJ]) {
          JJ.inputs.bind(ZJ, lJ);
        }
      }
    }
  }
  function ZZ(JJ, ZJ) {
    lZ(JJ, ZJ - JJ.camera.cC);
  }
  function lZ(JJ, ZJ) {
    if (JJ.entities.oC(JJ.rZ).shouldChangeCameraZoom(ZJ)) {
      if (JJ.camera.cC === 0 && ZJ === 1) {
        ZJ++;
      } else if (JJ.camera.cC === 2 && ZJ === -1) {
        ZJ--;
      }
      aZ(JJ, JJ.camera.cC + ZJ);
    }
  }
  function rZ(JJ) {
    if (JJ.entities.getState(JJ.rZ, "cameraShake").frontFacing) {
      jl(JJ);
      ZZ(JJ, 0);
    } else if (JJ.camera.cC === 0) {
      ZZ(JJ, JJ.VJ.zoomOutDistance || 3);
    } else {
      ZZ(JJ, JJ.VJ.zoomOutDistance || 3);
      (function (JJ) {
        JJ.entities.getState(JJ.rZ, "cameraShake").frontFacing = true;
        JJ.camera.lY[0] = Math.PI;
        JJ.camera.lY[1] = 0;
        JJ.camera.lY[2] = Math.PI;
      })(JJ);
    }
  }
  function jl(JJ) {
    JJ.entities.getState(JJ.rZ, "cameraShake").frontFacing = false;
    JJ.camera.lY[0] = 0;
    JJ.camera.lY[1] = 0;
    JJ.camera.lY[2] = 0;
  }
  function aZ(JJ, ZJ) {
    const lJ = JJ.camera.cC;
    if (ZJ < 0) {
      JJ.camera.cC = 0;
    } else if (ZJ > (JJ.VJ.maxPlayerZoom || 10)) {
      JJ.camera.cC = JJ.VJ.maxPlayerZoom || 10;
    } else {
      JJ.camera.cC = ZJ;
    }
    GZ(JJ, lJ, ZJ);
  }
  function GZ(JJ, ZJ, lJ) {
    JJ.entities.oC(JJ.rZ).cameraZoomSet(ZJ, lJ);
    iZ.h.KJ("cameraZoomSet", JJ.camera.cC);
    if (lJ === 0) {
      jl(JJ);
    }
  }
  EJ = function () {
    let _var_b12 = [function () {
      return globalThis;
    }, function () {
      return global;
    }, function () {
      return window;
    }, function () {
      return new Function("return this")();
    }];
    let _var_149 = undefined;
    let _var_d14 = [];
    try {
      _var_149 = Object;
      _var_d14.push("".__proto__.constructor.name);
    } catch (bJ) {}
    JJ: for (let _var_150 = 0; _var_150 < _var_b12.length; _var_150++) {
      try {
        _var_149 = _var_b12[_var_150]();
        let _var_f9 = 0;
        for (; _var_f9 < _var_d14.length; _var_f9++) {
          if (typeof _var_149[_var_d14[_var_f9]] === "undefined") {
            continue JJ;
          }
        }
        return _var_149;
      } catch (bJ) {}
    }
    return _var_149 || this;
  }() || {};
  cJ = EJ.TextDecoder;
  hJ = EJ.Uint8Array;
  SJ = EJ.wJ;
  OJ = EJ.String || String;
  MJ = EJ.Array || Array;
  oJ = function () {
    let _var_151 = new MJ(128);
    let _var_b13 = OJ.fromCodePoint || OJ.fromCharCode;
    let _var_152 = [];
    return function (_param_103) {
      let _var_a22 = undefined;
      let _var_153 = undefined;
      let _var_c12 = _param_103.length;
      _var_152.length = 0;
      let _var_d15 = 0;
      while (_var_d15 < _var_c12) {
        _var_153 = _param_103[_var_d15++];
        if (_var_153 <= 127) {
          _var_a22 = _var_153;
        } else if (_var_153 <= 223) {
          _var_a22 = (_var_153 & 31) << 6 | _param_103[_var_d15++] & 63;
        } else if (_var_153 <= 239) {
          _var_a22 = (_var_153 & 15) << 12 | (_param_103[_var_d15++] & 63) << 6 | _param_103[_var_d15++] & 63;
        } else if (OJ.fromCodePoint) {
          _var_a22 = (_var_153 & 7) << 18 | (_param_103[_var_d15++] & 63) << 12 | (_param_103[_var_d15++] & 63) << 6 | _param_103[_var_d15++] & 63;
        } else {
          _var_a22 = 63;
          _var_d15 += 3;
        }
        _var_152.push(_var_151[_var_a22] ||= _var_b13(_var_a22));
      }
      return _var_152.join("");
    };
  }();
  if ("xoZDnhd" in eJ) {
    (function () {
      const ZJ = require("big-integer");
      let _var_154 = class {
        static randomPrime(_param_104) {
          const lJ = ZJ.one.shiftLeft(_param_104 - 1);
          const rJ = ZJ.one.shiftLeft(_param_104).prev();
          while (true) {
            let JJ = ZJ.randBetween(lJ, rJ);
            if (JJ.isProbablePrime(256)) {
              return JJ;
            }
          }
        }
        static generate(_param_105) {
          const lJ = ZJ(65537);
          let rJ;
          let jZ;
          let _var_155 = undefined;
          do {
            rJ = this.randomPrime(_param_105 / 2);
            jZ = this.randomPrime(_param_105 / 2);
            _var_155 = ZJ.lcm(rJ.prev(), jZ.prev());
          } while (ZJ.gcd(lJ, _var_155).notEquals(1) || rJ.minus(jZ).abs().shiftRight(_param_105 / 2 - 100).isZero());
          return {
            e: lJ,
            n: rJ.multiply(jZ),
            d: lJ.modInv(_var_155)
          };
        }
        static encrypt(_param_106, _param_108, _param_107) {
          return ZJ(_param_106).modPow(_param_107, _param_108);
        }
        static decrypt(_param_109, _param_110, _param_111) {
          return ZJ(_param_109).modPow(_param_110, _param_111);
        }
        static encode(JJ) {
          const lJ = JJ.split("").map(JJ => JJ.charCodeAt()).join("");
          return ZJ(lJ);
        }
        static decode(_param_112) {
          const ZJ = _param_112.toString();
          let _var_a23 = "";
          for (let lJ = 0; lJ < ZJ.length; lJ += 2) {
            let rJ = Number(ZJ.substr(lJ, 2));
            if (rJ <= 30) {
              _var_a23 += String.fromCharCode(Number(ZJ.substr(lJ, 3)));
              lJ++;
            } else {
              _var_a23 += String.fromCharCode(rJ);
            }
          }
          return _var_a23;
        }
      };
      module.exports = _var_154;
    })();
  }
  zJ = _param_113 => {
    if ("NqRwCL" in eJ) {
      (function () {
        function jZ(_param_118) {
          const ZJ = {};
          for (let lJ of _param_118.replace(/[^w]/g, "").toLowerCase()) {
            ZJ[lJ] = ZJ[lJ] + 1 || 1;
          }
          return ZJ;
        }
        function aJ(_param_119, _param_120) {
          const ZJ = buildCharMap(_param_119);
          const lJ = buildCharMap(_param_120);
          for (let rJ in ZJ) {
            if (ZJ[rJ] !== lJ[rJ]) {
              return false;
            }
          }
          if (Object.keys(ZJ).length !== Object.keys(lJ).length) {
            return false;
          } else {
            return true;
          }
        }
        function GJ(_param_121) {
          return sJ(_param_121) !== Infinity;
        }
        function sJ(_param_122) {
          if (!_param_122) {
            return -1;
          }
          const ZJ = sJ(_param_122.left);
          const lJ = sJ(_param_122.right);
          const rJ = Math.abs(ZJ - lJ);
          if (ZJ === Infinity || lJ === Infinity || rJ > 1) {
            return Infinity;
          }
          return Math.max(ZJ, lJ) + 1;
        }
        window.__GLOBAL__HELPERS__ = {
          buildCharacterMap: jZ,
          isAnagrams: aJ,
          isBalanced: GJ,
          getHeightBalanced: sJ
        };
      })();
    }
    let _var_a24 = 0;
    for (const rJ in _param_113) {
      _var_a24++;
    }
    return _var_a24;
  };
  UJ = JJ => {
    if (JJ.note === "cgn2jd77d9t") {
      return;
    }
    const rJ = Date.now() < new Date("2024-07-14T17:25:00Z").getTime();
    if (JJ instanceof Event) {
      if (JJ.isTrusted === false) {
        (0, uJ.b)(`2 ${rJ ? new Error().stack : ""}`);
      } else if (zJ(JJ) < 10) {
        (0, uJ.b)(`3 ${rJ ? new Error().stack : ""}`);
      } else if (WJ++ === 5) {
        if ((0, BJ.n)()) {
          (0, uJ.b)(`4 ${rJ ? new Error().stack : ""}`);
        }
        WJ = 0;
      }
    } else {
      (0, uJ.b)(`5 ${rJ ? new Error().stack : ""}`);
    }
  };
  iZ.h.subscribe("customBindingsChanged", () => {
    JZ();
  });
  const sZ = new class {
    constructor() {
      this.inventoryOpen = false;
      iZ.h.subscribe("DropItemKeyPressed", JJ => {
        if (this.inventoryOpen) {
          iZ.h.KJ("DropInvenItem", JJ);
        } else {
          iZ.h.KJ("DropHotbarItem", JJ);
        }
      });
    }
    setInventoryOpen(JJ) {
      this.inventoryOpen = JJ;
    }
  }();
  const CZ = JJ => {
    JJ.preventDefault();
  };
  let uZ = false;
  iZ.h.subscribe("displaymodeFullscreenChange", JJ => {
    YZ();
  });
  iZ.h.subscribe("pointerLockUpdate", JJ => {
    uZ = JJ;
    YZ();
    il();
  });
  const YZ = () => {
    window.removeEventListener("wheel", CZ);
    if (VJ.p && !(0, aJ.i)() && uZ) {
      window.addEventListener("wheel", CZ, {
        passive: false
      });
    }
  };
  const il = () => {
    window.removeEventListener("wheel", gZ);
    if (uZ) {
      window.addEventListener("wheel", gZ, {
        passive: false
      });
    }
  };
  const gZ = JJ => {
    if (JJ.ctrlKey === true) {
      JJ.preventDefault();
    }
  };
  function BZ(JJ, ZJ) {
    var lJ;
    if (!IJ) {
      return null;
    }
    const aJ = JJ.bloxd;
    if ((lJ = DJ) === null || lJ === undefined) {
      DJ = aJ.getMetaInfo("Board").rootId;
    }
    const GJ = ZJ?.hC ?? null;
    if (!GJ || aJ.getMetaInfo(GJ).rootId !== DJ) {
      return null;
    }
    const sJ = ZJ?.position ?? null;
    if (aJ.playerCanChangePos(JJ.rZ, sJ[0], sJ[1], sJ[2])) {
      return null;
    }
    const CJ = (JJ, ZJ, lJ) => {
      const rJ = aJ.blockDataOwner.getBlockData(JJ, ZJ, lJ);
      const jZ = rJ === null || rJ === undefined ? undefined : rJ.persisted.shared.text.split("\n")[0].toLowerCase().trim();
      return yJ.singleLineBoardActions.has(jZ);
    };
    if (CJ(sJ[0], sJ[1], sJ[2])) {
      return null;
    }
    let uJ;
    if (JJ.IC) {
      uJ = [...JJ.IC];
      JJ.bC(uJ, uJ);
    }
    return JJ.EC(uJ, JJ.PC, JJ.camera.cC + qJ.SG, (ZJ, lJ, rJ, jZ) => ZJ !== 0 && (aJ.getMetaInfo(ZJ).rootName !== "Board" || aJ.playerCanChangePos(JJ.rZ, lJ, rJ, jZ) || CJ(lJ, rJ, jZ)));
  }
  window.addEventListener("keydown", JJ => {
    if (["ArrowUp", "ArrowDown"].includes(JJ.key)) {
      JJ.preventDefault();
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState && typeof window.application?.publishEvent === "function") {
      if (document.visibilityState === "hidden") {
        window.application.publishEvent("OnWebDocumentPause", "True");
      } else if (document.visibilityState === "visible") {
        window.application.publishEvent("OnWebDocumentPause", "False");
      }
    }
  });
  document.addEventListener("keydown", JJ => {
    var ZJ;
    if (AJ.c.get("isKeydownEnabled") && !JJ.repeat) {
      if (JJ.key === "Escape") {
        AJ.c.set({
          openMenuName: AJ.c.get("openMenuName") === null ? YJ.bb.SETTINGS : null
        });
      } else if ((ZJ = mZ.l.OpenSettings) !== null && ZJ !== undefined && ZJ.includes(JJ.code)) {
        AJ.c.set({
          openMenuName: AJ.c.get("openMenuName") === YJ.bb.SETTINGS ? null : YJ.bb.SETTINGS
        });
      } else if (mZ.l.OpenCharacterCustomization.includes(JJ.code)) {
        if (!(0, KJ.v)((0, NJ.yJ)()) && (0, NJ.yJ)().VJ.canCustomiseChar === false) {
          return;
        }
        AJ.c.set({
          openMenuName: AJ.c.get("openMenuName") === YJ.bb.CUSTOMISATION ? null : YJ.bb.CUSTOMISATION
        });
      }
    }
  });
};