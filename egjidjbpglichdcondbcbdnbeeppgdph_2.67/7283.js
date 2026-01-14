try {
  let t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    r = (new t.Error).stack;
  r && (t.t = t.t || {}, t.t[r] = "98433a61-8a27-4938-90f2-3e3d578316da", t.i = "sentry-dbid-98433a61-8a27-4938-90f2-3e3d578316da")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [7283], {
    97283: (t, r, n) => {
      var i, o = n(48287).Buffer;
      self, i = () => (() => {
        var t = {
            873: (t, r) => {
              var n, i, o = function() {
                var t = function(t, r) {
                  var n = t,
                    i = a[r],
                    o = null,
                    e = 0,
                    f = null,
                    c = [],
                    h = {},
                    y = function(t, r) {
                      o = function(t) {
                        for (var r = Array(t), n = 0; t > n; n += 1) {
                          r[n] = Array(t);
                          for (var i = 0; t > i; i += 1) r[n][i] = null
                        }
                        return r
                      }(e = 4 * n + 17), M(0, 0), M(e - 7, 0), M(0, e - 7), x(), m(), z(t, r), n >= 7 && k(t), null == f && (f = O(n, i, c)), A(f, r)
                    },
                    M = function(t, r) {
                      for (var n = -1; 7 >= n; n += 1)
                        if (t + n > -1 && e > t + n)
                          for (var i = -1; 7 >= i; i += 1) - 1 >= r + i || r + i >= e || (o[t + n][r + i] = !((0 > n || n > 6 || 0 != i && 6 != i) && (0 > i || i > 6 || 0 != n && 6 != n) && (2 > n || n > 4 || 2 > i || i > 4)))
                    },
                    m = function() {
                      for (var t = 8; e - 8 > t; t += 1) null == o[t][6] && (o[t][6] = t % 2 == 0);
                      for (var r = 8; e - 8 > r; r += 1) null == o[6][r] && (o[6][r] = r % 2 == 0)
                    },
                    x = function() {
                      for (var t = u.getPatternPosition(n), r = 0; r < t.length; r += 1)
                        for (var i = 0; i < t.length; i += 1) {
                          var e = t[r],
                            a = t[i];
                          if (null == o[e][a])
                            for (var f = -2; 2 >= f; f += 1)
                              for (var s = -2; 2 >= s; s += 1) o[e + f][a + s] = -2 == f || 2 == f || -2 == s || 2 == s || 0 == f && 0 == s
                        }
                    },
                    k = function(t) {
                      for (var r = u.getBCHTypeNumber(n), i = 0; 18 > i; i += 1) {
                        var a = !t && 1 == (r >> i & 1);
                        o[Math.floor(i / 3)][i % 3 + e - 8 - 3] = a
                      }
                      for (i = 0; 18 > i; i += 1) a = !t && 1 == (r >> i & 1), o[i % 3 + e - 8 - 3][Math.floor(i / 3)] = a
                    },
                    z = function(t, r) {
                      for (var n = i << 3 | r, a = u.getBCHTypeInfo(n), f = 0; 15 > f; f += 1) {
                        var s = !t && 1 == (a >> f & 1);
                        6 > f ? o[f][8] = s : 8 > f ? o[f + 1][8] = s : o[e - 15 + f][8] = s
                      }
                      for (f = 0; 15 > f; f += 1) s = !t && 1 == (a >> f & 1), 8 > f ? o[8][e - f - 1] = s : 9 > f ? o[8][15 - f - 1 + 1] = s : o[8][15 - f - 1] = s;
                      o[e - 8][8] = !t
                    },
                    A = function(t, r) {
                      for (var n = -1, i = e - 1, a = 7, f = 0, s = u.getMaskFunction(r), c = e - 1; c > 0; c -= 2)
                        for (6 == c && (c -= 1);;) {
                          for (var h = 0; 2 > h; h += 1)
                            if (null == o[i][c - h]) {
                              var v = !1;
                              f < t.length && (v = 1 == (t[f] >>> a & 1)), s(i, c - h) && (v = !v), o[i][c - h] = v, -1 == (a -= 1) && (f += 1, a = 7)
                            } if (0 > (i += n) || i >= e) {
                            i -= n, n = -n;
                            break
                          }
                        }
                    },
                    O = function(t, r, n) {
                      for (var i = v.getRSBlocks(t, r), o = l(), e = 0; e < n.length; e += 1) {
                        var a = n[e];
                        o.put(a.getMode(), 4), o.put(a.getLength(), u.getLengthInBits(a.getMode(), t)), a.write(o)
                      }
                      var f = 0;
                      for (e = 0; e < i.length; e += 1) f += i[e].dataCount;
                      if (o.getLengthInBits() > 8 * f) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * f + ")";
                      for (o.getLengthInBits() + 4 <= 8 * f && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
                      for (; o.getLengthInBits() < 8 * f && (o.put(236, 8), o.getLengthInBits() < 8 * f);) o.put(17, 8);
                      return function(t, r) {
                        for (var n = 0, i = 0, o = 0, e = Array(r.length), a = Array(r.length), f = 0; f < r.length; f += 1) {
                          var c = r[f].dataCount,
                            h = r[f].totalCount - c;
                          i = Math.max(i, c), o = Math.max(o, h), e[f] = Array(c);
                          for (var v = 0; v < e[f].length; v += 1) e[f][v] = 255 & t.getBuffer()[v + n];
                          n += c;
                          var l = u.getErrorCorrectPolynomial(h),
                            d = s(e[f], l.getLength() - 1).mod(l);
                          for (a[f] = Array(l.getLength() - 1), v = 0; v < a[f].length; v += 1) {
                            var w = v + d.getLength() - a[f].length;
                            a[f][v] = 0 > w ? 0 : d.getAt(w)
                          }
                        }
                        var g = 0;
                        for (v = 0; v < r.length; v += 1) g += r[v].totalCount;
                        var p = Array(g),
                          y = 0;
                        for (v = 0; i > v; v += 1)
                          for (f = 0; f < r.length; f += 1) v < e[f].length && (p[y] = e[f][v], y += 1);
                        for (v = 0; o > v; v += 1)
                          for (f = 0; f < r.length; f += 1) v < a[f].length && (p[y] = a[f][v], y += 1);
                        return p
                      }(o, i)
                    };
                  h.addData = function(t, r) {
                    var n = null;
                    switch (r = r || "Byte") {
                      case "Numeric":
                        n = d(t);
                        break;
                      case "Alphanumeric":
                        n = w(t);
                        break;
                      case "Byte":
                        n = g(t);
                        break;
                      case "Kanji":
                        n = p(t);
                        break;
                      default:
                        throw "mode:" + r
                    }
                    c.push(n), f = null
                  }, h.isDark = function(t, r) {
                    if (0 > t || t >= e || 0 > r || r >= e) throw t + "," + r;
                    return o[t][r]
                  }, h.getModuleCount = function() {
                    return e
                  }, h.make = function() {
                    if (1 > n) {
                      for (var t = 1; 40 > t; t++) {
                        for (var r = v.getRSBlocks(t, i), o = l(), e = 0; e < c.length; e++) {
                          var a = c[e];
                          o.put(a.getMode(), 4), o.put(a.getLength(), u.getLengthInBits(a.getMode(), t)), a.write(o)
                        }
                        var f = 0;
                        for (e = 0; e < r.length; e++) f += r[e].dataCount;
                        if (o.getLengthInBits() <= 8 * f) break
                      }
                      n = t
                    }
                    y(!1, function() {
                      for (var t = 0, r = 0, n = 0; 8 > n; n += 1) {
                        y(!0, n);
                        var i = u.getLostPoint(h);
                        (0 == n || t > i) && (t = i, r = n)
                      }
                      return r
                    }())
                  }, h.createTableTag = function(t, r) {
                    t = t || 2;
                    var n = "";
                    n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + (r = void 0 === r ? 4 * t : r) + "px;", n += '">', n += "<tbody>";
                    for (var i = 0; i < h.getModuleCount(); i += 1) {
                      n += "<tr>";
                      for (var o = 0; o < h.getModuleCount(); o += 1) n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + t + "px;", n += " height: " + t + "px;", n += " background-color: ", n += h.isDark(i, o) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                      n += "</tr>"
                    }
                    return (n += "</tbody>") + "</table>"
                  }, h.createSvgTag = function(t, r, n, i) {
                    var o = {};
                    "object" == typeof arguments[0] && (t = (o = arguments[0]).cellSize, r = o.margin, n = o.alt, i = o.title), t = t || 2, r = void 0 === r ? 4 * t : r, (n = "string" == typeof n ? {
                      text: n
                    } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-description" : null, (i = "string" == typeof i ? {
                      text: i
                    } : i || {}).text = i.text || null, i.id = i.text ? i.id || "qrcode-title" : null;
                    var e, a, u, f, s = h.getModuleCount() * t + 2 * r,
                      c = "";
                    for (f = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += o.scalable ? "" : ' width="' + s + 'px" height="' + s + 'px"', c += ' viewBox="0 0 ' + s + " " + s + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += i.text || n.text ? ' role="img" aria-labelledby="' + S([i.id, n.id].join(" ").trim()) + '"' : "", c += ">", c += i.text ? '<title id="' + S(i.id) + '">' + S(i.text) + "</title>" : "", c += n.text ? '<description id="' + S(n.id) + '">' + S(n.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < h.getModuleCount(); a += 1)
                      for (u = a * t + r, e = 0; e < h.getModuleCount(); e += 1) h.isDark(a, e) && (c += "M" + (e * t + r) + "," + u + f);
                    return (c += '" stroke="transparent" fill="black"/>') + "</svg>"
                  }, h.createDataURL = function(t, r) {
                    t = t || 2, r = void 0 === r ? 4 * t : r;
                    var n = h.getModuleCount() * t + 2 * r,
                      i = r,
                      o = n - r;
                    return b(n, n, function(r, n) {
                      if (r >= i && o > r && n >= i && o > n) {
                        var e = Math.floor((r - i) / t),
                          a = Math.floor((n - i) / t);
                        return h.isDark(a, e) ? 0 : 1
                      }
                      return 1
                    })
                  }, h.createImgTag = function(t, r, n) {
                    t = t || 2, r = void 0 === r ? 4 * t : r;
                    var i = h.getModuleCount() * t + 2 * r,
                      o = "";
                    return o += "<img", o += ' src="', o += h.createDataURL(t, r), o += '"', o += ' width="', o += i, o += '"', o += ' height="', o += i, o += '"', n && (o += ' alt="', o += S(n), o += '"'), o + "/>"
                  };
                  var S = function(t) {
                    for (var r = "", n = 0; n < t.length; n += 1) {
                      var i = t.charAt(n);
                      switch (i) {
                        case "<":
                          r += "&lt;";
                          break;
                        case ">":
                          r += "&gt;";
                          break;
                        case "&":
                          r += "&amp;";
                          break;
                        case '"':
                          r += "&quot;";
                          break;
                        default:
                          r += i
                      }
                    }
                    return r
                  };
                  return h.createASCII = function(t, r) {
                    if (2 > (t = t || 1)) return function(t) {
                      t = void 0 === t ? 2 : t;
                      var r, n, i, o, e, a = 1 * h.getModuleCount() + 2 * t,
                        u = t,
                        f = a - t,
                        s = {
                          "██": "█",
                          "█ ": "▀",
                          " █": "▄",
                          "  ": " "
                        },
                        c = {
                          "██": "▀",
                          "█ ": "▀",
                          " █": " ",
                          "  ": " "
                        },
                        v = "";
                      for (r = 0; a > r; r += 2) {
                        for (i = Math.floor((r - u) / 1), o = Math.floor((r + 1 - u) / 1), n = 0; a > n; n += 1) e = "█", n >= u && f > n && r >= u && f > r && h.isDark(i, Math.floor((n - u) / 1)) && (e = " "), n >= u && f > n && r + 1 >= u && f > r + 1 && h.isDark(o, Math.floor((n - u) / 1)) ? e += " " : e += "█", v += 1 > t && r + 1 >= f ? c[e] : s[e];
                        v += "\n"
                      }
                      return a % 2 && t > 0 ? v.substring(0, v.length - a - 1) + Array(a + 1).join("▀") : v.substring(0, v.length - 1)
                    }(r);
                    t -= 1, r = void 0 === r ? 2 * t : r;
                    var n, i, o, e, a = h.getModuleCount() * t + 2 * r,
                      u = r,
                      f = a - r,
                      s = Array(t + 1).join("██"),
                      c = Array(t + 1).join("  "),
                      v = "",
                      l = "";
                    for (n = 0; a > n; n += 1) {
                      for (o = Math.floor((n - u) / t), l = "", i = 0; a > i; i += 1) e = 1, i >= u && f > i && n >= u && f > n && h.isDark(o, Math.floor((i - u) / t)) && (e = 0), l += e ? s : c;
                      for (o = 0; t > o; o += 1) v += l + "\n"
                    }
                    return v.substring(0, v.length - 1)
                  }, h.renderTo2dContext = function(t, r) {
                    r = r || 2;
                    for (var n = h.getModuleCount(), i = 0; n > i; i++)
                      for (var o = 0; n > o; o++) t.fillStyle = h.isDark(i, o) ? "black" : "white", t.fillRect(i * r, o * r, r, r)
                  }, h
                };
                t.stringToBytes = (t.stringToBytesFuncs = {
                  default: function(t) {
                    for (var r = [], n = 0; n < t.length; n += 1) {
                      var i = t.charCodeAt(n);
                      r.push(255 & i)
                    }
                    return r
                  }
                }).default, t.createStringToBytes = function(t, r) {
                  var n = function() {
                    for (var n = M(t), i = function() {
                        var t = n.read();
                        if (-1 == t) throw "eof";
                        return t
                      }, o = 0, e = {};;) {
                      var a = n.read();
                      if (-1 == a) break;
                      var u = i(),
                        f = i() << 8 | i();
                      e[String.fromCharCode(a << 8 | u)] = f, o += 1
                    }
                    if (o != r) throw o + " != " + r;
                    return e
                  }();
                  return function(t) {
                    for (var r = [], i = 0; i < t.length; i += 1) {
                      var o = t.charCodeAt(i);
                      if (128 > o) r.push(o);
                      else {
                        var e = n[t.charAt(i)];
                        "number" == typeof e ? (255 & e) == e ? r.push(e) : (r.push(e >>> 8), r.push(255 & e)) : r.push(63)
                      }
                    }
                    return r
                  }
                };
                var r, n, i, o, e, a = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                  },
                  u = (r = [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                  ], n = 1335, i = 7973, e = function(t) {
                    for (var r = 0; 0 != t;) r += 1, t >>>= 1;
                    return r
                  }, (o = {}).getBCHTypeInfo = function(t) {
                    for (var r = t << 10; e(r) - e(n) >= 0;) r ^= n << e(r) - e(n);
                    return 21522 ^ (t << 10 | r)
                  }, o.getBCHTypeNumber = function(t) {
                    for (var r = t << 12; e(r) - e(i) >= 0;) r ^= i << e(r) - e(i);
                    return t << 12 | r
                  }, o.getPatternPosition = function(t) {
                    return r[t - 1]
                  }, o.getMaskFunction = function(t) {
                    switch (t) {
                      case 0:
                        return function(t, r) {
                          return (t + r) % 2 == 0
                        };
                      case 1:
                        return function(t, r) {
                          return t % 2 == 0
                        };
                      case 2:
                        return function(t, r) {
                          return r % 3 == 0
                        };
                      case 3:
                        return function(t, r) {
                          return (t + r) % 3 == 0
                        };
                      case 4:
                        return function(t, r) {
                          return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0
                        };
                      case 5:
                        return function(t, r) {
                          return t * r % 2 + t * r % 3 == 0
                        };
                      case 6:
                        return function(t, r) {
                          return (t * r % 2 + t * r % 3) % 2 == 0
                        };
                      case 7:
                        return function(t, r) {
                          return (t * r % 3 + (t + r) % 2) % 2 == 0
                        };
                      default:
                        throw "bad maskPattern:" + t
                    }
                  }, o.getErrorCorrectPolynomial = function(t) {
                    for (var r = s([1], 0), n = 0; t > n; n += 1) r = r.multiply(s([1, f.gexp(n)], 0));
                    return r
                  }, o.getLengthInBits = function(t, r) {
                    if (r >= 1 && 10 > r) switch (t) {
                      case 1:
                        return 10;
                      case 2:
                        return 9;
                      case 4:
                      case 8:
                        return 8;
                      default:
                        throw "mode:" + t
                    } else if (27 > r) switch (t) {
                      case 1:
                        return 12;
                      case 2:
                        return 11;
                      case 4:
                        return 16;
                      case 8:
                        return 10;
                      default:
                        throw "mode:" + t
                    } else {
                      if (r >= 41) throw "type:" + r;
                      switch (t) {
                        case 1:
                          return 14;
                        case 2:
                          return 13;
                        case 4:
                          return 16;
                        case 8:
                          return 12;
                        default:
                          throw "mode:" + t
                      }
                    }
                  }, o.getLostPoint = function(t) {
                    for (var r = t.getModuleCount(), n = 0, i = 0; r > i; i += 1)
                      for (var o = 0; r > o; o += 1) {
                        for (var e = 0, a = t.isDark(i, o), u = -1; 1 >= u; u += 1)
                          if (i + u >= 0 && r > i + u)
                            for (var f = -1; 1 >= f; f += 1) 0 > o + f || o + f >= r || 0 == u && 0 == f || a == t.isDark(i + u, o + f) && (e += 1);
                        e > 5 && (n += 3 + e - 5)
                      }
                    for (i = 0; r - 1 > i; i += 1)
                      for (o = 0; r - 1 > o; o += 1) {
                        var s = 0;
                        t.isDark(i, o) && (s += 1), t.isDark(i + 1, o) && (s += 1), t.isDark(i, o + 1) && (s += 1), t.isDark(i + 1, o + 1) && (s += 1), 0 != s && 4 != s || (n += 3)
                      }
                    for (i = 0; r > i; i += 1)
                      for (o = 0; r - 6 > o; o += 1) t.isDark(i, o) && !t.isDark(i, o + 1) && t.isDark(i, o + 2) && t.isDark(i, o + 3) && t.isDark(i, o + 4) && !t.isDark(i, o + 5) && t.isDark(i, o + 6) && (n += 40);
                    for (o = 0; r > o; o += 1)
                      for (i = 0; r - 6 > i; i += 1) t.isDark(i, o) && !t.isDark(i + 1, o) && t.isDark(i + 2, o) && t.isDark(i + 3, o) && t.isDark(i + 4, o) && !t.isDark(i + 5, o) && t.isDark(i + 6, o) && (n += 40);
                    var c = 0;
                    for (o = 0; r > o; o += 1)
                      for (i = 0; r > i; i += 1) t.isDark(i, o) && (c += 1);
                    return n + Math.abs(100 * c / r / r - 50) / 5 * 10
                  }, o),
                  f = function() {
                    for (var t = Array(256), r = Array(256), n = 0; 8 > n; n += 1) t[n] = 1 << n;
                    for (n = 8; 256 > n; n += 1) t[n] = t[n - 4] ^ t[n - 5] ^ t[n - 6] ^ t[n - 8];
                    for (n = 0; 255 > n; n += 1) r[t[n]] = n;
                    return {
                      glog: function(t) {
                        if (1 > t) throw "glog(" + t + ")";
                        return r[t]
                      },
                      gexp: function(r) {
                        for (; 0 > r;) r += 255;
                        for (; r >= 256;) r -= 255;
                        return t[r]
                      }
                    }
                  }();

                function s(t, r) {
                  if (void 0 === t.length) throw t.length + "/" + r;
                  var n = function() {
                      for (var n = 0; n < t.length && 0 == t[n];) n += 1;
                      for (var i = Array(t.length - n + r), o = 0; o < t.length - n; o += 1) i[o] = t[o + n];
                      return i
                    }(),
                    i = {
                      getAt: function(t) {
                        return n[t]
                      },
                      getLength: function() {
                        return n.length
                      },
                      multiply: function(t) {
                        for (var r = Array(i.getLength() + t.getLength() - 1), n = 0; n < i.getLength(); n += 1)
                          for (var o = 0; o < t.getLength(); o += 1) r[n + o] ^= f.gexp(f.glog(i.getAt(n)) + f.glog(t.getAt(o)));
                        return s(r, 0)
                      },
                      mod: function(t) {
                        if (0 > i.getLength() - t.getLength()) return i;
                        for (var r = f.glog(i.getAt(0)) - f.glog(t.getAt(0)), n = Array(i.getLength()), o = 0; o < i.getLength(); o += 1) n[o] = i.getAt(o);
                        for (o = 0; o < t.getLength(); o += 1) n[o] ^= f.gexp(f.glog(t.getAt(o)) + r);
                        return s(n, 0).mod(t)
                      }
                    };
                  return i
                }
                var c, h, v = (c = [
                    [1, 26, 19],
                    [1, 26, 16],
                    [1, 26, 13],
                    [1, 26, 9],
                    [1, 44, 34],
                    [1, 44, 28],
                    [1, 44, 22],
                    [1, 44, 16],
                    [1, 70, 55],
                    [1, 70, 44],
                    [2, 35, 17],
                    [2, 35, 13],
                    [1, 100, 80],
                    [2, 50, 32],
                    [2, 50, 24],
                    [4, 25, 9],
                    [1, 134, 108],
                    [2, 67, 43],
                    [2, 33, 15, 2, 34, 16],
                    [2, 33, 11, 2, 34, 12],
                    [2, 86, 68],
                    [4, 43, 27],
                    [4, 43, 19],
                    [4, 43, 15],
                    [2, 98, 78],
                    [4, 49, 31],
                    [2, 32, 14, 4, 33, 15],
                    [4, 39, 13, 1, 40, 14],
                    [2, 121, 97],
                    [2, 60, 38, 2, 61, 39],
                    [4, 40, 18, 2, 41, 19],
                    [4, 40, 14, 2, 41, 15],
                    [2, 146, 116],
                    [3, 58, 36, 2, 59, 37],
                    [4, 36, 16, 4, 37, 17],
                    [4, 36, 12, 4, 37, 13],
                    [2, 86, 68, 2, 87, 69],
                    [4, 69, 43, 1, 70, 44],
                    [6, 43, 19, 2, 44, 20],
                    [6, 43, 15, 2, 44, 16],
                    [4, 101, 81],
                    [1, 80, 50, 4, 81, 51],
                    [4, 50, 22, 4, 51, 23],
                    [3, 36, 12, 8, 37, 13],
                    [2, 116, 92, 2, 117, 93],
                    [6, 58, 36, 2, 59, 37],
                    [4, 46, 20, 6, 47, 21],
                    [7, 42, 14, 4, 43, 15],
                    [4, 133, 107],
                    [8, 59, 37, 1, 60, 38],
                    [8, 44, 20, 4, 45, 21],
                    [12, 33, 11, 4, 34, 12],
                    [3, 145, 115, 1, 146, 116],
                    [4, 64, 40, 5, 65, 41],
                    [11, 36, 16, 5, 37, 17],
                    [11, 36, 12, 5, 37, 13],
                    [5, 109, 87, 1, 110, 88],
                    [5, 65, 41, 5, 66, 42],
                    [5, 54, 24, 7, 55, 25],
                    [11, 36, 12, 7, 37, 13],
                    [5, 122, 98, 1, 123, 99],
                    [7, 73, 45, 3, 74, 46],
                    [15, 43, 19, 2, 44, 20],
                    [3, 45, 15, 13, 46, 16],
                    [1, 135, 107, 5, 136, 108],
                    [10, 74, 46, 1, 75, 47],
                    [1, 50, 22, 15, 51, 23],
                    [2, 42, 14, 17, 43, 15],
                    [5, 150, 120, 1, 151, 121],
                    [9, 69, 43, 4, 70, 44],
                    [17, 50, 22, 1, 51, 23],
                    [2, 42, 14, 19, 43, 15],
                    [3, 141, 113, 4, 142, 114],
                    [3, 70, 44, 11, 71, 45],
                    [17, 47, 21, 4, 48, 22],
                    [9, 39, 13, 16, 40, 14],
                    [3, 135, 107, 5, 136, 108],
                    [3, 67, 41, 13, 68, 42],
                    [15, 54, 24, 5, 55, 25],
                    [15, 43, 15, 10, 44, 16],
                    [4, 144, 116, 4, 145, 117],
                    [17, 68, 42],
                    [17, 50, 22, 6, 51, 23],
                    [19, 46, 16, 6, 47, 17],
                    [2, 139, 111, 7, 140, 112],
                    [17, 74, 46],
                    [7, 54, 24, 16, 55, 25],
                    [34, 37, 13],
                    [4, 151, 121, 5, 152, 122],
                    [4, 75, 47, 14, 76, 48],
                    [11, 54, 24, 14, 55, 25],
                    [16, 45, 15, 14, 46, 16],
                    [6, 147, 117, 4, 148, 118],
                    [6, 73, 45, 14, 74, 46],
                    [11, 54, 24, 16, 55, 25],
                    [30, 46, 16, 2, 47, 17],
                    [8, 132, 106, 4, 133, 107],
                    [8, 75, 47, 13, 76, 48],
                    [7, 54, 24, 22, 55, 25],
                    [22, 45, 15, 13, 46, 16],
                    [10, 142, 114, 2, 143, 115],
                    [19, 74, 46, 4, 75, 47],
                    [28, 50, 22, 6, 51, 23],
                    [33, 46, 16, 4, 47, 17],
                    [8, 152, 122, 4, 153, 123],
                    [22, 73, 45, 3, 74, 46],
                    [8, 53, 23, 26, 54, 24],
                    [12, 45, 15, 28, 46, 16],
                    [3, 147, 117, 10, 148, 118],
                    [3, 73, 45, 23, 74, 46],
                    [4, 54, 24, 31, 55, 25],
                    [11, 45, 15, 31, 46, 16],
                    [7, 146, 116, 7, 147, 117],
                    [21, 73, 45, 7, 74, 46],
                    [1, 53, 23, 37, 54, 24],
                    [19, 45, 15, 26, 46, 16],
                    [5, 145, 115, 10, 146, 116],
                    [19, 75, 47, 10, 76, 48],
                    [15, 54, 24, 25, 55, 25],
                    [23, 45, 15, 25, 46, 16],
                    [13, 145, 115, 3, 146, 116],
                    [2, 74, 46, 29, 75, 47],
                    [42, 54, 24, 1, 55, 25],
                    [23, 45, 15, 28, 46, 16],
                    [17, 145, 115],
                    [10, 74, 46, 23, 75, 47],
                    [10, 54, 24, 35, 55, 25],
                    [19, 45, 15, 35, 46, 16],
                    [17, 145, 115, 1, 146, 116],
                    [14, 74, 46, 21, 75, 47],
                    [29, 54, 24, 19, 55, 25],
                    [11, 45, 15, 46, 46, 16],
                    [13, 145, 115, 6, 146, 116],
                    [14, 74, 46, 23, 75, 47],
                    [44, 54, 24, 7, 55, 25],
                    [59, 46, 16, 1, 47, 17],
                    [12, 151, 121, 7, 152, 122],
                    [12, 75, 47, 26, 76, 48],
                    [39, 54, 24, 14, 55, 25],
                    [22, 45, 15, 41, 46, 16],
                    [6, 151, 121, 14, 152, 122],
                    [6, 75, 47, 34, 76, 48],
                    [46, 54, 24, 10, 55, 25],
                    [2, 45, 15, 64, 46, 16],
                    [17, 152, 122, 4, 153, 123],
                    [29, 74, 46, 14, 75, 47],
                    [49, 54, 24, 10, 55, 25],
                    [24, 45, 15, 46, 46, 16],
                    [4, 152, 122, 18, 153, 123],
                    [13, 74, 46, 32, 75, 47],
                    [48, 54, 24, 14, 55, 25],
                    [42, 45, 15, 32, 46, 16],
                    [20, 147, 117, 4, 148, 118],
                    [40, 75, 47, 7, 76, 48],
                    [43, 54, 24, 22, 55, 25],
                    [10, 45, 15, 67, 46, 16],
                    [19, 148, 118, 6, 149, 119],
                    [18, 75, 47, 31, 76, 48],
                    [34, 54, 24, 34, 55, 25],
                    [20, 45, 15, 61, 46, 16]
                  ], h = function(t, r) {
                    var n = {};
                    return n.totalCount = t, n.dataCount = r, n
                  }, {
                    getRSBlocks: function(t, r) {
                      var n = function(t, r) {
                        switch (r) {
                          case a.L:
                            return c[4 * (t - 1) + 0];
                          case a.M:
                            return c[4 * (t - 1) + 1];
                          case a.Q:
                            return c[4 * (t - 1) + 2];
                          case a.H:
                            return c[4 * (t - 1) + 3];
                          default:
                            return
                        }
                      }(t, r);
                      if (void 0 === n) throw "bad rs block @ typeNumber:" + t + "/errorCorrectionLevel:" + r;
                      for (var i = n.length / 3, o = [], e = 0; i > e; e += 1)
                        for (var u = n[3 * e + 0], f = n[3 * e + 1], s = n[3 * e + 2], v = 0; u > v; v += 1) o.push(h(f, s));
                      return o
                    }
                  }),
                  l = function() {
                    var t = [],
                      r = 0,
                      n = {
                        getBuffer: function() {
                          return t
                        },
                        getAt: function(r) {
                          return 1 == (t[Math.floor(r / 8)] >>> 7 - r % 8 & 1)
                        },
                        put: function(t, r) {
                          for (var i = 0; r > i; i += 1) n.putBit(1 == (t >>> r - i - 1 & 1))
                        },
                        getLengthInBits: function() {
                          return r
                        },
                        putBit: function(n) {
                          var i = Math.floor(r / 8);
                          t.length <= i && t.push(0), n && (t[i] |= 128 >>> r % 8), r += 1
                        }
                      };
                    return n
                  },
                  d = function(t) {
                    var r = t,
                      n = {
                        getMode: function() {
                          return 1
                        },
                        getLength: function(t) {
                          return r.length
                        },
                        write: function(t) {
                          for (var n = r, o = 0; o + 2 < n.length;) t.put(i(n.substring(o, o + 3)), 10), o += 3;
                          o < n.length && (n.length - o == 1 ? t.put(i(n.substring(o, o + 1)), 4) : n.length - o == 2 && t.put(i(n.substring(o, o + 2)), 7))
                        }
                      },
                      i = function(t) {
                        for (var r = 0, n = 0; n < t.length; n += 1) r = 10 * r + o(t.charAt(n));
                        return r
                      },
                      o = function(t) {
                        if (t >= "0" && "9" >= t) return t.charCodeAt(0) - 48;
                        throw "illegal char :" + t
                      };
                    return n
                  },
                  w = function(t) {
                    var r = t,
                      n = {
                        getMode: function() {
                          return 2
                        },
                        getLength: function(t) {
                          return r.length
                        },
                        write: function(t) {
                          for (var n = r, o = 0; o + 1 < n.length;) t.put(45 * i(n.charAt(o)) + i(n.charAt(o + 1)), 11), o += 2;
                          o < n.length && t.put(i(n.charAt(o)), 6)
                        }
                      },
                      i = function(t) {
                        if (t >= "0" && "9" >= t) return t.charCodeAt(0) - 48;
                        if (t >= "A" && "Z" >= t) return t.charCodeAt(0) - 65 + 10;
                        switch (t) {
                          case " ":
                            return 36;
                          case "$":
                            return 37;
                          case "%":
                            return 38;
                          case "*":
                            return 39;
                          case "+":
                            return 40;
                          case "-":
                            return 41;
                          case ".":
                            return 42;
                          case "/":
                            return 43;
                          case ":":
                            return 44;
                          default:
                            throw "illegal char :" + t
                        }
                      };
                    return n
                  },
                  g = function(r) {
                    var n = t.stringToBytes(r);
                    return {
                      getMode: function() {
                        return 4
                      },
                      getLength: function(t) {
                        return n.length
                      },
                      write: function(t) {
                        for (var r = 0; r < n.length; r += 1) t.put(n[r], 8)
                      }
                    }
                  },
                  p = function(r) {
                    var n = t.stringToBytesFuncs.SJIS;
                    if (!n) throw "sjis not supported.";
                    ! function() {
                      var t = n("友");
                      if (2 != t.length || 38726 != (t[0] << 8 | t[1])) throw "sjis not supported."
                    }();
                    var i = n(r);
                    return {
                      getMode: function() {
                        return 8
                      },
                      getLength: function(t) {
                        return ~~(i.length / 2)
                      },
                      write: function(t) {
                        for (var r = i, n = 0; n + 1 < r.length;) {
                          var o = (255 & r[n]) << 8 | 255 & r[n + 1];
                          if (33088 > o || o > 40956) {
                            if (57408 > o || o > 60351) throw "illegal char at " + (n + 1) + "/" + o;
                            o -= 49472
                          } else o -= 33088;
                          o = 192 * (o >>> 8 & 255) + (255 & o), t.put(o, 13), n += 2
                        }
                        if (n < r.length) throw "illegal char at " + (n + 1)
                      }
                    }
                  },
                  y = function() {
                    var t = [],
                      r = {
                        writeByte: function(r) {
                          t.push(255 & r)
                        },
                        writeShort: function(t) {
                          r.writeByte(t), r.writeByte(t >>> 8)
                        },
                        writeBytes: function(t, n, i) {
                          n = n || 0, i = i || t.length;
                          for (var o = 0; i > o; o += 1) r.writeByte(t[o + n])
                        },
                        writeString: function(t) {
                          for (var n = 0; n < t.length; n += 1) r.writeByte(t.charCodeAt(n))
                        },
                        toByteArray: function() {
                          return t
                        },
                        toString: function() {
                          var r = "";
                          r += "[";
                          for (var n = 0; n < t.length; n += 1) n > 0 && (r += ","), r += t[n];
                          return r + "]"
                        }
                      };
                    return r
                  },
                  M = function(t) {
                    var r = t,
                      n = 0,
                      i = 0,
                      o = 0,
                      e = {
                        read: function() {
                          for (; 8 > o;) {
                            if (n >= r.length) {
                              if (0 == o) return -1;
                              throw "unexpected end of file./" + o
                            }
                            var t = r.charAt(n);
                            if (n += 1, "=" == t) return o = 0, -1;
                            t.match(/^\s$/) || (i = i << 6 | a(t.charCodeAt(0)), o += 6)
                          }
                          var e = i >>> o - 8 & 255;
                          return o -= 8, e
                        }
                      },
                      a = function(t) {
                        if (t >= 65 && 90 >= t) return t - 65;
                        if (t >= 97 && 122 >= t) return t - 97 + 26;
                        if (t >= 48 && 57 >= t) return t - 48 + 52;
                        if (43 == t) return 62;
                        if (47 == t) return 63;
                        throw "c:" + t
                      };
                    return e
                  },
                  b = function(t, r, n) {
                    for (var i = function(t, r) {
                        var n = t,
                          i = r,
                          o = Array(t * r),
                          e = {
                            setPixel: function(t, r, i) {
                              o[r * n + t] = i
                            },
                            write: function(t) {
                              t.writeString("GIF87a"), t.writeShort(n), t.writeShort(i), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(i), t.writeByte(0);
                              var r = a(2);
                              t.writeByte(2);
                              for (var o = 0; r.length - o > 255;) t.writeByte(255), t.writeBytes(r, o, 255), o += 255;
                              t.writeByte(r.length - o), t.writeBytes(r, o, r.length - o), t.writeByte(0), t.writeString(";")
                            }
                          },
                          a = function(t) {
                            for (var r = 1 << t, n = 1 + (1 << t), i = t + 1, e = u(), a = 0; r > a; a += 1) e.add(String.fromCharCode(a));
                            e.add(String.fromCharCode(r)), e.add(String.fromCharCode(n));
                            var f, s, c, h = y(),
                              v = (f = h, s = 0, c = 0, {
                                write: function(t, r) {
                                  if (t >>> r) throw "length over";
                                  for (; s + r >= 8;) f.writeByte(255 & (t << s | c)), r -= 8 - s, t >>>= 8 - s, c = 0, s = 0;
                                  c |= t << s, s += r
                                },
                                flush: function() {
                                  s > 0 && f.writeByte(c)
                                }
                              });
                            v.write(r, i);
                            var l = 0,
                              d = String.fromCharCode(o[l]);
                            for (l += 1; l < o.length;) {
                              var w = String.fromCharCode(o[l]);
                              l += 1, e.contains(d + w) ? d += w : (v.write(e.indexOf(d), i), 4095 > e.size() && (e.size() == 1 << i && (i += 1), e.add(d + w)), d = w)
                            }
                            return v.write(e.indexOf(d), i), v.write(n, i), v.flush(), h.toByteArray()
                          },
                          u = function() {
                            var t = {},
                              r = 0,
                              n = {
                                add: function(i) {
                                  if (n.contains(i)) throw "dup key:" + i;
                                  t[i] = r, r += 1
                                },
                                size: function() {
                                  return r
                                },
                                indexOf: function(r) {
                                  return t[r]
                                },
                                contains: function(r) {
                                  return void 0 !== t[r]
                                }
                              };
                            return n
                          };
                        return e
                      }(t, r), o = 0; r > o; o += 1)
                      for (var e = 0; t > e; e += 1) i.setPixel(e, o, n(e, o));
                    var a = y();
                    i.write(a);
                    for (var u = function() {
                        var t = 0,
                          r = 0,
                          n = 0,
                          i = "",
                          o = {},
                          e = function(t) {
                            i += String.fromCharCode(a(63 & t))
                          },
                          a = function(t) {
                            if (t >= 0) {
                              if (26 > t) return 65 + t;
                              if (52 > t) return t - 26 + 97;
                              if (62 > t) return t - 52 + 48;
                              if (62 == t) return 43;
                              if (63 == t) return 47
                            }
                            throw "n:" + t
                          };
                        return o.writeByte = function(i) {
                          for (t = t << 8 | 255 & i, r += 8, n += 1; r >= 6;) e(t >>> r - 6), r -= 6
                        }, o.flush = function() {
                          if (r > 0 && (e(t << 6 - r), t = 0, r = 0), n % 3 != 0)
                            for (var o = 3 - n % 3, a = 0; o > a; a += 1) i += "="
                        }, o.toString = function() {
                          return i
                        }, o
                      }(), f = a.toByteArray(), s = 0; s < f.length; s += 1) u.writeByte(f[s]);
                    return u.flush(), "data:image/gif;base64," + u
                  };
                return t
              }();
              o.stringToBytesFuncs["UTF-8"] = function(t) {
                return function(t) {
                  for (var r = [], n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n);
                    128 > i ? r.push(i) : 2048 > i ? r.push(192 | i >> 6, 128 | 63 & i) : 55296 > i || i >= 57344 ? r.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (n++, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(n)), r.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
                  }
                  return r
                }(t)
              }, void 0 === (i = "function" == typeof(n = function() {
                return o
              }) ? n() : n) || (t.exports = i)
            }
          },
          r = {};

        function n(i) {
          var o = r[i];
          if (void 0 !== o) return o.exports;
          var e = r[i] = {
            exports: {}
          };
          return t[i](e, e.exports, n), e.exports
        }
        n.n = t => {
          var r = t && t.u ? () => t.default : () => t;
          return n.d(r, {
            a: r
          }), r
        }, n.d = (t, r) => {
          for (var i in r) n.o(r, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: r[i]
          })
        }, n.o = (t, r) => ({}.hasOwnProperty.call(t, r));
        var i = {};
        return (() => {
          "use strict";
          n.d(i, {
            default: () => P
          });
          var t = function() {
              return t = Object.assign || function(t) {
                for (var r, n = 1, i = arguments.length; i > n; n++)
                  for (var o in r = arguments[n])({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
                return t
              }, t.apply(this, arguments)
            },
            r = function(t) {
              return !!t && "object" == typeof t && !Array.isArray(t)
            };

          function e(n) {
            for (var i = [], o = 1; arguments.length > o; o++) i[o - 1] = arguments[o];
            if (!i.length) return n;
            var a = i.shift();
            return void 0 !== a && r(n) && r(a) ? (n = t({}, n), Object.keys(a).forEach(function(t) {
              var i = n[t],
                o = a[t];
              Array.isArray(i) && Array.isArray(o) ? n[t] = o : r(i) && r(o) ? n[t] = e(Object.assign({}, i), o) : n[t] = o
            }), e.apply(void 0, function(t, r, n) {
              if (n || 2 === arguments.length)
                for (var i, o = 0, e = r.length; e > o; o++) !i && o in r || (i || (i = [].slice.call(r, 0, o)), i[o] = r[o]);
              return t.concat(i || [].slice.call(r))
            }([n], i, !1))) : n
          }

          function a(t, r) {
            var n = document.createElement("a");
            n.download = r, n.href = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
          }

          function u(t) {
            return r = this, i = function() {
              return function(t, r) {
                var n, i, o, e = {
                    label: 0,
                    sent: function() {
                      if (1 & o[0]) throw o[1];
                      return o[1]
                    },
                    trys: [],
                    ops: []
                  },
                  a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                  return this
                }), a;

                function u(t) {
                  return function(u) {
                    return function(t) {
                      if (n) throw new TypeError("Generator is already executing.");
                      for (; a && (a = 0, t[0] && (e = 0)), e;) try {
                        if (n = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                        switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                          case 0:
                          case 1:
                            o = t;
                            break;
                          case 4:
                            return e.label++, {
                              value: t[1],
                              done: !1
                            };
                          case 5:
                            e.label++, i = t[1], t = [0];
                            continue;
                          case 7:
                            t = e.ops.pop(), e.trys.pop();
                            continue;
                          default:
                            if (!((o = (o = e.trys).length > 0 && o[o.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                              e = 0;
                              continue
                            }
                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                              e.label = t[1];
                              break
                            }
                            if (6 === t[0] && e.label < o[1]) {
                              e.label = o[1], o = t;
                              break
                            }
                            if (o && e.label < o[2]) {
                              e.label = o[2], e.ops.push(t);
                              break
                            }
                            o[2] && e.ops.pop(), e.trys.pop();
                            continue
                        }
                        t = r()
                      } catch (r) {
                        t = [6, r], i = 0
                      } finally {
                        n = o = 0
                      }
                      if (5 & t[0]) throw t[1];
                      return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                      }
                    }([t, u])
                  }
                }
              }(0, function(r) {
                return [2, new Promise(function(r) {
                  var n = new XMLHttpRequest;
                  n.onload = function() {
                    var t = new FileReader;
                    t.onloadend = function() {
                      r(t.result)
                    }, t.readAsDataURL(n.response)
                  }, n.open("GET", t), n.responseType = "blob", n.send()
                })]
              })
            }, new((n = void 0) || (n = Promise))(function(t, o) {
              function e(t) {
                try {
                  u(i.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function a(t) {
                try {
                  u(i.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(r) {
                var i;
                r.done ? t(r.value) : (i = r.value, i instanceof n ? i : new n(function(t) {
                  t(i)
                })).then(e, a)
              }
              u((i = i.call(r)).next())
            });
            var r, n, i
          }
          const f = {
            L: .07,
            M: .15,
            Q: .25,
            H: .3
          };
          var s = function() {
            return s = Object.assign || function(t) {
              for (var r, n = 1, i = arguments.length; i > n; n++)
                for (var o in r = arguments[n])({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t
            }, s.apply(this, arguments)
          };
          const c = function() {
            function t(t) {
              var r = t.svg,
                n = t.type,
                i = t.window;
              this.h = r, this.v = n, this.l = i
            }
            return t.prototype.draw = function(t, r, n, i) {
              var o;
              switch (this.v) {
                case "dots":
                  o = this.p;
                  break;
                case "classy":
                  o = this.m;
                  break;
                case "classy-rounded":
                  o = this.k;
                  break;
                case "rounded":
                  o = this.A;
                  break;
                case "extra-rounded":
                  o = this.O;
                  break;
                default:
                  o = this.S
              }
              o.call(this, {
                x: t,
                y: r,
                size: n,
                getNeighbor: i
              })
            }, t.prototype.j = function(t) {
              var r, n = t.x,
                i = t.y,
                o = t.size,
                e = t.rotation,
                a = void 0 === e ? 0 : e,
                u = n + o / 2,
                f = i + o / 2;
              (0, t.draw)(), null === (r = this.B) || void 0 === r || r.setAttribute("transform", "rotate(".concat(180 * a / Math.PI, ",").concat(u, ",").concat(f, ")"))
            }, t.prototype.R = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "circle"), r.B.setAttribute("cx", i + n / 2 + ""), r.B.setAttribute("cy", o + n / 2 + ""), r.B.setAttribute("r", n / 2 + "")
                }
              }))
            }, t.prototype.q = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "rect"), r.B.setAttribute("x", i + ""), r.B.setAttribute("y", o + ""), r.B.setAttribute("width", n + ""), r.B.setAttribute("height", n + "")
                }
              }))
            }, t.prototype.P = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o) + "v ".concat(n) + "h ".concat(n / 2) + "a ".concat(n / 2, " ").concat(n / 2, ", 0, 0, 0, 0 ").concat(-n))
                }
              }))
            }, t.prototype.D = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o) + "v ".concat(n) + "h ".concat(n) + "v ".concat(-n / 2) + "a ".concat(n / 2, " ").concat(n / 2, ", 0, 0, 0, ").concat(-n / 2, " ").concat(-n / 2))
                }
              }))
            }, t.prototype.I = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o) + "v ".concat(n) + "h ".concat(n) + "a ".concat(n, " ").concat(n, ", 0, 0, 0, ").concat(-n, " ").concat(-n))
                }
              }))
            }, t.prototype.T = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y;
              this.j(s(s({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o) + "v ".concat(n / 2) + "a ".concat(n / 2, " ").concat(n / 2, ", 0, 0, 0, ").concat(n / 2, " ").concat(n / 2) + "h ".concat(n / 2) + "v ".concat(-n / 2) + "a ".concat(n / 2, " ").concat(n / 2, ", 0, 0, 0, ").concat(-n / 2, " ").concat(-n / 2))
                }
              }))
            }, t.prototype.p = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size;
              this.R({
                x: r,
                y: n,
                size: i,
                rotation: 0
              })
            }, t.prototype.S = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size;
              this.q({
                x: r,
                y: n,
                size: i,
                rotation: 0
              })
            }, t.prototype.A = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.getNeighbor,
                e = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                u = o ? +o(0, -1) : 0,
                f = o ? +o(0, 1) : 0,
                s = e + a + u + f;
              if (0 !== s)
                if (s > 2 || e && a || u && f) this.q({
                  x: r,
                  y: n,
                  size: i,
                  rotation: 0
                });
                else {
                  if (2 === s) {
                    var c = 0;
                    return e && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), void this.D({
                      x: r,
                      y: n,
                      size: i,
                      rotation: c
                    })
                  }
                  if (1 === s) return c = 0, u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), void this.P({
                    x: r,
                    y: n,
                    size: i,
                    rotation: c
                  })
                }
              else this.R({
                x: r,
                y: n,
                size: i,
                rotation: 0
              })
            }, t.prototype.O = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.getNeighbor,
                e = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                u = o ? +o(0, -1) : 0,
                f = o ? +o(0, 1) : 0,
                s = e + a + u + f;
              if (0 !== s)
                if (s > 2 || e && a || u && f) this.q({
                  x: r,
                  y: n,
                  size: i,
                  rotation: 0
                });
                else {
                  if (2 === s) {
                    var c = 0;
                    return e && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), void this.I({
                      x: r,
                      y: n,
                      size: i,
                      rotation: c
                    })
                  }
                  if (1 === s) return c = 0, u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), void this.P({
                    x: r,
                    y: n,
                    size: i,
                    rotation: c
                  })
                }
              else this.R({
                x: r,
                y: n,
                size: i,
                rotation: 0
              })
            }, t.prototype.m = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.getNeighbor,
                e = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                u = o ? +o(0, -1) : 0,
                f = o ? +o(0, 1) : 0;
              e + a + u + f !== 0 ? e || u ? a || f ? this.q({
                x: r,
                y: n,
                size: i,
                rotation: 0
              }) : this.D({
                x: r,
                y: n,
                size: i,
                rotation: Math.PI / 2
              }) : this.D({
                x: r,
                y: n,
                size: i,
                rotation: -Math.PI / 2
              }) : this.T({
                x: r,
                y: n,
                size: i,
                rotation: Math.PI / 2
              })
            }, t.prototype.k = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.getNeighbor,
                e = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                u = o ? +o(0, -1) : 0,
                f = o ? +o(0, 1) : 0;
              e + a + u + f !== 0 ? e || u ? a || f ? this.q({
                x: r,
                y: n,
                size: i,
                rotation: 0
              }) : this.I({
                x: r,
                y: n,
                size: i,
                rotation: Math.PI / 2
              }) : this.I({
                x: r,
                y: n,
                size: i,
                rotation: -Math.PI / 2
              }) : this.T({
                x: r,
                y: n,
                size: i,
                rotation: Math.PI / 2
              })
            }, t
          }();
          var h = function() {
            return h = Object.assign || function(t) {
              for (var r, n = 1, i = arguments.length; i > n; n++)
                for (var o in r = arguments[n])({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t
            }, h.apply(this, arguments)
          };
          const v = function() {
            function t(t) {
              var r = t.svg,
                n = t.type,
                i = t.window;
              this.h = r, this.v = n, this.l = i
            }
            return t.prototype.draw = function(t, r, n, i) {
              var o;
              switch (this.v) {
                case "square":
                  o = this.S;
                  break;
                case "extra-rounded":
                  o = this.O;
                  break;
                default:
                  o = this.p
              }
              o.call(this, {
                x: t,
                y: r,
                size: n,
                rotation: i
              })
            }, t.prototype.j = function(t) {
              var r, n = t.x,
                i = t.y,
                o = t.size,
                e = t.rotation,
                a = void 0 === e ? 0 : e,
                u = n + o / 2,
                f = i + o / 2;
              (0, t.draw)(), null === (r = this.B) || void 0 === r || r.setAttribute("transform", "rotate(".concat(180 * a / Math.PI, ",").concat(u, ",").concat(f, ")"))
            }, t.prototype.R = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y,
                e = n / 7;
              this.j(h(h({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("clip-rule", "evenodd"), r.B.setAttribute("d", "M ".concat(i + n / 2, " ").concat(o) + "a ".concat(n / 2, " ").concat(n / 2, " 0 1 0 0.1 0") + "z" + "m 0 ".concat(e) + "a ".concat(n / 2 - e, " ").concat(n / 2 - e, " 0 1 1 -0.1 0") + "Z")
                }
              }))
            }, t.prototype.q = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y,
                e = n / 7;
              this.j(h(h({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("clip-rule", "evenodd"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o) + "v ".concat(n) + "h ".concat(n) + "v ".concat(-n) + "z" + "M ".concat(i + e, " ").concat(o + e) + "h ".concat(n - 2 * e) + "v ".concat(n - 2 * e) + "h ".concat(2 * e - n) + "z")
                }
              }))
            }, t.prototype.G = function(t) {
              var r = this,
                n = t.size,
                i = t.x,
                o = t.y,
                e = n / 7;
              this.j(h(h({}, t), {
                draw: function() {
                  r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "path"), r.B.setAttribute("clip-rule", "evenodd"), r.B.setAttribute("d", "M ".concat(i, " ").concat(o + 2.5 * e) + "v ".concat(2 * e) + "a ".concat(2.5 * e, " ").concat(2.5 * e, ", 0, 0, 0, ").concat(2.5 * e, " ").concat(2.5 * e) + "h ".concat(2 * e) + "a ".concat(2.5 * e, " ").concat(2.5 * e, ", 0, 0, 0, ").concat(2.5 * e, " ").concat(2.5 * -e) + "v ".concat(-2 * e) + "a ".concat(2.5 * e, " ").concat(2.5 * e, ", 0, 0, 0, ").concat(2.5 * -e, " ").concat(2.5 * -e) + "h ".concat(-2 * e) + "a ".concat(2.5 * e, " ").concat(2.5 * e, ", 0, 0, 0, ").concat(2.5 * -e, " ").concat(2.5 * e) + "M ".concat(i + 2.5 * e, " ").concat(o + e) + "h ".concat(2 * e) + "a ".concat(1.5 * e, " ").concat(1.5 * e, ", 0, 0, 1, ").concat(1.5 * e, " ").concat(1.5 * e) + "v ".concat(2 * e) + "a ".concat(1.5 * e, " ").concat(1.5 * e, ", 0, 0, 1, ").concat(1.5 * -e, " ").concat(1.5 * e) + "h ".concat(-2 * e) + "a ".concat(1.5 * e, " ").concat(1.5 * e, ", 0, 0, 1, ").concat(1.5 * -e, " ").concat(1.5 * -e) + "v ".concat(-2 * e) + "a ".concat(1.5 * e, " ").concat(1.5 * e, ", 0, 0, 1, ").concat(1.5 * e, " ").concat(1.5 * -e))
                }
              }))
            }, t.prototype.p = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.rotation;
              this.R({
                x: r,
                y: n,
                size: i,
                rotation: o
              })
            }, t.prototype.S = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.rotation;
              this.q({
                x: r,
                y: n,
                size: i,
                rotation: o
              })
            }, t.prototype.O = function(t) {
              var r = t.x,
                n = t.y,
                i = t.size,
                o = t.rotation;
              this.G({
                x: r,
                y: n,
                size: i,
                rotation: o
              })
            }, t
          }();
          var l = function() {
            return l = Object.assign || function(t) {
              for (var r, n = 1, i = arguments.length; i > n; n++)
                for (var o in r = arguments[n])({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t
            }, l.apply(this, arguments)
          };
          const d = function() {
              function t(t) {
                var r = t.svg,
                  n = t.type,
                  i = t.window;
                this.h = r, this.v = n, this.l = i
              }
              return t.prototype.draw = function(t, r, n, i) {
                ("square" === this.v ? this.S : this.p).call(this, {
                  x: t,
                  y: r,
                  size: n,
                  rotation: i
                })
              }, t.prototype.j = function(t) {
                var r, n = t.x,
                  i = t.y,
                  o = t.size,
                  e = t.rotation,
                  a = void 0 === e ? 0 : e,
                  u = n + o / 2,
                  f = i + o / 2;
                (0, t.draw)(), null === (r = this.B) || void 0 === r || r.setAttribute("transform", "rotate(".concat(180 * a / Math.PI, ",").concat(u, ",").concat(f, ")"))
              }, t.prototype.R = function(t) {
                var r = this,
                  n = t.size,
                  i = t.x,
                  o = t.y;
                this.j(l(l({}, t), {
                  draw: function() {
                    r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "circle"), r.B.setAttribute("cx", i + n / 2 + ""), r.B.setAttribute("cy", o + n / 2 + ""), r.B.setAttribute("r", n / 2 + "")
                  }
                }))
              }, t.prototype.q = function(t) {
                var r = this,
                  n = t.size,
                  i = t.x,
                  o = t.y;
                this.j(l(l({}, t), {
                  draw: function() {
                    r.B = r.l.document.createElementNS("http://www.w3.org/2000/svg", "rect"), r.B.setAttribute("x", i + ""), r.B.setAttribute("y", o + ""), r.B.setAttribute("width", n + ""), r.B.setAttribute("height", n + "")
                  }
                }))
              }, t.prototype.p = function(t) {
                var r = t.x,
                  n = t.y,
                  i = t.size,
                  o = t.rotation;
                this.R({
                  x: r,
                  y: n,
                  size: i,
                  rotation: o
                })
              }, t.prototype.S = function(t) {
                var r = t.x,
                  n = t.y,
                  i = t.size,
                  o = t.rotation;
                this.q({
                  x: r,
                  y: n,
                  size: i,
                  rotation: o
                })
              }, t
            }(),
            w = "circle";
          var g = function(t, r, n, i) {
              return new(n || (n = Promise))(function(o, e) {
                function a(t) {
                  try {
                    f(i.next(t))
                  } catch (t) {
                    e(t)
                  }
                }

                function u(t) {
                  try {
                    f(i.throw(t))
                  } catch (t) {
                    e(t)
                  }
                }

                function f(t) {
                  var r;
                  t.done ? o(t.value) : (r = t.value, r instanceof n ? r : new n(function(t) {
                    t(r)
                  })).then(a, u)
                }
                f((i = i.apply(t, r || [])).next())
              })
            },
            p = function(t, r) {
              var n, i, o, e = {
                  label: 0,
                  sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                  },
                  trys: [],
                  ops: []
                },
                a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
              return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
              }), a;

              function u(u) {
                return function(f) {
                  return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, u[0] && (e = 0)), e;) try {
                      if (n = 1, i && (o = 2 & u[0] ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                      switch (i = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                          o = u;
                          break;
                        case 4:
                          return e.label++, {
                            value: u[1],
                            done: !1
                          };
                        case 5:
                          e.label++, i = u[1], u = [0];
                          continue;
                        case 7:
                          u = e.ops.pop(), e.trys.pop();
                          continue;
                        default:
                          if (!((o = (o = e.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                            e = 0;
                            continue
                          }
                          if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                            e.label = u[1];
                            break
                          }
                          if (6 === u[0] && e.label < o[1]) {
                            e.label = o[1], o = u;
                            break
                          }
                          if (o && e.label < o[2]) {
                            e.label = o[2], e.ops.push(u);
                            break
                          }
                          o[2] && e.ops.pop(), e.trys.pop();
                          continue
                      }
                      u = r.call(t, e)
                    } catch (t) {
                      u = [6, t], i = 0
                    } finally {
                      n = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                      value: u[0] ? u[1] : void 0,
                      done: !0
                    }
                  }([u, f])
                }
              }
            },
            y = [
              [1, 1, 1, 1, 1, 1, 1],
              [1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 1],
              [1, 1, 1, 1, 1, 1, 1]
            ],
            M = [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 1, 1, 0, 0],
              [0, 0, 1, 1, 1, 0, 0],
              [0, 0, 1, 1, 1, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]
            ];
          const b = function() {
              function t(t, r) {
                var n;
                this.l = r, this.B = this.l.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.B.setAttribute("width", t.width + ""), this.B.setAttribute("height", t.height + ""), this.$ = this.l.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.B.appendChild(this.$), t.imageOptions.saveAsBlob && (null !== (n = t.nodeCanvas) && void 0 !== n && n.createCanvas ? this.N = t.nodeCanvas.createCanvas(t.width, t.height) : this.N = document.createElement("canvas"), this.N.width = t.width, this.N.height = t.height), this.C = t.image, this.U = t
              }
              return Object.defineProperty(t.prototype, "width", {
                get: function() {
                  return this.U.width
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(t.prototype, "height", {
                get: function() {
                  return this.U.height
                },
                enumerable: !1,
                configurable: !0
              }), t.prototype.getElement = function() {
                return this.B
              }, t.prototype.drawQR = function(t) {
                return g(this, void 0, void 0, function() {
                  var r, n, i, o, e, a, u, s, c, h, v = this;
                  return p(this, function(l) {
                    switch (l.label) {
                      case 0:
                        return r = t.getModuleCount(), n = Math.min(this.U.width, this.U.height) - 2 * this.U.margin, i = this.U.shape === w ? n / Math.sqrt(2) : n, o = Math.floor(i / r), e = {
                          hideXDots: 0,
                          hideYDots: 0,
                          width: 0,
                          height: 0
                        }, this.X = t, this.U.image ? [4, this.loadImage()] : [3, 2];
                      case 1:
                        if (l.sent(), !this.Y) return [2];
                        this.imageToBlob(), a = this.U, u = a.imageOptions, s = a.qrOptions, c = u.imageSize * f[s.errorCorrectionLevel], h = Math.floor(c * r * r), e = function(t) {
                          var r = t.originalHeight,
                            n = t.originalWidth,
                            i = t.maxHiddenDots,
                            o = t.maxHiddenAxisDots,
                            e = t.dotSize,
                            a = {
                              x: 0,
                              y: 0
                            },
                            u = {
                              x: 0,
                              y: 0
                            };
                          if (!(r > 0 && n > 0 && i > 0 && e > 0)) return {
                            height: 0,
                            width: 0,
                            hideYDots: 0,
                            hideXDots: 0
                          };
                          var f = r / n;
                          return a.x = Math.floor(Math.sqrt(i / f)), 0 >= a.x && (a.x = 1), o && o < a.x && (a.x = o), a.x % 2 == 0 && a.x--, u.x = a.x * e, a.y = 1 + 2 * Math.ceil((a.x * f - 1) / 2), u.y = Math.round(u.x * f), (a.y * a.x > i || o && o < a.y) && (o && o < a.y ? (a.y = o, a.y % 2 == 0 && a.x--) : a.y -= 2, u.y = a.y * e, a.x = 1 + 2 * Math.ceil((a.y / f - 1) / 2), u.x = Math.round(u.y / f)), {
                            height: u.y,
                            width: u.x,
                            hideYDots: a.y,
                            hideXDots: a.x
                          }
                        }({
                          originalWidth: this.Y.width,
                          originalHeight: this.Y.height,
                          maxHiddenDots: h,
                          maxHiddenAxisDots: r - 14,
                          dotSize: o
                        }), l.label = 2;
                      case 2:
                        return this.drawBackground(), this.drawDots(function(t, n) {
                          var i, o, a, u, f, s;
                          return !(v.U.imageOptions.hideBackgroundDots && t >= (r - e.hideXDots) / 2 && t < (r + e.hideXDots) / 2 && n >= (r - e.hideYDots) / 2 && n < (r + e.hideYDots) / 2 || null !== (i = y[t]) && void 0 !== i && i[n] || null !== (o = y[t - r + 7]) && void 0 !== o && o[n] || null !== (a = y[t]) && void 0 !== a && a[n - r + 7] || null !== (u = M[t]) && void 0 !== u && u[n] || null !== (f = M[t - r + 7]) && void 0 !== f && f[n] || null !== (s = M[t]) && void 0 !== s && s[n - r + 7])
                        }), this.drawCorners(), this.U.image ? [4, this.drawImage({
                          width: e.width,
                          height: e.height,
                          count: r,
                          dotSize: o
                        })] : [3, 4];
                      case 3:
                        l.sent(), l.label = 4;
                      case 4:
                        return [2]
                    }
                  })
                })
              }, t.prototype.drawBackground = function() {
                var t, r, n, i = this.B,
                  o = this.U;
                if (i) {
                  var e = null === (t = o.backgroundOptions) || void 0 === t ? void 0 : t.gradient,
                    a = null === (r = o.backgroundOptions) || void 0 === r ? void 0 : r.color;
                  if ((e || a) && this.F({
                      options: e,
                      color: a,
                      additionalRotation: 0,
                      x: 0,
                      y: 0,
                      height: o.height,
                      width: o.width,
                      name: "background-color"
                    }), null === (n = o.backgroundOptions) || void 0 === n ? void 0 : n.round) {
                    var u = Math.min(o.width, o.height),
                      f = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    this.Z = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this.Z.setAttribute("id", "clip-path-background-color"), this.$.appendChild(this.Z), f.setAttribute("x", (o.width - u) / 2 + ""), f.setAttribute("y", (o.height - u) / 2 + ""), f.setAttribute("width", u + ""), f.setAttribute("height", u + ""), f.setAttribute("rx", u / 2 * o.backgroundOptions.round + ""), this.Z.appendChild(f)
                  }
                }
              }, t.prototype.drawDots = function(t) {
                var r, n, i = this;
                if (!this.X) throw "QR code is not defined";
                var o = this.U,
                  e = this.X.getModuleCount();
                if (e > o.width || e > o.height) throw "The canvas is too small.";
                var a = Math.min(o.width, o.height) - 2 * o.margin,
                  u = o.shape === w ? a / Math.sqrt(2) : a,
                  f = Math.floor(u / e),
                  s = Math.floor((o.width - e * f) / 2),
                  h = Math.floor((o.height - e * f) / 2),
                  v = new c({
                    svg: this.B,
                    type: o.dotsOptions.type,
                    window: this.l
                  });
                this.K = this.l.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this.K.setAttribute("id", "clip-path-dot-color"), this.K.style.transformOrigin = "center", this.K.style.transform = "rotate(90deg) scale(1, -1)", this.$.appendChild(this.K), this.F({
                  options: null === (r = o.dotsOptions) || void 0 === r ? void 0 : r.gradient,
                  color: o.dotsOptions.color,
                  additionalRotation: 0,
                  x: 0,
                  y: 0,
                  height: o.height,
                  width: o.width,
                  name: "dot-color"
                });
                for (var l = function(r) {
                    for (var o = function(o) {
                        return t && !t(r, o) ? "continue" : null !== (n = d.X) && void 0 !== n && n.isDark(r, o) ? (v.draw(s + r * f, h + o * f, f, function(n, a) {
                          return !(0 > r + n || 0 > o + a || r + n >= e || o + a >= e) && !(t && !t(r + n, o + a)) && !!i.X && i.X.isDark(r + n, o + a)
                        }), void(v.B && d.K && d.K.appendChild(v.B))) : "continue"
                      }, a = 0; e > a; a++) o(a)
                  }, d = this, g = 0; e > g; g++) l(g);
                if (o.shape === w) {
                  var p = Math.floor((a / f - e) / 2),
                    y = e + 2 * p,
                    M = s - p * f,
                    b = h - p * f,
                    m = [],
                    x = Math.floor(y / 2);
                  for (g = 0; y > g; g++) {
                    m[g] = [];
                    for (var k = 0; y > k; k++) m[g][k] = (p - 1 > g || g > y - p || p - 1 > k || k > y - p) && x >= Math.sqrt((g - x) * (g - x) + (k - x) * (k - x)) && this.X.isDark(0 > k - 2 * p ? k : e > k ? k - p : k - 2 * p, 0 > g - 2 * p ? g : e > g ? g - p : g - 2 * p) ? 1 : 0
                  }
                  var z = function(t) {
                      for (var r = function(r) {
                          if (!m[t][r]) return "continue";
                          v.draw(M + t * f, b + r * f, f, function(n, i) {
                            var o;
                            return !(null === (o = m[t + n]) || void 0 === o || !o[r + i])
                          }), v.B && A.K && A.K.appendChild(v.B)
                        }, n = 0; y > n; n++) r(n)
                    },
                    A = this;
                  for (g = 0; y > g; g++) z(g)
                }
              }, t.prototype.drawCorners = function() {
                var t = this;
                if (!this.X) throw "QR code is not defined";
                var r = this.B,
                  n = this.U;
                if (!r) throw "Element code is not defined";
                var i = this.X.getModuleCount(),
                  o = Math.min(n.width, n.height) - 2 * n.margin,
                  e = n.shape === w ? o / Math.sqrt(2) : o,
                  a = Math.floor(e / i),
                  u = 7 * a,
                  f = 3 * a,
                  s = Math.floor((n.width - i * a) / 2),
                  h = Math.floor((n.height - i * a) / 2);
                [
                  [0, 0, 0],
                  [1, 0, Math.PI / 2],
                  [0, 1, -Math.PI / 2]
                ].forEach(function(r) {
                  var o, e, l, w, g, p, b, m, x, k, z, A, O = r[0],
                    S = r[1],
                    j = r[2],
                    B = s + O * a * (i - 7),
                    R = h + S * a * (i - 7),
                    q = t.K,
                    P = t.K;
                  if ((!(null === (o = n.cornersSquareOptions) || void 0 === o) && o.gradient || !(null === (e = n.cornersSquareOptions) || void 0 === e) && e.color) && ((q = t.l.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-".concat(O, "-").concat(S)), t.$.appendChild(q), t.W = t.J = P = q, t.F({
                      options: null === (l = n.cornersSquareOptions) || void 0 === l ? void 0 : l.gradient,
                      color: null === (w = n.cornersSquareOptions) || void 0 === w ? void 0 : w.color,
                      additionalRotation: j,
                      x: B,
                      y: R,
                      height: u,
                      width: u,
                      name: "corners-square-color-".concat(O, "-").concat(S)
                    })), null === (g = n.cornersSquareOptions) || void 0 === g ? void 0 : g.type) {
                    var D = new v({
                      svg: t.B,
                      type: n.cornersSquareOptions.type,
                      window: t.l
                    });
                    D.draw(B, R, u, j), D.B && q && q.appendChild(D.B)
                  } else
                    for (var L = new c({
                        svg: t.B,
                        type: n.dotsOptions.type,
                        window: t.l
                      }), I = function(t) {
                        for (var r = function(r) {
                            if (null === (p = y[t]) || void 0 === p || !p[r]) return "continue";
                            L.draw(B + t * a, R + r * a, a, function(n, i) {
                              var o;
                              return !(null === (o = y[t + n]) || void 0 === o || !o[r + i])
                            }), L.B && q && q.appendChild(L.B)
                          }, n = 0; n < y[t].length; n++) r(n)
                      }, T = 0; y.length > T; T++) I(T);
                  if ((!(null === (b = n.cornersDotOptions) || void 0 === b) && b.gradient || !(null === (m = n.cornersDotOptions) || void 0 === m) && m.color) && ((P = t.l.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-".concat(O, "-").concat(S)), t.$.appendChild(P), t.J = P, t.F({
                      options: null === (x = n.cornersDotOptions) || void 0 === x ? void 0 : x.gradient,
                      color: null === (k = n.cornersDotOptions) || void 0 === k ? void 0 : k.color,
                      additionalRotation: j,
                      x: B + 2 * a,
                      y: R + 2 * a,
                      height: f,
                      width: f,
                      name: "corners-dot-color-".concat(O, "-").concat(S)
                    })), null === (z = n.cornersDotOptions) || void 0 === z ? void 0 : z.type) {
                    var Q = new d({
                      svg: t.B,
                      type: n.cornersDotOptions.type,
                      window: t.l
                    });
                    Q.draw(B + 2 * a, R + 2 * a, f, j), Q.B && P && P.appendChild(Q.B)
                  } else {
                    L = new c({
                      svg: t.B,
                      type: n.dotsOptions.type,
                      window: t.l
                    });
                    var E = function(t) {
                      for (var r = function(r) {
                          if (null === (A = M[t]) || void 0 === A || !A[r]) return "continue";
                          L.draw(B + t * a, R + r * a, a, function(n, i) {
                            var o;
                            return !(null === (o = M[t + n]) || void 0 === o || !o[r + i])
                          }), L.B && P && P.appendChild(L.B)
                        }, n = 0; n < M[t].length; n++) r(n)
                    };
                    for (T = 0; M.length > T; T++) E(T)
                  }
                })
              }, t.prototype.imageToBlob = function() {
                var t;
                if (this.Y && (/(\.svg$)|(^data:image\/svg)/.test(null !== (t = this.U.image) && void 0 !== t ? t : "") && (this.Y.width = this.U.width, this.Y.height = this.U.height), this.U.imageOptions.saveAsBlob && this.N)) {
                  var r = this.N.getContext("2d");
                  r && (r.drawImage(this.Y, 0, 0, this.N.width, this.N.height), this.C = this.N.toDataURL("image/png"))
                }
              }, t.prototype.loadImage = function() {
                var t = this;
                return new Promise(function(r, n) {
                  var i, o = t.U;
                  if (!o.image) return n("Image is not defined");
                  if (null !== (i = o.nodeCanvas) && void 0 !== i && i.loadImage) o.nodeCanvas.loadImage(o.image).then(function(n) {
                    var i;
                    /(\.svg$)|(^data:image\/svg)/.test(null !== (i = o.image) && void 0 !== i ? i : "") && (n.width = t.U.width, n.height = t.U.height), t.Y = n, r()
                  }).catch(n);
                  else {
                    var e = new t.l.Image;
                    "string" == typeof o.imageOptions.crossOrigin && (e.crossOrigin = o.imageOptions.crossOrigin), t.Y = e, e.onload = function() {
                      r()
                    }, e.src = o.image
                  }
                })
              }, t.prototype.drawImage = function(t) {
                return g(this, arguments, void 0, function(t) {
                  var r, n, i, o, e, a, f, s, c, h = t.width,
                    v = t.height,
                    l = t.count,
                    d = t.dotSize;
                  return p(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return r = this.U, n = Math.floor((r.width - l * d) / 2), i = Math.floor((r.height - l * d) / 2), o = n + r.imageOptions.margin + (l * d - h) / 2, e = i + r.imageOptions.margin + (l * d - v) / 2, a = h - 2 * r.imageOptions.margin, f = v - 2 * r.imageOptions.margin, (s = this.l.document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("href", this.C || ""), s.setAttribute("x", o + ""), s.setAttribute("y", e + ""), s.setAttribute("width", "".concat(a, "px")), s.setAttribute("height", "".concat(f, "px")), [4, u(r.image || "")];
                      case 1:
                        return c = t.sent(), s.setAttribute("href", c || ""), this.B.appendChild(s), [2]
                    }
                  })
                })
              }, t.prototype.F = function(t) {
                var r = this,
                  n = t.options,
                  i = t.color,
                  o = t.additionalRotation,
                  e = t.x,
                  a = t.y,
                  u = t.height,
                  f = t.width,
                  s = t.name,
                  c = f > u ? f : u,
                  h = this.l.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                if (h.setAttribute("x", e + ""), h.setAttribute("y", a + ""), h.setAttribute("height", u + ""), h.setAttribute("width", f + ""), h.setAttribute("clip-path", "url('#clip-path-".concat(s, "')")), n) {
                  var v;
                  if ("radial" === n.type)(v = this.l.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", s), v.setAttribute("gradientUnits", "userSpaceOnUse"), v.setAttribute("fx", e + f / 2 + ""), v.setAttribute("fy", a + u / 2 + ""), v.setAttribute("cx", e + f / 2 + ""), v.setAttribute("cy", a + u / 2 + ""), v.setAttribute("r", c / 2 + "");
                  else {
                    var l = ((n.rotation || 0) + o) % (2 * Math.PI),
                      d = (l + 2 * Math.PI) % (2 * Math.PI),
                      w = e + f / 2,
                      g = a + u / 2,
                      p = e + f / 2,
                      y = a + u / 2;
                    d >= 0 && .25 * Math.PI >= d || d > 1.75 * Math.PI && 2 * Math.PI >= d ? (w -= f / 2, g -= u / 2 * Math.tan(l), p += f / 2, y += u / 2 * Math.tan(l)) : d > .25 * Math.PI && .75 * Math.PI >= d ? (g -= u / 2, w -= f / 2 / Math.tan(l), y += u / 2, p += f / 2 / Math.tan(l)) : d > .75 * Math.PI && 1.25 * Math.PI >= d ? (w += f / 2, g += u / 2 * Math.tan(l), p -= f / 2, y -= u / 2 * Math.tan(l)) : d > 1.25 * Math.PI && 1.75 * Math.PI >= d && (g += u / 2, w += f / 2 / Math.tan(l), y -= u / 2, p -= f / 2 / Math.tan(l)), (v = this.l.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", s), v.setAttribute("gradientUnits", "userSpaceOnUse"), v.setAttribute("x1", Math.round(w) + ""), v.setAttribute("y1", Math.round(g) + ""), v.setAttribute("x2", Math.round(p) + ""), v.setAttribute("y2", Math.round(y) + "")
                  }
                  n.colorStops.forEach(function(t) {
                    var n = t.offset,
                      i = t.color,
                      o = r.l.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                    o.setAttribute("offset", "".concat(100 * n, "%")), o.setAttribute("stop-color", i), v.appendChild(o)
                  }), h.setAttribute("fill", "url('#".concat(s, "')")), this.$.appendChild(v)
                } else i && h.setAttribute("fill", i);
                this.B.appendChild(h)
              }, t
            }(),
            m = "canvas";
          for (var x = {}, k = 0; 40 >= k; k++) x[k] = k;
          const z = {
            type: m,
            shape: "square",
            width: 300,
            height: 300,
            data: "",
            margin: 0,
            qrOptions: {
              typeNumber: x[0],
              mode: void 0,
              errorCorrectionLevel: "Q"
            },
            imageOptions: {
              saveAsBlob: !1,
              hideBackgroundDots: !0,
              imageSize: .4,
              crossOrigin: void 0,
              margin: 0
            },
            dotsOptions: {
              type: "square",
              color: "#000"
            },
            backgroundOptions: {
              round: 0,
              color: "#fff"
            }
          };
          var A = function() {
            return A = Object.assign || function(t) {
              for (var r, n = 1, i = arguments.length; i > n; n++)
                for (var o in r = arguments[n])({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t
            }, A.apply(this, arguments)
          };

          function O(t) {
            var r = A({}, t);
            if (!r.colorStops || !r.colorStops.length) throw "Field 'colorStops' is required in gradient";
            return r.rotation ? r.rotation = +r.rotation : r.rotation = 0, r.colorStops = r.colorStops.map(function(t) {
              return A(A({}, t), {
                offset: +t.offset
              })
            }), r
          }

          function S(t) {
            var r = A({}, t);
            return r.width = +r.width, r.height = +r.height, r.margin = +r.margin, r.imageOptions = A(A({}, r.imageOptions), {
              hideBackgroundDots: !!r.imageOptions.hideBackgroundDots,
              imageSize: +r.imageOptions.imageSize,
              margin: +r.imageOptions.margin
            }), r.margin > Math.min(r.width, r.height) && (r.margin = Math.min(r.width, r.height)), r.dotsOptions = A({}, r.dotsOptions), r.dotsOptions.gradient && (r.dotsOptions.gradient = O(r.dotsOptions.gradient)), r.cornersSquareOptions && (r.cornersSquareOptions = A({}, r.cornersSquareOptions), r.cornersSquareOptions.gradient && (r.cornersSquareOptions.gradient = O(r.cornersSquareOptions.gradient))), r.cornersDotOptions && (r.cornersDotOptions = A({}, r.cornersDotOptions), r.cornersDotOptions.gradient && (r.cornersDotOptions.gradient = O(r.cornersDotOptions.gradient))), r.backgroundOptions && (r.backgroundOptions = A({}, r.backgroundOptions), r.backgroundOptions.gradient && (r.backgroundOptions.gradient = O(r.backgroundOptions.gradient))), r
          }
          var j = n(873),
            B = n.n(j),
            R = function(t, r, n, i) {
              return new(n || (n = Promise))(function(o, e) {
                function a(t) {
                  try {
                    f(i.next(t))
                  } catch (t) {
                    e(t)
                  }
                }

                function u(t) {
                  try {
                    f(i.throw(t))
                  } catch (t) {
                    e(t)
                  }
                }

                function f(t) {
                  var r;
                  t.done ? o(t.value) : (r = t.value, r instanceof n ? r : new n(function(t) {
                    t(r)
                  })).then(a, u)
                }
                f((i = i.apply(t, r || [])).next())
              })
            },
            q = function(t, r) {
              var n, i, o, e = {
                  label: 0,
                  sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                  },
                  trys: [],
                  ops: []
                },
                a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
              return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
              }), a;

              function u(u) {
                return function(f) {
                  return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, u[0] && (e = 0)), e;) try {
                      if (n = 1, i && (o = 2 & u[0] ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                      switch (i = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                          o = u;
                          break;
                        case 4:
                          return e.label++, {
                            value: u[1],
                            done: !1
                          };
                        case 5:
                          e.label++, i = u[1], u = [0];
                          continue;
                        case 7:
                          u = e.ops.pop(), e.trys.pop();
                          continue;
                        default:
                          if (!((o = (o = e.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                            e = 0;
                            continue
                          }
                          if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                            e.label = u[1];
                            break
                          }
                          if (6 === u[0] && e.label < o[1]) {
                            e.label = o[1], o = u;
                            break
                          }
                          if (o && e.label < o[2]) {
                            e.label = o[2], e.ops.push(u);
                            break
                          }
                          o[2] && e.ops.pop(), e.trys.pop();
                          continue
                      }
                      u = r.call(t, e)
                    } catch (t) {
                      u = [6, t], i = 0
                    } finally {
                      n = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                      value: u[0] ? u[1] : void 0,
                      done: !0
                    }
                  }([u, f])
                }
              }
            };
          const P = function() {
            function t(t) {
              this.l = t?.jsdom ? new t.jsdom("", {
                resources: "usable"
              }).window : window, this.U = t ? S(e(z, t)) : z, this.update()
            }
            return t.V = function(t) {
              t && (t.innerHTML = "")
            }, t.prototype._ = function() {
              var t = this;
              if (this.X) {
                var r = new b(this.U, this.l);
                this.h = r.getElement(), this.tt = r.drawQR(this.X).then(function() {
                  var n;
                  t.h && (null === (n = t.rt) || void 0 === n || n.call(t, r.getElement(), t.U))
                })
              }
            }, t.prototype.nt = function() {
              var t, r, n = this;
              this.X && (null !== (t = this.U.nodeCanvas) && void 0 !== t && t.createCanvas ? this.N = this.U.nodeCanvas.createCanvas(this.U.width, this.U.height) : this.N = document.createElement("canvas"), this.N.width = this.U.width, this.N.height = this.U.height, this._(), this.it = null === (r = this.tt) || void 0 === r ? void 0 : r.then(function() {
                var t;
                if (n.h) {
                  var r = n.h,
                    i = (new n.l.XMLSerializer).serializeToString(r),
                    o = "data:image/svg+xml;base64," + btoa(i);
                  if (null !== (t = n.U.nodeCanvas) && void 0 !== t && t.loadImage) return n.U.nodeCanvas.loadImage(o).then(function(t) {
                    var r, i;
                    t.width = n.U.width, t.height = n.U.height, null === (i = null === (r = n.N) || void 0 === r ? void 0 : r.getContext("2d")) || void 0 === i || i.drawImage(t, 0, 0)
                  });
                  var e = new n.l.Image;
                  return new Promise(function(t) {
                    e.onload = function() {
                      var r, i;
                      null === (i = null === (r = n.N) || void 0 === r ? void 0 : r.getContext("2d")) || void 0 === i || i.drawImage(e, 0, 0), t()
                    }, e.src = o
                  })
                }
              }))
            }, t.prototype.ot = function() {
              return R(this, arguments, void 0, function(t) {
                return void 0 === t && (t = "png"), q(this, function(r) {
                  switch (r.label) {
                    case 0:
                      if (!this.X) throw "QR code is empty";
                      return "svg" !== t.toLowerCase() ? [3, 2] : (this.h && this.tt || this._(), [4, this.tt]);
                    case 1:
                      return r.sent(), [2, this.h];
                    case 2:
                      return this.N && this.it || this.nt(), [4, this.it];
                    case 3:
                      return r.sent(), [2, this.N]
                  }
                })
              })
            }, t.prototype.update = function(r) {
              t.V(this.et), this.U = r ? S(e(this.U, r)) : this.U, this.U.data && (this.X = B()(this.U.qrOptions.typeNumber, this.U.qrOptions.errorCorrectionLevel), this.X.addData(this.U.data, this.U.qrOptions.mode || function(t) {
                switch (!0) {
                  case /^[0-9]*$/.test(t):
                    return "Numeric";
                  case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                    return "Alphanumeric";
                  default:
                    return "Byte"
                }
              }(this.U.data)), this.X.make(), this.U.type === m ? this.nt() : this._(), this.append(this.et))
            }, t.prototype.append = function(t) {
              if (t) {
                if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                this.U.type === m ? this.N && t.appendChild(this.N) : this.h && t.appendChild(this.h), this.et = t
              }
            }, t.prototype.applyExtension = function(t) {
              if (!t) throw "Extension function should be defined.";
              this.rt = t, this.update()
            }, t.prototype.deleteExtension = function() {
              this.rt = void 0, this.update()
            }, t.prototype.getRawData = function() {
              return R(this, arguments, void 0, function(t) {
                var r, n, i, e;
                return void 0 === t && (t = "png"), q(this, function(a) {
                  switch (a.label) {
                    case 0:
                      if (!this.X) throw "QR code is empty";
                      return [4, this.ot(t)];
                    case 1:
                      return (r = a.sent()) ? "svg" === t.toLowerCase() ? (n = new this.l.XMLSerializer, i = n.serializeToString(r), e = '<?xml version="1.0" standalone="no"?>\r\n'.concat(i), typeof Blob > "u" || this.U.jsdom ? [2, o.from(e)] : [2, new Blob([e], {
                        type: "image/svg+xml"
                      })]) : [2, new Promise(function(n) {
                        var i = r;
                        i.toBuffer ? n(i.toBuffer("image/".concat(t))) : i.toBlob(n, "image/".concat(t), 1)
                      })] : [2, null]
                  }
                })
              })
            }, t.prototype.download = function(t) {
              return R(this, void 0, void 0, function() {
                var r, n, i, o, e;
                return q(this, function(u) {
                  switch (u.label) {
                    case 0:
                      if (!this.X) throw "QR code is empty";
                      if (typeof Blob > "u") throw "Cannot download in Node.js, call getRawData instead.";
                      return r = "png", n = "qr", "string" == typeof t ? (r = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t && null !== t && (t.name && (n = t.name), t.extension && (r = t.extension)), [4, this.ot(r)];
                    case 1:
                      return (i = u.sent()) ? ("svg" === r.toLowerCase() ? (o = new XMLSerializer, e = '<?xml version="1.0" standalone="no"?>\r\n' + (e = o.serializeToString(i)), a("data:image/svg+xml;charset=utf-8," + encodeURIComponent(e), "".concat(n, ".svg"))) : a(i.toDataURL("image/".concat(r)), "".concat(n, ".").concat(r)), [2]) : [2]
                  }
                })
              })
            }, t
          }()
        })(), i.default
      })(), t.exports = i()
    }
  }
]);
