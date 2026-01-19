try {
  let t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    i = (new t.Error).stack;
  i && (t._ = t._ || {}, t._[i] = "5ee5645f-6e99-43be-a8e0-f80e8250e299", t.tt = "sentry-dbid-5ee5645f-6e99-43be-a8e0-f80e8250e299")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4731], {
    12020: (t, i, e) => {
      function s(t) {
        return t + .5 | 0
      }
      e.d(i, {
        $: () => vi,
        A: () => Nt,
        B: () => Et,
        C: () => mi,
        D: () => kt,
        E: () => Ni,
        F: () => Y,
        G: () => de,
        H: () => ct,
        I: () => oe,
        J: () => ge,
        K: () => be,
        L: () => Bt,
        M: () => ne,
        N: () => gt,
        O: () => z,
        P: () => nt,
        Q: () => H,
        R: () => Fi,
        S: () => Ct,
        T: () => ot,
        U: () => Mt,
        V: () => ui,
        W: () => Lt,
        X: () => di,
        Y: () => xi,
        Z: () => Oi,
        et: () => zt,
        a: () => Ti,
        a0: () => Pi,
        a1: () => Ht,
        a2: () => Yt,
        a3: () => ri,
        a4: () => K,
        a5: () => J,
        a6: () => hi,
        a7: () => it,
        a8: () => Wi,
        a9: () => zi,
        aA: () => ke,
        aB: () => $t,
        aC: () => Oe,
        aD: () => gi,
        aE: () => Ot,
        aF: () => E,
        aG: () => vt,
        aH: () => bt,
        aI: () => xt,
        aJ: () => pt,
        aK: () => wt,
        aL: () => oi,
        aM: () => ft,
        aN: () => fi,
        aO: () => Pt,
        aP: () => jt,
        aa: () => Bi,
        ab: () => Z,
        ac: () => N,
        ad: () => Vt,
        ae: () => pe,
        af: () => pi,
        ag: () => et,
        ah: () => $,
        ai: () => st,
        aj: () => Rt,
        ak: () => Ri,
        al: () => se,
        am: () => Le,
        an: () => Ce,
        ao: () => xe,
        ap: () => ve,
        aq: () => me,
        ar: () => yi,
        as: () => Mi,
        at: () => bi,
        au: () => Si,
        av: () => ji,
        aw: () => Ei,
        ax: () => Ae,
        ay: () => Dt,
        az: () => we,
        b: () => T,
        b3: () => at,
        b4: () => lt,
        b5: () => ut,
        c: () => Gt,
        d: () => li,
        e: () => qt,
        f: () => G,
        g: () => I,
        h: () => tt,
        i: () => F,
        j: () => Ii,
        k: () => P,
        l: () => Ft,
        m: () => B,
        n: () => V,
        o: () => si,
        p: () => At,
        q: () => _t,
        r: () => Wt,
        s: () => dt,
        t: () => yt,
        u: () => It,
        v: () => W,
        w: () => Xt,
        x: () => mt,
        y: () => Qi,
        z: () => ue
      });
      const n = (t, i, e) => Math.max(Math.min(t, e), i);

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

      function b(t, i, e) {
        const s = i * Math.min(e, 1 - e),
          n = (i, n = (i + t / 30) % 12) => e - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)]
      }

      function g(t, i, e) {
        const s = (s, n = (s + t / 60) % 6) => e - e * i * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)]
      }

      function m(t, i, e) {
        const s = b(t, 1, .5);
        let n;
        for (i + e > 1 && (n = 1 / (i + e), i *= n, e *= n), n = 0; 3 > n; n++) s[n] *= 1 - i - e, s[n] += i;
        return s
      }

      function x(t) {
        const i = t.r / 255,
          e = t.g / 255,
          s = t.b / 255,
          n = Math.max(i, e, s),
          o = Math.min(i, e, s),
          r = (n + o) / 2;
        let h, a, c;
        return n !== o && (c = n - o, a = r > .5 ? c / (2 - n - o) : c / (n + o), h = function(t, i, e, s, n) {
          return t === n ? (i - e) / s + (e > i ? 6 : 0) : i === n ? (e - t) / s + 2 : (t - i) / s + 4
        }(i, e, s, c, n), h = 60 * h + .5), [0 | h, a || 0, r]
      }

      function v(t, i, e, s) {
        return (Array.isArray(i) ? t(i[0], i[1], i[2]) : t(i, e, s)).map(r)
      }

      function y(t, i, e) {
        return v(b, t, i, e)
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
        k = {
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
      let O;
      const S = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        D = t => t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t,
        A = t => t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92;

      function C(t, i, e) {
        if (t) {
          let s = x(t);
          s[i] = Math.max(0, Math.min(s[i] + s[i] * e, 0 === i ? 360 : 1)), s = y(s), t.r = s[0], t.g = s[1], t.b = s[2]
        }
      }

      function L(t, i) {
        return t && Object.assign(i || {}, t)
      }

      function R(t) {
        var i = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
        return Array.isArray(t) ? t.length >= 3 && (i = {
          r: t[0],
          g: t[1],
          b: t[2],
          a: 255
        }, t.length > 3 && (i.a = r(t[3]))) : (i = L(t, {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        })).a = r(i.a), i
      }
      class j {
        constructor(t) {
          if (t instanceof j) return t;
          const i = typeof t;
          let e;
          var s;
          "object" === i ? e = R(t) : "string" === i && (e = function(t) {
            var i, e = t.length;
            return "#" === t[0] && (4 === e || 5 === e ? i = {
              r: 255 & 17 * c[t[1]],
              g: 255 & 17 * c[t[2]],
              b: 255 & 17 * c[t[3]],
              a: 5 === e ? 17 * c[t[4]] : 255
            } : (7 === e || 9 === e) && (i = {
              r: c[t[1]] << 4 | c[t[2]],
              g: c[t[3]] << 4 | c[t[4]],
              b: c[t[5]] << 4 | c[t[6]],
              a: 9 === e ? c[t[7]] << 4 | c[t[8]] : 255
            })), i
          }(t) || function(t) {
            O || (O = function() {
              const t = {},
                i = Object.keys(k),
                e = Object.keys(w);
              let s, n, o, r, h;
              for (s = 0; s < i.length; s++) {
                for (r = h = i[s], n = 0; n < e.length; n++) o = e[n], h = h.replace(o, w[o]);
                o = parseInt(k[r], 16), t[h] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
              }
              return t
            }(), O.transparent = [0, 0, 0, 0]);
            const i = O[t.toLowerCase()];
            return i && {
              r: i[0],
              g: i[1],
              b: i[2],
              a: 4 === i.length ? i[3] : 255
            }
          }(t) || ("r" === (s = t).charAt(0) ? function(t) {
            const i = S.exec(t);
            let e, s, r, h = 255;
            if (i) {
              if (i[7] !== e) {
                const t = +i[7];
                h = i[8] ? o(t) : n(255 * t, 0, 255)
              }
              return e = +i[1], s = +i[3], r = +i[5], e = 255 & (i[2] ? o(e) : n(e, 0, 255)), s = 255 & (i[4] ? o(s) : n(s, 0, 255)), r = 255 & (i[6] ? o(r) : n(r, 0, 255)), {
                r: e,
                g: s,
                b: r,
                a: h
              }
            }
          }(s) : function(t) {
            const i = p.exec(t);
            let e, s = 255;
            if (!i) return;
            i[5] !== e && (s = i[6] ? o(+i[5]) : r(+i[5]));
            const n = M(+i[2]),
              h = +i[3] / 100,
              a = +i[4] / 100;
            return e = "hwb" === i[1] ? function(t, i, e) {
              return v(m, t, i, e)
            }(n, h, a) : "hsv" === i[1] ? function(t, i, e) {
              return v(g, t, i, e)
            }(n, h, a) : y(n, h, a), {
              r: e[0],
              g: e[1],
              b: e[2],
              a: s
            }
          }(s))), this.it = e, this.st = !!e
        }
        get valid() {
          return this.st
        }
        get rgb() {
          var t = L(this.it);
          return t && (t.a = h(t.a)), t
        }
        set rgb(t) {
          this.it = R(t)
        }
        rgbString() {
          return this.st ? (t = this.it) && (255 > t.a ? `rgba(${t.r}, ${t.g}, ${t.b}, ${h(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
          var t
        }
        hexString() {
          return this.st ? (i = (t => d(t.r) && d(t.g) && d(t.b) && d(t.a))(t = this.it) ? u : f, t ? "#" + i(t.r) + i(t.g) + i(t.b) + ((t, i) => 255 > t ? i(t) : "")(t.a, i) : void 0) : void 0;
          var t, i
        }
        hslString() {
          return this.st ? function(t) {
            if (!t) return;
            const i = x(t),
              e = i[0],
              s = a(i[1]),
              n = a(i[2]);
            return 255 > t.a ? `hsla(${e}, ${s}%, ${n}%, ${h(t.a)})` : `hsl(${e}, ${s}%, ${n}%)`
          }(this.it) : void 0
        }
        mix(t, i) {
          if (t) {
            const e = this.rgb,
              s = t.rgb;
            let n;
            const o = i === n ? .5 : i,
              r = 2 * o - 1,
              h = e.a - s.a,
              a = ((r * h === -1 ? r : (r + h) / (1 + r * h)) + 1) / 2;
            n = 1 - a, e.r = 255 & a * e.r + n * s.r + .5, e.g = 255 & a * e.g + n * s.g + .5, e.b = 255 & a * e.b + n * s.b + .5, e.a = o * e.a + (1 - o) * s.a, this.rgb = e
          }
          return this
        }
        interpolate(t, i) {
          return t && (this.it = function(t, i, e) {
            const s = A(h(t.r)),
              n = A(h(t.g)),
              o = A(h(t.b));
            return {
              r: r(D(s + e * (A(h(i.r)) - s))),
              g: r(D(n + e * (A(h(i.g)) - n))),
              b: r(D(o + e * (A(h(i.b)) - o))),
              a: t.a + e * (i.a - t.a)
            }
          }(this.it, t.it, i)), this
        }
        clone() {
          return new j(this.rgb)
        }
        alpha(t) {
          return this.it.a = r(t), this
        }
        clearer(t) {
          return this.it.a *= 1 - t, this
        }
        greyscale() {
          const t = this.it,
            i = s(.3 * t.r + .59 * t.g + .11 * t.b);
          return t.r = t.g = t.b = i, this
        }
        opaquer(t) {
          return this.it.a *= 1 + t, this
        }
        negate() {
          const t = this.it;
          return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
          return C(this.it, 2, t), this
        }
        darken(t) {
          return C(this.it, 2, -t), this
        }
        saturate(t) {
          return C(this.it, 1, t), this
        }
        desaturate(t) {
          return C(this.it, 1, -t), this
        }
        rotate(t) {
          return function(t, i) {
            var e = x(t);
            e[0] = M(e[0] + i), e = y(e), t.r = e[0], t.g = e[1], t.b = e[2]
          }(this.it, t), this
        }
      }

      function E() {}
      const N = (() => {
        let t = 0;
        return () => t++
      })();

      function P(t) {
        return null === t || typeof t > "u"
      }

      function T(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const i = {}.toString.call(t);
        return "[object" === i.slice(0, 7) && "Array]" === i.slice(-6)
      }

      function F(t) {
        return null !== t && "[object Object]" === {}.toString.call(t)
      }

      function I(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
      }

      function z(t, i) {
        return I(t) ? t : i
      }

      function W(t, i) {
        return typeof t > "u" ? i : t
      }
      const B = (t, i) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / i,
        V = (t, i) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * i : +t;

      function H(t, i, e) {
        if (t && "function" == typeof t.call) return t.apply(e, i)
      }

      function Y(t, i, e, s) {
        let n, o, r;
        if (T(t))
          if (o = t.length, s)
            for (n = o - 1; n >= 0; n--) i.call(e, t[n], n);
          else
            for (n = 0; o > n; n++) i.call(e, t[n], n);
        else if (F(t))
          for (r = Object.keys(t), o = r.length, n = 0; o > n; n++) i.call(e, t[r[n]], r[n])
      }

      function $(t, i) {
        let e, s, n, o;
        if (!t || !i || t.length !== i.length) return !1;
        for (e = 0, s = t.length; s > e; ++e)
          if (n = t[e], o = i[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0
      }

      function _(t) {
        if (T(t)) return t.map(_);
        if (F(t)) {
          const i = Object.create(null),
            e = Object.keys(t),
            s = e.length;
          let n = 0;
          for (; s > n; ++n) i[e[n]] = _(t[e[n]]);
          return i
        }
        return t
      }

      function X(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
      }

      function U(t, i, e, s) {
        if (!X(t)) return;
        const n = i[t],
          o = e[t];
        F(n) && F(o) ? K(n, o, s) : i[t] = _(o)
      }

      function K(t, i, e) {
        const s = T(i) ? i : [i],
          n = s.length;
        if (!F(t)) return t;
        const o = (e = e || {}).merger || U;
        let r;
        for (let i = 0; n > i; ++i) {
          if (r = s[i], !F(r)) continue;
          const n = Object.keys(r);
          for (let i = 0, s = n.length; s > i; ++i) o(n[i], t, r, e)
        }
        return t
      }

      function Z(t, i) {
        return K(t, i, {
          merger: q
        })
      }

      function q(t, i, e) {
        if (!X(t)) return;
        const s = i[t],
          n = e[t];
        F(s) && F(n) ? Z(s, n) : {}.hasOwnProperty.call(i, t) || (i[t] = _(n))
      }
      const Q = {
        "": t => t,
        x: t => t.x,
        y: t => t.y
      };

      function G(t, i) {
        return (Q[i] || (Q[i] = function(t) {
          const i = function(t) {
            const i = t.split("."),
              e = [];
            let s = "";
            for (const t of i) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
            return e
          }(t);
          return t => {
            for (const e of i) {
              if ("" === e) break;
              t = t && t[e]
            }
            return t
          }
        }(i)))(t)
      }

      function J(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }
      const tt = t => "u" > typeof t,
        it = t => "function" == typeof t,
        et = (t, i) => {
          if (t.size !== i.size) return !1;
          for (const e of t)
            if (!i.has(e)) return !1;
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

      function pt(t, i, e) {
        return e > Math.abs(t - i)
      }

      function bt(t) {
        const i = Math.round(t);
        t = pt(t, i, t / 1e3) ? i : t;
        const e = Math.pow(10, Math.floor(ft(t))),
          s = t / e;
        return (s > 1 ? s > 2 ? s > 5 ? 10 : 5 : 2 : 1) * e
      }

      function gt(t) {
        const i = [],
          e = Math.sqrt(t);
        let s;
        for (s = 1; e > s; s++) t % s === 0 && (i.push(s), i.push(t / s));
        return e === (0 | e) && i.push(e), i.sort((t, i) => t - i).pop(), i
      }

      function mt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
      }

      function xt(t, i) {
        const e = Math.round(t);
        return t >= e - i && e + i >= t
      }

      function vt(t, i, e) {
        let s, n, o;
        for (s = 0, n = t.length; n > s; s++) o = t[s][e], isNaN(o) || (i.min = Math.min(i.min, o), i.max = Math.max(i.max, o))
      }

      function yt(t) {
        return t * (nt / 180)
      }

      function Mt(t) {
        return t * (180 / nt)
      }

      function wt(t) {
        if (!I(t)) return;
        let i = 1,
          e = 0;
        for (; Math.round(t * i) / i !== t;) i *= 10, e++;
        return e
      }

      function kt(t, i) {
        const e = i.x - t.x,
          s = i.y - t.y,
          n = Math.sqrt(e * e + s * s);
        let o = Math.atan2(s, e);
        return -.5 * nt > o && (o += ot), {
          angle: o,
          distance: n
        }
      }

      function Ot(t, i) {
        return Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2))
      }

      function St(t, i) {
        return (t - i + rt) % ot - nt
      }

      function Dt(t) {
        return (t % ot + ot) % ot
      }

      function At(t, i, e, s) {
        const n = Dt(t),
          o = Dt(i),
          r = Dt(e),
          h = Dt(o - n),
          a = Dt(r - n),
          c = Dt(n - o),
          l = Dt(n - r);
        return n === o || n === r || s && o === r || h > a && l > c
      }

      function Ct(t, i, e) {
        return Math.max(i, Math.min(e, t))
      }

      function Lt(t) {
        return Ct(t, -32768, 32767)
      }

      function Rt(t, i, e, s = 1e-6) {
        return t >= Math.min(i, e) - s && Math.max(i, e) + s >= t
      }

      function jt(t, i, e) {
        e = e || (e => t[e] < i);
        let s, n = t.length - 1,
          o = 0;
        for (; n - o > 1;) s = o + n >> 1, e(s) ? o = s : n = s;
        return {
          lo: o,
          hi: n
        }
      }
      const Et = (t, i, e, s) => jt(t, e, s ? s => {
          const n = t[s][i];
          return e > n || n === e && t[s + 1][i] === e
        } : s => t[s][i] < e),
        Nt = (t, i, e) => jt(t, e, s => t[s][i] >= e);

      function Pt(t, i, e) {
        let s = 0,
          n = t.length;
        for (; n > s && t[s] < i;) s++;
        for (; n > s && t[n - 1] > e;) n--;
        return s > 0 || n < t.length ? t.slice(s, n) : t
      }
      const Tt = ["push", "pop", "shift", "splice", "unshift"];

      function Ft(t, i) {
        t.nt ? t.nt.listeners.push(i) : (Object.defineProperty(t, "nt", {
          configurable: !0,
          enumerable: !1,
          value: {
            listeners: [i]
          }
        }), Tt.forEach(i => {
          const e = "_onData" + J(i),
            s = t[i];
          Object.defineProperty(t, i, {
            configurable: !0,
            enumerable: !1,
            value(...i) {
              const n = s.apply(this, i);
              return t.nt.listeners.forEach(t => {
                "function" == typeof t[e] && t[e](...i)
              }), n
            }
          })
        }))
      }

      function It(t, i) {
        const e = t.nt;
        if (!e) return;
        const s = e.listeners,
          n = s.indexOf(i); - 1 !== n && s.splice(n, 1), 0 >= s.length && (Tt.forEach(i => {
          delete t[i]
        }), delete t.nt)
      }

      function zt(t) {
        const i = new Set(t);
        return i.size === t.length ? t : Array.from(i)
      }
      const Wt = typeof window > "u" ? function(t) {
        return t()
      } : window.requestAnimationFrame;

      function Bt(t, i) {
        let e = [],
          s = !1;
        return function(...n) {
          e = n, s || (s = !0, Wt.call(window, () => {
            s = !1, t.apply(i, e)
          }))
        }
      }

      function Vt(t, i) {
        let e;
        return function(...s) {
          return i ? (clearTimeout(e), e = setTimeout(t, i, s)) : t.apply(this, s), i
        }
      }
      const Ht = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        Yt = (t, i, e) => "start" === t ? i : "end" === t ? e : (i + e) / 2,
        $t = (t, i, e, s) => t === (s ? "left" : "right") ? e : "center" === t ? (i + e) / 2 : i;

      function _t(t, i, e) {
        const s = i.length;
        let n = 0,
          o = s;
        if (t.ot) {
          const {
            iScale: r,
            rt: h
          } = t, a = r.axis, {
            min: c,
            max: l,
            minDefined: u,
            maxDefined: f
          } = r.getUserBounds();
          u && (n = Ct(Math.min(Et(h, a, c).lo, e ? s : Et(i, a, r.getPixelForValue(c)).lo), 0, s - 1)), o = f ? Ct(Math.max(Et(h, r.axis, l, !0).hi + 1, e ? 0 : Et(i, a, r.getPixelForValue(l), !0).hi + 1), n, s) - n : s - n
        }
        return {
          start: n,
          count: o
        }
      }

      function Xt(t) {
        const {
          xScale: i,
          yScale: e,
          ht: s
        } = t, n = {
          xmin: i.min,
          xmax: i.max,
          ymin: e.min,
          ymax: e.max
        };
        if (!s) return t.ht = n, !0;
        const o = s.xmin !== i.min || s.xmax !== i.max || s.ymin !== e.min || s.ymax !== e.max;
        return Object.assign(s, n), o
      }
      const Ut = t => 0 === t || 1 === t,
        Kt = (t, i, e) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * ot / e),
        Zt = (t, i, e) => Math.pow(2, -10 * t) * Math.sin((t - i) * ot / e) + 1,
        qt = {
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
            let i = 1.70158;
            return 1 > (t /= .5) ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2)
          },
          easeInBounce: t => 1 - qt.easeOutBounce(1 - t),
          easeOutBounce: t => 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
          easeInOutBounce: t => .5 > t ? .5 * qt.easeInBounce(2 * t) : .5 * qt.easeOutBounce(2 * t - 1) + .5
        };

      function Qt(t) {
        if (t && "object" == typeof t) {
          const i = t.toString();
          return "[object CanvasPattern]" === i || "[object CanvasGradient]" === i
        }
        return !1
      }

      function Gt(t) {
        return Qt(t) ? t : new j(t)
      }

      function Jt(t) {
        return Qt(t) ? t : new j(t).saturate(.5).darken(.1).hexString()
      }
      const ti = ["x", "y", "borderWidth", "radius", "tension"],
        ii = ["color", "borderColor", "backgroundColor"],
        ei = new Map;

      function si(t, i, e) {
        return function(t, i) {
          const e = t + JSON.stringify(i = i || {});
          let s = ei.get(e);
          return s || (s = new Intl.NumberFormat(t, i), ei.set(e, s)), s
        }(i, e).format(t)
      }
      const ni = {
        values: t => T(t) ? t : "" + t,
        numeric(t, i, e) {
          if (0 === t) return "0";
          const s = this.chart.options.locale;
          let n, o = t;
          if (e.length > 1) {
            const i = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (1e-4 > i || i > 1e15) && (n = "scientific"), o = function(t, i) {
              let e = i.length > 3 ? i[2].value - i[1].value : i[1].value - i[0].value;
              return Math.abs(e) >= 1 && t !== Math.floor(t) && (e = t - Math.floor(t)), e
            }(t, e)
          }
          const r = ft(Math.abs(o)),
            h = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            a = {
              notation: n,
              minimumFractionDigits: h,
              maximumFractionDigits: h
            };
          return Object.assign(a, this.options.ticks.format), si(t, s, a)
        },
        logarithmic(t, i, e) {
          if (0 === t) return "0";
          const s = e[i].significand || t / Math.pow(10, Math.floor(ft(t)));
          return [1, 2, 3, 5, 10, 15].includes(s) || i > .8 * e.length ? ni.numeric.call(this, t, i, e) : ""
        }
      };
      var oi = {
        formatters: ni
      };
      const ri = Object.create(null),
        hi = Object.create(null);

      function ai(t, i) {
        if (!i) return t;
        const e = i.split(".");
        for (let i = 0, s = e.length; s > i; ++i) {
          const s = e[i];
          t = t[s] || (t[s] = Object.create(null))
        }
        return t
      }

      function ci(t, i, e) {
        return "string" == typeof i ? K(ai(t, i), e) : K(ai(t, ""), i)
      }
      var li = new class {
        constructor(t, i) {
          this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
          }, this.hover = {}, this.hoverBackgroundColor = (t, i) => Jt(i.backgroundColor), this.hoverBorderColor = (t, i) => Jt(i.borderColor), this.hoverColor = (t, i) => Jt(i.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
          }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(i)
        }
        set(t, i) {
          return ci(this, t, i)
        }
        get(t) {
          return ai(this, t)
        }
        describe(t, i) {
          return ci(hi, t, i)
        }
        override(t, i) {
          return ci(ri, t, i)
        }
        route(t, i, e, s) {
          const n = ai(this, t),
            o = ai(this, e),
            r = "_" + i;
          Object.defineProperties(n, {
            [r]: {
              value: n[i],
              writable: !0
            },
            [i]: {
              enumerable: !0,
              get() {
                const t = this[r],
                  i = o[s];
                return F(t) ? Object.assign({}, i, t) : W(t, i)
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
        ct: t => !t.startsWith("on"),
        lt: t => "events" !== t,
        hover: {
          ut: "interaction"
        },
        interaction: {
          ct: !1,
          lt: !1
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
          ut: !1,
          lt: !1,
          ct: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), t.set("animations", {
          colors: {
            type: "color",
            properties: ii
          },
          numbers: {
            type: "number",
            properties: ti
          }
        }), t.describe("animations", {
          ut: "animation"
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
            tickWidth: (t, i) => i.lineWidth,
            tickColor: (t, i) => i.color,
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
            callback: oi.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
          }
        }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
          ut: !1,
          ct: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
          lt: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
        }), t.describe("scales", {
          ut: "scale"
        }), t.describe("scale.ticks", {
          ct: t => "backdropPadding" !== t && "callback" !== t,
          lt: t => "backdropPadding" !== t
        })
      }]);

      function ui(t, i, e, s, n) {
        let o = i[n];
        return o || (o = i[n] = t.measureText(n).width, e.push(n)), o > s && (s = o), s
      }

      function fi(t, i, e, s) {
        let n = (s = s || {}).data = s.data || {},
          o = s.garbageCollect = s.garbageCollect || [];
        s.font !== i && (n = s.data = {}, o = s.garbageCollect = [], s.font = i), t.save(), t.font = i;
        let r = 0;
        const h = e.length;
        let a, c, l, u, f;
        for (a = 0; h > a; a++)
          if (u = e[a], null == u || T(u)) {
            if (T(u))
              for (c = 0, l = u.length; l > c; c++) f = u[c], null != f && !T(f) && (r = ui(t, n, o, r, f))
          } else r = ui(t, n, o, r, u);
        t.restore();
        const d = o.length / 2;
        if (d > e.length) {
          for (a = 0; d > a; a++) delete n[o[a]];
          o.splice(0, d)
        }
        return r
      }

      function di(t, i, e) {
        const s = t.currentDevicePixelRatio,
          n = 0 !== e ? Math.max(e / 2, .5) : 0;
        return Math.round((i - n) * s) / s + n
      }

      function pi(t, i) {
        (i = i || t.getContext("2d")).save(), i.resetTransform(), i.clearRect(0, 0, t.width, t.height), i.restore()
      }

      function bi(t, i, e, s) {
        gi(t, i, e, s, null)
      }

      function gi(t, i, e, s, n) {
        let o, r, h, a, c, l, u, f;
        const d = i.pointStyle,
          p = i.rotation,
          b = i.radius;
        let g = (p || 0) * at;
        if (d && "object" == typeof d && (o = d.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(e, s), t.rotate(g), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), void t.restore();
        if (!isNaN(b) && b > 0) {
          switch (t.beginPath(), d) {
            default:
              n ? t.ellipse(e, s, n / 2, b, 0, 0, ot) : t.arc(e, s, b, 0, ot), t.closePath();
              break;
            case "triangle":
              l = n ? n / 2 : b, t.moveTo(e + Math.sin(g) * l, s - Math.cos(g) * b), g += ut, t.lineTo(e + Math.sin(g) * l, s - Math.cos(g) * b), g += ut, t.lineTo(e + Math.sin(g) * l, s - Math.cos(g) * b), t.closePath();
              break;
            case "rectRounded":
              c = .516 * b, a = b - c, r = Math.cos(g + lt) * a, u = Math.cos(g + lt) * (n ? n / 2 - c : a), h = Math.sin(g + lt) * a, f = Math.sin(g + lt) * (n ? n / 2 - c : a), t.arc(e - u, s - h, c, g - nt, g - ct), t.arc(e + f, s - r, c, g - ct, g), t.arc(e + u, s + h, c, g, g + ct), t.arc(e - f, s + r, c, g + ct, g + nt), t.closePath();
              break;
            case "rect":
              if (!p) {
                a = Math.SQRT1_2 * b, l = n ? n / 2 : a, t.rect(e - l, s - a, 2 * l, 2 * a);
                break
              }
              g += lt;
            case "rectRot":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(e - u, s - h), t.lineTo(e + f, s - r), t.lineTo(e + u, s + h), t.lineTo(e - f, s + r), t.closePath();
              break;
            case "crossRot":
              g += lt;
            case "cross":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(e - u, s - h), t.lineTo(e + u, s + h), t.moveTo(e + f, s - r), t.lineTo(e - f, s + r);
              break;
            case "star":
              u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(e - u, s - h), t.lineTo(e + u, s + h), t.moveTo(e + f, s - r), t.lineTo(e - f, s + r), g += lt, u = Math.cos(g) * (n ? n / 2 : b), r = Math.cos(g) * b, h = Math.sin(g) * b, f = Math.sin(g) * (n ? n / 2 : b), t.moveTo(e - u, s - h), t.lineTo(e + u, s + h), t.moveTo(e + f, s - r), t.lineTo(e - f, s + r);
              break;
            case "line":
              r = n ? n / 2 : Math.cos(g) * b, h = Math.sin(g) * b, t.moveTo(e - r, s - h), t.lineTo(e + r, s + h);
              break;
            case "dash":
              t.moveTo(e, s), t.lineTo(e + Math.cos(g) * (n ? n / 2 : b), s + Math.sin(g) * b);
              break;
            case !1:
              t.closePath()
          }
          t.fill(), i.borderWidth > 0 && t.stroke()
        }
      }

      function mi(t, i, e) {
        return e = e || .5, !i || t && t.x > i.left - e && t.x < i.right + e && t.y > i.top - e && t.y < i.bottom + e
      }

      function xi(t, i) {
        t.save(), t.beginPath(), t.rect(i.left, i.top, i.right - i.left, i.bottom - i.top), t.clip()
      }

      function vi(t) {
        t.restore()
      }

      function yi(t, i, e, s, n) {
        if (!i) return t.lineTo(e.x, e.y);
        if ("middle" === n) {
          const s = (i.x + e.x) / 2;
          t.lineTo(s, i.y), t.lineTo(s, e.y)
        } else "after" === n != !!s ? t.lineTo(i.x, e.y) : t.lineTo(e.x, i.y);
        t.lineTo(e.x, e.y)
      }

      function Mi(t, i, e, s) {
        if (!i) return t.lineTo(e.x, e.y);
        t.bezierCurveTo(s ? i.cp1x : i.cp2x, s ? i.cp1y : i.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y)
      }

      function wi(t, i, e, s, n) {
        if (n.strikethrough || n.underline) {
          const o = t.measureText(s),
            r = i - o.actualBoundingBoxLeft,
            h = i + o.actualBoundingBoxRight,
            a = e - o.actualBoundingBoxAscent,
            c = e + o.actualBoundingBoxDescent,
            l = n.strikethrough ? (a + c) / 2 : c;
          t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(r, l), t.lineTo(h, l), t.stroke()
        }
      }

      function ki(t, i) {
        const e = t.fillStyle;
        t.fillStyle = i.color, t.fillRect(i.left, i.top, i.width, i.height), t.fillStyle = e
      }

      function Oi(t, i, e, s, n, o = {}) {
        const r = T(i) ? i : [i],
          h = o.strokeWidth > 0 && "" !== o.strokeColor;
        let a, c;
        for (t.save(), t.font = n.string, function(t, i) {
            i.translation && t.translate(i.translation[0], i.translation[1]), P(i.rotation) || t.rotate(i.rotation), i.color && (t.fillStyle = i.color), i.textAlign && (t.textAlign = i.textAlign), i.textBaseline && (t.textBaseline = i.textBaseline)
          }(t, o), a = 0; a < r.length; ++a) c = r[a], o.backdrop && ki(t, o.backdrop), h && (o.strokeColor && (t.strokeStyle = o.strokeColor), P(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(c, e, s, o.maxWidth)), t.fillText(c, e, s, o.maxWidth), wi(t, e, s, c, o), s += +n.lineHeight;
        t.restore()
      }

      function Si(t, i) {
        const {
          x: e,
          y: s,
          w: n,
          h: o,
          radius: r
        } = i;
        t.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * nt, nt, !0), t.lineTo(e, s + o - r.bottomLeft), t.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, nt, ct, !0), t.lineTo(e + n - r.bottomRight, s + o), t.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ct, 0, !0), t.lineTo(e + n, s + r.topRight), t.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -ct, !0), t.lineTo(e + r.topLeft, s)
      }
      const Di = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Ai = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

      function Ci(t, i) {
        const e = ("" + t).match(Di);
        if (!e || "normal" === e[1]) return 1.2 * i;
        switch (t = +e[2], e[3]) {
          case "px":
            return t;
          case "%":
            t /= 100
        }
        return i * t
      }
      const Li = t => +t || 0;

      function Ri(t, i) {
        const e = {},
          s = F(i),
          n = s ? Object.keys(i) : i,
          o = F(t) ? s ? e => W(t[e], t[i[e]]) : i => t[i] : () => t;
        for (const t of n) e[t] = Li(o(t));
        return e
      }

      function ji(t) {
        return Ri(t, {
          top: "y",
          right: "x",
          bottom: "y",
          left: "x"
        })
      }

      function Ei(t) {
        return Ri(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
      }

      function Ni(t) {
        const i = ji(t);
        return i.width = i.left + i.right, i.height = i.top + i.bottom, i
      }

      function Pi(t, i) {
        t = t || {}, i = i || li.font;
        let e = W(t.size, i.size);
        "string" == typeof e && (e = parseInt(e, 10));
        let s = W(t.style, i.style);
        s && !("" + s).match(Ai) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
        const n = {
          family: W(t.family, i.family),
          lineHeight: Ci(W(t.lineHeight, i.lineHeight), e),
          size: e,
          style: s,
          weight: W(t.weight, i.weight),
          string: ""
        };
        return n.string = function(t) {
          return !t || P(t.size) || P(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(n), n
      }

      function Ti(t, i, e, s) {
        let n, o, r, h = !0;
        for (n = 0, o = t.length; o > n; ++n)
          if (r = t[n], void 0 !== r && (void 0 !== i && "function" == typeof r && (r = r(i), h = !1), void 0 !== e && T(r) && (r = r[e % r.length], h = !1), void 0 !== r)) return s && !h && (s.cacheable = !1), r
      }

      function Fi(t, i, e) {
        const {
          min: s,
          max: n
        } = t, o = V(i, (n - s) / 2), r = (t, i) => e && 0 === t ? 0 : t + i;
        return {
          min: r(s, -Math.abs(o)),
          max: r(n, o)
        }
      }

      function Ii(t, i) {
        return Object.assign(Object.create(t), i)
      }

      function zi(t, i = [""], e, s, n = () => t[0]) {
        const o = e || t;
        typeof s > "u" && (s = Zi("_fallback", t));
        const r = {
          [Symbol.toStringTag]: "Object",
          ft: !0,
          dt: t,
          bt: o,
          ut: s,
          gt: n,
          override: e => zi([e, ...t], i, o, s)
        };
        return new Proxy(r, {
          deleteProperty: (i, e) => (delete i[e], delete i.xt, delete t[0][e], !0),
          get: (e, s) => Yi(e, s, () => function(t, i, e, s) {
            let n;
            for (const o of i)
              if (n = Zi(Vi(o, t), e), "u" > typeof n) return Hi(t, n) ? Ui(e, s, t, n) : n
          }(s, i, t, e)),
          getOwnPropertyDescriptor: (t, i) => Reflect.getOwnPropertyDescriptor(t.dt[0], i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, i) => qi(t).includes(i),
          ownKeys: t => qi(t),
          set(t, i, e) {
            const s = t.vt || (t.vt = n());
            return t[i] = s[i] = e, delete t.xt, !0
          }
        })
      }

      function Wi(t, i, e, s) {
        const n = {
          ft: !1,
          yt: t,
          Mt: i,
          wt: e,
          _t: new Set,
          kt: Bi(t, s),
          setContext: i => Wi(t, i, e, s),
          override: n => Wi(t.override(n), i, e, s)
        };
        return new Proxy(n, {
          deleteProperty: (i, e) => (delete i[e], delete t[e], !0),
          get: (t, i, e) => Yi(t, i, () => function(t, i, e) {
            const {
              yt: s,
              Mt: n,
              wt: o,
              kt: r
            } = t;
            let h = s[i];
            return it(h) && r.isScriptable(i) && (h = function(t, i, e, s) {
              const {
                yt: n,
                Mt: o,
                wt: r,
                _t: h
              } = e;
              if (h.has(t)) throw Error("Recursion detected: " + Array.from(h).join("->") + "->" + t);
              h.add(t);
              let a = i(o, r || s);
              return h.delete(t), Hi(t, a) && (a = Ui(n.dt, n, t, a)), a
            }(i, h, t, e)), T(h) && h.length && (h = function(t, i, e, s) {
              const {
                yt: n,
                Mt: o,
                wt: r,
                kt: h
              } = e;
              if ("u" > typeof o.index && s(t)) return i[o.index % i.length];
              if (F(i[0])) {
                const e = i,
                  s = n.dt.filter(t => t !== e);
                i = [];
                for (const a of e) {
                  const e = Ui(s, n, t, a);
                  i.push(Wi(e, o, r && r[t], h))
                }
              }
              return i
            }(i, h, t, r.isIndexable)), Hi(i, h) && (h = Wi(h, n, o && o[i], r)), h
          }(t, i, e)),
          getOwnPropertyDescriptor: (i, e) => i.kt.allKeys ? Reflect.has(t, e) ? {
            enumerable: !0,
            configurable: !0
          } : void 0 : Reflect.getOwnPropertyDescriptor(t, e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (i, e) => Reflect.has(t, e),
          ownKeys: () => Reflect.ownKeys(t),
          set: (i, e, s) => (t[e] = s, delete i[e], !0)
        })
      }

      function Bi(t, i = {
        scriptable: !0,
        indexable: !0
      }) {
        const {
          ct: e = i.scriptable,
          lt: s = i.indexable,
          Ot: n = i.allKeys
        } = t;
        return {
          allKeys: n,
          scriptable: e,
          indexable: s,
          isScriptable: it(e) ? e : () => e,
          isIndexable: it(s) ? s : () => s
        }
      }
      const Vi = (t, i) => t ? t + J(i) : i,
        Hi = (t, i) => F(i) && "adapters" !== t && (null === Object.getPrototypeOf(i) || i.constructor === Object);

      function Yi(t, i, e) {
        if ({}.hasOwnProperty.call(t, i)) return t[i];
        const s = e();
        return t[i] = s, s
      }

      function $i(t, i, e) {
        return it(t) ? t(i, e) : t
      }
      const _i = (t, i) => !0 === t ? i : "string" == typeof t ? G(i, t) : void 0;

      function Xi(t, i, e, s, n) {
        for (const o of i) {
          const i = _i(e, o);
          if (i) {
            t.add(i);
            const o = $i(i.ut, e, n);
            if ("u" > typeof o && o !== e && o !== s) return o
          } else if (!1 === i && "u" > typeof s && e !== s) return null
        }
        return !1
      }

      function Ui(t, i, e, s) {
        const n = i.bt,
          o = $i(i.ut, e, s),
          r = [...t, ...n],
          h = new Set;
        h.add(s);
        let a = Ki(h, r, e, o || e, s);
        return !(null === a || "u" > typeof o && o !== e && (a = Ki(h, r, o, a, s), null === a)) && zi(Array.from(h), [""], n, o, () => function(t, i, e) {
          const s = t.gt();
          i in s || (s[i] = {});
          const n = s[i];
          return T(n) && F(e) ? e : n || {}
        }(i, e, s))
      }

      function Ki(t, i, e, s, n) {
        for (; e;) e = Xi(t, i, e, s, n);
        return e
      }

      function Zi(t, i) {
        for (const e of i) {
          if (!e) continue;
          const i = e[t];
          if ("u" > typeof i) return i
        }
      }

      function qi(t) {
        let i = t.xt;
        return i || (i = t.xt = function(t) {
          const i = new Set;
          for (const e of t)
            for (const t of Object.keys(e).filter(t => !t.startsWith("_"))) i.add(t);
          return Array.from(i)
        }(t.dt)), i
      }

      function Qi(t, i, e, s) {
        const {
          iScale: n
        } = t, {
          key: o = "r"
        } = this.St, r = Array(s);
        let h, a, c, l;
        for (h = 0, a = s; a > h; ++h) c = h + e, l = i[c], r[h] = {
          r: n.parse(G(l, o), c)
        };
        return r
      }
      const Gi = Number.EPSILON || 1e-14,
        Ji = (t, i) => i < t.length && !t[i].skip && t[i],
        te = t => "x" === t ? "y" : "x";

      function ie(t, i, e, s) {
        const n = t.skip ? i : t,
          o = i,
          r = e.skip ? i : e,
          h = Ot(o, n),
          a = Ot(r, o);
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

      function ee(t, i, e) {
        return Math.max(Math.min(t, e), i)
      }

      function se(t, i, e, s, n) {
        let o, r, h, a;
        if (i.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === i.cubicInterpolationMode) ! function(t, i = "x") {
          const e = te(i),
            s = t.length,
            n = Array(s).fill(0),
            o = Array(s);
          let r, h, a, c = Ji(t, 0);
          for (r = 0; s > r; ++r)
            if (h = a, a = c, c = Ji(t, r + 1), a) {
              if (c) {
                const t = c[i] - a[i];
                n[r] = 0 !== t ? (c[e] - a[e]) / t : 0
              }
              o[r] = h ? c ? dt(n[r - 1]) !== dt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
            }(function(t, i, e) {
              const s = t.length;
              let n, o, r, h, a, c = Ji(t, 0);
              for (let l = 0; s - 1 > l; ++l)
                if (a = c, c = Ji(t, l + 1), a && c) {
                  if (pt(i[l], 0, Gi)) {
                    e[l] = e[l + 1] = 0;
                    continue
                  }
                  n = e[l] / i[l], o = e[l + 1] / i[l], h = Math.pow(n, 2) + Math.pow(o, 2), h > 9 && (r = 3 / Math.sqrt(h), e[l] = n * r * i[l], e[l + 1] = o * r * i[l])
                }
            })(t, n, o),
          function(t, i, e = "x") {
            const s = te(e),
              n = t.length;
            let o, r, h, a = Ji(t, 0);
            for (let c = 0; n > c; ++c) {
              if (r = h, h = a, a = Ji(t, c + 1), !h) continue;
              const n = h[e],
                l = h[s];
              r && (o = (n - r[e]) / 3, h["cp1" + e] = n - o, h["cp1" + s] = l - o * i[c]), a && (o = (a[e] - n) / 3, h["cp2" + e] = n + o, h["cp2" + s] = l + o * i[c])
            }
          }(t, o, i)
        }(t, n);
        else {
          let e = s ? t[t.length - 1] : t[0];
          for (o = 0, r = t.length; r > o; ++o) h = t[o], a = ie(e, h, t[Math.min(o + 1, r - (s ? 0 : 1)) % r], i.tension), h.cp1x = a.previous.x, h.cp1y = a.previous.y, h.cp2x = a.next.x, h.cp2y = a.next.y, e = h
        }
        i.capBezierPoints && function(t, i) {
          let e, s, n, o, r, h = mi(t[0], i);
          for (e = 0, s = t.length; s > e; ++e) r = o, o = h, h = s - 1 > e && mi(t[e + 1], i), o && (n = t[e], r && (n.cp1x = ee(n.cp1x, i.left, i.right), n.cp1y = ee(n.cp1y, i.top, i.bottom)), h && (n.cp2x = ee(n.cp2x, i.left, i.right), n.cp2y = ee(n.cp2y, i.top, i.bottom)))
        }(t, e)
      }

      function ne() {
        return "u" > typeof window && "u" > typeof document
      }

      function oe(t) {
        let i = t.parentNode;
        return i && "[object ShadowRoot]" === i.toString() && (i = i.host), i
      }

      function re(t, i, e) {
        let s;
        return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * i.parentNode[e])) : s = t, s
      }
      const he = t => t.ownerDocument.defaultView.getComputedStyle(t, null),
        ae = ["top", "right", "bottom", "left"];

      function ce(t, i, e) {
        const s = {};
        e = e ? "-" + e : "";
        for (let n = 0; 4 > n; n++) {
          const o = ae[n];
          s[o] = parseFloat(t[i + "-" + o + e]) || 0
        }
        return s.width = s.left + s.right, s.height = s.top + s.bottom, s
      }
      const le = (t, i, e) => !(0 >= t && 0 >= i || e && e.shadowRoot);

      function ue(t, i) {
        if ("native" in t) return t;
        const {
          canvas: e,
          currentDevicePixelRatio: s
        } = i, n = he(e), o = "border-box" === n.boxSizing, r = ce(n, "padding"), h = ce(n, "border", "width"), {
          x: a,
          y: c,
          box: l
        } = function(t, i) {
          const e = t.touches,
            s = e && e.length ? e[0] : t,
            {
              offsetX: n,
              offsetY: o
            } = s;
          let r, h, a = !1;
          if (le(n, o, t.target)) r = n, h = o;
          else {
            const t = i.getBoundingClientRect();
            r = s.clientX - t.left, h = s.clientY - t.top, a = !0
          }
          return {
            x: r,
            y: h,
            box: a
          }
        }(t, e), u = r.left + (l && h.left), f = r.top + (l && h.top);
        let {
          width: d,
          height: p
        } = i;
        return o && (d -= r.width + h.width, p -= r.height + h.height), {
          x: Math.round((a - u) / d * e.width / s),
          y: Math.round((c - f) / p * e.height / s)
        }
      }
      const fe = t => Math.round(10 * t) / 10;

      function de(t, i, e, s) {
        const n = he(t),
          o = ce(n, "margin"),
          r = re(n.maxWidth, t, "clientWidth") || ht,
          h = re(n.maxHeight, t, "clientHeight") || ht,
          a = function(t, i, e) {
            let s, n;
            if (void 0 === i || void 0 === e) {
              const o = oe(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  r = he(o),
                  h = ce(r, "border", "width"),
                  a = ce(r, "padding");
                i = t.width - a.width - h.width, e = t.height - a.height - h.height, s = re(r.maxWidth, o, "clientWidth"), n = re(r.maxHeight, o, "clientHeight")
              } else i = t.clientWidth, e = t.clientHeight
            }
            return {
              width: i,
              height: e,
              maxWidth: s || ht,
              maxHeight: n || ht
            }
          }(t, i, e);
        let {
          width: c,
          height: l
        } = a;
        if ("content-box" === n.boxSizing) {
          const t = ce(n, "border", "width"),
            i = ce(n, "padding");
          c -= i.width + t.width, l -= i.height + t.height
        }
        return c = Math.max(0, c - o.width), l = Math.max(0, s ? c / s : l - o.height), c = fe(Math.min(c, r, a.maxWidth)), l = fe(Math.min(l, h, a.maxHeight)), c && !l && (l = fe(c / 2)), (void 0 !== i || void 0 !== e) && s && a.height && l > a.height && (l = a.height, c = fe(Math.floor(l * s))), {
          width: c,
          height: l
        }
      }

      function pe(t, i, e) {
        const s = i || 1,
          n = Math.floor(t.height * s),
          o = Math.floor(t.width * s);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width);
        const r = t.canvas;
        return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = t.height + "px", r.style.width = t.width + "px"), (t.currentDevicePixelRatio !== s || r.height !== n || r.width !== o) && (t.currentDevicePixelRatio = s, r.height = n, r.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
      }
      const be = function() {
        let t = !1;
        try {
          const i = {
            get passive() {
              return t = !0, !1
            }
          };
          ne() && (window.addEventListener("test", null, i), window.removeEventListener("test", null, i))
        } catch {}
        return t
      }();

      function ge(t, i) {
        const e = function(t, i) {
            return he(t).getPropertyValue(i)
          }(t, i),
          s = e && e.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0
      }

      function me(t, i, e, s) {
        return {
          x: t.x + e * (i.x - t.x),
          y: t.y + e * (i.y - t.y)
        }
      }

      function xe(t, i, e, s) {
        return {
          x: t.x + e * (i.x - t.x),
          y: "middle" === s ? .5 > e ? t.y : i.y : "after" === s ? 1 > e ? t.y : i.y : e > 0 ? i.y : t.y
        }
      }

      function ve(t, i, e, s) {
        const n = {
            x: t.cp2x,
            y: t.cp2y
          },
          o = {
            x: i.cp1x,
            y: i.cp1y
          },
          r = me(t, n, e),
          h = me(n, o, e),
          a = me(o, i, e),
          c = me(r, h, e),
          l = me(h, a, e);
        return me(c, l, e)
      }
      const ye = function(t, i) {
          return {
            x: e => t + t + i - e,
            setWidth(t) {
              i = t
            },
            textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, i) => t - i,
            leftForLtr: (t, i) => t - i
          }
        },
        Me = function() {
          return {
            x: t => t,
            setWidth(t) {},
            textAlign: t => t,
            xPlus: (t, i) => t + i,
            leftForLtr: (t, i) => t
          }
        };

      function we(t, i, e) {
        return t ? ye(i, e) : Me()
      }

      function ke(t, i) {
        let e, s;
        ("ltr" === i || "rtl" === i) && (e = t.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", i, "important"), t.prevTextDirection = s)
      }

      function Oe(t, i) {
        void 0 !== i && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", i[0], i[1]))
      }

      function Se(t) {
        return "angle" === t ? {
          between: At,
          compare: St,
          normalize: Dt
        } : {
          between: Rt,
          compare: (t, i) => t - i,
          normalize: t => t
        }
      }

      function De({
        start: t,
        end: i,
        count: e,
        loop: s,
        style: n
      }) {
        return {
          start: t % e,
          end: i % e,
          loop: s && (i - t + 1) % e == 0,
          style: n
        }
      }

      function Ae(t, i, e) {
        if (!e) return [t];
        const {
          property: s,
          start: n,
          end: o
        } = e, r = i.length, {
          compare: h,
          between: a,
          normalize: c
        } = Se(s), {
          start: l,
          end: u,
          loop: f,
          style: d
        } = function(t, i, e) {
          const {
            property: s,
            start: n,
            end: o
          } = e, {
            between: r,
            normalize: h
          } = Se(s), a = i.length;
          let c, l, {
            start: u,
            end: f,
            loop: d
          } = t;
          if (d) {
            for (u += a, f += a, c = 0, l = a; l > c && r(h(i[u % a][s]), n, o); ++c) u--, f--;
            u %= a, f %= a
          }
          return u > f && (f += a), {
            start: u,
            end: f,
            loop: d,
            style: t.style
          }
        }(t, i, e), p = [];
        let b, g, m, x = !1,
          v = null;
        const y = () => x || a(n, m, b) && 0 !== h(n, m),
          M = () => !x || 0 === h(o, b) || a(o, m, b);
        for (let t = l, e = l; u >= t; ++t) g = i[t % r], !g.skip && (b = c(g[s]), b !== m && (x = a(b, n, o), null === v && y() && (v = 0 === h(b, n) ? t : e), null !== v && M() && (p.push(De({
          start: v,
          end: t,
          loop: f,
          count: r,
          style: d
        })), v = null), e = t, m = b));
        return null !== v && p.push(De({
          start: v,
          end: u,
          loop: f,
          count: r,
          style: d
        })), p
      }

      function Ce(t, i) {
        const e = [],
          s = t.segments;
        for (let n = 0; n < s.length; n++) {
          const o = Ae(s[n], t.points, i);
          o.length && e.push(...o)
        }
        return e
      }

      function Le(t, i) {
        const e = t.points,
          s = t.options.spanGaps,
          n = e.length;
        if (!n) return [];
        const o = !!t.Dt,
          {
            start: r,
            end: h
          } = function(t, i, e, s) {
            let n = 0,
              o = i - 1;
            if (e && !s)
              for (; i > n && !t[n].skip;) n++;
            for (; i > n && t[n].skip;) n++;
            for (n %= i, e && (o += n); o > n && t[o % i].skip;) o--;
            return o %= i, {
              start: n,
              end: o
            }
          }(e, n, o, s);
        return function(t, i, e, s) {
          return s && s.setContext && e ? function(t, i, e, s) {
            const n = t.At.getContext(),
              o = Re(t.options),
              {
                Ct: r,
                options: {
                  spanGaps: h
                }
              } = t,
              a = e.length,
              c = [];
            let l = o,
              u = i[0].start,
              f = u;

            function d(t, i, s, n) {
              const o = h ? -1 : 1;
              if (t !== i) {
                for (t += a; e[t % a].skip;) t -= o;
                for (; e[i % a].skip;) i += o;
                t % a !== i % a && (c.push({
                  start: t % a,
                  end: i % a,
                  loop: s,
                  style: n
                }), l = n, u = i % a)
              }
            }
            for (const t of i) {
              u = h ? u : t.start;
              let i, o = e[u % a];
              for (f = u + 1; f <= t.end; f++) {
                const h = e[f % a];
                i = Re(s.setContext(Ii(n, {
                  type: "segment",
                  p0: o,
                  p1: h,
                  p0DataIndex: (f - 1) % a,
                  p1DataIndex: f % a,
                  datasetIndex: r
                }))), je(i, l) && d(u, f - 1, t.loop, l), o = h, l = i
              }
              f - 1 > u && d(u, f - 1, t.loop, l)
            }
            return c
          }(t, i, e, s) : i
        }(t, !0 === s ? [{
          start: r,
          end: h,
          loop: o
        }] : function(t, i, e, s) {
          const n = t.length,
            o = [];
          let r, h = i,
            a = t[i];
          for (r = i + 1; e >= r; ++r) {
            const e = t[r % n];
            e.skip || e.stop ? a.skip || (s = !1, o.push({
              start: i % n,
              end: (r - 1) % n,
              loop: s
            }), i = h = e.stop ? r : null) : (h = r, a.skip && (i = r)), a = e
          }
          return null !== h && o.push({
            start: i % n,
            end: h % n,
            loop: s
          }), o
        }(e, r, r > h ? h + n : h, !!t.Lt && 0 === r && h === n - 1), e, i)
      }

      function Re(t) {
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

      function je(t, i) {
        if (!i) return !1;
        const e = [],
          s = function(t, i) {
            return Qt(i) ? (e.includes(i) || e.push(i), e.indexOf(i)) : i
          };
        return JSON.stringify(t, s) !== JSON.stringify(i, s)
      }
    },
    44731: (t, i, e) => {
      e.d(i, {
        N1: () => u
      });
      var s = e(96540),
        n = e(66118);
      const o = "label";

      function r(t, i) {
        "function" == typeof t ? t(i) : t && (t.current = i)
      }

      function h(t, i) {
        t.labels = i
      }

      function a(t, i) {
        let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
        const s = [];
        t.datasets = i.map(i => {
          const n = t.datasets.find(t => t[e] === i[e]);
          return n && i.data && !s.includes(n) ? (s.push(n), Object.assign(n, i), n) : {
            ...i
          }
        })
      }

      function c(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        const e = {
          labels: [],
          datasets: []
        };
        return h(e, t.labels), a(e, t.datasets, i), e
      }
      const l = (0, s.forwardRef)(function(t, i) {
          const {
            height: e = 150,
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
            }), r(i, y.current))
          }, w = () => {
            r(i, null), y.current && (y.current.destroy(), y.current = null)
          };
          return (0, s.useEffect)(() => {
            !l && y.current && p && function(t, i) {
              const e = t.options;
              e && i && Object.assign(e, i)
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
            height: e,
            width: o,
            ...x
          }, g)
        }),
        u = (f = n.ZT, n.t1.register(f), (0, s.forwardRef)((t, i) => s.createElement(l, {
          ...t,
          ref: i,
          type: "line"
        })));
      var f
    },
    66118: (t, i, e) => {
      e.d(i, {
        FN: () => pi,
        Hg: () => gt,
        No: () => fi,
        PP: () => pe,
        Qw: () => a,
        ZT: () => R,
        dN: () => $i,
        kc: () => me,
        t1: () => ii
      });
      var s = e(12020),
        n = new class {
          constructor() {
            this.Rt = null, this.Et = new Map, this.jt = !1, this.Pt = void 0
          }
          Tt(t, i, e, s) {
            const n = i.listeners[s],
              o = i.duration;
            n.forEach(s => s({
              chart: t,
              initial: i.initial,
              numSteps: o,
              currentStep: Math.min(e - i.start, o)
            }))
          }
          Nt() {
            this.Rt || (this.jt = !0, this.Rt = s.r.call(window, () => {
              this.Ft(), this.Rt = null, this.jt && this.Nt()
            }))
          }
          Ft(t = Date.now()) {
            let i = 0;
            this.Et.forEach((e, s) => {
              if (!e.running || !e.items.length) return;
              const n = e.items;
              let o, r = n.length - 1,
                h = !1;
              for (; r >= 0; --r) o = n[r], o.It ? (o.zt > e.duration && (e.duration = o.zt), o.tick(t), h = !0) : (n[r] = n[n.length - 1], n.pop());
              h && (s.draw(), this.Tt(s, e, t, "progress")), n.length || (e.running = !1, this.Tt(s, e, t, "complete"), e.initial = !1), i += n.length
            }), this.Pt = t, 0 === i && (this.jt = !1)
          }
          Wt(t) {
            const i = this.Et;
            let e = i.get(t);
            return e || (e = {
              running: !1,
              initial: !0,
              items: [],
              listeners: {
                complete: [],
                progress: []
              }
            }, i.set(t, e)), e
          }
          listen(t, i, e) {
            this.Wt(t).listeners[i].push(e)
          }
          add(t, i) {
            !i || !i.length || this.Wt(t).items.push(...i)
          }
          has(t) {
            return this.Wt(t).items.length > 0
          }
          start(t) {
            const i = this.Et.get(t);
            i && (i.running = !0, i.start = Date.now(), i.duration = i.items.reduce((t, i) => Math.max(t, i.Bt), 0), this.Nt())
          }
          running(t) {
            if (!this.jt) return !1;
            const i = this.Et.get(t);
            return !(!i || !i.running || !i.items.length)
          }
          stop(t) {
            const i = this.Et.get(t);
            if (!i || !i.items.length) return;
            const e = i.items;
            let s = e.length - 1;
            for (; s >= 0; --s) e[s].cancel();
            i.items = [], this.Tt(t, i, Date.now(), "complete")
          }
          remove(t) {
            return this.Et.delete(t)
          }
        };
      const o = "transparent",
        r = {
          boolean: (t, i, e) => e > .5 ? i : t,
          color(t, i, e) {
            const n = (0, s.c)(t || o),
              r = n.valid && (0, s.c)(i || o);
            return r && r.valid ? r.mix(n, e).hexString() : i
          },
          number: (t, i, e) => t + (i - t) * e
        };
      class h {
        constructor(t, i, e, n) {
          const o = i[e];
          n = (0, s.a)([t.to, n, o, t.from]);
          const h = (0, s.a)([t.from, o, n]);
          this.It = !0, this.Ht = t.fn || r[t.type || typeof h], this.Vt = s.e[t.easing] || s.e.linear, this.Yt = Math.floor(Date.now() + (t.delay || 0)), this.Bt = this.zt = Math.floor(t.duration), this.Dt = !!t.loop, this.$t = i, this.Xt = e, this.Ut = h, this.Kt = n, this.Zt = void 0
        }
        active() {
          return this.It
        }
        update(t, i, e) {
          if (this.It) {
            this.Tt(!1);
            const n = this.$t[this.Xt],
              o = e - this.Yt,
              r = this.Bt - o;
            this.Yt = e, this.Bt = Math.floor(Math.max(r, t.duration)), this.zt += o, this.Dt = !!t.loop, this.Kt = (0, s.a)([t.to, i, n, t.from]), this.Ut = (0, s.a)([t.from, n, i])
          }
        }
        cancel() {
          this.It && (this.tick(Date.now()), this.It = !1, this.Tt(!1))
        }
        tick(t) {
          const i = t - this.Yt,
            e = this.Bt,
            s = this.Xt,
            n = this.Ut,
            o = this.Dt,
            r = this.Kt;
          let h;
          if (this.It = n !== r && (o || e > i), !this.It) return this.$t[s] = r, void this.Tt(!0);
          0 > i ? this.$t[s] = n : (h = i / e % 2, h = o && h > 1 ? 2 - h : h, h = this.Vt(Math.min(1, Math.max(0, h))), this.$t[s] = this.Ht(n, r, h))
        }
        wait() {
          const t = this.Zt || (this.Zt = []);
          return new Promise((i, e) => {
            t.push({
              res: i,
              rej: e
            })
          })
        }
        Tt(t) {
          const i = t ? "res" : "rej",
            e = this.Zt || [];
          for (let t = 0; t < e.length; t++) e[t][i]()
        }
      }
      class a {
        constructor(t, i) {
          this.At = t, this.Qt = new Map, this.configure(i)
        }
        configure(t) {
          if (!(0, s.i)(t)) return;
          const i = Object.keys(s.d.animation),
            e = this.Qt;
          Object.getOwnPropertyNames(t).forEach(n => {
            const o = t[n];
            if (!(0, s.i)(o)) return;
            const r = {};
            for (const t of i) r[t] = o[t];
            ((0, s.b)(o.properties) && o.properties || [n]).forEach(t => {
              (t === n || !e.has(t)) && e.set(t, r)
            })
          })
        }
        qt(t, i) {
          const e = i.options,
            s = function(t, i) {
              if (!i) return;
              let e = t.options;
              if (e) return e.$shared && (t.options = e = Object.assign({}, e, {
                $shared: !1,
                $animations: {}
              })), e;
              t.options = i
            }(t, e);
          if (!s) return [];
          const n = this.Gt(s, e);
          return e.$shared && function(t, i) {
            const e = [],
              s = Object.keys(i);
            for (let i = 0; i < s.length; i++) {
              const n = t[s[i]];
              n && n.active() && e.push(n.wait())
            }
            return Promise.all(e)
          }(t.options.$animations, e).then(() => {
            t.options = e
          }, () => {}), n
        }
        Gt(t, i) {
          const e = this.Qt,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(i),
            r = Date.now();
          let a;
          for (a = o.length - 1; a >= 0; --a) {
            const c = o[a];
            if ("$" === c.charAt(0)) continue;
            if ("options" === c) {
              s.push(...this.qt(t, i));
              continue
            }
            const l = i[c];
            let u = n[c];
            const f = e.get(c);
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
        update(t, i) {
          if (0 === this.Qt.size) return void Object.assign(t, i);
          const e = this.Gt(t, i);
          return e.length ? (n.add(this.At, e), !0) : void 0
        }
      }

      function c(t, i) {
        const e = t && t.options || {},
          s = e.reverse,
          n = void 0 === e.min ? i : 0,
          o = void 0 === e.max ? i : 0;
        return {
          start: s ? o : n,
          end: s ? n : o
        }
      }

      function l(t, i) {
        const e = [],
          s = t.Jt(i);
        let n, o;
        for (n = 0, o = s.length; o > n; ++n) e.push(s[n].index);
        return e
      }

      function u(t, i, e, n = {}) {
        const o = t.keys,
          r = "single" === n.mode;
        let h, a, c, l;
        if (null !== i) {
          for (h = 0, a = o.length; a > h; ++h) {
            if (c = +o[h], c === e) {
              if (n.all) continue;
              break
            }
            l = t.values[c], (0, s.g)(l) && (r || 0 === i || (0, s.s)(i) === (0, s.s)(l)) && (i += l)
          }
          return i
        }
      }

      function f(t, i) {
        const e = t && t.options.stacked;
        return e || void 0 === e && void 0 !== i.stack
      }

      function d(t, i, e) {
        const s = t[i] || (t[i] = {});
        return s[e] || (s[e] = {})
      }

      function p(t, i, e, s) {
        for (const n of i.getMatchingVisibleMetas(s).reverse()) {
          const i = t[n.index];
          if (e && i > 0 || !e && 0 > i) return n.index
        }
        return null
      }

      function b(t, i) {
        const {
          chart: e,
          te: s
        } = t, n = e.ee || (e.ee = {}), {
          iScale: o,
          vScale: r,
          index: h
        } = s, a = o.axis, c = r.axis, l = function(t, i, e) {
          return `${t.id}.${i.id}.${e.stack||e.type}`
        }(o, r, s), u = i.length;
        let f;
        for (let t = 0; u > t; ++t) {
          const e = i[t],
            {
              [a]: o,
              [c]: u
            } = e;
          f = (e.ee || (e.ee = {}))[c] = d(n, l, o), f[h] = u, f.ie = p(f, r, !0, s.type), f.se = p(f, r, !1, s.type), (f.ne || (f.ne = {}))[h] = u
        }
      }

      function g(t, i) {
        const e = t.scales;
        return Object.keys(e).filter(t => e[t].axis === i).shift()
      }

      function m(t, i) {
        const e = t.controller.index,
          s = t.vScale && t.vScale.axis;
        if (s) {
          i = i || t.rt;
          for (const t of i) {
            const i = t.ee;
            if (!i || void 0 === i[s] || void 0 === i[s][e]) return;
            delete i[s][e], void 0 !== i[s].ne && void 0 !== i[s].ne[e] && delete i[s].ne[e]
          }
        }
      }
      const x = t => "reset" === t || "none" === t,
        v = (t, i) => i ? t : Object.assign({}, t);
      class y {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, i) {
          this.chart = t, this.oe = t.ctx, this.index = i, this.re = {}, this.te = this.getMeta(), this.he = this.te.type, this.options = void 0, this.St = !1, this.ce = void 0, this.le = void 0, this.ue = void 0, this.fe = void 0, this.de = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this.pe = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
        }
        initialize() {
          const t = this.te;
          this.configure(), this.linkScales(), t.be = f(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }
        updateIndex(t) {
          this.index !== t && m(this.te), this.index = t
        }
        linkScales() {
          const t = this.chart,
            i = this.te,
            e = this.getDataset(),
            n = (t, i, e, s) => "x" === t ? i : "r" === t ? s : e,
            o = i.xAxisID = (0, s.v)(e.xAxisID, g(t, "x")),
            r = i.yAxisID = (0, s.v)(e.yAxisID, g(t, "y")),
            h = i.rAxisID = (0, s.v)(e.rAxisID, g(t, "r")),
            a = i.indexAxis,
            c = i.iAxisID = n(a, o, r, h),
            l = i.vAxisID = n(a, r, o, h);
          i.xScale = this.getScaleForId(o), i.yScale = this.getScaleForId(r), i.rScale = this.getScaleForId(h), i.iScale = this.getScaleForId(c), i.vScale = this.getScaleForId(l)
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
        ge(t) {
          const i = this.te;
          return t === i.iScale ? i.vScale : i.iScale
        }
        reset() {
          this.Ft("reset")
        }
        me() {
          const t = this.te;
          this.ce && (0, s.u)(this.ce, this), t.be && m(t)
        }
        xe() {
          const t = this.getDataset(),
            i = t.data || (t.data = []),
            e = this.ce;
          if ((0, s.i)(i)) this.ce = function(t) {
            const i = Object.keys(t),
              e = Array(i.length);
            let s, n, o;
            for (s = 0, n = i.length; n > s; ++s) o = i[s], e[s] = {
              x: o,
              y: t[o]
            };
            return e
          }(i);
          else if (e !== i) {
            if (e) {
              (0, s.u)(e, this);
              const t = this.te;
              m(t), t.rt = []
            }
            i && Object.isExtensible(i) && (0, s.l)(i, this), this.pe = [], this.ce = i
          }
        }
        addElements() {
          const t = this.te;
          this.xe(), this.datasetElementType && (t.dataset = new this.datasetElementType)
        }
        buildOrUpdateElements(t) {
          const i = this.te,
            e = this.getDataset();
          let s = !1;
          this.xe();
          const n = i.be;
          i.be = f(i.vScale, i), i.stack !== e.stack && (s = !0, m(i), i.stack = e.stack), this.ve(t), (s || n !== i.be) && b(this, i.rt)
        }
        configure() {
          const t = this.chart.config,
            i = t.datasetScopeKeys(this.he),
            e = t.getOptionScopes(this.getDataset(), i, !0);
          this.options = t.createResolver(e, this.getContext()), this.St = this.options.parsing, this.re = {}
        }
        parse(t, i) {
          const {
            te: e,
            ce: n
          } = this, {
            iScale: o,
            be: r
          } = e, h = o.axis;
          let a, c, l, u = 0 === t && i === n.length || e.ot,
            f = t > 0 && e.rt[t - 1];
          if (!1 === this.St) e.rt = n, e.ot = !0, l = n;
          else {
            l = (0, s.b)(n[t]) ? this.parseArrayData(e, n, t, i) : (0, s.i)(n[t]) ? this.parseObjectData(e, n, t, i) : this.parsePrimitiveData(e, n, t, i);
            const o = () => null === c[h] || f && c[h] < f[h];
            for (a = 0; i > a; ++a) e.rt[a + t] = c = l[a], u && (o() && (u = !1), f = c);
            e.ot = u
          }
          r && b(this, l)
        }
        parsePrimitiveData(t, i, e, s) {
          const {
            iScale: n,
            vScale: o
          } = t, r = n.axis, h = o.axis, a = n.getLabels(), c = n === o, l = Array(s);
          let u, f, d;
          for (u = 0, f = s; f > u; ++u) d = u + e, l[u] = {
            [r]: c || n.parse(a[d], d),
            [h]: o.parse(i[d], d)
          };
          return l
        }
        parseArrayData(t, i, e, s) {
          const {
            xScale: n,
            yScale: o
          } = t, r = Array(s);
          let h, a, c, l;
          for (h = 0, a = s; a > h; ++h) c = h + e, l = i[c], r[h] = {
            x: n.parse(l[0], c),
            y: o.parse(l[1], c)
          };
          return r
        }
        parseObjectData(t, i, e, n) {
          const {
            xScale: o,
            yScale: r
          } = t, {
            xAxisKey: h = "x",
            yAxisKey: a = "y"
          } = this.St, c = Array(n);
          let l, u, f, d;
          for (l = 0, u = n; u > l; ++l) f = l + e, d = i[f], c[l] = {
            x: o.parse((0, s.f)(d, h), f),
            y: r.parse((0, s.f)(d, a), f)
          };
          return c
        }
        getParsed(t) {
          return this.te.rt[t]
        }
        getDataElement(t) {
          return this.te.data[t]
        }
        applyStack(t, i, e) {
          const s = this.chart,
            n = this.te,
            o = i[t.axis];
          return u({
            keys: l(s, !0),
            values: i.ee[t.axis].ne
          }, o, n.index, {
            mode: e
          })
        }
        updateRangeFromParsed(t, i, e, s) {
          const n = e[i.axis];
          let o = null === n ? NaN : n;
          const r = s && e.ee[i.axis];
          s && r && (s.values = r, o = u(s, n, this.te.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
        }
        getMinMax(t, i) {
          const e = this.te,
            n = e.rt,
            o = e.ot && t === e.iScale,
            r = n.length,
            h = this.ge(t),
            a = ((t, i, e) => t && !i.hidden && i.be && {
              keys: l(e, !0),
              values: null
            })(i, e, this.chart),
            c = {
              min: 1 / 0,
              max: -1 / 0
            },
            {
              min: u,
              max: f
            } = function(t) {
              const {
                min: i,
                max: e,
                minDefined: s,
                maxDefined: n
              } = t.getUserBounds();
              return {
                min: s ? i : -1 / 0,
                max: n ? e : 1 / 0
              }
            }(h);
          let d, p;

          function b() {
            p = n[d];
            const i = p[h.axis];
            return !(0, s.g)(p[t.axis]) || u > i || i > f
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
          const i = this.te.rt,
            e = [];
          let n, o, r;
          for (n = 0, o = i.length; o > n; ++n) r = i[n][t.axis], (0, s.g)(r) && e.push(r);
          return e
        }
        getMaxOverflow() {
          return !1
        }
        getLabelAndValue(t) {
          const i = this.te,
            e = i.iScale,
            s = i.vScale,
            n = this.getParsed(t);
          return {
            label: e ? "" + e.getLabelForValue(n[e.axis]) : "",
            value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
          }
        }
        Ft(t) {
          const i = this.te;
          this.update(t || "default"), i.ye = function(t) {
            let i, e, n, o;
            return (0, s.i)(t) ? (i = t.top, e = t.right, n = t.bottom, o = t.left) : i = e = n = o = t, {
              top: i,
              right: e,
              bottom: n,
              left: o,
              disabled: !1 === t
            }
          }((0, s.v)(this.options.clip, function(t, i, e) {
            if (!1 === e) return !1;
            const s = c(t, e),
              n = c(i, e);
            return {
              top: n.end,
              right: s.end,
              bottom: n.start,
              left: s.start
            }
          }(i.xScale, i.yScale, this.getMaxOverflow())))
        }
        update(t) {}
        draw() {
          const t = this.oe,
            i = this.chart,
            e = this.te,
            s = e.data || [],
            n = i.chartArea,
            o = [],
            r = this.fe || 0,
            h = this.de || s.length - r,
            a = this.options.drawActiveElementsOnTop;
          let c;
          for (e.dataset && e.dataset.draw(t, n, r, h), c = r; r + h > c; ++c) {
            const i = s[c];
            i.hidden || (i.active && a ? o.push(i) : i.draw(t, n))
          }
          for (c = 0; c < o.length; ++c) o[c].draw(t, n)
        }
        getStyle(t, i) {
          const e = i ? "active" : "default";
          return void 0 === t && this.te.dataset ? this.resolveDatasetElementOptions(e) : this.resolveDataElementOptions(t || 0, e)
        }
        getContext(t, i, e) {
          const n = this.getDataset();
          let o;
          if (t >= 0 && t < this.te.data.length) {
            const i = this.te.data[t];
            o = i.$context || (i.$context = function(t, i, e) {
              return (0, s.j)(t, {
                active: !1,
                dataIndex: i,
                parsed: void 0,
                raw: void 0,
                element: e,
                index: i,
                mode: "default",
                type: "data"
              })
            }(this.getContext(), t, i)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
          } else o = this.$context || (this.$context = function(t, i) {
            return (0, s.j)(t, {
              active: !1,
              dataset: void 0,
              datasetIndex: i,
              index: i,
              mode: "default",
              type: "dataset"
            })
          }(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
          return o.active = !!i, o.mode = e, o
        }
        resolveDatasetElementOptions(t) {
          return this.Me(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, i) {
          return this.Me(this.dataElementType.id, i, t)
        }
        Me(t, i = "default", e) {
          const n = "active" === i,
            o = this.re,
            r = t + "-" + i,
            h = o[r],
            a = this.enableOptionSharing && (0, s.h)(e);
          if (h) return v(h, a);
          const c = this.chart.config,
            l = c.datasetElementScopeKeys(this.he, t),
            u = n ? [t + "Hover", "hover", t, ""] : [t, ""],
            f = c.getOptionScopes(this.getDataset(), l),
            d = Object.keys(s.d.elements[t]),
            p = c.resolveNamedOptions(f, d, () => this.getContext(e, n, i), u);
          return p.$shared && (p.$shared = a, o[r] = Object.freeze(v(p, a))), p
        }
        we(t, i, e) {
          const s = this.chart,
            n = this.re,
            o = "animation-" + i,
            r = n[o];
          if (r) return r;
          let h;
          if (!1 !== s.options.animation) {
            const s = this.chart.config,
              n = s.datasetAnimationScopeKeys(this.he, i),
              o = s.getOptionScopes(this.getDataset(), n);
            h = s.createResolver(o, this.getContext(t, e, i))
          }
          const c = new a(s, h && h.animations);
          return h && h.ft && (n[o] = Object.freeze(c)), c
        }
        getSharedOptions(t) {
          if (t.$shared) return this.ue || (this.ue = Object.assign({}, t))
        }
        includeOptions(t, i) {
          return !i || x(t) || this.chart._i
        }
        ke(t, i) {
          const e = this.resolveDataElementOptions(t, i),
            s = this.ue,
            n = this.getSharedOptions(e),
            o = this.includeOptions(i, n) || n !== s;
          return this.updateSharedOptions(n, i, e), {
            sharedOptions: n,
            includeOptions: o
          }
        }
        updateElement(t, i, e, s) {
          x(s) ? Object.assign(t, e) : this.we(i, s).update(t, e)
        }
        updateSharedOptions(t, i, e) {
          t && !x(i) && this.we(void 0, i).update(t, e)
        }
        Oe(t, i, e, s) {
          t.active = s;
          const n = this.getStyle(i, s);
          this.we(i, e, s).update(t, {
            options: !s && this.getSharedOptions(n) || n
          })
        }
        removeHoverStyle(t, i, e) {
          this.Oe(t, e, "active", !1)
        }
        setHoverStyle(t, i, e) {
          this.Oe(t, e, "active", !0)
        }
        Se() {
          const t = this.te.dataset;
          t && this.Oe(t, void 0, "active", !1)
        }
        De() {
          const t = this.te.dataset;
          t && this.Oe(t, void 0, "active", !0)
        }
        ve(t) {
          const i = this.ce,
            e = this.te.data;
          for (const [t, i, e] of this.pe) this[t](i, e);
          this.pe = [];
          const s = e.length,
            n = i.length,
            o = Math.min(n, s);
          o && this.parse(0, o), n > s ? this.Ae(s, n - s, t) : s > n && this.Ce(n, s - n)
        }
        Ae(t, i, e = !0) {
          const s = this.te,
            n = s.data,
            o = t + i;
          let r;
          const h = t => {
            for (t.length += i, r = t.length - 1; r >= o; r--) t[r] = t[r - i]
          };
          for (h(n), r = t; o > r; ++r) n[r] = new this.dataElementType;
          this.St && h(s.rt), this.parse(t, i), e && this.updateElements(n, t, i, "reset")
        }
        updateElements(t, i, e, s) {}
        Ce(t, i) {
          const e = this.te;
          if (this.St) {
            const s = e.rt.splice(t, i);
            e.be && m(e, s)
          }
          e.data.splice(t, i)
        }
        Le(t) {
          if (this.St) this.pe.push(t);
          else {
            const [i, e, s] = t;
            this[i](e, s)
          }
          this.chart.Re.push([this.index, ...t])
        }
        Ee() {
          const t = arguments.length;
          this.Le(["_insertElements", this.getDataset().data.length - t, t])
        }
        je() {
          this.Le(["_removeElements", this.te.data.length - 1, 1])
        }
        Pe() {
          this.Le(["_removeElements", 0, 1])
        }
        Te(t, i) {
          i && this.Le(["_removeElements", t, i]);
          const e = arguments.length - 2;
          e && this.Le(["_insertElements", t, e])
        }
        Ne() {
          this.Le(["_insertElements", 0, arguments.length])
        }
      }

      function M(t) {
        const i = t.iScale,
          e = function(t, i) {
            if (!t.Fe.$bar) {
              const e = t.getMatchingVisibleMetas(i);
              let n = [];
              for (let i = 0, s = e.length; s > i; i++) n = n.concat(e[i].controller.getAllParsedValues(t));
              t.Fe.$bar = (0, s.et)(n.sort((t, i) => t - i))
            }
            return t.Fe.$bar
          }(i, t.type);
        let n, o, r, h, a = i.Ie;
        const c = () => {
          32767 === r || -32768 === r || ((0, s.h)(h) && (a = Math.min(a, Math.abs(r - h) || a)), h = r)
        };
        for (n = 0, o = e.length; o > n; ++n) r = i.getPixelForValue(e[n]), c();
        for (h = void 0, n = 0, o = i.ticks.length; o > n; ++n) r = i.getPixelForTick(n), c();
        return a
      }

      function w(t, i, e, n) {
        return (0, s.b)(t) ? function(t, i, e, s) {
          const n = e.parse(t[0], s),
            o = e.parse(t[1], s),
            r = Math.min(n, o),
            h = Math.max(n, o);
          let a = r,
            c = h;
          Math.abs(r) > Math.abs(h) && (a = h, c = r), i[e.axis] = c, i.ze = {
            barStart: a,
            barEnd: c,
            start: n,
            end: o,
            min: r,
            max: h
          }
        }(t, i, e, n) : i[e.axis] = e.parse(t, n), i
      }

      function k(t, i, e, s) {
        const n = t.iScale,
          o = t.vScale,
          r = n.getLabels(),
          h = n === o,
          a = [];
        let c, l, u, f;
        for (c = e, l = e + s; l > c; ++c) f = i[c], u = {}, u[n.axis] = h || n.parse(r[c], c), a.push(w(f, u, o, c));
        return a
      }

      function O(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
      }

      function S(t, i, e, s) {
        let n = i.borderSkipped;
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
          let i, e, s, n, o;
          return t.horizontal ? (i = t.base > t.x, e = "left", s = "right") : (i = t.base < t.y, e = "bottom", s = "top"), i ? (n = "end", o = "start") : (n = "start", o = "end"), {
            start: e,
            end: s,
            reverse: i,
            top: n,
            bottom: o
          }
        }(t);
        "middle" === n && e && (t.enableBorderRadius = !0, (e.ie || 0) === s ? n = c : (e.se || 0) === s ? n = l : (o[D(l, r, h, a)] = !0, n = c)), o[D(n, r, h, a)] = !0, t.borderSkipped = o
      }

      function D(t, i, e, s) {
        return s ? (t = function(t, i, e) {
          return t === i ? e : t === e ? i : t
        }(t, i, e), t = A(t, e, i)) : t = A(t, i, e), t
      }

      function A(t, i, e) {
        return "start" === t ? i : "end" === t ? e : t
      }

      function C(t, {
        inflateAmount: i
      }, e) {
        t.inflateAmount = "auto" === i ? 1 === e ? .33 : 0 : i
      }
      class L extends y {
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
          ct: t => "spacing" !== t,
          lt: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const i = t.data;
                  if (i.labels.length && i.datasets.length) {
                    const {
                      labels: {
                        pointStyle: e,
                        color: s
                      }
                    } = t.legend.options;
                    return i.labels.map((i, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: i,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: e,
                        hidden: !t.getDataVisibility(n),
                        index: n
                      }
                    })
                  }
                  return []
                }
              },
              onClick(t, i, e) {
                e.chart.toggleDataVisibility(i.index), e.chart.update()
              }
            }
          }
        };
        constructor(t, i) {
          super(t, i), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }
        linkScales() {}
        parse(t, i) {
          const e = this.getDataset().data,
            n = this.te;
          if (!1 === this.St) n.rt = e;
          else {
            let o, r, h = t => +e[t];
            if ((0, s.i)(e[t])) {
              const {
                key: t = "value"
              } = this.St;
              h = i => +(0, s.f)(e[i], t)
            }
            for (o = t, r = t + i; r > o; ++o) n.rt[o] = h(o)
          }
        }
        We() {
          return (0, s.t)(this.options.rotation - 90)
        }
        Be() {
          return (0, s.t)(this.options.circumference)
        }
        He() {
          let t = s.T,
            i = -s.T;
          for (let e = 0; e < this.chart.data.datasets.length; ++e)
            if (this.chart.isDatasetVisible(e) && this.chart.getDatasetMeta(e).type === this.he) {
              const s = this.chart.getDatasetMeta(e).controller,
                n = s.We(),
                o = s.Be();
              t = Math.min(t, n), i = Math.max(i, n + o)
            } return {
            rotation: t,
            circumference: i - t
          }
        }
        update(t) {
          const i = this.chart,
            {
              chartArea: e
            } = i,
            n = this.te,
            o = n.data,
            r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
            h = Math.max((Math.min(e.width, e.height) - r) / 2, 0),
            a = Math.min((0, s.m)(this.options.cutout, h), 1),
            c = this.Ve(this.index),
            {
              circumference: l,
              rotation: u
            } = this.He(),
            {
              ratioX: f,
              ratioY: d,
              offsetX: p,
              offsetY: b
            } = function(t, i, e) {
              let n = 1,
                o = 1,
                r = 0,
                h = 0;
              if (i < s.T) {
                const a = t,
                  c = a + i,
                  l = Math.cos(a),
                  u = Math.sin(a),
                  f = Math.cos(c),
                  d = Math.sin(c),
                  p = (t, i, n) => (0, s.p)(t, a, c, !0) ? 1 : Math.max(i, i * e, n, n * e),
                  b = (t, i, n) => (0, s.p)(t, a, c, !0) ? -1 : Math.min(i, i * e, n, n * e),
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
            g = (e.width - r) / f,
            m = (e.height - r) / d,
            x = Math.max(Math.min(g, m) / 2, 0),
            v = (0, s.n)(this.options.radius, x),
            y = (v - Math.max(v * a, 0)) / this.Ye();
          this.offsetX = p * v, this.offsetY = b * v, n.total = this.calculateTotal(), this.outerRadius = v - y * this.$e(this.index), this.innerRadius = Math.max(this.outerRadius - y * c, 0), this.updateElements(o, 0, o.length, t)
        }
        Ue(t, i) {
          const e = this.options,
            n = this.te,
            o = this.Be();
          return i && e.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n.rt[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n.rt[t] * o / s.T)
        }
        updateElements(t, i, e, s) {
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
            } = this.ke(i, s);
          let b, g = this.We();
          for (b = 0; i > b; ++b) g += this.Ue(b, n);
          for (b = i; i + e > b; ++b) {
            const i = this.Ue(b, n),
              e = t[b],
              o = {
                x: a + this.offsetX,
                y: c + this.offsetY,
                startAngle: g,
                endAngle: g + i,
                circumference: i,
                outerRadius: f,
                innerRadius: u
              };
            p && (o.options = d || this.resolveDataElementOptions(b, e.active ? "active" : s)), g += i, this.updateElement(e, b, o, s)
          }
        }
        calculateTotal() {
          const t = this.te,
            i = t.data;
          let e, s = 0;
          for (e = 0; e < i.length; e++) {
            const n = t.rt[e];
            null !== n && !isNaN(n) && this.chart.getDataVisibility(e) && !i[e].hidden && (s += Math.abs(n))
          }
          return s
        }
        calculateCircumference(t) {
          const i = this.te.total;
          return i > 0 && !isNaN(t) ? s.T * (Math.abs(t) / i) : 0
        }
        getLabelAndValue(t) {
          const i = this.te,
            e = this.chart,
            n = e.data.labels || [],
            o = (0, s.o)(i.rt[t], e.options.locale);
          return {
            label: n[t] || "",
            value: o
          }
        }
        getMaxBorderWidth(t) {
          let i = 0;
          const e = this.chart;
          let s, n, o, r, h;
          if (!t)
            for (s = 0, n = e.data.datasets.length; n > s; ++s)
              if (e.isDatasetVisible(s)) {
                o = e.getDatasetMeta(s), t = o.data, r = o.controller;
                break
              } if (!t) return 0;
          for (s = 0, n = t.length; n > s; ++s) h = r.resolveDataElementOptions(s), "inner" !== h.borderAlign && (i = Math.max(i, h.borderWidth || 0, h.hoverBorderWidth || 0));
          return i
        }
        getMaxOffset(t) {
          let i = 0;
          for (let e = 0, s = t.length; s > e; ++e) {
            const t = this.resolveDataElementOptions(e);
            i = Math.max(i, t.offset || 0, t.hoverOffset || 0)
          }
          return i
        }
        $e(t) {
          let i = 0;
          for (let e = 0; t > e; ++e) this.chart.isDatasetVisible(e) && (i += this.Ve(e));
          return i
        }
        Ve(t) {
          return Math.max((0, s.v)(this.chart.data.datasets[t].weight, 1), 0)
        }
        Ye() {
          return this.$e(this.chart.data.datasets.length) || 1
        }
      }
      class R extends y {
        static id = "line";
        static defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1
        };
        static overrides = {
          scales: {
            Ke: {
              type: "category"
            },
            Ze: {
              type: "linear"
            }
          }
        };
        initialize() {
          this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
        }
        update(t) {
          const i = this.te,
            {
              dataset: e,
              data: n = [],
              qe: o
            } = i,
            r = this.chart._i;
          let {
            start: h,
            count: a
          } = (0, s.q)(i, n, r);
          this.fe = h, this.de = a, (0, s.w)(i) && (h = 0, a = n.length), e.At = this.chart, e.Ct = this.index, e.Ge = !!o.Ge, e.points = n;
          const c = this.resolveDatasetElementOptions(t);
          this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(e, void 0, {
            animated: !r,
            options: c
          }, t), this.updateElements(n, h, a, t)
        }
        updateElements(t, i, e, n) {
          const o = "reset" === n,
            {
              iScale: r,
              vScale: h,
              be: a,
              qe: c
            } = this.te,
            {
              sharedOptions: l,
              includeOptions: u
            } = this.ke(i, n),
            f = r.axis,
            d = h.axis,
            {
              spanGaps: p,
              segment: b
            } = this.options,
            g = (0, s.x)(p) ? p : 1 / 0,
            m = this.chart._i || o || "none" === n,
            x = i + e,
            v = t.length;
          let y = i > 0 && this.getParsed(i - 1);
          for (let e = 0; v > e; ++e) {
            const p = t[e],
              v = m ? p : {};
            if (i > e || e >= x) {
              v.skip = !0;
              continue
            }
            const M = this.getParsed(e),
              w = (0, s.k)(M[d]),
              k = v[f] = r.getPixelForValue(M[f], e),
              O = v[d] = o || w ? h.getBasePixel() : h.getPixelForValue(a ? this.applyStack(h, M, a) : M[d], e);
            v.skip = isNaN(k) || isNaN(O) || w, v.stop = e > 0 && Math.abs(M[f] - y[f]) > g, b && (v.parsed = M, v.raw = c.data[e]), u && (v.options = l || this.resolveDataElementOptions(e, p.active ? "active" : n)), m || this.updateElement(p, e, v, n), y = M
          }
        }
        getMaxOverflow() {
          const t = this.te,
            i = t.dataset,
            e = i.options && i.options.borderWidth || 0,
            s = t.data || [];
          if (!s.length) return e;
          const n = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
          return Math.max(e, n, o) / 2
        }
        draw() {
          const t = this.te;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
        }
      }
      class j extends y {
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
                  const i = t.data;
                  if (i.labels.length && i.datasets.length) {
                    const {
                      labels: {
                        pointStyle: e,
                        color: s
                      }
                    } = t.legend.options;
                    return i.labels.map((i, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: i,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: e,
                        hidden: !t.getDataVisibility(n),
                        index: n
                      }
                    })
                  }
                  return []
                }
              },
              onClick(t, i, e) {
                e.chart.toggleDataVisibility(i.index), e.chart.update()
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
        constructor(t, i) {
          super(t, i), this.innerRadius = void 0, this.outerRadius = void 0
        }
        getLabelAndValue(t) {
          const i = this.te,
            e = this.chart,
            n = e.data.labels || [],
            o = (0, s.o)(i.rt[t].r, e.options.locale);
          return {
            label: n[t] || "",
            value: o
          }
        }
        parseObjectData(t, i, e, n) {
          return s.y.bind(this)(t, i, e, n)
        }
        update(t) {
          const i = this.te.data;
          this.Je(), this.updateElements(i, 0, i.length, t)
        }
        getMinMax() {
          const t = this.te,
            i = {
              min: 1 / 0,
              max: -1 / 0
            };
          return t.data.forEach((t, e) => {
            const s = this.getParsed(e).r;
            !isNaN(s) && this.chart.getDataVisibility(e) && (s < i.min && (i.min = s), s > i.max && (i.max = s))
          }), i
        }
        Je() {
          const t = this.chart,
            i = t.chartArea,
            e = t.options,
            s = Math.min(i.right - i.left, i.bottom - i.top),
            n = Math.max(s / 2, 0),
            o = (n - Math.max(e.cutoutPercentage ? n / 100 * e.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
          this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o
        }
        updateElements(t, i, e, n) {
          const o = "reset" === n,
            r = this.chart,
            h = r.options.animation,
            a = this.te.rScale,
            c = a.xCenter,
            l = a.yCenter,
            u = a.getIndexAngle(0) - .5 * s.P;
          let f, d = u;
          const p = 360 / this.countVisibleElements();
          for (f = 0; i > f; ++f) d += this.ti(f, n, p);
          for (f = i; i + e > f; f++) {
            const i = t[f];
            let e = d,
              s = d + this.ti(f, n, p),
              b = r.getDataVisibility(f) ? a.getDistanceFromCenterForValue(this.getParsed(f).r) : 0;
            d = s, o && (h.animateScale && (b = 0), h.animateRotate && (e = s = u));
            const g = {
              x: c,
              y: l,
              innerRadius: 0,
              outerRadius: b,
              startAngle: e,
              endAngle: s,
              options: this.resolveDataElementOptions(f, i.active ? "active" : n)
            };
            this.updateElement(i, f, g, n)
          }
        }
        countVisibleElements() {
          const t = this.te;
          let i = 0;
          return t.data.forEach((t, e) => {
            !isNaN(this.getParsed(e).r) && this.chart.getDataVisibility(e) && i++
          }), i
        }
        ti(t, i, e) {
          return this.chart.getDataVisibility(t) ? (0, s.t)(this.resolveDataElementOptions(t, i).angle || e) : 0
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
              Ke: {
                type: "category",
                offset: !0,
                grid: {
                  offset: !0
                }
              },
              Ze: {
                type: "linear",
                beginAtZero: !0
              }
            }
          };
          parsePrimitiveData(t, i, e, s) {
            return k(t, i, e, s)
          }
          parseArrayData(t, i, e, s) {
            return k(t, i, e, s)
          }
          parseObjectData(t, i, e, n) {
            const {
              iScale: o,
              vScale: r
            } = t, {
              xAxisKey: h = "x",
              yAxisKey: a = "y"
            } = this.St, c = "x" === o.axis ? h : a, l = "x" === r.axis ? h : a, u = [];
            let f, d, p, b;
            for (f = e, d = e + n; d > f; ++f) b = i[f], p = {}, p[o.axis] = o.parse((0, s.f)(b, c), f), u.push(w((0, s.f)(b, l), p, r, f));
            return u
          }
          updateRangeFromParsed(t, i, e, s) {
            super.updateRangeFromParsed(t, i, e, s);
            const n = e.ze;
            n && i === this.te.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max))
          }
          getMaxOverflow() {
            return 0
          }
          getLabelAndValue(t) {
            const i = this.te,
              {
                iScale: e,
                vScale: s
              } = i,
              n = this.getParsed(t),
              o = n.ze,
              r = O(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
            return {
              label: "" + e.getLabelForValue(n[e.axis]),
              value: r
            }
          }
          initialize() {
            this.enableOptionSharing = !0, super.initialize(), this.te.stack = this.getDataset().stack
          }
          update(t) {
            const i = this.te;
            this.updateElements(i.data, 0, i.data.length, t)
          }
          updateElements(t, i, e, n) {
            const o = "reset" === n,
              {
                index: r,
                te: {
                  vScale: h
                }
              } = this,
              a = h.getBasePixel(),
              c = h.isHorizontal(),
              l = this.ei(),
              {
                sharedOptions: u,
                includeOptions: f
              } = this.ke(i, n);
            for (let d = i; i + e > d; d++) {
              const i = this.getParsed(d),
                e = o || (0, s.k)(i[h.axis]) ? {
                  base: a,
                  head: a
                } : this.ii(d),
                p = this.si(d, l),
                b = (i.ee || {})[h.axis],
                g = {
                  horizontal: c,
                  base: e.base,
                  enableBorderRadius: !b || O(i.ze) || r === b.ie || r === b.se,
                  x: c ? e.head : p.center,
                  y: c ? p.center : e.head,
                  height: c ? p.size : Math.abs(e.size),
                  width: c ? Math.abs(e.size) : p.size
                };
              f && (g.options = u || this.resolveDataElementOptions(d, t[d].active ? "active" : n));
              const m = g.options || t[d].options;
              S(g, m, b, r), C(g, m, l.ratio), this.updateElement(t[d], d, g, n)
            }
          }
          ni(t, i) {
            const {
              iScale: e
            } = this.te, n = e.getMatchingVisibleMetas(this.he).filter(t => t.controller.options.grouped), o = e.options.stacked, r = [], h = t => {
              const e = t.controller.getParsed(i),
                n = e && e[t.vScale.axis];
              if ((0, s.k)(n) || isNaN(n)) return !0
            };
            for (const e of n)
              if ((void 0 === i || !h(e)) && ((!1 === o || -1 === r.indexOf(e.stack) || void 0 === o && void 0 === e.stack) && r.push(e.stack), e.index === t)) break;
            return r.length || r.push(void 0), r
          }
          oi(t) {
            return this.ni(void 0, t).length
          }
          ri(t, i, e) {
            const s = this.ni(t, e),
              n = void 0 !== i ? s.indexOf(i) : -1;
            return -1 === n ? s.length - 1 : n
          }
          ei() {
            const t = this.options,
              i = this.te,
              e = i.iScale,
              s = [];
            let n, o;
            for (n = 0, o = i.data.length; o > n; ++n) s.push(e.getPixelForValue(this.getParsed(n)[e.axis], n));
            const r = t.barThickness;
            return {
              min: r || M(i),
              pixels: s,
              start: e.ci,
              end: e.li,
              stackCount: this.oi(),
              scale: e,
              grouped: t.grouped,
              ratio: r ? 1 : t.categoryPercentage * t.barPercentage
            }
          }
          ii(t) {
            const {
              te: {
                vScale: i,
                be: e,
                index: n
              },
              options: {
                base: o,
                minBarLength: r
              }
            } = this, h = o || 0, a = this.getParsed(t), c = a.ze, l = O(c);
            let u, f, d = a[i.axis],
              p = 0,
              b = e ? this.applyStack(i, a, e) : d;
            b !== d && (p = b - d, b = d), l && (d = c.barStart, b = c.barEnd - c.barStart, 0 !== d && (0, s.s)(d) !== (0, s.s)(c.barEnd) && (p = 0), p += d);
            const g = (0, s.k)(o) || l ? p : o;
            let m = i.getPixelForValue(g);
            if (u = this.chart.getDataVisibility(t) ? i.getPixelForValue(p + b) : m, f = u - m, r > Math.abs(f)) {
              f = function(t, i, e) {
                return 0 !== t ? (0, s.s)(t) : (i.isHorizontal() ? 1 : -1) * (i.min < e ? -1 : 1)
              }(f, i, h) * r, d === h && (m -= f / 2);
              const t = i.getPixelForDecimal(0),
                o = i.getPixelForDecimal(1),
                c = Math.min(t, o);
              m = Math.max(Math.min(m, Math.max(t, o)), c), u = m + f, e && !l && (a.ee[i.axis].ne[n] = i.getValueForPixel(u) - i.getValueForPixel(m))
            }
            if (m === i.getPixelForValue(h)) {
              const t = (0, s.s)(f) * i.getLineWidthForValue(h) / 2;
              m += t, f -= t
            }
            return {
              size: f,
              base: m,
              head: u,
              center: u + f / 2
            }
          }
          si(t, i) {
            const e = i.scale,
              n = this.options,
              o = n.skipNull,
              r = (0, s.v)(n.maxBarThickness, 1 / 0);
            let h, a;
            if (i.grouped) {
              const e = o ? this.oi(t) : i.stackCount,
                c = "flex" === n.barThickness ? function(t, i, e, s) {
                  const n = i.pixels,
                    o = n[t];
                  let r = t > 0 ? n[t - 1] : null,
                    h = t < n.length - 1 ? n[t + 1] : null;
                  const a = e.categoryPercentage;
                  null === r && (r = o - (null === h ? i.end - i.start : h - o)), null === h && (h = o + o - r);
                  const c = o - (o - Math.min(r, h)) / 2 * a;
                  return {
                    chunk: Math.abs(h - r) / 2 * a / s,
                    ratio: e.barPercentage,
                    start: c
                  }
                }(t, i, n, e) : function(t, i, e, n) {
                  const o = e.barThickness;
                  let r, h;
                  return (0, s.k)(o) ? (r = i.min * e.categoryPercentage, h = e.barPercentage) : (r = o * n, h = 1), {
                    chunk: r / n,
                    ratio: h,
                    start: i.pixels[t] - r / 2
                  }
                }(t, i, n, e),
                l = this.ri(this.index, this.te.stack, o ? t : void 0);
              h = c.start + c.chunk * l + c.chunk / 2, a = Math.min(r, c.chunk * c.ratio)
            } else h = e.getPixelForValue(this.getParsed(t)[e.axis], t), a = Math.min(r, i.min * i.ratio);
            return {
              base: h - a / 2,
              head: h + a / 2,
              center: h,
              size: a
            }
          }
          draw() {
            const t = this.te,
              i = t.vScale,
              e = t.data,
              s = e.length;
            let n = 0;
            for (; s > n; ++n) null !== this.getParsed(n)[i.axis] && e[n].draw(this.oe)
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
          parsePrimitiveData(t, i, e, s) {
            const n = super.parsePrimitiveData(t, i, e, s);
            for (let t = 0; t < n.length; t++) n[t].ze = this.resolveDataElementOptions(t + e).radius;
            return n
          }
          parseArrayData(t, i, e, n) {
            const o = super.parseArrayData(t, i, e, n);
            for (let t = 0; t < o.length; t++) {
              const n = i[e + t];
              o[t].ze = (0, s.v)(n[2], this.resolveDataElementOptions(t + e).radius)
            }
            return o
          }
          parseObjectData(t, i, e, n) {
            const o = super.parseObjectData(t, i, e, n);
            for (let t = 0; t < o.length; t++) {
              const n = i[e + t];
              o[t].ze = (0, s.v)(n && n.r && +n.r, this.resolveDataElementOptions(t + e).radius)
            }
            return o
          }
          getMaxOverflow() {
            const t = this.te.data;
            let i = 0;
            for (let e = t.length - 1; e >= 0; --e) i = Math.max(i, t[e].size(this.resolveDataElementOptions(e)) / 2);
            return i > 0 && i
          }
          getLabelAndValue(t) {
            const i = this.te,
              e = this.chart.data.labels || [],
              {
                xScale: s,
                yScale: n
              } = i,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              h = n.getLabelForValue(o.y),
              a = o.ze;
            return {
              label: e[t] || "",
              value: "(" + r + ", " + h + (a ? ", " + a : "") + ")"
            }
          }
          update(t) {
            const i = this.te.data;
            this.updateElements(i, 0, i.length, t)
          }
          updateElements(t, i, e, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: r
              } = this.te,
              {
                sharedOptions: h,
                includeOptions: a
              } = this.ke(i, s),
              c = o.axis,
              l = r.axis;
            for (let u = i; i + e > u; u++) {
              const i = t[u],
                e = !n && this.getParsed(u),
                f = {},
                d = f[c] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(e[c]),
                p = f[l] = n ? r.getBasePixel() : r.getPixelForValue(e[l]);
              f.skip = isNaN(d) || isNaN(p), a && (f.options = h || this.resolveDataElementOptions(u, i.active ? "active" : s), n && (f.options.radius = 0)), this.updateElement(i, u, f, s)
            }
          }
          resolveDataElementOptions(t, i) {
            const e = this.getParsed(t);
            let n = super.resolveDataElementOptions(t, i);
            n.$shared && (n = Object.assign({}, n, {
              $shared: !1
            }));
            const o = n.radius;
            return "active" !== i && (n.radius = 0), n.radius += (0, s.v)(e && e.ze, o), n
          }
        },
        DoughnutController: L,
        LineController: R,
        PieController: class extends L {
          static id = "pie";
          static defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%"
          }
        },
        PolarAreaController: j,
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
            const i = this.te.vScale,
              e = this.getParsed(t);
            return {
              label: i.getLabels()[t],
              value: "" + i.getLabelForValue(e[i.axis])
            }
          }
          parseObjectData(t, i, e, n) {
            return s.y.bind(this)(t, i, e, n)
          }
          update(t) {
            const i = this.te,
              e = i.dataset,
              s = i.data || [],
              n = i.iScale.getLabels();
            if (e.points = s, "resize" !== t) {
              const i = this.resolveDatasetElementOptions(t);
              this.options.showLine || (i.borderWidth = 0);
              const o = {
                Dt: !0,
                Lt: n.length === s.length,
                options: i
              };
              this.updateElement(e, void 0, o, t)
            }
            this.updateElements(s, 0, s.length, t)
          }
          updateElements(t, i, e, s) {
            const n = this.te.rScale,
              o = "reset" === s;
            for (let r = i; i + e > r; r++) {
              const i = t[r],
                e = this.resolveDataElementOptions(r, i.active ? "active" : s),
                h = n.getPointPositionForValue(r, this.getParsed(r).r),
                a = o ? n.xCenter : h.x,
                c = o ? n.yCenter : h.y,
                l = {
                  x: a,
                  y: c,
                  angle: h.angle,
                  skip: isNaN(a) || isNaN(c),
                  options: e
                };
              this.updateElement(i, r, l, s)
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
            const i = this.te,
              e = this.chart.data.labels || [],
              {
                xScale: s,
                yScale: n
              } = i,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              h = n.getLabelForValue(o.y);
            return {
              label: e[t] || "",
              value: "(" + r + ", " + h + ")"
            }
          }
          update(t) {
            const i = this.te,
              {
                data: e = []
              } = i,
              n = this.chart._i;
            let {
              start: o,
              count: r
            } = (0, s.q)(i, e, n);
            if (this.fe = o, this.de = r, (0, s.w)(i) && (o = 0, r = e.length), this.options.showLine) {
              this.datasetElementType || this.addElements();
              const {
                dataset: s,
                qe: o
              } = i;
              s.At = this.chart, s.Ct = this.index, s.Ge = !!o.Ge, s.points = e;
              const r = this.resolveDatasetElementOptions(t);
              r.segment = this.options.segment, this.updateElement(s, void 0, {
                animated: !n,
                options: r
              }, t)
            } else this.datasetElementType && (delete i.dataset, this.datasetElementType = !1);
            this.updateElements(e, o, r, t)
          }
          addElements() {
            const {
              showLine: t
            } = this.options;
            !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
          }
          updateElements(t, i, e, n) {
            const o = "reset" === n,
              {
                iScale: r,
                vScale: h,
                be: a,
                qe: c
              } = this.te,
              l = this.resolveDataElementOptions(i, n),
              u = this.getSharedOptions(l),
              f = this.includeOptions(n, u),
              d = r.axis,
              p = h.axis,
              {
                spanGaps: b,
                segment: g
              } = this.options,
              m = (0, s.x)(b) ? b : 1 / 0,
              x = this.chart._i || o || "none" === n;
            let v = i > 0 && this.getParsed(i - 1);
            for (let l = i; i + e > l; ++l) {
              const i = t[l],
                e = this.getParsed(l),
                b = x ? i : {},
                y = (0, s.k)(e[p]),
                M = b[d] = r.getPixelForValue(e[d], l),
                w = b[p] = o || y ? h.getBasePixel() : h.getPixelForValue(a ? this.applyStack(h, e, a) : e[p], l);
              b.skip = isNaN(M) || isNaN(w) || y, b.stop = l > 0 && Math.abs(e[d] - v[d]) > m, g && (b.parsed = e, b.raw = c.data[l]), f && (b.options = u || this.resolveDataElementOptions(l, i.active ? "active" : n)), x || this.updateElement(i, l, b, n), v = e
            }
            this.updateSharedOptions(u, n, l)
          }
          getMaxOverflow() {
            const t = this.te,
              i = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let e = i.length - 1; e >= 0; --e) t = Math.max(t, i[e].size(this.resolveDataElementOptions(e)) / 2);
              return t > 0 && t
            }
            const e = t.dataset,
              s = e.options && e.options.borderWidth || 0;
            if (!i.length) return s;
            const n = i[0].size(this.resolveDataElementOptions(0)),
              o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
            return Math.max(s, n, o) / 2
          }
        }
      });
      class N {
        static override(t) {
          Object.assign(N.prototype, t)
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
      var P = N;

      function T(t, i, e, n) {
        const {
          controller: o,
          data: r,
          ot: h
        } = t, a = o.te.iScale;
        if (a && i === a.axis && "r" !== i && h && r.length) {
          const t = a.ui ? s.A : s.B;
          if (!n) return t(r, i, e);
          if (o.ue) {
            const s = r[0],
              n = "function" == typeof s.getRange && s.getRange(i);
            if (n) {
              const s = t(r, i, e - n),
                o = t(r, i, e + n);
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

      function F(t, i, e, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
          r = e[i];
        for (let t = 0, e = o.length; e > t; ++t) {
          const {
            index: e,
            data: h
          } = o[t], {
            lo: a,
            hi: c
          } = T(o[t], i, r, n);
          for (let t = a; c >= t; ++t) {
            const i = h[t];
            i.skip || s(i, e, t)
          }
        }
      }

      function I(t, i, e, n, o) {
        const r = [];
        return !o && !t.isPointInArea(i) || F(t, e, i, function(e, h, a) {
          !o && !(0, s.C)(e, t.chartArea, 0) || e.inRange(i.x, i.y, n) && r.push({
            element: e,
            datasetIndex: h,
            index: a
          })
        }, !0), r
      }

      function z(t, i, e, n, o, r) {
        return r || t.isPointInArea(i) ? "r" !== e || n ? function(t, i, e, s, n, o) {
          let r = [];
          const h = function(t) {
            const i = -1 !== t.indexOf("x"),
              e = -1 !== t.indexOf("y");
            return function(t, s) {
              const n = i ? Math.abs(t.x - s.x) : 0,
                o = e ? Math.abs(t.y - s.y) : 0;
              return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
            }
          }(e);
          let a = 1 / 0;
          return F(t, e, i, function(e, c, l) {
            const u = e.inRange(i.x, i.y, n);
            if (s && !u) return;
            const f = e.getCenterPoint(n);
            if (!o && !t.isPointInArea(f) && !u) return;
            const d = h(i, f);
            a > d ? (r = [{
              element: e,
              datasetIndex: c,
              index: l
            }], a = d) : d === a && r.push({
              element: e,
              datasetIndex: c,
              index: l
            })
          }), r
        }(t, i, e, n, o, r) : function(t, i, e, n) {
          let o = [];
          return F(t, e, i, function(t, e, r) {
            const {
              startAngle: h,
              endAngle: a
            } = t.getProps(["startAngle", "endAngle"], n), {
              angle: c
            } = (0, s.D)(t, {
              x: i.x,
              y: i.y
            });
            (0, s.p)(c, h, a) && o.push({
              element: t,
              datasetIndex: e,
              index: r
            })
          }), o
        }(t, i, e, o) : []
      }

      function W(t, i, e, s, n) {
        const o = [],
          r = "x" === e ? "inXRange" : "inYRange";
        let h = !1;
        return F(t, e, i, (t, s, a) => {
          t[r](i[e], n) && (o.push({
            element: t,
            datasetIndex: s,
            index: a
          }), h = h || t.inRange(i.x, i.y, n))
        }), s && !h ? [] : o
      }
      var B = {
        evaluateInteractionItems: F,
        modes: {
          index(t, i, e, n) {
            const o = (0, s.z)(i, t),
              r = e.axis || "x",
              h = e.includeInvisible || !1,
              a = e.intersect ? I(t, o, r, n, h) : z(t, o, r, !1, n, h),
              c = [];
            return a.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
              const i = a[0].index,
                e = t.data[i];
              e && !e.skip && c.push({
                element: e,
                datasetIndex: t.index,
                index: i
              })
            }), c) : []
          },
          dataset(t, i, e, n) {
            const o = (0, s.z)(i, t),
              r = e.axis || "xy",
              h = e.includeInvisible || !1;
            let a = e.intersect ? I(t, o, r, n, h) : z(t, o, r, !1, n, h);
            if (a.length > 0) {
              const i = a[0].datasetIndex,
                e = t.getDatasetMeta(i).data;
              a = [];
              for (let t = 0; t < e.length; ++t) a.push({
                element: e[t],
                datasetIndex: i,
                index: t
              })
            }
            return a
          },
          point: (t, i, e, n) => I(t, (0, s.z)(i, t), e.axis || "xy", n, e.includeInvisible || !1),
          nearest(t, i, e, n) {
            const o = (0, s.z)(i, t),
              r = e.axis || "xy",
              h = e.includeInvisible || !1;
            return z(t, o, r, e.intersect, n, h)
          },
          x: (t, i, e, n) => W(t, (0, s.z)(i, t), "x", e.intersect, n),
          y: (t, i, e, n) => W(t, (0, s.z)(i, t), "y", e.intersect, n)
        }
      };
      const V = ["left", "top", "right", "bottom"];

      function H(t, i) {
        return t.filter(t => t.pos === i)
      }

      function Y(t, i) {
        return t.filter(t => -1 === V.indexOf(t.pos) && t.box.axis === i)
      }

      function $(t, i) {
        return t.sort((t, e) => {
          const s = i ? e : t,
            n = i ? t : e;
          return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
        })
      }

      function _(t, i, e, s) {
        return Math.max(t[e], i[e]) + Math.max(t[s], i[s])
      }

      function X(t, i) {
        t.top = Math.max(t.top, i.top), t.left = Math.max(t.left, i.left), t.bottom = Math.max(t.bottom, i.bottom), t.right = Math.max(t.right, i.right)
      }

      function U(t, i, e, n) {
        const {
          pos: o,
          box: r
        } = e, h = t.maxPadding;
        if (!(0, s.i)(o)) {
          e.size && (t[o] -= e.size);
          const i = n[e.stack] || {
            size: 0,
            count: 1
          };
          i.size = Math.max(i.size, e.horizontal ? r.height : r.width), e.size = i.size / i.count, t[o] += e.size
        }
        r.getPadding && X(h, r.getPadding());
        const a = Math.max(0, i.outerWidth - _(h, t, "left", "right")),
          c = Math.max(0, i.outerHeight - _(h, t, "top", "bottom")),
          l = a !== t.w,
          u = c !== t.h;
        return t.w = a, t.h = c, e.horizontal ? {
          same: l,
          other: u
        } : {
          same: u,
          other: l
        }
      }

      function K(t, i) {
        const e = i.maxPadding;
        return function(t) {
          const s = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
          return t.forEach(t => {
            s[t] = Math.max(i[t], e[t])
          }), s
        }(t ? ["left", "right"] : ["top", "bottom"])
      }

      function Z(t, i, e, s) {
        const n = [];
        let o, r, h, a, c, l;
        for (o = 0, r = t.length, c = 0; r > o; ++o) {
          h = t[o], a = h.box, a.update(h.width || i.w, h.height || i.h, K(h.horizontal, i));
          const {
            same: r,
            other: u
          } = U(i, e, h, s);
          c |= r && n.length, l = l || u, a.fullSize || n.push(h)
        }
        return c && Z(n, i, e, s) || l
      }

      function q(t, i, e, s, n) {
        t.top = e, t.left = i, t.right = i + s, t.bottom = e + n, t.width = s, t.height = n
      }

      function Q(t, i, e, n) {
        const o = e.padding;
        let {
          x: r,
          y: h
        } = i;
        for (const a of t) {
          const t = a.box,
            c = n[a.stack] || {
              count: 1,
              placed: 0,
              weight: 1
            },
            l = a.stackWeight / c.weight || 1;
          if (a.horizontal) {
            const n = i.w * l,
              r = c.size || t.height;
            (0, s.h)(c.start) && (h = c.start), t.fullSize ? q(t, o.left, h, e.outerWidth - o.right - o.left, r) : q(t, i.left + c.placed, h, n, r), c.start = h, c.placed += n, h = t.bottom
          } else {
            const n = i.h * l,
              h = c.size || t.width;
            (0, s.h)(c.start) && (r = c.start), t.fullSize ? q(t, r, o.top, h, e.outerHeight - o.bottom - o.top) : q(t, r, i.top + c.placed, h, n), c.start = r, c.placed += n, r = t.right
          }
        }
        i.x = r, i.y = h
      }
      var G = {
        addBox(t, i) {
          t.boxes || (t.boxes = []), i.fullSize = i.fullSize || !1, i.position = i.position || "top", i.weight = i.weight || 0, i.fi = i.fi || function() {
            return [{
              z: 0,
              draw(t) {
                i.draw(t)
              }
            }]
          }, t.boxes.push(i)
        },
        removeBox(t, i) {
          const e = t.boxes ? t.boxes.indexOf(i) : -1; - 1 !== e && t.boxes.splice(e, 1)
        },
        configure(t, i, e) {
          i.fullSize = e.fullSize, i.position = e.position, i.weight = e.weight
        },
        update(t, i, e, n) {
          if (!t) return;
          const o = (0, s.E)(t.options.layout.padding),
            r = Math.max(i - o.width, 0),
            h = Math.max(e - o.height, 0),
            a = function(t) {
              const i = function(t) {
                  const i = [];
                  let e, s, n, o, r, h;
                  for (e = 0, s = (t || []).length; s > e; ++e) n = t[e], ({
                    position: o,
                    options: {
                      stack: r,
                      stackWeight: h = 1
                    }
                  } = n), i.push({
                    index: e,
                    box: n,
                    pos: o,
                    horizontal: n.isHorizontal(),
                    weight: n.weight,
                    stack: r && o + r,
                    stackWeight: h
                  });
                  return i
                }(t),
                e = $(i.filter(t => t.box.fullSize), !0),
                s = $(H(i, "left"), !0),
                n = $(H(i, "right")),
                o = $(H(i, "top"), !0),
                r = $(H(i, "bottom")),
                h = Y(i, "x"),
                a = Y(i, "y");
              return {
                fullSize: e,
                leftAndTop: s.concat(o),
                rightAndBottom: n.concat(a).concat(r).concat(h),
                chartArea: H(i, "chartArea"),
                vertical: s.concat(n).concat(a),
                horizontal: o.concat(r).concat(h)
              }
            }(t.boxes),
            c = a.vertical,
            l = a.horizontal;
          (0, s.F)(t.boxes, t => {
            "function" == typeof t.beforeLayout && t.beforeLayout()
          });
          const u = c.reduce((t, i) => i.box.options && !1 === i.box.options.display ? t : t + 1, 0) || 1,
            f = Object.freeze({
              outerWidth: i,
              outerHeight: e,
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
            b = function(t, i) {
              const e = function(t) {
                  const i = {};
                  for (const e of t) {
                    const {
                      stack: t,
                      pos: s,
                      stackWeight: n
                    } = e;
                    if (!t || !V.includes(s)) continue;
                    const o = i[t] || (i[t] = {
                      count: 0,
                      placed: 0,
                      weight: 0,
                      size: 0
                    });
                    o.count++, o.weight += n
                  }
                  return i
                }(t),
                {
                  vBoxMaxWidth: s,
                  hBoxMaxHeight: n
                } = i;
              let o, r, h;
              for (o = 0, r = t.length; r > o; ++o) {
                h = t[o];
                const {
                  fullSize: r
                } = h.box, a = e[h.stack], c = a && h.stackWeight / a.weight;
                h.horizontal ? (h.width = c ? c * s : r && i.availableWidth, h.height = n) : (h.width = s, h.height = c ? c * n : r && i.availableHeight)
              }
              return e
            }(c.concat(l), f);
          Z(a.fullSize, p, f, b), Z(c, p, f, b), Z(l, p, f, b) && Z(c, p, f, b),
            function(t) {
              const i = t.maxPadding;

              function e(e) {
                const s = Math.max(i[e] - t[e], 0);
                return t[e] += s, s
              }
              t.y += e("top"), t.x += e("left"), e("right"), e("bottom")
            }(p), Q(a.leftAndTop, p, f, b), p.x += p.w, p.y += p.h, Q(a.rightAndBottom, p, f, b), t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w
            }, (0, s.F)(a.chartArea, i => {
              const e = i.box;
              Object.assign(e, t.chartArea), e.update(p.w, p.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              })
            })
        }
      };
      class J {
        acquireContext(t, i) {}
        releaseContext(t) {
          return !1
        }
        addEventListener(t, i, e) {}
        removeEventListener(t, i, e) {}
        getDevicePixelRatio() {
          return 1
        }
        getMaximumSize(t, i, e, s) {
          return i = Math.max(0, i || t.width), e = e || t.height, {
            width: i,
            height: Math.max(0, s ? Math.floor(i / s) : e)
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
      const it = "$chartjs",
        et = {
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

      function ot(t, i, e) {
        t && t.canvas && t.canvas.removeEventListener(i, e, nt)
      }

      function rt(t, i) {
        for (const e of t)
          if (e === i || e.contains(i)) return !0
      }

      function ht(t, i, e) {
        const s = t.canvas,
          n = new MutationObserver(t => {
            let i = !1;
            for (const e of t) i = i || rt(e.addedNodes, s), i = i && !rt(e.removedNodes, s);
            i && e()
          });
        return n.observe(document, {
          childList: !0,
          subtree: !0
        }), n
      }

      function at(t, i, e) {
        const s = t.canvas,
          n = new MutationObserver(t => {
            let i = !1;
            for (const e of t) i = i || rt(e.removedNodes, s), i = i && !rt(e.addedNodes, s);
            i && e()
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
        t !== lt && (lt = t, ct.forEach((i, e) => {
          e.currentDevicePixelRatio !== t && i()
        }))
      }

      function ft(t, i, e) {
        const n = t.canvas,
          o = n && (0, s.I)(n);
        if (!o) return;
        const r = (0, s.L)((t, i) => {
            const s = o.clientWidth;
            e(t, i), s < o.clientWidth && e()
          }, window),
          h = new ResizeObserver(t => {
            const i = t[0],
              e = i.contentRect.width,
              s = i.contentRect.height;
            0 === e && 0 === s || r(e, s)
          });
        return h.observe(o),
          function(t, i) {
            ct.size || window.addEventListener("resize", ut), ct.set(t, i)
          }(t, r), h
      }

      function dt(t, i, e) {
        e && e.disconnect(), "resize" === i && function(t) {
          ct.delete(t), ct.size || window.removeEventListener("resize", ut)
        }(t)
      }

      function pt(t, i, e) {
        const n = t.canvas,
          o = (0, s.L)(i => {
            null !== t.ctx && e(function(t, i) {
              const e = et[t.type] || t.type,
                {
                  x: n,
                  y: o
                } = (0, s.z)(t, i);
              return {
                type: e,
                chart: i,
                native: t,
                x: void 0 !== n ? n : null,
                y: void 0 !== o ? o : null
              }
            }(i, t))
          }, t);
        return function(t, i, e) {
          t && t.addEventListener(i, e, nt)
        }(n, i, o), o
      }
      class bt extends J {
        acquireContext(t, i) {
          const e = t && t.getContext && t.getContext("2d");
          return e && e.canvas === t ? (function(t, i) {
            const e = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");
            if (t[it] = {
                initial: {
                  height: n,
                  width: o,
                  style: {
                    display: e.display,
                    height: e.height,
                    width: e.width
                  }
                }
              }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", st(o)) {
              const i = (0, s.J)(t, "width");
              void 0 !== i && (t.width = i)
            }
            if (st(n))
              if ("" === t.style.height) t.height = t.width / (i || 2);
              else {
                const i = (0, s.J)(t, "height");
                void 0 !== i && (t.height = i)
              }
          }(t, i), e) : null
        }
        releaseContext(t) {
          const i = t.canvas;
          if (!i[it]) return !1;
          const e = i[it].initial;
          ["height", "width"].forEach(t => {
            const n = e[t];
            (0, s.k)(n) ? i.removeAttribute(t): i.setAttribute(t, n)
          });
          const n = e.style || {};
          return Object.keys(n).forEach(t => {
            i.style[t] = n[t]
          }), i.width = i.width, delete i[it], !0
        }
        addEventListener(t, i, e) {
          this.removeEventListener(t, i);
          const s = t.$proxies || (t.$proxies = {}),
            n = {
              attach: ht,
              detach: at,
              resize: ft
            } [i] || pt;
          s[i] = n(t, i, e)
        }
        removeEventListener(t, i) {
          const e = t.$proxies || (t.$proxies = {}),
            s = e[i];
          s && (({
            attach: dt,
            detach: dt,
            resize: dt
          } [i] || ot)(t, i, s), e[i] = void 0)
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio
        }
        getMaximumSize(t, i, e, n) {
          return (0, s.G)(t, i, e, n)
        }
        isAttached(t) {
          const i = (0, s.I)(t);
          return !(!i || !i.isConnected)
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
            x: i,
            y: e
          } = this.getProps(["x", "y"], t);
          return {
            x: i,
            y: e
          }
        }
        hasValue() {
          return (0, s.x)(this.x) && (0, s.x)(this.y)
        }
        getProps(t, i) {
          const e = this.$animations;
          if (!i || !e) return this;
          const s = {};
          return t.forEach(t => {
            s[t] = e[t] && e[t].active() ? e[t].Kt : this[t]
          }), s
        }
      }

      function mt(t, i, e, n, o) {
        const r = (0, s.v)(n, 0),
          h = Math.min((0, s.v)(o, t.length), t.length);
        let a, c, l, u = 0;
        for (e = Math.ceil(e), o && (a = o - n, e = a / Math.floor(a / e)), l = r; 0 > l;) u++, l = Math.round(r + u * e);
        for (c = Math.max(r, 0); h > c; c++) c === l && (i.push(t[c]), u++, l = Math.round(r + u * e))
      }
      const xt = (t, i, e) => "top" === i || "left" === i ? t[i] + e : t[i] - e,
        vt = (t, i) => Math.min(i || t, t);

      function yt(t, i) {
        const e = [],
          s = t.length / i,
          n = t.length;
        let o = 0;
        for (; n > o; o += s) e.push(t[Math.floor(o)]);
        return e
      }

      function Mt(t, i, e) {
        const s = t.ticks.length,
          n = Math.min(i, s - 1),
          o = t.ci,
          r = t.li,
          h = 1e-6;
        let a, c = t.getPixelForTick(n);
        if (!(e && (a = 1 === s ? Math.max(c - o, r - c) : 0 === i ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(n - 1)) / 2, c += i > n ? a : -a, o - h > c || c > r + h))) return c
      }

      function wt(t) {
        return t.drawTicks ? t.tickLength : 0
      }

      function kt(t, i) {
        if (!t.display) return 0;
        const e = (0, s.a0)(t.font, i),
          n = (0, s.E)(t.padding);
        return ((0, s.b)(t.text) ? t.text.length : 1) * e.lineHeight + n.height
      }

      function Ot(t, i, e) {
        let n = (0, s.a1)(t);
        return (e && "right" !== i || !e && "right" === i) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)), n
      }
      class St extends gt {
        constructor(t) {
          super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.di = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this.pi = void 0, this.ticks = [], this.bi = null, this.gi = null, this.mi = null, this.Ie = 0, this.xi = 0, this.yi = {}, this.ci = void 0, this.li = void 0, this.ui = !1, this.Mi = void 0, this.wi = void 0, this._e = void 0, this.ki = void 0, this.Oi = 0, this.Si = 0, this.Fe = {}, this.Di = !1, this.$context = void 0
        }
        init(t) {
          this.options = t.setContext(this.getContext()), this.axis = t.axis, this.wi = this.parse(t.min), this.Mi = this.parse(t.max), this.ki = this.parse(t.suggestedMin), this._e = this.parse(t.suggestedMax)
        }
        parse(t, i) {
          return t
        }
        getUserBounds() {
          let {
            wi: t,
            Mi: i,
            ki: e,
            _e: n
          } = this;
          return t = (0, s.O)(t, 1 / 0), i = (0, s.O)(i, -1 / 0), e = (0, s.O)(e, 1 / 0), n = (0, s.O)(n, -1 / 0), {
            min: (0, s.O)(t, e),
            max: (0, s.O)(i, n),
            minDefined: (0, s.g)(t),
            maxDefined: (0, s.g)(i)
          }
        }
        getMinMax(t) {
          let i, {
            min: e,
            max: n,
            minDefined: o,
            maxDefined: r
          } = this.getUserBounds();
          if (o && r) return {
            min: e,
            max: n
          };
          const h = this.getMatchingVisibleMetas();
          for (let s = 0, a = h.length; a > s; ++s) i = h[s].controller.getMinMax(this, t), o || (e = Math.min(e, i.min)), r || (n = Math.max(n, i.max));
          return e = r && e > n ? n : e, n = o && e > n ? e : n, {
            min: (0, s.O)(e, (0, s.O)(n, e)),
            max: (0, s.O)(n, (0, s.O)(e, n))
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
          return this.gi || (this.gi = this.Ai(t))
        }
        beforeLayout() {
          this.Fe = {}, this.Di = !1
        }
        beforeUpdate() {
          (0, s.Q)(this.options.beforeUpdate, [this])
        }
        update(t, i, e) {
          const {
            beginAtZero: n,
            grace: o,
            ticks: r
          } = this.options, h = r.sampleSize;
          this.beforeUpdate(), this.maxWidth = t, this.maxHeight = i, this.di = e = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, e), this.ticks = null, this.mi = null, this.bi = null, this.gi = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.xi = this.isHorizontal() ? this.width + e.left + e.right : this.height + e.top + e.bottom, this.Di || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.pi = (0, s.R)(this, o, n), this.Di = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
          const a = h < this.ticks.length;
          this.Ci(a ? yt(this.ticks, h) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || "auto" === r.source) && (this.ticks = function(t, i) {
            const e = t.options.ticks,
              n = function(t) {
                const i = t.options.offset,
                  e = t.Li(),
                  s = t.Ie / e + (i ? 0 : 1),
                  n = t.xi / e;
                return Math.floor(Math.min(s, n))
              }(t),
              o = Math.min(e.maxTicksLimit || n, n),
              r = e.major.enabled ? function(t) {
                const i = [];
                let e, s;
                for (e = 0, s = t.length; s > e; e++) t[e].major && i.push(e);
                return i
              }(i) : [],
              h = r.length,
              a = r[0],
              c = r[h - 1],
              l = [];
            if (h > o) return function(t, i, e, s) {
              let n, o = 0,
                r = e[0];
              for (s = Math.ceil(s), n = 0; n < t.length; n++) n === r && (i.push(t[n]), o++, r = e[o * s])
            }(i, l, r, h / o), l;
            const u = function(t, i, e) {
              const n = function(t) {
                  const i = t.length;
                  let e, s;
                  if (2 > i) return !1;
                  for (s = t[0], e = 1; i > e; ++e)
                    if (t[e] - t[e - 1] !== s) return !1;
                  return s
                }(t),
                o = i.length / e;
              if (!n) return Math.max(o, 1);
              const r = (0, s.N)(n);
              for (let t = 0, i = r.length - 1; i > t; t++) {
                const i = r[t];
                if (i > o) return i
              }
              return Math.max(o, 1)
            }(r, i, o);
            if (h > 0) {
              let t, e;
              const n = h > 1 ? Math.round((c - a) / (h - 1)) : null;
              for (mt(i, l, u, (0, s.k)(n) ? 0 : a - n, a), t = 0, e = h - 1; e > t; t++) mt(i, l, u, r[t], r[t + 1]);
              return mt(i, l, u, c, (0, s.k)(n) ? i.length : c + n), l
            }
            return mt(i, l, u), l
          }(this, this.ticks), this.mi = null, this.afterAutoSkip()), a && this.Ci(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
        }
        configure() {
          let t, i, e = this.options.reverse;
          this.isHorizontal() ? (t = this.left, i = this.right) : (t = this.top, i = this.bottom, e = !e), this.ci = t, this.li = i, this.ui = e, this.Ie = i - t, this.Ri = this.options.alignToPixels
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
        Ei(t) {
          this.chart.notifyPlugins(t, this.getContext()), (0, s.Q)(this.options[t], [this])
        }
        beforeDataLimits() {
          this.Ei("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits() {
          this.Ei("afterDataLimits")
        }
        beforeBuildTicks() {
          this.Ei("beforeBuildTicks")
        }
        buildTicks() {
          return []
        }
        afterBuildTicks() {
          this.Ei("afterBuildTicks")
        }
        beforeTickToLabelConversion() {
          (0, s.Q)(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
          const i = this.options.ticks;
          let e, n, o;
          for (e = 0, n = t.length; n > e; e++) o = t[e], o.label = (0, s.Q)(i.callback, [o.value, e, t], this)
        }
        afterTickToLabelConversion() {
          (0, s.Q)(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
          (0, s.Q)(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
          const t = this.options,
            i = t.ticks,
            e = vt(this.ticks.length, t.ticks.maxTicksLimit),
            n = i.minRotation || 0,
            o = i.maxRotation;
          let r, h, a, c = n;
          if (!(this.ji() && i.display && o > n && e > 1 && this.isHorizontal())) return void(this.labelRotation = n);
          const l = this.Pi(),
            u = l.widest.width,
            f = l.highest.height,
            d = (0, s.S)(this.chart.width - u, 0, this.maxWidth);
          r = t.offset ? this.maxWidth / e : d / (e - 1), u + 6 > r && (r = d / (e - (t.offset ? .5 : 1)), h = this.maxHeight - wt(t.grid) - i.padding - kt(t.title, this.chart.options.font), a = Math.sqrt(u * u + f * f), c = (0, s.U)(Math.min(Math.asin((0, s.S)((l.highest.height + 6) / r, -1, 1)), Math.asin((0, s.S)(h / a, -1, 1)) - Math.asin((0, s.S)(f / a, -1, 1)))), c = Math.max(n, Math.min(o, c))), this.labelRotation = c
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
              chart: i,
              options: {
                ticks: e,
                title: n,
                grid: o
              }
            } = this,
            r = this.ji(),
            h = this.isHorizontal();
          if (r) {
            const r = kt(n, i.options.font);
            if (h ? (t.width = this.maxWidth, t.height = wt(o) + r) : (t.height = this.maxHeight, t.width = wt(o) + r), e.display && this.ticks.length) {
              const {
                first: i,
                last: n,
                widest: o,
                highest: r
              } = this.Pi(), a = 2 * e.padding, c = (0, s.t)(this.labelRotation), l = Math.cos(c), u = Math.sin(c);
              if (h) {
                const i = e.mirror ? 0 : u * o.width + l * r.height;
                t.height = Math.min(this.maxHeight, t.height + i + a)
              } else {
                const i = e.mirror ? 0 : l * o.width + u * r.height;
                t.width = Math.min(this.maxWidth, t.width + i + a)
              }
              this.Ti(i, n, u, l)
            }
          }
          this.Ni(), h ? (this.width = this.Ie = i.width - this.di.left - this.di.right, this.height = t.height) : (this.width = t.width, this.height = this.Ie = i.height - this.di.top - this.di.bottom)
        }
        Ti(t, i, e, s) {
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
            h ? a ? (l = s * t.width, u = e * i.height) : (l = e * t.height, u = s * i.width) : "start" === n ? u = i.width : "end" === n ? l = t.width : "inner" !== n && (l = t.width / 2, u = i.width / 2), this.paddingLeft = Math.max((l - r + o) * this.width / (this.width - r), 0), this.paddingRight = Math.max((u - c + o) * this.width / (this.width - c), 0)
          } else {
            let e = i.height / 2,
              s = t.height / 2;
            "start" === n ? (e = 0, s = t.height) : "end" === n && (e = i.height, s = 0), this.paddingTop = e + o, this.paddingBottom = s + o
          }
        }
        Ni() {
          this.di && (this.di.left = Math.max(this.paddingLeft, this.di.left), this.di.top = Math.max(this.paddingTop, this.di.top), this.di.right = Math.max(this.paddingRight, this.di.right), this.di.bottom = Math.max(this.paddingBottom, this.di.bottom))
        }
        afterFit() {
          (0, s.Q)(this.options.afterFit, [this])
        }
        isHorizontal() {
          const {
            axis: t,
            position: i
          } = this.options;
          return "top" === i || "bottom" === i || "x" === t
        }
        isFullSize() {
          return this.options.fullSize
        }
        Ci(t) {
          let i, e;
          for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), i = 0, e = t.length; e > i; i++)(0, s.k)(t[i].label) && (t.splice(i, 1), e--, i--);
          this.afterTickToLabelConversion()
        }
        Pi() {
          let t = this.mi;
          if (!t) {
            const i = this.options.ticks.sampleSize;
            let e = this.ticks;
            i < e.length && (e = yt(e, i)), this.mi = t = this.Fi(e, e.length, this.options.ticks.maxTicksLimit)
          }
          return t
        }
        Fi(t, i, e) {
          const {
            ctx: n,
            yi: o
          } = this, r = [], h = [], a = Math.floor(i / vt(i, e));
          let c, l, u, f, d, p, b, g, m, x, v, y = 0,
            M = 0;
          for (c = 0; i > c; c += a) {
            if (f = t[c].label, d = this.Ii(c), n.font = p = d.string, b = o[p] = o[p] || {
                data: {},
                gc: []
              }, g = d.lineHeight, m = x = 0, (0, s.k)(f) || (0, s.b)(f)) {
              if ((0, s.b)(f))
                for (l = 0, u = f.length; u > l; ++l) v = f[l], !(0, s.k)(v) && !(0, s.b)(v) && (m = (0, s.V)(n, b.data, b.gc, m, v), x += g)
            } else m = (0, s.V)(n, b.data, b.gc, m, f), x = g;
            r.push(m), h.push(x), y = Math.max(m, y), M = Math.max(x, M)
          }! function(t, i) {
            (0, s.F)(t, t => {
              const e = t.gc,
                s = e.length / 2;
              let n;
              if (s > i) {
                for (n = 0; s > n; ++n) delete t.data[e[n]];
                e.splice(0, s)
              }
            })
          }(o, i);
          const w = r.indexOf(y),
            k = h.indexOf(M),
            O = t => ({
              width: r[t] || 0,
              height: h[t] || 0
            });
          return {
            first: O(0),
            last: O(i - 1),
            widest: O(w),
            highest: O(k),
            widths: r,
            heights: h
          }
        }
        getLabelForValue(t) {
          return t
        }
        getPixelForValue(t, i) {
          return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const i = this.ticks;
          return 0 > t || t > i.length - 1 ? null : this.getPixelForValue(i[t].value)
        }
        getPixelForDecimal(t) {
          this.ui && (t = 1 - t);
          const i = this.ci + t * this.Ie;
          return (0, s.W)(this.Ri ? (0, s.X)(this.chart, i, 0) : i)
        }
        getDecimalForPixel(t) {
          const i = (t - this.ci) / this.Ie;
          return this.ui ? 1 - i : i
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
          const {
            min: t,
            max: i
          } = this;
          return 0 > t && 0 > i ? i : t > 0 && i > 0 ? t : 0
        }
        getContext(t) {
          const i = this.ticks || [];
          if (t >= 0 && t < i.length) {
            const e = i[t];
            return e.$context || (e.$context = function(t, i, e) {
              return (0, s.j)(t, {
                tick: e,
                index: i,
                type: "tick"
              })
            }(this.getContext(), t, e))
          }
          return this.$context || (this.$context = function(t, i) {
            return (0, s.j)(t, {
              scale: i,
              type: "scale"
            })
          }(this.chart.getContext(), this))
        }
        Li() {
          const t = this.options.ticks,
            i = (0, s.t)(this.labelRotation),
            e = Math.abs(Math.cos(i)),
            n = Math.abs(Math.sin(i)),
            o = this.Pi(),
            r = t.autoSkipPadding || 0,
            h = o ? o.widest.width + r : 0,
            a = o ? o.highest.height + r : 0;
          return this.isHorizontal() ? a * e > h * n ? h / e : a / n : h * e > a * n ? a / e : h / n
        }
        ji() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        zi(t) {
          const i = this.axis,
            e = this.chart,
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
              return (0, s.X)(e, t, p)
            };
          let m, x, v, y, M, w, k, O, S, D, A, C;
          if ("top" === r) m = g(this.bottom), w = this.bottom - u, O = m - b, D = g(t.top) + b, C = t.bottom;
          else if ("bottom" === r) m = g(this.top), D = t.top, C = g(t.bottom) - b, w = m + b, O = this.top + u;
          else if ("left" === r) m = g(this.right), M = this.right - u, k = m - b, S = g(t.left) + b, A = t.right;
          else if ("right" === r) m = g(this.left), S = t.left, A = g(t.right) - b, M = m + b, k = this.left + u;
          else if ("x" === i) {
            if ("center" === r) m = g((t.top + t.bottom) / 2 + .5);
            else if ((0, s.i)(r)) {
              const t = Object.keys(r)[0],
                i = r[t];
              m = g(this.chart.scales[t].getPixelForValue(i))
            }
            D = t.top, C = t.bottom, w = m + b, O = w + u
          } else if ("y" === i) {
            if ("center" === r) m = g((t.left + t.right) / 2);
            else if ((0, s.i)(r)) {
              const t = Object.keys(r)[0],
                i = r[t];
              m = g(this.chart.scales[t].getPixelForValue(i))
            }
            M = m - b, k = M - u, S = t.left, A = t.right
          }
          const L = (0, s.v)(n.ticks.maxTicksLimit, l),
            R = Math.max(1, Math.ceil(l / L));
          for (x = 0; l > x; x += R) {
            const t = this.getContext(x),
              i = o.setContext(t),
              n = h.setContext(t),
              r = i.lineWidth,
              l = i.color,
              u = n.dash || [],
              d = n.dashOffset,
              p = i.tickWidth,
              b = i.tickColor,
              g = i.tickBorderDash || [],
              m = i.tickBorderDashOffset;
            v = Mt(this, x, a), void 0 !== v && (y = (0, s.X)(e, v, r), c ? M = k = S = A = y : w = O = D = C = y, f.push({
              tx1: M,
              ty1: w,
              tx2: k,
              ty2: O,
              x1: S,
              y1: D,
              x2: A,
              y2: C,
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
          return this.Oi = l, this.Si = m, f
        }
        Ai(t) {
          const i = this.axis,
            e = this.options,
            {
              position: n,
              ticks: o
            } = e,
            r = this.isHorizontal(),
            h = this.ticks,
            {
              align: a,
              crossAlign: c,
              padding: l,
              mirror: u
            } = o,
            f = wt(e.grid),
            d = f + l,
            p = u ? -l : d,
            b = -(0, s.t)(this.labelRotation),
            g = [];
          let m, x, v, y, M, w, k, O, S, D, A, C, L = "middle";
          if ("top" === n) w = this.bottom - p, k = this.Wi();
          else if ("bottom" === n) w = this.top + p, k = this.Wi();
          else if ("left" === n) {
            const t = this.Bi(f);
            k = t.textAlign, M = t.x
          } else if ("right" === n) {
            const t = this.Bi(f);
            k = t.textAlign, M = t.x
          } else if ("x" === i) {
            if ("center" === n) w = (t.top + t.bottom) / 2 + d;
            else if ((0, s.i)(n)) {
              const t = Object.keys(n)[0],
                i = n[t];
              w = this.chart.scales[t].getPixelForValue(i) + d
            }
            k = this.Wi()
          } else if ("y" === i) {
            if ("center" === n) M = (t.left + t.right) / 2 - d;
            else if ((0, s.i)(n)) {
              const t = Object.keys(n)[0],
                i = n[t];
              M = this.chart.scales[t].getPixelForValue(i)
            }
            k = this.Bi(f).textAlign
          }
          "y" === i && ("start" === a ? L = "top" : "end" === a && (L = "bottom"));
          const R = this.Pi();
          for (m = 0, x = h.length; x > m; ++m) {
            v = h[m], y = v.label;
            const t = o.setContext(this.getContext(m));
            O = this.getPixelForTick(m) + o.labelOffset, S = this.Ii(m), D = S.lineHeight, A = (0, s.b)(y) ? y.length : 1;
            const i = A / 2,
              e = t.color,
              a = t.textStrokeColor,
              l = t.textStrokeWidth;
            let f, d = k;
            if (r ? (M = O, "inner" === k && (d = m === x - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), C = "top" === n ? "near" === c || 0 !== b ? -A * D + D / 2 : "center" === c ? -R.highest.height / 2 - i * D + D : -R.highest.height + D / 2 : "near" === c || 0 !== b ? D / 2 : "center" === c ? R.highest.height / 2 - i * D : R.highest.height - A * D, u && (C *= -1), 0 !== b && !t.showLabelBackdrop && (M += D / 2 * Math.sin(b))) : (w = O, C = (1 - A) * D / 2), t.showLabelBackdrop) {
              const i = (0, s.E)(t.backdropPadding),
                e = R.heights[m],
                n = R.widths[m];
              let o = C - i.top,
                r = 0 - i.left;
              switch (L) {
                case "middle":
                  o -= e / 2;
                  break;
                case "bottom":
                  o -= e
              }
              switch (k) {
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
                width: n + i.width,
                height: e + i.height,
                color: t.backdropColor
              }
            }
            g.push({
              label: y,
              font: S,
              textOffset: C,
              options: {
                rotation: b,
                color: e,
                strokeColor: a,
                strokeWidth: l,
                textAlign: d,
                textBaseline: L,
                translation: [M, w],
                backdrop: f
              }
            })
          }
          return g
        }
        Wi() {
          const {
            position: t,
            ticks: i
          } = this.options;
          if (-(0, s.t)(this.labelRotation)) return "top" === t ? "left" : "right";
          let e = "center";
          return "start" === i.align ? e = "left" : "end" === i.align ? e = "right" : "inner" === i.align && (e = "inner"), e
        }
        Bi(t) {
          const {
            position: i,
            ticks: {
              crossAlign: e,
              mirror: s,
              padding: n
            }
          } = this.options, o = t + n, r = this.Pi().widest.width;
          let h, a;
          return "left" === i ? s ? (a = this.right + n, "near" === e ? h = "left" : "center" === e ? (h = "center", a += r / 2) : (h = "right", a += r)) : (a = this.right - o, "near" === e ? h = "right" : "center" === e ? (h = "center", a -= r / 2) : (h = "left", a = this.left)) : "right" === i ? s ? (a = this.left + n, "near" === e ? h = "right" : "center" === e ? (h = "center", a -= r / 2) : (h = "left", a -= r)) : (a = this.left + o, "near" === e ? h = "left" : "center" === e ? (h = "center", a += r / 2) : (h = "right", a = this.right)) : h = "right", {
            textAlign: h,
            x: a
          }
        }
        Hi() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            i = this.options.position;
          return "left" === i || "right" === i ? {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
          } : "top" === i || "bottom" === i ? {
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
              backgroundColor: i
            },
            left: e,
            top: s,
            width: n,
            height: o
          } = this;
          i && (t.save(), t.fillStyle = i, t.fillRect(e, s, n, o), t.restore())
        }
        getLineWidthForValue(t) {
          const i = this.options.grid;
          if (!this.ji() || !i.display) return 0;
          const e = this.ticks.findIndex(i => i.value === t);
          return 0 > e ? 0 : i.setContext(this.getContext(e)).lineWidth
        }
        drawGrid(t) {
          const i = this.options.grid,
            e = this.ctx,
            s = this.bi || (this.bi = this.zi(t));
          let n, o;
          const r = (t, i, s) => {
            !s.width || !s.color || (e.save(), e.lineWidth = s.width, e.strokeStyle = s.color, e.setLineDash(s.borderDash || []), e.lineDashOffset = s.borderDashOffset, e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(i.x, i.y), e.stroke(), e.restore())
          };
          if (i.display)
            for (n = 0, o = s.length; o > n; ++n) {
              const t = s[n];
              i.drawOnChartArea && r({
                x: t.x1,
                y: t.y1
              }, {
                x: t.x2,
                y: t.y2
              }, t), i.drawTicks && r({
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
            ctx: i,
            options: {
              border: e,
              grid: n
            }
          } = this, o = e.setContext(this.getContext()), r = e.display ? o.width : 0;
          if (!r) return;
          const h = n.setContext(this.getContext(0)).lineWidth,
            a = this.Si;
          let c, l, u, f;
          this.isHorizontal() ? (c = (0, s.X)(t, this.left, r) - r / 2, l = (0, s.X)(t, this.right, h) + h / 2, u = f = a) : (u = (0, s.X)(t, this.top, r) - r / 2, f = (0, s.X)(t, this.bottom, h) + h / 2, c = l = a), i.save(), i.lineWidth = o.width, i.strokeStyle = o.color, i.beginPath(), i.moveTo(c, u), i.lineTo(l, f), i.stroke(), i.restore()
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const i = this.ctx,
            e = this.Hi();
          e && (0, s.Y)(i, e);
          const n = this.getLabelItems(t);
          for (const t of n) {
            const e = t.options,
              n = t.font,
              o = t.label,
              r = t.textOffset;
            (0, s.Z)(i, o, 0, r, n, e)
          }
          e && (0, s.$)(i)
        }
        drawTitle() {
          const {
            ctx: t,
            options: {
              position: i,
              title: e,
              reverse: n
            }
          } = this;
          if (!e.display) return;
          const o = (0, s.a0)(e.font),
            r = (0, s.E)(e.padding),
            h = e.align;
          let a = o.lineHeight / 2;
          "bottom" === i || "center" === i || (0, s.i)(i) ? (a += r.bottom, (0, s.b)(e.text) && (a += o.lineHeight * (e.text.length - 1))) : a += r.top;
          const {
            titleX: c,
            titleY: l,
            maxWidth: u,
            rotation: f
          } = function(t, i, e, n) {
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
              if (d = (0, s.a2)(n, r, a), (0, s.i)(e)) {
                const t = Object.keys(e)[0],
                  s = e[t];
                p = u[t].getPixelForValue(s) + g - i
              } else p = "center" === e ? (l.bottom + l.top) / 2 + g - i : xt(t, e, i);
              f = a - r
            } else {
              if ((0, s.i)(e)) {
                const t = Object.keys(e)[0],
                  s = e[t];
                d = u[t].getPixelForValue(s) - m + i
              } else d = "center" === e ? (l.left + l.right) / 2 - m + i : xt(t, e, i);
              p = (0, s.a2)(n, h, o), b = "left" === e ? -s.H : s.H
            }
            return {
              titleX: d,
              titleY: p,
              maxWidth: f,
              rotation: b
            }
          }(this, a, i, h);
          (0, s.Z)(t, e.text, 0, 0, o, {
            color: e.color,
            maxWidth: u,
            rotation: f,
            textAlign: Ot(h, i, n),
            textBaseline: "middle",
            translation: [c, l]
          })
        }
        draw(t) {
          this.ji() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }
        fi() {
          const t = this.options,
            i = t.ticks && t.ticks.z || 0,
            e = (0, s.v)(t.grid && t.grid.z, -1),
            n = (0, s.v)(t.border && t.border.z, 0);
          return this.ji() && this.draw === St.prototype.draw ? [{
            z: e,
            draw: t => {
              this.drawBackground(), this.drawGrid(t), this.drawTitle()
            }
          }, {
            z: n,
            draw: () => {
              this.drawBorder()
            }
          }, {
            z: i,
            draw: t => {
              this.drawLabels(t)
            }
          }] : [{
            z: i,
            draw: t => {
              this.draw(t)
            }
          }]
        }
        getMatchingVisibleMetas(t) {
          const i = this.chart.getSortedVisibleDatasetMetas(),
            e = this.axis + "AxisID",
            s = [];
          let n, o;
          for (n = 0, o = i.length; o > n; ++n) {
            const o = i[n];
            o[e] === this.id && (!t || o.type === t) && s.push(o)
          }
          return s
        }
        Ii(t) {
          const i = this.options.ticks.setContext(this.getContext(t));
          return (0, s.a0)(i.font)
        }
        Vi() {
          const t = this.Ii(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t
        }
      }
      class Dt {
        constructor(t, i, e) {
          this.type = t, this.scope = i, this.override = e, this.items = Object.create(null)
        }
        isForType(t) {
          return {}.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
          const i = Object.getPrototypeOf(t);
          let e;
          var n;
          "id" in (n = i) && "defaults" in n && (e = this.register(i));
          const o = this.items,
            r = t.id,
            h = this.scope + "." + r;
          if (!r) throw Error("class does not have id: " + t);
          return r in o || (o[r] = t, function(t, i, e) {
            const n = (0, s.a4)(Object.create(null), [e ? s.d.get(e) : {}, s.d.get(i), t.defaults]);
            s.d.set(i, n), t.defaultRoutes && function(t, i) {
              Object.keys(i).forEach(e => {
                const n = e.split("."),
                  o = n.pop(),
                  r = [t].concat(n).join("."),
                  h = i[e].split("."),
                  a = h.pop(),
                  c = h.join(".");
                s.d.route(r, o, c, a)
              })
            }(i, t.defaultRoutes), t.descriptors && s.d.describe(i, t.descriptors)
          }(t, h, e), this.override && s.d.override(t.id, t.overrides)), h
        }
        get(t) {
          return this.items[t]
        }
        unregister(t) {
          const i = this.items,
            e = t.id,
            n = this.scope;
          e in i && delete i[e], n && e in s.d[n] && (delete s.d[n][e], this.override && delete s.a3[e])
        }
      }
      var At = new class {
        constructor() {
          this.controllers = new Dt(y, "datasets", !0), this.elements = new Dt(gt, "elements"), this.plugins = new Dt(Object, "plugins"), this.scales = new Dt(St, "scales"), this.Yi = [this.controllers, this.scales, this.elements]
        }
        add(...t) {
          this.$i("register", t)
        }
        remove(...t) {
          this.$i("unregister", t)
        }
        addControllers(...t) {
          this.$i("register", t, this.controllers)
        }
        addElements(...t) {
          this.$i("register", t, this.elements)
        }
        addPlugins(...t) {
          this.$i("register", t, this.plugins)
        }
        addScales(...t) {
          this.$i("register", t, this.scales)
        }
        getController(t) {
          return this.Xi(t, this.controllers, "controller")
        }
        getElement(t) {
          return this.Xi(t, this.elements, "element")
        }
        getPlugin(t) {
          return this.Xi(t, this.plugins, "plugin")
        }
        getScale(t) {
          return this.Xi(t, this.scales, "scale")
        }
        removeControllers(...t) {
          this.$i("unregister", t, this.controllers)
        }
        removeElements(...t) {
          this.$i("unregister", t, this.elements)
        }
        removePlugins(...t) {
          this.$i("unregister", t, this.plugins)
        }
        removeScales(...t) {
          this.$i("unregister", t, this.scales)
        }
        $i(t, i, e) {
          [...i].forEach(i => {
            const n = e || this.Ui(i);
            e || n.isForType(i) || n === this.plugins && i.id ? this.Ki(t, n, i) : (0, s.F)(i, i => {
              const s = e || this.Ui(i);
              this.Ki(t, s, i)
            })
          })
        }
        Ki(t, i, e) {
          const n = (0, s.a5)(t);
          (0, s.Q)(e["before" + n], [], e), i[t](e), (0, s.Q)(e["after" + n], [], e)
        }
        Ui(t) {
          for (let i = 0; i < this.Yi.length; i++) {
            const e = this.Yi[i];
            if (e.isForType(t)) return e
          }
          return this.plugins
        }
        Xi(t, i, e) {
          const s = i.get(t);
          if (void 0 === s) throw Error('"' + t + '" is not a registered ' + e + ".");
          return s
        }
      };
      class Ct {
        constructor() {
          this.Zi = []
        }
        notify(t, i, e, s) {
          "beforeInit" === i && (this.Zi = this.Qi(t, !0), this.Tt(this.Zi, t, "install"));
          const n = s ? this.kt(t).filter(s) : this.kt(t),
            o = this.Tt(n, t, i, e);
          return "afterDestroy" === i && (this.Tt(n, t, "stop"), this.Tt(this.Zi, t, "uninstall")), o
        }
        Tt(t, i, e, n) {
          n = n || {};
          for (const o of t) {
            const t = o.plugin,
              r = t[e],
              h = [i, n, o.options];
            if (!1 === (0, s.Q)(r, h, t) && n.cancelable) return !1
          }
          return !0
        }
        invalidate() {
          (0, s.k)(this.Fe) || (this.qi = this.Fe, this.Fe = void 0)
        }
        kt(t) {
          if (this.Fe) return this.Fe;
          const i = this.Fe = this.Qi(t);
          return this.Gi(t), i
        }
        Qi(t, i) {
          const e = t && t.config,
            n = (0, s.v)(e.options && e.options.plugins, {}),
            o = function(t) {
              const i = {},
                e = [],
                s = Object.keys(At.plugins.items);
              for (let t = 0; t < s.length; t++) e.push(At.getPlugin(s[t]));
              const n = t.plugins || [];
              for (let t = 0; t < n.length; t++) {
                const s = n[t]; - 1 === e.indexOf(s) && (e.push(s), i[s.id] = !0)
              }
              return {
                plugins: e,
                localIds: i
              }
            }(e);
          return !1 !== n || i ? function(t, {
            plugins: i,
            localIds: e
          }, s, n) {
            const o = [],
              r = t.getContext();
            for (const h of i) {
              const i = h.id,
                a = Lt(s[i], n);
              null !== a && o.push({
                plugin: h,
                options: Rt(t.config, {
                  plugin: h,
                  local: e[i]
                }, a, r)
              })
            }
            return o
          }(t, o, n, i) : []
        }
        Gi(t) {
          const i = this.qi || [],
            e = this.Fe,
            s = (t, i) => t.filter(t => !i.some(i => t.plugin.id === i.plugin.id));
          this.Tt(s(i, e), t, "stop"), this.Tt(s(e, i), t, "start")
        }
      }

      function Lt(t, i) {
        return i || !1 !== t ? !0 === t ? {} : t : null
      }

      function Rt(t, {
        plugin: i,
        local: e
      }, s, n) {
        const o = t.pluginScopeKeys(i),
          r = t.getOptionScopes(s, o);
        return e && i.defaults && r.push(i.defaults), t.createResolver(r, n, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0
        })
      }

      function jt(t, i) {
        const e = s.d.datasets[t] || {};
        return ((i.datasets || {})[t] || {}).indexAxis || i.indexAxis || e.indexAxis || "x"
      }

      function Et(t) {
        if ("x" === t || "y" === t || "r" === t) return t
      }

      function Nt(t) {
        return "top" === t || "bottom" === t ? "x" : "left" === t || "right" === t ? "y" : void 0
      }

      function Pt(t, ...i) {
        if (Et(t)) return t;
        for (const e of i) {
          const i = e.axis || Nt(e.position) || t.length > 1 && Et(t[0].toLowerCase());
          if (i) return i
        }
        throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
      }

      function Tt(t, i, e) {
        if (e[i + "AxisID"] === t) return {
          axis: i
        }
      }

      function Ft(t) {
        const i = t.options || (t.options = {});
        i.plugins = (0, s.v)(i.plugins, {}), i.scales = function(t, i) {
          const e = s.a3[t.type] || {
              scales: {}
            },
            n = i.scales || {},
            o = jt(t.type, i),
            r = Object.create(null);
          return Object.keys(n).forEach(i => {
            const h = n[i];
            if (!(0, s.i)(h)) return console.error("Invalid scale configuration for scale: " + i);
            if (h.yt) return console.warn("Ignoring resolver passed as options for scale: " + i);
            const a = Pt(i, h, function(t, i) {
                if (i.data && i.data.datasets) {
                  const e = i.data.datasets.filter(i => i.xAxisID === t || i.yAxisID === t);
                  if (e.length) return Tt(t, "x", e[0]) || Tt(t, "y", e[0])
                }
                return {}
              }(i, t), s.d.scales[h.type]),
              c = function(t, i) {
                return t === i ? "_index_" : "_value_"
              }(a, o),
              l = e.scales || {};
            r[i] = (0, s.ab)(Object.create(null), [{
              axis: a
            }, h, l[a], l[c]])
          }), t.data.datasets.forEach(e => {
            const o = e.type || t.type,
              h = e.indexAxis || jt(o, i),
              a = (s.a3[o] || {}).scales || {};
            Object.keys(a).forEach(t => {
              const i = function(t, i) {
                  let e = t;
                  return "_index_" === t ? e = i : "_value_" === t && (e = "x" === i ? "y" : "x"), e
                }(t, h),
                o = e[i + "AxisID"] || i;
              r[o] = r[o] || Object.create(null), (0, s.ab)(r[o], [{
                axis: i
              }, n[o], a[t]])
            })
          }), Object.keys(r).forEach(t => {
            const i = r[t];
            (0, s.ab)(i, [s.d.scales[i.type], s.d.scale])
          }), r
        }(t, i)
      }

      function It(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
      }
      const zt = new Map,
        Wt = new Set;

      function Bt(t, i) {
        let e = zt.get(t);
        return e || (e = i(), zt.set(t, e), Wt.add(e)), e
      }
      const Vt = (t, i, e) => {
        const n = (0, s.f)(i, e);
        void 0 !== n && t.add(n)
      };
      class Ht {
        constructor(t) {
          var i;
          this.Ji = ((i = (i = t) || {}).data = It(i.data), Ft(i), i), this.ts = new Map, this.es = new Map
        }
        get platform() {
          return this.Ji.platform
        }
        get type() {
          return this.Ji.type
        }
        set type(t) {
          this.Ji.type = t
        }
        get data() {
          return this.Ji.data
        }
        set data(t) {
          this.Ji.data = It(t)
        }
        get options() {
          return this.Ji.options
        }
        set options(t) {
          this.Ji.options = t
        }
        get plugins() {
          return this.Ji.plugins
        }
        update() {
          const t = this.Ji;
          this.clearCache(), Ft(t)
        }
        clearCache() {
          this.ts.clear(), this.es.clear()
        }
        datasetScopeKeys(t) {
          return Bt(t, () => [
            ["datasets." + t, ""]
          ])
        }
        datasetAnimationScopeKeys(t, i) {
          return Bt(`${t}.transition.${i}`, () => [
            [`datasets.${t}.transitions.${i}`, "transitions." + i],
            ["datasets." + t, ""]
          ])
        }
        datasetElementScopeKeys(t, i) {
          return Bt(`${t}-${i}`, () => [
            [`datasets.${t}.elements.${i}`, "datasets." + t, "elements." + i, ""]
          ])
        }
        pluginScopeKeys(t) {
          const i = t.id;
          return Bt(`${this.type}-plugin-${i}`, () => [
            ["plugins." + i, ...t.additionalOptionScopes || []]
          ])
        }
        ss(t, i) {
          const e = this.ts;
          let s = e.get(t);
          return (!s || i) && (s = new Map, e.set(t, s)), s
        }
        getOptionScopes(t, i, e) {
          const {
            options: n,
            type: o
          } = this, r = this.ss(t, e), h = r.get(i);
          if (h) return h;
          const a = new Set;
          i.forEach(i => {
            t && (a.add(t), i.forEach(i => Vt(a, t, i))), i.forEach(t => Vt(a, n, t)), i.forEach(t => Vt(a, s.a3[o] || {}, t)), i.forEach(t => Vt(a, s.d, t)), i.forEach(t => Vt(a, s.a6, t))
          });
          const c = Array.from(a);
          return 0 === c.length && c.push(Object.create(null)), Wt.has(i) && r.set(i, c), c
        }
        chartOptionScopes() {
          const {
            options: t,
            type: i
          } = this;
          return [t, s.a3[i] || {}, s.d.datasets[i] || {}, {
            type: i
          }, s.d, s.a6]
        }
        resolveNamedOptions(t, i, e, n = [""]) {
          const o = {
              $shared: !0
            },
            {
              resolver: r,
              subPrefixes: h
            } = Yt(this.es, t, n);
          let a = r;
          if (function(t, i) {
              const {
                isScriptable: e,
                isIndexable: n
              } = (0, s.aa)(t);
              for (const o of i) {
                const i = e(o),
                  r = n(o),
                  h = (r || i) && t[o];
                if (i && ((0, s.a7)(h) || $t(h)) || r && (0, s.b)(h)) return !0
              }
              return !1
            }(r, i)) {
            o.$shared = !1, e = (0, s.a7)(e) ? e() : e;
            const i = this.createResolver(t, e, h);
            a = (0, s.a8)(r, e, i)
          }
          for (const t of i) o[t] = a[t];
          return o
        }
        createResolver(t, i, e = [""], n) {
          const {
            resolver: o
          } = Yt(this.es, t, e);
          return (0, s.i)(i) ? (0, s.a8)(o, i, void 0, n) : o
        }
      }

      function Yt(t, i, e) {
        let n = t.get(i);
        n || (n = new Map, t.set(i, n));
        const o = e.join();
        let r = n.get(o);
        return r || (r = {
          resolver: (0, s.a9)(i, e),
          subPrefixes: e.filter(t => !t.toLowerCase().includes("hover"))
        }, n.set(o, r)), r
      }
      const $t = t => (0, s.i)(t) && Object.getOwnPropertyNames(t).some(i => (0, s.a7)(t[i])),
        _t = ["top", "bottom", "left", "right", "chartArea"];

      function Xt(t, i) {
        return "top" === t || "bottom" === t || -1 === _t.indexOf(t) && "x" === i
      }

      function Ut(t, i) {
        return function(e, s) {
          return e[t] === s[t] ? e[i] - s[i] : e[t] - s[t]
        }
      }

      function Kt(t) {
        const i = t.chart,
          e = i.options.animation;
        i.notifyPlugins("afterRender"), (0, s.Q)(e && e.onComplete, [t], i)
      }

      function Zt(t) {
        const i = t.chart,
          e = i.options.animation;
        (0, s.Q)(e && e.onProgress, [t], i)
      }

      function qt(t) {
        return (0, s.M)() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
      }
      const Qt = {},
        Gt = t => {
          const i = qt(t);
          return Object.values(Qt).filter(t => t.canvas === i).pop()
        };

      function Jt(t, i, e) {
        const s = Object.keys(t);
        for (const n of s) {
          const s = +n;
          if (s >= i) {
            const o = t[n];
            delete t[n], (e > 0 || s > i) && (t[s + e] = o)
          }
        }
      }

      function ti(t, i, e) {
        return t.options.clip ? t[e] : i[e]
      }
      class ii {
        static defaults = s.d;
        static instances = Qt;
        static overrides = s.a3;
        static registry = At;
        static version = "4.4.2";
        static getChart = Gt;
        static register(...t) {
          At.add(...t), ei()
        }
        static unregister(...t) {
          At.remove(...t), ei()
        }
        constructor(t, i) {
          const e = this.config = new Ht(i),
            o = qt(t),
            r = Gt(o);
          if (r) throw Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
          const h = e.createResolver(e.chartOptionScopes(), this.getContext());
          var a;
          this.platform = new(e.platform || (a = o, !(0, s.M)() || "u" > typeof OffscreenCanvas && a instanceof OffscreenCanvas ? tt : bt)), this.platform.updateConfig(e);
          const c = this.platform.acquireContext(o, h.aspectRatio),
            l = c && c.canvas,
            u = l && l.height,
            f = l && l.width;
          this.id = (0, s.ac)(), this.ctx = c, this.canvas = l, this.width = f, this.height = u, this.ns = h, this.rs = this.aspectRatio, this.fi = [], this.hs = [], this.ee = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this.It = [], this.cs = void 0, this.ls = {}, this.us = void 0, this.fs = [], this.scales = {}, this.ds = new Ct, this.$proxies = {}, this.ps = {}, this.attached = !1, this._i = void 0, this.$context = void 0, this.bs = (0, s.ad)(t => this.update(t), h.resizeDelay || 0), this.Re = [], Qt[this.id] = this, c && l ? (n.listen(this, "complete", Kt), n.listen(this, "progress", Zt), this.gs(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }
        get aspectRatio() {
          const {
            options: {
              aspectRatio: t,
              maintainAspectRatio: i
            },
            width: e,
            height: n,
            rs: o
          } = this;
          return (0, s.k)(t) ? i && o ? o : n ? e / n : null : t
        }
        get data() {
          return this.config.data
        }
        set data(t) {
          this.config.data = t
        }
        get options() {
          return this.ns
        }
        set options(t) {
          this.config.options = t
        }
        get registry() {
          return At
        }
        gs() {
          return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : (0, s.ae)(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }
        clear() {
          return (0, s.af)(this.canvas, this.ctx), this
        }
        stop() {
          return n.stop(this), this
        }
        resize(t, i) {
          n.running(this) ? this.xs = {
            width: t,
            height: i
          } : this.vs(t, i)
        }
        vs(t, i) {
          const e = this.options,
            n = this.canvas,
            o = e.maintainAspectRatio && this.aspectRatio,
            r = this.platform.getMaximumSize(n, t, i, o),
            h = e.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? "resize" : "attach";
          this.width = r.width, this.height = r.height, this.rs = this.aspectRatio, (0, s.ae)(this, h, !0) && (this.notifyPlugins("resize", {
            size: r
          }), (0, s.Q)(e.onResize, [this, r], this), this.attached && this.bs(a) && this.render())
        }
        ensureScalesHaveIDs() {
          const t = this.options.scales || {};
          (0, s.F)(t, (t, i) => {
            t.id = i
          })
        }
        buildOrUpdateScales() {
          const t = this.options,
            i = t.scales,
            e = this.scales,
            n = Object.keys(e).reduce((t, i) => (t[i] = !1, t), {});
          let o = [];
          i && (o = o.concat(Object.keys(i).map(t => {
            const e = i[t],
              s = Pt(t, e),
              n = "r" === s,
              o = "x" === s;
            return {
              options: e,
              dposition: n ? "chartArea" : o ? "bottom" : "left",
              dtype: n ? "radialLinear" : o ? "category" : "linear"
            }
          }))), (0, s.F)(o, i => {
            const o = i.options,
              r = o.id,
              h = Pt(r, o),
              a = (0, s.v)(o.type, i.dtype);
            (void 0 === o.position || Xt(o.position, h) !== Xt(i.dposition)) && (o.position = i.dposition), n[r] = !0;
            let c = null;
            r in e && e[r].type === a ? c = e[r] : (c = new(At.getScale(a))({
              id: r,
              type: a,
              ctx: this.ctx,
              chart: this
            }), e[c.id] = c), c.init(o, t)
          }), (0, s.F)(n, (t, i) => {
            t || delete e[i]
          }), (0, s.F)(e, t => {
            G.configure(this, t, t.options), G.addBox(this, t)
          })
        }
        ys() {
          const t = this.hs,
            i = this.data.datasets.length,
            e = t.length;
          if (t.sort((t, i) => t.index - i.index), e > i) {
            for (let t = i; e > t; ++t) this.Ms(t);
            t.splice(i, e - i)
          }
          this.fs = t.slice(0).sort(Ut("order", "index"))
        }
        ws() {
          const {
            hs: t,
            data: {
              datasets: i
            }
          } = this;
          t.length > i.length && delete this.ee, t.forEach((t, e) => {
            0 === i.filter(i => i === t.qe).length && this.Ms(e)
          })
        }
        buildOrUpdateControllers() {
          const t = [],
            i = this.data.datasets;
          let e, n;
          for (this.ws(), e = 0, n = i.length; n > e; e++) {
            const n = i[e];
            let o = this.getDatasetMeta(e);
            const r = n.type || this.config.type;
            if (o.type && o.type !== r && (this.Ms(e), o = this.getDatasetMeta(e)), o.type = r, o.indexAxis = n.indexAxis || jt(r, this.options), o.order = n.order || 0, o.index = e, o.label = "" + n.label, o.visible = this.isDatasetVisible(e), o.controller) o.controller.updateIndex(e), o.controller.linkScales();
            else {
              const i = At.getController(r),
                {
                  datasetElementType: n,
                  dataElementType: h
                } = s.d.datasets[r];
              Object.assign(i, {
                dataElementType: At.getElement(h),
                datasetElementType: n && At.getElement(n)
              }), o.controller = new i(this, e), t.push(o.controller)
            }
          }
          return this.ys(), t
        }
        _s() {
          (0, s.F)(this.data.datasets, (t, i) => {
            this.getDatasetMeta(i).controller.reset()
          }, this)
        }
        reset() {
          this._s(), this.notifyPlugins("reset")
        }
        update(t) {
          const i = this.config;
          i.update();
          const e = this.ns = i.createResolver(i.chartOptionScopes(), this.getContext()),
            n = this._i = !e.animation;
          if (this.ks(), this.Os(), this.Ss(), this.ds.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
              mode: t,
              cancelable: !0
            })) return;
          const o = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let r = 0;
          for (let t = 0, i = this.data.datasets.length; i > t; t++) {
            const {
              controller: i
            } = this.getDatasetMeta(t), e = !n && -1 === o.indexOf(i);
            i.buildOrUpdateElements(e), r = Math.max(+i.getMaxOverflow(), r)
          }
          r = this.Ds = e.layout.autoPadding ? r : 0, this.As(r), n || (0, s.F)(o, t => {
            t.reset()
          }), this.Cs(t), this.notifyPlugins("afterUpdate", {
            mode: t
          }), this.fi.sort(Ut("z", "_idx"));
          const {
            It: h,
            cs: a
          } = this;
          a ? this.Ls(a, !0) : h.length && this.Rs(h, h, !0), this.render()
        }
        ks() {
          (0, s.F)(this.scales, t => {
            G.removeBox(this, t)
          }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }
        Os() {
          const t = this.options,
            i = new Set(Object.keys(this.ls)),
            e = new Set(t.events);
          (!(0, s.ag)(i, e) || !!this.us !== t.responsive) && (this.unbindEvents(), this.bindEvents())
        }
        Ss() {
          const {
            ps: t
          } = this, i = this.Es() || [];
          for (const {
              method: e,
              start: s,
              count: n
            }
            of i) Jt(t, s, "_removeElements" === e ? -n : n)
        }
        Es() {
          const t = this.Re;
          if (!t || !t.length) return;
          this.Re = [];
          const i = this.data.datasets.length,
            e = i => new Set(t.filter(t => t[0] === i).map((t, i) => i + "," + t.splice(1).join(","))),
            n = e(0);
          for (let t = 1; i > t; t++)
            if (!(0, s.ag)(n, e(t))) return;
          return Array.from(n).map(t => t.split(",")).map(t => ({
            method: t[1],
            start: +t[2],
            count: +t[3]
          }))
        }
        As(t) {
          if (!1 === this.notifyPlugins("beforeLayout", {
              cancelable: !0
            })) return;
          G.update(this, this.width, this.height, t);
          const i = this.chartArea,
            e = 0 >= i.width || 0 >= i.height;
          this.fi = [], (0, s.F)(this.boxes, t => {
            e && "chartArea" === t.position || (t.configure && t.configure(), this.fi.push(...t.fi()))
          }, this), this.fi.forEach((t, i) => {
            t.js = i
          }), this.notifyPlugins("afterLayout")
        }
        Cs(t) {
          if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
              mode: t,
              cancelable: !0
            })) {
            for (let t = 0, i = this.data.datasets.length; i > t; ++t) this.getDatasetMeta(t).controller.configure();
            for (let i = 0, e = this.data.datasets.length; e > i; ++i) this.Ps(i, (0, s.a7)(t) ? t({
              datasetIndex: i
            }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
              mode: t
            })
          }
        }
        Ps(t, i) {
          const e = this.getDatasetMeta(t),
            s = {
              meta: e,
              index: t,
              mode: i,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (e.controller.Ft(i), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s))
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
          if (this.xs) {
            const {
              width: t,
              height: i
            } = this.xs;
            this.vs(t, i), this.xs = null
          }
          if (this.clear(), 0 >= this.width || 0 >= this.height || !1 === this.notifyPlugins("beforeDraw", {
              cancelable: !0
            })) return;
          const i = this.fi;
          for (t = 0; t < i.length && 0 >= i[t].z; ++t) i[t].draw(this.chartArea);
          for (this.Ts(); t < i.length; ++t) i[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw")
        }
        Jt(t) {
          const i = this.fs,
            e = [];
          let s, n;
          for (s = 0, n = i.length; n > s; ++s) {
            const n = i[s];
            (!t || n.visible) && e.push(n)
          }
          return e
        }
        getSortedVisibleDatasetMetas() {
          return this.Jt(!0)
        }
        Ts() {
          if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
              cancelable: !0
            })) return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let i = t.length - 1; i >= 0; --i) this.Ns(t[i]);
          this.notifyPlugins("afterDatasetsDraw")
        }
        Ns(t) {
          const i = this.ctx,
            e = t.ye,
            n = !e.disabled,
            o = function(t, i) {
              const {
                xScale: e,
                yScale: s
              } = t;
              return e && s ? {
                left: ti(e, i, "left"),
                right: ti(e, i, "right"),
                top: ti(s, i, "top"),
                bottom: ti(s, i, "bottom")
              } : i
            }(t, this.chartArea),
            r = {
              meta: t,
              index: t.index,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetDraw", r) && (n && (0, s.Y)(i, {
            left: !1 === e.left ? 0 : o.left - e.left,
            right: !1 === e.right ? this.width : o.right + e.right,
            top: !1 === e.top ? 0 : o.top - e.top,
            bottom: !1 === e.bottom ? this.height : o.bottom + e.bottom
          }), t.controller.draw(), n && (0, s.$)(i), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r))
        }
        isPointInArea(t) {
          return (0, s.C)(t, this.chartArea, this.Ds)
        }
        getElementsAtEventForMode(t, i, e, s) {
          const n = B.modes[i];
          return "function" == typeof n ? n(this, t, e, s) : []
        }
        getDatasetMeta(t) {
          const i = this.data.datasets[t],
            e = this.hs;
          let s = e.filter(t => t && t.qe === i).pop();
          return s || (s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: i && i.order || 0,
            index: t,
            qe: i,
            rt: [],
            ot: !1
          }, e.push(s)), s
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
          const i = this.data.datasets[t];
          if (!i) return !1;
          const e = this.getDatasetMeta(t);
          return "boolean" == typeof e.hidden ? !e.hidden : !i.hidden
        }
        setDatasetVisibility(t, i) {
          this.getDatasetMeta(t).hidden = !i
        }
        toggleDataVisibility(t) {
          this.ps[t] = !this.ps[t]
        }
        getDataVisibility(t) {
          return !this.ps[t]
        }
        Fs(t, i, e) {
          const n = e ? "show" : "hide",
            o = this.getDatasetMeta(t),
            r = o.controller.we(void 0, n);
          (0, s.h)(i) ? (o.data[i].hidden = !e, this.update()) : (this.setDatasetVisibility(t, e), r.update(o, {
            visible: e
          }), this.update(i => i.datasetIndex === t ? n : void 0))
        }
        hide(t, i) {
          this.Fs(t, i, !1)
        }
        show(t, i) {
          this.Fs(t, i, !0)
        }
        Ms(t) {
          const i = this.hs[t];
          i && i.controller && i.controller.me(), delete this.hs[t]
        }
        Is() {
          let t, i;
          for (this.stop(), n.remove(this), t = 0, i = this.data.datasets.length; i > t; ++t) this.Ms(t)
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const {
            canvas: t,
            ctx: i
          } = this;
          this.Is(), this.config.clearCache(), t && (this.unbindEvents(), (0, s.af)(t, i), this.platform.releaseContext(i), this.canvas = null, this.ctx = null), delete Qt[this.id], this.notifyPlugins("afterDestroy")
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t)
        }
        bindEvents() {
          this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }
        bindUserEvents() {
          const t = this.ls,
            i = this.platform,
            e = (e, s) => {
              i.addEventListener(this, e, s), t[e] = s
            },
            n = (t, i, e) => {
              t.offsetX = i, t.offsetY = e, this.Ls(t)
            };
          (0, s.F)(this.options.events, t => e(t, n))
        }
        bindResponsiveEvents() {
          this.us || (this.us = {});
          const t = this.us,
            i = this.platform,
            e = (e, s) => {
              i.addEventListener(this, e, s), t[e] = s
            },
            s = (e, s) => {
              t[e] && (i.removeEventListener(this, e, s), delete t[e])
            },
            n = (t, i) => {
              this.canvas && this.resize(t, i)
            };
          let o;
          const r = () => {
            s("attach", r), this.attached = !0, this.resize(), e("resize", n), e("detach", o)
          };
          o = () => {
            this.attached = !1, s("resize", n), this.Is(), this.vs(0, 0), e("attach", r)
          }, i.isAttached(this.canvas) ? r() : o()
        }
        unbindEvents() {
          (0, s.F)(this.ls, (t, i) => {
            this.platform.removeEventListener(this, i, t)
          }), this.ls = {}, (0, s.F)(this.us, (t, i) => {
            this.platform.removeEventListener(this, i, t)
          }), this.us = void 0
        }
        updateHoverStyle(t, i, e) {
          const s = e ? "set" : "remove";
          let n, o, r, h;
          for ("dataset" === i && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), r = 0, h = t.length; h > r; ++r) {
            o = t[r];
            const i = o && this.getDatasetMeta(o.datasetIndex).controller;
            i && i[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
          }
        }
        getActiveElements() {
          return this.It || []
        }
        setActiveElements(t) {
          const i = this.It || [],
            e = t.map(({
              datasetIndex: t,
              index: i
            }) => {
              const e = this.getDatasetMeta(t);
              if (!e) throw Error("No dataset found at index " + t);
              return {
                datasetIndex: t,
                element: e.data[i],
                index: i
              }
            });
          !(0, s.ah)(e, i) && (this.It = e, this.cs = null, this.Rs(e, i))
        }
        notifyPlugins(t, i, e) {
          return this.ds.notify(this, t, i, e)
        }
        isPluginEnabled(t) {
          return 1 === this.ds.Fe.filter(i => i.plugin.id === t).length
        }
        Rs(t, i, e) {
          const s = this.options.hover,
            n = (t, i) => t.filter(t => !i.some(i => t.datasetIndex === i.datasetIndex && t.index === i.index)),
            o = n(i, t),
            r = e ? t : n(t, i);
          o.length && this.updateHoverStyle(o, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0)
        }
        Ls(t, i) {
          const e = {
              event: t,
              replay: i,
              cancelable: !0,
              inChartArea: this.isPointInArea(t)
            },
            s = i => (i.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", e, s)) return;
          const n = this.zs(t, i, e.inChartArea);
          return e.cancelable = !1, this.notifyPlugins("afterEvent", e, s), (n || e.changed) && this.render(), this
        }
        zs(t, i, e) {
          const {
            It: n = [],
            options: o
          } = this, r = i, h = this.Ws(t, n, e, r), a = (0, s.ai)(t), c = function(t, i, e, s) {
            return e && "mouseout" !== t.type ? s ? i : t : null
          }(t, this.cs, e, a);
          e && (this.cs = null, (0, s.Q)(o.onHover, [t, h, this], this), a && (0, s.Q)(o.onClick, [t, h, this], this));
          const l = !(0, s.ah)(h, n);
          return (l || i) && (this.It = h, this.Rs(h, n, i)), this.cs = c, l
        }
        Ws(t, i, e, s) {
          if ("mouseout" === t.type) return [];
          if (!e) return i;
          const n = this.options.hover;
          return this.getElementsAtEventForMode(t, n.mode, n, s)
        }
      }

      function ei() {
        return (0, s.F)(ii.instances, t => t.ds.invalidate())
      }

      function si(t, i, e, s) {
        return {
          x: e + t * Math.cos(i),
          y: s + t * Math.sin(i)
        }
      }

      function ni(t, i, e, n, o, r) {
        const {
          x: h,
          y: a,
          startAngle: c,
          pixelMargin: l,
          innerRadius: u
        } = i, f = Math.max(i.outerRadius + n + e - l, 0), d = u > 0 ? u + n + e + l : 0;
        let p = 0;
        const b = o - c;
        if (n) {
          const t = ((u > 0 ? u - n : 0) + (f > 0 ? f - n : 0)) / 2;
          p = (b - (0 !== t ? b * t / (t + n) : b)) / 2
        }
        const g = (b - Math.max(.001, b * f - e / s.P) / f) / 2,
          m = c + g + p,
          x = o - g - p,
          {
            outerStart: v,
            outerEnd: y,
            innerStart: M,
            innerEnd: w
          } = function(t, i, e, n) {
            const o = function(t) {
                return (0, s.ak)(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
              }(t.options.borderRadius),
              r = (e - i) / 2,
              h = Math.min(r, n * i / 2),
              a = t => {
                const i = (e - Math.min(r, t)) * n / 2;
                return (0, s.S)(t, 0, Math.min(r, i))
              };
            return {
              outerStart: a(o.outerStart),
              outerEnd: a(o.outerEnd),
              innerStart: (0, s.S)(o.innerStart, 0, h),
              innerEnd: (0, s.S)(o.innerEnd, 0, h)
            }
          }(i, d, f, x - m),
          k = f - v,
          O = f - y,
          S = m + v / k,
          D = x - y / O,
          A = d + M,
          C = d + w,
          L = m + M / A,
          R = x - w / C;
        if (t.beginPath(), r) {
          const i = (S + D) / 2;
          if (t.arc(h, a, f, S, i), t.arc(h, a, f, i, D), y > 0) {
            const i = si(O, D, h, a);
            t.arc(i.x, i.y, y, D, x + s.H)
          }
          const e = si(C, x, h, a);
          if (t.lineTo(e.x, e.y), w > 0) {
            const i = si(C, R, h, a);
            t.arc(i.x, i.y, w, x + s.H, R + Math.PI)
          }
          const n = (x - w / d + (m + M / d)) / 2;
          if (t.arc(h, a, d, x - w / d, n, !0), t.arc(h, a, d, n, m + M / d, !0), M > 0) {
            const i = si(A, L, h, a);
            t.arc(i.x, i.y, M, L + Math.PI, m - s.H)
          }
          const o = si(k, m, h, a);
          if (t.lineTo(o.x, o.y), v > 0) {
            const i = si(k, S, h, a);
            t.arc(i.x, i.y, v, m - s.H, S)
          }
        } else {
          t.moveTo(h, a);
          const i = Math.cos(S) * f + h,
            e = Math.sin(S) * f + a;
          t.lineTo(i, e);
          const s = Math.cos(D) * f + h,
            n = Math.sin(D) * f + a;
          t.lineTo(s, n)
        }
        t.closePath()
      }

      function oi(t, i, e = i) {
        t.lineCap = (0, s.v)(e.borderCapStyle, i.borderCapStyle), t.setLineDash((0, s.v)(e.borderDash, i.borderDash)), t.lineDashOffset = (0, s.v)(e.borderDashOffset, i.borderDashOffset), t.lineJoin = (0, s.v)(e.borderJoinStyle, i.borderJoinStyle), t.lineWidth = (0, s.v)(e.borderWidth, i.borderWidth), t.strokeStyle = (0, s.v)(e.borderColor, i.borderColor)
      }

      function ri(t, i, e) {
        t.lineTo(e.x, e.y)
      }

      function hi(t, i, e = {}) {
        const s = t.length,
          {
            start: n = 0,
            end: o = s - 1
          } = e,
          {
            start: r,
            end: h
          } = i,
          a = Math.max(n, r),
          c = Math.min(o, h),
          l = r > n && r > o || n > h && o > h;
        return {
          count: s,
          start: a,
          loop: i.loop,
          ilen: a > c && !l ? s + c - a : c - a
        }
      }

      function ai(t, i, e, n) {
        const {
          points: o,
          options: r
        } = i, {
          count: h,
          start: a,
          loop: c,
          ilen: l
        } = hi(o, e, n), u = function(t) {
          return t.stepped ? s.ar : t.tension || "monotone" === t.cubicInterpolationMode ? s.as : ri
        }(r);
        let f, d, p, {
          move: b = !0,
          reverse: g
        } = n || {};
        for (f = 0; l >= f; ++f) d = o[(a + (g ? l - f : f)) % h], !d.skip && (b ? (t.moveTo(d.x, d.y), b = !1) : u(t, p, d, g, r.stepped), p = d);
        return c && (d = o[(a + (g ? l : 0)) % h], u(t, p, d, g, r.stepped)), !!c
      }

      function ci(t, i, e, s) {
        const n = i.points,
          {
            count: o,
            start: r,
            ilen: h
          } = hi(n, e, s),
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
          const i = u.x,
            e = u.y,
            s = 0 | i;
          s === f ? (d > e ? d = e : e > p && (p = e), g = (m * g + i) / ++m) : (v(), t.lineTo(i, e), f = s, m = 0, d = p = e), b = e
        }
        v()
      }

      function li(t) {
        const i = t.options,
          e = i.borderDash && i.borderDash.length;
        return t.Ge || t.Dt || i.tension || "monotone" === i.cubicInterpolationMode || i.stepped || e ? ai : ci
      }
      const ui = "function" == typeof Path2D;
      class fi extends gt {
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
          ct: !0,
          lt: t => "borderDash" !== t && "fill" !== t
        };
        constructor(t) {
          super(), this.animated = !0, this.options = void 0, this.At = void 0, this.Dt = void 0, this.Lt = void 0, this.Bs = void 0, this.Hs = void 0, this.Vs = void 0, this.Ge = !1, this.Ys = !1, this.Ct = void 0, t && Object.assign(this, t)
        }
        updateControlPoints(t, i) {
          const e = this.options;
          if ((e.tension || "monotone" === e.cubicInterpolationMode) && !e.stepped && !this.Ys) {
            const n = e.spanGaps ? this.Dt : this.Lt;
            (0, s.al)(this.Hs, e, t, n, i), this.Ys = !0
          }
        }
        set points(t) {
          this.Hs = t, delete this.Vs, delete this.Bs, this.Ys = !1
        }
        get points() {
          return this.Hs
        }
        get segments() {
          return this.Vs || (this.Vs = (0, s.am)(this, this.options.segment))
        }
        first() {
          const t = this.segments,
            i = this.points;
          return t.length && i[t[0].start]
        }
        last() {
          const t = this.segments,
            i = this.points,
            e = t.length;
          return e && i[t[e - 1].end]
        }
        interpolate(t, i) {
          const e = this.options,
            n = t[i],
            o = this.points,
            r = (0, s.an)(this, {
              property: i,
              start: n,
              end: n
            });
          if (!r.length) return;
          const h = [],
            a = (c = e).stepped ? s.ao : c.tension || "monotone" === c.cubicInterpolationMode ? s.ap : s.aq;
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
            const d = a(u, f, Math.abs((n - u[i]) / (f[i] - u[i])), e.stepped);
            d[i] = t[i], h.push(d)
          }
          return 1 === h.length ? h[0] : h
        }
        pathSegment(t, i, e) {
          return li(this)(t, this, i, e)
        }
        path(t, i, e) {
          const s = this.segments,
            n = li(this);
          let o = this.Dt;
          i = i || 0, e = e || this.points.length - i;
          for (const r of s) o &= n(t, this, r, {
            start: i,
            end: i + e - 1
          });
          return !!o
        }
        draw(t, i, e, s) {
          const n = this.options || {};
          (this.points || []).length && n.borderWidth && (t.save(), function(t, i, e, s) {
            ui && !i.options.segment ? function(t, i, e, s) {
              let n = i.Bs;
              n || (n = i.Bs = new Path2D, i.path(n, e, s) && n.closePath()), oi(t, i.options), t.stroke(n)
            }(t, i, e, s) : function(t, i, e, s) {
              const {
                segments: n,
                options: o
              } = i, r = li(i);
              for (const h of n) oi(t, o, h.style), t.beginPath(), r(t, i, h, {
                start: e,
                end: e + s - 1
              }) && t.closePath(), t.stroke()
            }(t, i, e, s)
          }(t, this, e, s), t.restore()), this.animated && (this.Ys = !1, this.Bs = void 0)
        }
      }

      function di(t, i, e, s) {
        const n = t.options,
          {
            [e]: o
          } = t.getProps([e], s);
        return Math.abs(i - o) < n.radius + n.hitRadius
      }
      class pi extends gt {
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
        inRange(t, i, e) {
          const s = this.options,
            {
              x: n,
              y: o
            } = this.getProps(["x", "y"], e);
          return Math.pow(t - n, 2) + Math.pow(i - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
        }
        inXRange(t, i) {
          return di(this, t, "x", i)
        }
        inYRange(t, i) {
          return di(this, t, "y", i)
        }
        getCenterPoint(t) {
          const {
            x: i,
            y: e
          } = this.getProps(["x", "y"], t);
          return {
            x: i,
            y: e
          }
        }
        size(t) {
          let i = (t = t || this.options || {}).radius || 0;
          return i = Math.max(i, i && t.hoverRadius || 0), 2 * (i + (i && t.borderWidth || 0))
        }
        draw(t, i) {
          const e = this.options;
          this.skip || .1 > e.radius || !(0, s.C)(this, i, this.size(e) / 2) || (t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, (0, s.at)(t, e, this.x, this.y))
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius
        }
      }

      function bi(t, i) {
        const {
          x: e,
          y: s,
          base: n,
          width: o,
          height: r
        } = t.getProps(["x", "y", "base", "width", "height"], i);
        let h, a, c, l, u;
        return t.horizontal ? (u = r / 2, h = Math.min(e, n), a = Math.max(e, n), c = s - u, l = s + u) : (u = o / 2, h = e - u, a = e + u, c = Math.min(s, n), l = Math.max(s, n)), {
          left: h,
          top: c,
          right: a,
          bottom: l
        }
      }

      function gi(t, i, e, n) {
        return t ? 0 : (0, s.S)(i, e, n)
      }

      function mi(t, i, e, n) {
        const o = null === i,
          r = null === e,
          h = t && !(o && r) && bi(t, n);
        return h && (o || (0, s.aj)(i, h.left, h.right)) && (r || (0, s.aj)(e, h.top, h.bottom))
      }

      function xi(t, i) {
        t.rect(i.x, i.y, i.w, i.h)
      }

      function vi(t, i, e = {}) {
        const s = t.x !== e.x ? -i : 0,
          n = t.y !== e.y ? -i : 0,
          o = (t.x + t.w !== e.x + e.w ? i : 0) - s,
          r = (t.y + t.h !== e.y + e.h ? i : 0) - n;
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
            ct: !0,
            lt: t => "borderDash" !== t
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
          inRange(t, i, e) {
            const n = this.getProps(["x", "y"], e),
              {
                angle: o,
                distance: r
              } = (0, s.D)(n, {
                x: t,
                y: i
              }),
              {
                startAngle: h,
                endAngle: a,
                innerRadius: c,
                outerRadius: l,
                circumference: u
              } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], e),
              f = (this.options.spacing + this.options.borderWidth) / 2,
              d = (0, s.v)(u, a - h) >= s.T || (0, s.p)(o, h, a),
              p = (0, s.aj)(r, c + f, l + f);
            return d && p
          }
          getCenterPoint(t) {
            const {
              x: i,
              y: e,
              startAngle: s,
              endAngle: n,
              innerRadius: o,
              outerRadius: r
            } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
              offset: h,
              spacing: a
            } = this.options, c = (s + n) / 2, l = (o + r + a + h) / 2;
            return {
              x: i + Math.cos(c) * l,
              y: e + Math.sin(c) * l
            }
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t)
          }
          draw(t) {
            const {
              options: i,
              circumference: e
            } = this, n = (i.offset || 0) / 4, o = (i.spacing || 0) / 2, r = i.circular;
            if (this.pixelMargin = "inner" === i.borderAlign ? .33 : 0, this.fullCircles = e > s.T ? Math.floor(e / s.T) : 0, 0 === e || 0 > this.innerRadius || 0 > this.outerRadius) return;
            t.save();
            const h = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(h) * n, Math.sin(h) * n);
            const a = n * (1 - Math.sin(Math.min(s.P, e || 0)));
            t.fillStyle = i.backgroundColor, t.strokeStyle = i.borderColor,
              function(t, i, e, n, o) {
                const {
                  fullCircles: r,
                  startAngle: h,
                  circumference: a
                } = i;
                let c = i.endAngle;
                if (r) {
                  ni(t, i, e, n, c, o);
                  for (let i = 0; r > i; ++i) t.fill();
                  isNaN(a) || (c = h + (a % s.T || s.T))
                }
                ni(t, i, e, n, c, o), t.fill()
              }(t, this, a, o, r),
              function(t, i, e, n, o) {
                const {
                  fullCircles: r,
                  startAngle: h,
                  circumference: a,
                  options: c
                } = i, {
                  borderWidth: l,
                  borderJoinStyle: u,
                  borderDash: f,
                  borderDashOffset: d
                } = c, p = "inner" === c.borderAlign;
                if (!l) return;
                t.setLineDash(f || []), t.lineDashOffset = d, p ? (t.lineWidth = 2 * l, t.lineJoin = u || "round") : (t.lineWidth = l, t.lineJoin = u || "bevel");
                let b = i.endAngle;
                if (r) {
                  ni(t, i, e, n, b, o);
                  for (let i = 0; r > i; ++i) t.stroke();
                  isNaN(a) || (b = h + (a % s.T || s.T))
                }
                p && function(t, i, e) {
                  const {
                    startAngle: n,
                    pixelMargin: o,
                    x: r,
                    y: h,
                    outerRadius: a,
                    innerRadius: c
                  } = i;
                  let l = o / a;
                  t.beginPath(), t.arc(r, h, a, n - l, e + l), c > o ? (l = o / c, t.arc(r, h, c, e + l, n - l, !0)) : t.arc(r, h, o, e + s.H, n - s.H), t.closePath(), t.clip()
                }(t, i, b), r || (ni(t, i, e, n, b, o), t.stroke())
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
              inflateAmount: i,
              options: {
                borderColor: e,
                backgroundColor: n
              }
            } = this, {
              inner: o,
              outer: r
            } = function(t) {
              const i = bi(t),
                e = i.right - i.left,
                n = i.bottom - i.top,
                o = function(t, i, e) {
                  const n = t.options.borderWidth,
                    o = t.borderSkipped,
                    r = (0, s.av)(n);
                  return {
                    t: gi(o.top, r.top, 0, e),
                    r: gi(o.right, r.right, 0, i),
                    b: gi(o.bottom, r.bottom, 0, e),
                    l: gi(o.left, r.left, 0, i)
                  }
                }(t, e / 2, n / 2),
                r = function(t, i, e) {
                  const {
                    enableBorderRadius: n
                  } = t.getProps(["enableBorderRadius"]), o = t.options.borderRadius, r = (0, s.aw)(o), h = Math.min(i, e), a = t.borderSkipped, c = n || (0, s.i)(o);
                  return {
                    topLeft: gi(!c || a.top || a.left, r.topLeft, 0, h),
                    topRight: gi(!c || a.top || a.right, r.topRight, 0, h),
                    bottomLeft: gi(!c || a.bottom || a.left, r.bottomLeft, 0, h),
                    bottomRight: gi(!c || a.bottom || a.right, r.bottomRight, 0, h)
                  }
                }(t, e / 2, n / 2);
              return {
                outer: {
                  x: i.left,
                  y: i.top,
                  w: e,
                  h: n,
                  radius: r
                },
                inner: {
                  x: i.left + o.l,
                  y: i.top + o.t,
                  w: e - o.l - o.r,
                  h: n - o.t - o.b,
                  radius: {
                    topLeft: Math.max(0, r.topLeft - Math.max(o.t, o.l)),
                    topRight: Math.max(0, r.topRight - Math.max(o.t, o.r)),
                    bottomLeft: Math.max(0, r.bottomLeft - Math.max(o.b, o.l)),
                    bottomRight: Math.max(0, r.bottomRight - Math.max(o.b, o.r))
                  }
                }
              }
            }(this), h = (a = r.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? s.au : xi;
            var a;
            t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), h(t, vi(r, i, o)), t.clip(), h(t, vi(o, -i, r)), t.fillStyle = e, t.fill("evenodd")), t.beginPath(), h(t, vi(o, i)), t.fillStyle = n, t.fill(), t.restore()
          }
          inRange(t, i, e) {
            return mi(this, t, i, e)
          }
          inXRange(t, i) {
            return mi(this, t, null, i)
          }
          inYRange(t, i) {
            return mi(this, null, t, i)
          }
          getCenterPoint(t) {
            const {
              x: i,
              y: e,
              base: s,
              horizontal: n
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return {
              x: n ? (i + s) / 2 : i,
              y: n ? e : (e + s) / 2
            }
          }
          getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2
          }
        },
        LineElement: fi,
        PointElement: pi
      });
      const yi = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        Mi = yi.map(t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));

      function wi(t) {
        return yi[t % yi.length]
      }

      function ki(t) {
        return Mi[t % Mi.length]
      }

      function Oi(t) {
        let i;
        for (i in t)
          if (t[i].borderColor || t[i].backgroundColor) return !0;
        return !1
      }
      var Si = {
        id: "colors",
        defaults: {
          enabled: !0,
          forceOverride: !1
        },
        beforeLayout(t, i, e) {
          if (!e.enabled) return;
          const {
            data: {
              datasets: s
            },
            options: n
          } = t.config, {
            elements: o
          } = n;
          if (!e.forceOverride && (Oi(s) || function(t) {
              return t && (t.borderColor || t.backgroundColor)
            }(n) || o && Oi(o))) return;
          const r = function(t) {
            let i = 0;
            return (e, s) => {
              const n = t.getDatasetMeta(s).controller;
              n instanceof L ? i = function(t, i) {
                return t.backgroundColor = t.data.map(() => wi(i++)), i
              }(e, i) : n instanceof j ? i = function(t, i) {
                return t.backgroundColor = t.data.map(() => ki(i++)), i
              }(e, i) : n && (i = function(t, i) {
                return t.borderColor = wi(i), t.backgroundColor = ki(i), ++i
              }(e, i))
            }
          }(t);
          s.forEach(r)
        }
      };

      function Di(t) {
        if (t.Ge) {
          const i = t.ce;
          delete t.Ge, delete t.ce, Object.defineProperty(t, "data", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: i
          })
        }
      }

      function Ai(t) {
        t.data.datasets.forEach(t => {
          Di(t)
        })
      }
      var Ci = {
        id: "decimation",
        defaults: {
          algorithm: "min-max",
          enabled: !1
        },
        beforeElementsUpdate: (t, i, e) => {
          if (!e.enabled) return void Ai(t);
          const n = t.width;
          t.data.datasets.forEach((i, o) => {
            const {
              ce: r,
              indexAxis: h
            } = i, a = t.getDatasetMeta(o), c = r || i.data;
            if ("y" === (0, s.a)([h, t.options.indexAxis]) || !a.controller.supportsDecimation) return;
            const l = t.scales[a.xAxisID];
            if ("linear" !== l.type && "time" !== l.type || t.options.parsing) return;
            let u, {
              start: f,
              count: d
            } = function(t, i) {
              const e = i.length;
              let n, o = 0;
              const {
                iScale: r
              } = t, {
                min: h,
                max: a,
                minDefined: c,
                maxDefined: l
              } = r.getUserBounds();
              return c && (o = (0, s.S)((0, s.B)(i, r.axis, h).lo, 0, e - 1)), n = l ? (0, s.S)((0, s.B)(i, r.axis, a).hi + 1, o, e) - o : e - o, {
                start: o,
                count: n
              }
            }(a, c);
            if ((e.threshold || 4 * n) < d) {
              switch ((0, s.k)(r) && (i.ce = c, delete i.data, Object.defineProperty(i, "data", {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return this.Ge
                  },
                  set: function(t) {
                    this.ce = t
                  }
                })), e.algorithm) {
                case "lttb":
                  u = function(t, i, e, s, n) {
                    const o = n.samples || s;
                    if (o >= e) return t.slice(i, i + e);
                    const r = [],
                      h = (e - 2) / (o - 2);
                    let a = 0;
                    const c = i + e - 1;
                    let l, u, f, d, p, b = i;
                    for (r[a++] = t[b], l = 0; o - 2 > l; l++) {
                      let s, n = 0,
                        o = 0;
                      const c = Math.floor((l + 1) * h) + 1 + i,
                        g = Math.min(Math.floor((l + 2) * h) + 1, e) + i,
                        m = g - c;
                      for (s = c; g > s; s++) n += t[s].x, o += t[s].y;
                      n /= m, o /= m;
                      const x = Math.floor(l * h) + 1 + i,
                        v = Math.min(Math.floor((l + 1) * h) + 1, e) + i,
                        {
                          x: y,
                          y: M
                        } = t[b];
                      for (f = d = -1, s = x; v > s; s++) d = .5 * Math.abs((y - n) * (t[s].y - M) - (y - t[s].x) * (o - M)), d > f && (f = d, u = t[s], p = s);
                      r[a++] = u, b = p
                    }
                    return r[a++] = t[c], r
                  }(c, f, d, n, e);
                  break;
                case "min-max":
                  u = function(t, i, e, n) {
                    let o, r, h, a, c, l, u, f, d, p, b = 0,
                      g = 0;
                    const m = [],
                      x = i + e - 1,
                      v = t[i].x,
                      y = t[x].x - v;
                    for (o = i; i + e > o; ++o) {
                      r = t[o], h = (r.x - v) / y * n, a = r.y;
                      const i = 0 | h;
                      if (i === c) d > a ? (d = a, l = o) : a > p && (p = a, u = o), b = (g * b + r.x) / ++g;
                      else {
                        const e = o - 1;
                        if (!(0, s.k)(l) && !(0, s.k)(u)) {
                          const i = Math.min(l, u),
                            s = Math.max(l, u);
                          i !== f && i !== e && m.push({
                            ...t[i],
                            x: b
                          }), s !== f && s !== e && m.push({
                            ...t[s],
                            x: b
                          })
                        }
                        o > 0 && e !== f && m.push(t[e]), m.push(r), c = i, g = 0, d = p = a, l = u = f = o
                      }
                    }
                    return m
                  }(c, f, d, n);
                  break;
                default:
                  throw Error(`Unsupported decimation algorithm '${e.algorithm}'`)
              }
              i.Ge = u
            } else Di(i)
          })
        },
        destroy(t) {
          Ai(t)
        }
      };

      function Li(t, i, e, n) {
        if (n) return;
        let o = i[t],
          r = e[t];
        return "angle" === t && (o = (0, s.ay)(o), r = (0, s.ay)(r)), {
          property: t,
          start: o,
          end: r
        }
      }

      function Ri(t, i, e) {
        for (; i > t; i--) {
          const t = e[i];
          if (!isNaN(t.x) && !isNaN(t.y)) break
        }
        return i
      }

      function ji(t, i, e, s) {
        return t && i ? s(t[e], i[e]) : t ? t[e] : i ? i[e] : 0
      }

      function Ei(t, i) {
        let e = [],
          n = !1;
        return (0, s.b)(t) ? (n = !0, e = t) : e = function(t, i) {
          const {
            x: e = null,
            y: s = null
          } = t || {}, n = i.points, o = [];
          return i.segments.forEach(({
            start: t,
            end: i
          }) => {
            i = Ri(t, i, n);
            const r = n[t],
              h = n[i];
            null !== s ? (o.push({
              x: r.x,
              y: s
            }), o.push({
              x: h.x,
              y: s
            })) : null !== e && (o.push({
              x: e,
              y: r.y
            }), o.push({
              x: e,
              y: h.y
            }))
          }), o
        }(t, i), e.length ? new fi({
          points: e,
          options: {
            tension: 0
          },
          Dt: n,
          Lt: n
        }) : null
      }

      function Ni(t) {
        return t && !1 !== t.fill
      }

      function Pi(t, i, e) {
        let n = t[i].fill;
        const o = [i];
        let r;
        if (!e) return n;
        for (; !1 !== n && -1 === o.indexOf(n);) {
          if (!(0, s.g)(n)) return n;
          if (r = t[n], !r) return !1;
          if (r.visible) return n;
          o.push(n), n = r.fill
        }
        return !1
      }

      function Ti(t, i, e) {
        const n = function(t) {
          const i = t.options,
            e = i.fill;
          let n = (0, s.v)(e && e.target, e);
          return void 0 === n && (n = !!i.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n)
        }(t);
        if ((0, s.i)(n)) return !isNaN(n.value) && n;
        let o = parseFloat(n);
        return (0, s.g)(o) && Math.floor(o) === o ? function(t, i, e, s) {
          return ("-" === t || "+" === t) && (e = i + e), e !== i && e >= 0 && s > e && e
        }(n[0], i, o, e) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
      }

      function Fi(t, i, e) {
        const s = [];
        for (let n = 0; n < e.length; n++) {
          const o = e[n],
            {
              first: r,
              last: h,
              point: a
            } = Ii(o, i, "x");
          if (!(!a || r && h))
            if (r) s.unshift(a);
            else if (t.push(a), !h) break
        }
        t.push(...s)
      }

      function Ii(t, i, e) {
        const n = t.interpolate(i, e);
        if (!n) return {};
        const o = n[e],
          r = t.segments,
          h = t.points;
        let a = !1,
          c = !1;
        for (let t = 0; t < r.length; t++) {
          const i = r[t],
            n = h[i.start][e],
            l = h[i.end][e];
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
      class zi {
        constructor(t) {
          this.x = t.x, this.y = t.y, this.radius = t.radius
        }
        pathSegment(t, i, e) {
          const {
            x: n,
            y: o,
            radius: r
          } = this;
          return i = i || {
            start: 0,
            end: s.T
          }, t.arc(n, o, r, i.end, i.start, !0), !e.bounds
        }
        interpolate(t) {
          const {
            x: i,
            y: e,
            radius: s
          } = this, n = t.angle;
          return {
            x: i + Math.cos(n) * s,
            y: e + Math.sin(n) * s,
            angle: n
          }
        }
      }

      function Wi(t, i, e) {
        const n = function(t) {
            const {
              chart: i,
              fill: e,
              line: n
            } = t;
            if ((0, s.g)(e)) return function(t, i) {
              const e = t.getDatasetMeta(i);
              return e && t.isDatasetVisible(i) ? e.dataset : null
            }(i, e);
            if ("stack" === e) return function(t) {
              const {
                scale: i,
                index: e,
                line: s
              } = t, n = [], o = s.segments, r = s.points, h = function(t, i) {
                const e = [],
                  s = t.getMatchingVisibleMetas("line");
                for (let t = 0; t < s.length; t++) {
                  const n = s[t];
                  if (n.index === i) break;
                  n.hidden || e.unshift(n.dataset)
                }
                return e
              }(i, e);
              h.push(Ei({
                x: null,
                y: i.bottom
              }, s));
              for (let t = 0; t < o.length; t++) {
                const i = o[t];
                for (let t = i.start; t <= i.end; t++) Fi(n, r[t], h)
              }
              return new fi({
                points: n,
                options: {}
              })
            }(t);
            if ("shape" === e) return !0;
            const o = function(t) {
              return (t.scale || {}).getPointPositionForValue ? function(t) {
                const {
                  scale: i,
                  fill: e
                } = t, n = i.options, o = i.getLabels().length, r = n.reverse ? i.max : i.min, h = function(t, i, e) {
                  let n;
                  return n = "start" === t ? e : "end" === t ? i.options.reverse ? i.min : i.max : (0, s.i)(t) ? t.value : i.getBaseValue(), n
                }(e, i, r), a = [];
                if (n.grid.circular) {
                  const t = i.getPointPositionForValue(0, r);
                  return new zi({
                    x: t.x,
                    y: t.y,
                    radius: i.getDistanceFromCenterForValue(h)
                  })
                }
                for (let t = 0; o > t; ++t) a.push(i.getPointPositionForValue(t, h));
                return a
              }(t) : function(t) {
                const {
                  scale: i = {},
                  fill: e
                } = t, n = function(t, i) {
                  let e = null;
                  return "start" === t ? e = i.bottom : "end" === t ? e = i.top : (0, s.i)(t) ? e = i.getPixelForValue(t.value) : i.getBasePixel && (e = i.getBasePixel()), e
                }(e, i);
                if ((0, s.g)(n)) {
                  const t = i.isHorizontal();
                  return {
                    x: t ? n : null,
                    y: t ? null : n
                  }
                }
                return null
              }(t)
            }(t);
            return o instanceof zi ? o : Ei(o, n)
          }(i),
          {
            line: o,
            scale: r,
            axis: h
          } = i,
          a = o.options,
          c = a.fill,
          l = a.backgroundColor,
          {
            above: u = l,
            below: f = l
          } = c || {};
        n && o.points.length && ((0, s.Y)(t, e), function(t, i) {
          const {
            line: e,
            target: s,
            above: n,
            below: o,
            area: r,
            scale: h
          } = i, a = e.Dt ? "angle" : i.axis;
          t.save(), "x" === a && o !== n && (Bi(t, s, r.top), Vi(t, {
            line: e,
            target: s,
            color: n,
            scale: h,
            property: a
          }), t.restore(), t.save(), Bi(t, s, r.bottom)), Vi(t, {
            line: e,
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
          area: e,
          scale: r,
          axis: h
        }), (0, s.$)(t))
      }

      function Bi(t, i, e) {
        const {
          segments: s,
          points: n
        } = i;
        let o = !0,
          r = !1;
        t.beginPath();
        for (const h of s) {
          const {
            start: s,
            end: a
          } = h, c = n[s], l = n[Ri(s, a, n)];
          o ? (t.moveTo(c.x, c.y), o = !1) : (t.lineTo(c.x, e), t.lineTo(c.x, c.y)), r = !!i.pathSegment(t, h, {
            move: r
          }), r ? t.closePath() : t.lineTo(l.x, e)
        }
        t.lineTo(i.first().x, e), t.closePath(), t.clip()
      }

      function Vi(t, i) {
        const {
          line: e,
          target: n,
          property: o,
          color: r,
          scale: h
        } = i, a = function(t, i, e) {
          const n = t.segments,
            o = t.points,
            r = i.points,
            h = [];
          for (const t of n) {
            let {
              start: n,
              end: a
            } = t;
            a = Ri(n, a, o);
            const c = Li(e, o[n], o[a], t.loop);
            if (!i.segments) {
              h.push({
                source: t,
                target: c,
                start: o[n],
                end: o[a]
              });
              continue
            }
            const l = (0, s.an)(i, c);
            for (const i of l) {
              const n = Li(e, r[i.start], r[i.end], i.loop),
                a = (0, s.ax)(t, o, n);
              for (const t of a) h.push({
                source: t,
                target: i,
                start: {
                  [e]: ji(c, n, "start", Math.max)
                },
                end: {
                  [e]: ji(c, n, "end", Math.min)
                }
              })
            }
          }
          return h
        }(e, n, o);
        for (const {
            source: i,
            target: s,
            start: c,
            end: l
          }
          of a) {
          const {
            style: {
              backgroundColor: a = r
            } = {}
          } = i, u = !0 !== n;
          t.save(), t.fillStyle = a, Hi(t, h, u && Li(o, c, l)), t.beginPath();
          const f = !!e.pathSegment(t, i);
          let d;
          if (u) {
            f ? t.closePath() : Yi(t, n, l, o);
            const i = !!n.pathSegment(t, s, {
              move: f,
              reverse: !0
            });
            d = f && i, d || Yi(t, n, c, o)
          }
          t.closePath(), t.fill(d ? "evenodd" : "nonzero"), t.restore()
        }
      }

      function Hi(t, i, e) {
        const {
          top: s,
          bottom: n
        } = i.chart.chartArea, {
          property: o,
          start: r,
          end: h
        } = e || {};
        "x" === o && (t.beginPath(), t.rect(r, s, h - r, n - s), t.clip())
      }

      function Yi(t, i, e, s) {
        const n = i.interpolate(e, s);
        n && t.lineTo(n.x, n.y)
      }
      var $i = {
        id: "filler",
        afterDatasetsUpdate(t, i, e) {
          const s = (t.data.datasets || []).length,
            n = [];
          let o, r, h, a;
          for (r = 0; s > r; ++r) o = t.getDatasetMeta(r), h = o.dataset, a = null, h && h.options && h instanceof fi && (a = {
            visible: t.isDatasetVisible(r),
            index: r,
            fill: Ti(h, r, s),
            chart: t,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: h
          }), o.$filler = a, n.push(a);
          for (r = 0; s > r; ++r) a = n[r], a && !1 !== a.fill && (a.fill = Pi(n, r, e.propagate))
        },
        beforeDraw(t, i, e) {
          const s = "beforeDraw" === e.drawTime,
            n = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let i = n.length - 1; i >= 0; --i) {
            const e = n[i].$filler;
            e && (e.line.updateControlPoints(o, e.axis), s && e.fill && Wi(t.ctx, e, o))
          }
        },
        beforeDatasetsDraw(t, i, e) {
          if ("beforeDatasetsDraw" !== e.drawTime) return;
          const s = t.getSortedVisibleDatasetMetas();
          for (let i = s.length - 1; i >= 0; --i) {
            const e = s[i].$filler;
            Ni(e) && Wi(t.ctx, e, t.chartArea)
          }
        },
        beforeDatasetDraw(t, i, e) {
          const s = i.meta.$filler;
          !Ni(s) || "beforeDatasetDraw" !== e.drawTime || Wi(t.ctx, s, t.chartArea)
        },
        defaults: {
          propagate: !0,
          drawTime: "beforeDatasetDraw"
        }
      };
      const _i = (t, i) => {
        let {
          boxHeight: e = i,
          boxWidth: s = i
        } = t;
        return t.usePointStyle && (e = Math.min(e, i), s = t.pointStyleWidth || Math.min(s, i)), {
          boxWidth: s,
          boxHeight: e,
          itemHeight: Math.max(i, e)
        }
      };
      class Xi extends gt {
        constructor(t) {
          super(), this.$s = !1, this.legendHitBoxes = [], this.Xs = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this.di = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, i, e) {
          this.maxWidth = t, this.maxHeight = i, this.di = e, this.setDimensions(), this.buildLabels(), this.fit()
        }
        setDimensions() {
          this.isHorizontal() ? (this.width = this.maxWidth, this.left = this.di.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this.di.top, this.bottom = this.height)
        }
        buildLabels() {
          const t = this.options.labels || {};
          let i = (0, s.Q)(t.generateLabels, [this.chart], this) || [];
          t.filter && (i = i.filter(i => t.filter(i, this.chart.data))), t.sort && (i = i.sort((i, e) => t.sort(i, e, this.chart.data))), this.options.reverse && i.reverse(), this.legendItems = i
        }
        fit() {
          const {
            options: t,
            ctx: i
          } = this;
          if (!t.display) return void(this.width = this.height = 0);
          const e = t.labels,
            n = (0, s.a0)(e.font),
            o = n.size,
            r = this.Us(),
            {
              boxWidth: h,
              itemHeight: a
            } = _i(e, o);
          let c, l;
          i.font = n.string, this.isHorizontal() ? (c = this.maxWidth, l = this.Ks(r, o, h, a) + 10) : (l = this.maxHeight, c = this.Zs(r, n, h, a) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(l, t.maxHeight || this.maxHeight)
        }
        Ks(t, i, e, s) {
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
            const p = e + i / 2 + n.measureText(t.text).width;
            (0 === d || a[a.length - 1] + p + 2 * r > o) && (l += c, a[a.length - (d > 0 ? 0 : 1)] = 0, f += c, u++), h[d] = {
              left: 0,
              top: f,
              row: u,
              width: p,
              height: s
            }, a[a.length - 1] += p + r
          }), l
        }
        Zs(t, i, e, s) {
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
            } = function(t, i, e, s, n) {
              const o = function(t, i, e, s) {
                  let n = t.text;
                  return n && "string" != typeof n && (n = n.reduce((t, i) => t.length > i.length ? t : i)), i + e.size / 2 + s.measureText(n).width
                }(s, t, i, e),
                r = function(t, i, e) {
                  let s = t;
                  return "string" != typeof i.text && (s = Ui(i, e)), s
                }(n, s, i.lineHeight);
              return {
                itemWidth: o,
                itemHeight: r
              }
            }(e, i, n, t, s);
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
          const t = this.Us(),
            {
              legendHitBoxes: i,
              options: {
                align: e,
                labels: {
                  padding: n
                },
                rtl: o
              }
            } = this,
            r = (0, s.az)(o, this.left, this.width);
          if (this.isHorizontal()) {
            let o = 0,
              h = (0, s.a2)(e, this.left + n, this.right - this.lineWidths[o]);
            for (const a of i) o !== a.row && (o = a.row, h = (0, s.a2)(e, this.left + n, this.right - this.lineWidths[o])), a.top += this.top + t + n, a.left = r.leftForLtr(r.x(h), a.width), h += a.width + n
          } else {
            let o = 0,
              h = (0, s.a2)(e, this.top + t + n, this.bottom - this.columnSizes[o].height);
            for (const a of i) a.col !== o && (o = a.col, h = (0, s.a2)(e, this.top + t + n, this.bottom - this.columnSizes[o].height)), a.top = h, a.left += this.left + n, a.left = r.leftForLtr(r.x(a.left), a.width), h += a.height + n
          }
        }
        isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            (0, s.Y)(t, this), this.Qs(), (0, s.$)(t)
          }
        }
        Qs() {
          const {
            options: t,
            columnSizes: i,
            lineWidths: e,
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
          } = _i(r, u), m = this.isHorizontal(), x = this.Us();
          d = m ? {
            x: (0, s.a2)(o, this.left + l, this.right - e[0]),
            y: this.top + l + x,
            line: 0
          } : {
            x: this.left + l,
            y: (0, s.a2)(o, this.top + x + l, this.bottom - i[0].height),
            line: 0
          }, (0, s.aA)(this.ctx, t.textDirection);
          const v = g + l;
          this.legendItems.forEach((y, M) => {
            n.strokeStyle = y.fontColor, n.fillStyle = y.fontColor;
            const w = n.measureText(y.text).width,
              k = a.textAlign(y.textAlign || (y.textAlign = r.textAlign)),
              O = p + f + w;
            let S = d.x,
              D = d.y;
            if (a.setWidth(this.width), m ? M > 0 && S + O + l > this.right && (D = d.y += v, d.line++, S = d.x = (0, s.a2)(o, this.left + l, this.right - e[d.line])) : M > 0 && D + v > this.bottom && (S = d.x = S + i[d.line].width + l, d.line++, D = d.y = (0, s.a2)(o, this.top + x + l, this.bottom - i[d.line].height)), function(t, i, e) {
                if (isNaN(p) || 0 >= p || isNaN(b) || 0 > b) return;
                n.save();
                const o = (0, s.v)(e.lineWidth, 1);
                if (n.fillStyle = (0, s.v)(e.fillStyle, h), n.lineCap = (0, s.v)(e.lineCap, "butt"), n.lineDashOffset = (0, s.v)(e.lineDashOffset, 0), n.lineJoin = (0, s.v)(e.lineJoin, "miter"), n.lineWidth = o, n.strokeStyle = (0, s.v)(e.strokeStyle, h), n.setLineDash((0, s.v)(e.lineDash, [])), r.usePointStyle) {
                  const h = {
                      radius: b * Math.SQRT2 / 2,
                      pointStyle: e.pointStyle,
                      rotation: e.rotation,
                      borderWidth: o
                    },
                    c = a.xPlus(t, p / 2),
                    l = i + f;
                  (0, s.aD)(n, h, c, l, r.pointStyleWidth && p)
                } else {
                  const r = i + Math.max((u - b) / 2, 0),
                    h = a.leftForLtr(t, p),
                    c = (0, s.aw)(e.borderRadius);
                  n.beginPath(), Object.values(c).some(t => 0 !== t) ? (0, s.au)(n, {
                    x: h,
                    y: r,
                    w: p,
                    h: b,
                    radius: c
                  }) : n.rect(h, r, p, b), n.fill(), 0 !== o && n.stroke()
                }
                n.restore()
              }(a.x(S), D, y), S = (0, s.aB)(k, S + p + f, m ? S + O : this.right, t.rtl), function(t, i, e) {
                (0, s.Z)(n, e.text, t, i + g / 2, c, {
                  strikethrough: e.hidden,
                  textAlign: a.textAlign(e.textAlign)
                })
              }(a.x(S), D, y), m) d.x += O + l;
            else if ("string" != typeof y.text) {
              const t = c.lineHeight;
              d.y += Ui(y, t) + l
            } else d.y += v
          }), (0, s.aC)(this.ctx, t.textDirection)
        }
        drawTitle() {
          const t = this.options,
            i = t.title,
            e = (0, s.a0)(i.font),
            n = (0, s.E)(i.padding);
          if (!i.display) return;
          const o = (0, s.az)(t.rtl, this.left, this.width),
            r = this.ctx,
            h = i.position,
            a = e.size / 2,
            c = n.top + a;
          let l, u = this.left,
            f = this.width;
          if (this.isHorizontal()) f = Math.max(...this.lineWidths), l = this.top + c, u = (0, s.a2)(t.align, u, this.right - f);
          else {
            const i = this.columnSizes.reduce((t, i) => Math.max(t, i.height), 0);
            l = c + (0, s.a2)(t.align, this.top, this.bottom - i - t.labels.padding - this.Us())
          }
          const d = (0, s.a2)(h, u, u + f);
          r.textAlign = o.textAlign((0, s.a1)(h)), r.textBaseline = "middle", r.strokeStyle = i.color, r.fillStyle = i.color, r.font = e.string, (0, s.Z)(r, i.text, d, l, e)
        }
        Us() {
          const t = this.options.title,
            i = (0, s.a0)(t.font),
            e = (0, s.E)(t.padding);
          return t.display ? i.lineHeight + e.height : 0
        }
        qs(t, i) {
          let e, n, o;
          if ((0, s.aj)(t, this.left, this.right) && (0, s.aj)(i, this.top, this.bottom))
            for (o = this.legendHitBoxes, e = 0; e < o.length; ++e)
              if (n = o[e], (0, s.aj)(t, n.left, n.left + n.width) && (0, s.aj)(i, n.top, n.top + n.height)) return this.legendItems[e];
          return null
        }
        handleEvent(t) {
          const i = this.options;
          if (! function(t, i) {
              return !(("mousemove" !== t && "mouseout" !== t || !i.onHover && !i.onLeave) && (!i.onClick || "click" !== t && "mouseup" !== t))
            }(t.type, i)) return;
          const e = this.qs(t.x, t.y);
          if ("mousemove" === t.type || "mouseout" === t.type) {
            const n = this.Xs,
              o = ((t, i) => null !== t && null !== i && t.datasetIndex === i.datasetIndex && t.index === i.index)(n, e);
            n && !o && (0, s.Q)(i.onLeave, [t, n, this], this), this.Xs = e, e && !o && (0, s.Q)(i.onHover, [t, e, this], this)
          } else e && (0, s.Q)(i.onClick, [t, e, this], this)
        }
      }

      function Ui(t, i) {
        return i * (t.text ? t.text.length : 0)
      }
      var Ki = {
        id: "legend",
        Gs: Xi,
        start(t, i, e) {
          const s = t.legend = new Xi({
            ctx: t.ctx,
            options: e,
            chart: t
          });
          G.configure(t, s, e), G.addBox(t, s)
        },
        stop(t) {
          G.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, i, e) {
          const s = t.legend;
          G.configure(t, s, e), s.options = e
        },
        afterUpdate(t) {
          const i = t.legend;
          i.buildLabels(), i.adjustHitBoxes()
        },
        afterEvent(t, i) {
          i.replay || t.legend.handleEvent(i.event)
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, i, e) {
            const s = i.datasetIndex,
              n = e.chart;
            n.isDatasetVisible(s) ? (n.hide(s), i.hidden = !0) : (n.show(s), i.hidden = !1)
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: t => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const i = t.data.datasets,
                {
                  labels: {
                    usePointStyle: e,
                    pointStyle: n,
                    textAlign: o,
                    color: r,
                    useBorderRadius: h,
                    borderRadius: a
                  }
                } = t.legend.options;
              return t.Jt().map(t => {
                const c = t.controller.getStyle(e ? 0 : void 0),
                  l = (0, s.E)(c.borderWidth);
                return {
                  text: i[t.index].label,
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
          ct: t => !t.startsWith("on"),
          labels: {
            ct: t => !["generateLabels", "filter", "sort"].includes(t)
          }
        }
      };
      class Zi extends gt {
        constructor(t) {
          super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.Js = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, i) {
          const e = this.options;
          if (this.left = 0, this.top = 0, !e.display) return void(this.width = this.height = this.right = this.bottom = 0);
          this.width = this.right = t, this.height = this.bottom = i;
          const n = (0, s.b)(e.text) ? e.text.length : 1;
          this.Js = (0, s.E)(e.padding);
          const o = n * (0, s.a0)(e.font).lineHeight + this.Js.height;
          this.isHorizontal() ? this.height = o : this.width = o
        }
        isHorizontal() {
          const t = this.options.position;
          return "top" === t || "bottom" === t
        }
        tn(t) {
          const {
            top: i,
            left: e,
            bottom: n,
            right: o,
            options: r
          } = this, h = r.align;
          let a, c, l, u = 0;
          return this.isHorizontal() ? (c = (0, s.a2)(h, e, o), l = i + t, a = o - e) : ("left" === r.position ? (c = e + t, l = (0, s.a2)(h, n, i), u = -.5 * s.P) : (c = o - t, l = (0, s.a2)(h, i, n), u = .5 * s.P), a = n - i), {
            titleX: c,
            titleY: l,
            maxWidth: a,
            rotation: u
          }
        }
        draw() {
          const t = this.ctx,
            i = this.options;
          if (!i.display) return;
          const e = (0, s.a0)(i.font),
            n = e.lineHeight / 2 + this.Js.top,
            {
              titleX: o,
              titleY: r,
              maxWidth: h,
              rotation: a
            } = this.tn(n);
          (0, s.Z)(t, i.text, 0, 0, e, {
            color: i.color,
            maxWidth: h,
            rotation: a,
            textAlign: (0, s.a1)(i.align),
            textBaseline: "middle",
            translation: [o, r]
          })
        }
      }
      var qi = {
        id: "title",
        Gs: Zi,
        start(t, i, e) {
          ! function(t, i) {
            const e = new Zi({
              ctx: t.ctx,
              options: i,
              chart: t
            });
            G.configure(t, e, i), G.addBox(t, e), t.titleBlock = e
          }(t, e)
        },
        stop(t) {
          const i = t.titleBlock;
          G.removeBox(t, i), delete t.titleBlock
        },
        beforeUpdate(t, i, e) {
          const s = t.titleBlock;
          G.configure(t, s, e), s.options = e
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
          ct: !0,
          lt: !1
        }
      };
      const Qi = new WeakMap;
      var Gi = {
        id: "subtitle",
        start(t, i, e) {
          const s = new Zi({
            ctx: t.ctx,
            options: e,
            chart: t
          });
          G.configure(t, s, e), G.addBox(t, s), Qi.set(t, s)
        },
        stop(t) {
          G.removeBox(t, Qi.get(t)), Qi.delete(t)
        },
        beforeUpdate(t, i, e) {
          const s = Qi.get(t);
          G.configure(t, s, e), s.options = e
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
          ct: !0,
          lt: !1
        }
      };
      const Ji = {
        average(t) {
          if (!t.length) return !1;
          let i, e, s = new Set,
            n = 0,
            o = 0;
          for (i = 0, e = t.length; e > i; ++i) {
            const e = t[i].element;
            if (e && e.hasValue()) {
              const t = e.tooltipPosition();
              s.add(t.x), n += t.y, ++o
            }
          }
          return {
            x: [...s].reduce((t, i) => t + i) / s.size,
            y: n / o
          }
        },
        nearest(t, i) {
          if (!t.length) return !1;
          let e, n, o, r = i.x,
            h = i.y,
            a = 1 / 0;
          for (e = 0, n = t.length; n > e; ++e) {
            const n = t[e].element;
            if (n && n.hasValue()) {
              const t = n.getCenterPoint(),
                e = (0, s.aE)(i, t);
              a > e && (a = e, o = n)
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

      function te(t, i) {
        return i && ((0, s.b)(i) ? [].push.apply(t, i) : t.push(i)), t
      }

      function ie(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
      }

      function ee(t, i) {
        const {
          element: e,
          datasetIndex: s,
          index: n
        } = i, o = t.getDatasetMeta(s).controller, {
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
          element: e
        }
      }

      function se(t, i) {
        const e = t.chart.ctx,
          {
            body: n,
            footer: o,
            title: r
          } = t,
          {
            boxWidth: h,
            boxHeight: a
          } = i,
          c = (0, s.a0)(i.bodyFont),
          l = (0, s.a0)(i.titleFont),
          u = (0, s.a0)(i.footerFont),
          f = r.length,
          d = o.length,
          p = n.length,
          b = (0, s.E)(i.padding);
        let g = b.height,
          m = 0,
          x = n.reduce((t, i) => t + i.before.length + i.lines.length + i.after.length, 0);
        x += t.beforeBody.length + t.afterBody.length, f && (g += f * l.lineHeight + (f - 1) * i.titleSpacing + i.titleMarginBottom), x && (g += p * (i.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight) + (x - p) * c.lineHeight + (x - 1) * i.bodySpacing), d && (g += i.footerMarginTop + d * u.lineHeight + (d - 1) * i.footerSpacing);
        let v = 0;
        const y = function(t) {
          m = Math.max(m, e.measureText(t).width + v)
        };
        return e.save(), e.font = l.string, (0, s.F)(t.title, y), e.font = c.string, (0, s.F)(t.beforeBody.concat(t.afterBody), y), v = i.displayColors ? h + 2 + i.boxPadding : 0, (0, s.F)(n, t => {
          (0, s.F)(t.before, y), (0, s.F)(t.lines, y), (0, s.F)(t.after, y)
        }), v = 0, e.font = u.string, (0, s.F)(t.footer, y), e.restore(), m += b.width, {
          width: m,
          height: g
        }
      }

      function ne(t, i, e, s) {
        const {
          x: n,
          width: o
        } = e, {
          width: r,
          chartArea: {
            left: h,
            right: a
          }
        } = t;
        let c = "center";
        return "center" === s ? c = n > (h + a) / 2 ? "right" : "left" : n > o / 2 ? n >= r - o / 2 && (c = "right") : c = "left",
          function(t, i, e, s) {
            const {
              x: n,
              width: o
            } = s, r = e.caretSize + e.caretPadding;
            if ("left" === t && n + o + r > i.width || "right" === t && 0 > n - o - r) return !0
          }(c, t, i, e) && (c = "center"), c
      }

      function oe(t, i, e) {
        const s = e.yAlign || i.yAlign || function(t, i) {
          const {
            y: e,
            height: s
          } = i;
          return s / 2 > e ? "top" : e > t.height - s / 2 ? "bottom" : "center"
        }(t, e);
        return {
          xAlign: e.xAlign || i.xAlign || ne(t, i, e, s),
          yAlign: s
        }
      }

      function re(t, i, e, n) {
        const {
          caretSize: o,
          caretPadding: r,
          cornerRadius: h
        } = t, {
          xAlign: a,
          yAlign: c
        } = e, l = o + r, {
          topLeft: u,
          topRight: f,
          bottomLeft: d,
          bottomRight: p
        } = (0, s.aw)(h);
        let b = function(t, i) {
          let {
            x: e,
            width: s
          } = t;
          return "right" === i ? e -= s : "center" === i && (e -= s / 2), e
        }(i, a);
        const g = function(t, i, e) {
          let {
            y: s,
            height: n
          } = t;
          return "top" === i ? s += e : s -= "bottom" === i ? n + e : n / 2, s
        }(i, c, l);
        return "center" === c ? "left" === a ? b += l : "right" === a && (b -= l) : "left" === a ? b -= Math.max(u, d) + o : "right" === a && (b += Math.max(f, p) + o), {
          x: (0, s.S)(b, 0, n.width - i.width),
          y: (0, s.S)(g, 0, n.height - i.height)
        }
      }

      function he(t, i, e) {
        const n = (0, s.E)(e.padding);
        return "center" === i ? t.x + t.width / 2 : "right" === i ? t.x + t.width - n.right : t.x + n.left
      }

      function ae(t) {
        return te([], ie(t))
      }

      function ce(t, i) {
        const e = i && i.dataset && i.dataset.tooltip && i.dataset.tooltip.callbacks;
        return e ? t.override(e) : t
      }
      const le = {
        beforeTitle: s.aF,
        title(t) {
          if (t.length > 0) {
            const i = t[0],
              e = i.chart.data.labels,
              s = e ? e.length : 0;
            if (this && this.options && "dataset" === this.options.mode) return i.dataset.label || "";
            if (i.label) return i.label;
            if (s > 0 && i.dataIndex < s) return e[i.dataIndex]
          }
          return ""
        },
        afterTitle: s.aF,
        beforeBody: s.aF,
        beforeLabel: s.aF,
        label(t) {
          if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
          let i = t.dataset.label || "";
          i && (i += ": ");
          const e = t.formattedValue;
          return (0, s.k)(e) || (i += e), i
        },
        labelColor(t) {
          const i = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor,
            borderWidth: i.borderWidth,
            borderDash: i.borderDash,
            borderDashOffset: i.borderDashOffset,
            borderRadius: 0
          }
        },
        labelTextColor() {
          return this.options.bodyColor
        },
        labelPointStyle(t) {
          const i = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            pointStyle: i.pointStyle,
            rotation: i.rotation
          }
        },
        afterLabel: s.aF,
        afterBody: s.aF,
        beforeFooter: s.aF,
        footer: s.aF,
        afterFooter: s.aF
      };

      function ue(t, i, e, s) {
        const n = t[i].call(e, s);
        return typeof n > "u" ? le[i].call(e, s) : n
      }
      class fe extends gt {
        static positioners = Ji;
        constructor(t) {
          super(), this.opacity = 0, this.It = [], this.en = void 0, this.sn = void 0, this.nn = void 0, this.rn = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }
        initialize(t) {
          this.options = t, this.nn = void 0, this.$context = void 0
        }
        we() {
          const t = this.nn;
          if (t) return t;
          const i = this.chart,
            e = this.options.setContext(this.getContext()),
            s = e.enabled && i.options.animation && e.animations,
            n = new a(this.chart, s);
          return s.ft && (this.nn = Object.freeze(n)), n
        }
        getContext() {
          return this.$context || (this.$context = (t = this.chart.getContext(), i = this.rn, (0, s.j)(t, {
            tooltip: this,
            tooltipItems: i,
            type: "tooltip"
          })));
          var t, i
        }
        getTitle(t, i) {
          const {
            callbacks: e
          } = i, s = ue(e, "beforeTitle", this, t), n = ue(e, "title", this, t), o = ue(e, "afterTitle", this, t);
          let r = [];
          return r = te(r, ie(s)), r = te(r, ie(n)), r = te(r, ie(o)), r
        }
        getBeforeBody(t, i) {
          return ae(ue(i.callbacks, "beforeBody", this, t))
        }
        getBody(t, i) {
          const {
            callbacks: e
          } = i, n = [];
          return (0, s.F)(t, t => {
            const i = {
                before: [],
                lines: [],
                after: []
              },
              s = ce(e, t);
            te(i.before, ie(ue(s, "beforeLabel", this, t))), te(i.lines, ue(s, "label", this, t)), te(i.after, ie(ue(s, "afterLabel", this, t))), n.push(i)
          }), n
        }
        getAfterBody(t, i) {
          return ae(ue(i.callbacks, "afterBody", this, t))
        }
        getFooter(t, i) {
          const {
            callbacks: e
          } = i, s = ue(e, "beforeFooter", this, t), n = ue(e, "footer", this, t), o = ue(e, "afterFooter", this, t);
          let r = [];
          return r = te(r, ie(s)), r = te(r, ie(n)), r = te(r, ie(o)), r
        }
        hn(t) {
          const i = this.It,
            e = this.chart.data,
            n = [],
            o = [],
            r = [];
          let h, a, c = [];
          for (h = 0, a = i.length; a > h; ++h) c.push(ee(this.chart, i[h]));
          return t.filter && (c = c.filter((i, s, n) => t.filter(i, s, n, e))), t.itemSort && (c = c.sort((i, s) => t.itemSort(i, s, e))), (0, s.F)(c, i => {
            const e = ce(t.callbacks, i);
            n.push(ue(e, "labelColor", this, i)), o.push(ue(e, "labelPointStyle", this, i)), r.push(ue(e, "labelTextColor", this, i))
          }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = c, c
        }
        update(t, i) {
          const e = this.options.setContext(this.getContext()),
            s = this.It;
          let n, o = [];
          if (s.length) {
            const t = Ji[e.position].call(this, s, this.en);
            o = this.hn(e), this.title = this.getTitle(o, e), this.beforeBody = this.getBeforeBody(o, e), this.body = this.getBody(o, e), this.afterBody = this.getAfterBody(o, e), this.footer = this.getFooter(o, e);
            const i = this.sn = se(this, e),
              r = Object.assign({}, t, i),
              h = oe(this.chart, e, r),
              a = re(e, r, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, n = {
              opacity: 1,
              x: a.x,
              y: a.y,
              width: i.width,
              height: i.height,
              caretX: t.x,
              caretY: t.y
            }
          } else 0 !== this.opacity && (n = {
            opacity: 0
          });
          this.rn = o, this.$context = void 0, n && this.we().update(this, n), t && e.external && e.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: i
          })
        }
        drawCaret(t, i, e, s) {
          const n = this.getCaretPosition(t, e, s);
          i.lineTo(n.x1, n.y1), i.lineTo(n.x2, n.y2), i.lineTo(n.x3, n.y3)
        }
        getCaretPosition(t, i, e) {
          const {
            xAlign: n,
            yAlign: o
          } = this, {
            caretSize: r,
            cornerRadius: h
          } = e, {
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
          } = i;
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
        drawTitle(t, i, e) {
          const n = this.title,
            o = n.length;
          let r, h, a;
          if (o) {
            const c = (0, s.az)(e.rtl, this.x, this.width);
            for (t.x = he(this, e.titleAlign, e), i.textAlign = c.textAlign(e.titleAlign), i.textBaseline = "middle", r = (0, s.a0)(e.titleFont), h = e.titleSpacing, i.fillStyle = e.titleColor, i.font = r.string, a = 0; o > a; ++a) i.fillText(n[a], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + h, a + 1 === o && (t.y += e.titleMarginBottom - h)
          }
        }
        cn(t, i, e, n, o) {
          const r = this.labelColors[e],
            h = this.labelPointStyles[e],
            {
              boxHeight: a,
              boxWidth: c
            } = o,
            l = (0, s.a0)(o.bodyFont),
            u = he(this, "left", o),
            f = n.x(u),
            d = a < l.lineHeight ? (l.lineHeight - a) / 2 : 0,
            p = i.y + d;
          if (o.usePointStyle) {
            const i = {
                radius: Math.min(c, a) / 2,
                pointStyle: h.pointStyle,
                rotation: h.rotation,
                borderWidth: 1
              },
              e = n.leftForLtr(f, c) + c / 2,
              l = p + a / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, (0, s.at)(t, i, e, l), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, (0, s.at)(t, i, e, l)
          } else {
            t.lineWidth = (0, s.i)(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
            const i = n.leftForLtr(f, c),
              e = n.leftForLtr(n.xPlus(f, 1), c - 2),
              h = (0, s.aw)(r.borderRadius);
            Object.values(h).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, (0, s.au)(t, {
              x: i,
              y: p,
              w: c,
              h: a,
              radius: h
            }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), (0, s.au)(t, {
              x: e,
              y: p + 1,
              w: c - 2,
              h: a - 2,
              radius: h
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(i, p, c, a), t.strokeRect(i, p, c, a), t.fillStyle = r.backgroundColor, t.fillRect(e, p + 1, c - 2, a - 2))
          }
          t.fillStyle = this.labelTextColors[e]
        }
        drawBody(t, i, e) {
          const {
            body: n
          } = this, {
            bodySpacing: o,
            bodyAlign: r,
            displayColors: h,
            boxHeight: a,
            boxWidth: c,
            boxPadding: l
          } = e, u = (0, s.a0)(e.bodyFont);
          let f = u.lineHeight,
            d = 0;
          const p = (0, s.az)(e.rtl, this.x, this.width),
            b = function(e) {
              i.fillText(e, p.x(t.x + d), t.y + f / 2), t.y += f + o
            },
            g = p.textAlign(r);
          let m, x, v, y, M, w, k;
          for (i.textAlign = r, i.textBaseline = "middle", i.font = u.string, t.x = he(this, g, e), i.fillStyle = e.bodyColor, (0, s.F)(this.beforeBody, b), d = h && "right" !== g ? "center" === r ? c / 2 + l : c + 2 + l : 0, y = 0, w = n.length; w > y; ++y) {
            for (m = n[y], x = this.labelTextColors[y], i.fillStyle = x, (0, s.F)(m.before, b), v = m.lines, h && v.length && (this.cn(i, t, y, p, e), f = Math.max(u.lineHeight, a)), M = 0, k = v.length; k > M; ++M) b(v[M]), f = u.lineHeight;
            (0, s.F)(m.after, b)
          }
          d = 0, f = u.lineHeight, (0, s.F)(this.afterBody, b), t.y -= o
        }
        drawFooter(t, i, e) {
          const n = this.footer,
            o = n.length;
          let r, h;
          if (o) {
            const a = (0, s.az)(e.rtl, this.x, this.width);
            for (t.x = he(this, e.footerAlign, e), t.y += e.footerMarginTop, i.textAlign = a.textAlign(e.footerAlign), i.textBaseline = "middle", r = (0, s.a0)(e.footerFont), i.fillStyle = e.footerColor, i.font = r.string, h = 0; o > h; ++h) i.fillText(n[h], a.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + e.footerSpacing
          }
        }
        drawBackground(t, i, e, n) {
          const {
            xAlign: o,
            yAlign: r
          } = this, {
            x: h,
            y: a
          } = t, {
            width: c,
            height: l
          } = e, {
            topLeft: u,
            topRight: f,
            bottomLeft: d,
            bottomRight: p
          } = (0, s.aw)(n.cornerRadius);
          i.fillStyle = n.backgroundColor, i.strokeStyle = n.borderColor, i.lineWidth = n.borderWidth, i.beginPath(), i.moveTo(h + u, a), "top" === r && this.drawCaret(t, i, e, n), i.lineTo(h + c - f, a), i.quadraticCurveTo(h + c, a, h + c, a + f), "center" === r && "right" === o && this.drawCaret(t, i, e, n), i.lineTo(h + c, a + l - p), i.quadraticCurveTo(h + c, a + l, h + c - p, a + l), "bottom" === r && this.drawCaret(t, i, e, n), i.lineTo(h + d, a + l), i.quadraticCurveTo(h, a + l, h, a + l - d), "center" === r && "left" === o && this.drawCaret(t, i, e, n), i.lineTo(h, a + u), i.quadraticCurveTo(h, a, h + u, a), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
        }
        ln(t) {
          const i = this.chart,
            e = this.$animations,
            s = e && e.x,
            n = e && e.y;
          if (s || n) {
            const e = Ji[t.position].call(this, this.It, this.en);
            if (!e) return;
            const o = this.sn = se(this, t),
              r = Object.assign({}, e, this.sn),
              h = oe(i, t, r),
              a = re(t, r, h, i);
            (s.Kt !== a.x || n.Kt !== a.y) && (this.xAlign = h.xAlign, this.yAlign = h.yAlign, this.width = o.width, this.height = o.height, this.caretX = e.x, this.caretY = e.y, this.we().update(this, a))
          }
        }
        un() {
          return !!this.opacity
        }
        draw(t) {
          const i = this.options.setContext(this.getContext());
          let e = this.opacity;
          if (!e) return;
          this.ln(i);
          const n = {
              width: this.width,
              height: this.height
            },
            o = {
              x: this.x,
              y: this.y
            };
          e = .001 > Math.abs(e) ? 0 : e;
          const r = (0, s.E)(i.padding),
            h = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
          i.enabled && h && (t.save(), t.globalAlpha = e, this.drawBackground(o, t, n, i), (0, s.aA)(t, i.textDirection), o.y += r.top, this.drawTitle(o, t, i), this.drawBody(o, t, i), this.drawFooter(o, t, i), (0, s.aC)(t, i.textDirection), t.restore())
        }
        getActiveElements() {
          return this.It || []
        }
        setActiveElements(t, i) {
          const e = this.It,
            n = t.map(({
              datasetIndex: t,
              index: i
            }) => {
              const e = this.chart.getDatasetMeta(t);
              if (!e) throw Error("Cannot find a dataset at index " + t);
              return {
                datasetIndex: t,
                element: e.data[i],
                index: i
              }
            }),
            o = !(0, s.ah)(e, n),
            r = this.dn(n, i);
          (o || r) && (this.It = n, this.en = i, this.pn = !0, this.update(!0))
        }
        handleEvent(t, i, e = !0) {
          if (i && this.pn) return !1;
          this.pn = !1;
          const n = this.options,
            o = this.It || [],
            r = this.Ws(t, o, i, e),
            h = this.dn(r, t),
            a = i || !(0, s.ah)(r, o) || h;
          return a && (this.It = r, (n.enabled || n.external) && (this.en = {
            x: t.x,
            y: t.y
          }, this.update(!0, i))), a
        }
        Ws(t, i, e, s) {
          const n = this.options;
          if ("mouseout" === t.type) return [];
          if (!s) return i.filter(t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index));
          const o = this.chart.getElementsAtEventForMode(t, n.mode, n, e);
          return n.reverse && o.reverse(), o
        }
        dn(t, i) {
          const {
            caretX: e,
            caretY: s,
            options: n
          } = this, o = Ji[n.position].call(this, t, i);
          return !1 !== o && (e !== o.x || s !== o.y)
        }
      }

      function de(t) {
        const i = this.getLabels();
        return t >= 0 && t < i.length ? i[t] : t
      }
      Object.freeze({
        __proto__: null,
        Colors: Si,
        Decimation: Ci,
        Filler: $i,
        Legend: Ki,
        SubTitle: Gi,
        Title: qi,
        Tooltip: {
          id: "tooltip",
          Gs: fe,
          positioners: Ji,
          afterInit(t, i, e) {
            e && (t.tooltip = new fe({
              chart: t,
              options: e
            }))
          },
          beforeUpdate(t, i, e) {
            t.tooltip && t.tooltip.initialize(e)
          },
          reset(t, i, e) {
            t.tooltip && t.tooltip.initialize(e)
          },
          afterDraw(t) {
            const i = t.tooltip;
            if (i && i.un()) {
              const e = {
                tooltip: i
              };
              if (!1 === t.notifyPlugins("beforeTooltipDraw", {
                  ...e,
                  cancelable: !0
                })) return;
              i.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", e)
            }
          },
          afterEvent(t, i) {
            if (t.tooltip) {
              const e = i.replay;
              t.tooltip.handleEvent(i.event, e, i.inChartArea) && (i.changed = !0)
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
            boxHeight: (t, i) => i.bodyFont.size,
            boxWidth: (t, i) => i.bodyFont.size,
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
            callbacks: le
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
          },
          descriptors: {
            ct: t => "filter" !== t && "itemSort" !== t && "external" !== t,
            lt: !1,
            callbacks: {
              ct: !1,
              lt: !1
            },
            animation: {
              ut: !1
            },
            animations: {
              ut: "animation"
            }
          },
          additionalOptionScopes: ["interaction"]
        }
      });
      class pe extends St {
        static id = "category";
        static defaults = {
          ticks: {
            callback: de
          }
        };
        constructor(t) {
          super(t), this.bn = void 0, this.gn = 0, this.mn = []
        }
        init(t) {
          const i = this.mn;
          if (i.length) {
            const t = this.getLabels();
            for (const {
                index: e,
                label: s
              }
              of i) t[e] === s && t.splice(e, 1);
            this.mn = []
          }
          super.init(t)
        }
        parse(t, i) {
          if ((0, s.k)(t)) return null;
          const e = this.getLabels();
          return ((t, i) => null === t ? null : (0, s.S)(Math.round(t), 0, i))(i = isFinite(i) && e[i] === t ? i : function(t, i, e, s) {
            const n = t.indexOf(i);
            return -1 === n ? ((t, i, e, s) => ("string" == typeof i ? (e = t.push(i) - 1, s.unshift({
              index: e,
              label: i
            })) : isNaN(i) && (e = null), e))(t, i, e, s) : n !== t.lastIndexOf(i) ? e : n
          }(e, t, (0, s.v)(i, t), this.mn), e.length - 1)
        }
        determineDataLimits() {
          const {
            minDefined: t,
            maxDefined: i
          } = this.getUserBounds();
          let {
            min: e,
            max: s
          } = this.getMinMax(!0);
          "ticks" === this.options.bounds && (t || (e = 0), i || (s = this.getLabels().length - 1)), this.min = e, this.max = s
        }
        buildTicks() {
          const t = this.min,
            i = this.max,
            e = this.options.offset,
            s = [];
          let n = this.getLabels();
          n = 0 === t && i === n.length - 1 ? n : n.slice(t, i + 1), this.gn = Math.max(n.length - (e ? 0 : 1), 1), this.bn = this.min - (e ? .5 : 0);
          for (let e = t; i >= e; e++) s.push({
            value: e
          });
          return s
        }
        getLabelForValue(t) {
          return de.call(this, t)
        }
        configure() {
          super.configure(), this.isHorizontal() || (this.ui = !this.ui)
        }
        getPixelForValue(t) {
          return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this.bn) / this.gn)
        }
        getPixelForTick(t) {
          const i = this.ticks;
          return 0 > t || t > i.length - 1 ? null : this.getPixelForValue(i[t].value)
        }
        getValueForPixel(t) {
          return Math.round(this.bn + this.getDecimalForPixel(t) * this.gn)
        }
        getBasePixel() {
          return this.bottom
        }
      }

      function be(t, i, {
        horizontal: e,
        minRotation: n
      }) {
        const o = (0, s.t)(n);
        return Math.min(i / ((e ? Math.sin(o) : Math.cos(o)) || .001), .75 * i * ("" + t).length)
      }
      class ge extends St {
        constructor(t) {
          super(t), this.start = void 0, this.end = void 0, this.bn = void 0, this.xn = void 0, this.gn = 0
        }
        parse(t, i) {
          return (0, s.k)(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions() {
          const {
            beginAtZero: t
          } = this.options, {
            minDefined: i,
            maxDefined: e
          } = this.getUserBounds();
          let {
            min: n,
            max: o
          } = this;
          const r = t => n = i ? n : t,
            h = t => o = e ? o : t;
          if (t) {
            const t = (0, s.s)(n),
              i = (0, s.s)(o);
            0 > t && 0 > i ? h(0) : t > 0 && i > 0 && r(0)
          }
          if (n === o) {
            let i = 0 === o ? 1 : Math.abs(.05 * o);
            h(o + i), t || r(n - i)
          }
          this.min = n, this.max = o
        }
        getTickLimit() {
          const t = this.options.ticks;
          let i, {
            maxTicksLimit: e,
            stepSize: s
          } = t;
          return s ? (i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), e = e || 11), e && (i = Math.min(e, i)), i
        }
        computeTickLimit() {
          return 1 / 0
        }
        buildTicks() {
          const t = this.options,
            i = t.ticks;
          let e = this.getTickLimit();
          e = Math.max(2, e);
          const n = function(t, i) {
            const e = [],
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
              } = i,
              m = !(0, s.k)(r),
              x = !(0, s.k)(h),
              v = !(0, s.k)(c),
              y = (g - b) / (u + 1);
            let M, w, k, O, S = (0, s.aH)((g - b) / p / d) * d;
            if (1e-14 > S && !m && !x) return [{
              value: b
            }, {
              value: g
            }];
            O = Math.ceil(g / S) - Math.floor(b / S), O > p && (S = (0, s.aH)(O * S / p / d) * d), (0, s.k)(a) || (M = Math.pow(10, a), S = Math.ceil(S * M) / M), "ticks" === n ? (w = Math.floor(b / S) * S, k = Math.ceil(g / S) * S) : (w = b, k = g), m && x && o && (0, s.aI)((h - r) / o, S / 1e3) ? (O = Math.round(Math.min((h - r) / S, l)), S = (h - r) / O, w = r, k = h) : v ? (w = m ? r : w, k = x ? h : k, O = c - 1, S = (k - w) / O) : (O = (k - w) / S, O = (0, s.aJ)(O, Math.round(O), S / 1e3) ? Math.round(O) : Math.ceil(O));
            const D = Math.max((0, s.aK)(S), (0, s.aK)(w));
            M = Math.pow(10, (0, s.k)(a) ? D : a), w = Math.round(w * M) / M, k = Math.round(k * M) / M;
            let A = 0;
            for (m && (f && w !== r ? (e.push({
                value: r
              }), r > w && A++, (0, s.aJ)(Math.round((w + A * S) * M) / M, r, be(r, y, t)) && A++) : r > w && A++); O > A; ++A) {
              const t = Math.round((w + A * S) * M) / M;
              if (x && t > h) break;
              e.push({
                value: t
              })
            }
            return x && f && k !== h ? e.length && (0, s.aJ)(e[e.length - 1].value, h, be(h, y, t)) ? e[e.length - 1].value = h : e.push({
              value: h
            }) : (!x || k === h) && e.push({
              value: k
            }), e
          }({
            maxTicks: e,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: i.precision,
            step: i.stepSize,
            count: i.count,
            maxDigits: this.Vi(),
            horizontal: this.isHorizontal(),
            minRotation: i.minRotation || 0,
            includeBounds: !1 !== i.includeBounds
          }, this.pi || this);
          return "ticks" === t.bounds && (0, s.aG)(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n
        }
        configure() {
          const t = this.ticks;
          let i = this.min,
            e = this.max;
          if (super.configure(), this.options.offset && t.length) {
            const s = (e - i) / Math.max(t.length - 1, 1) / 2;
            i -= s, e += s
          }
          this.bn = i, this.xn = e, this.gn = e - i
        }
        getLabelForValue(t) {
          return (0, s.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
      }
      class me extends ge {
        static id = "linear";
        static defaults = {
          ticks: {
            callback: s.aL.formatters.numeric
          }
        };
        determineDataLimits() {
          const {
            min: t,
            max: i
          } = this.getMinMax(!0);
          this.min = (0, s.g)(t) ? t : 0, this.max = (0, s.g)(i) ? i : 1, this.handleTickRangeOptions()
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            i = t ? this.width : this.height,
            e = (0, s.t)(this.options.ticks.minRotation),
            n = (t ? Math.sin(e) : Math.cos(e)) || .001,
            o = this.Ii(0);
          return Math.ceil(i / Math.min(40, o.lineHeight / n))
        }
        getPixelForValue(t) {
          return null === t ? NaN : this.getPixelForDecimal((t - this.bn) / this.gn)
        }
        getValueForPixel(t) {
          return this.bn + this.getDecimalForPixel(t) * this.gn
        }
      }
      const xe = t => Math.floor((0, s.aM)(t)),
        ve = (t, i) => Math.pow(10, xe(t) + i);

      function ye(t) {
        return t / Math.pow(10, xe(t)) === 1
      }

      function Me(t, i, e) {
        const s = Math.pow(10, e),
          n = Math.floor(t / s);
        return Math.ceil(i / s) - n
      }
      class we extends St {
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
          super(t), this.start = void 0, this.end = void 0, this.bn = void 0, this.gn = 0
        }
        parse(t, i) {
          const e = ge.prototype.parse.call(this, t, i);
          if (0 !== e) return (0, s.g)(e) && e > 0 ? e : null;
          this.vn = !0
        }
        determineDataLimits() {
          const {
            min: t,
            max: i
          } = this.getMinMax(!0);
          this.min = (0, s.g)(t) ? Math.max(0, t) : null, this.max = (0, s.g)(i) ? Math.max(0, i) : null, this.options.beginAtZero && (this.vn = !0), this.vn && this.min !== this.ki && !(0, s.g)(this.wi) && (this.min = t === ve(this.min, 0) ? ve(this.min, -1) : ve(this.min, 0)), this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
          const {
            minDefined: t,
            maxDefined: i
          } = this.getUserBounds();
          let e = this.min,
            s = this.max;
          const n = i => e = t ? e : i,
            o = t => s = i ? s : t;
          e === s && (e > 0 ? (n(ve(e, -1)), o(ve(s, 1))) : (n(1), o(10))), 0 >= e && n(ve(s, -1)), 0 >= s && o(ve(e, 1)), this.min = e, this.max = s
        }
        buildTicks() {
          const t = this.options,
            i = function(t, {
              min: i,
              max: e
            }) {
              i = (0, s.O)(t.min, i);
              const n = [],
                o = xe(i);
              let r = function(t, i) {
                  let e = xe(i - t);
                  for (; Me(t, i, e) > 10;) e++;
                  for (; 10 > Me(t, i, e);) e--;
                  return Math.min(e, xe(t))
                }(i, e),
                h = 0 > r ? Math.pow(10, Math.abs(r)) : 1;
              const a = Math.pow(10, r),
                c = o > r ? Math.pow(10, o) : 0,
                l = Math.round((i - c) * h) / h,
                u = Math.floor((i - c) / a / 10) * a * 10;
              let f = Math.floor((l - u) / Math.pow(10, r)),
                d = (0, s.O)(t.min, Math.round((c + u + f * Math.pow(10, r)) * h) / h);
              for (; e > d;) n.push({
                value: d,
                major: ye(d),
                significand: f
              }), 10 > f ? f++ : f = 15 > f ? 15 : 20, f >= 20 && (r++, f = 2, h = 0 > r ? h : 1), d = Math.round((c + u + f * Math.pow(10, r)) * h) / h;
              const p = (0, s.O)(t.max, d);
              return n.push({
                value: p,
                major: ye(p),
                significand: f
              }), n
            }({
              min: this.wi,
              max: this.Mi
            }, this);
          return "ticks" === t.bounds && (0, s.aG)(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i
        }
        getLabelForValue(t) {
          return void 0 === t ? "0" : (0, s.o)(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
          const t = this.min;
          super.configure(), this.bn = (0, s.aM)(t), this.gn = (0, s.aM)(this.max) - (0, s.aM)(t)
        }
        getPixelForValue(t) {
          return (void 0 === t || 0 === t) && (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : ((0, s.aM)(t) - this.bn) / this.gn)
        }
        getValueForPixel(t) {
          const i = this.getDecimalForPixel(t);
          return Math.pow(10, this.bn + i * this.gn)
        }
      }

      function ke(t) {
        const i = t.ticks;
        if (i.display && t.display) {
          const t = (0, s.E)(i.backdropPadding);
          return (0, s.v)(i.font && i.font.size, s.d.font.size) + t.height
        }
        return 0
      }

      function Oe(t, i, e) {
        return e = (0, s.b)(e) ? e : [e], {
          w: (0, s.aN)(t, i.string, e),
          h: e.length * i.lineHeight
        }
      }

      function Se(t, i, e, s, n) {
        return t === s || t === n ? {
          start: i - e / 2,
          end: i + e / 2
        } : s > t || t > n ? {
          start: i - e,
          end: i
        } : {
          start: i,
          end: i + e
        }
      }

      function De(t, i, e, s, n) {
        const o = Math.abs(Math.sin(e)),
          r = Math.abs(Math.cos(e));
        let h = 0,
          a = 0;
        s.start < i.l ? (h = (i.l - s.start) / o, t.l = Math.min(t.l, i.l - h)) : s.end > i.r && (h = (s.end - i.r) / o, t.r = Math.max(t.r, i.r + h)), n.start < i.t ? (a = (i.t - n.start) / r, t.t = Math.min(t.t, i.t - a)) : n.end > i.b && (a = (n.end - i.b) / r, t.b = Math.max(t.b, i.b + a))
      }

      function Ae(t, i, e) {
        const n = t.drawingArea,
          {
            extra: o,
            additionalAngle: r,
            padding: h,
            size: a
          } = e,
          c = t.getPointPosition(i, n + o + h, r),
          l = Math.round((0, s.U)((0, s.ay)(c.angle + s.H))),
          u = function(t, i, e) {
            return 90 === e || 270 === e ? t -= i / 2 : (e > 270 || 90 > e) && (t -= i), t
          }(c.y, a.h, l),
          f = function(t) {
            return 0 === t || 180 === t ? "center" : 180 > t ? "left" : "right"
          }(l),
          d = function(t, i, e) {
            return "right" === e ? t -= i : "center" === e && (t -= i / 2), t
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

      function Ce(t, i) {
        if (!i) return !0;
        const {
          left: e,
          top: n,
          right: o,
          bottom: r
        } = t;
        return !((0, s.C)({
          x: e,
          y: n
        }, i) || (0, s.C)({
          x: e,
          y: r
        }, i) || (0, s.C)({
          x: o,
          y: n
        }, i) || (0, s.C)({
          x: o,
          y: r
        }, i))
      }

      function Le(t, i, e) {
        const {
          left: n,
          top: o,
          right: r,
          bottom: h
        } = e, {
          backdropColor: a
        } = i;
        if (!(0, s.k)(a)) {
          const e = (0, s.aw)(i.borderRadius),
            c = (0, s.E)(i.backdropPadding);
          t.fillStyle = a;
          const l = n - c.left,
            u = o - c.top,
            f = r - n + c.width,
            d = h - o + c.height;
          Object.values(e).some(t => 0 !== t) ? (t.beginPath(), (0, s.au)(t, {
            x: l,
            y: u,
            w: f,
            h: d,
            radius: e
          }), t.fill()) : t.fillRect(l, u, f, d)
        }
      }

      function Re(t, i, e, n) {
        const {
          ctx: o
        } = t;
        if (e) o.arc(t.xCenter, t.yCenter, i, 0, s.T);
        else {
          let e = t.getPointPosition(0, i);
          o.moveTo(e.x, e.y);
          for (let s = 1; n > s; s++) e = t.getPointPosition(s, i), o.lineTo(e.x, e.y)
        }
      }
      class je extends ge {
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
            ut: "grid"
          }
        };
        constructor(t) {
          super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this.yn = [], this.Mn = []
        }
        setDimensions() {
          const t = this.Js = (0, s.E)(ke(this.options) / 2),
            i = this.width = this.maxWidth - t.width,
            e = this.height = this.maxHeight - t.height;
          this.xCenter = Math.floor(this.left + i / 2 + t.left), this.yCenter = Math.floor(this.top + e / 2 + t.top), this.drawingArea = Math.floor(Math.min(i, e) / 2)
        }
        determineDataLimits() {
          const {
            min: t,
            max: i
          } = this.getMinMax(!1);
          this.min = (0, s.g)(t) && !isNaN(t) ? t : 0, this.max = (0, s.g)(i) && !isNaN(i) ? i : 0, this.handleTickRangeOptions()
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / ke(this.options))
        }
        generateTickLabels(t) {
          ge.prototype.generateTickLabels.call(this, t), this.yn = this.getLabels().map((t, i) => {
            const e = (0, s.Q)(this.options.pointLabels.callback, [t, i], this);
            return e || 0 === e ? e : ""
          }).filter((t, i) => this.chart.getDataVisibility(i))
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display ? function(t) {
            const i = {
                l: t.left + t.Js.left,
                r: t.right - t.Js.right,
                t: t.top + t.Js.top,
                b: t.bottom - t.Js.bottom
              },
              e = Object.assign({}, i),
              n = [],
              o = [],
              r = t.yn.length,
              h = t.options.pointLabels,
              a = h.centerPointLabels ? s.P / r : 0;
            for (let c = 0; r > c; c++) {
              const r = h.setContext(t.getPointLabelContext(c));
              o[c] = r.padding;
              const l = t.getPointPosition(c, t.drawingArea + o[c], a),
                u = (0, s.a0)(r.font),
                f = Oe(t.ctx, u, t.yn[c]);
              n[c] = f;
              const d = (0, s.ay)(t.getIndexAngle(c) + a),
                p = Math.round((0, s.U)(d));
              De(e, i, d, Se(p, l.x, f.w, 0, 180), Se(p, l.y, f.h, 90, 270))
            }
            t.setCenterPoint(i.l - e.l, e.r - i.r, i.t - e.t, e.b - i.b), t.Mn = function(t, i, e) {
              const n = [],
                o = t.yn.length,
                r = t.options,
                {
                  centerPointLabels: h,
                  display: a
                } = r.pointLabels,
                c = {
                  extra: ke(r) / 2,
                  additionalAngle: h ? s.P / o : 0
                };
              let l;
              for (let s = 0; o > s; s++) {
                c.padding = e[s], c.size = i[s];
                const o = Ae(t, s, c);
                n.push(o), "auto" === a && (o.visible = Ce(o, l), o.visible && (l = o))
              }
              return n
            }(t, n, o)
          }(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, i, e, s) {
          this.xCenter += Math.floor((t - i) / 2), this.yCenter += Math.floor((e - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, i, e, s))
        }
        getIndexAngle(t) {
          const i = s.T / (this.yn.length || 1),
            e = this.options.startAngle || 0;
          return (0, s.ay)(t * i + (0, s.t)(e))
        }
        getDistanceFromCenterForValue(t) {
          if ((0, s.k)(t)) return NaN;
          const i = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * i : (t - this.min) * i
        }
        getValueForDistanceFromCenter(t) {
          if ((0, s.k)(t)) return NaN;
          const i = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - i : this.min + i
        }
        getPointLabelContext(t) {
          const i = this.yn || [];
          if (t >= 0 && t < i.length) {
            const e = i[t];
            return function(t, i, e) {
              return (0, s.j)(t, {
                label: e,
                index: i,
                type: "pointLabel"
              })
            }(this.getContext(), t, e)
          }
        }
        getPointPosition(t, i, e = 0) {
          const n = this.getIndexAngle(t) - s.H + e;
          return {
            x: Math.cos(n) * i + this.xCenter,
            y: Math.sin(n) * i + this.yCenter,
            angle: n
          }
        }
        getPointPositionForValue(t, i) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(i))
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
          const {
            left: i,
            top: e,
            right: s,
            bottom: n
          } = this.Mn[t];
          return {
            left: i,
            top: e,
            right: s,
            bottom: n
          }
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: {
              circular: i
            }
          } = this.options;
          if (t) {
            const e = this.ctx;
            e.save(), e.beginPath(), Re(this, this.getDistanceFromCenterForValue(this.xn), i, this.yn.length), e.closePath(), e.fillStyle = t, e.fill(), e.restore()
          }
        }
        drawGrid() {
          const t = this.ctx,
            i = this.options,
            {
              angleLines: e,
              grid: n,
              border: o
            } = i,
            r = this.yn.length;
          let h, a, c;
          if (i.pointLabels.display && function(t, i) {
              const {
                ctx: e,
                options: {
                  pointLabels: n
                }
              } = t;
              for (let o = i - 1; o >= 0; o--) {
                const i = t.Mn[o];
                if (!i.visible) continue;
                const r = n.setContext(t.getPointLabelContext(o));
                Le(e, r, i);
                const h = (0, s.a0)(r.font),
                  {
                    x: a,
                    y: c,
                    textAlign: l
                  } = i;
                (0, s.Z)(e, t.yn[o], a, c + h.lineHeight / 2, h, {
                  color: r.color,
                  textAlign: l,
                  textBaseline: "middle"
                })
              }
            }(this, r), n.display && this.ticks.forEach((t, i) => {
              if (0 !== i || 0 === i && 0 > this.min) {
                a = this.getDistanceFromCenterForValue(t.value);
                const e = this.getContext(i),
                  s = n.setContext(e),
                  h = o.setContext(e);
                ! function(t, i, e, s, n) {
                  const o = t.ctx,
                    r = i.circular,
                    {
                      color: h,
                      lineWidth: a
                    } = i;
                  !r && !s || !h || !a || 0 > e || (o.save(), o.strokeStyle = h, o.lineWidth = a, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Re(t, e, r, s), o.closePath(), o.stroke(), o.restore())
                }(this, s, a, r, h)
              }
            }), e.display) {
            for (t.save(), h = r - 1; h >= 0; h--) {
              const s = e.setContext(this.getPointLabelContext(h)),
                {
                  color: n,
                  lineWidth: o
                } = s;
              !o || !n || (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, a = this.getDistanceFromCenterForValue(i.ticks.reverse ? this.min : this.max), c = this.getPointPosition(h, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
            }
            t.restore()
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            i = this.options,
            e = i.ticks;
          if (!e.display) return;
          const n = this.getIndexAngle(0);
          let o, r;
          t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((n, h) => {
            if (0 === h && this.min >= 0 && !i.reverse) return;
            const a = e.setContext(this.getContext(h)),
              c = (0, s.a0)(a.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[h].value), a.showLabelBackdrop) {
              t.font = c.string, r = t.measureText(n.label).width, t.fillStyle = a.backdropColor;
              const i = (0, s.E)(a.backdropPadding);
              t.fillRect(-r / 2 - i.left, -o - c.size / 2 - i.top, r + i.width, c.size + i.height)
            }(0, s.Z)(t, n.label, 0, -o, c, {
              color: a.color,
              strokeColor: a.textStrokeColor,
              strokeWidth: a.textStrokeWidth
            })
          }), t.restore()
        }
        drawTitle() {}
      }
      const Ee = {
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
        Ne = Object.keys(Ee);

      function Pe(t, i) {
        return t - i
      }

      function Te(t, i) {
        if ((0, s.k)(i)) return null;
        const e = t.wn,
          {
            parser: n,
            round: o,
            isoWeekday: r
          } = t.Fn;
        let h = i;
        return "function" == typeof n && (h = n(h)), (0, s.g)(h) || (h = "string" == typeof n ? e.parse(h, n) : e.parse(h)), null === h ? null : (o && (h = "week" !== o || !(0, s.x)(r) && !0 !== r ? e.startOf(h, o) : e.startOf(h, "isoWeek", r)), +h)
      }

      function Fe(t, i, e, s) {
        const n = Ne.length;
        for (let o = Ne.indexOf(t); n - 1 > o; ++o) {
          const t = Ee[Ne[o]],
            n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((e - i) / (n * t.size)) <= s) return Ne[o]
        }
        return Ne[n - 1]
      }

      function Ie(t, i, e) {
        if (e) {
          if (e.length) {
            const {
              lo: n,
              hi: o
            } = (0, s.aP)(e, i);
            t[e[n] < i ? e[o] : e[n]] = !0
          }
        } else t[i] = !0
      }

      function ze(t, i, e) {
        const s = [],
          n = {},
          o = i.length;
        let r, h;
        for (r = 0; o > r; ++r) h = i[r], n[h] = r, s.push({
          value: h,
          major: !1
        });
        return 0 !== o && e ? function(t, i, e, s) {
          const n = t.wn,
            o = +n.startOf(i[0].value, s),
            r = i[i.length - 1].value;
          let h, a;
          for (h = o; r >= h; h = +n.add(h, 1, s)) a = e[h], a >= 0 && (i[a].major = !0);
          return i
        }(t, s, n, e) : s
      }
      class We extends St {
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
          super(t), this.Fe = {
            data: [],
            labels: [],
            all: []
          }, this.kn = "day", this.On = void 0, this.Sn = {}, this.Dn = !1, this.Fn = void 0
        }
        init(t, i = {}) {
          const e = t.time || (t.time = {}),
            n = this.wn = new P(t.adapters.date);
          n.init(i), (0, s.ab)(e.displayFormats, n.formats()), this.Fn = {
            parser: e.parser,
            round: e.round,
            isoWeekday: e.isoWeekday
          }, super.init(t), this.Dn = i.normalized
        }
        parse(t, i) {
          return void 0 === t ? null : Te(this, t)
        }
        beforeLayout() {
          super.beforeLayout(), this.Fe = {
            data: [],
            labels: [],
            all: []
          }
        }
        determineDataLimits() {
          const t = this.options,
            i = this.wn,
            e = t.time.unit || "day";
          let {
            min: n,
            max: o,
            minDefined: r,
            maxDefined: h
          } = this.getUserBounds();

          function a(t) {
            !r && !isNaN(t.min) && (n = Math.min(n, t.min)), !h && !isNaN(t.max) && (o = Math.max(o, t.max))
          }(!r || !h) && (a(this.An()), ("ticks" !== t.bounds || "labels" !== t.ticks.source) && a(this.getMinMax(!1))), n = (0, s.g)(n) && !isNaN(n) ? n : +i.startOf(Date.now(), e), o = (0, s.g)(o) && !isNaN(o) ? o : +i.endOf(Date.now(), e) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
        }
        An() {
          const t = this.getLabelTimestamps();
          let i = 1 / 0,
            e = -1 / 0;
          return t.length && (i = t[0], e = t[t.length - 1]), {
            min: i,
            max: e
          }
        }
        buildTicks() {
          const t = this.options,
            i = t.time,
            e = t.ticks,
            n = "labels" === e.source ? this.getLabelTimestamps() : this.Cn();
          "ticks" === t.bounds && n.length && (this.min = this.wi || n[0], this.max = this.Mi || n[n.length - 1]);
          const o = this.min,
            r = this.max,
            h = (0, s.aO)(n, o, r);
          return this.kn = i.unit || (e.autoSkip ? Fe(i.minUnit, this.min, this.max, this.Ln(o)) : function(t, i, e, s, n) {
            for (let o = Ne.length - 1; o >= Ne.indexOf(e); o--) {
              const e = Ne[o];
              if (Ee[e].common && t.wn.diff(n, s, e) >= i - 1) return e
            }
            return Ne[e ? Ne.indexOf(e) : 0]
          }(this, h.length, i.minUnit, this.min, this.max)), this.On = e.major.enabled && "year" !== this.kn ? function(t) {
            for (let i = Ne.indexOf(t) + 1, e = Ne.length; e > i; ++i)
              if (Ee[Ne[i]].common) return Ne[i]
          }(this.kn) : void 0, this.initOffsets(n), t.reverse && h.reverse(), ze(this, h, this.On)
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
        }
        initOffsets(t = []) {
          let i, e, n = 0,
            o = 0;
          this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), n = 1 === t.length ? 1 - i : (this.getDecimalForValue(t[1]) - i) / 2, e = this.getDecimalForValue(t[t.length - 1]), o = 1 === t.length ? e : (e - this.getDecimalForValue(t[t.length - 2])) / 2);
          const r = 3 > t.length ? .5 : .25;
          n = (0, s.S)(n, 0, r), o = (0, s.S)(o, 0, r), this.Sn = {
            start: n,
            end: o,
            factor: 1 / (n + 1 + o)
          }
        }
        Cn() {
          const t = this.wn,
            i = this.min,
            e = this.max,
            n = this.options,
            o = n.time,
            r = o.unit || Fe(o.minUnit, i, e, this.Ln(i)),
            h = (0, s.v)(n.ticks.stepSize, 1),
            a = "week" === r && o.isoWeekday,
            c = (0, s.x)(a) || !0 === a,
            l = {};
          let u, f, d = i;
          if (c && (d = +t.startOf(d, "isoWeek", a)), d = +t.startOf(d, c ? "day" : r), t.diff(e, i, r) > 1e5 * h) throw Error(i + " and " + e + " are too far apart with stepSize of " + h + " " + r);
          const p = "data" === n.ticks.source && this.getDataTimestamps();
          for (u = d, f = 0; e > u; u = +t.add(u, h, r), f++) Ie(l, u, p);
          return (u === e || "ticks" === n.bounds || 1 === f) && Ie(l, u, p), Object.keys(l).sort(Pe).map(t => +t)
        }
        getLabelForValue(t) {
          const i = this.wn,
            e = this.options.time;
          return e.tooltipFormat ? i.format(t, e.tooltipFormat) : i.format(t, e.displayFormats.datetime)
        }
        format(t, i) {
          const e = this.options.time.displayFormats,
            s = this.kn,
            n = i || e[s];
          return this.wn.format(t, n)
        }
        Rn(t, i, e, n) {
          const o = this.options,
            r = o.ticks.callback;
          if (r) return (0, s.Q)(r, [t, i, e], this);
          const h = o.time.displayFormats,
            a = this.kn,
            c = this.On,
            l = a && h[a],
            u = c && h[c],
            f = e[i],
            d = c && u && f && f.major;
          return this.wn.format(t, n || (d ? u : l))
        }
        generateTickLabels(t) {
          let i, e, s;
          for (i = 0, e = t.length; e > i; ++i) s = t[i], s.label = this.Rn(s.value, i, t)
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
          const i = this.Sn,
            e = this.getDecimalForValue(t);
          return this.getPixelForDecimal((i.start + e) * i.factor)
        }
        getValueForPixel(t) {
          const i = this.Sn,
            e = this.getDecimalForPixel(t) / i.factor - i.end;
          return this.min + e * (this.max - this.min)
        }
        En(t) {
          const i = this.options.ticks,
            e = this.ctx.measureText(t).width,
            n = (0, s.t)(this.isHorizontal() ? i.maxRotation : i.minRotation),
            o = Math.cos(n),
            r = Math.sin(n),
            h = this.Ii(0).size;
          return {
            w: e * o + h * r,
            h: e * r + h * o
          }
        }
        Ln(t) {
          const i = this.options.time,
            e = i.displayFormats,
            s = e[i.unit] || e.millisecond,
            n = this.Rn(t, 0, ze(this, [t], this.On), s),
            o = this.En(n),
            r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
          return r > 0 ? r : 1
        }
        getDataTimestamps() {
          let t, i, e = this.Fe.data || [];
          if (e.length) return e;
          const s = this.getMatchingVisibleMetas();
          if (this.Dn && s.length) return this.Fe.data = s[0].controller.getAllParsedValues(this);
          for (t = 0, i = s.length; i > t; ++t) e = e.concat(s[t].controller.getAllParsedValues(this));
          return this.Fe.data = this.normalize(e)
        }
        getLabelTimestamps() {
          const t = this.Fe.labels || [];
          let i, e;
          if (t.length) return t;
          const s = this.getLabels();
          for (i = 0, e = s.length; e > i; ++i) t.push(Te(this, s[i]));
          return this.Fe.labels = this.Dn ? t : this.normalize(t)
        }
        normalize(t) {
          return (0, s.et)(t.sort(Pe))
        }
      }

      function Be(t, i, e) {
        let n, o, r, h, a = 0,
          c = t.length - 1;
        e ? (i >= t[a].pos && i <= t[c].pos && ({
          lo: a,
          hi: c
        } = (0, s.B)(t, "pos", i)), ({
          pos: n,
          time: r
        } = t[a]), ({
          pos: o,
          time: h
        } = t[c])) : (i >= t[a].time && i <= t[c].time && ({
          lo: a,
          hi: c
        } = (0, s.B)(t, "time", i)), ({
          time: n,
          pos: r
        } = t[a]), ({
          time: o,
          pos: h
        } = t[c]));
        const l = o - n;
        return l ? r + (h - r) * (i - n) / l : r
      }
      Object.freeze({
        __proto__: null,
        CategoryScale: pe,
        LinearScale: me,
        LogarithmicScale: we,
        RadialLinearScale: je,
        TimeScale: We,
        TimeSeriesScale: class extends We {
          static id = "timeseries";
          static defaults = We.defaults;
          constructor(t) {
            super(t), this.jn = [], this.Pn = void 0, this.Tn = void 0
          }
          initOffsets() {
            const t = this.Nn(),
              i = this.jn = this.buildLookupTable(t);
            this.Pn = Be(i, this.min), this.Tn = Be(i, this.max) - this.Pn, super.initOffsets(t)
          }
          buildLookupTable(t) {
            const {
              min: i,
              max: e
            } = this, s = [], n = [];
            let o, r, h, a, c;
            for (o = 0, r = t.length; r > o; ++o) a = t[o], a >= i && e >= a && s.push(a);
            if (2 > s.length) return [{
              time: i,
              pos: 0
            }, {
              time: e,
              pos: 1
            }];
            for (o = 0, r = s.length; r > o; ++o) c = s[o + 1], h = s[o - 1], a = s[o], Math.round((c + h) / 2) !== a && n.push({
              time: a,
              pos: o / (r - 1)
            });
            return n
          }
          Cn() {
            const t = this.min,
              i = this.max;
            let e = super.getDataTimestamps();
            return (!e.includes(t) || !e.length) && e.splice(0, 0, t), (!e.includes(i) || 1 === e.length) && e.push(i), e.sort((t, i) => t - i)
          }
          Nn() {
            let t = this.Fe.all || [];
            if (t.length) return t;
            const i = this.getDataTimestamps(),
              e = this.getLabelTimestamps();
            return t = i.length && e.length ? this.normalize(i.concat(e)) : i.length ? i : e, t = this.Fe.all = t, t
          }
          getDecimalForValue(t) {
            return (Be(this.jn, t) - this.Pn) / this.Tn
          }
          getValueForPixel(t) {
            const i = this.Sn,
              e = this.getDecimalForPixel(t) / i.factor - i.end;
            return Be(this.jn, e * this.Tn + this.Pn, !0)
          }
        }
      })
    }
  }
]);
