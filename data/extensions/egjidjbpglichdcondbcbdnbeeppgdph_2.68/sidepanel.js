(() => {
  var e, t, r, n, o = {
      14545: (e, t) => {
        t.isatty = function() {
          return !1
        }, t.ReadStream = function() {
          throw Error("tty.ReadStream is not implemented")
        }, t.WriteStream = function() {
          throw Error("tty.WriteStream is not implemented")
        }
      },
      45305: (e, t, r) => {
        "use strict";
        var n;
        r.d(t, {
          D9: () => I,
          GC: () => k,
          Q_: () => O,
          wL: () => _,
          wm: () => W,
          wv: () => N,
          z1: () => S
        });
        var o = r(14545),
          i = r(65606);
        const {
          env: l = {},
          argv: a = [],
          platform: c = ""
        } = typeof i > "u" ? {} : i, u = "NO_COLOR" in l || a.includes("--no-color"), f = "FORCE_COLOR" in l || a.includes("--color"), s = "win32" === c, g = "dumb" === l.TERM, h = (n || (n = r.t(o, 2))) && o.isatty && o.isatty(1) && l.TERM && !g, d = !u && (f || s && !g || h || "CI" in l && ("GITHUB_ACTIONS" in l || "GITLAB_CI" in l || "CIRCLECI" in l)), b = (e, t, r, n, o = t.substring(0, e) + n, i = t.substring(e + r.length), l = i.indexOf(r)) => o + (0 > l ? i : b(l, i, r, n)), p = (e, t, r) => ((e, t, r = e, n = e.length + 1) => o => o || "" !== o && void 0 !== o ? ((e, t, r, n, o) => 0 > e ? r + t + n : r + b(e, t, n, o) + n)(("" + o).indexOf(t, n), o, e, t, r) : "")(`[${e}m`, `[${t}m`, r), y = {
          reset: p(0, 0),
          bold: p(1, 22, "[22m[1m"),
          dim: p(2, 22, "[22m[2m"),
          italic: p(3, 23),
          underline: p(4, 24),
          inverse: p(7, 27),
          hidden: p(8, 28),
          strikethrough: p(9, 29),
          black: p(30, 39),
          red: p(31, 39),
          green: p(32, 39),
          yellow: p(33, 39),
          blue: p(34, 39),
          magenta: p(35, 39),
          cyan: p(36, 39),
          white: p(37, 39),
          gray: p(90, 39),
          bgBlack: p(40, 49),
          bgRed: p(41, 49),
          bgGreen: p(42, 49),
          bgYellow: p(43, 49),
          bgBlue: p(44, 49),
          bgMagenta: p(45, 49),
          bgCyan: p(46, 49),
          bgWhite: p(47, 49),
          blackBright: p(90, 39),
          redBright: p(91, 39),
          greenBright: p(92, 39),
          yellowBright: p(93, 39),
          blueBright: p(94, 39),
          magentaBright: p(95, 39),
          cyanBright: p(96, 39),
          whiteBright: p(97, 39),
          bgBlackBright: p(100, 49),
          bgRedBright: p(101, 49),
          bgGreenBright: p(102, 49),
          bgYellowBright: p(103, 49),
          bgBlueBright: p(104, 49),
          bgMagentaBright: p(105, 49),
          bgCyanBright: p(106, 49),
          bgWhiteBright: p(107, 49)
        }, {
          reset: m,
          bold: v,
          dim: w,
          italic: C,
          underline: T,
          inverse: R,
          hidden: E,
          strikethrough: B,
          black: A,
          red: N,
          green: _,
          yellow: I,
          blue: S,
          magenta: k,
          cyan: O,
          white: L,
          gray: W,
          bgBlack: j,
          bgRed: F,
          bgGreen: G,
          bgYellow: M,
          bgBlue: P,
          bgMagenta: x,
          bgCyan: D,
          bgWhite: U,
          blackBright: $,
          redBright: Y,
          greenBright: V,
          yellowBright: H,
          blueBright: K,
          magentaBright: q,
          cyanBright: Q,
          whiteBright: X,
          bgBlackBright: z,
          bgRedBright: J,
          bgGreenBright: Z,
          bgYellowBright: ee,
          bgBlueBright: te,
          bgMagentaBright: re,
          bgCyanBright: ne,
          bgWhiteBright: oe
        } = (({
          useColor: e = d
        } = {}) => e ? y : Object.keys(y).reduce((e, t) => ({
          ...e,
          [t]: String
        }), {}))()
      },
      65606: e => {
        var t, r, n = e.exports = {};

        function o() {
          throw Error("setTimeout has not been defined")
        }

        function i() {
          throw Error("clearTimeout has not been defined")
        }

        function l(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
          try {
            return t(e, 0)
          } catch {
            try {
              return t.call(null, e, 0)
            } catch {
              return t.call(this, e, 0)
            }
          }
        }! function() {
          try {
            t = "function" == typeof setTimeout ? setTimeout : o
          } catch {
            t = o
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : i
          } catch {
            r = i
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
            var e = l(s);
            u = !0;
            for (var t = c.length; t;) {
              for (a = c, c = []; ++f < t;) a && a[f].run();
              f = -1, t = c.length
            }
            a = null, u = !1,
              function(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                  return r(e)
                } catch {
                  try {
                    return r.call(null, e)
                  } catch {
                    return r.call(this, e)
                  }
                }
              }(e)
          }
        }

        function h(e, t) {
          this.fun = e, this.array = t
        }

        function d() {}
        n.nextTick = function(e) {
          var t = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; arguments.length > r; r++) t[r - 1] = arguments[r];
          c.push(new h(e, t)), 1 === c.length && !u && l(g)
        }, h.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(e) {
          return []
        }, n.binding = function(e) {
          throw Error("process.binding is not supported")
        }, n.cwd = function() {
          return "/"
        }, n.chdir = function(e) {
          throw Error("process.chdir is not supported")
        }, n.umask = function() {
          return 0
        }
      },
      73065: function(e, t, r) {
        var n, o;
        ! function() {
          "use strict";
          n = function() {
            var e = function() {},
              t = "undefined",
              r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
              n = ["trace", "debug", "info", "warn", "error"],
              o = {},
              i = null;

            function l(e, t) {
              var r = e[t];
              if ("function" == typeof r.bind) return r.bind(e);
              try {
                return function() {}.bind.call(r, e)
              } catch {
                return function() {
                  return function() {}.apply.call(r, e, arguments)
                }
              }
            }

            function a() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : function() {}.apply.call(console.log, console, arguments)), console.trace && console.trace()
            }

            function c() {
              for (var r = this.getLevel(), o = 0; n.length > o; o++) {
                var i = n[o];
                this[i] = r > o ? e : this.methodFactory(i, r, this.name)
              }
              if (this.log = this.debug, typeof console === t && r < this.levels.SILENT) return "No console available for logging"
            }

            function u(e) {
              return function() {
                typeof console !== t && (c.call(this), this[e].apply(this, arguments))
              }
            }

            function f(n, o, i) {
              return function(n) {
                return "debug" === n && (n = "log"), typeof console !== t && ("trace" === n && r ? a : void 0 !== console[n] ? l(console, n) : void 0 !== console.log ? l(console, "log") : e)
              }(n) || u.apply(this, arguments)
            }

            function s(e, r) {
              var l, a, u, s = this,
                g = "loglevel";

              function h() {
                var e;
                if (typeof window !== t && g) {
                  try {
                    e = window.localStorage[g]
                  } catch {}
                  if (typeof e === t) try {
                    var r = window.document.cookie,
                      n = encodeURIComponent(g),
                      o = r.indexOf(n + "="); - 1 !== o && (e = /^([^;]+)/.exec(r.slice(o + n.length + 1))[1])
                  } catch {}
                  return void 0 === s.levels[e] && (e = void 0), e
                }
              }

              function d(e) {
                var t = e;
                if ("string" == typeof t && void 0 !== s.levels[t.toUpperCase()] && (t = s.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= s.levels.SILENT) return t;
                throw new TypeError("log.setLevel() called with invalid level: " + e)
              }
              "string" == typeof e ? g += ":" + e : "symbol" == typeof e && (g = void 0), s.name = e, s.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }, s.methodFactory = r || f, s.getLevel = function() {
                return u ?? a ?? l
              }, s.setLevel = function(e, r) {
                return u = d(e), !1 !== r && function(e) {
                  var r = (n[e] || "silent").toUpperCase();
                  if (typeof window !== t && g) {
                    try {
                      return void(window.localStorage[g] = r)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(g) + "=" + r + ";"
                    } catch {}
                  }
                }(u), c.call(s)
              }, s.setDefaultLevel = function(e) {
                a = d(e), h() || s.setLevel(e, !1)
              }, s.resetLevel = function() {
                u = null,
                  function() {
                    if (typeof window !== t && g) {
                      try {
                        window.localStorage.removeItem(g)
                      } catch {}
                      try {
                        window.document.cookie = encodeURIComponent(g) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                      } catch {}
                    }
                  }(), c.call(s)
              }, s.enableAll = function(e) {
                s.setLevel(s.levels.TRACE, e)
              }, s.disableAll = function(e) {
                s.setLevel(s.levels.SILENT, e)
              }, s.rebuild = function() {
                if (i !== s && (l = d(i.getLevel())), c.call(s), i === s)
                  for (var e in o) o[e].rebuild()
              }, l = d(i ? i.getLevel() : "WARN");
              var b = h();
              null != b && (u = d(b)), c.call(s)
            }(i = new s).getLogger = function(e) {
              if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
              var t = o[e];
              return t || (t = o[e] = new s(e, i.methodFactory)), t
            };
            var g = typeof window !== t ? window.log : void 0;
            return i.noConflict = function() {
              return typeof window !== t && window.log === i && (window.log = g), i
            }, i.getLoggers = function() {
              return o
            }, i.default = i, i
          }, void 0 !== (o = n()) && (e.exports = o)
        }()
      },
      90251: function(e, t, r) {
        var n, o;
        n = function(e) {
          "use strict";
          var t, r, n = {
              template: "[%t] %l:",
              levelFormatter: function(e) {
                return e.toUpperCase()
              },
              nameFormatter: function(e) {
                return e || "root"
              },
              timestampFormatter: function(e) {
                return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
              },
              format: void 0
            },
            o = {},
            i = {
              reg: function(e) {
                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                t = e
              },
              apply: function(e, r) {
                if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                var i = e.methodFactory,
                  l = e.name || "",
                  a = o[l] || o[""] || n;
                return o[l] || (e.methodFactory = function(e, t, r) {
                  var n = i(e, t, r),
                    a = o[r] || o[""],
                    c = -1 !== a.template.indexOf("%t"),
                    u = -1 !== a.template.indexOf("%l"),
                    f = -1 !== a.template.indexOf("%n");
                  return function() {
                    for (var t = "", i = arguments.length, s = Array(i), g = 0; i > g; g++) s[g] = arguments[g];
                    if (l || !o[r]) {
                      var h = a.timestampFormatter(new Date),
                        d = a.levelFormatter(e),
                        b = a.nameFormatter(r);
                      a.format ? t += a.format(d, b, h) : (t += a.template, c && (t = t.replace(/%t/, h)), u && (t = t.replace(/%l/, d)), f && (t = t.replace(/%n/, b))), s.length && "string" == typeof s[0] ? s[0] = t + " " + s[0] : s.unshift(t)
                    }
                    n.apply(void 0, s)
                  }
                }), (r = r || {}).template && (r.format = void 0), o[l] = function(e) {
                  for (var t, r = 1, n = arguments.length; n > r; r++)
                    for (t in arguments[r])({}).hasOwnProperty.call(arguments[r], t) && (e[t] = arguments[r][t]);
                  return e
                }({}, a, r), e.setLevel(e.getLevel()), t || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
              }
            };
          return e && (r = e.prefix, i.noConflict = function() {
            return e.prefix === i && (e.prefix = r), i
          }), i
        }, void 0 !== (o = n(r)) && (e.exports = o)
      },
      93155: (e, t, r) => {
        "use strict";
        r.d(t, {
          A: () => g
        });
        var n = r(73065),
          o = r.n(n),
          i = r(90251),
          l = r.n(i),
          a = r(45305);
        o().setLevel("DEBUG");
        var c, u = ((c = u || {}).TRACE = "TRACE", c.DEBUG = "DEBUG", c.INFO = "INFO", c.WARN = "WARN", c.ERROR = "ERROR", c);
        const f = {
          TRACE: a.GC,
          DEBUG: a.Q_,
          INFO: a.z1,
          WARN: a.D9,
          ERROR: a.wv
        };
        l().reg(o()), l().apply(o(), {
          format: (e, t, r) => `${(0,a.wm)(`[${r}]`)} ${f[e](e)}${"root"===t?"":(0,a.wL)(` [${t}:]`)}`
        });
        const s = o().error.bind(o());
        o().error = (...e) => s(...e);
        const g = o()
      },
      98939: (e, t, r) => {
        "use strict";
        r.d(t, {
          Dv: () => n,
          K4: () => i,
          M7: () => u,
          O0: () => c,
          TF: () => a,
          cc: () => l,
          dQ: () => h,
          k$: () => d,
          my: () => s,
          rK: () => g,
          xo: () => o
        });
        const n = 30,
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
          c = "1920x1080",
          u = 60;
        var f, s = ((f = s || {})[f.CRYPTO = 0] = "CRYPTO", f[f.NFT = 1] = "NFT", f[f.APPROVALS = 2] = "APPROVALS", f),
          g = (e => (e[e.RWA = 0] = "RWA", e[e.AI = 1] = "AI", e[e.MEMES = 2] = "MEMES", e))(g || {}),
          h = (e => (e[e.TOP = 0] = "TOP", e[e.BNB = 1] = "BNB", e[e.ETH = 2] = "ETH", e[e.SOL = 3] = "SOL", e))(h || {}),
          d = (e => (e[e.HOLDINGS = 0] = "HOLDINGS", e[e.HISTORY = 1] = "HISTORY", e[e.ABOUT = 2] = "ABOUT", e))(d || {})
      }
    },
    i = {};

  function l(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var r = i[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return o[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
  }
  l.m = o, l.amdO = {}, e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", t = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", r = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", n = e => {
    e && 1 > e.d && (e.d = 1, e.forEach(e => e.r--), e.forEach(e => e.r-- ? e.r++ : e()))
  }, l.a = (o, i, l) => {
    var a;
    l && ((a = []).d = -1);
    var c, u, f, s = new Set,
      g = o.exports,
      h = new Promise((e, t) => {
        f = t, u = e
      });
    h[t] = g, h[e] = e => (a && e(a), s.forEach(e), h.catch(e => {})), o.exports = h, i(o => {
      c = (o => o.map(o => {
        if (null !== o && "object" == typeof o) {
          if (o[e]) return o;
          if (o.then) {
            var i = [];
            i.d = 0, o.then(e => {
              l[t] = e, n(i)
            }, e => {
              l[r] = e, n(i)
            });
            var l = {};
            return l[e] = e => e(i), l
          }
        }
        var a = {};
        return a[e] = e => {}, a[t] = o, a
      }))(o);
      var i, l = () => c.map(e => {
          if (e[r]) throw e[r];
          return e[t]
        }),
        u = new Promise(t => {
          (i = () => t(l)).r = 0;
          var r = e => e !== a && !s.has(e) && (s.add(e), e && !e.d && (i.r++, e.push(i)));
          c.map(t => t[e](r))
        });
      return i.r ? u : l()
    }, e => (e ? f(h[r] = e) : u(g), n(a))), a && 0 > a.d && (a.d = 0)
  }, l.n = e => {
    var t = e && e.i ? () => e.default : () => e;
    return l.d(t, {
      a: t
    }), t
  }, (() => {
    var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
    l.t = function(r, n) {
      if (1 & n && (r = this(r)), 8 & n || "object" == typeof r && r && (4 & n && r.i || 16 & n && "function" == typeof r.then)) return r;
      var o = Object.create(null);
      l.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & n && r;
        "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach(e => i[e] = () => r[e]);
      return i.default = () => r, l.d(o, i), o
    }
  })(), l.d = (e, t) => {
    for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), [])), l.u = e => e + ".js", l.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || Function("return this")()
    } catch {
      if ("object" == typeof window) return window
    }
  }(), l.o = (e, t) => ({}.hasOwnProperty.call(e, t)), (() => {
    var e = {},
      t = "browser-extension-wallet:";
    l.l = (r, n, o, i) => {
      if (e[r]) e[r].push(n);
      else {
        var a, c;
        if (void 0 !== o)
          for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
            var s = u[f];
            if (s.getAttribute("src") == r || s.getAttribute("data-webpack") == t + o) {
              a = s;
              break
            }
          }
        a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, l.nc && a.setAttribute("nonce", l.nc), a.setAttribute("data-webpack", t + o), a.src = r), e[r] = [n];
        var g = (t, n) => {
            a.onerror = a.onload = null, clearTimeout(h);
            var o = e[r];
            if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach(e => e(n)), t) return t(n)
          },
          h = setTimeout(g.bind(null, void 0, {
            type: "timeout",
            target: a
          }), 12e4);
        a.onerror = g.bind(null, a.onerror), a.onload = g.bind(null, a.onload), c && document.head.appendChild(a)
      }
    }
  })(), l.r = e => {
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "i", {
      value: !0
    })
  }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), l.j = 5796, l.v = (e, t, r, n) => {
    var o = fetch(l.p + "" + r + ".module.wasm"),
      i = () => o.then(e => e.arrayBuffer()).then(e => WebAssembly.instantiate(e, n)).then(t => Object.assign(e, t.instance.exports));
    return o.then(t => "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(t, n).then(t => Object.assign(e, t.instance.exports), e => {
      if ("application/wasm" !== t.headers.get("Content-Type")) return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e), i();
      throw e
    }) : i())
  }, l.p = "", (() => {
    l.b = document.baseURI || self.location.href;
    var e = {
      5796: 0,
      8939: 0
    };
    l.f.j = (t, r) => {
      var n = l.o(e, t) ? e[t] : void 0;
      if (0 !== n)
        if (n) r.push(n[2]);
        else {
          var o = new Promise((r, o) => n = e[t] = [r, o]);
          r.push(n[2] = o);
          var i = l.p + l.u(t),
            a = Error();
          l.l(i, r => {
            if (l.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
              var o = r && ("load" === r.type ? "missing" : r.type),
                i = r && r.target && r.target.src;
              a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, n[1](a)
            }
          }, "chunk-" + t, t)
        }
    };
    var t = (t, r) => {
        var n, o, [i, a, c] = r,
          u = 0;
        if (i.some(t => 0 !== e[t])) {
          for (n in a) l.o(a, n) && (l.m[n] = a[n]);
          c && c(l)
        }
        for (t && t(r); u < i.length; u++) o = i[u], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      r = self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
  })(), l.nc = void 0, (() => {
    "use strict";
    var e = l(98939),
      t = l(93155);
    const r = {
      portName: e.K4,
      MAX_MISS_RECONNECT: 10
    };
    chrome.runtime.onMessage.addListener(e => {
      "closeSidePanel" === e.action && window.close()
    }), Promise.all([l.e(9816), l.e(6540), l.e(15)]).then(l.bind(l, 20015)).then(e => e.default(r)).catch(t.A.error)
  })()
})();
