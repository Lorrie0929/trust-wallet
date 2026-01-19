(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1968], {
    7075: function(t, n, r) {
      "use strict";
      var i = r(48287).Buffer,
        e = this && this.t || function(t) {
          return t && t.i ? t : {
            default: t
          }
        };
      Object.defineProperty(n, "i", {
        value: !0
      }), n.FountainEncoderPart = void 0;
      const o = e(r(94148)),
        u = r(11774),
        f = r(51386),
        s = r(86287);
      class a {
        constructor(t, n, r, i, e) {
          this.o = t, this.u = n, this.h = r, this.l = i, this.v = e
        }
        get messageLength() {
          return this.h
        }
        get fragment() {
          return this.v
        }
        get seqNum() {
          return this.o
        }
        get seqLength() {
          return this.u
        }
        get checksum() {
          return this.l
        }
        cbor() {
          const t = s.cborEncode([this.o, this.u, this.h, this.l, this.v]);
          return i.from(t)
        }
        description() {
          return `seqNum:${this.o}, seqLen:${this.u}, messageLen:${this.h}, checksum:${this.l}, data:${this.v.toString("hex")}`
        }
        static fromCBOR(t) {
          const [n, r, e, u, f] = s.cborDecode(t);
          return o.default("number" == typeof n), o.default("number" == typeof r), o.default("number" == typeof e), o.default("number" == typeof u), o.default(i.isBuffer(f) && f.length > 0), new a(n, r, e, u, i.from(f))
        }
      }
      n.FountainEncoderPart = a;
      class h {
        constructor(t, n = 100, r = 0, i = 10) {
          const e = h.findNominalFragmentLength(t.length, i, n);
          this.h = t.length, this.A = h.partitionMessage(t, e), this.fragmentLength = e, this.seqNum = u.toUint32(r), this.checksum = u.getCRC(t)
        }
        get fragmentsLength() {
          return this.A.length
        }
        get fragments() {
          return this.A
        }
        get messageLength() {
          return this.h
        }
        isComplete() {
          return this.seqNum >= this.A.length
        }
        isSinglePart() {
          return 1 === this.A.length
        }
        seqLength() {
          return this.A.length
        }
        mix(t) {
          return t.reduce((t, n) => u.bufferXOR(this.A[n], t), i.alloc(this.fragmentLength, 0))
        }
        nextPart() {
          this.seqNum = u.toUint32(this.seqNum + 1);
          const t = f.chooseFragments(this.seqNum, this.A.length, this.checksum),
            n = this.mix(t);
          return new a(this.seqNum, this.A.length, this.h, this.checksum, n)
        }
        static findNominalFragmentLength(t, n, r) {
          o.default(t > 0), o.default(n > 0), o.default(r >= n);
          const i = Math.ceil(t / n);
          let e = 0;
          for (let n = 1; i >= n && (e = Math.ceil(t / n), e > r); n++);
          return e
        }
        static partitionMessage(t, n) {
          let r, e = i.from(t),
            o = [];
          for (; e.length > 0;)[r, e] = u.split(e, -n), r = i.alloc(n, 0).fill(r, 0, r.length), o.push(r);
          return o
        }
      }
      n.default = h
    },
    11774: function(t, n, r) {
      "use strict";
      var i = r(48287).Buffer,
        e = this && this.t || function(t) {
          return t && t.i ? t : {
            default: t
          }
        };
      Object.defineProperty(n, "i", {
        value: !0
      }), n.bufferXOR = n.setDifference = n.arrayContains = n.arraysEqual = n.hasPrefix = n.isURType = n.intToBytes = n.toUint32 = n.getCRCHex = n.getCRC = n.split = n.partition = n.sha256Hash = void 0;
      const o = e(r(62802)),
        u = r(70723);
      n.sha256Hash = t => o.default("sha256").update(t).digest(), n.partition = (t, n) => t.match(RegExp(".{1," + n + "}", "g")) || [t], n.split = (t, n) => [t.slice(0, -n), t.slice(-n)], n.getCRC = t => u.crc32(t), n.getCRCHex = t => u.crc32(t).toString(16).padStart(8, "0"), n.toUint32 = t => t >>> 0, n.intToBytes = t => {
        const n = new ArrayBuffer(4);
        return new DataView(n).setUint32(0, t, !1), i.from(n)
      }, n.isURType = t => t.split("").every((n, r) => {
        let i = t.charCodeAt(r);
        return i >= 97 && 122 >= i || i >= 48 && 57 >= i || 45 === i
      }), n.hasPrefix = (t, n) => 0 === t.indexOf(n), n.arraysEqual = (t, n) => t.length === n.length && t.every(t => n.includes(t)), n.arrayContains = (t, n) => n.every(n => t.includes(n)), n.setDifference = (t, n) => t.filter(t => 0 > n.indexOf(t)), n.bufferXOR = (t, n) => {
        const r = Math.max(t.length, n.length),
          e = i.allocUnsafe(r);
        for (let i = 0; r > i; ++i) e[i] = t[i] ^ n[i];
        return e
      }
    },
    17539: function(t, n, r) {
      "use strict";
      var i = this && this.t || function(t) {
        return t && t.i ? t : {
          default: t
        }
      };
      Object.defineProperty(n, "i", {
        value: !0
      }), n.URDecoder = n.UREncoder = n.UR = void 0;
      const e = i(r(64908));
      n.UR = e.default;
      const o = i(r(87814));
      n.UREncoder = o.default;
      const u = i(r(78458));
      n.URDecoder = u.default
    },
    18211: (t, n, r) => {
      "use strict";
      var i = r(67526),
        e = r(251),
        o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
      n.hp = s, n.IS = 50;
      var u = 2147483647;

      function f(t) {
        if (t > u) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        var n = new Uint8Array(t);
        return Object.setPrototypeOf(n, s.prototype), n
      }

      function s(t, n, r) {
        if ("number" == typeof t) {
          if ("string" == typeof n) throw new TypeError('The "string" argument must be of type string. Received type number');
          return c(t)
        }
        return a(t, n, r)
      }

      function a(t, n, r) {
        if ("string" == typeof t) return function(t, n) {
          if (("string" != typeof n || "" === n) && (n = "utf8"), !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          var r = 0 | y(t, n),
            i = f(r),
            e = i.write(t, n);
          return e !== r && (i = i.slice(0, e)), i
        }(t, n);
        if (ArrayBuffer.isView(t)) return function(t) {
          if (G(t, Uint8Array)) {
            var n = new Uint8Array(t);
            return w(n.buffer, n.byteOffset, n.byteLength)
          }
          return l(t)
        }(t);
        if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
        if (G(t, ArrayBuffer) || t && G(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (G(t, SharedArrayBuffer) || t && G(t.buffer, SharedArrayBuffer))) return w(t, n, r);
        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
        var i = t.valueOf && t.valueOf();
        if (null != i && i !== t) return s.from(i, n, r);
        var e = function(t) {
          if (s.isBuffer(t)) {
            var n = 0 | v(t.length),
              r = f(n);
            return 0 === r.length || t.copy(r, 0, 0, n), r
          }
          return void 0 !== t.length ? "number" != typeof t.length || z(t.length) ? f(0) : l(t) : "Buffer" === t.type && Array.isArray(t.data) ? l(t.data) : void 0
        }(t);
        if (e) return e;
        if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), n, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
      }

      function h(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
        if (0 > t) throw new RangeError('The value "' + t + '" is invalid for option "size"')
      }

      function c(t) {
        return h(t), f(0 > t ? 0 : 0 | v(t))
      }

      function l(t) {
        for (var n = 0 > t.length ? 0 : 0 | v(t.length), r = f(n), i = 0; n > i; i += 1) r[i] = 255 & t[i];
        return r
      }

      function w(t, n, r) {
        if (0 > n || t.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < n + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var i;
        return i = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), Object.setPrototypeOf(i, s.prototype), i
      }

      function v(t) {
        if (t >= u) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
        return 0 | t
      }

      function y(t, n) {
        if (s.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || G(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
        var r = t.length,
          i = arguments.length > 2 && !0 === arguments[2];
        if (!i && 0 === r) return 0;
        for (var e = !1;;) switch (n) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return P(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * r;
          case "hex":
            return r >>> 1;
          case "base64":
            return L(t).length;
          default:
            if (e) return i ? -1 : P(t).length;
            n = ("" + n).toLowerCase(), e = !0
        }
      }

      function d(t, n, r) {
        var i = !1;
        if ((void 0 === n || 0 > n) && (n = 0), n > this.length || ((void 0 === r || r > this.length) && (r = this.length), 0 >= r) || (n >>>= 0) >= (r >>>= 0)) return "";
        for (t || (t = "utf8");;) switch (t) {
          case "hex":
            return j(this, n, r);
          case "utf8":
          case "utf-8":
            return E(this, n, r);
          case "ascii":
            return k(this, n, r);
          case "latin1":
          case "binary":
            return T(this, n, r);
          case "base64":
            return M(this, n, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return x(this, n, r);
          default:
            if (i) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), i = !0
        }
      }

      function b(t, n, r) {
        var i = t[n];
        t[n] = t[r], t[r] = i
      }

      function A(t, n, r, i, e) {
        if (0 === t.length) return -1;
        if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : -2147483648 > r && (r = -2147483648), z(r = +r) && (r = e ? 0 : t.length - 1), 0 > r && (r = t.length + r), r < t.length) {
          if (0 > r) {
            if (!e) return -1;
            r = 0
          }
        } else {
          if (e) return -1;
          r = t.length - 1
        }
        if ("string" == typeof n && (n = s.from(n, i)), s.isBuffer(n)) return 0 === n.length ? -1 : p(t, n, r, i, e);
        if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(t, n, r) : Uint8Array.prototype.lastIndexOf.call(t, n, r) : p(t, [n], r, i, e);
        throw new TypeError("val must be string, number or Buffer")
      }

      function p(t, n, r, i, e) {
        var o, u = 1,
          f = t.length,
          s = n.length;
        if (void 0 !== i && ("ucs2" === (i = (i + "").toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
          if (2 > t.length || 2 > n.length) return -1;
          u = 2, f /= 2, s /= 2, r /= 2
        }

        function a(t, n) {
          return 1 === u ? t[n] : t.readUInt16BE(n * u)
        }
        if (e) {
          var h = -1;
          for (o = r; f > o; o++)
            if (a(t, o) === a(n, -1 === h ? 0 : o - h)) {
              if (-1 === h && (h = o), o - h + 1 === s) return h * u
            } else - 1 !== h && (o -= o - h), h = -1
        } else
          for (r + s > f && (r = f - s), o = r; o >= 0; o--) {
            for (var c = !0, l = 0; s > l; l++)
              if (a(t, o + l) !== a(n, l)) {
                c = !1;
                break
              } if (c) return o
          }
        return -1
      }

      function m(t, n, r, i) {
        r = +r || 0;
        var e = t.length - r;
        i ? (i = +i) > e && (i = e) : i = e;
        var o = n.length;
        i > o / 2 && (i = o / 2);
        for (var u = 0; i > u; ++u) {
          var f = parseInt(n.substr(2 * u, 2), 16);
          if (z(f)) return u;
          t[r + u] = f
        }
        return u
      }

      function I(t, n, r, i) {
        return F(P(n, t.length - r), t, r, i)
      }

      function _(t, n, r, i) {
        return F(function(t) {
          for (var n = [], r = 0; r < t.length; ++r) n.push(255 & t.charCodeAt(r));
          return n
        }(n), t, r, i)
      }

      function g(t, n, r, i) {
        return F(L(n), t, r, i)
      }

      function S(t, n, r, i) {
        return F(function(t, n) {
          for (var r, i, e, o = [], u = 0; u < t.length && (n -= 2) >= 0; ++u) i = (r = t.charCodeAt(u)) >> 8, e = r % 256, o.push(e), o.push(i);
          return o
        }(n, t.length - r), t, r, i)
      }

      function M(t, n, r) {
        return 0 === n && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(n, r))
      }

      function E(t, n, r) {
        r = Math.min(t.length, r);
        for (var i = [], e = n; r > e;) {
          var o, u, f, s, a = t[e],
            h = null,
            c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
          if (r >= e + c) switch (c) {
            case 1:
              128 > a && (h = a);
              break;
            case 2:
              128 == (192 & (o = t[e + 1])) && (s = (31 & a) << 6 | 63 & o) > 127 && (h = s);
              break;
            case 3:
              o = t[e + 1], u = t[e + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & a) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (55296 > s || s > 57343) && (h = s);
              break;
            case 4:
              o = t[e + 1], u = t[e + 2], f = t[e + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & a) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && 1114112 > s && (h = s)
          }
          null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), e += c
        }
        return function(t) {
          var n = t.length;
          if (O >= n) return String.fromCharCode.apply(String, t);
          for (var r = "", i = 0; n > i;) r += String.fromCharCode.apply(String, t.slice(i, i += O));
          return r
        }(i)
      }
      s.TYPED_ARRAY_SUPPORT = function() {
        try {
          var t = new Uint8Array(1),
            n = {
              foo: function() {
                return 42
              }
            };
          return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(t, n), 42 === t.foo()
        } catch {
          return !1
        }
      }(), !s.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
        enumerable: !0,
        get: function() {
          if (s.isBuffer(this)) return this.buffer
        }
      }), Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function() {
          if (s.isBuffer(this)) return this.byteOffset
        }
      }), s.poolSize = 8192, s.from = function(t, n, r) {
        return a(t, n, r)
      }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, n, r) {
        return function(t, n, r) {
          return h(t), t > 0 && void 0 !== n ? "string" == typeof r ? f(t).fill(n, r) : f(t).fill(n) : f(t)
        }(t, n, r)
      }, s.allocUnsafe = function(t) {
        return c(t)
      }, s.allocUnsafeSlow = function(t) {
        return c(t)
      }, s.isBuffer = function(t) {
        return null != t && !0 === t.p && t !== s.prototype
      }, s.compare = function(t, n) {
        if (G(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), G(n, Uint8Array) && (n = s.from(n, n.offset, n.byteLength)), !s.isBuffer(t) || !s.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === n) return 0;
        for (var r = t.length, i = n.length, e = 0, o = Math.min(r, i); o > e; ++e)
          if (t[e] !== n[e]) {
            r = t[e], i = n[e];
            break
          } return i > r ? -1 : r > i ? 1 : 0
      }, s.isEncoding = function(t) {
        switch ((t + "").toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, s.concat = function(t, n) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return s.alloc(0);
        var r;
        if (void 0 === n)
          for (n = 0, r = 0; r < t.length; ++r) n += t[r].length;
        var i = s.allocUnsafe(n),
          e = 0;
        for (r = 0; r < t.length; ++r) {
          var o = t[r];
          if (G(o, Uint8Array)) e + o.length > i.length ? s.from(o).copy(i, e) : Uint8Array.prototype.set.call(i, o, e);
          else {
            if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
            o.copy(i, e)
          }
          e += o.length
        }
        return i
      }, s.byteLength = y, s.prototype.p = !0, s.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var n = 0; t > n; n += 2) b(this, n, n + 1);
        return this
      }, s.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var n = 0; t > n; n += 4) b(this, n, n + 3), b(this, n + 1, n + 2);
        return this
      }, s.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var n = 0; t > n; n += 8) b(this, n, n + 7), b(this, n + 1, n + 6), b(this, n + 2, n + 5), b(this, n + 3, n + 4);
        return this
      }, s.prototype.toString = function() {
        var t = this.length;
        return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : d.apply(this, arguments)
      }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
        if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === s.compare(this, t)
      }, s.prototype.inspect = function() {
        var t = "",
          r = n.IS;
        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
      }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(t, n, r, i, e) {
        if (G(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (void 0 === n && (n = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === e && (e = this.length), 0 > n || r > t.length || 0 > i || e > this.length) throw new RangeError("out of range index");
        if (i >= e && n >= r) return 0;
        if (i >= e) return -1;
        if (n >= r) return 1;
        if (this === t) return 0;
        for (var o = (e >>>= 0) - (i >>>= 0), u = (r >>>= 0) - (n >>>= 0), f = Math.min(o, u), a = this.slice(i, e), h = t.slice(n, r), c = 0; f > c; ++c)
          if (a[c] !== h[c]) {
            o = a[c], u = h[c];
            break
          } return u > o ? -1 : o > u ? 1 : 0
      }, s.prototype.includes = function(t, n, r) {
        return -1 !== this.indexOf(t, n, r)
      }, s.prototype.indexOf = function(t, n, r) {
        return A(this, t, n, r, !0)
      }, s.prototype.lastIndexOf = function(t, n, r) {
        return A(this, t, n, r, !1)
      }, s.prototype.write = function(t, n, r, i) {
        if (void 0 === n) i = "utf8", r = this.length, n = 0;
        else if (void 0 === r && "string" == typeof n) i = n, r = this.length, n = 0;
        else {
          if (!isFinite(n)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          n >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
        }
        var e = this.length - n;
        if ((void 0 === r || r > e) && (r = e), t.length > 0 && (0 > r || 0 > n) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var o = !1;;) switch (i) {
          case "hex":
            return m(this, t, n, r);
          case "utf8":
          case "utf-8":
            return I(this, t, n, r);
          case "ascii":
          case "latin1":
          case "binary":
            return _(this, t, n, r);
          case "base64":
            return g(this, t, n, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return S(this, t, n, r);
          default:
            if (o) throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), o = !0
        }
      }, s.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: [].slice.call(this.m || this, 0)
        }
      };
      var O = 4096;

      function k(t, n, r) {
        var i = "";
        r = Math.min(t.length, r);
        for (var e = n; r > e; ++e) i += String.fromCharCode(127 & t[e]);
        return i
      }

      function T(t, n, r) {
        var i = "";
        r = Math.min(t.length, r);
        for (var e = n; r > e; ++e) i += String.fromCharCode(t[e]);
        return i
      }

      function j(t, n, r) {
        var i = t.length;
        (!n || 0 > n) && (n = 0), (!r || 0 > r || r > i) && (r = i);
        for (var e = "", o = n; r > o; ++o) e += H[t[o]];
        return e
      }

      function x(t, n, r) {
        for (var i = t.slice(n, r), e = "", o = 0; o < i.length - 1; o += 2) e += String.fromCharCode(i[o] + 256 * i[o + 1]);
        return e
      }

      function C(t, n, r) {
        if (t % 1 != 0 || 0 > t) throw new RangeError("offset is not uint");
        if (t + n > r) throw new RangeError("Trying to access beyond buffer length")
      }

      function R(t, n, r, i, e, o) {
        if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (n > e || o > n) throw new RangeError('"value" argument is out of bounds');
        if (r + i > t.length) throw new RangeError("Index out of range")
      }

      function N(t, n, r, i, e, o) {
        if (r + i > t.length) throw new RangeError("Index out of range");
        if (0 > r) throw new RangeError("Index out of range")
      }

      function U(t, n, r, i, o) {
        return n = +n, r >>>= 0, o || N(t, 0, r, 4), e.write(t, n, r, i, 23, 4), r + 4
      }

      function D(t, n, r, i, o) {
        return n = +n, r >>>= 0, o || N(t, 0, r, 8), e.write(t, n, r, i, 52, 8), r + 8
      }
      s.prototype.slice = function(t, n) {
        var r = this.length;
        0 > (t = ~~t) ? 0 > (t += r) && (t = 0) : t > r && (t = r), 0 > (n = void 0 === n ? r : ~~n) ? 0 > (n += r) && (n = 0) : n > r && (n = r), t > n && (n = t);
        var i = this.subarray(t, n);
        return Object.setPrototypeOf(i, s.prototype), i
      }, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, n, r) {
        t >>>= 0, n >>>= 0, r || C(t, n, this.length);
        for (var i = this[t], e = 1, o = 0; ++o < n && (e *= 256);) i += this[t + o] * e;
        return i
      }, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, n, r) {
        t >>>= 0, n >>>= 0, r || C(t, n, this.length);
        for (var i = this[t + --n], e = 1; n > 0 && (e *= 256);) i += this[t + --n] * e;
        return i
      }, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, n) {
        return t >>>= 0, n || C(t, 1, this.length), this[t]
      }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, n) {
        return t >>>= 0, n || C(t, 2, this.length), this[t] | this[t + 1] << 8
      }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, n) {
        return t >>>= 0, n || C(t, 2, this.length), this[t] << 8 | this[t + 1]
      }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
      }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
      }, s.prototype.readIntLE = function(t, n, r) {
        t >>>= 0, n >>>= 0, r || C(t, n, this.length);
        for (var i = this[t], e = 1, o = 0; ++o < n && (e *= 256);) i += this[t + o] * e;
        return i >= (e *= 128) && (i -= Math.pow(2, 8 * n)), i
      }, s.prototype.readIntBE = function(t, n, r) {
        t >>>= 0, n >>>= 0, r || C(t, n, this.length);
        for (var i = n, e = 1, o = this[t + --i]; i > 0 && (e *= 256);) o += this[t + --i] * e;
        return o >= (e *= 128) && (o -= Math.pow(2, 8 * n)), o
      }, s.prototype.readInt8 = function(t, n) {
        return t >>>= 0, n || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
      }, s.prototype.readInt16LE = function(t, n) {
        t >>>= 0, n || C(t, 2, this.length);
        var r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r
      }, s.prototype.readInt16BE = function(t, n) {
        t >>>= 0, n || C(t, 2, this.length);
        var r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r
      }, s.prototype.readInt32LE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
      }, s.prototype.readInt32BE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
      }, s.prototype.readFloatLE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), e.read(this, t, !0, 23, 4)
      }, s.prototype.readFloatBE = function(t, n) {
        return t >>>= 0, n || C(t, 4, this.length), e.read(this, t, !1, 23, 4)
      }, s.prototype.readDoubleLE = function(t, n) {
        return t >>>= 0, n || C(t, 8, this.length), e.read(this, t, !0, 52, 8)
      }, s.prototype.readDoubleBE = function(t, n) {
        return t >>>= 0, n || C(t, 8, this.length), e.read(this, t, !1, 52, 8)
      }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, n, r, i) {
        t = +t, n >>>= 0, r >>>= 0, i || R(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
        var e = 1,
          o = 0;
        for (this[n] = 255 & t; ++o < r && (e *= 256);) this[n + o] = t / e & 255;
        return n + r
      }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, n, r, i) {
        t = +t, n >>>= 0, r >>>= 0, i || R(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
        var e = r - 1,
          o = 1;
        for (this[n + e] = 255 & t; --e >= 0 && (o *= 256);) this[n + e] = t / o & 255;
        return n + r
      }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 1, 255, 0), this[n] = 255 & t, n + 1
      }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 2, 65535, 0), this[n] = 255 & t, this[n + 1] = t >>> 8, n + 2
      }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 2, 65535, 0), this[n] = t >>> 8, this[n + 1] = 255 & t, n + 2
      }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 4, 4294967295, 0), this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t, n + 4
      }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 4, 4294967295, 0), this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t, n + 4
      }, s.prototype.writeIntLE = function(t, n, r, i) {
        if (t = +t, n >>>= 0, !i) {
          var e = Math.pow(2, 8 * r - 1);
          R(this, t, n, r, e - 1, -e)
        }
        var o = 0,
          u = 1,
          f = 0;
        for (this[n] = 255 & t; ++o < r && (u *= 256);) 0 > t && 0 === f && 0 !== this[n + o - 1] && (f = 1), this[n + o] = (t / u | 0) - f & 255;
        return n + r
      }, s.prototype.writeIntBE = function(t, n, r, i) {
        if (t = +t, n >>>= 0, !i) {
          var e = Math.pow(2, 8 * r - 1);
          R(this, t, n, r, e - 1, -e)
        }
        var o = r - 1,
          u = 1,
          f = 0;
        for (this[n + o] = 255 & t; --o >= 0 && (u *= 256);) 0 > t && 0 === f && 0 !== this[n + o + 1] && (f = 1), this[n + o] = (t / u | 0) - f & 255;
        return n + r
      }, s.prototype.writeInt8 = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 1, 127, -128), 0 > t && (t = 255 + t + 1), this[n] = 255 & t, n + 1
      }, s.prototype.writeInt16LE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 2, 32767, -32768), this[n] = 255 & t, this[n + 1] = t >>> 8, n + 2
      }, s.prototype.writeInt16BE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 2, 32767, -32768), this[n] = t >>> 8, this[n + 1] = 255 & t, n + 2
      }, s.prototype.writeInt32LE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 4, 2147483647, -2147483648), this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24, n + 4
      }, s.prototype.writeInt32BE = function(t, n, r) {
        return t = +t, n >>>= 0, r || R(this, t, n, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t, n + 4
      }, s.prototype.writeFloatLE = function(t, n, r) {
        return U(this, t, n, !0, r)
      }, s.prototype.writeFloatBE = function(t, n, r) {
        return U(this, t, n, !1, r)
      }, s.prototype.writeDoubleLE = function(t, n, r) {
        return D(this, t, n, !0, r)
      }, s.prototype.writeDoubleBE = function(t, n, r) {
        return D(this, t, n, !1, r)
      }, s.prototype.copy = function(t, n, r, i) {
        if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !i && 0 !== i && (i = this.length), n >= t.length && (n = t.length), n || (n = 0), i > 0 && r > i && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
        if (0 > n) throw new RangeError("targetStart out of bounds");
        if (0 > r || r >= this.length) throw new RangeError("Index out of range");
        if (0 > i) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - n < i - r && (i = t.length - n + r);
        var e = i - r;
        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(n, r, i) : Uint8Array.prototype.set.call(t, this.subarray(r, i), n), e
      }, s.prototype.fill = function(t, n, r, i) {
        if ("string" == typeof t) {
          if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
          if ("string" == typeof i && !s.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
          if (1 === t.length) {
            var e = t.charCodeAt(0);
            ("utf8" === i && 128 > e || "latin1" === i) && (t = e)
          }
        } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = +t);
        if (0 > n || this.length < n || this.length < r) throw new RangeError("Out of range index");
        if (n >= r) return this;
        var o;
        if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
          for (o = n; r > o; ++o) this[o] = t;
        else {
          var u = s.isBuffer(t) ? t : s.from(t, i),
            f = u.length;
          if (0 === f) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
          for (o = 0; r - n > o; ++o) this[o + n] = u[o % f]
        }
        return this
      };
      var B = /[^+/0-9A-Za-z-_]/g;

      function P(t, n) {
        n = n || 1 / 0;
        for (var r, i = t.length, e = null, o = [], u = 0; i > u; ++u) {
          if ((r = t.charCodeAt(u)) > 55295 && 57344 > r) {
            if (!e) {
              if (r > 56319) {
                (n -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              if (u + 1 === i) {
                (n -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              e = r;
              continue
            }
            if (56320 > r) {
              (n -= 3) > -1 && o.push(239, 191, 189), e = r;
              continue
            }
            r = 65536 + (e - 55296 << 10 | r - 56320)
          } else e && (n -= 3) > -1 && o.push(239, 191, 189);
          if (e = null, 128 > r) {
            if (0 > (n -= 1)) break;
            o.push(r)
          } else if (2048 > r) {
            if (0 > (n -= 2)) break;
            o.push(r >> 6 | 192, 63 & r | 128)
          } else if (65536 > r) {
            if (0 > (n -= 3)) break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
          } else {
            if (r >= 1114112) throw Error("Invalid code point");
            if (0 > (n -= 4)) break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
          }
        }
        return o
      }

      function L(t) {
        return i.toByteArray(function(t) {
          if (2 > (t = (t = t.split("=")[0]).trim().replace(B, "")).length) return "";
          for (; t.length % 4 != 0;) t += "=";
          return t
        }(t))
      }

      function F(t, n, r, i) {
        for (var e = 0; i > e && e + r < n.length && e < t.length; ++e) n[e + r] = t[e];
        return e
      }

      function G(t, n) {
        return t instanceof n || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === n.name
      }

      function z(t) {
        return t != t
      }
      var H = function() {
        for (var t = "0123456789abcdef", n = Array(256), r = 0; 16 > r; ++r)
          for (var i = 16 * r, e = 0; 16 > e; ++e) n[i + e] = t[r] + t[e];
        return n
      }()
    },
    20908: (t, n) => {
      "use strict";
      Object.defineProperty(n, "i", {
        value: !0
      }), n.InvalidChecksumError = n.InvalidSequenceComponentError = n.InvalidTypeError = n.InvalidPathLengthError = n.InvalidSchemeError = void 0, n.InvalidSchemeError = class extends Error {
        constructor() {
          super("Invalid Scheme"), this.name = "InvalidSchemeError"
        }
      }, n.InvalidPathLengthError = class extends Error {
        constructor() {
          super("Invalid Path"), this.name = "InvalidPathLengthError"
        }
      }, n.InvalidTypeError = class extends Error {
        constructor() {
          super("Invalid Type"), this.name = "InvalidTypeError"
        }
      }, n.InvalidSequenceComponentError = class extends Error {
        constructor() {
          super("Invalid Sequence Component"), this.name = "InvalidSequenceComponentError"
        }
      }, n.InvalidChecksumError = class extends Error {
        constructor() {
          super("Invalid Checksum"), this.name = "InvalidChecksumError"
        }
      }
    },
    25300: function(t, n, r) {
      "use strict";
      var i = r(48287).Buffer,
        e = this && this.t || function(t) {
          return t && t.i ? t : {
            default: t
          }
        };
      Object.defineProperty(n, "i", {
        value: !0
      });
      const o = e(r(94148)),
        u = r(11774);
      let f = [];
      var s, a;
      (a = s || (s = {})).STANDARD = "standard", a.URI = "uri", a.MINIMAL = "minimal";
      const h = t => "ableacidalsoapexaquaarchatomauntawayaxisbackbaldbarnbeltbetabiasbluebodybragbrewbulbbuzzcalmcashcatschefcityclawcodecolacookcostcruxcurlcuspcyandarkdatadaysdelidicedietdoordowndrawdropdrumdulldutyeacheasyechoedgeepicevenexamexiteyesfactfairfernfigsfilmfishfizzflapflewfluxfoxyfreefrogfuelfundgalagamegeargemsgiftgirlglowgoodgraygrimgurugushgyrohalfhanghardhawkheathelphighhillholyhopehornhutsicedideaidleinchinkyintoirisironitemjadejazzjoinjoltjowljudojugsjumpjunkjurykeepkenokeptkeyskickkilnkingkitekiwiknoblamblavalazyleaflegsliarlimplionlistlogoloudloveluaulucklungmainmanymathmazememomenumeowmildmintmissmonknailnavyneednewsnextnoonnotenumbobeyoboeomitonyxopenovalowlspaidpartpeckplaypluspoempoolposepuffpumapurrquadquizraceramprealredorichroadrockroofrubyruinrunsrustsafesagascarsetssilkskewslotsoapsolosongstubsurfswantacotasktaxitenttiedtimetinytoiltombtoystriptunatwinuglyundouniturgeuservastveryvetovialvibeviewvisavoidvowswallwandwarmwaspwavewaxywebswhatwhenwhizwolfworkyankyawnyellyogayurtzapszerozestzinczonezoom".slice(4 * t, 4 * t + 4),
        c = t => `${t}${u.getCRCHex(i.from(t,"hex"))}`,
        l = (t, n) => {
          const r = c(t);
          return i.from(r, "hex").reduce((t, n) => [...t, h(n)], []).join(n)
        },
        w = (t, n, r) => {
          const e = (4 == r ? t.split(n) : u.partition(t, 2)).map(t => ((t, n) => {
            if (o.default(t.length === n, "Invalid Bytewords: word.length does not match wordLength provided"), 0 === f.length) {
              f = [...Array(676)].map(() => -1);
              for (let t = 0; 256 > t; t++) {
                const n = h(t);
                let r = n[0].charCodeAt(0) - 97,
                  i = 26 * (n[3].charCodeAt(0) - 97) + r;
                f[i] = t
              }
            }
            let r = t[0].toLowerCase().charCodeAt(0) - 97,
              e = t[4 == n ? 3 : 1].toLowerCase().charCodeAt(0) - 97;
            o.default(r >= 0 && 26 > r && e >= 0 && 26 > e, "Invalid Bytewords: invalid word");
            let u = f[26 * e + r];
            if (o.default(-1 !== u, "Invalid Bytewords: value not in lookup table"), 4 == n) {
              const n = h(u);
              let r = t[1].toLowerCase(),
                i = t[2].toLowerCase();
              o.default(r === n[1] && i === n[2], "Invalid Bytewords: invalid middle letters of word")
            }
            return i.from([u]).toString("hex")
          })(t, r)).join("");
          o.default(e.length >= 5, "Invalid Bytewords: invalid decoded string length");
          const [s, a] = u.split(i.from(e, "hex"), 4), c = u.getCRCHex(s);
          return o.default(c === a.toString("hex"), "Invalid Checksum"), s.toString("hex")
        };
      n.default = {
        decode: (t, n = s.MINIMAL) => {
          switch (n) {
            case s.STANDARD:
              return w(t, " ", 4);
            case s.URI:
              return w(t, "-", 4);
            case s.MINIMAL:
              return w(t, "", 2);
            default:
              throw Error("Invalid style " + n)
          }
        },
        encode: (t, n = s.MINIMAL) => {
          switch (n) {
            case s.STANDARD:
              return l(t, " ");
            case s.URI:
              return l(t, "-");
            case s.MINIMAL:
              return (t => {
                const n = c(t);
                return i.from(n, "hex").reduce((t, n) => t + (t => {
                  const n = h(t);
                  return `${n[0]}${n[3]}`
                })(n), "")
              })(t);
            default:
              throw Error("Invalid style " + n)
          }
        },
        STYLES: s
      }
    },
    30571: (t, n, r) => {
      "use strict";
      var i = r(48287).Buffer;
      Object.defineProperty(n, "i", {
        value: !0
      }), n.FountainDecoderPart = void 0;
      const e = r(11774),
        o = r(51386),
        u = r(20908);
      class f {
        constructor(t, n) {
          this.I = t, this.v = n
        }
        get indexes() {
          return this.I
        }
        get fragment() {
          return this.v
        }
        static fromEncoderPart(t) {
          const n = o.chooseFragments(t.seqNum, t.seqLength, t.checksum),
            r = t.fragment;
          return new f(n, r)
        }
        isSimple() {
          return 1 === this.indexes.length
        }
      }
      n.FountainDecoderPart = f;
      class s {
        constructor() {
          this.result = void 0, this.expectedMessageLength = 0, this.expectedChecksum = 0, this.expectedFragmentLength = 0, this.processedPartsCount = 0, this.expectedPartIndexes = [], this.lastPartIndexes = [], this.queuedParts = [], this.receivedPartIndexes = [], this.mixedParts = [], this.simpleParts = []
        }
        validatePart(t) {
          if (0 === this.expectedPartIndexes.length)[...Array(t.seqLength)].forEach((t, n) => this.expectedPartIndexes.push(n)), this.expectedMessageLength = t.messageLength, this.expectedChecksum = t.checksum, this.expectedFragmentLength = t.fragment.length;
          else if (this.expectedPartIndexes.length !== t.seqLength || this.expectedMessageLength !== t.messageLength || this.expectedChecksum !== t.checksum || this.expectedFragmentLength !== t.fragment.length) return !1;
          return !0
        }
        reducePartByPart(t, n) {
          if (e.arrayContains(t.indexes, n.indexes)) {
            const r = e.setDifference(t.indexes, n.indexes),
              i = e.bufferXOR(t.fragment, n.fragment);
            return new f(r, i)
          }
          return t
        }
        reduceMixedBy(t) {
          const n = [];
          this.mixedParts.map(({
            value: n
          }) => this.reducePartByPart(n, t)).forEach(t => {
            t.isSimple() ? this.queuedParts.push(t) : n.push({
              key: t.indexes,
              value: t
            })
          }), this.mixedParts = n
        }
        processSimplePart(t) {
          const n = t.indexes[0];
          if (!this.receivedPartIndexes.includes(n))
            if (this.simpleParts.push({
                key: t.indexes,
                value: t
              }), this.receivedPartIndexes.push(n), e.arraysEqual(this.receivedPartIndexes, this.expectedPartIndexes)) {
              const t = this.simpleParts.map(({
                  value: t
                }) => t).sort((t, n) => t.indexes[0] - n.indexes[0]),
                n = s.joinFragments(t.map(t => t.fragment), this.expectedMessageLength);
              e.getCRC(n) === this.expectedChecksum ? this.result = n : this.error = new u.InvalidChecksumError
            } else this.reduceMixedBy(t)
        }
        processMixedPart(t) {
          if (this.mixedParts.some(({
              key: n
            }) => e.arraysEqual(n, t.indexes))) return;
          let n = this.simpleParts.reduce((t, {
            value: n
          }) => this.reducePartByPart(t, n), t);
          n = this.mixedParts.reduce((t, {
            value: n
          }) => this.reducePartByPart(t, n), n), n.isSimple() ? this.queuedParts.push(n) : (this.reduceMixedBy(n), this.mixedParts.push({
            key: n.indexes,
            value: n
          }))
        }
        processQueuedItem() {
          if (0 === this.queuedParts.length) return;
          const t = this.queuedParts.shift();
          t.isSimple() ? this.processSimplePart(t) : this.processMixedPart(t)
        }
        receivePart(t) {
          if (this.isComplete() || !this.validatePart(t)) return !1;
          const n = f.fromEncoderPart(t);
          for (this.lastPartIndexes = n.indexes, this.queuedParts.push(n); !this.isComplete() && this.queuedParts.length > 0;) this.processQueuedItem();
          return this.processedPartsCount += 1, !0
        }
        isComplete() {
          return void 0 !== this.result && this.result.length > 0
        }
        isSuccess() {
          return !(void 0 !== this.error || !this.isComplete())
        }
        resultMessage() {
          return this.isSuccess() ? this.result : i.from([])
        }
        isFailure() {
          return void 0 !== this.error
        }
        resultError() {
          return this.error ? this.error.message : ""
        }
        expectedPartCount() {
          return this.expectedPartIndexes.length
        }
        getExpectedPartIndexes() {
          return [...this.expectedPartIndexes]
        }
        getReceivedPartIndexes() {
          return [...this.receivedPartIndexes]
        }
        getLastPartIndexes() {
          return [...this.lastPartIndexes]
        }
        estimatedPercentComplete() {
          if (this.isComplete()) return 1;
          const t = this.expectedPartCount();
          return 0 === t ? 0 : Math.min(.99, this.processedPartsCount / (1.75 * t))
        }
        getProgress() {
          if (this.isComplete()) return 1;
          const t = this.expectedPartCount();
          return 0 === t ? 0 : this.receivedPartIndexes.length / t
        }
      }
      n.default = s, s.joinFragments = (t, n) => i.concat(t).slice(0, n)
    },
    31981: function(t, n, r) {
      var i, e, o = r(48287).Buffer;
      void 0 !== (e = "function" == typeof(i = function() {
        var t = function() {
          function t(t) {
            this.$hex = t
          }
          t.prototype = {
            length: function() {
              return this.$hex.length / 2
            },
            toString: function(t) {
              if (!t || "hex" === t || 16 === t) return this.$hex;
              if ("utf-8" === t) {
                for (var n = "", r = 0; r < this.$hex.length; r += 2) n += "%" + this.$hex.substring(r, r + 2);
                return decodeURIComponent(n)
              }
              if ("latin" === t) {
                for (n = [], r = 0; r < this.$hex.length; r += 2) n.push(parseInt(this.$hex.substring(r, r + 2), 16));
                return String.fromCharCode.apply(String, n)
              }
              throw Error("Unrecognised format: " + t)
            }
          }, t.fromLatinString = function(n) {
            for (var r = "", i = 0; i < n.length; i++) {
              var e = n.charCodeAt(i).toString(16);
              1 === e.length && (e = "0" + e), r += e
            }
            return new t(r)
          }, t.fromUtf8String = function(n) {
            for (var r = encodeURIComponent(n), i = "", e = 0; e < r.length; e++)
              if ("%" === r.charAt(e)) i += r.substring(e + 1, e + 3), e += 2;
              else {
                var o = r.charCodeAt(e).toString(16);
                2 > o.length && (o = "0" + o), i += o
              } return new t(i)
          };
          var n = [],
            r = {},
            i = function(t) {
              return function() {
                throw Error(t + " not implemented")
              }
            };

          function e() {}

          function u() {}

          function f(t, n) {
            var r = t.value;
            return 24 > r ? r : 24 == r ? n.readByte() : 25 == r ? n.readUint16() : 26 == r ? n.readUint32() : 27 == r ? n.readUint64() : 31 == r ? null : void i("Additional info: " + r)()
          }

          function s(t, n, r) {
            var i = t << 5;
            24 > n ? r.writeByte(i | n) : 256 > n ? (r.writeByte(24 | i), r.writeByte(n)) : 65536 > n ? (r.writeByte(25 | i), r.writeUint16(n)) : 4294967296 > n ? (r.writeByte(26 | i), r.writeUint32(n)) : (r.writeByte(27 | i), r.writeUint64(n))
          }
          e.prototype = {
            peekByte: i("peekByte"),
            readByte: i("readByte"),
            readChunk: i("readChunk"),
            readFloat16: function() {
              var t = this.readUint16(),
                n = (32767 & t) >> 10,
                r = 1023 & t,
                i = 32768 & t;
              if (31 === n) return 0 === r ? i ? -1 / 0 : 1 / 0 : NaN;
              var e = n ? Math.pow(2, n - 25) * (1024 + r) : Math.pow(2, -24) * r;
              return i ? -e : e
            },
            readFloat32: function() {
              var t = this.readUint32(),
                n = (2147483647 & t) >> 23,
                r = 8388607 & t,
                i = 2147483648 & t;
              if (255 === n) return 0 === r ? i ? -1 / 0 : 1 / 0 : NaN;
              var e = n ? Math.pow(2, n - 23 - 127) * (8388608 + r) : Math.pow(2, -149) * r;
              return i ? -e : e
            },
            readFloat64: function() {
              var t = this.readUint32(),
                n = t >> 20 & 2047,
                r = 4294967296 * (1048575 & t) + this.readUint32(),
                i = 2147483648 & t;
              if (2047 === n) return 0 === r ? i ? -1 / 0 : 1 / 0 : NaN;
              var e = n ? Math.pow(2, n - 52 - 1023) * (4503599627370496 + r) : 5e-324 * r;
              return i ? -e : e
            },
            readUint16: function() {
              return 256 * this.readByte() + this.readByte()
            },
            readUint32: function() {
              return 65536 * this.readUint16() + this.readUint16()
            },
            readUint64: function() {
              return 4294967296 * this.readUint32() + this.readUint32()
            }
          }, u.prototype = {
            writeByte: i("writeByte"),
            result: i("result"),
            writeFloat16: i("writeFloat16"),
            writeFloat32: i("writeFloat32"),
            writeFloat64: i("writeFloat64"),
            writeUint16: function(t) {
              this.writeByte(t >> 8 & 255), this.writeByte(255 & t)
            },
            writeUint32: function(t) {
              this.writeUint16(t >> 16 & 65535), this.writeUint16(65535 & t)
            },
            writeUint64: function(t) {
              if (t >= 9007199254740992 || -9007199254740992 >= t) throw Error("Cannot encode Uint64 of: " + t + " magnitude to big (floating point errors)");
              this.writeUint32(Math.floor(t / 4294967296)), this.writeUint32(t % 4294967296)
            },
            writeString: i("writeString"),
            canWriteBinary: function(t) {
              return !1
            },
            writeBinary: i("writeChunk")
          };
          var a = Error();

          function h(t) {
            var n = function(t) {
              var n = t.readByte();
              return {
                type: n >> 5,
                value: 31 & n
              }
            }(t);
            switch (n.type) {
              case 0:
                return f(n, t);
              case 1:
                return -1 - f(n, t);
              case 2:
                return t.readChunk(f(n, t));
              case 3:
                return t.readChunk(f(n, t)).toString("utf-8");
              case 4:
              case 5:
                var i = f(n, t),
                  e = [];
                if (null !== i) {
                  5 === n.type && (i *= 2);
                  for (var o = 0; i > o; o++) e[o] = h(t)
                } else
                  for (var u;
                    (u = h(t)) !== a;) e.push(u);
                if (5 === n.type) {
                  var s = {};
                  for (o = 0; o < e.length; o += 2) s[e[o]] = e[o + 1];
                  return s
                }
                return e;
              case 6:
                var c = f(n, t),
                  l = r[c];
                return e = h(t), l ? l(e) : e;
              case 7:
                if (25 === n.value) return t.readFloat16();
                if (26 === n.value) return t.readFloat32();
                if (27 === n.value) return t.readFloat64();
                switch (f(n, t)) {
                  case 20:
                    return !1;
                  case 21:
                    return !0;
                  case 22:
                    return null;
                  case 23:
                    return;
                  case null:
                    return a;
                  default:
                    throw Error("Unknown fixed value: " + n.value)
                }
              default:
                throw Error("Unsupported header: " + JSON.stringify(n))
            }
            throw Error("not implemented yet")
          }

          function c(t, r) {
            for (var i = 0; i < n.length; i++) {
              var e = n[i].fn(t);
              if (void 0 !== e) return s(6, n[i].tag, r), c(e, r)
            }
            if (t && "function" == typeof t.toCBOR && (t = t.toCBOR()), !1 === t) s(7, 20, r);
            else if (!0 === t) s(7, 21, r);
            else if (null === t) s(7, 22, r);
            else if (void 0 === t) s(7, 23, r);
            else if ("number" == typeof t) Math.floor(t) === t && 9007199254740992 > t && t > -9007199254740992 ? 0 > t ? s(1, -1 - t, r) : s(0, t, r) : (function(t, n, r) {
              r.writeByte(251)
            }(0, 0, r), r.writeFloat64(t));
            else if ("string" == typeof t) r.writeString(t, function(t) {
              s(3, t, r)
            });
            else if (r.canWriteBinary(t)) r.writeBinary(t, function(t) {
              s(2, t, r)
            });
            else {
              if ("object" != typeof t) throw Error("CBOR encoding not supported: " + t);
              if (v.config.useToJSON && "function" == typeof t.toJSON && (t = t.toJSON()), Array.isArray(t))
                for (s(4, t.length, r), i = 0; i < t.length; i++) c(t[i], r);
              else {
                var o = Object.keys(t);
                for (s(5, o.length, r), i = 0; i < o.length; i++) c(o[i], r), c(t[o[i]], r)
              }
            }
          }
          var l = [],
            w = [],
            v = {
              config: {
                useToJSON: !0
              },
              addWriter: function(t, n) {
                "string" == typeof t ? w.push(function(r) {
                  if (t === r) return n(r)
                }) : w.push(t)
              },
              addReader: function(t, n) {
                "string" == typeof t ? l.push(function(r, i) {
                  if (t === i) return n(r, i)
                }) : l.push(t)
              },
              encode: function(t, n) {
                for (var r = 0; r < w.length; r++) {
                  var i = (0, w[r])(n);
                  if (i) return c(t, i), i.result()
                }
                throw Error("Unsupported output format: " + n)
              },
              decode: function(t, n) {
                for (var r = 0; r < l.length; r++) {
                  var i = (0, l[r])(t, n);
                  if (i) return h(i)
                }
                throw Error("Unsupported input format: " + n)
              },
              addSemanticEncode: function(t, r) {
                if ("number" != typeof t || t % 1 != 0 || 0 > t) throw Error("Tag must be a positive integer");
                return n.push({
                  tag: t,
                  fn: r
                }), this
              },
              addSemanticDecode: function(t, n) {
                if ("number" != typeof t || t % 1 != 0 || 0 > t) throw Error("Tag must be a positive integer");
                return r[t] = n, this
              },
              Reader: e,
              Writer: u
            };

          function y(t) {
            this.buffer = t, this.pos = 0
          }

          function d(t) {
            this.byteLength = 0, this.defaultBufferLength = 16384, this.latestBuffer = o.alloc(this.defaultBufferLength), this.latestBufferOffset = 0, this.completeBuffers = [], this.stringFormat = t
          }

          function b(t) {
            this.hex = t, this.pos = 0
          }

          function A(t) {
            this.$hex = "", this.finalFormat = t || "hex"
          }
          return y.prototype = Object.create(e.prototype), y.prototype.peekByte = function() {
            return this.buffer[this.pos]
          }, y.prototype.readByte = function() {
            return this.buffer[this.pos++]
          }, y.prototype.readUint16 = function() {
            var t = this.buffer.readUInt16BE(this.pos);
            return this.pos += 2, t
          }, y.prototype.readUint32 = function() {
            var t = this.buffer.readUInt32BE(this.pos);
            return this.pos += 4, t
          }, y.prototype.readFloat32 = function() {
            var t = this.buffer.readFloatBE(this.pos);
            return this.pos += 4, t
          }, y.prototype.readFloat64 = function() {
            var t = this.buffer.readDoubleBE(this.pos);
            return this.pos += 8, t
          }, y.prototype.readChunk = function(t) {
            var n = o.alloc(t);
            return this.buffer.copy(n, 0, this.pos, this.pos += t), n
          }, d.prototype = Object.create(u.prototype), d.prototype.writeByte = function(t) {
            this.latestBuffer[this.latestBufferOffset++] = t, this.latestBufferOffset >= this.latestBuffer.length && (this.completeBuffers.push(this.latestBuffer), this.latestBuffer = o.alloc(this.defaultBufferLength), this.latestBufferOffset = 0), this.byteLength++
          }, d.prototype.writeFloat32 = function(t) {
            var n = o.alloc(4);
            n.writeFloatBE(t, 0), this.writeBuffer(n)
          }, d.prototype.writeFloat64 = function(t) {
            var n = o.alloc(8);
            n.writeDoubleBE(t, 0), this.writeBuffer(n)
          }, d.prototype.writeString = function(t, n) {
            var r = o.from(t, "utf-8");
            n(r.length), this.writeBuffer(r)
          }, d.prototype.canWriteBinary = function(t) {
            return t instanceof o
          }, d.prototype.writeBinary = function(t, n) {
            n(t.length), this.writeBuffer(t)
          }, d.prototype.writeBuffer = function(t) {
            if (!(t instanceof o)) throw new TypeError("BufferWriter only accepts Buffers");
            this.latestBufferOffset ? this.latestBuffer.length - this.latestBufferOffset < t.length ? (this.completeBuffers.push(this.latestBuffer.slice(0, this.latestBufferOffset)), this.completeBuffers.push(t), this.latestBuffer = o.alloc(this.defaultBufferLength), this.latestBufferOffset = 0) : (t.copy(this.latestBuffer, this.latestBufferOffset), this.latestBufferOffset += t.length, this.latestBufferOffset >= this.latestBuffer.length && (this.completeBuffers.push(this.latestBuffer), this.latestBuffer = o.alloc(this.defaultBufferLength), this.latestBufferOffset = 0)) : this.completeBuffers.push(t), this.byteLength += t.length
          }, d.prototype.result = function() {
            for (var t = o.alloc(this.byteLength), n = 0, r = 0; r < this.completeBuffers.length; r++) {
              var i = this.completeBuffers[r];
              i.copy(t, n, 0, i.length), n += i.length
            }
            return this.latestBufferOffset && this.latestBuffer.copy(t, n, 0, this.latestBufferOffset), this.stringFormat ? t.toString(this.stringFormat) : t
          }, "function" == typeof o && (v.addReader(function(t, n) {
            return t instanceof o ? new y(t) : "hex" === n || "base64" === n ? new y(o.from(t, n)) : void 0
          }), v.addWriter(function(t) {
            return t && "buffer" !== t ? "hex" === t || "base64" === t ? new d(t) : void 0 : new d
          })), b.prototype = Object.create(e.prototype), b.prototype.peekByte = function() {
            var t = this.hex.substring(this.pos, 2);
            return parseInt(t, 16)
          }, b.prototype.readByte = function() {
            var t = this.hex.substring(this.pos, this.pos + 2);
            return this.pos += 2, parseInt(t, 16)
          }, b.prototype.readChunk = function(n) {
            var r = this.hex.substring(this.pos, this.pos + 2 * n);
            return this.pos += 2 * n, "function" == typeof o ? o.from(r, "hex") : new t(r)
          }, A.prototype = Object.create(u.prototype), A.prototype.writeByte = function(t) {
            if (0 > t || t > 255) throw Error("Byte value out of range: " + t);
            var n = t.toString(16);
            1 == n.length && (n = "0" + n), this.$hex += n
          }, A.prototype.canWriteBinary = function(n) {
            return n instanceof t || "function" == typeof o && n instanceof o
          }, A.prototype.writeBinary = function(n, r) {
            if (n instanceof t) r(n.length()), this.$hex += n.$hex;
            else {
              if (!("function" == typeof o && n instanceof o)) throw new TypeError("HexWriter only accepts BinaryHex or Buffers");
              r(n.length), this.$hex += n.toString("hex")
            }
          }, A.prototype.result = function() {
            return "buffer" === this.finalFormat && "function" == typeof o ? o.from(this.$hex, "hex") : new t(this.$hex).toString(this.finalFormat)
          }, A.prototype.writeString = function(n, r) {
            var i = t.fromUtf8String(n);
            r(i.length()), this.$hex += i.$hex
          }, v.addReader(function(n, r) {
            return n instanceof t || n.$hex ? new b(n.$hex) : "hex" === r ? new b(n) : void 0
          }), v.addWriter(function(t) {
            if ("hex" === t) return new A
          }), v
        }();
        return t.addSemanticEncode(0, function(t) {
          if (t instanceof Date) return t.toISOString()
        }).addSemanticDecode(0, function(t) {
          return new Date(t)
        }).addSemanticDecode(1, function(t) {
          return new Date(t)
        }), t
      }) ? i() : i) && (t.exports = e)
    },
    45892: (t, n, r) => {
      "use strict";
      r.d(n, {
        wg: () => xs
      });
      var i, e = (i = function(t, n) {
          return (i = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, n) {
              t.__proto__ = n
            } || function(t, n) {
              for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
            })(t, n)
        }, function(t, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + n + " is not a constructor or null");

          function r() {
            this.constructor = t
          }
          i(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }),
        o = function(t) {
          function n(n, r) {
            var i = this.constructor,
              e = t.call(this, n, r) || this;
            return Object.defineProperty(e, "name", {
                value: i.name,
                enumerable: !1,
                configurable: !0
              }),
              function(t, n) {
                var r = Object.setPrototypeOf;
                r ? r(t, n) : t.__proto__ = n
              }(e, i.prototype),
              function(t, n) {
                void 0 === n && (n = t.constructor);
                var r = Error.captureStackTrace;
                r && r(t, n)
              }(e), e
          }
          return e(n, t), n
        }(Error),
        u = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        f = function(t) {
          function n(n) {
            void 0 === n && (n = void 0);
            var r = t.call(this, n) || this;
            return r.message = n, r
          }
          return u(n, t), n.prototype.getKind = function() {
            return this.constructor.kind
          }, n.kind = "Exception", n
        }(o);
      const s = f;
      var a = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        h = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return a(n, t), n.kind = "ArgumentException", n
        }(s);
      const c = h;
      var l = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        w = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return l(n, t), n.kind = "IllegalArgumentException", n
        }(s);
      const v = w;
      var y = function() {
        function t(t) {
          if (this.binarizer = t, null === t) throw new v("Binarizer must be non-null.")
        }
        return t.prototype.getWidth = function() {
          return this.binarizer.getWidth()
        }, t.prototype.getHeight = function() {
          return this.binarizer.getHeight()
        }, t.prototype.getBlackRow = function(t, n) {
          return this.binarizer.getBlackRow(t, n)
        }, t.prototype.getBlackMatrix = function() {
          return (null === this.matrix || void 0 === this.matrix) && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
        }, t.prototype.isCropSupported = function() {
          return this.binarizer.getLuminanceSource().isCropSupported()
        }, t.prototype.crop = function(n, r, i, e) {
          var o = this.binarizer.getLuminanceSource().crop(n, r, i, e);
          return new t(this.binarizer.createBinarizer(o))
        }, t.prototype.isRotateSupported = function() {
          return this.binarizer.getLuminanceSource().isRotateSupported()
        }, t.prototype.rotateCounterClockwise = function() {
          var n = this.binarizer.getLuminanceSource().rotateCounterClockwise();
          return new t(this.binarizer.createBinarizer(n))
        }, t.prototype.rotateCounterClockwise45 = function() {
          var n = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
          return new t(this.binarizer.createBinarizer(n))
        }, t.prototype.toString = function() {
          try {
            return this.getBlackMatrix().toString()
          } catch {
            return ""
          }
        }, t
      }();
      const d = y;
      var b = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        A = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return b(n, t), n.getChecksumInstance = function() {
            return new n
          }, n.kind = "ChecksumException", n
        }(s);
      const p = A;
      var m = function() {
        function t(t) {
          this.source = t
        }
        return t.prototype.getLuminanceSource = function() {
          return this.source
        }, t.prototype.getWidth = function() {
          return this.source.getWidth()
        }, t.prototype.getHeight = function() {
          return this.source.getHeight()
        }, t
      }();
      const I = m;
      var _ = function() {
        function t() {}
        return t.arraycopy = function(t, n, r, i, e) {
          for (; e--;) r[i++] = t[n++]
        }, t.currentTimeMillis = function() {
          return Date.now()
        }, t
      }();
      const g = _;
      var S = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        M = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return S(n, t), n.kind = "IndexOutOfBoundsException", n
        }(s);
      const E = M;
      var O = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        k = function(t) {
          function n(n, r) {
            void 0 === n && (n = void 0), void 0 === r && (r = void 0);
            var i = t.call(this, r) || this;
            return i.index = n, i.message = r, i
          }
          return O(n, t), n.kind = "ArrayIndexOutOfBoundsException", n
        }(E);
      const T = k;
      var j = function() {
        function t() {}
        return t.fill = function(t, n) {
          for (var r = 0, i = t.length; i > r; r++) t[r] = n
        }, t.fillWithin = function(n, r, i, e) {
          t.rangeCheck(n.length, r, i);
          for (var o = r; i > o; o++) n[o] = e
        }, t.rangeCheck = function(t, n, r) {
          if (n > r) throw new v("fromIndex(" + n + ") > toIndex(" + r + ")");
          if (0 > n) throw new T(n);
          if (r > t) throw new T(r)
        }, t.asList = function() {
          for (var t = [], n = 0; arguments.length > n; n++) t[n] = arguments[n];
          return t
        }, t.create = function(t, n, r) {
          return Array.from({
            length: t
          }).map(function(t) {
            return Array.from({
              length: n
            }).fill(r)
          })
        }, t.createInt32Array = function(t, n, r) {
          return Array.from({
            length: t
          }).map(function(t) {
            return Int32Array.from({
              length: n
            }).fill(r)
          })
        }, t.equals = function(t, n) {
          if (!(t && n && t.length && n.length && t.length === n.length)) return !1;
          for (var r = 0, i = t.length; i > r; r++)
            if (t[r] !== n[r]) return !1;
          return !0
        }, t.hashCode = function(t) {
          var n, r;
          if (null === t) return 0;
          var i = 1;
          try {
            for (var e = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(t), o = e.next(); !o.done; o = e.next()) i = 31 * i + o.value
          } catch (t) {
            n = {
              error: t
            }
          } finally {
            try {
              o && !o.done && (r = e.return) && r.call(e)
            } finally {
              if (n) throw n.error
            }
          }
          return i
        }, t.fillUint8Array = function(t, n) {
          for (var r = 0; r !== t.length; r++) t[r] = n
        }, t.copyOf = function(t, n) {
          return t.slice(0, n)
        }, t.copyOfUint8Array = function(t, n) {
          if (t.length <= n) {
            var r = new Uint8Array(n);
            return r.set(t), r
          }
          return t.slice(0, n)
        }, t.copyOfRange = function(t, n, r) {
          var i = r - n,
            e = new Int32Array(i);
          return g.arraycopy(t, n, e, 0, i), e
        }, t.binarySearch = function(n, r, i) {
          void 0 === i && (i = t.numberComparator);
          for (var e = 0, o = n.length - 1; o >= e;) {
            var u = o + e >> 1,
              f = i(r, n[u]);
            if (f > 0) e = u + 1;
            else {
              if (f >= 0) return u;
              o = u - 1
            }
          }
          return -e - 1
        }, t.numberComparator = function(t, n) {
          return t - n
        }, t
      }();
      const x = j;
      var C = function() {
        function t() {}
        return t.numberOfTrailingZeros = function(t) {
          var n;
          if (0 === t) return 32;
          var r = 31;
          return 0 != (n = t << 16) && (r -= 16, t = n), 0 != (n = t << 8) && (r -= 8, t = n), 0 != (n = t << 4) && (r -= 4, t = n), 0 != (n = t << 2) && (r -= 2, t = n), r - (t << 1 >>> 31)
        }, t.numberOfLeadingZeros = function(t) {
          if (0 === t) return 32;
          var n = 1;
          return t >>> 16 || (n += 16, t <<= 16), t >>> 24 || (n += 8, t <<= 8), t >>> 28 || (n += 4, t <<= 4), t >>> 30 || (n += 2, t <<= 2), n - (t >>> 31)
        }, t.toHexString = function(t) {
          return t.toString(16)
        }, t.toBinaryString = function(t) {
          return parseInt(t + "", 2) + ""
        }, t.bitCount = function(t) {
          return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
        }, t.truncDivision = function(t, n) {
          return Math.trunc(t / n)
        }, t.parseInt = function(t, n) {
          return void 0 === n && (n = void 0), parseInt(t, n)
        }, t.MIN_VALUE_32_BITS = -2147483648, t.MAX_VALUE = Number.MAX_SAFE_INTEGER, t
      }();
      const R = C;
      var N = function() {
        function t(n, r) {
          void 0 === n ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = n, this.bits = null == r ? t.makeArray(n) : r)
        }
        return t.prototype.getSize = function() {
          return this.size
        }, t.prototype.getSizeInBytes = function() {
          return Math.floor((this.size + 7) / 8)
        }, t.prototype.ensureCapacity = function(n) {
          if (n > 32 * this.bits.length) {
            var r = t.makeArray(n);
            g.arraycopy(this.bits, 0, r, 0, this.bits.length), this.bits = r
          }
        }, t.prototype.get = function(t) {
          return !!(this.bits[Math.floor(t / 32)] & 1 << (31 & t))
        }, t.prototype.set = function(t) {
          this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
        }, t.prototype.flip = function(t) {
          this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
        }, t.prototype.getNextSet = function(t) {
          var n = this.size;
          if (t >= n) return n;
          var r = this.bits,
            i = Math.floor(t / 32),
            e = r[i];
          e &= ~((1 << (31 & t)) - 1);
          for (var o = r.length; 0 === e;) {
            if (++i === o) return n;
            e = r[i]
          }
          var u = 32 * i + R.numberOfTrailingZeros(e);
          return u > n ? n : u
        }, t.prototype.getNextUnset = function(t) {
          var n = this.size;
          if (t >= n) return n;
          var r = this.bits,
            i = Math.floor(t / 32),
            e = ~r[i];
          e &= ~((1 << (31 & t)) - 1);
          for (var o = r.length; 0 === e;) {
            if (++i === o) return n;
            e = ~r[i]
          }
          var u = 32 * i + R.numberOfTrailingZeros(e);
          return u > n ? n : u
        }, t.prototype.setBulk = function(t, n) {
          this.bits[Math.floor(t / 32)] = n
        }, t.prototype.setRange = function(t, n) {
          if (t > n || 0 > t || n > this.size) throw new v;
          if (n !== t) {
            n--;
            for (var r = Math.floor(t / 32), i = Math.floor(n / 32), e = this.bits, o = r; i >= o; o++) {
              var u = (2 << (i > o ? 31 : 31 & n)) - (1 << (o > r ? 0 : 31 & t));
              e[o] |= u
            }
          }
        }, t.prototype.clear = function() {
          for (var t = this.bits.length, n = this.bits, r = 0; t > r; r++) n[r] = 0
        }, t.prototype.isRange = function(t, n, r) {
          if (t > n || 0 > t || n > this.size) throw new v;
          if (n === t) return !0;
          n--;
          for (var i = Math.floor(t / 32), e = Math.floor(n / 32), o = this.bits, u = i; e >= u; u++) {
            var f = (2 << (e > u ? 31 : 31 & n)) - (1 << (u > i ? 0 : 31 & t)) & 4294967295;
            if ((o[u] & f) !== (r ? f : 0)) return !1
          }
          return !0
        }, t.prototype.appendBit = function(t) {
          this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
        }, t.prototype.appendBits = function(t, n) {
          if (0 > n || n > 32) throw new v("Num bits must be between 0 and 32");
          this.ensureCapacity(this.size + n);
          for (var r = n; r > 0; r--) this.appendBit(1 == (t >> r - 1 & 1))
        }, t.prototype.appendBitArray = function(t) {
          var n = t.size;
          this.ensureCapacity(this.size + n);
          for (var r = 0; n > r; r++) this.appendBit(t.get(r))
        }, t.prototype.xor = function(t) {
          if (this.size !== t.size) throw new v("Sizes don't match");
          for (var n = this.bits, r = 0, i = n.length; i > r; r++) n[r] ^= t.bits[r]
        }, t.prototype.toBytes = function(t, n, r, i) {
          for (var e = 0; i > e; e++) {
            for (var o = 0, u = 0; 8 > u; u++) this.get(t) && (o |= 1 << 7 - u), t++;
            n[r + e] = o
          }
        }, t.prototype.getBitArray = function() {
          return this.bits
        }, t.prototype.reverse = function() {
          for (var t = new Int32Array(this.bits.length), n = Math.floor((this.size - 1) / 32), r = n + 1, i = this.bits, e = 0; r > e; e++) {
            var o = i[e];
            o = (o = (o = (o = (o = o >> 1 & 1431655765 | (1431655765 & o) << 1) >> 2 & 858993459 | (858993459 & o) << 2) >> 4 & 252645135 | (252645135 & o) << 4) >> 8 & 16711935 | (16711935 & o) << 8) >> 16 & 65535 | (65535 & o) << 16, t[n - e] = o
          }
          if (this.size !== 32 * r) {
            var u = 32 * r - this.size,
              f = t[0] >>> u;
            for (e = 1; r > e; e++) {
              var s = t[e];
              f |= s << 32 - u, t[e - 1] = f, f = s >>> u
            }
            t[r - 1] = f
          }
          this.bits = t
        }, t.makeArray = function(t) {
          return new Int32Array(Math.floor((t + 31) / 32))
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.size === r.size && x.equals(this.bits, r.bits)
        }, t.prototype.hashCode = function() {
          return 31 * this.size + x.hashCode(this.bits)
        }, t.prototype.toString = function() {
          for (var t = "", n = 0, r = this.size; r > n; n++) !(7 & n) && (t += " "), t += this.get(n) ? "X" : ".";
          return t
        }, t.prototype.clone = function() {
          return new t(this.size, this.bits.slice())
        }, t.prototype.toArray = function() {
          for (var t = [], n = 0, r = this.size; r > n; n++) t.push(this.get(n));
          return t
        }, t
      }();
      const U = N;
      var D;
      ! function(t) {
        t[t.OTHER = 0] = "OTHER", t[t.PURE_BARCODE = 1] = "PURE_BARCODE", t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t[t.TRY_HARDER = 3] = "TRY_HARDER", t[t.CHARACTER_SET = 4] = "CHARACTER_SET", t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t[t.ENABLE_CODE_39_EXTENDED_MODE = 7] = "ENABLE_CODE_39_EXTENDED_MODE", t[t.ASSUME_GS1 = 8] = "ASSUME_GS1", t[t.RETURN_CODABAR_START_END = 9] = "RETURN_CODABAR_START_END", t[t.NEED_RESULT_POINT_CALLBACK = 10] = "NEED_RESULT_POINT_CALLBACK", t[t.ALLOWED_EAN_EXTENSIONS = 11] = "ALLOWED_EAN_EXTENSIONS"
      }(D || (D = {}));
      const B = D;
      var P = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        L = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return P(n, t), n.getFormatInstance = function() {
            return new n
          }, n.kind = "FormatException", n
        }(s);
      const F = L;
      var G;
      ! function(t) {
        t[t.Cp437 = 0] = "Cp437", t[t.ISO8859_1 = 1] = "ISO8859_1", t[t.ISO8859_2 = 2] = "ISO8859_2", t[t.ISO8859_3 = 3] = "ISO8859_3", t[t.ISO8859_4 = 4] = "ISO8859_4", t[t.ISO8859_5 = 5] = "ISO8859_5", t[t.ISO8859_6 = 6] = "ISO8859_6", t[t.ISO8859_7 = 7] = "ISO8859_7", t[t.ISO8859_8 = 8] = "ISO8859_8", t[t.ISO8859_9 = 9] = "ISO8859_9", t[t.ISO8859_10 = 10] = "ISO8859_10", t[t.ISO8859_11 = 11] = "ISO8859_11", t[t.ISO8859_13 = 12] = "ISO8859_13", t[t.ISO8859_14 = 13] = "ISO8859_14", t[t.ISO8859_15 = 14] = "ISO8859_15", t[t.ISO8859_16 = 15] = "ISO8859_16", t[t.SJIS = 16] = "SJIS", t[t.Cp1250 = 17] = "Cp1250", t[t.Cp1251 = 18] = "Cp1251", t[t.Cp1252 = 19] = "Cp1252", t[t.Cp1256 = 20] = "Cp1256", t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t[t.UTF8 = 22] = "UTF8", t[t.ASCII = 23] = "ASCII", t[t.Big5 = 24] = "Big5", t[t.GB18030 = 25] = "GB18030", t[t.EUC_KR = 26] = "EUC_KR"
      }(G || (G = {}));
      var z = function() {
        function t(n, r, i) {
          for (var e, o, u = [], f = 3; arguments.length > f; f++) u[f - 3] = arguments[f];
          this.valueIdentifier = n, this.name = i, this.values = "number" == typeof r ? Int32Array.from([r]) : r, this.otherEncodingNames = u, t.VALUE_IDENTIFIER_TO_ECI.set(n, this), t.NAME_TO_ECI.set(i, this);
          for (var s = this.values, a = 0, h = s.length; a !== h; a++) {
            var c = s[a];
            t.VALUES_TO_ECI.set(c, this)
          }
          try {
            for (var l = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(u), w = l.next(); !w.done; w = l.next()) {
              var v = w.value;
              t.NAME_TO_ECI.set(v, this)
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              w && !w.done && (o = l.return) && o.call(l)
            } finally {
              if (e) throw e.error
            }
          }
        }
        return t.prototype.getValueIdentifier = function() {
          return this.valueIdentifier
        }, t.prototype.getName = function() {
          return this.name
        }, t.prototype.getValue = function() {
          return this.values[0]
        }, t.getCharacterSetECIByValue = function(n) {
          if (0 > n || n >= 900) throw new F("incorect value");
          var r = t.VALUES_TO_ECI.get(n);
          if (void 0 === r) throw new F("incorect value");
          return r
        }, t.getCharacterSetECIByName = function(n) {
          var r = t.NAME_TO_ECI.get(n);
          if (void 0 === r) throw new F("incorect value");
          return r
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.getName() === r.getName()
        }, t.VALUE_IDENTIFIER_TO_ECI = new Map, t.VALUES_TO_ECI = new Map, t.NAME_TO_ECI = new Map, t.Cp437 = new t(G.Cp437, Int32Array.from([0, 2]), "Cp437"), t.ISO8859_1 = new t(G.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), t.ISO8859_2 = new t(G.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), t.ISO8859_3 = new t(G.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), t.ISO8859_4 = new t(G.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), t.ISO8859_5 = new t(G.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), t.ISO8859_6 = new t(G.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), t.ISO8859_7 = new t(G.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), t.ISO8859_8 = new t(G.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), t.ISO8859_9 = new t(G.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), t.ISO8859_10 = new t(G.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), t.ISO8859_11 = new t(G.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), t.ISO8859_13 = new t(G.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), t.ISO8859_14 = new t(G.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), t.ISO8859_15 = new t(G.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), t.ISO8859_16 = new t(G.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), t.SJIS = new t(G.SJIS, 20, "SJIS", "Shift_JIS"), t.Cp1250 = new t(G.Cp1250, 21, "Cp1250", "windows-1250"), t.Cp1251 = new t(G.Cp1251, 22, "Cp1251", "windows-1251"), t.Cp1252 = new t(G.Cp1252, 23, "Cp1252", "windows-1252"), t.Cp1256 = new t(G.Cp1256, 24, "Cp1256", "windows-1256"), t.UnicodeBigUnmarked = new t(G.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), t.UTF8 = new t(G.UTF8, 26, "UTF8", "UTF-8"), t.ASCII = new t(G.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), t.Big5 = new t(G.Big5, 28, "Big5"), t.GB18030 = new t(G.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), t.EUC_KR = new t(G.EUC_KR, 30, "EUC_KR", "EUC-KR"), t
      }();
      const H = z;
      var q = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        X = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return q(n, t), n.kind = "UnsupportedOperationException", n
        }(s);
      const W = X;
      var $ = function() {
        function t() {}
        return t.decode = function(t, n) {
          var r = this.encodingName(n);
          return this.customDecoder ? this.customDecoder(t, r) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
        }, t.shouldDecodeOnFallback = function(n) {
          return !t.isBrowser() && "ISO-8859-1" === n
        }, t.encode = function(t, n) {
          var r = this.encodingName(n);
          return this.customEncoder ? this.customEncoder(t, r) : typeof TextEncoder > "u" ? this.encodeFallback(t) : (new TextEncoder).encode(t)
        }, t.isBrowser = function() {
          return "u" > typeof window && "[object Window]" === {}.toString.call(window)
        }, t.encodingName = function(t) {
          return "string" == typeof t ? t : t.getName()
        }, t.encodingCharacterSet = function(t) {
          return t instanceof H ? t : H.getCharacterSetECIByName(t)
        }, t.decodeFallback = function(n, r) {
          var i = this.encodingCharacterSet(r);
          if (t.isDecodeFallbackSupported(i)) {
            for (var e = "", o = 0, u = n.length; u > o; o++) {
              var f = n[o].toString(16);
              2 > f.length && (f = "0" + f), e += "%" + f
            }
            return decodeURIComponent(e)
          }
          if (i.equals(H.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(n.buffer));
          throw new W("Encoding " + this.encodingName(r) + " not supported by fallback.")
        }, t.isDecodeFallbackSupported = function(t) {
          return t.equals(H.UTF8) || t.equals(H.ISO8859_1) || t.equals(H.ASCII)
        }, t.encodeFallback = function(t) {
          for (var n = btoa(unescape(encodeURIComponent(t))).split(""), r = [], i = 0; i < n.length; i++) r.push(n[i].charCodeAt(0));
          return new Uint8Array(r)
        }, t
      }();
      const K = $;
      var V = function() {
        function t() {}
        return t.castAsNonUtf8Char = function(t, n) {
          void 0 === n && (n = null);
          var r = n ? n.getName() : this.ISO88591;
          return K.decode(new Uint8Array([t]), r)
        }, t.guessEncoding = function(n, r) {
          if (null != r && void 0 !== r.get(B.CHARACTER_SET)) return r.get(B.CHARACTER_SET).toString();
          for (var i = n.length, e = !0, o = !0, u = !0, f = 0, s = 0, a = 0, h = 0, c = 0, l = 0, w = 0, v = 0, y = 0, d = 0, b = 0, A = n.length > 3 && 239 === n[0] && 187 === n[1] && 191 === n[2], p = 0; i > p && (e || o || u); p++) {
            var m = 255 & n[p];
            u && (f > 0 ? 128 & m ? f-- : u = !1 : !!(128 & m) && (64 & m ? (f++, 32 & m ? (f++, 16 & m ? (f++, 8 & m ? u = !1 : h++) : a++) : s++) : u = !1)), e && (m > 127 && 160 > m ? e = !1 : m > 159 && (192 > m || 215 === m || 247 === m) && b++), o && (c > 0 ? 64 > m || 127 === m || m > 252 ? o = !1 : c-- : 128 === m || 160 === m || m > 239 ? o = !1 : m > 160 && 224 > m ? (l++, v = 0, ++w > y && (y = w)) : m > 127 ? (c++, w = 0, ++v > d && (d = v)) : (w = 0, v = 0))
          }
          return u && f > 0 && (u = !1), o && c > 0 && (o = !1), u && (A || s + a + h > 0) ? t.UTF8 : !o || !t.ASSUME_SHIFT_JIS && 3 > y && 3 > d ? e && o ? 2 === y && 2 === l || 10 * b >= i ? t.SHIFT_JIS : t.ISO88591 : e ? t.ISO88591 : o ? t.SHIFT_JIS : u ? t.UTF8 : t.PLATFORM_DEFAULT_ENCODING : t.SHIFT_JIS
        }, t.format = function(t) {
          for (var n = [], r = 1; arguments.length > r; r++) n[r - 1] = arguments[r];
          var i = -1;
          return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function(t, r, e, o, u, f) {
            if ("%%" === t) return "%";
            if (void 0 !== n[++i]) {
              t = o ? parseInt(o.substr(1)) : void 0;
              var s, a = u ? parseInt(u.substr(1)) : void 0;
              switch (f) {
                case "s":
                  s = n[i];
                  break;
                case "c":
                  s = n[i][0];
                  break;
                case "f":
                  s = parseFloat(n[i]).toFixed(t);
                  break;
                case "p":
                  s = parseFloat(n[i]).toPrecision(t);
                  break;
                case "e":
                  s = parseFloat(n[i]).toExponential(t);
                  break;
                case "x":
                  s = parseInt(n[i]).toString(a || 16);
                  break;
                case "d":
                  s = parseFloat(parseInt(n[i], a || 10).toPrecision(t)).toFixed(0)
              }
              s = "object" == typeof s ? JSON.stringify(s) : (+s).toString(a);
              for (var h = parseInt(e), c = e && e[0] + "" == "0" ? "0" : " "; s.length < h;) s = void 0 !== r ? s + c : c + s;
              return s
            }
          })
        }, t.getBytes = function(t, n) {
          return K.encode(t, n)
        }, t.getCharCode = function(t, n) {
          return void 0 === n && (n = 0), t.charCodeAt(n)
        }, t.getCharAt = function(t) {
          return String.fromCharCode(t)
        }, t.SHIFT_JIS = H.SJIS.getName(), t.GB2312 = "GB2312", t.ISO88591 = H.ISO8859_1.getName(), t.EUC_JP = "EUC_JP", t.UTF8 = H.UTF8.getName(), t.PLATFORM_DEFAULT_ENCODING = t.UTF8, t.ASSUME_SHIFT_JIS = !1, t
      }();
      const Z = V;
      var J = function() {
        function t(t) {
          void 0 === t && (t = ""), this.value = t
        }
        return t.prototype.enableDecoding = function(t) {
          return this.encoding = t, this
        }, t.prototype.append = function(t) {
          return "string" == typeof t ? this.value += t.toString() : this.encoding ? this.value += Z.castAsNonUtf8Char(t, this.encoding) : this.value += String.fromCharCode(t), this
        }, t.prototype.appendChars = function(t, n, r) {
          for (var i = n; n + r > n; i++) this.append(t[i]);
          return this
        }, t.prototype.length = function() {
          return this.value.length
        }, t.prototype.charAt = function(t) {
          return this.value.charAt(t)
        }, t.prototype.deleteCharAt = function(t) {
          this.value = this.value.substr(0, t) + this.value.substring(t + 1)
        }, t.prototype.setCharAt = function(t, n) {
          this.value = this.value.substr(0, t) + n + this.value.substr(t + 1)
        }, t.prototype.substring = function(t, n) {
          return this.value.substring(t, n)
        }, t.prototype.setLengthToZero = function() {
          this.value = ""
        }, t.prototype.toString = function() {
          return this.value
        }, t.prototype.insert = function(t, n) {
          this.value = this.value.substring(0, t) + n + this.value.substring(t)
        }, t
      }();
      const Q = J;
      var Y = function() {
        function t(t, n, r, i) {
          if (this.width = t, this.height = n, this.rowSize = r, this.bits = i, null == n && (n = t), this.height = n, 1 > t || 1 > n) throw new v("Both dimensions must be greater than 0");
          null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == i && (this.bits = new Int32Array(this.rowSize * this.height))
        }
        return t.parseFromBooleanArray = function(n) {
          for (var r = n.length, i = n[0].length, e = new t(i, r), o = 0; r > o; o++)
            for (var u = n[o], f = 0; i > f; f++) u[f] && e.set(f, o);
          return e
        }, t.parseFromString = function(n, r, i) {
          if (null === n) throw new v("stringRepresentation cannot be null");
          for (var e = Array(n.length), o = 0, u = 0, f = -1, s = 0, a = 0; a < n.length;)
            if ("\n" === n.charAt(a) || "\r" === n.charAt(a)) {
              if (o > u) {
                if (-1 === f) f = o - u;
                else if (o - u !== f) throw new v("row lengths do not match");
                u = o, s++
              }
              a++
            } else if (n.substring(a, a + r.length) === r) a += r.length, e[o] = !0, o++;
          else {
            if (n.substring(a, a + i.length) !== i) throw new v("illegal character encountered: " + n.substring(a));
            a += i.length, e[o] = !1, o++
          }
          if (o > u) {
            if (-1 === f) f = o - u;
            else if (o - u !== f) throw new v("row lengths do not match");
            s++
          }
          for (var h = new t(f, s), c = 0; o > c; c++) e[c] && h.set(Math.floor(c % f), Math.floor(c / f));
          return h
        }, t.prototype.get = function(t, n) {
          var r = n * this.rowSize + Math.floor(t / 32);
          return !!(this.bits[r] >>> (31 & t) & 1)
        }, t.prototype.set = function(t, n) {
          var r = n * this.rowSize + Math.floor(t / 32);
          this.bits[r] |= 1 << (31 & t) & 4294967295
        }, t.prototype.unset = function(t, n) {
          var r = n * this.rowSize + Math.floor(t / 32);
          this.bits[r] &= ~(1 << (31 & t) & 4294967295)
        }, t.prototype.flip = function(t, n) {
          var r = n * this.rowSize + Math.floor(t / 32);
          this.bits[r] ^= 1 << (31 & t) & 4294967295
        }, t.prototype.xor = function(t) {
          if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new v("input matrix dimensions do not match");
          for (var n = new U(Math.floor(this.width / 32) + 1), r = this.rowSize, i = this.bits, e = 0, o = this.height; o > e; e++)
            for (var u = e * r, f = t.getRow(e, n).getBitArray(), s = 0; r > s; s++) i[u + s] ^= f[s]
        }, t.prototype.clear = function() {
          for (var t = this.bits, n = t.length, r = 0; n > r; r++) t[r] = 0
        }, t.prototype.setRegion = function(t, n, r, i) {
          if (0 > n || 0 > t) throw new v("Left and top must be nonnegative");
          if (1 > i || 1 > r) throw new v("Height and width must be at least 1");
          var e = t + r,
            o = n + i;
          if (o > this.height || e > this.width) throw new v("The region must fit inside the matrix");
          for (var u = this.rowSize, f = this.bits, s = n; o > s; s++)
            for (var a = s * u, h = t; e > h; h++) f[a + Math.floor(h / 32)] |= 1 << (31 & h) & 4294967295
        }, t.prototype.getRow = function(t, n) {
          null == n || n.getSize() < this.width ? n = new U(this.width) : n.clear();
          for (var r = this.rowSize, i = this.bits, e = t * r, o = 0; r > o; o++) n.setBulk(32 * o, i[e + o]);
          return n
        }, t.prototype.setRow = function(t, n) {
          g.arraycopy(n.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
        }, t.prototype.rotate180 = function() {
          for (var t = this.getWidth(), n = this.getHeight(), r = new U(t), i = new U(t), e = 0, o = Math.floor((n + 1) / 2); o > e; e++) r = this.getRow(e, r), i = this.getRow(n - 1 - e, i), r.reverse(), i.reverse(), this.setRow(e, i), this.setRow(n - 1 - e, r)
        }, t.prototype.getEnclosingRectangle = function() {
          for (var t = this.width, n = this.height, r = this.rowSize, i = this.bits, e = t, o = n, u = -1, f = -1, s = 0; n > s; s++)
            for (var a = 0; r > a; a++) {
              var h = i[s * r + a];
              if (0 !== h) {
                if (o > s && (o = s), s > f && (f = s), e > 32 * a) {
                  for (var c = 0; !(h << 31 - c & 4294967295);) c++;
                  e > 32 * a + c && (e = 32 * a + c)
                }
                if (32 * a + 31 > u) {
                  for (c = 31; !(h >>> c);) c--;
                  32 * a + c > u && (u = 32 * a + c)
                }
              }
            }
          return e > u || o > f ? null : Int32Array.from([e, o, u - e + 1, f - o + 1])
        }, t.prototype.getTopLeftOnBit = function() {
          for (var t = this.rowSize, n = this.bits, r = 0; r < n.length && 0 === n[r];) r++;
          if (r === n.length) return null;
          for (var i = r / t, e = r % t * 32, o = n[r], u = 0; !(o << 31 - u & 4294967295);) u++;
          return e += u, Int32Array.from([e, i])
        }, t.prototype.getBottomRightOnBit = function() {
          for (var t = this.rowSize, n = this.bits, r = n.length - 1; r >= 0 && 0 === n[r];) r--;
          if (0 > r) return null;
          for (var i = Math.floor(r / t), e = 32 * Math.floor(r % t), o = n[r], u = 31; !(o >>> u);) u--;
          return e += u, Int32Array.from([e, i])
        }, t.prototype.getWidth = function() {
          return this.width
        }, t.prototype.getHeight = function() {
          return this.height
        }, t.prototype.getRowSize = function() {
          return this.rowSize
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && x.equals(this.bits, r.bits)
        }, t.prototype.hashCode = function() {
          var t = this.width;
          return 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize) + x.hashCode(this.bits)
        }, t.prototype.toString = function(t, n, r) {
          return void 0 === t && (t = "X "), void 0 === n && (n = "  "), void 0 === r && (r = "\n"), this.buildToString(t, n, r)
        }, t.prototype.buildToString = function(t, n, r) {
          for (var i = new Q, e = 0, o = this.height; o > e; e++) {
            for (var u = 0, f = this.width; f > u; u++) i.append(this.get(u, e) ? t : n);
            i.append(r)
          }
          return i.toString()
        }, t.prototype.clone = function() {
          return new t(this.width, this.height, this.rowSize, this.bits.slice())
        }, t
      }();
      const tt = Y;
      var nt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        rt = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return nt(n, t), n.getNotFoundInstance = function() {
            return new n
          }, n.kind = "NotFoundException", n
        }(s);
      const it = rt;
      var et = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ot = function(t) {
          function n(r) {
            var i = t.call(this, r) || this;
            return i.luminances = n.EMPTY, i.buckets = new Int32Array(n.LUMINANCE_BUCKETS), i
          }
          return et(n, t), n.prototype.getBlackRow = function(t, r) {
            var i = this.getLuminanceSource(),
              e = i.getWidth();
            null == r || r.getSize() < e ? r = new U(e) : r.clear(), this.initArrays(e);
            for (var o = i.getRow(t, this.luminances), u = this.buckets, f = 0; e > f; f++) u[(255 & o[f]) >> n.LUMINANCE_SHIFT]++;
            var s = n.estimateBlackPoint(u);
            if (3 > e)
              for (f = 0; e > f; f++)(255 & o[f]) < s && r.set(f);
            else {
              var a = 255 & o[0],
                h = 255 & o[1];
              for (f = 1; e - 1 > f; f++) {
                var c = 255 & o[f + 1];
                s > (4 * h - a - c) / 2 && r.set(f), a = h, h = c
              }
            }
            return r
          }, n.prototype.getBlackMatrix = function() {
            var t = this.getLuminanceSource(),
              r = t.getWidth(),
              i = t.getHeight(),
              e = new tt(r, i);
            this.initArrays(r);
            for (var o = this.buckets, u = 1; 5 > u; u++)
              for (var f = Math.floor(i * u / 5), s = t.getRow(f, this.luminances), a = Math.floor(4 * r / 5), h = Math.floor(r / 5); a > h; h++) o[(255 & s[h]) >> n.LUMINANCE_SHIFT]++;
            var c = n.estimateBlackPoint(o),
              l = t.getMatrix();
            for (u = 0; i > u; u++) {
              var w = u * r;
              for (h = 0; r > h; h++) c > (255 & l[w + h]) && e.set(h, u)
            }
            return e
          }, n.prototype.createBinarizer = function(t) {
            return new n(t)
          }, n.prototype.initArrays = function(t) {
            this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
            for (var r = this.buckets, i = 0; i < n.LUMINANCE_BUCKETS; i++) r[i] = 0
          }, n.estimateBlackPoint = function(t) {
            for (var r = t.length, i = 0, e = 0, o = 0, u = 0; r > u; u++) t[u] > o && (e = u, o = t[u]), t[u] > i && (i = t[u]);
            var f = 0,
              s = 0;
            for (u = 0; r > u; u++) {
              var a = u - e;
              (w = t[u] * a * a) > s && (f = u, s = w)
            }
            if (e > f) {
              var h = e;
              e = f, f = h
            }
            if (r / 16 >= f - e) throw new it;
            var c = f - 1,
              l = -1;
            for (u = f - 1; u > e; u--) {
              var w, v = u - e;
              (w = v * v * (f - u) * (i - t[u])) > l && (c = u, l = w)
            }
            return c << n.LUMINANCE_SHIFT
          }, n.LUMINANCE_BITS = 5, n.LUMINANCE_SHIFT = 8 - n.LUMINANCE_BITS, n.LUMINANCE_BUCKETS = 1 << n.LUMINANCE_BITS, n.EMPTY = Uint8ClampedArray.from([0]), n
        }(I);
      const ut = ot;
      var ft = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        st = function(t) {
          function n(n) {
            var r = t.call(this, n) || this;
            return r.matrix = null, r
          }
          return ft(n, t), n.prototype.getBlackMatrix = function() {
            if (null !== this.matrix) return this.matrix;
            var r = this.getLuminanceSource(),
              i = r.getWidth(),
              e = r.getHeight();
            if (i < n.MINIMUM_DIMENSION || e < n.MINIMUM_DIMENSION) this.matrix = t.prototype.getBlackMatrix.call(this);
            else {
              var o = r.getMatrix(),
                u = i >> n.BLOCK_SIZE_POWER;
              0 !== (i & n.BLOCK_SIZE_MASK) && u++;
              var f = e >> n.BLOCK_SIZE_POWER;
              0 !== (e & n.BLOCK_SIZE_MASK) && f++;
              var s = n.calculateBlackPoints(o, u, f, i, e),
                a = new tt(i, e);
              n.calculateThresholdForBlock(o, u, f, i, e, s, a), this.matrix = a
            }
            return this.matrix
          }, n.prototype.createBinarizer = function(t) {
            return new n(t)
          }, n.calculateThresholdForBlock = function(t, r, i, e, o, u, f) {
            for (var s = o - n.BLOCK_SIZE, a = e - n.BLOCK_SIZE, h = 0; i > h; h++) {
              var c = h << n.BLOCK_SIZE_POWER;
              c > s && (c = s);
              for (var l = n.cap(h, 2, i - 3), w = 0; r > w; w++) {
                var v = w << n.BLOCK_SIZE_POWER;
                v > a && (v = a);
                for (var y = n.cap(w, 2, r - 3), d = 0, b = -2; 2 >= b; b++) {
                  var A = u[l + b];
                  d += A[y - 2] + A[y - 1] + A[y] + A[y + 1] + A[y + 2]
                }
                var p = d / 25;
                n.thresholdBlock(t, v, c, p, e, f)
              }
            }
          }, n.cap = function(t, n, r) {
            return n > t ? n : t > r ? r : t
          }, n.thresholdBlock = function(t, r, i, e, o, u) {
            for (var f = 0, s = i * o + r; f < n.BLOCK_SIZE; f++, s += o)
              for (var a = 0; a < n.BLOCK_SIZE; a++)(255 & t[s + a]) <= e && u.set(r + a, i + f)
          }, n.calculateBlackPoints = function(t, r, i, e, o) {
            for (var u = o - n.BLOCK_SIZE, f = e - n.BLOCK_SIZE, s = Array(i), a = 0; i > a; a++) {
              s[a] = new Int32Array(r);
              var h = a << n.BLOCK_SIZE_POWER;
              h > u && (h = u);
              for (var c = 0; r > c; c++) {
                var l = c << n.BLOCK_SIZE_POWER;
                l > f && (l = f);
                for (var w = 0, v = 255, y = 0, d = 0, b = h * e + l; d < n.BLOCK_SIZE; d++, b += e) {
                  for (var A = 0; A < n.BLOCK_SIZE; A++) {
                    var p = 255 & t[b + A];
                    w += p, v > p && (v = p), p > y && (y = p)
                  }
                  if (y - v > n.MIN_DYNAMIC_RANGE)
                    for (d++, b += e; d < n.BLOCK_SIZE; d++, b += e)
                      for (A = 0; A < n.BLOCK_SIZE; A++) w += 255 & t[b + A]
                }
                var m = w >> 2 * n.BLOCK_SIZE_POWER;
                if (y - v <= n.MIN_DYNAMIC_RANGE && (m = v / 2, a > 0 && c > 0)) {
                  var I = (s[a - 1][c] + 2 * s[a][c - 1] + s[a - 1][c - 1]) / 4;
                  I > v && (m = I)
                }
                s[a][c] = m
              }
            }
            return s
          }, n.BLOCK_SIZE_POWER = 3, n.BLOCK_SIZE = 1 << n.BLOCK_SIZE_POWER, n.BLOCK_SIZE_MASK = n.BLOCK_SIZE - 1, n.MINIMUM_DIMENSION = 5 * n.BLOCK_SIZE, n.MIN_DYNAMIC_RANGE = 24, n
        }(ut);
      const at = st;
      var ht = function() {
        function t(t, n) {
          this.width = t, this.height = n
        }
        return t.prototype.getWidth = function() {
          return this.width
        }, t.prototype.getHeight = function() {
          return this.height
        }, t.prototype.isCropSupported = function() {
          return !1
        }, t.prototype.crop = function(t, n, r, i) {
          throw new W("This luminance source does not support cropping.")
        }, t.prototype.isRotateSupported = function() {
          return !1
        }, t.prototype.rotateCounterClockwise = function() {
          throw new W("This luminance source does not support rotation by 90 degrees.")
        }, t.prototype.rotateCounterClockwise45 = function() {
          throw new W("This luminance source does not support rotation by 45 degrees.")
        }, t.prototype.toString = function() {
          for (var t = new Uint8ClampedArray(this.width), n = new Q, r = 0; r < this.height; r++) {
            for (var i = this.getRow(r, t), e = 0; e < this.width; e++) {
              var o, u = 255 & i[e];
              o = 64 > u ? "#" : 128 > u ? "+" : 192 > u ? "." : " ", n.append(o)
            }
            n.append("\n")
          }
          return n.toString()
        }, t
      }();
      const ct = ht;
      var lt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        wt = function(t) {
          function n(n) {
            var r = t.call(this, n.getWidth(), n.getHeight()) || this;
            return r.delegate = n, r
          }
          return lt(n, t), n.prototype.getRow = function(t, n) {
            for (var r = this.delegate.getRow(t, n), i = this.getWidth(), e = 0; i > e; e++) r[e] = 255 - (255 & r[e]);
            return r
          }, n.prototype.getMatrix = function() {
            for (var t = this.delegate.getMatrix(), n = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(n), i = 0; n > i; i++) r[i] = 255 - (255 & t[i]);
            return r
          }, n.prototype.isCropSupported = function() {
            return this.delegate.isCropSupported()
          }, n.prototype.crop = function(t, r, i, e) {
            return new n(this.delegate.crop(t, r, i, e))
          }, n.prototype.isRotateSupported = function() {
            return this.delegate.isRotateSupported()
          }, n.prototype.invert = function() {
            return this.delegate
          }, n.prototype.rotateCounterClockwise = function() {
            return new n(this.delegate.rotateCounterClockwise())
          }, n.prototype.rotateCounterClockwise45 = function() {
            return new n(this.delegate.rotateCounterClockwise45())
          }, n
        }(ct);
      const vt = wt;
      var yt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        dt = function(t) {
          function n(r, i) {
            void 0 === i && (i = !1);
            var e = t.call(this, r.width, r.height) || this;
            return e.canvas = r, e.tempCanvasElement = null, e.buffer = n.makeBufferFromCanvasImageData(r, i), e
          }
          return yt(n, t), n.makeBufferFromCanvasImageData = function(t, r) {
            void 0 === r && (r = !1);
            var i = t.getContext("2d").getImageData(0, 0, t.width, t.height);
            return n.toGrayscaleBuffer(i.data, t.width, t.height, r)
          }, n.toGrayscaleBuffer = function(t, r, i, e) {
            void 0 === e && (e = !1);
            var o = new Uint8ClampedArray(r * i);
            if (n.FRAME_INDEX = !n.FRAME_INDEX, n.FRAME_INDEX || !e)
              for (var u = 0, f = 0, s = t.length; s > u; u += 4, f++) {
                var a = void 0;
                a = 0 === t[u + 3] ? 255 : 306 * t[u] + 601 * t[u + 1] + 117 * t[u + 2] + 512 >> 10, o[f] = a
              } else {
                u = 0, f = 0;
                for (var h = t.length; h > u; u += 4, f++) a = void 0, a = 0 === t[u + 3] ? 255 : 306 * t[u] + 601 * t[u + 1] + 117 * t[u + 2] + 512 >> 10, o[f] = 255 - a
              }
            return o
          }, n.prototype.getRow = function(t, n) {
            if (0 > t || t >= this.getHeight()) throw new v("Requested row is outside the image: " + t);
            var r = this.getWidth(),
              i = t * r;
            return null === n ? n = this.buffer.slice(i, i + r) : (n.length < r && (n = new Uint8ClampedArray(r)), n.set(this.buffer.slice(i, i + r))), n
          }, n.prototype.getMatrix = function() {
            return this.buffer
          }, n.prototype.isCropSupported = function() {
            return !0
          }, n.prototype.crop = function(n, r, i, e) {
            return t.prototype.crop.call(this, n, r, i, e), this
          }, n.prototype.isRotateSupported = function() {
            return !0
          }, n.prototype.rotateCounterClockwise = function() {
            return this.rotate(-90), this
          }, n.prototype.rotateCounterClockwise45 = function() {
            return this.rotate(-45), this
          }, n.prototype.getTempCanvasElement = function() {
            if (null === this.tempCanvasElement) {
              var t = this.canvas.ownerDocument.createElement("canvas");
              t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
            }
            return this.tempCanvasElement
          }, n.prototype.rotate = function(t) {
            var r = this.getTempCanvasElement(),
              i = r.getContext("2d"),
              e = t * n.DEGREE_TO_RADIANS,
              o = this.canvas.width,
              u = this.canvas.height,
              f = Math.ceil(Math.abs(Math.cos(e)) * o + Math.abs(Math.sin(e)) * u),
              s = Math.ceil(Math.abs(Math.sin(e)) * o + Math.abs(Math.cos(e)) * u);
            return r.width = f, r.height = s, i.translate(f / 2, s / 2), i.rotate(e), i.drawImage(this.canvas, o / -2, u / -2), this.buffer = n.makeBufferFromCanvasImageData(r), this
          }, n.prototype.invert = function() {
            return new vt(this)
          }, n.DEGREE_TO_RADIANS = Math.PI / 180, n.FRAME_INDEX = !0, n
        }(ct),
        bt = function() {
          function t(t, n, r) {
            this.deviceId = t, this.label = n, this.kind = "videoinput", this.groupId = r || void 0
          }
          return t.prototype.toJSON = function() {
            return {
              kind: this.kind,
              groupId: this.groupId,
              deviceId: this.deviceId,
              label: this.label
            }
          }, t
        }(),
        At = function(t, n, r, i) {
          return new(r || (r = Promise))(function(e, o) {
            function u(t) {
              try {
                s(i.next(t))
              } catch (t) {
                o(t)
              }
            }

            function f(t) {
              try {
                s(i.throw(t))
              } catch (t) {
                o(t)
              }
            }

            function s(t) {
              t.done ? e(t.value) : function(t) {
                return t instanceof r ? t : new r(function(n) {
                  n(t)
                })
              }(t.value).then(u, f)
            }
            s((i = i.apply(t, n || [])).next())
          })
        },
        pt = function(t, n) {
          var r, i, e, o, u = {
            label: 0,
            sent: function() {
              if (1 & e[0]) throw e[1];
              return e[1]
            },
            trys: [],
            ops: []
          };
          return o = {
            next: f(0),
            throw: f(1),
            return: f(2)
          }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
          }), o;

          function f(o) {
            return function(f) {
              return function(o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u;) try {
                  if (r = 1, i && (e = 2 & o[0] ? i.return : o[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, o[1])).done) return e;
                  switch (i = 0, e && (o = [2 & o[0], e.value]), o[0]) {
                    case 0:
                    case 1:
                      e = o;
                      break;
                    case 4:
                      return u.label++, {
                        value: o[1],
                        done: !1
                      };
                    case 5:
                      u.label++, i = o[1], o = [0];
                      continue;
                    case 7:
                      o = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!(e = (e = u.trys).length > 0 && e[e.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        u = 0;
                        continue
                      }
                      if (3 === o[0] && (!e || o[1] > e[0] && o[1] < e[3])) {
                        u.label = o[1];
                        break
                      }
                      if (6 === o[0] && u.label < e[1]) {
                        u.label = e[1], e = o;
                        break
                      }
                      if (e && u.label < e[2]) {
                        u.label = e[2], u.ops.push(o);
                        break
                      }
                      e[2] && u.ops.pop(), u.trys.pop();
                      continue
                  }
                  o = n.call(t, u)
                } catch (t) {
                  o = [6, t], i = 0
                } finally {
                  r = e = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                  value: o[0] ? o[1] : void 0,
                  done: !0
                }
              }([o, f])
            }
          }
        },
        mt = function() {
          function t(t, n, r) {
            void 0 === n && (n = 500), this.reader = t, this.timeBetweenScansMillis = n, this._ = r, this.S = !1, this.O = !1, this.k = 0
          }
          return Object.defineProperty(t.prototype, "hasNavigator", {
            get: function() {
              return "u" > typeof navigator
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "isMediaDevicesSuported", {
            get: function() {
              return this.hasNavigator && !!navigator.mediaDevices
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "canEnumerateDevices", {
            get: function() {
              return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "timeBetweenDecodingAttempts", {
            get: function() {
              return this.k
            },
            set: function(t) {
              this.k = 0 > t ? 0 : t
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "hints", {
            get: function() {
              return this._
            },
            set: function(t) {
              this._ = t || null
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.listVideoInputDevices = function() {
            return At(this, void 0, void 0, function() {
              var t, n, r, i, e, o, u, f, s, a, h, c;
              return pt(this, function(l) {
                switch (l.label) {
                  case 0:
                    if (!this.hasNavigator) throw Error("Can't enumerate devices, navigator is not present.");
                    if (!this.canEnumerateDevices) throw Error("Can't enumerate devices, method not supported.");
                    return [4, navigator.mediaDevices.enumerateDevices()];
                  case 1:
                    t = l.sent(), n = [];
                    try {
                      for (r = function(t) {
                          var n = "function" == typeof Symbol && Symbol.iterator,
                            r = n && t[n],
                            i = 0;
                          if (r) return r.call(t);
                          if (t && "number" == typeof t.length) return {
                            next: function() {
                              return t && i >= t.length && (t = void 0), {
                                value: t && t[i++],
                                done: !t
                              }
                            }
                          };
                          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(t), i = r.next(); !i.done; i = r.next()) e = i.value, "videoinput" === (o = "video" === e.kind ? "videoinput" : e.kind) && (u = e.deviceId || e.id, f = e.label || "Video device " + (n.length + 1), s = e.groupId, a = {
                        deviceId: u,
                        label: f,
                        kind: o,
                        groupId: s
                      }, n.push(a))
                    } catch (t) {
                      h = {
                        error: t
                      }
                    } finally {
                      try {
                        i && !i.done && (c = r.return) && c.call(r)
                      } finally {
                        if (h) throw h.error
                      }
                    }
                    return [2, n]
                }
              })
            })
          }, t.prototype.getVideoInputDevices = function() {
            return At(this, void 0, void 0, function() {
              return pt(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.listVideoInputDevices()];
                  case 1:
                    return [2, t.sent().map(function(t) {
                      return new bt(t.deviceId, t.label)
                    })]
                }
              })
            })
          }, t.prototype.findDeviceById = function(t) {
            return At(this, void 0, void 0, function() {
              var n;
              return pt(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.listVideoInputDevices()];
                  case 1:
                    return (n = r.sent()) ? [2, n.find(function(n) {
                      return n.deviceId === t
                    })] : [2, null]
                }
              })
            })
          }, t.prototype.decodeFromInputVideoDevice = function(t, n) {
            return At(this, void 0, void 0, function() {
              return pt(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.decodeOnceFromVideoDevice(t, n)];
                  case 1:
                    return [2, r.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromVideoDevice = function(t, n) {
            return At(this, void 0, void 0, function() {
              var r;
              return pt(this, function(i) {
                switch (i.label) {
                  case 0:
                    return this.reset(), r = {
                      video: t ? {
                        deviceId: {
                          exact: t
                        }
                      } : {
                        facingMode: "environment"
                      }
                    }, [4, this.decodeOnceFromConstraints(r, n)];
                  case 1:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromConstraints = function(t, n) {
            return At(this, void 0, void 0, function() {
              var r;
              return pt(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(t)];
                  case 1:
                    return r = i.sent(), [4, this.decodeOnceFromStream(r, n)];
                  case 2:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromStream = function(t, n) {
            return At(this, void 0, void 0, function() {
              var r;
              return pt(this, function(i) {
                switch (i.label) {
                  case 0:
                    return this.reset(), [4, this.attachStreamToVideo(t, n)];
                  case 1:
                    return r = i.sent(), [4, this.decodeOnce(r)];
                  case 2:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeFromInputVideoDeviceContinuously = function(t, n, r) {
            return At(this, void 0, void 0, function() {
              return pt(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, this.decodeFromVideoDevice(t, n, r)];
                  case 1:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeFromVideoDevice = function(t, n, r) {
            return At(this, void 0, void 0, function() {
              var i;
              return pt(this, function(e) {
                switch (e.label) {
                  case 0:
                    return i = {
                      video: t ? {
                        deviceId: {
                          exact: t
                        }
                      } : {
                        facingMode: "environment"
                      }
                    }, [4, this.decodeFromConstraints(i, n, r)];
                  case 1:
                    return [2, e.sent()]
                }
              })
            })
          }, t.prototype.decodeFromConstraints = function(t, n, r) {
            return At(this, void 0, void 0, function() {
              var i;
              return pt(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(t)];
                  case 1:
                    return i = e.sent(), [4, this.decodeFromStream(i, n, r)];
                  case 2:
                    return [2, e.sent()]
                }
              })
            })
          }, t.prototype.decodeFromStream = function(t, n, r) {
            return At(this, void 0, void 0, function() {
              var i;
              return pt(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.reset(), [4, this.attachStreamToVideo(t, n)];
                  case 1:
                    return i = e.sent(), [4, this.decodeContinuously(i, r)];
                  case 2:
                    return [2, e.sent()]
                }
              })
            })
          }, t.prototype.stopAsyncDecode = function() {
            this.O = !0
          }, t.prototype.stopContinuousDecode = function() {
            this.S = !0
          }, t.prototype.attachStreamToVideo = function(t, n) {
            return At(this, void 0, void 0, function() {
              var r;
              return pt(this, function(i) {
                switch (i.label) {
                  case 0:
                    return r = this.prepareVideoElement(n), this.addVideoSource(r, t), this.videoElement = r, this.stream = t, [4, this.playVideoOnLoadAsync(r)];
                  case 1:
                    return i.sent(), [2, r]
                }
              })
            })
          }, t.prototype.playVideoOnLoadAsync = function(t) {
            var n = this;
            return new Promise(function(r, i) {
              return n.playVideoOnLoad(t, function() {
                return r()
              })
            })
          }, t.prototype.playVideoOnLoad = function(t, n) {
            var r = this;
            this.videoEndedListener = function() {
              return r.stopStreams()
            }, this.videoCanPlayListener = function() {
              return r.tryPlayVideo(t)
            }, t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener("playing", n), this.tryPlayVideo(t)
          }, t.prototype.isVideoPlaying = function(t) {
            return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2
          }, t.prototype.tryPlayVideo = function(t) {
            return At(this, void 0, void 0, function() {
              return pt(this, function(n) {
                switch (n.label) {
                  case 0:
                    if (this.isVideoPlaying(t)) return console.warn("Trying to play video that is already playing."), [2];
                    n.label = 1;
                  case 1:
                    return n.trys.push([1, 3, , 4]), [4, t.play()];
                  case 2:
                    return n.sent(), [3, 4];
                  case 3:
                    return n.sent(), console.warn("It was not possible to play the video."), [3, 4];
                  case 4:
                    return [2]
                }
              })
            })
          }, t.prototype.getMediaElement = function(t, n) {
            var r = document.getElementById(t);
            if (!r) throw new c("element with id '" + t + "' not found");
            if (r.nodeName.toLowerCase() !== n.toLowerCase()) throw new c("element with id '" + t + "' must be an " + n + " element");
            return r
          }, t.prototype.decodeFromImage = function(t, n) {
            if (!t && !n) throw new c("either imageElement with a src set or an url must be provided");
            return n && !t ? this.decodeFromImageUrl(n) : this.decodeFromImageElement(t)
          }, t.prototype.decodeFromVideo = function(t, n) {
            if (!t && !n) throw new c("Either an element with a src set or an URL must be provided");
            return n && !t ? this.decodeFromVideoUrl(n) : this.decodeFromVideoElement(t)
          }, t.prototype.decodeFromVideoContinuously = function(t, n, r) {
            if (void 0 === t && void 0 === n) throw new c("Either an element with a src set or an URL must be provided");
            return n && !t ? this.decodeFromVideoUrlContinuously(n, r) : this.decodeFromVideoElementContinuously(t, r)
          }, t.prototype.decodeFromImageElement = function(t) {
            if (!t) throw new c("An image element must be provided.");
            this.reset();
            var n = this.prepareImageElement(t);
            return this.imageElement = n, this.isImageLoaded(n) ? this.decodeOnce(n, !1, !0) : this.T(n)
          }, t.prototype.decodeFromVideoElement = function(t) {
            var n = this.j(t);
            return this.C(n)
          }, t.prototype.decodeFromVideoElementContinuously = function(t, n) {
            var r = this.j(t);
            return this.R(r, n)
          }, t.prototype.j = function(t) {
            if (!t) throw new c("A video element must be provided.");
            this.reset();
            var n = this.prepareVideoElement(t);
            return this.videoElement = n, n
          }, t.prototype.decodeFromImageUrl = function(t) {
            if (!t) throw new c("An URL must be provided.");
            this.reset();
            var n = this.prepareImageElement();
            this.imageElement = n;
            var r = this.T(n);
            return n.src = t, r
          }, t.prototype.decodeFromVideoUrl = function(t) {
            if (!t) throw new c("An URL must be provided.");
            this.reset();
            var n = this.prepareVideoElement(),
              r = this.decodeFromVideoElement(n);
            return n.src = t, r
          }, t.prototype.decodeFromVideoUrlContinuously = function(t, n) {
            if (!t) throw new c("An URL must be provided.");
            this.reset();
            var r = this.prepareVideoElement(),
              i = this.decodeFromVideoElementContinuously(r, n);
            return r.src = t, i
          }, t.prototype.T = function(t) {
            var n = this;
            return new Promise(function(r, i) {
              n.imageLoadedListener = function() {
                return n.decodeOnce(t, !1, !0).then(r, i)
              }, t.addEventListener("load", n.imageLoadedListener)
            })
          }, t.prototype.C = function(t) {
            return At(this, void 0, void 0, function() {
              return pt(this, function(n) {
                switch (n.label) {
                  case 0:
                    return [4, this.playVideoOnLoadAsync(t)];
                  case 1:
                    return n.sent(), [4, this.decodeOnce(t)];
                  case 2:
                    return [2, n.sent()]
                }
              })
            })
          }, t.prototype.R = function(t, n) {
            return At(this, void 0, void 0, function() {
              return pt(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, this.playVideoOnLoadAsync(t)];
                  case 1:
                    return r.sent(), this.decodeContinuously(t, n), [2]
                }
              })
            })
          }, t.prototype.isImageLoaded = function(t) {
            return !(!t.complete || 0 === t.naturalWidth)
          }, t.prototype.prepareImageElement = function(t) {
            var n;
            return typeof t > "u" && ((n = document.createElement("img")).width = 200, n.height = 200), "string" == typeof t && (n = this.getMediaElement(t, "img")), t instanceof HTMLImageElement && (n = t), n
          }, t.prototype.prepareVideoElement = function(t) {
            var n;
            return !t && "u" > typeof document && ((n = document.createElement("video")).width = 200, n.height = 200), "string" == typeof t && (n = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (n = t), n.setAttribute("autoplay", "true"), n.setAttribute("muted", "true"), n.setAttribute("playsinline", "true"), n
          }, t.prototype.decodeOnce = function(t, n, r) {
            var i = this;
            void 0 === n && (n = !0), void 0 === r && (r = !0), this.O = !1;
            var e = function(o, u) {
              if (i.O) return u(new it("Video stream has ended before any code could be detected.")), void(i.O = void 0);
              try {
                o(i.decode(t))
              } catch (t) {
                if (n && t instanceof it || (t instanceof p || t instanceof F) && r) return setTimeout(e, i.k, o, u);
                u(t)
              }
            };
            return new Promise(function(t, n) {
              return e(t, n)
            })
          }, t.prototype.decodeContinuously = function(t, n) {
            var r = this;
            this.S = !1;
            var i = function() {
              if (r.S) r.S = void 0;
              else try {
                var e = r.decode(t);
                n(e, null), setTimeout(i, r.timeBetweenScansMillis)
              } catch (t) {
                n(null, t), (t instanceof p || t instanceof F || t instanceof it) && setTimeout(i, r.k)
              }
            };
            i()
          }, t.prototype.decode = function(t) {
            var n = this.createBinaryBitmap(t);
            return this.decodeBitmap(n)
          }, t.prototype.createBinaryBitmap = function(t) {
            this.getCaptureCanvasContext(t);
            var n = !1;
            t instanceof HTMLVideoElement ? (this.drawFrameOnCanvas(t), n = !0) : this.drawImageOnCanvas(t);
            var r = this.getCaptureCanvas(t),
              i = new dt(r, n),
              e = new at(i);
            return new d(e)
          }, t.prototype.getCaptureCanvasContext = function(t) {
            if (!this.captureCanvasContext) {
              var n = this.getCaptureCanvas(t),
                r = void 0;
              try {
                r = n.getContext("2d", {
                  willReadFrequently: !0
                })
              } catch {
                r = n.getContext("2d")
              }
              this.captureCanvasContext = r
            }
            return this.captureCanvasContext
          }, t.prototype.getCaptureCanvas = function(t) {
            if (!this.captureCanvas) {
              var n = this.createCaptureCanvas(t);
              this.captureCanvas = n
            }
            return this.captureCanvas
          }, t.prototype.drawFrameOnCanvas = function(t, n, r) {
            void 0 === n && (n = {
              sx: 0,
              sy: 0,
              sWidth: t.videoWidth,
              sHeight: t.videoHeight,
              dx: 0,
              dy: 0,
              dWidth: t.videoWidth,
              dHeight: t.videoHeight
            }), void 0 === r && (r = this.captureCanvasContext), r.drawImage(t, n.sx, n.sy, n.sWidth, n.sHeight, n.dx, n.dy, n.dWidth, n.dHeight)
          }, t.prototype.drawImageOnCanvas = function(t, n, r) {
            void 0 === n && (n = {
              sx: 0,
              sy: 0,
              sWidth: t.naturalWidth,
              sHeight: t.naturalHeight,
              dx: 0,
              dy: 0,
              dWidth: t.naturalWidth,
              dHeight: t.naturalHeight
            }), void 0 === r && (r = this.captureCanvasContext), r.drawImage(t, n.sx, n.sy, n.sWidth, n.sHeight, n.dx, n.dy, n.dWidth, n.dHeight)
          }, t.prototype.decodeBitmap = function(t) {
            return this.reader.decode(t, this._)
          }, t.prototype.createCaptureCanvas = function(t) {
            if (typeof document > "u") return this.N(), null;
            var n, r, i = document.createElement("canvas");
            return "u" > typeof t && (t instanceof HTMLVideoElement ? (n = t.videoWidth, r = t.videoHeight) : t instanceof HTMLImageElement && (n = t.naturalWidth || t.width, r = t.naturalHeight || t.height)), i.style.width = n + "px", i.style.height = r + "px", i.width = n, i.height = r, i
          }, t.prototype.stopStreams = function() {
            this.stream && (this.stream.getVideoTracks().forEach(function(t) {
              return t.stop()
            }), this.stream = void 0), !1 === this.O && this.stopAsyncDecode(), !1 === this.S && this.stopContinuousDecode()
          }, t.prototype.reset = function() {
            this.stopStreams(), this.U(), this.D(), this.N()
          }, t.prototype.U = function() {
            this.videoElement && ("u" > typeof this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), "u" > typeof this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), "u" > typeof this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0)
          }, t.prototype.D = function() {
            this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0)
          }, t.prototype.N = function() {
            this.captureCanvasContext = void 0, this.captureCanvas = void 0
          }, t.prototype.addVideoSource = function(t, n) {
            try {
              t.srcObject = n
            } catch {
              t.src = URL.createObjectURL(n)
            }
          }, t.prototype.cleanVideoSource = function(t) {
            try {
              t.srcObject = null
            } catch {
              t.src = ""
            }
            this.videoElement.removeAttribute("src")
          }, t
        }(),
        It = function() {
          function t(t, n, r, i, e, o) {
            void 0 === r && (r = null == n ? 0 : 8 * n.length), void 0 === o && (o = g.currentTimeMillis()), this.text = t, this.rawBytes = n, this.numBits = r, this.resultPoints = i, this.format = e, this.timestamp = o, this.text = t, this.rawBytes = n, this.numBits = null == r ? null == n ? 0 : 8 * n.length : r, this.resultPoints = i, this.format = e, this.resultMetadata = null, this.timestamp = null == o ? g.currentTimeMillis() : o
          }
          return t.prototype.getText = function() {
            return this.text
          }, t.prototype.getRawBytes = function() {
            return this.rawBytes
          }, t.prototype.getNumBits = function() {
            return this.numBits
          }, t.prototype.getResultPoints = function() {
            return this.resultPoints
          }, t.prototype.getBarcodeFormat = function() {
            return this.format
          }, t.prototype.getResultMetadata = function() {
            return this.resultMetadata
          }, t.prototype.putMetadata = function(t, n) {
            null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, n)
          }, t.prototype.putAllMetadata = function(t) {
            null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
          }, t.prototype.addResultPoints = function(t) {
            var n = this.resultPoints;
            if (null === n) this.resultPoints = t;
            else if (null !== t && t.length > 0) {
              var r = Array(n.length + t.length);
              g.arraycopy(n, 0, r, 0, n.length), g.arraycopy(t, 0, r, n.length, t.length), this.resultPoints = r
            }
          }, t.prototype.getTimestamp = function() {
            return this.timestamp
          }, t.prototype.toString = function() {
            return this.text
          }, t
        }();
      const _t = It;
      var gt;
      ! function(t) {
        t[t.AZTEC = 0] = "AZTEC", t[t.CODABAR = 1] = "CODABAR", t[t.CODE_39 = 2] = "CODE_39", t[t.CODE_93 = 3] = "CODE_93", t[t.CODE_128 = 4] = "CODE_128", t[t.DATA_MATRIX = 5] = "DATA_MATRIX", t[t.EAN_8 = 6] = "EAN_8", t[t.EAN_13 = 7] = "EAN_13", t[t.ITF = 8] = "ITF", t[t.MAXICODE = 9] = "MAXICODE", t[t.PDF_417 = 10] = "PDF_417", t[t.QR_CODE = 11] = "QR_CODE", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
      }(gt || (gt = {}));
      const St = gt;
      var Mt;
      ! function(t) {
        t[t.OTHER = 0] = "OTHER", t[t.ORIENTATION = 1] = "ORIENTATION", t[t.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t[t.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t[t.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t[t.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t[t.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t[t.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t[t.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t[t.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t[t.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
      }(Mt || (Mt = {}));
      const Et = Mt;
      var Ot = function() {
        function t(t, n, r, i, e, o) {
          void 0 === e && (e = -1), void 0 === o && (o = -1), this.rawBytes = t, this.text = n, this.byteSegments = r, this.ecLevel = i, this.structuredAppendSequenceNumber = e, this.structuredAppendParity = o, this.numBits = null == t ? 0 : 8 * t.length
        }
        return t.prototype.getRawBytes = function() {
          return this.rawBytes
        }, t.prototype.getNumBits = function() {
          return this.numBits
        }, t.prototype.setNumBits = function(t) {
          this.numBits = t
        }, t.prototype.getText = function() {
          return this.text
        }, t.prototype.getByteSegments = function() {
          return this.byteSegments
        }, t.prototype.getECLevel = function() {
          return this.ecLevel
        }, t.prototype.getErrorsCorrected = function() {
          return this.errorsCorrected
        }, t.prototype.setErrorsCorrected = function(t) {
          this.errorsCorrected = t
        }, t.prototype.getErasures = function() {
          return this.erasures
        }, t.prototype.setErasures = function(t) {
          this.erasures = t
        }, t.prototype.getOther = function() {
          return this.other
        }, t.prototype.setOther = function(t) {
          this.other = t
        }, t.prototype.hasStructuredAppend = function() {
          return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
        }, t.prototype.getStructuredAppendParity = function() {
          return this.structuredAppendParity
        }, t.prototype.getStructuredAppendSequenceNumber = function() {
          return this.structuredAppendSequenceNumber
        }, t
      }();
      const kt = Ot;
      var Tt = function() {
        function t() {}
        return t.prototype.exp = function(t) {
          return this.expTable[t]
        }, t.prototype.log = function(t) {
          if (0 === t) throw new v;
          return this.logTable[t]
        }, t.addOrSubtract = function(t, n) {
          return t ^ n
        }, t
      }();
      const jt = Tt;
      var xt = function() {
        function t(t, n) {
          if (0 === n.length) throw new v;
          this.field = t;
          var r = n.length;
          if (r > 1 && 0 === n[0]) {
            for (var i = 1; r > i && 0 === n[i];) i++;
            i === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - i), g.arraycopy(n, i, this.coefficients, 0, this.coefficients.length))
          } else this.coefficients = n
        }
        return t.prototype.getCoefficients = function() {
          return this.coefficients
        }, t.prototype.getDegree = function() {
          return this.coefficients.length - 1
        }, t.prototype.isZero = function() {
          return 0 === this.coefficients[0]
        }, t.prototype.getCoefficient = function(t) {
          return this.coefficients[this.coefficients.length - 1 - t]
        }, t.prototype.evaluateAt = function(t) {
          if (0 === t) return this.getCoefficient(0);
          var n, r = this.coefficients;
          if (1 === t) {
            n = 0;
            for (var i = 0, e = r.length; i !== e; i++) {
              var o = r[i];
              n = jt.addOrSubtract(n, o)
            }
            return n
          }
          n = r[0];
          var u = r.length,
            f = this.field;
          for (i = 1; u > i; i++) n = jt.addOrSubtract(f.multiply(t, n), r[i]);
          return n
        }, t.prototype.addOrSubtract = function(n) {
          if (!this.field.equals(n.field)) throw new v("GenericGFPolys do not have same GenericGF field");
          if (this.isZero()) return n;
          if (n.isZero()) return this;
          var r = this.coefficients,
            i = n.coefficients;
          if (r.length > i.length) {
            var e = r;
            r = i, i = e
          }
          var o = new Int32Array(i.length),
            u = i.length - r.length;
          g.arraycopy(i, 0, o, 0, u);
          for (var f = u; f < i.length; f++) o[f] = jt.addOrSubtract(r[f - u], i[f]);
          return new t(this.field, o)
        }, t.prototype.multiply = function(n) {
          if (!this.field.equals(n.field)) throw new v("GenericGFPolys do not have same GenericGF field");
          if (this.isZero() || n.isZero()) return this.field.getZero();
          for (var r = this.coefficients, i = r.length, e = n.coefficients, o = e.length, u = new Int32Array(i + o - 1), f = this.field, s = 0; i > s; s++)
            for (var a = r[s], h = 0; o > h; h++) u[s + h] = jt.addOrSubtract(u[s + h], f.multiply(a, e[h]));
          return new t(f, u)
        }, t.prototype.multiplyScalar = function(n) {
          if (0 === n) return this.field.getZero();
          if (1 === n) return this;
          for (var r = this.coefficients.length, i = this.field, e = new Int32Array(r), o = this.coefficients, u = 0; r > u; u++) e[u] = i.multiply(o[u], n);
          return new t(i, e)
        }, t.prototype.multiplyByMonomial = function(n, r) {
          if (0 > n) throw new v;
          if (0 === r) return this.field.getZero();
          for (var i = this.coefficients, e = i.length, o = new Int32Array(e + n), u = this.field, f = 0; e > f; f++) o[f] = u.multiply(i[f], r);
          return new t(u, o)
        }, t.prototype.divide = function(t) {
          if (!this.field.equals(t.field)) throw new v("GenericGFPolys do not have same GenericGF field");
          if (t.isZero()) throw new v("Divide by 0");
          for (var n = this.field, r = n.getZero(), i = this, e = t.getCoefficient(t.getDegree()), o = n.inverse(e); i.getDegree() >= t.getDegree() && !i.isZero();) {
            var u = i.getDegree() - t.getDegree(),
              f = n.multiply(i.getCoefficient(i.getDegree()), o),
              s = t.multiplyByMonomial(u, f),
              a = n.buildMonomial(u, f);
            r = r.addOrSubtract(a), i = i.addOrSubtract(s)
          }
          return [r, i]
        }, t.prototype.toString = function() {
          for (var t = "", n = this.getDegree(); n >= 0; n--) {
            var r = this.getCoefficient(n);
            if (0 !== r) {
              if (0 > r ? (t += " - ", r = -r) : t.length > 0 && (t += " + "), 0 === n || 1 !== r) {
                var i = this.field.log(r);
                0 === i ? t += "1" : 1 === i ? t += "a" : (t += "a^", t += i)
              }
              0 !== n && (1 === n ? t += "x" : (t += "x^", t += n))
            }
          }
          return t
        }, t
      }();
      const Ct = xt;
      var Rt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Nt = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Rt(n, t), n.kind = "ArithmeticException", n
        }(s);
      const Ut = Nt;
      var Dt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Bt = function(t) {
          function n(n, r, i) {
            var e = t.call(this) || this;
            e.primitive = n, e.size = r, e.generatorBase = i;
            for (var o = new Int32Array(r), u = 1, f = 0; r > f; f++) o[f] = u, (u *= 2) >= r && (u ^= n, u &= r - 1);
            e.expTable = o;
            var s = new Int32Array(r);
            for (f = 0; r - 1 > f; f++) s[o[f]] = f;
            return e.logTable = s, e.zero = new Ct(e, Int32Array.from([0])), e.one = new Ct(e, Int32Array.from([1])), e
          }
          return Dt(n, t), n.prototype.getZero = function() {
            return this.zero
          }, n.prototype.getOne = function() {
            return this.one
          }, n.prototype.buildMonomial = function(t, n) {
            if (0 > t) throw new v;
            if (0 === n) return this.zero;
            var r = new Int32Array(t + 1);
            return r[0] = n, new Ct(this, r)
          }, n.prototype.inverse = function(t) {
            if (0 === t) throw new Ut;
            return this.expTable[this.size - this.logTable[t] - 1]
          }, n.prototype.multiply = function(t, n) {
            return 0 === t || 0 === n ? 0 : this.expTable[(this.logTable[t] + this.logTable[n]) % (this.size - 1)]
          }, n.prototype.getSize = function() {
            return this.size
          }, n.prototype.getGeneratorBase = function() {
            return this.generatorBase
          }, n.prototype.toString = function() {
            return "GF(0x" + R.toHexString(this.primitive) + "," + this.size + ")"
          }, n.prototype.equals = function(t) {
            return t === this
          }, n.AZTEC_DATA_12 = new n(4201, 4096, 1), n.AZTEC_DATA_10 = new n(1033, 1024, 1), n.AZTEC_DATA_6 = new n(67, 64, 1), n.AZTEC_PARAM = new n(19, 16, 1), n.QR_CODE_FIELD_256 = new n(285, 256, 0), n.DATA_MATRIX_FIELD_256 = new n(301, 256, 1), n.AZTEC_DATA_8 = n.DATA_MATRIX_FIELD_256, n.MAXICODE_FIELD_64 = n.AZTEC_DATA_6, n
        }(jt);
      const Pt = Bt;
      var Lt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ft = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Lt(n, t), n.kind = "ReedSolomonException", n
        }(s);
      const Gt = Ft;
      var zt = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ht = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return zt(n, t), n.kind = "IllegalStateException", n
        }(s);
      const qt = Ht;
      var Xt = function() {
        function t(t) {
          this.field = t
        }
        return t.prototype.decode = function(t, n) {
          for (var r = this.field, i = new Ct(r, t), e = new Int32Array(n), o = !0, u = 0; n > u; u++) {
            var f = i.evaluateAt(r.exp(u + r.getGeneratorBase()));
            e[e.length - 1 - u] = f, 0 !== f && (o = !1)
          }
          if (!o) {
            var s = new Ct(r, e),
              a = this.runEuclideanAlgorithm(r.buildMonomial(n, 1), s, n),
              h = a[0],
              c = a[1],
              l = this.findErrorLocations(h),
              w = this.findErrorMagnitudes(c, l);
            for (u = 0; u < l.length; u++) {
              var v = t.length - 1 - r.log(l[u]);
              if (0 > v) throw new Gt("Bad error location");
              t[v] = Pt.addOrSubtract(t[v], w[u])
            }
          }
        }, t.prototype.runEuclideanAlgorithm = function(t, n, r) {
          if (t.getDegree() < n.getDegree()) {
            var i = t;
            t = n, n = i
          }
          for (var e = this.field, o = t, u = n, f = e.getZero(), s = e.getOne(); u.getDegree() >= (r / 2 | 0);) {
            var a = o,
              h = f;
            if (f = s, (o = u).isZero()) throw new Gt("r_{i-1} was zero");
            u = a;
            for (var c = e.getZero(), l = o.getCoefficient(o.getDegree()), w = e.inverse(l); u.getDegree() >= o.getDegree() && !u.isZero();) {
              var v = u.getDegree() - o.getDegree(),
                y = e.multiply(u.getCoefficient(u.getDegree()), w);
              c = c.addOrSubtract(e.buildMonomial(v, y)), u = u.addOrSubtract(o.multiplyByMonomial(v, y))
            }
            if (s = c.multiply(f).addOrSubtract(h), u.getDegree() >= o.getDegree()) throw new qt("Division algorithm failed to reduce polynomial?")
          }
          var d = s.getCoefficient(0);
          if (0 === d) throw new Gt("sigmaTilde(0) was zero");
          var b = e.inverse(d);
          return [s.multiplyScalar(b), u.multiplyScalar(b)]
        }, t.prototype.findErrorLocations = function(t) {
          var n = t.getDegree();
          if (1 === n) return Int32Array.from([t.getCoefficient(1)]);
          for (var r = new Int32Array(n), i = 0, e = this.field, o = 1; o < e.getSize() && n > i; o++) 0 === t.evaluateAt(o) && (r[i] = e.inverse(o), i++);
          if (i !== n) throw new Gt("Error locator degree does not match number of roots");
          return r
        }, t.prototype.findErrorMagnitudes = function(t, n) {
          for (var r = n.length, i = new Int32Array(r), e = this.field, o = 0; r > o; o++) {
            for (var u = e.inverse(n[o]), f = 1, s = 0; r > s; s++)
              if (o !== s) {
                var a = e.multiply(n[s], u),
                  h = 1 & a ? -2 & a : 1 | a;
                f = e.multiply(f, h)
              } i[o] = e.multiply(t.evaluateAt(u), e.inverse(f)), 0 !== e.getGeneratorBase() && (i[o] = e.multiply(i[o], u))
          }
          return i
        }, t
      }();
      const Wt = Xt;
      var $t;
      ! function(t) {
        t[t.UPPER = 0] = "UPPER", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.DIGIT = 3] = "DIGIT", t[t.PUNCT = 4] = "PUNCT", t[t.BINARY = 5] = "BINARY"
      }($t || ($t = {}));
      var Kt = function() {
        function t() {}
        return t.prototype.decode = function(n) {
          this.ddata = n;
          var r = n.getBits(),
            i = this.extractBits(r),
            e = this.correctBits(i),
            o = t.convertBoolArrayToByteArray(e),
            u = t.getEncodedData(e),
            f = new kt(o, u, null, null);
          return f.setNumBits(e.length), f
        }, t.highLevelDecode = function(t) {
          return this.getEncodedData(t)
        }, t.getEncodedData = function(n) {
          for (var r = n.length, i = $t.UPPER, e = $t.UPPER, o = "", u = 0; r > u;)
            if (e === $t.BINARY) {
              if (5 > r - u) break;
              var f = t.readCode(n, u, 5);
              if (u += 5, 0 === f) {
                if (11 > r - u) break;
                f = t.readCode(n, u, 11) + 31, u += 11
              }
              for (var s = 0; f > s; s++) {
                if (8 > r - u) {
                  u = r;
                  break
                }
                var a = t.readCode(n, u, 8);
                o += Z.castAsNonUtf8Char(a), u += 8
              }
              e = i
            } else {
              var h = e === $t.DIGIT ? 4 : 5;
              if (h > r - u) break;
              a = t.readCode(n, u, h), u += h;
              var c = t.getCharacter(e, a);
              c.startsWith("CTRL_") ? (i = e, e = t.getTable(c.charAt(5)), "L" === c.charAt(6) && (i = e)) : (o += c, e = i)
            } return o
        }, t.getTable = function(t) {
          switch (t) {
            case "L":
              return $t.LOWER;
            case "P":
              return $t.PUNCT;
            case "M":
              return $t.MIXED;
            case "D":
              return $t.DIGIT;
            case "B":
              return $t.BINARY;
            default:
              return $t.UPPER
          }
        }, t.getCharacter = function(n, r) {
          switch (n) {
            case $t.UPPER:
              return t.UPPER_TABLE[r];
            case $t.LOWER:
              return t.LOWER_TABLE[r];
            case $t.MIXED:
              return t.MIXED_TABLE[r];
            case $t.PUNCT:
              return t.PUNCT_TABLE[r];
            case $t.DIGIT:
              return t.DIGIT_TABLE[r];
            default:
              throw new qt("Bad table")
          }
        }, t.prototype.correctBits = function(n) {
          var r, i;
          this.ddata.getNbLayers() > 2 ? this.ddata.getNbLayers() > 8 ? this.ddata.getNbLayers() > 22 ? (i = 12, r = Pt.AZTEC_DATA_12) : (i = 10, r = Pt.AZTEC_DATA_10) : (i = 8, r = Pt.AZTEC_DATA_8) : (i = 6, r = Pt.AZTEC_DATA_6);
          var e = this.ddata.getNbDatablocks(),
            o = n.length / i;
          if (e > o) throw new F;
          for (var u = n.length % i, f = new Int32Array(o), s = 0; o > s; s++, u += i) f[s] = t.readCode(n, u, i);
          try {
            new Wt(r).decode(f, o - e)
          } catch (t) {
            throw new F(t)
          }
          var a = (1 << i) - 1,
            h = 0;
          for (s = 0; e > s; s++) {
            if (0 === (w = f[s]) || w === a) throw new F;
            (1 === w || w === a - 1) && h++
          }
          var c = Array(e * i - h),
            l = 0;
          for (s = 0; e > s; s++) {
            var w;
            if (1 === (w = f[s]) || w === a - 1) c.fill(w > 1, l, l + i - 1), l += i - 1;
            else
              for (var v = i - 1; v >= 0; --v) c[l++] = !!(w & 1 << v)
          }
          return c
        }, t.prototype.extractBits = function(t) {
          var n = this.ddata.isCompact(),
            r = this.ddata.getNbLayers(),
            i = (n ? 11 : 14) + 4 * r,
            e = new Int32Array(i),
            o = Array(this.totalBitsInLayer(r, n));
          if (n)
            for (var u = 0; u < e.length; u++) e[u] = u;
          else {
            var f = i + 1 + 2 * R.truncDivision(R.truncDivision(i, 2) - 1, 15),
              s = i / 2,
              a = R.truncDivision(f, 2);
            for (u = 0; s > u; u++) {
              var h = u + R.truncDivision(u, 15);
              e[s - u - 1] = a - h - 1, e[s + u] = a + h + 1
            }
          }
          u = 0;
          for (var c = 0; r > u; u++) {
            for (var l = 4 * (r - u) + (n ? 9 : 12), w = 2 * u, v = i - 1 - w, y = 0; l > y; y++)
              for (var d = 2 * y, b = 0; 2 > b; b++) o[c + d + b] = t.get(e[w + b], e[w + y]), o[c + 2 * l + d + b] = t.get(e[w + y], e[v - b]), o[c + 4 * l + d + b] = t.get(e[v - b], e[v - y]), o[c + 6 * l + d + b] = t.get(e[v - y], e[w + b]);
            c += 8 * l
          }
          return o
        }, t.readCode = function(t, n, r) {
          for (var i = 0, e = n; n + r > e; e++) i <<= 1, t[e] && (i |= 1);
          return i
        }, t.readByte = function(n, r) {
          var i = n.length - r;
          return 8 > i ? t.readCode(n, r, i) << 8 - i : t.readCode(n, r, 8)
        }, t.convertBoolArrayToByteArray = function(n) {
          for (var r = new Uint8Array((n.length + 7) / 8), i = 0; i < r.length; i++) r[i] = t.readByte(n, 8 * i);
          return r
        }, t.prototype.totalBitsInLayer = function(t, n) {
          return ((n ? 88 : 112) + 16 * t) * t
        }, t.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t.MIXED_TABLE = ["CTRL_PS", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", "", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], t.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], t.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"], t
      }();
      const Vt = Kt;
      var Zt = function() {
        function t() {}
        return t.round = function(t) {
          return isNaN(t) ? 0 : t > Number.MIN_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER > t ? t + (0 > t ? -.5 : .5) | 0 : Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER
        }, t.distance = function(t, n, r, i) {
          var e = t - r,
            o = n - i;
          return Math.sqrt(e * e + o * o)
        }, t.sum = function(t) {
          for (var n = 0, r = 0, i = t.length; r !== i; r++) n += t[r];
          return n
        }, t
      }();
      const Jt = Zt;
      var Qt = function() {
        function t() {}
        return t.floatToIntBits = function(t) {
          return t
        }, t.MAX_VALUE = Number.MAX_SAFE_INTEGER, t
      }();
      const Yt = Qt;
      var tn = function() {
        function t(t, n) {
          this.x = t, this.y = n
        }
        return t.prototype.getX = function() {
          return this.x
        }, t.prototype.getY = function() {
          return this.y
        }, t.prototype.equals = function(n) {
          if (n instanceof t) {
            var r = n;
            return this.x === r.x && this.y === r.y
          }
          return !1
        }, t.prototype.hashCode = function() {
          return 31 * Yt.floatToIntBits(this.x) + Yt.floatToIntBits(this.y)
        }, t.prototype.toString = function() {
          return "(" + this.x + "," + this.y + ")"
        }, t.orderBestPatterns = function(t) {
          var n, r, i, e = this.distance(t[0], t[1]),
            o = this.distance(t[1], t[2]),
            u = this.distance(t[0], t[2]);
          if (e > o || u > o ? o > u || e > u ? (r = t[2], n = t[0], i = t[1]) : (r = t[1], n = t[0], i = t[2]) : (r = t[0], n = t[1], i = t[2]), 0 > this.crossProductZ(n, r, i)) {
            var f = n;
            n = i, i = f
          }
          t[0] = n, t[1] = r, t[2] = i
        }, t.distance = function(t, n) {
          return Jt.distance(t.x, t.y, n.x, n.y)
        }, t.crossProductZ = function(t, n, r) {
          var i = n.x,
            e = n.y;
          return (r.x - i) * (t.y - e) - (r.y - e) * (t.x - i)
        }, t
      }();
      const nn = tn;
      var rn = function() {
        function t(t, n) {
          this.bits = t, this.points = n
        }
        return t.prototype.getBits = function() {
          return this.bits
        }, t.prototype.getPoints = function() {
          return this.points
        }, t
      }();
      const en = rn;
      var on = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        un = function(t) {
          function n(n, r, i, e, o) {
            var u = t.call(this, n, r) || this;
            return u.compact = i, u.nbDatablocks = e, u.nbLayers = o, u
          }
          return on(n, t), n.prototype.getNbLayers = function() {
            return this.nbLayers
          }, n.prototype.getNbDatablocks = function() {
            return this.nbDatablocks
          }, n.prototype.isCompact = function() {
            return this.compact
          }, n
        }(en);
      const fn = un;
      var sn = function() {
        function t(n, r, i, e) {
          this.image = n, this.height = n.getHeight(), this.width = n.getWidth(), null == r && (r = t.INIT_SIZE), null == i && (i = n.getWidth() / 2 | 0), null == e && (e = n.getHeight() / 2 | 0);
          var o = r / 2 | 0;
          if (this.leftInit = i - o, this.rightInit = i + o, this.upInit = e - o, this.downInit = e + o, 0 > this.upInit || 0 > this.leftInit || this.downInit >= this.height || this.rightInit >= this.width) throw new it
        }
        return t.prototype.detect = function() {
          for (var t = this.leftInit, n = this.rightInit, r = this.upInit, i = this.downInit, e = !1, o = !0, u = !1, f = !1, s = !1, a = !1, h = !1, c = this.width, l = this.height; o;) {
            o = !1;
            for (var w = !0;
              (w || !f) && c > n;)(w = this.containsBlackPoint(r, i, n, !1)) ? (n++, o = !0, f = !0) : f || n++;
            if (n >= c) {
              e = !0;
              break
            }
            for (var v = !0;
              (v || !s) && l > i;)(v = this.containsBlackPoint(t, n, i, !0)) ? (i++, o = !0, s = !0) : s || i++;
            if (i >= l) {
              e = !0;
              break
            }
            for (var y = !0;
              (y || !a) && t >= 0;)(y = this.containsBlackPoint(r, i, t, !1)) ? (t--, o = !0, a = !0) : a || t--;
            if (0 > t) {
              e = !0;
              break
            }
            for (var d = !0;
              (d || !h) && r >= 0;)(d = this.containsBlackPoint(t, n, r, !0)) ? (r--, o = !0, h = !0) : h || r--;
            if (0 > r) {
              e = !0;
              break
            }
            o && (u = !0)
          }
          if (!e && u) {
            for (var b = n - t, A = null, p = 1; null === A && b > p; p++) A = this.getBlackPointOnSegment(t, i - p, t + p, i);
            if (null == A) throw new it;
            var m = null;
            for (p = 1; null === m && b > p; p++) m = this.getBlackPointOnSegment(t, r + p, t + p, r);
            if (null == m) throw new it;
            var I = null;
            for (p = 1; null === I && b > p; p++) I = this.getBlackPointOnSegment(n, r + p, n - p, r);
            if (null == I) throw new it;
            var _ = null;
            for (p = 1; null === _ && b > p; p++) _ = this.getBlackPointOnSegment(n, i - p, n - p, i);
            if (null == _) throw new it;
            return this.centerEdges(_, A, I, m)
          }
          throw new it
        }, t.prototype.getBlackPointOnSegment = function(t, n, r, i) {
          for (var e = Jt.round(Jt.distance(t, n, r, i)), o = (r - t) / e, u = (i - n) / e, f = this.image, s = 0; e > s; s++) {
            var a = Jt.round(t + s * o),
              h = Jt.round(n + s * u);
            if (f.get(a, h)) return new nn(a, h)
          }
          return null
        }, t.prototype.centerEdges = function(n, r, i, e) {
          var o = n.getX(),
            u = n.getY(),
            f = r.getX(),
            s = r.getY(),
            a = i.getX(),
            h = i.getY(),
            c = e.getX(),
            l = e.getY(),
            w = t.CORR;
          return o < this.width / 2 ? [new nn(c - w, l + w), new nn(f + w, s + w), new nn(a - w, h - w), new nn(o + w, u - w)] : [new nn(c + w, l + w), new nn(f + w, s - w), new nn(a - w, h + w), new nn(o - w, u - w)]
        }, t.prototype.containsBlackPoint = function(t, n, r, i) {
          var e = this.image;
          if (i) {
            for (var o = t; n >= o; o++)
              if (e.get(o, r)) return !0
          } else
            for (var u = t; n >= u; u++)
              if (e.get(r, u)) return !0;
          return !1
        }, t.INIT_SIZE = 10, t.CORR = 1, t
      }();
      const an = sn;
      var hn = function() {
        function t() {}
        return t.checkAndNudgePoints = function(t, n) {
          for (var r = t.getWidth(), i = t.getHeight(), e = !0, o = 0; o < n.length && e; o += 2) {
            var u = Math.floor(n[o]),
              f = Math.floor(n[o + 1]);
            if (-1 > u || u > r || -1 > f || f > i) throw new it;
            e = !1, -1 === u ? (n[o] = 0, e = !0) : u === r && (n[o] = r - 1, e = !0), -1 === f ? (n[o + 1] = 0, e = !0) : f === i && (n[o + 1] = i - 1, e = !0)
          }
          for (e = !0, o = n.length - 2; o >= 0 && e; o -= 2) {
            if (u = Math.floor(n[o]), f = Math.floor(n[o + 1]), -1 > u || u > r || -1 > f || f > i) throw new it;
            e = !1, -1 === u ? (n[o] = 0, e = !0) : u === r && (n[o] = r - 1, e = !0), -1 === f ? (n[o + 1] = 0, e = !0) : f === i && (n[o + 1] = i - 1, e = !0)
          }
        }, t
      }();
      const cn = hn;
      var ln = function() {
        function t(t, n, r, i, e, o, u, f, s) {
          this.a11 = t, this.a21 = n, this.a31 = r, this.a12 = i, this.a22 = e, this.a32 = o, this.a13 = u, this.a23 = f, this.a33 = s
        }
        return t.quadrilateralToQuadrilateral = function(n, r, i, e, o, u, f, s, a, h, c, l, w, v, y, d) {
          var b = t.quadrilateralToSquare(n, r, i, e, o, u, f, s);
          return t.squareToQuadrilateral(a, h, c, l, w, v, y, d).times(b)
        }, t.prototype.transformPoints = function(t) {
          for (var n = t.length, r = this.a11, i = this.a12, e = this.a13, o = this.a21, u = this.a22, f = this.a23, s = this.a31, a = this.a32, h = this.a33, c = 0; n > c; c += 2) {
            var l = t[c],
              w = t[c + 1],
              v = e * l + f * w + h;
            t[c] = (r * l + o * w + s) / v, t[c + 1] = (i * l + u * w + a) / v
          }
        }, t.prototype.transformPointsWithValues = function(t, n) {
          for (var r = this.a11, i = this.a12, e = this.a13, o = this.a21, u = this.a22, f = this.a23, s = this.a31, a = this.a32, h = this.a33, c = t.length, l = 0; c > l; l++) {
            var w = t[l],
              v = n[l],
              y = e * w + f * v + h;
            t[l] = (r * w + o * v + s) / y, n[l] = (i * w + u * v + a) / y
          }
        }, t.squareToQuadrilateral = function(n, r, i, e, o, u, f, s) {
          var a = n - i + o - f,
            h = r - e + u - s;
          if (0 === a && 0 === h) return new t(i - n, o - i, n, e - r, u - e, r, 0, 0, 1);
          var c = i - o,
            l = f - o,
            w = e - u,
            v = s - u,
            y = c * v - l * w,
            d = (a * v - l * h) / y,
            b = (c * h - a * w) / y;
          return new t(i - n + d * i, f - n + b * f, n, e - r + d * e, s - r + b * s, r, d, b, 1)
        }, t.quadrilateralToSquare = function(n, r, i, e, o, u, f, s) {
          return t.squareToQuadrilateral(n, r, i, e, o, u, f, s).buildAdjoint()
        }, t.prototype.buildAdjoint = function() {
          return new t(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
        }, t.prototype.times = function(n) {
          return new t(this.a11 * n.a11 + this.a21 * n.a12 + this.a31 * n.a13, this.a11 * n.a21 + this.a21 * n.a22 + this.a31 * n.a23, this.a11 * n.a31 + this.a21 * n.a32 + this.a31 * n.a33, this.a12 * n.a11 + this.a22 * n.a12 + this.a32 * n.a13, this.a12 * n.a21 + this.a22 * n.a22 + this.a32 * n.a23, this.a12 * n.a31 + this.a22 * n.a32 + this.a32 * n.a33, this.a13 * n.a11 + this.a23 * n.a12 + this.a33 * n.a13, this.a13 * n.a21 + this.a23 * n.a22 + this.a33 * n.a23, this.a13 * n.a31 + this.a23 * n.a32 + this.a33 * n.a33)
        }, t
      }();
      const wn = ln;
      var vn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        yn = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return vn(n, t), n.prototype.sampleGrid = function(t, n, r, i, e, o, u, f, s, a, h, c, l, w, v, y, d, b, A) {
            var p = wn.quadrilateralToQuadrilateral(i, e, o, u, f, s, a, h, c, l, w, v, y, d, b, A);
            return this.sampleGridWithTransform(t, n, r, p)
          }, n.prototype.sampleGridWithTransform = function(t, n, r, i) {
            if (0 >= n || 0 >= r) throw new it;
            for (var e = new tt(n, r), o = new Float32Array(2 * n), u = 0; r > u; u++) {
              for (var f = o.length, s = u + .5, a = 0; f > a; a += 2) o[a] = a / 2 + .5, o[a + 1] = s;
              i.transformPoints(o), cn.checkAndNudgePoints(t, o);
              try {
                for (a = 0; f > a; a += 2) t.get(Math.floor(o[a]), Math.floor(o[a + 1])) && e.set(a / 2, u)
              } catch {
                throw new it
              }
            }
            return e
          }, n
        }(cn);
      const dn = yn;
      var bn = function() {
        function t() {}
        return t.setGridSampler = function(n) {
          t.gridSampler = n
        }, t.getInstance = function() {
          return t.gridSampler
        }, t.gridSampler = new dn, t
      }();
      const An = bn;
      var pn = function() {
          function t(t, n) {
            this.x = t, this.y = n
          }
          return t.prototype.toResultPoint = function() {
            return new nn(this.getX(), this.getY())
          }, t.prototype.getX = function() {
            return this.x
          }, t.prototype.getY = function() {
            return this.y
          }, t
        }(),
        mn = function() {
          function t(t) {
            this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t
          }
          return t.prototype.detect = function() {
            return this.detectMirror(!1)
          }, t.prototype.detectMirror = function(t) {
            var n = this.getMatrixCenter(),
              r = this.getBullsEyeCorners(n);
            if (t) {
              var i = r[0];
              r[0] = r[2], r[2] = i
            }
            this.extractParameters(r);
            var e = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
              o = this.getMatrixCornerPoints(r);
            return new fn(e, o, this.compact, this.nbDataBlocks, this.nbLayers)
          }, t.prototype.extractParameters = function(t) {
            if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new it;
            var n = 2 * this.nbCenterLayers,
              r = new Int32Array([this.sampleLine(t[0], t[1], n), this.sampleLine(t[1], t[2], n), this.sampleLine(t[2], t[3], n), this.sampleLine(t[3], t[0], n)]);
            this.shift = this.getRotation(r, n);
            for (var i = 0, e = 0; 4 > e; e++) {
              var o = r[(this.shift + e) % 4];
              this.compact ? (i <<= 7, i += o >> 1 & 127) : (i <<= 10, i += (o >> 2 & 992) + (o >> 1 & 31))
            }
            var u = this.getCorrectedParameterData(i, this.compact);
            this.compact ? (this.nbLayers = 1 + (u >> 6), this.nbDataBlocks = 1 + (63 & u)) : (this.nbLayers = 1 + (u >> 11), this.nbDataBlocks = 1 + (2047 & u))
          }, t.prototype.getRotation = function(t, n) {
            var r = 0;
            t.forEach(function(t, i, e) {
              r = (t >> n - 2 << 1) + (1 & t) + (r << 3)
            }), r = ((1 & r) << 11) + (r >> 1);
            for (var i = 0; 4 > i; i++)
              if (2 >= R.bitCount(r ^ this.EXPECTED_CORNER_BITS[i])) return i;
            throw new it
          }, t.prototype.getCorrectedParameterData = function(t, n) {
            var r, i;
            n ? (r = 7, i = 2) : (r = 10, i = 4);
            for (var e = r - i, o = new Int32Array(r), u = r - 1; u >= 0; --u) o[u] = 15 & t, t >>= 4;
            try {
              new Wt(Pt.AZTEC_PARAM).decode(o, e)
            } catch {
              throw new it
            }
            var f = 0;
            for (u = 0; i > u; u++) f = (f << 4) + o[u];
            return f
          }, t.prototype.getBullsEyeCorners = function(t) {
            var n = t,
              r = t,
              i = t,
              e = t,
              o = !0;
            for (this.nbCenterLayers = 1; 9 > this.nbCenterLayers; this.nbCenterLayers++) {
              var u = this.getFirstDifferent(n, o, 1, -1),
                f = this.getFirstDifferent(r, o, 1, 1),
                s = this.getFirstDifferent(i, o, -1, 1),
                a = this.getFirstDifferent(e, o, -1, -1);
              if (this.nbCenterLayers > 2) {
                var h = this.distancePoint(a, u) * this.nbCenterLayers / (this.distancePoint(e, n) * (this.nbCenterLayers + 2));
                if (.75 > h || h > 1.25 || !this.isWhiteOrBlackRectangle(u, f, s, a)) break
              }
              n = u, r = f, i = s, e = a, o = !o
            }
            if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new it;
            this.compact = 5 === this.nbCenterLayers;
            var c = new nn(n.getX() + .5, n.getY() - .5),
              l = new nn(r.getX() + .5, r.getY() + .5),
              w = new nn(i.getX() - .5, i.getY() + .5),
              v = new nn(e.getX() - .5, e.getY() - .5);
            return this.expandSquare([c, l, w, v], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
          }, t.prototype.getMatrixCenter = function() {
            var t, n, r, i;
            try {
              t = (s = new an(this.image).detect())[0], n = s[1], r = s[2], i = s[3]
            } catch {
              var e = this.image.getWidth() / 2,
                o = this.image.getHeight() / 2;
              t = this.getFirstDifferent(new pn(e + 7, o - 7), !1, 1, -1).toResultPoint(), n = this.getFirstDifferent(new pn(e + 7, o + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new pn(e - 7, o + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new pn(e - 7, o - 7), !1, -1, -1).toResultPoint()
            }
            var u = Jt.round((t.getX() + i.getX() + n.getX() + r.getX()) / 4),
              f = Jt.round((t.getY() + i.getY() + n.getY() + r.getY()) / 4);
            try {
              var s;
              t = (s = new an(this.image, 15, u, f).detect())[0], n = s[1], r = s[2], i = s[3]
            } catch {
              t = this.getFirstDifferent(new pn(u + 7, f - 7), !1, 1, -1).toResultPoint(), n = this.getFirstDifferent(new pn(u + 7, f + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new pn(u - 7, f + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new pn(u - 7, f - 7), !1, -1, -1).toResultPoint()
            }
            return u = Jt.round((t.getX() + i.getX() + n.getX() + r.getX()) / 4), f = Jt.round((t.getY() + i.getY() + n.getY() + r.getY()) / 4), new pn(u, f)
          }, t.prototype.getMatrixCornerPoints = function(t) {
            return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
          }, t.prototype.sampleGrid = function(t, n, r, i, e) {
            var o = An.getInstance(),
              u = this.getDimension(),
              f = u / 2 - this.nbCenterLayers,
              s = u / 2 + this.nbCenterLayers;
            return o.sampleGrid(t, u, u, f, f, s, f, s, s, f, s, n.getX(), n.getY(), r.getX(), r.getY(), i.getX(), i.getY(), e.getX(), e.getY())
          }, t.prototype.sampleLine = function(t, n, r) {
            for (var i = 0, e = this.distanceResultPoint(t, n), o = e / r, u = t.getX(), f = t.getY(), s = o * (n.getX() - t.getX()) / e, a = o * (n.getY() - t.getY()) / e, h = 0; r > h; h++) this.image.get(Jt.round(u + h * s), Jt.round(f + h * a)) && (i |= 1 << r - h - 1);
            return i
          }, t.prototype.isWhiteOrBlackRectangle = function(t, n, r, i) {
            t = new pn(t.getX() - 3, t.getY() + 3), n = new pn(n.getX() - 3, n.getY() - 3), r = new pn(r.getX() + 3, r.getY() - 3), i = new pn(i.getX() + 3, i.getY() + 3);
            var e = this.getColor(i, t);
            if (0 === e) return !1;
            var o = this.getColor(t, n);
            return o === e && (o = this.getColor(n, r)) === e && (o = this.getColor(r, i)) === e
          }, t.prototype.getColor = function(t, n) {
            for (var r = this.distancePoint(t, n), i = (n.getX() - t.getX()) / r, e = (n.getY() - t.getY()) / r, o = 0, u = t.getX(), f = t.getY(), s = this.image.get(t.getX(), t.getY()), a = Math.ceil(r), h = 0; a > h; h++) u += i, f += e, this.image.get(Jt.round(u), Jt.round(f)) !== s && o++;
            var c = o / r;
            return c > .1 && .9 > c ? 0 : .1 >= c === s ? 1 : -1
          }, t.prototype.getFirstDifferent = function(t, n, r, i) {
            for (var e = t.getX() + r, o = t.getY() + i; this.isValid(e, o) && this.image.get(e, o) === n;) e += r, o += i;
            for (e -= r, o -= i; this.isValid(e, o) && this.image.get(e, o) === n;) e += r;
            for (e -= r; this.isValid(e, o) && this.image.get(e, o) === n;) o += i;
            return new pn(e, o -= i)
          }, t.prototype.expandSquare = function(t, n, r) {
            var i = r / (2 * n),
              e = t[0].getX() - t[2].getX(),
              o = t[0].getY() - t[2].getY(),
              u = (t[0].getX() + t[2].getX()) / 2,
              f = (t[0].getY() + t[2].getY()) / 2,
              s = new nn(u + i * e, f + i * o),
              a = new nn(u - i * e, f - i * o);
            return e = t[1].getX() - t[3].getX(), o = t[1].getY() - t[3].getY(), u = (t[1].getX() + t[3].getX()) / 2, f = (t[1].getY() + t[3].getY()) / 2, [s, new nn(u + i * e, f + i * o), a, new nn(u - i * e, f - i * o)]
          }, t.prototype.isValid = function(t, n) {
            return t >= 0 && t < this.image.getWidth() && n > 0 && n < this.image.getHeight()
          }, t.prototype.isValidPoint = function(t) {
            var n = Jt.round(t.getX()),
              r = Jt.round(t.getY());
            return this.isValid(n, r)
          }, t.prototype.distancePoint = function(t, n) {
            return Jt.distance(t.getX(), t.getY(), n.getX(), n.getY())
          }, t.prototype.distanceResultPoint = function(t, n) {
            return Jt.distance(t.getX(), t.getY(), n.getX(), n.getY())
          }, t.prototype.getDimension = function() {
            return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers > 4 ? 4 * this.nbLayers + 2 * (R.truncDivision(this.nbLayers - 4, 8) + 1) + 15 : 4 * this.nbLayers + 15
          }, t
        }();
      const In = mn;
      var _n = function() {
        function t() {}
        return t.prototype.decode = function(t, n) {
          void 0 === n && (n = null);
          var r = null,
            i = new In(t.getBlackMatrix()),
            e = null,
            o = null;
          try {
            e = (u = i.detectMirror(!1)).getPoints(), this.reportFoundResultPoints(n, e), o = (new Vt).decode(u)
          } catch (t) {
            r = t
          }
          if (null == o) try {
            var u;
            e = (u = i.detectMirror(!0)).getPoints(), this.reportFoundResultPoints(n, e), o = (new Vt).decode(u)
          } catch (t) {
            throw r ?? t
          }
          var f = new _t(o.getText(), o.getRawBytes(), o.getNumBits(), e, St.AZTEC, g.currentTimeMillis()),
            s = o.getByteSegments();
          null != s && f.putMetadata(Et.BYTE_SEGMENTS, s);
          var a = o.getECLevel();
          return null != a && f.putMetadata(Et.ERROR_CORRECTION_LEVEL, a), f
        }, t.prototype.reportFoundResultPoints = function(t, n) {
          if (null != t) {
            var r = t.get(B.NEED_RESULT_POINT_CALLBACK);
            null != r && n.forEach(function(t, n, i) {
              r.foundPossibleResultPoint(t)
            })
          }
        }, t.prototype.reset = function() {}, t
      }();
      const gn = _n;
      var Sn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Mn = (function(t) {
          Sn(function(n) {
            return void 0 === n && (n = 500), t.call(this, new gn, n) || this
          }, t)
        }(mt), function() {
          function t() {}
          return t.prototype.decode = function(t, n) {
            try {
              return this.doDecode(t, n)
            } catch {
              if (n && !0 === n.get(B.TRY_HARDER) && t.isRotateSupported()) {
                var r = t.rotateCounterClockwise(),
                  i = this.doDecode(r, n),
                  e = i.getResultMetadata(),
                  o = 270;
                null !== e && !0 === e.get(Et.ORIENTATION) && (o += e.get(Et.ORIENTATION) % 360), i.putMetadata(Et.ORIENTATION, o);
                var u = i.getResultPoints();
                if (null !== u)
                  for (var f = r.getHeight(), s = 0; s < u.length; s++) u[s] = new nn(f - u[s].getY() - 1, u[s].getX());
                return i
              }
              throw new it
            }
          }, t.prototype.reset = function() {}, t.prototype.doDecode = function(t, n) {
            var r, i = t.getWidth(),
              e = t.getHeight(),
              o = new U(i),
              u = n && !0 === n.get(B.TRY_HARDER),
              f = Math.max(1, e >> (u ? 8 : 5));
            r = u ? e : 15;
            for (var s = Math.trunc(e / 2), a = 0; r > a; a++) {
              var h = Math.trunc((a + 1) / 2),
                c = s + f * (1 & a ? -h : h);
              if (0 > c || c >= e) break;
              try {
                o = t.getBlackRow(c, o)
              } catch {
                continue
              }
              for (var l = function(t) {
                  if (1 === t && (o.reverse(), n && !0 === n.get(B.NEED_RESULT_POINT_CALLBACK))) {
                    var r = new Map;
                    n.forEach(function(t, n) {
                      return r.set(n, t)
                    }), r.delete(B.NEED_RESULT_POINT_CALLBACK), n = r
                  }
                  try {
                    var e = w.decodeRow(c, o, n);
                    if (1 === t) {
                      e.putMetadata(Et.ORIENTATION, 180);
                      var u = e.getResultPoints();
                      null !== u && (u[0] = new nn(i - u[0].getX() - 1, u[0].getY()), u[1] = new nn(i - u[1].getX() - 1, u[1].getY()))
                    }
                    return {
                      value: e
                    }
                  } catch {}
                }, w = this, v = 0; 2 > v; v++) {
                var y = l(v);
                if ("object" == typeof y) return y.value
              }
            }
            throw new it
          }, t.recordPattern = function(t, n, r) {
            for (var i = r.length, e = 0; i > e; e++) r[e] = 0;
            var o = t.getSize();
            if (n >= o) throw new it;
            for (var u = !t.get(n), f = 0, s = n; o > s;) {
              if (t.get(s) !== u) r[f]++;
              else {
                if (++f === i) break;
                r[f] = 1, u = !u
              }
              s++
            }
            if (f !== i && (f !== i - 1 || s !== o)) throw new it
          }, t.recordPatternInReverse = function(n, r, i) {
            for (var e = i.length, o = n.get(r); r > 0 && e >= 0;) n.get(--r) !== o && (e--, o = !o);
            if (e >= 0) throw new it;
            t.recordPattern(n, r + 1, i)
          }, t.patternMatchVariance = function(t, n, r) {
            for (var i = t.length, e = 0, o = 0, u = 0; i > u; u++) e += t[u], o += n[u];
            if (o > e) return 1 / 0;
            var f = e / o;
            r *= f;
            for (var s = 0, a = 0; i > a; a++) {
              var h = t[a],
                c = n[a] * f,
                l = h > c ? h - c : c - h;
              if (l > r) return 1 / 0;
              s += l
            }
            return s / e
          }, t
        }());
      const En = Mn;
      var On = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        kn = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return On(n, t), n.findStartPattern = function(t) {
            for (var r = t.getSize(), i = t.getNextSet(0), e = 0, o = Int32Array.from([0, 0, 0, 0, 0, 0]), u = i, f = !1, s = i; r > s; s++)
              if (t.get(s) !== f) o[e]++;
              else {
                if (5 === e) {
                  for (var a = n.MAX_AVG_VARIANCE, h = -1, c = n.CODE_START_A; c <= n.CODE_START_C; c++) {
                    var l = En.patternMatchVariance(o, n.CODE_PATTERNS[c], n.MAX_INDIVIDUAL_VARIANCE);
                    a > l && (a = l, h = c)
                  }
                  if (h >= 0 && t.isRange(Math.max(0, u - (s - u) / 2), u, !1)) return Int32Array.from([u, s, h]);
                  u += o[0] + o[1], (o = o.slice(2, o.length))[e - 1] = 0, o[e] = 0, e--
                } else e++;
                o[e] = 1, f = !f
              } throw new it
          }, n.decodeCode = function(t, r, i) {
            En.recordPattern(t, i, r);
            for (var e = n.MAX_AVG_VARIANCE, o = -1, u = 0; u < n.CODE_PATTERNS.length; u++) {
              var f = n.CODE_PATTERNS[u],
                s = this.patternMatchVariance(r, f, n.MAX_INDIVIDUAL_VARIANCE);
              e > s && (e = s, o = u)
            }
            if (o >= 0) return o;
            throw new it
          }, n.prototype.decodeRow = function(t, r, i) {
            var e, o = i && !0 === i.get(B.ASSUME_GS1),
              u = n.findStartPattern(r),
              f = u[2],
              s = 0,
              a = new Uint8Array(20);
            switch (a[s++] = f, f) {
              case n.CODE_START_A:
                e = n.CODE_CODE_A;
                break;
              case n.CODE_START_B:
                e = n.CODE_CODE_B;
                break;
              case n.CODE_START_C:
                e = n.CODE_CODE_C;
                break;
              default:
                throw new F
            }
            for (var h = !1, c = !1, l = "", w = u[0], v = u[1], y = Int32Array.from([0, 0, 0, 0, 0, 0]), d = 0, b = 0, A = f, m = 0, I = !0, _ = !1, g = !1; !h;) {
              var S = c;
              switch (c = !1, d = b, b = n.decodeCode(r, y, v), a[s++] = b, b !== n.CODE_STOP && (I = !0), b !== n.CODE_STOP && (A += ++m * b), w = v, v += y.reduce(function(t, n) {
                  return t + n
                }, 0), b) {
                case n.CODE_START_A:
                case n.CODE_START_B:
                case n.CODE_START_C:
                  throw new F
              }
              switch (e) {
                case n.CODE_CODE_A:
                  if (64 > b) l += String.fromCharCode(g === _ ? 32 + b : 32 + b + 128), g = !1;
                  else if (96 > b) l += String.fromCharCode(g === _ ? b - 64 : b + 64), g = !1;
                  else switch (b !== n.CODE_STOP && (I = !1), b) {
                    case n.CODE_FNC_1:
                      o && (0 === l.length ? l += "]C1" : l += "");
                      break;
                    case n.CODE_FNC_2:
                    case n.CODE_FNC_3:
                      break;
                    case n.CODE_FNC_4_A:
                      !_ && g ? (_ = !0, g = !1) : _ && g ? (_ = !1, g = !1) : g = !0;
                      break;
                    case n.CODE_SHIFT:
                      c = !0, e = n.CODE_CODE_B;
                      break;
                    case n.CODE_CODE_B:
                      e = n.CODE_CODE_B;
                      break;
                    case n.CODE_CODE_C:
                      e = n.CODE_CODE_C;
                      break;
                    case n.CODE_STOP:
                      h = !0
                  }
                  break;
                case n.CODE_CODE_B:
                  if (96 > b) l += String.fromCharCode(g === _ ? 32 + b : 32 + b + 128), g = !1;
                  else switch (b !== n.CODE_STOP && (I = !1), b) {
                    case n.CODE_FNC_1:
                      o && (0 === l.length ? l += "]C1" : l += "");
                      break;
                    case n.CODE_FNC_2:
                    case n.CODE_FNC_3:
                      break;
                    case n.CODE_FNC_4_B:
                      !_ && g ? (_ = !0, g = !1) : _ && g ? (_ = !1, g = !1) : g = !0;
                      break;
                    case n.CODE_SHIFT:
                      c = !0, e = n.CODE_CODE_A;
                      break;
                    case n.CODE_CODE_A:
                      e = n.CODE_CODE_A;
                      break;
                    case n.CODE_CODE_C:
                      e = n.CODE_CODE_C;
                      break;
                    case n.CODE_STOP:
                      h = !0
                  }
                  break;
                case n.CODE_CODE_C:
                  if (100 > b) 10 > b && (l += "0"), l += b;
                  else switch (b !== n.CODE_STOP && (I = !1), b) {
                    case n.CODE_FNC_1:
                      o && (0 === l.length ? l += "]C1" : l += "");
                      break;
                    case n.CODE_CODE_A:
                      e = n.CODE_CODE_A;
                      break;
                    case n.CODE_CODE_B:
                      e = n.CODE_CODE_B;
                      break;
                    case n.CODE_STOP:
                      h = !0
                  }
              }
              S && (e = e === n.CODE_CODE_A ? n.CODE_CODE_B : n.CODE_CODE_A)
            }
            var M = v - w;
            if (v = r.getNextUnset(v), !r.isRange(v, Math.min(r.getSize(), v + (v - w) / 2), !1)) throw new it;
            if ((A -= m * d) % 103 !== d) throw new p;
            var E = l.length;
            if (0 === E) throw new it;
            E > 0 && I && (l = e === n.CODE_CODE_C ? l.substring(0, E - 2) : l.substring(0, E - 1));
            for (var O = (u[1] + u[0]) / 2, k = w + M / 2, T = a.length, j = new Uint8Array(T), x = 0; T > x; x++) j[x] = a[x];
            var C = [new nn(O, t), new nn(k, t)];
            return new _t(l, j, 0, C, St.CODE_128, (new Date).getTime())
          }, n.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], n.MAX_AVG_VARIANCE = .25, n.MAX_INDIVIDUAL_VARIANCE = .7, n.CODE_SHIFT = 98, n.CODE_CODE_C = 99, n.CODE_CODE_B = 100, n.CODE_CODE_A = 101, n.CODE_FNC_1 = 102, n.CODE_FNC_2 = 97, n.CODE_FNC_3 = 96, n.CODE_FNC_4_A = 101, n.CODE_FNC_4_B = 100, n.CODE_START_A = 103, n.CODE_START_B = 104, n.CODE_START_C = 105, n.CODE_STOP = 106, n
        }(En);
      const Tn = kn;
      var jn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        xn = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Cn = function(t) {
          function n(n, r) {
            void 0 === n && (n = !1), void 0 === r && (r = !1);
            var i = t.call(this) || this;
            return i.usingCheckDigit = n, i.extendedMode = r, i.decodeRowResult = "", i.counters = new Int32Array(9), i
          }
          return jn(n, t), n.prototype.decodeRow = function(t, r, i) {
            var e, o, u, f, s = this.counters;
            s.fill(0), this.decodeRowResult = "";
            var a, h, c = n.findAsteriskPattern(r, s),
              l = r.getNextSet(c[1]),
              w = r.getSize();
            do {
              n.recordPattern(r, l, s);
              var v = n.toNarrowWidePattern(s);
              if (0 > v) throw new it;
              a = n.patternToChar(v), this.decodeRowResult += a, h = l;
              try {
                for (var y = (e = void 0, xn(s)), d = y.next(); !d.done; d = y.next()) l += d.value
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  d && !d.done && (o = y.return) && o.call(y)
                } finally {
                  if (e) throw e.error
                }
              }
              l = r.getNextSet(l)
            } while ("*" !== a);
            this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
            var b, A = 0;
            try {
              for (var m = xn(s), I = m.next(); !I.done; I = m.next()) A += I.value
            } catch (t) {
              u = {
                error: t
              }
            } finally {
              try {
                I && !I.done && (f = m.return) && f.call(m)
              } finally {
                if (u) throw u.error
              }
            }
            if (l !== w && A > 2 * (l - h - A)) throw new it;
            if (this.usingCheckDigit) {
              for (var _ = this.decodeRowResult.length - 1, g = 0, S = 0; _ > S; S++) g += n.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(S));
              if (this.decodeRowResult.charAt(_) !== n.ALPHABET_STRING.charAt(g % 43)) throw new p;
              this.decodeRowResult = this.decodeRowResult.substring(0, _)
            }
            if (0 === this.decodeRowResult.length) throw new it;
            b = this.extendedMode ? n.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
            var M = (c[1] + c[0]) / 2,
              E = h + A / 2;
            return new _t(b, null, 0, [new nn(M, t), new nn(E, t)], St.CODE_39, (new Date).getTime())
          }, n.findAsteriskPattern = function(t, r) {
            for (var i = t.getSize(), e = t.getNextSet(0), o = 0, u = e, f = !1, s = r.length, a = e; i > a; a++)
              if (t.get(a) !== f) r[o]++;
              else {
                if (o === s - 1) {
                  if (this.toNarrowWidePattern(r) === n.ASTERISK_ENCODING && t.isRange(Math.max(0, u - Math.floor((a - u) / 2)), u, !1)) return [u, a];
                  u += r[0] + r[1], r.copyWithin(0, 2, 2 + o - 1), r[o - 1] = 0, r[o] = 0, o--
                } else o++;
                r[o] = 1, f = !f
              } throw new it
          }, n.toNarrowWidePattern = function(t) {
            var n, r, i, e = t.length,
              o = 0;
            do {
              var u = 2147483647;
              try {
                for (var f = (n = void 0, xn(t)), s = f.next(); !s.done; s = f.next()) u > (l = s.value) && l > o && (u = l)
              } catch (t) {
                n = {
                  error: t
                }
              } finally {
                try {
                  s && !s.done && (r = f.return) && r.call(f)
                } finally {
                  if (n) throw n.error
                }
              }
              o = u, i = 0;
              for (var a = 0, h = 0, c = 0; e > c; c++)(l = t[c]) > o && (h |= 1 << e - 1 - c, i++, a += l);
              if (3 === i) {
                for (c = 0; e > c && i > 0; c++) {
                  var l;
                  if ((l = t[c]) > o && (i--, 2 * l >= a)) return -1
                }
                return h
              }
            } while (i > 3);
            return -1
          }, n.patternToChar = function(t) {
            for (var r = 0; r < n.CHARACTER_ENCODINGS.length; r++)
              if (n.CHARACTER_ENCODINGS[r] === t) return n.ALPHABET_STRING.charAt(r);
            if (t === n.ASTERISK_ENCODING) return "*";
            throw new it
          }, n.decodeExtended = function(t) {
            for (var n = t.length, r = "", i = 0; n > i; i++) {
              var e = t.charAt(i);
              if ("+" === e || "$" === e || "%" === e || "/" === e) {
                var o = t.charAt(i + 1),
                  u = "\0";
                switch (e) {
                  case "+":
                    if ("A" > o || o > "Z") throw new F;
                    u = String.fromCharCode(o.charCodeAt(0) + 32);
                    break;
                  case "$":
                    if ("A" > o || o > "Z") throw new F;
                    u = String.fromCharCode(o.charCodeAt(0) - 64);
                    break;
                  case "%":
                    if ("A" > o || o > "E")
                      if ("F" > o || o > "J")
                        if ("K" > o || o > "O")
                          if ("P" > o || o > "T")
                            if ("U" === o) u = "\0";
                            else if ("V" === o) u = "@";
                    else if ("W" === o) u = "`";
                    else {
                      if ("X" !== o && "Y" !== o && "Z" !== o) throw new F;
                      u = ""
                    } else u = String.fromCharCode(o.charCodeAt(0) + 43);
                    else u = String.fromCharCode(o.charCodeAt(0) + 16);
                    else u = String.fromCharCode(o.charCodeAt(0) - 11);
                    else u = String.fromCharCode(o.charCodeAt(0) - 38);
                    break;
                  case "/":
                    if ("A" > o || o > "O") {
                      if ("Z" !== o) throw new F;
                      u = ":"
                    } else u = String.fromCharCode(o.charCodeAt(0) - 32)
                }
                r += u, i++
              } else r += e
            }
            return r
          }, n.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", n.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], n.ASTERISK_ENCODING = 148, n
        }(En);
      const Rn = Cn;
      var Nn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Un = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Dn = function(t) {
          function n() {
            var n = t.call(this) || this;
            return n.decodeRowResult = "", n.counters = new Int32Array(6), n
          }
          return Nn(n, t), n.prototype.decodeRow = function(t, r, i) {
            var e, o, u, f, s, a, h = this.findAsteriskPattern(r),
              c = r.getNextSet(h[1]),
              l = r.getSize(),
              w = this.counters;
            w.fill(0), this.decodeRowResult = "";
            do {
              n.recordPattern(r, c, w);
              var v = this.toPattern(w);
              if (0 > v) throw new it;
              s = this.patternToChar(v), this.decodeRowResult += s, a = c;
              try {
                for (var y = (e = void 0, Un(w)), d = y.next(); !d.done; d = y.next()) c += d.value
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  d && !d.done && (o = y.return) && o.call(y)
                } finally {
                  if (e) throw e.error
                }
              }
              c = r.getNextSet(c)
            } while ("*" !== s);
            this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
            var b = 0;
            try {
              for (var A = Un(w), p = A.next(); !p.done; p = A.next()) b += p.value
            } catch (t) {
              u = {
                error: t
              }
            } finally {
              try {
                p && !p.done && (f = A.return) && f.call(A)
              } finally {
                if (u) throw u.error
              }
            }
            if (c === l || !r.get(c)) throw new it;
            if (2 > this.decodeRowResult.length) throw new it;
            this.checkChecksums(this.decodeRowResult), this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
            var m = this.decodeExtended(this.decodeRowResult),
              I = (h[1] + h[0]) / 2,
              _ = a + b / 2;
            return new _t(m, null, 0, [new nn(I, t), new nn(_, t)], St.CODE_93, (new Date).getTime())
          }, n.prototype.findAsteriskPattern = function(t) {
            var r = t.getSize(),
              i = t.getNextSet(0);
            this.counters.fill(0);
            for (var e = this.counters, o = i, u = !1, f = e.length, s = 0, a = i; r > a; a++)
              if (t.get(a) !== u) e[s]++;
              else {
                if (s === f - 1) {
                  if (this.toPattern(e) === n.ASTERISK_ENCODING) return new Int32Array([o, a]);
                  o += e[0] + e[1], e.copyWithin(0, 2, 2 + s - 1), e[s - 1] = 0, e[s] = 0, s--
                } else s++;
                e[s] = 1, u = !u
              } throw new it
          }, n.prototype.toPattern = function(t) {
            var n, r, i = 0;
            try {
              for (var e = Un(t), o = e.next(); !o.done; o = e.next()) i += o.value
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (r = e.return) && r.call(e)
              } finally {
                if (n) throw n.error
              }
            }
            for (var u = 0, f = t.length, s = 0; f > s; s++) {
              var a = Math.round(9 * t[s] / i);
              if (1 > a || a > 4) return -1;
              if (1 & s) u <<= a;
              else
                for (var h = 0; a > h; h++) u = u << 1 | 1
            }
            return u
          }, n.prototype.patternToChar = function(t) {
            for (var r = 0; r < n.CHARACTER_ENCODINGS.length; r++)
              if (n.CHARACTER_ENCODINGS[r] === t) return n.ALPHABET_STRING.charAt(r);
            throw new it
          }, n.prototype.decodeExtended = function(t) {
            for (var n = t.length, r = "", i = 0; n > i; i++) {
              var e = t.charAt(i);
              if ("a" > e || e > "d") r += e;
              else {
                if (i >= n - 1) throw new F;
                var o = t.charAt(i + 1),
                  u = "\0";
                switch (e) {
                  case "d":
                    if ("A" > o || o > "Z") throw new F;
                    u = String.fromCharCode(o.charCodeAt(0) + 32);
                    break;
                  case "a":
                    if ("A" > o || o > "Z") throw new F;
                    u = String.fromCharCode(o.charCodeAt(0) - 64);
                    break;
                  case "b":
                    if ("A" > o || o > "E")
                      if ("F" > o || o > "J")
                        if ("K" > o || o > "O")
                          if ("P" > o || o > "T")
                            if ("U" === o) u = "\0";
                            else if ("V" === o) u = "@";
                    else if ("W" === o) u = "`";
                    else {
                      if ("X" > o || o > "Z") throw new F;
                      u = ""
                    } else u = String.fromCharCode(o.charCodeAt(0) + 43);
                    else u = String.fromCharCode(o.charCodeAt(0) + 16);
                    else u = String.fromCharCode(o.charCodeAt(0) - 11);
                    else u = String.fromCharCode(o.charCodeAt(0) - 38);
                    break;
                  case "c":
                    if ("A" > o || o > "O") {
                      if ("Z" !== o) throw new F;
                      u = ":"
                    } else u = String.fromCharCode(o.charCodeAt(0) - 32)
                }
                r += u, i++
              }
            }
            return r
          }, n.prototype.checkChecksums = function(t) {
            var n = t.length;
            this.checkOneChecksum(t, n - 2, 20), this.checkOneChecksum(t, n - 1, 15)
          }, n.prototype.checkOneChecksum = function(t, r, i) {
            for (var e = 1, o = 0, u = r - 1; u >= 0; u--) o += e * n.ALPHABET_STRING.indexOf(t.charAt(u)), ++e > i && (e = 1);
            if (t.charAt(r) !== n.ALPHABET_STRING[o % 47]) throw new p
          }, n.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", n.CHARACTER_ENCODINGS = [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350], n.ASTERISK_ENCODING = n.CHARACTER_ENCODINGS[47], n
        }(En);
      const Bn = Dn;
      var Pn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ln = function(t) {
          function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.narrowLineWidth = -1, n
          }
          return Pn(n, t), n.prototype.decodeRow = function(t, r, i) {
            var e, o, u = this.decodeStart(r),
              f = this.decodeEnd(r),
              s = new Q;
            n.decodeMiddle(r, u[1], f[0], s);
            var a = s.toString(),
              h = null;
            null != i && (h = i.get(B.ALLOWED_LENGTHS)), null == h && (h = n.DEFAULT_ALLOWED_LENGTHS);
            var c = a.length,
              l = !1,
              w = 0;
            try {
              for (var v = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(h), y = v.next(); !y.done; y = v.next()) {
                var d = y.value;
                if (c === d) {
                  l = !0;
                  break
                }
                d > w && (w = d)
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                y && !y.done && (o = v.return) && o.call(v)
              } finally {
                if (e) throw e.error
              }
            }
            if (!l && c > w && (l = !0), !l) throw new F;
            var b = [new nn(u[1], t), new nn(f[0], t)];
            return new _t(a, null, 0, b, St.ITF, (new Date).getTime())
          }, n.decodeMiddle = function(t, r, i, e) {
            var o = new Int32Array(10),
              u = new Int32Array(5),
              f = new Int32Array(5);
            for (o.fill(0), u.fill(0), f.fill(0); i > r;) {
              En.recordPattern(t, r, o);
              for (var s = 0; 5 > s; s++) {
                var a = 2 * s;
                u[s] = o[a], f[s] = o[a + 1]
              }
              var h = n.decodeDigit(u);
              e.append(h.toString()), h = this.decodeDigit(f), e.append(h.toString()), o.forEach(function(t) {
                r += t
              })
            }
          }, n.prototype.decodeStart = function(t) {
            var r = n.skipWhiteSpace(t),
              i = n.findGuardPattern(t, r, n.START_PATTERN);
            return this.narrowLineWidth = (i[1] - i[0]) / 4, this.validateQuietZone(t, i[0]), i
          }, n.prototype.validateQuietZone = function(t, n) {
            var r = 10 * this.narrowLineWidth;
            r = n > r ? r : n;
            for (var i = n - 1; r > 0 && i >= 0 && !t.get(i); i--) r--;
            if (0 !== r) throw new it
          }, n.skipWhiteSpace = function(t) {
            var n = t.getSize(),
              r = t.getNextSet(0);
            if (r === n) throw new it;
            return r
          }, n.prototype.decodeEnd = function(t) {
            t.reverse();
            try {
              var r = n.skipWhiteSpace(t),
                i = void 0;
              try {
                i = n.findGuardPattern(t, r, n.END_PATTERN_REVERSED[0])
              } catch (e) {
                e instanceof it && (i = n.findGuardPattern(t, r, n.END_PATTERN_REVERSED[1]))
              }
              this.validateQuietZone(t, i[0]);
              var e = i[0];
              return i[0] = t.getSize() - i[1], i[1] = t.getSize() - e, i
            } finally {
              t.reverse()
            }
          }, n.findGuardPattern = function(t, r, i) {
            var e = i.length,
              o = new Int32Array(e),
              u = t.getSize(),
              f = !1,
              s = 0,
              a = r;
            o.fill(0);
            for (var h = r; u > h; h++)
              if (t.get(h) !== f) o[s]++;
              else {
                if (s === e - 1) {
                  if (En.patternMatchVariance(o, i, n.MAX_INDIVIDUAL_VARIANCE) < n.MAX_AVG_VARIANCE) return [a, h];
                  a += o[0] + o[1], g.arraycopy(o, 2, o, 0, s - 1), o[s - 1] = 0, o[s] = 0, s--
                } else s++;
                o[s] = 1, f = !f
              } throw new it
          }, n.decodeDigit = function(t) {
            for (var r = n.MAX_AVG_VARIANCE, i = -1, e = n.PATTERNS.length, o = 0; e > o; o++) {
              var u = n.PATTERNS[o],
                f = En.patternMatchVariance(t, u, n.MAX_INDIVIDUAL_VARIANCE);
              r > f ? (r = f, i = o) : f === r && (i = -1)
            }
            if (i >= 0) return i % 10;
            throw new it
          }, n.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], n.MAX_AVG_VARIANCE = .38, n.MAX_INDIVIDUAL_VARIANCE = .5, n.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], n.START_PATTERN = Int32Array.from([1, 1, 1, 1]), n.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])], n
        }(En);
      const Fn = Ln;
      var Gn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        zn = function(t) {
          function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.decodeRowStringBuffer = "", n
          }
          return Gn(n, t), n.findStartGuardPattern = function(t) {
            for (var r, i = !1, e = 0, o = Int32Array.from([0, 0, 0]); !i;) {
              o = Int32Array.from([0, 0, 0]);
              var u = (r = n.findGuardPattern(t, e, !1, this.START_END_PATTERN, o))[0],
                f = u - ((e = r[1]) - u);
              f >= 0 && (i = t.isRange(f, u, !1))
            }
            return r
          }, n.checkChecksum = function(t) {
            return n.checkStandardUPCEANChecksum(t)
          }, n.checkStandardUPCEANChecksum = function(t) {
            var r = t.length;
            if (0 === r) return !1;
            var i = parseInt(t.charAt(r - 1), 10);
            return n.getStandardUPCEANChecksum(t.substring(0, r - 1)) === i
          }, n.getStandardUPCEANChecksum = function(t) {
            for (var n = t.length, r = 0, i = n - 1; i >= 0; i -= 2) {
              if (0 > (e = t.charAt(i).charCodeAt(0) - 48) || e > 9) throw new F;
              r += e
            }
            for (r *= 3, i = n - 2; i >= 0; i -= 2) {
              var e;
              if (0 > (e = t.charAt(i).charCodeAt(0) - 48) || e > 9) throw new F;
              r += e
            }
            return (1e3 - r) % 10
          }, n.decodeEnd = function(t, r) {
            return n.findGuardPattern(t, r, !1, n.START_END_PATTERN, new Int32Array(n.START_END_PATTERN.length).fill(0))
          }, n.findGuardPatternWithoutCounters = function(t, n, r, i) {
            return this.findGuardPattern(t, n, r, i, new Int32Array(i.length))
          }, n.findGuardPattern = function(t, r, i, e, o) {
            for (var u = t.getSize(), f = 0, s = r = i ? t.getNextUnset(r) : t.getNextSet(r), a = e.length, h = i, c = r; u > c; c++)
              if (t.get(c) !== h) o[f]++;
              else {
                if (f === a - 1) {
                  if (En.patternMatchVariance(o, e, n.MAX_INDIVIDUAL_VARIANCE) < n.MAX_AVG_VARIANCE) return Int32Array.from([s, c]);
                  s += o[0] + o[1];
                  for (var l = o.slice(2, o.length), w = 0; f - 1 > w; w++) o[w] = l[w];
                  o[f - 1] = 0, o[f] = 0, f--
                } else f++;
                o[f] = 1, h = !h
              } throw new it
          }, n.decodeDigit = function(t, r, i, e) {
            this.recordPattern(t, i, r);
            for (var o = this.MAX_AVG_VARIANCE, u = -1, f = e.length, s = 0; f > s; s++) {
              var a = e[s],
                h = En.patternMatchVariance(r, a, n.MAX_INDIVIDUAL_VARIANCE);
              o > h && (o = h, u = s)
            }
            if (u >= 0) return u;
            throw new it
          }, n.MAX_AVG_VARIANCE = .48, n.MAX_INDIVIDUAL_VARIANCE = .7, n.START_END_PATTERN = Int32Array.from([1, 1, 1]), n.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), n.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), n.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])], n
        }(En);
      const Hn = zn;
      var qn = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Xn = function() {
          function t() {
            this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
          }
          return t.prototype.decodeRow = function(n, r, i) {
            var e = this.decodeRowStringBuffer,
              o = this.decodeMiddle(r, i, e),
              u = e.toString(),
              f = t.parseExtensionString(u),
              s = [new nn((i[0] + i[1]) / 2, n), new nn(o, n)],
              a = new _t(u, null, 0, s, St.UPC_EAN_EXTENSION, (new Date).getTime());
            return null != f && a.putAllMetadata(f), a
          }, t.prototype.decodeMiddle = function(n, r, i) {
            var e, o, u = this.decodeMiddleCounters;
            u[0] = 0, u[1] = 0, u[2] = 0, u[3] = 0;
            for (var f = n.getSize(), s = r[1], a = 0, h = 0; 5 > h && f > s; h++) {
              var c = Hn.decodeDigit(n, u, s, Hn.L_AND_G_PATTERNS);
              i += String.fromCharCode(48 + c % 10);
              try {
                for (var l = (e = void 0, qn(u)), w = l.next(); !w.done; w = l.next()) s += w.value
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  w && !w.done && (o = l.return) && o.call(l)
                } finally {
                  if (e) throw e.error
                }
              }
              c >= 10 && (a |= 1 << 4 - h), 4 !== h && (s = n.getNextSet(s), s = n.getNextUnset(s))
            }
            if (5 !== i.length) throw new it;
            var v = this.determineCheckDigit(a);
            if (t.extensionChecksum(i.toString()) !== v) throw new it;
            return s
          }, t.extensionChecksum = function(t) {
            for (var n = t.length, r = 0, i = n - 2; i >= 0; i -= 2) r += t.charAt(i).charCodeAt(0) - 48;
            for (r *= 3, i = n - 1; i >= 0; i -= 2) r += t.charAt(i).charCodeAt(0) - 48;
            return (r *= 3) % 10
          }, t.prototype.determineCheckDigit = function(t) {
            for (var n = 0; 10 > n; n++)
              if (t === this.CHECK_DIGIT_ENCODINGS[n]) return n;
            throw new it
          }, t.parseExtensionString = function(n) {
            if (5 !== n.length) return null;
            var r = t.parseExtension5String(n);
            return null == r ? null : new Map([
              [Et.SUGGESTED_PRICE, r]
            ])
          }, t.parseExtension5String = function(t) {
            var n;
            switch (t.charAt(0)) {
              case "0":
                n = "£";
                break;
              case "5":
                n = "$";
                break;
              case "9":
                switch (t) {
                  case "90000":
                    return null;
                  case "99991":
                    return "0.00";
                  case "99990":
                    return "Used"
                }
                n = "";
                break;
              default:
                n = ""
            }
            var r = parseInt(t.substring(1)),
              i = r % 100;
            return n + "" + r / 100 + "." + (10 > i ? "0" + i : i.toString())
          }, t
        }();
      const Wn = Xn;
      var $n = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Kn = function() {
          function t() {
            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
          }
          return t.prototype.decodeRow = function(n, r, i) {
            var e = this.decodeRowStringBuffer,
              o = this.decodeMiddle(r, i, e),
              u = e.toString(),
              f = t.parseExtensionString(u),
              s = [new nn((i[0] + i[1]) / 2, n), new nn(o, n)],
              a = new _t(u, null, 0, s, St.UPC_EAN_EXTENSION, (new Date).getTime());
            return null != f && a.putAllMetadata(f), a
          }, t.prototype.decodeMiddle = function(t, n, r) {
            var i, e, o = this.decodeMiddleCounters;
            o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
            for (var u = t.getSize(), f = n[1], s = 0, a = 0; 2 > a && u > f; a++) {
              var h = Hn.decodeDigit(t, o, f, Hn.L_AND_G_PATTERNS);
              r += String.fromCharCode(48 + h % 10);
              try {
                for (var c = (i = void 0, $n(o)), l = c.next(); !l.done; l = c.next()) f += l.value
              } catch (t) {
                i = {
                  error: t
                }
              } finally {
                try {
                  l && !l.done && (e = c.return) && e.call(c)
                } finally {
                  if (i) throw i.error
                }
              }
              h >= 10 && (s |= 1 << 1 - a), 1 !== a && (f = t.getNextSet(f), f = t.getNextUnset(f))
            }
            if (2 !== r.length) throw new it;
            if (parseInt(r.toString()) % 4 !== s) throw new it;
            return f
          }, t.parseExtensionString = function(t) {
            return 2 !== t.length ? null : new Map([
              [Et.ISSUE_NUMBER, parseInt(t)]
            ])
          }, t
        }();
      const Vn = Kn;
      var Zn = function() {
        function t() {}
        return t.decodeRow = function(t, n, r) {
          var i = Hn.findGuardPattern(n, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
          try {
            return (new Wn).decodeRow(t, n, i)
          } catch {
            return (new Vn).decodeRow(t, n, i)
          }
        }, t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), t
      }();
      const Jn = Zn;
      var Qn = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Yn = function(t) {
          function n() {
            var r = t.call(this) || this;
            r.decodeRowStringBuffer = "", n.L_AND_G_PATTERNS = n.L_PATTERNS.map(function(t) {
              return Int32Array.from(t)
            });
            for (var i = 10; 20 > i; i++) {
              for (var e = n.L_PATTERNS[i - 10], o = new Int32Array(e.length), u = 0; u < e.length; u++) o[u] = e[e.length - u - 1];
              n.L_AND_G_PATTERNS[i] = o
            }
            return r
          }
          return Qn(n, t), n.prototype.decodeRow = function(t, r, i) {
            var e = n.findStartGuardPattern(r),
              o = null == i ? null : i.get(B.NEED_RESULT_POINT_CALLBACK);
            if (null != o) {
              var u = new nn((e[0] + e[1]) / 2, t);
              o.foundPossibleResultPoint(u)
            }
            var f = this.decodeMiddle(r, e, this.decodeRowStringBuffer),
              s = f.rowOffset,
              a = f.resultString;
            if (null != o) {
              var h = new nn(s, t);
              o.foundPossibleResultPoint(h)
            }
            var c = n.decodeEnd(r, s);
            if (null != o) {
              var l = new nn((c[0] + c[1]) / 2, t);
              o.foundPossibleResultPoint(l)
            }
            var w = c[1],
              v = w + (w - c[0]);
            if (v >= r.getSize() || !r.isRange(w, v, !1)) throw new it;
            var y = a.toString();
            if (8 > y.length) throw new F;
            if (!n.checkChecksum(y)) throw new p;
            var d = (e[1] + e[0]) / 2,
              b = (c[1] + c[0]) / 2,
              A = this.getBarcodeFormat(),
              m = [new nn(d, t), new nn(b, t)],
              I = new _t(y, null, 0, m, A, (new Date).getTime()),
              _ = 0;
            try {
              var g = Jn.decodeRow(t, r, c[1]);
              I.putMetadata(Et.UPC_EAN_EXTENSION, g.getText()), I.putAllMetadata(g.getResultMetadata()), I.addResultPoints(g.getResultPoints()), _ = g.getText().length
            } catch {}
            var S = null == i ? null : i.get(B.ALLOWED_EAN_EXTENSIONS);
            if (null != S) {
              var M = !1;
              for (var E in S)
                if (_.toString() === E) {
                  M = !0;
                  break
                } if (!M) throw new it
            }
            return A === St.EAN_13 || St.UPC_A, I
          }, n.checkChecksum = function(t) {
            return n.checkStandardUPCEANChecksum(t)
          }, n.checkStandardUPCEANChecksum = function(t) {
            var r = t.length;
            if (0 === r) return !1;
            var i = parseInt(t.charAt(r - 1), 10);
            return n.getStandardUPCEANChecksum(t.substring(0, r - 1)) === i
          }, n.getStandardUPCEANChecksum = function(t) {
            for (var n = t.length, r = 0, i = n - 1; i >= 0; i -= 2) {
              if (0 > (e = t.charAt(i).charCodeAt(0) - 48) || e > 9) throw new F;
              r += e
            }
            for (r *= 3, i = n - 2; i >= 0; i -= 2) {
              var e;
              if (0 > (e = t.charAt(i).charCodeAt(0) - 48) || e > 9) throw new F;
              r += e
            }
            return (1e3 - r) % 10
          }, n.decodeEnd = function(t, r) {
            return n.findGuardPattern(t, r, !1, n.START_END_PATTERN, new Int32Array(n.START_END_PATTERN.length).fill(0))
          }, n
        }(Hn);
      const tr = Yn;
      var nr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        rr = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        ir = function(t) {
          function n() {
            var n = t.call(this) || this;
            return n.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), n
          }
          return nr(n, t), n.prototype.decodeMiddle = function(t, r, i) {
            var e, o, u, f, s = this.decodeMiddleCounters;
            s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
            for (var a = t.getSize(), h = r[1], c = 0, l = 0; 6 > l && a > h; l++) {
              var w = tr.decodeDigit(t, s, h, tr.L_AND_G_PATTERNS);
              i += String.fromCharCode(48 + w % 10);
              try {
                for (var v = (e = void 0, rr(s)), y = v.next(); !y.done; y = v.next()) h += y.value
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  y && !y.done && (o = v.return) && o.call(v)
                } finally {
                  if (e) throw e.error
                }
              }
              w >= 10 && (c |= 1 << 5 - l)
            }
            for (i = n.determineFirstDigit(i, c), h = tr.findGuardPattern(t, h, !0, tr.MIDDLE_PATTERN, new Int32Array(tr.MIDDLE_PATTERN.length).fill(0))[1], l = 0; 6 > l && a > h; l++) {
              w = tr.decodeDigit(t, s, h, tr.L_PATTERNS), i += String.fromCharCode(48 + w);
              try {
                for (var d = (u = void 0, rr(s)), b = d.next(); !b.done; b = d.next()) h += b.value
              } catch (t) {
                u = {
                  error: t
                }
              } finally {
                try {
                  b && !b.done && (f = d.return) && f.call(d)
                } finally {
                  if (u) throw u.error
                }
              }
            }
            return {
              rowOffset: h,
              resultString: i
            }
          }, n.prototype.getBarcodeFormat = function() {
            return St.EAN_13
          }, n.determineFirstDigit = function(t, n) {
            for (var r = 0; 10 > r; r++)
              if (n === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode(48 + r) + t;
            throw new it
          }, n.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], n
        }(tr);
      const er = ir;
      var or = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ur = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        fr = function(t) {
          function n() {
            var n = t.call(this) || this;
            return n.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), n
          }
          return or(n, t), n.prototype.decodeMiddle = function(t, n, r) {
            var i, e, o, u, f = this.decodeMiddleCounters;
            f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 0;
            for (var s = t.getSize(), a = n[1], h = 0; 4 > h && s > a; h++) {
              var c = tr.decodeDigit(t, f, a, tr.L_PATTERNS);
              r += String.fromCharCode(48 + c);
              try {
                for (var l = (i = void 0, ur(f)), w = l.next(); !w.done; w = l.next()) a += w.value
              } catch (t) {
                i = {
                  error: t
                }
              } finally {
                try {
                  w && !w.done && (e = l.return) && e.call(l)
                } finally {
                  if (i) throw i.error
                }
              }
            }
            for (a = tr.findGuardPattern(t, a, !0, tr.MIDDLE_PATTERN, new Int32Array(tr.MIDDLE_PATTERN.length).fill(0))[1], h = 0; 4 > h && s > a; h++) {
              c = tr.decodeDigit(t, f, a, tr.L_PATTERNS), r += String.fromCharCode(48 + c);
              try {
                for (var v = (o = void 0, ur(f)), y = v.next(); !y.done; y = v.next()) a += y.value
              } catch (t) {
                o = {
                  error: t
                }
              } finally {
                try {
                  y && !y.done && (u = v.return) && u.call(v)
                } finally {
                  if (o) throw o.error
                }
              }
            }
            return {
              rowOffset: a,
              resultString: r
            }
          }, n.prototype.getBarcodeFormat = function() {
            return St.EAN_8
          }, n
        }(tr);
      const sr = fr;
      var ar = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        hr = function(t) {
          function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.ean13Reader = new er, n
          }
          return ar(n, t), n.prototype.getBarcodeFormat = function() {
            return St.UPC_A
          }, n.prototype.decode = function(t, n) {
            return this.maybeReturnResult(this.ean13Reader.decode(t))
          }, n.prototype.decodeRow = function(t, n, r) {
            return this.maybeReturnResult(this.ean13Reader.decodeRow(t, n, r))
          }, n.prototype.decodeMiddle = function(t, n, r) {
            return this.ean13Reader.decodeMiddle(t, n, r)
          }, n.prototype.maybeReturnResult = function(t) {
            var n = t.getText();
            if ("0" === n.charAt(0)) {
              var r = new _t(n.substring(1), null, null, t.getResultPoints(), St.UPC_A);
              return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()), r
            }
            throw new it
          }, n.prototype.reset = function() {
            this.ean13Reader.reset()
          }, n
        }(tr);
      const cr = hr;
      var lr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        wr = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        vr = function(t) {
          function n() {
            var n = t.call(this) || this;
            return n.decodeMiddleCounters = new Int32Array(4), n
          }
          return lr(n, t), n.prototype.decodeMiddle = function(t, r, i) {
            var e, o, u = this.decodeMiddleCounters.map(function(t) {
              return t
            });
            u[0] = 0, u[1] = 0, u[2] = 0, u[3] = 0;
            for (var f = t.getSize(), s = r[1], a = 0, h = 0; 6 > h && f > s; h++) {
              var c = n.decodeDigit(t, u, s, n.L_AND_G_PATTERNS);
              i += String.fromCharCode(48 + c % 10);
              try {
                for (var l = (e = void 0, wr(u)), w = l.next(); !w.done; w = l.next()) s += w.value
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  w && !w.done && (o = l.return) && o.call(l)
                } finally {
                  if (e) throw e.error
                }
              }
              c >= 10 && (a |= 1 << 5 - h)
            }
            return n.determineNumSysAndCheckDigit(new Q(i), a), s
          }, n.prototype.decodeEnd = function(t, r) {
            return n.findGuardPatternWithoutCounters(t, r, !0, n.MIDDLE_END_PATTERN)
          }, n.prototype.checkChecksum = function(t) {
            return tr.checkChecksum(n.convertUPCEtoUPCA(t))
          }, n.determineNumSysAndCheckDigit = function(t, n) {
            for (var r = 0; 1 >= r; r++)
              for (var i = 0; 10 > i; i++)
                if (n === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][i]) return t.insert(0, "0" + r), void t.append("0" + i);
            throw it.getNotFoundInstance()
          }, n.prototype.getBarcodeFormat = function() {
            return St.UPC_E
          }, n.convertUPCEtoUPCA = function(t) {
            var n = t.slice(1, 7).split("").map(function(t) {
                return t.charCodeAt(0)
              }),
              r = new Q;
            r.append(t.charAt(0));
            var i = n[5];
            switch (i) {
              case 0:
              case 1:
              case 2:
                r.appendChars(n, 0, 2), r.append(i), r.append("0000"), r.appendChars(n, 2, 3);
                break;
              case 3:
                r.appendChars(n, 0, 3), r.append("00000"), r.appendChars(n, 3, 2);
                break;
              case 4:
                r.appendChars(n, 0, 4), r.append("00000"), r.append(n[4]);
                break;
              default:
                r.appendChars(n, 0, 5), r.append("0000"), r.append(i)
            }
            return t.length >= 8 && r.append(t.charAt(7)), r.toString()
          }, n.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), n.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])], n
        }(tr);
      const yr = vr;
      var dr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        br = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Ar = function(t) {
          function n(n) {
            var r = t.call(this) || this,
              i = null == n ? null : n.get(B.POSSIBLE_FORMATS),
              e = [];
            return null != i && (i.indexOf(St.EAN_13) > -1 && e.push(new er), i.indexOf(St.UPC_A) > -1 && e.push(new cr), i.indexOf(St.EAN_8) > -1 && e.push(new sr), i.indexOf(St.UPC_E) > -1 && e.push(new yr)), 0 === e.length && (e.push(new er), e.push(new cr), e.push(new sr), e.push(new yr)), r.readers = e, r
          }
          return dr(n, t), n.prototype.decodeRow = function(t, n, r) {
            var i, e;
            try {
              for (var o = br(this.readers), u = o.next(); !u.done; u = o.next()) {
                var f = u.value;
                try {
                  var s = f.decodeRow(t, n, r),
                    a = s.getBarcodeFormat() === St.EAN_13 && "0" === s.getText().charAt(0),
                    h = null == r ? null : r.get(B.POSSIBLE_FORMATS),
                    c = null == h || h.includes(St.UPC_A);
                  if (a && c) {
                    var l = s.getRawBytes(),
                      w = new _t(s.getText().substring(1), l, l ? l.length : null, s.getResultPoints(), St.UPC_A);
                    return w.putAllMetadata(s.getResultMetadata()), w
                  }
                  return s
                } catch {}
              }
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                u && !u.done && (e = o.return) && e.call(o)
              } finally {
                if (i) throw i.error
              }
            }
            throw new it
          }, n.prototype.reset = function() {
            var t, n;
            try {
              for (var r = br(this.readers), i = r.next(); !i.done; i = r.next()) i.value.reset()
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }, n
        }(En);
      const pr = Ar;
      var mr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ir = function(t) {
          function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.CODA_BAR_CHAR_SET = {
              nnnnnww: "0",
              nnnnwwn: "1",
              nnnwnnw: "2",
              wwnnnnn: "3",
              nnwnnwn: "4",
              wnnnnwn: "5",
              nwnnnnw: "6",
              nwnnwnn: "7",
              nwwnnnn: "8",
              wnnwnnn: "9",
              nnnwwnn: "-",
              nnwwnnn: "$",
              wnnnwnw: ":",
              wnwnnnw: "/",
              wnwnwnn: ".",
              nnwwwww: "+",
              nnwwnwn: "A",
              nwnwnnw: "B",
              nnnwnww: "C",
              nnnwwwn: "D"
            }, n
          }
          return mr(n, t), n.prototype.decodeRow = function(t, n, r) {
            var i = this.getValidRowData(n);
            if (!i) throw new it;
            var e = this.codaBarDecodeRow(i.row);
            if (!e) throw new it;
            return new _t(e, null, 0, [new nn(i.left, t), new nn(i.right, t)], St.CODABAR, (new Date).getTime())
          }, n.prototype.getValidRowData = function(t) {
            var n = t.toArray(),
              r = n.indexOf(!0);
            if (-1 === r) return null;
            var i = n.lastIndexOf(!0);
            if (r >= i) return null;
            for (var e = [], o = (n = n.slice(r, i + 1))[0], u = 1, f = 1; f < n.length; f++) n[f] === o ? u++ : (o = n[f], e.push(u), u = 1);
            return e.push(u), 23 > e.length && (e.length + 1) % 8 != 0 ? null : {
              row: e,
              left: r,
              right: i
            }
          }, n.prototype.codaBarDecodeRow = function(t) {
            for (var n = [], r = Math.ceil(t.reduce(function(t, n) {
                return (t + n) / 2
              }, 0)); t.length > 0;) {
              var i = t.splice(0, 8).splice(0, 7).map(function(t) {
                return r > t ? "n" : "w"
              }).join("");
              if (void 0 === this.CODA_BAR_CHAR_SET[i]) return null;
              n.push(this.CODA_BAR_CHAR_SET[i])
            }
            var e = n.join("");
            return this.validCodaBarString(e) ? e : null
          }, n.prototype.validCodaBarString = function(t) {
            return /^[A-D].{1,}[A-D]$/.test(t)
          }, n
        }(En);
      const _r = Ir;
      var gr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Sr = function(t) {
          function n() {
            var n = t.call(this) || this;
            return n.decodeFinderCounters = new Int32Array(4), n.dataCharacterCounters = new Int32Array(8), n.oddRoundingErrors = [, , , , ], n.evenRoundingErrors = [, , , , ], n.oddCounts = Array(n.dataCharacterCounters.length / 2), n.evenCounts = Array(n.dataCharacterCounters.length / 2), n
          }
          return gr(n, t), n.prototype.getDecodeFinderCounters = function() {
            return this.decodeFinderCounters
          }, n.prototype.getDataCharacterCounters = function() {
            return this.dataCharacterCounters
          }, n.prototype.getOddRoundingErrors = function() {
            return this.oddRoundingErrors
          }, n.prototype.getEvenRoundingErrors = function() {
            return this.evenRoundingErrors
          }, n.prototype.getOddCounts = function() {
            return this.oddCounts
          }, n.prototype.getEvenCounts = function() {
            return this.evenCounts
          }, n.prototype.parseFinderValue = function(t, r) {
            for (var i = 0; i < r.length; i++)
              if (En.patternMatchVariance(t, r[i], n.MAX_INDIVIDUAL_VARIANCE) < n.MAX_AVG_VARIANCE) return i;
            throw new it
          }, n.count = function(t) {
            return Jt.sum(new Int32Array(t))
          }, n.increment = function(t, n) {
            for (var r = 0, i = n[0], e = 1; e < t.length; e++) n[e] > i && (i = n[e], r = e);
            t[r]++
          }, n.decrement = function(t, n) {
            for (var r = 0, i = n[0], e = 1; e < t.length; e++) n[e] < i && (i = n[e], r = e);
            t[r]--
          }, n.isFinderPattern = function(t) {
            var r, i, e = t[0] + t[1],
              o = e / (e + t[2] + t[3]);
            if (o >= n.MIN_FINDER_PATTERN_RATIO && o <= n.MAX_FINDER_PATTERN_RATIO) {
              var u = Number.MAX_SAFE_INTEGER,
                f = Number.MIN_SAFE_INTEGER;
              try {
                for (var s = function(t) {
                    var n = "function" == typeof Symbol && Symbol.iterator,
                      r = n && t[n],
                      i = 0;
                    if (r) return r.call(t);
                    if (t && "number" == typeof t.length) return {
                      next: function() {
                        return t && i >= t.length && (t = void 0), {
                          value: t && t[i++],
                          done: !t
                        }
                      }
                    };
                    throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(t), a = s.next(); !a.done; a = s.next()) {
                  var h = a.value;
                  h > f && (f = h), u > h && (u = h)
                }
              } catch (t) {
                r = {
                  error: t
                }
              } finally {
                try {
                  a && !a.done && (i = s.return) && i.call(s)
                } finally {
                  if (r) throw r.error
                }
              }
              return 10 * u > f
            }
            return !1
          }, n.MAX_AVG_VARIANCE = .2, n.MAX_INDIVIDUAL_VARIANCE = .45, n.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, n.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, n
        }(En);
      const Mr = Sr;
      var Er = function() {
        function t(t, n) {
          this.value = t, this.checksumPortion = n
        }
        return t.prototype.getValue = function() {
          return this.value
        }, t.prototype.getChecksumPortion = function() {
          return this.checksumPortion
        }, t.prototype.toString = function() {
          return this.value + "(" + this.checksumPortion + ")"
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.value === r.value && this.checksumPortion === r.checksumPortion
        }, t.prototype.hashCode = function() {
          return this.value ^ this.checksumPortion
        }, t
      }();
      const Or = Er;
      var kr = function() {
        function t(t, n, r, i, e) {
          this.value = t, this.startEnd = n, this.value = t, this.startEnd = n, this.resultPoints = [], this.resultPoints.push(new nn(r, e)), this.resultPoints.push(new nn(i, e))
        }
        return t.prototype.getValue = function() {
          return this.value
        }, t.prototype.getStartEnd = function() {
          return this.startEnd
        }, t.prototype.getResultPoints = function() {
          return this.resultPoints
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.value === r.value
        }, t.prototype.hashCode = function() {
          return this.value
        }, t
      }();
      const Tr = kr;
      var jr = function() {
        function t() {}
        return t.getRSSvalue = function(n, r, i) {
          var e, o, u = 0;
          try {
            for (var f = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(n), s = f.next(); !s.done; s = f.next()) u += s.value
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              s && !s.done && (o = f.return) && o.call(f)
            } finally {
              if (e) throw e.error
            }
          }
          for (var a = 0, h = 0, c = n.length, l = 0; c - 1 > l; l++) {
            var w = void 0;
            for (w = 1, h |= 1 << l; w < n[l]; w++, h &= ~(1 << l)) {
              var v = t.combins(u - w - 1, c - l - 2);
              if (i && 0 === h && u - w - (c - l - 1) >= c - l - 1 && (v -= t.combins(u - w - (c - l), c - l - 2)), c - l - 1 > 1) {
                for (var y = 0, d = u - w - (c - l - 2); d > r; d--) y += t.combins(u - w - d - 1, c - l - 3);
                v -= y * (c - 1 - l)
              } else u - w > r && v--;
              a += v
            }
            u -= w
          }
          return a
        }, t.combins = function(t, n) {
          var r, i;
          t - n > n ? (i = n, r = t - n) : (i = t - n, r = n);
          for (var e = 1, o = 1, u = t; u > r; u--) e *= u, i >= o && (e /= o, o++);
          for (; i >= o;) e /= o, o++;
          return e
        }, t
      }();
      const xr = jr;
      var Cr = function() {
        function t() {}
        return t.buildBitArray = function(t) {
          var n = 2 * t.length - 1;
          null == t[t.length - 1].getRightChar() && (n -= 1);
          for (var r = new U(12 * n), i = 0, e = t[0].getRightChar().getValue(), o = 11; o >= 0; --o) !!(e & 1 << o) && r.set(i), i++;
          for (o = 1; o < t.length; ++o) {
            for (var u = t[o], f = u.getLeftChar().getValue(), s = 11; s >= 0; --s) !!(f & 1 << s) && r.set(i), i++;
            if (null !== u.getRightChar()) {
              var a = u.getRightChar().getValue();
              for (s = 11; s >= 0; --s) !!(a & 1 << s) && r.set(i), i++
            }
          }
          return r
        }, t
      }();
      const Rr = Cr;
      var Nr = function() {
        function t(t, n) {
          n ? this.decodedInformation = null : (this.finished = t, this.decodedInformation = n)
        }
        return t.prototype.getDecodedInformation = function() {
          return this.decodedInformation
        }, t.prototype.isFinished = function() {
          return this.finished
        }, t
      }();
      const Ur = Nr;
      var Dr = function() {
        function t(t) {
          this.newPosition = t
        }
        return t.prototype.getNewPosition = function() {
          return this.newPosition
        }, t
      }();
      const Br = Dr;
      var Pr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Lr = function(t) {
          function n(n, r) {
            var i = t.call(this, n) || this;
            return i.value = r, i
          }
          return Pr(n, t), n.prototype.getValue = function() {
            return this.value
          }, n.prototype.isFNC1 = function() {
            return this.value === n.FNC1
          }, n.FNC1 = "$", n
        }(Br);
      const Fr = Lr;
      var Gr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        zr = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n) || this;
            return i ? (e.remaining = !0, e.remainingValue = e.remainingValue) : (e.remaining = !1, e.remainingValue = 0), e.newString = r, e
          }
          return Gr(n, t), n.prototype.getNewString = function() {
            return this.newString
          }, n.prototype.isRemaining = function() {
            return this.remaining
          }, n.prototype.getRemainingValue = function() {
            return this.remainingValue
          }, n
        }(Br);
      const Hr = zr;
      var qr = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Xr = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n) || this;
            if (0 > r || r > 10 || 0 > i || i > 10) throw new F;
            return e.firstDigit = r, e.secondDigit = i, e
          }
          return qr(n, t), n.prototype.getFirstDigit = function() {
            return this.firstDigit
          }, n.prototype.getSecondDigit = function() {
            return this.secondDigit
          }, n.prototype.getValue = function() {
            return 10 * this.firstDigit + this.secondDigit
          }, n.prototype.isFirstDigitFNC1 = function() {
            return this.firstDigit === n.FNC1
          }, n.prototype.isSecondDigitFNC1 = function() {
            return this.secondDigit === n.FNC1
          }, n.prototype.isAnyFNC1 = function() {
            return this.firstDigit === n.FNC1 || this.secondDigit === n.FNC1
          }, n.FNC1 = 10, n
        }(Br);
      const Wr = Xr;
      var $r = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Kr = function() {
          function t() {}
          return t.parseFieldsInGeneralPurpose = function(n) {
            var r, i, e, o, u, f, s, a;
            if (!n) return null;
            if (2 > n.length) throw new it;
            var h = n.substring(0, 2);
            try {
              for (var c = $r(t.TWO_DIGIT_DATA_LENGTH), l = c.next(); !l.done; l = c.next())
                if ((I = l.value)[0] === h) return I[1] === t.VARIABLE_LENGTH ? t.processVariableAI(2, I[2], n) : t.processFixedAI(2, I[1], n)
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (i = c.return) && i.call(c)
              } finally {
                if (r) throw r.error
              }
            }
            if (3 > n.length) throw new it;
            var w = n.substring(0, 3);
            try {
              for (var v = $r(t.THREE_DIGIT_DATA_LENGTH), y = v.next(); !y.done; y = v.next())
                if ((I = y.value)[0] === w) return I[1] === t.VARIABLE_LENGTH ? t.processVariableAI(3, I[2], n) : t.processFixedAI(3, I[1], n)
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                y && !y.done && (o = v.return) && o.call(v)
              } finally {
                if (e) throw e.error
              }
            }
            try {
              for (var d = $r(t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), b = d.next(); !b.done; b = d.next())
                if ((I = b.value)[0] === w) return I[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, I[2], n) : t.processFixedAI(4, I[1], n)
            } catch (t) {
              u = {
                error: t
              }
            } finally {
              try {
                b && !b.done && (f = d.return) && f.call(d)
              } finally {
                if (u) throw u.error
              }
            }
            if (4 > n.length) throw new it;
            var A = n.substring(0, 4);
            try {
              for (var p = $r(t.FOUR_DIGIT_DATA_LENGTH), m = p.next(); !m.done; m = p.next()) {
                var I;
                if ((I = m.value)[0] === A) return I[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, I[2], n) : t.processFixedAI(4, I[1], n)
              }
            } catch (t) {
              s = {
                error: t
              }
            } finally {
              try {
                m && !m.done && (a = p.return) && a.call(p)
              } finally {
                if (s) throw s.error
              }
            }
            throw new it
          }, t.processFixedAI = function(n, r, i) {
            if (i.length < n) throw new it;
            var e = i.substring(0, n);
            if (i.length < n + r) throw new it;
            var o = i.substring(n, n + r),
              u = i.substring(n + r),
              f = "(" + e + ")" + o,
              s = t.parseFieldsInGeneralPurpose(u);
            return null == s ? f : f + s
          }, t.processVariableAI = function(n, r, i) {
            var e, o = i.substring(0, n);
            e = i.length < n + r ? i.length : n + r;
            var u = i.substring(n, e),
              f = i.substring(e),
              s = "(" + o + ")" + u,
              a = t.parseFieldsInGeneralPurpose(f);
            return null == a ? s : s + a
          }, t.VARIABLE_LENGTH = [], t.TWO_DIGIT_DATA_LENGTH = [
            ["00", 18],
            ["01", 14],
            ["02", 14],
            ["10", t.VARIABLE_LENGTH, 20],
            ["11", 6],
            ["12", 6],
            ["13", 6],
            ["15", 6],
            ["17", 6],
            ["20", 2],
            ["21", t.VARIABLE_LENGTH, 20],
            ["22", t.VARIABLE_LENGTH, 29],
            ["30", t.VARIABLE_LENGTH, 8],
            ["37", t.VARIABLE_LENGTH, 8],
            ["90", t.VARIABLE_LENGTH, 30],
            ["91", t.VARIABLE_LENGTH, 30],
            ["92", t.VARIABLE_LENGTH, 30],
            ["93", t.VARIABLE_LENGTH, 30],
            ["94", t.VARIABLE_LENGTH, 30],
            ["95", t.VARIABLE_LENGTH, 30],
            ["96", t.VARIABLE_LENGTH, 30],
            ["97", t.VARIABLE_LENGTH, 3],
            ["98", t.VARIABLE_LENGTH, 30],
            ["99", t.VARIABLE_LENGTH, 30]
          ], t.THREE_DIGIT_DATA_LENGTH = [
            ["240", t.VARIABLE_LENGTH, 30],
            ["241", t.VARIABLE_LENGTH, 30],
            ["242", t.VARIABLE_LENGTH, 6],
            ["250", t.VARIABLE_LENGTH, 30],
            ["251", t.VARIABLE_LENGTH, 30],
            ["253", t.VARIABLE_LENGTH, 17],
            ["254", t.VARIABLE_LENGTH, 20],
            ["400", t.VARIABLE_LENGTH, 30],
            ["401", t.VARIABLE_LENGTH, 30],
            ["402", 17],
            ["403", t.VARIABLE_LENGTH, 30],
            ["410", 13],
            ["411", 13],
            ["412", 13],
            ["413", 13],
            ["414", 13],
            ["420", t.VARIABLE_LENGTH, 20],
            ["421", t.VARIABLE_LENGTH, 15],
            ["422", 3],
            ["423", t.VARIABLE_LENGTH, 15],
            ["424", 3],
            ["425", 3],
            ["426", 3]
          ], t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
            ["310", 6],
            ["311", 6],
            ["312", 6],
            ["313", 6],
            ["314", 6],
            ["315", 6],
            ["316", 6],
            ["320", 6],
            ["321", 6],
            ["322", 6],
            ["323", 6],
            ["324", 6],
            ["325", 6],
            ["326", 6],
            ["327", 6],
            ["328", 6],
            ["329", 6],
            ["330", 6],
            ["331", 6],
            ["332", 6],
            ["333", 6],
            ["334", 6],
            ["335", 6],
            ["336", 6],
            ["340", 6],
            ["341", 6],
            ["342", 6],
            ["343", 6],
            ["344", 6],
            ["345", 6],
            ["346", 6],
            ["347", 6],
            ["348", 6],
            ["349", 6],
            ["350", 6],
            ["351", 6],
            ["352", 6],
            ["353", 6],
            ["354", 6],
            ["355", 6],
            ["356", 6],
            ["357", 6],
            ["360", 6],
            ["361", 6],
            ["362", 6],
            ["363", 6],
            ["364", 6],
            ["365", 6],
            ["366", 6],
            ["367", 6],
            ["368", 6],
            ["369", 6],
            ["390", t.VARIABLE_LENGTH, 15],
            ["391", t.VARIABLE_LENGTH, 18],
            ["392", t.VARIABLE_LENGTH, 15],
            ["393", t.VARIABLE_LENGTH, 18],
            ["703", t.VARIABLE_LENGTH, 30]
          ], t.FOUR_DIGIT_DATA_LENGTH = [
            ["7001", 13],
            ["7002", t.VARIABLE_LENGTH, 30],
            ["7003", 10],
            ["8001", 14],
            ["8002", t.VARIABLE_LENGTH, 20],
            ["8003", t.VARIABLE_LENGTH, 30],
            ["8004", t.VARIABLE_LENGTH, 30],
            ["8005", 6],
            ["8006", 18],
            ["8007", t.VARIABLE_LENGTH, 30],
            ["8008", t.VARIABLE_LENGTH, 12],
            ["8018", 18],
            ["8020", t.VARIABLE_LENGTH, 25],
            ["8100", 6],
            ["8101", 10],
            ["8102", 2],
            ["8110", t.VARIABLE_LENGTH, 70],
            ["8200", t.VARIABLE_LENGTH, 70]
          ], t
        }();
      const Vr = Kr;
      var Zr = function() {
        function t(t) {
          this.buffer = new Q, this.information = t
        }
        return t.prototype.decodeAllCodes = function(t, n) {
          for (var r = n, i = null;;) {
            var e = this.decodeGeneralPurposeField(r, i),
              o = Vr.parseFieldsInGeneralPurpose(e.getNewString());
            if (null != o && t.append(o), i = e.isRemaining() ? "" + e.getRemainingValue() : null, r === e.getNewPosition()) break;
            r = e.getNewPosition()
          }
          return t.toString()
        }, t.prototype.isStillNumeric = function(t) {
          if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
          for (var n = t; t + 3 > n; ++n)
            if (this.information.get(n)) return !0;
          return this.information.get(t + 3)
        }, t.prototype.decodeNumeric = function(t) {
          if (t + 7 > this.information.getSize()) {
            var n = this.extractNumericValueFromBitArray(t, 4);
            return new Wr(this.information.getSize(), 0 === n ? Wr.FNC1 : n - 1, Wr.FNC1)
          }
          var r = this.extractNumericValueFromBitArray(t, 7);
          return new Wr(t + 7, (r - 8) / 11, (r - 8) % 11)
        }, t.prototype.extractNumericValueFromBitArray = function(n, r) {
          return t.extractNumericValueFromBitArray(this.information, n, r)
        }, t.extractNumericValueFromBitArray = function(t, n, r) {
          for (var i = 0, e = 0; r > e; ++e) t.get(n + e) && (i |= 1 << r - e - 1);
          return i
        }, t.prototype.decodeGeneralPurposeField = function(t, n) {
          this.buffer.setLengthToZero(), null != n && this.buffer.append(n), this.current.setPosition(t);
          var r = this.parseBlocks();
          return null != r && r.isRemaining() ? new Hr(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new Hr(this.current.getPosition(), this.buffer.toString())
        }, t.prototype.parseBlocks = function() {
          var t, n;
          do {
            var r = this.current.getPosition();
            if (t = this.current.isAlpha() ? (n = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (n = this.parseIsoIec646Block()).isFinished() : (n = this.parseNumericBlock()).isFinished(), r === this.current.getPosition() && !t) break
          } while (!t);
          return n.getDecodedInformation()
        }, t.prototype.parseNumericBlock = function() {
          for (; this.isStillNumeric(this.current.getPosition());) {
            var t = this.decodeNumeric(this.current.getPosition());
            if (this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1()) {
              var n = void 0;
              return n = t.isSecondDigitFNC1() ? new Hr(this.current.getPosition(), this.buffer.toString()) : new Hr(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit()), new Ur(!0, n)
            }
            if (this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1()) return n = new Hr(this.current.getPosition(), this.buffer.toString()), new Ur(!0, n);
            this.buffer.append(t.getSecondDigit())
          }
          return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Ur(!1)
        }, t.prototype.parseIsoIec646Block = function() {
          for (; this.isStillIsoIec646(this.current.getPosition());) {
            var t = this.decodeIsoIec646(this.current.getPosition());
            if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
              var n = new Hr(this.current.getPosition(), this.buffer.toString());
              return new Ur(!0, n)
            }
            this.buffer.append(t.getValue())
          }
          return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Ur(!1)
        }, t.prototype.parseAlphaBlock = function() {
          for (; this.isStillAlpha(this.current.getPosition());) {
            var t = this.decodeAlphanumeric(this.current.getPosition());
            if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
              var n = new Hr(this.current.getPosition(), this.buffer.toString());
              return new Ur(!0, n)
            }
            this.buffer.append(t.getValue())
          }
          return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Ur(!1)
        }, t.prototype.isStillIsoIec646 = function(t) {
          if (t + 5 > this.information.getSize()) return !1;
          var n = this.extractNumericValueFromBitArray(t, 5);
          if (n >= 5 && 16 > n) return !0;
          if (t + 7 > this.information.getSize()) return !1;
          var r = this.extractNumericValueFromBitArray(t, 7);
          if (r >= 64 && 116 > r) return !0;
          if (t + 8 > this.information.getSize()) return !1;
          var i = this.extractNumericValueFromBitArray(t, 8);
          return i >= 232 && 253 > i
        }, t.prototype.decodeIsoIec646 = function(t) {
          var n = this.extractNumericValueFromBitArray(t, 5);
          if (15 === n) return new Fr(t + 5, Fr.FNC1);
          if (n >= 5 && 15 > n) return new Fr(t + 5, "0" + (n - 5));
          var r, i = this.extractNumericValueFromBitArray(t, 7);
          if (i >= 64 && 90 > i) return new Fr(t + 7, "" + (i + 1));
          if (i >= 90 && 116 > i) return new Fr(t + 7, "" + (i + 7));
          switch (this.extractNumericValueFromBitArray(t, 8)) {
            case 232:
              r = "!";
              break;
            case 233:
              r = '"';
              break;
            case 234:
              r = "%";
              break;
            case 235:
              r = "&";
              break;
            case 236:
              r = "'";
              break;
            case 237:
              r = "(";
              break;
            case 238:
              r = ")";
              break;
            case 239:
              r = "*";
              break;
            case 240:
              r = "+";
              break;
            case 241:
              r = ",";
              break;
            case 242:
              r = "-";
              break;
            case 243:
              r = ".";
              break;
            case 244:
              r = "/";
              break;
            case 245:
              r = ":";
              break;
            case 246:
              r = ";";
              break;
            case 247:
              r = "<";
              break;
            case 248:
              r = "=";
              break;
            case 249:
              r = ">";
              break;
            case 250:
              r = "?";
              break;
            case 251:
              r = "_";
              break;
            case 252:
              r = " ";
              break;
            default:
              throw new F
          }
          return new Fr(t + 8, r)
        }, t.prototype.isStillAlpha = function(t) {
          if (t + 5 > this.information.getSize()) return !1;
          var n = this.extractNumericValueFromBitArray(t, 5);
          if (n >= 5 && 16 > n) return !0;
          if (t + 6 > this.information.getSize()) return !1;
          var r = this.extractNumericValueFromBitArray(t, 6);
          return r >= 16 && 63 > r
        }, t.prototype.decodeAlphanumeric = function(t) {
          var n = this.extractNumericValueFromBitArray(t, 5);
          if (15 === n) return new Fr(t + 5, Fr.FNC1);
          if (n >= 5 && 15 > n) return new Fr(t + 5, "0" + (n - 5));
          var r, i = this.extractNumericValueFromBitArray(t, 6);
          if (i >= 32 && 58 > i) return new Fr(t + 6, "" + (i + 33));
          switch (i) {
            case 58:
              r = "*";
              break;
            case 59:
              r = ",";
              break;
            case 60:
              r = "-";
              break;
            case 61:
              r = ".";
              break;
            case 62:
              r = "/";
              break;
            default:
              throw new qt("Decoding invalid alphanumeric value: " + i)
          }
          return new Fr(t + 6, r)
        }, t.prototype.isAlphaTo646ToAlphaLatch = function(t) {
          if (t + 1 > this.information.getSize()) return !1;
          for (var n = 0; 5 > n && n + t < this.information.getSize(); ++n)
            if (2 === n) {
              if (!this.information.get(t + 2)) return !1
            } else if (this.information.get(t + n)) return !1;
          return !0
        }, t.prototype.isAlphaOr646ToNumericLatch = function(t) {
          if (t + 3 > this.information.getSize()) return !1;
          for (var n = t; t + 3 > n; ++n)
            if (this.information.get(n)) return !1;
          return !0
        }, t.prototype.isNumericToAlphaNumericLatch = function(t) {
          if (t + 1 > this.information.getSize()) return !1;
          for (var n = 0; 4 > n && n + t < this.information.getSize(); ++n)
            if (this.information.get(t + n)) return !1;
          return !0
        }, t
      }();
      const Jr = Zr;
      var Qr = function() {
        function t(t) {
          this.information = t, this.generalDecoder = new Jr(t)
        }
        return t.prototype.getInformation = function() {
          return this.information
        }, t.prototype.getGeneralDecoder = function() {
          return this.generalDecoder
        }, t
      }();
      const Yr = Qr;
      var ti = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ni = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return ti(n, t), n.prototype.encodeCompressedGtin = function(t, n) {
            t.append("(01)");
            var r = t.length();
            t.append("9"), this.encodeCompressedGtinWithoutAI(t, n, r)
          }, n.prototype.encodeCompressedGtinWithoutAI = function(t, r, i) {
            for (var e = 0; 4 > e; ++e) {
              var o = this.getGeneralDecoder().extractNumericValueFromBitArray(r + 10 * e, 10);
              o / 100 == 0 && t.append("0"), o / 10 == 0 && t.append("0"), t.append(o)
            }
            n.appendCheckDigit(t, i)
          }, n.appendCheckDigit = function(t, n) {
            for (var r = 0, i = 0; 13 > i; i++) {
              var e = t.charAt(i + n).charCodeAt(0) - 48;
              r += 1 & i ? e : 3 * e
            }
            10 == (r = 10 - r % 10) && (r = 0), t.append(r)
          }, n.GTIN_SIZE = 40, n
        }(Yr);
      const ri = ni;
      var ii = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ei = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return ii(n, t), n.prototype.parseInformation = function() {
            var t = new Q;
            t.append("(01)");
            var r = t.length(),
              i = this.getGeneralDecoder().extractNumericValueFromBitArray(n.HEADER_SIZE, 4);
            return t.append(i), this.encodeCompressedGtinWithoutAI(t, n.HEADER_SIZE + 4, r), this.getGeneralDecoder().decodeAllCodes(t, n.HEADER_SIZE + 44)
          }, n.HEADER_SIZE = 4, n
        }(ri);
      const oi = ei;
      var ui = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        fi = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return ui(n, t), n.prototype.parseInformation = function() {
            var t = new Q;
            return this.getGeneralDecoder().decodeAllCodes(t, n.HEADER_SIZE)
          }, n.HEADER_SIZE = 5, n
        }(Yr);
      const si = fi;
      var ai = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        hi = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return ai(n, t), n.prototype.encodeCompressedWeight = function(t, n, r) {
            var i = this.getGeneralDecoder().extractNumericValueFromBitArray(n, r);
            this.addWeightCode(t, i);
            for (var e = this.checkWeight(i), o = 1e5, u = 0; 5 > u; ++u) e / o === 0 && t.append("0"), o /= 10;
            t.append(e)
          }, n
        }(ri);
      const ci = hi;
      var li = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        wi = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return li(n, t), n.prototype.parseInformation = function() {
            if (this.getInformation().getSize() !== n.HEADER_SIZE + ci.GTIN_SIZE + n.WEIGHT_SIZE) throw new it;
            var t = new Q;
            return this.encodeCompressedGtin(t, n.HEADER_SIZE), this.encodeCompressedWeight(t, n.HEADER_SIZE + ci.GTIN_SIZE, n.WEIGHT_SIZE), t.toString()
          }, n.HEADER_SIZE = 5, n.WEIGHT_SIZE = 15, n
        }(ci);
      const vi = wi;
      var yi = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        di = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return yi(n, t), n.prototype.addWeightCode = function(t, n) {
            t.append("(3103)")
          }, n.prototype.checkWeight = function(t) {
            return t
          }, n
        }(vi);
      const bi = di;
      var Ai = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        pi = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return Ai(n, t), n.prototype.addWeightCode = function(t, n) {
            1e4 > n ? t.append("(3202)") : t.append("(3203)")
          }, n.prototype.checkWeight = function(t) {
            return 1e4 > t ? t : t - 1e4
          }, n
        }(vi);
      const mi = pi;
      var Ii = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        _i = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return Ii(n, t), n.prototype.parseInformation = function() {
            if (this.getInformation().getSize() < n.HEADER_SIZE + ri.GTIN_SIZE) throw new it;
            var t = new Q;
            this.encodeCompressedGtin(t, n.HEADER_SIZE);
            var r = this.getGeneralDecoder().extractNumericValueFromBitArray(n.HEADER_SIZE + ri.GTIN_SIZE, n.LAST_DIGIT_SIZE);
            t.append("(392"), t.append(r), t.append(")");
            var i = this.getGeneralDecoder().decodeGeneralPurposeField(n.HEADER_SIZE + ri.GTIN_SIZE + n.LAST_DIGIT_SIZE, null);
            return t.append(i.getNewString()), t.toString()
          }, n.HEADER_SIZE = 8, n.LAST_DIGIT_SIZE = 2, n
        }(ri);
      const gi = _i;
      var Si = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Mi = function(t) {
          function n(n) {
            return t.call(this, n) || this
          }
          return Si(n, t), n.prototype.parseInformation = function() {
            if (this.getInformation().getSize() < n.HEADER_SIZE + ri.GTIN_SIZE) throw new it;
            var t = new Q;
            this.encodeCompressedGtin(t, n.HEADER_SIZE);
            var r = this.getGeneralDecoder().extractNumericValueFromBitArray(n.HEADER_SIZE + ri.GTIN_SIZE, n.LAST_DIGIT_SIZE);
            t.append("(393"), t.append(r), t.append(")");
            var i = this.getGeneralDecoder().extractNumericValueFromBitArray(n.HEADER_SIZE + ri.GTIN_SIZE + n.LAST_DIGIT_SIZE, n.FIRST_THREE_DIGITS_SIZE);
            i / 100 == 0 && t.append("0"), i / 10 == 0 && t.append("0"), t.append(i);
            var e = this.getGeneralDecoder().decodeGeneralPurposeField(n.HEADER_SIZE + ri.GTIN_SIZE + n.LAST_DIGIT_SIZE + n.FIRST_THREE_DIGITS_SIZE, null);
            return t.append(e.getNewString()), t.toString()
          }, n.HEADER_SIZE = 8, n.LAST_DIGIT_SIZE = 2, n.FIRST_THREE_DIGITS_SIZE = 10, n
        }(ri);
      const Ei = Mi;
      var Oi = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ki = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n) || this;
            return e.dateCode = i, e.firstAIdigits = r, e
          }
          return Oi(n, t), n.prototype.parseInformation = function() {
            if (this.getInformation().getSize() !== n.HEADER_SIZE + n.GTIN_SIZE + n.WEIGHT_SIZE + n.DATE_SIZE) throw new it;
            var t = new Q;
            return this.encodeCompressedGtin(t, n.HEADER_SIZE), this.encodeCompressedWeight(t, n.HEADER_SIZE + n.GTIN_SIZE, n.WEIGHT_SIZE), this.encodeCompressedDate(t, n.HEADER_SIZE + n.GTIN_SIZE + n.WEIGHT_SIZE), t.toString()
          }, n.prototype.encodeCompressedDate = function(t, r) {
            var i = this.getGeneralDecoder().extractNumericValueFromBitArray(r, n.DATE_SIZE);
            if (38400 !== i) {
              t.append("("), t.append(this.dateCode), t.append(")");
              var e = i % 32,
                o = (i /= 32) % 12 + 1,
                u = i /= 12;
              u / 10 == 0 && t.append("0"), t.append(u), o / 10 == 0 && t.append("0"), t.append(o), e / 10 == 0 && t.append("0"), t.append(e)
            }
          }, n.prototype.addWeightCode = function(t, n) {
            t.append("("), t.append(this.firstAIdigits), t.append(n / 1e5), t.append(")")
          }, n.prototype.checkWeight = function(t) {
            return t % 1e5
          }, n.HEADER_SIZE = 8, n.WEIGHT_SIZE = 20, n.DATE_SIZE = 16, n
        }(ci);
      const Ti = ki;
      var ji = function() {
        function t(t, n, r, i) {
          this.leftchar = t, this.rightchar = n, this.finderpattern = r, this.maybeLast = i
        }
        return t.prototype.mayBeLast = function() {
          return this.maybeLast
        }, t.prototype.getLeftChar = function() {
          return this.leftchar
        }, t.prototype.getRightChar = function() {
          return this.rightchar
        }, t.prototype.getFinderPattern = function() {
          return this.finderpattern
        }, t.prototype.mustBeLast = function() {
          return null == this.rightchar
        }, t.prototype.toString = function() {
          return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]"
        }, t.equals = function(n, r) {
          return n instanceof t && t.equalsOrNull(n.leftchar, r.leftchar) && t.equalsOrNull(n.rightchar, r.rightchar) && t.equalsOrNull(n.finderpattern, r.finderpattern)
        }, t.equalsOrNull = function(n, r) {
          return null === n ? null === r : t.equals(n, r)
        }, t.prototype.hashCode = function() {
          return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
        }, t
      }();
      const xi = ji;
      var Ci = function() {
        function t(t, n, r) {
          this.pairs = t, this.rowNumber = n, this.wasReversed = r
        }
        return t.prototype.getPairs = function() {
          return this.pairs
        }, t.prototype.getRowNumber = function() {
          return this.rowNumber
        }, t.prototype.isReversed = function() {
          return this.wasReversed
        }, t.prototype.isEquivalent = function(t) {
          return this.checkEqualitity(this, t)
        }, t.prototype.toString = function() {
          return "{ " + this.pairs + " }"
        }, t.prototype.equals = function(n, r) {
          return n instanceof t && this.checkEqualitity(n, r) && n.wasReversed === r.wasReversed
        }, t.prototype.checkEqualitity = function(t, n) {
          var r;
          if (t && n) return t.forEach(function(t, i) {
            n.forEach(function(n) {
              t.getLeftChar().getValue() === n.getLeftChar().getValue() && t.getRightChar().getValue() === n.getRightChar().getValue() && t.getFinderPatter().getValue() === n.getFinderPatter().getValue() && (r = !0)
            })
          }), r
        }, t
      }();
      const Ri = Ci;
      var Ni = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ui = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Di = function(t) {
          function n() {
            var r = null !== t && t.apply(this, arguments) || this;
            return r.pairs = Array(n.MAX_PAIRS), r.rows = [], r.startEnd = [2], r
          }
          return Ni(n, t), n.prototype.decodeRow = function(t, r, i) {
            this.pairs.length = 0, this.startFromEven = !1;
            try {
              return n.constructResult(this.decodeRow2pairs(t, r))
            } catch {}
            return this.pairs.length = 0, this.startFromEven = !0, n.constructResult(this.decodeRow2pairs(t, r))
          }, n.prototype.reset = function() {
            this.pairs.length = 0, this.rows.length = 0
          }, n.prototype.decodeRow2pairs = function(t, n) {
            for (var r = !1; !r;) try {
              this.pairs.push(this.retrieveNextPair(n, this.pairs, t))
            } catch (t) {
              if (t instanceof it) {
                if (!this.pairs.length) throw new it;
                r = !0
              }
            }
            if (this.checkChecksum()) return this.pairs;
            var i;
            if (i = !!this.rows.length, this.storeRow(t, !1), i) {
              var e = this.checkRowsBoolean(!1);
              if (null != e || null != (e = this.checkRowsBoolean(!0))) return e
            }
            throw new it
          }, n.prototype.checkRowsBoolean = function(t) {
            if (this.rows.length > 25) return this.rows.length = 0, null;
            this.pairs.length = 0, t && (this.rows = this.rows.reverse());
            var n = null;
            try {
              n = this.checkRows([], 0)
            } catch (t) {
              console.log(t)
            }
            return t && (this.rows = this.rows.reverse()), n
          }, n.prototype.checkRows = function(t, r) {
            for (var i, e, o = r; o < this.rows.length; o++) {
              var u = this.rows[o];
              this.pairs.length = 0;
              try {
                for (var f = (i = void 0, Ui(t)), s = f.next(); !s.done; s = f.next()) {
                  var a = s.value;
                  this.pairs.push(a.getPairs())
                }
              } catch (t) {
                i = {
                  error: t
                }
              } finally {
                try {
                  s && !s.done && (e = f.return) && e.call(f)
                } finally {
                  if (i) throw i.error
                }
              }
              if (this.pairs.push(u.getPairs()), n.isValidSequence(this.pairs)) {
                if (this.checkChecksum()) return this.pairs;
                var h = Array(t);
                h.push(u);
                try {
                  return this.checkRows(h, o + 1)
                } catch (t) {
                  console.log(t)
                }
              }
            }
            throw new it
          }, n.isValidSequence = function(t) {
            var r, i;
            try {
              for (var e = Ui(n.FINDER_PATTERN_SEQUENCES), o = e.next(); !o.done; o = e.next()) {
                var u = o.value;
                if (t.length <= u.length) {
                  for (var f = !0, s = 0; s < t.length; s++)
                    if (t[s].getFinderPattern().getValue() !== u[s]) {
                      f = !1;
                      break
                    } if (f) return !0
                }
              }
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (i = e.return) && i.call(e)
              } finally {
                if (r) throw r.error
              }
            }
            return !1
          }, n.prototype.storeRow = function(t, r) {
            for (var i = 0, e = !1, o = !1; i < this.rows.length;) {
              var u = this.rows[i];
              if (u.getRowNumber() > t) {
                o = u.isEquivalent(this.pairs);
                break
              }
              e = u.isEquivalent(this.pairs), i++
            }
            o || e || n.isPartialRow(this.pairs, this.rows) || (this.rows.push(i, new Ri(this.pairs, t, r)), this.removePartialRows(this.pairs, this.rows))
          }, n.prototype.removePartialRows = function(t, n) {
            var r, i, e, o, u, f;
            try {
              for (var s = Ui(n), a = s.next(); !a.done; a = s.next()) {
                var h = a.value;
                if (h.getPairs().length !== t.length) try {
                  for (var c = (e = void 0, Ui(h.getPairs())), l = c.next(); !l.done; l = c.next()) {
                    var w = l.value;
                    try {
                      for (var v = (u = void 0, Ui(t)), y = v.next(); !y.done; y = v.next()) {
                        var d = y.value;
                        if (xi.equals(w, d)) break
                      }
                    } catch (t) {
                      u = {
                        error: t
                      }
                    } finally {
                      try {
                        y && !y.done && (f = v.return) && f.call(v)
                      } finally {
                        if (u) throw u.error
                      }
                    }
                  }
                } catch (t) {
                  e = {
                    error: t
                  }
                } finally {
                  try {
                    l && !l.done && (o = c.return) && o.call(c)
                  } finally {
                    if (e) throw e.error
                  }
                }
              }
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                a && !a.done && (i = s.return) && i.call(s)
              } finally {
                if (r) throw r.error
              }
            }
          }, n.isPartialRow = function(t, n) {
            var r, i, e, o, u, f;
            try {
              for (var s = Ui(n), a = s.next(); !a.done; a = s.next()) {
                var h = a.value,
                  c = !0;
                try {
                  for (var l = (e = void 0, Ui(t)), w = l.next(); !w.done; w = l.next()) {
                    var v = w.value,
                      y = !1;
                    try {
                      for (var d = (u = void 0, Ui(h.getPairs())), b = d.next(); !b.done; b = d.next()) {
                        var A = b.value;
                        if (v.equals(A)) {
                          y = !0;
                          break
                        }
                      }
                    } catch (t) {
                      u = {
                        error: t
                      }
                    } finally {
                      try {
                        b && !b.done && (f = d.return) && f.call(d)
                      } finally {
                        if (u) throw u.error
                      }
                    }
                    if (!y) {
                      c = !1;
                      break
                    }
                  }
                } catch (t) {
                  e = {
                    error: t
                  }
                } finally {
                  try {
                    w && !w.done && (o = l.return) && o.call(l)
                  } finally {
                    if (e) throw e.error
                  }
                }
                if (c) return !0
              }
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                a && !a.done && (i = s.return) && i.call(s)
              } finally {
                if (r) throw r.error
              }
            }
            return !1
          }, n.prototype.getRows = function() {
            return this.rows
          }, n.constructResult = function(t) {
            var n = function(t) {
                try {
                  if (t.get(1)) return new oi(t);
                  if (!t.get(2)) return new si(t);
                  switch (Jr.extractNumericValueFromBitArray(t, 1, 4)) {
                    case 4:
                      return new bi(t);
                    case 5:
                      return new mi(t)
                  }
                  switch (Jr.extractNumericValueFromBitArray(t, 1, 5)) {
                    case 12:
                      return new gi(t);
                    case 13:
                      return new Ei(t)
                  }
                  switch (Jr.extractNumericValueFromBitArray(t, 1, 7)) {
                    case 56:
                      return new Ti(t, "310", "11");
                    case 57:
                      return new Ti(t, "320", "11");
                    case 58:
                      return new Ti(t, "310", "13");
                    case 59:
                      return new Ti(t, "320", "13");
                    case 60:
                      return new Ti(t, "310", "15");
                    case 61:
                      return new Ti(t, "320", "15");
                    case 62:
                      return new Ti(t, "310", "17");
                    case 63:
                      return new Ti(t, "320", "17")
                  }
                } catch (n) {
                  throw console.log(n), new qt("unknown decoder: " + t)
                }
              }(Rr.buildBitArray(t)),
              r = n.parseInformation(),
              i = t[0].getFinderPattern().getResultPoints(),
              e = t[t.length - 1].getFinderPattern().getResultPoints(),
              o = [i[0], i[1], e[0], e[1]];
            return new _t(r, null, null, o, St.RSS_EXPANDED, null)
          }, n.prototype.checkChecksum = function() {
            var t = this.pairs.get(0),
              n = t.getLeftChar(),
              r = t.getRightChar();
            if (null === r) return !1;
            for (var i = r.getChecksumPortion(), e = 2, o = 1; o < this.pairs.size(); ++o) {
              var u = this.pairs.get(o);
              i += u.getLeftChar().getChecksumPortion(), e++;
              var f = u.getRightChar();
              null != f && (i += f.getChecksumPortion(), e++)
            }
            return 211 * (e - 4) + (i %= 211) === n.getValue()
          }, n.getNextSecondBar = function(t, n) {
            var r;
            return t.get(n) ? (r = t.getNextUnset(n), r = t.getNextSet(r)) : (r = t.getNextSet(n), r = t.getNextUnset(r)), r
          }, n.prototype.retrieveNextPair = function(t, r, i) {
            var e = r.length % 2 == 0;
            this.startFromEven && (e = !e);
            var o, u = !0,
              f = -1;
            do {
              this.findNextPair(t, r, f), null === (o = this.parseFoundFinderPattern(t, i, e)) ? f = n.getNextSecondBar(t, this.startEnd[0]) : u = !1
            } while (u);
            var s, a = this.decodeDataCharacter(t, o, e, !0);
            if (!this.isEmptyPair(r) && r[r.length - 1].mustBeLast()) throw new it;
            try {
              s = this.decodeDataCharacter(t, o, e, !1)
            } catch (t) {
              s = null, console.log(t)
            }
            return new xi(a, s, o, !0)
          }, n.prototype.isEmptyPair = function(t) {
            return 0 === t.length
          }, n.prototype.findNextPair = function(t, r, i) {
            var e = this.getDecodeFinderCounters();
            e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0;
            var o, u = t.getSize();
            o = 0 > i ? this.isEmptyPair(r) ? 0 : r[r.length - 1].getFinderPattern().getStartEnd()[1] : i;
            var f = r.length % 2 != 0;
            this.startFromEven && (f = !f);
            for (var s = !1; u > o && (s = !t.get(o));) o++;
            for (var a = 0, h = o, c = o; u > c; c++)
              if (t.get(c) !== s) e[a]++;
              else {
                if (3 === a) {
                  if (f && n.reverseCounters(e), n.isFinderPattern(e)) return this.startEnd[0] = h, void(this.startEnd[1] = c);
                  f && n.reverseCounters(e), h += e[0] + e[1], e[0] = e[2], e[1] = e[3], e[2] = 0, e[3] = 0, a--
                } else a++;
                e[a] = 1, s = !s
              } throw new it
          }, n.reverseCounters = function(t) {
            for (var n = t.length, r = 0; n / 2 > r; ++r) {
              var i = t[r];
              t[r] = t[n - r - 1], t[n - r - 1] = i
            }
          }, n.prototype.parseFoundFinderPattern = function(t, r, i) {
            var e, o, u;
            if (i) {
              for (var f = this.startEnd[0] - 1; f >= 0 && !t.get(f);) f--;
              f++, e = this.startEnd[0] - f, o = f, u = this.startEnd[1]
            } else o = this.startEnd[0], e = (u = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
            var s, a = this.getDecodeFinderCounters();
            g.arraycopy(a, 0, a, 1, a.length - 1), a[0] = e;
            try {
              s = this.parseFinderValue(a, n.FINDER_PATTERNS)
            } catch {
              return null
            }
            return new Tr(s, [o, u], o, u, r)
          }, n.prototype.decodeDataCharacter = function(t, r, i, e) {
            for (var o = this.getDataCharacterCounters(), u = 0; u < o.length; u++) o[u] = 0;
            if (e) n.recordPatternInReverse(t, r.getStartEnd()[0], o);
            else {
              n.recordPattern(t, r.getStartEnd()[1], o);
              for (var f = 0, s = o.length - 1; s > f; f++, s--) {
                var a = o[f];
                o[f] = o[s], o[s] = a
              }
            }
            var h = Jt.sum(new Int32Array(o)) / 17,
              c = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
            if (Math.abs(h - c) / c > .3) throw new it;
            var l = this.getOddCounts(),
              w = this.getEvenCounts(),
              v = this.getOddRoundingErrors(),
              y = this.getEvenRoundingErrors();
            for (f = 0; f < o.length; f++) {
              var d = 1 * o[f] / h,
                b = d + .5;
              if (1 > b) {
                if (.3 > d) throw new it;
                b = 1
              } else if (b > 8) {
                if (d > 8.7) throw new it;
                b = 8
              }
              var A = f / 2;
              1 & f ? (w[A] = b, y[A] = d - b) : (l[A] = b, v[A] = d - b)
            }
            this.adjustOddEvenCounts(17);
            var p = 4 * r.getValue() + (i ? 0 : 2) + (e ? 0 : 1) - 1,
              m = 0,
              I = 0;
            for (f = l.length - 1; f >= 0; f--) {
              if (n.isNotA1left(r, i, e)) {
                var _ = n.WEIGHTS[p][2 * f];
                I += l[f] * _
              }
              m += l[f]
            }
            var g = 0;
            for (f = w.length - 1; f >= 0; f--) n.isNotA1left(r, i, e) && (_ = n.WEIGHTS[p][2 * f + 1], g += w[f] * _);
            var S = I + g;
            if (1 & m || m > 13 || 4 > m) throw new it;
            var M = (13 - m) / 2,
              E = n.SYMBOL_WIDEST[M],
              O = 9 - E,
              k = xr.getRSSvalue(l, E, !0),
              T = xr.getRSSvalue(w, O, !1),
              j = n.EVEN_TOTAL_SUBSET[M],
              x = n.GSUM[M];
            return new Or(k * j + T + x, S)
          }, n.isNotA1left = function(t, n, r) {
            return !(0 === t.getValue() && n && r)
          }, n.prototype.adjustOddEvenCounts = function(t) {
            var r = Jt.sum(new Int32Array(this.getOddCounts())),
              i = Jt.sum(new Int32Array(this.getEvenCounts())),
              e = !1,
              o = !1;
            r > 13 ? o = !0 : 4 > r && (e = !0);
            var u = !1,
              f = !1;
            i > 13 ? f = !0 : 4 > i && (u = !0);
            var s = r + i - t,
              a = !(1 & ~r),
              h = !(1 & i);
            if (1 === s)
              if (a) {
                if (h) throw new it;
                o = !0
              } else {
                if (!h) throw new it;
                f = !0
              }
            else if (-1 === s)
              if (a) {
                if (h) throw new it;
                e = !0
              } else {
                if (!h) throw new it;
                u = !0
              }
            else {
              if (0 !== s) throw new it;
              if (a) {
                if (!h) throw new it;
                i > r ? (e = !0, f = !0) : (o = !0, u = !0)
              } else if (h) throw new it
            }
            if (e) {
              if (o) throw new it;
              n.increment(this.getOddCounts(), this.getOddRoundingErrors())
            }
            if (o && n.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
              if (f) throw new it;
              n.increment(this.getEvenCounts(), this.getOddRoundingErrors())
            }
            f && n.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
          }, n.SYMBOL_WIDEST = [7, 5, 4, 3, 1], n.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], n.GSUM = [0, 348, 1388, 2948, 3988], n.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], n.WEIGHTS = [
            [1, 3, 9, 27, 81, 32, 96, 77],
            [20, 60, 180, 118, 143, 7, 21, 63],
            [189, 145, 13, 39, 117, 140, 209, 205],
            [193, 157, 49, 147, 19, 57, 171, 91],
            [62, 186, 136, 197, 169, 85, 44, 132],
            [185, 133, 188, 142, 4, 12, 36, 108],
            [113, 128, 173, 97, 80, 29, 87, 50],
            [150, 28, 84, 41, 123, 158, 52, 156],
            [46, 138, 203, 187, 139, 206, 196, 166],
            [76, 17, 51, 153, 37, 111, 122, 155],
            [43, 129, 176, 106, 107, 110, 119, 146],
            [16, 48, 144, 10, 30, 90, 59, 177],
            [109, 116, 137, 200, 178, 112, 125, 164],
            [70, 210, 208, 202, 184, 130, 179, 115],
            [134, 191, 151, 31, 93, 68, 204, 190],
            [148, 22, 66, 198, 172, 94, 71, 2],
            [6, 18, 54, 162, 64, 192, 154, 40],
            [120, 149, 25, 75, 14, 42, 126, 167],
            [79, 26, 78, 23, 69, 207, 199, 175],
            [103, 98, 83, 38, 114, 131, 182, 124],
            [161, 61, 183, 127, 170, 88, 53, 159],
            [55, 165, 73, 8, 24, 72, 5, 15],
            [45, 135, 194, 160, 58, 174, 100, 89]
          ], n.FINDER_PAT_A = 0, n.FINDER_PAT_B = 1, n.FINDER_PAT_C = 2, n.FINDER_PAT_D = 3, n.FINDER_PAT_E = 4, n.FINDER_PAT_F = 5, n.FINDER_PATTERN_SEQUENCES = [
            [n.FINDER_PAT_A, n.FINDER_PAT_A],
            [n.FINDER_PAT_A, n.FINDER_PAT_B, n.FINDER_PAT_B],
            [n.FINDER_PAT_A, n.FINDER_PAT_C, n.FINDER_PAT_B, n.FINDER_PAT_D],
            [n.FINDER_PAT_A, n.FINDER_PAT_E, n.FINDER_PAT_B, n.FINDER_PAT_D, n.FINDER_PAT_C],
            [n.FINDER_PAT_A, n.FINDER_PAT_E, n.FINDER_PAT_B, n.FINDER_PAT_D, n.FINDER_PAT_D, n.FINDER_PAT_F],
            [n.FINDER_PAT_A, n.FINDER_PAT_E, n.FINDER_PAT_B, n.FINDER_PAT_D, n.FINDER_PAT_E, n.FINDER_PAT_F, n.FINDER_PAT_F],
            [n.FINDER_PAT_A, n.FINDER_PAT_A, n.FINDER_PAT_B, n.FINDER_PAT_B, n.FINDER_PAT_C, n.FINDER_PAT_C, n.FINDER_PAT_D, n.FINDER_PAT_D],
            [n.FINDER_PAT_A, n.FINDER_PAT_A, n.FINDER_PAT_B, n.FINDER_PAT_B, n.FINDER_PAT_C, n.FINDER_PAT_C, n.FINDER_PAT_D, n.FINDER_PAT_E, n.FINDER_PAT_E],
            [n.FINDER_PAT_A, n.FINDER_PAT_A, n.FINDER_PAT_B, n.FINDER_PAT_B, n.FINDER_PAT_C, n.FINDER_PAT_C, n.FINDER_PAT_D, n.FINDER_PAT_E, n.FINDER_PAT_F, n.FINDER_PAT_F],
            [n.FINDER_PAT_A, n.FINDER_PAT_A, n.FINDER_PAT_B, n.FINDER_PAT_B, n.FINDER_PAT_C, n.FINDER_PAT_D, n.FINDER_PAT_D, n.FINDER_PAT_E, n.FINDER_PAT_E, n.FINDER_PAT_F, n.FINDER_PAT_F]
          ], n.MAX_PAIRS = 11, n
        }(Mr);
      const Bi = Di;
      var Pi = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Li = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n, r) || this;
            return e.count = 0, e.finderPattern = i, e
          }
          return Pi(n, t), n.prototype.getFinderPattern = function() {
            return this.finderPattern
          }, n.prototype.getCount = function() {
            return this.count
          }, n.prototype.incrementCount = function() {
            this.count++
          }, n
        }(Or);
      const Fi = Li;
      var Gi = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        zi = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Hi = function(t) {
          function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.possibleLeftPairs = [], n.possibleRightPairs = [], n
          }
          return Gi(n, t), n.prototype.decodeRow = function(t, r, i) {
            var e, o, u, f, s = this.decodePair(r, !1, t, i);
            n.addOrTally(this.possibleLeftPairs, s), r.reverse();
            var a = this.decodePair(r, !0, t, i);
            n.addOrTally(this.possibleRightPairs, a), r.reverse();
            try {
              for (var h = zi(this.possibleLeftPairs), c = h.next(); !c.done; c = h.next()) {
                var l = c.value;
                if (l.getCount() > 1) try {
                  for (var w = (u = void 0, zi(this.possibleRightPairs)), v = w.next(); !v.done; v = w.next()) {
                    var y = v.value;
                    if (y.getCount() > 1 && n.checkChecksum(l, y)) return n.constructResult(l, y)
                  }
                } catch (t) {
                  u = {
                    error: t
                  }
                } finally {
                  try {
                    v && !v.done && (f = w.return) && f.call(w)
                  } finally {
                    if (u) throw u.error
                  }
                }
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                c && !c.done && (o = h.return) && o.call(h)
              } finally {
                if (e) throw e.error
              }
            }
            throw new it
          }, n.addOrTally = function(t, n) {
            var r, i;
            if (null != n) {
              var e = !1;
              try {
                for (var o = zi(t), u = o.next(); !u.done; u = o.next()) {
                  var f = u.value;
                  if (f.getValue() === n.getValue()) {
                    f.incrementCount(), e = !0;
                    break
                  }
                }
              } catch (t) {
                r = {
                  error: t
                }
              } finally {
                try {
                  u && !u.done && (i = o.return) && i.call(o)
                } finally {
                  if (r) throw r.error
                }
              }
              e || t.push(n)
            }
          }, n.prototype.reset = function() {
            this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
          }, n.constructResult = function(t, n) {
            for (var r = 4537077 * t.getValue() + n.getValue(), i = new String(r).toString(), e = new Q, o = 13 - i.length; o > 0; o--) e.append("0");
            e.append(i);
            var u = 0;
            for (o = 0; 13 > o; o++) {
              var f = e.charAt(o).charCodeAt(0) - 48;
              u += 1 & o ? f : 3 * f
            }
            10 == (u = 10 - u % 10) && (u = 0), e.append(u.toString());
            var s = t.getFinderPattern().getResultPoints(),
              a = n.getFinderPattern().getResultPoints();
            return new _t(e.toString(), null, 0, [s[0], s[1], a[0], a[1]], St.RSS_14, (new Date).getTime())
          }, n.checkChecksum = function(t, n) {
            var r = (t.getChecksumPortion() + 16 * n.getChecksumPortion()) % 79,
              i = 9 * t.getFinderPattern().getValue() + n.getFinderPattern().getValue();
            return i > 72 && i--, i > 8 && i--, r === i
          }, n.prototype.decodePair = function(t, n, r, i) {
            try {
              var e = this.findFinderPattern(t, n),
                o = this.parseFoundFinderPattern(t, r, n, e),
                u = null == i ? null : i.get(B.NEED_RESULT_POINT_CALLBACK);
              if (null != u) {
                var f = (e[0] + e[1]) / 2;
                n && (f = t.getSize() - 1 - f), u.foundPossibleResultPoint(new nn(f, r))
              }
              var s = this.decodeDataCharacter(t, o, !0),
                a = this.decodeDataCharacter(t, o, !1);
              return new Fi(1597 * s.getValue() + a.getValue(), s.getChecksumPortion() + 4 * a.getChecksumPortion(), o)
            } catch {
              return null
            }
          }, n.prototype.decodeDataCharacter = function(t, r, i) {
            for (var e = this.getDataCharacterCounters(), o = 0; o < e.length; o++) e[o] = 0;
            if (i) En.recordPatternInReverse(t, r.getStartEnd()[0], e);
            else {
              En.recordPattern(t, r.getStartEnd()[1] + 1, e);
              for (var u = 0, f = e.length - 1; f > u; u++, f--) {
                var s = e[u];
                e[u] = e[f], e[f] = s
              }
            }
            var a = i ? 16 : 15,
              h = Jt.sum(new Int32Array(e)) / a,
              c = this.getOddCounts(),
              l = this.getEvenCounts(),
              w = this.getOddRoundingErrors(),
              v = this.getEvenRoundingErrors();
            for (u = 0; u < e.length; u++) {
              var y = e[u] / h,
                d = Math.floor(y + .5);
              1 > d ? d = 1 : d > 8 && (d = 8);
              var b = Math.floor(u / 2);
              1 & u ? (l[b] = d, v[b] = y - d) : (c[b] = d, w[b] = y - d)
            }
            this.adjustOddEvenCounts(i, a);
            var A = 0,
              p = 0;
            for (u = c.length - 1; u >= 0; u--) p *= 9, p += c[u], A += c[u];
            var m = 0,
              I = 0;
            for (u = l.length - 1; u >= 0; u--) m *= 9, m += l[u], I += l[u];
            var _ = p + 3 * m;
            if (i) {
              if (1 & A || A > 12 || 4 > A) throw new it;
              var g = (12 - A) / 2,
                S = 9 - (T = n.OUTSIDE_ODD_WIDEST[g]),
                M = xr.getRSSvalue(c, T, !1),
                E = xr.getRSSvalue(l, S, !0),
                O = n.OUTSIDE_EVEN_TOTAL_SUBSET[g],
                k = n.OUTSIDE_GSUM[g];
              return new Or(M * O + E + k, _)
            }
            if (1 & I || I > 10 || 4 > I) throw new it;
            g = (10 - I) / 2, S = 9 - (T = n.INSIDE_ODD_WIDEST[g]), M = xr.getRSSvalue(c, T, !0), E = xr.getRSSvalue(l, S, !1);
            var T, j = n.INSIDE_ODD_TOTAL_SUBSET[g];
            return k = n.INSIDE_GSUM[g], new Or(E * j + M + k, _)
          }, n.prototype.findFinderPattern = function(t, n) {
            var r = this.getDecodeFinderCounters();
            r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
            for (var i = t.getSize(), e = !1, o = 0; i > o && n !== (e = !t.get(o));) o++;
            for (var u = 0, f = o, s = o; i > s; s++)
              if (t.get(s) !== e) r[u]++;
              else {
                if (3 === u) {
                  if (Mr.isFinderPattern(r)) return [f, s];
                  f += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, u--
                } else u++;
                r[u] = 1, e = !e
              } throw new it
          }, n.prototype.parseFoundFinderPattern = function(t, r, i, e) {
            for (var o = t.get(e[0]), u = e[0] - 1; u >= 0 && o !== t.get(u);) u--;
            u++;
            var f = e[0] - u,
              s = this.getDecodeFinderCounters(),
              a = new Int32Array(s.length);
            g.arraycopy(s, 0, a, 1, s.length - 1), a[0] = f;
            var h = this.parseFinderValue(a, n.FINDER_PATTERNS),
              c = u,
              l = e[1];
            return i && (c = t.getSize() - 1 - c, l = t.getSize() - 1 - l), new Tr(h, [u, e[1]], c, l, r)
          }, n.prototype.adjustOddEvenCounts = function(t, n) {
            var r = Jt.sum(new Int32Array(this.getOddCounts())),
              i = Jt.sum(new Int32Array(this.getEvenCounts())),
              e = !1,
              o = !1,
              u = !1,
              f = !1;
            t ? (r > 12 ? o = !0 : 4 > r && (e = !0), i > 12 ? f = !0 : 4 > i && (u = !0)) : (r > 11 ? o = !0 : 5 > r && (e = !0), i > 10 ? f = !0 : 4 > i && (u = !0));
            var s = r + i - n,
              a = (1 & r) == (t ? 1 : 0),
              h = !(1 & ~i);
            if (1 === s)
              if (a) {
                if (h) throw new it;
                o = !0
              } else {
                if (!h) throw new it;
                f = !0
              }
            else if (-1 === s)
              if (a) {
                if (h) throw new it;
                e = !0
              } else {
                if (!h) throw new it;
                u = !0
              }
            else {
              if (0 !== s) throw new it;
              if (a) {
                if (!h) throw new it;
                i > r ? (e = !0, f = !0) : (o = !0, u = !0)
              } else if (h) throw new it
            }
            if (e) {
              if (o) throw new it;
              Mr.increment(this.getOddCounts(), this.getOddRoundingErrors())
            }
            if (o && Mr.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
              if (f) throw new it;
              Mr.increment(this.getEvenCounts(), this.getOddRoundingErrors())
            }
            f && Mr.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
          }, n.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], n.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], n.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], n.INSIDE_GSUM = [0, 336, 1036, 1516], n.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], n.INSIDE_ODD_WIDEST = [2, 4, 6, 8], n.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])], n
        }(Mr);
      const qi = Hi;
      var Xi = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Wi = function(t) {
          function n(n) {
            var r = t.call(this) || this;
            r.readers = [];
            var i = n ? n.get(B.POSSIBLE_FORMATS) : null,
              e = n && void 0 !== n.get(B.ASSUME_CODE_39_CHECK_DIGIT),
              o = n && void 0 !== n.get(B.ENABLE_CODE_39_EXTENDED_MODE);
            return i && ((i.includes(St.EAN_13) || i.includes(St.UPC_A) || i.includes(St.EAN_8) || i.includes(St.UPC_E)) && r.readers.push(new pr(n)), i.includes(St.CODE_39) && r.readers.push(new Rn(e, o)), i.includes(St.CODE_93) && r.readers.push(new Bn), i.includes(St.CODE_128) && r.readers.push(new Tn), i.includes(St.ITF) && r.readers.push(new Fn), i.includes(St.CODABAR) && r.readers.push(new _r), i.includes(St.RSS_14) && r.readers.push(new qi), i.includes(St.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), r.readers.push(new Bi))), 0 === r.readers.length && (r.readers.push(new pr(n)), r.readers.push(new Rn), r.readers.push(new Bn), r.readers.push(new pr(n)), r.readers.push(new Tn), r.readers.push(new Fn), r.readers.push(new qi)), r
          }
          return Xi(n, t), n.prototype.decodeRow = function(t, n, r) {
            for (var i = 0; i < this.readers.length; i++) try {
              return this.readers[i].decodeRow(t, n, r)
            } catch {}
            throw new it
          }, n.prototype.reset = function() {
            this.readers.forEach(function(t) {
              return t.reset()
            })
          }, n
        }(En);
      const $i = Wi;
      var Ki = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Vi = (function(t) {
          Ki(function(n, r) {
            return void 0 === n && (n = 500), t.call(this, new $i(r), n, r) || this
          }, t)
        }(mt), function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }),
        Zi = function() {
          function t(t, n, r) {
            this.ecCodewords = t, this.ecBlocks = [n], r && this.ecBlocks.push(r)
          }
          return t.prototype.getECCodewords = function() {
            return this.ecCodewords
          }, t.prototype.getECBlocks = function() {
            return this.ecBlocks
          }, t
        }(),
        Ji = function() {
          function t(t, n) {
            this.count = t, this.dataCodewords = n
          }
          return t.prototype.getCount = function() {
            return this.count
          }, t.prototype.getDataCodewords = function() {
            return this.dataCodewords
          }, t
        }(),
        Qi = function() {
          function t(t, n, r, i, e, o) {
            var u, f;
            this.versionNumber = t, this.symbolSizeRows = n, this.symbolSizeColumns = r, this.dataRegionSizeRows = i, this.dataRegionSizeColumns = e, this.ecBlocks = o;
            var s = 0,
              a = o.getECCodewords(),
              h = o.getECBlocks();
            try {
              for (var c = Vi(h), l = c.next(); !l.done; l = c.next()) {
                var w = l.value;
                s += w.getCount() * (w.getDataCodewords() + a)
              }
            } catch (t) {
              u = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (f = c.return) && f.call(c)
              } finally {
                if (u) throw u.error
              }
            }
            this.totalCodewords = s
          }
          return t.prototype.getVersionNumber = function() {
            return this.versionNumber
          }, t.prototype.getSymbolSizeRows = function() {
            return this.symbolSizeRows
          }, t.prototype.getSymbolSizeColumns = function() {
            return this.symbolSizeColumns
          }, t.prototype.getDataRegionSizeRows = function() {
            return this.dataRegionSizeRows
          }, t.prototype.getDataRegionSizeColumns = function() {
            return this.dataRegionSizeColumns
          }, t.prototype.getTotalCodewords = function() {
            return this.totalCodewords
          }, t.prototype.getECBlocks = function() {
            return this.ecBlocks
          }, t.getVersionForDimensions = function(n, r) {
            var i, e;
            if (1 & n || 1 & r) throw new F;
            try {
              for (var o = Vi(t.VERSIONS), u = o.next(); !u.done; u = o.next()) {
                var f = u.value;
                if (f.symbolSizeRows === n && f.symbolSizeColumns === r) return f
              }
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                u && !u.done && (e = o.return) && e.call(o)
              } finally {
                if (i) throw i.error
              }
            }
            throw new F
          }, t.prototype.toString = function() {
            return "" + this.versionNumber
          }, t.buildVersions = function() {
            return [new t(1, 10, 10, 8, 8, new Zi(5, new Ji(1, 3))), new t(2, 12, 12, 10, 10, new Zi(7, new Ji(1, 5))), new t(3, 14, 14, 12, 12, new Zi(10, new Ji(1, 8))), new t(4, 16, 16, 14, 14, new Zi(12, new Ji(1, 12))), new t(5, 18, 18, 16, 16, new Zi(14, new Ji(1, 18))), new t(6, 20, 20, 18, 18, new Zi(18, new Ji(1, 22))), new t(7, 22, 22, 20, 20, new Zi(20, new Ji(1, 30))), new t(8, 24, 24, 22, 22, new Zi(24, new Ji(1, 36))), new t(9, 26, 26, 24, 24, new Zi(28, new Ji(1, 44))), new t(10, 32, 32, 14, 14, new Zi(36, new Ji(1, 62))), new t(11, 36, 36, 16, 16, new Zi(42, new Ji(1, 86))), new t(12, 40, 40, 18, 18, new Zi(48, new Ji(1, 114))), new t(13, 44, 44, 20, 20, new Zi(56, new Ji(1, 144))), new t(14, 48, 48, 22, 22, new Zi(68, new Ji(1, 174))), new t(15, 52, 52, 24, 24, new Zi(42, new Ji(2, 102))), new t(16, 64, 64, 14, 14, new Zi(56, new Ji(2, 140))), new t(17, 72, 72, 16, 16, new Zi(36, new Ji(4, 92))), new t(18, 80, 80, 18, 18, new Zi(48, new Ji(4, 114))), new t(19, 88, 88, 20, 20, new Zi(56, new Ji(4, 144))), new t(20, 96, 96, 22, 22, new Zi(68, new Ji(4, 174))), new t(21, 104, 104, 24, 24, new Zi(56, new Ji(6, 136))), new t(22, 120, 120, 18, 18, new Zi(68, new Ji(6, 175))), new t(23, 132, 132, 20, 20, new Zi(62, new Ji(8, 163))), new t(24, 144, 144, 22, 22, new Zi(62, new Ji(8, 156), new Ji(2, 155))), new t(25, 8, 18, 6, 16, new Zi(7, new Ji(1, 5))), new t(26, 8, 32, 6, 14, new Zi(11, new Ji(1, 10))), new t(27, 12, 26, 10, 24, new Zi(14, new Ji(1, 16))), new t(28, 12, 36, 10, 16, new Zi(18, new Ji(1, 22))), new t(29, 16, 36, 14, 16, new Zi(24, new Ji(1, 32))), new t(30, 16, 48, 14, 22, new Zi(28, new Ji(1, 49)))]
          }, t.VERSIONS = t.buildVersions(), t
        }();
      const Yi = Qi;
      var te = function() {
        function t(n) {
          var r = n.getHeight();
          if (8 > r || r > 144 || 1 & r) throw new F;
          this.version = t.readVersion(n), this.mappingBitMatrix = this.extractDataRegion(n), this.readMappingMatrix = new tt(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
        }
        return t.prototype.getVersion = function() {
          return this.version
        }, t.readVersion = function(t) {
          var n = t.getHeight(),
            r = t.getWidth();
          return Yi.getVersionForDimensions(n, r)
        }, t.prototype.readCodewords = function() {
          var t = new Int8Array(this.version.getTotalCodewords()),
            n = 0,
            r = 4,
            i = 0,
            e = this.mappingBitMatrix.getHeight(),
            o = this.mappingBitMatrix.getWidth(),
            u = !1,
            f = !1,
            s = !1,
            a = !1;
          do {
            if (r !== e || 0 !== i || u)
              if (r === e - 2 && 0 === i && 3 & o && !f) t[n++] = 255 & this.readCorner2(e, o), r -= 2, i += 2, f = !0;
              else if (r !== e + 4 || 2 !== i || 7 & o || s)
              if (r !== e - 2 || 0 !== i || 4 != (7 & o) || a) {
                do {
                  e > r && i >= 0 && !this.readMappingMatrix.get(i, r) && (t[n++] = 255 & this.readUtah(r, i, e, o)), r -= 2, i += 2
                } while (r >= 0 && o > i);
                r += 1, i += 3;
                do {
                  r >= 0 && o > i && !this.readMappingMatrix.get(i, r) && (t[n++] = 255 & this.readUtah(r, i, e, o)), r += 2, i -= 2
                } while (e > r && i >= 0);
                r += 3, i += 1
              } else t[n++] = 255 & this.readCorner4(e, o), r -= 2, i += 2, a = !0;
            else t[n++] = 255 & this.readCorner3(e, o), r -= 2, i += 2, s = !0;
            else t[n++] = 255 & this.readCorner1(e, o), r -= 2, i += 2, u = !0
          } while (e > r || o > i);
          if (n !== this.version.getTotalCodewords()) throw new F;
          return t
        }, t.prototype.readModule = function(t, n, r, i) {
          return 0 > t && (t += r, n += 4 - (r + 4 & 7)), 0 > n && (n += i, t += 4 - (i + 4 & 7)), this.readMappingMatrix.set(n, t), this.mappingBitMatrix.get(n, t)
        }, t.prototype.readUtah = function(t, n, r, i) {
          var e = 0;
          return this.readModule(t - 2, n - 2, r, i) && (e |= 1), e <<= 1, this.readModule(t - 2, n - 1, r, i) && (e |= 1), e <<= 1, this.readModule(t - 1, n - 2, r, i) && (e |= 1), e <<= 1, this.readModule(t - 1, n - 1, r, i) && (e |= 1), e <<= 1, this.readModule(t - 1, n, r, i) && (e |= 1), e <<= 1, this.readModule(t, n - 2, r, i) && (e |= 1), e <<= 1, this.readModule(t, n - 1, r, i) && (e |= 1), e <<= 1, this.readModule(t, n, r, i) && (e |= 1), e
        }, t.prototype.readCorner1 = function(t, n) {
          var r = 0;
          return this.readModule(t - 1, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, n) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 2, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(2, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(3, n - 1, t, n) && (r |= 1), r
        }, t.prototype.readCorner2 = function(t, n) {
          var r = 0;
          return this.readModule(t - 3, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 4, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 3, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 2, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 1, t, n) && (r |= 1), r
        }, t.prototype.readCorner3 = function(t, n) {
          var r = 0;
          return this.readModule(t - 1, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 1, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 3, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 2, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 3, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 2, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 1, t, n) && (r |= 1), r
        }, t.prototype.readCorner4 = function(t, n) {
          var r = 0;
          return this.readModule(t - 3, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, n) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 2, t, n) && (r |= 1), r <<= 1, this.readModule(0, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(1, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(2, n - 1, t, n) && (r |= 1), r <<= 1, this.readModule(3, n - 1, t, n) && (r |= 1), r
        }, t.prototype.extractDataRegion = function(t) {
          var n = this.version.getSymbolSizeRows(),
            r = this.version.getSymbolSizeColumns();
          if (t.getHeight() !== n) throw new v("Dimension of bitMatrix must match the version size");
          for (var i = this.version.getDataRegionSizeRows(), e = this.version.getDataRegionSizeColumns(), o = n / i | 0, u = r / e | 0, f = new tt(u * e, o * i), s = 0; o > s; ++s)
            for (var a = s * i, h = 0; u > h; ++h)
              for (var c = h * e, l = 0; i > l; ++l)
                for (var w = s * (i + 2) + 1 + l, y = a + l, d = 0; e > d; ++d) {
                  var b = h * (e + 2) + 1 + d;
                  if (t.get(b, w)) {
                    var A = c + d;
                    f.set(A, y)
                  }
                }
          return f
        }, t
      }();
      const ne = te;
      var re = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        ie = function() {
          function t(t, n) {
            this.numDataCodewords = t, this.codewords = n
          }
          return t.getDataBlocks = function(n, r) {
            var i, e, o, u, f = r.getECBlocks(),
              s = 0,
              a = f.getECBlocks();
            try {
              for (var h = re(a), c = h.next(); !c.done; c = h.next()) s += (b = c.value).getCount()
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                c && !c.done && (e = h.return) && e.call(h)
              } finally {
                if (i) throw i.error
              }
            }
            var l = Array(s),
              w = 0;
            try {
              for (var y = re(a), d = y.next(); !d.done; d = y.next())
                for (var b = d.value, A = 0; A < b.getCount(); A++) {
                  var p = b.getDataCodewords(),
                    m = f.getECCodewords() + p;
                  l[w++] = new t(p, new Uint8Array(m))
                }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                d && !d.done && (u = y.return) && u.call(y)
              } finally {
                if (o) throw o.error
              }
            }
            var I = l[0].codewords.length - f.getECCodewords(),
              _ = I - 1,
              g = 0;
            for (A = 0; _ > A; A++)
              for (var S = 0; w > S; S++) l[S].codewords[A] = n[g++];
            var M = 24 === r.getVersionNumber(),
              E = M ? 8 : w;
            for (S = 0; E > S; S++) l[S].codewords[I - 1] = n[g++];
            var O = l[0].codewords.length;
            for (A = I; O > A; A++)
              for (S = 0; w > S; S++) {
                var k = M ? (S + 8) % w : S,
                  T = M && k > 7 ? A - 1 : A;
                l[k].codewords[T] = n[g++]
              }
            if (g !== n.length) throw new v;
            return l
          }, t.prototype.getNumDataCodewords = function() {
            return this.numDataCodewords
          }, t.prototype.getCodewords = function() {
            return this.codewords
          }, t
        }();
      const ee = ie;
      var oe = function() {
        function t(t) {
          this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
        }
        return t.prototype.getBitOffset = function() {
          return this.bitOffset
        }, t.prototype.getByteOffset = function() {
          return this.byteOffset
        }, t.prototype.readBits = function(t) {
          if (1 > t || t > 32 || t > this.available()) throw new v("" + t);
          var n = 0,
            r = this.bitOffset,
            i = this.byteOffset,
            e = this.bytes;
          if (r > 0) {
            var o = 8 - r,
              u = o > t ? t : o,
              f = 255 >> 8 - u << (s = o - u);
            n = (e[i] & f) >> s, t -= u, 8 === (r += u) && (r = 0, i++)
          }
          if (t > 0) {
            for (; t >= 8;) n = n << 8 | 255 & e[i], i++, t -= 8;
            var s;
            t > 0 && (f = 255 >> (s = 8 - t) << s, n = n << t | (e[i] & f) >> s, r += t)
          }
          return this.bitOffset = r, this.byteOffset = i, n
        }, t.prototype.available = function() {
          return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
        }, t
      }();
      const ue = oe;
      var fe;
      ! function(t) {
        t[t.PAD_ENCODE = 0] = "PAD_ENCODE", t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE", t[t.C40_ENCODE = 2] = "C40_ENCODE", t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE", t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE"
      }(fe || (fe = {}));
      var se = function() {
        function t() {}
        return t.decode = function(t) {
          var n = new ue(t),
            r = new Q,
            i = new Q,
            e = [],
            o = fe.ASCII_ENCODE;
          do {
            if (o === fe.ASCII_ENCODE) o = this.decodeAsciiSegment(n, r, i);
            else {
              switch (o) {
                case fe.C40_ENCODE:
                  this.decodeC40Segment(n, r);
                  break;
                case fe.TEXT_ENCODE:
                  this.decodeTextSegment(n, r);
                  break;
                case fe.ANSIX12_ENCODE:
                  this.decodeAnsiX12Segment(n, r);
                  break;
                case fe.EDIFACT_ENCODE:
                  this.decodeEdifactSegment(n, r);
                  break;
                case fe.BASE256_ENCODE:
                  this.decodeBase256Segment(n, r, e);
                  break;
                default:
                  throw new F
              }
              o = fe.ASCII_ENCODE
            }
          } while (o !== fe.PAD_ENCODE && n.available() > 0);
          return i.length() > 0 && r.append(i.toString()), new kt(t, r.toString(), 0 === e.length ? null : e, null)
        }, t.decodeAsciiSegment = function(t, n, r) {
          var i = !1;
          do {
            var e = t.readBits(8);
            if (0 === e) throw new F;
            if (128 >= e) return i && (e += 128), n.append(String.fromCharCode(e - 1)), fe.ASCII_ENCODE;
            if (129 === e) return fe.PAD_ENCODE;
            if (e > 229) switch (e) {
              case 230:
                return fe.C40_ENCODE;
              case 231:
                return fe.BASE256_ENCODE;
              case 232:
                n.append("");
                break;
              case 233:
              case 234:
              case 241:
                break;
              case 235:
                i = !0;
                break;
              case 236:
                n.append("[)>05"), r.insert(0, "");
                break;
              case 237:
                n.append("[)>06"), r.insert(0, "");
                break;
              case 238:
                return fe.ANSIX12_ENCODE;
              case 239:
                return fe.TEXT_ENCODE;
              case 240:
                return fe.EDIFACT_ENCODE;
              default:
                if (254 !== e || 0 !== t.available()) throw new F
            } else {
              var o = e - 130;
              10 > o && n.append("0"), n.append("" + o)
            }
          } while (t.available() > 0);
          return fe.ASCII_ENCODE
        }, t.decodeC40Segment = function(t, n) {
          var r = !1,
            i = [],
            e = 0;
          do {
            if (8 === t.available()) return;
            var o = t.readBits(8);
            if (254 === o) return;
            this.parseTwoBytes(o, t.readBits(8), i);
            for (var u = 0; 3 > u; u++) {
              var f = i[u];
              switch (e) {
                case 0:
                  if (3 > f) e = f + 1;
                  else {
                    if (f >= this.C40_BASIC_SET_CHARS.length) throw new F;
                    var s = this.C40_BASIC_SET_CHARS[f];
                    r ? (n.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : n.append(s)
                  }
                  break;
                case 1:
                  r ? (n.append(String.fromCharCode(f + 128)), r = !1) : n.append(String.fromCharCode(f)), e = 0;
                  break;
                case 2:
                  if (f < this.C40_SHIFT2_SET_CHARS.length) s = this.C40_SHIFT2_SET_CHARS[f], r ? (n.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : n.append(s);
                  else switch (f) {
                    case 27:
                      n.append("");
                      break;
                    case 30:
                      r = !0;
                      break;
                    default:
                      throw new F
                  }
                  e = 0;
                  break;
                case 3:
                  r ? (n.append(String.fromCharCode(f + 224)), r = !1) : n.append(String.fromCharCode(f + 96)), e = 0;
                  break;
                default:
                  throw new F
              }
            }
          } while (t.available() > 0)
        }, t.decodeTextSegment = function(t, n) {
          var r = !1,
            i = [],
            e = 0;
          do {
            if (8 === t.available()) return;
            var o = t.readBits(8);
            if (254 === o) return;
            this.parseTwoBytes(o, t.readBits(8), i);
            for (var u = 0; 3 > u; u++) {
              var f = i[u];
              switch (e) {
                case 0:
                  if (3 > f) e = f + 1;
                  else {
                    if (f >= this.TEXT_BASIC_SET_CHARS.length) throw new F;
                    var s = this.TEXT_BASIC_SET_CHARS[f];
                    r ? (n.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : n.append(s)
                  }
                  break;
                case 1:
                  r ? (n.append(String.fromCharCode(f + 128)), r = !1) : n.append(String.fromCharCode(f)), e = 0;
                  break;
                case 2:
                  if (f < this.TEXT_SHIFT2_SET_CHARS.length) s = this.TEXT_SHIFT2_SET_CHARS[f], r ? (n.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : n.append(s);
                  else switch (f) {
                    case 27:
                      n.append("");
                      break;
                    case 30:
                      r = !0;
                      break;
                    default:
                      throw new F
                  }
                  e = 0;
                  break;
                case 3:
                  if (f >= this.TEXT_SHIFT3_SET_CHARS.length) throw new F;
                  s = this.TEXT_SHIFT3_SET_CHARS[f], r ? (n.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : n.append(s), e = 0;
                  break;
                default:
                  throw new F
              }
            }
          } while (t.available() > 0)
        }, t.decodeAnsiX12Segment = function(t, n) {
          var r = [];
          do {
            if (8 === t.available()) return;
            var i = t.readBits(8);
            if (254 === i) return;
            this.parseTwoBytes(i, t.readBits(8), r);
            for (var e = 0; 3 > e; e++) {
              var o = r[e];
              switch (o) {
                case 0:
                  n.append("\r");
                  break;
                case 1:
                  n.append("*");
                  break;
                case 2:
                  n.append(">");
                  break;
                case 3:
                  n.append(" ");
                  break;
                default:
                  if (14 > o) n.append(String.fromCharCode(o + 44));
                  else {
                    if (o >= 40) throw new F;
                    n.append(String.fromCharCode(o + 51))
                  }
              }
            }
          } while (t.available() > 0)
        }, t.parseTwoBytes = function(t, n, r) {
          var i = (t << 8) + n - 1,
            e = Math.floor(i / 1600);
          r[0] = e, e = Math.floor((i -= 1600 * e) / 40), r[1] = e, r[2] = i - 40 * e
        }, t.decodeEdifactSegment = function(t, n) {
          do {
            if (16 >= t.available()) return;
            for (var r = 0; 4 > r; r++) {
              var i = t.readBits(6);
              if (31 === i) {
                var e = 8 - t.getBitOffset();
                return void(8 !== e && t.readBits(e))
              }!(32 & i) && (i |= 64), n.append(String.fromCharCode(i))
            }
          } while (t.available() > 0)
        }, t.decodeBase256Segment = function(t, n, r) {
          var i, e = 1 + t.getByteOffset(),
            o = this.unrandomize255State(t.readBits(8), e++);
          if (0 > (i = 0 === o ? t.available() / 8 | 0 : 250 > o ? o : 250 * (o - 249) + this.unrandomize255State(t.readBits(8), e++))) throw new F;
          for (var u = new Uint8Array(i), f = 0; i > f; f++) {
            if (8 > t.available()) throw new F;
            u[f] = this.unrandomize255State(t.readBits(8), e++)
          }
          r.push(u);
          try {
            n.append(K.decode(u, Z.ISO88591))
          } catch (t) {
            throw new qt("Platform does not support required encoding: " + t.message)
          }
        }, t.unrandomize255State = function(t, n) {
          var r = t - (149 * n % 255 + 1);
          return 0 > r ? r + 256 : r
        }, t.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], t.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS, t.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", ""], t
      }();
      const ae = se;
      var he = function() {
        function t() {
          this.rsDecoder = new Wt(Pt.DATA_MATRIX_FIELD_256)
        }
        return t.prototype.decode = function(t) {
          var n, r, i = new ne(t),
            e = i.getVersion(),
            o = i.readCodewords(),
            u = ee.getDataBlocks(o, e),
            f = 0;
          try {
            for (var s = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(u), a = s.next(); !a.done; a = s.next()) f += a.value.getNumDataCodewords()
          } catch (t) {
            n = {
              error: t
            }
          } finally {
            try {
              a && !a.done && (r = s.return) && r.call(s)
            } finally {
              if (n) throw n.error
            }
          }
          for (var h = new Uint8Array(f), c = u.length, l = 0; c > l; l++) {
            var w = u[l],
              v = w.getCodewords(),
              y = w.getNumDataCodewords();
            this.correctErrors(v, y);
            for (var d = 0; y > d; d++) h[d * c + l] = v[d]
          }
          return ae.decode(h)
        }, t.prototype.correctErrors = function(t, n) {
          var r = new Int32Array(t);
          try {
            this.rsDecoder.decode(r, t.length - n)
          } catch {
            throw new p
          }
          for (var i = 0; n > i; i++) t[i] = r[i]
        }, t
      }();
      const ce = he;
      var le = function() {
        function t(t) {
          this.image = t, this.rectangleDetector = new an(this.image)
        }
        return t.prototype.detect = function() {
          var n = this.rectangleDetector.detect(),
            r = this.detectSolid1(n);
          if ((r = this.detectSolid2(r))[3] = this.correctTopRight(r), !r[3]) throw new it;
          var i = (r = this.shiftToModuleCenter(r))[0],
            e = r[1],
            o = r[2],
            u = r[3],
            f = this.transitionsBetween(i, u) + 1,
            s = this.transitionsBetween(o, u) + 1;
          !(1 & ~f) && (f += 1), !(1 & ~s) && (s += 1), 7 * s > 4 * f && 7 * f > 4 * s && (f = s = Math.max(f, s));
          var a = t.sampleGrid(this.image, i, e, o, u, f, s);
          return new en(a, [i, e, o, u])
        }, t.shiftPoint = function(t, n, r) {
          var i = (n.getX() - t.getX()) / (r + 1),
            e = (n.getY() - t.getY()) / (r + 1);
          return new nn(t.getX() + i, t.getY() + e)
        }, t.moveAway = function(t, n, r) {
          var i = t.getX(),
            e = t.getY();
          return n > i ? i -= 1 : i += 1, r > e ? e -= 1 : e += 1, new nn(i, e)
        }, t.prototype.detectSolid1 = function(t) {
          var n = t[0],
            r = t[1],
            i = t[3],
            e = t[2],
            o = this.transitionsBetween(n, r),
            u = this.transitionsBetween(r, i),
            f = this.transitionsBetween(i, e),
            s = this.transitionsBetween(e, n),
            a = o,
            h = [e, n, r, i];
          return a > u && (a = u, h[0] = n, h[1] = r, h[2] = i, h[3] = e), a > f && (a = f, h[0] = r, h[1] = i, h[2] = e, h[3] = n), a > s && (h[0] = i, h[1] = e, h[2] = n, h[3] = r), h
        }, t.prototype.detectSolid2 = function(n) {
          var r = n[0],
            i = n[1],
            e = n[2],
            o = n[3],
            u = this.transitionsBetween(r, o),
            f = t.shiftPoint(i, e, 4 * (u + 1)),
            s = t.shiftPoint(e, i, 4 * (u + 1)),
            a = this.transitionsBetween(f, r);
          return this.transitionsBetween(s, o) > a ? (n[0] = r, n[1] = i, n[2] = e, n[3] = o) : (n[0] = i, n[1] = e, n[2] = o, n[3] = r), n
        }, t.prototype.correctTopRight = function(n) {
          var r = n[0],
            i = n[1],
            e = n[2],
            o = n[3],
            u = this.transitionsBetween(r, o),
            f = this.transitionsBetween(i, o),
            s = t.shiftPoint(r, i, 4 * (f + 1)),
            a = t.shiftPoint(e, i, 4 * (u + 1));
          u = this.transitionsBetween(s, o), f = this.transitionsBetween(a, o);
          var h = new nn(o.getX() + (e.getX() - i.getX()) / (u + 1), o.getY() + (e.getY() - i.getY()) / (u + 1)),
            c = new nn(o.getX() + (r.getX() - i.getX()) / (f + 1), o.getY() + (r.getY() - i.getY()) / (f + 1));
          return this.isValid(h) ? this.isValid(c) ? this.transitionsBetween(s, h) + this.transitionsBetween(a, h) > this.transitionsBetween(s, c) + this.transitionsBetween(a, c) ? h : c : h : this.isValid(c) ? c : null
        }, t.prototype.shiftToModuleCenter = function(n) {
          var r = n[0],
            i = n[1],
            e = n[2],
            o = n[3],
            u = this.transitionsBetween(r, o) + 1,
            f = this.transitionsBetween(e, o) + 1,
            s = t.shiftPoint(r, i, 4 * f),
            a = t.shiftPoint(e, i, 4 * u);
          !(1 & ~(u = this.transitionsBetween(s, o) + 1)) && (u += 1), !(1 & ~(f = this.transitionsBetween(a, o) + 1)) && (f += 1);
          var h, c, l = (r.getX() + i.getX() + e.getX() + o.getX()) / 4,
            w = (r.getY() + i.getY() + e.getY() + o.getY()) / 4;
          return r = t.moveAway(r, l, w), i = t.moveAway(i, l, w), e = t.moveAway(e, l, w), o = t.moveAway(o, l, w), s = t.shiftPoint(r, i, 4 * f), s = t.shiftPoint(s, o, 4 * u), h = t.shiftPoint(i, r, 4 * f), h = t.shiftPoint(h, e, 4 * u), a = t.shiftPoint(e, o, 4 * f), a = t.shiftPoint(a, i, 4 * u), c = t.shiftPoint(o, e, 4 * f), [s, h, a, c = t.shiftPoint(c, r, 4 * u)]
        }, t.prototype.isValid = function(t) {
          return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight()
        }, t.sampleGrid = function(t, n, r, i, e, o, u) {
          return An.getInstance().sampleGrid(t, o, u, .5, .5, o - .5, .5, o - .5, u - .5, .5, u - .5, n.getX(), n.getY(), e.getX(), e.getY(), i.getX(), i.getY(), r.getX(), r.getY())
        }, t.prototype.transitionsBetween = function(t, n) {
          var r = Math.trunc(t.getX()),
            i = Math.trunc(t.getY()),
            e = Math.trunc(n.getX()),
            o = Math.trunc(n.getY()),
            u = Math.abs(o - i) > Math.abs(e - r);
          if (u) {
            var f = r;
            r = i, i = f, f = e, e = o, o = f
          }
          for (var s = Math.abs(e - r), a = Math.abs(o - i), h = -s / 2, c = o > i ? 1 : -1, l = e > r ? 1 : -1, w = 0, v = this.image.get(u ? i : r, u ? r : i), y = r, d = i; y !== e; y += l) {
            var b = this.image.get(u ? d : y, u ? y : d);
            if (b !== v && (w++, v = b), (h += a) > 0) {
              if (d === o) break;
              d += c, h -= s
            }
          }
          return w
        }, t
      }();
      const we = le;
      var ve = function() {
        function t() {
          this.decoder = new ce
        }
        return t.prototype.decode = function(n, r) {
          var i, e;
          if (void 0 === r && (r = null), null != r && r.has(B.PURE_BARCODE)) {
            var o = t.extractPureBits(n.getBlackMatrix());
            i = this.decoder.decode(o), e = t.NO_POINTS
          } else {
            var u = new we(n.getBlackMatrix()).detect();
            i = this.decoder.decode(u.getBits()), e = u.getPoints()
          }
          var f = i.getRawBytes(),
            s = new _t(i.getText(), f, 8 * f.length, e, St.DATA_MATRIX, g.currentTimeMillis()),
            a = i.getByteSegments();
          null != a && s.putMetadata(Et.BYTE_SEGMENTS, a);
          var h = i.getECLevel();
          return null != h && s.putMetadata(Et.ERROR_CORRECTION_LEVEL, h), s
        }, t.prototype.reset = function() {}, t.extractPureBits = function(t) {
          var n = t.getTopLeftOnBit(),
            r = t.getBottomRightOnBit();
          if (null == n || null == r) throw new it;
          var i = this.moduleSize(n, t),
            e = n[1],
            o = r[1],
            u = n[0],
            f = (r[0] - u + 1) / i,
            s = (o - e + 1) / i;
          if (0 >= f || 0 >= s) throw new it;
          var a = i / 2;
          e += a, u += a;
          for (var h = new tt(f, s), c = 0; s > c; c++)
            for (var l = e + c * i, w = 0; f > w; w++) t.get(u + w * i, l) && h.set(w, c);
          return h
        }, t.moduleSize = function(t, n) {
          for (var r = n.getWidth(), i = t[0], e = t[1]; r > i && n.get(i, e);) i++;
          if (i === r) throw new it;
          var o = i - t[0];
          if (0 === o) throw new it;
          return o
        }, t.NO_POINTS = [], t
      }();
      const ye = ve;
      var de, be = function() {
        var t = function(n, r) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, n) {
              t.__proto__ = n
            } || function(t, n) {
              for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
            })(n, r)
        };
        return function(n, r) {
          function i() {
            this.constructor = n
          }
          t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
      }();
      ! function(t) {
        be(function(n) {
          return void 0 === n && (n = 500), t.call(this, new ye, n) || this
        }, t)
      }(mt),
      function(t) {
        t[t.L = 0] = "L", t[t.M = 1] = "M", t[t.Q = 2] = "Q", t[t.H = 3] = "H"
      }(de || (de = {}));
      var Ae = function() {
        function t(n, r, i) {
          this.value = n, this.stringValue = r, this.bits = i, t.FOR_BITS.set(i, this), t.FOR_VALUE.set(n, this)
        }
        return t.prototype.getValue = function() {
          return this.value
        }, t.prototype.getBits = function() {
          return this.bits
        }, t.fromString = function(n) {
          switch (n) {
            case "L":
              return t.L;
            case "M":
              return t.M;
            case "Q":
              return t.Q;
            case "H":
              return t.H;
            default:
              throw new c(n + "not available")
          }
        }, t.prototype.toString = function() {
          return this.stringValue
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.value === r.value
        }, t.forBits = function(n) {
          if (0 > n || n >= t.FOR_BITS.size) throw new v;
          return t.FOR_BITS.get(n)
        }, t.FOR_BITS = new Map, t.FOR_VALUE = new Map, t.L = new t(de.L, "L", 1), t.M = new t(de.M, "M", 0), t.Q = new t(de.Q, "Q", 3), t.H = new t(de.H, "H", 2), t
      }();
      const pe = Ae;
      var me = function() {
        function t(t) {
          this.errorCorrectionLevel = pe.forBits(t >> 3 & 3), this.dataMask = 7 & t
        }
        return t.numBitsDiffering = function(t, n) {
          return R.bitCount(t ^ n)
        }, t.decodeFormatInformation = function(n, r) {
          var i = t.doDecodeFormatInformation(n, r);
          return null !== i ? i : t.doDecodeFormatInformation(n ^ t.FORMAT_INFO_MASK_QR, r ^ t.FORMAT_INFO_MASK_QR)
        }, t.doDecodeFormatInformation = function(n, r) {
          var i, e, o = Number.MAX_SAFE_INTEGER,
            u = 0;
          try {
            for (var f = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(t.FORMAT_INFO_DECODE_LOOKUP), s = f.next(); !s.done; s = f.next()) {
              var a = s.value,
                h = a[0];
              if (h === n || h === r) return new t(a[1]);
              var c = t.numBitsDiffering(n, h);
              o > c && (u = a[1], o = c), n !== r && o > (c = t.numBitsDiffering(r, h)) && (u = a[1], o = c)
            }
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              s && !s.done && (e = f.return) && e.call(f)
            } finally {
              if (i) throw i.error
            }
          }
          return o > 3 ? null : new t(u)
        }, t.prototype.getErrorCorrectionLevel = function() {
          return this.errorCorrectionLevel
        }, t.prototype.getDataMask = function() {
          return this.dataMask
        }, t.prototype.hashCode = function() {
          return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask
        }, t.FORMAT_INFO_MASK_QR = 21522, t.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], t
      }();
      const Ie = me;
      var _e = function() {
        function t(t) {
          for (var n = [], r = 1; arguments.length > r; r++) n[r - 1] = arguments[r];
          this.ecCodewordsPerBlock = t, this.ecBlocks = n
        }
        return t.prototype.getECCodewordsPerBlock = function() {
          return this.ecCodewordsPerBlock
        }, t.prototype.getNumBlocks = function() {
          var t, n, r = 0,
            i = this.ecBlocks;
          try {
            for (var e = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(i), o = e.next(); !o.done; o = e.next()) r += o.value.getCount()
          } catch (n) {
            t = {
              error: n
            }
          } finally {
            try {
              o && !o.done && (n = e.return) && n.call(e)
            } finally {
              if (t) throw t.error
            }
          }
          return r
        }, t.prototype.getTotalECCodewords = function() {
          return this.ecCodewordsPerBlock * this.getNumBlocks()
        }, t.prototype.getECBlocks = function() {
          return this.ecBlocks
        }, t
      }();
      const ge = _e;
      var Se = function() {
        function t(t, n) {
          this.count = t, this.dataCodewords = n
        }
        return t.prototype.getCount = function() {
          return this.count
        }, t.prototype.getDataCodewords = function() {
          return this.dataCodewords
        }, t
      }();
      const Me = Se;
      var Ee = function() {
        function t(t, n) {
          for (var r, i, e = [], o = 2; arguments.length > o; o++) e[o - 2] = arguments[o];
          this.versionNumber = t, this.alignmentPatternCenters = n, this.ecBlocks = e;
          var u = 0,
            f = e[0].getECCodewordsPerBlock(),
            s = e[0].getECBlocks();
          try {
            for (var a = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), h = a.next(); !h.done; h = a.next()) {
              var c = h.value;
              u += c.getCount() * (c.getDataCodewords() + f)
            }
          } catch (t) {
            r = {
              error: t
            }
          } finally {
            try {
              h && !h.done && (i = a.return) && i.call(a)
            } finally {
              if (r) throw r.error
            }
          }
          this.totalCodewords = u
        }
        return t.prototype.getVersionNumber = function() {
          return this.versionNumber
        }, t.prototype.getAlignmentPatternCenters = function() {
          return this.alignmentPatternCenters
        }, t.prototype.getTotalCodewords = function() {
          return this.totalCodewords
        }, t.prototype.getDimensionForVersion = function() {
          return 17 + 4 * this.versionNumber
        }, t.prototype.getECBlocksForLevel = function(t) {
          return this.ecBlocks[t.getValue()]
        }, t.getProvisionalVersionForDimension = function(t) {
          if (t % 4 != 1) throw new F;
          try {
            return this.getVersionForNumber((t - 17) / 4)
          } catch {
            throw new F
          }
        }, t.getVersionForNumber = function(n) {
          if (1 > n || n > 40) throw new v;
          return t.VERSIONS[n - 1]
        }, t.decodeVersionInformation = function(n) {
          for (var r = Number.MAX_SAFE_INTEGER, i = 0, e = 0; e < t.VERSION_DECODE_INFO.length; e++) {
            var o = t.VERSION_DECODE_INFO[e];
            if (o === n) return t.getVersionForNumber(e + 7);
            var u = Ie.numBitsDiffering(n, o);
            r > u && (i = e + 7, r = u)
          }
          return r > 3 ? null : t.getVersionForNumber(i)
        }, t.prototype.buildFunctionPattern = function() {
          var t = this.getDimensionForVersion(),
            n = new tt(t);
          n.setRegion(0, 0, 9, 9), n.setRegion(t - 8, 0, 8, 9), n.setRegion(0, t - 8, 9, 8);
          for (var r = this.alignmentPatternCenters.length, i = 0; r > i; i++)
            for (var e = this.alignmentPatternCenters[i] - 2, o = 0; r > o; o++) 0 === i && (0 === o || o === r - 1) || i === r - 1 && 0 === o || n.setRegion(this.alignmentPatternCenters[o] - 2, e, 5, 5);
          return n.setRegion(6, 9, 1, t - 17), n.setRegion(9, 6, t - 17, 1), this.versionNumber > 6 && (n.setRegion(t - 11, 0, 3, 6), n.setRegion(0, t - 11, 6, 3)), n
        }, t.prototype.toString = function() {
          return "" + this.versionNumber
        }, t.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), t.VERSIONS = [new t(1, new Int32Array(0), new ge(7, new Me(1, 19)), new ge(10, new Me(1, 16)), new ge(13, new Me(1, 13)), new ge(17, new Me(1, 9))), new t(2, Int32Array.from([6, 18]), new ge(10, new Me(1, 34)), new ge(16, new Me(1, 28)), new ge(22, new Me(1, 22)), new ge(28, new Me(1, 16))), new t(3, Int32Array.from([6, 22]), new ge(15, new Me(1, 55)), new ge(26, new Me(1, 44)), new ge(18, new Me(2, 17)), new ge(22, new Me(2, 13))), new t(4, Int32Array.from([6, 26]), new ge(20, new Me(1, 80)), new ge(18, new Me(2, 32)), new ge(26, new Me(2, 24)), new ge(16, new Me(4, 9))), new t(5, Int32Array.from([6, 30]), new ge(26, new Me(1, 108)), new ge(24, new Me(2, 43)), new ge(18, new Me(2, 15), new Me(2, 16)), new ge(22, new Me(2, 11), new Me(2, 12))), new t(6, Int32Array.from([6, 34]), new ge(18, new Me(2, 68)), new ge(16, new Me(4, 27)), new ge(24, new Me(4, 19)), new ge(28, new Me(4, 15))), new t(7, Int32Array.from([6, 22, 38]), new ge(20, new Me(2, 78)), new ge(18, new Me(4, 31)), new ge(18, new Me(2, 14), new Me(4, 15)), new ge(26, new Me(4, 13), new Me(1, 14))), new t(8, Int32Array.from([6, 24, 42]), new ge(24, new Me(2, 97)), new ge(22, new Me(2, 38), new Me(2, 39)), new ge(22, new Me(4, 18), new Me(2, 19)), new ge(26, new Me(4, 14), new Me(2, 15))), new t(9, Int32Array.from([6, 26, 46]), new ge(30, new Me(2, 116)), new ge(22, new Me(3, 36), new Me(2, 37)), new ge(20, new Me(4, 16), new Me(4, 17)), new ge(24, new Me(4, 12), new Me(4, 13))), new t(10, Int32Array.from([6, 28, 50]), new ge(18, new Me(2, 68), new Me(2, 69)), new ge(26, new Me(4, 43), new Me(1, 44)), new ge(24, new Me(6, 19), new Me(2, 20)), new ge(28, new Me(6, 15), new Me(2, 16))), new t(11, Int32Array.from([6, 30, 54]), new ge(20, new Me(4, 81)), new ge(30, new Me(1, 50), new Me(4, 51)), new ge(28, new Me(4, 22), new Me(4, 23)), new ge(24, new Me(3, 12), new Me(8, 13))), new t(12, Int32Array.from([6, 32, 58]), new ge(24, new Me(2, 92), new Me(2, 93)), new ge(22, new Me(6, 36), new Me(2, 37)), new ge(26, new Me(4, 20), new Me(6, 21)), new ge(28, new Me(7, 14), new Me(4, 15))), new t(13, Int32Array.from([6, 34, 62]), new ge(26, new Me(4, 107)), new ge(22, new Me(8, 37), new Me(1, 38)), new ge(24, new Me(8, 20), new Me(4, 21)), new ge(22, new Me(12, 11), new Me(4, 12))), new t(14, Int32Array.from([6, 26, 46, 66]), new ge(30, new Me(3, 115), new Me(1, 116)), new ge(24, new Me(4, 40), new Me(5, 41)), new ge(20, new Me(11, 16), new Me(5, 17)), new ge(24, new Me(11, 12), new Me(5, 13))), new t(15, Int32Array.from([6, 26, 48, 70]), new ge(22, new Me(5, 87), new Me(1, 88)), new ge(24, new Me(5, 41), new Me(5, 42)), new ge(30, new Me(5, 24), new Me(7, 25)), new ge(24, new Me(11, 12), new Me(7, 13))), new t(16, Int32Array.from([6, 26, 50, 74]), new ge(24, new Me(5, 98), new Me(1, 99)), new ge(28, new Me(7, 45), new Me(3, 46)), new ge(24, new Me(15, 19), new Me(2, 20)), new ge(30, new Me(3, 15), new Me(13, 16))), new t(17, Int32Array.from([6, 30, 54, 78]), new ge(28, new Me(1, 107), new Me(5, 108)), new ge(28, new Me(10, 46), new Me(1, 47)), new ge(28, new Me(1, 22), new Me(15, 23)), new ge(28, new Me(2, 14), new Me(17, 15))), new t(18, Int32Array.from([6, 30, 56, 82]), new ge(30, new Me(5, 120), new Me(1, 121)), new ge(26, new Me(9, 43), new Me(4, 44)), new ge(28, new Me(17, 22), new Me(1, 23)), new ge(28, new Me(2, 14), new Me(19, 15))), new t(19, Int32Array.from([6, 30, 58, 86]), new ge(28, new Me(3, 113), new Me(4, 114)), new ge(26, new Me(3, 44), new Me(11, 45)), new ge(26, new Me(17, 21), new Me(4, 22)), new ge(26, new Me(9, 13), new Me(16, 14))), new t(20, Int32Array.from([6, 34, 62, 90]), new ge(28, new Me(3, 107), new Me(5, 108)), new ge(26, new Me(3, 41), new Me(13, 42)), new ge(30, new Me(15, 24), new Me(5, 25)), new ge(28, new Me(15, 15), new Me(10, 16))), new t(21, Int32Array.from([6, 28, 50, 72, 94]), new ge(28, new Me(4, 116), new Me(4, 117)), new ge(26, new Me(17, 42)), new ge(28, new Me(17, 22), new Me(6, 23)), new ge(30, new Me(19, 16), new Me(6, 17))), new t(22, Int32Array.from([6, 26, 50, 74, 98]), new ge(28, new Me(2, 111), new Me(7, 112)), new ge(28, new Me(17, 46)), new ge(30, new Me(7, 24), new Me(16, 25)), new ge(24, new Me(34, 13))), new t(23, Int32Array.from([6, 30, 54, 78, 102]), new ge(30, new Me(4, 121), new Me(5, 122)), new ge(28, new Me(4, 47), new Me(14, 48)), new ge(30, new Me(11, 24), new Me(14, 25)), new ge(30, new Me(16, 15), new Me(14, 16))), new t(24, Int32Array.from([6, 28, 54, 80, 106]), new ge(30, new Me(6, 117), new Me(4, 118)), new ge(28, new Me(6, 45), new Me(14, 46)), new ge(30, new Me(11, 24), new Me(16, 25)), new ge(30, new Me(30, 16), new Me(2, 17))), new t(25, Int32Array.from([6, 32, 58, 84, 110]), new ge(26, new Me(8, 106), new Me(4, 107)), new ge(28, new Me(8, 47), new Me(13, 48)), new ge(30, new Me(7, 24), new Me(22, 25)), new ge(30, new Me(22, 15), new Me(13, 16))), new t(26, Int32Array.from([6, 30, 58, 86, 114]), new ge(28, new Me(10, 114), new Me(2, 115)), new ge(28, new Me(19, 46), new Me(4, 47)), new ge(28, new Me(28, 22), new Me(6, 23)), new ge(30, new Me(33, 16), new Me(4, 17))), new t(27, Int32Array.from([6, 34, 62, 90, 118]), new ge(30, new Me(8, 122), new Me(4, 123)), new ge(28, new Me(22, 45), new Me(3, 46)), new ge(30, new Me(8, 23), new Me(26, 24)), new ge(30, new Me(12, 15), new Me(28, 16))), new t(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ge(30, new Me(3, 117), new Me(10, 118)), new ge(28, new Me(3, 45), new Me(23, 46)), new ge(30, new Me(4, 24), new Me(31, 25)), new ge(30, new Me(11, 15), new Me(31, 16))), new t(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ge(30, new Me(7, 116), new Me(7, 117)), new ge(28, new Me(21, 45), new Me(7, 46)), new ge(30, new Me(1, 23), new Me(37, 24)), new ge(30, new Me(19, 15), new Me(26, 16))), new t(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ge(30, new Me(5, 115), new Me(10, 116)), new ge(28, new Me(19, 47), new Me(10, 48)), new ge(30, new Me(15, 24), new Me(25, 25)), new ge(30, new Me(23, 15), new Me(25, 16))), new t(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ge(30, new Me(13, 115), new Me(3, 116)), new ge(28, new Me(2, 46), new Me(29, 47)), new ge(30, new Me(42, 24), new Me(1, 25)), new ge(30, new Me(23, 15), new Me(28, 16))), new t(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ge(30, new Me(17, 115)), new ge(28, new Me(10, 46), new Me(23, 47)), new ge(30, new Me(10, 24), new Me(35, 25)), new ge(30, new Me(19, 15), new Me(35, 16))), new t(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ge(30, new Me(17, 115), new Me(1, 116)), new ge(28, new Me(14, 46), new Me(21, 47)), new ge(30, new Me(29, 24), new Me(19, 25)), new ge(30, new Me(11, 15), new Me(46, 16))), new t(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ge(30, new Me(13, 115), new Me(6, 116)), new ge(28, new Me(14, 46), new Me(23, 47)), new ge(30, new Me(44, 24), new Me(7, 25)), new ge(30, new Me(59, 16), new Me(1, 17))), new t(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ge(30, new Me(12, 121), new Me(7, 122)), new ge(28, new Me(12, 47), new Me(26, 48)), new ge(30, new Me(39, 24), new Me(14, 25)), new ge(30, new Me(22, 15), new Me(41, 16))), new t(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ge(30, new Me(6, 121), new Me(14, 122)), new ge(28, new Me(6, 47), new Me(34, 48)), new ge(30, new Me(46, 24), new Me(10, 25)), new ge(30, new Me(2, 15), new Me(64, 16))), new t(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ge(30, new Me(17, 122), new Me(4, 123)), new ge(28, new Me(29, 46), new Me(14, 47)), new ge(30, new Me(49, 24), new Me(10, 25)), new ge(30, new Me(24, 15), new Me(46, 16))), new t(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ge(30, new Me(4, 122), new Me(18, 123)), new ge(28, new Me(13, 46), new Me(32, 47)), new ge(30, new Me(48, 24), new Me(14, 25)), new ge(30, new Me(42, 15), new Me(32, 16))), new t(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ge(30, new Me(20, 117), new Me(4, 118)), new ge(28, new Me(40, 47), new Me(7, 48)), new ge(30, new Me(43, 24), new Me(22, 25)), new ge(30, new Me(10, 15), new Me(67, 16))), new t(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ge(30, new Me(19, 118), new Me(6, 119)), new ge(28, new Me(18, 47), new Me(31, 48)), new ge(30, new Me(34, 24), new Me(34, 25)), new ge(30, new Me(20, 15), new Me(61, 16)))], t
      }();
      const Oe = Ee;
      var ke;
      ! function(t) {
        t[t.DATA_MASK_000 = 0] = "DATA_MASK_000", t[t.DATA_MASK_001 = 1] = "DATA_MASK_001", t[t.DATA_MASK_010 = 2] = "DATA_MASK_010", t[t.DATA_MASK_011 = 3] = "DATA_MASK_011", t[t.DATA_MASK_100 = 4] = "DATA_MASK_100", t[t.DATA_MASK_101 = 5] = "DATA_MASK_101", t[t.DATA_MASK_110 = 6] = "DATA_MASK_110", t[t.DATA_MASK_111 = 7] = "DATA_MASK_111"
      }(ke || (ke = {}));
      var Te = function() {
        function t(t, n) {
          this.value = t, this.isMasked = n
        }
        return t.prototype.unmaskBitMatrix = function(t, n) {
          for (var r = 0; n > r; r++)
            for (var i = 0; n > i; i++) this.isMasked(r, i) && t.flip(i, r)
        }, t.values = new Map([
          [ke.DATA_MASK_000, new t(ke.DATA_MASK_000, function(t, n) {
            return !(t + n & 1)
          })],
          [ke.DATA_MASK_001, new t(ke.DATA_MASK_001, function(t, n) {
            return !(1 & t)
          })],
          [ke.DATA_MASK_010, new t(ke.DATA_MASK_010, function(t, n) {
            return n % 3 == 0
          })],
          [ke.DATA_MASK_011, new t(ke.DATA_MASK_011, function(t, n) {
            return (t + n) % 3 == 0
          })],
          [ke.DATA_MASK_100, new t(ke.DATA_MASK_100, function(t, n) {
            return !(Math.floor(t / 2) + Math.floor(n / 3) & 1)
          })],
          [ke.DATA_MASK_101, new t(ke.DATA_MASK_101, function(t, n) {
            return t * n % 6 == 0
          })],
          [ke.DATA_MASK_110, new t(ke.DATA_MASK_110, function(t, n) {
            return 3 > t * n % 6
          })],
          [ke.DATA_MASK_111, new t(ke.DATA_MASK_111, function(t, n) {
            return !(t + n + t * n % 3 & 1)
          })]
        ]), t
      }();
      const je = Te;
      var xe = function() {
        function t(t) {
          var n = t.getHeight();
          if (21 > n || 1 != (3 & n)) throw new F;
          this.bitMatrix = t
        }
        return t.prototype.readFormatInformation = function() {
          if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
          for (var t = 0, n = 0; 6 > n; n++) t = this.copyBit(n, 8, t);
          t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
          for (var r = 5; r >= 0; r--) t = this.copyBit(8, r, t);
          var i = this.bitMatrix.getHeight(),
            e = 0,
            o = i - 7;
          for (r = i - 1; r >= o; r--) e = this.copyBit(8, r, e);
          for (n = i - 8; i > n; n++) e = this.copyBit(n, 8, e);
          if (this.parsedFormatInfo = Ie.decodeFormatInformation(t, e), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
          throw new F
        }, t.prototype.readVersion = function() {
          if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
          var t = this.bitMatrix.getHeight(),
            n = Math.floor((t - 17) / 4);
          if (6 >= n) return Oe.getVersionForNumber(n);
          for (var r = 0, i = t - 11, e = 5; e >= 0; e--)
            for (var o = t - 9; o >= i; o--) r = this.copyBit(o, e, r);
          var u = Oe.decodeVersionInformation(r);
          if (null !== u && u.getDimensionForVersion() === t) return this.parsedVersion = u, u;
          for (r = 0, o = 5; o >= 0; o--)
            for (e = t - 9; e >= i; e--) r = this.copyBit(o, e, r);
          if (null !== (u = Oe.decodeVersionInformation(r)) && u.getDimensionForVersion() === t) return this.parsedVersion = u, u;
          throw new F
        }, t.prototype.copyBit = function(t, n, r) {
          return (this.isMirror ? this.bitMatrix.get(n, t) : this.bitMatrix.get(t, n)) ? r << 1 | 1 : r << 1
        }, t.prototype.readCodewords = function() {
          var t = this.readFormatInformation(),
            n = this.readVersion(),
            r = je.values.get(t.getDataMask()),
            i = this.bitMatrix.getHeight();
          r.unmaskBitMatrix(this.bitMatrix, i);
          for (var e = n.buildFunctionPattern(), o = !0, u = new Uint8Array(n.getTotalCodewords()), f = 0, s = 0, a = 0, h = i - 1; h > 0; h -= 2) {
            6 === h && h--;
            for (var c = 0; i > c; c++)
              for (var l = o ? i - 1 - c : c, w = 0; 2 > w; w++) e.get(h - w, l) || (a++, s <<= 1, this.bitMatrix.get(h - w, l) && (s |= 1), 8 === a && (u[f++] = s, a = 0, s = 0));
            o = !o
          }
          if (f !== n.getTotalCodewords()) throw new F;
          return u
        }, t.prototype.remask = function() {
          if (null !== this.parsedFormatInfo) {
            var t = je.values.get(this.parsedFormatInfo.getDataMask()),
              n = this.bitMatrix.getHeight();
            t.unmaskBitMatrix(this.bitMatrix, n)
          }
        }, t.prototype.setMirror = function(t) {
          this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
        }, t.prototype.mirror = function() {
          for (var t = this.bitMatrix, n = 0, r = t.getWidth(); r > n; n++)
            for (var i = n + 1, e = t.getHeight(); e > i; i++) t.get(n, i) !== t.get(i, n) && (t.flip(i, n), t.flip(n, i))
        }, t
      }();
      const Ce = xe;
      var Re = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Ne = function() {
          function t(t, n) {
            this.numDataCodewords = t, this.codewords = n
          }
          return t.getDataBlocks = function(n, r, i) {
            var e, o, u, f;
            if (n.length !== r.getTotalCodewords()) throw new v;
            var s = r.getECBlocksForLevel(i),
              a = 0,
              h = s.getECBlocks();
            try {
              for (var c = Re(h), l = c.next(); !l.done; l = c.next()) a += (A = l.value).getCount()
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (o = c.return) && o.call(c)
              } finally {
                if (e) throw e.error
              }
            }
            var w = Array(a),
              y = 0;
            try {
              for (var d = Re(h), b = d.next(); !b.done; b = d.next())
                for (var A = b.value, p = 0; p < A.getCount(); p++) {
                  var m = A.getDataCodewords(),
                    I = s.getECCodewordsPerBlock() + m;
                  w[y++] = new t(m, new Uint8Array(I))
                }
            } catch (t) {
              u = {
                error: t
              }
            } finally {
              try {
                b && !b.done && (f = d.return) && f.call(d)
              } finally {
                if (u) throw u.error
              }
            }
            for (var _ = w[0].codewords.length, g = w.length - 1; g >= 0 && w[g].codewords.length !== _;) g--;
            g++;
            var S = _ - s.getECCodewordsPerBlock(),
              M = 0;
            for (p = 0; S > p; p++)
              for (var E = 0; y > E; E++) w[E].codewords[p] = n[M++];
            for (E = g; y > E; E++) w[E].codewords[S] = n[M++];
            var O = w[0].codewords.length;
            for (p = S; O > p; p++)
              for (E = 0; y > E; E++) {
                var k = g > E ? p : p + 1;
                w[E].codewords[k] = n[M++]
              }
            return w
          }, t.prototype.getNumDataCodewords = function() {
            return this.numDataCodewords
          }, t.prototype.getCodewords = function() {
            return this.codewords
          }, t
        }();
      const Ue = Ne;
      var De;
      ! function(t) {
        t[t.TERMINATOR = 0] = "TERMINATOR", t[t.NUMERIC = 1] = "NUMERIC", t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC", t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t[t.BYTE = 4] = "BYTE", t[t.ECI = 5] = "ECI", t[t.KANJI = 6] = "KANJI", t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t[t.HANZI = 9] = "HANZI"
      }(De || (De = {}));
      var Be = function() {
        function t(n, r, i, e) {
          this.value = n, this.stringValue = r, this.characterCountBitsForVersions = i, this.bits = e, t.FOR_BITS.set(e, this), t.FOR_VALUE.set(n, this)
        }
        return t.forBits = function(n) {
          var r = t.FOR_BITS.get(n);
          if (void 0 === r) throw new v;
          return r
        }, t.prototype.getCharacterCountBits = function(t) {
          var n, r = t.getVersionNumber();
          return n = r > 9 ? r > 26 ? 2 : 1 : 0, this.characterCountBitsForVersions[n]
        }, t.prototype.getValue = function() {
          return this.value
        }, t.prototype.getBits = function() {
          return this.bits
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          return this.value === r.value
        }, t.prototype.toString = function() {
          return this.stringValue
        }, t.FOR_BITS = new Map, t.FOR_VALUE = new Map, t.TERMINATOR = new t(De.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), t.NUMERIC = new t(De.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), t.ALPHANUMERIC = new t(De.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), t.STRUCTURED_APPEND = new t(De.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), t.BYTE = new t(De.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), t.ECI = new t(De.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), t.KANJI = new t(De.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), t.FNC1_FIRST_POSITION = new t(De.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), t.FNC1_SECOND_POSITION = new t(De.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), t.HANZI = new t(De.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), t
      }();
      const Pe = Be;
      var Le = function() {
        function t() {}
        return t.decode = function(n, r, i, e) {
          var o = new ue(n),
            u = new Q,
            f = [],
            s = -1,
            a = -1;
          try {
            var h = null,
              c = !1,
              l = void 0;
            do {
              if (4 > o.available()) l = Pe.TERMINATOR;
              else {
                var w = o.readBits(4);
                l = Pe.forBits(w)
              }
              switch (l) {
                case Pe.TERMINATOR:
                  break;
                case Pe.FNC1_FIRST_POSITION:
                case Pe.FNC1_SECOND_POSITION:
                  c = !0;
                  break;
                case Pe.STRUCTURED_APPEND:
                  if (16 > o.available()) throw new F;
                  s = o.readBits(8), a = o.readBits(8);
                  break;
                case Pe.ECI:
                  var v = t.parseECIValue(o);
                  if (null === (h = H.getCharacterSetECIByValue(v))) throw new F;
                  break;
                case Pe.HANZI:
                  var y = o.readBits(4),
                    d = o.readBits(l.getCharacterCountBits(r));
                  y === t.GB2312_SUBSET && t.decodeHanziSegment(o, u, d);
                  break;
                default:
                  var b = o.readBits(l.getCharacterCountBits(r));
                  switch (l) {
                    case Pe.NUMERIC:
                      t.decodeNumericSegment(o, u, b);
                      break;
                    case Pe.ALPHANUMERIC:
                      t.decodeAlphanumericSegment(o, u, b, c);
                      break;
                    case Pe.BYTE:
                      t.decodeByteSegment(o, u, b, h, f, e);
                      break;
                    case Pe.KANJI:
                      t.decodeKanjiSegment(o, u, b);
                      break;
                    default:
                      throw new F
                  }
              }
            } while (l !== Pe.TERMINATOR)
          } catch {
            throw new F
          }
          return new kt(n, u.toString(), 0 === f.length ? null : f, null === i ? null : i.toString(), s, a)
        }, t.decodeHanziSegment = function(t, n, r) {
          if (13 * r > t.available()) throw new F;
          for (var i = new Uint8Array(2 * r), e = 0; r > 0;) {
            var o = t.readBits(13),
              u = o / 96 << 8 & 4294967295 | o % 96;
            u += 959 > u ? 41377 : 42657, i[e] = u >> 8 & 255, i[e + 1] = 255 & u, e += 2, r--
          }
          try {
            n.append(K.decode(i, Z.GB2312))
          } catch (t) {
            throw new F(t)
          }
        }, t.decodeKanjiSegment = function(t, n, r) {
          if (13 * r > t.available()) throw new F;
          for (var i = new Uint8Array(2 * r), e = 0; r > 0;) {
            var o = t.readBits(13),
              u = o / 192 << 8 & 4294967295 | o % 192;
            u += 7936 > u ? 33088 : 49472, i[e] = u >> 8, i[e + 1] = u, e += 2, r--
          }
          try {
            n.append(K.decode(i, Z.SHIFT_JIS))
          } catch (t) {
            throw new F(t)
          }
        }, t.decodeByteSegment = function(t, n, r, i, e, o) {
          if (8 * r > t.available()) throw new F;
          for (var u = new Uint8Array(r), f = 0; r > f; f++) u[f] = t.readBits(8);
          var s;
          s = null === i ? Z.guessEncoding(u, o) : i.getName();
          try {
            n.append(K.decode(u, s))
          } catch (t) {
            throw new F(t)
          }
          e.push(u)
        }, t.toAlphaNumericChar = function(n) {
          if (n >= t.ALPHANUMERIC_CHARS.length) throw new F;
          return t.ALPHANUMERIC_CHARS[n]
        }, t.decodeAlphanumericSegment = function(n, r, i, e) {
          for (var o = r.length(); i > 1;) {
            if (11 > n.available()) throw new F;
            var u = n.readBits(11);
            r.append(t.toAlphaNumericChar(Math.floor(u / 45))), r.append(t.toAlphaNumericChar(u % 45)), i -= 2
          }
          if (1 === i) {
            if (6 > n.available()) throw new F;
            r.append(t.toAlphaNumericChar(n.readBits(6)))
          }
          if (e)
            for (var f = o; f < r.length(); f++) "%" === r.charAt(f) && (f < r.length() - 1 && "%" === r.charAt(f + 1) ? r.deleteCharAt(f + 1) : r.setCharAt(f, ""))
        }, t.decodeNumericSegment = function(n, r, i) {
          for (; i >= 3;) {
            if (10 > n.available()) throw new F;
            var e = n.readBits(10);
            if (e >= 1e3) throw new F;
            r.append(t.toAlphaNumericChar(Math.floor(e / 100))), r.append(t.toAlphaNumericChar(Math.floor(e / 10) % 10)), r.append(t.toAlphaNumericChar(e % 10)), i -= 3
          }
          if (2 === i) {
            if (7 > n.available()) throw new F;
            var o = n.readBits(7);
            if (o >= 100) throw new F;
            r.append(t.toAlphaNumericChar(Math.floor(o / 10))), r.append(t.toAlphaNumericChar(o % 10))
          } else if (1 === i) {
            if (4 > n.available()) throw new F;
            var u = n.readBits(4);
            if (u >= 10) throw new F;
            r.append(t.toAlphaNumericChar(u))
          }
        }, t.parseECIValue = function(t) {
          var n = t.readBits(8);
          if (!(128 & n)) return 127 & n;
          if (128 == (192 & n)) return (63 & n) << 8 & 4294967295 | t.readBits(8);
          if (192 == (224 & n)) return (31 & n) << 16 & 4294967295 | t.readBits(16);
          throw new F
        }, t.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.GB2312_SUBSET = 1, t
      }();
      const Fe = Le;
      var Ge = function() {
        function t(t) {
          this.mirrored = t
        }
        return t.prototype.isMirrored = function() {
          return this.mirrored
        }, t.prototype.applyMirroredCorrection = function(t) {
          if (this.mirrored && null !== t && t.length >= 3) {
            var n = t[0];
            t[0] = t[2], t[2] = n
          }
        }, t
      }();
      const ze = Ge;
      var He = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        qe = function() {
          function t() {
            this.rsDecoder = new Wt(Pt.QR_CODE_FIELD_256)
          }
          return t.prototype.decodeBooleanArray = function(t, n) {
            return this.decodeBitMatrix(tt.parseFromBooleanArray(t), n)
          }, t.prototype.decodeBitMatrix = function(t, n) {
            var r = new Ce(t),
              i = null;
            try {
              return this.decodeBitMatrixParser(r, n)
            } catch (t) {
              i = t
            }
            try {
              r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
              var e = this.decodeBitMatrixParser(r, n);
              return e.setOther(new ze(!0)), e
            } catch (t) {
              throw null !== i ? i : t
            }
          }, t.prototype.decodeBitMatrixParser = function(t, n) {
            var r, i, e, o, u = t.readVersion(),
              f = t.readFormatInformation().getErrorCorrectionLevel(),
              s = t.readCodewords(),
              a = Ue.getDataBlocks(s, u, f),
              h = 0;
            try {
              for (var c = He(a), l = c.next(); !l.done; l = c.next()) h += (b = l.value).getNumDataCodewords()
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (i = c.return) && i.call(c)
              } finally {
                if (r) throw r.error
              }
            }
            var w = new Uint8Array(h),
              v = 0;
            try {
              for (var y = He(a), d = y.next(); !d.done; d = y.next()) {
                var b, A = (b = d.value).getCodewords(),
                  p = b.getNumDataCodewords();
                this.correctErrors(A, p);
                for (var m = 0; p > m; m++) w[v++] = A[m]
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                d && !d.done && (o = y.return) && o.call(y)
              } finally {
                if (e) throw e.error
              }
            }
            return Fe.decode(w, u, f, n)
          }, t.prototype.correctErrors = function(t, n) {
            var r = new Int32Array(t);
            try {
              this.rsDecoder.decode(r, t.length - n)
            } catch {
              throw new p
            }
            for (var i = 0; n > i; i++) t[i] = r[i]
          }, t
        }();
      const Xe = qe;
      var We = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        $e = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n, r) || this;
            return e.estimatedModuleSize = i, e
          }
          return We(n, t), n.prototype.aboutEquals = function(t, n, r) {
            if (Math.abs(n - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
              var i = Math.abs(t - this.estimatedModuleSize);
              return 1 >= i || i <= this.estimatedModuleSize
            }
            return !1
          }, n.prototype.combineEstimate = function(t, r, i) {
            return new n((this.getX() + r) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + i) / 2)
          }, n
        }(nn);
      const Ke = $e;
      var Ve = function() {
        function t(t, n, r, i, e, o, u) {
          this.image = t, this.startX = n, this.startY = r, this.width = i, this.height = e, this.moduleSize = o, this.resultPointCallback = u, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
        }
        return t.prototype.find = function() {
          for (var t = this.startX, n = this.height, r = t + this.width, i = this.startY + n / 2, e = new Int32Array(3), o = this.image, u = 0; n > u; u++) {
            var f = i + (1 & u ? -Math.floor((u + 1) / 2) : Math.floor((u + 1) / 2));
            e[0] = 0, e[1] = 0, e[2] = 0;
            for (var s = t; r > s && !o.get(s, f);) s++;
            for (var a = 0; r > s;) {
              if (o.get(s, f))
                if (1 === a) e[1]++;
                else if (2 === a) {
                var h;
                if (this.foundPatternCross(e) && null !== (h = this.handlePossibleCenter(e, f, s))) return h;
                e[0] = e[2], e[1] = 1, e[2] = 0, a = 1
              } else e[++a]++;
              else 1 === a && a++, e[a]++;
              s++
            }
            if (this.foundPatternCross(e) && null !== (h = this.handlePossibleCenter(e, f, r))) return h
          }
          if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
          throw new it
        }, t.centerFromEnd = function(t, n) {
          return n - t[2] - t[1] / 2
        }, t.prototype.foundPatternCross = function(t) {
          for (var n = this.moduleSize, r = n / 2, i = 0; 3 > i; i++)
            if (Math.abs(n - t[i]) >= r) return !1;
          return !0
        }, t.prototype.crossCheckVertical = function(n, r, i, e) {
          var o = this.image,
            u = o.getHeight(),
            f = this.crossCheckStateCount;
          f[0] = 0, f[1] = 0, f[2] = 0;
          for (var s = n; s >= 0 && o.get(r, s) && f[1] <= i;) f[1]++, s--;
          if (0 > s || f[1] > i) return NaN;
          for (; s >= 0 && !o.get(r, s) && f[0] <= i;) f[0]++, s--;
          if (f[0] > i) return NaN;
          for (s = n + 1; u > s && o.get(r, s) && f[1] <= i;) f[1]++, s++;
          if (s === u || f[1] > i) return NaN;
          for (; u > s && !o.get(r, s) && f[2] <= i;) f[2]++, s++;
          if (f[2] > i) return NaN;
          var a = f[0] + f[1] + f[2];
          return 2 * e > 5 * Math.abs(a - e) && this.foundPatternCross(f) ? t.centerFromEnd(f, s) : NaN
        }, t.prototype.handlePossibleCenter = function(n, r, i) {
          var e, o, u = n[0] + n[1] + n[2],
            f = t.centerFromEnd(n, i),
            s = this.crossCheckVertical(r, f, 2 * n[1], u);
          if (!isNaN(s)) {
            var a = (n[0] + n[1] + n[2]) / 3;
            try {
              for (var h = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(this.possibleCenters), c = h.next(); !c.done; c = h.next()) {
                var l = c.value;
                if (l.aboutEquals(a, s, f)) return l.combineEstimate(s, f, a)
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                c && !c.done && (o = h.return) && o.call(h)
              } finally {
                if (e) throw e.error
              }
            }
            var w = new Ke(f, s, a);
            this.possibleCenters.push(w), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
          }
          return null
        }, t
      }();
      const Ze = Ve;
      var Je = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Qe = function(t) {
          function n(n, r, i, e) {
            var o = t.call(this, n, r) || this;
            return o.estimatedModuleSize = i, o.count = e, void 0 === e && (o.count = 1), o
          }
          return Je(n, t), n.prototype.getEstimatedModuleSize = function() {
            return this.estimatedModuleSize
          }, n.prototype.getCount = function() {
            return this.count
          }, n.prototype.aboutEquals = function(t, n, r) {
            if (Math.abs(n - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
              var i = Math.abs(t - this.estimatedModuleSize);
              return 1 >= i || i <= this.estimatedModuleSize
            }
            return !1
          }, n.prototype.combineEstimate = function(t, r, i) {
            var e = this.count + 1;
            return new n((this.count * this.getX() + r) / e, (this.count * this.getY() + t) / e, (this.count * this.estimatedModuleSize + i) / e, e)
          }, n
        }(nn);
      const Ye = Qe;
      var to = function() {
        function t(t) {
          this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
        }
        return t.prototype.getBottomLeft = function() {
          return this.bottomLeft
        }, t.prototype.getTopLeft = function() {
          return this.topLeft
        }, t.prototype.getTopRight = function() {
          return this.topRight
        }, t
      }();
      const no = to;
      var ro = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        io = function() {
          function t(t, n) {
            this.image = t, this.resultPointCallback = n, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = n
          }
          return t.prototype.getImage = function() {
            return this.image
          }, t.prototype.getPossibleCenters = function() {
            return this.possibleCenters
          }, t.prototype.find = function(n) {
            var r = null != n && void 0 !== n.get(B.TRY_HARDER),
              i = null != n && void 0 !== n.get(B.PURE_BARCODE),
              e = this.image,
              o = e.getHeight(),
              u = e.getWidth(),
              f = Math.floor(3 * o / (4 * t.MAX_MODULES));
            (f < t.MIN_SKIP || r) && (f = t.MIN_SKIP);
            for (var s = !1, a = new Int32Array(5), h = f - 1; o > h && !s; h += f) {
              a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0;
              for (var c = 0, l = 0; u > l; l++)
                if (e.get(l, h)) !(1 & ~c) && c++, a[c]++;
                else if (1 & c) a[c]++;
              else if (4 === c)
                if (t.foundPatternCross(a)) {
                  if (!0 !== this.handlePossibleCenter(a, h, l, i)) {
                    a[0] = a[2], a[1] = a[3], a[2] = a[4], a[3] = 1, a[4] = 0, c = 3;
                    continue
                  }
                  if (f = 2, !0 === this.hasSkipped) s = this.haveMultiplyConfirmedCenters();
                  else {
                    var w = this.findRowSkip();
                    w > a[2] && (h += w - a[2] - f, l = u - 1)
                  }
                  c = 0, a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0
                } else a[0] = a[2], a[1] = a[3], a[2] = a[4], a[3] = 1, a[4] = 0, c = 3;
              else a[++c]++;
              t.foundPatternCross(a) && !0 === this.handlePossibleCenter(a, h, u, i) && (f = a[0], this.hasSkipped && (s = this.haveMultiplyConfirmedCenters()))
            }
            var v = this.selectBestPatterns();
            return nn.orderBestPatterns(v), new no(v)
          }, t.centerFromEnd = function(t, n) {
            return n - t[4] - t[3] - t[2] / 2
          }, t.foundPatternCross = function(t) {
            for (var n = 0, r = 0; 5 > r; r++) {
              var i = t[r];
              if (0 === i) return !1;
              n += i
            }
            if (7 > n) return !1;
            var e = n / 7,
              o = e / 2;
            return Math.abs(e - t[0]) < o && Math.abs(e - t[1]) < o && Math.abs(3 * e - t[2]) < 3 * o && Math.abs(e - t[3]) < o && Math.abs(e - t[4]) < o
          }, t.prototype.getCrossCheckStateCount = function() {
            var t = this.crossCheckStateCount;
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
          }, t.prototype.crossCheckDiagonal = function(n, r, i, e) {
            for (var o = this.getCrossCheckStateCount(), u = 0, f = this.image; n >= u && r >= u && f.get(r - u, n - u);) o[2]++, u++;
            if (u > n || u > r) return !1;
            for (; !(u > n || u > r || f.get(r - u, n - u) || o[1] > i);) o[1]++, u++;
            if (u > n || u > r || o[1] > i) return !1;
            for (; n >= u && r >= u && f.get(r - u, n - u) && o[0] <= i;) o[0]++, u++;
            if (o[0] > i) return !1;
            var s = f.getHeight(),
              a = f.getWidth();
            for (u = 1; s > n + u && a > r + u && f.get(r + u, n + u);) o[2]++, u++;
            if (n + u >= s || r + u >= a) return !1;
            for (; s > n + u && a > r + u && !f.get(r + u, n + u) && o[3] < i;) o[3]++, u++;
            if (n + u >= s || r + u >= a || o[3] >= i) return !1;
            for (; s > n + u && a > r + u && f.get(r + u, n + u) && o[4] < i;) o[4]++, u++;
            if (o[4] >= i) return !1;
            var h = o[0] + o[1] + o[2] + o[3] + o[4];
            return 2 * e > Math.abs(h - e) && t.foundPatternCross(o)
          }, t.prototype.crossCheckVertical = function(n, r, i, e) {
            for (var o = this.image, u = o.getHeight(), f = this.getCrossCheckStateCount(), s = n; s >= 0 && o.get(r, s);) f[2]++, s--;
            if (0 > s) return NaN;
            for (; s >= 0 && !o.get(r, s) && f[1] <= i;) f[1]++, s--;
            if (0 > s || f[1] > i) return NaN;
            for (; s >= 0 && o.get(r, s) && f[0] <= i;) f[0]++, s--;
            if (f[0] > i) return NaN;
            for (s = n + 1; u > s && o.get(r, s);) f[2]++, s++;
            if (s === u) return NaN;
            for (; u > s && !o.get(r, s) && f[3] < i;) f[3]++, s++;
            if (s === u || f[3] >= i) return NaN;
            for (; u > s && o.get(r, s) && f[4] < i;) f[4]++, s++;
            if (f[4] >= i) return NaN;
            var a = f[0] + f[1] + f[2] + f[3] + f[4];
            return 2 * e > 5 * Math.abs(a - e) && t.foundPatternCross(f) ? t.centerFromEnd(f, s) : NaN
          }, t.prototype.crossCheckHorizontal = function(n, r, i, e) {
            for (var o = this.image, u = o.getWidth(), f = this.getCrossCheckStateCount(), s = n; s >= 0 && o.get(s, r);) f[2]++, s--;
            if (0 > s) return NaN;
            for (; s >= 0 && !o.get(s, r) && f[1] <= i;) f[1]++, s--;
            if (0 > s || f[1] > i) return NaN;
            for (; s >= 0 && o.get(s, r) && f[0] <= i;) f[0]++, s--;
            if (f[0] > i) return NaN;
            for (s = n + 1; u > s && o.get(s, r);) f[2]++, s++;
            if (s === u) return NaN;
            for (; u > s && !o.get(s, r) && f[3] < i;) f[3]++, s++;
            if (s === u || f[3] >= i) return NaN;
            for (; u > s && o.get(s, r) && f[4] < i;) f[4]++, s++;
            if (f[4] >= i) return NaN;
            var a = f[0] + f[1] + f[2] + f[3] + f[4];
            return e > 5 * Math.abs(a - e) && t.foundPatternCross(f) ? t.centerFromEnd(f, s) : NaN
          }, t.prototype.handlePossibleCenter = function(n, r, i, e) {
            var o = n[0] + n[1] + n[2] + n[3] + n[4],
              u = t.centerFromEnd(n, i),
              f = this.crossCheckVertical(r, Math.floor(u), n[2], o);
            if (!isNaN(f) && (u = this.crossCheckHorizontal(Math.floor(u), Math.floor(f), n[2], o), !isNaN(u) && (!e || this.crossCheckDiagonal(Math.floor(f), Math.floor(u), n[2], o)))) {
              for (var s = o / 7, a = !1, h = this.possibleCenters, c = 0, l = h.length; l > c; c++) {
                var w = h[c];
                if (w.aboutEquals(s, f, u)) {
                  h[c] = w.combineEstimate(f, u, s), a = !0;
                  break
                }
              }
              if (!a) {
                var v = new Ye(u, f, s);
                h.push(v), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(v)
              }
              return !0
            }
            return !1
          }, t.prototype.findRowSkip = function() {
            var n, r;
            if (1 >= this.possibleCenters.length) return 0;
            var i = null;
            try {
              for (var e = ro(this.possibleCenters), o = e.next(); !o.done; o = e.next()) {
                var u = o.value;
                if (u.getCount() >= t.CENTER_QUORUM) {
                  if (null != i) return this.hasSkipped = !0, Math.floor((Math.abs(i.getX() - u.getX()) - Math.abs(i.getY() - u.getY())) / 2);
                  i = u
                }
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (r = e.return) && r.call(e)
              } finally {
                if (n) throw n.error
              }
            }
            return 0
          }, t.prototype.haveMultiplyConfirmedCenters = function() {
            var n, r, i, e, o = 0,
              u = 0,
              f = this.possibleCenters.length;
            try {
              for (var s = ro(this.possibleCenters), a = s.next(); !a.done; a = s.next())(v = a.value).getCount() >= t.CENTER_QUORUM && (o++, u += v.getEstimatedModuleSize())
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                a && !a.done && (r = s.return) && r.call(s)
              } finally {
                if (n) throw n.error
              }
            }
            if (3 > o) return !1;
            var h = u / f,
              c = 0;
            try {
              for (var l = ro(this.possibleCenters), w = l.next(); !w.done; w = l.next()) {
                var v = w.value;
                c += Math.abs(v.getEstimatedModuleSize() - h)
              }
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                w && !w.done && (e = l.return) && e.call(l)
              } finally {
                if (i) throw i.error
              }
            }
            return .05 * u >= c
          }, t.prototype.selectBestPatterns = function() {
            var t, n, r, i, e = this.possibleCenters.length;
            if (3 > e) throw new it;
            var o, u = this.possibleCenters;
            if (e > 3) {
              var f = 0,
                s = 0;
              try {
                for (var a = ro(this.possibleCenters), h = a.next(); !h.done; h = a.next()) {
                  var c = h.value.getEstimatedModuleSize();
                  f += c, s += c * c
                }
              } catch (n) {
                t = {
                  error: n
                }
              } finally {
                try {
                  h && !h.done && (n = a.return) && n.call(a)
                } finally {
                  if (t) throw t.error
                }
              }
              var l = Math.sqrt(s / e - (o = f / e) * o);
              u.sort(function(t, n) {
                var r = Math.abs(n.getEstimatedModuleSize() - o),
                  i = Math.abs(t.getEstimatedModuleSize() - o);
                return i > r ? -1 : r > i ? 1 : 0
              });
              for (var w = Math.max(.2 * o, l), v = 0; v < u.length && u.length > 3; v++) {
                var y = u[v];
                Math.abs(y.getEstimatedModuleSize() - o) > w && (u.splice(v, 1), v--)
              }
            }
            if (u.length > 3) {
              f = 0;
              try {
                for (var d = ro(u), b = d.next(); !b.done; b = d.next()) f += b.value.getEstimatedModuleSize()
              } catch (t) {
                r = {
                  error: t
                }
              } finally {
                try {
                  b && !b.done && (i = d.return) && i.call(d)
                } finally {
                  if (r) throw r.error
                }
              }
              o = f / u.length, u.sort(function(t, n) {
                if (n.getCount() === t.getCount()) {
                  var r = Math.abs(n.getEstimatedModuleSize() - o),
                    i = Math.abs(t.getEstimatedModuleSize() - o);
                  return i > r ? 1 : r > i ? -1 : 0
                }
                return n.getCount() - t.getCount()
              }), u.splice(3)
            }
            return [u[0], u[1], u[2]]
          }, t.CENTER_QUORUM = 2, t.MIN_SKIP = 3, t.MAX_MODULES = 57, t
        }();
      const eo = io;
      var oo = function() {
        function t(t) {
          this.image = t
        }
        return t.prototype.getImage = function() {
          return this.image
        }, t.prototype.getResultPointCallback = function() {
          return this.resultPointCallback
        }, t.prototype.detect = function(t) {
          this.resultPointCallback = null == t ? null : t.get(B.NEED_RESULT_POINT_CALLBACK);
          var n = new eo(this.image, this.resultPointCallback).find(t);
          return this.processFinderPatternInfo(n)
        }, t.prototype.processFinderPatternInfo = function(n) {
          var r = n.getTopLeft(),
            i = n.getTopRight(),
            e = n.getBottomLeft(),
            o = this.calculateModuleSize(r, i, e);
          if (1 > o) throw new it("No pattern found in proccess finder.");
          var u = t.computeDimension(r, i, e, o),
            f = Oe.getProvisionalVersionForDimension(u),
            s = f.getDimensionForVersion() - 7,
            a = null;
          if (f.getAlignmentPatternCenters().length > 0)
            for (var h = i.getX() - r.getX() + e.getX(), c = i.getY() - r.getY() + e.getY(), l = 1 - 3 / s, w = Math.floor(r.getX() + l * (h - r.getX())), v = Math.floor(r.getY() + l * (c - r.getY())), y = 4; 16 >= y; y <<= 1) try {
              a = this.findAlignmentInRegion(o, w, v, y);
              break
            } catch (t) {
              if (!(t instanceof it)) throw t
            }
          var d = t.createTransform(r, i, e, a, u),
            b = t.sampleGrid(this.image, d, u);
          return new en(b, null === a ? [e, r, i] : [e, r, i, a])
        }, t.createTransform = function(t, n, r, i, e) {
          var o, u, f, s, a = e - 3.5;
          return null !== i ? (o = i.getX(), u = i.getY(), s = f = a - 3) : (o = n.getX() - t.getX() + r.getX(), u = n.getY() - t.getY() + r.getY(), f = a, s = a), wn.quadrilateralToQuadrilateral(3.5, 3.5, a, 3.5, f, s, 3.5, a, t.getX(), t.getY(), n.getX(), n.getY(), o, u, r.getX(), r.getY())
        }, t.sampleGrid = function(t, n, r) {
          return An.getInstance().sampleGridWithTransform(t, r, r, n)
        }, t.computeDimension = function(t, n, r, i) {
          var e = Jt.round(nn.distance(t, n) / i),
            o = Jt.round(nn.distance(t, r) / i),
            u = Math.floor((e + o) / 2) + 7;
          switch (3 & u) {
            case 0:
              u++;
              break;
            case 2:
              u--;
              break;
            case 3:
              throw new it("Dimensions could be not found.")
          }
          return u
        }, t.prototype.calculateModuleSize = function(t, n, r) {
          return (this.calculateModuleSizeOneWay(t, n) + this.calculateModuleSizeOneWay(t, r)) / 2
        }, t.prototype.calculateModuleSizeOneWay = function(t, n) {
          var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(n.getX()), Math.floor(n.getY())),
            i = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(n.getX()), Math.floor(n.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
          return isNaN(r) ? i / 7 : isNaN(i) ? r / 7 : (r + i) / 14
        }, t.prototype.sizeOfBlackWhiteBlackRunBothWays = function(t, n, r, i) {
          var e = this.sizeOfBlackWhiteBlackRun(t, n, r, i),
            o = 1,
            u = t - (r - t);
          0 > u ? (o = t / (t - u), u = 0) : u >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - t) / (u - t), u = this.image.getWidth() - 1);
          var f = Math.floor(n - (i - n) * o);
          return o = 1, 0 > f ? (o = n / (n - f), f = 0) : f >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - n) / (f - n), f = this.image.getHeight() - 1), u = Math.floor(t + (u - t) * o), (e += this.sizeOfBlackWhiteBlackRun(t, n, u, f)) - 1
        }, t.prototype.sizeOfBlackWhiteBlackRun = function(t, n, r, i) {
          var e = Math.abs(i - n) > Math.abs(r - t);
          if (e) {
            var o = t;
            t = n, n = o, o = r, r = i, i = o
          }
          for (var u = Math.abs(r - t), f = Math.abs(i - n), s = -u / 2, a = r > t ? 1 : -1, h = i > n ? 1 : -1, c = 0, l = r + a, w = t, v = n; w !== l; w += a) {
            var y = e ? v : w,
              d = e ? w : v;
            if (1 === c === this.image.get(y, d)) {
              if (2 === c) return Jt.distance(w, v, t, n);
              c++
            }
            if ((s += f) > 0) {
              if (v === i) break;
              v += h, s -= u
            }
          }
          return 2 === c ? Jt.distance(r + a, i, t, n) : NaN
        }, t.prototype.findAlignmentInRegion = function(t, n, r, i) {
          var e = Math.floor(i * t),
            o = Math.max(0, n - e),
            u = Math.min(this.image.getWidth() - 1, n + e);
          if (3 * t > u - o) throw new it("Alignment top exceeds estimated module size.");
          var f = Math.max(0, r - e),
            s = Math.min(this.image.getHeight() - 1, r + e);
          if (3 * t > s - f) throw new it("Alignment bottom exceeds estimated module size.");
          return new Ze(this.image, o, f, u - o, s - f, t, this.resultPointCallback).find()
        }, t
      }();
      const uo = oo;
      var fo = function() {
        function t() {
          this.decoder = new Xe
        }
        return t.prototype.getDecoder = function() {
          return this.decoder
        }, t.prototype.decode = function(n, r) {
          var i, e;
          if (null != r && void 0 !== r.get(B.PURE_BARCODE)) {
            var o = t.extractPureBits(n.getBlackMatrix());
            i = this.decoder.decodeBitMatrix(o, r), e = t.NO_POINTS
          } else {
            var u = new uo(n.getBlackMatrix()).detect(r);
            i = this.decoder.decodeBitMatrix(u.getBits(), r), e = u.getPoints()
          }
          i.getOther() instanceof ze && i.getOther().applyMirroredCorrection(e);
          var f = new _t(i.getText(), i.getRawBytes(), void 0, e, St.QR_CODE, void 0),
            s = i.getByteSegments();
          null !== s && f.putMetadata(Et.BYTE_SEGMENTS, s);
          var a = i.getECLevel();
          return null !== a && f.putMetadata(Et.ERROR_CORRECTION_LEVEL, a), i.hasStructuredAppend() && (f.putMetadata(Et.STRUCTURED_APPEND_SEQUENCE, i.getStructuredAppendSequenceNumber()), f.putMetadata(Et.STRUCTURED_APPEND_PARITY, i.getStructuredAppendParity())), f
        }, t.prototype.reset = function() {}, t.extractPureBits = function(t) {
          var n = t.getTopLeftOnBit(),
            r = t.getBottomRightOnBit();
          if (null === n || null === r) throw new it;
          var i = this.moduleSize(n, t),
            e = n[1],
            o = r[1],
            u = n[0],
            f = r[0];
          if (u >= f || e >= o) throw new it;
          if (o - e !== f - u && (f = u + (o - e)) >= t.getWidth()) throw new it;
          var s = Math.round((f - u + 1) / i),
            a = Math.round((o - e + 1) / i);
          if (0 >= s || 0 >= a) throw new it;
          if (a !== s) throw new it;
          var h = Math.floor(i / 2);
          e += h;
          var c = (u += h) + Math.floor((s - 1) * i) - f;
          if (c > 0) {
            if (c > h) throw new it;
            u -= c
          }
          var l = e + Math.floor((a - 1) * i) - o;
          if (l > 0) {
            if (l > h) throw new it;
            e -= l
          }
          for (var w = new tt(s, a), v = 0; a > v; v++)
            for (var y = e + Math.floor(v * i), d = 0; s > d; d++) t.get(u + Math.floor(d * i), y) && w.set(d, v);
          return w
        }, t.moduleSize = function(t, n) {
          for (var r = n.getHeight(), i = n.getWidth(), e = t[0], o = t[1], u = !0, f = 0; i > e && r > o;) {
            if (u !== n.get(e, o)) {
              if (5 === ++f) break;
              u = !u
            }
            e++, o++
          }
          if (e === i || o === r) throw new it;
          return (e - t[0]) / 7
        }, t.NO_POINTS = [], t
      }();
      const so = fo;
      var ao = function() {
        function t() {}
        return t.prototype.PDF417Common = function() {}, t.getBitCountSum = function(t) {
          return Jt.sum(t)
        }, t.toIntArray = function(n) {
          var r, i;
          if (null == n || !n.length) return t.EMPTY_INT_ARRAY;
          var e = new Int32Array(n.length),
            o = 0;
          try {
            for (var u = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(n), f = u.next(); !f.done; f = u.next()) {
              var s = f.value;
              e[o++] = s
            }
          } catch (t) {
            r = {
              error: t
            }
          } finally {
            try {
              f && !f.done && (i = u.return) && i.call(u)
            } finally {
              if (r) throw r.error
            }
          }
          return e
        }, t.getCodeword = function(n) {
          var r = x.binarySearch(t.SYMBOL_TABLE, 262143 & n);
          return 0 > r ? -1 : (t.CODEWORD_TABLE[r] - 1) % t.NUMBER_OF_CODEWORDS
        }, t.NUMBER_OF_CODEWORDS = 929, t.MAX_CODEWORDS_IN_BARCODE = t.NUMBER_OF_CODEWORDS - 1, t.MIN_ROWS_IN_BARCODE = 3, t.MAX_ROWS_IN_BARCODE = 90, t.MODULES_IN_CODEWORD = 17, t.MODULES_IN_STOP_PATTERN = 18, t.BARS_IN_MODULE = 8, t.EMPTY_INT_ARRAY = new Int32Array([]), t.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), t.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]), t
      }();
      const ho = ao;
      var co = function() {
        function t(t, n) {
          this.bits = t, this.points = n
        }
        return t.prototype.getBits = function() {
          return this.bits
        }, t.prototype.getPoints = function() {
          return this.points
        }, t
      }();
      const lo = co;
      var wo = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        vo = function() {
          function t() {}
          return t.detectMultiple = function(n, r, i) {
            var e = n.getBlackMatrix(),
              o = t.detect(i, e);
            return o.length || ((e = e.clone()).rotate180(), o = t.detect(i, e)), new lo(e, o)
          }, t.detect = function(n, r) {
            for (var i, e, o = [], u = 0, f = 0, s = !1; u < r.getHeight();) {
              var a = t.findVertices(r, u, f);
              if (null != a[0] || null != a[3]) {
                if (s = !0, o.push(a), !n) break;
                null != a[2] ? (f = Math.trunc(a[2].getX()), u = Math.trunc(a[2].getY())) : (f = Math.trunc(a[4].getX()), u = Math.trunc(a[4].getY()))
              } else {
                if (!s) break;
                s = !1, f = 0;
                try {
                  for (var h = (i = void 0, wo(o)), c = h.next(); !c.done; c = h.next()) {
                    var l = c.value;
                    null != l[1] && (u = Math.trunc(Math.max(u, l[1].getY()))), null != l[3] && (u = Math.max(u, Math.trunc(l[3].getY())))
                  }
                } catch (t) {
                  i = {
                    error: t
                  }
                } finally {
                  try {
                    c && !c.done && (e = h.return) && e.call(h)
                  } finally {
                    if (i) throw i.error
                  }
                }
                u += t.ROW_STEP
              }
            }
            return o
          }, t.findVertices = function(n, r, i) {
            var e = n.getHeight(),
              o = n.getWidth(),
              u = [, , , , , , , , ];
            return t.copyToResult(u, t.findRowsWithPattern(n, e, o, r, i, t.START_PATTERN), t.INDEXES_START_PATTERN), null != u[4] && (i = Math.trunc(u[4].getX()), r = Math.trunc(u[4].getY())), t.copyToResult(u, t.findRowsWithPattern(n, e, o, r, i, t.STOP_PATTERN), t.INDEXES_STOP_PATTERN), u
          }, t.copyToResult = function(t, n, r) {
            for (var i = 0; i < r.length; i++) t[r[i]] = n[i]
          }, t.findRowsWithPattern = function(n, r, i, e, o, u) {
            for (var f = [, , , , ], s = !1, a = new Int32Array(u.length); r > e; e += t.ROW_STEP)
              if (null != (w = t.findGuardPattern(n, o, e, i, !1, u, a))) {
                for (; e > 0;) {
                  if (null == (l = t.findGuardPattern(n, o, --e, i, !1, u, a))) {
                    e++;
                    break
                  }
                  w = l
                }
                f[0] = new nn(w[0], e), f[1] = new nn(w[1], e), s = !0;
                break
              } var h = e + 1;
            if (s) {
              for (var c = 0, l = Int32Array.from([Math.trunc(f[0].getX()), Math.trunc(f[1].getX())]); r > h; h++) {
                var w;
                if (null != (w = t.findGuardPattern(n, l[0], h, i, !1, u, a)) && Math.abs(l[0] - w[0]) < t.MAX_PATTERN_DRIFT && Math.abs(l[1] - w[1]) < t.MAX_PATTERN_DRIFT) l = w, c = 0;
                else {
                  if (c > t.SKIPPED_ROW_COUNT_MAX) break;
                  c++
                }
              }
              h -= c + 1, f[2] = new nn(l[0], h), f[3] = new nn(l[1], h)
            }
            return h - e < t.BARCODE_MIN_HEIGHT && x.fill(f, null), f
          }, t.findGuardPattern = function(n, r, i, e, o, u, f) {
            x.fillWithin(f, 0, f.length, 0);
            for (var s = r, a = 0; n.get(s, i) && s > 0 && a++ < t.MAX_PIXEL_DRIFT;) s--;
            for (var h = s, c = 0, l = u.length, w = o; e > h; h++)
              if (n.get(h, i) !== w) f[c]++;
              else {
                if (c === l - 1) {
                  if (t.patternMatchVariance(f, u, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) return new Int32Array([s, h]);
                  s += f[0] + f[1], g.arraycopy(f, 2, f, 0, c - 1), f[c - 1] = 0, f[c] = 0, c--
                } else c++;
                f[c] = 1, w = !w
              } return c === l - 1 && t.patternMatchVariance(f, u, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE ? new Int32Array([s, h - 1]) : null
          }, t.patternMatchVariance = function(t, n, r) {
            for (var i = t.length, e = 0, o = 0, u = 0; i > u; u++) e += t[u], o += n[u];
            if (o > e) return 1 / 0;
            var f = e / o;
            r *= f;
            for (var s = 0, a = 0; i > a; a++) {
              var h = t[a],
                c = n[a] * f,
                l = h > c ? h - c : c - h;
              if (l > r) return 1 / 0;
              s += l
            }
            return s / e
          }, t.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), t.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), t.MAX_AVG_VARIANCE = .42, t.MAX_INDIVIDUAL_VARIANCE = .8, t.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), t.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), t.MAX_PIXEL_DRIFT = 3, t.MAX_PATTERN_DRIFT = 5, t.SKIPPED_ROW_COUNT_MAX = 25, t.ROW_STEP = 5, t.BARCODE_MIN_HEIGHT = 10, t
        }();
      const yo = vo;
      var bo = function() {
        function t(t, n) {
          if (0 === n.length) throw new v;
          this.field = t;
          var r = n.length;
          if (r > 1 && 0 === n[0]) {
            for (var i = 1; r > i && 0 === n[i];) i++;
            i === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - i), g.arraycopy(n, i, this.coefficients, 0, this.coefficients.length))
          } else this.coefficients = n
        }
        return t.prototype.getCoefficients = function() {
          return this.coefficients
        }, t.prototype.getDegree = function() {
          return this.coefficients.length - 1
        }, t.prototype.isZero = function() {
          return 0 === this.coefficients[0]
        }, t.prototype.getCoefficient = function(t) {
          return this.coefficients[this.coefficients.length - 1 - t]
        }, t.prototype.evaluateAt = function(t) {
          var n, r;
          if (0 === t) return this.getCoefficient(0);
          if (1 === t) {
            var i = 0;
            try {
              for (var e = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(this.coefficients), o = e.next(); !o.done; o = e.next()) {
                var u = o.value;
                i = this.field.add(i, u)
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (r = e.return) && r.call(e)
              } finally {
                if (n) throw n.error
              }
            }
            return i
          }
          for (var f = this.coefficients[0], s = this.coefficients.length, a = 1; s > a; a++) f = this.field.add(this.field.multiply(t, f), this.coefficients[a]);
          return f
        }, t.prototype.add = function(n) {
          if (!this.field.equals(n.field)) throw new v("ModulusPolys do not have same ModulusGF field");
          if (this.isZero()) return n;
          if (n.isZero()) return this;
          var r = this.coefficients,
            i = n.coefficients;
          if (r.length > i.length) {
            var e = r;
            r = i, i = e
          }
          var o = new Int32Array(i.length),
            u = i.length - r.length;
          g.arraycopy(i, 0, o, 0, u);
          for (var f = u; f < i.length; f++) o[f] = this.field.add(r[f - u], i[f]);
          return new t(this.field, o)
        }, t.prototype.subtract = function(t) {
          if (!this.field.equals(t.field)) throw new v("ModulusPolys do not have same ModulusGF field");
          return t.isZero() ? this : this.add(t.negative())
        }, t.prototype.multiply = function(n) {
          return n instanceof t ? this.multiplyOther(n) : this.multiplyScalar(n)
        }, t.prototype.multiplyOther = function(n) {
          if (!this.field.equals(n.field)) throw new v("ModulusPolys do not have same ModulusGF field");
          if (this.isZero() || n.isZero()) return new t(this.field, new Int32Array([0]));
          for (var r = this.coefficients, i = r.length, e = n.coefficients, o = e.length, u = new Int32Array(i + o - 1), f = 0; i > f; f++)
            for (var s = r[f], a = 0; o > a; a++) u[f + a] = this.field.add(u[f + a], this.field.multiply(s, e[a]));
          return new t(this.field, u)
        }, t.prototype.negative = function() {
          for (var n = this.coefficients.length, r = new Int32Array(n), i = 0; n > i; i++) r[i] = this.field.subtract(0, this.coefficients[i]);
          return new t(this.field, r)
        }, t.prototype.multiplyScalar = function(n) {
          if (0 === n) return new t(this.field, new Int32Array([0]));
          if (1 === n) return this;
          for (var r = this.coefficients.length, i = new Int32Array(r), e = 0; r > e; e++) i[e] = this.field.multiply(this.coefficients[e], n);
          return new t(this.field, i)
        }, t.prototype.multiplyByMonomial = function(n, r) {
          if (0 > n) throw new v;
          if (0 === r) return new t(this.field, new Int32Array([0]));
          for (var i = this.coefficients.length, e = new Int32Array(i + n), o = 0; i > o; o++) e[o] = this.field.multiply(this.coefficients[o], r);
          return new t(this.field, e)
        }, t.prototype.toString = function() {
          for (var t = new Q, n = this.getDegree(); n >= 0; n--) {
            var r = this.getCoefficient(n);
            0 !== r && (0 > r ? (t.append(" - "), r = -r) : t.length() > 0 && t.append(" + "), (0 === n || 1 !== r) && t.append(r), 0 !== n && (1 === n ? t.append("x") : (t.append("x^"), t.append(n))))
          }
          return t.toString()
        }, t
      }();
      const Ao = bo;
      var po = function() {
        function t() {}
        return t.prototype.add = function(t, n) {
          return (t + n) % this.modulus
        }, t.prototype.subtract = function(t, n) {
          return (this.modulus + t - n) % this.modulus
        }, t.prototype.exp = function(t) {
          return this.expTable[t]
        }, t.prototype.log = function(t) {
          if (0 === t) throw new v;
          return this.logTable[t]
        }, t.prototype.inverse = function(t) {
          if (0 === t) throw new Ut;
          return this.expTable[this.modulus - this.logTable[t] - 1]
        }, t.prototype.multiply = function(t, n) {
          return 0 === t || 0 === n ? 0 : this.expTable[(this.logTable[t] + this.logTable[n]) % (this.modulus - 1)]
        }, t.prototype.getSize = function() {
          return this.modulus
        }, t.prototype.equals = function(t) {
          return t === this
        }, t
      }();
      const mo = po;
      var Io = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        _o = function(t) {
          function n(n, r) {
            var i = t.call(this) || this;
            i.modulus = n, i.expTable = new Int32Array(n), i.logTable = new Int32Array(n);
            for (var e = 1, o = 0; n > o; o++) i.expTable[o] = e, e = e * r % n;
            for (o = 0; n - 1 > o; o++) i.logTable[i.expTable[o]] = o;
            return i.zero = new Ao(i, new Int32Array([0])), i.one = new Ao(i, new Int32Array([1])), i
          }
          return Io(n, t), n.prototype.getZero = function() {
            return this.zero
          }, n.prototype.getOne = function() {
            return this.one
          }, n.prototype.buildMonomial = function(t, n) {
            if (0 > t) throw new v;
            if (0 === n) return this.zero;
            var r = new Int32Array(t + 1);
            return r[0] = n, new Ao(this, r)
          }, n.PDF417_GF = new n(ho.NUMBER_OF_CODEWORDS, 3), n
        }(mo);
      const go = _o;
      var So = function() {
        function t() {
          this.field = go.PDF417_GF
        }
        return t.prototype.decode = function(t, n, r) {
          for (var i, e, o = new Ao(this.field, t), u = new Int32Array(n), f = !1, s = n; s > 0; s--) {
            var a = o.evaluateAt(this.field.exp(s));
            u[n - s] = a, 0 !== a && (f = !0)
          }
          if (!f) return 0;
          var h = this.field.getOne();
          if (null != r) try {
            for (var c = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(r), l = c.next(); !l.done; l = c.next()) {
              var w = l.value,
                v = this.field.exp(t.length - 1 - w),
                y = new Ao(this.field, new Int32Array([this.field.subtract(0, v), 1]));
              h = h.multiply(y)
            }
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              l && !l.done && (e = c.return) && e.call(c)
            } finally {
              if (i) throw i.error
            }
          }
          var d = new Ao(this.field, u),
            b = this.runEuclideanAlgorithm(this.field.buildMonomial(n, 1), d, n),
            A = b[0],
            m = b[1],
            I = this.findErrorLocations(A),
            _ = this.findErrorMagnitudes(m, A, I);
          for (s = 0; s < I.length; s++) {
            var g = t.length - 1 - this.field.log(I[s]);
            if (0 > g) throw p.getChecksumInstance();
            t[g] = this.field.subtract(t[g], _[s])
          }
          return I.length
        }, t.prototype.runEuclideanAlgorithm = function(t, n, r) {
          if (t.getDegree() < n.getDegree()) {
            var i = t;
            t = n, n = i
          }
          for (var e = t, o = n, u = this.field.getZero(), f = this.field.getOne(); o.getDegree() >= Math.round(r / 2);) {
            var s = e,
              a = u;
            if (u = f, (e = o).isZero()) throw p.getChecksumInstance();
            o = s;
            for (var h = this.field.getZero(), c = e.getCoefficient(e.getDegree()), l = this.field.inverse(c); o.getDegree() >= e.getDegree() && !o.isZero();) {
              var w = o.getDegree() - e.getDegree(),
                v = this.field.multiply(o.getCoefficient(o.getDegree()), l);
              h = h.add(this.field.buildMonomial(w, v)), o = o.subtract(e.multiplyByMonomial(w, v))
            }
            f = h.multiply(u).subtract(a).negative()
          }
          var y = f.getCoefficient(0);
          if (0 === y) throw p.getChecksumInstance();
          var d = this.field.inverse(y);
          return [f.multiply(d), o.multiply(d)]
        }, t.prototype.findErrorLocations = function(t) {
          for (var n = t.getDegree(), r = new Int32Array(n), i = 0, e = 1; e < this.field.getSize() && n > i; e++) 0 === t.evaluateAt(e) && (r[i] = this.field.inverse(e), i++);
          if (i !== n) throw p.getChecksumInstance();
          return r
        }, t.prototype.findErrorMagnitudes = function(t, n, r) {
          for (var i = n.getDegree(), e = new Int32Array(i), o = 1; i >= o; o++) e[i - o] = this.field.multiply(o, n.getCoefficient(o));
          var u = new Ao(this.field, e),
            f = r.length,
            s = new Int32Array(f);
          for (o = 0; f > o; o++) {
            var a = this.field.inverse(r[o]),
              h = this.field.subtract(0, t.evaluateAt(a)),
              c = this.field.inverse(u.evaluateAt(a));
            s[o] = this.field.multiply(h, c)
          }
          return s
        }, t
      }();
      const Mo = So;
      var Eo = function() {
        function t(n, r, i, e, o) {
          n instanceof t ? this.constructor_2(n) : this.constructor_1(n, r, i, e, o)
        }
        return t.prototype.constructor_1 = function(t, n, r, i, e) {
          var o = null == n || null == r,
            u = null == i || null == e;
          if (o && u) throw new it;
          o ? (n = new nn(0, i.getY()), r = new nn(0, e.getY())) : u && (i = new nn(t.getWidth() - 1, n.getY()), e = new nn(t.getWidth() - 1, r.getY())), this.image = t, this.topLeft = n, this.bottomLeft = r, this.topRight = i, this.bottomRight = e, this.minX = Math.trunc(Math.min(n.getX(), r.getX())), this.maxX = Math.trunc(Math.max(i.getX(), e.getX())), this.minY = Math.trunc(Math.min(n.getY(), i.getY())), this.maxY = Math.trunc(Math.max(r.getY(), e.getY()))
        }, t.prototype.constructor_2 = function(t) {
          this.image = t.image, this.topLeft = t.getTopLeft(), this.bottomLeft = t.getBottomLeft(), this.topRight = t.getTopRight(), this.bottomRight = t.getBottomRight(), this.minX = t.getMinX(), this.maxX = t.getMaxX(), this.minY = t.getMinY(), this.maxY = t.getMaxY()
        }, t.merge = function(n, r) {
          return null == n ? r : null == r ? n : new t(n.image, n.topLeft, n.bottomLeft, r.topRight, r.bottomRight)
        }, t.prototype.addMissingRows = function(n, r, i) {
          var e = this.topLeft,
            o = this.bottomLeft,
            u = this.topRight,
            f = this.bottomRight;
          if (n > 0) {
            var s = i ? this.topLeft : this.topRight,
              a = Math.trunc(s.getY() - n);
            0 > a && (a = 0);
            var h = new nn(s.getX(), a);
            i ? e = h : u = h
          }
          if (r > 0) {
            var c = i ? this.bottomLeft : this.bottomRight,
              l = Math.trunc(c.getY() + r);
            l >= this.image.getHeight() && (l = this.image.getHeight() - 1);
            var w = new nn(c.getX(), l);
            i ? o = w : f = w
          }
          return new t(this.image, e, o, u, f)
        }, t.prototype.getMinX = function() {
          return this.minX
        }, t.prototype.getMaxX = function() {
          return this.maxX
        }, t.prototype.getMinY = function() {
          return this.minY
        }, t.prototype.getMaxY = function() {
          return this.maxY
        }, t.prototype.getTopLeft = function() {
          return this.topLeft
        }, t.prototype.getTopRight = function() {
          return this.topRight
        }, t.prototype.getBottomLeft = function() {
          return this.bottomLeft
        }, t.prototype.getBottomRight = function() {
          return this.bottomRight
        }, t
      }();
      const Oo = Eo;
      var ko = function() {
        function t(t, n, r, i) {
          this.columnCount = t, this.errorCorrectionLevel = i, this.rowCountUpperPart = n, this.rowCountLowerPart = r, this.rowCount = n + r
        }
        return t.prototype.getColumnCount = function() {
          return this.columnCount
        }, t.prototype.getErrorCorrectionLevel = function() {
          return this.errorCorrectionLevel
        }, t.prototype.getRowCount = function() {
          return this.rowCount
        }, t.prototype.getRowCountUpperPart = function() {
          return this.rowCountUpperPart
        }, t.prototype.getRowCountLowerPart = function() {
          return this.rowCountLowerPart
        }, t
      }();
      const To = ko;
      var jo = function() {
        function t() {
          this.buffer = ""
        }
        return t.form = function(t, n) {
          var r = -1;
          return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function(t, i, e, o, u, f) {
            if ("%%" === t) return "%";
            if (void 0 !== n[++r]) {
              t = o ? parseInt(o.substr(1)) : void 0;
              var s, a = u ? parseInt(u.substr(1)) : void 0;
              switch (f) {
                case "s":
                  s = n[r];
                  break;
                case "c":
                  s = n[r][0];
                  break;
                case "f":
                  s = parseFloat(n[r]).toFixed(t);
                  break;
                case "p":
                  s = parseFloat(n[r]).toPrecision(t);
                  break;
                case "e":
                  s = parseFloat(n[r]).toExponential(t);
                  break;
                case "x":
                  s = parseInt(n[r]).toString(a || 16);
                  break;
                case "d":
                  s = parseFloat(parseInt(n[r], a || 10).toPrecision(t)).toFixed(0)
              }
              s = "object" == typeof s ? JSON.stringify(s) : (+s).toString(a);
              for (var h = parseInt(e), c = e && e[0] + "" == "0" ? "0" : " "; s.length < h;) s = void 0 !== i ? s + c : c + s;
              return s
            }
          })
        }, t.prototype.format = function(n) {
          for (var r = [], i = 1; arguments.length > i; i++) r[i - 1] = arguments[i];
          this.buffer += t.form(n, r)
        }, t.prototype.toString = function() {
          return this.buffer
        }, t
      }();
      const xo = jo;
      var Co = function() {
        function t(t) {
          this.boundingBox = new Oo(t), this.codewords = Array(t.getMaxY() - t.getMinY() + 1)
        }
        return t.prototype.getCodewordNearby = function(n) {
          var r = this.getCodeword(n);
          if (null != r) return r;
          for (var i = 1; i < t.MAX_NEARBY_DISTANCE; i++) {
            var e = this.imageRowToCodewordIndex(n) - i;
            if (e >= 0 && null != (r = this.codewords[e]) || (e = this.imageRowToCodewordIndex(n) + i) < this.codewords.length && null != (r = this.codewords[e])) return r
          }
          return null
        }, t.prototype.imageRowToCodewordIndex = function(t) {
          return t - this.boundingBox.getMinY()
        }, t.prototype.setCodeword = function(t, n) {
          this.codewords[this.imageRowToCodewordIndex(t)] = n
        }, t.prototype.getCodeword = function(t) {
          return this.codewords[this.imageRowToCodewordIndex(t)]
        }, t.prototype.getBoundingBox = function() {
          return this.boundingBox
        }, t.prototype.getCodewords = function() {
          return this.codewords
        }, t.prototype.toString = function() {
          var t, n, r = new xo,
            i = 0;
          try {
            for (var e = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(this.codewords), o = e.next(); !o.done; o = e.next()) {
              var u = o.value;
              null != u ? r.format("%3d: %3d|%3d%n", i++, u.getRowNumber(), u.getValue()) : r.format("%3d:    |   %n", i++)
            }
          } catch (n) {
            t = {
              error: n
            }
          } finally {
            try {
              o && !o.done && (n = e.return) && n.call(e)
            } finally {
              if (t) throw t.error
            }
          }
          return r.toString()
        }, t.MAX_NEARBY_DISTANCE = 5, t
      }();
      const Ro = Co;
      var No = function(t, n) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var i, e, o = r.call(t),
            u = [];
          try {
            for (;
              (void 0 === n || n-- > 0) && !(i = o.next()).done;) u.push(i.value)
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o)
            } finally {
              if (e) throw e.error
            }
          }
          return u
        },
        Uo = function() {
          function t() {
            this.values = new Map
          }
          return t.prototype.setValue = function(t) {
            t = Math.trunc(t);
            var n = this.values.get(t);
            null == n && (n = 0), n++, this.values.set(t, n)
          }, t.prototype.getValue = function() {
            var t, n, r = -1,
              i = [],
              e = function(t, n) {
                var e = function() {
                    return t
                  },
                  o = function() {
                    return n
                  };
                o() > r ? (r = o(), (i = []).push(e())) : o() === r && i.push(e())
              };
            try {
              for (var o = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(this.values.entries()), u = o.next(); !u.done; u = o.next()) {
                var f = No(u.value, 2);
                e(f[0], f[1])
              }
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                u && !u.done && (n = o.return) && n.call(o)
              } finally {
                if (t) throw t.error
              }
            }
            return ho.toIntArray(i)
          }, t.prototype.getConfidence = function(t) {
            return this.values.get(t)
          }, t
        }();
      const Do = Uo;
      var Bo = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Po = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Lo = function(t) {
          function n(n, r) {
            var i = t.call(this, n) || this;
            return i.B = r, i
          }
          return Bo(n, t), n.prototype.setRowNumbers = function() {
            var t, n;
            try {
              for (var r = Po(this.getCodewords()), i = r.next(); !i.done; i = r.next()) {
                var e = i.value;
                e?.setRowNumberAsRowIndicatorColumn()
              }
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }, n.prototype.adjustCompleteIndicatorColumnRowNumbers = function(t) {
            var n = this.getCodewords();
            this.setRowNumbers(), this.removeIncorrectCodewords(n, t);
            for (var r = this.getBoundingBox(), i = this.B ? r.getTopLeft() : r.getTopRight(), e = this.B ? r.getBottomLeft() : r.getBottomRight(), o = this.imageRowToCodewordIndex(Math.trunc(i.getY())), u = this.imageRowToCodewordIndex(Math.trunc(e.getY())), f = -1, s = 1, a = 0, h = o; u > h; h++)
              if (null != n[h]) {
                var c = n[h],
                  l = c.getRowNumber() - f;
                if (0 === l) a++;
                else if (1 === l) s = Math.max(s, a), a = 1, f = c.getRowNumber();
                else if (0 > l || c.getRowNumber() >= t.getRowCount() || l > h) n[h] = null;
                else {
                  for (var w, v = (w = s > 2 ? (s - 2) * l : l) >= h, y = 1; w >= y && !v; y++) v = null != n[h - y];
                  v ? n[h] = null : (f = c.getRowNumber(), a = 1)
                }
              }
          }, n.prototype.getRowHeights = function() {
            var t, n, r = this.getBarcodeMetadata();
            if (null == r) return null;
            this.adjustIncompleteIndicatorColumnRowNumbers(r);
            var i = new Int32Array(r.getRowCount());
            try {
              for (var e = Po(this.getCodewords()), o = e.next(); !o.done; o = e.next()) {
                var u = o.value;
                if (null != u) {
                  var f = u.getRowNumber();
                  if (f >= i.length) continue;
                  i[f]++
                }
              }
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                o && !o.done && (n = e.return) && n.call(e)
              } finally {
                if (t) throw t.error
              }
            }
            return i
          }, n.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(t) {
            for (var n = this.getBoundingBox(), r = this.B ? n.getTopLeft() : n.getTopRight(), i = this.B ? n.getBottomLeft() : n.getBottomRight(), e = this.imageRowToCodewordIndex(Math.trunc(r.getY())), o = this.imageRowToCodewordIndex(Math.trunc(i.getY())), u = this.getCodewords(), f = -1, s = 1, a = 0, h = e; o > h; h++)
              if (null != u[h]) {
                var c = u[h];
                c.setRowNumberAsRowIndicatorColumn();
                var l = c.getRowNumber() - f;
                0 === l ? a++ : 1 === l ? (s = Math.max(s, a), a = 1, f = c.getRowNumber()) : c.getRowNumber() < t.getRowCount() ? (f = c.getRowNumber(), a = 1) : u[h] = null
              }
          }, n.prototype.getBarcodeMetadata = function() {
            var t, n, r = this.getCodewords(),
              i = new Do,
              e = new Do,
              o = new Do,
              u = new Do;
            try {
              for (var f = Po(r), s = f.next(); !s.done; s = f.next()) {
                var a = s.value;
                if (null != a) {
                  a.setRowNumberAsRowIndicatorColumn();
                  var h = a.getValue() % 30,
                    c = a.getRowNumber();
                  switch (this.B || (c += 2), c % 3) {
                    case 0:
                      e.setValue(3 * h + 1);
                      break;
                    case 1:
                      u.setValue(h / 3), o.setValue(h % 3);
                      break;
                    case 2:
                      i.setValue(h + 1)
                  }
                }
              }
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                s && !s.done && (n = f.return) && n.call(f)
              } finally {
                if (t) throw t.error
              }
            }
            if (0 === i.getValue().length || 0 === e.getValue().length || 0 === o.getValue().length || 0 === u.getValue().length || 1 > i.getValue()[0] || e.getValue()[0] + o.getValue()[0] < ho.MIN_ROWS_IN_BARCODE || e.getValue()[0] + o.getValue()[0] > ho.MAX_ROWS_IN_BARCODE) return null;
            var l = new To(i.getValue()[0], e.getValue()[0], o.getValue()[0], u.getValue()[0]);
            return this.removeIncorrectCodewords(r, l), l
          }, n.prototype.removeIncorrectCodewords = function(t, n) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              if (null != t[r]) {
                var e = i.getValue() % 30,
                  o = i.getRowNumber();
                if (o > n.getRowCount()) {
                  t[r] = null;
                  continue
                }
                switch (this.B || (o += 2), o % 3) {
                  case 0:
                    3 * e + 1 !== n.getRowCountUpperPart() && (t[r] = null);
                    break;
                  case 1:
                    (Math.trunc(e / 3) !== n.getErrorCorrectionLevel() || e % 3 !== n.getRowCountLowerPart()) && (t[r] = null);
                    break;
                  case 2:
                    e + 1 !== n.getColumnCount() && (t[r] = null)
                }
              }
            }
          }, n.prototype.isLeft = function() {
            return this.B
          }, n.prototype.toString = function() {
            return "IsLeft: " + this.B + "\n" + t.prototype.toString.call(this)
          }, n
        }(Ro);
      const Fo = Lo;
      var Go = function() {
        function t(t, n) {
          this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t, this.barcodeColumnCount = t.getColumnCount(), this.boundingBox = n, this.detectionResultColumns = Array(this.barcodeColumnCount + 2)
        }
        return t.prototype.getDetectionResultColumns = function() {
          this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
          var t, n = ho.MAX_CODEWORDS_IN_BARCODE;
          do {
            t = n, n = this.adjustRowNumbersAndGetCount()
          } while (n > 0 && t > n);
          return this.detectionResultColumns
        }, t.prototype.adjustIndicatorColumnRowNumbers = function(t) {
          t?.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
        }, t.prototype.adjustRowNumbersAndGetCount = function() {
          var t = this.adjustRowNumbersByRow();
          if (0 === t) return 0;
          for (var n = 1; n < this.barcodeColumnCount + 1; n++)
            for (var r = this.detectionResultColumns[n].getCodewords(), i = 0; i < r.length; i++) null != r[i] && (r[i].hasValidRowNumber() || this.adjustRowNumbers(n, i, r));
          return t
        }, t.prototype.adjustRowNumbersByRow = function() {
          return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
        }, t.prototype.adjustRowNumbersFromBothRI = function() {
          if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1])
            for (var t = this.detectionResultColumns[0].getCodewords(), n = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0; r < t.length; r++)
              if (null != t[r] && null != n[r] && t[r].getRowNumber() === n[r].getRowNumber())
                for (var i = 1; i <= this.barcodeColumnCount; i++) {
                  var e = this.detectionResultColumns[i].getCodewords()[r];
                  null != e && (e.setRowNumber(t[r].getRowNumber()), e.hasValidRowNumber() || (this.detectionResultColumns[i].getCodewords()[r] = null))
                }
        }, t.prototype.adjustRowNumbersFromRRI = function() {
          if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
          for (var n = 0, r = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), i = 0; i < r.length; i++)
            if (null != r[i])
              for (var e = r[i].getRowNumber(), o = 0, u = this.barcodeColumnCount + 1; u > 0 && o < this.ADJUST_ROW_NUMBER_SKIP; u--) {
                var f = this.detectionResultColumns[u].getCodewords()[i];
                null != f && (o = t.adjustRowNumberIfValid(e, o, f), f.hasValidRowNumber() || n++)
              }
          return n
        }, t.prototype.adjustRowNumbersFromLRI = function() {
          if (null == this.detectionResultColumns[0]) return 0;
          for (var n = 0, r = this.detectionResultColumns[0].getCodewords(), i = 0; i < r.length; i++)
            if (null != r[i])
              for (var e = r[i].getRowNumber(), o = 0, u = 1; u < this.barcodeColumnCount + 1 && o < this.ADJUST_ROW_NUMBER_SKIP; u++) {
                var f = this.detectionResultColumns[u].getCodewords()[i];
                null != f && (o = t.adjustRowNumberIfValid(e, o, f), f.hasValidRowNumber() || n++)
              }
          return n
        }, t.adjustRowNumberIfValid = function(t, n, r) {
          return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), n = 0) : ++n), n
        }, t.prototype.adjustRowNumbers = function(n, r, i) {
          var e, o;
          if (null != this.detectionResultColumns[n - 1]) {
            var u = i[r],
              f = this.detectionResultColumns[n - 1].getCodewords(),
              s = f;
            null != this.detectionResultColumns[n + 1] && (s = this.detectionResultColumns[n + 1].getCodewords());
            var a = Array(14);
            a[2] = f[r], a[3] = s[r], r > 0 && (a[0] = i[r - 1], a[4] = f[r - 1], a[5] = s[r - 1]), r > 1 && (a[8] = i[r - 2], a[10] = f[r - 2], a[11] = s[r - 2]), r < i.length - 1 && (a[1] = i[r + 1], a[6] = f[r + 1], a[7] = s[r + 1]), r < i.length - 2 && (a[9] = i[r + 2], a[12] = f[r + 2], a[13] = s[r + 2]);
            try {
              for (var h = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(a), c = h.next(); !c.done; c = h.next()) {
                var l = c.value;
                if (t.adjustRowNumber(u, l)) return
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                c && !c.done && (o = h.return) && o.call(h)
              } finally {
                if (e) throw e.error
              }
            }
          }
        }, t.adjustRowNumber = function(t, n) {
          return !(null == n || !n.hasValidRowNumber() || n.getBucket() !== t.getBucket() || (t.setRowNumber(n.getRowNumber()), 0))
        }, t.prototype.getBarcodeColumnCount = function() {
          return this.barcodeColumnCount
        }, t.prototype.getBarcodeRowCount = function() {
          return this.barcodeMetadata.getRowCount()
        }, t.prototype.getBarcodeECLevel = function() {
          return this.barcodeMetadata.getErrorCorrectionLevel()
        }, t.prototype.setBoundingBox = function(t) {
          this.boundingBox = t
        }, t.prototype.getBoundingBox = function() {
          return this.boundingBox
        }, t.prototype.setDetectionResultColumn = function(t, n) {
          this.detectionResultColumns[t] = n
        }, t.prototype.getDetectionResultColumn = function(t) {
          return this.detectionResultColumns[t]
        }, t.prototype.toString = function() {
          var t = this.detectionResultColumns[0];
          null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
          for (var n = new xo, r = 0; r < t.getCodewords().length; r++) {
            n.format("CW %3d:", r);
            for (var i = 0; i < this.barcodeColumnCount + 2; i++)
              if (null != this.detectionResultColumns[i]) {
                var e = this.detectionResultColumns[i].getCodewords()[r];
                null != e ? n.format(" %3d|%3d", e.getRowNumber(), e.getValue()) : n.format("    |   ")
              } else n.format("    |   ");
            n.format("%n")
          }
          return n.toString()
        }, t
      }();
      const zo = Go;
      var Ho = function() {
        function t(n, r, i, e) {
          this.rowNumber = t.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(n), this.endX = Math.trunc(r), this.bucket = Math.trunc(i), this.value = Math.trunc(e)
        }
        return t.prototype.hasValidRowNumber = function() {
          return this.isValidRowNumber(this.rowNumber)
        }, t.prototype.isValidRowNumber = function(n) {
          return n !== t.BARCODE_ROW_UNKNOWN && this.bucket === n % 3 * 3
        }, t.prototype.setRowNumberAsRowIndicatorColumn = function() {
          this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
        }, t.prototype.getWidth = function() {
          return this.endX - this.startX
        }, t.prototype.getStartX = function() {
          return this.startX
        }, t.prototype.getEndX = function() {
          return this.endX
        }, t.prototype.getBucket = function() {
          return this.bucket
        }, t.prototype.getValue = function() {
          return this.value
        }, t.prototype.getRowNumber = function() {
          return this.rowNumber
        }, t.prototype.setRowNumber = function(t) {
          this.rowNumber = t
        }, t.prototype.toString = function() {
          return this.rowNumber + "|" + this.value
        }, t.BARCODE_ROW_UNKNOWN = -1, t
      }();
      const qo = Ho;
      var Xo = function() {
        function t() {}
        return t.initialize = function() {
          for (var n = 0; n < ho.SYMBOL_TABLE.length; n++)
            for (var r = ho.SYMBOL_TABLE[n], i = 1 & r, e = 0; e < ho.BARS_IN_MODULE; e++) {
              for (var o = 0;
                (1 & r) === i;) o += 1, r >>= 1;
              i = 1 & r, t.RATIOS_TABLE[n] || (t.RATIOS_TABLE[n] = Array(ho.BARS_IN_MODULE)), t.RATIOS_TABLE[n][ho.BARS_IN_MODULE - e - 1] = Math.fround(o / ho.MODULES_IN_CODEWORD)
            }
          this.bSymbolTableReady = !0
        }, t.getDecodedValue = function(n) {
          var r = t.getDecodedCodewordValue(t.sampleBitCounts(n));
          return -1 !== r ? r : t.getClosestDecodedValue(n)
        }, t.sampleBitCounts = function(t) {
          for (var n = Jt.sum(t), r = new Int32Array(ho.BARS_IN_MODULE), i = 0, e = 0, o = 0; o < ho.MODULES_IN_CODEWORD; o++) {
            var u = n / (2 * ho.MODULES_IN_CODEWORD) + o * n / ho.MODULES_IN_CODEWORD;
            e + t[i] <= u && (e += t[i], i++), r[i]++
          }
          return r
        }, t.getDecodedCodewordValue = function(n) {
          var r = t.getBitValue(n);
          return -1 === ho.getCodeword(r) ? -1 : r
        }, t.getBitValue = function(t) {
          for (var n = 0, r = 0; r < t.length; r++)
            for (var i = 0; i < t[r]; i++) n = n << 1 | (r % 2 == 0 ? 1 : 0);
          return Math.trunc(n)
        }, t.getClosestDecodedValue = function(n) {
          var r = Jt.sum(n),
            i = Array(ho.BARS_IN_MODULE);
          if (r > 1)
            for (var e = 0; e < i.length; e++) i[e] = Math.fround(n[e] / r);
          var o = Yt.MAX_VALUE,
            u = -1;
          this.bSymbolTableReady || t.initialize();
          for (var f = 0; f < t.RATIOS_TABLE.length; f++) {
            for (var s = 0, a = t.RATIOS_TABLE[f], h = 0; h < ho.BARS_IN_MODULE; h++) {
              var c = Math.fround(a[h] - i[h]);
              if ((s += Math.fround(c * c)) >= o) break
            }
            o > s && (o = s, u = ho.SYMBOL_TABLE[f])
          }
          return u
        }, t.bSymbolTableReady = !1, t.RATIOS_TABLE = Array(ho.SYMBOL_TABLE.length).map(function(t) {
          return Array(ho.BARS_IN_MODULE)
        }), t
      }();
      const Wo = Xo;
      var $o = function() {
        function t() {
          this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1
        }
        return t.prototype.getSegmentIndex = function() {
          return this.segmentIndex
        }, t.prototype.setSegmentIndex = function(t) {
          this.segmentIndex = t
        }, t.prototype.getFileId = function() {
          return this.fileId
        }, t.prototype.setFileId = function(t) {
          this.fileId = t
        }, t.prototype.getOptionalData = function() {
          return this.optionalData
        }, t.prototype.setOptionalData = function(t) {
          this.optionalData = t
        }, t.prototype.isLastSegment = function() {
          return this.lastSegment
        }, t.prototype.setLastSegment = function(t) {
          this.lastSegment = t
        }, t.prototype.getSegmentCount = function() {
          return this.segmentCount
        }, t.prototype.setSegmentCount = function(t) {
          this.segmentCount = t
        }, t.prototype.getSender = function() {
          return this.sender || null
        }, t.prototype.setSender = function(t) {
          this.sender = t
        }, t.prototype.getAddressee = function() {
          return this.addressee || null
        }, t.prototype.setAddressee = function(t) {
          this.addressee = t
        }, t.prototype.getFileName = function() {
          return this.fileName
        }, t.prototype.setFileName = function(t) {
          this.fileName = t
        }, t.prototype.getFileSize = function() {
          return this.fileSize
        }, t.prototype.setFileSize = function(t) {
          this.fileSize = t
        }, t.prototype.getChecksum = function() {
          return this.checksum
        }, t.prototype.setChecksum = function(t) {
          this.checksum = t
        }, t.prototype.getTimestamp = function() {
          return this.timestamp
        }, t.prototype.setTimestamp = function(t) {
          this.timestamp = t
        }, t
      }();
      const Ko = $o;
      var Vo = function() {
        function t() {}
        return t.parseLong = function(t, n) {
          return void 0 === n && (n = void 0), parseInt(t, n)
        }, t
      }();
      const Zo = Vo;
      var Jo = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Qo = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Jo(n, t), n.kind = "NullPointerException", n
        }(s);
      const Yo = Qo;
      var tu = function() {
        function t() {}
        return t.prototype.writeBytes = function(t) {
          this.writeBytesOffset(t, 0, t.length)
        }, t.prototype.writeBytesOffset = function(t, n, r) {
          if (null == t) throw new Yo;
          if (0 > n || n > t.length || 0 > r || n + r > t.length || 0 > n + r) throw new E;
          if (0 !== r)
            for (var i = 0; r > i; i++) this.write(t[n + i])
        }, t.prototype.flush = function() {}, t.prototype.close = function() {}, t
      }();
      const nu = tu;
      var ru = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        iu = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return ru(n, t), n
        }(s);
      const eu = iu;
      var ou = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        uu = function(t) {
          function n(n) {
            void 0 === n && (n = 32);
            var r = t.call(this) || this;
            if (r.count = 0, 0 > n) throw new v("Negative initial size: " + n);
            return r.buf = new Uint8Array(n), r
          }
          return ou(n, t), n.prototype.ensureCapacity = function(t) {
            t - this.buf.length > 0 && this.grow(t)
          }, n.prototype.grow = function(t) {
            var n = this.buf.length << 1;
            if (0 > n - t && (n = t), 0 > n) {
              if (0 > t) throw new eu;
              n = R.MAX_VALUE
            }
            this.buf = x.copyOfUint8Array(this.buf, n)
          }, n.prototype.write = function(t) {
            this.ensureCapacity(this.count + 1), this.buf[this.count] = t, this.count += 1
          }, n.prototype.writeBytesOffset = function(t, n, r) {
            if (0 > n || n > t.length || 0 > r || n + r - t.length > 0) throw new E;
            this.ensureCapacity(this.count + r), g.arraycopy(t, n, this.buf, this.count, r), this.count += r
          }, n.prototype.writeTo = function(t) {
            t.writeBytesOffset(this.buf, 0, this.count)
          }, n.prototype.reset = function() {
            this.count = 0
          }, n.prototype.toByteArray = function() {
            return x.copyOfUint8Array(this.buf, this.count)
          }, n.prototype.size = function() {
            return this.count
          }, n.prototype.toString = function(t) {
            return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void()
          }, n.prototype.toString_void = function() {
            return new String(this.buf).toString()
          }, n.prototype.toString_string = function(t) {
            return new String(this.buf).toString()
          }, n.prototype.toString_number = function(t) {
            return new String(this.buf).toString()
          }, n.prototype.close = function() {}, n
        }(nu);
      const fu = uu;
      var su, au;

      function hu() {
        if ("u" > typeof window) return window.BigInt || null;
        if ("u" > typeof r.g) return r.g.BigInt || null;
        if ("u" > typeof self) return self.BigInt || null;
        throw Error("Can't search globals for BigInt!")
      }

      function cu(t) {
        if (typeof au > "u" && (au = hu()), null === au) throw Error("BigInt is not supported!");
        return au(t)
      }! function(t) {
        t[t.ALPHA = 0] = "ALPHA", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.PUNCT = 3] = "PUNCT", t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
      }(su || (su = {}));
      var lu = function() {
        function t() {}
        return t.decode = function(n, r) {
          var i = new Q(""),
            e = H.ISO8859_1;
          i.enableDecoding(e);
          for (var o = 1, u = n[o++], f = new Ko; o < n[0];) {
            switch (u) {
              case t.TEXT_COMPACTION_MODE_LATCH:
                o = t.textCompaction(n, o, i);
                break;
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
                o = t.byteCompaction(u, n, e, o, i);
                break;
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                i.append(n[o++]);
                break;
              case t.NUMERIC_COMPACTION_MODE_LATCH:
                o = t.numericCompaction(n, o, i);
                break;
              case t.ECI_CHARSET:
                H.getCharacterSetECIByValue(n[o++]);
                break;
              case t.ECI_GENERAL_PURPOSE:
                o += 2;
                break;
              case t.ECI_USER_DEFINED:
                o++;
                break;
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                o = t.decodeMacroBlock(n, o, f);
                break;
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                throw new F;
              default:
                o--, o = t.textCompaction(n, o, i)
            }
            if (o >= n.length) throw F.getFormatInstance();
            u = n[o++]
          }
          if (0 === i.length()) throw F.getFormatInstance();
          var s = new kt(null, i.toString(), null, r);
          return s.setOther(f), s
        }, t.decodeMacroBlock = function(n, r, i) {
          if (r + t.NUMBER_OF_SEQUENCE_CODEWORDS > n[0]) throw F.getFormatInstance();
          for (var e = new Int32Array(t.NUMBER_OF_SEQUENCE_CODEWORDS), o = 0; o < t.NUMBER_OF_SEQUENCE_CODEWORDS; o++, r++) e[o] = n[r];
          i.setSegmentIndex(R.parseInt(t.decodeBase900toBase10(e, t.NUMBER_OF_SEQUENCE_CODEWORDS)));
          var u = new Q;
          r = t.textCompaction(n, r, u), i.setFileId(u.toString());
          var f = -1;
          for (n[r] === t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (f = r + 1); r < n[0];) switch (n[r]) {
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              switch (n[++r]) {
                case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                  var s = new Q;
                  r = t.textCompaction(n, r + 1, s), i.setFileName(s.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                  var a = new Q;
                  r = t.textCompaction(n, r + 1, a), i.setSender(a.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                  var h = new Q;
                  r = t.textCompaction(n, r + 1, h), i.setAddressee(h.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                  var c = new Q;
                  r = t.numericCompaction(n, r + 1, c), i.setSegmentCount(R.parseInt(c.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                  var l = new Q;
                  r = t.numericCompaction(n, r + 1, l), i.setTimestamp(Zo.parseLong(l.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                  var w = new Q;
                  r = t.numericCompaction(n, r + 1, w), i.setChecksum(R.parseInt(w.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                  var v = new Q;
                  r = t.numericCompaction(n, r + 1, v), i.setFileSize(Zo.parseLong(v.toString()));
                  break;
                default:
                  throw F.getFormatInstance()
              }
              break;
            case t.MACRO_PDF417_TERMINATOR:
              r++, i.setLastSegment(!0);
              break;
            default:
              throw F.getFormatInstance()
          }
          if (-1 !== f) {
            var y = r - f;
            i.isLastSegment() && y--, i.setOptionalData(x.copyOfRange(n, f, f + y))
          }
          return r
        }, t.textCompaction = function(n, r, i) {
          for (var e = new Int32Array(2 * (n[0] - r)), o = new Int32Array(2 * (n[0] - r)), u = 0, f = !1; r < n[0] && !f;) {
            var s = n[r++];
            if (s < t.TEXT_COMPACTION_MODE_LATCH) e[u] = s / 30, e[u + 1] = s % 30, u += 2;
            else switch (s) {
              case t.TEXT_COMPACTION_MODE_LATCH:
                e[u++] = t.TEXT_COMPACTION_MODE_LATCH;
                break;
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.NUMERIC_COMPACTION_MODE_LATCH:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                r--, f = !0;
                break;
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                e[u] = t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, s = n[r++], o[u] = s, u++
            }
          }
          return t.decodeTextCompaction(e, o, u, i), r
        }, t.decodeTextCompaction = function(n, r, i, e) {
          for (var o = su.ALPHA, u = su.ALPHA, f = 0; i > f;) {
            var s = n[f],
              a = "";
            switch (o) {
              case su.ALPHA:
                if (26 > s) a = String.fromCharCode(65 + s);
                else switch (s) {
                  case 26:
                    a = " ";
                    break;
                  case t.LL:
                    o = su.LOWER;
                    break;
                  case t.ML:
                    o = su.MIXED;
                    break;
                  case t.PS:
                    u = o, o = su.PUNCT_SHIFT;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    e.append(r[f]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
                break;
              case su.LOWER:
                if (26 > s) a = String.fromCharCode(97 + s);
                else switch (s) {
                  case 26:
                    a = " ";
                    break;
                  case t.AS:
                    u = o, o = su.ALPHA_SHIFT;
                    break;
                  case t.ML:
                    o = su.MIXED;
                    break;
                  case t.PS:
                    u = o, o = su.PUNCT_SHIFT;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    e.append(r[f]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
                break;
              case su.MIXED:
                if (s < t.PL) a = t.MIXED_CHARS[s];
                else switch (s) {
                  case t.PL:
                    o = su.PUNCT;
                    break;
                  case 26:
                    a = " ";
                    break;
                  case t.LL:
                    o = su.LOWER;
                    break;
                  case t.AL:
                    o = su.ALPHA;
                    break;
                  case t.PS:
                    u = o, o = su.PUNCT_SHIFT;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    e.append(r[f]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
                break;
              case su.PUNCT:
                if (s < t.PAL) a = t.PUNCT_CHARS[s];
                else switch (s) {
                  case t.PAL:
                    o = su.ALPHA;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    e.append(r[f]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
                break;
              case su.ALPHA_SHIFT:
                if (o = u, 26 > s) a = String.fromCharCode(65 + s);
                else switch (s) {
                  case 26:
                    a = " ";
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
                break;
              case su.PUNCT_SHIFT:
                if (o = u, s < t.PAL) a = t.PUNCT_CHARS[s];
                else switch (s) {
                  case t.PAL:
                    o = su.ALPHA;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    e.append(r[f]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    o = su.ALPHA
                }
            }
            "" !== a && e.append(a), f++
          }
        }, t.byteCompaction = function(n, r, i, e, o) {
          var u = new fu,
            f = 0,
            s = 0,
            a = !1;
          switch (n) {
            case t.BYTE_COMPACTION_MODE_LATCH:
              for (var h = new Int32Array(6), c = r[e++]; e < r[0] && !a;) switch (h[f++] = c, s = 900 * s + c, c = r[e++], c) {
                case t.TEXT_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH:
                case t.NUMERIC_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH_6:
                case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case t.MACRO_PDF417_TERMINATOR:
                  e--, a = !0;
                  break;
                default:
                  if (f % 5 == 0 && f > 0) {
                    for (var l = 0; 6 > l; ++l) u.write(+(cu(s) >> cu(8 * (5 - l))));
                    s = 0, f = 0
                  }
              }
              e === r[0] && c < t.TEXT_COMPACTION_MODE_LATCH && (h[f++] = c);
              for (var w = 0; f > w; w++) u.write(h[w]);
              break;
            case t.BYTE_COMPACTION_MODE_LATCH_6:
              for (; e < r[0] && !a;) {
                var v = r[e++];
                if (v < t.TEXT_COMPACTION_MODE_LATCH) f++, s = 900 * s + v;
                else switch (v) {
                  case t.TEXT_COMPACTION_MODE_LATCH:
                  case t.BYTE_COMPACTION_MODE_LATCH:
                  case t.NUMERIC_COMPACTION_MODE_LATCH:
                  case t.BYTE_COMPACTION_MODE_LATCH_6:
                  case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case t.MACRO_PDF417_TERMINATOR:
                    e--, a = !0
                }
                if (f % 5 == 0 && f > 0) {
                  for (l = 0; 6 > l; ++l) u.write(+(cu(s) >> cu(8 * (5 - l))));
                  s = 0, f = 0
                }
              }
          }
          return o.append(K.decode(u.toByteArray(), i)), e
        }, t.numericCompaction = function(n, r, i) {
          for (var e = 0, o = !1, u = new Int32Array(t.MAX_NUMERIC_CODEWORDS); r < n[0] && !o;) {
            var f = n[r++];
            if (r === n[0] && (o = !0), f < t.TEXT_COMPACTION_MODE_LATCH) u[e] = f, e++;
            else switch (f) {
              case t.TEXT_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                r--, o = !0
            }(e % t.MAX_NUMERIC_CODEWORDS === 0 || f === t.NUMERIC_COMPACTION_MODE_LATCH || o) && e > 0 && (i.append(t.decodeBase900toBase10(u, e)), e = 0)
          }
          return r
        }, t.decodeBase900toBase10 = function(n, r) {
          for (var i = cu(0), e = 0; r > e; e++) i += t.EXP900[r - e - 1] * cu(n[e]);
          var o = i.toString();
          if ("1" !== o.charAt(0)) throw new F;
          return o.substring(1)
        }, t.TEXT_COMPACTION_MODE_LATCH = 900, t.BYTE_COMPACTION_MODE_LATCH = 901, t.NUMERIC_COMPACTION_MODE_LATCH = 902, t.BYTE_COMPACTION_MODE_LATCH_6 = 924, t.ECI_USER_DEFINED = 925, t.ECI_GENERAL_PURPOSE = 926, t.ECI_CHARSET = 927, t.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, t.MACRO_PDF417_TERMINATOR = 922, t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, t.MAX_NUMERIC_CODEWORDS = 15, t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, t.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, t.PL = 25, t.LL = 27, t.AS = 27, t.ML = 28, t.AL = 28, t.PS = 29, t.PAL = 29, t.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", t.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", t.EXP900 = hu() ? function() {
          var t = [];
          t[0] = cu(1);
          var n = cu(900);
          t[1] = n;
          for (var r = 2; 16 > r; r++) t[r] = t[r - 1] * n;
          return t
        }() : [], t.NUMBER_OF_SEQUENCE_CODEWORDS = 2, t
      }();
      const wu = lu;
      var vu = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        yu = function() {
          function t() {}
          return t.decode = function(n, r, i, e, o, u, f) {
            for (var s, a = new Oo(n, r, i, e, o), h = null, c = null, l = !0;; l = !1) {
              if (null != r && (h = t.getRowIndicatorColumn(n, a, r, !0, u, f)), null != e && (c = t.getRowIndicatorColumn(n, a, e, !1, u, f)), null == (s = t.merge(h, c))) throw it.getNotFoundInstance();
              var w = s.getBoundingBox();
              if (!l || null == w || w.getMinY() >= a.getMinY() && w.getMaxY() <= a.getMaxY()) break;
              a = w
            }
            s.setBoundingBox(a);
            var v = s.getBarcodeColumnCount() + 1;
            s.setDetectionResultColumn(0, h), s.setDetectionResultColumn(v, c);
            for (var y = null != h, d = 1; v >= d; d++) {
              var b = y ? d : v - d;
              if (void 0 === s.getDetectionResultColumn(b)) {
                var A = void 0;
                A = 0 === b || b === v ? new Fo(a, 0 === b) : new Ro(a), s.setDetectionResultColumn(b, A);
                for (var p = -1, m = p, I = a.getMinY(); I <= a.getMaxY(); I++) {
                  if (0 > (p = t.getStartColumn(s, b, I, y)) || p > a.getMaxX()) {
                    if (-1 === m) continue;
                    p = m
                  }
                  var _ = t.detectCodeword(n, a.getMinX(), a.getMaxX(), y, p, I, u, f);
                  null != _ && (A.setCodeword(I, _), m = p, u = Math.min(u, _.getWidth()), f = Math.max(f, _.getWidth()))
                }
              }
            }
            return t.createDecoderResult(s)
          }, t.merge = function(n, r) {
            if (null == n && null == r) return null;
            var i = t.getBarcodeMetadata(n, r);
            if (null == i) return null;
            var e = Oo.merge(t.adjustBoundingBox(n), t.adjustBoundingBox(r));
            return new zo(i, e)
          }, t.adjustBoundingBox = function(n) {
            var r, i;
            if (null == n) return null;
            var e = n.getRowHeights();
            if (null == e) return null;
            var o = t.getMax(e),
              u = 0;
            try {
              for (var f = vu(e), s = f.next(); !s.done; s = f.next()) {
                var a = s.value;
                if (u += o - a, a > 0) break
              }
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                s && !s.done && (i = f.return) && i.call(f)
              } finally {
                if (r) throw r.error
              }
            }
            for (var h = n.getCodewords(), c = 0; u > 0 && null == h[c]; c++) u--;
            var l = 0;
            for (c = e.length - 1; c >= 0 && (l += o - e[c], 0 >= e[c]); c--);
            for (c = h.length - 1; l > 0 && null == h[c]; c--) l--;
            return n.getBoundingBox().addMissingRows(u, l, n.isLeft())
          }, t.getMax = function(t) {
            var n, r, i = -1;
            try {
              for (var e = vu(t), o = e.next(); !o.done; o = e.next()) {
                var u = o.value;
                i = Math.max(i, u)
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (r = e.return) && r.call(e)
              } finally {
                if (n) throw n.error
              }
            }
            return i
          }, t.getBarcodeMetadata = function(t, n) {
            var r, i;
            return null == t || null == (r = t.getBarcodeMetadata()) ? null == n ? null : n.getBarcodeMetadata() : null == n || null == (i = n.getBarcodeMetadata()) ? r : r.getColumnCount() !== i.getColumnCount() && r.getErrorCorrectionLevel() !== i.getErrorCorrectionLevel() && r.getRowCount() !== i.getRowCount() ? null : r
          }, t.getRowIndicatorColumn = function(n, r, i, e, o, u) {
            for (var f = new Fo(r, e), s = 0; 2 > s; s++)
              for (var a = 0 === s ? 1 : -1, h = Math.trunc(Math.trunc(i.getX())), c = Math.trunc(Math.trunc(i.getY())); c <= r.getMaxY() && c >= r.getMinY(); c += a) {
                var l = t.detectCodeword(n, 0, n.getWidth(), e, h, c, o, u);
                null != l && (f.setCodeword(c, l), h = e ? l.getStartX() : l.getEndX())
              }
            return f
          }, t.adjustCodewordCount = function(n, r) {
            var i = r[0][1],
              e = i.getValue(),
              o = n.getBarcodeColumnCount() * n.getBarcodeRowCount() - t.getNumberOfECCodeWords(n.getBarcodeECLevel());
            if (0 === e.length) {
              if (1 > o || o > ho.MAX_CODEWORDS_IN_BARCODE) throw it.getNotFoundInstance();
              i.setValue(o)
            } else e[0] !== o && i.setValue(o)
          }, t.createDecoderResult = function(n) {
            var r = t.createBarcodeMatrix(n);
            t.adjustCodewordCount(n, r);
            for (var i = [], e = new Int32Array(n.getBarcodeRowCount() * n.getBarcodeColumnCount()), o = [], u = [], f = 0; f < n.getBarcodeRowCount(); f++)
              for (var s = 0; s < n.getBarcodeColumnCount(); s++) {
                var a = r[f][s + 1].getValue(),
                  h = f * n.getBarcodeColumnCount() + s;
                0 === a.length ? i.push(h) : 1 === a.length ? e[h] = a[0] : (u.push(h), o.push(a))
              }
            for (var c = Array(o.length), l = 0; l < c.length; l++) c[l] = o[l];
            return t.createDecoderResultFromAmbiguousValues(n.getBarcodeECLevel(), e, ho.toIntArray(i), ho.toIntArray(u), c)
          }, t.createDecoderResultFromAmbiguousValues = function(n, r, i, e, o) {
            for (var u = new Int32Array(e.length), f = 100; f-- > 0;) {
              for (var s = 0; s < u.length; s++) r[e[s]] = o[s][u[s]];
              try {
                return t.decodeCodewords(r, n, i)
              } catch (t) {
                if (!(t instanceof p)) throw t
              }
              if (0 === u.length) throw p.getChecksumInstance();
              for (s = 0; s < u.length; s++) {
                if (u[s] < o[s].length - 1) {
                  u[s]++;
                  break
                }
                if (u[s] = 0, s === u.length - 1) throw p.getChecksumInstance()
              }
            }
            throw p.getChecksumInstance()
          }, t.createBarcodeMatrix = function(t) {
            for (var n, r, i, e, o = Array.from({
                length: t.getBarcodeRowCount()
              }, function() {
                return Array(t.getBarcodeColumnCount() + 2)
              }), u = 0; u < o.length; u++)
              for (var f = 0; f < o[u].length; f++) o[u][f] = new Do;
            var s = 0;
            try {
              for (var a = vu(t.getDetectionResultColumns()), h = a.next(); !h.done; h = a.next()) {
                var c = h.value;
                if (null != c) try {
                  for (var l = (i = void 0, vu(c.getCodewords())), w = l.next(); !w.done; w = l.next()) {
                    var v = w.value;
                    if (null != v) {
                      var y = v.getRowNumber();
                      if (y >= 0) {
                        if (y >= o.length) continue;
                        o[y][s].setValue(v.getValue())
                      }
                    }
                  }
                } catch (t) {
                  i = {
                    error: t
                  }
                } finally {
                  try {
                    w && !w.done && (e = l.return) && e.call(l)
                  } finally {
                    if (i) throw i.error
                  }
                }
                s++
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                h && !h.done && (r = a.return) && r.call(a)
              } finally {
                if (n) throw n.error
              }
            }
            return o
          }, t.isValidBarcodeColumn = function(t, n) {
            return n >= 0 && n <= t.getBarcodeColumnCount() + 1
          }, t.getStartColumn = function(n, r, i, e) {
            var o, u, f = e ? 1 : -1,
              s = null;
            if (t.isValidBarcodeColumn(n, r - f) && (s = n.getDetectionResultColumn(r - f).getCodeword(i)), null != s) return e ? s.getEndX() : s.getStartX();
            if (null != (s = n.getDetectionResultColumn(r).getCodewordNearby(i))) return e ? s.getStartX() : s.getEndX();
            if (t.isValidBarcodeColumn(n, r - f) && (s = n.getDetectionResultColumn(r - f).getCodewordNearby(i)), null != s) return e ? s.getEndX() : s.getStartX();
            for (var a = 0; t.isValidBarcodeColumn(n, r - f);) {
              r -= f;
              try {
                for (var h = (o = void 0, vu(n.getDetectionResultColumn(r).getCodewords())), c = h.next(); !c.done; c = h.next()) {
                  var l = c.value;
                  if (null != l) return (e ? l.getEndX() : l.getStartX()) + f * a * (l.getEndX() - l.getStartX())
                }
              } catch (t) {
                o = {
                  error: t
                }
              } finally {
                try {
                  c && !c.done && (u = h.return) && u.call(h)
                } finally {
                  if (o) throw o.error
                }
              }
              a++
            }
            return e ? n.getBoundingBox().getMinX() : n.getBoundingBox().getMaxX()
          }, t.detectCodeword = function(n, r, i, e, o, u, f, s) {
            o = t.adjustCodewordStartColumn(n, r, i, e, o, u);
            var a = t.getModuleBitCount(n, r, i, e, o, u);
            if (null == a) return null;
            var h, c = Jt.sum(a);
            if (e) h = o + c;
            else {
              for (var l = 0; l < a.length / 2; l++) {
                var w = a[l];
                a[l] = a[a.length - 1 - l], a[a.length - 1 - l] = w
              }
              o = (h = o) - c
            }
            if (!t.checkCodewordSkew(c, f, s)) return null;
            var v = Wo.getDecodedValue(a),
              y = ho.getCodeword(v);
            return -1 === y ? null : new qo(o, h, t.getCodewordBucketNumber(v), y)
          }, t.getModuleBitCount = function(t, n, r, i, e, o) {
            for (var u = e, f = new Int32Array(8), s = 0, a = i ? 1 : -1, h = i;
              (i ? r > u : u >= n) && s < f.length;) t.get(u, o) === h ? (f[s]++, u += a) : (s++, h = !h);
            return s === f.length || u === (i ? r : n) && s === f.length - 1 ? f : null
          }, t.getNumberOfECCodeWords = function(t) {
            return 2 << t
          }, t.adjustCodewordStartColumn = function(n, r, i, e, o, u) {
            for (var f = o, s = e ? -1 : 1, a = 0; 2 > a; a++) {
              for (;
                (e ? f >= r : i > f) && e === n.get(f, u);) {
                if (Math.abs(o - f) > t.CODEWORD_SKEW_SIZE) return o;
                f += s
              }
              s = -s, e = !e
            }
            return f
          }, t.checkCodewordSkew = function(n, r, i) {
            return r - t.CODEWORD_SKEW_SIZE <= n && n <= i + t.CODEWORD_SKEW_SIZE
          }, t.decodeCodewords = function(n, r, i) {
            if (0 === n.length) throw F.getFormatInstance();
            var e = 1 << r + 1,
              o = t.correctErrors(n, i, e);
            t.verifyCodewordCount(n, e);
            var u = wu.decode(n, "" + r);
            return u.setErrorsCorrected(o), u.setErasures(i.length), u
          }, t.correctErrors = function(n, r, i) {
            if (null != r && r.length > i / 2 + t.MAX_ERRORS || 0 > i || i > t.MAX_EC_CODEWORDS) throw p.getChecksumInstance();
            return t.errorCorrection.decode(n, i, r)
          }, t.verifyCodewordCount = function(t, n) {
            if (4 > t.length) throw F.getFormatInstance();
            var r = t[0];
            if (r > t.length) throw F.getFormatInstance();
            if (0 === r) {
              if (n >= t.length) throw F.getFormatInstance();
              t[0] = t.length - n
            }
          }, t.getBitCountForCodeword = function(t) {
            for (var n = new Int32Array(8), r = 0, i = n.length - 1;
              (1 & t) === r || (r = 1 & t, --i >= 0);) n[i]++, t >>= 1;
            return n
          }, t.getCodewordBucketNumber = function(t) {
            return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t)
          }, t.getCodewordBucketNumber_number = function(n) {
            return t.getCodewordBucketNumber(t.getBitCountForCodeword(n))
          }, t.getCodewordBucketNumber_Int32Array = function(t) {
            return (t[0] - t[2] + t[4] - t[6] + 9) % 9
          }, t.toString = function(t) {
            for (var n = new xo, r = 0; r < t.length; r++) {
              n.format("Row %2d: ", r);
              for (var i = 0; i < t[r].length; i++) {
                var e = t[r][i];
                0 === e.getValue().length ? n.format("        ", null) : n.format("%4d(%2d)", e.getValue()[0], e.getConfidence(e.getValue()[0]))
              }
              n.format("%n")
            }
            return n.toString()
          }, t.CODEWORD_SKEW_SIZE = 2, t.MAX_ERRORS = 3, t.MAX_EC_CODEWORDS = 512, t.errorCorrection = new Mo, t
        }();
      const du = yu;
      var bu = function() {
        function t() {}
        return t.prototype.decode = function(n, r) {
          void 0 === r && (r = null);
          var i = t.decode(n, r, !1);
          if (null == i || 0 === i.length || null == i[0]) throw it.getNotFoundInstance();
          return i[0]
        }, t.prototype.decodeMultiple = function(n, r) {
          void 0 === r && (r = null);
          try {
            return t.decode(n, r, !0)
          } catch (t) {
            throw t instanceof F || t instanceof p ? it.getNotFoundInstance() : t
          }
        }, t.decode = function(n, r, i) {
          var e, o, u = [],
            f = yo.detectMultiple(n, r, i);
          try {
            for (var s = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(f.getPoints()), a = s.next(); !a.done; a = s.next()) {
              var h = a.value,
                c = du.decode(f.getBits(), h[4], h[5], h[6], h[7], t.getMinCodewordWidth(h), t.getMaxCodewordWidth(h)),
                l = new _t(c.getText(), c.getRawBytes(), void 0, h, St.PDF_417);
              l.putMetadata(Et.ERROR_CORRECTION_LEVEL, c.getECLevel());
              var w = c.getOther();
              null != w && l.putMetadata(Et.PDF417_EXTRA_METADATA, w), u.push(l)
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              a && !a.done && (o = s.return) && o.call(s)
            } finally {
              if (e) throw e.error
            }
          }
          return u.map(function(t) {
            return t
          })
        }, t.getMaxWidth = function(t, n) {
          return null == t || null == n ? 0 : Math.trunc(Math.abs(t.getX() - n.getX()))
        }, t.getMinWidth = function(t, n) {
          return null == t || null == n ? R.MAX_VALUE : Math.trunc(Math.abs(t.getX() - n.getX()))
        }, t.getMaxCodewordWidth = function(n) {
          return Math.floor(Math.max(Math.max(t.getMaxWidth(n[0], n[4]), t.getMaxWidth(n[6], n[2]) * ho.MODULES_IN_CODEWORD / ho.MODULES_IN_STOP_PATTERN), Math.max(t.getMaxWidth(n[1], n[5]), t.getMaxWidth(n[7], n[3]) * ho.MODULES_IN_CODEWORD / ho.MODULES_IN_STOP_PATTERN)))
        }, t.getMinCodewordWidth = function(n) {
          return Math.floor(Math.min(Math.min(t.getMinWidth(n[0], n[4]), t.getMinWidth(n[6], n[2]) * ho.MODULES_IN_CODEWORD / ho.MODULES_IN_STOP_PATTERN), Math.min(t.getMinWidth(n[1], n[5]), t.getMinWidth(n[7], n[3]) * ho.MODULES_IN_CODEWORD / ho.MODULES_IN_STOP_PATTERN)))
        }, t.prototype.reset = function() {}, t
      }();
      const Au = bu;
      var pu = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        mu = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return pu(n, t), n.kind = "ReaderException", n
        }(s);
      const Iu = mu;
      var _u = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        gu = function() {
          function t() {}
          return t.prototype.decode = function(t, n) {
            return this.setHints(n), this.decodeInternal(t)
          }, t.prototype.decodeWithState = function(t) {
            return (null === this.readers || void 0 === this.readers) && this.setHints(null), this.decodeInternal(t)
          }, t.prototype.setHints = function(t) {
            this.hints = t;
            var n = null != t && void 0 !== t.get(B.TRY_HARDER),
              r = null == t ? null : t.get(B.POSSIBLE_FORMATS),
              i = [];
            if (null != r) {
              var e = r.some(function(t) {
                return t === St.UPC_A || t === St.UPC_E || t === St.EAN_13 || t === St.EAN_8 || t === St.CODABAR || t === St.CODE_39 || t === St.CODE_93 || t === St.CODE_128 || t === St.ITF || t === St.RSS_14 || t === St.RSS_EXPANDED
              });
              e && !n && i.push(new $i(t)), r.includes(St.QR_CODE) && i.push(new so), r.includes(St.DATA_MATRIX) && i.push(new ye), r.includes(St.AZTEC) && i.push(new gn), r.includes(St.PDF_417) && i.push(new Au), e && n && i.push(new $i(t))
            }
            0 === i.length && (n || i.push(new $i(t)), i.push(new so), i.push(new ye), i.push(new gn), i.push(new Au), n && i.push(new $i(t))), this.readers = i
          }, t.prototype.reset = function() {
            var t, n;
            if (null !== this.readers) try {
              for (var r = _u(this.readers), i = r.next(); !i.done; i = r.next()) i.value.reset()
            } catch (n) {
              t = {
                error: n
              }
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }, t.prototype.decodeInternal = function(t) {
            var n, r;
            if (null === this.readers) throw new Iu("No readers where selected, nothing can be read.");
            try {
              for (var i = _u(this.readers), e = i.next(); !e.done; e = i.next()) {
                var o = e.value;
                try {
                  return o.decode(t, this.hints)
                } catch (t) {
                  if (t instanceof Iu) continue
                }
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                e && !e.done && (r = i.return) && r.call(i)
              } finally {
                if (n) throw n.error
              }
            }
            throw new it("No MultiFormat Readers were able to detect the code.")
          }, t
        }();
      const Su = gu;
      var Mu, Eu = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ou = (function(t) {
          function n(n, r) {
            void 0 === n && (n = null), void 0 === r && (r = 500);
            var i = new Su;
            return i.setHints(n), t.call(this, i, r) || this
          }
          Eu(n, t), n.prototype.decodeBitmap = function(t) {
            return this.reader.decodeWithState(t)
          }
        }(mt), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        ku = (function(t) {
          Ou(function(n) {
            return void 0 === n && (n = 500), t.call(this, new Au, n) || this
          }, t)
        }(mt), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }());
      ! function(t) {
        ku(function(n) {
          return void 0 === n && (n = 500), t.call(this, new so, n) || this
        }, t)
      }(mt),
      function(t) {
        t[t.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t[t.CHARACTER_SET = 1] = "CHARACTER_SET", t[t.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t[t.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT", t[t.MIN_SIZE = 4] = "MIN_SIZE", t[t.MAX_SIZE = 5] = "MAX_SIZE", t[t.MARGIN = 6] = "MARGIN", t[t.PDF417_COMPACT = 7] = "PDF417_COMPACT", t[t.PDF417_COMPACTION = 8] = "PDF417_COMPACTION", t[t.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS", t[t.AZTEC_LAYERS = 10] = "AZTEC_LAYERS", t[t.QR_VERSION = 11] = "QR_VERSION", t[t.GS1_FORMAT = 12] = "GS1_FORMAT", t[t.FORCE_C40 = 13] = "FORCE_C40"
      }(Mu || (Mu = {}));
      const Tu = Mu;
      var ju = function() {
        function t(t) {
          this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new Ct(t, Int32Array.from([1])))
        }
        return t.prototype.buildGenerator = function(t) {
          var n = this.cachedGenerators;
          if (t >= n.length)
            for (var r = n[n.length - 1], i = this.field, e = n.length; t >= e; e++) {
              var o = r.multiply(new Ct(i, Int32Array.from([1, i.exp(e - 1 + i.getGeneratorBase())])));
              n.push(o), r = o
            }
          return n[t]
        }, t.prototype.encode = function(t, n) {
          if (0 === n) throw new v("No error correction bytes");
          var r = t.length - n;
          if (0 >= r) throw new v("No data bytes provided");
          var i = this.buildGenerator(n),
            e = new Int32Array(r);
          g.arraycopy(t, 0, e, 0, r);
          for (var o = new Ct(this.field, e), u = (o = o.multiplyByMonomial(n, 1)).divide(i)[1].getCoefficients(), f = n - u.length, s = 0; f > s; s++) t[r + s] = 0;
          g.arraycopy(u, 0, t, r + f, u.length)
        }, t
      }();
      const xu = ju;
      var Cu = function() {
        function t() {}
        return t.applyMaskPenaltyRule1 = function(n) {
          return t.applyMaskPenaltyRule1Internal(n, !0) + t.applyMaskPenaltyRule1Internal(n, !1)
        }, t.applyMaskPenaltyRule2 = function(n) {
          for (var r = 0, i = n.getArray(), e = n.getWidth(), o = n.getHeight(), u = 0; o - 1 > u; u++)
            for (var f = i[u], s = 0; e - 1 > s; s++) {
              var a = f[s];
              a === f[s + 1] && a === i[u + 1][s] && a === i[u + 1][s + 1] && r++
            }
          return t.N2 * r
        }, t.applyMaskPenaltyRule3 = function(n) {
          for (var r = 0, i = n.getArray(), e = n.getWidth(), o = n.getHeight(), u = 0; o > u; u++)
            for (var f = 0; e > f; f++) {
              var s = i[u];
              e > f + 6 && 1 === s[f] && 0 === s[f + 1] && 1 === s[f + 2] && 1 === s[f + 3] && 1 === s[f + 4] && 0 === s[f + 5] && 1 === s[f + 6] && (t.isWhiteHorizontal(s, f - 4, f) || t.isWhiteHorizontal(s, f + 7, f + 11)) && r++, o > u + 6 && 1 === i[u][f] && 0 === i[u + 1][f] && 1 === i[u + 2][f] && 1 === i[u + 3][f] && 1 === i[u + 4][f] && 0 === i[u + 5][f] && 1 === i[u + 6][f] && (t.isWhiteVertical(i, f, u - 4, u) || t.isWhiteVertical(i, f, u + 7, u + 11)) && r++
            }
          return r * t.N3
        }, t.isWhiteHorizontal = function(t, n, r) {
          n = Math.max(n, 0), r = Math.min(r, t.length);
          for (var i = n; r > i; i++)
            if (1 === t[i]) return !1;
          return !0
        }, t.isWhiteVertical = function(t, n, r, i) {
          r = Math.max(r, 0), i = Math.min(i, t.length);
          for (var e = r; i > e; e++)
            if (1 === t[e][n]) return !1;
          return !0
        }, t.applyMaskPenaltyRule4 = function(n) {
          for (var r = 0, i = n.getArray(), e = n.getWidth(), o = n.getHeight(), u = 0; o > u; u++)
            for (var f = i[u], s = 0; e > s; s++) 1 === f[s] && r++;
          var a = n.getHeight() * n.getWidth();
          return Math.floor(10 * Math.abs(2 * r - a) / a) * t.N4
        }, t.getDataMaskBit = function(t, n, r) {
          var i, e;
          switch (t) {
            case 0:
              i = r + n & 1;
              break;
            case 1:
              i = 1 & r;
              break;
            case 2:
              i = n % 3;
              break;
            case 3:
              i = (r + n) % 3;
              break;
            case 4:
              i = Math.floor(r / 2) + Math.floor(n / 3) & 1;
              break;
            case 5:
              i = (1 & (e = r * n)) + e % 3;
              break;
            case 6:
              i = (1 & (e = r * n)) + e % 3 & 1;
              break;
            case 7:
              i = (e = r * n) % 3 + (r + n & 1) & 1;
              break;
            default:
              throw new v("Invalid mask pattern: " + t)
          }
          return 0 === i
        }, t.applyMaskPenaltyRule1Internal = function(n, r) {
          for (var i = 0, e = r ? n.getHeight() : n.getWidth(), o = r ? n.getWidth() : n.getHeight(), u = n.getArray(), f = 0; e > f; f++) {
            for (var s = 0, a = -1, h = 0; o > h; h++) {
              var c = r ? u[f][h] : u[h][f];
              c === a ? s++ : (s >= 5 && (i += t.N1 + (s - 5)), s = 1, a = c)
            }
            s >= 5 && (i += t.N1 + (s - 5))
          }
          return i
        }, t.N1 = 3, t.N2 = 3, t.N3 = 40, t.N4 = 10, t
      }();
      const Ru = Cu;
      var Nu = function() {
        function t(t, n) {
          this.width = t, this.height = n;
          for (var r = Array(n), i = 0; i !== n; i++) r[i] = new Uint8Array(t);
          this.bytes = r
        }
        return t.prototype.getHeight = function() {
          return this.height
        }, t.prototype.getWidth = function() {
          return this.width
        }, t.prototype.get = function(t, n) {
          return this.bytes[n][t]
        }, t.prototype.getArray = function() {
          return this.bytes
        }, t.prototype.setNumber = function(t, n, r) {
          this.bytes[n][t] = r
        }, t.prototype.setBoolean = function(t, n, r) {
          this.bytes[n][t] = r ? 1 : 0
        }, t.prototype.clear = function(t) {
          var n, r;
          try {
            for (var i = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(this.bytes), e = i.next(); !e.done; e = i.next()) {
              var o = e.value;
              x.fill(o, t)
            }
          } catch (t) {
            n = {
              error: t
            }
          } finally {
            try {
              e && !e.done && (r = i.return) && r.call(i)
            } finally {
              if (n) throw n.error
            }
          }
        }, t.prototype.equals = function(n) {
          if (!(n instanceof t)) return !1;
          var r = n;
          if (this.width !== r.width || this.height !== r.height) return !1;
          for (var i = 0, e = this.height; e > i; ++i)
            for (var o = this.bytes[i], u = r.bytes[i], f = 0, s = this.width; s > f; ++f)
              if (o[f] !== u[f]) return !1;
          return !0
        }, t.prototype.toString = function() {
          for (var t = new Q, n = 0, r = this.height; r > n; ++n) {
            for (var i = this.bytes[n], e = 0, o = this.width; o > e; ++e) switch (i[e]) {
              case 0:
                t.append(" 0");
                break;
              case 1:
                t.append(" 1");
                break;
              default:
                t.append("  ")
            }
            t.append("\n")
          }
          return t.toString()
        }, t
      }();
      const Uu = Nu;
      var Du = function() {
        function t() {
          this.maskPattern = -1
        }
        return t.prototype.getMode = function() {
          return this.mode
        }, t.prototype.getECLevel = function() {
          return this.ecLevel
        }, t.prototype.getVersion = function() {
          return this.version
        }, t.prototype.getMaskPattern = function() {
          return this.maskPattern
        }, t.prototype.getMatrix = function() {
          return this.matrix
        }, t.prototype.toString = function() {
          var t = new Q;
          return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
        }, t.prototype.setMode = function(t) {
          this.mode = t
        }, t.prototype.setECLevel = function(t) {
          this.ecLevel = t
        }, t.prototype.setVersion = function(t) {
          this.version = t
        }, t.prototype.setMaskPattern = function(t) {
          this.maskPattern = t
        }, t.prototype.setMatrix = function(t) {
          this.matrix = t
        }, t.isValidMaskPattern = function(n) {
          return n >= 0 && n < t.NUM_MASK_PATTERNS
        }, t.NUM_MASK_PATTERNS = 8, t
      }();
      const Bu = Du;
      var Pu = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Lu = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Pu(n, t), n.kind = "WriterException", n
        }(s);
      const Fu = Lu;
      var Gu = function() {
        function t() {}
        return t.clearMatrix = function(t) {
          t.clear(255)
        }, t.buildMatrix = function(n, r, i, e, o) {
          t.clearMatrix(o), t.embedBasicPatterns(i, o), t.embedTypeInfo(r, e, o), t.maybeEmbedVersionInfo(i, o), t.embedDataBits(n, e, o)
        }, t.embedBasicPatterns = function(n, r) {
          t.embedPositionDetectionPatternsAndSeparators(r), t.embedDarkDotAtLeftBottomCorner(r), t.maybeEmbedPositionAdjustmentPatterns(n, r), t.embedTimingPatterns(r)
        }, t.embedTypeInfo = function(n, r, i) {
          var e = new U;
          t.makeTypeInfoBits(n, r, e);
          for (var o = 0, u = e.getSize(); u > o; ++o) {
            var f = e.get(e.getSize() - 1 - o),
              s = t.TYPE_INFO_COORDINATES[o],
              a = s[0],
              h = s[1];
            if (i.setBoolean(a, h, f), 8 > o) {
              var c = i.getWidth() - o - 1,
                l = 8;
              i.setBoolean(c, l, f)
            } else c = 8, l = i.getHeight() - 7 + (o - 8), i.setBoolean(c, l, f)
          }
        }, t.maybeEmbedVersionInfo = function(n, r) {
          if (n.getVersionNumber() >= 7) {
            var i = new U;
            t.makeVersionInfoBits(n, i);
            for (var e = 17, o = 0; 6 > o; ++o)
              for (var u = 0; 3 > u; ++u) {
                var f = i.get(e);
                e--, r.setBoolean(o, r.getHeight() - 11 + u, f), r.setBoolean(r.getHeight() - 11 + u, o, f)
              }
          }
        }, t.embedDataBits = function(n, r, i) {
          for (var e = 0, o = -1, u = i.getWidth() - 1, f = i.getHeight() - 1; u > 0;) {
            for (6 === u && (u -= 1); f >= 0 && f < i.getHeight();) {
              for (var s = 0; 2 > s; ++s) {
                var a = u - s;
                if (t.isEmpty(i.get(a, f))) {
                  var h = void 0;
                  e < n.getSize() ? (h = n.get(e), ++e) : h = !1, 255 !== r && Ru.getDataMaskBit(r, a, f) && (h = !h), i.setBoolean(a, f, h)
                }
              }
              f += o
            }
            f += o = -o, u -= 2
          }
          if (e !== n.getSize()) throw new Fu("Not all bits consumed: " + e + "/" + n.getSize())
        }, t.findMSBSet = function(t) {
          return 32 - R.numberOfLeadingZeros(t)
        }, t.calculateBCHCode = function(n, r) {
          if (0 === r) throw new v("0 polynomial");
          var i = t.findMSBSet(r);
          for (n <<= i - 1; t.findMSBSet(n) >= i;) n ^= r << t.findMSBSet(n) - i;
          return n
        }, t.makeTypeInfoBits = function(n, r, i) {
          if (!Bu.isValidMaskPattern(r)) throw new Fu("Invalid mask pattern");
          var e = n.getBits() << 3 | r;
          i.appendBits(e, 5);
          var o = t.calculateBCHCode(e, t.TYPE_INFO_POLY);
          i.appendBits(o, 10);
          var u = new U;
          if (u.appendBits(t.TYPE_INFO_MASK_PATTERN, 15), i.xor(u), 15 !== i.getSize()) throw new Fu("should not happen but we got: " + i.getSize())
        }, t.makeVersionInfoBits = function(n, r) {
          r.appendBits(n.getVersionNumber(), 6);
          var i = t.calculateBCHCode(n.getVersionNumber(), t.VERSION_INFO_POLY);
          if (r.appendBits(i, 12), 18 !== r.getSize()) throw new Fu("should not happen but we got: " + r.getSize())
        }, t.isEmpty = function(t) {
          return 255 === t
        }, t.embedTimingPatterns = function(n) {
          for (var r = 8; r < n.getWidth() - 8; ++r) {
            var i = (r + 1) % 2;
            t.isEmpty(n.get(r, 6)) && n.setNumber(r, 6, i), t.isEmpty(n.get(6, r)) && n.setNumber(6, r, i)
          }
        }, t.embedDarkDotAtLeftBottomCorner = function(t) {
          if (0 === t.get(8, t.getHeight() - 8)) throw new Fu;
          t.setNumber(8, t.getHeight() - 8, 1)
        }, t.embedHorizontalSeparationPattern = function(n, r, i) {
          for (var e = 0; 8 > e; ++e) {
            if (!t.isEmpty(i.get(n + e, r))) throw new Fu;
            i.setNumber(n + e, r, 0)
          }
        }, t.embedVerticalSeparationPattern = function(n, r, i) {
          for (var e = 0; 7 > e; ++e) {
            if (!t.isEmpty(i.get(n, r + e))) throw new Fu;
            i.setNumber(n, r + e, 0)
          }
        }, t.embedPositionAdjustmentPattern = function(n, r, i) {
          for (var e = 0; 5 > e; ++e)
            for (var o = t.POSITION_ADJUSTMENT_PATTERN[e], u = 0; 5 > u; ++u) i.setNumber(n + u, r + e, o[u])
        }, t.embedPositionDetectionPattern = function(n, r, i) {
          for (var e = 0; 7 > e; ++e)
            for (var o = t.POSITION_DETECTION_PATTERN[e], u = 0; 7 > u; ++u) i.setNumber(n + u, r + e, o[u])
        }, t.embedPositionDetectionPatternsAndSeparators = function(n) {
          var r = t.POSITION_DETECTION_PATTERN[0].length;
          t.embedPositionDetectionPattern(0, 0, n), t.embedPositionDetectionPattern(n.getWidth() - r, 0, n), t.embedPositionDetectionPattern(0, n.getWidth() - r, n), t.embedHorizontalSeparationPattern(0, 7, n), t.embedHorizontalSeparationPattern(n.getWidth() - 8, 7, n), t.embedHorizontalSeparationPattern(0, n.getWidth() - 8, n), t.embedVerticalSeparationPattern(7, 0, n), t.embedVerticalSeparationPattern(n.getHeight() - 7 - 1, 0, n), t.embedVerticalSeparationPattern(7, n.getHeight() - 7, n)
        }, t.maybeEmbedPositionAdjustmentPatterns = function(n, r) {
          if (n.getVersionNumber() >= 2)
            for (var i = n.getVersionNumber() - 1, e = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[i], o = 0, u = e.length; o !== u; o++) {
              var f = e[o];
              if (f >= 0)
                for (var s = 0; s !== u; s++) {
                  var a = e[s];
                  a >= 0 && t.isEmpty(r.get(a, f)) && t.embedPositionAdjustmentPattern(a - 2, f - 2, r)
                }
            }
        }, t.POSITION_DETECTION_PATTERN = [Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])], t.POSITION_ADJUSTMENT_PATTERN = [Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])], t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = [Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])], t.TYPE_INFO_COORDINATES = [Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])], t.VERSION_INFO_POLY = 7973, t.TYPE_INFO_POLY = 1335, t.TYPE_INFO_MASK_PATTERN = 21522, t
      }();
      const zu = Gu;
      var Hu = function() {
        function t(t, n) {
          this.dataBytes = t, this.errorCorrectionBytes = n
        }
        return t.prototype.getDataBytes = function() {
          return this.dataBytes
        }, t.prototype.getErrorCorrectionBytes = function() {
          return this.errorCorrectionBytes
        }, t
      }();
      const qu = Hu;
      var Xu = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Wu = function() {
          function t() {}
          return t.calculateMaskPenalty = function(t) {
            return Ru.applyMaskPenaltyRule1(t) + Ru.applyMaskPenaltyRule2(t) + Ru.applyMaskPenaltyRule3(t) + Ru.applyMaskPenaltyRule4(t)
          }, t.encode = function(n, r, i) {
            void 0 === i && (i = null);
            var e = t.DEFAULT_BYTE_MODE_ENCODING,
              o = null !== i && void 0 !== i.get(Tu.CHARACTER_SET);
            o && (e = i.get(Tu.CHARACTER_SET).toString());
            var u = this.chooseMode(n, e),
              f = new U;
            if (u === Pe.BYTE && (o || t.DEFAULT_BYTE_MODE_ENCODING !== e)) {
              var s = H.getCharacterSetECIByName(e);
              void 0 !== s && this.appendECI(s, f)
            }
            this.appendModeInfo(u, f);
            var a, h = new U;
            if (this.appendBytes(n, u, h, e), null !== i && void 0 !== i.get(Tu.QR_VERSION)) {
              var c = Number.parseInt(i.get(Tu.QR_VERSION).toString(), 10);
              a = Oe.getVersionForNumber(c);
              var l = this.calculateBitsNeeded(u, f, h, a);
              if (!this.willFit(l, a, r)) throw new Fu("Data too big for requested version")
            } else a = this.recommendVersion(r, u, f, h);
            var w = new U;
            w.appendBitArray(f);
            var v = u === Pe.BYTE ? h.getSizeInBytes() : n.length;
            this.appendLengthInfo(v, a, u, w), w.appendBitArray(h);
            var y = a.getECBlocksForLevel(r),
              d = a.getTotalCodewords() - y.getTotalECCodewords();
            this.terminateBits(d, w);
            var b = this.interleaveWithECBytes(w, a.getTotalCodewords(), d, y.getNumBlocks()),
              A = new Bu;
            A.setECLevel(r), A.setMode(u), A.setVersion(a);
            var p = a.getDimensionForVersion(),
              m = new Uu(p, p),
              I = this.chooseMaskPattern(b, r, a, m);
            return A.setMaskPattern(I), zu.buildMatrix(b, r, a, I, m), A.setMatrix(m), A
          }, t.recommendVersion = function(t, n, r, i) {
            var e = this.calculateBitsNeeded(n, r, i, Oe.getVersionForNumber(1)),
              o = this.chooseVersion(e, t),
              u = this.calculateBitsNeeded(n, r, i, o);
            return this.chooseVersion(u, t)
          }, t.calculateBitsNeeded = function(t, n, r, i) {
            return n.getSize() + t.getCharacterCountBits(i) + r.getSize()
          }, t.getAlphanumericCode = function(n) {
            return n < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[n] : -1
          }, t.chooseMode = function(n, r) {
            if (void 0 === r && (r = null), H.SJIS.getName() === r && this.isOnlyDoubleByteKanji(n)) return Pe.KANJI;
            for (var i = !1, e = !1, o = 0, u = n.length; u > o; ++o) {
              var f = n.charAt(o);
              if (t.isDigit(f)) i = !0;
              else {
                if (-1 === this.getAlphanumericCode(f.charCodeAt(0))) return Pe.BYTE;
                e = !0
              }
            }
            return e ? Pe.ALPHANUMERIC : i ? Pe.NUMERIC : Pe.BYTE
          }, t.isOnlyDoubleByteKanji = function(t) {
            var n;
            try {
              n = K.encode(t, H.SJIS)
            } catch {
              return !1
            }
            var r = n.length;
            if (r % 2 != 0) return !1;
            for (var i = 0; r > i; i += 2) {
              var e = 255 & n[i];
              if ((129 > e || e > 159) && (224 > e || e > 235)) return !1
            }
            return !0
          }, t.chooseMaskPattern = function(t, n, r, i) {
            for (var e = Number.MAX_SAFE_INTEGER, o = -1, u = 0; u < Bu.NUM_MASK_PATTERNS; u++) {
              zu.buildMatrix(t, n, r, u, i);
              var f = this.calculateMaskPenalty(i);
              e > f && (e = f, o = u)
            }
            return o
          }, t.chooseVersion = function(n, r) {
            for (var i = 1; 40 >= i; i++) {
              var e = Oe.getVersionForNumber(i);
              if (t.willFit(n, e, r)) return e
            }
            throw new Fu("Data too big")
          }, t.willFit = function(t, n, r) {
            return n.getTotalCodewords() - n.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8
          }, t.terminateBits = function(t, n) {
            var r = 8 * t;
            if (n.getSize() > r) throw new Fu("data bits cannot fit in the QR Code" + n.getSize() + " > " + r);
            for (var i = 0; 4 > i && n.getSize() < r; ++i) n.appendBit(!1);
            var e = 7 & n.getSize();
            if (e > 0)
              for (i = e; 8 > i; i++) n.appendBit(!1);
            var o = t - n.getSizeInBytes();
            for (i = 0; o > i; ++i) n.appendBits(1 & i ? 17 : 236, 8);
            if (n.getSize() !== r) throw new Fu("Bits size does not equal capacity")
          }, t.getNumDataBytesAndNumECBytesForBlockID = function(t, n, r, i, e, o) {
            if (i >= r) throw new Fu("Block ID too large");
            var u = t % r,
              f = r - u,
              s = Math.floor(t / r),
              a = s + 1,
              h = Math.floor(n / r),
              c = h + 1,
              l = s - h,
              w = a - c;
            if (l !== w) throw new Fu("EC bytes mismatch");
            if (r !== f + u) throw new Fu("RS blocks mismatch");
            if (t !== (h + l) * f + (c + w) * u) throw new Fu("Total bytes mismatch");
            f > i ? (e[0] = h, o[0] = l) : (e[0] = c, o[0] = w)
          }, t.interleaveWithECBytes = function(n, r, i, e) {
            var o, u, f, s;
            if (n.getSizeInBytes() !== i) throw new Fu("Number of bits and data bytes does not match");
            for (var a = 0, h = 0, c = 0, l = [], w = 0; e > w; ++w) {
              var v = new Int32Array(1),
                y = new Int32Array(1);
              t.getNumDataBytesAndNumECBytesForBlockID(r, i, e, w, v, y);
              var d = v[0],
                b = new Uint8Array(d);
              n.toBytes(8 * a, b, 0, d);
              var A = t.generateECBytes(b, y[0]);
              l.push(new qu(b, A)), h = Math.max(h, d), c = Math.max(c, A.length), a += v[0]
            }
            if (i !== a) throw new Fu("Data bytes does not match offset");
            var p = new U;
            for (w = 0; h > w; ++w) try {
              for (var m = (o = void 0, Xu(l)), I = m.next(); !I.done; I = m.next()) w < (b = I.value.getDataBytes()).length && p.appendBits(b[w], 8)
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                I && !I.done && (u = m.return) && u.call(m)
              } finally {
                if (o) throw o.error
              }
            }
            for (w = 0; c > w; ++w) try {
              for (var _ = (f = void 0, Xu(l)), g = _.next(); !g.done; g = _.next()) w < (A = g.value.getErrorCorrectionBytes()).length && p.appendBits(A[w], 8)
            } catch (t) {
              f = {
                error: t
              }
            } finally {
              try {
                g && !g.done && (s = _.return) && s.call(_)
              } finally {
                if (f) throw f.error
              }
            }
            if (r !== p.getSizeInBytes()) throw new Fu("Interleaving error: " + r + " and " + p.getSizeInBytes() + " differ.");
            return p
          }, t.generateECBytes = function(t, n) {
            for (var r = t.length, i = new Int32Array(r + n), e = 0; r > e; e++) i[e] = 255 & t[e];
            new xu(Pt.QR_CODE_FIELD_256).encode(i, n);
            var o = new Uint8Array(n);
            for (e = 0; n > e; e++) o[e] = i[r + e];
            return o
          }, t.appendModeInfo = function(t, n) {
            n.appendBits(t.getBits(), 4)
          }, t.appendLengthInfo = function(t, n, r, i) {
            var e = r.getCharacterCountBits(n);
            if (t >= 1 << e) throw new Fu(t + " is bigger than " + ((1 << e) - 1));
            i.appendBits(t, e)
          }, t.appendBytes = function(n, r, i, e) {
            switch (r) {
              case Pe.NUMERIC:
                t.appendNumericBytes(n, i);
                break;
              case Pe.ALPHANUMERIC:
                t.appendAlphanumericBytes(n, i);
                break;
              case Pe.BYTE:
                t.append8BitBytes(n, i, e);
                break;
              case Pe.KANJI:
                t.appendKanjiBytes(n, i);
                break;
              default:
                throw new Fu("Invalid mode: " + r)
            }
          }, t.getDigit = function(t) {
            return t.charCodeAt(0) - 48
          }, t.isDigit = function(n) {
            var r = t.getDigit(n);
            return r >= 0 && 9 >= r
          }, t.appendNumericBytes = function(n, r) {
            for (var i = n.length, e = 0; i > e;) {
              var o = t.getDigit(n.charAt(e));
              if (i > e + 2) {
                var u = t.getDigit(n.charAt(e + 1)),
                  f = t.getDigit(n.charAt(e + 2));
                r.appendBits(100 * o + 10 * u + f, 10), e += 3
              } else i > e + 1 ? (u = t.getDigit(n.charAt(e + 1)), r.appendBits(10 * o + u, 7), e += 2) : (r.appendBits(o, 4), e++)
            }
          }, t.appendAlphanumericBytes = function(n, r) {
            for (var i = n.length, e = 0; i > e;) {
              var o = t.getAlphanumericCode(n.charCodeAt(e));
              if (-1 === o) throw new Fu;
              if (i > e + 1) {
                var u = t.getAlphanumericCode(n.charCodeAt(e + 1));
                if (-1 === u) throw new Fu;
                r.appendBits(45 * o + u, 11), e += 2
              } else r.appendBits(o, 6), e++
            }
          }, t.append8BitBytes = function(t, n, r) {
            var i;
            try {
              i = K.encode(t, r)
            } catch (t) {
              throw new Fu(t)
            }
            for (var e = 0, o = i.length; e !== o; e++) {
              var u = i[e];
              n.appendBits(u, 8)
            }
          }, t.appendKanjiBytes = function(t, n) {
            var r;
            try {
              r = K.encode(t, H.SJIS)
            } catch (t) {
              throw new Fu(t)
            }
            for (var i = r.length, e = 0; i > e; e += 2) {
              var o = (255 & r[e]) << 8 & 4294967295 | 255 & r[e + 1],
                u = -1;
              if (33088 > o || o > 40956 ? o >= 57408 && 60351 >= o && (u = o - 49472) : u = o - 33088, -1 === u) throw new Fu("Invalid byte sequence");
              var f = 192 * (u >> 8) + (255 & u);
              n.appendBits(f, 13)
            }
          }, t.appendECI = function(t, n) {
            n.appendBits(Pe.ECI.getBits(), 4), n.appendBits(t.getValue(), 8)
          }, t.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), t.DEFAULT_BYTE_MODE_ENCODING = H.UTF8.getName(), t
        }();
      const $u = Wu;
      ! function() {
        function t() {}
        t.prototype.write = function(n, r, i, e) {
          if (void 0 === e && (e = null), 0 === n.length) throw new v("Found empty contents");
          if (0 > r || 0 > i) throw new v("Requested dimensions are too small: " + r + "x" + i);
          var o = pe.L,
            u = t.QUIET_ZONE_SIZE;
          null !== e && (void 0 !== e.get(Tu.ERROR_CORRECTION) && (o = pe.fromString(e.get(Tu.ERROR_CORRECTION).toString())), void 0 !== e.get(Tu.MARGIN) && (u = Number.parseInt(e.get(Tu.MARGIN).toString(), 10)));
          var f = $u.encode(n, o, e);
          return this.renderResult(f, r, i, u)
        }, t.prototype.writeToDom = function(t, n, r, i, e) {
          void 0 === e && (e = null), "string" == typeof t && (t = document.querySelector(t));
          var o = this.write(n, r, i, e);
          t && t.appendChild(o)
        }, t.prototype.renderResult = function(t, n, r, i) {
          var e = t.getMatrix();
          if (null === e) throw new qt;
          for (var o = e.getWidth(), u = e.getHeight(), f = o + 2 * i, s = u + 2 * i, a = Math.max(n, f), h = Math.max(r, s), c = Math.min(Math.floor(a / f), Math.floor(h / s)), l = Math.floor((a - o * c) / 2), w = Math.floor((h - u * c) / 2), v = this.createSVGElement(a, h), y = 0, d = w; u > y; y++, d += c)
            for (var b = 0, A = l; o > b; b++, A += c)
              if (1 === e.get(b, y)) {
                var p = this.createSvgRectElement(A, d, c, c);
                v.appendChild(p)
              } return v
        }, t.prototype.createSVGElement = function(n, r) {
          var i = document.createElementNS(t.SVG_NS, "svg");
          return i.setAttributeNS(null, "height", n.toString()), i.setAttributeNS(null, "width", r.toString()), i
        }, t.prototype.createSvgRectElement = function(n, r, i, e) {
          var o = document.createElementNS(t.SVG_NS, "rect");
          return o.setAttributeNS(null, "x", n.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "height", i.toString()), o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "fill", "#000000"), o
        }, t.QUIET_ZONE_SIZE = 4, t.SVG_NS = "http://www.w3.org/2000/svg"
      }(),
      function() {
        function t() {}
        t.prototype.encode = function(n, r, i, e, o) {
          if (0 === n.length) throw new v("Found empty contents");
          if (r !== St.QR_CODE) throw new v("Can only encode QR_CODE, but got " + r);
          if (0 > i || 0 > e) throw new v("Requested dimensions are too small: " + i + "x" + e);
          var u = pe.L,
            f = t.QUIET_ZONE_SIZE;
          null !== o && (void 0 !== o.get(Tu.ERROR_CORRECTION) && (u = pe.fromString(o.get(Tu.ERROR_CORRECTION).toString())), void 0 !== o.get(Tu.MARGIN) && (f = Number.parseInt(o.get(Tu.MARGIN).toString(), 10)));
          var s = $u.encode(n, u, o);
          return t.renderResult(s, i, e, f)
        }, t.renderResult = function(t, n, r, i) {
          var e = t.getMatrix();
          if (null === e) throw new qt;
          for (var o = e.getWidth(), u = e.getHeight(), f = o + 2 * i, s = u + 2 * i, a = Math.max(n, f), h = Math.max(r, s), c = Math.min(Math.floor(a / f), Math.floor(h / s)), l = Math.floor((a - o * c) / 2), w = Math.floor((h - u * c) / 2), v = new tt(a, h), y = 0, d = w; u > y; y++, d += c)
            for (var b = 0, A = l; o > b; b++, A += c) 1 === e.get(b, y) && v.setRegion(A, d, c, c);
          return v
        }, t.QUIET_ZONE_SIZE = 4
      }();
      var Ku = function() {
        var t = function(n, r) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, n) {
              t.__proto__ = n
            } || function(t, n) {
              for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
            })(n, r)
        };
        return function(n, r) {
          function i() {
            this.constructor = n
          }
          t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
      }();
      ! function(t) {
        function n(n, r, i, e, o, u, f, s) {
          var a = t.call(this, u, f) || this;
          if (a.yuvData = n, a.dataWidth = r, a.dataHeight = i, a.left = e, a.top = o, e + u > r || o + f > i) throw new v("Crop rectangle does not fit within image data.");
          return s && a.reverseHorizontal(u, f), a
        }
        Ku(n, t), n.prototype.getRow = function(t, n) {
          if (0 > t || t >= this.getHeight()) throw new v("Requested row is outside the image: " + t);
          var r = this.getWidth();
          (null == n || n.length < r) && (n = new Uint8ClampedArray(r));
          var i = (t + this.top) * this.dataWidth + this.left;
          return g.arraycopy(this.yuvData, i, n, 0, r), n
        }, n.prototype.getMatrix = function() {
          var t = this.getWidth(),
            n = this.getHeight();
          if (t === this.dataWidth && n === this.dataHeight) return this.yuvData;
          var r = t * n,
            i = new Uint8ClampedArray(r),
            e = this.top * this.dataWidth + this.left;
          if (t === this.dataWidth) return g.arraycopy(this.yuvData, e, i, 0, r), i;
          for (var o = 0; n > o; o++) {
            var u = o * t;
            g.arraycopy(this.yuvData, e, i, u, t), e += this.dataWidth
          }
          return i
        }, n.prototype.isCropSupported = function() {
          return !0
        }, n.prototype.crop = function(t, r, i, e) {
          return new n(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + r, i, e, !1)
        }, n.prototype.renderThumbnail = function() {
          for (var t = this.getWidth() / n.THUMBNAIL_SCALE_FACTOR, r = this.getHeight() / n.THUMBNAIL_SCALE_FACTOR, i = new Int32Array(t * r), e = this.yuvData, o = this.top * this.dataWidth + this.left, u = 0; r > u; u++) {
            for (var f = u * t, s = 0; t > s; s++) {
              var a = 255 & e[o + s * n.THUMBNAIL_SCALE_FACTOR];
              i[f + s] = 4278190080 | 65793 * a
            }
            o += this.dataWidth * n.THUMBNAIL_SCALE_FACTOR
          }
          return i
        }, n.prototype.getThumbnailWidth = function() {
          return this.getWidth() / n.THUMBNAIL_SCALE_FACTOR
        }, n.prototype.getThumbnailHeight = function() {
          return this.getHeight() / n.THUMBNAIL_SCALE_FACTOR
        }, n.prototype.reverseHorizontal = function(t, n) {
          for (var r = this.yuvData, i = 0, e = this.top * this.dataWidth + this.left; n > i; i++, e += this.dataWidth)
            for (var o = e + t / 2, u = e, f = e + t - 1; o > u; u++, f--) {
              var s = r[u];
              r[u] = r[f], r[f] = s
            }
        }, n.prototype.invert = function() {
          return new vt(this)
        }, n.THUMBNAIL_SCALE_FACTOR = 2
      }(ct);
      var Vu = function() {
        var t = function(n, r) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, n) {
              t.__proto__ = n
            } || function(t, n) {
              for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
            })(n, r)
        };
        return function(n, r) {
          function i() {
            this.constructor = n
          }
          t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
      }();
      ! function(t) {
        function n(n, r, i, e, o, u, f) {
          var s = t.call(this, r, i) || this;
          if (s.dataWidth = e, s.dataHeight = o, s.left = u, s.top = f, 4 === n.BYTES_PER_ELEMENT) {
            for (var a = r * i, h = new Uint8ClampedArray(a), c = 0; a > c; c++) {
              var l = n[c],
                w = l >> 16 & 255,
                y = l >> 7 & 510,
                d = 255 & l;
              h[c] = (w + y + d) / 4 & 255
            }
            s.luminances = h
          } else s.luminances = n;
          if (void 0 === e && (s.dataWidth = r), void 0 === o && (s.dataHeight = i), void 0 === u && (s.left = 0), void 0 === f && (s.top = 0), s.left + r > s.dataWidth || s.top + i > s.dataHeight) throw new v("Crop rectangle does not fit within image data.");
          return s
        }
        Vu(n, t), n.prototype.getRow = function(t, n) {
          if (0 > t || t >= this.getHeight()) throw new v("Requested row is outside the image: " + t);
          var r = this.getWidth();
          (null == n || n.length < r) && (n = new Uint8ClampedArray(r));
          var i = (t + this.top) * this.dataWidth + this.left;
          return g.arraycopy(this.luminances, i, n, 0, r), n
        }, n.prototype.getMatrix = function() {
          var t = this.getWidth(),
            n = this.getHeight();
          if (t === this.dataWidth && n === this.dataHeight) return this.luminances;
          var r = t * n,
            i = new Uint8ClampedArray(r),
            e = this.top * this.dataWidth + this.left;
          if (t === this.dataWidth) return g.arraycopy(this.luminances, e, i, 0, r), i;
          for (var o = 0; n > o; o++) {
            var u = o * t;
            g.arraycopy(this.luminances, e, i, u, t), e += this.dataWidth
          }
          return i
        }, n.prototype.isCropSupported = function() {
          return !0
        }, n.prototype.crop = function(t, r, i, e) {
          return new n(this.luminances, i, e, this.dataWidth, this.dataHeight, this.left + t, this.top + r)
        }, n.prototype.invert = function() {
          return new vt(this)
        }
      }(ct);
      var Zu = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ju = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Zu(n, t), n.forName = function(t) {
            return this.getCharacterSetECIByName(t)
          }, n
        }(H);
      const Qu = Ju;
      var Yu = function() {
        function t() {}
        return t.ISO_8859_1 = H.ISO8859_1, t
      }();
      const tf = Yu;
      var nf = function() {
        function t(t, n, r) {
          this.codewords = t, this.numcols = n, this.numrows = r, this.bits = new Uint8Array(n * r), x.fill(this.bits, 2)
        }
        return t.prototype.getNumrows = function() {
          return this.numrows
        }, t.prototype.getNumcols = function() {
          return this.numcols
        }, t.prototype.getBits = function() {
          return this.bits
        }, t.prototype.getBit = function(t, n) {
          return 1 === this.bits[n * this.numcols + t]
        }, t.prototype.setBit = function(t, n, r) {
          this.bits[n * this.numcols + t] = r ? 1 : 0
        }, t.prototype.noBit = function(t, n) {
          return 2 === this.bits[n * this.numcols + t]
        }, t.prototype.place = function() {
          var t = 0,
            n = 4,
            r = 0;
          do {
            n === this.numrows && 0 === r && this.corner1(t++), n === this.numrows - 2 && 0 === r && this.numcols % 4 != 0 && this.corner2(t++), n === this.numrows - 2 && 0 === r && this.numcols % 8 == 4 && this.corner3(t++), n === this.numrows + 4 && 2 === r && this.numcols % 8 == 0 && this.corner4(t++);
            do {
              n < this.numrows && r >= 0 && this.noBit(r, n) && this.utah(n, r, t++), n -= 2, r += 2
            } while (n >= 0 && r < this.numcols);
            n++, r += 3;
            do {
              n >= 0 && r < this.numcols && this.noBit(r, n) && this.utah(n, r, t++), n += 2, r -= 2
            } while (n < this.numrows && r >= 0);
            n += 3, r++
          } while (n < this.numrows || r < this.numcols);
          this.noBit(this.numcols - 1, this.numrows - 1) && (this.setBit(this.numcols - 1, this.numrows - 1, !0), this.setBit(this.numcols - 2, this.numrows - 2, !0))
        }, t.prototype.module = function(t, n, r, i) {
          0 > t && (t += this.numrows, n += 4 - (this.numrows + 4) % 8), 0 > n && (n += this.numcols, t += 4 - (this.numcols + 4) % 8);
          var e = this.codewords.charCodeAt(r);
          e &= 1 << 8 - i, this.setBit(n, t, 0 !== e)
        }, t.prototype.utah = function(t, n, r) {
          this.module(t - 2, n - 2, r, 1), this.module(t - 2, n - 1, r, 2), this.module(t - 1, n - 2, r, 3), this.module(t - 1, n - 1, r, 4), this.module(t - 1, n, r, 5), this.module(t, n - 2, r, 6), this.module(t, n - 1, r, 7), this.module(t, n, r, 8)
        }, t.prototype.corner1 = function(t) {
          this.module(this.numrows - 1, 0, t, 1), this.module(this.numrows - 1, 1, t, 2), this.module(this.numrows - 1, 2, t, 3), this.module(0, this.numcols - 2, t, 4), this.module(0, this.numcols - 1, t, 5), this.module(1, this.numcols - 1, t, 6), this.module(2, this.numcols - 1, t, 7), this.module(3, this.numcols - 1, t, 8)
        }, t.prototype.corner2 = function(t) {
          this.module(this.numrows - 3, 0, t, 1), this.module(this.numrows - 2, 0, t, 2), this.module(this.numrows - 1, 0, t, 3), this.module(0, this.numcols - 4, t, 4), this.module(0, this.numcols - 3, t, 5), this.module(0, this.numcols - 2, t, 6), this.module(0, this.numcols - 1, t, 7), this.module(1, this.numcols - 1, t, 8)
        }, t.prototype.corner3 = function(t) {
          this.module(this.numrows - 3, 0, t, 1), this.module(this.numrows - 2, 0, t, 2), this.module(this.numrows - 1, 0, t, 3), this.module(0, this.numcols - 2, t, 4), this.module(0, this.numcols - 1, t, 5), this.module(1, this.numcols - 1, t, 6), this.module(2, this.numcols - 1, t, 7), this.module(3, this.numcols - 1, t, 8)
        }, t.prototype.corner4 = function(t) {
          this.module(this.numrows - 1, 0, t, 1), this.module(this.numrows - 1, this.numcols - 1, t, 2), this.module(0, this.numcols - 3, t, 3), this.module(0, this.numcols - 2, t, 4), this.module(0, this.numcols - 1, t, 5), this.module(1, this.numcols - 3, t, 6), this.module(1, this.numcols - 2, t, 7), this.module(1, this.numcols - 1, t, 8)
        }, t
      }();
      const rf = nf;
      var ef, of, uf = [5, 7, 10, 11, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 62, 68],
        ff = [
          [228, 48, 15, 111, 62],
          [23, 68, 144, 134, 240, 92, 254],
          [28, 24, 185, 166, 223, 248, 116, 255, 110, 61],
          [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120],
          [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242],
          [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185],
          [83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225, 48, 90, 188],
          [15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108, 82, 27, 174, 186, 172],
          [52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5, 172, 254, 124, 12, 181, 184, 96, 50, 193],
          [211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249, 121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255],
          [245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251, 80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184, 59, 25, 225, 98, 81, 112],
          [77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8, 175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54, 101, 248, 202, 69, 50, 150, 177, 226, 5, 9, 5],
          [245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188, 237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120, 100, 66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213, 92, 253, 225, 19],
          [175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215, 235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117, 203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245, 127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46],
          [242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108, 196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221, 175, 64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130, 188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47, 11, 204],
          [220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73, 127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15, 160, 227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96, 210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189, 64, 54, 108, 153, 132, 63, 96, 103, 82, 186]
        ],
        sf = (ef = function(t, n) {
          for (var r = 1, i = 0; 255 > i; i++) n[i] = r, t[r] = i, (r *= 2) >= 256 && (r ^= 301);
          return {
            LOG: t,
            ALOG: n
          }
        }([], []), ef.LOG),
        af = ef.ALOG;
      ! function(t) {
        t[t.FORCE_NONE = 0] = "FORCE_NONE", t[t.FORCE_SQUARE = 1] = "FORCE_SQUARE", t[t.FORCE_RECTANGLE = 2] = "FORCE_RECTANGLE"
      }(of || (of = {}));
      var hf = "[)>05",
        cf = "[)>06",
        lf = "",
        wf = function() {
          function t() {}
          return t.encodeECC200 = function(t, n) {
            if (t.length !== n.getDataCapacity()) throw Error("The number of codewords does not match the selected symbol");
            var r = new Q;
            r.append(t);
            var i = n.getInterleavedBlockCount();
            if (1 === i) {
              var e = this.createECCBlock(t, n.getErrorCodewords());
              r.append(e)
            } else {
              for (var o = [], u = [], f = 0; i > f; f++) o[f] = n.getDataLengthForInterleavedBlock(f + 1), u[f] = n.getErrorLengthForInterleavedBlock(f + 1);
              for (var s = 0; i > s; s++) {
                for (var a = new Q, h = s; h < n.getDataCapacity(); h += i) a.append(t.charAt(h));
                e = this.createECCBlock(a.toString(), u[s]);
                for (var c = 0, l = s; l < u[s] * i; l += i) r.setCharAt(n.getDataCapacity() + l, e.charAt(c++))
              }
            }
            return r.toString()
          }, t.createECCBlock = function(t, n) {
            for (var r = -1, i = 0; 16 > i; i++)
              if (uf[i] === n) {
                r = i;
                break
              } if (0 > r) throw Error("Illegal number of error correction codewords specified: " + n);
            var e = ff[r],
              o = [];
            for (i = 0; n > i; i++) o[i] = 0;
            for (i = 0; i < t.length; i++) {
              for (var u = o[n - 1] ^ t.charAt(i).charCodeAt(0), f = n - 1; f > 0; f--) 0 !== u && 0 !== e[f] ? o[f] = o[f - 1] ^ af[(sf[u] + sf[e[f]]) % 255] : o[f] = o[f - 1];
              0 !== u && 0 !== e[0] ? o[0] = af[(sf[u] + sf[e[0]]) % 255] : o[0] = 0
            }
            var s = [];
            for (i = 0; n > i; i++) s[i] = o[n - i - 1];
            return s.map(function(t) {
              return String.fromCharCode(t)
            }).join("")
          }, t
        }();
      const vf = wf;
      var yf = function() {
          function t() {}
          return t.prototype.getEncodingMode = function() {
            return 0
          }, t.prototype.encode = function(t) {
            if (2 > jf.determineConsecutiveDigitCount(t.getMessage(), t.pos)) {
              var n = t.getCurrentChar(),
                r = jf.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode());
              if (r !== this.getEncodingMode()) switch (r) {
                case 5:
                  return t.writeCodeword(231), void t.signalEncoderChange(5);
                case 1:
                  return t.writeCodeword(230), void t.signalEncoderChange(1);
                case 3:
                  t.writeCodeword(238), t.signalEncoderChange(3);
                  break;
                case 2:
                  t.writeCodeword(239), t.signalEncoderChange(2);
                  break;
                case 4:
                  t.writeCodeword(240), t.signalEncoderChange(4);
                  break;
                default:
                  throw Error("Illegal mode: " + r)
              } else jf.isExtendedASCII(n) ? (t.writeCodeword(235), t.writeCodeword(n - 128 + 1), t.pos++) : (t.writeCodeword(n + 1), t.pos++)
            } else t.writeCodeword(this.encodeASCIIDigits(t.getMessage().charCodeAt(t.pos), t.getMessage().charCodeAt(t.pos + 1))), t.pos += 2
          }, t.prototype.encodeASCIIDigits = function(t, n) {
            if (jf.isDigit(t) && jf.isDigit(n)) return 10 * (t - 48) + (n - 48) + 130;
            throw Error("not digits: " + t + n)
          }, t
        }(),
        df = function() {
          function t() {}
          return t.prototype.getEncodingMode = function() {
            return 5
          }, t.prototype.encode = function(t) {
            var n = new Q;
            for (n.append(0); t.hasMoreCharacters();) {
              var r = t.getCurrentChar();
              if (n.append(r), t.pos++, jf.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                t.signalEncoderChange(0);
                break
              }
            }
            var i = n.length() - 1,
              e = t.getCodewordCount() + i + 1;
            t.updateSymbolInfo(e);
            var o = t.getSymbolInfo().getDataCapacity() - e > 0;
            if (t.hasMoreCharacters() || o)
              if (i > 249) {
                if (i > 1555) throw Error("Message length not in valid ranges: " + i);
                n.setCharAt(0, Z.getCharAt(Math.floor(i / 250) + 249)), n.insert(1, Z.getCharAt(i % 250))
              } else n.setCharAt(0, Z.getCharAt(i));
            var u = 0;
            for (r = n.length(); r > u; u++) t.writeCodeword(this.randomize255State(n.charAt(u).charCodeAt(0), t.getCodewordCount() + 1))
          }, t.prototype.randomize255State = function(t, n) {
            var r = t + (149 * n % 255 + 1);
            return r > 255 ? r - 256 : r
          }, t
        }(),
        bf = function() {
          function t() {}
          return t.prototype.getEncodingMode = function() {
            return 1
          }, t.prototype.encodeMaximal = function(t) {
            for (var n = new Q, r = 0, i = t.pos, e = 0; t.hasMoreCharacters();) {
              var o = t.getCurrentChar();
              t.pos++, r = this.encodeChar(o, n), n.length() % 3 == 0 && (i = t.pos, e = n.length())
            }
            if (e !== n.length()) {
              var u = Math.floor(n.length() / 3 * 2),
                f = Math.floor(t.getCodewordCount() + u + 1);
              t.updateSymbolInfo(f);
              var s = t.getSymbolInfo().getDataCapacity() - f,
                a = Math.floor(n.length() % 3);
              (2 === a && 2 !== s || 1 === a && (r > 3 || 1 !== s)) && (t.pos = i)
            }
            n.length() > 0 && t.writeCodeword(230), this.handleEOD(t, n)
          }, t.prototype.encode = function(t) {
            for (var n = new Q; t.hasMoreCharacters();) {
              var r = t.getCurrentChar();
              t.pos++;
              var i = this.encodeChar(r, n),
                e = 2 * Math.floor(n.length() / 3),
                o = t.getCodewordCount() + e;
              t.updateSymbolInfo(o);
              var u = t.getSymbolInfo().getDataCapacity() - o;
              if (!t.hasMoreCharacters()) {
                var f = new Q;
                for (n.length() % 3 == 2 && 2 !== u && (i = this.backtrackOneCharacter(t, n, f, i)); n.length() % 3 == 1 && (i > 3 || 1 !== u);) i = this.backtrackOneCharacter(t, n, f, i);
                break
              }
              if (n.length() % 3 == 0 && jf.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                t.signalEncoderChange(0);
                break
              }
            }
            this.handleEOD(t, n)
          }, t.prototype.backtrackOneCharacter = function(t, n, r, i) {
            var e = n.length(),
              o = n.toString().substring(0, e - i);
            n.setLengthToZero(), n.append(o), t.pos--;
            var u = t.getCurrentChar();
            return i = this.encodeChar(u, r), t.resetSymbolInfo(), i
          }, t.prototype.writeNextTriplet = function(t, n) {
            t.writeCodewords(this.encodeToCodewords(n.toString()));
            var r = n.toString().substring(3);
            n.setLengthToZero(), n.append(r)
          }, t.prototype.handleEOD = function(t, n) {
            var r = Math.floor(n.length() / 3 * 2),
              i = n.length() % 3,
              e = t.getCodewordCount() + r;
            t.updateSymbolInfo(e);
            var o = t.getSymbolInfo().getDataCapacity() - e;
            if (2 === i) {
              for (n.append("\0"); n.length() >= 3;) this.writeNextTriplet(t, n);
              t.hasMoreCharacters() && t.writeCodeword(254)
            } else if (1 === o && 1 === i) {
              for (; n.length() >= 3;) this.writeNextTriplet(t, n);
              t.hasMoreCharacters() && t.writeCodeword(254), t.pos--
            } else {
              if (0 !== i) throw Error("Unexpected case. Please report!");
              for (; n.length() >= 3;) this.writeNextTriplet(t, n);
              (o > 0 || t.hasMoreCharacters()) && t.writeCodeword(254)
            }
            t.signalEncoderChange(0)
          }, t.prototype.encodeChar = function(t, n) {
            return 32 === t ? (n.append(3), 1) : 48 > t || t > 57 ? 65 > t || t > 90 ? 32 > t ? (n.append(0), n.append(t), 2) : t > 47 ? t > 64 ? t > 95 ? t > 127 ? (n.append("1"), 2 + this.encodeChar(t - 128, n)) : (n.append(2), n.append(t - 96), 2) : (n.append(1), n.append(t - 91 + 22), 2) : (n.append(1), n.append(t - 58 + 15), 2) : (n.append(1), n.append(t - 33), 2) : (n.append(t - 65 + 14), 1) : (n.append(t - 48 + 4), 1)
          }, t.prototype.encodeToCodewords = function(t) {
            var n = 1600 * t.charCodeAt(0) + 40 * t.charCodeAt(1) + t.charCodeAt(2) + 1,
              r = n / 256,
              i = n % 256,
              e = new Q;
            return e.append(r), e.append(i), e.toString()
          }, t
        }(),
        Af = function() {
          function t() {}
          return t.prototype.getEncodingMode = function() {
            return 4
          }, t.prototype.encode = function(t) {
            for (var n = new Q; t.hasMoreCharacters();) {
              var r = t.getCurrentChar();
              if (this.encodeChar(r, n), t.pos++, n.length() >= 4) {
                t.writeCodewords(this.encodeToCodewords(n.toString()));
                var i = n.toString().substring(4);
                if (n.setLengthToZero(), n.append(i), jf.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                  t.signalEncoderChange(0);
                  break
                }
              }
            }
            n.append(Z.getCharAt(31)), this.handleEOD(t, n)
          }, t.prototype.handleEOD = function(t, n) {
            try {
              var r = n.length();
              if (0 === r) return;
              if (1 === r) {
                t.updateSymbolInfo();
                var i = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount(),
                  e = t.getRemainingCharacters();
                if (e > i && (t.updateSymbolInfo(t.getCodewordCount() + 1), i = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()), i >= e && 2 >= i) return
              }
              if (r > 4) throw Error("Count must not exceed 4");
              var o = r - 1,
                u = this.encodeToCodewords(n.toString()),
                f = !t.hasMoreCharacters() && 2 >= o;
              o > 2 || (t.updateSymbolInfo(t.getCodewordCount() + o), (i = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()) >= 3 && (f = !1, t.updateSymbolInfo(t.getCodewordCount() + u.length))), f ? (t.resetSymbolInfo(), t.pos -= o) : t.writeCodewords(u)
            } finally {
              t.signalEncoderChange(0)
            }
          }, t.prototype.encodeChar = function(t, n) {
            32 > t || t > 63 ? 64 > t || t > 94 ? jf.illegalCharacter(Z.getCharAt(t)) : n.append(Z.getCharAt(t - 64)) : n.append(t)
          }, t.prototype.encodeToCodewords = function(t) {
            var n = t.length;
            if (0 === n) throw Error("StringBuilder must not be empty");
            var r = (t.charAt(0).charCodeAt(0) << 18) + ((2 > n ? 0 : t.charAt(1).charCodeAt(0)) << 12) + ((3 > n ? 0 : t.charAt(2).charCodeAt(0)) << 6) + (4 > n ? 0 : t.charAt(3).charCodeAt(0)),
              i = r >> 16 & 255,
              e = r >> 8 & 255,
              o = 255 & r,
              u = new Q;
            return u.append(i), n >= 2 && u.append(e), n >= 3 && u.append(o), u.toString()
          }, t
        }(),
        pf = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        mf = function() {
          function t(t, n, r, i, e, o, u, f) {
            void 0 === u && (u = 0), void 0 === f && (f = 0), this.rectangular = t, this.dataCapacity = n, this.errorCodewords = r, this.matrixWidth = i, this.matrixHeight = e, this.dataRegions = o, this.rsBlockData = u, this.rsBlockError = f
          }
          return t.lookup = function(t, n, r, i, e) {
            var o, u;
            void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === e && (e = !0);
            try {
              for (var f = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(gf), s = f.next(); !s.done; s = f.next()) {
                var a = s.value;
                if ((1 !== n || !a.rectangular) && (2 !== n || a.rectangular) && (null == r || a.getSymbolWidth() >= r.getWidth() && a.getSymbolHeight() >= r.getHeight()) && (null == i || a.getSymbolWidth() <= i.getWidth() && a.getSymbolHeight() <= i.getHeight()) && t <= a.dataCapacity) return a
              }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                s && !s.done && (u = f.return) && u.call(f)
              } finally {
                if (o) throw o.error
              }
            }
            if (e) throw Error("Can't find a symbol arrangement that matches the message. Data codewords: " + t);
            return null
          }, t.prototype.getHorizontalDataRegions = function() {
            switch (this.dataRegions) {
              case 1:
                return 1;
              case 2:
              case 4:
                return 2;
              case 16:
                return 4;
              case 36:
                return 6;
              default:
                throw Error("Cannot handle this number of data regions")
            }
          }, t.prototype.getVerticalDataRegions = function() {
            switch (this.dataRegions) {
              case 1:
              case 2:
                return 1;
              case 4:
                return 2;
              case 16:
                return 4;
              case 36:
                return 6;
              default:
                throw Error("Cannot handle this number of data regions")
            }
          }, t.prototype.getSymbolDataWidth = function() {
            return this.getHorizontalDataRegions() * this.matrixWidth
          }, t.prototype.getSymbolDataHeight = function() {
            return this.getVerticalDataRegions() * this.matrixHeight
          }, t.prototype.getSymbolWidth = function() {
            return this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions()
          }, t.prototype.getSymbolHeight = function() {
            return this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions()
          }, t.prototype.getCodewordCount = function() {
            return this.dataCapacity + this.errorCodewords
          }, t.prototype.getInterleavedBlockCount = function() {
            return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1
          }, t.prototype.getDataCapacity = function() {
            return this.dataCapacity
          }, t.prototype.getErrorCodewords = function() {
            return this.errorCodewords
          }, t.prototype.getDataLengthForInterleavedBlock = function(t) {
            return this.rsBlockData
          }, t.prototype.getErrorLengthForInterleavedBlock = function(t) {
            return this.rsBlockError
          }, t
        }();
      const If = mf;
      var _f = function(t) {
          function n() {
            return t.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this
          }
          return pf(n, t), n.prototype.getInterleavedBlockCount = function() {
            return 10
          }, n.prototype.getDataLengthForInterleavedBlock = function(t) {
            return t > 8 ? 155 : 156
          }, n
        }(mf),
        gf = [new mf(!1, 3, 5, 8, 8, 1), new mf(!1, 5, 7, 10, 10, 1), new mf(!0, 5, 7, 16, 6, 1), new mf(!1, 8, 10, 12, 12, 1), new mf(!0, 10, 11, 14, 6, 2), new mf(!1, 12, 12, 14, 14, 1), new mf(!0, 16, 14, 24, 10, 1), new mf(!1, 18, 14, 16, 16, 1), new mf(!1, 22, 18, 18, 18, 1), new mf(!0, 22, 18, 16, 10, 2), new mf(!1, 30, 20, 20, 20, 1), new mf(!0, 32, 24, 16, 14, 2), new mf(!1, 36, 24, 22, 22, 1), new mf(!1, 44, 28, 24, 24, 1), new mf(!0, 49, 28, 22, 14, 2), new mf(!1, 62, 36, 14, 14, 4), new mf(!1, 86, 42, 16, 16, 4), new mf(!1, 114, 48, 18, 18, 4), new mf(!1, 144, 56, 20, 20, 4), new mf(!1, 174, 68, 22, 22, 4), new mf(!1, 204, 84, 24, 24, 4, 102, 42), new mf(!1, 280, 112, 14, 14, 16, 140, 56), new mf(!1, 368, 144, 16, 16, 16, 92, 36), new mf(!1, 456, 192, 18, 18, 16, 114, 48), new mf(!1, 576, 224, 20, 20, 16, 144, 56), new mf(!1, 696, 272, 22, 22, 16, 174, 68), new mf(!1, 816, 336, 24, 24, 16, 136, 56), new mf(!1, 1050, 408, 18, 18, 36, 175, 68), new mf(!1, 1304, 496, 20, 20, 36, 163, 62), new _f],
        Sf = function() {
          function t(t) {
            this.msg = t, this.pos = 0, this.skipAtEnd = 0;
            for (var n = t.split("").map(function(t) {
                return t.charCodeAt(0)
              }), r = new Q, i = 0, e = n.length; e > i; i++) {
              var o = String.fromCharCode(255 & n[i]);
              if ("?" === o && "?" !== t.charAt(i)) throw Error("Message contains characters outside ISO-8859-1 encoding.");
              r.append(o)
            }
            this.msg = r.toString(), this.shape = 0, this.codewords = new Q, this.newEncoding = -1
          }
          return t.prototype.setSymbolShape = function(t) {
            this.shape = t
          }, t.prototype.setSizeConstraints = function(t, n) {
            this.minSize = t, this.maxSize = n
          }, t.prototype.getMessage = function() {
            return this.msg
          }, t.prototype.setSkipAtEnd = function(t) {
            this.skipAtEnd = t
          }, t.prototype.getCurrentChar = function() {
            return this.msg.charCodeAt(this.pos)
          }, t.prototype.getCurrent = function() {
            return this.msg.charCodeAt(this.pos)
          }, t.prototype.getCodewords = function() {
            return this.codewords
          }, t.prototype.writeCodewords = function(t) {
            this.codewords.append(t)
          }, t.prototype.writeCodeword = function(t) {
            this.codewords.append(t)
          }, t.prototype.getCodewordCount = function() {
            return this.codewords.length()
          }, t.prototype.getNewEncoding = function() {
            return this.newEncoding
          }, t.prototype.signalEncoderChange = function(t) {
            this.newEncoding = t
          }, t.prototype.resetEncoderSignal = function() {
            this.newEncoding = -1
          }, t.prototype.hasMoreCharacters = function() {
            return this.pos < this.getTotalMessageCharCount()
          }, t.prototype.getTotalMessageCharCount = function() {
            return this.msg.length - this.skipAtEnd
          }, t.prototype.getRemainingCharacters = function() {
            return this.getTotalMessageCharCount() - this.pos
          }, t.prototype.getSymbolInfo = function() {
            return this.symbolInfo
          }, t.prototype.updateSymbolInfo = function(t) {
            void 0 === t && (t = this.getCodewordCount()), (null == this.symbolInfo || t > this.symbolInfo.getDataCapacity()) && (this.symbolInfo = If.lookup(t, this.shape, this.minSize, this.maxSize, !0))
          }, t.prototype.resetSymbolInfo = function() {
            this.symbolInfo = null
          }, t
        }(),
        Mf = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Ef = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Mf(n, t), n.prototype.getEncodingMode = function() {
            return 3
          }, n.prototype.encode = function(t) {
            for (var n = new Q; t.hasMoreCharacters();) {
              var r = t.getCurrentChar();
              if (t.pos++, this.encodeChar(r, n), n.length() % 3 == 0 && (this.writeNextTriplet(t, n), jf.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode())) {
                t.signalEncoderChange(0);
                break
              }
            }
            this.handleEOD(t, n)
          }, n.prototype.encodeChar = function(t, n) {
            switch (t) {
              case 13:
                n.append(0);
                break;
              case 42:
                n.append(1);
                break;
              case 62:
                n.append(2);
                break;
              case 32:
                n.append(3);
                break;
              default:
                48 > t || t > 57 ? 65 > t || t > 90 ? jf.illegalCharacter(Z.getCharAt(t)) : n.append(t - 65 + 14) : n.append(t - 48 + 4)
            }
            return 1
          }, n.prototype.handleEOD = function(t, n) {
            t.updateSymbolInfo();
            var r = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount(),
              i = n.length();
            t.pos -= i, (t.getRemainingCharacters() > 1 || r > 1 || t.getRemainingCharacters() !== r) && t.writeCodeword(254), 0 > t.getNewEncoding() && t.signalEncoderChange(0)
          }, n
        }(bf),
        Of = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        kf = function(t) {
          function n() {
            return null !== t && t.apply(this, arguments) || this
          }
          return Of(n, t), n.prototype.getEncodingMode = function() {
            return 2
          }, n.prototype.encodeChar = function(t, n) {
            return 32 === t ? (n.append(3), 1) : 48 > t || t > 57 ? 97 > t || t > 122 ? 32 > t ? (n.append(0), n.append(t), 2) : t > 47 ? t > 64 ? 91 > t || t > 95 ? 96 === t ? (n.append(2), n.append(0), 2) : t > 90 ? t > 127 ? (n.append("1"), 2 + this.encodeChar(t - 128, n)) : (n.append(2), n.append(t - 123 + 27), 2) : (n.append(2), n.append(t - 65 + 1), 2) : (n.append(1), n.append(t - 91 + 22), 2) : (n.append(1), n.append(t - 58 + 15), 2) : (n.append(1), n.append(t - 33), 2) : (n.append(t - 97 + 14), 1) : (n.append(t - 48 + 4), 1)
          }, n
        }(bf),
        Tf = function() {
          function t() {}
          return t.randomize253State = function(t) {
            var n = 130 + 149 * t % 253;
            return n > 254 ? n - 254 : n
          }, t.encodeHighLevel = function(t, n, r, i, e) {
            void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === e && (e = !1);
            var o = new bf,
              u = [new yf, o, new kf, new Ef, new Af, new df],
              f = new Sf(t);
            f.setSymbolShape(n), f.setSizeConstraints(r, i), t.startsWith(hf) && t.endsWith(lf) ? (f.writeCodeword(236), f.setSkipAtEnd(2), f.pos += 7) : t.startsWith(cf) && t.endsWith(lf) && (f.writeCodeword(237), f.setSkipAtEnd(2), f.pos += 7);
            var s = 0;
            for (e && (o.encodeMaximal(f), s = f.getNewEncoding(), f.resetEncoderSignal()); f.hasMoreCharacters();) u[s].encode(f), f.getNewEncoding() >= 0 && (s = f.getNewEncoding(), f.resetEncoderSignal());
            var a = f.getCodewordCount();
            f.updateSymbolInfo();
            var h = f.getSymbolInfo().getDataCapacity();
            h > a && 0 !== s && 5 !== s && 4 !== s && f.writeCodeword("þ");
            var c = f.getCodewords();
            for (c.length() < h && c.append(129); c.length() < h;) c.append(this.randomize253State(c.length() + 1));
            return f.getCodewords().toString()
          }, t.lookAheadTest = function(t, n, r) {
            var i = this.lookAheadTestIntern(t, n, r);
            if (3 === r && 3 === i) {
              for (var e = Math.min(n + 3, t.length), o = n; e > o; o++)
                if (!this.isNativeX12(t.charCodeAt(o))) return 0
            } else if (4 === r && 4 === i)
              for (e = Math.min(n + 4, t.length), o = n; e > o; o++)
                if (!this.isNativeEDIFACT(t.charCodeAt(o))) return 0;
            return i
          }, t.lookAheadTestIntern = function(t, n, r) {
            if (n >= t.length) return r;
            var i;
            0 === r ? i = [0, 1, 1, 1, 1, 1.25] : (i = [1, 2, 2, 2, 2, 2.25])[r] = 0;
            for (var e = 0, o = new Uint8Array(6), u = [];;) {
              if (n + e === t.length) {
                x.fill(o, 0), x.fill(u, 0);
                var f = this.findMinimums(i, u, R.MAX_VALUE, o),
                  s = this.getMinimumCount(o);
                if (u[0] === f) return 0;
                if (1 === s) {
                  if (o[5] > 0) return 5;
                  if (o[4] > 0) return 4;
                  if (o[2] > 0) return 2;
                  if (o[3] > 0) return 3
                }
                return 1
              }
              var a = t.charCodeAt(n + e);
              if (e++, this.isDigit(a) ? i[0] += .5 : this.isExtendedASCII(a) ? (i[0] = Math.ceil(i[0]), i[0] += 2) : (i[0] = Math.ceil(i[0]), i[0]++), this.isNativeC40(a) ? i[1] += 2 / 3 : this.isExtendedASCII(a) ? i[1] += 8 / 3 : i[1] += 4 / 3, this.isNativeText(a) ? i[2] += 2 / 3 : this.isExtendedASCII(a) ? i[2] += 8 / 3 : i[2] += 4 / 3, this.isNativeX12(a) ? i[3] += 2 / 3 : this.isExtendedASCII(a) ? i[3] += 13 / 3 : i[3] += 10 / 3, this.isNativeEDIFACT(a) ? i[4] += 3 / 4 : this.isExtendedASCII(a) ? i[4] += 4.25 : i[4] += 3.25, this.isSpecialB256(a) ? i[5] += 4 : i[5]++, e >= 4) {
                if (x.fill(o, 0), x.fill(u, 0), this.findMinimums(i, u, R.MAX_VALUE, o), u[0] < this.min(u[5], u[1], u[2], u[3], u[4])) return 0;
                if (u[0] > u[5] || u[5] + 1 < this.min(u[1], u[2], u[3], u[4])) return 5;
                if (u[4] + 1 < this.min(u[5], u[1], u[2], u[3], u[0])) return 4;
                if (u[2] + 1 < this.min(u[5], u[1], u[4], u[3], u[0])) return 2;
                if (u[3] + 1 < this.min(u[5], u[1], u[4], u[2], u[0])) return 3;
                if (u[1] + 1 < this.min(u[0], u[5], u[4], u[2])) {
                  if (u[3] > u[1]) return 1;
                  if (u[1] === u[3]) {
                    for (var h = n + e + 1; h < t.length;) {
                      var c = t.charCodeAt(h);
                      if (this.isX12TermSep(c)) return 3;
                      if (!this.isNativeX12(c)) break;
                      h++
                    }
                    return 1
                  }
                }
              }
            }
          }, t.min = function(t, n, r, i, e) {
            var o = Math.min(t, Math.min(n, Math.min(r, i)));
            return void 0 === e ? o : Math.min(o, e)
          }, t.findMinimums = function(t, n, r, i) {
            for (var e = 0; 6 > e; e++) {
              var o = n[e] = Math.ceil(t[e]);
              r > o && (r = o, x.fill(i, 0)), r === o && (i[e] = i[e] + 1)
            }
            return r
          }, t.getMinimumCount = function(t) {
            for (var n = 0, r = 0; 6 > r; r++) n += t[r];
            return n || 0
          }, t.isDigit = function(t) {
            return t >= 48 && 57 >= t
          }, t.isExtendedASCII = function(t) {
            return t >= 128 && 255 >= t
          }, t.isNativeC40 = function(t) {
            return 32 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t
          }, t.isNativeText = function(t) {
            return 32 === t || t >= 48 && 57 >= t || t >= 97 && 122 >= t
          }, t.isNativeX12 = function(t) {
            return this.isX12TermSep(t) || 32 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t
          }, t.isX12TermSep = function(t) {
            return 13 === t || 42 === t || 62 === t
          }, t.isNativeEDIFACT = function(t) {
            return t >= 32 && 94 >= t
          }, t.isSpecialB256 = function(t) {
            return !1
          }, t.determineConsecutiveDigitCount = function(t, n) {
            void 0 === n && (n = 0);
            for (var r = t.length, i = n; r > i && this.isDigit(t.charCodeAt(i));) i++;
            return i - n
          }, t.illegalCharacter = function(t) {
            var n = R.toHexString(t.charCodeAt(0));
            throw n = "0000".substring(0, 4 - n.length) + n, Error("Illegal character: " + t + " (0x" + n + ")")
          }, t
        }();
      const jf = Tf;
      var xf, Cf = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Rf = function() {
          function t(t) {
            this.charset = t, this.name = t.name
          }
          return t.prototype.canEncode = function(t) {
            try {
              return null != K.encode(t, this.charset)
            } catch {
              return !1
            }
          }, t
        }(),
        Nf = function() {
          function t(t, n, r) {
            var i, e, o, u, f, s;
            this.ENCODERS = ["IBM437", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "windows-1250", "windows-1251", "windows-1252", "windows-1256", "Shift_JIS"].map(function(t) {
              return new Rf(Qu.forName(t))
            }), this.encoders = [];
            var a = [];
            a.push(new Rf(tf.ISO_8859_1));
            for (var h = null != n && n.name.startsWith("UTF"), c = 0; c < t.length; c++) {
              var l = !1;
              try {
                for (var w = (i = void 0, Cf(a)), v = w.next(); !v.done; v = w.next()) {
                  var y = v.value,
                    d = t.charAt(c);
                  if (d.charCodeAt(0) === r || y.canEncode(d)) {
                    l = !0;
                    break
                  }
                }
              } catch (t) {
                i = {
                  error: t
                }
              } finally {
                try {
                  v && !v.done && (e = w.return) && e.call(w)
                } finally {
                  if (i) throw i.error
                }
              }
              if (!l) try {
                for (var b = (o = void 0, Cf(this.ENCODERS)), A = b.next(); !A.done; A = b.next())
                  if ((y = A.value).canEncode(t.charAt(c))) {
                    a.push(y), l = !0;
                    break
                  }
              } catch (t) {
                o = {
                  error: t
                }
              } finally {
                try {
                  A && !A.done && (u = b.return) && u.call(b)
                } finally {
                  if (o) throw o.error
                }
              }
              l || (h = !0)
            }
            if (1 !== a.length || h) {
              this.encoders = [];
              var p = 0;
              try {
                for (var m = Cf(a), I = m.next(); !I.done; I = m.next()) y = I.value, this.encoders[p++] = y
              } catch (t) {
                f = {
                  error: t
                }
              } finally {
                try {
                  I && !I.done && (s = m.return) && s.call(m)
                } finally {
                  if (f) throw f.error
                }
              }
            } else this.encoders = [a[0]];
            var _ = -1;
            if (null != n)
              for (c = 0; c < this.encoders.length; c++)
                if (null != this.encoders[c] && n.name === this.encoders[c].name) {
                  _ = c;
                  break
                } this.priorityEncoderIndex = _
          }
          return t.prototype.length = function() {
            return this.encoders.length
          }, t.prototype.getCharsetName = function(t) {
            if (t >= this.length()) throw Error("index must be less than length");
            return this.encoders[t].name
          }, t.prototype.getCharset = function(t) {
            if (t >= this.length()) throw Error("index must be less than length");
            return this.encoders[t].charset
          }, t.prototype.getECIValue = function(t) {
            return this.encoders[t].charset.getValueIdentifier()
          }, t.prototype.getPriorityEncoderIndex = function() {
            return this.priorityEncoderIndex
          }, t.prototype.canEncode = function(t, n) {
            if (n >= this.length()) throw Error("index must be less than length");
            return !0
          }, t.prototype.encode = function(t, n) {
            if (n >= this.length()) throw Error("index must be less than length");
            return K.encode(Z.getCharAt(t), this.encoders[n].name)
          }, t
        }(),
        Uf = function() {
          function t(t, n, r) {
            this.fnc1 = r;
            var i = new Nf(t, n, r);
            if (1 === i.length())
              for (var e = 0; e < this.bytes.length; e++) {
                var o = t.charAt(e).charCodeAt(0);
                this.bytes[e] = o === r ? 1e3 : o
              } else this.bytes = this.encodeMinimally(t, i, r)
          }
          return t.prototype.getFNC1Character = function() {
            return this.fnc1
          }, t.prototype.length = function() {
            return this.bytes.length
          }, t.prototype.haveNCharacters = function(t, n) {
            if (t + n - 1 >= this.bytes.length) return !1;
            for (var r = 0; n > r; r++)
              if (this.isECI(t + r)) return !1;
            return !0
          }, t.prototype.charAt = function(t) {
            if (0 > t || t >= this.length()) throw Error("" + t);
            if (this.isECI(t)) throw Error("value at " + t + " is not a character but an ECI");
            return this.isFNC1(t) ? this.fnc1 : this.bytes[t]
          }, t.prototype.subSequence = function(t, n) {
            if (0 > t || t > n || n > this.length()) throw Error("" + t);
            for (var r = new Q, i = t; n > i; i++) {
              if (this.isECI(i)) throw Error("value at " + i + " is not a character but an ECI");
              r.append(this.charAt(i))
            }
            return r.toString()
          }, t.prototype.isECI = function(t) {
            if (0 > t || t >= this.length()) throw Error("" + t);
            return this.bytes[t] > 255 && 999 >= this.bytes[t]
          }, t.prototype.isFNC1 = function(t) {
            if (0 > t || t >= this.length()) throw Error("" + t);
            return 1e3 === this.bytes[t]
          }, t.prototype.getECIValue = function(t) {
            if (0 > t || t >= this.length()) throw Error("" + t);
            if (!this.isECI(t)) throw Error("value at " + t + " is not an ECI but a character");
            return this.bytes[t] - 256
          }, t.prototype.addEdge = function(t, n, r) {
            (null == t[n][r.encoderIndex] || t[n][r.encoderIndex].cachedTotalSize > r.cachedTotalSize) && (t[n][r.encoderIndex] = r)
          }, t.prototype.addEdges = function(t, n, r, i, e, o) {
            var u = t.charAt(i).charCodeAt(0),
              f = 0,
              s = n.length();
            n.getPriorityEncoderIndex() >= 0 && (u === o || n.canEncode(u, n.getPriorityEncoderIndex())) && (s = (f = n.getPriorityEncoderIndex()) + 1);
            for (var a = f; s > a; a++)(u === o || n.canEncode(u, a)) && this.addEdge(r, i + 1, new Df(u, n, a, e, o))
          }, t.prototype.encodeMinimally = function(t, n, r) {
            var i = t.length,
              e = new(Df[i + 1][n.length()]);
            this.addEdges(t, n, e, 0, null, r);
            for (var o = 1; i >= o; o++) {
              for (var u = 0; u < n.length(); u++) null != e[o][u] && i > o && this.addEdges(t, n, e, o, e[o][u], r);
              for (u = 0; u < n.length(); u++) e[o - 1][u] = null
            }
            var f = -1,
              s = R.MAX_VALUE;
            for (u = 0; u < n.length(); u++)
              if (null != e[i][u]) {
                var a = e[i][u];
                a.cachedTotalSize < s && (s = a.cachedTotalSize, f = u)
              } if (0 > f) throw Error('Failed to encode "' + t + '"');
            for (var h = [], c = e[i][f]; null != c;) {
              if (c.isFNC1()) h.unshift(1e3);
              else {
                var l = n.encode(c.c, c.encoderIndex);
                for (o = l.length - 1; o >= 0; o--) h.unshift(255 & l[o])
              }(null === c.previous ? 0 : c.previous.encoderIndex) !== c.encoderIndex && h.unshift(256 + n.getECIValue(c.encoderIndex)), c = c.previous
            }
            var w = [];
            for (o = 0; o < w.length; o++) w[o] = h[o];
            return w
          }, t
        }(),
        Df = function() {
          function t(t, n, r, i, e) {
            this.c = t, this.encoderSet = n, this.encoderIndex = r, this.previous = i, this.fnc1 = e, this.c = t === e ? 1e3 : t;
            var o = this.isFNC1() ? 1 : n.encode(t, r).length;
            (null === i ? 0 : i.encoderIndex) !== r && (o += 3), null != i && (o += i.cachedTotalSize), this.cachedTotalSize = o
          }
          return t.prototype.isFNC1 = function() {
            return 1e3 === this.c
          }, t
        }(),
        Bf = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Pf = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Lf = function(t, n) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var i, e, o = r.call(t),
            u = [];
          try {
            for (;
              (void 0 === n || n-- > 0) && !(i = o.next()).done;) u.push(i.value)
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o)
            } finally {
              if (e) throw e.error
            }
          }
          return u
        };
      ! function(t) {
        t[t.ASCII = 0] = "ASCII", t[t.C40 = 1] = "C40", t[t.TEXT = 2] = "TEXT", t[t.X12 = 3] = "X12", t[t.EDF = 4] = "EDF", t[t.B256 = 5] = "B256"
      }(xf || (xf = {}));
      var Ff = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"],
        Gf = function() {
          function t() {}
          return t.isExtendedASCII = function(t, n) {
            return t !== n && t >= 128 && 255 >= t
          }, t.isInC40Shift1Set = function(t) {
            return 31 >= t
          }, t.isInC40Shift2Set = function(t, n) {
            var r, i;
            try {
              for (var e = Pf(Ff), o = e.next(); !o.done; o = e.next())
                if (o.value.charCodeAt(0) === t) return !0
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                o && !o.done && (i = e.return) && i.call(e)
              } finally {
                if (r) throw r.error
              }
            }
            return t === n
          }, t.isInTextShift1Set = function(t) {
            return this.isInC40Shift1Set(t)
          }, t.isInTextShift2Set = function(t, n) {
            return this.isInC40Shift2Set(t, n)
          }, t.encodeHighLevel = function(t, n, r, i) {
            void 0 === n && (n = null), void 0 === r && (r = -1), void 0 === i && (i = 0);
            var e = 0;
            return t.startsWith(hf) && t.endsWith(lf) ? (e = 5, t = t.substring(7, t.length - 2)) : t.startsWith(cf) && t.endsWith(lf) && (e = 6, t = t.substring(7, t.length - 2)), decodeURIComponent(escape(String.fromCharCode.apply(String, function() {
              for (var t = [], n = 0; arguments.length > n; n++) t = t.concat(Lf(arguments[n]));
              return t
            }(this.encode(t, n, r, i, e)))))
          }, t.encode = function(t, n, r, i, e) {
            return this.encodeMinimally(new qf(t, n, r, i, e)).getBytes()
          }, t.addEdge = function(t, n) {
            var r = n.fromPosition + n.characterLength;
            (null === t[r][n.getEndMode()] || t[r][n.getEndMode()].cachedTotalSize > n.cachedTotalSize) && (t[r][n.getEndMode()] = n)
          }, t.getNumberOfC40Words = function(n, r, i, e) {
            for (var o = 0, u = r; u < n.length(); u++) {
              if (n.isECI(u)) return e[0] = 0, 0;
              var f = n.charAt(u);
              if (i && jf.isNativeC40(f) || !i && jf.isNativeText(f)) o++;
              else if (t.isExtendedASCII(f, n.getFNC1Character())) {
                var s = 255 & f;
                s >= 128 && (i && jf.isNativeC40(s - 128) || !i && jf.isNativeText(s - 128)) ? o += 3 : o += 4
              } else o += 2;
              if (o % 3 == 0 || (o - 2) % 3 == 0 && u + 1 === n.length()) return e[0] = u - r + 1, Math.ceil(o / 3)
            }
            return e[0] = 0, 0
          }, t.addEdges = function(n, r, i, e) {
            var o, u;
            if (n.isECI(i)) this.addEdge(r, new Hf(n, xf.ASCII, i, 1, e));
            else {
              var f, s = n.charAt(i);
              if (null === e || e.getEndMode() !== xf.EDF) {
                jf.isDigit(s) && n.haveNCharacters(i, 2) && jf.isDigit(n.charAt(i + 1)) ? this.addEdge(r, new Hf(n, xf.ASCII, i, 2, e)) : this.addEdge(r, new Hf(n, xf.ASCII, i, 1, e));
                var a = [xf.C40, xf.TEXT];
                try {
                  for (var h = Pf(a), c = h.next(); !c.done; c = h.next()) {
                    var l = c.value,
                      w = [];
                    t.getNumberOfC40Words(n, i, l === xf.C40, w) > 0 && this.addEdge(r, new Hf(n, l, i, w[0], e))
                  }
                } catch (t) {
                  o = {
                    error: t
                  }
                } finally {
                  try {
                    c && !c.done && (u = h.return) && u.call(h)
                  } finally {
                    if (o) throw o.error
                  }
                }
                n.haveNCharacters(i, 3) && jf.isNativeX12(n.charAt(i)) && jf.isNativeX12(n.charAt(i + 1)) && jf.isNativeX12(n.charAt(i + 2)) && this.addEdge(r, new Hf(n, xf.X12, i, 3, e)), this.addEdge(r, new Hf(n, xf.B256, i, 1, e))
              }
              for (f = 0; 3 > f; f++) {
                var v = i + f;
                if (!n.haveNCharacters(v, 1) || !jf.isNativeEDIFACT(n.charAt(v))) break;
                this.addEdge(r, new Hf(n, xf.EDF, i, f + 1, e))
              }
              3 === f && n.haveNCharacters(i, 4) && jf.isNativeEDIFACT(n.charAt(i + 3)) && this.addEdge(r, new Hf(n, xf.EDF, i, 4, e))
            }
          }, t.encodeMinimally = function(t) {
            var n = t.length(),
              r = Array(n + 1).fill(null).map(function() {
                return [, , , , , , ].fill(0)
              });
            this.addEdges(t, r, 0, null);
            for (var i = 1; n >= i; i++) {
              for (var e = 0; 6 > e; e++) null !== r[i][e] && n > i && this.addEdges(t, r, i, r[i][e]);
              for (e = 0; 6 > e; e++) r[i - 1][e] = null
            }
            var o = -1,
              u = R.MAX_VALUE;
            for (e = 0; 6 > e; e++)
              if (null !== r[n][e]) {
                var f = r[n][e],
                  s = 1 > e || e > 3 ? f.cachedTotalSize : f.cachedTotalSize + 1;
                u > s && (u = s, o = e)
              } if (0 > o) throw Error('Failed to encode "' + t + '"');
            return new zf(r[n][o])
          }, t
        }(),
        zf = function() {
          function t(t) {
            var n = t.input,
              r = 0,
              i = [],
              e = [],
              o = [];
            (t.mode === xf.C40 || t.mode === xf.TEXT || t.mode === xf.X12) && t.getEndMode() !== xf.ASCII && (r += this.prepend(Hf.getBytes(254), i));
            for (var u = t; null !== u;) r += this.prepend(u.getDataBytes(), i), (null === u.previous || u.getPreviousStartMode() !== u.getMode()) && (u.getMode() === xf.B256 && (r > 249 ? (i.unshift(r % 250), i.unshift(r / 250 + 249), r += 2) : (i.unshift(r), r++), e.push(i.length), o.push(r)), this.prepend(u.getLatchBytes(), i), r = 0), u = u.previous;
            5 === n.getMacroId() ? r += this.prepend(Hf.getBytes(236), i) : 6 === n.getMacroId() && (r += this.prepend(Hf.getBytes(237), i)), n.getFNC1Character() > 0 && (r += this.prepend(Hf.getBytes(232), i));
            for (var f = 0; f < e.length; f++) this.applyRandomPattern(i, i.length - e[f], o[f]);
            var s = t.getMinSymbolSize(i.length);
            for (i.length < s && i.push(129); i.length < s;) i.push(this.randomize253State(i.length + 1));
            for (this.bytes = new Uint8Array(i.length), f = 0; f < this.bytes.length; f++) this.bytes[f] = i[f]
          }
          return t.prototype.prepend = function(t, n) {
            for (var r = t.length - 1; r >= 0; r--) n.unshift(t[r]);
            return t.length
          }, t.prototype.randomize253State = function(t) {
            var n = 130 + 149 * t % 253;
            return n > 254 ? n - 254 : n
          }, t.prototype.applyRandomPattern = function(t, n, r) {
            for (var i = 0; r > i; i++) {
              var e = n + i,
                o = (255 & t[e]) + 149 * (e + 1) % 255 + 1;
              t[e] = o > 255 ? o - 256 : o
            }
          }, t.prototype.getBytes = function() {
            return this.bytes
          }, t
        }(),
        Hf = function() {
          function t(t, n, r, i, e) {
            if (this.input = t, this.mode = n, this.fromPosition = r, this.characterLength = i, this.previous = e, this.allCodewordCapacities = [3, 5, 8, 10, 12, 16, 18, 22, 30, 32, 36, 44, 49, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558], this.squareCodewordCapacities = [3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558], this.rectangularCodewordCapacities = [5, 10, 16, 33, 32, 49], r + i > t.length()) throw Error("Invalid edge");
            var o = null !== e ? e.cachedTotalSize : 0,
              u = this.getPreviousMode();
            switch (n) {
              case xf.ASCII:
                o++, (t.isECI(r) || Gf.isExtendedASCII(t.charAt(r), t.getFNC1Character())) && o++, (u === xf.C40 || u === xf.TEXT || u === xf.X12) && o++;
                break;
              case xf.B256:
                o++, (u !== xf.B256 || 250 === this.getB256Size()) && o++, u === xf.ASCII ? o++ : (u === xf.C40 || u === xf.TEXT || u === xf.X12) && (o += 2);
                break;
              case xf.C40:
              case xf.TEXT:
              case xf.X12:
                n === xf.X12 ? o += 2 : o += 2 * Gf.getNumberOfC40Words(t, r, n === xf.C40, []), u === xf.ASCII || u === xf.B256 ? o++ : u !== n && (u === xf.C40 || u === xf.TEXT || u === xf.X12) && (o += 2);
                break;
              case xf.EDF:
                o += 3, u === xf.ASCII || u === xf.B256 ? o++ : (u === xf.C40 || u === xf.TEXT || u === xf.X12) && (o += 2)
            }
            this.cachedTotalSize = o
          }
          return t.prototype.getB256Size = function() {
            for (var t = 0, n = this; null !== n && n.mode === xf.B256 && 250 >= t;) t++, n = n.previous;
            return t
          }, t.prototype.getPreviousStartMode = function() {
            return null === this.previous ? xf.ASCII : this.previous.mode
          }, t.prototype.getPreviousMode = function() {
            return null === this.previous ? xf.ASCII : this.previous.getEndMode()
          }, t.prototype.getEndMode = function() {
            if (this.mode === xf.EDF) {
              if (4 > this.characterLength) return xf.ASCII;
              if ((t = this.getLastASCII()) > 0 && this.getCodewordsRemaining(this.cachedTotalSize + t) <= 2 - t) return xf.ASCII
            }
            if (this.mode === xf.C40 || this.mode === xf.TEXT || this.mode === xf.X12) {
              if (this.fromPosition + this.characterLength >= this.input.length() && 0 === this.getCodewordsRemaining(this.cachedTotalSize)) return xf.ASCII;
              var t;
              if (1 === (t = this.getLastASCII()) && 0 === this.getCodewordsRemaining(this.cachedTotalSize + 1)) return xf.ASCII
            }
            return this.mode
          }, t.prototype.getMode = function() {
            return this.mode
          }, t.prototype.getLastASCII = function() {
            var t = this.input.length(),
              n = this.fromPosition + this.characterLength;
            return t - n > 4 || n >= t ? 0 : t - n === 1 ? Gf.isExtendedASCII(this.input.charAt(n), this.input.getFNC1Character()) ? 0 : 1 : t - n === 2 ? Gf.isExtendedASCII(this.input.charAt(n), this.input.getFNC1Character()) || Gf.isExtendedASCII(this.input.charAt(n + 1), this.input.getFNC1Character()) ? 0 : jf.isDigit(this.input.charAt(n)) && jf.isDigit(this.input.charAt(n + 1)) ? 1 : 2 : t - n === 3 ? jf.isDigit(this.input.charAt(n)) && jf.isDigit(this.input.charAt(n + 1)) && !Gf.isExtendedASCII(this.input.charAt(n + 2), this.input.getFNC1Character()) || jf.isDigit(this.input.charAt(n + 1)) && jf.isDigit(this.input.charAt(n + 2)) && !Gf.isExtendedASCII(this.input.charAt(n), this.input.getFNC1Character()) ? 2 : 0 : jf.isDigit(this.input.charAt(n)) && jf.isDigit(this.input.charAt(n + 1)) && jf.isDigit(this.input.charAt(n + 2)) && jf.isDigit(this.input.charAt(n + 3)) ? 2 : 0
          }, t.prototype.getMinSymbolSize = function(t) {
            var n, r, i, e, o, u;
            switch (this.input.getShapeHint()) {
              case 1:
                try {
                  for (var f = Pf(this.squareCodewordCapacities), s = f.next(); !s.done; s = f.next())
                    if ((w = s.value) >= t) return w
                } catch (t) {
                  n = {
                    error: t
                  }
                } finally {
                  try {
                    s && !s.done && (r = f.return) && r.call(f)
                  } finally {
                    if (n) throw n.error
                  }
                }
                break;
              case 2:
                try {
                  for (var a = Pf(this.rectangularCodewordCapacities), h = a.next(); !h.done; h = a.next())
                    if ((w = h.value) >= t) return w
                } catch (t) {
                  i = {
                    error: t
                  }
                } finally {
                  try {
                    h && !h.done && (e = a.return) && e.call(a)
                  } finally {
                    if (i) throw i.error
                  }
                }
            }
            try {
              for (var c = Pf(this.allCodewordCapacities), l = c.next(); !l.done; l = c.next()) {
                var w;
                if ((w = l.value) >= t) return w
              }
            } catch (t) {
              o = {
                error: t
              }
            } finally {
              try {
                l && !l.done && (u = c.return) && u.call(c)
              } finally {
                if (o) throw o.error
              }
            }
            return this.allCodewordCapacities[this.allCodewordCapacities.length - 1]
          }, t.prototype.getCodewordsRemaining = function(t) {
            return this.getMinSymbolSize(t) - t
          }, t.getBytes = function(t, n) {
            var r = new Uint8Array(n ? 2 : 1);
            return r[0] = t, n && (r[1] = n), r
          }, t.prototype.setC40Word = function(t, n, r, i, e) {
            var o = 1600 * (255 & r) + 40 * (255 & i) + (255 & e) + 1;
            t[n] = o / 256, t[n + 1] = o % 256
          }, t.prototype.getX12Value = function(t) {
            return 13 === t ? 0 : 42 === t ? 1 : 62 === t ? 2 : 32 === t ? 3 : 48 > t || t > 57 ? 65 > t || t > 90 ? t : t - 51 : t - 44
          }, t.prototype.getX12Words = function() {
            if (this.characterLength % 3 != 0) throw Error("X12 words must be a multiple of 3");
            for (var t = new Uint8Array(this.characterLength / 3 * 2), n = 0; n < t.length; n += 2) this.setC40Word(t, n, this.getX12Value(this.input.charAt(this.fromPosition + n / 2 * 3)), this.getX12Value(this.input.charAt(this.fromPosition + n / 2 * 3 + 1)), this.getX12Value(this.input.charAt(this.fromPosition + n / 2 * 3 + 2)));
            return t
          }, t.prototype.getShiftValue = function(t, n, r) {
            return n && Gf.isInC40Shift1Set(t) || !n && Gf.isInTextShift1Set(t) ? 0 : n && Gf.isInC40Shift2Set(t, r) || !n && Gf.isInTextShift2Set(t, r) ? 1 : 2
          }, t.prototype.getC40Value = function(t, n, r, i) {
            if (r === i) {
              if (2 !== n) throw Error("FNC1 cannot be used in C40 shift 2");
              return 27
            }
            return t ? r > 31 ? 32 === r ? 3 : r > 47 ? r > 57 ? r > 64 ? r > 90 ? r > 95 ? r > 127 ? r : r - 96 : r - 69 : r - 51 : r - 43 : r - 44 : r - 33 : r : 0 === r ? 0 : 0 !== n || r > 3 ? 1 !== n || r > 31 ? 32 === r ? 3 : 33 > r || r > 47 ? 48 > r || r > 57 ? 58 > r || r > 64 ? 65 > r || r > 90 ? 91 > r || r > 95 ? 96 === r ? 0 : 97 > r || r > 122 ? 123 > r || r > 127 ? r : r - 96 : r - 83 : r - 69 : r - 64 : r - 43 : r - 44 : r - 33 : r : r - 1
          }, t.prototype.getC40Words = function(t, n) {
            for (var r = [], i = 0; i < this.characterLength; i++) {
              var e = this.input.charAt(this.fromPosition + i);
              if (t && jf.isNativeC40(e) || !t && jf.isNativeText(e)) r.push(this.getC40Value(t, 0, e, n));
              else if (Gf.isExtendedASCII(e, n)) {
                var o = (255 & e) - 128;
                if (t && jf.isNativeC40(o) || !t && jf.isNativeText(o)) r.push(1), r.push(30), r.push(this.getC40Value(t, 0, o, n));
                else {
                  r.push(1), r.push(30);
                  var u = this.getShiftValue(o, t, n);
                  r.push(u), r.push(this.getC40Value(t, u, o, n))
                }
              } else u = this.getShiftValue(e, t, n), r.push(u), r.push(this.getC40Value(t, u, e, n))
            }
            if (r.length % 3 != 0) {
              if ((r.length - 2) % 3 != 0 || this.fromPosition + this.characterLength !== this.input.length()) throw Error("C40 words must be a multiple of 3");
              r.push(0)
            }
            var f = new Uint8Array(r.length / 3 * 2),
              s = 0;
            for (i = 0; i < r.length; i += 3) this.setC40Word(f, s, 255 & r[i], 255 & r[i + 1], 255 & r[i + 2]), s += 2;
            return f
          }, t.prototype.getEDFBytes = function() {
            for (var t = Math.ceil(this.characterLength / 4), n = new Uint8Array(3 * t), r = this.fromPosition, i = Math.min(this.fromPosition + this.characterLength - 1, this.input.length() - 1), e = 0; t > e; e += 3) {
              for (var o = [], u = 0; 4 > u; u++) o[u] = r > i ? r === i + 1 ? 31 : 0 : 63 & this.input.charAt(r++);
              var f = o[0] << 18;
              f |= o[1] << 12, f |= o[2] << 6, f |= o[3], n[e] = f >> 16 & 255, n[e + 1] = f >> 8 & 255, n[e + 2] = 255 & f
            }
            return n
          }, t.prototype.getLatchBytes = function() {
            switch (this.getPreviousMode()) {
              case xf.ASCII:
              case xf.B256:
                switch (this.mode) {
                  case xf.B256:
                    return t.getBytes(231);
                  case xf.C40:
                    return t.getBytes(230);
                  case xf.TEXT:
                    return t.getBytes(239);
                  case xf.X12:
                    return t.getBytes(238);
                  case xf.EDF:
                    return t.getBytes(240)
                }
                break;
              case xf.C40:
              case xf.TEXT:
              case xf.X12:
                if (this.mode !== this.getPreviousMode()) switch (this.mode) {
                  case xf.ASCII:
                    return t.getBytes(254);
                  case xf.B256:
                    return t.getBytes(254, 231);
                  case xf.C40:
                    return t.getBytes(254, 230);
                  case xf.TEXT:
                    return t.getBytes(254, 239);
                  case xf.X12:
                    return t.getBytes(254, 238);
                  case xf.EDF:
                    return t.getBytes(254, 240)
                }
                break;
              case xf.EDF:
                if (this.mode !== xf.EDF) throw Error("Cannot switch from EDF to " + this.mode)
            }
            return new Uint8Array(0)
          }, t.prototype.getDataBytes = function() {
            switch (this.mode) {
              case xf.ASCII:
                return this.input.isECI(this.fromPosition) ? t.getBytes(241, this.input.getECIValue(this.fromPosition) + 1) : Gf.isExtendedASCII(this.input.charAt(this.fromPosition), this.input.getFNC1Character()) ? t.getBytes(235, this.input.charAt(this.fromPosition) - 127) : 2 === this.characterLength ? t.getBytes(10 * this.input.charAt(this.fromPosition) + this.input.charAt(this.fromPosition + 1) + 130) : this.input.isFNC1(this.fromPosition) ? t.getBytes(232) : t.getBytes(this.input.charAt(this.fromPosition) + 1);
              case xf.B256:
                return t.getBytes(this.input.charAt(this.fromPosition));
              case xf.C40:
                return this.getC40Words(!0, this.input.getFNC1Character());
              case xf.TEXT:
                return this.getC40Words(!1, this.input.getFNC1Character());
              case xf.X12:
                return this.getX12Words();
              case xf.EDF:
                return this.getEDFBytes()
            }
          }, t
        }(),
        qf = function(t) {
          function n(n, r, i, e, o) {
            var u = t.call(this, n, r, i) || this;
            return u.shape = e, u.macroId = o, u
          }
          return Bf(n, t), n.prototype.getMacroId = function() {
            return this.macroId
          }, n.prototype.getShapeHint = function() {
            return this.shape
          }, n
        }(Uf);
      ! function() {
        function t() {}
        t.prototype.encode = function(t, n, r, i, e) {
          if (void 0 === e && (e = null), "" === t.trim()) throw Error("Found empty contents");
          if (n !== St.DATA_MATRIX) throw Error("Can only encode DATA_MATRIX, but got " + n);
          if (0 > r || 0 > i) throw Error("Requested dimensions can't be negative: " + r + "x" + i);
          var o, u = 0,
            f = null,
            s = null;
          if (null != e) {
            var a = e.get(Tu.DATA_MATRIX_SHAPE);
            null != a && (u = a);
            var h = e.get(Tu.MIN_SIZE);
            null != h && (f = h);
            var c = e.get(Tu.MAX_SIZE);
            null != c && (s = c)
          }
          if (null != e && e.has(Tu.DATA_MATRIX_COMPACT) && e.get(Tu.DATA_MATRIX_COMPACT).toString()) {
            var l = e.has(Tu.GS1_FORMAT) && !!e.get(Tu.GS1_FORMAT).toString(),
              w = null;
            e.has(Tu.CHARACTER_SET) && (w = Qu.forName(e.get(Tu.CHARACTER_SET).toString())), o = Gf.encodeHighLevel(t, w, l ? 29 : -1, u)
          } else {
            var v = null != e && e.has(Tu.FORCE_C40) && !!e.get(Tu.FORCE_C40).toString();
            o = jf.encodeHighLevel(t, u, f, s, v)
          }
          var y = If.lookup(o.length, u, f, s, !0),
            d = vf.encodeECC200(o, y),
            b = new rf(d, y.getSymbolDataWidth(), y.getSymbolDataHeight());
          return b.place(), this.encodeLowLevel(b, y, r, i)
        }, t.prototype.encodeLowLevel = function(t, n, r, i) {
          for (var e = n.getSymbolDataWidth(), o = n.getSymbolDataHeight(), u = new Uu(n.getSymbolWidth(), n.getSymbolHeight()), f = 0, s = 0; o > s; s++) {
            var a = void 0;
            if (s % n.matrixHeight === 0) {
              a = 0;
              for (var h = 0; h < n.getSymbolWidth(); h++) u.setBoolean(a, f, h % 2 == 0), a++;
              f++
            }
            for (a = 0, h = 0; e > h; h++) h % n.matrixWidth === 0 && (u.setBoolean(a, f, !0), a++), u.setBoolean(a, f, t.getBit(h, s)), a++, h % n.matrixWidth === n.matrixWidth - 1 && (u.setBoolean(a, f, s % 2 == 0), a++);
            if (f++, s % n.matrixHeight === n.matrixHeight - 1) {
              for (a = 0, h = 0; h < n.getSymbolWidth(); h++) u.setBoolean(a, f, !0), a++;
              f++
            }
          }
          return this.convertByteMatrixToBitMatrix(u, r, i)
        }, t.prototype.convertByteMatrixToBitMatrix = function(t, n, r) {
          var i, e = t.getWidth(),
            o = t.getHeight(),
            u = Math.max(n, e),
            f = Math.max(r, o),
            s = Math.min(u / e, f / o),
            a = (u - e * s) / 2,
            h = (f - o * s) / 2;
          o > r || e > n ? (a = 0, h = 0, i = new tt(e, o)) : i = new tt(n, r), i.clear();
          for (var c = 0, l = h; o > c; c++, l += s)
            for (var w = 0, v = a; e > w; w++, v += s) 1 === t.get(w, c) && i.setRegion(v, l, s, s);
          return i
        }
      }();
      var Xf = function() {
        function t() {}
        return t.prototype.isCompact = function() {
          return this.compact
        }, t.prototype.setCompact = function(t) {
          this.compact = t
        }, t.prototype.getSize = function() {
          return this.size
        }, t.prototype.setSize = function(t) {
          this.size = t
        }, t.prototype.getLayers = function() {
          return this.layers
        }, t.prototype.setLayers = function(t) {
          this.layers = t
        }, t.prototype.getCodeWords = function() {
          return this.codeWords
        }, t.prototype.setCodeWords = function(t) {
          this.codeWords = t
        }, t.prototype.getMatrix = function() {
          return this.matrix
        }, t.prototype.setMatrix = function(t) {
          this.matrix = t
        }, t
      }();
      const Wf = Xf;
      var $f = function() {
        function t() {}
        return t.singletonList = function(t) {
          return [t]
        }, t.min = function(t, n) {
          return t.sort(n)[0]
        }, t
      }();
      const Kf = $f;
      var Vf = function() {
        function t(t) {
          this.previous = t
        }
        return t.prototype.getPrevious = function() {
          return this.previous
        }, t
      }();
      const Zf = Vf;
      var Jf = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Qf = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n) || this;
            return e.value = r, e.bitCount = i, e
          }
          return Jf(n, t), n.prototype.appendTo = function(t, n) {
            t.appendBits(this.value, this.bitCount)
          }, n.prototype.add = function(t, r) {
            return new n(this, t, r)
          }, n.prototype.addBinaryShift = function(t, r) {
            return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new n(this, t, r)
          }, n.prototype.toString = function() {
            var t = this.value & (1 << this.bitCount) - 1;
            return t |= 1 << this.bitCount, "<" + R.toBinaryString(t | 1 << this.bitCount).substring(1) + ">"
          }, n
        }(Zf);
      const Yf = Qf;
      var ts = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        ns = function(t) {
          function n(n, r, i) {
            var e = t.call(this, n, 0, 0) || this;
            return e.binaryShiftStart = r, e.binaryShiftByteCount = i, e
          }
          return ts(n, t), n.prototype.appendTo = function(t, n) {
            for (var r = 0; r < this.binaryShiftByteCount; r++)(0 === r || 31 === r && 62 >= this.binaryShiftByteCount) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(n[this.binaryShiftStart + r], 8)
          }, n.prototype.addBinaryShift = function(t, r) {
            return new n(this, t, r)
          }, n.prototype.toString = function() {
            return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">"
          }, n
        }(Yf);
      const rs = ns;

      function is(t, n, r) {
        return new Yf(t, n, r)
      }
      var es = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
        os = new Yf(null, 0, 0),
        us = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])],
        fs = function(t) {
          var n, r;
          try {
            for (var i = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(t), e = i.next(); !e.done; e = i.next()) {
              var o = e.value;
              x.fill(o, -1)
            }
          } catch (t) {
            n = {
              error: t
            }
          } finally {
            try {
              e && !e.done && (r = i.return) && r.call(i)
            } finally {
              if (n) throw n.error
            }
          }
          return t[0][4] = 0, t[1][4] = 0, t[1][0] = 28, t[3][4] = 0, t[2][4] = 0, t[2][0] = 15, t
        }(x.createInt32Array(6, 6)),
        ss = function() {
          function t(t, n, r, i) {
            this.token = t, this.mode = n, this.binaryShiftByteCount = r, this.bitCount = i
          }
          return t.prototype.getMode = function() {
            return this.mode
          }, t.prototype.getToken = function() {
            return this.token
          }, t.prototype.getBinaryShiftByteCount = function() {
            return this.binaryShiftByteCount
          }, t.prototype.getBitCount = function() {
            return this.bitCount
          }, t.prototype.latchAndAppend = function(n, r) {
            var i = this.bitCount,
              e = this.token;
            if (n !== this.mode) {
              var o = us[this.mode][n];
              e = is(e, 65535 & o, o >> 16), i += o >> 16
            }
            var u = 2 === n ? 4 : 5;
            return new t(e = is(e, r, u), n, 0, i + u)
          }, t.prototype.shiftAndAppend = function(n, r) {
            var i = this.token,
              e = 2 === this.mode ? 4 : 5;
            return i = is(i, fs[this.mode][n], e), new t(i = is(i, r, 5), this.mode, 0, this.bitCount + e + 5)
          }, t.prototype.addBinaryShiftChar = function(n) {
            var r = this.token,
              i = this.mode,
              e = this.bitCount;
            if (4 === this.mode || 2 === this.mode) {
              var o = us[i][0];
              r = is(r, 65535 & o, o >> 16), e += o >> 16, i = 0
            }
            var u = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8,
              f = new t(r, i, this.binaryShiftByteCount + 1, e + u);
            return 2078 === f.binaryShiftByteCount && (f = f.endBinaryShift(n + 1)), f
          }, t.prototype.endBinaryShift = function(n) {
            if (0 === this.binaryShiftByteCount) return this;
            var r = this.token;
            return r = function(t, n, r) {
              return new rs(t, n, r)
            }(r, n - this.binaryShiftByteCount, this.binaryShiftByteCount), new t(r, this.mode, 0, this.bitCount)
          }, t.prototype.isBetterThanOrEqualTo = function(n) {
            var r = this.bitCount + (us[this.mode][n.mode] >> 16);
            return this.binaryShiftByteCount < n.binaryShiftByteCount ? r += t.calculateBinaryShiftCost(n) - t.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > n.binaryShiftByteCount && n.binaryShiftByteCount > 0 && (r += 10), r <= n.bitCount
          }, t.prototype.toBitArray = function(t) {
            for (var n, r, i = [], e = this.endBinaryShift(t.length).token; null !== e; e = e.getPrevious()) i.unshift(e);
            var o = new U;
            try {
              for (var u = function(t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    r = n && t[n],
                    i = 0;
                  if (r) return r.call(t);
                  if (t && "number" == typeof t.length) return {
                    next: function() {
                      return t && i >= t.length && (t = void 0), {
                        value: t && t[i++],
                        done: !t
                      }
                    }
                  };
                  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(i), f = u.next(); !f.done; f = u.next()) f.value.appendTo(o, t)
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                f && !f.done && (r = u.return) && r.call(u)
              } finally {
                if (n) throw n.error
              }
            }
            return o
          }, t.prototype.toString = function() {
            return Z.format("%s bits=%d bytes=%d", es[this.mode], this.bitCount, this.binaryShiftByteCount)
          }, t.calculateBinaryShiftCost = function(t) {
            return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0
          }, t.INITIAL_STATE = new t(os, 0, 0, 0), t
        }();
      const as = ss;
      var hs = function(t) {
          var n = Z.getCharCode(" "),
            r = Z.getCharCode("."),
            i = Z.getCharCode(",");
          t[0][n] = 1;
          for (var e = Z.getCharCode("Z"), o = Z.getCharCode("A"), u = o; e >= u; u++) t[0][u] = u - o + 2;
          t[1][n] = 1;
          var f = Z.getCharCode("z"),
            s = Z.getCharCode("a");
          for (u = s; f >= u; u++) t[1][u] = u - s + 2;
          t[2][n] = 1;
          var a = Z.getCharCode("9"),
            h = Z.getCharCode("0");
          for (u = h; a >= u; u++) t[2][u] = u - h + 2;
          t[2][i] = 12, t[2][r] = 13;
          for (var c = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""], l = 0; c.length > l; l++) t[3][Z.getCharCode(c[l])] = l;
          var w = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
          for (l = 0; w.length > l; l++) Z.getCharCode(w[l]) > 0 && (t[4][Z.getCharCode(w[l])] = l);
          return t
        }(x.createInt32Array(5, 256)),
        cs = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        ls = function() {
          function t(t) {
            this.text = t
          }
          return t.prototype.encode = function() {
            for (var n = Z.getCharCode(" "), r = Z.getCharCode("\n"), i = Kf.singletonList(as.INITIAL_STATE), e = 0; e < this.text.length; e++) {
              var o = void 0,
                u = e + 1 < this.text.length ? this.text[e + 1] : 0;
              switch (this.text[e]) {
                case Z.getCharCode("\r"):
                  o = u === r ? 2 : 0;
                  break;
                case Z.getCharCode("."):
                  o = u === n ? 3 : 0;
                  break;
                case Z.getCharCode(","):
                  o = u === n ? 4 : 0;
                  break;
                case Z.getCharCode(":"):
                  o = u === n ? 5 : 0;
                  break;
                default:
                  o = 0
              }
              o > 0 ? (i = t.updateStateListForPair(i, e, o), e++) : i = this.updateStateListForChar(i, e)
            }
            return Kf.min(i, function(t, n) {
              return t.getBitCount() - n.getBitCount()
            }).toBitArray(this.text)
          }, t.prototype.updateStateListForChar = function(n, r) {
            var i, e, o = [];
            try {
              for (var u = cs(n), f = u.next(); !f.done; f = u.next()) {
                var s = f.value;
                this.updateStateForChar(s, r, o)
              }
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                f && !f.done && (e = u.return) && e.call(u)
              } finally {
                if (i) throw i.error
              }
            }
            return t.simplifyStates(o)
          }, t.prototype.updateStateForChar = function(t, n, r) {
            for (var i = 255 & this.text[n], e = hs[t.getMode()][i] > 0, o = null, u = 0; 4 >= u; u++) {
              var f = hs[u][i];
              if (f > 0) {
                if (null == o && (o = t.endBinaryShift(n)), !e || u === t.getMode() || 2 === u) {
                  var s = o.latchAndAppend(u, f);
                  r.push(s)
                }
                if (!e && fs[t.getMode()][u] >= 0) {
                  var a = o.shiftAndAppend(u, f);
                  r.push(a)
                }
              }
            }
            if (t.getBinaryShiftByteCount() > 0 || 0 === hs[t.getMode()][i]) {
              var h = t.addBinaryShiftChar(n);
              r.push(h)
            }
          }, t.updateStateListForPair = function(t, n, r) {
            var i, e, o = [];
            try {
              for (var u = cs(t), f = u.next(); !f.done; f = u.next()) {
                var s = f.value;
                this.updateStateForPair(s, n, r, o)
              }
            } catch (t) {
              i = {
                error: t
              }
            } finally {
              try {
                f && !f.done && (e = u.return) && e.call(u)
              } finally {
                if (i) throw i.error
              }
            }
            return this.simplifyStates(o)
          }, t.updateStateForPair = function(t, n, r, i) {
            var e = t.endBinaryShift(n);
            if (i.push(e.latchAndAppend(4, r)), 4 !== t.getMode() && i.push(e.shiftAndAppend(4, r)), 3 === r || 4 === r) {
              var o = e.latchAndAppend(2, 16 - r).latchAndAppend(2, 1);
              i.push(o)
            }
            if (t.getBinaryShiftByteCount() > 0) {
              var u = t.addBinaryShiftChar(n).addBinaryShiftChar(n + 1);
              i.push(u)
            }
          }, t.simplifyStates = function(t) {
            var n, r, i, e, o = [];
            try {
              for (var u = cs(t), f = u.next(); !f.done; f = u.next()) {
                var s = f.value,
                  a = !0,
                  h = function(t) {
                    if (t.isBetterThanOrEqualTo(s)) return a = !1, "break";
                    s.isBetterThanOrEqualTo(t) && (o = o.filter(function(n) {
                      return n !== t
                    }))
                  };
                try {
                  for (var c = (i = void 0, cs(o)), l = c.next(); !l.done && "break" !== h(l.value); l = c.next());
                } catch (t) {
                  i = {
                    error: t
                  }
                } finally {
                  try {
                    l && !l.done && (e = c.return) && e.call(c)
                  } finally {
                    if (i) throw i.error
                  }
                }
                a && o.push(s)
              }
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                f && !f.done && (r = u.return) && r.call(u)
              } finally {
                if (n) throw n.error
              }
            }
            return o
          }, t
        }();
      const ws = ls;
      var vs = function() {
        function t() {}
        return t.encodeBytes = function(n) {
          return t.encode(n, t.DEFAULT_EC_PERCENT, t.DEFAULT_AZTEC_LAYERS)
        }, t.encode = function(n, r, i) {
          var e, o, u, f, s, a = new ws(n).encode(),
            h = R.truncDivision(a.getSize() * r, 100) + 11,
            c = a.getSize() + h;
          if (i !== t.DEFAULT_AZTEC_LAYERS) {
            if (e = 0 > i, (o = Math.abs(i)) > (e ? t.MAX_NB_BITS_COMPACT : t.MAX_NB_BITS)) throw new v(Z.format("Illegal value %s for layers", i));
            var l = (u = t.totalBitsInLayer(o, e)) - u % (f = t.WORD_SIZE[o]);
            if ((s = t.stuffBits(a, f)).getSize() + h > l) throw new v("Data to large for user specified layer");
            if (e && s.getSize() > 64 * f) throw new v("Data to large for user specified layer")
          } else {
            f = 0, s = null;
            for (var w = 0;; w++) {
              if (w > t.MAX_NB_BITS) throw new v("Data too large for an Aztec code");
              if (o = (e = 3 >= w) ? w + 1 : w, !(c > (u = t.totalBitsInLayer(o, e)) || ((null == s || f !== t.WORD_SIZE[o]) && (f = t.WORD_SIZE[o], s = t.stuffBits(a, f)), l = u - u % f, e && s.getSize() > 64 * f || s.getSize() + h > l))) break
            }
          }
          var y, d = t.generateCheckWords(s, u, f),
            b = s.getSize() / f,
            A = t.generateModeMessage(e, o, b),
            p = (e ? 11 : 14) + 4 * o,
            m = new Int32Array(p);
          if (e)
            for (y = p, w = 0; w < m.length; w++) m[w] = w;
          else {
            y = p + 1 + 2 * R.truncDivision(R.truncDivision(p, 2) - 1, 15);
            var I = R.truncDivision(p, 2),
              _ = R.truncDivision(y, 2);
            for (w = 0; I > w; w++) {
              var g = w + R.truncDivision(w, 15);
              m[I - w - 1] = _ - g - 1, m[I + w] = _ + g + 1
            }
          }
          for (var S = new tt(y), M = (w = 0, 0); o > w; w++) {
            for (var E = 4 * (o - w) + (e ? 9 : 12), O = 0; E > O; O++)
              for (var k = 2 * O, T = 0; 2 > T; T++) d.get(M + k + T) && S.set(m[2 * w + T], m[2 * w + O]), d.get(M + 2 * E + k + T) && S.set(m[2 * w + O], m[p - 1 - 2 * w - T]), d.get(M + 4 * E + k + T) && S.set(m[p - 1 - 2 * w - T], m[p - 1 - 2 * w - O]), d.get(M + 6 * E + k + T) && S.set(m[p - 1 - 2 * w - O], m[2 * w + T]);
            M += 8 * E
          }
          if (t.drawModeMessage(S, e, y, A), e) t.drawBullsEye(S, R.truncDivision(y, 2), 5);
          else
            for (t.drawBullsEye(S, R.truncDivision(y, 2), 7), w = 0, O = 0; w < R.truncDivision(p, 2) - 1; w += 15, O += 16)
              for (T = 1 & R.truncDivision(y, 2); y > T; T += 2) S.set(R.truncDivision(y, 2) - O, T), S.set(R.truncDivision(y, 2) + O, T), S.set(T, R.truncDivision(y, 2) - O), S.set(T, R.truncDivision(y, 2) + O);
          var j = new Wf;
          return j.setCompact(e), j.setSize(y), j.setLayers(o), j.setCodeWords(b), j.setMatrix(S), j
        }, t.drawBullsEye = function(t, n, r) {
          for (var i = 0; r > i; i += 2)
            for (var e = n - i; n + i >= e; e++) t.set(e, n - i), t.set(e, n + i), t.set(n - i, e), t.set(n + i, e);
          t.set(n - r, n - r), t.set(n - r + 1, n - r), t.set(n - r, n - r + 1), t.set(n + r, n - r), t.set(n + r, n - r + 1), t.set(n + r, n + r - 1)
        }, t.generateModeMessage = function(n, r, i) {
          var e = new U;
          return n ? (e.appendBits(r - 1, 2), e.appendBits(i - 1, 6), e = t.generateCheckWords(e, 28, 4)) : (e.appendBits(r - 1, 5), e.appendBits(i - 1, 11), e = t.generateCheckWords(e, 40, 4)), e
        }, t.drawModeMessage = function(t, n, r, i) {
          var e = R.truncDivision(r, 2);
          if (n)
            for (var o = 0; 7 > o; o++) {
              var u = e - 3 + o;
              i.get(o) && t.set(u, e - 5), i.get(o + 7) && t.set(e + 5, u), i.get(20 - o) && t.set(u, e + 5), i.get(27 - o) && t.set(e - 5, u)
            } else
              for (o = 0; 10 > o; o++) u = e - 5 + o + R.truncDivision(o, 5), i.get(o) && t.set(u, e - 7), i.get(o + 10) && t.set(e + 7, u), i.get(29 - o) && t.set(u, e + 7), i.get(39 - o) && t.set(e - 7, u)
        }, t.generateCheckWords = function(n, r, i) {
          var e, o, u = n.getSize() / i,
            f = new xu(t.getGF(i)),
            s = R.truncDivision(r, i),
            a = t.bitsToWords(n, i, s);
          f.encode(a, s - u);
          var h = r % i,
            c = new U;
          c.appendBits(0, h);
          try {
            for (var l = function(t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  r = n && t[n],
                  i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function() {
                    return t && i >= t.length && (t = void 0), {
                      value: t && t[i++],
                      done: !t
                    }
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(Array.from(a)), w = l.next(); !w.done; w = l.next()) {
              var v = w.value;
              c.appendBits(v, i)
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              w && !w.done && (o = l.return) && o.call(l)
            } finally {
              if (e) throw e.error
            }
          }
          return c
        }, t.bitsToWords = function(t, n, r) {
          var i, e, o = new Int32Array(r);
          for (i = 0, e = t.getSize() / n; e > i; i++) {
            for (var u = 0, f = 0; n > f; f++) u |= t.get(i * n + f) ? 1 << n - f - 1 : 0;
            o[i] = u
          }
          return o
        }, t.getGF = function(t) {
          switch (t) {
            case 4:
              return Pt.AZTEC_PARAM;
            case 6:
              return Pt.AZTEC_DATA_6;
            case 8:
              return Pt.AZTEC_DATA_8;
            case 10:
              return Pt.AZTEC_DATA_10;
            case 12:
              return Pt.AZTEC_DATA_12;
            default:
              throw new v("Unsupported word size " + t)
          }
        }, t.stuffBits = function(t, n) {
          for (var r = new U, i = t.getSize(), e = (1 << n) - 2, o = 0; i > o; o += n) {
            for (var u = 0, f = 0; n > f; f++)(o + f >= i || t.get(o + f)) && (u |= 1 << n - 1 - f);
            (u & e) === e ? (r.appendBits(u & e, n), o--) : 0 === (u & e) ? (r.appendBits(1 | u, n), o--) : r.appendBits(u, n)
          }
          return r
        }, t.totalBitsInLayer = function(t, n) {
          return ((n ? 88 : 112) + 16 * t) * t
        }, t.DEFAULT_EC_PERCENT = 33, t.DEFAULT_AZTEC_LAYERS = 0, t.MAX_NB_BITS = 32, t.MAX_NB_BITS_COMPACT = 4, t.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]), t
      }();
      const ys = vs;
      ! function() {
        function t() {}
        t.prototype.encode = function(t, n, r, i) {
          return this.encodeWithHints(t, n, r, i, null)
        }, t.prototype.encodeWithHints = function(n, r, i, e, o) {
          var u = tf.ISO_8859_1,
            f = ys.DEFAULT_EC_PERCENT,
            s = ys.DEFAULT_AZTEC_LAYERS;
          return null != o && (o.has(Tu.CHARACTER_SET) && (u = Qu.forName(o.get(Tu.CHARACTER_SET).toString())), o.has(Tu.ERROR_CORRECTION) && (f = R.parseInt(o.get(Tu.ERROR_CORRECTION).toString())), o.has(Tu.AZTEC_LAYERS) && (s = R.parseInt(o.get(Tu.AZTEC_LAYERS).toString()))), t.encodeLayers(n, r, i, e, u, f, s)
        }, t.encodeLayers = function(n, r, i, e, o, u, f) {
          if (r !== St.AZTEC) throw new v("Can only encode AZTEC, but got " + r);
          var s = ys.encode(Z.getBytes(n, o), u, f);
          return t.renderResult(s, i, e)
        }, t.renderResult = function(t, n, r) {
          var i = t.getMatrix();
          if (null == i) throw new qt;
          for (var e = i.getWidth(), o = i.getHeight(), u = Math.max(n, e), f = Math.max(r, o), s = Math.min(u / e, f / o), a = (u - e * s) / 2, h = (f - o * s) / 2, c = new tt(u, f), l = 0, w = h; o > l; l++, w += s)
            for (var v = 0, y = a; e > v; v++, y += s) i.get(v, l) && c.setRegion(y, w, s, s);
          return c
        }
      }();
      var ds = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        bs = function(t) {
          function n(r) {
            var i = t.call(this, r.width, r.height) || this;
            return i.canvas = r, i.tempCanvasElement = null, i.buffer = n.makeBufferFromCanvasImageData(r), i
          }
          return ds(n, t), n.makeBufferFromCanvasImageData = function(t) {
            var r;
            try {
              r = t.getContext("2d", {
                willReadFrequently: !0
              })
            } catch {
              r = t.getContext("2d")
            }
            if (!r) throw Error("Couldn't get canvas context.");
            var i = r.getImageData(0, 0, t.width, t.height);
            return n.toGrayscaleBuffer(i.data, t.width, t.height)
          }, n.toGrayscaleBuffer = function(t, n, r) {
            for (var i = new Uint8ClampedArray(n * r), e = 0, o = 0, u = t.length; u > e; e += 4, o++) {
              var f;
              f = 0 === t[e + 3] ? 255 : 306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512 >> 10, i[o] = f
            }
            return i
          }, n.prototype.getRow = function(t, n) {
            if (0 > t || t >= this.getHeight()) throw new v("Requested row is outside the image: " + t);
            var r = this.getWidth(),
              i = t * r;
            return null === n ? n = this.buffer.slice(i, i + r) : (n.length < r && (n = new Uint8ClampedArray(r)), n.set(this.buffer.slice(i, i + r))), n
          }, n.prototype.getMatrix = function() {
            return this.buffer
          }, n.prototype.isCropSupported = function() {
            return !0
          }, n.prototype.crop = function(n, r, i, e) {
            return t.prototype.crop.call(this, n, r, i, e), this
          }, n.prototype.isRotateSupported = function() {
            return !0
          }, n.prototype.rotateCounterClockwise = function() {
            return this.rotate(-90), this
          }, n.prototype.rotateCounterClockwise45 = function() {
            return this.rotate(-45), this
          }, n.prototype.invert = function() {
            return new vt(this)
          }, n.prototype.getTempCanvasElement = function() {
            if (null === this.tempCanvasElement) {
              var t = this.canvas.ownerDocument.createElement("canvas");
              t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
            }
            return this.tempCanvasElement
          }, n.prototype.rotate = function(t) {
            var r = this.getTempCanvasElement();
            if (!r) throw Error("Could not create a Canvas element.");
            var i = t * n.DEGREE_TO_RADIANS,
              e = this.canvas.width,
              o = this.canvas.height,
              u = Math.ceil(Math.abs(Math.cos(i)) * e + Math.abs(Math.sin(i)) * o),
              f = Math.ceil(Math.abs(Math.sin(i)) * e + Math.abs(Math.cos(i)) * o);
            r.width = u, r.height = f;
            var s = r.getContext("2d");
            if (!s) throw Error("Could not create a Canvas Context element.");
            return s.translate(u / 2, f / 2), s.rotate(i), s.drawImage(this.canvas, e / -2, o / -2), this.buffer = n.makeBufferFromCanvasImageData(r), this
          }, n.DEGREE_TO_RADIANS = Math.PI / 180, n
        }(ct);

      function As() {
        return "u" > typeof navigator
      }
      var ps = function() {
          return ps = Object.assign || function(t) {
            for (var n, r = 1, i = arguments.length; i > r; r++)
              for (var e in n = arguments[r])({}).hasOwnProperty.call(n, e) && (t[e] = n[e]);
            return t
          }, ps.apply(this, arguments)
        },
        ms = function(t, n, r, i) {
          return new(r || (r = Promise))(function(e, o) {
            function u(t) {
              try {
                s(i.next(t))
              } catch (t) {
                o(t)
              }
            }

            function f(t) {
              try {
                s(i.throw(t))
              } catch (t) {
                o(t)
              }
            }

            function s(t) {
              t.done ? e(t.value) : function(t) {
                return t instanceof r ? t : new r(function(n) {
                  n(t)
                })
              }(t.value).then(u, f)
            }
            s((i = i.apply(t, n || [])).next())
          })
        },
        Is = function(t, n) {
          var r, i, e, o, u = {
            label: 0,
            sent: function() {
              if (1 & e[0]) throw e[1];
              return e[1]
            },
            trys: [],
            ops: []
          };
          return o = {
            next: f(0),
            throw: f(1),
            return: f(2)
          }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
          }), o;

          function f(o) {
            return function(f) {
              return function(o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u;) try {
                  if (r = 1, i && (e = 2 & o[0] ? i.return : o[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, o[1])).done) return e;
                  switch (i = 0, e && (o = [2 & o[0], e.value]), o[0]) {
                    case 0:
                    case 1:
                      e = o;
                      break;
                    case 4:
                      return u.label++, {
                        value: o[1],
                        done: !1
                      };
                    case 5:
                      u.label++, i = o[1], o = [0];
                      continue;
                    case 7:
                      o = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!(e = (e = u.trys).length > 0 && e[e.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        u = 0;
                        continue
                      }
                      if (3 === o[0] && (!e || o[1] > e[0] && o[1] < e[3])) {
                        u.label = o[1];
                        break
                      }
                      if (6 === o[0] && u.label < e[1]) {
                        u.label = e[1], e = o;
                        break
                      }
                      if (e && u.label < e[2]) {
                        u.label = e[2], u.ops.push(o);
                        break
                      }
                      e[2] && u.ops.pop(), u.trys.pop();
                      continue
                  }
                  o = n.call(t, u)
                } catch (t) {
                  o = [6, t], i = 0
                } finally {
                  r = e = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                  value: o[0] ? o[1] : void 0,
                  done: !0
                }
              }([o, f])
            }
          }
        },
        _s = function(t) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            r = n && t[n],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
              }
            }
          };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        gs = {
          delayBetweenScanAttempts: 500,
          delayBetweenScanSuccess: 500,
          tryPlayVideoTimeout: 5e3
        },
        Ss = function() {
          function t(t, n, r) {
            void 0 === n && (n = new Map), void 0 === r && (r = {}), this.reader = t, this.hints = n, this.options = ps(ps({}, gs), r)
          }
          return Object.defineProperty(t.prototype, "possibleFormats", {
            set: function(t) {
              this.hints.set(B.POSSIBLE_FORMATS, t)
            },
            enumerable: !1,
            configurable: !0
          }), t.addVideoSource = function(t, n) {
            try {
              t.srcObject = n
            } catch {
              console.error("got interrupted by new loading request")
            }
          }, t.mediaStreamSetTorch = function(t, n) {
            return ms(this, void 0, void 0, function() {
              return Is(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, t.applyConstraints({
                      advanced: [{
                        fillLightMode: n ? "flash" : "off",
                        torch: !!n
                      }]
                    })];
                  case 1:
                    return r.sent(), [2]
                }
              })
            })
          }, t.mediaStreamIsTorchCompatible = function(n) {
            var r, i, e = n.getVideoTracks();
            try {
              for (var o = _s(e), u = o.next(); !u.done; u = o.next()) {
                var f = u.value;
                if (t.mediaStreamIsTorchCompatibleTrack(f)) return !0
              }
            } catch (t) {
              r = {
                error: t
              }
            } finally {
              try {
                u && !u.done && (i = o.return) && i.call(o)
              } finally {
                if (r) throw r.error
              }
            }
            return !1
          }, t.mediaStreamIsTorchCompatibleTrack = function(t) {
            try {
              return "torch" in t.getCapabilities()
            } catch (t) {
              return console.error(t), console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."), !1
            }
          }, t.isVideoPlaying = function(t) {
            return t.currentTime > 0 && !t.paused && t.readyState > 2
          }, t.getMediaElement = function(t, n) {
            var r = document.getElementById(t);
            if (!r) throw new c("element with id '".concat(t, "' not found"));
            if (r.nodeName.toLowerCase() !== n.toLowerCase()) throw new c("element with id '".concat(t, "' must be an ").concat(n, " element"));
            return r
          }, t.createVideoElement = function(n) {
            if (n instanceof HTMLVideoElement) return n;
            if ("string" == typeof n) return t.getMediaElement(n, "video");
            if (!n && "u" > typeof document) {
              var r = document.createElement("video");
              return r.width = 200, r.height = 200, r
            }
            throw Error("Couldn't get videoElement from videoSource!")
          }, t.prepareImageElement = function(n) {
            if (n instanceof HTMLImageElement) return n;
            if ("string" == typeof n) return t.getMediaElement(n, "img");
            if (typeof n > "u") {
              var r = document.createElement("img");
              return r.width = 200, r.height = 200, r
            }
            throw Error("Couldn't get imageElement from imageSource!")
          }, t.prepareVideoElement = function(n) {
            var r = t.createVideoElement(n);
            return r.setAttribute("autoplay", "true"), r.setAttribute("muted", "true"), r.setAttribute("playsinline", "true"), r
          }, t.isImageLoaded = function(t) {
            return !(!t.complete || 0 === t.naturalWidth)
          }, t.createBinaryBitmapFromCanvas = function(t) {
            var n = new bs(t),
              r = new at(n);
            return new d(r)
          }, t.drawImageOnCanvas = function(t, n) {
            t.drawImage(n, 0, 0)
          }, t.getMediaElementDimensions = function(t) {
            if (t instanceof HTMLVideoElement) return {
              height: t.videoHeight,
              width: t.videoWidth
            };
            if (t instanceof HTMLImageElement) return {
              height: t.naturalHeight || t.height,
              width: t.naturalWidth || t.width
            };
            throw Error("Couldn't find the Source's dimensions!")
          }, t.createCaptureCanvas = function(n) {
            if (!n) throw new c("Cannot create a capture canvas without a media element.");
            if (typeof document > "u") throw Error('The page "Document" is undefined, make sure you\'re running in a browser.');
            var r = document.createElement("canvas"),
              i = t.getMediaElementDimensions(n),
              e = i.width,
              o = i.height;
            return r.style.width = e + "px", r.style.height = o + "px", r.width = e, r.height = o, r
          }, t.tryPlayVideo = function(n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    if (n?.ended) return console.error("Trying to play video that has ended."), [2, !1];
                    if (t.isVideoPlaying(n)) return console.warn("Trying to play video that is already playing."), [2, !0];
                    i.label = 1;
                  case 1:
                    return i.trys.push([1, 3, , 4]), [4, n.play()];
                  case 2:
                    return i.sent(), [2, !0];
                  case 3:
                    return r = i.sent(), console.warn("It was not possible to play the video.", r), [2, !1];
                  case 4:
                    return [2]
                }
              })
            })
          }, t.createCanvasFromMediaElement = function(n) {
            var r = t.createCaptureCanvas(n),
              i = r.getContext("2d");
            if (!i) throw Error("Couldn't find Canvas 2D Context.");
            return t.drawImageOnCanvas(i, n), r
          }, t.createBinaryBitmapFromMediaElem = function(n) {
            var r = t.createCanvasFromMediaElement(n);
            return t.createBinaryBitmapFromCanvas(r)
          }, t.destroyImageElement = function(t) {
            t.src = "", t.removeAttribute("src"), t = void 0
          }, t.listVideoInputDevices = function() {
            return ms(this, void 0, void 0, function() {
              var t, n, r, i, e, o, u, f, s, a, h, c;
              return Is(this, function(l) {
                switch (l.label) {
                  case 0:
                    if (!As()) throw Error("Can't enumerate devices, navigator is not present.");
                    if (!(As() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)) throw Error("Can't enumerate devices, method not supported.");
                    return [4, navigator.mediaDevices.enumerateDevices()];
                  case 1:
                    t = l.sent(), n = [];
                    try {
                      for (r = _s(t), i = r.next(); !i.done; i = r.next()) e = i.value, "videoinput" === (o = "video" === e.kind ? "videoinput" : e.kind) && (u = e.deviceId || e.id, f = e.label || "Video device ".concat(n.length + 1), s = e.groupId, a = {
                        deviceId: u,
                        label: f,
                        kind: o,
                        groupId: s
                      }, n.push(a))
                    } catch (t) {
                      h = {
                        error: t
                      }
                    } finally {
                      try {
                        i && !i.done && (c = r.return) && c.call(r)
                      } finally {
                        if (h) throw h.error
                      }
                    }
                    return [2, n]
                }
              })
            })
          }, t.findDeviceById = function(n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, t.listVideoInputDevices()];
                  case 1:
                    return (r = i.sent()) ? [2, r.find(function(t) {
                      return t.deviceId === n
                    })] : [2]
                }
              })
            })
          }, t.cleanVideoSource = function(t) {
            if (t) {
              try {
                t.srcObject = null
              } catch {
                t.src = ""
              }
              t && t.removeAttribute("src")
            }
          }, t.releaseAllStreams = function() {
            0 !== t.streamTracker.length && t.streamTracker.forEach(function(t) {
              t.getTracks().forEach(function(t) {
                return t.stop()
              })
            }), t.streamTracker = []
          }, t.playVideoOnLoadAsync = function(n, r) {
            return ms(this, void 0, void 0, function() {
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, t.tryPlayVideo(n)];
                  case 1:
                    return i.sent() ? [2, !0] : [2, new Promise(function(i, e) {
                      var o = setTimeout(function() {
                          t.isVideoPlaying(n) || (e(!1), n.removeEventListener("canplay", u))
                        }, r),
                        u = function() {
                          t.tryPlayVideo(n).then(function(t) {
                            clearTimeout(o), n.removeEventListener("canplay", u), i(t)
                          })
                        };
                      n.addEventListener("canplay", u)
                    })]
                }
              })
            })
          }, t.attachStreamToVideo = function(n, r, i) {
            return void 0 === i && (i = 5e3), ms(this, void 0, void 0, function() {
              var e;
              return Is(this, function(o) {
                switch (o.label) {
                  case 0:
                    return e = t.prepareVideoElement(r), t.addVideoSource(e, n), [4, t.playVideoOnLoadAsync(e, i)];
                  case 1:
                    return o.sent(), [2, e]
                }
              })
            })
          }, t.P = function(n) {
            return new Promise(function(r, i) {
              var e = setTimeout(function() {
                  t.isImageLoaded(n) || (n.removeEventListener("load", o), i())
                }, 1e4),
                o = function() {
                  clearTimeout(e), n.removeEventListener("load", o), r()
                };
              n.addEventListener("load", o)
            })
          }, t.checkCallbackFnOrThrow = function(t) {
            if (!t) throw new c("`callbackFn` is a required parameter, you cannot capture results without it.")
          }, t.disposeMediaStream = function(t) {
            t.getVideoTracks().forEach(function(t) {
              return t.stop()
            }), t = void 0
          }, t.prototype.decode = function(n) {
            var r = t.createCanvasFromMediaElement(n);
            return this.decodeFromCanvas(r)
          }, t.prototype.decodeBitmap = function(t) {
            return this.reader.decode(t, this.hints)
          }, t.prototype.decodeFromCanvas = function(n) {
            var r = t.createBinaryBitmapFromCanvas(n);
            return this.decodeBitmap(r)
          }, t.prototype.decodeFromImageElement = function(n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    if (!n) throw new c("An image element must be provided.");
                    return r = t.prepareImageElement(n), [4, this.T(r)];
                  case 1:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeFromImageUrl = function(n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    if (!n) throw new c("An URL must be provided.");
                    (r = t.prepareImageElement()).src = n, i.label = 1;
                  case 1:
                    return i.trys.push([1, , 3, 4]), [4, this.decodeFromImageElement(r)];
                  case 2:
                    return [2, i.sent()];
                  case 3:
                    return t.destroyImageElement(r), [7];
                  case 4:
                    return [2]
                }
              })
            })
          }, t.prototype.decodeFromConstraints = function(n, r, i) {
            return ms(this, void 0, void 0, function() {
              var e, o;
              return Is(this, function(u) {
                switch (u.label) {
                  case 0:
                    return t.checkCallbackFnOrThrow(i), [4, this.getUserMedia(n)];
                  case 1:
                    e = u.sent(), u.label = 2;
                  case 2:
                    return u.trys.push([2, 4, , 5]), [4, this.decodeFromStream(e, r, i)];
                  case 3:
                    return [2, u.sent()];
                  case 4:
                    throw o = u.sent(), t.disposeMediaStream(e), o;
                  case 5:
                    return [2]
                }
              })
            })
          }, t.prototype.decodeFromStream = function(n, r, i) {
            return ms(this, void 0, void 0, function() {
              var e, o, u, f, s, a, h, c, l = this;
              return Is(this, function(w) {
                switch (w.label) {
                  case 0:
                    return t.checkCallbackFnOrThrow(i), e = this.options.tryPlayVideoTimeout, [4, t.attachStreamToVideo(n, r, e)];
                  case 1:
                    return o = w.sent(), u = function() {
                      t.disposeMediaStream(n), t.cleanVideoSource(o)
                    }, f = this.scan(o, i, u), s = n.getVideoTracks(), a = ps(ps({}, f), {
                      stop: function() {
                        f.stop()
                      },
                      streamVideoConstraintsApply: function(t, n) {
                        return ms(this, void 0, void 0, function() {
                          var r, i, e, o, u, f;
                          return Is(this, function(a) {
                            switch (a.label) {
                              case 0:
                                r = n ? s.filter(n) : s, a.label = 1;
                              case 1:
                                a.trys.push([1, 6, 7, 8]), i = _s(r), e = i.next(), a.label = 2;
                              case 2:
                                return e.done ? [3, 5] : [4, e.value.applyConstraints(t)];
                              case 3:
                                a.sent(), a.label = 4;
                              case 4:
                                return e = i.next(), [3, 2];
                              case 5:
                                return [3, 8];
                              case 6:
                                return o = a.sent(), u = {
                                  error: o
                                }, [3, 8];
                              case 7:
                                try {
                                  e && !e.done && (f = i.return) && f.call(i)
                                } finally {
                                  if (u) throw u.error
                                }
                                return [7];
                              case 8:
                                return [2]
                            }
                          })
                        })
                      },
                      streamVideoConstraintsGet: function(t) {
                        return s.find(t).getConstraints()
                      },
                      streamVideoSettingsGet: function(t) {
                        return s.find(t).getSettings()
                      },
                      streamVideoCapabilitiesGet: function(t) {
                        return s.find(t).getCapabilities()
                      }
                    }), t.mediaStreamIsTorchCompatible(n) && (h = s?.find(function(n) {
                      return t.mediaStreamIsTorchCompatibleTrack(n)
                    }), c = function(n) {
                      return ms(l, void 0, void 0, function() {
                        return Is(this, function(r) {
                          switch (r.label) {
                            case 0:
                              return [4, t.mediaStreamSetTorch(h, n)];
                            case 1:
                              return r.sent(), [2]
                          }
                        })
                      })
                    }, a.switchTorch = c, a.stop = function() {
                      return ms(l, void 0, void 0, function() {
                        return Is(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return f.stop(), [4, c(!1)];
                            case 1:
                              return t.sent(), [2]
                          }
                        })
                      })
                    }), [2, a]
                }
              })
            })
          }, t.prototype.decodeFromVideoDevice = function(n, r, i) {
            return ms(this, void 0, void 0, function() {
              var e;
              return Is(this, function(o) {
                switch (o.label) {
                  case 0:
                    return t.checkCallbackFnOrThrow(i), e = {
                      video: n ? {
                        deviceId: {
                          exact: n
                        }
                      } : {
                        facingMode: "environment"
                      }
                    }, [4, this.decodeFromConstraints(e, r, i)];
                  case 1:
                    return [2, o.sent()]
                }
              })
            })
          }, t.prototype.decodeFromVideoElement = function(n, r) {
            return ms(this, void 0, void 0, function() {
              var i, e;
              return Is(this, function(o) {
                switch (o.label) {
                  case 0:
                    if (t.checkCallbackFnOrThrow(r), !n) throw new c("A video element must be provided.");
                    return i = t.prepareVideoElement(n), e = this.options.tryPlayVideoTimeout, [4, t.playVideoOnLoadAsync(i, e)];
                  case 1:
                    return o.sent(), [2, this.scan(i, r)]
                }
              })
            })
          }, t.prototype.decodeFromVideoUrl = function(n, r) {
            return ms(this, void 0, void 0, function() {
              var i, e, o;
              return Is(this, function(u) {
                switch (u.label) {
                  case 0:
                    if (t.checkCallbackFnOrThrow(r), !n) throw new c("An URL must be provided.");
                    return (i = t.prepareVideoElement()).src = n, e = function() {
                      t.cleanVideoSource(i)
                    }, o = this.options.tryPlayVideoTimeout, [4, t.playVideoOnLoadAsync(i, o)];
                  case 1:
                    return u.sent(), [2, this.scan(i, r, e)]
                }
              })
            })
          }, t.prototype.decodeOnceFromConstraints = function(t, n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, this.getUserMedia(t)];
                  case 1:
                    return r = i.sent(), [4, this.decodeOnceFromStream(r, n)];
                  case 2:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromStream = function(n, r) {
            return ms(this, void 0, void 0, function() {
              var i, e;
              return Is(this, function(o) {
                switch (o.label) {
                  case 0:
                    return i = !!r, [4, t.attachStreamToVideo(n, r)];
                  case 1:
                    e = o.sent(), o.label = 2;
                  case 2:
                    return o.trys.push([2, , 4, 5]), [4, this.scanOneResult(e)];
                  case 3:
                    return [2, o.sent()];
                  case 4:
                    return i || t.cleanVideoSource(e), [7];
                  case 5:
                    return [2]
                }
              })
            })
          }, t.prototype.decodeOnceFromVideoDevice = function(t, n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    return r = {
                      video: t ? {
                        deviceId: {
                          exact: t
                        }
                      } : {
                        facingMode: "environment"
                      }
                    }, [4, this.decodeOnceFromConstraints(r, n)];
                  case 1:
                    return [2, i.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromVideoElement = function(n) {
            return ms(this, void 0, void 0, function() {
              var r, i;
              return Is(this, function(e) {
                switch (e.label) {
                  case 0:
                    if (!n) throw new c("A video element must be provided.");
                    return r = t.prepareVideoElement(n), i = this.options.tryPlayVideoTimeout, [4, t.playVideoOnLoadAsync(r, i)];
                  case 1:
                    return e.sent(), [4, this.scanOneResult(r)];
                  case 2:
                    return [2, e.sent()]
                }
              })
            })
          }, t.prototype.decodeOnceFromVideoUrl = function(n) {
            return ms(this, void 0, void 0, function() {
              var r, i;
              return Is(this, function(e) {
                switch (e.label) {
                  case 0:
                    if (!n) throw new c("An URL must be provided.");
                    (r = t.prepareVideoElement()).src = n, i = this.decodeOnceFromVideoElement(r), e.label = 1;
                  case 1:
                    return e.trys.push([1, , 3, 4]), [4, i];
                  case 2:
                    return [2, e.sent()];
                  case 3:
                    return t.cleanVideoSource(r), [7];
                  case 4:
                    return [2]
                }
              })
            })
          }, t.prototype.scanOneResult = function(t, n, r, i) {
            var e = this;
            return void 0 === n && (n = !0), void 0 === r && (r = !0), void 0 === i && (i = !0), new Promise(function(o, u) {
              e.scan(t, function(t, e, f) {
                if (t) return o(t), void f.stop();
                if (e) {
                  if (e instanceof it && n || e instanceof p && r || e instanceof F && i) return;
                  f.stop(), u(e)
                }
              })
            })
          }, t.prototype.scan = function(n, r, i) {
            var e = this;
            t.checkCallbackFnOrThrow(r);
            var o, u = t.createCaptureCanvas(n);
            try {
              o = u.getContext("2d", {
                willReadFrequently: !0
              })
            } catch {
              o = u.getContext("2d")
            }
            if (!o) throw Error("Couldn't create canvas for visual element scan.");
            var f, s = function() {
                o = void 0, u = void 0
              },
              a = !1,
              h = {
                stop: function() {
                  a = !0, clearTimeout(f), s(), i && i()
                }
              },
              c = function() {
                if (!a) try {
                  t.drawImageOnCanvas(o, n);
                  var l = e.decodeFromCanvas(u);
                  r(l, void 0, h), f = setTimeout(c, e.options.delayBetweenScanSuccess)
                } catch (t) {
                  if (r(void 0, t, h), t instanceof p || t instanceof F || t instanceof it) return void(f = setTimeout(c, e.options.delayBetweenScanAttempts));
                  s(), i && i(t)
                }
              };
            return c(), h
          }, t.prototype.T = function(n) {
            return ms(this, void 0, void 0, function() {
              return Is(this, function(r) {
                switch (r.label) {
                  case 0:
                    return t.isImageLoaded(n) ? [3, 2] : [4, t.P(n)];
                  case 1:
                    r.sent(), r.label = 2;
                  case 2:
                    return [2, this.decode(n)]
                }
              })
            })
          }, t.prototype.getUserMedia = function(n) {
            return ms(this, void 0, void 0, function() {
              var r;
              return Is(this, function(i) {
                switch (i.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(n)];
                  case 1:
                    return r = i.sent(), t.streamTracker.push(r), [2, r]
                }
              })
            })
          }, t.streamTracker = [], t
        }(),
        Ms = function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        Es = (function(t) {
          Ms(function(n, r) {
            return t.call(this, new gn, n, r) || this
          }, t)
        }(Ss), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        Os = (function(t) {
          Es(function(n, r) {
            return t.call(this, new $i(n), n, r) || this
          }, t)
        }(Ss), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        ks = (function(t) {
          Os(function(n, r) {
            return t.call(this, new ye, n, r) || this
          }, t)
        }(Ss), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        Ts = (function(t) {
          function n(n, r) {
            var i = this,
              e = new Su;
            return e.setHints(n), (i = t.call(this, e, n, r) || this).reader = e, i
          }
          ks(n, t), Object.defineProperty(n.prototype, "possibleFormats", {
            set: function(t) {
              this.hints.set(B.POSSIBLE_FORMATS, t), this.reader.setHints(this.hints)
            },
            enumerable: !1,
            configurable: !0
          }), n.prototype.decodeBitmap = function(t) {
            return this.reader.decodeWithState(t)
          }, n.prototype.setHints = function(t) {
            this.hints = t, this.reader.setHints(this.hints)
          }
        }(Ss), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        js = (function(t) {
          Ts(function(n, r) {
            return t.call(this, new Au, n, r) || this
          }, t)
        }(Ss), function() {
          var t = function(n, r) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function(t, n) {
                t.__proto__ = n
              } || function(t, n) {
                for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
              })(n, r)
          };
          return function(n, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + r + " is not a constructor or null");

            function i() {
              this.constructor = n
            }
            t(n, r), n.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }()),
        xs = function(t) {
          function n(n, r) {
            return t.call(this, new so, n, r) || this
          }
          return js(n, t), n
        }(Ss),
        Cs = "http://www.w3.org/2000/svg",
        Rs = (function() {
          function t(t) {
            if ("string" == typeof t) {
              var n = document.getElementById(t);
              if (!n) throw Error("Could not find a Container element with '".concat(t, "'."));
              this.containerElement = n
            } else this.containerElement = t
          }
          t.prototype.write = function(n, r, i, e) {
            if (0 === n.length) throw new v("Found empty contents");
            if (0 > r || 0 > i) throw new v("Requested dimensions are too small: " + r + "x" + i);
            var o = e && void 0 !== e.get(Tu.MARGIN) ? Number.parseInt(e.get(Tu.MARGIN).toString(), 10) : t.QUIET_ZONE_SIZE,
              u = this.encode(e, n);
            return this.renderResult(u, r, i, o)
          }, t.prototype.createSVGElement = function(n, r) {
            var i = document.createElementNS(t.SVG_NS, "svg");
            return i.setAttributeNS(Cs, "width", r.toString()), i.setAttributeNS(Cs, "height", n.toString()), i
          }, t.prototype.createSvgPathPlaceholderElement = function(n, r) {
            var i = document.createElementNS(t.SVG_NS, "path");
            return i.setAttributeNS(Cs, "d", "M0 0h".concat(n, "v").concat(r, "H0z")), i.setAttributeNS(Cs, "fill", "none"), i
          }, t.prototype.createSvgRectElement = function(n, r, i, e) {
            var o = document.createElementNS(t.SVG_NS, "rect");
            return o.setAttributeNS(Cs, "x", n.toString()), o.setAttributeNS(Cs, "y", r.toString()), o.setAttributeNS(Cs, "height", i.toString()), o.setAttributeNS(Cs, "width", e.toString()), o.setAttributeNS(Cs, "fill", "#000000"), o
          }, t.prototype.encode = function(t, n) {
            var r = pe.L;
            if (t && void 0 !== t.get(Tu.ERROR_CORRECTION)) {
              var i = t.get(Tu.ERROR_CORRECTION).toString();
              r = pe.fromString(i)
            }
            return $u.encode(n, r, t)
          }, t.prototype.renderResult = function(t, n, r, i) {
            var e = t.getMatrix();
            if (null === e) throw new qt;
            var o = e.getWidth(),
              u = e.getHeight(),
              f = o + 2 * i,
              s = u + 2 * i,
              a = Math.max(n, f),
              h = Math.max(r, s),
              c = Math.min(Math.floor(a / f), Math.floor(h / s)),
              l = Math.floor((a - o * c) / 2),
              w = Math.floor((h - u * c) / 2),
              v = this.createSVGElement(a, h),
              y = this.createSvgPathPlaceholderElement(n, r);
            v.appendChild(y), this.containerElement.appendChild(v);
            for (var d = 0, b = w; u > d; d++, b += c)
              for (var A = 0, p = l; o > A; A++, p += c)
                if (1 === e.get(A, d)) {
                  var m = this.createSvgRectElement(p, b, c, c);
                  v.appendChild(m)
                } return v
          }, t.QUIET_ZONE_SIZE = 4, t.SVG_NS = "http://www.w3.org/2000/svg"
        }(), "http://www.w3.org/2000/svg");
      ! function() {
        function t() {}
        t.prototype.write = function(n, r, i, e) {
          if (0 === n.length) throw new v("Found empty contents");
          if (0 > r || 0 > i) throw new v("Requested dimensions are too small: " + r + "x" + i);
          var o = pe.L,
            u = t.QUIET_ZONE_SIZE;
          if (e) {
            if (void 0 !== e.get(Tu.ERROR_CORRECTION)) {
              var f = e.get(Tu.ERROR_CORRECTION).toString();
              o = pe.fromString(f)
            }
            void 0 !== e.get(Tu.MARGIN) && (u = Number.parseInt(e.get(Tu.MARGIN).toString(), 10))
          }
          var s = $u.encode(n, o, e);
          return this.renderResult(s, r, i, u)
        }, t.prototype.writeToDom = function(t, n, r, i, e) {
          if ("string" == typeof t) {
            var o = document.querySelector(t);
            if (!o) throw Error("Could no find the target HTML element.");
            t = o
          }
          var u = this.write(n, r, i, e);
          t instanceof HTMLElement && t.appendChild(u)
        }, t.prototype.renderResult = function(t, n, r, i) {
          var e = t.getMatrix();
          if (null === e) throw new qt;
          for (var o = e.getWidth(), u = e.getHeight(), f = o + 2 * i, s = u + 2 * i, a = Math.max(n, f), h = Math.max(r, s), c = Math.min(Math.floor(a / f), Math.floor(h / s)), l = Math.floor((a - o * c) / 2), w = Math.floor((h - u * c) / 2), v = this.createSVGElement(a, h), y = 0, d = w; u > y; y++, d += c)
            for (var b = 0, A = l; o > b; b++, A += c)
              if (1 === e.get(b, y)) {
                var p = this.createSvgRectElement(A, d, c, c);
                v.appendChild(p)
              } return v
        }, t.prototype.createSVGElement = function(t, n) {
          var r = document.createElementNS(Rs, "svg"),
            i = t.toString(),
            e = n.toString();
          return r.setAttribute("height", e), r.setAttribute("width", i), r.setAttribute("viewBox", "0 0 " + i + " " + e), r
        }, t.prototype.createSvgRectElement = function(t, n, r, i) {
          var e = document.createElementNS(Rs, "rect");
          return e.setAttribute("x", t.toString()), e.setAttribute("y", n.toString()), e.setAttribute("height", r.toString()), e.setAttribute("width", i.toString()), e.setAttribute("fill", "#000000"), e
        }, t.QUIET_ZONE_SIZE = 4
      }()
    },
    51386: function(t, n, r) {
      "use strict";
      var i = r(48287).Buffer,
        e = this && this.t || function(t) {
          return t && t.i ? t : {
            default: t
          }
        };
      Object.defineProperty(n, "i", {
        value: !0
      }), n.chooseFragments = n.shuffle = n.chooseDegree = void 0;
      const o = r(11774),
        u = e(r(52801)),
        f = e(r(91284));
      n.chooseDegree = (t, n) => {
        const r = [...Array(t)].map((t, n) => 1 / (n + 1));
        return f.default(r, void 0, n.nextDouble).next() + 1
      }, n.shuffle = (t, n) => {
        let r = [...t],
          i = [];
        for (; r.length > 0;) {
          let t = n.nextInt(0, r.length - 1),
            e = r[t];
          r.splice(t, 1), i.push(e)
        }
        return i
      }, n.chooseFragments = (t, r, e) => {
        if (r >= t) return [t - 1];
        {
          const f = i.concat([o.intToBytes(t), o.intToBytes(e)]),
            s = new u.default(f),
            a = n.chooseDegree(r, s),
            h = [...Array(r)].map((t, n) => n);
          return n.shuffle(h, s).slice(0, a)
        }
      }
    },
    52801: function(t, n, r) {
      "use strict";
      var i = this && this.t || function(t) {
        return t && t.i ? t : {
          default: t
        }
      };
      Object.defineProperty(n, "i", {
        value: !0
      });
      const e = r(11774),
        o = i(r(61594)),
        u = i(r(75951)),
        f = (t, n) => u.default.bitwiseXor(u.default.asUintN(64, u.default.leftShift(t, u.default.BigInt(n))), u.default.BigInt(u.default.asUintN(64, u.default.signedRightShift(t, u.default.subtract(u.default.BigInt(64), u.default.BigInt(n))))));
      n.default = class {
        constructor(t) {
          this.next = () => new o.default(this.roll().toString()), this.nextDouble = () => new o.default(this.roll().toString()).div(0x10000000000000000), this.nextInt = (t, n) => Math.floor(this.nextDouble().toNumber() * (n - t + 1) + t), this.nextByte = () => this.nextInt(0, 255), this.nextData = t => [...Array(t)].map(() => this.nextByte());
          const n = e.sha256Hash(t);
          this.s = [u.default.BigInt(0), u.default.BigInt(0), u.default.BigInt(0), u.default.BigInt(0)], this.setS(n)
        }
        setS(t) {
          for (let n = 0; 4 > n; n++) {
            let r = 8 * n,
              i = u.default.BigInt(0);
            for (let n = 0; 8 > n; n++) i = u.default.asUintN(64, u.default.leftShift(i, u.default.BigInt(8))), i = u.default.asUintN(64, u.default.bitwiseOr(i, u.default.BigInt(t[r + n])));
            this.s[n] = u.default.asUintN(64, i)
          }
        }
        roll() {
          const t = u.default.asUintN(64, u.default.multiply(f(u.default.asUintN(64, u.default.multiply(this.s[1], u.default.BigInt(5))), 7), u.default.BigInt(9))),
            n = u.default.asUintN(64, u.default.leftShift(this.s[1], u.default.BigInt(17)));
          return this.s[2] = u.default.asUintN(64, u.default.bitwiseXor(this.s[2], u.default.BigInt(this.s[0]))), this.s[3] = u.default.asUintN(64, u.default.bitwiseXor(this.s[3], u.default.BigInt(this.s[1]))), this.s[1] = u.default.asUintN(64, u.default.bitwiseXor(this.s[1], u.default.BigInt(this.s[2]))), this.s[0] = u.default.asUintN(64, u.default.bitwiseXor(this.s[0], u.default.BigInt(this.s[3]))), this.s[2] = u.default.asUintN(64, u.default.bitwiseXor(this.s[2], u.default.BigInt(n))), this.s[3] = u.default.asUintN(64, f(this.s[3], 45)), t
        }
      }
    },
    64908: (t, n, r) => {
      "use strict";
      var i = r(48287).Buffer;
      Object.defineProperty(n, "i", {
        value: !0
      });
      const e = r(20908),
        o = r(11774),
        u = r(86287);
      class f {
        constructor(t, n = "bytes") {
          if (this.F = t, this.G = n, !o.isURType(this.G)) throw new e.InvalidTypeError
        }
        static fromBuffer(t) {
          return new f(u.cborEncode(t))
        }
        static from(t, n) {
          return f.fromBuffer(i.from(t, n))
        }
        decodeCBOR() {
          return u.cborDecode(this.F)
        }
        get type() {
          return this.G
        }
        get cbor() {
          return this.F
        }
        equals(t) {
          return this.type === t.type && this.cbor.equals(t.cbor)
        }
      }
      n.default = f
    },
    69861: (t, n, r) => {
      "use strict";
      r.d(n, {
        he: () => S
      });
      var i = Uint8Array,
        e = Uint16Array,
        o = Int32Array,
        u = new i([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        f = new i([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        s = (new i([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), function(t, n) {
          for (var r = new e(31), i = 0; 31 > i; ++i) r[i] = n += 1 << t[i - 1];
          var u = new o(r[30]);
          for (i = 1; 30 > i; ++i)
            for (var f = r[i]; f < r[i + 1]; ++f) u[f] = f - r[i] << 5 | i;
          return {
            b: r,
            r: u
          }
        }),
        a = s(u, 2),
        h = a.b,
        c = a.r;
      h[28] = 258, c[258] = 28;
      for (var l = s(f, 0), w = (l.b, l.r, new e(32768)), v = 0; 32768 > v; ++v) {
        var y = (43690 & v) >> 1 | (21845 & v) << 1;
        y = (61680 & (y = (52428 & y) >> 2 | (13107 & y) << 2)) >> 4 | (3855 & y) << 4, w[v] = ((65280 & y) >> 8 | (255 & y) << 8) >> 1
      }
      var d = new i(288);
      for (v = 0; 144 > v; ++v) d[v] = 8;
      for (v = 144; 256 > v; ++v) d[v] = 9;
      for (v = 256; 280 > v; ++v) d[v] = 7;
      for (v = 280; 288 > v; ++v) d[v] = 8;
      var b = new i(32);
      for (v = 0; 32 > v; ++v) b[v] = 5;
      var A = function(t, n, r) {
          return (null == n || 0 > n) && (n = 0), (null == r || r > t.length) && (r = t.length), new i(t.subarray(n, r))
        },
        p = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        m = function(t, n, r) {
          var i = Error(n || p[t]);
          if (i.code = t, Error.captureStackTrace && Error.captureStackTrace(i, m), !r) throw i;
          return i
        },
        I = (new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), new i(0));
      "u" > typeof TextEncoder && new TextEncoder;
      var _ = "u" > typeof TextDecoder && new TextDecoder;
      try {
        _.decode(I, {
          stream: !0
        })
      } catch {}
      var g = function(t) {
        for (var n = "", r = 0;;) {
          var i = t[r++],
            e = (i > 127) + (i > 223) + (i > 239);
          if (r + e > t.length) return {
            s: n,
            r: A(t, r - 1)
          };
          e ? 3 == e ? (i = ((15 & i) << 18 | (63 & t[r++]) << 12 | (63 & t[r++]) << 6 | 63 & t[r++]) - 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : n += String.fromCharCode(1 & e ? (31 & i) << 6 | 63 & t[r++] : (15 & i) << 12 | (63 & t[r++]) << 6 | 63 & t[r++]) : n += String.fromCharCode(i)
        }
      };

      function S(t, n) {
        if (n) {
          for (var r = "", i = 0; i < t.length; i += 16384) r += String.fromCharCode.apply(null, t.subarray(i, i + 16384));
          return r
        }
        if (_) return _.decode(t);
        var e = g(t),
          o = e.s;
        return (r = e.r).length && m(8), o
      }
      "function" == typeof queueMicrotask && queueMicrotask
    },
    70723: (t, n, r) => {
      "use strict";
      r.r(n), r.d(n, {
        crc1: () => u,
        crc16: () => l,
        crc16ccitt: () => v,
        crc16kermit: () => p,
        crc16modbus: () => d,
        crc16xmodem: () => b,
        crc24: () => I,
        crc32: () => g,
        crc8: () => s,
        crc81wire: () => h,
        crcjam: () => M,
        default: () => E
      });
      var i = r(18211);
      const e = i.hp.from && i.hp.alloc && i.hp.allocUnsafe && i.hp.allocUnsafeSlow ? i.hp.from : t => new i.hp(t);

      function o(t, n) {
        const r = (t, r) => n(t, r) >>> 0;
        return r.signed = n, r.unsigned = r, r.model = t, r
      }
      const u = o("crc1", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = ~~n,
          o = 0;
        for (let n = 0; n < t.length; n++) o += t[n];
        return r += o % 256, r % 256
      });
      let f = [0, 7, 14, 9, 28, 27, 18, 21, 56, 63, 54, 49, 36, 35, 42, 45, 112, 119, 126, 121, 108, 107, 98, 101, 72, 79, 70, 65, 84, 83, 90, 93, 224, 231, 238, 233, 252, 251, 242, 245, 216, 223, 214, 209, 196, 195, 202, 205, 144, 151, 158, 153, 140, 139, 130, 133, 168, 175, 166, 161, 180, 179, 186, 189, 199, 192, 201, 206, 219, 220, 213, 210, 255, 248, 241, 246, 227, 228, 237, 234, 183, 176, 185, 190, 171, 172, 165, 162, 143, 136, 129, 134, 147, 148, 157, 154, 39, 32, 41, 46, 59, 60, 53, 50, 31, 24, 17, 22, 3, 4, 13, 10, 87, 80, 89, 94, 75, 76, 69, 66, 111, 104, 97, 102, 115, 116, 125, 122, 137, 142, 135, 128, 149, 146, 155, 156, 177, 182, 191, 184, 173, 170, 163, 164, 249, 254, 247, 240, 229, 226, 235, 236, 193, 198, 207, 200, 221, 218, 211, 212, 105, 110, 103, 96, 117, 114, 123, 124, 81, 86, 95, 88, 77, 74, 67, 68, 25, 30, 23, 16, 5, 2, 11, 12, 33, 38, 47, 40, 61, 58, 51, 52, 78, 73, 64, 71, 82, 85, 92, 91, 118, 113, 120, 127, 106, 109, 100, 99, 62, 57, 48, 55, 34, 37, 44, 43, 6, 1, 8, 15, 26, 29, 20, 19, 174, 169, 160, 167, 178, 181, 188, 187, 150, 145, 152, 159, 138, 141, 132, 131, 222, 217, 208, 215, 194, 197, 204, 203, 230, 225, 232, 239, 250, 253, 244, 243];
      "u" > typeof Int32Array && (f = new Int32Array(f));
      const s = o("crc-8", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = ~~n;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 255 & f[255 & (r ^ i)]
        }
        return r
      });
      let a = [0, 94, 188, 226, 97, 63, 221, 131, 194, 156, 126, 32, 163, 253, 31, 65, 157, 195, 33, 127, 252, 162, 64, 30, 95, 1, 227, 189, 62, 96, 130, 220, 35, 125, 159, 193, 66, 28, 254, 160, 225, 191, 93, 3, 128, 222, 60, 98, 190, 224, 2, 92, 223, 129, 99, 61, 124, 34, 192, 158, 29, 67, 161, 255, 70, 24, 250, 164, 39, 121, 155, 197, 132, 218, 56, 102, 229, 187, 89, 7, 219, 133, 103, 57, 186, 228, 6, 88, 25, 71, 165, 251, 120, 38, 196, 154, 101, 59, 217, 135, 4, 90, 184, 230, 167, 249, 27, 69, 198, 152, 122, 36, 248, 166, 68, 26, 153, 199, 37, 123, 58, 100, 134, 216, 91, 5, 231, 185, 140, 210, 48, 110, 237, 179, 81, 15, 78, 16, 242, 172, 47, 113, 147, 205, 17, 79, 173, 243, 112, 46, 204, 146, 211, 141, 111, 49, 178, 236, 14, 80, 175, 241, 19, 77, 206, 144, 114, 44, 109, 51, 209, 143, 12, 82, 176, 238, 50, 108, 142, 208, 83, 13, 239, 177, 240, 174, 76, 18, 145, 207, 45, 115, 202, 148, 118, 40, 171, 245, 23, 73, 8, 86, 180, 234, 105, 55, 213, 139, 87, 9, 235, 181, 54, 104, 138, 212, 149, 203, 41, 119, 244, 170, 72, 22, 233, 183, 85, 11, 136, 214, 52, 106, 43, 117, 151, 201, 74, 20, 246, 168, 116, 42, 200, 150, 21, 75, 169, 247, 182, 232, 10, 84, 215, 137, 107, 53];
      "u" > typeof Int32Array && (a = new Int32Array(a));
      const h = o("dallas-1-wire", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = ~~n;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 255 & a[255 & (r ^ i)]
        }
        return r
      });
      let c = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
      "u" > typeof Int32Array && (c = new Int32Array(c));
      const l = o("crc-16", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = ~~n;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 65535 & (c[255 & (r ^ i)] ^ r >> 8)
        }
        return r
      });
      let w = [0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920];
      "u" > typeof Int32Array && (w = new Int32Array(w));
      const v = o("ccitt", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = "u" > typeof n ? ~~n : 65535;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 65535 & (w[255 & (r >> 8 ^ i)] ^ r << 8)
        }
        return r
      });
      let y = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
      "u" > typeof Int32Array && (y = new Int32Array(y));
      const d = o("crc-16-modbus", function(t, n) {
          i.hp.isBuffer(t) || (t = e(t));
          let r = "u" > typeof n ? ~~n : 65535;
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            r = 65535 & (y[255 & (r ^ i)] ^ r >> 8)
          }
          return r
        }),
        b = o("xmodem", function(t, n) {
          i.hp.isBuffer(t) || (t = e(t));
          let r = "u" > typeof n ? ~~n : 0;
          for (let n = 0; n < t.length; n++) {
            let i = r >>> 8 & 255;
            i ^= 255 & t[n], i ^= i >>> 4, r = r << 8 & 65535, r ^= i, i = i << 5 & 65535, r ^= i, i = i << 7 & 65535, r ^= i
          }
          return r
        });
      let A = [0, 4489, 8978, 12955, 17956, 22445, 25910, 29887, 35912, 40385, 44890, 48851, 51820, 56293, 59774, 63735, 4225, 264, 13203, 8730, 22181, 18220, 30135, 25662, 40137, 36160, 49115, 44626, 56045, 52068, 63999, 59510, 8450, 12427, 528, 5017, 26406, 30383, 17460, 21949, 44362, 48323, 36440, 40913, 60270, 64231, 51324, 55797, 12675, 8202, 4753, 792, 30631, 26158, 21685, 17724, 48587, 44098, 40665, 36688, 64495, 60006, 55549, 51572, 16900, 21389, 24854, 28831, 1056, 5545, 10034, 14011, 52812, 57285, 60766, 64727, 34920, 39393, 43898, 47859, 21125, 17164, 29079, 24606, 5281, 1320, 14259, 9786, 57037, 53060, 64991, 60502, 39145, 35168, 48123, 43634, 25350, 29327, 16404, 20893, 9506, 13483, 1584, 6073, 61262, 65223, 52316, 56789, 43370, 47331, 35448, 39921, 29575, 25102, 20629, 16668, 13731, 9258, 5809, 1848, 65487, 60998, 56541, 52564, 47595, 43106, 39673, 35696, 33800, 38273, 42778, 46739, 49708, 54181, 57662, 61623, 2112, 6601, 11090, 15067, 20068, 24557, 28022, 31999, 38025, 34048, 47003, 42514, 53933, 49956, 61887, 57398, 6337, 2376, 15315, 10842, 24293, 20332, 32247, 27774, 42250, 46211, 34328, 38801, 58158, 62119, 49212, 53685, 10562, 14539, 2640, 7129, 28518, 32495, 19572, 24061, 46475, 41986, 38553, 34576, 62383, 57894, 53437, 49460, 14787, 10314, 6865, 2904, 32743, 28270, 23797, 19836, 50700, 55173, 58654, 62615, 32808, 37281, 41786, 45747, 19012, 23501, 26966, 30943, 3168, 7657, 12146, 16123, 54925, 50948, 62879, 58390, 37033, 33056, 46011, 41522, 23237, 19276, 31191, 26718, 7393, 3432, 16371, 11898, 59150, 63111, 50204, 54677, 41258, 45219, 33336, 37809, 27462, 31439, 18516, 23005, 11618, 15595, 3696, 8185, 63375, 58886, 54429, 50452, 45483, 40994, 37561, 33584, 31687, 27214, 22741, 18780, 15843, 11370, 7921, 3960];
      "u" > typeof Int32Array && (A = new Int32Array(A));
      const p = o("kermit", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = "u" > typeof n ? ~~n : 0;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 65535 & (A[255 & (r ^ i)] ^ r >> 8)
        }
        return r
      });
      let m = [0, 8801531, 9098509, 825846, 9692897, 1419802, 1651692, 10452759, 10584377, 2608578, 2839604, 11344079, 3303384, 11807523, 12104405, 4128302, 12930697, 4391538, 5217156, 13227903, 5679208, 13690003, 14450021, 5910942, 6606768, 14844747, 15604413, 6837830, 16197969, 7431594, 8256604, 16494759, 840169, 9084178, 8783076, 18463, 10434312, 1670131, 1434117, 9678590, 11358416, 2825259, 2590173, 10602790, 4109873, 12122826, 11821884, 3289031, 13213536, 5231515, 4409965, 12912278, 5929345, 14431610, 13675660, 5693559, 6823513, 15618722, 14863188, 6588335, 16513208, 8238147, 7417269, 16212302, 1680338, 10481449, 9664223, 1391140, 9061683, 788936, 36926, 8838341, 12067563, 4091408, 3340262, 11844381, 2868234, 11372785, 10555655, 2579964, 14478683, 5939616, 5650518, 13661357, 5180346, 13190977, 12967607, 4428364, 8219746, 16457881, 16234863, 7468436, 15633027, 6866552, 6578062, 14816117, 1405499, 9649856, 10463030, 1698765, 8819930, 55329, 803287, 9047340, 11858690, 3325945, 4072975, 12086004, 2561507, 10574104, 11387118, 2853909, 13647026, 5664841, 5958079, 14460228, 4446803, 12949160, 13176670, 5194661, 7454091, 16249200, 16476294, 8201341, 14834538, 6559633, 6852199, 15647388, 3360676, 11864927, 12161705, 4185682, 10527045, 2551230, 2782280, 11286707, 9619101, 1346150, 1577872, 10379115, 73852, 8875143, 9172337, 899466, 16124205, 7357910, 8182816, 16421083, 6680524, 14918455, 15678145, 6911546, 5736468, 13747439, 14507289, 5968354, 12873461, 4334094, 5159928, 13170435, 4167245, 12180150, 11879232, 3346363, 11301036, 2767959, 2532769, 10545498, 10360692, 1596303, 1360505, 9604738, 913813, 9157998, 8856728, 92259, 16439492, 8164415, 7343561, 16138546, 6897189, 15692510, 14936872, 6662099, 5986813, 14488838, 13733104, 5750795, 13156124, 5174247, 4352529, 12855018, 2810998, 11315341, 10498427, 2522496, 12124823, 4148844, 3397530, 11901793, 9135439, 862644, 110658, 8912057, 1606574, 10407765, 9590435, 1317464, 15706879, 6940164, 6651890, 14889737, 8145950, 16384229, 16161043, 7394792, 5123014, 13133629, 12910283, 4370992, 14535975, 5997020, 5707818, 13718737, 2504095, 10516836, 11329682, 2796649, 11916158, 3383173, 4130419, 12143240, 8893606, 129117, 876971, 9121104, 1331783, 9576124, 10389322, 1625009, 14908182, 6633453, 6925851, 15721184, 7380471, 16175372, 16402682, 8127489, 4389423, 12891860, 13119266, 5137369, 13704398, 5722165, 6015427, 14517560];
      "u" > typeof Int32Array && (m = new Int32Array(m));
      const I = o("crc-24", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = "u" > typeof n ? ~~n : 11994318;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = 16777215 & (m[255 & (r >> 16 ^ i)] ^ r << 8)
        }
        return r
      });
      let _ = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
      "u" > typeof Int32Array && (_ = new Int32Array(_));
      const g = o("crc-32", function(t, n) {
        i.hp.isBuffer(t) || (t = e(t));
        let r = 0 === n ? 0 : -1 ^ n;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          r = _[255 & (r ^ i)] ^ r >>> 8
        }
        return -1 ^ r
      });
      let S = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
      "u" > typeof Int32Array && (S = new Int32Array(S));
      const M = o("jam", function(t, n = -1) {
          i.hp.isBuffer(t) || (t = e(t));
          let r = 0 === n ? 0 : ~~n;
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            r = S[255 & (r ^ i)] ^ r >>> 8
          }
          return r
        }),
        E = {
          crc1: u,
          crc8: s,
          crc81wire: h,
          crc16: l,
          crc16ccitt: v,
          crc16modbus: d,
          crc16xmodem: b,
          crc16kermit: p,
          crc24: I,
          crc32: g,
          crcjam: M
        }
    },
    75951: function(t) {
      t.exports = function() {
        "use strict";
        var t = Math.imul,
          n = Math.clz32,
          r = Math.abs,
          i = Math.max,
          e = Math.floor;
        class o extends Array {
          constructor(t, n) {
            if (super(t), this.sign = n, t > o.q) throw new RangeError("Maximum BigInt size exceeded")
          }
          static BigInt(t) {
            var n = Number.isFinite;
            if ("number" == typeof t) {
              if (0 === t) return o.X();
              if (o.W(t)) return 0 > t ? o.$(-t, !0) : o.$(t, !1);
              if (!n(t) || e(t) !== t) throw new RangeError("The number " + t + " cannot be converted to BigInt because it is not an integer");
              return o.K(t)
            }
            if ("string" == typeof t) {
              const n = o.V(t);
              if (null === n) throw new SyntaxError("Cannot convert " + t + " to a BigInt");
              return n
            }
            if ("boolean" == typeof t) return !0 === t ? o.$(1, !1) : o.X();
            if ("object" == typeof t) {
              if (t.constructor === o) return t;
              const n = o.Z(t);
              return o.BigInt(n)
            }
            throw new TypeError("Cannot convert " + t + " to a BigInt")
          }
          toDebugString() {
            const t = ["BigInt["];
            for (const n of this) t.push((n && (n >>> 0).toString(16)) + ", ");
            return t.push("]"), t.join("")
          }
          toString(t = 10) {
            if (2 > t || t > 36) throw new RangeError("toString() radix argument must be between 2 and 36");
            return 0 === this.length ? "0" : t & t - 1 ? o.J(this, t, !1) : o.Y(this, t)
          }
          static toNumber(t) {
            const n = t.length;
            if (0 === n) return 0;
            if (1 === n) {
              const n = t.tt(0);
              return t.sign ? -n : n
            }
            const r = t.nt(n - 1),
              i = o.rt(r),
              e = 30 * n - i;
            if (e > 1024) return t.sign ? -1 / 0 : 1 / 0;
            let u = e - 1,
              f = r,
              s = n - 1;
            const a = i + 3;
            let h = 32 === a ? 0 : f << a;
            h >>>= 12;
            const c = a - 12;
            let l = 12 > a ? f << 20 + a : 0,
              w = 20 + a;
            for (c > 0 && s > 0 && (s--, f = t.nt(s), h |= f >>> 30 - c, l = f << c + 2, w = c + 2); w > 0 && s > 0;) s--, f = t.nt(s), l |= 30 > w ? f >>> 30 - w : f << w - 30, w -= 30;
            const v = o.it(t, w, s, f);
            if ((1 === v || 0 === v && !(1 & ~l)) && (l = l + 1 >>> 0, 0 === l && (h++, h >>> 20 != 0 && (h = 0, u++, u > 1023)))) return t.sign ? -1 / 0 : 1 / 0;
            const y = t.sign ? -2147483648 : 0;
            return u = u + 1023 << 20, o.et[1] = y | u | h, o.et[0] = l, o.ot[0]
          }
          static unaryMinus(t) {
            if (0 === t.length) return t;
            const n = t.ut();
            return n.sign = !t.sign, n
          }
          static bitwiseNot(t) {
            return t.sign ? o.st(t).ft() : o.ht(t, !0)
          }
          static exponentiate(t, n) {
            if (n.sign) throw new RangeError("Exponent must be positive");
            if (0 === n.length) return o.$(1, !1);
            if (0 === t.length) return t;
            if (1 === t.length && 1 === t.nt(0)) return !t.sign || 1 & n.nt(0) ? t : o.unaryMinus(t);
            if (n.length > 1) throw new RangeError("BigInt too big");
            let r = n.tt(0);
            if (1 === r) return t;
            if (r >= o.ct) throw new RangeError("BigInt too big");
            if (1 === t.length && 2 === t.nt(0)) {
              const n = 1 + (0 | r / 30),
                i = t.sign && !!(1 & r),
                e = new o(n, i);
              e.lt();
              const u = 1 << r % 30;
              return e.wt(n - 1, u), e
            }
            let i = null,
              e = t;
            for (!!(1 & r) && (i = t), r >>= 1; 0 !== r; r >>= 1) e = o.multiply(e, e), 1 & r && (i = null === i ? e : o.multiply(i, e));
            return i
          }
          static multiply(t, n) {
            if (0 === t.length) return t;
            if (0 === n.length) return n;
            let r = t.length + n.length;
            t.vt() + n.vt() >= 30 && r--;
            const i = new o(r, t.sign !== n.sign);
            i.lt();
            for (let r = 0; r < t.length; r++) o.yt(n, t.nt(r), i, r);
            return i.ft()
          }
          static divide(t, n) {
            if (0 === n.length) throw new RangeError("Division by zero");
            if (0 > o.dt(t, n)) return o.X();
            const r = t.sign !== n.sign,
              i = n.tt(0);
            let e;
            if (1 !== n.length || i > 32767) e = o.bt(t, n, !0, !1);
            else {
              if (1 === i) return r === t.sign ? t : o.unaryMinus(t);
              e = o.At(t, i, null)
            }
            return e.sign = r, e.ft()
          }
          static remainder(t, n) {
            if (0 === n.length) throw new RangeError("Division by zero");
            if (0 > o.dt(t, n)) return t;
            const r = n.tt(0);
            if (1 === n.length && 32767 >= r) {
              if (1 === r) return o.X();
              const n = o.It(t, r);
              return 0 === n ? o.X() : o.$(n, t.sign)
            }
            const i = o.bt(t, n, !1, !0);
            return i.sign = t.sign, i.ft()
          }
          static add(t, n) {
            const r = t.sign;
            return r === n.sign ? o._t(t, n, r) : 0 > o.dt(t, n) ? o.gt(n, t, !r) : o.gt(t, n, r)
          }
          static subtract(t, n) {
            const r = t.sign;
            return r === n.sign ? 0 > o.dt(t, n) ? o.gt(n, t, !r) : o.gt(t, n, r) : o._t(t, n, r)
          }
          static leftShift(t, n) {
            return 0 === n.length || 0 === t.length ? t : n.sign ? o.St(t, n) : o.Mt(t, n)
          }
          static signedRightShift(t, n) {
            return 0 === n.length || 0 === t.length ? t : n.sign ? o.Mt(t, n) : o.St(t, n)
          }
          static unsignedRightShift() {
            throw new TypeError("BigInts have no unsigned right shift; use >> instead")
          }
          static lessThan(t, n) {
            return 0 > o.Et(t, n)
          }
          static lessThanOrEqual(t, n) {
            return 0 >= o.Et(t, n)
          }
          static greaterThan(t, n) {
            return o.Et(t, n) > 0
          }
          static greaterThanOrEqual(t, n) {
            return o.Et(t, n) >= 0
          }
          static equal(t, n) {
            if (t.sign !== n.sign || t.length !== n.length) return !1;
            for (let r = 0; r < t.length; r++)
              if (t.nt(r) !== n.nt(r)) return !1;
            return !0
          }
          static notEqual(t, n) {
            return !o.equal(t, n)
          }
          static bitwiseAnd(t, n) {
            if (!t.sign && !n.sign) return o.Ot(t, n).ft();
            if (t.sign && n.sign) {
              const r = i(t.length, n.length) + 1;
              let e = o.st(t, r);
              const u = o.st(n);
              return e = o.kt(e, u, e), o.ht(e, !0, e).ft()
            }
            return t.sign && ([t, n] = [n, t]), o.Tt(t, o.st(n)).ft()
          }
          static bitwiseXor(t, n) {
            if (!t.sign && !n.sign) return o.jt(t, n).ft();
            if (t.sign && n.sign) {
              const r = i(t.length, n.length),
                e = o.st(t, r),
                u = o.st(n);
              return o.jt(e, u, e).ft()
            }
            const r = i(t.length, n.length) + 1;
            t.sign && ([t, n] = [n, t]);
            let e = o.st(n, r);
            return e = o.jt(e, t, e), o.ht(e, !0, e).ft()
          }
          static bitwiseOr(t, n) {
            const r = i(t.length, n.length);
            if (!t.sign && !n.sign) return o.kt(t, n).ft();
            if (t.sign && n.sign) {
              let i = o.st(t, r);
              const e = o.st(n);
              return i = o.Ot(i, e, i), o.ht(i, !0, i).ft()
            }
            t.sign && ([t, n] = [n, t]);
            let e = o.st(n, r);
            return e = o.Tt(e, t, e), o.ht(e, !0, e).ft()
          }
          static asIntN(t, n) {
            if (0 === n.length) return n;
            if (0 > (t = e(t))) throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === t) return o.X();
            if (t >= o.ct) return n;
            const r = 0 | (t + 29) / 30;
            if (n.length < r) return n;
            const i = n.tt(r - 1),
              u = 1 << (t - 1) % 30;
            if (n.length === r && u > i) return n;
            if ((i & u) !== u) return o.xt(t, n);
            if (!n.sign) return o.Ct(t, n, !0);
            if (!(i & u - 1)) {
              for (let i = r - 2; i >= 0; i--)
                if (0 !== n.nt(i)) return o.Ct(t, n, !1);
              return n.length === r && i === u ? n : o.xt(t, n)
            }
            return o.Ct(t, n, !1)
          }
          static asUintN(t, n) {
            if (0 === n.length) return n;
            if (0 > (t = e(t))) throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === t) return o.X();
            if (n.sign) {
              if (t > o.ct) throw new RangeError("BigInt too big");
              return o.Ct(t, n, !1)
            }
            if (t >= o.ct) return n;
            const r = 0 | (t + 29) / 30;
            if (n.length < r) return n;
            const i = t % 30;
            return n.length != r || 0 !== i && n.nt(r - 1) >>> i ? o.xt(t, n) : n
          }
          static ADD(t, n) {
            if (t = o.Z(t), n = o.Z(n), "string" == typeof t) return "string" != typeof n && (n = n.toString()), t + n;
            if ("string" == typeof n) return t.toString() + n;
            if (t = o.Rt(t), n = o.Rt(n), o.Nt(t) && o.Nt(n)) return o.add(t, n);
            if ("number" == typeof t && "number" == typeof n) return t + n;
            throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")
          }
          static LT(t, n) {
            return o.Ut(t, n, 0)
          }
          static LE(t, n) {
            return o.Ut(t, n, 1)
          }
          static GT(t, n) {
            return o.Ut(t, n, 2)
          }
          static GE(t, n) {
            return o.Ut(t, n, 3)
          }
          static EQ(t, n) {
            for (;;) {
              if (o.Nt(t)) return o.Nt(n) ? o.equal(t, n) : o.EQ(n, t);
              if ("number" == typeof t) {
                if (o.Nt(n)) return o.Dt(n, t);
                if ("object" != typeof n) return t == n;
                n = o.Z(n)
              } else if ("string" == typeof t) {
                if (o.Nt(n)) return null !== (t = o.V(t)) && o.equal(t, n);
                if ("object" != typeof n) return t == n;
                n = o.Z(n)
              } else if ("boolean" == typeof t) {
                if (o.Nt(n)) return o.Dt(n, +t);
                if ("object" != typeof n) return t == n;
                n = o.Z(n)
              } else if ("symbol" == typeof t) {
                if (o.Nt(n)) return !1;
                if ("object" != typeof n) return t == n;
                n = o.Z(n)
              } else {
                if ("object" != typeof t) return t == n;
                if ("object" == typeof n && n.constructor !== o) return t == n;
                t = o.Z(t)
              }
            }
          }
          static NE(t, n) {
            return !o.EQ(t, n)
          }
          static X() {
            return new o(0, !1)
          }
          static $(t, n) {
            const r = new o(1, n);
            return r.wt(0, t), r
          }
          ut() {
            const t = new o(this.length, this.sign);
            for (let n = 0; n < this.length; n++) t[n] = this[n];
            return t
          }
          ft() {
            let t = this.length,
              n = this[t - 1];
            for (; 0 === n;) t--, n = this[t - 1], this.pop();
            return 0 === t && (this.sign = !1), this
          }
          lt() {
            for (let t = 0; t < this.length; t++) this[t] = 0
          }
          static it(t, n, r, i) {
            if (n > 0) return -1;
            let e;
            if (0 > n) e = -n - 1;
            else {
              if (0 === r) return -1;
              r--, i = t.nt(r), e = 29
            }
            let o = 1 << e;
            if (0 == (i & o)) return -1;
            if (o -= 1, 0 != (i & o)) return 1;
            for (; r > 0;)
              if (r--, 0 !== t.nt(r)) return 1;
            return 0
          }
          static K(t) {
            o.ot[0] = t;
            const n = (2047 & o.et[1] >>> 20) - 1023,
              r = 1 + (0 | n / 30),
              i = new o(r, 0 > t);
            let e = 1048575 & o.et[1] | 1048576,
              u = o.et[0];
            const f = n % 30;
            let s, a = 0;
            if (20 > f) {
              const t = 20 - f;
              a = t + 32, s = e >>> t, e = e << 32 - t | u >>> t, u <<= 32 - t
            } else if (20 === f) a = 32, s = e, e = u, u = 0;
            else {
              const t = f - 20;
              a = 32 - t, s = e << t | u >>> 32 - t, e = u << t, u = 0
            }
            i.wt(r - 1, s);
            for (let t = r - 2; t >= 0; t--) a > 0 ? (a -= 30, s = e >>> 2, e = e << 30 | u >>> 2, u <<= 30) : s = 0, i.wt(t, s);
            return i.ft()
          }
          static Bt(t) {
            return 13 >= t && t >= 9 || (t > 159 ? t > 131071 ? t > 196607 ? 65279 == t : 10 >= (t &= 131071) || 40 == t || 41 == t || 47 == t || 95 == t || 4096 == t : 160 == t || 5760 == t : 32 == t)
          }
          static V(t, n = 0) {
            let r = 0;
            const i = t.length;
            let e = 0;
            if (e === i) return o.X();
            let u = t.charCodeAt(e);
            for (; o.Bt(u);) {
              if (++e === i) return o.X();
              u = t.charCodeAt(e)
            }
            if (43 === u) {
              if (++e === i) return null;
              u = t.charCodeAt(e), r = 1
            } else if (45 === u) {
              if (++e === i) return null;
              u = t.charCodeAt(e), r = -1
            }
            if (0 === n) {
              if (n = 10, 48 === u) {
                if (++e === i) return o.X();
                if (u = t.charCodeAt(e), 88 === u || 120 === u) {
                  if (n = 16, ++e === i) return null;
                  u = t.charCodeAt(e)
                } else if (79 === u || 111 === u) {
                  if (n = 8, ++e === i) return null;
                  u = t.charCodeAt(e)
                } else if (66 === u || 98 === u) {
                  if (n = 2, ++e === i) return null;
                  u = t.charCodeAt(e)
                }
              }
            } else if (16 === n && 48 === u) {
              if (++e === i) return o.X();
              if (u = t.charCodeAt(e), 88 === u || 120 === u) {
                if (++e === i) return null;
                u = t.charCodeAt(e)
              }
            }
            if (0 != r && 10 !== n) return null;
            for (; 48 === u;) {
              if (++e === i) return o.X();
              u = t.charCodeAt(e)
            }
            const f = i - e;
            let s = o.Pt[n],
              a = o.Lt - 1;
            if (f > 1073741824 / s) return null;
            const h = s * f + a >>> o.Ft,
              c = new o(0 | (h + 29) / 30, !1),
              l = 10 > n ? n : 10,
              w = n > 10 ? n - 10 : 0;
            if (n & n - 1) {
              c.lt();
              let r = !1,
                f = 0;
              do {
                let h = 0,
                  v = 1;
                for (;;) {
                  let o;
                  if (l > u - 48 >>> 0) o = u - 48;
                  else {
                    if ((32 | u) - 97 >>> 0 >= w) {
                      r = !0;
                      break
                    }
                    o = (32 | u) - 87
                  }
                  const s = v * n;
                  if (s > 1073741823) break;
                  if (v = s, h = h * n + o, f++, ++e === i) {
                    r = !0;
                    break
                  }
                  u = t.charCodeAt(e)
                }
                a = 30 * o.Lt - 1;
                const y = 0 | (s * f + a >>> o.Ft) / 30;
                c.Gt(v, h, y)
              } while (!r)
            } else {
              s >>= o.Ft;
              const n = [],
                r = [];
              let f = !1;
              do {
                let o = 0,
                  a = 0;
                for (;;) {
                  let n;
                  if (l > u - 48 >>> 0) n = u - 48;
                  else {
                    if ((32 | u) - 97 >>> 0 >= w) {
                      f = !0;
                      break
                    }
                    n = (32 | u) - 87
                  }
                  if (a += s, o = o << s | n, ++e === i) {
                    f = !0;
                    break
                  }
                  if (u = t.charCodeAt(e), a + s > 30) break
                }
                n.push(o), r.push(a)
              } while (!f);
              o.zt(c, n, r)
            }
            if (e !== i) {
              if (!o.Bt(u)) return null;
              for (e++; i > e; e++)
                if (u = t.charCodeAt(e), !o.Bt(u)) return null
            }
            return c.sign = -1 == r, c.ft()
          }
          static zt(t, n, r) {
            let i = 0,
              e = 0,
              o = 0;
            for (let u = n.length - 1; u >= 0; u--) {
              const f = n[u],
                s = r[u];
              e |= f << o, o += s, 30 === o ? (t.wt(i++, e), o = 0, e = 0) : o > 30 && (t.wt(i++, 1073741823 & e), o -= 30, e = f >>> s - o)
            }
            if (0 !== e) {
              if (i >= t.length) throw Error("implementation bug");
              t.wt(i++, e)
            }
            for (; i < t.length; i++) t.wt(i, 0)
          }
          static Y(t, n) {
            const r = t.length;
            let i = n - 1;
            i = (85 & i >>> 1) + (85 & i), i = (51 & i >>> 2) + (51 & i), i = (15 & i >>> 4) + (15 & i);
            const e = i,
              u = n - 1,
              f = t.nt(r - 1);
            let s = 0 | (30 * r - o.rt(f) + e - 1) / e;
            if (t.sign && s++, s > 268435456) throw Error("string too long");
            const a = Array(s);
            let h = s - 1,
              c = 0,
              l = 0;
            for (let n = 0; r - 1 > n; n++) {
              const r = t.nt(n),
                i = (c | r << l) & u;
              a[h--] = o.Ht[i];
              const f = e - l;
              for (c = r >>> f, l = 30 - f; l >= e;) a[h--] = o.Ht[c & u], c >>>= e, l -= e
            }
            const w = (c | f << l) & u;
            for (a[h--] = o.Ht[w], c = f >>> e - l; 0 !== c;) a[h--] = o.Ht[c & u], c >>>= e;
            if (t.sign && (a[h--] = "-"), -1 != h) throw Error("implementation bug");
            return a.join("")
          }
          static J(t, n, r) {
            const i = t.length;
            if (0 === i) return "";
            if (1 === i) {
              let i = t.tt(0).toString(n);
              return !1 === r && t.sign && (i = "-" + i), i
            }
            const e = 30 * i - o.rt(t.nt(i - 1)),
              u = o.Pt[n] - 1;
            let f = e * o.Lt;
            f += u - 1, f = 0 | f / u;
            const s = f + 1 >> 1,
              a = o.exponentiate(o.$(n, !1), o.$(s, !1));
            let h, c;
            const l = a.tt(0);
            if (1 !== a.length || l > 32767) {
              const r = o.bt(t, a, !0, !0);
              h = r.quotient;
              const i = r.remainder.ft();
              c = o.J(i, n, !0)
            } else {
              h = new o(t.length, !1), h.lt();
              let r = 0;
              for (let n = 2 * t.length - 1; n >= 0; n--) {
                const i = r << 15 | t.qt(n);
                h.Xt(n, 0 | i / l), r = 0 | i % l
              }
              c = r.toString(n)
            }
            h.ft();
            let w = o.J(h, n, !0);
            for (; c.length < s;) c = "0" + c;
            return !1 === r && t.sign && (w = "-" + w), w + c
          }
          static Wt(t) {
            return t ? -1 : 1
          }
          static $t(t) {
            return t ? -1 : 1
          }
          static Kt(t) {
            return t ? 1 : -1
          }
          static Et(t, n) {
            const r = t.sign;
            if (r !== n.sign) return o.Wt(r);
            const i = o.dt(t, n);
            return i > 0 ? o.$t(r) : 0 > i ? o.Kt(r) : 0
          }
          static Vt(t, n) {
            if (o.W(n)) {
              const i = t.sign,
                e = 0 > n;
              if (i !== e) return o.Wt(i);
              if (0 === t.length) {
                if (e) throw Error("implementation bug");
                return 0 === n ? 0 : -1
              }
              if (t.length > 1) return o.$t(i);
              const u = r(n),
                f = t.tt(0);
              return f > u ? o.$t(i) : u > f ? o.Kt(i) : 0
            }
            return o.Zt(t, n)
          }
          static Zt(t, n) {
            if (n != n) return n;
            if (n === 1 / 0) return -1;
            if (n === -1 / 0) return 1;
            const r = t.sign;
            if (r !== 0 > n) return o.Wt(r);
            if (0 === n) throw Error("implementation bug: should be handled elsewhere");
            if (0 === t.length) return -1;
            o.ot[0] = n;
            const i = 2047 & o.et[1] >>> 20;
            if (2047 == i) throw Error("implementation bug: handled elsewhere");
            const e = i - 1023;
            if (0 > e) return o.$t(r);
            const u = t.length;
            let f = t.nt(u - 1);
            const s = o.rt(f),
              a = 30 * u - s,
              h = e + 1;
            if (h > a) return o.Kt(r);
            if (a > h) return o.$t(r);
            let c = 1048576 | 1048575 & o.et[1],
              l = o.et[0];
            const w = 29 - s;
            if (w !== (0 | (a - 1) % 30)) throw Error("implementation bug");
            let v, y = 0;
            if (20 > w) {
              const t = 20 - w;
              y = t + 32, v = c >>> t, c = c << 32 - t | l >>> t, l <<= 32 - t
            } else if (20 === w) y = 32, v = c, c = l, l = 0;
            else {
              const t = w - 20;
              y = 32 - t, v = c << t | l >>> 32 - t, c = l << t, l = 0
            }
            if (f >>>= 0, v >>>= 0, f > v) return o.$t(r);
            if (v > f) return o.Kt(r);
            for (let n = u - 2; n >= 0; n--) {
              y > 0 ? (y -= 30, v = c >>> 2, c = c << 30 | l >>> 2, l <<= 30) : v = 0;
              const i = t.tt(n);
              if (i > v) return o.$t(r);
              if (v > i) return o.Kt(r)
            }
            if (0 !== c || 0 !== l) {
              if (0 === y) throw Error("implementation bug");
              return o.Kt(r)
            }
            return 0
          }
          static Dt(t, n) {
            return o.W(n) ? 0 === n ? 0 === t.length : 1 === t.length && t.sign === 0 > n && t.tt(0) === r(n) : 0 === o.Zt(t, n)
          }
          static Jt(t, n) {
            return 0 === n ? 0 > t : 1 === n ? 0 >= t : 2 === n ? t > 0 : 3 === n ? t >= 0 : void 0
          }
          static Ut(t, n, r) {
            if (t = o.Z(t), n = o.Z(n), "string" == typeof t && "string" == typeof n) switch (r) {
              case 0:
                return n > t;
              case 1:
                return n >= t;
              case 2:
                return t > n;
              case 3:
                return t >= n
            }
            if (o.Nt(t) && "string" == typeof n) return null !== (n = o.V(n)) && o.Jt(o.Et(t, n), r);
            if ("string" == typeof t && o.Nt(n)) return null !== (t = o.V(t)) && o.Jt(o.Et(t, n), r);
            if (t = o.Rt(t), n = o.Rt(n), o.Nt(t)) {
              if (o.Nt(n)) return o.Jt(o.Et(t, n), r);
              if ("number" != typeof n) throw Error("implementation bug");
              return o.Jt(o.Vt(t, n), r)
            }
            if ("number" != typeof t) throw Error("implementation bug");
            if (o.Nt(n)) return o.Jt(o.Vt(n, t), 2 ^ r);
            if ("number" != typeof n) throw Error("implementation bug");
            return 0 === r ? n > t : 1 === r ? n >= t : 2 === r ? t > n : 3 === r ? t >= n : void 0
          }
          vt() {
            return o.rt(this.nt(this.length - 1))
          }
          static _t(t, n, r) {
            if (t.length < n.length) return o._t(n, t, r);
            if (0 === t.length) return t;
            if (0 === n.length) return t.sign === r ? t : o.unaryMinus(t);
            let i = t.length;
            (0 === t.vt() || n.length === t.length && 0 === n.vt()) && i++;
            const e = new o(i, r);
            let u = 0,
              f = 0;
            for (; f < n.length; f++) {
              const r = t.nt(f) + n.nt(f) + u;
              u = r >>> 30, e.wt(f, 1073741823 & r)
            }
            for (; f < t.length; f++) {
              const n = t.nt(f) + u;
              u = n >>> 30, e.wt(f, 1073741823 & n)
            }
            return f < e.length && e.wt(f, u), e.ft()
          }
          static gt(t, n, r) {
            if (0 === t.length) return t;
            if (0 === n.length) return t.sign === r ? t : o.unaryMinus(t);
            const i = new o(t.length, r);
            let e = 0,
              u = 0;
            for (; u < n.length; u++) {
              const r = t.nt(u) - n.nt(u) - e;
              e = 1 & r >>> 30, i.wt(u, 1073741823 & r)
            }
            for (; u < t.length; u++) {
              const n = t.nt(u) - e;
              e = 1 & n >>> 30, i.wt(u, 1073741823 & n)
            }
            return i.ft()
          }
          static ht(t, n, r = null) {
            const i = t.length;
            null === r ? r = new o(i, n) : r.sign = n;
            let e = 1;
            for (let n = 0; i > n; n++) {
              const i = t.nt(n) + e;
              e = i >>> 30, r.wt(n, 1073741823 & i)
            }
            return 0 != e && r.Qt(i, 1), r
          }
          static st(t, n) {
            const r = t.length,
              i = new o(n = n || r, !1);
            let e = 1;
            for (let n = 0; r > n; n++) {
              const r = t.nt(n) - e;
              e = 1 & r >>> 30, i.wt(n, 1073741823 & r)
            }
            if (0 != e) throw Error("implementation bug");
            for (let t = r; n > t; t++) i.wt(t, 0);
            return i
          }
          static Ot(t, n, r = null) {
            let i = t.length,
              e = n.length,
              u = e;
            if (e > i) {
              u = i;
              const r = t,
                o = i;
              t = n, i = e, n = r, e = o
            }
            let f = u;
            null === r ? r = new o(f, !1) : f = r.length;
            let s = 0;
            for (; u > s; s++) r.wt(s, t.nt(s) & n.nt(s));
            for (; f > s; s++) r.wt(s, 0);
            return r
          }
          static Tt(t, n, r = null) {
            const i = t.length,
              e = n.length;
            let u = e;
            e > i && (u = i);
            let f = i;
            null === r ? r = new o(f, !1) : f = r.length;
            let s = 0;
            for (; u > s; s++) r.wt(s, t.nt(s) & ~n.nt(s));
            for (; i > s; s++) r.wt(s, t.nt(s));
            for (; f > s; s++) r.wt(s, 0);
            return r
          }
          static kt(t, n, r = null) {
            let i = t.length,
              e = n.length,
              u = e;
            if (e > i) {
              u = i;
              const r = t,
                o = i;
              t = n, i = e, n = r, e = o
            }
            let f = i;
            null === r ? r = new o(f, !1) : f = r.length;
            let s = 0;
            for (; u > s; s++) r.wt(s, t.nt(s) | n.nt(s));
            for (; i > s; s++) r.wt(s, t.nt(s));
            for (; f > s; s++) r.wt(s, 0);
            return r
          }
          static jt(t, n, r = null) {
            let i = t.length,
              e = n.length,
              u = e;
            if (e > i) {
              u = i;
              const r = t,
                o = i;
              t = n, i = e, n = r, e = o
            }
            let f = i;
            null === r ? r = new o(f, !1) : f = r.length;
            let s = 0;
            for (; u > s; s++) r.wt(s, t.nt(s) ^ n.nt(s));
            for (; i > s; s++) r.wt(s, t.nt(s));
            for (; f > s; s++) r.wt(s, 0);
            return r
          }
          static dt(t, n) {
            const r = t.length - n.length;
            if (0 != r) return r;
            let i = t.length - 1;
            for (; i >= 0 && t.nt(i) === n.nt(i);) i--;
            return 0 > i ? 0 : t.tt(i) > n.tt(i) ? 1 : -1
          }
          static yt(t, n, r, i) {
            if (0 === n) return;
            const e = 32767 & n,
              u = n >>> 15;
            let f = 0,
              s = 0;
            for (let n, a = 0; a < t.length; a++, i++) {
              n = r.nt(i);
              const h = t.nt(a),
                c = 32767 & h,
                l = h >>> 15,
                w = o.Yt(c, e),
                v = o.Yt(c, u),
                y = o.Yt(l, e);
              n += s + w + f, f = n >>> 30, n &= 1073741823, n += ((32767 & v) << 15) + ((32767 & y) << 15), f += n >>> 30, s = o.Yt(l, u) + (v >>> 15) + (y >>> 15), r.wt(i, 1073741823 & n)
            }
            for (; 0 != f || 0 !== s; i++) {
              let t = r.nt(i);
              t += f + s, s = 0, f = t >>> 30, r.wt(i, 1073741823 & t)
            }
          }
          static tn(t, n, r, i, e) {
            let u = r,
              f = 0;
            for (let r = 0; i > r; r++) {
              const i = t.nt(r),
                s = o.Yt(32767 & i, n),
                a = o.Yt(i >>> 15, n),
                h = s + ((32767 & a) << 15) + f + u;
              u = h >>> 30, f = a >>> 15, e.wt(r, 1073741823 & h)
            }
            if (e.length > i)
              for (e.wt(i++, u + f); i < e.length;) e.wt(i++, 0);
            else if (u + f !== 0) throw Error("implementation bug")
          }
          Gt(t, n, r) {
            r > this.length && (r = this.length);
            const i = 32767 & t,
              e = t >>> 15;
            let u = 0,
              f = n;
            for (let t = 0; r > t; t++) {
              const n = this.nt(t),
                r = 32767 & n,
                s = n >>> 15,
                a = o.Yt(r, i),
                h = o.Yt(r, e),
                c = o.Yt(s, i);
              let l = f + a + u;
              u = l >>> 30, l &= 1073741823, l += ((32767 & h) << 15) + ((32767 & c) << 15), u += l >>> 30, f = o.Yt(s, e) + (h >>> 15) + (c >>> 15), this.wt(t, 1073741823 & l)
            }
            if (0 != u || 0 !== f) throw Error("implementation bug")
          }
          static At(t, n, r = null) {
            null === r && (r = new o(t.length, !1));
            let i = 0;
            for (let e, o = 2 * t.length - 1; o >= 0; o -= 2) {
              e = (i << 15 | t.qt(o)) >>> 0;
              const u = 0 | e / n;
              i = 0 | e % n, e = (i << 15 | t.qt(o - 1)) >>> 0;
              const f = 0 | e / n;
              i = 0 | e % n, r.wt(o >>> 1, u << 15 | f)
            }
            return r
          }
          static It(t, n) {
            let r = 0;
            for (let i = 2 * t.length - 1; i >= 0; i--) r = 0 | ((r << 15 | t.qt(i)) >>> 0) % n;
            return r
          }
          static bt(t, n, r, i) {
            const e = n.nn(),
              u = n.length,
              f = t.nn() - e;
            let s = null;
            r && (s = new o(f + 2 >>> 1, !1), s.lt());
            const a = new o(e + 2 >>> 1, !1);
            a.lt();
            const h = o.rn(n.qt(e - 1));
            h > 0 && (n = o.en(n, h, 0));
            const c = o.en(t, h, 1),
              l = n.qt(e - 1);
            let w = 0;
            for (let t, i = f; i >= 0; i--) {
              t = 32767;
              const f = c.qt(i + e);
              if (f !== l) {
                const r = (f << 15 | c.qt(i + e - 1)) >>> 0;
                t = 0 | r / l;
                let u = 0 | r % l;
                const s = n.qt(e - 2),
                  a = c.qt(i + e - 2);
                for (; o.Yt(t, s) >>> 0 > (u << 16 | a) >>> 0 && (t--, u += l, 32767 >= u););
              }
              o.tn(n, t, 0, u, a);
              let h = c.un(a, i, e + 1);
              0 !== h && (h = c.sn(n, i, e), c.Xt(i + e, 32767 & c.qt(i + e) + h), t--), r && (1 & i ? w = t << 15 : s.wt(i >>> 1, w | t))
            }
            if (i) return c.an(h), r ? {
              quotient: s,
              remainder: c
            } : c;
            if (r) return s;
            throw Error("unreachable")
          }
          static rn(t) {
            return o.rt(t) - 15
          }
          sn(t, n, r) {
            let i = 0;
            for (let e = 0; r > e; e++) {
              const r = this.qt(n + e) + t.qt(e) + i;
              i = r >>> 15, this.Xt(n + e, 32767 & r)
            }
            return i
          }
          un(t, n, r) {
            let i = 0;
            if (1 & n) {
              n >>= 1;
              let e = this.nt(n),
                o = 32767 & e,
                u = 0;
              for (; r - 1 >>> 1 > u; u++) {
                const r = t.nt(u),
                  f = (e >>> 15) - (32767 & r) - i;
                i = 1 & f >>> 15, this.wt(n + u, (32767 & f) << 15 | 32767 & o), e = this.nt(n + u + 1), o = (32767 & e) - (r >>> 15) - i, i = 1 & o >>> 15
              }
              const f = t.nt(u),
                s = (e >>> 15) - (32767 & f) - i;
              if (i = 1 & s >>> 15, this.wt(n + u, (32767 & s) << 15 | 32767 & o), n + u + 1 >= this.length) throw new RangeError("out of bounds");
              !(1 & r) && (e = this.nt(n + u + 1), o = (32767 & e) - (f >>> 15) - i, i = 1 & o >>> 15, this.wt(n + t.length, 1073709056 & e | 32767 & o))
            } else {
              n >>= 1;
              let e = 0;
              for (; e < t.length - 1; e++) {
                const r = this.nt(n + e),
                  o = t.nt(e),
                  u = (32767 & r) - (32767 & o) - i;
                i = 1 & u >>> 15;
                const f = (r >>> 15) - (o >>> 15) - i;
                i = 1 & f >>> 15, this.wt(n + e, (32767 & f) << 15 | 32767 & u)
              }
              const o = this.nt(n + e),
                u = t.nt(e),
                f = (32767 & o) - (32767 & u) - i;
              i = 1 & f >>> 15;
              let s = 0;
              !(1 & r) && (s = (o >>> 15) - (u >>> 15) - i, i = 1 & s >>> 15), this.wt(n + e, (32767 & s) << 15 | 32767 & f)
            }
            return i
          }
          an(t) {
            if (0 === t) return;
            let n = this.nt(0) >>> t;
            const r = this.length - 1;
            for (let i = 0; r > i; i++) {
              const r = this.nt(i + 1);
              this.wt(i, 1073741823 & r << 30 - t | n), n = r >>> t
            }
            this.wt(r, n)
          }
          static en(t, n, r) {
            const i = t.length,
              e = new o(i + r, !1);
            if (0 === n) {
              for (let n = 0; i > n; n++) e.wt(n, t.nt(n));
              return r > 0 && e.wt(i, 0), e
            }
            let u = 0;
            for (let r = 0; i > r; r++) {
              const i = t.nt(r);
              e.wt(r, 1073741823 & i << n | u), u = i >>> 30 - n
            }
            return r > 0 && e.wt(i, u), e
          }
          static Mt(t, n) {
            const r = o.hn(n);
            if (0 > r) throw new RangeError("BigInt too big");
            const i = 0 | r / 30,
              e = r % 30,
              u = t.length,
              f = 0 !== e && t.nt(u - 1) >>> 30 - e != 0,
              s = u + i + (f ? 1 : 0),
              a = new o(s, t.sign);
            if (0 === e) {
              let n = 0;
              for (; i > n; n++) a.wt(n, 0);
              for (; s > n; n++) a.wt(n, t.nt(n - i))
            } else {
              let n = 0;
              for (let t = 0; i > t; t++) a.wt(t, 0);
              for (let r = 0; u > r; r++) {
                const o = t.nt(r);
                a.wt(r + i, 1073741823 & o << e | n), n = o >>> 30 - e
              }
              if (f) a.wt(u + i, n);
              else if (0 !== n) throw Error("implementation bug")
            }
            return a.ft()
          }
          static St(t, n) {
            const r = t.length,
              i = t.sign,
              e = o.hn(n);
            if (0 > e) return o.cn(i);
            const u = 0 | e / 30,
              f = e % 30;
            let s = r - u;
            if (0 >= s) return o.cn(i);
            let a = !1;
            if (i)
              if (t.nt(u) & (1 << f) - 1) a = !0;
              else
                for (let n = 0; u > n; n++)
                  if (0 !== t.nt(n)) {
                    a = !0;
                    break
                  } a && 0 === f && 0 == ~t.nt(r - 1) && s++;
            let h = new o(s, i);
            if (0 === f) {
              h.wt(s - 1, 0);
              for (let n = u; r > n; n++) h.wt(n - u, t.nt(n))
            } else {
              let n = t.nt(u) >>> f;
              const i = r - u - 1;
              for (let r = 0; i > r; r++) {
                const i = t.nt(r + u + 1);
                h.wt(r, 1073741823 & i << 30 - f | n), n = i >>> f
              }
              h.wt(i, n)
            }
            return a && (h = o.ht(h, !0, h)), h.ft()
          }
          static cn(t) {
            return t ? o.$(1, !0) : o.X()
          }
          static hn(t) {
            if (t.length > 1) return -1;
            const n = t.tt(0);
            return n > o.ct ? -1 : n
          }
          static Z(t, n = "default") {
            if ("object" != typeof t || t.constructor === o) return t;
            if ("u" > typeof Symbol && "symbol" == typeof Symbol.toPrimitive) {
              const r = t[Symbol.toPrimitive];
              if (r) {
                const t = r(n);
                if ("object" != typeof t) return t;
                throw new TypeError("Cannot convert object to primitive value")
              }
            }
            const r = t.valueOf;
            if (r) {
              const n = r.call(t);
              if ("object" != typeof n) return n
            }
            const i = t.toString;
            if (i) {
              const n = i.call(t);
              if ("object" != typeof n) return n
            }
            throw new TypeError("Cannot convert object to primitive value")
          }
          static Rt(t) {
            return o.Nt(t) ? t : +t
          }
          static Nt(t) {
            return "object" == typeof t && null !== t && t.constructor === o
          }
          static xt(t, n) {
            const r = 0 | (t + 29) / 30,
              i = new o(r, n.sign),
              e = r - 1;
            for (let t = 0; e > t; t++) i.wt(t, n.nt(t));
            let u = n.nt(e);
            if (t % 30 != 0) {
              const n = 32 - t % 30;
              u = u << n >>> n
            }
            return i.wt(e, u), i.ft()
          }
          static Ct(t, n, r) {
            var i = Math.min;
            const e = 0 | (t + 29) / 30,
              u = new o(e, r);
            let f = 0;
            const s = e - 1;
            let a = 0;
            for (const t = i(s, n.length); t > f; f++) {
              const t = 0 - n.nt(f) - a;
              a = 1 & t >>> 30, u.wt(f, 1073741823 & t)
            }
            for (; s > f; f++) u.wt(f, 1073741823 & -a);
            let h = s < n.length ? n.nt(s) : 0;
            const c = t % 30;
            let l;
            if (0 == c) l = 0 - h - a, l &= 1073741823;
            else {
              const t = 32 - c;
              h = h << t >>> t;
              const n = 1 << 32 - t;
              l = n - h - a, l &= n - 1
            }
            return u.wt(s, l), u.ft()
          }
          nt(t) {
            return this[t]
          }
          tt(t) {
            return this[t] >>> 0
          }
          wt(t, n) {
            this[t] = 0 | n
          }
          Qt(t, n) {
            this[t] = 0 | n
          }
          nn() {
            const t = this.length;
            return this.tt(t - 1) > 32767 ? 2 * t : 2 * t - 1
          }
          qt(t) {
            return 32767 & this[t >>> 1] >>> 15 * (1 & t)
          }
          Xt(t, n) {
            const r = t >>> 1,
              i = this.nt(r),
              e = 1 & t ? 32767 & i | n << 15 : 1073709056 & i | 32767 & n;
            this.wt(r, e)
          }
          static ln(t, n) {
            let r = 1;
            for (; n > 0;) 1 & n && (r *= t), n >>>= 1, t *= t;
            return r
          }
          static W(t) {
            return (1073741823 & t) === t
          }
        }
        return o.q = 33554432, o.ct = o.q << 5, o.Pt = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], o.Ft = 5, o.Lt = 1 << o.Ft, o.Ht = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], o.wn = new ArrayBuffer(8), o.ot = new Float64Array(o.wn), o.et = new Int32Array(o.wn), o.rt = n ? function(t) {
          return n(t) - 2
        } : function(t) {
          var n = Math.LN2;
          return 0 === t ? 30 : 0 | 29 - (0 | (0, Math.log)(t >>> 0) / n)
        }, o.Yt = t || function(t, n) {
          return 0 | t * n
        }, o
      }()
    },
    78458: function(t, n, r) {
      "use strict";
      var i = r(48287).Buffer,
        e = this && this.t || function(t) {
          return t && t.i ? t : {
            default: t
          }
        };
      Object.defineProperty(n, "i", {
        value: !0
      });
      const o = e(r(30571)),
        u = e(r(25300)),
        f = e(r(94148)),
        s = r(11774),
        a = r(20908),
        h = e(r(64908)),
        c = r(7075);
      class l {
        constructor(t = new o.default, n = "bytes") {
          this.fountainDecoder = t, this.type = n, f.default(s.isURType(n), "Invalid UR type"), this.expected_type = ""
        }
        static decodeBody(t, n) {
          const r = u.default.decode(n, u.default.STYLES.MINIMAL);
          return new h.default(i.from(r, "hex"), t)
        }
        validatePart(t) {
          return this.expected_type ? this.expected_type === t : !!s.isURType(t) && (this.expected_type = t, !0)
        }
        static decode(t) {
          const [n, r] = this.parse(t);
          if (0 === r.length) throw new a.InvalidPathLengthError;
          const i = r[0];
          return l.decodeBody(n, i)
        }
        static parse(t) {
          const n = t.toLowerCase();
          if ("ur:" !== n.slice(0, 3)) throw new a.InvalidSchemeError;
          const r = n.slice(3).split("/"),
            i = r[0];
          if (2 > r.length) throw new a.InvalidPathLengthError;
          if (!s.isURType(i)) throw new a.InvalidTypeError;
          return [i, r.slice(1)]
        }
        static parseSequenceComponent(t) {
          const n = t.split("-");
          if (2 !== n.length) throw new a.InvalidSequenceComponentError;
          const r = s.toUint32(+n[0]),
            i = +n[1];
          if (1 > r || 1 > i) throw new a.InvalidSequenceComponentError;
          return [r, i]
        }
        receivePart(t) {
          if (void 0 !== this.result) return !1;
          const [n, r] = l.parse(t);
          if (!this.validatePart(n)) return !1;
          if (1 === r.length) return this.result = l.decodeBody(n, r[0]), !0;
          if (2 !== r.length) throw new a.InvalidPathLengthError;
          const [i, e] = r, [o, f] = l.parseSequenceComponent(i), s = u.default.decode(e, u.default.STYLES.MINIMAL), w = c.FountainEncoderPart.fromCBOR(s);
          return !(o !== w.seqNum || f !== w.seqLength || !this.fountainDecoder.receivePart(w) || (this.fountainDecoder.isSuccess() ? this.result = new h.default(this.fountainDecoder.resultMessage(), n) : this.fountainDecoder.isFailure() && (this.error = new a.InvalidSchemeError), 0))
        }
        resultUR() {
          return this.result ? this.result : new h.default(i.from([]))
        }
        isComplete() {
          return this.result && this.result.cbor.length > 0
        }
        isSuccess() {
          return !this.error && this.isComplete()
        }
        isError() {
          return void 0 !== this.error
        }
        resultError() {
          return this.error ? this.error.message : ""
        }
        expectedPartCount() {
          return this.fountainDecoder.expectedPartCount()
        }
        expectedPartIndexes() {
          return this.fountainDecoder.getExpectedPartIndexes()
        }
        receivedPartIndexes() {
          return this.fountainDecoder.getReceivedPartIndexes()
        }
        lastPartIndexes() {
          return this.fountainDecoder.getLastPartIndexes()
        }
        estimatedPercentComplete() {
          return this.fountainDecoder.estimatedPercentComplete()
        }
        getProgress() {
          return this.fountainDecoder.getProgress()
        }
      }
      n.default = l
    },
    86287: (t, n, r) => {
      "use strict";
      var i = r(48287).Buffer;
      Object.defineProperty(n, "i", {
        value: !0
      }), n.cborDecode = n.cborEncode = void 0;
      const e = r(31981);
      n.cborEncode = t => e.encode(t), n.cborDecode = t => e.decode(i.isBuffer(t) ? t : i.from(t, "hex"))
    },
    87814: function(t, n, r) {
      "use strict";
      var i = this && this.t || function(t) {
        return t && t.i ? t : {
          default: t
        }
      };
      Object.defineProperty(n, "i", {
        value: !0
      });
      const e = i(r(7075)),
        o = i(r(25300));
      class u {
        constructor(t, n, r, i) {
          this.ur = t, this.fountainEncoder = new e.default(t.cbor, n, r, i)
        }
        get fragmentsLength() {
          return this.fountainEncoder.fragmentsLength
        }
        get fragments() {
          return this.fountainEncoder.fragments
        }
        get messageLength() {
          return this.fountainEncoder.messageLength
        }
        get cbor() {
          return this.ur.cbor
        }
        encodeWhole() {
          return [...Array(this.fragmentsLength)].map(() => this.nextPart())
        }
        nextPart() {
          const t = this.fountainEncoder.nextPart();
          return this.fountainEncoder.isSinglePart() ? u.encodeSinglePart(this.ur) : u.encodePart(this.ur.type, t)
        }
        static encodeUri(t, n) {
          return [t, n.join("/")].join(":")
        }
        static encodeUR(t) {
          return u.encodeUri("ur", t)
        }
        static encodePart(t, n) {
          const r = `${n.seqNum}-${n.seqLength}`,
            i = o.default.encode(n.cbor().toString("hex"), o.default.STYLES.MINIMAL);
          return u.encodeUR([t, r, i])
        }
        static encodeSinglePart(t) {
          const n = o.default.encode(t.cbor.toString("hex"), o.default.STYLES.MINIMAL);
          return u.encodeUR([t.type, n])
        }
      }
      n.default = u
    },
    91284: (t, n, r) => {
      "use strict";
      r.r(n), r.d(n, {
        default: () => e
      });
      var i = function(t, n, r) {
        var i = Math.floor(r() * t.prob.length);
        return n[r() < t.prob[i] ? i : t.alias[i]]
      };
      const e = function(t, n, r) {
        if (void 0 === r && (r = Math.random), !Array.isArray(t)) throw Error("Probabilities must be an array.");
        if (0 === t.length) throw Error("Probabilities array must not be empty.");
        var e = t.length,
          o = n ?? Array.from({
            length: e
          }, function(t, n) {
            return n
          }),
          u = function(t, n) {
            var r = t.reduce(function(n, r) {
              if (0 > r) throw Error("Probability must be a positive: p[" + t.indexOf(r) + "]=" + r);
              return n + r
            }, 0);
            if (0 === r) throw Error("Probability sum must be greater than zero.");
            for (var i = t.map(function(t) {
                return t * n / r
              }), e = {
                prob: Array(n),
                alias: Array(n)
              }, o = [], u = [], f = n - 1; f >= 0; f--) 1 > i[f] ? o.push(f) : u.push(f);
            for (; o.length > 0 && u.length > 0;) {
              var s = o.pop(),
                a = u.pop();
              e.prob[s] = i[s], e.alias[s] = a, i[a] = i[a] + i[s] - 1, 1 > i[a] ? o.push(a) : u.push(a)
            }
            for (; u.length > 0;) e.prob[u.pop()] = 1;
            for (; o.length > 0;) e.prob[o.pop()] = 1;
            return e
          }(t, e);
        return {
          next: function(t) {
            return void 0 === t && (t = 1),
              function(t, n, r, e) {
                if (void 0 === e && (e = 1), 1 === e) return i(t, n, r);
                for (var o = [], u = 0; e > u; u++) o.push(i(t, n, r));
                return o
              }(u, o, r, t)
          }
        }
      }
    }
  }
]);
