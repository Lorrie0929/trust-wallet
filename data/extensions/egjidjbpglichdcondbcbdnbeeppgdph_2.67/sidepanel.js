try {
  let t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t.i = t.i || {}, t.i[e] = "bb5021da-3fb9-423f-94c8-f354f7dc63f8", t.h = "sentry-dbid-bb5021da-3fb9-423f-94c8-f354f7dc63f8")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (() => {
  var t, e, n = {
      14545: (t, e) => {
        e.isatty = function() {
          return !1
        }, e.ReadStream = function() {
          throw Error("tty.ReadStream is not implemented")
        }, e.WriteStream = function() {
          throw Error("tty.WriteStream is not implemented")
        }
      },
      45305: (t, e, n) => {
        "use strict";
        var r;
        n.d(e, {
          D9: () => S,
          GC: () => _,
          Q_: () => k,
          wL: () => I,
          wm: () => F,
          wv: () => A,
          z1: () => O
        });
        var o = n(14545),
          i = n(65606);
        const {
          env: l = {},
          argv: a = [],
          platform: c = ""
        } = typeof i > "u" ? {} : i, u = "NO_COLOR" in l || a.includes("--no-color"), f = "FORCE_COLOR" in l || a.includes("--color"), s = "win32" === c, g = "dumb" === l.TERM, d = (r || (r = n.t(o, 2))) && o.isatty && o.isatty(1) && l.TERM && !g, h = !u && (f || s && !g || d || "CI" in l && ("GITHUB_ACTIONS" in l || "GITLAB_CI" in l || "CIRCLECI" in l)), b = (t, e, n, r, o = e.substring(0, t) + r, i = e.substring(t + n.length), l = i.indexOf(n)) => o + (0 > l ? i : b(l, i, n, r)), y = (t, e, n) => ((t, e, n = t, r = t.length + 1) => o => o || "" !== o && void 0 !== o ? ((t, e, n, r, o) => 0 > t ? n + e + r : n + b(t, e, r, o) + r)(("" + o).indexOf(e, r), o, t, e, n) : "")(`[${t}m`, `[${e}m`, n), p = {
          reset: y(0, 0),
          bold: y(1, 22, "[22m[1m"),
          dim: y(2, 22, "[22m[2m"),
          italic: y(3, 23),
          underline: y(4, 24),
          inverse: y(7, 27),
          hidden: y(8, 28),
          strikethrough: y(9, 29),
          black: y(30, 39),
          red: y(31, 39),
          green: y(32, 39),
          yellow: y(33, 39),
          blue: y(34, 39),
          magenta: y(35, 39),
          cyan: y(36, 39),
          white: y(37, 39),
          gray: y(90, 39),
          bgBlack: y(40, 49),
          bgRed: y(41, 49),
          bgGreen: y(42, 49),
          bgYellow: y(43, 49),
          bgBlue: y(44, 49),
          bgMagenta: y(45, 49),
          bgCyan: y(46, 49),
          bgWhite: y(47, 49),
          blackBright: y(90, 39),
          redBright: y(91, 39),
          greenBright: y(92, 39),
          yellowBright: y(93, 39),
          blueBright: y(94, 39),
          magentaBright: y(95, 39),
          cyanBright: y(96, 39),
          whiteBright: y(97, 39),
          bgBlackBright: y(100, 49),
          bgRedBright: y(101, 49),
          bgGreenBright: y(102, 49),
          bgYellowBright: y(103, 49),
          bgBlueBright: y(104, 49),
          bgMagentaBright: y(105, 49),
          bgCyanBright: y(106, 49),
          bgWhiteBright: y(107, 49)
        }, {
          reset: w,
          bold: v,
          dim: m,
          italic: T,
          underline: C,
          inverse: R,
          hidden: E,
          strikethrough: B,
          black: N,
          red: A,
          green: I,
          yellow: S,
          blue: O,
          magenta: _,
          cyan: k,
          white: L,
          gray: F,
          bgBlack: G,
          bgRed: j,
          bgGreen: W,
          bgYellow: M,
          bgBlue: P,
          bgMagenta: D,
          bgCyan: U,
          bgWhite: x,
          blackBright: $,
          redBright: Y,
          greenBright: V,
          yellowBright: H,
          blueBright: K,
          magentaBright: Q,
          cyanBright: X,
          whiteBright: z,
          bgBlackBright: J,
          bgRedBright: q,
          bgGreenBright: Z,
          bgYellowBright: tt,
          bgBlueBright: et,
          bgMagentaBright: nt,
          bgCyanBright: rt,
          bgWhiteBright: ot
        } = (({
          useColor: t = h
        } = {}) => t ? p : Object.keys(p).reduce((t, e) => ({
          ...t,
          [e]: String
        }), {}))()
      },
      65606: t => {
        var e, n, r = t.exports = {};

        function o() {
          throw Error("setTimeout has not been defined")
        }

        function i() {
          throw Error("clearTimeout has not been defined")
        }

        function l(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
          try {
            return e(t, 0)
          } catch {
            try {
              return e.call(null, t, 0)
            } catch {
              return e.call(this, t, 0)
            }
          }
        }! function() {
          try {
            e = "function" == typeof setTimeout ? setTimeout : o
          } catch {
            e = o
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : i
          } catch {
            n = i
          }
        }();
        var a, c = [],
          u = !1,
          f = -1;

        function s() {
          !u || !a || (u = !1, a.length ? c = a.concat(c) : f = -1, c.length && g())
        }

        function g() {
          if (!u) {
            var t = l(s);
            u = !0;
            for (var e = c.length; e;) {
              for (a = c, c = []; ++f < e;) a && a[f].run();
              f = -1, e = c.length
            }
            a = null, u = !1,
              function(t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                try {
                  return n(t)
                } catch {
                  try {
                    return n.call(null, t)
                  } catch {
                    return n.call(this, t)
                  }
                }
              }(t)
          }
        }

        function d(t, e) {
          this.fun = t, this.array = e
        }

        function h() {}
        r.nextTick = function(t) {
          var e = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; arguments.length > n; n++) e[n - 1] = arguments[n];
          c.push(new d(t, e)), 1 === c.length && !u && l(g)
        }, d.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(t) {
          return []
        }, r.binding = function(t) {
          throw Error("process.binding is not supported")
        }, r.cwd = function() {
          return "/"
        }, r.chdir = function(t) {
          throw Error("process.chdir is not supported")
        }, r.umask = function() {
          return 0
        }
      },
      73065: function(t, e, n) {
        var r, o;
        ! function() {
          "use strict";
          r = function() {
            var t = function() {},
              e = "undefined",
              n = typeof window !== e && typeof window.navigator !== e && /Trident\/|MSIE /.test(window.navigator.userAgent),
              r = ["trace", "debug", "info", "warn", "error"],
              o = {},
              i = null;

            function l(t, e) {
              var n = t[e];
              if ("function" == typeof n.bind) return n.bind(t);
              try {
                return function() {}.bind.call(n, t)
              } catch {
                return function() {
                  return function() {}.apply.call(n, t, arguments)
                }
              }
            }

            function a() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : function() {}.apply.call(console.log, console, arguments)), console.trace && console.trace()
            }

            function c() {
              for (var n = this.getLevel(), o = 0; r.length > o; o++) {
                var i = r[o];
                this[i] = n > o ? t : this.methodFactory(i, n, this.name)
              }
              if (this.log = this.debug, typeof console === e && n < this.levels.SILENT) return "No console available for logging"
            }

            function u(t) {
              return function() {
                typeof console !== e && (c.call(this), this[t].apply(this, arguments))
              }
            }

            function f(r, o, i) {
              return function(r) {
                return "debug" === r && (r = "log"), typeof console !== e && ("trace" === r && n ? a : void 0 !== console[r] ? l(console, r) : void 0 !== console.log ? l(console, "log") : t)
              }(r) || u.apply(this, arguments)
            }

            function s(t, n) {
              var l, a, u, s = this,
                g = "loglevel";

              function d() {
                var t;
                if (typeof window !== e && g) {
                  try {
                    t = window.localStorage[g]
                  } catch {}
                  if (typeof t === e) try {
                    var n = window.document.cookie,
                      r = encodeURIComponent(g),
                      o = n.indexOf(r + "="); - 1 !== o && (t = /^([^;]+)/.exec(n.slice(o + r.length + 1))[1])
                  } catch {}
                  return void 0 === s.levels[t] && (t = void 0), t
                }
              }

              function h(t) {
                var e = t;
                if ("string" == typeof e && void 0 !== s.levels[e.toUpperCase()] && (e = s.levels[e.toUpperCase()]), "number" == typeof e && e >= 0 && e <= s.levels.SILENT) return e;
                throw new TypeError("log.setLevel() called with invalid level: " + t)
              }
              "string" == typeof t ? g += ":" + t : "symbol" == typeof t && (g = void 0), s.name = t, s.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }, s.methodFactory = n || f, s.getLevel = function() {
                return u ?? a ?? l
              }, s.setLevel = function(t, n) {
                return u = h(t), !1 !== n && function(t) {
                  var n = (r[t] || "silent").toUpperCase();
                  if (typeof window !== e && g) {
                    try {
                      return void(window.localStorage[g] = n)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(g) + "=" + n + ";"
                    } catch {}
                  }
                }(u), c.call(s)
              }, s.setDefaultLevel = function(t) {
                a = h(t), d() || s.setLevel(t, !1)
              }, s.resetLevel = function() {
                u = null,
                  function() {
                    if (typeof window !== e && g) {
                      try {
                        window.localStorage.removeItem(g)
                      } catch {}
                      try {
                        window.document.cookie = encodeURIComponent(g) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                      } catch {}
                    }
                  }(), c.call(s)
              }, s.enableAll = function(t) {
                s.setLevel(s.levels.TRACE, t)
              }, s.disableAll = function(t) {
                s.setLevel(s.levels.SILENT, t)
              }, s.rebuild = function() {
                if (i !== s && (l = h(i.getLevel())), c.call(s), i === s)
                  for (var t in o) o[t].rebuild()
              }, l = h(i ? i.getLevel() : "WARN");
              var b = d();
              null != b && (u = h(b)), c.call(s)
            }(i = new s).getLogger = function(t) {
              if ("symbol" != typeof t && "string" != typeof t || "" === t) throw new TypeError("You must supply a name when creating a logger.");
              var e = o[t];
              return e || (e = o[t] = new s(t, i.methodFactory)), e
            };
            var g = typeof window !== e ? window.log : void 0;
            return i.noConflict = function() {
              return typeof window !== e && window.log === i && (window.log = g), i
            }, i.getLoggers = function() {
              return o
            }, i.default = i, i
          }, void 0 !== (o = r()) && (t.exports = o)
        }()
      },
      90251: function(t, e, n) {
        var r, o;
        r = function(t) {
          "use strict";
          var e, n, r = {
              template: "[%t] %l:",
              levelFormatter: function(t) {
                return t.toUpperCase()
              },
              nameFormatter: function(t) {
                return t || "root"
              },
              timestampFormatter: function(t) {
                return t.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
              },
              format: void 0
            },
            o = {},
            i = {
              reg: function(t) {
                if (!t || !t.getLogger) throw new TypeError("Argument is not a root logger");
                e = t
              },
              apply: function(t, n) {
                if (!t || !t.setLevel) throw new TypeError("Argument is not a logger");
                var i = t.methodFactory,
                  l = t.name || "",
                  a = o[l] || o[""] || r;
                return o[l] || (t.methodFactory = function(t, e, n) {
                  var r = i(t, e, n),
                    a = o[n] || o[""],
                    c = -1 !== a.template.indexOf("%t"),
                    u = -1 !== a.template.indexOf("%l"),
                    f = -1 !== a.template.indexOf("%n");
                  return function() {
                    for (var e = "", i = arguments.length, s = Array(i), g = 0; i > g; g++) s[g] = arguments[g];
                    if (l || !o[n]) {
                      var d = a.timestampFormatter(new Date),
                        h = a.levelFormatter(t),
                        b = a.nameFormatter(n);
                      a.format ? e += a.format(h, b, d) : (e += a.template, c && (e = e.replace(/%t/, d)), u && (e = e.replace(/%l/, h)), f && (e = e.replace(/%n/, b))), s.length && "string" == typeof s[0] ? s[0] = e + " " + s[0] : s.unshift(e)
                    }
                    r.apply(void 0, s)
                  }
                }), (n = n || {}).template && (n.format = void 0), o[l] = function(t) {
                  for (var e, n = 1, r = arguments.length; r > n; n++)
                    for (e in arguments[n])({}).hasOwnProperty.call(arguments[n], e) && (t[e] = arguments[n][e]);
                  return t
                }({}, a, n), t.setLevel(t.getLevel()), e || t.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), t
              }
            };
          return t && (n = t.prefix, i.noConflict = function() {
            return t.prefix === i && (t.prefix = n), i
          }), i
        }, void 0 !== (o = r(n)) && (t.exports = o)
      },
      93155: (t, e, n) => {
        "use strict";
        n.d(e, {
          A: () => g
        });
        var r = n(73065),
          o = n.n(r),
          i = n(90251),
          l = n.n(i),
          a = n(45305);
        o().setLevel("silent");
        var c, u = ((c = u || {}).TRACE = "TRACE", c.DEBUG = "DEBUG", c.INFO = "INFO", c.WARN = "WARN", c.ERROR = "ERROR", c);
        const f = {
          TRACE: a.GC,
          DEBUG: a.Q_,
          INFO: a.z1,
          WARN: a.D9,
          ERROR: a.wv
        };
        l().reg(o()), l().apply(o(), {
          format: (t, e, n) => `${(0,a.wm)(`[${n}]`)} ${f[t](t)}${"root"===e?"":(0,a.wL)(` [${e}:]`)}`
        });
        const s = o().error.bind(o());
        o().error = (...t) => s(...t);
        const g = o()
      },
      98939: (t, e, n) => {
        "use strict";
        n.d(e, {
          Dv: () => r,
          K4: () => i,
          O0: () => c,
          TF: () => a,
          cc: () => l,
          dQ: () => d,
          hF: () => f,
          k$: () => h,
          my: () => s,
          rK: () => g,
          xo: () => o
        });
        const r = 30,
          o = "popup_channel",
          i = "sidepanel_channel",
          l = {
            unlockWalletCore: "INTERNAL_UnlockWalletCore",
            notificationConfirmPrefix: "INTERNAL_notificationConfirm_",
            notificationCancelPrefix: "INTERNAL_notificationCancel_",
            keyringControllerGetAccounts: "INTERNAL_keyringControllerGetAccounts",
            keyringControllerGetSeedPhrase: "INTERNAL_keyringControllerGetSeedPhrase",
            keyringControllerSetConnectedSites: "INTERNAL_keyringControllerSetConnectedSites",
            keyringControllerSetFirstTime: "INTERNAL_keyringControllerSetFirstTime",
            appControllerCreateVault: "INTERNAL_appControllerCreateVault",
            appControllerRestoreVault: "INTERNAL_appControllerRestoreVault",
            appControllerReset: "INTERNAL_appControllerReset",
            appControllerSetIsAnalyticsEnabled: "INTERNAL_appControllerSetIsAnalyticsEnabled",
            notificationControllerRemoveNotification: "INTERNAL_notificationControllerRemoveNotification",
            settingsControllerSetIsAnalyticsEnabled: "INTERNAL_settingsControllerSetIsAnalyticsEnabled",
            settingsControllerSetIsDefaultWallet: "INTERNAL_settingsControllerSetIsDefaultWallet",
            apiControllerFetch: "INTERNAL_apiControllerFetch"
          },
          a = "REDUX_OBSERVER_CALLBACK_ACTION",
          c = "1920x1080";
        var u, f = ((u = f || {})[u.Bitcoin = 0] = "Bitcoin", u[u.Ethereum = 60] = "Ethereum", u[u.Tron = 195] = "Tron", u[u.Solana = 501] = "Solana", u[u.Arbitrum = 42161] = "Arbitrum", u[u.Base = 8453] = "Base", u[u.SmartChain = 20000714] = "SmartChain", u),
          s = (t => (t[t.CRYPTO = 0] = "CRYPTO", t[t.NFT = 1] = "NFT", t[t.APPROVALS = 2] = "APPROVALS", t))(s || {}),
          g = (t => (t[t.RWA = 0] = "RWA", t[t.AI = 1] = "AI", t[t.MEMES = 2] = "MEMES", t))(g || {}),
          d = (t => (t[t.TOP = 0] = "TOP", t[t.BNB = 1] = "BNB", t[t.ETH = 2] = "ETH", t[t.SOL = 3] = "SOL", t))(d || {}),
          h = (t => (t[t.HOLDINGS = 0] = "HOLDINGS", t[t.HISTORY = 1] = "HISTORY", t[t.ABOUT = 2] = "ABOUT", t))(h || {})
      }
    },
    r = {};

  function o(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var i = r[t] = {
      id: t,
      loaded: !1,
      exports: {}
    };
    return n[t].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
  }
  o.m = n, o.amdO = {}, o.n = t => {
    var e = t && t.v ? () => t.default : () => t;
    return o.d(e, {
      a: e
    }), e
  }, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, o.t = function(n, r) {
    if (1 & r && (n = this(n)), 8 & r || "object" == typeof n && n && (4 & r && n.v || 16 & r && "function" == typeof n.then)) return n;
    var i = Object.create(null);
    o.r(i);
    var l = {};
    t = t || [null, e({}), e([]), e(e)];
    for (var a = 2 & r && n;
      "object" == typeof a && !~t.indexOf(a); a = e(a)) Object.getOwnPropertyNames(a).forEach(t => l[t] = () => n[t]);
    return l.default = () => n, o.d(i, l), i
  }, o.d = (t, e) => {
    for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    })
  }, o.f = {}, o.e = t => Promise.all(Object.keys(o.f).reduce((e, n) => (o.f[n](t, e), e), [])), o.u = t => t + ".js", o.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || Function("return this")()
    } catch {
      if ("object" == typeof window) return window
    }
  }(), o.o = (t, e) => ({}.hasOwnProperty.call(t, e)), (() => {
    var t = {},
      e = "browser-extension-wallet:";
    o.l = (n, r, i, l) => {
      if (t[n]) t[n].push(r);
      else {
        var a, c;
        if (void 0 !== i)
          for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
            var s = u[f];
            if (s.getAttribute("src") == n || s.getAttribute("data-webpack") == e + i) {
              a = s;
              break
            }
          }
        a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.setAttribute("data-webpack", e + i), a.src = n), t[n] = [r];
        var g = (e, r) => {
            a.onerror = a.onload = null, clearTimeout(d);
            var o = t[n];
            if (delete t[n], a.parentNode && a.parentNode.removeChild(a), o && o.forEach(t => t(r)), e) return e(r)
          },
          d = setTimeout(g.bind(null, void 0, {
            type: "timeout",
            target: a
          }), 12e4);
        a.onerror = g.bind(null, a.onerror), a.onload = g.bind(null, a.onload), c && document.head.appendChild(a)
      }
    }
  })(), o.r = t => {
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "v", {
      value: !0
    })
  }, o.nmd = t => (t.paths = [], t.children || (t.children = []), t), o.j = 5796, o.p = "", (() => {
    o.b = document.baseURI || self.location.href;
    var t = {
      5796: 0,
      8939: 0
    };
    o.f.j = (e, n) => {
      var r = o.o(t, e) ? t[e] : void 0;
      if (0 !== r)
        if (r) n.push(r[2]);
        else {
          var i = new Promise((n, o) => r = t[e] = [n, o]);
          n.push(r[2] = i);
          var l = o.p + o.u(e),
            a = Error();
          o.l(l, n => {
            if (o.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
              var i = n && ("load" === n.type ? "missing" : n.type),
                l = n && n.target && n.target.src;
              a.message = "Loading chunk " + e + " failed.\n(" + i + ": " + l + ")", a.name = "ChunkLoadError", a.type = i, a.request = l, r[1](a)
            }
          }, "chunk-" + e, e)
        }
    };
    var e = (e, n) => {
        var r, i, [l, a, c] = n,
          u = 0;
        if (l.some(e => 0 !== t[e])) {
          for (r in a) o.o(a, r) && (o.m[r] = a[r]);
          c && c(o)
        }
        for (e && e(n); u < l.length; u++) i = l[u], o.o(t, i) && t[i] && t[i][0](), t[i] = 0
      },
      n = self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || [];
    n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
  })(), o.nc = void 0, (() => {
    "use strict";
    var t = o(98939),
      e = o(93155);
    const n = {
      portName: t.K4,
      MAX_MISS_RECONNECT: 10
    };
    chrome.runtime.onMessage.addListener(t => {
      "closeSidePanel" === t.action && window.close()
    }), Promise.all([o.e(9633), o.e(15), o.e(6540)]).then(o.bind(o, 20015)).then(t => t.default(n)).catch(e.A.error)
  })()
})();
