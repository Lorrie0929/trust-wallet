"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1771], {
    72267: (t, e, r) => {
      r.d(e, {
        XU: () => m
      });
      var i, n, s, o = r(31635),
        a = r(96540),
        u = r(6442);
      (n = i || (i = {})).formatDate = "FormattedDate", n.formatTime = "FormattedTime", n.formatNumber = "FormattedNumber", n.formatList = "FormattedList", n.formatDisplayName = "FormattedDisplayName",
        function(t) {
          t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts"
        }(s || (s = {}));
      var l = function(t) {
        var e = (0, u.A)(),
          r = t.value,
          i = t.children,
          n = (0, o.Tt)(t, ["value", "children"]);
        return i(e.formatNumberToParts(r, n))
      };

      function f(t) {
        var e = function(e) {
          var r = (0, u.A)(),
            i = e.value,
            n = e.children,
            s = (0, o.Tt)(e, ["value", "children"]),
            a = "string" == typeof i ? new Date(i || 0) : i;
          return n("formatDate" === t ? r.formatDateToParts(a, s) : r.formatTimeToParts(a, s))
        };
        return e.displayName = s[t], e
      }

      function c(t) {
        var e = function(e) {
          var r = (0, u.A)(),
            i = e.value,
            n = e.children,
            s = (0, o.Tt)(e, ["value", "children"]),
            l = r[t](i, s);
          if ("function" == typeof n) return n(l);
          var f = r.textComponent || a.Fragment;
          return a.createElement(f, null, l)
        };
        return e.displayName = i[t], e
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts";
      var m = c("formatDate");
      c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), f("formatDate"), f("formatTime")
    },
    83729: (t, e, r) => {
      r.d(e, {
        Js: () => y
      });
      var i = r(67142),
        n = r(20673),
        s = r(56667),
        o = r(37457);
      const a = new n.Vy(s.r),
        u = {},
        l = o.gH.from(0),
        f = o.gH.from(-1);

      function c(t, e, r, i) {
        const s = {
          fault: e,
          operation: r
        };
        return void 0 !== i && (s.value = i), a.throwError(t, n.Vy.errors.NUMERIC_FAULT, s)
      }
      let m = "0";
      for (; 256 > m.length;) m += m;

      function d(t) {
        if ("number" != typeof t) try {
          t = o.gH.from(t).toNumber()
        } catch {}
        return "number" != typeof t || 0 > t || t > 256 || t % 1 ? a.throwArgumentError("invalid decimal size", "decimals", t) : "1" + m.substring(0, t)
      }

      function h(t, e) {
        null == e && (e = 0);
        const r = d(e),
          i = (t = o.gH.from(t)).lt(l);
        i && (t = t.mul(f));
        let n = t.mod(r).toString();
        for (; n.length < r.length - 1;) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const s = t.div(r).toString();
        return t = 1 === r.length ? s : s + "." + n, i && (t = "-" + t), t
      }

      function v(t, e) {
        null == e && (e = 0);
        const r = d(e);
        ("string" != typeof t || !t.match(/^-?[0-9.]+$/)) && a.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        i && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
        const n = t.split(".");
        n.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
        let s = n[0],
          u = n[1];
        for (s || (s = "0"), u || (u = "0");
          "0" === u[u.length - 1];) u = u.substring(0, u.length - 1);
        for (u.length > r.length - 1 && c("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0"); u.length < r.length - 1;) u += "0";
        const l = o.gH.from(s),
          m = o.gH.from(u);
        let h = l.mul(r).add(m);
        return i && (h = h.mul(f)), h
      }
      class F {
        constructor(t, e, r, i) {
          t !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", n.Vy.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.signed = e, this.width = r, this.decimals = i, this.name = (e ? "" : "u") + "fixed" + r + "x" + i, this.t = d(i), Object.freeze(this)
        }
        static from(t) {
          if (t instanceof F) return t;
          "number" == typeof t && (t = "fixed128x" + t);
          let e = !0,
            r = 128,
            i = 18;
          if ("string" == typeof t) {
            if ("fixed" !== t)
              if ("ufixed" === t) e = !1;
              else {
                const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                n || a.throwArgumentError("invalid fixed format", "format", t), e = "u" !== n[1], r = parseInt(n[2]), i = parseInt(n[3])
              }
          } else if (t) {
            const n = (e, r, i) => null == t[e] ? i : (typeof t[e] !== r && a.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
            e = n("signed", "boolean", e), r = n("width", "number", r), i = n("decimals", "number", i)
          }
          return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), i > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i), new F(u, e, r, i)
        }
      }
      class x {
        constructor(t, e, r, i) {
          t !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", n.Vy.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.format = i, this.i = e, this.o = r, this.u = !0, Object.freeze(this)
        }
        l(t) {
          this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
        }
        addUnsafe(t) {
          this.l(t);
          const e = v(this.o, this.format.decimals),
            r = v(t.o, t.format.decimals);
          return x.fromValue(e.add(r), this.format.decimals, this.format)
        }
        subUnsafe(t) {
          this.l(t);
          const e = v(this.o, this.format.decimals),
            r = v(t.o, t.format.decimals);
          return x.fromValue(e.sub(r), this.format.decimals, this.format)
        }
        mulUnsafe(t) {
          this.l(t);
          const e = v(this.o, this.format.decimals),
            r = v(t.o, t.format.decimals);
          return x.fromValue(e.mul(r).div(this.format.t), this.format.decimals, this.format)
        }
        divUnsafe(t) {
          this.l(t);
          const e = v(this.o, this.format.decimals),
            r = v(t.o, t.format.decimals);
          return x.fromValue(e.mul(this.format.t).div(r), this.format.decimals, this.format)
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = x.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return this.isNegative() && r && (e = e.subUnsafe(b.toFormat(e.format))), e
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = x.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return !this.isNegative() && r && (e = e.addUnsafe(b.toFormat(e.format))), e
        }
        round(t) {
          null == t && (t = 0);
          const e = this.toString().split(".");
          if (1 === e.length && e.push("0"), (0 > t || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
          const r = x.from("1" + m.substring(0, t), this.format),
            i = p.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)
        }
        isZero() {
          return "0.0" === this.o || "0" === this.o
        }
        isNegative() {
          return "-" === this.o[0]
        }
        toString() {
          return this.o
        }
        toHexString(t) {
          if (null == t) return this.i;
          t % 8 && a.throwArgumentError("invalid byte width", "width", t);
          const e = o.gH.from(this.i).fromTwos(this.format.width).toTwos(t).toHexString();
          return (0, i.bj)(e, t / 8)
        }
        toUnsafeFloat() {
          return parseFloat(this.toString())
        }
        toFormat(t) {
          return x.fromString(this.o, t)
        }
        static fromValue(t, e, r) {
          return null == r && null != e && !(0, o.YR)(e) && (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), x.fromString(h(t, e), F.from(r))
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          const r = F.from(e),
            n = v(t, r.decimals);
          !r.signed && n.lt(l) && c("unsigned value cannot be negative", "overflow", "value", t);
          let s = null;
          r.signed ? s = n.toTwos(r.width).toHexString() : (s = n.toHexString(), s = (0, i.bj)(s, r.width / 8));
          const o = h(n, r.decimals);
          return new x(u, s, o, r)
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          const r = F.from(e);
          if ((0, i.k9)(t).length > r.width / 8) throw Error("overflow");
          let n = o.gH.from(t);
          r.signed && (n = n.fromTwos(r.width));
          const s = n.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = h(n, r.decimals);
          return new x(u, s, a, r)
        }
        static from(t, e) {
          if ("string" == typeof t) return x.fromString(t, e);
          if ((0, i.aY)(t)) return x.fromBytes(t, e);
          try {
            return x.fromValue(t, 0, e)
          } catch (t) {
            if (t.code !== n.Vy.errors.INVALID_ARGUMENT) throw t
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", t)
        }
        static isFixedNumber(t) {
          return !(!t || !t.u)
        }
      }
      const b = x.from(1),
        p = x.from("0.5"),
        w = (new n.Vy("units/5.8.0"), ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"]);

      function y(t, e) {
        if ("string" == typeof e) {
          const t = w.indexOf(e); - 1 !== t && (e = 3 * t)
        }
        return h(t, e ?? 18)
      }
    }
  }
]);
