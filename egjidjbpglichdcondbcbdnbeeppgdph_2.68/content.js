(() => {
  var e, n, t = {
      14545: (e, n) => {
        n.isatty = function() {
          return !1
        }, n.ReadStream = function() {
          throw Error("tty.ReadStream is not implemented")
        }, n.WriteStream = function() {
          throw Error("tty.WriteStream is not implemented")
        }
      },
      37007: e => {
        "use strict";
        var n, t = "object" == typeof Reflect ? Reflect : null,
          r = t && "function" == typeof t.apply ? t.apply : function(e, n, t) {
            return function() {}.apply.call(e, n, t)
          };
        n = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
          return Object.getOwnPropertyNames(e)
        };
        var i = Number.isNaN || function(e) {
          return e != e
        };

        function o() {
          o.init.call(this)
        }
        e.exports = o, e.exports.once = function(e, n) {
          return new Promise(function(t, r) {
            function i(t) {
              e.removeListener(n, o), r(t)
            }

            function o() {
              "function" == typeof e.removeListener && e.removeListener("error", i), t([].slice.call(arguments))
            }
            h(e, n, o, {
              once: !0
            }), "error" !== n && function(e, n) {
              "function" == typeof e.on && h(e, "error", n, {
                once: !0
              })
            }(e, i)
          })
        }, o.EventEmitter = o, o.prototype.i = void 0, o.prototype.u = 0, o.prototype.m = void 0;
        var s = 10;

        function a(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function u(e) {
          return void 0 === e.m ? o.defaultMaxListeners : e.m
        }

        function c(e, n, t, r) {
          var i, o, s;
          if (a(t), void 0 === (o = e.i) ? (o = e.i = Object.create(null), e.u = 0) : (void 0 !== o.newListener && (e.emit("newListener", n, t.listener ? t.listener : t), o = e.i), s = o[n]), void 0 === s) s = o[n] = t, ++e.u;
          else if ("function" == typeof s ? s = o[n] = r ? [t, s] : [s, t] : r ? s.unshift(t) : s.push(t), (i = u(e)) > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var c = Error("Possible EventEmitter memory leak detected. " + s.length + " " + n + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = n, c.count = s.length,
              function(e) {
                console && console.warn && console.warn(e)
              }(c)
          }
          return e
        }

        function g() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function m(e, n, t) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: n,
              listener: t
            },
            i = g.bind(r);
          return i.listener = t, r.wrapFn = i, i
        }

        function l(e, n, t) {
          var r = e.i;
          if (void 0 === r) return [];
          var i = r[n];
          return void 0 === i ? [] : "function" == typeof i ? t ? [i.listener || i] : [i] : t ? function(e) {
            for (var n = Array(e.length), t = 0; t < n.length; ++t) n[t] = e[t].listener || e[t];
            return n
          }(i) : A(i, i.length)
        }

        function f(e) {
          var n = this.i;
          if (void 0 !== n) {
            var t = n[e];
            if ("function" == typeof t) return 1;
            if (void 0 !== t) return t.length
          }
          return 0
        }

        function A(e, n) {
          for (var t = Array(n), r = 0; n > r; ++r) t[r] = e[r];
          return t
        }

        function h(e, n, t, r) {
          if ("function" == typeof e.on) r.once ? e.once(n, t) : e.on(n, t);
          else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(n, function i(o) {
              r.once && e.removeEventListener(n, i), t(o)
            })
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
            return s
          },
          set: function(e) {
            if ("number" != typeof e || 0 > e || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            s = e
          }
        }), o.init = function() {
          (void 0 === this.i || this.i === Object.getPrototypeOf(this).i) && (this.i = Object.create(null), this.u = 0), this.m = this.m || void 0
        }, o.prototype.setMaxListeners = function(e) {
          if ("number" != typeof e || 0 > e || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this.m = e, this
        }, o.prototype.getMaxListeners = function() {
          return u(this)
        }, o.prototype.emit = function(e) {
          for (var n = [], t = 1; arguments.length > t; t++) n.push(arguments[t]);
          var i = "error" === e,
            o = this.i;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
            var a = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
          }
          var u = o[e];
          if (void 0 === u) return !1;
          if ("function" == typeof u) r(u, this, n);
          else {
            var c = u.length,
              g = A(u, c);
            for (t = 0; c > t; ++t) r(g[t], this, n)
          }
          return !0
        }, o.prototype.addListener = function(e, n) {
          return c(this, e, n, !1)
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, n) {
          return c(this, e, n, !0)
        }, o.prototype.once = function(e, n) {
          return a(n), this.on(e, m(this, e, n)), this
        }, o.prototype.prependOnceListener = function(e, n) {
          return a(n), this.prependListener(e, m(this, e, n)), this
        }, o.prototype.removeListener = function(e, n) {
          var t, r, i, o, s;
          if (a(n), void 0 === (r = this.i)) return this;
          if (void 0 === (t = r[e])) return this;
          if (t === n || t.listener === n) 0 === --this.u ? this.i = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, t.listener || n));
          else if ("function" != typeof t) {
            for (i = -1, o = t.length - 1; o >= 0; o--)
              if (t[o] === n || t[o].listener === n) {
                s = t[o].listener, i = o;
                break
              } if (0 > i) return this;
            0 === i ? t.shift() : function(e, n) {
              for (; n + 1 < e.length; n++) e[n] = e[n + 1];
              e.pop()
            }(t, i), 1 === t.length && (r[e] = t[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || n)
          }
          return this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
          var n, t, r;
          if (void 0 === (t = this.i)) return this;
          if (void 0 === t.removeListener) return 0 === arguments.length ? (this.i = Object.create(null), this.u = 0) : void 0 !== t[e] && (0 === --this.u ? this.i = Object.create(null) : delete t[e]), this;
          if (0 === arguments.length) {
            var i, o = Object.keys(t);
            for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this.i = Object.create(null), this.u = 0, this
          }
          if ("function" == typeof(n = t[e])) this.removeListener(e, n);
          else if (void 0 !== n)
            for (r = n.length - 1; r >= 0; r--) this.removeListener(e, n[r]);
          return this
        }, o.prototype.listeners = function(e) {
          return l(this, e, !0)
        }, o.prototype.rawListeners = function(e) {
          return l(this, e, !1)
        }, o.listenerCount = function(e, n) {
          return "function" == typeof e.listenerCount ? e.listenerCount(n) : f.call(e, n)
        }, o.prototype.listenerCount = f, o.prototype.eventNames = function() {
          return this.u > 0 ? n(this.i) : []
        }
      },
      65606: e => {
        var n, t, r = e.exports = {};

        function i() {
          throw Error("setTimeout has not been defined")
        }

        function o() {
          throw Error("clearTimeout has not been defined")
        }

        function s(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
          try {
            return n(e, 0)
          } catch {
            try {
              return n.call(null, e, 0)
            } catch {
              return n.call(this, e, 0)
            }
          }
        }! function() {
          try {
            n = "function" == typeof setTimeout ? setTimeout : i
          } catch {
            n = i
          }
          try {
            t = "function" == typeof clearTimeout ? clearTimeout : o
          } catch {
            t = o
          }
        }();
        var a, u = [],
          c = !1,
          g = -1;

        function m() {
          !c || !a || (c = !1, a.length ? u = a.concat(u) : g = -1, u.length && l())
        }

        function l() {
          if (!c) {
            var e = s(m);
            c = !0;
            for (var n = u.length; n;) {
              for (a = u, u = []; ++g < n;) a && a[g].run();
              g = -1, n = u.length
            }
            a = null, c = !1,
              function(e) {
                if (t === clearTimeout) return clearTimeout(e);
                if ((t === o || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                try {
                  return t(e)
                } catch {
                  try {
                    return t.call(null, e)
                  } catch {
                    return t.call(this, e)
                  }
                }
              }(e)
          }
        }

        function f(e, n) {
          this.fun = e, this.array = n
        }

        function A() {}
        r.nextTick = function(e) {
          var n = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var t = 1; arguments.length > t; t++) n[t - 1] = arguments[t];
          u.push(new f(e, n)), 1 === u.length && !c && s(l)
        }, f.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = A, r.addListener = A, r.once = A, r.off = A, r.removeListener = A, r.removeAllListeners = A, r.emit = A, r.prependListener = A, r.prependOnceListener = A, r.listeners = function(e) {
          return []
        }, r.binding = function(e) {
          throw Error("process.binding is not supported")
        }, r.cwd = function() {
          return "/"
        }, r.chdir = function(e) {
          throw Error("process.chdir is not supported")
        }, r.umask = function() {
          return 0
        }
      },
      73065: function(e, n, t) {
        var r, i;
        ! function() {
          "use strict";
          r = function() {
            var e = function() {},
              n = "undefined",
              t = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent),
              r = ["trace", "debug", "info", "warn", "error"],
              i = {},
              o = null;

            function s(e, n) {
              var t = e[n];
              if ("function" == typeof t.bind) return t.bind(e);
              try {
                return function() {}.bind.call(t, e)
              } catch {
                return function() {
                  return function() {}.apply.call(t, e, arguments)
                }
              }
            }

            function a() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : function() {}.apply.call(console.log, console, arguments)), console.trace && console.trace()
            }

            function u() {
              for (var t = this.getLevel(), i = 0; r.length > i; i++) {
                var o = r[i];
                this[o] = t > i ? e : this.methodFactory(o, t, this.name)
              }
              if (this.log = this.debug, typeof console === n && t < this.levels.SILENT) return "No console available for logging"
            }

            function c(e) {
              return function() {
                typeof console !== n && (u.call(this), this[e].apply(this, arguments))
              }
            }

            function g(r, i, o) {
              return function(r) {
                return "debug" === r && (r = "log"), typeof console !== n && ("trace" === r && t ? a : void 0 !== console[r] ? s(console, r) : void 0 !== console.log ? s(console, "log") : e)
              }(r) || c.apply(this, arguments)
            }

            function m(e, t) {
              var s, a, c, m = this,
                l = "loglevel";

              function f() {
                var e;
                if (typeof window !== n && l) {
                  try {
                    e = window.localStorage[l]
                  } catch {}
                  if (typeof e === n) try {
                    var t = window.document.cookie,
                      r = encodeURIComponent(l),
                      i = t.indexOf(r + "="); - 1 !== i && (e = /^([^;]+)/.exec(t.slice(i + r.length + 1))[1])
                  } catch {}
                  return void 0 === m.levels[e] && (e = void 0), e
                }
              }

              function A(e) {
                var n = e;
                if ("string" == typeof n && void 0 !== m.levels[n.toUpperCase()] && (n = m.levels[n.toUpperCase()]), "number" == typeof n && n >= 0 && n <= m.levels.SILENT) return n;
                throw new TypeError("log.setLevel() called with invalid level: " + e)
              }
              "string" == typeof e ? l += ":" + e : "symbol" == typeof e && (l = void 0), m.name = e, m.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }, m.methodFactory = t || g, m.getLevel = function() {
                return c ?? a ?? s
              }, m.setLevel = function(e, t) {
                return c = A(e), !1 !== t && function(e) {
                  var t = (r[e] || "silent").toUpperCase();
                  if (typeof window !== n && l) {
                    try {
                      return void(window.localStorage[l] = t)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(l) + "=" + t + ";"
                    } catch {}
                  }
                }(c), u.call(m)
              }, m.setDefaultLevel = function(e) {
                a = A(e), f() || m.setLevel(e, !1)
              }, m.resetLevel = function() {
                c = null,
                  function() {
                    if (typeof window !== n && l) {
                      try {
                        window.localStorage.removeItem(l)
                      } catch {}
                      try {
                        window.document.cookie = encodeURIComponent(l) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                      } catch {}
                    }
                  }(), u.call(m)
              }, m.enableAll = function(e) {
                m.setLevel(m.levels.TRACE, e)
              }, m.disableAll = function(e) {
                m.setLevel(m.levels.SILENT, e)
              }, m.rebuild = function() {
                if (o !== m && (s = A(o.getLevel())), u.call(m), o === m)
                  for (var e in i) i[e].rebuild()
              }, s = A(o ? o.getLevel() : "WARN");
              var h = f();
              null != h && (c = A(h)), u.call(m)
            }(o = new m).getLogger = function(e) {
              if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
              var n = i[e];
              return n || (n = i[e] = new m(e, o.methodFactory)), n
            };
            var l = typeof window !== n ? window.log : void 0;
            return o.noConflict = function() {
              return typeof window !== n && window.log === o && (window.log = l), o
            }, o.getLoggers = function() {
              return i
            }, o.default = o, o
          }, void 0 !== (i = r()) && (e.exports = i)
        }()
      },
      90251: function(e, n, t) {
        var r, i;
        r = function(e) {
          "use strict";
          var n, t, r = {
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
            i = {},
            o = {
              reg: function(e) {
                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                n = e
              },
              apply: function(e, t) {
                if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                var o = e.methodFactory,
                  s = e.name || "",
                  a = i[s] || i[""] || r;
                return i[s] || (e.methodFactory = function(e, n, t) {
                  var r = o(e, n, t),
                    a = i[t] || i[""],
                    u = -1 !== a.template.indexOf("%t"),
                    c = -1 !== a.template.indexOf("%l"),
                    g = -1 !== a.template.indexOf("%n");
                  return function() {
                    for (var n = "", o = arguments.length, m = Array(o), l = 0; o > l; l++) m[l] = arguments[l];
                    if (s || !i[t]) {
                      var f = a.timestampFormatter(new Date),
                        A = a.levelFormatter(e),
                        h = a.nameFormatter(t);
                      a.format ? n += a.format(A, h, f) : (n += a.template, u && (n = n.replace(/%t/, f)), c && (n = n.replace(/%l/, A)), g && (n = n.replace(/%n/, h))), m.length && "string" == typeof m[0] ? m[0] = n + " " + m[0] : m.unshift(n)
                    }
                    r.apply(void 0, m)
                  }
                }), (t = t || {}).template && (t.format = void 0), i[s] = function(e) {
                  for (var n, t = 1, r = arguments.length; r > t; t++)
                    for (n in arguments[t])({}).hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                  return e
                }({}, a, t), e.setLevel(e.getLevel()), n || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
              }
            };
          return e && (t = e.prefix, o.noConflict = function() {
            return e.prefix === o && (e.prefix = t), o
          }), o
        }, void 0 !== (i = r(t)) && (e.exports = i)
      },
      96815: function(e, n) {
        var t, r;
        "u" > typeof globalThis ? globalThis : "u" > typeof self && self, void 0 !== (r = "function" == typeof(t = function(e) {
          "use strict";
          if (!globalThis.chrome?.runtime?.id) throw Error("This script should only be loaded in a browser extension.");
          if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const n = "The message port closed before a response was received.",
              t = e => {
                const t = {
                  alarms: {
                    clear: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    clearAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    get: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  bookmarks: {
                    create: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getChildren: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getRecent: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getSubTree: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTree: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeTree: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  browserAction: {
                    disable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    enable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    getBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getBadgeText: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    openPopup: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    setBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setBadgeText: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  browsingData: {
                    remove: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    removeCache: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeCookies: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeDownloads: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeFormData: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeHistory: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeLocalStorage: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removePasswords: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removePluginData: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    settings: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  commands: {
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  contextMenus: {
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  cookies: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAllCookieStores: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  devtools: {
                    inspectedWindow: {
                      eval: {
                        minArgs: 1,
                        maxArgs: 2,
                        singleCallbackArg: !1
                      }
                    },
                    panels: {
                      create: {
                        minArgs: 3,
                        maxArgs: 3,
                        singleCallbackArg: !0
                      },
                      elements: {
                        createSidebarPane: {
                          minArgs: 1,
                          maxArgs: 1
                        }
                      }
                    }
                  },
                  downloads: {
                    cancel: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    download: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    erase: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getFileIcon: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    open: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    pause: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeFile: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    resume: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  extension: {
                    isAllowedFileSchemeAccess: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    isAllowedIncognitoAccess: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  history: {
                    addUrl: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    deleteAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    deleteRange: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    deleteUrl: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getVisits: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  i18n: {
                    detectLanguage: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAcceptLanguages: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  identity: {
                    launchWebAuthFlow: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  idle: {
                    queryState: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  management: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getSelf: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    setEnabled: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    uninstallSelf: {
                      minArgs: 0,
                      maxArgs: 1
                    }
                  },
                  notifications: {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getPermissionLevel: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  },
                  pageAction: {
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    hide: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0
                    }
                  },
                  permissions: {
                    contains: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    request: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  runtime: {
                    getBackgroundPage: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getPlatformInfo: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    openOptionsPage: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    requestUpdateCheck: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    sendMessage: {
                      minArgs: 1,
                      maxArgs: 3
                    },
                    sendNativeMessage: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    setUninstallURL: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  sessions: {
                    getDevices: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getRecentlyClosed: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    restore: {
                      minArgs: 0,
                      maxArgs: 1
                    }
                  },
                  storage: {
                    local: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1
                      }
                    },
                    managed: {
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      }
                    },
                    sync: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1
                      }
                    }
                  },
                  tabs: {
                    captureVisibleTab: {
                      minArgs: 0,
                      maxArgs: 2
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    detectLanguage: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    discard: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    duplicate: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    executeScript: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 0
                    },
                    getZoom: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getZoomSettings: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    goBack: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    goForward: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    highlight: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    insertCSS: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2
                    },
                    query: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    reload: {
                      minArgs: 0,
                      maxArgs: 2
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    removeCSS: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    sendMessage: {
                      minArgs: 2,
                      maxArgs: 3
                    },
                    setZoom: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    setZoomSettings: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    update: {
                      minArgs: 1,
                      maxArgs: 2
                    }
                  },
                  topSites: {
                    get: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  webNavigation: {
                    getAllFrames: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    getFrame: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  },
                  webRequest: {
                    handlerBehaviorChanged: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  },
                  windows: {
                    create: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 2
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    getLastFocused: {
                      minArgs: 0,
                      maxArgs: 1
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2
                    }
                  }
                };
                if (0 === Object.keys(t).length) throw Error("api-metadata.json has not been included in browser-polyfill");
                class r extends WeakMap {
                  constructor(e, n = void 0) {
                    super(n), this.createItem = e
                  }
                  get(e) {
                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  }
                }
                const i = (n, t) => (...r) => {
                    e.runtime.lastError ? n.reject(Error(e.runtime.lastError.message)) : t.singleCallbackArg || 1 >= r.length && !1 !== t.singleCallbackArg ? n.resolve(r[0]) : n.resolve(r)
                  },
                  o = e => 1 == e ? "argument" : "arguments",
                  s = (e, n, t) => new Proxy(n, {
                    apply: (n, r, i) => t.call(r, e, ...i)
                  });
                let a = Function.call.bind({}.hasOwnProperty);
                const u = (e, n = {}, t = {}) => {
                    let r = Object.create(null),
                      c = {
                        has: (n, t) => t in e || t in r,
                        get(c, g, m) {
                          if (g in r) return r[g];
                          if (!(g in e)) return;
                          let l = e[g];
                          if ("function" == typeof l)
                            if ("function" == typeof n[g]) l = s(e, e[g], n[g]);
                            else if (a(t, g)) {
                            let n = ((e, n) => function(t, ...r) {
                              if (r.length < n.minArgs) throw Error(`Expected at least ${n.minArgs} ${o(n.minArgs)} for ${e}(), got ${r.length}`);
                              if (r.length > n.maxArgs) throw Error(`Expected at most ${n.maxArgs} ${o(n.maxArgs)} for ${e}(), got ${r.length}`);
                              return new Promise((o, s) => {
                                if (n.fallbackToNoCallback) try {
                                  t[e](...r, i({
                                    resolve: o,
                                    reject: s
                                  }, n))
                                } catch (i) {
                                  console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", i), t[e](...r), n.fallbackToNoCallback = !1, n.noCallback = !0, o()
                                } else n.noCallback ? (t[e](...r), o()) : t[e](...r, i({
                                  resolve: o,
                                  reject: s
                                }, n))
                              })
                            })(g, t[g]);
                            l = s(e, e[g], n)
                          } else l = l.bind(e);
                          else if ("object" == typeof l && null !== l && (a(n, g) || a(t, g))) l = u(l, n[g], t[g]);
                          else {
                            if (!a(t, "*")) return Object.defineProperty(r, g, {
                              configurable: !0,
                              enumerable: !0,
                              get: () => e[g],
                              set(n) {
                                e[g] = n
                              }
                            }), l;
                            l = u(l, n[g], t["*"])
                          }
                          return r[g] = l, l
                        },
                        set: (n, t, i, o) => (t in r ? r[t] = i : e[t] = i, !0),
                        defineProperty: (e, n, t) => Reflect.defineProperty(r, n, t),
                        deleteProperty: (e, n) => Reflect.deleteProperty(r, n)
                      };
                    return new Proxy(Object.create(e), c)
                  },
                  c = e => ({
                    addListener(n, t, ...r) {
                      n.addListener(e.get(t), ...r)
                    },
                    hasListener: (n, t) => n.hasListener(e.get(t)),
                    removeListener(n, t) {
                      n.removeListener(e.get(t))
                    }
                  }),
                  g = new r(e => "function" != typeof e ? e : function(n) {
                    const t = u(n, {}, {
                      getContent: {
                        minArgs: 0,
                        maxArgs: 0
                      }
                    });
                    e(t)
                  }),
                  m = new r(e => "function" != typeof e ? e : function(n, t, r) {
                    let i, o, s = !1,
                      a = new Promise(e => {
                        i = function(n) {
                          s = !0, e(n)
                        }
                      });
                    try {
                      o = e(n, t, i)
                    } catch (e) {
                      o = Promise.reject(e)
                    }
                    const u = !0 !== o && (e => e && "object" == typeof e && "function" == typeof e.then)(o);
                    return !(!0 !== o && !u && !s || ((u ? o : a).then(e => {
                      r(e)
                    }, e => {
                      let n;
                      n = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", r({
                        l: !0,
                        message: n
                      })
                    }).catch(e => {
                      console.error("Failed to send onMessage rejected reply", e)
                    }), 0))
                  }),
                  l = ({
                    reject: t,
                    resolve: r
                  }, i) => {
                    e.runtime.lastError ? e.runtime.lastError.message === n ? r() : t(Error(e.runtime.lastError.message)) : i && i.l ? t(Error(i.message)) : r(i)
                  },
                  f = (e, n, t, ...r) => {
                    if (r.length < n.minArgs) throw Error(`Expected at least ${n.minArgs} ${o(n.minArgs)} for ${e}(), got ${r.length}`);
                    if (r.length > n.maxArgs) throw Error(`Expected at most ${n.maxArgs} ${o(n.maxArgs)} for ${e}(), got ${r.length}`);
                    return new Promise((e, n) => {
                      const i = l.bind(null, {
                        resolve: e,
                        reject: n
                      });
                      r.push(i), t.sendMessage(...r)
                    })
                  },
                  A = {
                    devtools: {
                      network: {
                        onRequestFinished: c(g)
                      }
                    },
                    runtime: {
                      onMessage: c(m),
                      onMessageExternal: c(m),
                      sendMessage: f.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                      })
                    },
                    tabs: {
                      sendMessage: f.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                      })
                    }
                  },
                  h = {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  };
                return t.privacy = {
                  network: {
                    "*": h
                  },
                  services: {
                    "*": h
                  },
                  websites: {
                    "*": h
                  }
                }, u(e, A, t)
              };
            e.exports = t(chrome)
          } else e.exports = globalThis.browser
        }) ? t(e) : t) && (e.exports = r)
      }
    },
    r = {};

  function i(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var o = r[e] = {
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, i), o.exports
  }
  i.n = e => {
    var n = e && e.A ? () => e.default : () => e;
    return i.d(n, {
      a: n
    }), n
  }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(t, r) {
    if (1 & r && (t = this(t)), 8 & r || "object" == typeof t && t && (4 & r && t.A || 16 & r && "function" == typeof t.then)) return t;
    var o = Object.create(null);
    i.r(o);
    var s = {};
    e = e || [null, n({}), n([]), n(n)];
    for (var a = 2 & r && t;
      "object" == typeof a && !~e.indexOf(a); a = n(a)) Object.getOwnPropertyNames(a).forEach(e => s[e] = () => t[e]);
    return s.default = () => t, i.d(o, s), o
  }, i.d = (e, n) => {
    for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: n[t]
    })
  }, i.o = (e, n) => ({}.hasOwnProperty.call(e, n)), i.r = e => {
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "A", {
      value: !0
    })
  }, (() => {
    "use strict";
    let e = (e = 21) => {
      let n = "",
        t = crypto.getRandomValues(new Uint8Array(e |= 0));
      for (; e--;) n += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [63 & t[e]];
      return n
    };
    Promise.resolve(!1), Promise.resolve(!0);
    var n = Promise.resolve();

    function t(e, n) {
      return e || (e = 0), new Promise(function(t) {
        return setTimeout(function() {
          return t(n)
        }, e)
      })
    }

    function r() {
      return Math.random().toString(36).substring(2)
    }
    var o = 0;

    function s() {
      var e = 1e3 * Date.now();
      return o >= e && (e = o + 1), o = e, e
    }
    var a = {
      create: function(e) {
        var n = {
          time: s(),
          messagesCallback: null,
          bc: new BroadcastChannel(e),
          subFns: []
        };
        return n.bc.onmessage = function(e) {
          n.messagesCallback && n.messagesCallback(e.data)
        }, n
      },
      close: function(e) {
        e.bc.close(), e.subFns = []
      },
      onMessage: function(e, n) {
        e.messagesCallback = n
      },
      postMessage: function(e, t) {
        try {
          return e.bc.postMessage(t, !1), n
        } catch (e) {
          return Promise.reject(e)
        }
      },
      canBeUsed: function() {
        if ("u" > typeof globalThis && globalThis.Deno && globalThis.Deno.args) return !0;
        if (("u" > typeof window || "u" > typeof self) && "function" == typeof BroadcastChannel) {
          if (BroadcastChannel.h) throw Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
          return !0
        }
        return !1
      },
      type: "native",
      averageResponseTime: function() {
        return 150
      },
      microSeconds: s
    };
    class u {
      ttl;
      map = new Map;
      v = !1;
      constructor(e) {
        this.ttl = e
      }
      has(e) {
        return this.map.has(e)
      }
      add(e) {
        this.map.set(e, c()), this.v || (this.v = !0, setTimeout(() => {
          this.v = !1,
            function(e) {
              const n = c() - e.ttl,
                t = e.map[Symbol.iterator]();
              for (;;) {
                const r = t.next().value;
                if (!r) return;
                const i = r[0];
                if (r[1] >= n) return;
                e.map.delete(i)
              }
            }(this)
        }, 0))
      }
      clear() {
        this.map.clear()
      }
    }

    function c() {
      return Date.now()
    }

    function g() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = JSON.parse(JSON.stringify(e));
      return typeof n.webWorkerSupport > "u" && (n.webWorkerSupport = !0), n.idb || (n.idb = {}), n.idb.ttl || (n.idb.ttl = 45e3), n.idb.fallbackInterval || (n.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (n.idb.onclose = e.idb.onclose), n.localstorage || (n.localstorage = {}), n.localstorage.removeTimeout || (n.localstorage.removeTimeout = 6e4), e.methods && (n.methods = e.methods), n.node || (n.node = {}), n.node.ttl || (n.node.ttl = 12e4), n.node.maxParallelWrites || (n.node.maxParallelWrites = 2048), typeof n.node.useFastPath > "u" && (n.node.useFastPath = !0), n
    }
    var m = "messages",
      l = {
        durability: "relaxed"
      };

    function f() {
      if ("u" > typeof indexedDB) return indexedDB;
      if ("u" > typeof window) {
        if ("u" > typeof window.mozIndexedDB) return window.mozIndexedDB;
        if ("u" > typeof window.webkitIndexedDB) return window.webkitIndexedDB;
        if ("u" > typeof window.msIndexedDB) return window.msIndexedDB
      }
      return !1
    }

    function A(e) {
      e.commit && e.commit()
    }

    function h(e) {
      e.closed || d(e).then(function() {
        return t(e.options.idb.fallbackInterval)
      }).then(function() {
        return h(e)
      })
    }

    function d(e) {
      return e.closed || !e.messagesCallback ? n : function(e, n) {
        var t = e.transaction(m, "readonly", l),
          r = t.objectStore(m),
          i = [],
          o = IDBKeyRange.bound(n + 1, 1 / 0);
        if (r.getAll) {
          var s = r.getAll(o);
          return new Promise(function(e, n) {
            s.onerror = function(e) {
              return n(e)
            }, s.onsuccess = function(n) {
              e(n.target.result)
            }
          })
        }
        return new Promise(function(e, s) {
          var a = function() {
            try {
              return o = IDBKeyRange.bound(n + 1, 1 / 0), r.openCursor(o)
            } catch {
              return r.openCursor()
            }
          }();
          a.onerror = function(e) {
            return s(e)
          }, a.onsuccess = function(r) {
            var o = r.target.result;
            o ? o.value.id < n + 1 ? o.continue(n + 1) : (i.push(o.value), o.continue()) : (A(t), e(i))
          }
        })
      }(e.db, e.lastCursorId).then(function(t) {
        var r = t.filter(function(e) {
          return !!e
        }).map(function(n) {
          return n.id > e.lastCursorId && (e.lastCursorId = n.id), n
        }).filter(function(n) {
          return function(e, n) {
            return !(e.uuid === n.uuid || n.eMIs.has(e.id) || e.data.time < n.messagesCallbackTime)
          }(n, e)
        }).sort(function(e, n) {
          return e.time - n.time
        });
        return r.forEach(function(n) {
          e.messagesCallback && (e.eMIs.add(n.id), e.messagesCallback(n.data))
        }), n
      })
    }
    var v = {
      create: function(e, t) {
        return t = g(t),
          function(e) {
            var n = "pubkey.broadcast-channel-0-" + e,
              t = f().open(n);
            return t.onupgradeneeded = function(e) {
              e.target.result.createObjectStore(m, {
                keyPath: "id",
                autoIncrement: !0
              })
            }, new Promise(function(e, n) {
              t.onerror = function(e) {
                return n(e)
              }, t.onsuccess = function() {
                e(t.result)
              }
            })
          }(e).then(function(i) {
            var o = {
              closed: !1,
              lastCursorId: 0,
              channelName: e,
              options: t,
              uuid: r(),
              eMIs: new u(2 * t.idb.ttl),
              writeBlockPromise: n,
              messagesCallback: null,
              readQueuePromises: [],
              db: i
            };
            return i.onclose = function() {
              o.closed = !0, t.idb.onclose && t.idb.onclose()
            }, h(o), o
          })
      },
      close: function(e) {
        e.closed = !0, e.db.close()
      },
      onMessage: function(e, n, t) {
        e.messagesCallbackTime = t, e.messagesCallback = n, d(e)
      },
      postMessage: function(e, n) {
        return e.writeBlockPromise = e.writeBlockPromise.then(function() {
          return function(e, n, t) {
            var r = {
                uuid: n,
                time: Date.now(),
                data: t
              },
              i = e.transaction([m], "readwrite", l);
            return new Promise(function(e, n) {
              i.oncomplete = function() {
                return e()
              }, i.onerror = function(e) {
                return n(e)
              }, i.objectStore(m).add(r), A(i)
            })
          }(e.db, e.uuid, n)
        }).then(function() {
          0 === Math.floor(11 * Math.random() + 0) && function(e) {
            (function(e, n) {
              var t = Date.now() - n,
                r = e.transaction(m, "readonly", l),
                i = r.objectStore(m),
                o = [];
              return new Promise(function(e) {
                i.openCursor().onsuccess = function(n) {
                  var i = n.target.result;
                  if (i) {
                    var s = i.value;
                    s.time < t ? (o.push(s), i.continue()) : (A(r), e(o))
                  } else e(o)
                }
              })
            })(e.db, e.options.idb.ttl).then(function(n) {
              return function(e, n) {
                if (e.closed) return Promise.resolve([]);
                var t = e.db.transaction(m, "readwrite", l).objectStore(m);
                return Promise.all(n.map(function(e) {
                  var n = t.delete(e);
                  return new Promise(function(e) {
                    n.onsuccess = function() {
                      return e()
                    }
                  })
                }))
              }(e, n.map(function(e) {
                return e.id
              }))
            })
          }(e)
        }), e.writeBlockPromise
      },
      canBeUsed: function() {
        return !!f()
      },
      type: "idb",
      averageResponseTime: function(e) {
        return 2 * e.idb.fallbackInterval
      },
      microSeconds: s
    };

    function p() {
      var e;
      if (typeof window > "u") return null;
      try {
        e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
      } catch {}
      return e
    }

    function w(e) {
      return "pubkey.broadcastChannel-" + e
    }

    function b() {
      var e = p();
      if (!e) return !1;
      try {
        var n = "__broadcastchannel_check";
        e.setItem(n, "works"), e.removeItem(n)
      } catch {
        return !1
      }
      return !0
    }
    var y = {
        create: function(e, n) {
          if (n = g(n), !b()) throw Error("BroadcastChannel: localstorage cannot be used");
          var t = r(),
            i = new u(n.localstorage.removeTimeout),
            o = {
              channelName: e,
              uuid: t,
              eMIs: i
            };
          return o.listener = function(e, n) {
            var t = w(e),
              r = function(e) {
                e.key === t && n(JSON.parse(e.newValue))
              };
            return window.addEventListener("storage", r), r
          }(e, function(e) {
            o.messagesCallback && e.uuid !== t && (!e.token || i.has(e.token) || e.data.time && e.data.time < o.messagesCallbackTime || (i.add(e.token), o.messagesCallback(e.data)))
          }), o
        },
        close: function(e) {
          ! function(e) {
            window.removeEventListener("storage", e)
          }(e.listener)
        },
        onMessage: function(e, n, t) {
          e.messagesCallbackTime = t, e.messagesCallback = n
        },
        postMessage: function(e, n) {
          return new Promise(function(i) {
            t().then(function() {
              var t = w(e.channelName),
                o = {
                  token: r(),
                  time: Date.now(),
                  data: n,
                  uuid: e.uuid
                },
                s = JSON.stringify(o);
              p().setItem(t, s);
              var a = document.createEvent("Event");
              a.initEvent("storage", !0, !0), a.key = t, a.newValue = s, window.dispatchEvent(a), i()
            })
          })
        },
        canBeUsed: b,
        type: "localstorage",
        averageResponseTime: function() {
          var e = navigator.userAgent.toLowerCase();
          return e.includes("safari") && !e.includes("chrome") ? 240 : 120
        },
        microSeconds: s
      },
      x = s,
      T = new Set,
      E = {
        create: function(e) {
          var n = {
            time: x(),
            name: e,
            messagesCallback: null
          };
          return T.add(n), n
        },
        close: function(e) {
          T.delete(e)
        },
        onMessage: function(e, n) {
          e.messagesCallback = n
        },
        postMessage: function(e, n) {
          return new Promise(function(t) {
            return setTimeout(function() {
              Array.from(T).forEach(function(t) {
                t.name === e.name && t !== e && t.messagesCallback && t.time < n.time && t.messagesCallback(n)
              }), t()
            }, 5)
          })
        },
        canBeUsed: function() {
          return !0
        },
        type: "simulate",
        averageResponseTime: function() {
          return 5
        },
        microSeconds: x
      },
      C = [a, v, y],
      N = new Set,
      R = 0,
      P = function(e, n) {
        this.id = R++, N.add(this), this.name = e, this.options = g(n), this.method = function(e) {
            var n = [].concat(e.methods, C).filter(Boolean);
            if (e.type) {
              if ("simulate" === e.type) return E;
              var t = n.find(function(n) {
                return n.type === e.type
              });
              if (t) return t;
              throw Error("method-type " + e.type + " not found")
            }
            e.webWorkerSupport || (n = n.filter(function(e) {
              return "idb" !== e.type
            }));
            var r = n.find(function(e) {
              return e.canBeUsed()
            });
            if (r) return r;
            throw Error("No usable method found in " + JSON.stringify(C.map(function(e) {
              return e.type
            })))
          }(this.options), this.p = !1, this.T = null, this.C = {
            message: [],
            internal: []
          }, this.N = new Set, this.R = [], this.P = null,
          function(e) {
            var n = e.method.create(e.name, e.options);
            ! function(e) {
              return e && "function" == typeof e.then
            }(n) ? e.S = n: (e.P = n, n.then(function(n) {
              e.S = n
            }))
          }(this)
      };

    function S(e, t, r) {
      var i = {
        time: e.method.microSeconds(),
        type: t,
        data: r
      };
      return (e.P ? e.P : n).then(function() {
        var n = e.method.postMessage(e.S, i);
        return e.N.add(n), n.catch().then(function() {
          return e.N.delete(n)
        }), n
      })
    }

    function O(e) {
      return e.C.message.length > 0 || e.C.internal.length > 0
    }

    function k(e, n, t) {
      e.C[n].push(t),
        function(e) {
          if (!e.p && O(e)) {
            var n = function(n) {
                e.C[n.type].forEach(function(e) {
                  n.time >= e.time && e.fn(n.data)
                })
              },
              t = e.method.microSeconds();
            e.P ? e.P.then(function() {
              e.p = !0, e.method.onMessage(e.S, n, t)
            }) : (e.p = !0, e.method.onMessage(e.S, n, t))
          }
        }(e)
    }

    function B(e, n, t) {
      e.C[n] = e.C[n].filter(function(e) {
          return e !== t
        }),
        function(e) {
          if (e.p && !O(e)) {
            e.p = !1;
            var n = e.method.microSeconds();
            e.method.onMessage(e.S, null, n)
          }
        }(e)
    }
    P.h = !0, P.prototype = {
      postMessage: function(e) {
        if (this.closed) throw Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
        return S(this, "message", e)
      },
      postInternal: function(e) {
        return S(this, "internal", e)
      },
      set onmessage(e) {
        var n = {
          time: this.method.microSeconds(),
          fn: e
        };
        B(this, "message", this.T), e && "function" == typeof e ? (this.T = n, k(this, "message", n)) : this.T = null
      },
      addEventListener: function(e, n) {
        k(this, e, {
          time: this.method.microSeconds(),
          fn: n
        })
      },
      removeEventListener: function(e, n) {
        B(this, e, this.C[e].find(function(e) {
          return e.fn === n
        }))
      },
      close: function() {
        var e = this;
        if (!this.closed) {
          N.delete(this), this.closed = !0;
          var t = this.P ? this.P : n;
          return this.T = null, this.C.message = [], t.then(function() {
            return Promise.all(Array.from(e.N))
          }).then(function() {
            return Promise.all(e.R.map(function(e) {
              return e()
            }))
          }).then(function() {
            return e.method.close(e.S)
          })
        }
      },
      get type() {
        return this.method.type
      },
      get isClosed() {
        return this.closed
      }
    };
    class _ {
      constructor() {
        this.listeners = {}
      }
      addListener(e, n) {
        const t = this.listeners[e] || [];
        t.push(n), this.listeners[e] = t
      }
      once(e, n) {
        this.addListener(e, t => (delete this.listeners[e], n(t)))
      }
      emit(n, t) {
        return new Promise((r, i) => {
          const o = `${n}_${e()}_callback`;
          this.once(o, e => ((e, n, t) => new Promise((n, r) => {
            var i = e => {
                try {
                  s(t.next(e))
                } catch (e) {
                  r(e)
                }
              },
              o = e => {
                try {
                  s(t.throw(e))
                } catch (e) {
                  r(e)
                }
              },
              s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
            s((t = t.apply(e, null)).next())
          }))(this, 0, function*() {
            var n;
            null != (n = e.data) && n.error ? i(e.data.error) : r(e.data.params)
          })), this.send({
            method: n,
            data: {
              cbMethod: o,
              params: t
            }
          })
        })
      }
      disconnect() {}
    }
    var I, D = (e, n, t) => new Promise((r, i) => {
        var o = e => {
            try {
              a(t.next(e))
            } catch (e) {
              i(e)
            }
          },
          s = e => {
            try {
              a(t.throw(e))
            } catch (e) {
              i(e)
            }
          },
          a = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, s);
        a((t = t.apply(e, n)).next())
      }),
      L = i(37007),
      M = i.n(L);
    const G = "object" == typeof chrome && null != (I = null == chrome ? void 0 : chrome.runtime) && I.id ? i(96815) : {},
      j = G;
    j.action = G.action || G.browserAction;
    const U = j;
    class F extends _ {
      constructor(e) {
        var n;
        super(), this.port = null == (n = U.runtime) ? void 0 : n.connect({
          name: e || "extension-message"
        }), this.port || location.reload(), this.port.onMessage.addListener(e => {
          const n = e.method;
          !n || !this.listeners[n] || this.listeners[n].forEach(n => n(e))
        })
      }
      send(e) {
        try {
          this.port.postMessage(e)
        } catch (e) {
          if ("Attempting to use a disconnected port object" === e?.message) return;
          throw e
        }
      }
      listen(e) {
        this.port.onMessage.addListener(n => {
          e(n)
        })
      }
      disconnect() {
        this.port.disconnect()
      }
    }
    var $, W = (($ = W || {})[$.CRYPTO = 0] = "CRYPTO", $[$.NFT = 1] = "NFT", $[$.APPROVALS = 2] = "APPROVALS", $),
      H = (e => (e[e.RWA = 0] = "RWA", e[e.AI = 1] = "AI", e[e.MEMES = 2] = "MEMES", e))(H || {}),
      K = (e => (e[e.TOP = 0] = "TOP", e[e.BNB = 1] = "BNB", e[e.ETH = 2] = "ETH", e[e.SOL = 3] = "SOL", e))(K || {}),
      Y = (e => (e[e.HOLDINGS = 0] = "HOLDINGS", e[e.HISTORY = 1] = "HISTORY", e[e.ABOUT = 2] = "ABOUT", e))(Y || {}),
      J = (e => (e.READY = "READY", e.LOADING = "LOADING", e.IDLE = "IDLE", e.RESTARTING = "RESTARTING", e))(J || {});
    class V extends(M()) {
      constructor() {
        super(...arguments), this.status = "LOADING"
      }
      emit(e, n) {
        return this.status = n, super.emit(e, n)
      }
      emitReplaced(e, n) {
        return super.emit(e, n)
      }
    }
    V.EVENT = "EVENT", V.REPLACED = "REPLACED";
    var q = i(73065),
      Z = i.n(q),
      X = i(90251),
      z = i.n(X),
      Q = i(14545),
      ee = i.t(Q, 2),
      ne = i(65606);
    const {
      env: te = {},
      argv: re = [],
      platform: ie = ""
    } = typeof ne > "u" ? {} : ne, oe = "NO_COLOR" in te || re.includes("--no-color"), se = "FORCE_COLOR" in te || re.includes("--color"), ae = "win32" === ie, ue = "dumb" === te.TERM, ce = ee && Q.isatty && Q.isatty(1) && te.TERM && !ue, ge = !oe && (se || ae && !ue || ce || "CI" in te && ("GITHUB_ACTIONS" in te || "GITLAB_CI" in te || "CIRCLECI" in te)), me = (e, n, t, r, i = n.substring(0, e) + r, o = n.substring(e + t.length), s = o.indexOf(t)) => i + (0 > s ? o : me(s, o, t, r)), le = (e, n, t) => ((e, n, t = e, r = e.length + 1) => i => i || "" !== i && void 0 !== i ? ((e, n, t, r, i) => 0 > e ? t + n + r : t + me(e, n, r, i) + r)(("" + i).indexOf(n, r), i, e, n, t) : "")(`[${e}m`, `[${n}m`, t), fe = {
      reset: le(0, 0),
      bold: le(1, 22, "[22m[1m"),
      dim: le(2, 22, "[22m[2m"),
      italic: le(3, 23),
      underline: le(4, 24),
      inverse: le(7, 27),
      hidden: le(8, 28),
      strikethrough: le(9, 29),
      black: le(30, 39),
      red: le(31, 39),
      green: le(32, 39),
      yellow: le(33, 39),
      blue: le(34, 39),
      magenta: le(35, 39),
      cyan: le(36, 39),
      white: le(37, 39),
      gray: le(90, 39),
      bgBlack: le(40, 49),
      bgRed: le(41, 49),
      bgGreen: le(42, 49),
      bgYellow: le(43, 49),
      bgBlue: le(44, 49),
      bgMagenta: le(45, 49),
      bgCyan: le(46, 49),
      bgWhite: le(47, 49),
      blackBright: le(90, 39),
      redBright: le(91, 39),
      greenBright: le(92, 39),
      yellowBright: le(93, 39),
      blueBright: le(94, 39),
      magentaBright: le(95, 39),
      cyanBright: le(96, 39),
      whiteBright: le(97, 39),
      bgBlackBright: le(100, 49),
      bgRedBright: le(101, 49),
      bgGreenBright: le(102, 49),
      bgYellowBright: le(103, 49),
      bgBlueBright: le(104, 49),
      bgMagentaBright: le(105, 49),
      bgCyanBright: le(106, 49),
      bgWhiteBright: le(107, 49)
    }, {
      reset: Ae,
      bold: he,
      dim: de,
      italic: ve,
      underline: pe,
      inverse: we,
      hidden: be,
      strikethrough: ye,
      black: xe,
      red: Te,
      green: Ee,
      yellow: Ce,
      blue: Ne,
      magenta: Re,
      cyan: Pe,
      white: Se,
      gray: Oe,
      bgBlack: ke,
      bgRed: Be,
      bgGreen: _e,
      bgYellow: Ie,
      bgBlue: De,
      bgMagenta: Le,
      bgCyan: Me,
      bgWhite: Ge,
      blackBright: je,
      redBright: Ue,
      greenBright: Fe,
      yellowBright: $e,
      blueBright: We,
      magentaBright: He,
      cyanBright: Ke,
      whiteBright: Ye,
      bgBlackBright: Je,
      bgRedBright: Ve,
      bgGreenBright: qe,
      bgYellowBright: Ze,
      bgBlueBright: Xe,
      bgMagentaBright: ze,
      bgCyanBright: Qe,
      bgWhiteBright: en
    } = (({
      useColor: e = ge
    } = {}) => e ? fe : Object.keys(fe).reduce((e, n) => ({
      ...e,
      [n]: String
    }), {}))();
    Z().setLevel("DEBUG");
    var nn = (e => (e.TRACE = "TRACE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(nn || {});
    const tn = {
      TRACE: Re,
      DEBUG: Pe,
      INFO: Ne,
      WARN: Ce,
      ERROR: Te
    };
    z().reg(Z()), z().apply(Z(), {
      format: (e, n, t) => `${Oe(`[${t}]`)} ${tn[e](e)}${"root"===n?"":Ee(` [${n}:]`)}`
    });
    const rn = Z().error.bind(Z());
    Z().error = (...e) => rn(...e);
    const on = Z();
    var sn = (e => (e.INTERNAL = "INTERNAL", e.PUBLIC = "PUBLIC", e))(sn || {});

    function an(e, n) {
      return `${n}_${e}`
    }

    function un(e) {
      return an(e, "INTERNAL")
    }

    function cn(e) {
      return an(e, "PUBLIC")
    }
    const gn = {
        RESET: un("Reset"),
        LOCK: un("Lock"),
        LOCK_CALLBACK: un("Lock_callback"),
        AUTHENTICATE: un("Authenticate"),
        REGISTER_DEVICE: un("RegisterDevice"),
        APP_DISPLAYED: un("AppDisplayed"),
        WARNING_DISPLAYED: un("WarningDisplayed"),
        ICON_THEME_CHANGED: un("IconThemeChanged"),
        OPEN_POPUP: un("OpenPopup"),
        GET_APP_SETTINGS: cn("GetAppSettings"),
        GET_APP_NODES: cn("GetAppNodes"),
        GET_STORE: un("GetStore"),
        GET_REDUX_STATE: un("GetReduxState"),
        DISPATCH_REDUX_ACTION: un("DispatchReduxAction"),
        PING: cn("Ping"),
        GET_ONE_TAP_SETTINGS: cn("GetOneTapSettings"),
        ONE_TAP_DISMISS: cn("OneTapDismiss"),
        ONE_TAP_CONNECT: cn("OneTapConnect"),
        GET_TOKEN_SCANNER_I18N: cn("GetTokenScannerI18n"),
        GET_TOKEN_SCANNER_ENABLED: cn("GetTokenScannerEnabled"),
        GET_TOKEN_BASIC_INFO: cn("GetTokenBasicInfo"),
        GET_TOKEN_MARKET_DATA: cn("GetTokenMarketData"),
        GET_SIMILAR_TOKENS_COUNT: cn("GetSimilarTokensCount"),
        GET_SIMILAR_TOKENS: cn("GetSimilarTokens"),
        OPEN_SWAP_PAGE: cn("OpenSwapPage"),
        GET_FEATURE_FLAG: cn("GetFeatureFlag"),
        SET_TOKEN_SCANNER_ENABLED: cn("SetTokenScannerEnabled"),
        TRACK_ANALYTICS: cn("TrackAnalytics"),
        ANNOUNCEMENT_DISPLAYED: un("AnnouncementDisplayed"),
        FETCH_ANNOUNCEMENTS: un("FetchAnnouncements"),
        FETCH_USER_VIP_TIER_DATA: un("FetchUserVipTierData"),
        FETCH_FUNDING_METHODS: un("FetchFundingMethods"),
        ROUTE_CHANGED: un("RouteChanged")
      },
      mn = e => new Promise(n => setTimeout(n, e));

    function ln(e) {
      return e.portStream ? Promise.race([e.portStream.emit(gn.PING), mn(e.FIRST_TIME_WAIT).then(() => J.IDLE)]) : Promise.resolve(J.IDLE)
    }

    function fn(e) {
      return ((e, n, t) => new Promise((n, r) => {
        var i = e => {
            try {
              s(t.next(e))
            } catch (e) {
              r(e)
            }
          },
          o = e => {
            try {
              s(t.throw(e))
            } catch (e) {
              r(e)
            }
          },
          s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
        s((t = t.apply(e, null)).next())
      }))(this, 0, function*() {
        e.checking || (e.checking = !0, (yield ln(e)) === J.IDLE ? e.missCount++ : e.statusProvider.emit(V.EVENT, J.READY), e.missCount >= e.MAX_MISS_RECONNECT && (e.statusProvider.emit(V.EVENT, J.LOADING), e.portStream = new F(e.portName), e.statusProvider.emit(V.REPLACED, J.LOADING), e.missCount = 0), e.checking = !1, setTimeout(() => fn(e), e.THRESHOLD))
      })
    }

    function An(e) {
      return new Promise(n => {
        ln(e).then(t => {
          t === J.READY ? (n(e), fn(e)) : (e.portStream = new F(e.portName), e.statusProvider.emit(V.REPLACED, J.LOADING), ln(e).then(t => {
            t === J.READY ? (e.statusProvider.emit(V.EVENT, J.READY), n(e), fn(e)) : n(mn(e.RETRY_THRESHOLD).then(() => An(e)))
          }).catch(on.error))
        }).catch(on.error)
      })
    }
    const hn = ["facebook.com", "instagram.com", "twitter.com", "tiktok.com", "linkedin.com", "snapchat.com"];
    if (function({
        hostname: e = location.hostname
      }) {
        return hn.some(n => e === n || e.endsWith("." + n))
      }({
        hostname: new URL(window.location.origin).hostname
      })) throw Error("Injection blocked for this domain");
    const dn = "in_page_channel_" + e(6);
    ! function(e) {
      const n = document.head || document.documentElement,
        t = document.createElement("div");
      t.id = "in-page-channel-node-id", t.setAttribute("data-channel-name", e), n.insertBefore(t, n.children[0])
    }(dn);
    const vn = new class extends _ {
        constructor(e) {
          super(), this.port = new P(e), this.port.addEventListener("message", e => {
            const n = e.method;
            !n || !this.listeners[n] || this.listeners[n].forEach(n => n(e))
          })
        }
        listen(e) {
          const n = n => {
            e(n)
          };
          return this.port.addEventListener("message", n), () => this.port.removeEventListener("message", n)
        }
        send(e) {
          return D(this, null, function*() {
            yield this.port.postMessage(e)
          })
        }
        disconnect() {
          return D(this, null, function*() {
            yield this.port.close()
          })
        }
      }(dn),
      pn = {
        portName: dn,
        checking: !1,
        missCount: 0,
        THRESHOLD: 1e4,
        FIRST_TIME_WAIT: 200,
        RETRY_THRESHOLD: 400,
        MAX_MISS_RECONNECT: 1,
        statusProvider: new V
      },
      wn = new Proxy({}, {
        get: (e, n, t) => Reflect.get(pn.portStream, n, t)
      });
    let bn;
    (function() {
      return ((e, n, t) => new Promise((n, r) => {
        var i = e => {
            try {
              s(t.next(e))
            } catch (e) {
              r(e)
            }
          },
          o = e => {
            try {
              s(t.throw(e))
            } catch (e) {
              r(e)
            }
          },
          s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
        s((t = t.apply(e, null)).next())
      }))(this, 0, function*() {
        function e(n, t) {
          return new Promise(r => {
            n.statusProvider.status === J.READY ? r(t()) : setTimeout(() => r(e(n, t)), n.THRESHOLD)
          })
        }
        pn.statusProvider.on(V.REPLACED, () => {
          bn && bn(), bn = wn.listen(e => {
            var n;
            return (null == (n = e.method) ? void 0 : n.endsWith("_callback")) && vn.send(e)
          })
        }), vn.listen(n => {
          var t;
          if (null == (t = n.method) || !t.endsWith("_callback")) return e(pn, () => wn.send(n))
        }), U.runtime.onMessage.addListener(e => vn.send(e)), yield An(pn)
      })
    })().catch(on.error).then(() => on.debug("content started"))
  })()
})();
