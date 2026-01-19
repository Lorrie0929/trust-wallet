try {
  let t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t.t = t.t || {}, t.t[e] = "37db9d59-998f-4259-958f-bedcc973cc8d", t.i = "sentry-dbid-37db9d59-998f-4259-958f-bedcc973cc8d")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1771], {
    72267: (t, e, i) => {
      i.d(e, {
        XU: () => d
      });
      var r, n, o, s = i(31635),
        a = i(96540),
        u = i(6442);
      (n = r || (r = {})).formatDate = "FormattedDate", n.formatTime = "FormattedTime", n.formatNumber = "FormattedNumber", n.formatList = "FormattedList", n.formatDisplayName = "FormattedDisplayName",
        function(t) {
          t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts"
        }(o || (o = {}));
      var l = function(t) {
        var e = (0, u.A)(),
          i = t.value,
          r = t.children,
          n = (0, s.Tt)(t, ["value", "children"]);
        return r(e.formatNumberToParts(i, n))
      };

      function f(t) {
        var e = function(e) {
          var i = (0, u.A)(),
            r = e.value,
            n = e.children,
            o = (0, s.Tt)(e, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return n("formatDate" === t ? i.formatDateToParts(a, o) : i.formatTimeToParts(a, o))
        };
        return e.displayName = o[t], e
      }

      function c(t) {
        var e = function(e) {
          var i = (0, u.A)(),
            r = e.value,
            n = e.children,
            o = (0, s.Tt)(e, ["value", "children"]),
            l = i[t](r, o);
          if ("function" == typeof n) return n(l);
          var f = i.textComponent || a.Fragment;
          return a.createElement(f, null, l)
        };
        return e.displayName = r[t], e
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts";
      var d = c("formatDate");
      c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), f("formatDate"), f("formatTime")
    },
    83729: (t, e, i) => {
      i.d(e, {
        Js: () => x
      });
      var r = i(67142),
        n = i(20673),
        o = i(56667),
        s = i(37457);
      const a = new n.Vy(o.r),
        u = {},
        l = s.gH.from(0),
        f = s.gH.from(-1);

      function c(t, e, i, r) {
        const o = {
          fault: e,
          operation: i
        };
        return void 0 !== r && (o.value = r), a.throwError(t, n.Vy.errors.NUMERIC_FAULT, o)
      }
      let d = "0";
      for (; 256 > d.length;) d += d;

      function m(t) {
        if ("number" != typeof t) try {
          t = s.gH.from(t).toNumber()
        } catch {}
        return "number" != typeof t || 0 > t || t > 256 || t % 1 ? a.throwArgumentError("invalid decimal size", "decimals", t) : "1" + d.substring(0, t)
      }

      function h(t, e) {
        null == e && (e = 0);
        const i = m(e),
          r = (t = s.gH.from(t)).lt(l);
        r && (t = t.mul(f));
        let n = t.mod(i).toString();
        for (; n.length < i.length - 1;) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(i).toString();
        return t = 1 === i.length ? o : o + "." + n, r && (t = "-" + t), t
      }

      function b(t, e) {
        null == e && (e = 0);
        const i = m(e);
        ("string" != typeof t || !t.match(/^-?[0-9.]+$/)) && a.throwArgumentError("invalid decimal value", "value", t);
        const r = "-" === t.substring(0, 1);
        r && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
        const n = t.split(".");
        n.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          u = n[1];
        for (o || (o = "0"), u || (u = "0");
          "0" === u[u.length - 1];) u = u.substring(0, u.length - 1);
        for (u.length > i.length - 1 && c("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0"); u.length < i.length - 1;) u += "0";
        const l = s.gH.from(o),
          d = s.gH.from(u);
        let h = l.mul(i).add(d);
        return r && (h = h.mul(f)), h
      }
      class v {
        constructor(t, e, i, r) {
          t !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", n.Vy.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.signed = e, this.width = i, this.decimals = r, this.name = (e ? "" : "u") + "fixed" + i + "x" + r, this.o = m(r), Object.freeze(this)
        }
        static from(t) {
          if (t instanceof v) return t;
          "number" == typeof t && (t = "fixed128x" + t);
          let e = !0,
            i = 128,
            r = 18;
          if ("string" == typeof t) {
            if ("fixed" !== t)
              if ("ufixed" === t) e = !1;
              else {
                const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                n || a.throwArgumentError("invalid fixed format", "format", t), e = "u" !== n[1], i = parseInt(n[2]), r = parseInt(n[3])
              }
          } else if (t) {
            const n = (e, i, r) => null == t[e] ? r : (typeof t[e] !== i && a.throwArgumentError("invalid fixed format (" + e + " not " + i + ")", "format." + e, t[e]), t[e]);
            e = n("signed", "boolean", e), i = n("width", "number", i), r = n("decimals", "number", r)
          }
          return i % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), r > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", r), new v(u, e, i, r)
        }
      }
      class w {
        constructor(t, e, i, r) {
          t !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", n.Vy.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.format = r, this.u = e, this.l = i, this.m = !0, Object.freeze(this)
        }
        h(t) {
          this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
        }
        addUnsafe(t) {
          this.h(t);
          const e = b(this.l, this.format.decimals),
            i = b(t.l, t.format.decimals);
          return w.fromValue(e.add(i), this.format.decimals, this.format)
        }
        subUnsafe(t) {
          this.h(t);
          const e = b(this.l, this.format.decimals),
            i = b(t.l, t.format.decimals);
          return w.fromValue(e.sub(i), this.format.decimals, this.format)
        }
        mulUnsafe(t) {
          this.h(t);
          const e = b(this.l, this.format.decimals),
            i = b(t.l, t.format.decimals);
          return w.fromValue(e.mul(i).div(this.format.o), this.format.decimals, this.format)
        }
        divUnsafe(t) {
          this.h(t);
          const e = b(this.l, this.format.decimals),
            i = b(t.l, t.format.decimals);
          return w.fromValue(e.mul(this.format.o).div(i), this.format.decimals, this.format)
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = w.from(t[0], this.format);
          const i = !t[1].match(/^(0*)$/);
          return this.isNegative() && i && (e = e.subUnsafe(p.toFormat(e.format))), e
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = w.from(t[0], this.format);
          const i = !t[1].match(/^(0*)$/);
          return !this.isNegative() && i && (e = e.addUnsafe(p.toFormat(e.format))), e
        }
        round(t) {
          null == t && (t = 0);
          const e = this.toString().split(".");
          if (1 === e.length && e.push("0"), (0 > t || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
          const i = w.from("1" + d.substring(0, t), this.format),
            r = y.toFormat(this.format);
          return this.mulUnsafe(i).addUnsafe(r).floor().divUnsafe(i)
        }
        isZero() {
          return "0.0" === this.l || "0" === this.l
        }
        isNegative() {
          return "-" === this.l[0]
        }
        toString() {
          return this.l
        }
        toHexString(t) {
          if (null == t) return this.u;
          t % 8 && a.throwArgumentError("invalid byte width", "width", t);
          const e = s.gH.from(this.u).fromTwos(this.format.width).toTwos(t).toHexString();
          return (0, r.bj)(e, t / 8)
        }
        toUnsafeFloat() {
          return parseFloat(this.toString())
        }
        toFormat(t) {
          return w.fromString(this.l, t)
        }
        static fromValue(t, e, i) {
          return null == i && null != e && !(0, s.YR)(e) && (i = e, e = null), null == e && (e = 0), null == i && (i = "fixed"), w.fromString(h(t, e), v.from(i))
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          const i = v.from(e),
            n = b(t, i.decimals);
          !i.signed && n.lt(l) && c("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          i.signed ? o = n.toTwos(i.width).toHexString() : (o = n.toHexString(), o = (0, r.bj)(o, i.width / 8));
          const s = h(n, i.decimals);
          return new w(u, o, s, i)
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          const i = v.from(e);
          if ((0, r.k9)(t).length > i.width / 8) throw Error("overflow");
          let n = s.gH.from(t);
          i.signed && (n = n.fromTwos(i.width));
          const o = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
            a = h(n, i.decimals);
          return new w(u, o, a, i)
        }
        static from(t, e) {
          if ("string" == typeof t) return w.fromString(t, e);
          if ((0, r.aY)(t)) return w.fromBytes(t, e);
          try {
            return w.fromValue(t, 0, e)
          } catch (t) {
            if (t.code !== n.Vy.errors.INVALID_ARGUMENT) throw t
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", t)
        }
        static isFixedNumber(t) {
          return !(!t || !t.m)
        }
      }
      const p = w.from(1),
        y = w.from("0.5"),
        F = (new n.Vy("units/5.8.0"), ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"]);

      function x(t, e) {
        if ("string" == typeof e) {
          const t = F.indexOf(e); - 1 !== t && (e = 3 * t)
        }
        return h(t, e ?? 18)
      }
    }
  }
]);
