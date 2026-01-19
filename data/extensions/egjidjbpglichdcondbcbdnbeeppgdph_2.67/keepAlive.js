try {
  let r = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    s = (new r.Error).stack;
  s && (r.m = r.m || {}, r.m[s] = "0c91c4ae-350c-4170-b301-6b5d809f3ce5", r.A = "sentry-dbid-0c91c4ae-350c-4170-b301-6b5d809f3ce5")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (() => {
  var r = {
      96815: function(r, s) {
        var e, g;
        "u" > typeof globalThis ? globalThis : "u" > typeof self && self, void 0 !== (g = "function" == typeof(e = function(r) {
          "use strict";
          if (!globalThis.chrome?.runtime?.id) throw Error("This script should only be loaded in a browser extension.");
          if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const s = "The message port closed before a response was received.",
              e = r => {
                const e = {
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
                if (0 === Object.keys(e).length) throw Error("api-metadata.json has not been included in browser-polyfill");
                class g extends WeakMap {
                  constructor(r, s = void 0) {
                    super(s), this.createItem = r
                  }
                  get(r) {
                    return this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                  }
                }
                const a = (s, e) => (...g) => {
                    r.runtime.lastError ? s.reject(Error(r.runtime.lastError.message)) : e.singleCallbackArg || 1 >= g.length && !1 !== e.singleCallbackArg ? s.resolve(g[0]) : s.resolve(g)
                  },
                  m = r => 1 == r ? "argument" : "arguments",
                  n = (r, s, e) => new Proxy(s, {
                    apply: (s, g, a) => e.call(g, r, ...a)
                  });
                let A = Function.call.bind({}.hasOwnProperty);
                const t = (r, s = {}, e = {}) => {
                    let g = Object.create(null),
                      i = {
                        has: (s, e) => e in r || e in g,
                        get(i, o, l) {
                          if (o in g) return g[o];
                          if (!(o in r)) return;
                          let c = r[o];
                          if ("function" == typeof c)
                            if ("function" == typeof s[o]) c = n(r, r[o], s[o]);
                            else if (A(e, o)) {
                            let s = ((r, s) => function(e, ...g) {
                              if (g.length < s.minArgs) throw Error(`Expected at least ${s.minArgs} ${m(s.minArgs)} for ${r}(), got ${g.length}`);
                              if (g.length > s.maxArgs) throw Error(`Expected at most ${s.maxArgs} ${m(s.maxArgs)} for ${r}(), got ${g.length}`);
                              return new Promise((m, n) => {
                                if (s.fallbackToNoCallback) try {
                                  e[r](...g, a({
                                    resolve: m,
                                    reject: n
                                  }, s))
                                } catch (a) {
                                  console.warn(r + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", a), e[r](...g), s.fallbackToNoCallback = !1, s.noCallback = !0, m()
                                } else s.noCallback ? (e[r](...g), m()) : e[r](...g, a({
                                  resolve: m,
                                  reject: n
                                }, s))
                              })
                            })(o, e[o]);
                            c = n(r, r[o], s)
                          } else c = c.bind(r);
                          else if ("object" == typeof c && null !== c && (A(s, o) || A(e, o))) c = t(c, s[o], e[o]);
                          else {
                            if (!A(e, "*")) return Object.defineProperty(g, o, {
                              configurable: !0,
                              enumerable: !0,
                              get: () => r[o],
                              set(s) {
                                r[o] = s
                              }
                            }), c;
                            c = t(c, s[o], e["*"])
                          }
                          return g[o] = c, c
                        },
                        set: (s, e, a, m) => (e in g ? g[e] = a : r[e] = a, !0),
                        defineProperty: (r, s, e) => Reflect.defineProperty(g, s, e),
                        deleteProperty: (r, s) => Reflect.deleteProperty(g, s)
                      };
                    return new Proxy(Object.create(r), i)
                  },
                  i = r => ({
                    addListener(s, e, ...g) {
                      s.addListener(r.get(e), ...g)
                    },
                    hasListener: (s, e) => s.hasListener(r.get(e)),
                    removeListener(s, e) {
                      s.removeListener(r.get(e))
                    }
                  }),
                  o = new g(r => "function" != typeof r ? r : function(s) {
                    const e = t(s, {}, {
                      getContent: {
                        minArgs: 0,
                        maxArgs: 0
                      }
                    });
                    r(e)
                  }),
                  l = new g(r => "function" != typeof r ? r : function(s, e, g) {
                    let a, m, n = !1,
                      A = new Promise(r => {
                        a = function(s) {
                          n = !0, r(s)
                        }
                      });
                    try {
                      m = r(s, e, a)
                    } catch (r) {
                      m = Promise.reject(r)
                    }
                    const t = !0 !== m && (r => r && "object" == typeof r && "function" == typeof r.then)(m);
                    return !(!0 !== m && !t && !n || ((t ? m : A).then(r => {
                      g(r)
                    }, r => {
                      let s;
                      s = r && (r instanceof Error || "string" == typeof r.message) ? r.message : "An unexpected error occurred", g({
                        t: !0,
                        message: s
                      })
                    }).catch(r => {
                      console.error("Failed to send onMessage rejected reply", r)
                    }), 0))
                  }),
                  c = ({
                    reject: e,
                    resolve: g
                  }, a) => {
                    r.runtime.lastError ? r.runtime.lastError.message === s ? g() : e(Error(r.runtime.lastError.message)) : a && a.t ? e(Error(a.message)) : g(a)
                  },
                  x = (r, s, e, ...g) => {
                    if (g.length < s.minArgs) throw Error(`Expected at least ${s.minArgs} ${m(s.minArgs)} for ${r}(), got ${g.length}`);
                    if (g.length > s.maxArgs) throw Error(`Expected at most ${s.maxArgs} ${m(s.maxArgs)} for ${r}(), got ${g.length}`);
                    return new Promise((r, s) => {
                      const a = c.bind(null, {
                        resolve: r,
                        reject: s
                      });
                      g.push(a), e.sendMessage(...g)
                    })
                  },
                  u = {
                    devtools: {
                      network: {
                        onRequestFinished: i(o)
                      }
                    },
                    runtime: {
                      onMessage: i(l),
                      onMessageExternal: i(l),
                      sendMessage: x.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                      })
                    },
                    tabs: {
                      sendMessage: x.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                      })
                    }
                  },
                  d = {
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
                return e.privacy = {
                  network: {
                    "*": d
                  },
                  services: {
                    "*": d
                  },
                  websites: {
                    "*": d
                  }
                }, t(r, u, e)
              };
            r.exports = e(chrome)
          } else r.exports = globalThis.browser
        }) ? e(r) : e) && (r.exports = g)
      }
    },
    s = {};

  function e(g) {
    var a = s[g];
    if (void 0 !== a) return a.exports;
    var m = s[g] = {
      exports: {}
    };
    return r[g].call(m.exports, m, m.exports, e), m.exports
  }(() => {
    "use strict";
    var r;
    const s = "object" == typeof chrome && null != (r = null == chrome ? void 0 : chrome.runtime) && r.id ? e(96815) : {},
      g = s;
    g.action = s.action || s.browserAction;
    const a = g;
    ! function r() {
      var s;
      try {
        if (null == (s = a.runtime.lastError) || s.message, window.keepAlivePortAttached) return;
        window.keepAlivePortAttached = !0, a.runtime.connect({
          name: "KEEP_ALIVE"
        }).onDisconnect.addListener(() => {
          window.keepAlivePortAttached = !1, r()
        })
      } catch {}
    }()
  })()
})();
