"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4731], {
    12020: (t, e, i) => {
      function s(t) {
        return t + .5 | 0
      }
      i.d(e, {
        $: () => ve,
        A: () => jt,
        B: () => Et,
        C: () => me,
        D: () => _t,
        E: () => je,
        F: () => V,
        G: () => di,
        H: () => ct,
        I: () => oi,
        J: () => gi,
        K: () => bi,
        L: () => Wt,
        M: () => ni,
        N: () => gt,
        O: () => I,
        P: () => nt,
        Q: () => H,
        R: () => Ne,
        S: () => At,
        T: () => ot,
        U: () => Mt,
        V: () => ue,
        W: () => Ct,
        X: () => de,
        Y: () => xe,
        Z: () => ke,
        _: () => It,
        a: () => Te,
        a0: () => Pe,
        a1: () => Ht,
        a2: () => Vt,
        a3: () => re,
        a4: () => K,
        a5: () => J,
        a6: () => he,
        a7: () => et,
        a8: () => ze,
        a9: () => Ie,
        aA: () => _i,
        aB: () => Yt,
        aC: () => ki,
        aD: () => ge,
        aE: () => kt,
        aF: () => E,
        aG: () => vt,
        aH: () => bt,
        aI: () => xt,
        aJ: () => pt,
        aK: () => wt,
        aL: () => oe,
        aM: () => ft,
        aN: () => fe,
        aO: () => Pt,
        aP: () => Rt,
        aa: () => We,
        ab: () => Z,
        ac: () => j,
        ad: () => Bt,
        ae: () => pi,
        af: () => pe,
        ag: () => it,
        ah: () => Y,
        ai: () => st,
        aj: () => Lt,
        ak: () => Le,
        al: () => si,
        am: () => Ci,
        an: () => Ai,
        ao: () => xi,
        ap: () => vi,
        aq: () => mi,
        ar: () => ye,
        as: () => Me,
        at: () => be,
        au: () => Oe,
        av: () => Re,
        aw: () => Ee,
        ax: () => Di,
        ay: () => St,
        az: () => wi,
        b: () => T,
        b3: () => at,
        b4: () => lt,
        b5: () => ut,
        c: () => Gt,
        d: () => le,
        e: () => Qt,
        f: () => G,
        g: () => F,
        h: () => tt,
        i: () => N,
        j: () => Fe,
        k: () => P,
        l: () => Nt,
        m: () => W,
        n: () => B,
        o: () => se,
        p: () => Dt,
        q: () => $t,
        r: () => zt,
        s: () => dt,
        t: () => yt,
        u: () => Ft,
        v: () => z,
        w: () => Xt,
        x: () => mt,
        y: () => qe,
        z: () => ui
      });
      const n = (t, e, i) => Math.max(Math.min(t, i), e);

      function o(t) {
        return n(s(2.55 * t), 0, 255)
      }

      function r(t) {
        return n(s(255 * t), 0, 255)
      }

      function h(t) {
        return n(s(t / 2.55) / 100, 0, 1)
      }

      function a(t) {
        return n(s(100 * t), 0, 100)
      }
      const c = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15
        },
        l = [..."0123456789ABCDEF"],
        u = t => l[15 & t],
        f = t => l[(240 & t) >> 4] + l[15 & t],
        d = t => (240 & t) >> 4 == (15 & t),
        p = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

      function b(t, e, i) {
        const s = e * Math.min(i, 1 - i),
          n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)]
      }

      function g(t, e, i) {
        const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)]
      }

      function m(t, e, i) {
        const s = b(t, 1, .5);
        let n;
        for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; 3 > n; n++) s[n] *= 1 - e - i, s[n] += e;
        return s
      }

      function x(t) {
        const e = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          n = Math.max(e, i, s),
          o = Math.min(e, i, s),
          r = (n + o) / 2;
        let h, a, c;
        return n !== o && (c = n - o, a = r > .5 ? c / (2 - n - o) : c / (n + o), h = function(t, e, i, s, n) {
          return t === n ? (e - i) / s + (i > e ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4
        }(e, i, s, c, n), h = 60 * h + .5), [0 | h, a || 0, r]
      }

      function v(t, e, i, s) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(r)
      }

      function y(t, e, i) {
        return v(b, t, e, i)
      }

      function M(t) {
        return (t % 360 + 360) % 360
      }
      const w = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh"
        },
        _ = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32"
        };
      let k;
      const O = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        S = t => t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t,
        D = t => t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92;

      function A(t, e, i) {
        if (t) {
          let s = x(t);
          s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = y(s), t.r = s[0], t.g = s[1], t.b = s[2]
        }
      }

      function C(t, e) {
        return t && Object.assign(e || {}, t)
      }

      function L(t) {
        var e = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
        return Array.isArray(t) ? t.length >= 3 && (e = {
          r: t[0],
          g: t[1],
          b: t[2],
          a: 255
        }, t.length > 3 && (e.a = r(t[3]))) : (e = C(t, {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        })).a = r(e.a), e
      }
      class R {
        constructor(t) {
          if (t instanceof R) return t;
          const e = typeof t;
          let i;
          var s;
          "object" === e ? i = L(t) : "string" === e && (i = function(t) {
            var e, i = t.length;
            return "#" === t[0] && (4 === i || 5 === i ? e = {
              r: 255 & 17 * c[t[1]],
              g: 255 & 17 * c[t[2]],
              b: 255 & 17 * c[t[3]],
              a: 5 === i ? 17 * c[t[4]] : 255
            } : (7 === i || 9 === i) && (e = {
              r: c[t[1]] << 4 | c[t[2]],
              g: c[t[3]] << 4 | c[t[4]],
              b: c[t[5]] << 4 | c[t[6]],
              a: 9 === i ? c[t[7]] << 4 | c[t[8]] : 255
            })), e
          }(t) || function(t) {
            k || (k = function() {
              const t = {},
                e = Object.keys(_),
                i = Object.keys(w);
              let s, n, o, r, h;
              for (s = 0; s < e.length; s++) {
                for (r = h = e[s], n = 0; n < i.length; n++) o = i[n], h = h.replace(o, w[o]);
                o = parseInt(_[r], 16), t[h] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
              }
              return t
            }(), k.transparent = [0, 0, 0, 0]);
            const e = k[t.toLowerCase()];
            return e && {
              r: e[0],
              g: e[1],
              b: e[2],
              a: 4 === e.length ? e[3] : 255
            }
          }(t) || ("r" === (s = t).charAt(0) ? function(t) {
            const e = O.exec(t);
            let i, s, r, h = 255;
            if (e) {
              if (e[7] !== i) {
                const t = +e[7];
                h = e[8] ? o(t) : n(255 * t, 0, 255)
              }
              return i = +e[1], s = +e[3], r = +e[5], i = 255 & (e[2] ? o(i) : n(i, 0, 255)), s = 255 & (e[4] ? o(s) : n(s, 0, 255)), r = 255 & (e[6] ? o(r) : n(r, 0, 255)), {
                r: i,
                g: s,
                b: r,
                a: h
              }
            }
          }(s) : function(t) {
            const e = p.exec(t);
            let i, s = 255;
            if (!e) return;
            e[5] !== i && (s = e[6] ? o(+e[5]) : r(+e[5]));
            const n = M(+e[2]),
              h = +e[3] / 100,
              a = +e[4] / 100;
            return i = "hwb" === e[1] ? function(t, e, i) {
              return v(m, t, e, i)
            }(n, h, a) : "hsv" === e[1] ? function(t, e, i) {
              return v(g, t, e, i)
            }(n, h, a) : y(n, h, a), {
              r: i[0],
              g: i[1],
              b: i[2],
              a: s
            }
          }(s))), this.tt = i, this.et = !!i
        }
        get valid() {
          return this.et
        }
        get rgb() {
          var t = C(this.tt);
          return t && (t.a = h(t.a)), t
        }
        set rgb(t) {
          this.tt = L(t)
        }
        rgbString() {
          return this.et ? (t = this.tt) && (255 > t.a ? `rgba(${t.r}, ${t.g}, ${t.b}, ${h(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
          var t
        }
        hexString() {
          return this.et ? (e = (t => d(t.r) && d(t.g) && d(t.b) && d(t.a))(t = this.tt) ? u : f, t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => 255 > t ? e(t) : "")(t.a, e) : void 0) : void 0;
          var t, e
        }
        hslString() {
          return this.et ? function(t) {
            if (!t) return;
            const e = x(t),
              i = e[0],
              s = a(e[1]),
              n = a(e[2]);
            return 255 > t.a ? `hsla(${i}, ${s}%, ${n}%, ${h(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`
          }(this.tt) : void 0
        }
        mix(t, e) {
          if (t) {
            const i = this.rgb,
              s = t.rgb;
            let n;
            const o = e === n ? .5 : e,
              r = 2 * o - 1,
              h = i.a - s.a,
              a = ((r * h === -1 ? r : (r + h) / (1 + r * h)) + 1) / 2;
            n = 1 - a, i.r = 255 & a * i.r + n * s.r + .5, i.g = 255 & a * i.g + n * s.g + .5, i.b = 255 & a * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i
          }
          return this
        }
        interpolate(t, e) {
          return t && (this.tt = function(t, e, i) {
            const s = D(h(t.r)),
              n = D(h(t.g)),
              o = D(h(t.b));
            return {
              r: r(S(s + i * (D(h(e.r)) - s))),
              g: r(S(n + i * (D(h(e.g)) - n))),
              b: r(S(o + i * (D(h(e.b)) - o))),
              a: t.a + i * (e.a - t.a)
            }
          }(this.tt, t.tt, e)), this
        }
        clone() {
          return new R(this.rgb)
        }
        alpha(t) {
          return this.tt.a = r(t), this
        }
        clearer(t) {
          return this.tt.a *= 1 - t, this
        }
        greyscale() {
          const t = this.tt,
            e = s(.3 * t.r + .59 * t.g + .11 * t.b);
          return t.r = t.g = t.b = e, this
        }
        opaquer(t) {
          return this.tt.a *= 1 + t, this
        }
        negate() {
          const t = this.tt;
          return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
          return A(this.tt, 2, t), this
        }
        darken(t) {
          return A(this.tt, 2, -t), this
        }
        saturate(t) {
          return A(this.tt, 1, t), this
        }
        desaturate(t) {
          return A(this.tt, 1, -t), this
        }
        rotate(t) {
          return function(t, e) {
            var i = x(t);
            i[0] = M(i[0] + e), i = y(i), t.r = i[0], t.g = i[1], t.b = i[2]
          }(this.tt, t), this
        }
      }

      function E() {}
      const j = (() => {
        let t = 0;
        return () => t++
      })();

      function P(t) {
        return null === t || typeof t > "u"
      }

      function T(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = {}.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
      }

      function N(t) {
        return null !== t && "[object Object]" === {}.toString.call(t)
      }

      function F(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
      }

      function I(t, e) {
        return F(t) ? t : e
      }

      function z(t, e) {
        return typeof t > "u" ? e : t
      }
      const W = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
        B = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

      function H(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e)
      }

      function V(t, e, i, s) {
        let n, o, r;
        if (T(t))
          if (o = t.length, s)
            for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
          else
            for (n = 0; o > n; n++) e.call(i, t[n], n);
        else if (N(t))
          for (r = Object.keys(t), o = r.length, n = 0; o > n; n++) e.call(i, t[r[n]], r[n])
      }

      function Y(t, e) {
        let i, s, n, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, s = t.length; s > i; ++i)
          if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0
      }

      function $(t) {
        if (T(t)) return t.map($);
        if (N(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            s = i.length;
          let n = 0;
          for (; s > n; ++n) e[i[n]] = $(t[i[n]]);
          return e
        }
        return t
      }

      function X(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
      }

      function U(t, e, i, s) {
        if (!X(t)) return;
        const n = e[t],
          o = i[t];
        N(n) && N(o) ? K(n, o, s) : e[t] = $(o)
      }

      function K(t, e, i) {
        const s = T(e) ? e : [e],
          n = s.length;
        if (!N(t)) return t;
        const o = (i = i || {}).merger || U;
        let r;
        for (let e = 0; n > e; ++e) {
          if (r = s[e], !N(r)) continue;
          const n = Object.keys(r);
          for (let e = 0, s = n.length; s > e; ++e) o(n[e], t, r, i)
        }
        return t
      }

      function Z(t, e) {
        return K(t, e, {
          merger: Q
        })
      }

      function Q(t, e, i) {
        if (!X(t)) return;
        const s = e[t],
          n = i[t];
        N(s) && N(n) ? Z(s, n) : {}.hasOwnProperty.call(e, t) || (e[t] = $(n))
      }
      const q = {
        "": t => t,
        x: t => t.x,
        y: t => t.y
      };

      function G(t, e) {
        return (q[e] || (q[e] = function(t) {
          const e = function(t) {
            const e = t.split("."),
              i = [];
            let s = "";
            for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
            return i
          }(t);
          return t => {
            for (const i of e) {
              if ("" === i) break;
              t = t && t[i]
            }
            return t
          }
        }(e)))(t)
      }

      function J(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }
      const tt = t => "u" > typeof t,
        et = t => "function" == typeof t,
        it = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t)
            if (!e.has(i)) return !1;
          return !0
        };

      function st(t) {
        return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
      }
      const nt = Math.PI,
        ot = 2 * nt,
        rt = ot + nt,
        ht = 1 / 0,
        at = nt / 180,
        ct = nt / 2,
        lt = nt / 4,
        ut = 2 * nt / 3,
        ft = Math.log10,
        dt = Math.sign;

      function pt(t, e, i) {
        return i > Math.abs(t - e)
      }

      function bt(t) {
        const e = Math.round(t);
        t = pt(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(ft(t))),
          s = t / i;
        return (s > 1 ? s > 2 ? s > 5 ? 10 : 5 : 2 : 1) * i
      }

      function gt(t) {
        const e = [],
          i = Math.sqrt(t);
        let s;
        for (s = 1; i > s; s++) t % s === 0 && (e.push(s), e.push(t / s));
        return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e
      }

      function mt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
      }

      function xt(t, e) {
        const i = Math.round(t);
        return t >= i - e && i + e >= t
      }

      function vt(t, e, i) {
        let s, n, o;
        for (s = 0, n = t.length; n > s; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
      }

      function yt(t) {
        return t * (nt / 180)
      }

      function Mt(t) {
        return t * (180 / nt)
      }

      function wt(t) {
        if (!F(t)) return;
        let e = 1,
          i = 0;
        for (; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
      }

      function _t(t, e) {
        const i = e.x - t.x,
          s = e.y - t.y,
          n = Math.sqrt(i * i + s * s);
        let o = Math.atan2(s, i);
        return -.5 * nt > o && (o += ot), {
          angle: o,
          distance: n
        }
      }

      function kt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
      }

      function Ot(t, e) {
        return (t - e + rt) % ot - nt
      }

      function St(t) {
        return (t % ot + ot) % ot
      }

      function Dt(t, e, i, s) {
        const n = St(t),
          o = St(e),
          r = St(i),
          h = St(o - n),
          a = St(r - n),
          c = St(n - o),
          l = St(n - r);
        return n === o || n === r || s && o === r || h > a && l > c
      }

      function At(t, e, i) {
        return Math.max(e, Math.min(i, t))
      }

      function Ct(t) {
        return At(t, -32768, 32767)
      }

      function Lt(t, e, i, s = 1e-6) {
        return t >= Math.min(e, i) - s && Math.max(e, i) + s >= t
      }

      function Rt(t, e, i) {
        i = i || (i => t[i] < e);
        let s, n = t.length - 1,
          o = 0;
        for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
        return {
          lo: o,
          hi: n
        }
      }
      const Et = (t, e, i, s) => Rt(t, i, s ? s => {
          const n = t[s][e];
          return i > n || n === i && t[s + 1][e] === i
        } : s => t[s][e] < i),
        jt = (t, e, i) => Rt(t, i, s => t[s][e] >= i);

      function Pt(t, e, i) {
        let s = 0,
          n = t.length;
        for (; n > s && t[s] < e;) s++;
        for (; n > s && t[n - 1] > i;) n--;
        return s > 0 || n < t.length ? t.slice(s, n) : t
      }
      const Tt = ["push", "pop", "shift", "splice", "unshift"];

      function Nt(t, e) {
        t.it ? t.it.listeners.push(e) : (Object.defineProperty(t, "it", {
          configurable: !0,
          enumerable: !1,
          value: {
            listeners: [e]
          }
        }), Tt.forEach(e => {
          const i = "_onData" + J(e),
            s = t[e];
          Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value(...e) {
              const n = s.apply(this, e);
              return t.it.listeners.forEach(t => {
                "function" == typeof t[i] && t[i](...e)
              }), n
            }
          })
        }))
      }

      function Ft(t, e) {
        const i = t.it;
        if (!i) return;
        const s = i.listeners,
          n = s.indexOf(e); - 1 !== n && s.splice(n, 1), 0 >= s.length && (Tt.forEach(e => {
          delete t[e]
        }), delete t.it)
      }

      function It(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e)
      }
      const zt = typeof window > "u" ? function(t) {
        return t()
      } : window.requestAnimationFrame;

      function Wt(t, e) {
        let i = [],
          s = !1;
        return function(...n) {
          i = n, s || (s = !0, zt.call(window, () => {
            s = !1, t.apply(e, i)
          }))
        }
      }

      function Bt(t, e) {
        let i;
        return function(...s) {
          return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e
        }
      }
      const Ht = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        Vt = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
        Yt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;

      function $t(t, e, i) {
        const s = e.length;
        let n = 0,
          o = s;
        if (t.st) {
          const {
            iScale: r,
            nt: h
          } = t, a = r.axis, {
            min: c,
            max: l,
            minDefined: u,
            maxDefined: f
          } = r.getUserBounds();
          u && (n = At(Math.min(Et(h, a, c).lo, i ? s : Et(e, a, r.getPixelForValue(c)).lo), 0, s - 1)), o = f ? At(Math.max(Et(h, r.axis, l, !0).hi + 1, i ? 0 : Et(e, a, r.getPixelForValue(l), !0).hi + 1), n, s) - n : s - n
        }
        return {
          start: n,
          count: o
        }
      }

      function Xt(t) {
        const {
          xScale: e,
          yScale: i,
          ot: s
        } = t, n = {
          xmin: e.min,
          xmax: e.max,
          ymin: i.min,
          ymax: i.max
        };
        if (!s) return t.ot = n, !0;
        const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
        return Object.assign(s, n), o
      }
      const Ut = t => 0 === t || 1 === t,
        Kt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * ot / i),
        Zt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * ot / i) + 1,
        Qt = {
          linear: t => t,
          easeInQuad: t => t * t,
          easeOutQuad: t => -t * (t - 2),
          easeInOutQuad: t => 1 > (t /= .5) ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
          easeInCubic: t => t * t * t,
          easeOutCubic: t => (t -= 1) * t * t + 1,
          easeInOutCubic: t => 1 > (t /= .5) ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
          easeInQuart: t => t * t * t * t,
          easeOutQuart: t => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: t => 1 > (t /= .5) ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: t => t * t * t * t * t,
          easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: t => 1 > (t /= .5) ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: t => 1 - Math.cos(t * ct),
          easeOutSine: t => Math.sin(t * ct),
          easeInOutSine: t => -.5 * (Math.cos(nt * t) - 1),
          easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
          easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
          easeInOutExpo: t => Ut(t) ? t : .5 > t ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: t => 1 > t ? -(Math.sqrt(1 - t * t) - 1) : t,
          easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: t => 1 > (t /= .5) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: t => Ut(t) ? t : Kt(t, .075, .3),
          easeOutElastic: t => Ut(t) ? t : Zt(t, .075, .3),
          easeInOutElastic: t => Ut(t) ? t : .5 > t ? .5 * Kt(2 * t, .1125, .45) : .5 + .5 * Zt(2 * t - 1, .1125, .45),
          easeInBack: t => t * t * (2.70158 * t - 1.70158),
          easeOutBack: t => (t -= 1) * t * (2.70158 * t + 1.70158) + 1,
          easeInOutBack(t) {
            let e = 1.70158;
            return 1 > (t /= .5) ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
          },
          easeInBounce: t => 1 - Qt.easeOutBounce(1 - t),
          easeOutBounce: t => 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
          easeInOutBounce: t => .5 > t ? .5 * Qt.easeInBounce(2 * t) : .5 * Qt.easeOutBounce(2 * t - 1) + .5
        };

      function qt(t) {
        if (t && "object" == typeof t) {
          const e = t.toString();
          return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
        }
        return !1
      }

      function Gt(t) {
        return qt(t) ? t : new R(t)
      }

      function Jt(t) {
        return qt(t) ? t : new R(t).saturate(.5).darken(.1).hexString()
      }
      const te = ["x", "y", "borderWidth", "radius", "tension"],
        ee = ["color", "borderColor", "backgroundColor"],
        ie = new Map;

      function se(t, e, i) {
        return function(t, e) {
          const i = t + JSON.stringify(e = e || {});
          let s = ie.get(i);
          return s || (s = new Intl.NumberFormat(t, e), ie.set(i, s)), s
        }(e, i).format(t)
      }
      const ne = {
        values: t => T(t) ? t : "" + t,
        numeric(t, e, i) {
          if (0 === t) return "0";
          const s = this.chart.options.locale;
          let n, o = t;
          if (i.length > 1) {
            const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
            (1e-4 > e || e > 1e15) && (n = "scientific"), o = function(t, e) {
              let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
              return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i
            }(t, i)
          }
          const r = ft(Math.abs(o)),
            h = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            a = {
              notation: n,
              minimumFractionDigits: h,
              maximumFractionDigits: h
            };
          return Object.assign(a, this.options.ticks.format), se(t, s, a)
        },
        logarithmic(t, e, i) {
          if (0 === t) return "0";
          const s = i[e].significand || t / Math.pow(10, Math.floor(ft(t)));
          return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? ne.numeric.call(this, t, e, i) : ""
        }
      };
      var oe = {
        formatters: ne
      };
      const re = Object.create(null),
        he = Object.create(null);

      function ae(t, e) {
        if (!e) return t;
        const i = e.split(".");
        for (let e = 0, s = i.length; s > e; ++e) {
          const s = i[e];
          t = t[s] || (t[s] = Object.create(null))
        }
        return t
      }

      function ce(t, e, i) {
        return "string" == typeof e ? K(ae(t, e), i) : K(ae(t, ""), e)
      }
      var le = new class {
        constructor(t, e) {
          this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
          }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Jt(e.backgroundColor), this.hoverBorderColor = (t, e) => Jt(e.borderColor), this.hoverColor = (t, e) => Jt(e.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
          }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
        }
        set(t, e) {
          return ce(this, t, e)
        }
        get(t) {
          return ae(this, t)
        }
        describe(t, e) {
          return ce(he, t, e)
        }
        override(t, e) {
          return ce(re, t, e)
        }
        route(t, e, i, s) {
          const n = ae(this, t),
            o = ae(this, i),
            r = "_" + e;
          Object.defineProperties(n, {
            [r]: {
              value: n[e],
              writable: !0
            },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[r],
                  e = o[s];
                return N(t) ? Object.assign({}, e, t) : z(t, e)
              },
              set(t) {
                this[r] = t
              }
            }
          })
        }
        apply(t) {
          t.forEach(t => t(this))
        }
      }({
        rt: t => !t.startsWith("on"),
        ht: t => "events" !== t,
        hover: {
          ct: "interaction"
        },
        interaction: {
          rt: !1,
          ht: !1
        }
      }, [function(t) {
        t.set("animation", {
          delay: void 0,
          duration: 1e3,
          easing: "easeOutQuart",
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0
        }), t.describe("animation", {
          ct: !1,
          ht: !1,
          rt: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), t.set("animations", {
          colors: {
            type: "color",
            properties: ee
          },
          numbers: {
            type: "number",
            properties: te
          }
        }), t.describe("animations", {
          ct: "animation"
        }), t.set("transitions", {
          active: {
            animation: {
              duration: 400
            }
          },
          resize: {
            animation: {
              duration: 0
            }
          },
          show: {
            animations: {
              colors: {
                from: "transparent"
              },
              visible: {
                type: "boolean",
                duration: 0
              }
            }
          },
          hide: {
            animations: {
              colors: {
                to: "transparent"
              },
              visible: {
                type: "boolean",
                easing: "linear",
                fn: t => 0 | t
              }
            }
          }
        })
      }, function(t) {
        t.set("layout", {
          autoPadding: !0,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        })
      }, function(t) {
        t.set("scale", {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: "ticks",
          clip: !0,
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1
          },
          border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
          },
          title: {
            display: !1,
            text: "",
            padding: {
              top: 4,
              bottom: 4
            }
          },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: oe.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
          }
        }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
          ct: !1,
          rt: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
          ht: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
        }), t.describe("scales", {
          ct: "scale"
        }), t.describe("scale.ticks", {
          rt: t => "backdropPadding" !== t && "callback" !== t,
          ht: t => "backdropPadding" !== t
        })
      }]);

      function ue(t, e, i, s, n) {
        let o = e[n];
        return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s
      }

      function fe(t, e, i, s) {
        let n = (s = s || {}).data = s.data || {},
          o = s.garbageCollect = s.garbageCollect || [];
        s.font !== e && (n = s.data = {}, o = s.garbageCollect = [], s.font = e), t.save(), t.font = e;
        let r = 0;
        const h = i.length;
        let a, c, l, u, f;
        for (a = 0; h > a; a++)
          if (u = i[a], null == u || T(u)) {
            if (T(u))
              for (c = 0, l = u.length; l > c; c++) f = u[c], null != f && !T(f) && (r = ue(t, n, o, r, f))
          } else r = ue(t, n, o, r, u);
        t.restore();
        const d = o.length / 2;
        if (d > i.length) {
          for (a = 0; d > a; a++) delete n[o[a]];
          o.splice(0, d)
        }
        return r
      }

      function de(t, e, i) {
        const s = t.currentDevicePixelRatio,
          n = 0 !== i ? Math.max(i / 2, .5) : 0;
        return Math.round((e - n) * s) / s + n
      }

      function pe(t, e) {
        (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
      }

      function be(t, e, i, s) {
        ge(t, e, i, s, null)
      }

      function ge(t, e, i, s, n) {
        let o, r, h, a, c, l, u, f;
        const d = e.pointStyle,
          p = e.rotation,
          b = e.radius;
        let g = (p || 0) * at;
        if (d && "object" == typeof d && (o = d.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(g), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), void t.restore();
        if (!isNaN(b) && b > 0) {
          switch (t.beginPath(), d) {
            default:
              n ? t.ellipse(i, s, n / 2, b, 0, 0, ot) : t.arc(i, s, b, 0, ot), t.closePath();
              break;
            case "triangle":
              l = n ? n / 2 : b, t.moveTo(i + Math.sin(g) * l, s - Math.cos(g) * b), g += ut, t.lineTo(i + Math.sin(g) * l, s - Math.cos(g) * b), g += ut, t.lineTo(i + Math.sin(g) * l, s - Math.cos(g) * b), t.closePath();
              break;
            case "rectRounded":
              c = .516 * b, a = b - c, r = Math.cos(g + lt) * a, u = Math.cos(g + lt) * (n ? n / 2 - c : a), h = Math.sin(g + lt) * a, f = Math.sin(g + lt) * (n ? n / 2 - c : a), t.arc(i - u, s - h, c, g - nt, g - ct), t.arc(i + f, s - r, c, g - ct, g), t.arc(i + u, s + h, c, g, g + ct), t.arc(i - f, s + r, c, g + ct, g + nt), t.closePath();
              break;
            case "rect":
              if (!p) {
                a = Math.SQRT1_2 * b, l = n ? n / 2 : a, t.rect(i - l, s - a, 2 * l, 2 * a);
                break
              }
              g += lt;
            case "rectRot":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(i - u, s - h), t.lineTo(i + f, s - r), t.lineTo(i + u, s + h), t.lineTo(i - f, s + r), t.closePath();
              break;
            case "crossRot":
              g += lt;
            case "cross":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(i - u, s - h), t.lineTo(i + u, s + h), t.moveTo(i + f, s - r), t.lineTo(i - f, s + r);
              break;
            case "star":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(i - u, s - h), t.lineTo(i + u, s + h), t.moveTo(i + f, s - r), t.lineTo(i - f, s + r), g += lt, u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(i - u, s - h), t.lineTo(i + u, s + h), t.moveTo(i + f, s - r), t.lineTo(i - f, s + r);
              break;
            case "line":
              r = n ? n / 2 : Math.cos(g) * b, h = Math.sin(g) * b, t.moveTo(i - r, s - h), t.lineTo(i + r, s + h);
              break;
            case "dash":
              t.moveTo(i, s), t.lineTo(i + Math.cos(g) * (n ? n / 2 : b), s + Math.sin(g) * b);
              break;
            case !1:
              t.closePath()
          }
          t.fill(), e.borderWidth > 0 && t.stroke()
        }
      }

      function me(t, e, i) {
        return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
      }

      function xe(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
      }

      function ve(t) {
        t.restore()
      }

      function ye(t, e, i, s, n) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === n) {
          const s = (e.x + i.x) / 2;
          t.lineTo(s, e.y), t.lineTo(s, i.y)
        } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y)
      }

      function Me(t, e, i, s) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y)
      }

      function we(t, e, i, s, n) {
        if (n.strikethrough || n.underline) {
          const o = t.measureText(s),
            r = e - o.actualBoundingBoxLeft,
            h = e + o.actualBoundingBoxRight,
            a = i - o.actualBoundingBoxAscent,
            c = i + o.actualBoundingBoxDescent,
            l = n.strikethrough ? (a + c) / 2 : c;
          t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(r, l), t.lineTo(h, l), t.stroke()
        }
      }

      function _e(t, e) {
        const i = t.fillStyle;
        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i
      }

      function ke(t, e, i, s, n, o = {}) {
        const r = T(e) ? e : [e],
          h = o.strokeWidth > 0 && "" !== o.strokeColor;
        let a, c;
        for (t.save(), t.font = n.string, function(t, e) {
            e.translation && t.translate(e.translation[0], e.translation[1]), P(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
          }(t, o), a = 0; a < r.length; ++a) c = r[a], o.backdrop && _e(t, o.backdrop), h && (o.strokeColor && (t.strokeStyle = o.strokeColor), P(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(c, i, s, o.maxWidth)), t.fillText(c, i, s, o.maxWidth), we(t, i, s, c, o), s += +n.lineHeight;
        t.restore()
      }

      function Oe(t, e) {
        const {
          x: i,
          y: s,
          w: n,
          h: o,
          radius: r
        } = e;
        t.arc(i + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * nt, nt, !0), t.lineTo(i, s + o - r.bottomLeft), t.arc(i + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, nt, ct, !0), t.lineTo(i + n - r.bottomRight, s + o), t.arc(i + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ct, 0, !0), t.lineTo(i + n, s + r.topRight), t.arc(i + n - r.topRight, s + r.topRight, r.topRight, 0, -ct, !0), t.lineTo(i + r.topLeft, s)
      }
      const Se = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        De = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

      function Ae(t, e) {
        const i = ("" + t).match(Se);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (t = +i[2], i[3]) {
          case "px":
            return t;
          case "%":
            t /= 100
        }
        return e * t
      }
      const Ce = t => +t || 0;

      function Le(t, e) {
        const i = {},
          s = N(e),
          n = s ? Object.keys(e) : e,
          o = N(t) ? s ? i => z(t[i], t[e[i]]) : e => t[e] : () => t;
        for (const t of n) i[t] = Ce(o(t));
        return i
      }

      function Re(t) {
        return Le(t, {
          top: "y",
          right: "x",
          bottom: "y",
          left: "x"
        })
      }

      function Ee(t) {
        return Le(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
      }

      function je(t) {
        const e = Re(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
      }

      function Pe(t, e) {
        t = t || {}, e = e || le.font;
        let i = z(t.size, e.size);
        "string" == typeof i && (i = parseInt(i, 10));
        let s = z(t.style, e.style);
        s && !("" + s).match(De) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
        const n = {
          family: z(t.family, e.family),
          lineHeight: Ae(z(t.lineHeight, e.lineHeight), i),
          size: i,
          style: s,
          weight: z(t.weight, e.weight),
          string: ""
        };
        return n.string = function(t) {
          return !t || P(t.size) || P(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(n), n
      }

      function Te(t, e, i, s) {
        let n, o, r, h = !0;
        for (n = 0, o = t.length; o > n; ++n)
          if (r = t[n], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), h = !1), void 0 !== i && T(r) && (r = r[i % r.length], h = !1), void 0 !== r)) return s && !h && (s.cacheable = !1), r
      }

      function Ne(t, e, i) {
        const {
          min: s,
          max: n
        } = t, o = B(e, (n - s) / 2), r = (t, e) => i && 0 === t ? 0 : t + e;
        return {
          min: r(s, -Math.abs(o)),
          max: r(n, o)
        }
      }

      function Fe(t, e) {
        return Object.assign(Object.create(t), e)
      }

      function Ie(t, e = [""], i, s, n = () => t[0]) {
        const o = i || t;
        typeof s > "u" && (s = Ze("_fallback", t));
        const r = {
          [Symbol.toStringTag]: "Object",
          lt: !0,
          ut: t,
          ft: o,
          ct: s,
          dt: n,
          override: i => Ie([i, ...t], e, o, s)
        };
        return new Proxy(r, {
          deleteProperty: (e, i) => (delete e[i], delete e.bt, delete t[0][i], !0),
          get: (i, s) => Ve(i, s, () => function(t, e, i, s) {
            let n;
            for (const o of e)
              if (n = Ze(Be(o, t), i), "u" > typeof n) return He(t, n) ? Ue(i, s, t, n) : n
          }(s, e, t, i)),
          getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t.ut[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => Qe(t).includes(e),
          ownKeys: t => Qe(t),
          set(t, e, i) {
            const s = t.gt || (t.gt = n());
            return t[e] = s[e] = i, delete t.bt, !0
          }
        })
      }

      function ze(t, e, i, s) {
        const n = {
          lt: !1,
          xt: t,
          vt: e,
          yt: i,
          Mt: new Set,
          wt: We(t, s),
          setContext: e => ze(t, e, i, s),
          override: n => ze(t.override(n), e, i, s)
        };
        return new Proxy(n, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) => Ve(t, e, () => function(t, e, i) {
            const {
              xt: s,
              vt: n,
              yt: o,
              wt: r
            } = t;
            let h = s[e];
            return et(h) && r.isScriptable(e) && (h = function(t, e, i, s) {
              const {
                xt: n,
                vt: o,
                yt: r,
                Mt: h
              } = i;
              if (h.has(t)) throw Error("Recursion detected: " + Array.from(h).join("->") + "->" + t);
              h.add(t);
              let a = e(o, r || s);
              return h.delete(t), He(t, a) && (a = Ue(n.ut, n, t, a)), a
            }(e, h, t, i)), T(h) && h.length && (h = function(t, e, i, s) {
              const {
                xt: n,
                vt: o,
                yt: r,
                wt: h
              } = i;
              if ("u" > typeof o.index && s(t)) return e[o.index % e.length];
              if (N(e[0])) {
                const i = e,
                  s = n.ut.filter(t => t !== i);
                e = [];
                for (const a of i) {
                  const i = Ue(s, n, t, a);
                  e.push(ze(i, o, r && r[t], h))
                }
              }
              return e
            }(e, h, t, r.isIndexable)), He(e, h) && (h = ze(h, n, o && o[e], r)), h
          }(t, e, i)),
          getOwnPropertyDescriptor: (e, i) => e.wt.allKeys ? Reflect.has(t, i) ? {
            enumerable: !0,
            configurable: !0
          } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, s) => (t[i] = s, delete e[i], !0)
        })
      }

      function We(t, e = {
        scriptable: !0,
        indexable: !0
      }) {
        const {
          rt: i = e.scriptable,
          ht: s = e.indexable,
          _t: n = e.allKeys
        } = t;
        return {
          allKeys: n,
          scriptable: i,
          indexable: s,
          isScriptable: et(i) ? i : () => i,
          isIndexable: et(s) ? s : () => s
        }
      }
      const Be = (t, e) => t ? t + J(e) : e,
        He = (t, e) => N(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

      function Ve(t, e, i) {
        if ({}.hasOwnProperty.call(t, e)) return t[e];
        const s = i();
        return t[e] = s, s
      }

      function Ye(t, e, i) {
        return et(t) ? t(e, i) : t
      }
      const $e = (t, e) => !0 === t ? e : "string" == typeof t ? G(e, t) : void 0;

      function Xe(t, e, i, s, n) {
        for (const o of e) {
          const e = $e(i, o);
          if (e) {
            t.add(e);
            const o = Ye(e.ct, i, n);
            if ("u" > typeof o && o !== i && o !== s) return o
          } else if (!1 === e && "u" > typeof s && i !== s) return null
        }
        return !1
      }

      function Ue(t, e, i, s) {
        const n = e.ft,
          o = Ye(e.ct, i, s),
          r = [...t, ...n],
          h = new Set;
        h.add(s);
        let a = Ke(h, r, i, o || i, s);
        return !(null === a || "u" > typeof o && o !== i && (a = Ke(h, r, o, a, s), null === a)) && Ie(Array.from(h), [""], n, o, () => function(t, e, i) {
          const s = t.dt();
          e in s || (s[e] = {});
          const n = s[e];
          return T(n) && N(i) ? i : n || {}
        }(e, i, s))
      }

      function Ke(t, e, i, s, n) {
        for (; i;) i = Xe(t, e, i, s, n);
        return i
      }

      function Ze(t, e) {
        for (const i of e) {
          if (!i) continue;
          const e = i[t];
          if ("u" > typeof e) return e
        }
      }

      function Qe(t) {
        let e = t.bt;
        return e || (e = t.bt = function(t) {
          const e = new Set;
          for (const i of t)
            for (const t of Object.keys(i).filter(t => !t.startsWith("_"))) e.add(t);
          return Array.from(e)
        }(t.ut)), e
      }

      function qe(t, e, i, s) {
        const {
          iScale: n
        } = t, {
          key: o = "r"
        } = this.kt, r = Array(s);
        let h, a, c, l;
        for (h = 0, a = s; a > h; ++h) c = h + i, l = e[c], r[h] = {
          r: n.parse(G(l, o), c)
        };
        return r
      }
      const Ge = Number.EPSILON || 1e-14,
        Je = (t, e) => e < t.length && !t[e].skip && t[e],
        ti = t => "x" === t ? "y" : "x";

      function ei(t, e, i, s) {
        const n = t.skip ? e : t,
          o = e,
          r = i.skip ? e : i,
          h = kt(o, n),
          a = kt(r, o);
        let c = h / (h + a),
          l = a / (h + a);
        c = isNaN(c) ? 0 : c, l = isNaN(l) ? 0 : l;
        const u = s * c,
          f = s * l;
        return {
          previous: {
            x: o.x - u * (r.x - n.x),
            y: o.y - u * (r.y - n.y)
          },
          next: {
            x: o.x + f * (r.x - n.x),
            y: o.y + f * (r.y - n.y)
          }
        }
      }

      function ii(t, e, i) {
        return Math.max(Math.min(t, i), e)
      }

      function si(t, e, i, s, n) {
        let o, r, h, a;
        if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) ! function(t, e = "x") {
          const i = ti(e),
            s = t.length,
            n = Array(s).fill(0),
            o = Array(s);
          let r, h, a, c = Je(t, 0);
          for (r = 0; s > r; ++r)
            if (h = a, a = c, c = Je(t, r + 1), a) {
              if (c) {
                const t = c[e] - a[e];
                n[r] = 0 !== t ? (c[i] - a[i]) / t : 0
              }
              o[r] = h ? c ? dt(n[r - 1]) !== dt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
            }(function(t, e, i) {
              const s = t.length;
              let n, o, r, h, a, c = Je(t, 0);
              for (let l = 0; s - 1 > l; ++l)
                if (a = c, c = Je(t, l + 1), a && c) {
                  if (pt(e[l], 0, Ge)) {
                    i[l] = i[l + 1] = 0;
                    continue
                  }
                  n = i[l] / e[l], o = i[l + 1] / e[l], h = Math.pow(n, 2) + Math.pow(o, 2), h > 9 && (r = 3 / Math.sqrt(h), i[l] = n * r * e[l], i[l + 1] = o * r * e[l])
                }
            })(t, n, o),
          function(t, e, i = "x") {
            const s = ti(i),
              n = t.length;
            let o, r, h, a = Je(t, 0);
            for (let c = 0; n > c; ++c) {
              if (r = h, h = a, a = Je(t, c + 1), !h) continue;
              const n = h[i],
                l = h[s];
              r && (o = (n - r[i]) / 3, h["cp1" + i] = n - o, h["cp1" + s] = l - o * e[c]), a && (o = (a[i] - n) / 3, h["cp2" + i] = n + o, h["cp2" + s] = l + o * e[c])
            }
          }(t, o, e)
        }(t, n);
        else {
          let i = s ? t[t.length - 1] : t[0];
          for (o = 0, r = t.length; r > o; ++o) h = t[o], a = ei(i, h, t[Math.min(o + 1, r - (s ? 0 : 1)) % r], e.tension), h.cp1x = a.previous.x, h.cp1y = a.previous.y, h.cp2x = a.next.x, h.cp2y = a.next.y, i = h
        }
        e.capBezierPoints && function(t, e) {
          let i, s, n, o, r, h = me(t[0], e);
          for (i = 0, s = t.length; s > i; ++i) r = o, o = h, h = s - 1 > i && me(t[i + 1], e), o && (n = t[i], r && (n.cp1x = ii(n.cp1x, e.left, e.right), n.cp1y = ii(n.cp1y, e.top, e.bottom)), h && (n.cp2x = ii(n.cp2x, e.left, e.right), n.cp2y = ii(n.cp2y, e.top, e.bottom)))
        }(t, i)
      }

      function ni() {
        return "u" > typeof window && "u" > typeof document
      }

      function oi(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
      }

      function ri(t, e, i) {
        let s;
        return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s
      }
      const hi = t => t.ownerDocument.defaultView.getComputedStyle(t, null),
        ai = ["top", "right", "bottom", "left"];

      function ci(t, e, i) {
        const s = {};
        i = i ? "-" + i : "";
        for (let n = 0; 4 > n; n++) {
          const o = ai[n];
          s[o] = parseFloat(t[e + "-" + o + i]) || 0
        }
        return s.width = s.left + s.right, s.height = s.top + s.bottom, s
      }
      const li = (t, e, i) => !(0 >= t && 0 >= e || i && i.shadowRoot);

      function ui(t, e) {
        if ("native" in t) return t;
        const {
          canvas: i,
          currentDevicePixelRatio: s
        } = e, n = hi(i), o = "border-box" === n.boxSizing, r = ci(n, "padding"), h = ci(n, "border", "width"), {
          x: a,
          y: c,
          box: l
        } = function(t, e) {
          const i = t.touches,
            s = i && i.length ? i[0] : t,
            {
              offsetX: n,
              offsetY: o
            } = s;
          let r, h, a = !1;
          if (li(n, o, t.target)) r = n, h = o;
          else {
            const t = e.getBoundingClientRect();
            r = s.clientX - t.left, h = s.clientY - t.top, a = !0
          }
          return {
            x: r,
            y: h,
            box: a
          }
        }(t, i), u = r.left + (l && h.left), f = r.top + (l && h.top);
        let {
          width: d,
          height: p
        } = e;
        return o && (d -= r.width + h.width, p -= r.height + h.height), {
          x: Math.round((a - u) / d * i.width / s),
          y: Math.round((c - f) / p * i.height / s)
        }
      }
      const fi = t => Math.round(10 * t) / 10;

      function di(t, e, i, s) {
        const n = hi(t),
          o = ci(n, "margin"),
          r = ri(n.maxWidth, t, "clientWidth") || ht,
          h = ri(n.maxHeight, t, "clientHeight") || ht,
          a = function(t, e, i) {
            let s, n;
            if (void 0 === e || void 0 === i) {
              const o = oi(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  r = hi(o),
                  h = ci(r, "border", "width"),
                  a = ci(r, "padding");
                e = t.width - a.width - h.width, i = t.height - a.height - h.height, s = ri(r.maxWidth, o, "clientWidth"), n = ri(r.maxHeight, o, "clientHeight")
              } else e = t.clientWidth, i = t.clientHeight
            }
            return {
              width: e,
              height: i,
              maxWidth: s || ht,
              maxHeight: n || ht
            }
          }(t, e, i);
        let {
          width: c,
          height: l
        } = a;
        if ("content-box" === n.boxSizing) {
          const t = ci(n, "border", "width"),
            e = ci(n, "padding");
          c -= e.width + t.width, l -= e.height + t.height
        }
        return c = Math.max(0, c - o.width), l = Math.max(0, s ? c / s : l - o.height), c = fi(Math.min(c, r, a.maxWidth)), l = fi(Math.min(l, h, a.maxHeight)), c && !l && (l = fi(c / 2)), (void 0 !== e || void 0 !== i) && s && a.height && l > a.height && (l = a.height, c = fi(Math.floor(l * s))), {
          width: c,
          height: l
        }
      }

      function pi(t, e, i) {
        const s = e || 1,
          n = Math.floor(t.height * s),
          o = Math.floor(t.width * s);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width);
        const r = t.canvas;
        return r.style && (i || !r.style.height && !r.style.width) && (r.style.height = t.height + "px", r.style.width = t.width + "px"), (t.currentDevicePixelRatio !== s || r.height !== n || r.width !== o) && (t.currentDevicePixelRatio = s, r.height = n, r.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
      }
      const bi = function() {
        let t = !1;
        try {
          const e = {
            get passive() {
              return t = !0, !1
            }
          };
          ni() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
        } catch {}
        return t
      }();

      function gi(t, e) {
        const i = function(t, e) {
            return hi(t).getPropertyValue(e)
          }(t, e),
          s = i && i.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0
      }

      function mi(t, e, i, s) {
        return {
          x: t.x + i * (e.x - t.x),
          y: t.y + i * (e.y - t.y)
        }
      }

      function xi(t, e, i, s) {
        return {
          x: t.x + i * (e.x - t.x),
          y: "middle" === s ? .5 > i ? t.y : e.y : "after" === s ? 1 > i ? t.y : e.y : i > 0 ? e.y : t.y
        }
      }

      function vi(t, e, i, s) {
        const n = {
            x: t.cp2x,
            y: t.cp2y
          },
          o = {
            x: e.cp1x,
            y: e.cp1y
          },
          r = mi(t, n, i),
          h = mi(n, o, i),
          a = mi(o, e, i),
          c = mi(r, h, i),
          l = mi(h, a, i);
        return mi(c, l, i)
      }
      const yi = function(t, e) {
          return {
            x: i => t + t + e - i,
            setWidth(t) {
              e = t
            },
            textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e
          }
        },
        Mi = function() {
          return {
            x: t => t,
            setWidth(t) {},
            textAlign: t => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t
          }
        };

      function wi(t, e, i) {
        return t ? yi(e, i) : Mi()
      }

      function _i(t, e) {
        let i, s;
        ("ltr" === e || "rtl" === e) && (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s)
      }

      function ki(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
      }

      function Oi(t) {
        return "angle" === t ? {
          between: Dt,
          compare: Ot,
          normalize: St
        } : {
          between: Lt,
          compare: (t, e) => t - e,
          normalize: t => t
        }
      }

      function Si({
        start: t,
        end: e,
        count: i,
        loop: s,
        style: n
      }) {
        return {
          start: t % i,
          end: e % i,
          loop: s && (e - t + 1) % i == 0,
          style: n
        }
      }

      function Di(t, e, i) {
        if (!i) return [t];
        const {
          property: s,
          start: n,
          end: o
        } = i, r = e.length, {
          compare: h,
          between: a,
          normalize: c
        } = Oi(s), {
          start: l,
          end: u,
          loop: f,
          style: d
        } = function(t, e, i) {
          const {
            property: s,
            start: n,
            end: o
          } = i, {
            between: r,
            normalize: h
          } = Oi(s), a = e.length;
          let c, l, {
            start: u,
            end: f,
            loop: d
          } = t;
          if (d) {
            for (u += a, f += a, c = 0, l = a; l > c && r(h(e[u % a][s]), n, o); ++c) u--, f--;
            u %= a, f %= a
          }
          return u > f && (f += a), {
            start: u,
            end: f,
            loop: d,
            style: t.style
          }
        }(t, e, i), p = [];
        let b, g, m, x = !1,
          v = null;
        const y = () => x || a(n, m, b) && 0 !== h(n, m),
          M = () => !x || 0 === h(o, b) || a(o, m, b);
        for (let t = l, i = l; u >= t; ++t) g = e[t % r], !g.skip && (b = c(g[s]), b !== m && (x = a(b, n, o), null === v && y() && (v = 0 === h(b, n) ? t : i), null !== v && M() && (p.push(Si({
          start: v,
          end: t,
          loop: f,
          count: r,
          style: d
        })), v = null), i = t, m = b));
        return null !== v && p.push(Si({
          start: v,
          end: u,
          loop: f,
          count: r,
          style: d
        })), p
      }

      function Ai(t, e) {
        const i = [],
          s = t.segments;
        for (let n = 0; n < s.length; n++) {
          const o = Di(s[n], t.points, e);
          o.length && i.push(...o)
        }
        return i
      }

      function Ci(t, e) {
        const i = t.points,
          s = t.options.spanGaps,
          n = i.length;
        if (!n) return [];
        const o = !!t.Ot,
          {
            start: r,
            end: h
          } = function(t, e, i, s) {
            let n = 0,
              o = e - 1;
            if (i && !s)
              for (; e > n && !t[n].skip;) n++;
            for (; e > n && t[n].skip;) n++;
            for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
            return o %= e, {
              start: n,
              end: o
            }
          }(i, n, o, s);
        return function(t, e, i, s) {
          return s && s.setContext && i ? function(t, e, i, s) {
            const n = t.St.getContext(),
              o = Li(t.options),
              {
                Dt: r,
                options: {
                  spanGaps: h
                }
              } = t,
              a = i.length,
              c = [];
            let l = o,
              u = e[0].start,
              f = u;

            function d(t, e, s, n) {
              const o = h ? -1 : 1;
              if (t !== e) {
                for (t += a; i[t % a].skip;) t -= o;
                for (; i[e % a].skip;) e += o;
                t % a !== e % a && (c.push({
                  start: t % a,
                  end: e % a,
                  loop: s,
                  style: n
                }), l = n, u = e % a)
              }
            }
            for (const t of e) {
              u = h ? u : t.start;
              let e, o = i[u % a];
              for (f = u + 1; f <= t.end; f++) {
                const h = i[f % a];
                e = Li(s.setContext(Fe(n, {
                  type: "segment",
                  p0: o,
                  p1: h,
                  p0DataIndex: (f - 1) % a,
                  p1DataIndex: f % a,
                  datasetIndex: r
                }))), Ri(e, l) && d(u, f - 1, t.loop, l), o = h, l = e
              }
              f - 1 > u && d(u, f - 1, t.loop, l)
            }
            return c
          }(t, e, i, s) : e
        }(t, !0 === s ? [{
          start: r,
          end: h,
          loop: o
        }] : function(t, e, i, s) {
          const n = t.length,
            o = [];
          let r, h = e,
            a = t[e];
          for (r = e + 1; i >= r; ++r) {
            const i = t[r % n];
            i.skip || i.stop ? a.skip || (s = !1, o.push({
              start: e % n,
              end: (r - 1) % n,
              loop: s
            }), e = h = i.stop ? r : null) : (h = r, a.skip && (e = r)), a = i
          }
          return null !== h && o.push({
            start: e % n,
            end: h % n,
            loop: s
          }), o
        }(i, r, r > h ? h + n : h, !!t.At && 0 === r && h === n - 1), i, e)
      }

      function Li(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor
        }
      }

      function Ri(t, e) {
        if (!e) return !1;
        const i = [],
          s = function(t, e) {
            return qt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e
          };
        return JSON.stringify(t, s) !== JSON.stringify(e, s)
      }
    },
    44731: (t, e, i) => {
      i.d(e, {
        N1: () => u
      });
      var s = i(96540),
        n = i(66118);
      const o = "label";

      function r(t, e) {
        "function" == typeof t ? t(e) : t && (t.current = e)
      }

      function h(t, e) {
        t.labels = e
      }

      function a(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
        const s = [];
        t.datasets = e.map(e => {
          const n = t.datasets.find(t => t[i] === e[i]);
          return n && e.data && !s.includes(n) ? (s.push(n), Object.assign(n, e), n) : {
            ...e
          }
        })
      }

      function c(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        const i = {
          labels: [],
          datasets: []
        };
        return h(i, t.labels), a(i, t.datasets, e), i
      }
      const l = (0, s.forwardRef)(function(t, e) {
          const {
            height: i = 150,
            width: o = 300,
            redraw: l = !1,
            datasetIdKey: u,
            type: f,
            data: d,
            options: p,
            plugins: b = [],
            fallbackContent: g,
            updateMode: m,
            ...x
          } = t, v = (0, s.useRef)(null), y = (0, s.useRef)(null), M = () => {
            v.current && (y.current = new n.t1(v.current, {
              type: f,
              data: c(d, u),
              options: p && {
                ...p
              },
              plugins: b
            }), r(e, y.current))
          }, w = () => {
            r(e, null), y.current && (y.current.destroy(), y.current = null)
          };
          return (0, s.useEffect)(() => {
            !l && y.current && p && function(t, e) {
              const i = t.options;
              i && e && Object.assign(i, e)
            }(y.current, p)
          }, [l, p]), (0, s.useEffect)(() => {
            !l && y.current && h(y.current.config.data, d.labels)
          }, [l, d.labels]), (0, s.useEffect)(() => {
            !l && y.current && d.datasets && a(y.current.config.data, d.datasets, u)
          }, [l, d.datasets]), (0, s.useEffect)(() => {
            y.current && (l ? (w(), setTimeout(M)) : y.current.update(m))
          }, [l, p, d.labels, d.datasets, m]), (0, s.useEffect)(() => {
            y.current && (w(), setTimeout(M))
          }, [f]), (0, s.useEffect)(() => (M(), () => w()), []), s.createElement("canvas", {
            ref: v,
            role: "img",
            height: i,
            width: o,
            ...x
          }, g)
        }),
        u = (f = n.ZT, n.t1.register(f), (0, s.forwardRef)((t, e) => s.createElement(l, {
          ...t,
          ref: e,
          type: "line"
        })));
      var f
    },
    66118: (t, e, i) => {
      i.d(e, {
        FN: () => pe,
        Hg: () => gt,
        No: () => fe,
        PP: () => pi,
        Qw: () => a,
        ZT: () => L,
        dN: () => Ye,
        kc: () => mi,
        t1: () => ee
      });
      var s = i(12020),
        n = new class {
          constructor() {
            this.Ct = null, this.Lt = new Map, this.Rt = !1, this.Et = void 0
          }
          jt(t, e, i, s) {
            const n = e.listeners[s],
              o = e.duration;
            n.forEach(s => s({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(i - e.start, o)
            }))
          }
          Pt() {
            this.Ct || (this.Rt = !0, this.Ct = s.r.call(window, () => {
              this.Tt(), this.Ct = null, this.Rt && this.Pt()
            }))
          }
          Tt(t = Date.now()) {
            let e = 0;
            this.Lt.forEach((i, s) => {
              if (!i.running || !i.items.length) return;
              const n = i.items;
              let o, r = n.length - 1,
                h = !1;
              for (; r >= 0; --r) o = n[r], o.Nt ? (o.Ft > i.duration && (i.duration = o.Ft), o.tick(t), h = !0) : (n[r] = n[n.length - 1], n.pop());
              h && (s.draw(), this.jt(s, i, t, "progress")), n.length || (i.running = !1, this.jt(s, i, t, "complete"), i.initial = !1), e += n.length
            }), this.Et = t, 0 === e && (this.Rt = !1)
          }
          It(t) {
            const e = this.Lt;
            let i = e.get(t);
            return i || (i = {
              running: !1,
              initial: !0,
              items: [],
              listeners: {
                complete: [],
                progress: []
              }
            }, e.set(t, i)), i
          }
          listen(t, e, i) {
            this.It(t).listeners[e].push(i)
          }
          add(t, e) {
            !e || !e.length || this.It(t).items.push(...e)
          }
          has(t) {
            return this.It(t).items.length > 0
          }
          start(t) {
            const e = this.Lt.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((t, e) => Math.max(t, e.zt), 0), this.Pt())
          }
          running(t) {
            if (!this.Rt) return !1;
            const e = this.Lt.get(t);
            return !(!e || !e.running || !e.items.length)
          }
          stop(t) {
            const e = this.Lt.get(t);
            if (!e || !e.items.length) return;
            const i = e.items;
            let s = i.length - 1;
            for (; s >= 0; --s) i[s].cancel();
            e.items = [], this.jt(t, e, Date.now(), "complete")
          }
          remove(t) {
            return this.Lt.delete(t)
          }
        };
      const o = "transparent",
        r = {
          boolean: (t, e, i) => i > .5 ? e : t,
          color(t, e, i) {
            const n = (0, s.c)(t || o),
              r = n.valid && (0, s.c)(e || o);
            return r && r.valid ? r.mix(n, i).hexString() : e
          },
          number: (t, e, i) => t + (e - t) * i
        };
      class h {
        constructor(t, e, i, n) {
          const o = e[i];
          n = (0, s.a)([t.to, n, o, t.from]);
          const h = (0, s.a)([t.from, o, n]);
          this.Nt = !0, this.Wt = t.fn || r[t.type || typeof h], this.Bt = s.e[t.easing] || s.e.linear, this.Ht = Math.floor(Date.now() + (t.delay || 0)), this.zt = this.Ft = Math.floor(t.duration), this.Ot = !!t.loop, this.Vt = e, this.Yt = i, this.$t = h, this.Xt = n, this.Ut = void 0
        }
        active() {
          return this.Nt
        }
        update(t, e, i) {
          if (this.Nt) {
            this.jt(!1);
            const n = this.Vt[this.Yt],
              o = i - this.Ht,
              r = this.zt - o;
            this.Ht = i, this.zt = Math.floor(Math.max(r, t.duration)), this.Ft += o, this.Ot = !!t.loop, this.Xt = (0, s.a)([t.to, e, n, t.from]), this.$t = (0, s.a)([t.from, n, e])
          }
        }
        cancel() {
          this.Nt && (this.tick(Date.now()), this.Nt = !1, this.jt(!1))
        }
        tick(t) {
          const e = t - this.Ht,
            i = this.zt,
            s = this.Yt,
            n = this.$t,
            o = this.Ot,
            r = this.Xt;
          let h;
          if (this.Nt = n !== r && (o || i > e), !this.Nt) return this.Vt[s] = r, void this.jt(!0);
          0 > e ? this.Vt[s] = n : (h = e / i % 2, h = o && h > 1 ? 2 - h : h, h = this.Bt(Math.min(1, Math.max(0, h))), this.Vt[s] = this.Wt(n, r, h))
        }
        wait() {
          const t = this.Ut || (this.Ut = []);
          return new Promise((e, i) => {
            t.push({
              res: e,
              rej: i
            })
          })
        }
        jt(t) {
          const e = t ? "res" : "rej",
            i = this.Ut || [];
          for (let t = 0; t < i.length; t++) i[t][e]()
        }
      }
      class a {
        constructor(t, e) {
          this.St = t, this.Kt = new Map, this.configure(e)
        }
        configure(t) {
          if (!(0, s.i)(t)) return;
          const e = Object.keys(s.d.animation),
            i = this.Kt;
          Object.getOwnPropertyNames(t).forEach(n => {
            const o = t[n];
            if (!(0, s.i)(o)) return;
            const r = {};
            for (const t of e) r[t] = o[t];
            ((0, s.b)(o.properties) && o.properties || [n]).forEach(t => {
              (t === n || !i.has(t)) && i.set(t, r)
            })
          })
        }
        Zt(t, e) {
          const i = e.options,
            s = function(t, e) {
              if (!e) return;
              let i = t.options;
              if (i) return i.$shared && (t.options = i = Object.assign({}, i, {
                $shared: !1,
                $animations: {}
              })), i;
              t.options = e
            }(t, i);
          if (!s) return [];
          const n = this.Qt(s, i);
          return i.$shared && function(t, e) {
            const i = [],
              s = Object.keys(e);
            for (let e = 0; e < s.length; e++) {
              const n = t[s[e]];
              n && n.active() && i.push(n.wait())
            }
            return Promise.all(i)
          }(t.options.$animations, i).then(() => {
            t.options = i
          }, () => {}), n
        }
        Qt(t, e) {
          const i = this.Kt,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            r = Date.now();
          let a;
          for (a = o.length - 1; a >= 0; --a) {
            const c = o[a];
            if ("$" === c.charAt(0)) continue;
            if ("options" === c) {
              s.push(...this.Zt(t, e));
              continue
            }
            const l = e[c];
            let u = n[c];
            const f = i.get(c);
            if (u) {
              if (f && u.active()) {
                u.update(f, l, r);
                continue
              }
              u.cancel()
            }
            f && f.duration ? (n[c] = u = new h(f, t, c, l), s.push(u)) : t[c] = l
          }
          return s
        }
        update(t, e) {
          if (0 === this.Kt.size) return void Object.assign(t, e);
          const i = this.Qt(t, e);
          return i.length ? (n.add(this.St, i), !0) : void 0
        }
      }

      function c(t, e) {
        const i = t && t.options || {},
          s = i.reverse,
          n = void 0 === i.min ? e : 0,
          o = void 0 === i.max ? e : 0;
        return {
          start: s ? o : n,
          end: s ? n : o
        }
      }

      function l(t, e) {
        const i = [],
          s = t.qt(e);
        let n, o;
        for (n = 0, o = s.length; o > n; ++n) i.push(s[n].index);
        return i
      }

      function u(t, e, i, n = {}) {
        const o = t.keys,
          r = "single" === n.mode;
        let h, a, c, l;
        if (null !== e) {
          for (h = 0, a = o.length; a > h; ++h) {
            if (c = +o[h], c === i) {
              if (n.all) continue;
              break
            }
            l = t.values[c], (0, s.g)(l) && (r || 0 === e || (0, s.s)(e) === (0, s.s)(l)) && (e += l)
          }
          return e
        }
      }

      function f(t, e) {
        const i = t && t.options.stacked;
        return i || void 0 === i && void 0 !== e.stack
      }

      function d(t, e, i) {
        const s = t[e] || (t[e] = {});
        return s[i] || (s[i] = {})
      }

      function p(t, e, i, s) {
        for (const n of e.getMatchingVisibleMetas(s).reverse()) {
          const e = t[n.index];
          if (i && e > 0 || !i && 0 > e) return n.index
        }
        return null
      }

      function b(t, e) {
        const {
          chart: i,
          Gt: s
        } = t, n = i.Jt || (i.Jt = {}), {
          iScale: o,
          vScale: r,
          index: h
        } = s, a = o.axis, c = r.axis, l = function(t, e, i) {
          return `${t.id}.${e.id}.${i.stack||i.type}`
        }(o, r, s), u = e.length;
        let f;
        for (let t = 0; u > t; ++t) {
          const i = e[t],
            {
              [a]: o,
              [c]: u
            } = i;
          f = (i.Jt || (i.Jt = {}))[c] = d(n, l, o), f[h] = u, f.te = p(f, r, !0, s.type), f.ee = p(f, r, !1, s.type), (f.ie || (f.ie = {}))[h] = u
        }
      }

      function g(t, e) {
        const i = t.scales;
        return Object.keys(i).filter(t => i[t].axis === e).shift()
      }

      function m(t, e) {
        const i = t.controller.index,
          s = t.vScale && t.vScale.axis;
        if (s) {
          e = e || t.nt;
          for (const t of e) {
            const e = t.Jt;
            if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
            delete e[s][i], void 0 !== e[s].ie && void 0 !== e[s].ie[i] && delete e[s].ie[i]
          }
        }
      }
      const x = t => "reset" === t || "none" === t,
        v = (t, e) => e ? t : Object.assign({}, t);
      class y {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) {
          this.chart = t, this.se = t.ctx, this.index = e, this.ne = {}, this.Gt = this.getMeta(), this.oe = this.Gt.type, this.options = void 0, this.kt = !1, this.re = void 0, this.he = void 0, this.ce = void 0, this.le = void 0, this.ue = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this.fe = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
        }
        initialize() {
          const t = this.Gt;
          this.configure(), this.linkScales(), t.de = f(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }
        updateIndex(t) {
          this.index !== t && m(this.Gt), this.index = t
        }
        linkScales() {
          const t = this.chart,
            e = this.Gt,
            i = this.getDataset(),
            n = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
            o = e.xAxisID = (0, s.v)(i.xAxisID, g(t, "x")),
            r = e.yAxisID = (0, s.v)(i.yAxisID, g(t, "y")),
            h = e.rAxisID = (0, s.v)(i.rAxisID, g(t, "r")),
            a = e.indexAxis,
            c = e.iAxisID = n(a, o, r, h),
            l = e.vAxisID = n(a, r, o, h);
          e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(h), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(l)
        }
        getDataset() {
          return this.chart.data.datasets[this.index]
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
          return this.chart.scales[t]
        }
        pe(t) {
          const e = this.Gt;
          return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
          this.Tt("reset")
        }
        be() {
          const t = this.Gt;
          this.re && (0, s.u)(this.re, this), t.de && m(t)
        }
        ge() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this.re;
          if ((0, s.i)(e)) this.re = function(t) {
            const e = Object.keys(t),
              i = Array(e.length);
            let s, n, o;
            for (s = 0, n = e.length; n > s; ++s) o = e[s], i[s] = {
              x: o,
              y: t[o]
            };
            return i
          }(e);
          else if (i !== e) {
            if (i) {
              (0, s.u)(i, this);
              const t = this.Gt;
              m(t), t.nt = []
            }
            e && Object.isExtensible(e) && (0, s.l)(e, this), this.fe = [], this.re = e
          }
        }
        addElements() {
          const t = this.Gt;
          this.ge(), this.datasetElementType && (t.dataset = new this.datasetElementType)
        }
        buildOrUpdateElements(t) {
          const e = this.Gt,
            i = this.getDataset();
          let s = !1;
          this.ge();
          const n = e.de;
          e.de = f(e.vScale, e), e.stack !== i.stack && (s = !0, m(e), e.stack = i.stack), this.me(t), (s || n !== e.de) && b(this, e.nt)
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this.oe),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          this.options = t.createResolver(i, this.getContext()), this.kt = this.options.parsing, this.ne = {}
        }
        parse(t, e) {
          const {
            Gt: i,
            re: n
          } = this, {
            iScale: o,
            de: r
          } = i, h = o.axis;
          let a, c, l, u = 0 === t && e === n.length || i.st,
            f = t > 0 && i.nt[t - 1];
          if (!1 === this.kt) i.nt = n, i.st = !0, l = n;
          else {
            l = (0, s.b)(n[t]) ? this.parseArrayData(i, n, t, e) : (0, s.i)(n[t]) ? this.parseObjectData(i, n, t, e) : this.parsePrimitiveData(i, n, t, e);
            const o = () => null === c[h] || f && c[h] < f[h];
            for (a = 0; e > a; ++a) i.nt[a + t] = c = l[a], u && (o() && (u = !1), f = c);
            i.st = u
          }
          r && b(this, l)
        }
        parsePrimitiveData(t, e, i, s) {
          const {
            iScale: n,
            vScale: o
          } = t, r = n.axis, h = o.axis, a = n.getLabels(), c = n === o, l = Array(s);
          let u, f, d;
          for (u = 0, f = s; f > u; ++u) d = u + i, l[u] = {
            [r]: c || n.parse(a[d], d),
            [h]: o.parse(e[d], d)
          };
          return l
        }
        parseArrayData(t, e, i, s) {
          const {
            xScale: n,
            yScale: o
          } = t, r = Array(s);
          let h, a, c, l;
          for (h = 0, a = s; a > h; ++h) c = h + i, l = e[c], r[h] = {
            x: n.parse(l[0], c),
            y: o.parse(l[1], c)
          };
          return r
        }
        parseObjectData(t, e, i, n) {
          const {
            xScale: o,
            yScale: r
          } = t, {
            xAxisKey: h = "x",
            yAxisKey: a = "y"
          } = this.kt, c = Array(n);
          let l, u, f, d;
          for (l = 0, u = n; u > l; ++l) f = l + i, d = e[f], c[l] = {
            x: o.parse((0, s.f)(d, h), f),
            y: r.parse((0, s.f)(d, a), f)
          };
          return c
        }
        getParsed(t) {
          return this.Gt.nt[t]
        }
        getDataElement(t) {
          return this.Gt.data[t]
        }
        applyStack(t, e, i) {
          const s = this.chart,
            n = this.Gt,
            o = e[t.axis];
          return u({
            keys: l(s, !0),
            values: e.Jt[t.axis].ie
          }, o, n.index, {
            mode: i
          })
        }
        updateRangeFromParsed(t, e, i, s) {
          const n = i[e.axis];
          let o = null === n ? NaN : n;
          const r = s && i.Jt[e.axis];
          s && r && (s.values = r, o = u(s, n, this.Gt.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
        }
        getMinMax(t, e) {
          const i = this.Gt,
            n = i.nt,
            o = i.st && t === i.iScale,
            r = n.length,
            h = this.pe(t),
            a = ((t, e, i) => t && !e.hidden && e.de && {
              keys: l(i, !0),
              values: null
            })(e, i, this.chart),
            c = {
              min: 1 / 0,
              max: -1 / 0
            },
            {
              min: u,
              max: f
            } = function(t) {
              const {
                min: e,
                max: i,
                minDefined: s,
                maxDefined: n
              } = t.getUserBounds();
              return {
                min: s ? e : -1 / 0,
                max: n ? i : 1 / 0
              }
            }(h);
          let d, p;

          function b() {
            p = n[d];
            const e = p[h.axis];
            return !(0, s.g)(p[t.axis]) || u > e || e > f
          }
          for (d = 0; r > d && (b() || (this.updateRangeFromParsed(c, t, p, a), !o)); ++d);
          if (o)
            for (d = r - 1; d >= 0; --d)
              if (!b()) {
                this.updateRangeFromParsed(c, t, p, a);
                break
              } return c
        }
        getAllParsedValues(t) {
          const e = this.Gt.nt,
            i = [];
          let n, o, r;
          for (n = 0, o = e.length; o > n; ++n) r = e[n][t.axis], (0, s.g)(r) && i.push(r);
          return i
        }
        getMaxOverflow() {
          return !1
        }
        getLabelAndValue(t) {
          const e = this.Gt,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t);
          return {
            label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
            value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
          }
        }
        Tt(t) {
          const e = this.Gt;
          this.update(t || "default"), e.xe = function(t) {
            let e, i, n, o;
            return (0, s.i)(t) ? (e = t.top, i = t.right, n = t.bottom, o = t.left) : e = i = n = o = t, {
              top: e,
              right: i,
              bottom: n,
              left: o,
              disabled: !1 === t
            }
          }((0, s.v)(this.options.clip, function(t, e, i) {
            if (!1 === i) return !1;
            const s = c(t, i),
              n = c(e, i);
            return {
              top: n.end,
              right: s.end,
              bottom: n.start,
              left: s.start
            }
          }(e.xScale, e.yScale, this.getMaxOverflow())))
        }
        update(t) {}
        draw() {
          const t = this.se,
            e = this.chart,
            i = this.Gt,
            s = i.data || [],
            n = e.chartArea,
            o = [],
            r = this.le || 0,
            h = this.ue || s.length - r,
            a = this.options.drawActiveElementsOnTop;
          let c;
          for (i.dataset && i.dataset.draw(t, n, r, h), c = r; r + h > c; ++c) {
            const e = s[c];
            e.hidden || (e.active && a ? o.push(e) : e.draw(t, n))
          }
          for (c = 0; c < o.length; ++c) o[c].draw(t, n)
        }
        getStyle(t, e) {
          const i = e ? "active" : "default";
          return void 0 === t && this.Gt.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
        }
        getContext(t, e, i) {
          const n = this.getDataset();
          let o;
          if (t >= 0 && t < this.Gt.data.length) {
            const e = this.Gt.data[t];
            o = e.$context || (e.$context = function(t, e, i) {
              return (0, s.j)(t, {
                active: !1,
                dataIndex: e,
                parsed: void 0,
                raw: void 0,
                element: i,
                index: e,
                mode: "default",
                type: "data"
              })
            }(this.getContext(), t, e)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
          } else o = this.$context || (this.$context = function(t, e) {
            return (0, s.j)(t, {
              active: !1,
              dataset: void 0,
              datasetIndex: e,
              index: e,
              mode: "default",
              type: "dataset"
            })
          }(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
          return o.active = !!e, o.mode = i, o
        }
        resolveDatasetElementOptions(t) {
          return this.ve(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
          return this.ve(this.dataElementType.id, e, t)
        }
        ve(t, e = "default", i) {
          const n = "active" === e,
            o = this.ne,
            r = t + "-" + e,
            h = o[r],
            a = this.enableOptionSharing && (0, s.h)(i);
          if (h) return v(h, a);
          const c = this.chart.config,
            l = c.datasetElementScopeKeys(this.oe, t),
            u = n ? [t + "Hover", "hover", t, ""] : [t, ""],
            f = c.getOptionScopes(this.getDataset(), l),
            d = Object.keys(s.d.elements[t]),
            p = c.resolveNamedOptions(f, d, () => this.getContext(i, n, e), u);
          return p.$shared && (p.$shared = a, o[r] = Object.freeze(v(p, a))), p
        }
        ye(t, e, i) {
          const s = this.chart,
            n = this.ne,
            o = "animation-" + e,
            r = n[o];
          if (r) return r;
          let h;
          if (!1 !== s.options.animation) {
            const s = this.chart.config,
              n = s.datasetAnimationScopeKeys(this.oe, e),
              o = s.getOptionScopes(this.getDataset(), n);
            h = s.createResolver(o, this.getContext(t, i, e))
          }
          const c = new a(s, h && h.animations);
          return h && h.lt && (n[o] = Object.freeze(c)), c
        }
        getSharedOptions(t) {
          if (t.$shared) return this.ce || (this.ce = Object.assign({}, t))
        }
        includeOptions(t, e) {
          return !e || x(t) || this.chart.Me
        }
        we(t, e) {
          const i = this.resolveDataElementOptions(t, e),
            s = this.ce,
            n = this.getSharedOptions(i),
            o = this.includeOptions(e, n) || n !== s;
          return this.updateSharedOptions(n, e, i), {
            sharedOptions: n,
            includeOptions: o
          }
        }
        updateElement(t, e, i, s) {
          x(s) ? Object.assign(t, i) : this.ye(e, s).update(t, i)
        }
        updateSharedOptions(t, e, i) {
          t && !x(e) && this.ye(void 0, e).update(t, i)
        }
        _e(t, e, i, s) {
          t.active = s;
          const n = this.getStyle(e, s);
          this.ye(e, i, s).update(t, {
            options: !s && this.getSharedOptions(n) || n
          })
        }
        removeHoverStyle(t, e, i) {
          this._e(t, i, "active", !1)
        }
        setHoverStyle(t, e, i) {
          this._e(t, i, "active", !0)
        }
        ke() {
          const t = this.Gt.dataset;
          t && this._e(t, void 0, "active", !1)
        }
        Oe() {
          const t = this.Gt.dataset;
          t && this._e(t, void 0, "active", !0)
        }
        me(t) {
          const e = this.re,
            i = this.Gt.data;
          for (const [t, e, i] of this.fe) this[t](e, i);
          this.fe = [];
          const s = i.length,
            n = e.length,
            o = Math.min(n, s);
          o && this.parse(0, o), n > s ? this.Se(s, n - s, t) : s > n && this.De(n, s - n)
        }
        Se(t, e, i = !0) {
          const s = this.Gt,
            n = s.data,
            o = t + e;
          let r;
          const h = t => {
            for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e]
          };
          for (h(n), r = t; o > r; ++r) n[r] = new this.dataElementType;
          this.kt && h(s.nt), this.parse(t, e), i && this.updateElements(n, t, e, "reset")
        }
        updateElements(t, e, i, s) {}
        De(t, e) {
          const i = this.Gt;
          if (this.kt) {
            const s = i.nt.splice(t, e);
            i.de && m(i, s)
          }
          i.data.splice(t, e)
        }
        Ae(t) {
          if (this.kt) this.fe.push(t);
          else {
            const [e, i, s] = t;
            this[e](i, s)
          }
          this.chart.Ce.push([this.index, ...t])
        }
        Le() {
          const t = arguments.length;
          this.Ae(["_insertElements", this.getDataset().data.length - t, t])
        }
        Re() {
          this.Ae(["_removeElements", this.Gt.data.length - 1, 1])
        }
        Ee() {
          this.Ae(["_removeElements", 0, 1])
        }
        je(t, e) {
          e && this.Ae(["_removeElements", t, e]);
          const i = arguments.length - 2;
          i && this.Ae(["_insertElements", t, i])
        }
        Pe() {
          this.Ae(["_insertElements", 0, arguments.length])
        }
      }

      function M(t) {
        const e = t.iScale,
          i = function(t, e) {
            if (!t.Te.$bar) {
              const i = t.getMatchingVisibleMetas(e);
              let n = [];
              for (let e = 0, s = i.length; s > e; e++) n = n.concat(i[e].controller.getAllParsedValues(t));
              t.Te.$bar = (0, s._)(n.sort((t, e) => t - e))
            }
            return t.Te.$bar
          }(e, t.type);
        let n, o, r, h, a = e.Ne;
        const c = () => {
          32767 === r || -32768 === r || ((0, s.h)(h) && (a = Math.min(a, Math.abs(r - h) || a)), h = r)
        };
        for (n = 0, o = i.length; o > n; ++n) r = e.getPixelForValue(i[n]), c();
        for (h = void 0, n = 0, o = e.ticks.length; o > n; ++n) r = e.getPixelForTick(n), c();
        return a
      }

      function w(t, e, i, n) {
        return (0, s.b)(t) ? function(t, e, i, s) {
          const n = i.parse(t[0], s),
            o = i.parse(t[1], s),
            r = Math.min(n, o),
            h = Math.max(n, o);
          let a = r,
            c = h;
          Math.abs(r) > Math.abs(h) && (a = h, c = r), e[i.axis] = c, e.Fe = {
            barStart: a,
            barEnd: c,
            start: n,
            end: o,
            min: r,
            max: h
          }
        }(t, e, i, n) : e[i.axis] = i.parse(t, n), e
      }

      function _(t, e, i, s) {
        const n = t.iScale,
          o = t.vScale,
          r = n.getLabels(),
          h = n === o,
          a = [];
        let c, l, u, f;
        for (c = i, l = i + s; l > c; ++c) f = e[c], u = {}, u[n.axis] = h || n.parse(r[c], c), a.push(w(f, u, o, c));
        return a
      }

      function k(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
      }

      function O(t, e, i, s) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void(t.borderSkipped = o);
        if (!0 === n) return void(t.borderSkipped = {
          top: !0,
          right: !0,
          bottom: !0,
          left: !0
        });
        const {
          start: r,
          end: h,
          reverse: a,
          top: c,
          bottom: l
        } = function(t) {
          let e, i, s, n, o;
          return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
            start: i,
            end: s,
            reverse: e,
            top: n,
            bottom: o
          }
        }(t);
        "middle" === n && i && (t.enableBorderRadius = !0, (i.te || 0) === s ? n = c : (i.ee || 0) === s ? n = l : (o[S(l, r, h, a)] = !0, n = c)), o[S(n, r, h, a)] = !0, t.borderSkipped = o
      }

      function S(t, e, i, s) {
        return s ? (t = function(t, e, i) {
          return t === e ? i : t === i ? e : t
        }(t, e, i), t = D(t, i, e)) : t = D(t, e, i), t
      }

      function D(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t
      }

      function A(t, {
        inflateAmount: e
      }, i) {
        t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
      }
      class C extends y {
        static id = "doughnut";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          animations: {
            numbers: {
              type: "number",
              properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
            }
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          spacing: 0,
          indexAxis: "r"
        };
        static descriptors = {
          rt: t => "spacing" !== t,
          ht: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: {
                        pointStyle: i,
                        color: s
                      }
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n
                      }
                    })
                  }
                  return []
                }
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update()
              }
            }
          }
        };
        constructor(t, e) {
          super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }
        linkScales() {}
        parse(t, e) {
          const i = this.getDataset().data,
            n = this.Gt;
          if (!1 === this.kt) n.nt = i;
          else {
            let o, r, h = t => +i[t];
            if ((0, s.i)(i[t])) {
              const {
                key: t = "value"
              } = this.kt;
              h = e => +(0, s.f)(i[e], t)
            }
            for (o = t, r = t + e; r > o; ++o) n.nt[o] = h(o)
          }
        }
        Ie() {
          return (0, s.t)(this.options.rotation - 90)
        }
        ze() {
          return (0, s.t)(this.options.circumference)
        }
        We() {
          let t = s.T,
            e = -s.T;
          for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this.oe) {
              const s = this.chart.getDatasetMeta(i).controller,
                n = s.Ie(),
                o = s.ze();
              t = Math.min(t, n), e = Math.max(e, n + o)
            } return {
            rotation: t,
            circumference: e - t
          }
        }
        update(t) {
          const e = this.chart,
            {
              chartArea: i
            } = e,
            n = this.Gt,
            o = n.data,
            r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
            h = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
            a = Math.min((0, s.m)(this.options.cutout, h), 1),
            c = this.Be(this.index),
            {
              circumference: l,
              rotation: u
            } = this.We(),
            {
              ratioX: f,
              ratioY: d,
              offsetX: p,
              offsetY: b
            } = function(t, e, i) {
              let n = 1,
                o = 1,
                r = 0,
                h = 0;
              if (e < s.T) {
                const a = t,
                  c = a + e,
                  l = Math.cos(a),
                  u = Math.sin(a),
                  f = Math.cos(c),
                  d = Math.sin(c),
                  p = (t, e, n) => (0, s.p)(t, a, c, !0) ? 1 : Math.max(e, e * i, n, n * i),
                  b = (t, e, n) => (0, s.p)(t, a, c, !0) ? -1 : Math.min(e, e * i, n, n * i),
                  g = p(0, l, f),
                  m = p(s.H, u, d),
                  x = b(s.P, l, f),
                  v = b(s.P + s.H, u, d);
                n = (g - x) / 2, o = (m - v) / 2, r = -(g + x) / 2, h = -(m + v) / 2
              }
              return {
                ratioX: n,
                ratioY: o,
                offsetX: r,
                offsetY: h
              }
            }(u, l, a),
            g = (i.width - r) / f,
            m = (i.height - r) / d,
            x = Math.max(Math.min(g, m) / 2, 0),
            v = (0, s.n)(this.options.radius, x),
            y = (v - Math.max(v * a, 0)) / this.He();
          this.offsetX = p * v, this.offsetY = b * v, n.total = this.calculateTotal(), this.outerRadius = v - y * this.Ve(this.index), this.innerRadius = Math.max(this.outerRadius - y * c, 0), this.updateElements(o, 0, o.length, t)
        }
        Ye(t, e) {
          const i = this.options,
            n = this.Gt,
            o = this.ze();
          return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n.nt[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n.nt[t] * o / s.T)
        }
        updateElements(t, e, i, s) {
          const n = "reset" === s,
            o = this.chart,
            r = o.chartArea,
            h = o.options.animation,
            a = (r.left + r.right) / 2,
            c = (r.top + r.bottom) / 2,
            l = n && h.animateScale,
            u = l ? 0 : this.innerRadius,
            f = l ? 0 : this.outerRadius,
            {
              sharedOptions: d,
              includeOptions: p
            } = this.we(e, s);
          let b, g = this.Ie();
          for (b = 0; e > b; ++b) g += this.Ye(b, n);
          for (b = e; e + i > b; ++b) {
            const e = this.Ye(b, n),
              i = t[b],
              o = {
                x: a + this.offsetX,
                y: c + this.offsetY,
                startAngle: g,
                endAngle: g + e,
                circumference: e,
                outerRadius: f,
                innerRadius: u
              };
            p && (o.options = d || this.resolveDataElementOptions(b, i.active ? "active" : s)), g += e, this.updateElement(i, b, o, s)
          }
        }
        calculateTotal() {
          const t = this.Gt,
            e = t.data;
          let i, s = 0;
          for (i = 0; i < e.length; i++) {
            const n = t.nt[i];
            null !== n && !isNaN(n) && this.chart.getDataVisibility(i) && !e[i].hidden && (s += Math.abs(n))
          }
          return s
        }
        calculateCircumference(t) {
          const e = this.Gt.total;
          return e > 0 && !isNaN(t) ? s.T * (Math.abs(t) / e) : 0
        }
        getLabelAndValue(t) {
          const e = this.Gt,
            i = this.chart,
            n = i.data.labels || [],
            o = (0, s.o)(e.nt[t], i.options.locale);
          return {
            label: n[t] || "",
            value: o
          }
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const i = this.chart;
          let s, n, o, r, h;
          if (!t)
            for (s = 0, n = i.data.datasets.length; n > s; ++s)
              if (i.isDatasetVisible(s)) {
                o = i.getDatasetMeta(s), t = o.data, r = o.controller;
                break
              } if (!t) return 0;
          for (s = 0, n = t.length; n > s; ++s) h = r.resolveDataElementOptions(s), "inner" !== h.borderAlign && (e = Math.max(e, h.borderWidth || 0, h.hoverBorderWidth || 0));
          return e
        }
        getMaxOffset(t) {
          let e = 0;
          for (let i = 0, s = t.length; s > i; ++i) {
            const t = this.resolveDataElementOptions(i);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
          }
          return e
        }
        Ve(t) {
          let e = 0;
          for (let i = 0; t > i; ++i) this.chart.isDatasetVisible(i) && (e += this.Be(i));
          return e
        }
        Be(t) {
          return Math.max((0, s.v)(this.chart.data.datasets[t].weight, 1), 0)
        }
        He() {
          return this.Ve(this.chart.data.datasets.length) || 1
        }
      }
      class L extends y {
        static id = "line";
        static defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1
        };
        static overrides = {
          scales: {
            $e: {
              type: "category"
            },
            Ue: {
              type: "linear"
            }
          }
        };
        initialize() {
          this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
        }
        update(t) {
          const e = this.Gt,
            {
              dataset: i,
              data: n = [],
              Ke: o
            } = e,
            r = this.chart.Me;
          let {
            start: h,
            count: a
          } = (0, s.q)(e, n, r);
          this.le = h, this.ue = a, (0, s.w)(e) && (h = 0, a = n.length), i.St = this.chart, i.Dt = this.index, i.Ze = !!o.Ze, i.points = n;
          const c = this.resolveDatasetElementOptions(t);
          this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
            animated: !r,
            options: c
          }, t), this.updateElements(n, h, a, t)
        }
        updateElements(t, e, i, n) {
          const o = "reset" === n,
            {
              iScale: r,
              vScale: h,
              de: a,
              Ke: c
            } = this.Gt,
            {
              sharedOptions: l,
              includeOptions: u
            } = this.we(e, n),
            f = r.axis,
            d = h.axis,
            {
              spanGaps: p,
              segment: b
            } = this.options,
            g = (0, s.x)(p) ? p : 1 / 0,
            m = this.chart.Me || o || "none" === n,
            x = e + i,
            v = t.length;
          let y = e > 0 && this.getParsed(e - 1);
          for (let i = 0; v > i; ++i) {
            const p = t[i],
              v = m ? p : {};
            if (e > i || i >= x) {
              v.skip = !0;
              continue
            }
            const M = this.getParsed(i),
              w = (0, s.k)(M[d]),
              _ = v[f] = r.getPixelForValue(M[f], i),
              k = v[d] = o || w ? h.getBasePixel() : h.getPixelForValue(a ? this.applyStack(h, M, a) : M[d], i);
            v.skip = isNaN(_) || isNaN(k) || w, v.stop = i > 0 && Math.abs(M[f] - y[f]) > g, b && (v.parsed = M, v.raw = c.data[i]), u && (v.options = l || this.resolveDataElementOptions(i, p.active ? "active" : n)), m || this.updateElement(p, i, v, n), y = M
          }
        }
        getMaxOverflow() {
          const t = this.Gt,
            e = t.dataset,
            i = e.options && e.options.borderWidth || 0,
            s = t.data || [];
          if (!s.length) return i;
          const n = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
          return Math.max(i, n, o) / 2
        }
        draw() {
          const t = this.Gt;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
        }
      }
      class R extends y {
        static id = "polarArea";
        static defaults = {
          dataElementType: "arc",
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
            }
          },
          indexAxis: "r",
          startAngle: 0
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: {
                        pointStyle: i,
                        color: s
                      }
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n
                      }
                    })
                  }
                  return []
                }
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update()
              }
            }
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: {
                display: !1
              },
              beginAtZero: !0,
              grid: {
                circular: !0
              },
              pointLabels: {
                display: !1
              },
              startAngle: 0
            }
          }
        };
        constructor(t, e) {
          super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
        }
        getLabelAndValue(t) {
          const e = this.Gt,
            i = this.chart,
            n = i.data.labels || [],
            o = (0, s.o)(e.nt[t].r, i.options.locale);
          return {
            label: n[t] || "",
            value: o
          }
        }
        parseObjectData(t, e, i, n) {
          return s.y.bind(this)(t, e, i, n)
        }
        update(t) {
          const e = this.Gt.data;
          this.qe(), this.updateElements(e, 0, e.length, t)
        }
        getMinMax() {
          const t = this.Gt,
            e = {
              min: 1 / 0,
              max: -1 / 0
            };
          return t.data.forEach((t, i) => {
            const s = this.getParsed(i).r;
            !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s))
          }), e
        }
        qe() {
          const t = this.chart,
            e = t.chartArea,
            i = t.options,
            s = Math.min(e.right - e.left, e.bottom - e.top),
            n = Math.max(s / 2, 0),
            o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
          this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o
        }
        updateElements(t, e, i, n) {
          const o = "reset" === n,
            r = this.chart,
            h = r.options.animation,
            a = this.Gt.rScale,
            c = a.xCenter,
            l = a.yCenter,
            u = a.getIndexAngle(0) - .5 * s.P;
          let f, d = u;
          const p = 360 / this.countVisibleElements();
          for (f = 0; e > f; ++f) d += this.Ge(f, n, p);
          for (f = e; e + i > f; f++) {
            const e = t[f];
            let i = d,
              s = d + this.Ge(f, n, p),
              b = r.getDataVisibility(f) ? a.getDistanceFromCenterForValue(this.getParsed(f).r) : 0;
            d = s, o && (h.animateScale && (b = 0), h.animateRotate && (i = s = u));
            const g = {
              x: c,
              y: l,
              innerRadius: 0,
              outerRadius: b,
              startAngle: i,
              endAngle: s,
              options: this.resolveDataElementOptions(f, e.active ? "active" : n)
            };
            this.updateElement(e, f, g, n)
          }
        }
        countVisibleElements() {
          const t = this.Gt;
          let e = 0;
          return t.data.forEach((t, i) => {
            !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
          }), e
        }
        Ge(t, e, i) {
          return this.chart.getDataVisibility(t) ? (0, s.t)(this.resolveDataElementOptions(t, e).angle || i) : 0
        }
      }

      function E() {
        throw Error("This method is not implemented: Check that a complete date adapter is provided.")
      }
      Object.freeze({
        __proto__: null,
        BarController: class extends y {
          static id = "bar";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "bar",
            categoryPercentage: .8,
            barPercentage: .9,
            grouped: !0,
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"]
              }
            }
          };
          static overrides = {
            scales: {
              $e: {
                type: "category",
                offset: !0,
                grid: {
                  offset: !0
                }
              },
              Ue: {
                type: "linear",
                beginAtZero: !0
              }
            }
          };
          parsePrimitiveData(t, e, i, s) {
            return _(t, e, i, s)
          }
          parseArrayData(t, e, i, s) {
            return _(t, e, i, s)
          }
          parseObjectData(t, e, i, n) {
            const {
              iScale: o,
              vScale: r
            } = t, {
              xAxisKey: h = "x",
              yAxisKey: a = "y"
            } = this.kt, c = "x" === o.axis ? h : a, l = "x" === r.axis ? h : a, u = [];
            let f, d, p, b;
            for (f = i, d = i + n; d > f; ++f) b = e[f], p = {}, p[o.axis] = o.parse((0, s.f)(b, c), f), u.push(w((0, s.f)(b, l), p, r, f));
            return u
          }
          updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            const n = i.Fe;
            n && e === this.Gt.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max))
          }
          getMaxOverflow() {
            return 0
          }
          getLabelAndValue(t) {
            const e = this.Gt,
              {
                iScale: i,
                vScale: s
              } = e,
              n = this.getParsed(t),
              o = n.Fe,
              r = k(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
            return {
              label: "" + i.getLabelForValue(n[i.axis]),
              value: r
            }
          }
          initialize() {
            this.enableOptionSharing = !0, super.initialize(), this.Gt.stack = this.getDataset().stack
          }
          update(t) {
            const e = this.Gt;
            this.updateElements(e.data, 0, e.data.length, t)
          }
          updateElements(t, e, i, n) {
            const o = "reset" === n,
              {
                index: r,
                Gt: {
                  vScale: h
                }
              } = this,
              a = h.getBasePixel(),
              c = h.isHorizontal(),
              l = this.Je(),
              {
                sharedOptions: u,
                includeOptions: f
              } = this.we(e, n);
            for (let d = e; e + i > d; d++) {
              const e = this.getParsed(d),
                i = o || (0, s.k)(e[h.axis]) ? {
                  base: a,
                  head: a
                } : this.ti(d),
                p = this.ei(d, l),
                b = (e.Jt || {})[h.axis],
                g = {
                  horizontal: c,
                  base: i.base,
                  enableBorderRadius: !b || k(e.Fe) || r === b.te || r === b.ee,
                  x: c ? i.head : p.center,
                  y: c ? p.center : i.head,
                  height: c ? p.size : Math.abs(i.size),
                  width: c ? Math.abs(i.size) : p.size
                };
              f && (g.options = u || this.resolveDataElementOptions(d, t[d].active ? "active" : n));
              const m = g.options || t[d].options;
              O(g, m, b, r), A(g, m, l.ratio), this.updateElement(t[d], d, g, n)
            }
          }
          ii(t, e) {
            const {
              iScale: i
            } = this.Gt, n = i.getMatchingVisibleMetas(this.oe).filter(t => t.controller.options.grouped), o = i.options.stacked, r = [], h = t => {
              const i = t.controller.getParsed(e),
                n = i && i[t.vScale.axis];
              if ((0, s.k)(n) || isNaN(n)) return !0
            };
            for (const i of n)
              if ((void 0 === e || !h(i)) && ((!1 === o || -1 === r.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && r.push(i.stack), i.index === t)) break;
            return r.length || r.push(void 0), r
          }
          si(t) {
            return this.ii(void 0, t).length
          }
          ni(t, e, i) {
            const s = this.ii(t, i),
              n = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === n ? s.length - 1 : n
          }
          Je() {
            const t = this.options,
              e = this.Gt,
              i = e.iScale,
              s = [];
            let n, o;
            for (n = 0, o = e.data.length; o > n; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
            const r = t.barThickness;
            return {
              min: r || M(e),
              pixels: s,
              start: i.oi,
              end: i.ri,
              stackCount: this.si(),
              scale: i,
              grouped: t.grouped,
              ratio: r ? 1 : t.categoryPercentage * t.barPercentage
            }
          }
          ti(t) {
            const {
              Gt: {
                vScale: e,
                de: i,
                index: n
              },
              options: {
                base: o,
                minBarLength: r
              }
            } = this, h = o || 0, a = this.getParsed(t), c = a.Fe, l = k(c);
            let u, f, d = a[e.axis],
              p = 0,
              b = i ? this.applyStack(e, a, i) : d;
            b !== d && (p = b - d, b = d), l && (d = c.barStart, b = c.barEnd - c.barStart, 0 !== d && (0, s.s)(d) !== (0, s.s)(c.barEnd) && (p = 0), p += d);
            const g = (0, s.k)(o) || l ? p : o;
            let m = e.getPixelForValue(g);
            if (u = this.chart.getDataVisibility(t) ? e.getPixelForValue(p + b) : m, f = u - m, r > Math.abs(f)) {
              f = function(t, e, i) {
                return 0 !== t ? (0, s.s)(t) : (e.isHorizontal() ? 1 : -1) * (e.min < i ? -1 : 1)
              }(f, e, h) * r, d === h && (m -= f / 2);
              const t = e.getPixelForDecimal(0),
                o = e.getPixelForDecimal(1),
                c = Math.min(t, o);
              m = Math.max(Math.min(m, Math.max(t, o)), c), u = m + f, i && !l && (a.Jt[e.axis].ie[n] = e.getValueForPixel(u) - e.getValueForPixel(m))
            }
            if (m === e.getPixelForValue(h)) {
              const t = (0, s.s)(f) * e.getLineWidthForValue(h) / 2;
              m += t, f -= t
            }
            return {
              size: f,
              base: m,
              head: u,
              center: u + f / 2
            }
          }
          ei(t, e) {
            const i = e.scale,
              n = this.options,
              o = n.skipNull,
              r = (0, s.v)(n.maxBarThickness, 1 / 0);
            let h, a;
            if (e.grouped) {
              const i = o ? this.si(t) : e.stackCount,
                c = "flex" === n.barThickness ? function(t, e, i, s) {
                  const n = e.pixels,
                    o = n[t];
                  let r = t > 0 ? n[t - 1] : null,
                    h = t < n.length - 1 ? n[t + 1] : null;
                  const a = i.categoryPercentage;
                  null === r && (r = o - (null === h ? e.end - e.start : h - o)), null === h && (h = o + o - r);
                  const c = o - (o - Math.min(r, h)) / 2 * a;
                  return {
                    chunk: Math.abs(h - r) / 2 * a / s,
                    ratio: i.barPercentage,
                    start: c
                  }
                }(t, e, n, i) : function(t, e, i, n) {
                  const o = i.barThickness;
                  let r, h;
                  return (0, s.k)(o) ? (r = e.min * i.categoryPercentage, h = i.barPercentage) : (r = o * n, h = 1), {
                    chunk: r / n,
                    ratio: h,
                    start: e.pixels[t] - r / 2
                  }
                }(t, e, n, i),
                l = this.ni(this.index, this.Gt.stack, o ? t : void 0);
              h = c.start + c.chunk * l + c.chunk / 2, a = Math.min(r, c.chunk * c.ratio)
            } else h = i.getPixelForValue(this.getParsed(t)[i.axis], t), a = Math.min(r, e.min * e.ratio);
            return {
              base: h - a / 2,
              head: h + a / 2,
              center: h,
              size: a
            }
          }
          draw() {
            const t = this.Gt,
              e = t.vScale,
              i = t.data,
              s = i.length;
            let n = 0;
            for (; s > n; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this.se)
          }
        },
        BubbleController: class extends y {
          static id = "bubble";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"]
              }
            }
          };
          static overrides = {
            scales: {
              x: {
                type: "linear"
              },
              y: {
                type: "linear"
              }
            }
          };
          initialize() {
            this.enableOptionSharing = !0, super.initialize()
          }
          parsePrimitiveData(t, e, i, s) {
            const n = super.parsePrimitiveData(t, e, i, s);
            for (let t = 0; t < n.length; t++) n[t].Fe = this.resolveDataElementOptions(t + i).radius;
            return n
          }
          parseArrayData(t, e, i, n) {
            const o = super.parseArrayData(t, e, i, n);
            for (let t = 0; t < o.length; t++) {
              const n = e[i + t];
              o[t].Fe = (0, s.v)(n[2], this.resolveDataElementOptions(t + i).radius)
            }
            return o
          }
          parseObjectData(t, e, i, n) {
            const o = super.parseObjectData(t, e, i, n);
            for (let t = 0; t < o.length; t++) {
              const n = e[i + t];
              o[t].Fe = (0, s.v)(n && n.r && +n.r, this.resolveDataElementOptions(t + i).radius)
            }
            return o
          }
          getMaxOverflow() {
            const t = this.Gt.data;
            let e = 0;
            for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e
          }
          getLabelAndValue(t) {
            const e = this.Gt,
              i = this.chart.data.labels || [],
              {
                xScale: s,
                yScale: n
              } = e,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              h = n.getLabelForValue(o.y),
              a = o.Fe;
            return {
              label: i[t] || "",
              value: "(" + r + ", " + h + (a ? ", " + a : "") + ")"
            }
          }
          update(t) {
            const e = this.Gt.data;
            this.updateElements(e, 0, e.length, t)
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: r
              } = this.Gt,
              {
                sharedOptions: h,
                includeOptions: a
              } = this.we(e, s),
              c = o.axis,
              l = r.axis;
            for (let u = e; e + i > u; u++) {
              const e = t[u],
                i = !n && this.getParsed(u),
                f = {},
                d = f[c] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[c]),
                p = f[l] = n ? r.getBasePixel() : r.getPixelForValue(i[l]);
              f.skip = isNaN(d) || isNaN(p), a && (f.options = h || this.resolveDataElementOptions(u, e.active ? "active" : s), n && (f.options.radius = 0)), this.updateElement(e, u, f, s)
            }
          }
          resolveDataElementOptions(t, e) {
            const i = this.getParsed(t);
            let n = super.resolveDataElementOptions(t, e);
            n.$shared && (n = Object.assign({}, n, {
              $shared: !1
            }));
            const o = n.radius;
            return "active" !== e && (n.radius = 0), n.radius += (0, s.v)(i && i.Fe, o), n
          }
        },
        DoughnutController: C,
        LineController: L,
        PieController: class extends C {
          static id = "pie";
          static defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%"
          }
        },
        PolarAreaController: R,
        RadarController: class extends y {
          static id = "radar";
          static defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            indexAxis: "r",
            showLine: !0,
            elements: {
              line: {
                fill: "start"
              }
            }
          };
          static overrides = {
            aspectRatio: 1,
            scales: {
              r: {
                type: "radialLinear"
              }
            }
          };
          getLabelAndValue(t) {
            const e = this.Gt.vScale,
              i = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: "" + e.getLabelForValue(i[e.axis])
            }
          }
          parseObjectData(t, e, i, n) {
            return s.y.bind(this)(t, e, i, n)
          }
          update(t) {
            const e = this.Gt,
              i = e.dataset,
              s = e.data || [],
              n = e.iScale.getLabels();
            if (i.points = s, "resize" !== t) {
              const e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              const o = {
                Ot: !0,
                At: n.length === s.length,
                options: e
              };
              this.updateElement(i, void 0, o, t)
            }
            this.updateElements(s, 0, s.length, t)
          }
          updateElements(t, e, i, s) {
            const n = this.Gt.rScale,
              o = "reset" === s;
            for (let r = e; e + i > r; r++) {
              const e = t[r],
                i = this.resolveDataElementOptions(r, e.active ? "active" : s),
                h = n.getPointPositionForValue(r, this.getParsed(r).r),
                a = o ? n.xCenter : h.x,
                c = o ? n.yCenter : h.y,
                l = {
                  x: a,
                  y: c,
                  angle: h.angle,
                  skip: isNaN(a) || isNaN(c),
                  options: i
                };
              this.updateElement(e, r, l, s)
            }
          }
        },
        ScatterController: class extends y {
          static id = "scatter";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            showLine: !1,
            fill: !1
          };
          static overrides = {
            interaction: {
              mode: "point"
            },
            scales: {
              x: {
                type: "linear"
              },
              y: {
                type: "linear"
              }
            }
          };
          getLabelAndValue(t) {
            const e = this.Gt,
              i = this.chart.data.labels || [],
              {
                xScale: s,
                yScale: n
              } = e,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              h = n.getLabelForValue(o.y);
            return {
              label: i[t] || "",
              value: "(" + r + ", " + h + ")"
            }
          }
          update(t) {
            const e = this.Gt,
              {
                data: i = []
              } = e,
              n = this.chart.Me;
            let {
              start: o,
              count: r
            } = (0, s.q)(e, i, n);
            if (this.le = o, this.ue = r, (0, s.w)(e) && (o = 0, r = i.length), this.options.showLine) {
              this.datasetElementType || this.addElements();
              const {
                dataset: s,
                Ke: o
              } = e;
              s.St = this.chart, s.Dt = this.index, s.Ze = !!o.Ze, s.points = i;
              const r = this.resolveDatasetElementOptions(t);
              r.segment = this.options.segment, this.updateElement(s, void 0, {
                animated: !n,
                options: r
              }, t)
            } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
            this.updateElements(i, o, r, t)
          }
          addElements() {
            const {
              showLine: t
            } = this.options;
            !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
          }
          updateElements(t, e, i, n) {
            const o = "reset" === n,
              {
                iScale: r,
                vScale: h,
                de: a,
                Ke: c
              } = this.Gt,
              l = this.resolveDataElementOptions(e, n),
              u = this.getSharedOptions(l),
              f = this.includeOptions(n, u),
              d = r.axis,
              p = h.axis,
              {
                spanGaps: b,
                segment: g
              } = this.options,
              m = (0, s.x)(b) ? b : 1 / 0,
              x = this.chart.Me || o || "none" === n;
            let v = e > 0 && this.getParsed(e - 1);
            for (let l = e; e + i > l; ++l) {
              const e = t[l],
                i = this.getParsed(l),
                b = x ? e : {},
                y = (0, s.k)(i[p]),
                M = b[d] = r.getPixelForValue(i[d], l),
                w = b[p] = o || y ? h.getBasePixel() : h.getPixelForValue(a ? this.applyStack(h, i, a) : i[p], l);
              b.skip = isNaN(M) || isNaN(w) || y, b.stop = l > 0 && Math.abs(i[d] - v[d]) > m, g && (b.parsed = i, b.raw = c.data[l]), f && (b.options = u || this.resolveDataElementOptions(l, e.active ? "active" : n)), x || this.updateElement(e, l, b, n), v = i
            }
            this.updateSharedOptions(u, n, l)
          }
          getMaxOverflow() {
            const t = this.Gt,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
              return t > 0 && t
            }
            const i = t.dataset,
              s = i.options && i.options.borderWidth || 0;
            if (!e.length) return s;
            const n = e[0].size(this.resolveDataElementOptions(0)),
              o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
            return Math.max(s, n, o) / 2
          }
        }
      });
      class j {
        static override(t) {
          Object.assign(j.prototype, t)
        }
        options;
        constructor(t) {
          this.options = t || {}
        }
        init() {}
        formats() {
          return E()
        }
        parse() {
          return E()
        }
        format() {
          return E()
        }
        add() {
          return E()
        }
        diff() {
          return E()
        }
        startOf() {
          return E()
        }
        endOf() {
          return E()
        }
      }
      var P = j;

      function T(t, e, i, n) {
        const {
          controller: o,
          data: r,
          st: h
        } = t, a = o.Gt.iScale;
        if (a && e === a.axis && "r" !== e && h && r.length) {
          const t = a.ci ? s.A : s.B;
          if (!n) return t(r, e, i);
          if (o.ce) {
            const s = r[0],
              n = "function" == typeof s.getRange && s.getRange(e);
            if (n) {
              const s = t(r, e, i - n),
                o = t(r, e, i + n);
              return {
                lo: s.lo,
                hi: o.hi
              }
            }
          }
        }
        return {
          lo: 0,
          hi: r.length - 1
        }
      }

      function N(t, e, i, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
          r = i[e];
        for (let t = 0, i = o.length; i > t; ++t) {
          const {
            index: i,
            data: h
          } = o[t], {
            lo: a,
            hi: c
          } = T(o[t], e, r, n);
          for (let t = a; c >= t; ++t) {
            const e = h[t];
            e.skip || s(e, i, t)
          }
        }
      }

      function F(t, e, i, n, o) {
        const r = [];
        return !o && !t.isPointInArea(e) || N(t, i, e, function(i, h, a) {
          !o && !(0, s.C)(i, t.chartArea, 0) || i.inRange(e.x, e.y, n) && r.push({
            element: i,
            datasetIndex: h,
            index: a
          })
        }, !0), r
      }

      function I(t, e, i, n, o, r) {
        return r || t.isPointInArea(e) ? "r" !== i || n ? function(t, e, i, s, n, o) {
          let r = [];
          const h = function(t) {
            const e = -1 !== t.indexOf("x"),
              i = -1 !== t.indexOf("y");
            return function(t, s) {
              const n = e ? Math.abs(t.x - s.x) : 0,
                o = i ? Math.abs(t.y - s.y) : 0;
              return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
            }
          }(i);
          let a = 1 / 0;
          return N(t, i, e, function(i, c, l) {
            const u = i.inRange(e.x, e.y, n);
            if (s && !u) return;
            const f = i.getCenterPoint(n);
            if (!o && !t.isPointInArea(f) && !u) return;
            const d = h(e, f);
            a > d ? (r = [{
              element: i,
              datasetIndex: c,
              index: l
            }], a = d) : d === a && r.push({
              element: i,
              datasetIndex: c,
              index: l
            })
          }), r
        }(t, e, i, n, o, r) : function(t, e, i, n) {
          let o = [];
          return N(t, i, e, function(t, i, r) {
            const {
              startAngle: h,
              endAngle: a
            } = t.getProps(["startAngle", "endAngle"], n), {
              angle: c
            } = (0, s.D)(t, {
              x: e.x,
              y: e.y
            });
            (0, s.p)(c, h, a) && o.push({
              element: t,
              datasetIndex: i,
              index: r
            })
          }), o
        }(t, e, i, o) : []
      }

      function z(t, e, i, s, n) {
        const o = [],
          r = "x" === i ? "inXRange" : "inYRange";
        let h = !1;
        return N(t, i, e, (t, s, a) => {
          t[r](e[i], n) && (o.push({
            element: t,
            datasetIndex: s,
            index: a
          }), h = h || t.inRange(e.x, e.y, n))
        }), s && !h ? [] : o
      }
      var W = {
        evaluateInteractionItems: N,
        modes: {
          index(t, e, i, n) {
            const o = (0, s.z)(e, t),
              r = i.axis || "x",
              h = i.includeInvisible || !1,
              a = i.intersect ? F(t, o, r, n, h) : I(t, o, r, !1, n, h),
              c = [];
            return a.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
              const e = a[0].index,
                i = t.data[e];
              i && !i.skip && c.push({
                element: i,
                datasetIndex: t.index,
                index: e
              })
            }), c) : []
          },
          dataset(t, e, i, n) {
            const o = (0, s.z)(e, t),
              r = i.axis || "xy",
              h = i.includeInvisible || !1;
            let a = i.intersect ? F(t, o, r, n, h) : I(t, o, r, !1, n, h);
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                i = t.getDatasetMeta(e).data;
              a = [];
              for (let t = 0; t < i.length; ++t) a.push({
                element: i[t],
                datasetIndex: e,
                index: t
              })
            }
            return a
          },
          point: (t, e, i, n) => F(t, (0, s.z)(e, t), i.axis || "xy", n, i.includeInvisible || !1),
          nearest(t, e, i, n) {
            const o = (0, s.z)(e, t),
              r = i.axis || "xy",
              h = i.includeInvisible || !1;
            return I(t, o, r, i.intersect, n, h)
          },
          x: (t, e, i, n) => z(t, (0, s.z)(e, t), "x", i.intersect, n),
          y: (t, e, i, n) => z(t, (0, s.z)(e, t), "y", i.intersect, n)
        }
      };
      const B = ["left", "top", "right", "bottom"];

      function H(t, e) {
        return t.filter(t => t.pos === e)
      }

      function V(t, e) {
        return t.filter(t => -1 === B.indexOf(t.pos) && t.box.axis === e)
      }

      function Y(t, e) {
        return t.sort((t, i) => {
          const s = e ? i : t,
            n = e ? t : i;
          return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
        })
      }

      function $(t, e, i, s) {
        return Math.max(t[i], e[i]) + Math.max(t[s], e[s])
      }

      function X(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
      }

      function U(t, e, i, n) {
        const {
          pos: o,
          box: r
        } = i, h = t.maxPadding;
        if (!(0, s.i)(o)) {
          i.size && (t[o] -= i.size);
          const e = n[i.stack] || {
            size: 0,
            count: 1
          };
          e.size = Math.max(e.size, i.horizontal ? r.height : r.width), i.size = e.size / e.count, t[o] += i.size
        }
        r.getPadding && X(h, r.getPadding());
        const a = Math.max(0, e.outerWidth - $(h, t, "left", "right")),
          c = Math.max(0, e.outerHeight - $(h, t, "top", "bottom")),
          l = a !== t.w,
          u = c !== t.h;
        return t.w = a, t.h = c, i.horizontal ? {
          same: l,
          other: u
        } : {
          same: u,
          other: l
        }
      }

      function K(t, e) {
        const i = e.maxPadding;
        return function(t) {
          const s = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
          return t.forEach(t => {
            s[t] = Math.max(e[t], i[t])
          }), s
        }(t ? ["left", "right"] : ["top", "bottom"])
      }

      function Z(t, e, i, s) {
        const n = [];
        let o, r, h, a, c, l;
        for (o = 0, r = t.length, c = 0; r > o; ++o) {
          h = t[o], a = h.box, a.update(h.width || e.w, h.height || e.h, K(h.horizontal, e));
          const {
            same: r,
            other: u
          } = U(e, i, h, s);
          c |= r && n.length, l = l || u, a.fullSize || n.push(h)
        }
        return c && Z(n, e, i, s) || l
      }

      function Q(t, e, i, s, n) {
        t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n
      }

      function q(t, e, i, n) {
        const o = i.padding;
        let {
          x: r,
          y: h
        } = e;
        for (const a of t) {
          const t = a.box,
            c = n[a.stack] || {
              count: 1,
              placed: 0,
              weight: 1
            },
            l = a.stackWeight / c.weight || 1;
          if (a.horizontal) {
            const n = e.w * l,
              r = c.size || t.height;
            (0, s.h)(c.start) && (h = c.start), t.fullSize ? Q(t, o.left, h, i.outerWidth - o.right - o.left, r) : Q(t, e.left + c.placed, h, n, r), c.start = h, c.placed += n, h = t.bottom
          } else {
            const n = e.h * l,
              h = c.size || t.width;
            (0, s.h)(c.start) && (r = c.start), t.fullSize ? Q(t, r, o.top, h, i.outerHeight - o.bottom - o.top) : Q(t, r, e.top + c.placed, h, n), c.start = r, c.placed += n, r = t.right
          }
        }
        e.x = r, e.y = h
      }
      var G = {
        addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e.li = e.li || function() {
            return [{
              z: 0,
              draw(t) {
                e.draw(t)
              }
            }]
          }, t.boxes.push(e)
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
        },
        configure(t, e, i) {
          e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
        },
        update(t, e, i, n) {
          if (!t) return;
          const o = (0, s.E)(t.options.layout.padding),
            r = Math.max(e - o.width, 0),
            h = Math.max(i - o.height, 0),
            a = function(t) {
              const e = function(t) {
                  const e = [];
                  let i, s, n, o, r, h;
                  for (i = 0, s = (t || []).length; s > i; ++i) n = t[i], ({
                    position: o,
                    options: {
                      stack: r,
                      stackWeight: h = 1
                    }
                  } = n), e.push({
                    index: i,
                    box: n,
                    pos: o,
                    horizontal: n.isHorizontal(),
                    weight: n.weight,
                    stack: r && o + r,
                    stackWeight: h
                  });
                  return e
                }(t),
                i = Y(e.filter(t => t.box.fullSize), !0),
                s = Y(H(e, "left"), !0),
                n = Y(H(e, "right")),
                o = Y(H(e, "top"), !0),
                r = Y(H(e, "bottom")),
                h = V(e, "x"),
                a = V(e, "y");
              return {
                fullSize: i,
                leftAndTop: s.concat(o),
                rightAndBottom: n.concat(a).concat(r).concat(h),
                chartArea: H(e, "chartArea"),
                vertical: s.concat(n).concat(a),
                horizontal: o.concat(r).concat(h)
              }
            }(t.boxes),
            c = a.vertical,
            l = a.horizontal;
          (0, s.F)(t.boxes, t => {
            "function" == typeof t.beforeLayout && t.beforeLayout()
          });
          const u = c.reduce((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1, 0) || 1,
            f = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: o,
              availableWidth: r,
              availableHeight: h,
              vBoxMaxWidth: r / 2 / u,
              hBoxMaxHeight: h / 2
            }),
            d = Object.assign({}, o);
          X(d, (0, s.E)(n));
          const p = Object.assign({
              maxPadding: d,
              w: r,
              h: h,
              x: o.left,
              y: o.top
            }, o),
            b = function(t, e) {
              const i = function(t) {
                  const e = {};
                  for (const i of t) {
                    const {
                      stack: t,
                      pos: s,
                      stackWeight: n
                    } = i;
                    if (!t || !B.includes(s)) continue;
                    const o = e[t] || (e[t] = {
                      count: 0,
                      placed: 0,
                      weight: 0,
                      size: 0
                    });
                    o.count++, o.weight += n
                  }
                  return e
                }(t),
                {
                  vBoxMaxWidth: s,
                  hBoxMaxHeight: n
                } = e;
              let o, r, h;
              for (o = 0, r = t.length; r > o; ++o) {
                h = t[o];
                const {
                  fullSize: r
                } = h.box, a = i[h.stack], c = a && h.stackWeight / a.weight;
                h.horizontal ? (h.width = c ? c * s : r && e.availableWidth, h.height = n) : (h.width = s, h.height = c ? c * n : r && e.availableHeight)
              }
              return i
            }(c.concat(l), f);
          Z(a.fullSize, p, f, b), Z(c, p, f, b), Z(l, p, f, b) && Z(c, p, f, b),
            function(t) {
              const e = t.maxPadding;

              function i(i) {
                const s = Math.max(e[i] - t[i], 0);
                return t[i] += s, s
              }
              t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
            }(p), q(a.leftAndTop, p, f, b), p.x += p.w, p.y += p.h, q(a.rightAndBottom, p, f, b), t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w
            }, (0, s.F)(a.chartArea, e => {
              const i = e.box;
              Object.assign(i, t.chartArea), i.update(p.w, p.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              })
            })
        }
      };
      class J {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1
        }
        getMaximumSize(t, e, i, s) {
          return e = Math.max(0, e || t.width), i = i || t.height, {
            width: e,
            height: Math.max(0, s ? Math.floor(e / s) : i)
          }
        }
        isAttached(t) {
          return !0
        }
        updateConfig(t) {}
      }
      class tt extends J {
        acquireContext(t) {
          return t && t.getContext && t.getContext("2d") || null
        }
        updateConfig(t) {
          t.options.animation = !1
        }
      }
      const et = "$chartjs",
        it = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout"
        },
        st = t => null === t || "" === t,
        nt = !!s.K && {
          passive: !0
        };

      function ot(t, e, i) {
        t && t.canvas && t.canvas.removeEventListener(e, i, nt)
      }

      function rt(t, e) {
        for (const i of t)
          if (i === e || i.contains(e)) return !0
      }

      function ht(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver(t => {
            let e = !1;
            for (const i of t) e = e || rt(i.addedNodes, s), e = e && !rt(i.removedNodes, s);
            e && i()
          });
        return n.observe(document, {
          childList: !0,
          subtree: !0
        }), n
      }

      function at(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver(t => {
            let e = !1;
            for (const i of t) e = e || rt(i.removedNodes, s), e = e && !rt(i.addedNodes, s);
            e && i()
          });
        return n.observe(document, {
          childList: !0,
          subtree: !0
        }), n
      }
      const ct = new Map;
      let lt = 0;

      function ut() {
        const t = window.devicePixelRatio;
        t !== lt && (lt = t, ct.forEach((e, i) => {
          i.currentDevicePixelRatio !== t && e()
        }))
      }

      function ft(t, e, i) {
        const n = t.canvas,
          o = n && (0, s.I)(n);
        if (!o) return;
        const r = (0, s.L)((t, e) => {
            const s = o.clientWidth;
            i(t, e), s < o.clientWidth && i()
          }, window),
          h = new ResizeObserver(t => {
            const e = t[0],
              i = e.contentRect.width,
              s = e.contentRect.height;
            0 === i && 0 === s || r(i, s)
          });
        return h.observe(o),
          function(t, e) {
            ct.size || window.addEventListener("resize", ut), ct.set(t, e)
          }(t, r), h
      }

      function dt(t, e, i) {
        i && i.disconnect(), "resize" === e && function(t) {
          ct.delete(t), ct.size || window.removeEventListener("resize", ut)
        }(t)
      }

      function pt(t, e, i) {
        const n = t.canvas,
          o = (0, s.L)(e => {
            null !== t.ctx && i(function(t, e) {
              const i = it[t.type] || t.type,
                {
                  x: n,
                  y: o
                } = (0, s.z)(t, e);
              return {
                type: i,
                chart: e,
                native: t,
                x: void 0 !== n ? n : null,
                y: void 0 !== o ? o : null
              }
            }(e, t))
          }, t);
        return function(t, e, i) {
          t && t.addEventListener(e, i, nt)
        }(n, e, o), o
      }
      class bt extends J {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t ? (function(t, e) {
            const i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");
            if (t[et] = {
                initial: {
                  height: n,
                  width: o,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width
                  }
                }
              }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", st(o)) {
              const e = (0, s.J)(t, "width");
              void 0 !== e && (t.width = e)
            }
            if (st(n))
              if ("" === t.style.height) t.height = t.width / (e || 2);
              else {
                const e = (0, s.J)(t, "height");
                void 0 !== e && (t.height = e)
              }
          }(t, e), i) : null
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[et]) return !1;
          const i = e[et].initial;
          ["height", "width"].forEach(t => {
            const n = i[t];
            (0, s.k)(n) ? e.removeAttribute(t): e.setAttribute(t, n)
          });
          const n = i.style || {};
          return Object.keys(n).forEach(t => {
            e.style[t] = n[t]
          }), e.width = e.width, delete e[et], !0
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          const s = t.$proxies || (t.$proxies = {}),
            n = {
              attach: ht,
              detach: at,
              resize: ft
            } [e] || pt;
          s[e] = n(t, e, i)
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            s = i[e];
          s && (({
            attach: dt,
            detach: dt,
            resize: dt
          } [e] || ot)(t, e, s), i[e] = void 0)
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio
        }
        getMaximumSize(t, e, i, n) {
          return (0, s.G)(t, e, i, n)
        }
        isAttached(t) {
          const e = (0, s.I)(t);
          return !(!e || !e.isConnected)
        }
      }
      class gt {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) {
          const {
            x: e,
            y: i
          } = this.getProps(["x", "y"], t);
          return {
            x: e,
            y: i
          }
        }
        hasValue() {
          return (0, s.x)(this.x) && (0, s.x)(this.y)
        }
        getProps(t, e) {
          const i = this.$animations;
          if (!e || !i) return this;
          const s = {};
          return t.forEach(t => {
            s[t] = i[t] && i[t].active() ? i[t].Xt : this[t]
          }), s
        }
      }

      function mt(t, e, i, n, o) {
        const r = (0, s.v)(n, 0),
          h = Math.min((0, s.v)(o, t.length), t.length);
        let a, c, l, u = 0;
        for (i = Math.ceil(i), o && (a = o - n, i = a / Math.floor(a / i)), l = r; 0 > l;) u++, l = Math.round(r + u * i);
        for (c = Math.max(r, 0); h > c; c++) c === l && (e.push(t[c]), u++, l = Math.round(r + u * i))
      }
      const xt = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i,
        vt = (t, e) => Math.min(e || t, t);

      function yt(t, e) {
        const i = [],
          s = t.length / e,
          n = t.length;
        let o = 0;
        for (; n > o; o += s) i.push(t[Math.floor(o)]);
        return i
      }

      function Mt(t, e, i) {
        const s = t.ticks.length,
          n = Math.min(e, s - 1),
          o = t.oi,
          r = t.ri,
          h = 1e-6;
        let a, c = t.getPixelForTick(n);
        if (!(i && (a = 1 === s ? Math.max(c - o, r - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(n - 1)) / 2, c += e > n ? a : -a, o - h > c || c > r + h))) return c
      }

      function wt(t) {
        return t.drawTicks ? t.tickLength : 0
      }

      function _t(t, e) {
        if (!t.display) return 0;
        const i = (0, s.a0)(t.font, e),
          n = (0, s.E)(t.padding);
        return ((0, s.b)(t.text) ? t.text.length : 1) * i.lineHeight + n.height
      }

      function kt(t, e, i) {
        let n = (0, s.a1)(t);
        return (i && "right" !== e || !i && "right" === e) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)), n
      }
      class Ot extends gt {
        constructor(t) {
          super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.ui = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this.fi = void 0, this.ticks = [], this.di = null, this.pi = null, this.bi = null, this.Ne = 0, this.gi = 0, this.mi = {}, this.oi = void 0, this.ri = void 0, this.ci = !1, this.xi = void 0, this.yi = void 0, this.Mi = void 0, this.wi = void 0, this._i = 0, this.ki = 0, this.Te = {}, this.Oi = !1, this.$context = void 0
        }
        init(t) {
          this.options = t.setContext(this.getContext()), this.axis = t.axis, this.yi = this.parse(t.min), this.xi = this.parse(t.max), this.wi = this.parse(t.suggestedMin), this.Mi = this.parse(t.suggestedMax)
        }
        parse(t, e) {
          return t
        }
        getUserBounds() {
          let {
            yi: t,
            xi: e,
            wi: i,
            Mi: n
          } = this;
          return t = (0, s.O)(t, 1 / 0), e = (0, s.O)(e, -1 / 0), i = (0, s.O)(i, 1 / 0), n = (0, s.O)(n, -1 / 0), {
            min: (0, s.O)(t, i),
            max: (0, s.O)(e, n),
            minDefined: (0, s.g)(t),
            maxDefined: (0, s.g)(e)
          }
        }
        getMinMax(t) {
          let e, {
            min: i,
            max: n,
            minDefined: o,
            maxDefined: r
          } = this.getUserBounds();
          if (o && r) return {
            min: i,
            max: n
          };
          const h = this.getMatchingVisibleMetas();
          for (let s = 0, a = h.length; a > s; ++s) e = h[s].controller.getMinMax(this, t), o || (i = Math.min(i, e.min)), r || (n = Math.max(n, e.max));
          return i = r && i > n ? n : i, n = o && i > n ? i : n, {
            min: (0, s.O)(i, (0, s.O)(n, i)),
            max: (0, s.O)(n, (0, s.O)(i, n))
          }
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
          }
        }
        getTicks() {
          return this.ticks
        }
        getLabels() {
          const t = this.chart.data;
          return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }
        getLabelItems(t = this.chart.chartArea) {
          return this.pi || (this.pi = this.Si(t))
        }
        beforeLayout() {
          this.Te = {}, this.Oi = !1
        }
        beforeUpdate() {
          (0, s.Q)(this.options.beforeUpdate, [this])
        }
        update(t, e, i) {
          const {
            beginAtZero: n,
            grace: o,
            ticks: r
          } = this.options, h = r.sampleSize;
          this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.ui = i = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, i), this.ticks = null, this.bi = null, this.di = null, this.pi = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.gi = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this.Oi || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.fi = (0, s.R)(this, o, n), this.Oi = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
          const a = h < this.ticks.length;
          this.Di(a ? yt(this.ticks, h) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || "auto" === r.source) && (this.ticks = function(t, e) {
            const i = t.options.ticks,
              n = function(t) {
                const e = t.options.offset,
                  i = t.Ai(),
                  s = t.Ne / i + (e ? 0 : 1),
                  n = t.gi / i;
                return Math.floor(Math.min(s, n))
              }(t),
              o = Math.min(i.maxTicksLimit || n, n),
              r = i.major.enabled ? function(t) {
                const e = [];
                let i, s;
                for (i = 0, s = t.length; s > i; i++) t[i].major && e.push(i);
                return e
              }(e) : [],
              h = r.length,
              a = r[0],
              c = r[h - 1],
              l = [];
            if (h > o) return function(t, e, i, s) {
              let n, o = 0,
                r = i[0];
              for (s = Math.ceil(s), n = 0; n < t.length; n++) n === r && (e.push(t[n]), o++, r = i[o * s])
            }(e, l, r, h / o), l;
            const u = function(t, e, i) {
              const n = function(t) {
                  const e = t.length;
                  let i, s;
                  if (2 > e) return !1;
                  for (s = t[0], i = 1; e > i; ++i)
                    if (t[i] - t[i - 1] !== s) return !1;
                  return s
                }(t),
                o = e.length / i;
              if (!n) return Math.max(o, 1);
              const r = (0, s.N)(n);
              for (let t = 0, e = r.length - 1; e > t; t++) {
                const e = r[t];
                if (e > o) return e
              }
              return Math.max(o, 1)
            }(r, e, o);
            if (h > 0) {
              let t, i;
              const n = h > 1 ? Math.round((c - a) / (h - 1)) : null;
              for (mt(e, l, u, (0, s.k)(n) ? 0 : a - n, a), t = 0, i = h - 1; i > t; t++) mt(e, l, u, r[t], r[t + 1]);
              return mt(e, l, u, c, (0, s.k)(n) ? e.length : c + n), l
            }
            return mt(e, l, u), l
          }(this, this.ticks), this.bi = null, this.afterAutoSkip()), a && this.Di(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
        }
        configure() {
          let t, e, i = this.options.reverse;
          this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this.oi = t, this.ri = e, this.ci = i, this.Ne = e - t, this.Ci = this.options.alignToPixels
        }
        afterUpdate() {
          (0, s.Q)(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
          (0, s.Q)(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
          this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
        }
        afterSetDimensions() {
          (0, s.Q)(this.options.afterSetDimensions, [this])
        }
        Li(t) {
          this.chart.notifyPlugins(t, this.getContext()), (0, s.Q)(this.options[t], [this])
        }
        beforeDataLimits() {
          this.Li("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits() {
          this.Li("afterDataLimits")
        }
        beforeBuildTicks() {
          this.Li("beforeBuildTicks")
        }
        buildTicks() {
          return []
        }
        afterBuildTicks() {
          this.Li("afterBuildTicks")
        }
        beforeTickToLabelConversion() {
          (0, s.Q)(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let i, n, o;
          for (i = 0, n = t.length; n > i; i++) o = t[i], o.label = (0, s.Q)(e.callback, [o.value, i, t], this)
        }
        afterTickToLabelConversion() {
          (0, s.Q)(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
          (0, s.Q)(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = vt(this.ticks.length, t.ticks.maxTicksLimit),
            n = e.minRotation || 0,
            o = e.maxRotation;
          let r, h, a, c = n;
          if (!(this.Ri() && e.display && o > n && i > 1 && this.isHorizontal())) return void(this.labelRotation = n);
          const l = this.Ei(),
            u = l.widest.width,
            f = l.highest.height,
            d = (0, s.S)(this.chart.width - u, 0, this.maxWidth);
          r = t.offset ? this.maxWidth / i : d / (i - 1), u + 6 > r && (r = d / (i - (t.offset ? .5 : 1)), h = this.maxHeight - wt(t.grid) - e.padding - _t(t.title, this.chart.options.font), a = Math.sqrt(u * u + f * f), c = (0, s.U)(Math.min(Math.asin((0, s.S)((l.highest.height + 6) / r, -1, 1)), Math.asin((0, s.S)(h / a, -1, 1)) - Math.asin((0, s.S)(f / a, -1, 1)))), c = Math.max(n, Math.min(o, c))), this.labelRotation = c
        }
        afterCalculateLabelRotation() {
          (0, s.Q)(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit() {
          (0, s.Q)(this.options.beforeFit, [this])
        }
        fit() {
          const t = {
              width: 0,
              height: 0
            },
            {
              chart: e,
              options: {
                ticks: i,
                title: n,
                grid: o
              }
            } = this,
            r = this.Ri(),
            h = this.isHorizontal();
          if (r) {
            const r = _t(n, e.options.font);
            if (h ? (t.width = this.maxWidth, t.height = wt(o) + r) : (t.height = this.maxHeight, t.width = wt(o) + r), i.display && this.ticks.length) {
              const {
                first: e,
                last: n,
                widest: o,
                highest: r
              } = this.Ei(), a = 2 * i.padding, c = (0, s.t)(this.labelRotation), l = Math.cos(c), u = Math.sin(c);
              if (h) {
                const e = i.mirror ? 0 : u * o.width + l * r.height;
                t.height = Math.min(this.maxHeight, t.height + e + a)
              } else {
                const e = i.mirror ? 0 : l * o.width + u * r.height;
                t.width = Math.min(this.maxWidth, t.width + e + a)
              }
              this.ji(e, n, u, l)
            }
          }
          this.Pi(), h ? (this.width = this.Ne = e.width - this.ui.left - this.ui.right, this.height = t.height) : (this.width = t.width, this.height = this.Ne = e.height - this.ui.top - this.ui.bottom)
        }
        ji(t, e, i, s) {
          const {
            ticks: {
              align: n,
              padding: o
            },
            position: r
          } = this.options, h = 0 !== this.labelRotation, a = "top" !== r && "x" === this.axis;
          if (this.isHorizontal()) {
            const r = this.getPixelForTick(0) - this.left,
              c = this.right - this.getPixelForTick(this.ticks.length - 1);
            let l = 0,
              u = 0;
            h ? a ? (l = s * t.width, u = i * e.height) : (l = i * t.height, u = s * e.width) : "start" === n ? u = e.width : "end" === n ? l = t.width : "inner" !== n && (l = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((l - r + o) * this.width / (this.width - r), 0), this.paddingRight = Math.max((u - c + o) * this.width / (this.width - c), 0)
          } else {
            let i = e.height / 2,
              s = t.height / 2;
            "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o
          }
        }
        Pi() {
          this.ui && (this.ui.left = Math.max(this.paddingLeft, this.ui.left), this.ui.top = Math.max(this.paddingTop, this.ui.top), this.ui.right = Math.max(this.paddingRight, this.ui.right), this.ui.bottom = Math.max(this.paddingBottom, this.ui.bottom))
        }
        afterFit() {
          (0, s.Q)(this.options.afterFit, [this])
        }
        isHorizontal() {
          const {
            axis: t,
            position: e
          } = this.options;
          return "top" === e || "bottom" === e || "x" === t
        }
        isFullSize() {
          return this.options.fullSize
        }
        Di(t) {
          let e, i;
          for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; i > e; e++)(0, s.k)(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion()
        }
        Ei() {
          let t = this.bi;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            e < i.length && (i = yt(i, e)), this.bi = t = this.Ti(i, i.length, this.options.ticks.maxTicksLimit)
          }
          return t
        }
        Ti(t, e, i) {
          const {
            ctx: n,
            mi: o
          } = this, r = [], h = [], a = Math.floor(e / vt(e, i));
          let c, l, u, f, d, p, b, g, m, x, v, y = 0,
            M = 0;
          for (c = 0; e > c; c += a) {
            if (f = t[c].label, d = this.Ni(c), n.font = p = d.string, b = o[p] = o[p] || {
                data: {},
                gc: []
              }, g = d.lineHeight, m = x = 0, (0, s.k)(f) || (0, s.b)(f)) {
              if ((0, s.b)(f))
                for (l = 0, u = f.length; u > l; ++l) v = f[l], !(0, s.k)(v) && !(0, s.b)(v) && (m = (0, s.V)(n, b.data, b.gc, m, v), x += g)
            } else m = (0, s.V)(n, b.data, b.gc, m, f), x = g;
            r.push(m), h.push(x), y = Math.max(m, y), M = Math.max(x, M)
          }! function(t, e) {
            (0, s.F)(t, t => {
              const i = t.gc,
                s = i.length / 2;
              let n;
              if (s > e) {
                for (n = 0; s > n; ++n) delete t.data[i[n]];
                i.splice(0, s)
              }
            })
          }(o, e);
          const w = r.indexOf(y),
            _ = h.indexOf(M),
            k = t => ({
              width: r[t] || 0,
              height: h[t] || 0
            });
          return {
            first: k(0),
            last: k(e - 1),
            widest: k(w),
            highest: k(_),
            widths: r,
            heights: h
          }
        }
        getLabelForValue(t) {
          return t
        }
        getPixelForValue(t, e) {
          return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return 0 > t || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
          this.ci && (t = 1 - t);
          const e = this.oi + t * this.Ne;
          return (0, s.W)(this.Ci ? (0, s.X)(this.chart, e, 0) : e)
        }
        getDecimalForPixel(t) {
          const e = (t - this.oi) / this.Ne;
          return this.ci ? 1 - e : e
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
          const {
            min: t,
            max: e
          } = this;
          return 0 > t && 0 > e ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return i.$context || (i.$context = function(t, e, i) {
              return (0, s.j)(t, {
                tick: i,
                index: e,
                type: "tick"
              })
            }(this.getContext(), t, i))
          }
          return this.$context || (this.$context = function(t, e) {
            return (0, s.j)(t, {
              scale: e,
              type: "scale"
            })
          }(this.chart.getContext(), this))
        }
        Ai() {
          const t = this.options.ticks,
            e = (0, s.t)(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            n = Math.abs(Math.sin(e)),
            o = this.Ei(),
            r = t.autoSkipPadding || 0,
            h = o ? o.widest.width + r : 0,
            a = o ? o.highest.height + r : 0;
          return this.isHorizontal() ? a * i > h * n ? h / i : a / n : h * i > a * n ? a / i : h / n
        }
        Ri() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        Fi(t) {
          const e = this.axis,
            i = this.chart,
            n = this.options,
            {
              grid: o,
              position: r,
              border: h
            } = n,
            a = o.offset,
            c = this.isHorizontal(),
            l = this.ticks.length + (a ? 1 : 0),
            u = wt(o),
            f = [],
            d = h.setContext(this.getContext()),
            p = d.display ? d.width : 0,
            b = p / 2,
            g = function(t) {
              return (0, s.X)(i, t, p)
            };
          let m, x, v, y, M, w, _, k, O, S, D, A;
          if ("top" === r) m = g(this.bottom), w = this.bottom - u, k = m - b, S = g(t.top) + b, A = t.bottom;
          else if ("bottom" === r) m = g(this.top), S = t.top, A = g(t.bottom) - b, w = m + b, k = this.top + u;
          else if ("left" === r) m = g(this.right), M = this.right - u, _ = m - b, O = g(t.left) + b, D = t.right;
          else if ("right" === r) m = g(this.left), O = t.left, D = g(t.right) - b, M = m + b, _ = this.left + u;
          else if ("x" === e) {
            if ("center" === r) m = g((t.top + t.bottom) / 2 + .5);
            else if ((0, s.i)(r)) {
              const t = Object.keys(r)[0],
                e = r[t];
              m = g(this.chart.scales[t].getPixelForValue(e))
            }
            S = t.top, A = t.bottom, w = m + b, k = w + u
          } else if ("y" === e) {
            if ("center" === r) m = g((t.left + t.right) / 2);
            else if ((0, s.i)(r)) {
              const t = Object.keys(r)[0],
                e = r[t];
              m = g(this.chart.scales[t].getPixelForValue(e))
            }
            M = m - b, _ = M - u, O = t.left, D = t.right
          }
          const C = (0, s.v)(n.ticks.maxTicksLimit, l),
            L = Math.max(1, Math.ceil(l / C));
          for (x = 0; l > x; x += L) {
            const t = this.getContext(x),
              e = o.setContext(t),
              n = h.setContext(t),
              r = e.lineWidth,
              l = e.color,
              u = n.dash || [],
              d = n.dashOffset,
              p = e.tickWidth,
              b = e.tickColor,
              g = e.tickBorderDash || [],
              m = e.tickBorderDashOffset;
            v = Mt(this, x, a), void 0 !== v && (y = (0, s.X)(i, v, r), c ? M = _ = O = D = y : w = k = S = A = y, f.push({
              tx1: M,
              ty1: w,
              tx2: _,
              ty2: k,
              x1: O,
              y1: S,
              x2: D,
              y2: A,
              width: r,
              color: l,
              borderDash: u,
              borderDashOffset: d,
              tickWidth: p,
              tickColor: b,
              tickBorderDash: g,
              tickBorderDashOffset: m
            }))
          }
          return this._i = l, this.ki = m, f
        }
        Si(t) {
          const e = this.axis,
            i = this.options,
            {
              position: n,
              ticks: o
            } = i,
            r = this.isHorizontal(),
            h = this.ticks,
            {
              align: a,
              crossAlign: c,
              padding: l,
              mirror: u
            } = o,
            f = wt(i.grid),
            d = f + l,
            p = u ? -l : d,
            b = -(0, s.t)(this.labelRotation),
            g = [];
          let m, x, v, y, M, w, _, k, O, S, D, A, C = "middle";
          if ("top" === n) w = this.bottom - p, _ = this.Ii();
          else if ("bottom" === n) w = this.top + p, _ = this.Ii();
          else if ("left" === n) {
            const t = this.zi(f);
            _ = t.textAlign, M = t.x
          } else if ("right" === n) {
            const t = this.zi(f);
            _ = t.textAlign, M = t.x
          } else if ("x" === e) {
            if ("center" === n) w = (t.top + t.bottom) / 2 + d;
            else if ((0, s.i)(n)) {
              const t = Object.keys(n)[0],
                e = n[t];
              w = this.chart.scales[t].getPixelForValue(e) + d
            }
            _ = this.Ii()
          } else if ("y" === e) {
            if ("center" === n) M = (t.left + t.right) / 2 - d;
            else if ((0, s.i)(n)) {
              const t = Object.keys(n)[0],
                e = n[t];
              M = this.chart.scales[t].getPixelForValue(e)
            }
            _ = this.zi(f).textAlign
          }
          "y" === e && ("start" === a ? C = "top" : "end" === a && (C = "bottom"));
          const L = this.Ei();
          for (m = 0, x = h.length; x > m; ++m) {
            v = h[m], y = v.label;
            const t = o.setContext(this.getContext(m));
            k = this.getPixelForTick(m) + o.labelOffset, O = this.Ni(m), S = O.lineHeight, D = (0, s.b)(y) ? y.length : 1;
            const e = D / 2,
              i = t.color,
              a = t.textStrokeColor,
              l = t.textStrokeWidth;
            let f, d = _;
            if (r ? (M = k, "inner" === _ && (d = m === x - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), A = "top" === n ? "near" === c || 0 !== b ? -D * S + S / 2 : "center" === c ? -L.highest.height / 2 - e * S + S : -L.highest.height + S / 2 : "near" === c || 0 !== b ? S / 2 : "center" === c ? L.highest.height / 2 - e * S : L.highest.height - D * S, u && (A *= -1), 0 !== b && !t.showLabelBackdrop && (M += S / 2 * Math.sin(b))) : (w = k, A = (1 - D) * S / 2), t.showLabelBackdrop) {
              const e = (0, s.E)(t.backdropPadding),
                i = L.heights[m],
                n = L.widths[m];
              let o = A - e.top,
                r = 0 - e.left;
              switch (C) {
                case "middle":
                  o -= i / 2;
                  break;
                case "bottom":
                  o -= i
              }
              switch (_) {
                case "center":
                  r -= n / 2;
                  break;
                case "right":
                  r -= n;
                  break;
                case "inner":
                  m === x - 1 ? r -= n : m > 0 && (r -= n / 2)
              }
              f = {
                left: r,
                top: o,
                width: n + e.width,
                height: i + e.height,
                color: t.backdropColor
              }
            }
            g.push({
              label: y,
              font: O,
              textOffset: A,
              options: {
                rotation: b,
                color: i,
                strokeColor: a,
                strokeWidth: l,
                textAlign: d,
                textBaseline: C,
                translation: [M, w],
                backdrop: f
              }
            })
          }
          return g
        }
        Ii() {
          const {
            position: t,
            ticks: e
          } = this.options;
          if (-(0, s.t)(this.labelRotation)) return "top" === t ? "left" : "right";
          let i = "center";
          return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i
        }
        zi(t) {
          const {
            position: e,
            ticks: {
              crossAlign: i,
              mirror: s,
              padding: n
            }
          } = this.options, o = t + n, r = this.Ei().widest.width;
          let h, a;
          return "left" === e ? s ? (a = this.right + n, "near" === i ? h = "left" : "center" === i ? (h = "center", a += r / 2) : (h = "right", a += r)) : (a = this.right - o, "near" === i ? h = "right" : "center" === i ? (h = "center", a -= r / 2) : (h = "left", a = this.left)) : "right" === e ? s ? (a = this.left + n, "near" === i ? h = "right" : "center" === i ? (h = "center", a -= r / 2) : (h = "left", a -= r)) : (a = this.left + o, "near" === i ? h = "left" : "center" === i ? (h = "center", a += r / 2) : (h = "right", a = this.right)) : h = "right", {
            textAlign: h,
            x: a
          }
        }
        Wi() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return "left" === e || "right" === e ? {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
          } : "top" === e || "bottom" === e ? {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: t.width
          } : void 0
        }
        drawBackground() {
          const {
            ctx: t,
            options: {
              backgroundColor: e
            },
            left: i,
            top: s,
            width: n,
            height: o
          } = this;
          e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore())
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this.Ri() || !e.display) return 0;
          const i = this.ticks.findIndex(e => e.value === t);
          return 0 > i ? 0 : e.setContext(this.getContext(i)).lineWidth
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            s = this.di || (this.di = this.Fi(t));
          let n, o;
          const r = (t, e, s) => {
            !s.width || !s.color || (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
          };
          if (e.display)
            for (n = 0, o = s.length; o > n; ++n) {
              const t = s[n];
              e.drawOnChartArea && r({
                x: t.x1,
                y: t.y1
              }, {
                x: t.x2,
                y: t.y2
              }, t), e.drawTicks && r({
                x: t.tx1,
                y: t.ty1
              }, {
                x: t.tx2,
                y: t.ty2
              }, {
                color: t.tickColor,
                width: t.tickWidth,
                borderDash: t.tickBorderDash,
                borderDashOffset: t.tickBorderDashOffset
              })
            }
        }
        drawBorder() {
          const {
            chart: t,
            ctx: e,
            options: {
              border: i,
              grid: n
            }
          } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
          if (!r) return;
          const h = n.setContext(this.getContext(0)).lineWidth,
            a = this.ki;
          let c, l, u, f;
          this.isHorizontal() ? (c = (0, s.X)(t, this.left, r) - r / 2, l = (0, s.X)(t, this.right, h) + h / 2, u = f = a) : (u = (0, s.X)(t, this.top, r) - r / 2, f = (0, s.X)(t, this.bottom, h) + h / 2, c = l = a), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(l, f), e.stroke(), e.restore()
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            i = this.Wi();
          i && (0, s.Y)(e, i);
          const n = this.getLabelItems(t);
          for (const t of n) {
            const i = t.options,
              n = t.font,
              o = t.label,
              r = t.textOffset;
            (0, s.Z)(e, o, 0, r, n, i)
          }
          i && (0, s.$)(e)
        }
        drawTitle() {
          const {
            ctx: t,
            options: {
              position: e,
              title: i,
              reverse: n
            }
          } = this;
          if (!i.display) return;
          const o = (0, s.a0)(i.font),
            r = (0, s.E)(i.padding),
            h = i.align;
          let a = o.lineHeight / 2;
          "bottom" === e || "center" === e || (0, s.i)(e) ? (a += r.bottom, (0, s.b)(i.text) && (a += o.lineHeight * (i.text.length - 1))) : a += r.top;
          const {
            titleX: c,
            titleY: l,
            maxWidth: u,
            rotation: f
          } = function(t, e, i, n) {
            const {
              top: o,
              left: r,
              bottom: h,
              right: a,
              chart: c
            } = t, {
              chartArea: l,
              scales: u
            } = c;
            let f, d, p, b = 0;
            const g = h - o,
              m = a - r;
            if (t.isHorizontal()) {
              if (d = (0, s.a2)(n, r, a), (0, s.i)(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                p = u[t].getPixelForValue(s) + g - e
              } else p = "center" === i ? (l.bottom + l.top) / 2 + g - e : xt(t, i, e);
              f = a - r
            } else {
              if ((0, s.i)(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                d = u[t].getPixelForValue(s) - m + e
              } else d = "center" === i ? (l.left + l.right) / 2 - m + e : xt(t, i, e);
              p = (0, s.a2)(n, h, o), b = "left" === i ? -s.H : s.H
            }
            return {
              titleX: d,
              titleY: p,
              maxWidth: f,
              rotation: b
            }
          }(this, a, e, h);
          (0, s.Z)(t, i.text, 0, 0, o, {
            color: i.color,
            maxWidth: u,
            rotation: f,
            textAlign: kt(h, e, n),
            textBaseline: "middle",
            translation: [c, l]
          })
        }
        draw(t) {
          this.Ri() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }
        li() {
          const t = this.options,
            e = t.ticks && t.ticks.z || 0,
            i = (0, s.v)(t.grid && t.grid.z, -1),
            n = (0, s.v)(t.border && t.border.z, 0);
          return this.Ri() && this.draw === Ot.prototype.draw ? [{
            z: i,
            draw: t => {
              this.drawBackground(), this.drawGrid(t), this.drawTitle()
            }
          }, {
            z: n,
            draw: () => {
              this.drawBorder()
            }
          }, {
            z: e,
            draw: t => {
              this.drawLabels(t)
            }
          }] : [{
            z: e,
            draw: t => {
              this.draw(t)
            }
          }]
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            s = [];
          let n, o;
          for (n = 0, o = e.length; o > n; ++n) {
            const o = e[n];
            o[i] === this.id && (!t || o.type === t) && s.push(o)
          }
          return s
        }
        Ni(t) {
          const e = this.options.ticks.setContext(this.getContext(t));
          return (0, s.a0)(e.font)
        }
        Bi() {
          const t = this.Ni(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t
        }
      }
      class St {
        constructor(t, e, i) {
          this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
        }
        isForType(t) {
          return {}.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let i;
          var n;
          "id" in (n = e) && "defaults" in n && (i = this.register(e));
          const o = this.items,
            r = t.id,
            h = this.scope + "." + r;
          if (!r) throw Error("class does not have id: " + t);
          return r in o || (o[r] = t, function(t, e, i) {
            const n = (0, s.a4)(Object.create(null), [i ? s.d.get(i) : {}, s.d.get(e), t.defaults]);
            s.d.set(e, n), t.defaultRoutes && function(t, e) {
              Object.keys(e).forEach(i => {
                const n = i.split("."),
                  o = n.pop(),
                  r = [t].concat(n).join("."),
                  h = e[i].split("."),
                  a = h.pop(),
                  c = h.join(".");
                s.d.route(r, o, c, a)
              })
            }(e, t.defaultRoutes), t.descriptors && s.d.describe(e, t.descriptors)
          }(t, h, i), this.override && s.d.override(t.id, t.overrides)), h
        }
        get(t) {
          return this.items[t]
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            n = this.scope;
          i in e && delete e[i], n && i in s.d[n] && (delete s.d[n][i], this.override && delete s.a3[i])
        }
      }
      var Dt = new class {
        constructor() {
          this.controllers = new St(y, "datasets", !0), this.elements = new St(gt, "elements"), this.plugins = new St(Object, "plugins"), this.scales = new St(Ot, "scales"), this.Hi = [this.controllers, this.scales, this.elements]
        }
        add(...t) {
          this.Vi("register", t)
        }
        remove(...t) {
          this.Vi("unregister", t)
        }
        addControllers(...t) {
          this.Vi("register", t, this.controllers)
        }
        addElements(...t) {
          this.Vi("register", t, this.elements)
        }
        addPlugins(...t) {
          this.Vi("register", t, this.plugins)
        }
        addScales(...t) {
          this.Vi("register", t, this.scales)
        }
        getController(t) {
          return this.Yi(t, this.controllers, "controller")
        }
        getElement(t) {
          return this.Yi(t, this.elements, "element")
        }
        getPlugin(t) {
          return this.Yi(t, this.plugins, "plugin")
        }
        getScale(t) {
          return this.Yi(t, this.scales, "scale")
        }
        removeControllers(...t) {
          this.Vi("unregister", t, this.controllers)
        }
        removeElements(...t) {
          this.Vi("unregister", t, this.elements)
        }
        removePlugins(...t) {
          this.Vi("unregister", t, this.plugins)
        }
        removeScales(...t) {
          this.Vi("unregister", t, this.scales)
        }
        Vi(t, e, i) {
          [...e].forEach(e => {
            const n = i || this.$i(e);
            i || n.isForType(e) || n === this.plugins && e.id ? this.Xi(t, n, e) : (0, s.F)(e, e => {
              const s = i || this.$i(e);
              this.Xi(t, s, e)
            })
          })
        }
        Xi(t, e, i) {
          const n = (0, s.a5)(t);
          (0, s.Q)(i["before" + n], [], i), e[t](i), (0, s.Q)(i["after" + n], [], i)
        }
        $i(t) {
          for (let e = 0; e < this.Hi.length; e++) {
            const i = this.Hi[e];
            if (i.isForType(t)) return i
          }
          return this.plugins
        }
        Yi(t, e, i) {
          const s = e.get(t);
          if (void 0 === s) throw Error('"' + t + '" is not a registered ' + i + ".");
          return s
        }
      };
      class At {
        constructor() {
          this.Ui = []
        }
        notify(t, e, i, s) {
          "beforeInit" === e && (this.Ui = this.Ki(t, !0), this.jt(this.Ui, t, "install"));
          const n = s ? this.wt(t).filter(s) : this.wt(t),
            o = this.jt(n, t, e, i);
          return "afterDestroy" === e && (this.jt(n, t, "stop"), this.jt(this.Ui, t, "uninstall")), o
        }
        jt(t, e, i, n) {
          n = n || {};
          for (const o of t) {
            const t = o.plugin,
              r = t[i],
              h = [e, n, o.options];
            if (!1 === (0, s.Q)(r, h, t) && n.cancelable) return !1
          }
          return !0
        }
        invalidate() {
          (0, s.k)(this.Te) || (this.Zi = this.Te, this.Te = void 0)
        }
        wt(t) {
          if (this.Te) return this.Te;
          const e = this.Te = this.Ki(t);
          return this.Qi(t), e
        }
        Ki(t, e) {
          const i = t && t.config,
            n = (0, s.v)(i.options && i.options.plugins, {}),
            o = function(t) {
              const e = {},
                i = [],
                s = Object.keys(Dt.plugins.items);
              for (let t = 0; t < s.length; t++) i.push(Dt.getPlugin(s[t]));
              const n = t.plugins || [];
              for (let t = 0; t < n.length; t++) {
                const s = n[t]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0)
              }
              return {
                plugins: i,
                localIds: e
              }
            }(i);
          return !1 !== n || e ? function(t, {
            plugins: e,
            localIds: i
          }, s, n) {
            const o = [],
              r = t.getContext();
            for (const h of e) {
              const e = h.id,
                a = Ct(s[e], n);
              null !== a && o.push({
                plugin: h,
                options: Lt(t.config, {
                  plugin: h,
                  local: i[e]
                }, a, r)
              })
            }
            return o
          }(t, o, n, e) : []
        }
        Qi(t) {
          const e = this.Zi || [],
            i = this.Te,
            s = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
          this.jt(s(e, i), t, "stop"), this.jt(s(i, e), t, "start")
        }
      }

      function Ct(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
      }

      function Lt(t, {
        plugin: e,
        local: i
      }, s, n) {
        const o = t.pluginScopeKeys(e),
          r = t.getOptionScopes(s, o);
        return i && e.defaults && r.push(e.defaults), t.createResolver(r, n, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0
        })
      }

      function Rt(t, e) {
        const i = s.d.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
      }

      function Et(t) {
        if ("x" === t || "y" === t || "r" === t) return t
      }

      function jt(t) {
        return "top" === t || "bottom" === t ? "x" : "left" === t || "right" === t ? "y" : void 0
      }

      function Pt(t, ...e) {
        if (Et(t)) return t;
        for (const i of e) {
          const e = i.axis || jt(i.position) || t.length > 1 && Et(t[0].toLowerCase());
          if (e) return e
        }
        throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
      }

      function Tt(t, e, i) {
        if (i[e + "AxisID"] === t) return {
          axis: e
        }
      }

      function Nt(t) {
        const e = t.options || (t.options = {});
        e.plugins = (0, s.v)(e.plugins, {}), e.scales = function(t, e) {
          const i = s.a3[t.type] || {
              scales: {}
            },
            n = e.scales || {},
            o = Rt(t.type, e),
            r = Object.create(null);
          return Object.keys(n).forEach(e => {
            const h = n[e];
            if (!(0, s.i)(h)) return console.error("Invalid scale configuration for scale: " + e);
            if (h.xt) return console.warn("Ignoring resolver passed as options for scale: " + e);
            const a = Pt(e, h, function(t, e) {
                if (e.data && e.data.datasets) {
                  const i = e.data.datasets.filter(e => e.xAxisID === t || e.yAxisID === t);
                  if (i.length) return Tt(t, "x", i[0]) || Tt(t, "y", i[0])
                }
                return {}
              }(e, t), s.d.scales[h.type]),
              c = function(t, e) {
                return t === e ? "_index_" : "_value_"
              }(a, o),
              l = i.scales || {};
            r[e] = (0, s.ab)(Object.create(null), [{
              axis: a
            }, h, l[a], l[c]])
          }), t.data.datasets.forEach(i => {
            const o = i.type || t.type,
              h = i.indexAxis || Rt(o, e),
              a = (s.a3[o] || {}).scales || {};
            Object.keys(a).forEach(t => {
              const e = function(t, e) {
                  let i = t;
                  return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                }(t, h),
                o = i[e + "AxisID"] || e;
              r[o] = r[o] || Object.create(null), (0, s.ab)(r[o], [{
                axis: e
              }, n[o], a[t]])
            })
          }), Object.keys(r).forEach(t => {
            const e = r[t];
            (0, s.ab)(e, [s.d.scales[e.type], s.d.scale])
          }), r
        }(t, e)
      }

      function Ft(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
      }
      const It = new Map,
        zt = new Set;

      function Wt(t, e) {
        let i = It.get(t);
        return i || (i = e(), It.set(t, i), zt.add(i)), i
      }
      const Bt = (t, e, i) => {
        const n = (0, s.f)(e, i);
        void 0 !== n && t.add(n)
      };
      class Ht {
        constructor(t) {
          var e;
          this.qi = ((e = (e = t) || {}).data = Ft(e.data), Nt(e), e), this.Gi = new Map, this.Ji = new Map
        }
        get platform() {
          return this.qi.platform
        }
        get type() {
          return this.qi.type
        }
        set type(t) {
          this.qi.type = t
        }
        get data() {
          return this.qi.data
        }
        set data(t) {
          this.qi.data = Ft(t)
        }
        get options() {
          return this.qi.options
        }
        set options(t) {
          this.qi.options = t
        }
        get plugins() {
          return this.qi.plugins
        }
        update() {
          const t = this.qi;
          this.clearCache(), Nt(t)
        }
        clearCache() {
          this.Gi.clear(), this.Ji.clear()
        }
        datasetScopeKeys(t) {
          return Wt(t, () => [
            ["datasets." + t, ""]
          ])
        }
        datasetAnimationScopeKeys(t, e) {
          return Wt(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, "transitions." + e],
            ["datasets." + t, ""]
          ])
        }
        datasetElementScopeKeys(t, e) {
          return Wt(`${t}-${e}`, () => [
            [`datasets.${t}.elements.${e}`, "datasets." + t, "elements." + e, ""]
          ])
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return Wt(`${this.type}-plugin-${e}`, () => [
            ["plugins." + e, ...t.additionalOptionScopes || []]
          ])
        }
        ts(t, e) {
          const i = this.Gi;
          let s = i.get(t);
          return (!s || e) && (s = new Map, i.set(t, s)), s
        }
        getOptionScopes(t, e, i) {
          const {
            options: n,
            type: o
          } = this, r = this.ts(t, i), h = r.get(e);
          if (h) return h;
          const a = new Set;
          e.forEach(e => {
            t && (a.add(t), e.forEach(e => Bt(a, t, e))), e.forEach(t => Bt(a, n, t)), e.forEach(t => Bt(a, s.a3[o] || {}, t)), e.forEach(t => Bt(a, s.d, t)), e.forEach(t => Bt(a, s.a6, t))
          });
          const c = Array.from(a);
          return 0 === c.length && c.push(Object.create(null)), zt.has(e) && r.set(e, c), c
        }
        chartOptionScopes() {
          const {
            options: t,
            type: e
          } = this;
          return [t, s.a3[e] || {}, s.d.datasets[e] || {}, {
            type: e
          }, s.d, s.a6]
        }
        resolveNamedOptions(t, e, i, n = [""]) {
          const o = {
              $shared: !0
            },
            {
              resolver: r,
              subPrefixes: h
            } = Vt(this.Ji, t, n);
          let a = r;
          if (function(t, e) {
              const {
                isScriptable: i,
                isIndexable: n
              } = (0, s.aa)(t);
              for (const o of e) {
                const e = i(o),
                  r = n(o),
                  h = (r || e) && t[o];
                if (e && ((0, s.a7)(h) || Yt(h)) || r && (0, s.b)(h)) return !0
              }
              return !1
            }(r, e)) {
            o.$shared = !1, i = (0, s.a7)(i) ? i() : i;
            const e = this.createResolver(t, i, h);
            a = (0, s.a8)(r, i, e)
          }
          for (const t of e) o[t] = a[t];
          return o
        }
        createResolver(t, e, i = [""], n) {
          const {
            resolver: o
          } = Vt(this.Ji, t, i);
          return (0, s.i)(e) ? (0, s.a8)(o, e, void 0, n) : o
        }
      }

      function Vt(t, e, i) {
        let n = t.get(e);
        n || (n = new Map, t.set(e, n));
        const o = i.join();
        let r = n.get(o);
        return r || (r = {
          resolver: (0, s.a9)(e, i),
          subPrefixes: i.filter(t => !t.toLowerCase().includes("hover"))
        }, n.set(o, r)), r
      }
      const Yt = t => (0, s.i)(t) && Object.getOwnPropertyNames(t).some(e => (0, s.a7)(t[e])),
        $t = ["top", "bottom", "left", "right", "chartArea"];

      function Xt(t, e) {
        return "top" === t || "bottom" === t || -1 === $t.indexOf(t) && "x" === e
      }

      function Ut(t, e) {
        return function(i, s) {
          return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t]
        }
      }

      function Kt(t) {
        const e = t.chart,
          i = e.options.animation;
        e.notifyPlugins("afterRender"), (0, s.Q)(i && i.onComplete, [t], e)
      }

      function Zt(t) {
        const e = t.chart,
          i = e.options.animation;
        (0, s.Q)(i && i.onProgress, [t], e)
      }

      function Qt(t) {
        return (0, s.M)() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
      }
      const qt = {},
        Gt = t => {
          const e = Qt(t);
          return Object.values(qt).filter(t => t.canvas === e).pop()
        };

      function Jt(t, e, i) {
        const s = Object.keys(t);
        for (const n of s) {
          const s = +n;
          if (s >= e) {
            const o = t[n];
            delete t[n], (i > 0 || s > e) && (t[s + i] = o)
          }
        }
      }

      function te(t, e, i) {
        return t.options.clip ? t[i] : e[i]
      }
      class ee {
        static defaults = s.d;
        static instances = qt;
        static overrides = s.a3;
        static registry = Dt;
        static version = "4.4.2";
        static getChart = Gt;
        static register(...t) {
          Dt.add(...t), ie()
        }
        static unregister(...t) {
          Dt.remove(...t), ie()
        }
        constructor(t, e) {
          const i = this.config = new Ht(e),
            o = Qt(t),
            r = Gt(o);
          if (r) throw Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
          const h = i.createResolver(i.chartOptionScopes(), this.getContext());
          var a;
          this.platform = new(i.platform || (a = o, !(0, s.M)() || "u" > typeof OffscreenCanvas && a instanceof OffscreenCanvas ? tt : bt)), this.platform.updateConfig(i);
          const c = this.platform.acquireContext(o, h.aspectRatio),
            l = c && c.canvas,
            u = l && l.height,
            f = l && l.width;
          this.id = (0, s.ac)(), this.ctx = c, this.canvas = l, this.width = f, this.height = u, this.es = h, this.ss = this.aspectRatio, this.li = [], this.ns = [], this.Jt = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this.Nt = [], this.rs = void 0, this.hs = {}, this.cs = void 0, this.ls = [], this.scales = {}, this.us = new At, this.$proxies = {}, this.fs = {}, this.attached = !1, this.Me = void 0, this.$context = void 0, this.ds = (0, s.ad)(t => this.update(t), h.resizeDelay || 0), this.Ce = [], qt[this.id] = this, c && l ? (n.listen(this, "complete", Kt), n.listen(this, "progress", Zt), this.ps(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }
        get aspectRatio() {
          const {
            options: {
              aspectRatio: t,
              maintainAspectRatio: e
            },
            width: i,
            height: n,
            ss: o
          } = this;
          return (0, s.k)(t) ? e && o ? o : n ? i / n : null : t
        }
        get data() {
          return this.config.data
        }
        set data(t) {
          this.config.data = t
        }
        get options() {
          return this.es
        }
        set options(t) {
          this.config.options = t
        }
        get registry() {
          return Dt
        }
        ps() {
          return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : (0, s.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }
        clear() {
          return (0, s.af)(this.canvas, this.ctx), this
        }
        stop() {
          return n.stop(this), this
        }
        resize(t, e) {
          n.running(this) ? this.bs = {
            width: t,
            height: e
          } : this.gs(t, e)
        }
        gs(t, e) {
          const i = this.options,
            n = this.canvas,
            o = i.maintainAspectRatio && this.aspectRatio,
            r = this.platform.getMaximumSize(n, t, e, o),
            h = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? "resize" : "attach";
          this.width = r.width, this.height = r.height, this.ss = this.aspectRatio, (0, s.ae)(this, h, !0) && (this.notifyPlugins("resize", {
            size: r
          }), (0, s.Q)(i.onResize, [this, r], this), this.attached && this.ds(a) && this.render())
        }
        ensureScalesHaveIDs() {
          const t = this.options.scales || {};
          (0, s.F)(t, (t, e) => {
            t.id = e
          })
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            n = Object.keys(i).reduce((t, e) => (t[e] = !1, t), {});
          let o = [];
          e && (o = o.concat(Object.keys(e).map(t => {
            const i = e[t],
              s = Pt(t, i),
              n = "r" === s,
              o = "x" === s;
            return {
              options: i,
              dposition: n ? "chartArea" : o ? "bottom" : "left",
              dtype: n ? "radialLinear" : o ? "category" : "linear"
            }
          }))), (0, s.F)(o, e => {
            const o = e.options,
              r = o.id,
              h = Pt(r, o),
              a = (0, s.v)(o.type, e.dtype);
            (void 0 === o.position || Xt(o.position, h) !== Xt(e.dposition)) && (o.position = e.dposition), n[r] = !0;
            let c = null;
            r in i && i[r].type === a ? c = i[r] : (c = new(Dt.getScale(a))({
              id: r,
              type: a,
              ctx: this.ctx,
              chart: this
            }), i[c.id] = c), c.init(o, t)
          }), (0, s.F)(n, (t, e) => {
            t || delete i[e]
          }), (0, s.F)(i, t => {
            G.configure(this, t, t.options), G.addBox(this, t)
          })
        }
        xs() {
          const t = this.ns,
            e = this.data.datasets.length,
            i = t.length;
          if (t.sort((t, e) => t.index - e.index), i > e) {
            for (let t = e; i > t; ++t) this.vs(t);
            t.splice(e, i - e)
          }
          this.ls = t.slice(0).sort(Ut("order", "index"))
        }
        ys() {
          const {
            ns: t,
            data: {
              datasets: e
            }
          } = this;
          t.length > e.length && delete this.Jt, t.forEach((t, i) => {
            0 === e.filter(e => e === t.Ke).length && this.vs(i)
          })
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let i, n;
          for (this.ys(), i = 0, n = e.length; n > i; i++) {
            const n = e[i];
            let o = this.getDatasetMeta(i);
            const r = n.type || this.config.type;
            if (o.type && o.type !== r && (this.vs(i), o = this.getDatasetMeta(i)), o.type = r, o.indexAxis = n.indexAxis || Rt(r, this.options), o.order = n.order || 0, o.index = i, o.label = "" + n.label, o.visible = this.isDatasetVisible(i), o.controller) o.controller.updateIndex(i), o.controller.linkScales();
            else {
              const e = Dt.getController(r),
                {
                  datasetElementType: n,
                  dataElementType: h
                } = s.d.datasets[r];
              Object.assign(e, {
                dataElementType: Dt.getElement(h),
                datasetElementType: n && Dt.getElement(n)
              }), o.controller = new e(this, i), t.push(o.controller)
            }
          }
          return this.xs(), t
        }
        Ms() {
          (0, s.F)(this.data.datasets, (t, e) => {
            this.getDatasetMeta(e).controller.reset()
          }, this)
        }
        reset() {
          this.Ms(), this.notifyPlugins("reset")
        }
        update(t) {
          const e = this.config;
          e.update();
          const i = this.es = e.createResolver(e.chartOptionScopes(), this.getContext()),
            n = this.Me = !i.animation;
          if (this.ws(), this._s(), this.ks(), this.us.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
              mode: t,
              cancelable: !0
            })) return;
          const o = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let r = 0;
          for (let t = 0, e = this.data.datasets.length; e > t; t++) {
            const {
              controller: e
            } = this.getDatasetMeta(t), i = !n && -1 === o.indexOf(e);
            e.buildOrUpdateElements(i), r = Math.max(+e.getMaxOverflow(), r)
          }
          r = this.Os = i.layout.autoPadding ? r : 0, this.Ss(r), n || (0, s.F)(o, t => {
            t.reset()
          }), this.Ds(t), this.notifyPlugins("afterUpdate", {
            mode: t
          }), this.li.sort(Ut("z", "_idx"));
          const {
            Nt: h,
            rs: a
          } = this;
          a ? this.As(a, !0) : h.length && this.Cs(h, h, !0), this.render()
        }
        ws() {
          (0, s.F)(this.scales, t => {
            G.removeBox(this, t)
          }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }
        _s() {
          const t = this.options,
            e = new Set(Object.keys(this.hs)),
            i = new Set(t.events);
          (!(0, s.ag)(e, i) || !!this.cs !== t.responsive) && (this.unbindEvents(), this.bindEvents())
        }
        ks() {
          const {
            fs: t
          } = this, e = this.Ls() || [];
          for (const {
              method: i,
              start: s,
              count: n
            }
            of e) Jt(t, s, "_removeElements" === i ? -n : n)
        }
        Ls() {
          const t = this.Ce;
          if (!t || !t.length) return;
          this.Ce = [];
          const e = this.data.datasets.length,
            i = e => new Set(t.filter(t => t[0] === e).map((t, e) => e + "," + t.splice(1).join(","))),
            n = i(0);
          for (let t = 1; e > t; t++)
            if (!(0, s.ag)(n, i(t))) return;
          return Array.from(n).map(t => t.split(",")).map(t => ({
            method: t[1],
            start: +t[2],
            count: +t[3]
          }))
        }
        Ss(t) {
          if (!1 === this.notifyPlugins("beforeLayout", {
              cancelable: !0
            })) return;
          G.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = 0 >= e.width || 0 >= e.height;
          this.li = [], (0, s.F)(this.boxes, t => {
            i && "chartArea" === t.position || (t.configure && t.configure(), this.li.push(...t.li()))
          }, this), this.li.forEach((t, e) => {
            t.Rs = e
          }), this.notifyPlugins("afterLayout")
        }
        Ds(t) {
          if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
              mode: t,
              cancelable: !0
            })) {
            for (let t = 0, e = this.data.datasets.length; e > t; ++t) this.getDatasetMeta(t).controller.configure();
            for (let e = 0, i = this.data.datasets.length; i > e; ++e) this.Es(e, (0, s.a7)(t) ? t({
              datasetIndex: e
            }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
              mode: t
            })
          }
        }
        Es(t, e) {
          const i = this.getDatasetMeta(t),
            s = {
              meta: i,
              index: t,
              mode: e,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller.Tt(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s))
        }
        render() {
          !1 !== this.notifyPlugins("beforeRender", {
            cancelable: !0
          }) && (n.has(this) ? this.attached && !n.running(this) && n.start(this) : (this.draw(), Kt({
            chart: this
          })))
        }
        draw() {
          let t;
          if (this.bs) {
            const {
              width: t,
              height: e
            } = this.bs;
            this.gs(t, e), this.bs = null
          }
          if (this.clear(), 0 >= this.width || 0 >= this.height || !1 === this.notifyPlugins("beforeDraw", {
              cancelable: !0
            })) return;
          const e = this.li;
          for (t = 0; t < e.length && 0 >= e[t].z; ++t) e[t].draw(this.chartArea);
          for (this.js(); t < e.length; ++t) e[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw")
        }
        qt(t) {
          const e = this.ls,
            i = [];
          let s, n;
          for (s = 0, n = e.length; n > s; ++s) {
            const n = e[s];
            (!t || n.visible) && i.push(n)
          }
          return i
        }
        getSortedVisibleDatasetMetas() {
          return this.qt(!0)
        }
        js() {
          if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
              cancelable: !0
            })) return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this.Ps(t[e]);
          this.notifyPlugins("afterDatasetsDraw")
        }
        Ps(t) {
          const e = this.ctx,
            i = t.xe,
            n = !i.disabled,
            o = function(t, e) {
              const {
                xScale: i,
                yScale: s
              } = t;
              return i && s ? {
                left: te(i, e, "left"),
                right: te(i, e, "right"),
                top: te(s, e, "top"),
                bottom: te(s, e, "bottom")
              } : e
            }(t, this.chartArea),
            r = {
              meta: t,
              index: t.index,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetDraw", r) && (n && (0, s.Y)(e, {
            left: !1 === i.left ? 0 : o.left - i.left,
            right: !1 === i.right ? this.width : o.right + i.right,
            top: !1 === i.top ? 0 : o.top - i.top,
            bottom: !1 === i.bottom ? this.height : o.bottom + i.bottom
          }), t.controller.draw(), n && (0, s.$)(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r))
        }
        isPointInArea(t) {
          return (0, s.C)(t, this.chartArea, this.Os)
        }
        getElementsAtEventForMode(t, e, i, s) {
          const n = W.modes[e];
          return "function" == typeof n ? n(this, t, i, s) : []
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this.ns;
          let s = i.filter(t => t && t.Ke === e).pop();
          return s || (s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            Ke: e,
            nt: [],
            st: !1
          }, i.push(s)), s
        }
        getContext() {
          return this.$context || (this.$context = (0, s.j)(null, {
            chart: this,
            type: "chart"
          }))
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const i = this.getDatasetMeta(t);
          return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e
        }
        toggleDataVisibility(t) {
          this.fs[t] = !this.fs[t]
        }
        getDataVisibility(t) {
          return !this.fs[t]
        }
        Ts(t, e, i) {
          const n = i ? "show" : "hide",
            o = this.getDatasetMeta(t),
            r = o.controller.ye(void 0, n);
          (0, s.h)(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
            visible: i
          }), this.update(e => e.datasetIndex === t ? n : void 0))
        }
        hide(t, e) {
          this.Ts(t, e, !1)
        }
        show(t, e) {
          this.Ts(t, e, !0)
        }
        vs(t) {
          const e = this.ns[t];
          e && e.controller && e.controller.be(), delete this.ns[t]
        }
        Ns() {
          let t, e;
          for (this.stop(), n.remove(this), t = 0, e = this.data.datasets.length; e > t; ++t) this.vs(t)
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const {
            canvas: t,
            ctx: e
          } = this;
          this.Ns(), this.config.clearCache(), t && (this.unbindEvents(), (0, s.af)(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete qt[this.id], this.notifyPlugins("afterDestroy")
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t)
        }
        bindEvents() {
          this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }
        bindUserEvents() {
          const t = this.hs,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), t[i] = s
            },
            n = (t, e, i) => {
              t.offsetX = e, t.offsetY = i, this.As(t)
            };
          (0, s.F)(this.options.events, t => i(t, n))
        }
        bindResponsiveEvents() {
          this.cs || (this.cs = {});
          const t = this.cs,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), t[i] = s
            },
            s = (i, s) => {
              t[i] && (e.removeEventListener(this, i, s), delete t[i])
            },
            n = (t, e) => {
              this.canvas && this.resize(t, e)
            };
          let o;
          const r = () => {
            s("attach", r), this.attached = !0, this.resize(), i("resize", n), i("detach", o)
          };
          o = () => {
            this.attached = !1, s("resize", n), this.Ns(), this.gs(0, 0), i("attach", r)
          }, e.isAttached(this.canvas) ? r() : o()
        }
        unbindEvents() {
          (0, s.F)(this.hs, (t, e) => {
            this.platform.removeEventListener(this, e, t)
          }), this.hs = {}, (0, s.F)(this.cs, (t, e) => {
            this.platform.removeEventListener(this, e, t)
          }), this.cs = void 0
        }
        updateHoverStyle(t, e, i) {
          const s = i ? "set" : "remove";
          let n, o, r, h;
          for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), r = 0, h = t.length; h > r; ++r) {
            o = t[r];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
          }
        }
        getActiveElements() {
          return this.Nt || []
        }
        setActiveElements(t) {
          const e = this.Nt || [],
            i = t.map(({
              datasetIndex: t,
              index: e
            }) => {
              const i = this.getDatasetMeta(t);
              if (!i) throw Error("No dataset found at index " + t);
              return {
                datasetIndex: t,
                element: i.data[e],
                index: e
              }
            });
          !(0, s.ah)(i, e) && (this.Nt = i, this.rs = null, this.Cs(i, e))
        }
        notifyPlugins(t, e, i) {
          return this.us.notify(this, t, e, i)
        }
        isPluginEnabled(t) {
          return 1 === this.us.Te.filter(e => e.plugin.id === t).length
        }
        Cs(t, e, i) {
          const s = this.options.hover,
            n = (t, e) => t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
            o = n(e, t),
            r = i ? t : n(t, e);
          o.length && this.updateHoverStyle(o, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0)
        }
        As(t, e) {
          const i = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: this.isPointInArea(t)
            },
            s = e => (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
          const n = this.Fs(t, e, i.inChartArea);
          return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this
        }
        Fs(t, e, i) {
          const {
            Nt: n = [],
            options: o
          } = this, r = e, h = this.Is(t, n, i, r), a = (0, s.ai)(t), c = function(t, e, i, s) {
            return i && "mouseout" !== t.type ? s ? e : t : null
          }(t, this.rs, i, a);
          i && (this.rs = null, (0, s.Q)(o.onHover, [t, h, this], this), a && (0, s.Q)(o.onClick, [t, h, this], this));
          const l = !(0, s.ah)(h, n);
          return (l || e) && (this.Nt = h, this.Cs(h, n, e)), this.rs = c, l
        }
        Is(t, e, i, s) {
          if ("mouseout" === t.type) return [];
          if (!i) return e;
          const n = this.options.hover;
          return this.getElementsAtEventForMode(t, n.mode, n, s)
        }
      }

      function ie() {
        return (0, s.F)(ee.instances, t => t.us.invalidate())
      }

      function se(t, e, i, s) {
        return {
          x: i + t * Math.cos(e),
          y: s + t * Math.sin(e)
        }
      }

      function ne(t, e, i, n, o, r) {
        const {
          x: h,
          y: a,
          startAngle: c,
          pixelMargin: l,
          innerRadius: u
        } = e, f = Math.max(e.outerRadius + n + i - l, 0), d = u > 0 ? u + n + i + l : 0;
        let p = 0;
        const b = o - c;
        if (n) {
          const t = ((u > 0 ? u - n : 0) + (f > 0 ? f - n : 0)) / 2;
          p = (b - (0 !== t ? b * t / (t + n) : b)) / 2
        }
        const g = (b - Math.max(.001, b * f - i / s.P) / f) / 2,
          m = c + g + p,
          x = o - g - p,
          {
            outerStart: v,
            outerEnd: y,
            innerStart: M,
            innerEnd: w
          } = function(t, e, i, n) {
            const o = function(t) {
                return (0, s.ak)(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
              }(t.options.borderRadius),
              r = (i - e) / 2,
              h = Math.min(r, n * e / 2),
              a = t => {
                const e = (i - Math.min(r, t)) * n / 2;
                return (0, s.S)(t, 0, Math.min(r, e))
              };
            return {
              outerStart: a(o.outerStart),
              outerEnd: a(o.outerEnd),
              innerStart: (0, s.S)(o.innerStart, 0, h),
              innerEnd: (0, s.S)(o.innerEnd, 0, h)
            }
          }(e, d, f, x - m),
          _ = f - v,
          k = f - y,
          O = m + v / _,
          S = x - y / k,
          D = d + M,
          A = d + w,
          C = m + M / D,
          L = x - w / A;
        if (t.beginPath(), r) {
          const e = (O + S) / 2;
          if (t.arc(h, a, f, O, e), t.arc(h, a, f, e, S), y > 0) {
            const e = se(k, S, h, a);
            t.arc(e.x, e.y, y, S, x + s.H)
          }
          const i = se(A, x, h, a);
          if (t.lineTo(i.x, i.y), w > 0) {
            const e = se(A, L, h, a);
            t.arc(e.x, e.y, w, x + s.H, L + Math.PI)
          }
          const n = (x - w / d + (m + M / d)) / 2;
          if (t.arc(h, a, d, x - w / d, n, !0), t.arc(h, a, d, n, m + M / d, !0), M > 0) {
            const e = se(D, C, h, a);
            t.arc(e.x, e.y, M, C + Math.PI, m - s.H)
          }
          const o = se(_, m, h, a);
          if (t.lineTo(o.x, o.y), v > 0) {
            const e = se(_, O, h, a);
            t.arc(e.x, e.y, v, m - s.H, O)
          }
        } else {
          t.moveTo(h, a);
          const e = Math.cos(O) * f + h,
            i = Math.sin(O) * f + a;
          t.lineTo(e, i);
          const s = Math.cos(S) * f + h,
            n = Math.sin(S) * f + a;
          t.lineTo(s, n)
        }
        t.closePath()
      }

      function oe(t, e, i = e) {
        t.lineCap = (0, s.v)(i.borderCapStyle, e.borderCapStyle), t.setLineDash((0, s.v)(i.borderDash, e.borderDash)), t.lineDashOffset = (0, s.v)(i.borderDashOffset, e.borderDashOffset), t.lineJoin = (0, s.v)(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = (0, s.v)(i.borderWidth, e.borderWidth), t.strokeStyle = (0, s.v)(i.borderColor, e.borderColor)
      }

      function re(t, e, i) {
        t.lineTo(i.x, i.y)
      }

      function he(t, e, i = {}) {
        const s = t.length,
          {
            start: n = 0,
            end: o = s - 1
          } = i,
          {
            start: r,
            end: h
          } = e,
          a = Math.max(n, r),
          c = Math.min(o, h),
          l = r > n && r > o || n > h && o > h;
        return {
          count: s,
          start: a,
          loop: e.loop,
          ilen: a > c && !l ? s + c - a : c - a
        }
      }

      function ae(t, e, i, n) {
        const {
          points: o,
          options: r
        } = e, {
          count: h,
          start: a,
          loop: c,
          ilen: l
        } = he(o, i, n), u = function(t) {
          return t.stepped ? s.ar : t.tension || "monotone" === t.cubicInterpolationMode ? s.as : re
        }(r);
        let f, d, p, {
          move: b = !0,
          reverse: g
        } = n || {};
        for (f = 0; l >= f; ++f) d = o[(a + (g ? l - f : f)) % h], !d.skip && (b ? (t.moveTo(d.x, d.y), b = !1) : u(t, p, d, g, r.stepped), p = d);
        return c && (d = o[(a + (g ? l : 0)) % h], u(t, p, d, g, r.stepped)), !!c
      }

      function ce(t, e, i, s) {
        const n = e.points,
          {
            count: o,
            start: r,
            ilen: h
          } = he(n, i, s),
          {
            move: a = !0,
            reverse: c
          } = s || {};
        let l, u, f, d, p, b, g = 0,
          m = 0;
        const x = t => (r + (c ? h - t : t)) % o,
          v = () => {
            d !== p && (t.lineTo(g, p), t.lineTo(g, d), t.lineTo(g, b))
          };
        for (a && (u = n[x(0)], t.moveTo(u.x, u.y)), l = 0; h >= l; ++l) {
          if (u = n[x(l)], u.skip) continue;
          const e = u.x,
            i = u.y,
            s = 0 | e;
          s === f ? (d > i ? d = i : i > p && (p = i), g = (m * g + e) / ++m) : (v(), t.lineTo(e, i), f = s, m = 0, d = p = i), b = i
        }
        v()
      }

      function le(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length;
        return t.Ze || t.Ot || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? ae : ce
      }
      const ue = "function" == typeof Path2D;
      class fe extends gt {
        static id = "line";
        static defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor"
        };
        static descriptors = {
          rt: !0,
          ht: t => "borderDash" !== t && "fill" !== t
        };
        constructor(t) {
          super(), this.animated = !0, this.options = void 0, this.St = void 0, this.Ot = void 0, this.At = void 0, this.zs = void 0, this.Ws = void 0, this.Bs = void 0, this.Ze = !1, this.Hs = !1, this.Dt = void 0, t && Object.assign(this, t)
        }
        updateControlPoints(t, e) {
          const i = this.options;
          if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this.Hs) {
            const n = i.spanGaps ? this.Ot : this.At;
            (0, s.al)(this.Ws, i, t, n, e), this.Hs = !0
          }
        }
        set points(t) {
          this.Ws = t, delete this.Bs, delete this.zs, this.Hs = !1
        }
        get points() {
          return this.Ws
        }
        get segments() {
          return this.Bs || (this.Bs = (0, s.am)(this, this.options.segment))
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start]
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end]
        }
        interpolate(t, e) {
          const i = this.options,
            n = t[e],
            o = this.points,
            r = (0, s.an)(this, {
              property: e,
              start: n,
              end: n
            });
          if (!r.length) return;
          const h = [],
            a = (c = i).stepped ? s.ao : c.tension || "monotone" === c.cubicInterpolationMode ? s.ap : s.aq;
          var c;
          let l, u;
          for (l = 0, u = r.length; u > l; ++l) {
            const {
              start: s,
              end: c
            } = r[l], u = o[s], f = o[c];
            if (u === f) {
              h.push(u);
              continue
            }
            const d = a(u, f, Math.abs((n - u[e]) / (f[e] - u[e])), i.stepped);
            d[e] = t[e], h.push(d)
          }
          return 1 === h.length ? h[0] : h
        }
        pathSegment(t, e, i) {
          return le(this)(t, this, e, i)
        }
        path(t, e, i) {
          const s = this.segments,
            n = le(this);
          let o = this.Ot;
          e = e || 0, i = i || this.points.length - e;
          for (const r of s) o &= n(t, this, r, {
            start: e,
            end: e + i - 1
          });
          return !!o
        }
        draw(t, e, i, s) {
          const n = this.options || {};
          (this.points || []).length && n.borderWidth && (t.save(), function(t, e, i, s) {
            ue && !e.options.segment ? function(t, e, i, s) {
              let n = e.zs;
              n || (n = e.zs = new Path2D, e.path(n, i, s) && n.closePath()), oe(t, e.options), t.stroke(n)
            }(t, e, i, s) : function(t, e, i, s) {
              const {
                segments: n,
                options: o
              } = e, r = le(e);
              for (const h of n) oe(t, o, h.style), t.beginPath(), r(t, e, h, {
                start: i,
                end: i + s - 1
              }) && t.closePath(), t.stroke()
            }(t, e, i, s)
          }(t, this, i, s), t.restore()), this.animated && (this.Hs = !1, this.zs = void 0)
        }
      }

      function de(t, e, i, s) {
        const n = t.options,
          {
            [i]: o
          } = t.getProps([i], s);
        return Math.abs(e - o) < n.radius + n.hitRadius
      }
      class pe extends gt {
        static id = "point";
        parsed;
        skip;
        stop;
        static defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor"
        };
        constructor(t) {
          super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
        }
        inRange(t, e, i) {
          const s = this.options,
            {
              x: n,
              y: o
            } = this.getProps(["x", "y"], i);
          return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
        }
        inXRange(t, e) {
          return de(this, t, "x", e)
        }
        inYRange(t, e) {
          return de(this, t, "y", e)
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: i
          } = this.getProps(["x", "y"], t);
          return {
            x: e,
            y: i
          }
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0))
        }
        draw(t, e) {
          const i = this.options;
          this.skip || .1 > i.radius || !(0, s.C)(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, (0, s.at)(t, i, this.x, this.y))
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius
        }
      }

      function be(t, e) {
        const {
          x: i,
          y: s,
          base: n,
          width: o,
          height: r
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let h, a, c, l, u;
        return t.horizontal ? (u = r / 2, h = Math.min(i, n), a = Math.max(i, n), c = s - u, l = s + u) : (u = o / 2, h = i - u, a = i + u, c = Math.min(s, n), l = Math.max(s, n)), {
          left: h,
          top: c,
          right: a,
          bottom: l
        }
      }

      function ge(t, e, i, n) {
        return t ? 0 : (0, s.S)(e, i, n)
      }

      function me(t, e, i, n) {
        const o = null === e,
          r = null === i,
          h = t && !(o && r) && be(t, n);
        return h && (o || (0, s.aj)(e, h.left, h.right)) && (r || (0, s.aj)(i, h.top, h.bottom))
      }

      function xe(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
      }

      function ve(t, e, i = {}) {
        const s = t.x !== i.x ? -e : 0,
          n = t.y !== i.y ? -e : 0,
          o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
          r = (t.y + t.h !== i.y + i.h ? e : 0) - n;
        return {
          x: t.x + s,
          y: t.y + n,
          w: t.w + o,
          h: t.h + r,
          radius: t.radius
        }
      }
      Object.freeze({
        __proto__: null,
        ArcElement: class extends gt {
          static id = "arc";
          static defaults = {
            borderAlign: "center",
            borderColor: "#fff",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor"
          };
          static descriptors = {
            rt: !0,
            ht: t => "borderDash" !== t
          };
          circumference;
          endAngle;
          fullCircles;
          innerRadius;
          outerRadius;
          pixelMargin;
          startAngle;
          constructor(t) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
          }
          inRange(t, e, i) {
            const n = this.getProps(["x", "y"], i),
              {
                angle: o,
                distance: r
              } = (0, s.D)(n, {
                x: t,
                y: e
              }),
              {
                startAngle: h,
                endAngle: a,
                innerRadius: c,
                outerRadius: l,
                circumference: u
              } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
              f = (this.options.spacing + this.options.borderWidth) / 2,
              d = (0, s.v)(u, a - h) >= s.T || (0, s.p)(o, h, a),
              p = (0, s.aj)(r, c + f, l + f);
            return d && p
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: i,
              startAngle: s,
              endAngle: n,
              innerRadius: o,
              outerRadius: r
            } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
              offset: h,
              spacing: a
            } = this.options, c = (s + n) / 2, l = (o + r + a + h) / 2;
            return {
              x: e + Math.cos(c) * l,
              y: i + Math.sin(c) * l
            }
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t)
          }
          draw(t) {
            const {
              options: e,
              circumference: i
            } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
            if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > s.T ? Math.floor(i / s.T) : 0, 0 === i || 0 > this.innerRadius || 0 > this.outerRadius) return;
            t.save();
            const h = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(h) * n, Math.sin(h) * n);
            const a = n * (1 - Math.sin(Math.min(s.P, i || 0)));
            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor,
              function(t, e, i, n, o) {
                const {
                  fullCircles: r,
                  startAngle: h,
                  circumference: a
                } = e;
                let c = e.endAngle;
                if (r) {
                  ne(t, e, i, n, c, o);
                  for (let e = 0; r > e; ++e) t.fill();
                  isNaN(a) || (c = h + (a % s.T || s.T))
                }
                ne(t, e, i, n, c, o), t.fill()
              }(t, this, a, o, r),
              function(t, e, i, n, o) {
                const {
                  fullCircles: r,
                  startAngle: h,
                  circumference: a,
                  options: c
                } = e, {
                  borderWidth: l,
                  borderJoinStyle: u,
                  borderDash: f,
                  borderDashOffset: d
                } = c, p = "inner" === c.borderAlign;
                if (!l) return;
                t.setLineDash(f || []), t.lineDashOffset = d, p ? (t.lineWidth = 2 * l, t.lineJoin = u || "round") : (t.lineWidth = l, t.lineJoin = u || "bevel");
                let b = e.endAngle;
                if (r) {
                  ne(t, e, i, n, b, o);
                  for (let e = 0; r > e; ++e) t.stroke();
                  isNaN(a) || (b = h + (a % s.T || s.T))
                }
                p && function(t, e, i) {
                  const {
                    startAngle: n,
                    pixelMargin: o,
                    x: r,
                    y: h,
                    outerRadius: a,
                    innerRadius: c
                  } = e;
                  let l = o / a;
                  t.beginPath(), t.arc(r, h, a, n - l, i + l), c > o ? (l = o / c, t.arc(r, h, c, i + l, n - l, !0)) : t.arc(r, h, o, i + s.H, n - s.H), t.closePath(), t.clip()
                }(t, e, b), r || (ne(t, e, i, n, b, o), t.stroke())
              }(t, this, a, o, r), t.restore()
          }
        },
        BarElement: class extends gt {
          static id = "bar";
          static defaults = {
            borderSkipped: "start",
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: "auto",
            pointStyle: void 0
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
          };
          constructor(t) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
          }
          draw(t) {
            const {
              inflateAmount: e,
              options: {
                borderColor: i,
                backgroundColor: n
              }
            } = this, {
              inner: o,
              outer: r
            } = function(t) {
              const e = be(t),
                i = e.right - e.left,
                n = e.bottom - e.top,
                o = function(t, e, i) {
                  const n = t.options.borderWidth,
                    o = t.borderSkipped,
                    r = (0, s.av)(n);
                  return {
                    t: ge(o.top, r.top, 0, i),
                    r: ge(o.right, r.right, 0, e),
                    b: ge(o.bottom, r.bottom, 0, i),
                    l: ge(o.left, r.left, 0, e)
                  }
                }(t, i / 2, n / 2),
                r = function(t, e, i) {
                  const {
                    enableBorderRadius: n
                  } = t.getProps(["enableBorderRadius"]), o = t.options.borderRadius, r = (0, s.aw)(o), h = Math.min(e, i), a = t.borderSkipped, c = n || (0, s.i)(o);
                  return {
                    topLeft: ge(!c || a.top || a.left, r.topLeft, 0, h),
                    topRight: ge(!c || a.top || a.right, r.topRight, 0, h),
                    bottomLeft: ge(!c || a.bottom || a.left, r.bottomLeft, 0, h),
                    bottomRight: ge(!c || a.bottom || a.right, r.bottomRight, 0, h)
                  }
                }(t, i / 2, n / 2);
              return {
                outer: {
                  x: e.left,
                  y: e.top,
                  w: i,
                  h: n,
                  radius: r
                },
                inner: {
                  x: e.left + o.l,
                  y: e.top + o.t,
                  w: i - o.l - o.r,
                  h: n - o.t - o.b,
                  radius: {
                    topLeft: Math.max(0, r.topLeft - Math.max(o.t, o.l)),
                    topRight: Math.max(0, r.topRight - Math.max(o.t, o.r)),
                    bottomLeft: Math.max(0, r.bottomLeft - Math.max(o.b, o.l)),
                    bottomRight: Math.max(0, r.bottomRight - Math.max(o.b, o.r))
                  }
                }
              }
            }(this), h = (a = r.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? s.au : xe;
            var a;
            t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), h(t, ve(r, e, o)), t.clip(), h(t, ve(o, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), h(t, ve(o, e)), t.fillStyle = n, t.fill(), t.restore()
          }
          inRange(t, e, i) {
            return me(this, t, e, i)
          }
          inXRange(t, e) {
            return me(this, t, null, e)
          }
          inYRange(t, e) {
            return me(this, null, t, e)
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: i,
              base: s,
              horizontal: n
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return {
              x: n ? (e + s) / 2 : e,
              y: n ? i : (i + s) / 2
            }
          }
          getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2
          }
        },
        LineElement: fe,
        PointElement: pe
      });
      const ye = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        Me = ye.map(t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));

      function we(t) {
        return ye[t % ye.length]
      }

      function _e(t) {
        return Me[t % Me.length]
      }

      function ke(t) {
        let e;
        for (e in t)
          if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1
      }
      var Oe = {
        id: "colors",
        defaults: {
          enabled: !0,
          forceOverride: !1
        },
        beforeLayout(t, e, i) {
          if (!i.enabled) return;
          const {
            data: {
              datasets: s
            },
            options: n
          } = t.config, {
            elements: o
          } = n;
          if (!i.forceOverride && (ke(s) || function(t) {
              return t && (t.borderColor || t.backgroundColor)
            }(n) || o && ke(o))) return;
          const r = function(t) {
            let e = 0;
            return (i, s) => {
              const n = t.getDatasetMeta(s).controller;
              n instanceof C ? e = function(t, e) {
                return t.backgroundColor = t.data.map(() => we(e++)), e
              }(i, e) : n instanceof R ? e = function(t, e) {
                return t.backgroundColor = t.data.map(() => _e(e++)), e
              }(i, e) : n && (e = function(t, e) {
                return t.borderColor = we(e), t.backgroundColor = _e(e), ++e
              }(i, e))
            }
          }(t);
          s.forEach(r)
        }
      };

      function Se(t) {
        if (t.Ze) {
          const e = t.re;
          delete t.Ze, delete t.re, Object.defineProperty(t, "data", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: e
          })
        }
      }

      function De(t) {
        t.data.datasets.forEach(t => {
          Se(t)
        })
      }
      var Ae = {
        id: "decimation",
        defaults: {
          algorithm: "min-max",
          enabled: !1
        },
        beforeElementsUpdate: (t, e, i) => {
          if (!i.enabled) return void De(t);
          const n = t.width;
          t.data.datasets.forEach((e, o) => {
            const {
              re: r,
              indexAxis: h
            } = e, a = t.getDatasetMeta(o), c = r || e.data;
            if ("y" === (0, s.a)([h, t.options.indexAxis]) || !a.controller.supportsDecimation) return;
            const l = t.scales[a.xAxisID];
            if ("linear" !== l.type && "time" !== l.type || t.options.parsing) return;
            let u, {
              start: f,
              count: d
            } = function(t, e) {
              const i = e.length;
              let n, o = 0;
              const {
                iScale: r
              } = t, {
                min: h,
                max: a,
                minDefined: c,
                maxDefined: l
              } = r.getUserBounds();
              return c && (o = (0, s.S)((0, s.B)(e, r.axis, h).lo, 0, i - 1)), n = l ? (0, s.S)((0, s.B)(e, r.axis, a).hi + 1, o, i) - o : i - o, {
                start: o,
                count: n
              }
            }(a, c);
            if ((i.threshold || 4 * n) < d) {
              switch ((0, s.k)(r) && (e.re = c, delete e.data, Object.defineProperty(e, "data", {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return this.Ze
                  },
                  set: function(t) {
                    this.re = t
                  }
                })), i.algorithm) {
                case "lttb":
                  u = function(t, e, i, s, n) {
                    const o = n.samples || s;
                    if (o >= i) return t.slice(e, e + i);
                    const r = [],
                      h = (i - 2) / (o - 2);
                    let a = 0;
                    const c = e + i - 1;
                    let l, u, f, d, p, b = e;
                    for (r[a++] = t[b], l = 0; o - 2 > l; l++) {
                      let s, n = 0,
                        o = 0;
                      const c = Math.floor((l + 1) * h) + 1 + e,
                        g = Math.min(Math.floor((l + 2) * h) + 1, i) + e,
                        m = g - c;
                      for (s = c; g > s; s++) n += t[s].x, o += t[s].y;
                      n /= m, o /= m;
                      const x = Math.floor(l * h) + 1 + e,
                        v = Math.min(Math.floor((l + 1) * h) + 1, i) + e,
                        {
                          x: y,
                          y: M
                        } = t[b];
                      for (f = d = -1, s = x; v > s; s++) d = .5 * Math.abs((y - n) * (t[s].y - M) - (y - t[s].x) * (o - M)), d > f && (f = d, u = t[s], p = s);
                      r[a++] = u, b = p
                    }
                    return r[a++] = t[c], r
                  }(c, f, d, n, i);
                  break;
                case "min-max":
                  u = function(t, e, i, n) {
                    let o, r, h, a, c, l, u, f, d, p, b = 0,
                      g = 0;
                    const m = [],
                      x = e + i - 1,
                      v = t[e].x,
                      y = t[x].x - v;
                    for (o = e; e + i > o; ++o) {
                      r = t[o], h = (r.x - v) / y * n, a = r.y;
                      const e = 0 | h;
                      if (e === c) d > a ? (d = a, l = o) : a > p && (p = a, u = o), b = (g * b + r.x) / ++g;
                      else {
                        const i = o - 1;
                        if (!(0, s.k)(l) && !(0, s.k)(u)) {
                          const e = Math.min(l, u),
                            s = Math.max(l, u);
                          e !== f && e !== i && m.push({
                            ...t[e],
                            x: b
                          }), s !== f && s !== i && m.push({
                            ...t[s],
                            x: b
                          })
                        }
                        o > 0 && i !== f && m.push(t[i]), m.push(r), c = e, g = 0, d = p = a, l = u = f = o
                      }
                    }
                    return m
                  }(c, f, d, n);
                  break;
                default:
                  throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)
              }
              e.Ze = u
            } else Se(e)
          })
        },
        destroy(t) {
          De(t)
        }
      };

      function Ce(t, e, i, n) {
        if (n) return;
        let o = e[t],
          r = i[t];
        return "angle" === t && (o = (0, s.ay)(o), r = (0, s.ay)(r)), {
          property: t,
          start: o,
          end: r
        }
      }

      function Le(t, e, i) {
        for (; e > t; e--) {
          const t = i[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break
        }
        return e
      }

      function Re(t, e, i, s) {
        return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
      }

      function Ee(t, e) {
        let i = [],
          n = !1;
        return (0, s.b)(t) ? (n = !0, i = t) : i = function(t, e) {
          const {
            x: i = null,
            y: s = null
          } = t || {}, n = e.points, o = [];
          return e.segments.forEach(({
            start: t,
            end: e
          }) => {
            e = Le(t, e, n);
            const r = n[t],
              h = n[e];
            null !== s ? (o.push({
              x: r.x,
              y: s
            }), o.push({
              x: h.x,
              y: s
            })) : null !== i && (o.push({
              x: i,
              y: r.y
            }), o.push({
              x: i,
              y: h.y
            }))
          }), o
        }(t, e), i.length ? new fe({
          points: i,
          options: {
            tension: 0
          },
          Ot: n,
          At: n
        }) : null
      }

      function je(t) {
        return t && !1 !== t.fill
      }

      function Pe(t, e, i) {
        let n = t[e].fill;
        const o = [e];
        let r;
        if (!i) return n;
        for (; !1 !== n && -1 === o.indexOf(n);) {
          if (!(0, s.g)(n)) return n;
          if (r = t[n], !r) return !1;
          if (r.visible) return n;
          o.push(n), n = r.fill
        }
        return !1
      }

      function Te(t, e, i) {
        const n = function(t) {
          const e = t.options,
            i = e.fill;
          let n = (0, s.v)(i && i.target, i);
          return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n)
        }(t);
        if ((0, s.i)(n)) return !isNaN(n.value) && n;
        let o = parseFloat(n);
        return (0, s.g)(o) && Math.floor(o) === o ? function(t, e, i, s) {
          return ("-" === t || "+" === t) && (i = e + i), i !== e && i >= 0 && s > i && i
        }(n[0], e, o, i) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
      }

      function Ne(t, e, i) {
        const s = [];
        for (let n = 0; n < i.length; n++) {
          const o = i[n],
            {
              first: r,
              last: h,
              point: a
            } = Fe(o, e, "x");
          if (!(!a || r && h))
            if (r) s.unshift(a);
            else if (t.push(a), !h) break
        }
        t.push(...s)
      }

      function Fe(t, e, i) {
        const n = t.interpolate(e, i);
        if (!n) return {};
        const o = n[i],
          r = t.segments,
          h = t.points;
        let a = !1,
          c = !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t],
            n = h[e.start][i],
            l = h[e.end][i];
          if ((0, s.aj)(o, n, l)) {
            a = o === n, c = o === l;
            break
          }
        }
        return {
          first: a,
          last: c,
          point: n
        }
      }
      class Ie {
        constructor(t) {
          this.x = t.x, this.y = t.y, this.radius = t.radius
        }
        pathSegment(t, e, i) {
          const {
            x: n,
            y: o,
            radius: r
          } = this;
          return e = e || {
            start: 0,
            end: s.T
          }, t.arc(n, o, r, e.end, e.start, !0), !i.bounds
        }
        interpolate(t) {
          const {
            x: e,
            y: i,
            radius: s
          } = this, n = t.angle;
          return {
            x: e + Math.cos(n) * s,
            y: i + Math.sin(n) * s,
            angle: n
          }
        }
      }

      function ze(t, e, i) {
        const n = function(t) {
            const {
              chart: e,
              fill: i,
              line: n
            } = t;
            if ((0, s.g)(i)) return function(t, e) {
              const i = t.getDatasetMeta(e);
              return i && t.isDatasetVisible(e) ? i.dataset : null
            }(e, i);
            if ("stack" === i) return function(t) {
              const {
                scale: e,
                index: i,
                line: s
              } = t, n = [], o = s.segments, r = s.points, h = function(t, e) {
                const i = [],
                  s = t.getMatchingVisibleMetas("line");
                for (let t = 0; t < s.length; t++) {
                  const n = s[t];
                  if (n.index === e) break;
                  n.hidden || i.unshift(n.dataset)
                }
                return i
              }(e, i);
              h.push(Ee({
                x: null,
                y: e.bottom
              }, s));
              for (let t = 0; t < o.length; t++) {
                const e = o[t];
                for (let t = e.start; t <= e.end; t++) Ne(n, r[t], h)
              }
              return new fe({
                points: n,
                options: {}
              })
            }(t);
            if ("shape" === i) return !0;
            const o = function(t) {
              return (t.scale || {}).getPointPositionForValue ? function(t) {
                const {
                  scale: e,
                  fill: i
                } = t, n = e.options, o = e.getLabels().length, r = n.reverse ? e.max : e.min, h = function(t, e, i) {
                  let n;
                  return n = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : (0, s.i)(t) ? t.value : e.getBaseValue(), n
                }(i, e, r), a = [];
                if (n.grid.circular) {
                  const t = e.getPointPositionForValue(0, r);
                  return new Ie({
                    x: t.x,
                    y: t.y,
                    radius: e.getDistanceFromCenterForValue(h)
                  })
                }
                for (let t = 0; o > t; ++t) a.push(e.getPointPositionForValue(t, h));
                return a
              }(t) : function(t) {
                const {
                  scale: e = {},
                  fill: i
                } = t, n = function(t, e) {
                  let i = null;
                  return "start" === t ? i = e.bottom : "end" === t ? i = e.top : (0, s.i)(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i
                }(i, e);
                if ((0, s.g)(n)) {
                  const t = e.isHorizontal();
                  return {
                    x: t ? n : null,
                    y: t ? null : n
                  }
                }
                return null
              }(t)
            }(t);
            return o instanceof Ie ? o : Ee(o, n)
          }(e),
          {
            line: o,
            scale: r,
            axis: h
          } = e,
          a = o.options,
          c = a.fill,
          l = a.backgroundColor,
          {
            above: u = l,
            below: f = l
          } = c || {};
        n && o.points.length && ((0, s.Y)(t, i), function(t, e) {
          const {
            line: i,
            target: s,
            above: n,
            below: o,
            area: r,
            scale: h
          } = e, a = i.Ot ? "angle" : e.axis;
          t.save(), "x" === a && o !== n && (We(t, s, r.top), Be(t, {
            line: i,
            target: s,
            color: n,
            scale: h,
            property: a
          }), t.restore(), t.save(), We(t, s, r.bottom)), Be(t, {
            line: i,
            target: s,
            color: o,
            scale: h,
            property: a
          }), t.restore()
        }(t, {
          line: o,
          target: n,
          above: u,
          below: f,
          area: i,
          scale: r,
          axis: h
        }), (0, s.$)(t))
      }

      function We(t, e, i) {
        const {
          segments: s,
          points: n
        } = e;
        let o = !0,
          r = !1;
        t.beginPath();
        for (const h of s) {
          const {
            start: s,
            end: a
          } = h, c = n[s], l = n[Le(s, a, n)];
          o ? (t.moveTo(c.x, c.y), o = !1) : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)), r = !!e.pathSegment(t, h, {
            move: r
          }), r ? t.closePath() : t.lineTo(l.x, i)
        }
        t.lineTo(e.first().x, i), t.closePath(), t.clip()
      }

      function Be(t, e) {
        const {
          line: i,
          target: n,
          property: o,
          color: r,
          scale: h
        } = e, a = function(t, e, i) {
          const n = t.segments,
            o = t.points,
            r = e.points,
            h = [];
          for (const t of n) {
            let {
              start: n,
              end: a
            } = t;
            a = Le(n, a, o);
            const c = Ce(i, o[n], o[a], t.loop);
            if (!e.segments) {
              h.push({
                source: t,
                target: c,
                start: o[n],
                end: o[a]
              });
              continue
            }
            const l = (0, s.an)(e, c);
            for (const e of l) {
              const n = Ce(i, r[e.start], r[e.end], e.loop),
                a = (0, s.ax)(t, o, n);
              for (const t of a) h.push({
                source: t,
                target: e,
                start: {
                  [i]: Re(c, n, "start", Math.max)
                },
                end: {
                  [i]: Re(c, n, "end", Math.min)
                }
              })
            }
          }
          return h
        }(i, n, o);
        for (const {
            source: e,
            target: s,
            start: c,
            end: l
          }
          of a) {
          const {
            style: {
              backgroundColor: a = r
            } = {}
          } = e, u = !0 !== n;
          t.save(), t.fillStyle = a, He(t, h, u && Ce(o, c, l)), t.beginPath();
          const f = !!i.pathSegment(t, e);
          let d;
          if (u) {
            f ? t.closePath() : Ve(t, n, l, o);
            const e = !!n.pathSegment(t, s, {
              move: f,
              reverse: !0
            });
            d = f && e, d || Ve(t, n, c, o)
          }
          t.closePath(), t.fill(d ? "evenodd" : "nonzero"), t.restore()
        }
      }

      function He(t, e, i) {
        const {
          top: s,
          bottom: n
        } = e.chart.chartArea, {
          property: o,
          start: r,
          end: h
        } = i || {};
        "x" === o && (t.beginPath(), t.rect(r, s, h - r, n - s), t.clip())
      }

      function Ve(t, e, i, s) {
        const n = e.interpolate(i, s);
        n && t.lineTo(n.x, n.y)
      }
      var Ye = {
        id: "filler",
        afterDatasetsUpdate(t, e, i) {
          const s = (t.data.datasets || []).length,
            n = [];
          let o, r, h, a;
          for (r = 0; s > r; ++r) o = t.getDatasetMeta(r), h = o.dataset, a = null, h && h.options && h instanceof fe && (a = {
            visible: t.isDatasetVisible(r),
            index: r,
            fill: Te(h, r, s),
            chart: t,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: h
          }), o.$filler = a, n.push(a);
          for (r = 0; s > r; ++r) a = n[r], a && !1 !== a.fill && (a.fill = Pe(n, r, i.propagate))
        },
        beforeDraw(t, e, i) {
          const s = "beforeDraw" === i.drawTime,
            n = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let e = n.length - 1; e >= 0; --e) {
            const i = n[e].$filler;
            i && (i.line.updateControlPoints(o, i.axis), s && i.fill && ze(t.ctx, i, o))
          }
        },
        beforeDatasetsDraw(t, e, i) {
          if ("beforeDatasetsDraw" !== i.drawTime) return;
          const s = t.getSortedVisibleDatasetMetas();
          for (let e = s.length - 1; e >= 0; --e) {
            const i = s[e].$filler;
            je(i) && ze(t.ctx, i, t.chartArea)
          }
        },
        beforeDatasetDraw(t, e, i) {
          const s = e.meta.$filler;
          !je(s) || "beforeDatasetDraw" !== i.drawTime || ze(t.ctx, s, t.chartArea)
        },
        defaults: {
          propagate: !0,
          drawTime: "beforeDatasetDraw"
        }
      };
      const $e = (t, e) => {
        let {
          boxHeight: i = e,
          boxWidth: s = e
        } = t;
        return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
          boxWidth: s,
          boxHeight: i,
          itemHeight: Math.max(e, i)
        }
      };
      class Xe extends gt {
        constructor(t) {
          super(), this.Vs = !1, this.legendHitBoxes = [], this.Ys = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this.ui = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e, i) {
          this.maxWidth = t, this.maxHeight = e, this.ui = i, this.setDimensions(), this.buildLabels(), this.fit()
        }
        setDimensions() {
          this.isHorizontal() ? (this.width = this.maxWidth, this.left = this.ui.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this.ui.top, this.bottom = this.height)
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = (0, s.Q)(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter(e => t.filter(e, this.chart.data))), t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e
        }
        fit() {
          const {
            options: t,
            ctx: e
          } = this;
          if (!t.display) return void(this.width = this.height = 0);
          const i = t.labels,
            n = (0, s.a0)(i.font),
            o = n.size,
            r = this.$s(),
            {
              boxWidth: h,
              itemHeight: a
            } = $e(i, o);
          let c, l;
          e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, l = this.Xs(r, o, h, a) + 10) : (l = this.maxHeight, c = this.Us(r, n, h, a) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(l, t.maxHeight || this.maxHeight)
        }
        Xs(t, e, i, s) {
          const {
            ctx: n,
            maxWidth: o,
            options: {
              labels: {
                padding: r
              }
            }
          } = this, h = this.legendHitBoxes = [], a = this.lineWidths = [0], c = s + r;
          let l = t;
          n.textAlign = "left", n.textBaseline = "middle";
          let u = -1,
            f = -c;
          return this.legendItems.forEach((t, d) => {
            const p = i + e / 2 + n.measureText(t.text).width;
            (0 === d || a[a.length - 1] + p + 2 * r > o) && (l += c, a[a.length - (d > 0 ? 0 : 1)] = 0, f += c, u++), h[d] = {
              left: 0,
              top: f,
              row: u,
              width: p,
              height: s
            }, a[a.length - 1] += p + r
          }), l
        }
        Us(t, e, i, s) {
          const {
            ctx: n,
            maxHeight: o,
            options: {
              labels: {
                padding: r
              }
            }
          } = this, h = this.legendHitBoxes = [], a = this.columnSizes = [], c = o - t;
          let l = r,
            u = 0,
            f = 0,
            d = 0,
            p = 0;
          return this.legendItems.forEach((t, o) => {
            const {
              itemWidth: b,
              itemHeight: g
            } = function(t, e, i, s, n) {
              const o = function(t, e, i, s) {
                  let n = t.text;
                  return n && "string" != typeof n && (n = n.reduce((t, e) => t.length > e.length ? t : e)), e + i.size / 2 + s.measureText(n).width
                }(s, t, e, i),
                r = function(t, e, i) {
                  let s = t;
                  return "string" != typeof e.text && (s = Ue(e, i)), s
                }(n, s, e.lineHeight);
              return {
                itemWidth: o,
                itemHeight: r
              }
            }(i, e, n, t, s);
            o > 0 && f + g + 2 * r > c && (l += u + r, a.push({
              width: u,
              height: f
            }), d += u + r, p++, u = f = 0), h[o] = {
              left: d,
              top: f,
              col: p,
              width: b,
              height: g
            }, u = Math.max(u, b), f += g + r
          }), l += u, a.push({
            width: u,
            height: f
          }), l
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this.$s(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: {
                  padding: n
                },
                rtl: o
              }
            } = this,
            r = (0, s.az)(o, this.left, this.width);
          if (this.isHorizontal()) {
            let o = 0,
              h = (0, s.a2)(i, this.left + n, this.right - this.lineWidths[o]);
            for (const a of e) o !== a.row && (o = a.row, h = (0, s.a2)(i, this.left + n, this.right - this.lineWidths[o])), a.top += this.top + t + n, a.left = r.leftForLtr(r.x(h), a.width), h += a.width + n
          } else {
            let o = 0,
              h = (0, s.a2)(i, this.top + t + n, this.bottom - this.columnSizes[o].height);
            for (const a of e) a.col !== o && (o = a.col, h = (0, s.a2)(i, this.top + t + n, this.bottom - this.columnSizes[o].height)), a.top = h, a.left += this.left + n, a.left = r.leftForLtr(r.x(a.left), a.width), h += a.height + n
          }
        }
        isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            (0, s.Y)(t, this), this.Ks(), (0, s.$)(t)
          }
        }
        Ks() {
          const {
            options: t,
            columnSizes: e,
            lineWidths: i,
            ctx: n
          } = this, {
            align: o,
            labels: r
          } = t, h = s.d.color, a = (0, s.az)(t.rtl, this.left, this.width), c = (0, s.a0)(r.font), {
            padding: l
          } = r, u = c.size, f = u / 2;
          let d;
          this.drawTitle(), n.textAlign = a.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
          const {
            boxWidth: p,
            boxHeight: b,
            itemHeight: g
          } = $e(r, u), m = this.isHorizontal(), x = this.$s();
          d = m ? {
            x: (0, s.a2)(o, this.left + l, this.right - i[0]),
            y: this.top + l + x,
            line: 0
          } : {
            x: this.left + l,
            y: (0, s.a2)(o, this.top + x + l, this.bottom - e[0].height),
            line: 0
          }, (0, s.aA)(this.ctx, t.textDirection);
          const v = g + l;
          this.legendItems.forEach((y, M) => {
            n.strokeStyle = y.fontColor, n.fillStyle = y.fontColor;
            const w = n.measureText(y.text).width,
              _ = a.textAlign(y.textAlign || (y.textAlign = r.textAlign)),
              k = p + f + w;
            let O = d.x,
              S = d.y;
            if (a.setWidth(this.width), m ? M > 0 && O + k + l > this.right && (S = d.y += v, d.line++, O = d.x = (0, s.a2)(o, this.left + l, this.right - i[d.line])) : M > 0 && S + v > this.bottom && (O = d.x = O + e[d.line].width + l, d.line++, S = d.y = (0, s.a2)(o, this.top + x + l, this.bottom - e[d.line].height)), function(t, e, i) {
                if (isNaN(p) || 0 >= p || isNaN(b) || 0 > b) return;
                n.save();
                const o = (0, s.v)(i.lineWidth, 1);
                if (n.fillStyle = (0, s.v)(i.fillStyle, h), n.lineCap = (0, s.v)(i.lineCap, "butt"), n.lineDashOffset = (0, s.v)(i.lineDashOffset, 0), n.lineJoin = (0, s.v)(i.lineJoin, "miter"), n.lineWidth = o, n.strokeStyle = (0, s.v)(i.strokeStyle, h), n.setLineDash((0, s.v)(i.lineDash, [])), r.usePointStyle) {
                  const h = {
                      radius: b * Math.SQRT2 / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: o
                    },
                    c = a.xPlus(t, p / 2),
                    l = e + f;
                  (0, s.aD)(n, h, c, l, r.pointStyleWidth && p)
                } else {
                  const r = e + Math.max((u - b) / 2, 0),
                    h = a.leftForLtr(t, p),
                    c = (0, s.aw)(i.borderRadius);
                  n.beginPath(), Object.values(c).some(t => 0 !== t) ? (0, s.au)(n, {
                    x: h,
                    y: r,
                    w: p,
                    h: b,
                    radius: c
                  }) : n.rect(h, r, p, b), n.fill(), 0 !== o && n.stroke()
                }
                n.restore()
              }(a.x(O), S, y), O = (0, s.aB)(_, O + p + f, m ? O + k : this.right, t.rtl), function(t, e, i) {
                (0, s.Z)(n, i.text, t, e + g / 2, c, {
                  strikethrough: i.hidden,
                  textAlign: a.textAlign(i.textAlign)
                })
              }(a.x(O), S, y), m) d.x += k + l;
            else if ("string" != typeof y.text) {
              const t = c.lineHeight;
              d.y += Ue(y, t) + l
            } else d.y += v
          }), (0, s.aC)(this.ctx, t.textDirection)
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = (0, s.a0)(e.font),
            n = (0, s.E)(e.padding);
          if (!e.display) return;
          const o = (0, s.az)(t.rtl, this.left, this.width),
            r = this.ctx,
            h = e.position,
            a = i.size / 2,
            c = n.top + a;
          let l, u = this.left,
            f = this.width;
          if (this.isHorizontal()) f = Math.max(...this.lineWidths), l = this.top + c, u = (0, s.a2)(t.align, u, this.right - f);
          else {
            const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
            l = c + (0, s.a2)(t.align, this.top, this.bottom - e - t.labels.padding - this.$s())
          }
          const d = (0, s.a2)(h, u, u + f);
          r.textAlign = o.textAlign((0, s.a1)(h)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, (0, s.Z)(r, e.text, d, l, i)
        }
        $s() {
          const t = this.options.title,
            e = (0, s.a0)(t.font),
            i = (0, s.E)(t.padding);
          return t.display ? e.lineHeight + i.height : 0
        }
        Zs(t, e) {
          let i, n, o;
          if ((0, s.aj)(t, this.left, this.right) && (0, s.aj)(e, this.top, this.bottom))
            for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
              if (n = o[i], (0, s.aj)(t, n.left, n.left + n.width) && (0, s.aj)(e, n.top, n.top + n.height)) return this.legendItems[i];
          return null
        }
        handleEvent(t) {
          const e = this.options;
          if (! function(t, e) {
              return !(("mousemove" !== t && "mouseout" !== t || !e.onHover && !e.onLeave) && (!e.onClick || "click" !== t && "mouseup" !== t))
            }(t.type, e)) return;
          const i = this.Zs(t.x, t.y);
          if ("mousemove" === t.type || "mouseout" === t.type) {
            const n = this.Ys,
              o = ((t, e) => null !== t && null !== e && t.datasetIndex === e.datasetIndex && t.index === e.index)(n, i);
            n && !o && (0, s.Q)(e.onLeave, [t, n, this], this), this.Ys = i, i && !o && (0, s.Q)(e.onHover, [t, i, this], this)
          } else i && (0, s.Q)(e.onClick, [t, i, this], this)
        }
      }

      function Ue(t, e) {
        return e * (t.text ? t.text.length : 0)
      }
      var Ke = {
        id: "legend",
        Qs: Xe,
        start(t, e, i) {
          const s = t.legend = new Xe({
            ctx: t.ctx,
            options: i,
            chart: t
          });
          G.configure(t, s, i), G.addBox(t, s)
        },
        stop(t) {
          G.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, e, i) {
          const s = t.legend;
          G.configure(t, s, i), s.options = i
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes()
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event)
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const s = e.datasetIndex,
              n = i.chart;
            n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1)
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: t => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: i,
                    pointStyle: n,
                    textAlign: o,
                    color: r,
                    useBorderRadius: h,
                    borderRadius: a
                  }
                } = t.legend.options;
              return t.qt().map(t => {
                const c = t.controller.getStyle(i ? 0 : void 0),
                  l = (0, s.E)(c.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: c.backgroundColor,
                  fontColor: r,
                  hidden: !t.visible,
                  lineCap: c.borderCapStyle,
                  lineDash: c.borderDash,
                  lineDashOffset: c.borderDashOffset,
                  lineJoin: c.borderJoinStyle,
                  lineWidth: (l.width + l.height) / 4,
                  strokeStyle: c.borderColor,
                  pointStyle: n || c.pointStyle,
                  rotation: c.rotation,
                  textAlign: o || c.textAlign,
                  borderRadius: h && (a || c.borderRadius),
                  datasetIndex: t.index
                }
              }, this)
            }
          },
          title: {
            color: t => t.chart.options.color,
            display: !1,
            position: "center",
            text: ""
          }
        },
        descriptors: {
          rt: t => !t.startsWith("on"),
          labels: {
            rt: t => !["generateLabels", "filter", "sort"].includes(t)
          }
        }
      };
      class Ze extends gt {
        constructor(t) {
          super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.qs = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e) {
          const i = this.options;
          if (this.left = 0, this.top = 0, !i.display) return void(this.width = this.height = this.right = this.bottom = 0);
          this.width = this.right = t, this.height = this.bottom = e;
          const n = (0, s.b)(i.text) ? i.text.length : 1;
          this.qs = (0, s.E)(i.padding);
          const o = n * (0, s.a0)(i.font).lineHeight + this.qs.height;
          this.isHorizontal() ? this.height = o : this.width = o
        }
        isHorizontal() {
          const t = this.options.position;
          return "top" === t || "bottom" === t
        }
        Gs(t) {
          const {
            top: e,
            left: i,
            bottom: n,
            right: o,
            options: r
          } = this, h = r.align;
          let a, c, l, u = 0;
          return this.isHorizontal() ? (c = (0, s.a2)(h, i, o), l = e + t, a = o - i) : ("left" === r.position ? (c = i + t, l = (0, s.a2)(h, n, e), u = -.5 * s.P) : (c = o - t, l = (0, s.a2)(h, e, n), u = .5 * s.P), a = n - e), {
            titleX: c,
            titleY: l,
            maxWidth: a,
            rotation: u
          }
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const i = (0, s.a0)(e.font),
            n = i.lineHeight / 2 + this.qs.top,
            {
              titleX: o,
              titleY: r,
              maxWidth: h,
              rotation: a
            } = this.Gs(n);
          (0, s.Z)(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: h,
            rotation: a,
            textAlign: (0, s.a1)(e.align),
            textBaseline: "middle",
            translation: [o, r]
          })
        }
      }
      var Qe = {
        id: "title",
        Qs: Ze,
        start(t, e, i) {
          ! function(t, e) {
            const i = new Ze({
              ctx: t.ctx,
              options: e,
              chart: t
            });
            G.configure(t, i, e), G.addBox(t, i), t.titleBlock = i
          }(t, i)
        },
        stop(t) {
          const e = t.titleBlock;
          G.removeBox(t, e), delete t.titleBlock
        },
        beforeUpdate(t, e, i) {
          const s = t.titleBlock;
          G.configure(t, s, i), s.options = i
        },
        defaults: {
          align: "center",
          display: !1,
          font: {
            weight: "bold"
          },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        },
        defaultRoutes: {
          color: "color"
        },
        descriptors: {
          rt: !0,
          ht: !1
        }
      };
      const qe = new WeakMap;
      var Ge = {
        id: "subtitle",
        start(t, e, i) {
          const s = new Ze({
            ctx: t.ctx,
            options: i,
            chart: t
          });
          G.configure(t, s, i), G.addBox(t, s), qe.set(t, s)
        },
        stop(t) {
          G.removeBox(t, qe.get(t)), qe.delete(t)
        },
        beforeUpdate(t, e, i) {
          const s = qe.get(t);
          G.configure(t, s, i), s.options = i
        },
        defaults: {
          align: "center",
          display: !1,
          font: {
            weight: "normal"
          },
          fullSize: !0,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500
        },
        defaultRoutes: {
          color: "color"
        },
        descriptors: {
          rt: !0,
          ht: !1
        }
      };
      const Je = {
        average(t) {
          if (!t.length) return !1;
          let e, i, s = new Set,
            n = 0,
            o = 0;
          for (e = 0, i = t.length; i > e; ++e) {
            const i = t[e].element;
            if (i && i.hasValue()) {
              const t = i.tooltipPosition();
              s.add(t.x), n += t.y, ++o
            }
          }
          return {
            x: [...s].reduce((t, e) => t + e) / s.size,
            y: n / o
          }
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let i, n, o, r = e.x,
            h = e.y,
            a = 1 / 0;
          for (i = 0, n = t.length; n > i; ++i) {
            const n = t[i].element;
            if (n && n.hasValue()) {
              const t = n.getCenterPoint(),
                i = (0, s.aE)(e, t);
              a > i && (a = i, o = n)
            }
          }
          if (o) {
            const t = o.tooltipPosition();
            r = t.x, h = t.y
          }
          return {
            x: r,
            y: h
          }
        }
      };

      function ti(t, e) {
        return e && ((0, s.b)(e) ? [].push.apply(t, e) : t.push(e)), t
      }

      function ei(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
      }

      function ii(t, e) {
        const {
          element: i,
          datasetIndex: s,
          index: n
        } = e, o = t.getDatasetMeta(s).controller, {
          label: r,
          value: h
        } = o.getLabelAndValue(n);
        return {
          chart: t,
          label: r,
          parsed: o.getParsed(n),
          raw: t.data.datasets[s].data[n],
          formattedValue: h,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: s,
          element: i
        }
      }

      function si(t, e) {
        const i = t.chart.ctx,
          {
            body: n,
            footer: o,
            title: r
          } = t,
          {
            boxWidth: h,
            boxHeight: a
          } = e,
          c = (0, s.a0)(e.bodyFont),
          l = (0, s.a0)(e.titleFont),
          u = (0, s.a0)(e.footerFont),
          f = r.length,
          d = o.length,
          p = n.length,
          b = (0, s.E)(e.padding);
        let g = b.height,
          m = 0,
          x = n.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
        x += t.beforeBody.length + t.afterBody.length, f && (g += f * l.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom), x && (g += p * (e.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight) + (x - p) * c.lineHeight + (x - 1) * e.bodySpacing), d && (g += e.footerMarginTop + d * u.lineHeight + (d - 1) * e.footerSpacing);
        let v = 0;
        const y = function(t) {
          m = Math.max(m, i.measureText(t).width + v)
        };
        return i.save(), i.font = l.string, (0, s.F)(t.title, y), i.font = c.string, (0, s.F)(t.beforeBody.concat(t.afterBody), y), v = e.displayColors ? h + 2 + e.boxPadding : 0, (0, s.F)(n, t => {
          (0, s.F)(t.before, y), (0, s.F)(t.lines, y), (0, s.F)(t.after, y)
        }), v = 0, i.font = u.string, (0, s.F)(t.footer, y), i.restore(), m += b.width, {
          width: m,
          height: g
        }
      }

      function ni(t, e, i, s) {
        const {
          x: n,
          width: o
        } = i, {
          width: r,
          chartArea: {
            left: h,
            right: a
          }
        } = t;
        let c = "center";
        return "center" === s ? c = n > (h + a) / 2 ? "right" : "left" : n > o / 2 ? n >= r - o / 2 && (c = "right") : c = "left",
          function(t, e, i, s) {
            const {
              x: n,
              width: o
            } = s, r = i.caretSize + i.caretPadding;
            if ("left" === t && n + o + r > e.width || "right" === t && 0 > n - o - r) return !0
          }(c, t, e, i) && (c = "center"), c
      }

      function oi(t, e, i) {
        const s = i.yAlign || e.yAlign || function(t, e) {
          const {
            y: i,
            height: s
          } = e;
          return s / 2 > i ? "top" : i > t.height - s / 2 ? "bottom" : "center"
        }(t, i);
        return {
          xAlign: i.xAlign || e.xAlign || ni(t, e, i, s),
          yAlign: s
        }
      }

      function ri(t, e, i, n) {
        const {
          caretSize: o,
          caretPadding: r,
          cornerRadius: h
        } = t, {
          xAlign: a,
          yAlign: c
        } = i, l = o + r, {
          topLeft: u,
          topRight: f,
          bottomLeft: d,
          bottomRight: p
        } = (0, s.aw)(h);
        let b = function(t, e) {
          let {
            x: i,
            width: s
          } = t;
          return "right" === e ? i -= s : "center" === e && (i -= s / 2), i
        }(e, a);
        const g = function(t, e, i) {
          let {
            y: s,
            height: n
          } = t;
          return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s
        }(e, c, l);
        return "center" === c ? "left" === a ? b += l : "right" === a && (b -= l) : "left" === a ? b -= Math.max(u, d) + o : "right" === a && (b += Math.max(f, p) + o), {
          x: (0, s.S)(b, 0, n.width - e.width),
          y: (0, s.S)(g, 0, n.height - e.height)
        }
      }

      function hi(t, e, i) {
        const n = (0, s.E)(i.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left
      }

      function ai(t) {
        return ti([], ei(t))
      }

      function ci(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t
      }
      const li = {
        beforeTitle: s.aF,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              i = e.chart.data.labels,
              s = i ? i.length : 0;
            if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
            if (e.label) return e.label;
            if (s > 0 && e.dataIndex < s) return i[e.dataIndex]
          }
          return ""
        },
        afterTitle: s.aF,
        beforeBody: s.aF,
        beforeLabel: s.aF,
        label(t) {
          if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
          let e = t.dataset.label || "";
          e && (e += ": ");
          const i = t.formattedValue;
          return (0, s.k)(i) || (e += i), e
        },
        labelColor(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
          }
        },
        labelTextColor() {
          return this.options.bodyColor
        },
        labelPointStyle(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            pointStyle: e.pointStyle,
            rotation: e.rotation
          }
        },
        afterLabel: s.aF,
        afterBody: s.aF,
        beforeFooter: s.aF,
        footer: s.aF,
        afterFooter: s.aF
      };

      function ui(t, e, i, s) {
        const n = t[e].call(i, s);
        return typeof n > "u" ? li[e].call(i, s) : n
      }
      class fi extends gt {
        static positioners = Je;
        constructor(t) {
          super(), this.opacity = 0, this.Nt = [], this.Js = void 0, this.tn = void 0, this.en = void 0, this.sn = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }
        initialize(t) {
          this.options = t, this.en = void 0, this.$context = void 0
        }
        ye() {
          const t = this.en;
          if (t) return t;
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && e.options.animation && i.animations,
            n = new a(this.chart, s);
          return s.lt && (this.en = Object.freeze(n)), n
        }
        getContext() {
          return this.$context || (this.$context = (t = this.chart.getContext(), e = this.sn, (0, s.j)(t, {
            tooltip: this,
            tooltipItems: e,
            type: "tooltip"
          })));
          var t, e
        }
        getTitle(t, e) {
          const {
            callbacks: i
          } = e, s = ui(i, "beforeTitle", this, t), n = ui(i, "title", this, t), o = ui(i, "afterTitle", this, t);
          let r = [];
          return r = ti(r, ei(s)), r = ti(r, ei(n)), r = ti(r, ei(o)), r
        }
        getBeforeBody(t, e) {
          return ai(ui(e.callbacks, "beforeBody", this, t))
        }
        getBody(t, e) {
          const {
            callbacks: i
          } = e, n = [];
          return (0, s.F)(t, t => {
            const e = {
                before: [],
                lines: [],
                after: []
              },
              s = ci(i, t);
            ti(e.before, ei(ui(s, "beforeLabel", this, t))), ti(e.lines, ui(s, "label", this, t)), ti(e.after, ei(ui(s, "afterLabel", this, t))), n.push(e)
          }), n
        }
        getAfterBody(t, e) {
          return ai(ui(e.callbacks, "afterBody", this, t))
        }
        getFooter(t, e) {
          const {
            callbacks: i
          } = e, s = ui(i, "beforeFooter", this, t), n = ui(i, "footer", this, t), o = ui(i, "afterFooter", this, t);
          let r = [];
          return r = ti(r, ei(s)), r = ti(r, ei(n)), r = ti(r, ei(o)), r
        }
        nn(t) {
          const e = this.Nt,
            i = this.chart.data,
            n = [],
            o = [],
            r = [];
          let h, a, c = [];
          for (h = 0, a = e.length; a > h; ++h) c.push(ii(this.chart, e[h]));
          return t.filter && (c = c.filter((e, s, n) => t.filter(e, s, n, i))), t.itemSort && (c = c.sort((e, s) => t.itemSort(e, s, i))), (0, s.F)(c, e => {
            const i = ci(t.callbacks, e);
            n.push(ui(i, "labelColor", this, e)), o.push(ui(i, "labelPointStyle", this, e)), r.push(ui(i, "labelTextColor", this, e))
          }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = c, c
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            s = this.Nt;
          let n, o = [];
          if (s.length) {
            const t = Je[i.position].call(this, s, this.Js);
            o = this.nn(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
            const e = this.tn = si(this, i),
              r = Object.assign({}, t, e),
              h = oi(this.chart, i, r),
              a = ri(i, r, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, n = {
              opacity: 1,
              x: a.x,
              y: a.y,
              width: e.width,
              height: e.height,
              caretX: t.x,
              caretY: t.y
            }
          } else 0 !== this.opacity && (n = {
            opacity: 0
          });
          this.sn = o, this.$context = void 0, n && this.ye().update(this, n), t && i.external && i.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e
          })
        }
        drawCaret(t, e, i, s) {
          const n = this.getCaretPosition(t, i, s);
          e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3)
        }
        getCaretPosition(t, e, i) {
          const {
            xAlign: n,
            yAlign: o
          } = this, {
            caretSize: r,
            cornerRadius: h
          } = i, {
            topLeft: a,
            topRight: c,
            bottomLeft: l,
            bottomRight: u
          } = (0, s.aw)(h), {
            x: f,
            y: d
          } = t, {
            width: p,
            height: b
          } = e;
          let g, m, x, v, y, M;
          return "center" === o ? (y = d + b / 2, "left" === n ? (g = f, m = g - r, v = y + r, M = y - r) : (g = f + p, m = g + r, v = y - r, M = y + r), x = g) : (m = "left" === n ? f + Math.max(a, l) + r : "right" === n ? f + p - Math.max(c, u) - r : this.caretX, "top" === o ? (v = d, y = v - r, g = m - r, x = m + r) : (v = d + b, y = v + r, g = m + r, x = m - r), M = v), {
            x1: g,
            x2: m,
            x3: x,
            y1: v,
            y2: y,
            y3: M
          }
        }
        drawTitle(t, e, i) {
          const n = this.title,
            o = n.length;
          let r, h, a;
          if (o) {
            const c = (0, s.az)(i.rtl, this.x, this.width);
            for (t.x = hi(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = (0, s.a0)(i.titleFont), h = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, a = 0; o > a; ++a) e.fillText(n[a], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + h, a + 1 === o && (t.y += i.titleMarginBottom - h)
          }
        }
        rn(t, e, i, n, o) {
          const r = this.labelColors[i],
            h = this.labelPointStyles[i],
            {
              boxHeight: a,
              boxWidth: c
            } = o,
            l = (0, s.a0)(o.bodyFont),
            u = hi(this, "left", o),
            f = n.x(u),
            d = a < l.lineHeight ? (l.lineHeight - a) / 2 : 0,
            p = e.y + d;
          if (o.usePointStyle) {
            const e = {
                radius: Math.min(c, a) / 2,
                pointStyle: h.pointStyle,
                rotation: h.rotation,
                borderWidth: 1
              },
              i = n.leftForLtr(f, c) + c / 2,
              l = p + a / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, (0, s.at)(t, e, i, l), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, (0, s.at)(t, e, i, l)
          } else {
            t.lineWidth = (0, s.i)(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
            const e = n.leftForLtr(f, c),
              i = n.leftForLtr(n.xPlus(f, 1), c - 2),
              h = (0, s.aw)(r.borderRadius);
            Object.values(h).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, (0, s.au)(t, {
              x: e,
              y: p,
              w: c,
              h: a,
              radius: h
            }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), (0, s.au)(t, {
              x: i,
              y: p + 1,
              w: c - 2,
              h: a - 2,
              radius: h
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(e, p, c, a), t.strokeRect(e, p, c, a), t.fillStyle = r.backgroundColor, t.fillRect(i, p + 1, c - 2, a - 2))
          }
          t.fillStyle = this.labelTextColors[i]
        }
        drawBody(t, e, i) {
          const {
            body: n
          } = this, {
            bodySpacing: o,
            bodyAlign: r,
            displayColors: h,
            boxHeight: a,
            boxWidth: c,
            boxPadding: l
          } = i, u = (0, s.a0)(i.bodyFont);
          let f = u.lineHeight,
            d = 0;
          const p = (0, s.az)(i.rtl, this.x, this.width),
            b = function(i) {
              e.fillText(i, p.x(t.x + d), t.y + f / 2), t.y += f + o
            },
            g = p.textAlign(r);
          let m, x, v, y, M, w, _;
          for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = hi(this, g, i), e.fillStyle = i.bodyColor, (0, s.F)(this.beforeBody, b), d = h && "right" !== g ? "center" === r ? c / 2 + l : c + 2 + l : 0, y = 0, w = n.length; w > y; ++y) {
            for (m = n[y], x = this.labelTextColors[y], e.fillStyle = x, (0, s.F)(m.before, b), v = m.lines, h && v.length && (this.rn(e, t, y, p, i), f = Math.max(u.lineHeight, a)), M = 0, _ = v.length; _ > M; ++M) b(v[M]), f = u.lineHeight;
            (0, s.F)(m.after, b)
          }
          d = 0, f = u.lineHeight, (0, s.F)(this.afterBody, b), t.y -= o
        }
        drawFooter(t, e, i) {
          const n = this.footer,
            o = n.length;
          let r, h;
          if (o) {
            const a = (0, s.az)(i.rtl, this.x, this.width);
            for (t.x = hi(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", r = (0, s.a0)(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, h = 0; o > h; ++h) e.fillText(n[h], a.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing
          }
        }
        drawBackground(t, e, i, n) {
          const {
            xAlign: o,
            yAlign: r
          } = this, {
            x: h,
            y: a
          } = t, {
            width: c,
            height: l
          } = i, {
            topLeft: u,
            topRight: f,
            bottomLeft: d,
            bottomRight: p
          } = (0, s.aw)(n.cornerRadius);
          e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(h + u, a), "top" === r && this.drawCaret(t, e, i, n), e.lineTo(h + c - f, a), e.quadraticCurveTo(h + c, a, h + c, a + f), "center" === r && "right" === o && this.drawCaret(t, e, i, n), e.lineTo(h + c, a + l - p), e.quadraticCurveTo(h + c, a + l, h + c - p, a + l), "bottom" === r && this.drawCaret(t, e, i, n), e.lineTo(h + d, a + l), e.quadraticCurveTo(h, a + l, h, a + l - d), "center" === r && "left" === o && this.drawCaret(t, e, i, n), e.lineTo(h, a + u), e.quadraticCurveTo(h, a, h + u, a), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
        }
        hn(t) {
          const e = this.chart,
            i = this.$animations,
            s = i && i.x,
            n = i && i.y;
          if (s || n) {
            const i = Je[t.position].call(this, this.Nt, this.Js);
            if (!i) return;
            const o = this.tn = si(this, t),
              r = Object.assign({}, i, this.tn),
              h = oi(e, t, r),
              a = ri(t, r, h, e);
            (s.Xt !== a.x || n.Xt !== a.y) && (this.xAlign = h.xAlign, this.yAlign = h.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this.ye().update(this, a))
          }
        }
        cn() {
          return !!this.opacity
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let i = this.opacity;
          if (!i) return;
          this.hn(e);
          const n = {
              width: this.width,
              height: this.height
            },
            o = {
              x: this.x,
              y: this.y
            };
          i = .001 > Math.abs(i) ? 0 : i;
          const r = (0, s.E)(e.padding),
            h = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
          e.enabled && h && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, n, e), (0, s.aA)(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), (0, s.aC)(t, e.textDirection), t.restore())
        }
        getActiveElements() {
          return this.Nt || []
        }
        setActiveElements(t, e) {
          const i = this.Nt,
            n = t.map(({
              datasetIndex: t,
              index: e
            }) => {
              const i = this.chart.getDatasetMeta(t);
              if (!i) throw Error("Cannot find a dataset at index " + t);
              return {
                datasetIndex: t,
                element: i.data[e],
                index: e
              }
            }),
            o = !(0, s.ah)(i, n),
            r = this.ln(n, e);
          (o || r) && (this.Nt = n, this.Js = e, this.un = !0, this.update(!0))
        }
        handleEvent(t, e, i = !0) {
          if (e && this.un) return !1;
          this.un = !1;
          const n = this.options,
            o = this.Nt || [],
            r = this.Is(t, o, e, i),
            h = this.ln(r, t),
            a = e || !(0, s.ah)(r, o) || h;
          return a && (this.Nt = r, (n.enabled || n.external) && (this.Js = {
            x: t.x,
            y: t.y
          }, this.update(!0, e))), a
        }
        Is(t, e, i, s) {
          const n = this.options;
          if ("mouseout" === t.type) return [];
          if (!s) return e.filter(t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index));
          const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
          return n.reverse && o.reverse(), o
        }
        ln(t, e) {
          const {
            caretX: i,
            caretY: s,
            options: n
          } = this, o = Je[n.position].call(this, t, e);
          return !1 !== o && (i !== o.x || s !== o.y)
        }
      }

      function di(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t
      }
      Object.freeze({
        __proto__: null,
        Colors: Oe,
        Decimation: Ae,
        Filler: Ye,
        Legend: Ke,
        SubTitle: Ge,
        Title: Qe,
        Tooltip: {
          id: "tooltip",
          Qs: fi,
          positioners: Je,
          afterInit(t, e, i) {
            i && (t.tooltip = new fi({
              chart: t,
              options: i
            }))
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
          },
          afterDraw(t) {
            const e = t.tooltip;
            if (e && e.cn()) {
              const i = {
                tooltip: e
              };
              if (!1 === t.notifyPlugins("beforeTooltipDraw", {
                  ...i,
                  cancelable: !0
                })) return;
              e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i)
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const i = e.replay;
              t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {
              weight: "bold"
            },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {
              weight: "bold"
            },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {
              duration: 400,
              easing: "easeOutQuart"
            },
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"]
              },
              opacity: {
                easing: "linear",
                duration: 200
              }
            },
            callbacks: li
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
          },
          descriptors: {
            rt: t => "filter" !== t && "itemSort" !== t && "external" !== t,
            ht: !1,
            callbacks: {
              rt: !1,
              ht: !1
            },
            animation: {
              ct: !1
            },
            animations: {
              ct: "animation"
            }
          },
          additionalOptionScopes: ["interaction"]
        }
      });
      class pi extends Ot {
        static id = "category";
        static defaults = {
          ticks: {
            callback: di
          }
        };
        constructor(t) {
          super(t), this.dn = void 0, this.pn = 0, this.bn = []
        }
        init(t) {
          const e = this.bn;
          if (e.length) {
            const t = this.getLabels();
            for (const {
                index: i,
                label: s
              }
              of e) t[i] === s && t.splice(i, 1);
            this.bn = []
          }
          super.init(t)
        }
        parse(t, e) {
          if ((0, s.k)(t)) return null;
          const i = this.getLabels();
          return ((t, e) => null === t ? null : (0, s.S)(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : function(t, e, i, s) {
            const n = t.indexOf(e);
            return -1 === n ? ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({
              index: i,
              label: e
            })) : isNaN(e) && (i = null), i))(t, e, i, s) : n !== t.lastIndexOf(e) ? i : n
          }(i, t, (0, s.v)(e, t), this.bn), i.length - 1)
        }
        determineDataLimits() {
          const {
            minDefined: t,
            maxDefined: e
          } = this.getUserBounds();
          let {
            min: i,
            max: s
          } = this.getMinMax(!0);
          "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            i = this.options.offset,
            s = [];
          let n = this.getLabels();
          n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this.pn = Math.max(n.length - (i ? 0 : 1), 1), this.dn = this.min - (i ? .5 : 0);
          for (let i = t; e >= i; i++) s.push({
            value: i
          });
          return s
        }
        getLabelForValue(t) {
          return di.call(this, t)
        }
        configure() {
          super.configure(), this.isHorizontal() || (this.ci = !this.ci)
        }
        getPixelForValue(t) {
          return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this.dn) / this.pn)
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return 0 > t || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
          return Math.round(this.dn + this.getDecimalForPixel(t) * this.pn)
        }
        getBasePixel() {
          return this.bottom
        }
      }

      function bi(t, e, {
        horizontal: i,
        minRotation: n
      }) {
        const o = (0, s.t)(n);
        return Math.min(e / ((i ? Math.sin(o) : Math.cos(o)) || .001), .75 * e * ("" + t).length)
      }
      class gi extends Ot {
        constructor(t) {
          super(t), this.start = void 0, this.end = void 0, this.dn = void 0, this.gn = void 0, this.pn = 0
        }
        parse(t, e) {
          return (0, s.k)(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions() {
          const {
            beginAtZero: t
          } = this.options, {
            minDefined: e,
            maxDefined: i
          } = this.getUserBounds();
          let {
            min: n,
            max: o
          } = this;
          const r = t => n = e ? n : t,
            h = t => o = i ? o : t;
          if (t) {
            const t = (0, s.s)(n),
              e = (0, s.s)(o);
            0 > t && 0 > e ? h(0) : t > 0 && e > 0 && r(0)
          }
          if (n === o) {
            let e = 0 === o ? 1 : Math.abs(.05 * o);
            h(o + e), t || r(n - e)
          }
          this.min = n, this.max = o
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e, {
            maxTicksLimit: i,
            stepSize: s
          } = t;
          return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
        }
        computeTickLimit() {
          return 1 / 0
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const n = function(t, e) {
            const i = [],
              {
                bounds: n,
                step: o,
                min: r,
                max: h,
                precision: a,
                count: c,
                maxTicks: l,
                maxDigits: u,
                includeBounds: f
              } = t,
              d = o || 1,
              p = l - 1,
              {
                min: b,
                max: g
              } = e,
              m = !(0, s.k)(r),
              x = !(0, s.k)(h),
              v = !(0, s.k)(c),
              y = (g - b) / (u + 1);
            let M, w, _, k, O = (0, s.aH)((g - b) / p / d) * d;
            if (1e-14 > O && !m && !x) return [{
              value: b
            }, {
              value: g
            }];
            k = Math.ceil(g / O) - Math.floor(b / O), k > p && (O = (0, s.aH)(k * O / p / d) * d), (0, s.k)(a) || (M = Math.pow(10, a), O = Math.ceil(O * M) / M), "ticks" === n ? (w = Math.floor(b / O) * O, _ = Math.ceil(g / O) * O) : (w = b, _ = g), m && x && o && (0, s.aI)((h - r) / o, O / 1e3) ? (k = Math.round(Math.min((h - r) / O, l)), O = (h - r) / k, w = r, _ = h) : v ? (w = m ? r : w, _ = x ? h : _, k = c - 1, O = (_ - w) / k) : (k = (_ - w) / O, k = (0, s.aJ)(k, Math.round(k), O / 1e3) ? Math.round(k) : Math.ceil(k));
            const S = Math.max((0, s.aK)(O), (0, s.aK)(w));
            M = Math.pow(10, (0, s.k)(a) ? S : a), w = Math.round(w * M) / M, _ = Math.round(_ * M) / M;
            let D = 0;
            for (m && (f && w !== r ? (i.push({
                value: r
              }), r > w && D++, (0, s.aJ)(Math.round((w + D * O) * M) / M, r, bi(r, y, t)) && D++) : r > w && D++); k > D; ++D) {
              const t = Math.round((w + D * O) * M) / M;
              if (x && t > h) break;
              i.push({
                value: t
              })
            }
            return x && f && _ !== h ? i.length && (0, s.aJ)(i[i.length - 1].value, h, bi(h, y, t)) ? i[i.length - 1].value = h : i.push({
              value: h
            }) : (!x || _ === h) && i.push({
              value: _
            }), i
          }({
            maxTicks: i,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this.Bi(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: !1 !== e.includeBounds
          }, this.fi || this);
          return "ticks" === t.bounds && (0, s.aG)(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            i = this.max;
          if (super.configure(), this.options.offset && t.length) {
            const s = (i - e) / Math.max(t.length - 1, 1) / 2;
            e -= s, i += s
          }
          this.dn = e, this.gn = i, this.pn = i - e
        }
        getLabelForValue(t) {
          return (0, s.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
      }
      class mi extends gi {
        static id = "linear";
        static defaults = {
          ticks: {
            callback: s.aL.formatters.numeric
          }
        };
        determineDataLimits() {
          const {
            min: t,
            max: e
          } = this.getMinMax(!0);
          this.min = (0, s.g)(t) ? t : 0, this.max = (0, s.g)(e) ? e : 1, this.handleTickRangeOptions()
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = (0, s.t)(this.options.ticks.minRotation),
            n = (t ? Math.sin(i) : Math.cos(i)) || .001,
            o = this.Ni(0);
          return Math.ceil(e / Math.min(40, o.lineHeight / n))
        }
        getPixelForValue(t) {
          return null === t ? NaN : this.getPixelForDecimal((t - this.dn) / this.pn)
        }
        getValueForPixel(t) {
          return this.dn + this.getDecimalForPixel(t) * this.pn
        }
      }
      const xi = t => Math.floor((0, s.aM)(t)),
        vi = (t, e) => Math.pow(10, xi(t) + e);

      function yi(t) {
        return t / Math.pow(10, xi(t)) === 1
      }

      function Mi(t, e, i) {
        const s = Math.pow(10, i),
          n = Math.floor(t / s);
        return Math.ceil(e / s) - n
      }
      class wi extends Ot {
        static id = "logarithmic";
        static defaults = {
          ticks: {
            callback: s.aL.formatters.logarithmic,
            major: {
              enabled: !0
            }
          }
        };
        constructor(t) {
          super(t), this.start = void 0, this.end = void 0, this.dn = void 0, this.pn = 0
        }
        parse(t, e) {
          const i = gi.prototype.parse.call(this, t, e);
          if (0 !== i) return (0, s.g)(i) && i > 0 ? i : null;
          this.mn = !0
        }
        determineDataLimits() {
          const {
            min: t,
            max: e
          } = this.getMinMax(!0);
          this.min = (0, s.g)(t) ? Math.max(0, t) : null, this.max = (0, s.g)(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this.mn = !0), this.mn && this.min !== this.wi && !(0, s.g)(this.yi) && (this.min = t === vi(this.min, 0) ? vi(this.min, -1) : vi(this.min, 0)), this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
          const {
            minDefined: t,
            maxDefined: e
          } = this.getUserBounds();
          let i = this.min,
            s = this.max;
          const n = e => i = t ? i : e,
            o = t => s = e ? s : t;
          i === s && (i > 0 ? (n(vi(i, -1)), o(vi(s, 1))) : (n(1), o(10))), 0 >= i && n(vi(s, -1)), 0 >= s && o(vi(i, 1)), this.min = i, this.max = s
        }
        buildTicks() {
          const t = this.options,
            e = function(t, {
              min: e,
              max: i
            }) {
              e = (0, s.O)(t.min, e);
              const n = [],
                o = xi(e);
              let r = function(t, e) {
                  let i = xi(e - t);
                  for (; Mi(t, e, i) > 10;) i++;
                  for (; 10 > Mi(t, e, i);) i--;
                  return Math.min(i, xi(t))
                }(e, i),
                h = 0 > r ? Math.pow(10, Math.abs(r)) : 1;
              const a = Math.pow(10, r),
                c = o > r ? Math.pow(10, o) : 0,
                l = Math.round((e - c) * h) / h,
                u = Math.floor((e - c) / a / 10) * a * 10;
              let f = Math.floor((l - u) / Math.pow(10, r)),
                d = (0, s.O)(t.min, Math.round((c + u + f * Math.pow(10, r)) * h) / h);
              for (; i > d;) n.push({
                value: d,
                major: yi(d),
                significand: f
              }), 10 > f ? f++ : f = 15 > f ? 15 : 20, f >= 20 && (r++, f = 2, h = 0 > r ? h : 1), d = Math.round((c + u + f * Math.pow(10, r)) * h) / h;
              const p = (0, s.O)(t.max, d);
              return n.push({
                value: p,
                major: yi(p),
                significand: f
              }), n
            }({
              min: this.yi,
              max: this.xi
            }, this);
          return "ticks" === t.bounds && (0, s.aG)(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
        }
        getLabelForValue(t) {
          return void 0 === t ? "0" : (0, s.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
          const t = this.min;
          super.configure(), this.dn = (0, s.aM)(t), this.pn = (0, s.aM)(this.max) - (0, s.aM)(t)
        }
        getPixelForValue(t) {
          return (void 0 === t || 0 === t) && (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : ((0, s.aM)(t) - this.dn) / this.pn)
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this.dn + e * this.pn)
        }
      }

      function _i(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = (0, s.E)(e.backdropPadding);
          return (0, s.v)(e.font && e.font.size, s.d.font.size) + t.height
        }
        return 0
      }

      function ki(t, e, i) {
        return i = (0, s.b)(i) ? i : [i], {
          w: (0, s.aN)(t, e.string, i),
          h: i.length * e.lineHeight
        }
      }

      function Oi(t, e, i, s, n) {
        return t === s || t === n ? {
          start: e - i / 2,
          end: e + i / 2
        } : s > t || t > n ? {
          start: e - i,
          end: e
        } : {
          start: e,
          end: e + i
        }
      }

      function Si(t, e, i, s, n) {
        const o = Math.abs(Math.sin(i)),
          r = Math.abs(Math.cos(i));
        let h = 0,
          a = 0;
        s.start < e.l ? (h = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - h)) : s.end > e.r && (h = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + h)), n.start < e.t ? (a = (e.t - n.start) / r, t.t = Math.min(t.t, e.t - a)) : n.end > e.b && (a = (n.end - e.b) / r, t.b = Math.max(t.b, e.b + a))
      }

      function Di(t, e, i) {
        const n = t.drawingArea,
          {
            extra: o,
            additionalAngle: r,
            padding: h,
            size: a
          } = i,
          c = t.getPointPosition(e, n + o + h, r),
          l = Math.round((0, s.U)((0, s.ay)(c.angle + s.H))),
          u = function(t, e, i) {
            return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || 90 > i) && (t -= e), t
          }(c.y, a.h, l),
          f = function(t) {
            return 0 === t || 180 === t ? "center" : 180 > t ? "left" : "right"
          }(l),
          d = function(t, e, i) {
            return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
          }(c.x, a.w, f);
        return {
          visible: !0,
          x: c.x,
          y: u,
          textAlign: f,
          left: d,
          top: u,
          right: d + a.w,
          bottom: u + a.h
        }
      }

      function Ai(t, e) {
        if (!e) return !0;
        const {
          left: i,
          top: n,
          right: o,
          bottom: r
        } = t;
        return !((0, s.C)({
          x: i,
          y: n
        }, e) || (0, s.C)({
          x: i,
          y: r
        }, e) || (0, s.C)({
          x: o,
          y: n
        }, e) || (0, s.C)({
          x: o,
          y: r
        }, e))
      }

      function Ci(t, e, i) {
        const {
          left: n,
          top: o,
          right: r,
          bottom: h
        } = i, {
          backdropColor: a
        } = e;
        if (!(0, s.k)(a)) {
          const i = (0, s.aw)(e.borderRadius),
            c = (0, s.E)(e.backdropPadding);
          t.fillStyle = a;
          const l = n - c.left,
            u = o - c.top,
            f = r - n + c.width,
            d = h - o + c.height;
          Object.values(i).some(t => 0 !== t) ? (t.beginPath(), (0, s.au)(t, {
            x: l,
            y: u,
            w: f,
            h: d,
            radius: i
          }), t.fill()) : t.fillRect(l, u, f, d)
        }
      }

      function Li(t, e, i, n) {
        const {
          ctx: o
        } = t;
        if (i) o.arc(t.xCenter, t.yCenter, e, 0, s.T);
        else {
          let i = t.getPointPosition(0, e);
          o.moveTo(i.x, i.y);
          for (let s = 1; n > s; s++) i = t.getPointPosition(s, e), o.lineTo(i.x, i.y)
        }
      }
      class Ri extends gi {
        static id = "radialLinear";
        static defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
          },
          grid: {
            circular: !1
          },
          startAngle: 0,
          ticks: {
            showLabelBackdrop: !0,
            callback: s.aL.formatters.numeric
          },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
              size: 10
            },
            callback: t => t,
            padding: 5,
            centerPointLabels: !1
          }
        };
        static defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color"
        };
        static descriptors = {
          angleLines: {
            ct: "grid"
          }
        };
        constructor(t) {
          super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this.xn = [], this.vn = []
        }
        setDimensions() {
          const t = this.qs = (0, s.E)(_i(this.options) / 2),
            e = this.width = this.maxWidth - t.width,
            i = this.height = this.maxHeight - t.height;
          this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
        }
        determineDataLimits() {
          const {
            min: t,
            max: e
          } = this.getMinMax(!1);
          this.min = (0, s.g)(t) && !isNaN(t) ? t : 0, this.max = (0, s.g)(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / _i(this.options))
        }
        generateTickLabels(t) {
          gi.prototype.generateTickLabels.call(this, t), this.xn = this.getLabels().map((t, e) => {
            const i = (0, s.Q)(this.options.pointLabels.callback, [t, e], this);
            return i || 0 === i ? i : ""
          }).filter((t, e) => this.chart.getDataVisibility(e))
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display ? function(t) {
            const e = {
                l: t.left + t.qs.left,
                r: t.right - t.qs.right,
                t: t.top + t.qs.top,
                b: t.bottom - t.qs.bottom
              },
              i = Object.assign({}, e),
              n = [],
              o = [],
              r = t.xn.length,
              h = t.options.pointLabels,
              a = h.centerPointLabels ? s.P / r : 0;
            for (let c = 0; r > c; c++) {
              const r = h.setContext(t.getPointLabelContext(c));
              o[c] = r.padding;
              const l = t.getPointPosition(c, t.drawingArea + o[c], a),
                u = (0, s.a0)(r.font),
                f = ki(t.ctx, u, t.xn[c]);
              n[c] = f;
              const d = (0, s.ay)(t.getIndexAngle(c) + a),
                p = Math.round((0, s.U)(d));
              Si(i, e, d, Oi(p, l.x, f.w, 0, 180), Oi(p, l.y, f.h, 90, 270))
            }
            t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t.vn = function(t, e, i) {
              const n = [],
                o = t.xn.length,
                r = t.options,
                {
                  centerPointLabels: h,
                  display: a
                } = r.pointLabels,
                c = {
                  extra: _i(r) / 2,
                  additionalAngle: h ? s.P / o : 0
                };
              let l;
              for (let s = 0; o > s; s++) {
                c.padding = i[s], c.size = e[s];
                const o = Di(t, s, c);
                n.push(o), "auto" === a && (o.visible = Ai(o, l), o.visible && (l = o))
              }
              return n
            }(t, n, o)
          }(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, e, i, s) {
          this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s))
        }
        getIndexAngle(t) {
          const e = s.T / (this.xn.length || 1),
            i = this.options.startAngle || 0;
          return (0, s.ay)(t * e + (0, s.t)(i))
        }
        getDistanceFromCenterForValue(t) {
          if ((0, s.k)(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }
        getValueForDistanceFromCenter(t) {
          if ((0, s.k)(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e
        }
        getPointLabelContext(t) {
          const e = this.xn || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return function(t, e, i) {
              return (0, s.j)(t, {
                label: i,
                index: e,
                type: "pointLabel"
              })
            }(this.getContext(), t, i)
          }
        }
        getPointPosition(t, e, i = 0) {
          const n = this.getIndexAngle(t) - s.H + i;
          return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n
          }
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: i,
            right: s,
            bottom: n
          } = this.vn[t];
          return {
            left: e,
            top: i,
            right: s,
            bottom: n
          }
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: {
              circular: e
            }
          } = this.options;
          if (t) {
            const i = this.ctx;
            i.save(), i.beginPath(), Li(this, this.getDistanceFromCenterForValue(this.gn), e, this.xn.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            {
              angleLines: i,
              grid: n,
              border: o
            } = e,
            r = this.xn.length;
          let h, a, c;
          if (e.pointLabels.display && function(t, e) {
              const {
                ctx: i,
                options: {
                  pointLabels: n
                }
              } = t;
              for (let o = e - 1; o >= 0; o--) {
                const e = t.vn[o];
                if (!e.visible) continue;
                const r = n.setContext(t.getPointLabelContext(o));
                Ci(i, r, e);
                const h = (0, s.a0)(r.font),
                  {
                    x: a,
                    y: c,
                    textAlign: l
                  } = e;
                (0, s.Z)(i, t.xn[o], a, c + h.lineHeight / 2, h, {
                  color: r.color,
                  textAlign: l,
                  textBaseline: "middle"
                })
              }
            }(this, r), n.display && this.ticks.forEach((t, e) => {
              if (0 !== e || 0 === e && 0 > this.min) {
                a = this.getDistanceFromCenterForValue(t.value);
                const i = this.getContext(e),
                  s = n.setContext(i),
                  h = o.setContext(i);
                ! function(t, e, i, s, n) {
                  const o = t.ctx,
                    r = e.circular,
                    {
                      color: h,
                      lineWidth: a
                    } = e;
                  !r && !s || !h || !a || 0 > i || (o.save(), o.strokeStyle = h, o.lineWidth = a, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Li(t, i, r, s), o.closePath(), o.stroke(), o.restore())
                }(this, s, a, r, h)
              }
            }), i.display) {
            for (t.save(), h = r - 1; h >= 0; h--) {
              const s = i.setContext(this.getPointLabelContext(h)),
                {
                  color: n,
                  lineWidth: o
                } = s;
              !o || !n || (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(h, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
            }
            t.restore()
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks;
          if (!i.display) return;
          const n = this.getIndexAngle(0);
          let o, r;
          t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((n, h) => {
            if (0 === h && this.min >= 0 && !e.reverse) return;
            const a = i.setContext(this.getContext(h)),
              c = (0, s.a0)(a.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[h].value), a.showLabelBackdrop) {
              t.font = c.string, r = t.measureText(n.label).width, t.fillStyle = a.backdropColor;
              const e = (0, s.E)(a.backdropPadding);
              t.fillRect(-r / 2 - e.left, -o - c.size / 2 - e.top, r + e.width, c.size + e.height)
            }(0, s.Z)(t, n.label, 0, -o, c, {
              color: a.color,
              strokeColor: a.textStrokeColor,
              strokeWidth: a.textStrokeWidth
            })
          }), t.restore()
        }
        drawTitle() {}
      }
      const Ei = {
          millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
          },
          second: {
            common: !0,
            size: 1e3,
            steps: 60
          },
          minute: {
            common: !0,
            size: 6e4,
            steps: 60
          },
          hour: {
            common: !0,
            size: 36e5,
            steps: 24
          },
          day: {
            common: !0,
            size: 864e5,
            steps: 30
          },
          week: {
            common: !1,
            size: 6048e5,
            steps: 4
          },
          month: {
            common: !0,
            size: 2628e6,
            steps: 12
          },
          quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
          },
          year: {
            common: !0,
            size: 3154e7
          }
        },
        ji = Object.keys(Ei);

      function Pi(t, e) {
        return t - e
      }

      function Ti(t, e) {
        if ((0, s.k)(e)) return null;
        const i = t.yn,
          {
            parser: n,
            round: o,
            isoWeekday: r
          } = t.Mn;
        let h = e;
        return "function" == typeof n && (h = n(h)), (0, s.g)(h) || (h = "string" == typeof n ? i.parse(h, n) : i.parse(h)), null === h ? null : (o && (h = "week" !== o || !(0, s.x)(r) && !0 !== r ? i.startOf(h, o) : i.startOf(h, "isoWeek", r)), +h)
      }

      function Ni(t, e, i, s) {
        const n = ji.length;
        for (let o = ji.indexOf(t); n - 1 > o; ++o) {
          const t = Ei[ji[o]],
            n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return ji[o]
        }
        return ji[n - 1]
      }

      function Fi(t, e, i) {
        if (i) {
          if (i.length) {
            const {
              lo: n,
              hi: o
            } = (0, s.aP)(i, e);
            t[i[n] < e ? i[o] : i[n]] = !0
          }
        } else t[e] = !0
      }

      function Ii(t, e, i) {
        const s = [],
          n = {},
          o = e.length;
        let r, h;
        for (r = 0; o > r; ++r) h = e[r], n[h] = r, s.push({
          value: h,
          major: !1
        });
        return 0 !== o && i ? function(t, e, i, s) {
          const n = t.yn,
            o = +n.startOf(e[0].value, s),
            r = e[e.length - 1].value;
          let h, a;
          for (h = o; r >= h; h = +n.add(h, 1, s)) a = i[h], a >= 0 && (e[a].major = !0);
          return e
        }(t, s, n, i) : s
      }
      class zi extends Ot {
        static id = "time";
        static defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
          },
          ticks: {
            source: "auto",
            callback: !1,
            major: {
              enabled: !1
            }
          }
        };
        constructor(t) {
          super(t), this.Te = {
            data: [],
            labels: [],
            all: []
          }, this.wn = "day", this._n = void 0, this.kn = {}, this.On = !1, this.Mn = void 0
        }
        init(t, e = {}) {
          const i = t.time || (t.time = {}),
            n = this.yn = new P(t.adapters.date);
          n.init(e), (0, s.ab)(i.displayFormats, n.formats()), this.Mn = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday
          }, super.init(t), this.On = e.normalized
        }
        parse(t, e) {
          return void 0 === t ? null : Ti(this, t)
        }
        beforeLayout() {
          super.beforeLayout(), this.Te = {
            data: [],
            labels: [],
            all: []
          }
        }
        determineDataLimits() {
          const t = this.options,
            e = this.yn,
            i = t.time.unit || "day";
          let {
            min: n,
            max: o,
            minDefined: r,
            maxDefined: h
          } = this.getUserBounds();

          function a(t) {
            !r && !isNaN(t.min) && (n = Math.min(n, t.min)), !h && !isNaN(t.max) && (o = Math.max(o, t.max))
          }(!r || !h) && (a(this.Sn()), ("ticks" !== t.bounds || "labels" !== t.ticks.source) && a(this.getMinMax(!1))), n = (0, s.g)(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i), o = (0, s.g)(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
        }
        Sn() {
          const t = this.getLabelTimestamps();
          let e = 1 / 0,
            i = -1 / 0;
          return t.length && (e = t[0], i = t[t.length - 1]), {
            min: e,
            max: i
          }
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            i = t.ticks,
            n = "labels" === i.source ? this.getLabelTimestamps() : this.Dn();
          "ticks" === t.bounds && n.length && (this.min = this.yi || n[0], this.max = this.xi || n[n.length - 1]);
          const o = this.min,
            r = this.max,
            h = (0, s.aO)(n, o, r);
          return this.wn = e.unit || (i.autoSkip ? Ni(e.minUnit, this.min, this.max, this.An(o)) : function(t, e, i, s, n) {
            for (let o = ji.length - 1; o >= ji.indexOf(i); o--) {
              const i = ji[o];
              if (Ei[i].common && t.yn.diff(n, s, i) >= e - 1) return i
            }
            return ji[i ? ji.indexOf(i) : 0]
          }(this, h.length, e.minUnit, this.min, this.max)), this._n = i.major.enabled && "year" !== this.wn ? function(t) {
            for (let e = ji.indexOf(t) + 1, i = ji.length; i > e; ++e)
              if (Ei[ji[e]].common) return ji[e]
          }(this.wn) : void 0, this.initOffsets(n), t.reverse && h.reverse(), Ii(this, h, this._n)
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
        }
        initOffsets(t = []) {
          let e, i, n = 0,
            o = 0;
          this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), n = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), o = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
          const r = 3 > t.length ? .5 : .25;
          n = (0, s.S)(n, 0, r), o = (0, s.S)(o, 0, r), this.kn = {
            start: n,
            end: o,
            factor: 1 / (n + 1 + o)
          }
        }
        Dn() {
          const t = this.yn,
            e = this.min,
            i = this.max,
            n = this.options,
            o = n.time,
            r = o.unit || Ni(o.minUnit, e, i, this.An(e)),
            h = (0, s.v)(n.ticks.stepSize, 1),
            a = "week" === r && o.isoWeekday,
            c = (0, s.x)(a) || !0 === a,
            l = {};
          let u, f, d = e;
          if (c && (d = +t.startOf(d, "isoWeek", a)), d = +t.startOf(d, c ? "day" : r), t.diff(i, e, r) > 1e5 * h) throw Error(e + " and " + i + " are too far apart with stepSize of " + h + " " + r);
          const p = "data" === n.ticks.source && this.getDataTimestamps();
          for (u = d, f = 0; i > u; u = +t.add(u, h, r), f++) Fi(l, u, p);
          return (u === i || "ticks" === n.bounds || 1 === f) && Fi(l, u, p), Object.keys(l).sort(Pi).map(t => +t)
        }
        getLabelForValue(t) {
          const e = this.yn,
            i = this.options.time;
          return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
        }
        format(t, e) {
          const i = this.options.time.displayFormats,
            s = this.wn,
            n = e || i[s];
          return this.yn.format(t, n)
        }
        Cn(t, e, i, n) {
          const o = this.options,
            r = o.ticks.callback;
          if (r) return (0, s.Q)(r, [t, e, i], this);
          const h = o.time.displayFormats,
            a = this.wn,
            c = this._n,
            l = a && h[a],
            u = c && h[c],
            f = i[e],
            d = c && u && f && f.major;
          return this.yn.format(t, n || (d ? u : l))
        }
        generateTickLabels(t) {
          let e, i, s;
          for (e = 0, i = t.length; i > e; ++e) s = t[e], s.label = this.Cn(s.value, e, t)
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
          const e = this.kn,
            i = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + i) * e.factor)
        }
        getValueForPixel(t) {
          const e = this.kn,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + i * (this.max - this.min)
        }
        Ln(t) {
          const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = (0, s.t)(this.isHorizontal() ? e.maxRotation : e.minRotation),
            o = Math.cos(n),
            r = Math.sin(n),
            h = this.Ni(0).size;
          return {
            w: i * o + h * r,
            h: i * r + h * o
          }
        }
        An(t) {
          const e = this.options.time,
            i = e.displayFormats,
            s = i[e.unit] || i.millisecond,
            n = this.Cn(t, 0, Ii(this, [t], this._n), s),
            o = this.Ln(n),
            r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
          return r > 0 ? r : 1
        }
        getDataTimestamps() {
          let t, e, i = this.Te.data || [];
          if (i.length) return i;
          const s = this.getMatchingVisibleMetas();
          if (this.On && s.length) return this.Te.data = s[0].controller.getAllParsedValues(this);
          for (t = 0, e = s.length; e > t; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
          return this.Te.data = this.normalize(i)
        }
        getLabelTimestamps() {
          const t = this.Te.labels || [];
          let e, i;
          if (t.length) return t;
          const s = this.getLabels();
          for (e = 0, i = s.length; i > e; ++e) t.push(Ti(this, s[e]));
          return this.Te.labels = this.On ? t : this.normalize(t)
        }
        normalize(t) {
          return (0, s._)(t.sort(Pi))
        }
      }

      function Wi(t, e, i) {
        let n, o, r, h, a = 0,
          c = t.length - 1;
        i ? (e >= t[a].pos && e <= t[c].pos && ({
          lo: a,
          hi: c
        } = (0, s.B)(t, "pos", e)), ({
          pos: n,
          time: r
        } = t[a]), ({
          pos: o,
          time: h
        } = t[c])) : (e >= t[a].time && e <= t[c].time && ({
          lo: a,
          hi: c
        } = (0, s.B)(t, "time", e)), ({
          time: n,
          pos: r
        } = t[a]), ({
          time: o,
          pos: h
        } = t[c]));
        const l = o - n;
        return l ? r + (h - r) * (e - n) / l : r
      }
      Object.freeze({
        __proto__: null,
        CategoryScale: pi,
        LinearScale: mi,
        LogarithmicScale: wi,
        RadialLinearScale: Ri,
        TimeScale: zi,
        TimeSeriesScale: class extends zi {
          static id = "timeseries";
          static defaults = zi.defaults;
          constructor(t) {
            super(t), this.Rn = [], this.En = void 0, this.jn = void 0
          }
          initOffsets() {
            const t = this.Pn(),
              e = this.Rn = this.buildLookupTable(t);
            this.En = Wi(e, this.min), this.jn = Wi(e, this.max) - this.En, super.initOffsets(t)
          }
          buildLookupTable(t) {
            const {
              min: e,
              max: i
            } = this, s = [], n = [];
            let o, r, h, a, c;
            for (o = 0, r = t.length; r > o; ++o) a = t[o], a >= e && i >= a && s.push(a);
            if (2 > s.length) return [{
              time: e,
              pos: 0
            }, {
              time: i,
              pos: 1
            }];
            for (o = 0, r = s.length; r > o; ++o) c = s[o + 1], h = s[o - 1], a = s[o], Math.round((c + h) / 2) !== a && n.push({
              time: a,
              pos: o / (r - 1)
            });
            return n
          }
          Dn() {
            const t = this.min,
              e = this.max;
            let i = super.getDataTimestamps();
            return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(e) || 1 === i.length) && i.push(e), i.sort((t, e) => t - e)
          }
          Pn() {
            let t = this.Te.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this.Te.all = t, t
          }
          getDecimalForValue(t) {
            return (Wi(this.Rn, t) - this.En) / this.jn
          }
          getValueForPixel(t) {
            const e = this.kn,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return Wi(this.Rn, i * this.jn + this.En, !0)
          }
        }
      })
    }
  }
]);
