try {
  let A = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new A.Error).stack;
  n && (A.t = A.t || {}, A.t[n] = "df687af0-e539-44c3-8589-d3bad33a35d3", A.o = "sentry-dbid-df687af0-e539-44c3-8589-d3bad33a35d3")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [15], {
    1824: (A, n, t) => {
      t.d(n, {
        p: () => r
      });
      const r = (0, t(20038).Z0)({
        name: "nft",
        initialState: {
          collections: [],
          collectionsLastSync: null,
          reportedByWallet: {},
          nfts: {}
        },
        reducers: {
          addCollections(A, n) {
            A.collections.push(...n.payload.collections)
          },
          resetCollections(A, n) {
            A.collections = n.payload.collections
          },
          removeCollection(A, n) {
            A.collections = A.collections.filter(A => A.id !== n.payload.id)
          },
          reduceCollectionOwnedTokens(A, n) {
            const t = A.collections.find(A => A.id === n.payload.id);
            t && (t.totalOwnedTokens -= 1)
          },
          reportCollection(A, n) {
            if (n.payload.report) A.reportedByWallet[n.payload.walletId] ? A.reportedByWallet[n.payload.walletId].push(n.payload.collectionId) : A.reportedByWallet[n.payload.walletId] = [n.payload.collectionId];
            else {
              const t = A.reportedByWallet[n.payload.walletId].indexOf(n.payload.collectionId);
              A.reportedByWallet[n.payload.walletId].splice(t, 1)
            }
          },
          resetCollectionItems(A, n) {
            A.nfts[n.payload.collectionId] = {
              lastSync: Date.now(),
              items: n.payload.items
            }
          },
          appendCollectionItems(A, n) {
            n.payload.collectionId in A.nfts && (A.nfts[n.payload.collectionId].items.push(...n.payload.items), A.nfts[n.payload.collectionId].lastSync = Date.now())
          },
          resetItemsByCollectionKey(A) {
            const n = Object.keys(A.nfts);
            for (let t = 0; t < n.length; t++) A.collections.some(A => A.id === n[t]) || delete A.nfts[n[t]]
          },
          touchNFTs(A) {
            A.collectionsLastSync = Date.now()
          }
        }
      })
    },
    2597: (A, n, t) => {
      t.d(n, {
        Dz: () => e,
        b4: () => c,
        uv: () => o
      });
      var r = t(90658),
        a = t(81220);
      class e extends a.X {
        constructor(A) {
          var n;
          super(), this.port = null == (n = r.A.runtime) ? void 0 : n.connect({
            name: A || "extension-message"
          }), this.port || location.reload(), this.port.onMessage.addListener(A => {
            const n = A.method;
            !n || !this.listeners[n] || this.listeners[n].forEach(n => n(A))
          })
        }
        send(A) {
          try {
            this.port.postMessage(A)
          } catch (A) {
            if ("Attempting to use a disconnected port object" === A?.message) return;
            throw A
          }
        }
        listen(A) {
          this.port.onMessage.addListener(n => {
            A(n)
          })
        }
        disconnect() {
          this.port.disconnect()
        }
      }
      const o = A => (r.A.runtime.onMessage.addListener(A), () => r.A.runtime.onMessage.removeListener(A)),
        c = A => r.A.runtime.sendMessage(A)
    },
    3725: (A, n, t) => {
      A.exports = t.p + "8f89158e397ee29236ed.ttf"
    },
    4387: (A, n, t) => {
      t.d(n, {
        W: () => o
      });
      var r = t(56120),
        a = t(20038);
      const e = {
          settings: {
            mev: !0,
            thorchainStreams: !0,
            solanaTurboSwaps: !1,
            environment: r.g.PRODUCTION
          },
          isP2PBannerClosed: !1,
          isUSCitizen: null,
          assets: {
            fromAsset: null,
            toAsset: null
          },
          spendAmount: "",
          swap712Data: {
            isEip712: !1,
            provider: null
          }
        },
        o = (0, a.Z0)({
          name: "swap",
          initialState: e,
          reducers: {
            toggleMev(A) {
              A.settings.mev = !A.settings.mev
            },
            toggleThorchainStreams(A) {
              A.settings.thorchainStreams = !A.settings.thorchainStreams
            },
            toggleSolanaTurboSwaps(A) {
              A.settings.solanaTurboSwaps = !A.settings.solanaTurboSwaps
            },
            updateEnvironment(A, n) {
              A.settings.environment = n.payload
            },
            closeP2PBanner(A) {
              A.isP2PBannerClosed = !0
            },
            setFromAsset(A, n) {
              A.assets.fromAsset = n.payload
            },
            setToAsset(A, n) {
              A.assets.toAsset = n.payload
            },
            setSpendAmount(A, n) {
              A.spendAmount = n.payload
            },
            clearSwapForm(A) {
              A.assets.fromAsset = null, A.assets.toAsset = null, A.spendAmount = ""
            },
            setSwap712Data(A, n) {
              A.swap712Data = n.payload
            },
            setIsUSCitizen(A, n) {
              A.isUSCitizen = n.payload
            }
          }
        })
    },
    4431: (A, n, t) => {
      A.exports = t.p + "8e752fd0ad0ea39bc216.ttf"
    },
    6517: (A, n, t) => {
      t.d(n, {
        Dz: () => a.Dz,
        M8: () => r.M,
        b4: () => a.b4,
        uv: () => a.uv
      }), t(13123), t(32887);
      var r = t(35798),
        a = t(2597)
    },
    11711: (A, n, t) => {
      t.d(n, {
        A: () => a
      });
      var r = t(24439);
      const a = {
        RESET: (0, r.If)("Reset"),
        LOCK: (0, r.If)("Lock"),
        LOCK_CALLBACK: (0, r.If)("Lock_callback"),
        AUTHENTICATE: (0, r.If)("Authenticate"),
        REGISTER_DEVICE: (0, r.If)("RegisterDevice"),
        APP_DISPLAYED: (0, r.If)("AppDisplayed"),
        WARNING_DISPLAYED: (0, r.If)("WarningDisplayed"),
        ICON_THEME_CHANGED: (0, r.If)("IconThemeChanged"),
        OPEN_POPUP: (0, r.If)("OpenPopup"),
        GET_APP_SETTINGS: (0, r.w3)("GetAppSettings"),
        GET_APP_NODES: (0, r.w3)("GetAppNodes"),
        GET_STORE: (0, r.If)("GetStore"),
        GET_REDUX_STATE: (0, r.If)("GetReduxState"),
        DISPATCH_REDUX_ACTION: (0, r.If)("DispatchReduxAction"),
        PING: (0, r.w3)("Ping"),
        GET_ONE_TAP_SETTINGS: (0, r.w3)("GetOneTapSettings"),
        ONE_TAP_DISMISS: (0, r.w3)("OneTapDismiss"),
        ONE_TAP_CONNECT: (0, r.w3)("OneTapConnect"),
        GET_TOKEN_SCANNER_I18N: (0, r.w3)("GetTokenScannerI18n"),
        GET_TOKEN_SCANNER_ENABLED: (0, r.w3)("GetTokenScannerEnabled"),
        GET_TOKEN_BASIC_INFO: (0, r.w3)("GetTokenBasicInfo"),
        GET_TOKEN_MARKET_DATA: (0, r.w3)("GetTokenMarketData"),
        GET_SIMILAR_TOKENS_COUNT: (0, r.w3)("GetSimilarTokensCount"),
        GET_SIMILAR_TOKENS: (0, r.w3)("GetSimilarTokens"),
        OPEN_SWAP_PAGE: (0, r.w3)("OpenSwapPage"),
        GET_FEATURE_FLAG: (0, r.w3)("GetFeatureFlag"),
        SET_TOKEN_SCANNER_ENABLED: (0, r.w3)("SetTokenScannerEnabled"),
        TRACK_ANALYTICS: (0, r.w3)("TrackAnalytics"),
        ANNOUNCEMENT_DISPLAYED: (0, r.If)("AnnouncementDisplayed"),
        FETCH_ANNOUNCEMENTS: (0, r.If)("FetchAnnouncements"),
        FETCH_USER_VIP_TIER_DATA: (0, r.If)("FetchUserVipTierData"),
        FETCH_FUNDING_METHODS: (0, r.If)("FetchFundingMethods"),
        ROUTE_CHANGED: (0, r.If)("RouteChanged")
      }
    },
    12464: (A, n, t) => {
      t.d(n, {
        L: () => c
      });
      var r = t(20038),
        a = t(72519),
        e = t(93155);

      function o(A, n) {
        A.approvalsPerWallet[n] || (A.approvalsPerWallet[n] = {
          items: [],
          lastSync: null
        })
      }
      const c = (0, r.Z0)({
        name: "approvals",
        initialState: {
          approvalsPerWallet: {}
        },
        reducers: {
          startWallet(A, n) {
            o(A, n.payload.walletId)
          },
          setApprovalsLoading(A, n) {
            o(A, n.payload.walletId), A.approvalsPerWallet[n.payload.walletId].loading = !0
          },
          updateApprovals(A, n) {
            o(A, n.payload.walletId);
            const {
              approvals: t,
              walletId: r,
              nextToken: c,
              append: i
            } = n.payload, B = A.approvalsPerWallet[r].items.filter(A => A.risk_analysis.level === a.b.PENDING), s = Date.now(), l = new Set;
            if (B.forEach(A => {
                A.pendingTimestamp && s - A.pendingTimestamp > 6e5 && (l.add(`${A.chain}-${A.address}-${A.asset.id}-${A.spender.address}`), e.A.debug("[ApprovalsStore] Pending approval expired", {
                  chain: A.chain,
                  asset: A.asset.id,
                  spender: A.spender.address
                }))
              }), e.A.debug("[ApprovalsStore] Updating approvals", {
                newCount: t.length,
                existingCount: A.approvalsPerWallet[r].items.length,
                pendingCount: B.length,
                expiredCount: l.size,
                append: i
              }), i) A.approvalsPerWallet[r].items = [...A.approvalsPerWallet[r].items, ...t];
            else {
              const n = [...t];
              B.forEach(A => {
                if (t.some(n => n.chain === A.chain && n.address.toLowerCase() === A.address.toLowerCase() && n.asset.id === A.asset.id && n.spender.address.toLowerCase() === A.spender.address.toLowerCase())) {
                  const t = `${A.chain}-${A.address}-${A.asset.id}-${A.spender.address}`;
                  if (l.has(t)) e.A.debug("[ApprovalsStore] Using backend data for expired approval");
                  else {
                    const t = n.findIndex(n => n.chain === A.chain && n.address.toLowerCase() === A.address.toLowerCase() && n.asset.id === A.asset.id && n.spender.address.toLowerCase() === A.spender.address.toLowerCase());
                    t >= 0 && (n[t] = A, e.A.debug("[ApprovalsStore] Preserving PENDING status"))
                  }
                } else e.A.debug("[ApprovalsStore] Approval revoked on-chain", {
                  chain: A.chain,
                  asset: A.asset.id,
                  spender: A.spender.address
                })
              }), A.approvalsPerWallet[r].items = n
            }
            A.approvalsPerWallet[r].lastSync = (new Date).getTime(), A.approvalsPerWallet[r].nextToken = c, A.approvalsPerWallet[r].error = !1, A.approvalsPerWallet[r].loading = !1
          },
          setApprovalsError(A, n) {
            o(A, n.payload.walletId), A.approvalsPerWallet[n.payload.walletId].error = !0, A.approvalsPerWallet[n.payload.walletId].loading = !1
          },
          clearApprovalsError(A, n) {
            o(A, n.payload.walletId), A.approvalsPerWallet[n.payload.walletId].error = !1
          },
          clearApprovals(A, n) {
            o(A, n.payload.walletId), A.approvalsPerWallet[n.payload.walletId].items = [], A.approvalsPerWallet[n.payload.walletId].lastSync = null, A.approvalsPerWallet[n.payload.walletId].nextToken = void 0
          },
          markApprovalAsPendingRevoke(A, n) {
            o(A, n.payload.walletId);
            const {
              chain: t,
              address: r,
              assetId: c,
              spenderAddress: i,
              walletId: B,
              txHash: s
            } = n.payload, l = A.approvalsPerWallet[B].items.findIndex(A => A.chain === t && A.address.toLowerCase() === r.toLowerCase() && A.asset.id === c && A.spender.address.toLowerCase() === i.toLowerCase());
            0 > l ? e.A.warn("[ApprovalsStore] Approval not found", {
              chain: t,
              assetId: c,
              spenderAddress: i
            }) : (A.approvalsPerWallet[B].items[l].risk_analysis.level = a.b.PENDING, A.approvalsPerWallet[B].items[l].pendingTxHash = s, A.approvalsPerWallet[B].items[l].pendingTimestamp = Date.now(), e.A.debug("[ApprovalsStore] Marked approval as PENDING"))
          },
          removeApproval(A, n) {
            o(A, n.payload.walletId);
            const {
              chain: t,
              address: r,
              assetId: a,
              spenderAddress: e,
              walletId: c
            } = n.payload;
            A.approvalsPerWallet[c].items = A.approvalsPerWallet[c].items.filter(A => !(A.chain === t && A.address.toLowerCase() === r.toLowerCase() && A.asset.id === a && A.spender.address.toLowerCase() === e.toLowerCase()))
          }
        }
      })
    },
    13123: (A, n, t) => {
      t(66644), t(81220).X
    },
    13787: (A, n, t) => {
      A.exports = t.p + "850da36ebaa95f783ceb.otf"
    },
    15314: (A, n, t) => {
      t.d(n, {
        W: () => a
      });
      var r, a = ((r = a || {}).LIGHT = "light", r.DARK = "dark", r)
    },
    17855: (A, n, t) => {
      t.d(n, {
        y: () => l
      });
      var r = t(20038),
        a = Object.defineProperty,
        e = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        i = {}.hasOwnProperty,
        B = {}.propertyIsEnumerable,
        s = (A, n, t) => n in A ? a(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t;
      const l = (0, r.Z0)({
        name: "notification",
        initialState: [],
        reducers: {
          updateNotification(A, n) {
            const t = ((A, n) => e(A, o(n)))(((A, n) => {
                for (var t in n || (n = {})) i.call(n, t) && s(A, t, n[t]);
                if (c)
                  for (var t of c(n)) B.call(n, t) && s(A, t, n[t]);
                return A
              })({}, n.payload), {
                expiresAt: (new Date).getTime() + 6e5
              }),
              r = t.id,
              a = A.findIndex(A => A.id === r);
            0 > a ? A.push(t) : A.splice(a, 1, t)
          },
          removeNotification(A, n) {
            const t = n.payload,
              r = A.findIndex(A => A.id === t); - 1 !== r && A.splice(r, 1)
          },
          cleanAll: () => []
        }
      })
    },
    20015: (A, n, t) => {
      t.r(n), t.d(n, {
        default: () => C
      });
      var r = t(74848),
        a = t(85072),
        e = t.n(a),
        o = t(97825),
        c = t.n(o),
        i = t(77659),
        B = t.n(i),
        s = t(55056),
        l = t.n(s),
        p = t(10540),
        d = t.n(p),
        m = t(41113),
        w = t.n(m),
        E = t(82293),
        y = {};
      y.styleTagTransform = w(), y.setAttributes = l(), y.insert = B().bind(null, "head"), y.domAPI = c(), y.insertStyleElement = d(), e()(E.A, y), E.A && E.A.locals && E.A.locals;
      var g = t(5338),
        b = t(71468),
        u = t(68157),
        h = t(64145),
        v = t(96540);
      const x = () => (0, r.jsxs)("div", {
        className: "loading-page-container",
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          padding: "16px",
          boxSizing: "border-box"
        },
        children: [(0, r.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flex: 1
          },
          children: (0, r.jsx)("div", {
            className: "loading-spinner",
            style: {
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          })
        }), (0, r.jsx)("style", {
          children: "\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n          \n          .loading-page-container {\n            background-color: #FFFFFF;\n          }\n          \n          .loading-spinner {\n            border: 3px solid #2525253D;\n            border-top: 3px solid #0500FF;\n          }\n          \n          /* Dark mode styles */\n          @media (prefers-color-scheme: dark) {\n            .loading-page-container {\n              background-color: #1B1B1C;\n            }\n            \n            .loading-spinner {\n              border-color: #EAECEF3D;\n              border-top-color: #48FF91;\n            }\n          }\n        "
        })]
      });
      var f = t(93155);
      const k = (0, v.lazy)(() => Promise.all([t.e(490), t.e(9609)]).then(t.bind(t, 76338))),
        C = function(A) {
          return ((A, n, t) => new Promise((n, r) => {
            var a = A => {
                try {
                  o(t.next(A))
                } catch (A) {
                  r(A)
                }
              },
              e = A => {
                try {
                  o(t.throw(A))
                } catch (A) {
                  r(A)
                }
              },
              o = A => A.done ? n(A.value) : Promise.resolve(A.value).then(a, e);
            o((t = t.apply(A, null)).next())
          }))(this, 0, function*() {
            yield(0, h.k$)(A);
            const n = yield(0, u.TB)(h.YW), t = document.getElementById("root");

            function a(A, n, t, r, a, e) {
              f.A.debug({
                id: A,
                phase: n,
                actualDuration: t,
                baseDuration: r,
                startTime: a,
                commitTime: e
              })
            }(0, g.createRoot)(t).render((0, r.jsx)(b.Kq, {
              store: n,
              children: (0, r.jsx)(v.Suspense, {
                fallback: (0, r.jsx)(v.Profiler, {
                  id: "LoadingPage",
                  onRender: a,
                  children: (0, r.jsx)(x, {})
                }),
                children: (0, r.jsx)(v.Profiler, {
                  id: "App",
                  onRender: a,
                  children: (0, r.jsx)(k, {})
                })
              })
            }))
          })
        }
    },
    23230: (A, n, t) => {
      A.exports = t.p + "5f36217efbb124e1f06e.otf"
    },
    24439: (A, n, t) => {
      t.d(n, {
        If: () => o,
        w3: () => c
      });
      var r, a = ((r = a || {}).INTERNAL = "INTERNAL", r.PUBLIC = "PUBLIC", r);

      function e(A, n) {
        return `${n}_${A}`
      }

      function o(A) {
        return e(A, "INTERNAL")
      }

      function c(A) {
        return e(A, "PUBLIC")
      }
    },
    26113: (A, n, t) => {
      t.d(n, {
        Z: () => r,
        sP: () => a,
        yy: () => e
      });
      const r = () => {},
        a = A => {
          const n = window.open(A, "_blank", "noopener nofollow noreferrer");
          n && (n.opener = null)
        },
        e = A => new Promise(n => setTimeout(n, A))
    },
    28398: (A, n, t) => {
      t.d(n, {
        A: () => E,
        l: () => d
      });
      var r, a = t(37724),
        e = t(93155),
        o = t(20038),
        c = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        B = {}.hasOwnProperty,
        s = {}.propertyIsEnumerable,
        l = (A, n, t) => n in A ? c(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        p = (A, n) => {
          for (var t in n || (n = {})) B.call(n, t) && l(A, t, n[t]);
          if (i)
            for (var t of i(n)) s.call(n, t) && l(A, t, n[t]);
          return A
        },
        d = ((r = d || {}).MAIN = "MAIN", r.CUSTOM = "CUSTOM", r);
      const m = p(p(p({
        items: {},
        customItems: {},
        blockchainsLastSync: null,
        filterByBlockchain: null
      }, a.KW), a.Ed), a.Mh);

      function w(A, n, t) {
        var r;
        return !(null == (r = {
          CUSTOM: A.customItems,
          MAIN: A.items
        } [t]) || !r[n])
      }
      const E = (0, o.Z0)({
        name: "blockchains",
        initialState: m,
        reducers: {
          updateBlockchains(A, n) {
            n.payload.forEach(n => {
              A.items[n.id] = n, delete A.customItems[n.id]
            })
          },
          setSelectedBlockchainIfNone(A, n) {
            const {
              id: t,
              selectedBlockchainType: r
            } = n.payload;
            if (!A.selectedBlockchain) {
              if (w(A, t, r)) return A.selectedBlockchainType = n.payload.selectedBlockchainType, void(A.selectedBlockchain = n.payload.id);
              e.A.error(`Invalid blockchain for selected type ${t}:${r}`)
            }
          },
          setSelectedBlockchain(A, n) {
            const {
              id: t,
              selectedBlockchainType: r
            } = n.payload;
            if (w(A, t, r)) return A.selectedBlockchainType = n.payload.selectedBlockchainType, void(A.selectedBlockchain = n.payload.id);
            e.A.error(`Invalid blockchain for selected type ${t}:${r}`)
          },
          setFilteringBlockchain(A, n) {
            A.filterByBlockchain = n.payload
          },
          addCustomBlockchain(A, n) {
            A.customItems[n.payload.id] = n.payload
          },
          removeCustomBlockchain(A, n) {
            delete A.customItems[n.payload]
          },
          touchBlockchains(A) {
            A.blockchainsLastSync = (new Date).getTime()
          }
        }
      })
    },
    31335: (A, n, t) => {
      t.d(n, {
        i: () => B
      });
      var r = t(88407),
        a = t(98649),
        e = t(80577),
        o = t(26113),
        c = t(93155),
        i = t(6517);

      function B(A) {
        return new Promise(n => {
          (0, e.r)(A).then(t => {
            t === a.k.READY ? (n(A), (0, r.L)(A)) : (A.portStream = new i.Dz(A.portName), A.statusProvider.emit(a.V.REPLACED, a.k.LOADING), (0, e.r)(A).then(t => {
              t === a.k.READY ? (A.statusProvider.emit(a.V.EVENT, a.k.READY), n(A), (0, r.L)(A)) : n((0, o.yy)(A.RETRY_THRESHOLD).then(() => B(A)))
            }).catch(c.A.error))
          }).catch(c.A.error)
        })
      }
    },
    31357: (A, n, t) => {
      t.d(n, {
        s: () => b
      });
      var r = t(6517),
        a = t(20038),
        e = t(93726),
        o = t(94323),
        c = t(83397),
        i = t(65509),
        B = Object.defineProperty,
        s = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        m = {}.propertyIsEnumerable,
        w = (A, n, t) => n in A ? B(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        E = (A, n) => {
          for (var t in n || (n = {})) d.call(n, t) && w(A, t, n[t]);
          if (p)
            for (var t of p(n)) m.call(n, t) && w(A, t, n[t]);
          return A
        },
        y = (A, n) => s(A, l(n));
      const g = {
          locale: (0, c.p)(),
          isDefaultWallet: !0,
          loadingTranslations: !1,
          developerSettings: {
            isCustomNonceEnabled: !1,
            isAdvancedGasControlsEnabled: !1,
            isAdvancedTransactionDataEnabled: !1,
            isEthSignEnabled: !1,
            isExportPrivateKeyEnabled: !1
          },
          pushNotifications: {
            isPushEnabled: !0,
            isSendAndReceiveEnabled: !0,
            topics: {
              product_announcement: !0
            }
          },
          privacy: {
            isAnalyticsEnabled: !0,
            hideBalancesOnDashboard: !1
          },
          ui: {
            colorMode: e.X.SYSTEM
          },
          layout: {
            tokenCellLayout: i.e.LAYOUT_3,
            hideNFTs: !1,
            hideLowBalanceAssets: !0
          },
          translations: {},
          translationsLastFetch: {},
          preferSidePanel: !0,
          baseCurrency: "USD",
          passkeyId: null,
          isPasswordGenerated: !1
        },
        b = (0, a.Z0)({
          name: "settings",
          initialState: g,
          reducers: {
            setLanguage(A, n) {
              A.locale = n.payload
            },
            setLoadingTranslations(A, n) {
              A.loadingTranslations = n.payload
            },
            setIsCustomNonceEnabled(A, n) {
              A.developerSettings.isCustomNonceEnabled = n.payload
            },
            setIsAdvancedGasControlsEnabled(A, n) {
              A.developerSettings.isAdvancedGasControlsEnabled = n.payload
            },
            setIsAdvancedTransactionDataEnabled(A, n) {
              A.developerSettings.isAdvancedTransactionDataEnabled = n.payload
            },
            setPushNotifications(A, n) {
              A.pushNotifications.isPushEnabled = n.payload, A.pushNotifications.isSendAndReceiveEnabled = n.payload
            },
            setNotificationTopics(A, n) {
              A.pushNotifications.topics = n.payload
            },
            setTranslations(A, n) {
              A.translations[A.locale] = n.payload.messages
            },
            setTranslationsLastFetch(A, n) {
              A.translationsLastFetch[n.payload.language] = n.payload.timestamp
            },
            setIsDefaultWallet(A, n) {
              (0, r.M8)({
                method: o.A.DEFAULT_WALLET_CHANGED,
                data: {
                  params: n.payload
                }
              }), A.isDefaultWallet = n.payload
            },
            setIsAnalyticsEnabled(A, n) {
              A.privacy = y(E({}, A.privacy), {
                isAnalyticsEnabled: n.payload
              })
            },
            setHideBalancesOnDashboard(A, n) {
              A.privacy = y(E({}, A.privacy), {
                hideBalancesOnDashboard: n.payload
              })
            },
            setUIColorMode(A, n) {
              A.ui = y(E({}, A.ui), {
                colorMode: n.payload
              })
            },
            toggleSidePanelPreference(A, n) {
              A.preferSidePanel = n.payload
            },
            setBaseCurrency(A, n) {
              A.baseCurrency = n.payload
            },
            setPasskeyId(A, n) {
              A.passkeyId = n.payload
            },
            setIsExportPrivateKeyEnabled(A, n) {
              A.developerSettings.isExportPrivateKeyEnabled = n.payload
            },
            setIsPasswordGenerated(A, n) {
              A.isPasswordGenerated = n.payload
            },
            setTokenCellLayout(A, n) {
              A.layout.tokenCellLayout = n.payload
            },
            setHideNFTs(A, n) {
              A.layout.hideNFTs = n.payload
            },
            setHideLowBalanceAssets(A, n) {
              A.layout.hideLowBalanceAssets = n.payload
            },
            setLayoutSettings(A, n) {
              A.layout = n.payload
            }
          }
        })
    },
    32887: (A, n, t) => {
      var r = t(37007);
      t.n(r)
    },
    35328: (A, n, t) => {
      t.d(n, {
        b: () => l
      });
      var r = t(20038),
        a = Object.defineProperty,
        e = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        i = {}.hasOwnProperty,
        B = {}.propertyIsEnumerable,
        s = (A, n, t) => n in A ? a(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t;
      const l = (0, r.Z0)({
        name: "dapps",
        initialState: {
          selectedAddress: null,
          selectedPublicKey: null,
          connectedSites: [],
          blacklistedSites: [],
          dapps: {},
          connectedDapps: {}
        },
        reducers: {
          addDapp(A, n) {
            const t = n.payload,
              {
                origin: r
              } = t;
            return Object.values(A.dapps).find(A => A.origin === r) || (A.dapps[t.id] = t), A
          },
          addConnectedDapp(A, n) {
            const {
              id: t,
              chainId: r,
              networkId: a,
              accountId: e,
              address: o,
              walletId: c
            } = n.payload;
            return A.connectedDapps[t] || (A.connectedDapps[t] = []), A.connectedDapps[t].find(A => A.accountId === e && A.address === o) || A.connectedDapps[t].push({
              id: t,
              date: (new Date).getTime(),
              chainId: r,
              networkId: a,
              address: o,
              accountId: e,
              walletId: c
            }), A
          },
          disconnectDapp(A, n) {
            const {
              id: t,
              accountId: r
            } = n.payload, a = A.connectedDapps[t];
            if (!a) return A;
            const e = a.filter(A => A.accountId !== r);
            return A.connectedDapps[t] = e, 0 === e.length && delete A.connectedDapps[t], A
          },
          addBlacklistedSite(A, n) {
            const t = ((A, n) => e(A, o(n)))(((A, n) => {
              for (var t in n || (n = {})) i.call(n, t) && s(A, t, n[t]);
              if (c)
                for (var t of c(n)) B.call(n, t) && s(A, t, n[t]);
              return A
            })({}, n.payload), {
              id: (0, r.Ak)(),
              date: (new Date).getTime()
            });
            return A.blacklistedSites = [...A.blacklistedSites, t], A
          },
          removeBlacklistedSite: (A, n) => (A.blacklistedSites = A.blacklistedSites.filter(A => A.id !== n.payload), A)
        }
      })
    },
    35798: (A, n, t) => {
      t.d(n, {
        M: () => a
      });
      var r = t(90658);
      const a = A => {
        return n = function*() {
          var n;
          const t = null != (n = yield r.A.tabs.query({})) ? n : [];
          yield Promise.all(t.filter(A => !!A?.id).map(n => r.A.tabs.sendMessage(n.id, A).catch(A => {
            var n;
            null == (n = r.A.runtime.lastError) || n.message
          })))
        }, new Promise((A, t) => {
          var r = A => {
              try {
                e(n.next(A))
              } catch (A) {
                t(A)
              }
            },
            a = A => {
              try {
                e(n.throw(A))
              } catch (A) {
                t(A)
              }
            },
            e = n => n.done ? A(n.value) : Promise.resolve(n.value).then(r, a);
          e((n = n.apply(null, null)).next())
        });
        var n
      }
    },
    37724: (A, n, t) => {
      t.d(n, {
        Ed: () => a,
        KW: () => o,
        Mh: () => e
      });
      var r = t(47236);
      const a = {
          selectedBlockchainOnSolana: "solana",
          selectedBlockchainTypeOnSolana: r.l.MAIN,
          validatorsLastSync: 0
        },
        e = {
          selectedBlockchainOnBinance: "binance",
          selectedBlockchainTypeOnBinance: r.l.MAIN
        },
        o = {
          selectedBlockchain: "",
          selectedBlockchainType: r.l.MAIN
        }
    },
    38208: (A, n, t) => {
      t.d(n, {
        w: () => r
      });
      const r = ["ar", "bg-BG", "my-MM", "zh-CN", "zh-TC", "cs-CZ", "da-DK", "en", "fr", "de", "el-GR", "id", "it", "ja", "kk-KZ", "ko", "lv-LV", "lo-LA", "pl-PL", "pt", "pt-BR", "ro-RO", "ru", "si-LK", "es-ES", "es-LA", "sv-SE", "tr", "uk-UA", "vi"]
    },
    39094: (A, n, t) => {
      A.exports = t.p + "f0be7d273c3543fe4c4a.ttf"
    },
    42836: (A, n, t) => {
      t.d(n, {
        Z: () => r
      });
      const r = (0, t(20038).Z0)({
        name: "fiat",
        initialState: {
          rates: {},
          items: []
        },
        reducers: {
          updateFiats(A, n) {
            for (const t of n.payload) {
              const n = A.items.findIndex(A => A.id === t.id);
              0 > n ? A.items.push(t) : A.items.splice(n, 1, t)
            }
          }
        }
      })
    },
    44872: (A, n, t) => {
      A.exports = t.p + "e87a6b531eb2210f7d44.ttf"
    },
    45668: (A, n, t) => {
      function r(A, n) {
        return "mnemonic" === A && (A = "Seed Phrase"), `${A.charAt(0).toUpperCase()+A.slice(1)} ${n.reduce((n,t)=>t.type===A?++n:n,1)}`
      }
      t.d(n, {
        k: () => r
      })
    },
    47236: (A, n, t) => {
      t.d(n, {
        l: () => a
      });
      var r, a = ((r = a || {}).MAIN = "MAIN", r.CUSTOM = "CUSTOM", r)
    },
    48275: (A, n, t) => {
      t.d(n, {
        P: () => B
      });
      var r = t(98939),
        a = t(11711),
        e = t(93155);
      let o = 0,
        c = new Map,
        i = c;
      class B {
        constructor(A) {
          this.dispatch = A => (e.A.getLogger(B.name).debug("Dispatching action " + JSON.stringify(A)), this.transport.emit(a.A.DISPATCH_REDUX_ACTION, A).catch(e.A.error), A), this.ensureCanMutateNextListeners = () => {
            i === c && (i = new Map, c.forEach((A, n) => {
              i.set(n, A)
            }))
          }, this.getState = () => this.state, this.subscribe = A => {
            this.ensureCanMutateNextListeners();
            const n = o++;
            i.set(n, A);
            let t = !0;
            return () => {
              t && (t = !1, this.ensureCanMutateNextListeners(), i.delete(n), c = null)
            }
          }, this.replaceReducer = A => {
            throw Error("Method not implemented.")
          }, this.setTransport(A)
        }
        setTransport(A) {
          this.transport = A, this.transport.listen(A => {
            A.method === r.TF && (this.state = A.data, (c = i).forEach(A => {
              A()
            }))
          })
        }
        boot() {
          return A = this, n = function*() {
            try {
              const A = yield this.transport.emit(a.A.GET_REDUX_STATE);
              this.state = A
            } catch (A) {
              return e.A.error(A)
            }
          }, new Promise((t, r) => {
            var a = A => {
                try {
                  o(n.next(A))
                } catch (A) {
                  r(A)
                }
              },
              e = A => {
                try {
                  o(n.throw(A))
                } catch (A) {
                  r(A)
                }
              },
              o = A => A.done ? t(A.value) : Promise.resolve(A.value).then(a, e);
            o((n = n.apply(A, null)).next())
          });
          var A, n
        } [Symbol.observable]() {
          throw Error("Method not implemented.")
        }
      }
    },
    48305: (A, n, t) => {
      t.d(n, {
        u: () => E
      });
      var r = t(20038),
        a = t(98939),
        e = t(45668),
        o = t(93155),
        c = Object.defineProperty,
        i = Object.defineProperties,
        B = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        l = {}.hasOwnProperty,
        p = {}.propertyIsEnumerable,
        d = (A, n, t) => n in A ? c(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        m = (A, n) => {
          for (var t in n || (n = {})) l.call(n, t) && d(A, t, n[t]);
          if (s)
            for (var t of s(n)) p.call(n, t) && d(A, t, n[t]);
          return A
        },
        w = (A, n) => i(A, B(n));
      const E = (0, r.Z0)({
        name: "wallet",
        initialState: {
          walletId: null,
          wallets: {},
          accounts: {},
          accountsPerWallet: {},
          balancesPerWallet: {},
          balancesPerWalletAccount: {},
          switching: !1,
          refreshLastRun: null,
          refreshingBalance: !1,
          addressBook: {},
          selectedAccountId: ""
        },
        reducers: {
          setSwitching(A, n) {
            A.switching = n.payload
          },
          changeWalletName(A, n) {
            A.wallets[n.payload.id].name = n.payload.name
          },
          setWalletId(A, n) {
            A.walletId = n.payload.walletId, A.selectedAccountId = n.payload.accountId
          },
          addToBalancesArray(A, n) {
            A.balancesPerWalletAccount[n.payload.id] = {}, A.balancesPerWalletAccount[n.payload.id][A.selectedAccountId] = A.balancesPerWalletAccount[n.payload.id][A.selectedAccountId] || {}
          },
          addWallet(A, n) {
            Object.keys(A.wallets).length < a.Dv ? (A.wallets[n.payload.id] = {
              balance: "0",
              id: n.payload.id,
              registered: !1,
              type: n.payload.type,
              name: n.payload.name || (0, e.k)(n.payload.type, Object.values(A.wallets)),
              isImported: n.payload.isImported
            }, A.balancesPerWalletAccount[n.payload.id] = {}, A.balancesPerWalletAccount[n.payload.id][n.payload.accountId] = {}, A.accountsPerWallet[n.payload.id] = {}, A.accountsPerWallet[n.payload.id][n.payload.accountId] = {}) : o.A.error("Maximum wallets amount reached")
          },
          removeWallet(A, n) {
            delete A.wallets[n.payload], delete A.accountsPerWallet[n.payload], A.walletId = Object.keys(A.wallets)[0], A.walletId && (A.selectedAccountId = Object.keys(A.accountsPerWallet[A.walletId])[0]), Object.keys(A.accountsPerWallet).forEach(t => {
              t === n.payload && delete A.accountsPerWallet[t]
            })
          },
          setWalletAsRegistered(A, n) {
            A.accountsPerWallet[n.payload.walletId][n.payload.accountId] = w(m({}, A.accountsPerWallet[n.payload.walletId][n.payload.accountId]), {
              registered: !0
            })
          },
          setWalletCoinsAsRegistered(A, n) {
            A.accountsPerWallet[n.payload.walletId][n.payload.accountId] = w(m({}, A.accountsPerWallet[n.payload.walletId][n.payload.accountId]), {
              coinsRegistered: !0
            })
          },
          setCoinsAsRegistered(A, n) {
            const t = A.accountsPerWallet[n.payload.walletId][n.payload.accountId].coinsRegisteredMap || {};
            Object.keys(n.payload.records).forEach(A => {
              t[A] = n.payload.records[A]
            }), A.accountsPerWallet[n.payload.walletId][n.payload.accountId].coinsRegisteredMap = t
          },
          removeAccount(A, n) {
            const {
              walletId: t,
              accountId: r
            } = n.payload;
            if (Object.values(A.accountsPerWallet[t]).find(A => A.id === r)) return A.accountsPerWallet[t] && delete A.accountsPerWallet[t][r], A.balancesPerWalletAccount[t] && delete A.balancesPerWalletAccount[t][r], A;
            o.A.error(`Account with id ${r} not found in wallet ${t}`)
          },
          addAccounts(A, n) {
            A.accountsPerWallet[n.payload.walletId][n.payload.accountId] = A.accountsPerWallet[n.payload.walletId][n.payload.accountId] || {}, A.accountsPerWallet[n.payload.walletId][n.payload.accountId] = {
              id: n.payload.accountId,
              items: n.payload.accounts,
              derivationIndex: n.payload.derivationIndex,
              name: n.payload.name,
              registered: !1
            }, A.balancesPerWalletAccount[n.payload.walletId] || (A.balancesPerWalletAccount[n.payload.walletId] = {}), A.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] || (A.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] = {})
          },
          pushAccounts(A, n) {
            A.accountsPerWallet[n.payload.walletId] || (A.accountsPerWallet[n.payload.walletId] = {}), A.accountsPerWallet[n.payload.walletId][n.payload.accountId] || (A.accountsPerWallet[n.payload.walletId][n.payload.accountId] = {}), A.accountsPerWallet[n.payload.walletId][n.payload.accountId].items = m(m({}, A.accountsPerWallet[n.payload.walletId][n.payload.accountId].items), n.payload.accounts)
          },
          setRefreshingBalance(A, n) {
            A.refreshingBalance = n.payload
          },
          setSeedPhraseBackupRequired(A, n) {
            A.wallets[n.payload.walletId].seedPhraseBackupRequired = n.payload.backupRequired
          },
          setBalances(A, n) {
            n.payload.balances.forEach(t => {
              const {
                balance: r,
                staked: a,
                rewards: e,
                pending: o,
                frozen: c,
                locked: i,
                blocked: B,
                claimable: s,
                transferable: l,
                inscription: p,
                coinId: d,
                address: m,
                dust: w,
                blockchainId: E,
                assetId: y,
                bandwidth: g,
                energy: b,
                reserved: u
              } = t;
              A.balancesPerWalletAccount[n.payload.walletId] || (A.balancesPerWalletAccount[n.payload.walletId] = {}), A.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] || (A.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] = {}), A.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId][y] = {
                balance: r,
                staked: a,
                rewards: e,
                pending: o,
                frozen: c,
                locked: i,
                blocked: B,
                claimable: s,
                transferable: l,
                inscription: p,
                dust: w,
                coinId: d,
                address: m,
                blockchainId: E,
                bandwidth: g,
                energy: b,
                reserved: u
              }
            })
          },
          updateRefreshLastRun(A, n) {
            A.refreshLastRun = n.payload
          },
          updateAssetsLastRun(A, n) {
            A.wallets[n.payload.walletId].assetsLastRun = n.payload.timestamp
          },
          addAddressBookWallet(A, n) {
            A.addressBook[n.payload.id] = n.payload
          },
          setAddressBookWallet(A, n) {
            A.addressBook[n.payload.id] = n.payload
          },
          removeAddressBookWallet(A, n) {
            const t = m({}, A.addressBook);
            delete t[n.payload], A.addressBook = t
          },
          removeAddressBookWalletAddress(A, n) {
            const t = m({}, A.addressBook);
            delete t[n.payload.walletId].addresses[n.payload.coinId], A.addressBook[n.payload.walletId] = t[n.payload.walletId]
          },
          updateAccountName(A, n) {
            A.accountsPerWallet[n.payload.walletId][n.payload.accountId].name = n.payload.name
          }
        }
      })
    },
    52598: (A, n, t) => {
      A.exports = t.p + "c51b145d8cf66a74cc74.ttf"
    },
    52781: (A, n, t) => {
      A.exports = t.p + "8583bd6fce14da34ea43.ttf"
    },
    52856: (A, n, t) => {
      t.d(n, {
        B: () => w
      });
      var r = t(93155),
        a = t(20038),
        e = t(15192),
        o = Object.defineProperty,
        c = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        B = Object.getOwnPropertySymbols,
        s = {}.hasOwnProperty,
        l = {}.propertyIsEnumerable,
        p = (A, n, t) => n in A ? o(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        d = (A, n) => {
          for (var t in n || (n = {})) s.call(n, t) && p(A, t, n[t]);
          if (B)
            for (var t of B(n)) l.call(n, t) && p(A, t, n[t]);
          return A
        },
        m = (A, n) => c(A, i(n));
      const w = (0, a.Z0)({
        name: "tx",
        initialState: {
          gasFees: {
            baseFeeTrend: "",
            estimatedBaseFee: "",
            high: {
              suggestedMaxPriorityFeePerGas: "",
              suggestedMaxFeePerGas: "",
              minWaitTimeEstimate: 0,
              maxWaitTimeEstimate: 0
            },
            historicalBaseFeeRange: [],
            historicalPriorityFeeRange: [],
            latestPriorityFeeRange: [],
            low: {
              suggestedMaxPriorityFeePerGas: "",
              suggestedMaxFeePerGas: "",
              minWaitTimeEstimate: 0,
              maxWaitTimeEstimate: 0
            },
            medium: {
              suggestedMaxPriorityFeePerGas: "",
              suggestedMaxFeePerGas: "",
              minWaitTimeEstimate: 0,
              maxWaitTimeEstimate: 0
            },
            networkCongestion: 0,
            priorityFeeTrend: ""
          },
          itemsPerWallet: {},
          fetchedAllChainsTransactionPeriods: {},
          itemsPerWalletAccount: {},
          fetchedTransactionPeriodsByAccount: {},
          fetchedAllChainsTransactionPeriodsByAccount: {}
        },
        reducers: {
          startWallet(A, n) {
            A.itemsPerWalletAccount[n.payload.walletId] = {}, A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []
          },
          updateTransactionStatus(A, n) {
            const {
              id: t,
              status: a,
              fee: o,
              walletId: c,
              hash: i,
              accountId: B
            } = n.payload;
            A.itemsPerWalletAccount[c] || (A.itemsPerWalletAccount[c] = {}), A.itemsPerWalletAccount[c][B] || (A.itemsPerWalletAccount[c][B] = []);
            const s = A.itemsPerWalletAccount[c][B],
              l = s.findIndex(A => A.hash === t);
            0 > l ? r.A.warn("Trying to update transaction out of range " + t) : s[l] = m(d({}, s[l]), {
              status: a,
              fee: (0, e.z)(o[0]).gt(0) ? o : s[l].fee,
              initialFee: s[l].fee,
              hash: i || s[l].hash,
              initialHash: s[l].initialHash,
              solanaFlexGasRequestId: s[l].solanaFlexGasRequestId
            }), A.itemsPerWalletAccount[c][B] = s
          },
          updateTx(A, n) {
            var t, r;
            const a = n.payload.item;
            A.itemsPerWalletAccount[n.payload.walletId] || (A.itemsPerWalletAccount[n.payload.walletId] = {}), A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const e = null != (r = null == (t = A.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : t[n.payload.accountId]) ? r : [],
              o = e.findIndex(A => A.hash === a.hash);
            0 > o ? e.push(a) : e[o] = m(d({}, a), {
              nft: e[o].nft
            }), A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = e
          },
          removeAccountTransactions(A, n) {
            A.itemsPerWalletAccount[n.payload.walletId] && delete A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId], A.fetchedTransactionPeriodsByAccount[n.payload.walletId] && delete A.fetchedTransactionPeriodsByAccount[n.payload.walletId][n.payload.accountId], A.fetchedAllChainsTransactionPeriodsByAccount[n.payload.walletId] && delete A.fetchedAllChainsTransactionPeriodsByAccount[n.payload.walletId][n.payload.accountId]
          },
          updateTxs(A, n) {
            var t, r;
            A.itemsPerWalletAccount[n.payload.walletId] || (A.itemsPerWalletAccount[n.payload.walletId] = {}), A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const a = null != (r = null == (t = A.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : t[n.payload.accountId]) ? r : [];
            n.payload.items.forEach(A => {
              const n = a.findIndex(n => n.hash === A.hash);
              0 > n ? a.push(A) : a[n] = m(d({}, A), {
                nft: a[n].nft,
                solanaFlexGasRequestId: a[n].solanaFlexGasRequestId
              })
            }), A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = a
          },
          updateGasFees(A, n) {
            A.gasFees = n.payload
          },
          updateCachedTransactionsPeriod(A, n) {
            const {
              selectedWalletId: t,
              assetId: r,
              from: a,
              to: e,
              nextToken: o,
              accountId: c
            } = n.payload;
            A.fetchedTransactionPeriodsByAccount[t] || (A.fetchedTransactionPeriodsByAccount[t] = {}), A.fetchedTransactionPeriodsByAccount[t][c] || (A.fetchedTransactionPeriodsByAccount[t][c] = {}), A.fetchedTransactionPeriodsByAccount[t][c][r] = {
              from: a,
              to: e,
              nextToken: o
            }
          },
          updateAllChainsCachedTransactionsPeriod(A, n) {
            const {
              selectedWalletId: t,
              blockchains: r,
              from: a,
              to: e,
              nextToken: o,
              accountId: c
            } = n.payload;
            A.fetchedAllChainsTransactionPeriodsByAccount[t] || (A.fetchedAllChainsTransactionPeriodsByAccount[t] = {}), A.fetchedAllChainsTransactionPeriodsByAccount[t][c] = {
              from: a,
              to: e,
              blockchains: r,
              nextToken: o
            }
          },
          removeTxsForNetwork(A, n) {
            var t, r;
            A.itemsPerWalletAccount[n.payload.walletId] || (A.itemsPerWalletAccount[n.payload.walletId] = {}), A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const a = null != (r = null == (t = A.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : t[n.payload.accountId]) ? r : [];
            A.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = a.filter(A => A.blockchain.id !== n.payload.blockchainId)
          }
        }
      })
    },
    56120: (A, n, t) => {
      t.d(n, {
        g: () => a
      });
      var r, a = ((r = a || {}).STAGING = "staging", r.PRODUCTION = "production", r)
    },
    58464: (A, n, t) => {
      t.d(n, {
        H: () => m
      });
      var r = t(20038),
        a = Object.defineProperty,
        e = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        i = {}.hasOwnProperty,
        B = {}.propertyIsEnumerable,
        s = (A, n, t) => n in A ? a(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        l = (A, n) => {
          for (var t in n || (n = {})) i.call(n, t) && s(A, t, n[t]);
          if (c)
            for (var t of c(n)) B.call(n, t) && s(A, t, n[t]);
          return A
        },
        p = (A, n) => e(A, o(n));

      function d(A, n) {
        A.assetsPerWallet[n] || (A.assetsPerWallet[n] = {
          itemsV2: [],
          testItems: [],
          assetsLastSync: null
        })
      }
      const m = (0, r.Z0)({
        name: "asset",
        initialState: {
          assetsLastSync: null,
          assetsPerWallet: {},
          assetsWithBalanceAlreadyEnabled: {},
          assetsToBeMigrated: {
            items: [],
            lastSync: null
          },
          cexFundingAssets: {},
          marketSentimentSupportedCrypto: []
        },
        reducers: {
          startWallet(A, n) {
            d(A, n.payload.walletId)
          },
          updateAssetsV2(A, n) {
            d(A, n.payload.walletId);
            const t = A.assetsPerWallet[n.payload.walletId].itemsV2;
            for (const A of n.payload.assets) {
              const n = t.findIndex(n => n.blockchainId === A.blockchainId && n.address === A.address),
                r = p(l({}, A), {
                  name: "Binance" === A.name ? "BNB Chain" : A.name
                });
              0 > n ? t.push(r) : t.splice(n, 1, r)
            }
          },
          updateMigratableAssets(A, n) {
            A.assetsToBeMigrated.items = n.payload, A.assetsToBeMigrated.lastSync = (new Date).getTime()
          },
          removeAssetsForBlockchain(A, n) {
            d(A, n.payload.walletId);
            for (const t of Object.keys(A.assetsPerWallet)) A.assetsPerWallet[t].itemsV2 = A.assetsPerWallet[t].itemsV2.filter(A => A.blockchainId !== n.payload.blockchainId)
          },
          setIsShownInHomeScreen(A, n) {
            d(A, n.payload.walletId);
            const t = A.assetsPerWallet[n.payload.walletId].itemsV2.findIndex(A => A.assetId === n.payload.item.assetId);
            0 > t ? A.assetsPerWallet[n.payload.walletId].itemsV2.push(p(l({}, n.payload.item), {
              isShownInHomeScreen: !0
            })) : A.assetsPerWallet[n.payload.walletId].itemsV2.splice(t, 1, p(l({}, A.assetsPerWallet[n.payload.walletId].itemsV2[t]), {
              isShownInHomeScreen: !A.assetsPerWallet[n.payload.walletId].itemsV2[t].isShownInHomeScreen
            }))
          },
          setIsShownInHomeScreenBulk(A, n) {
            d(A, n.payload.walletId), n.payload.items.forEach(t => m.caseReducers.setIsShownInHomeScreen(A, {
              payload: {
                item: t,
                walletId: n.payload.walletId
              },
              type: n.type
            }))
          },
          touchAssets(A) {
            A.assetsLastSync = (new Date).getTime()
          },
          setAssetsWithBalanceAlreadyEnabled(A, n) {
            A.assetsWithBalanceAlreadyEnabled[n.payload.currentWalletId] = n.payload.assetsEnabled
          },
          setMarketSentimentSupportedCrypto(A, n) {
            A.marketSentimentSupportedCrypto = n.payload
          },
          setIsAssetRegistered(A, n) {
            const t = A.assetsPerWallet[n.payload.walletId].itemsV2.findIndex(A => A.assetId === n.payload.assetId);
            t >= 0 && (A.assetsPerWallet[n.payload.walletId].itemsV2[t].isRegistered = n.payload.isRegistered)
          },
          setCexFundingAssets(A, n) {
            A.cexFundingAssets[n.payload.providerId] = n.payload.assets
          }
        }
      })
    },
    60469: (A, n, t) => {
      A.exports = t.p + "86c330c66f7333ff6202.ttf"
    },
    61855: (A, n, t) => {
      t.d(n, {
        A: () => w
      });
      var r = t(15314),
        a = t(20038),
        e = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        B = {}.hasOwnProperty,
        s = {}.propertyIsEnumerable,
        l = (A, n, t) => n in A ? e(A, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : A[n] = t,
        p = (A, n) => {
          for (var t in n || (n = {})) B.call(n, t) && l(A, t, n[t]);
          if (i)
            for (var t of i(n)) s.call(n, t) && l(A, t, n[t]);
          return A
        },
        d = (A, n) => o(A, c(n));
      const m = {
          deviceId: null,
          hashKey: null,
          firstTime: !0,
          authenticated: !1,
          walletNewlyImported: !1,
          showEmptyWalletImportedModal: !1,
          lockTimeInMinutes: 10,
          storageVersion: "",
          migrated: !1,
          newAuthMigrated: !0,
          warningDisplayed: !1,
          warningDisplayedSent: !1,
          iconTheme: r.W.LIGHT,
          icon: "",
          authenticating: !1,
          legacyDeviceId: null,
          authIdentifier: "",
          newFlag: {
            EARN: !1
          },
          featureFlags: null,
          toasts: [],
          sidePanelOpened: !1,
          countryCode: "",
          oneTap: {
            dismissCount: 0,
            lastTimeClosed: 0,
            isOneTapDisabled: !1
          },
          analyticsQueue: [],
          lastTimeClosedWalletModal: 0,
          preventAutoTriggerBiometrics: !1,
          navigationOrigin: void 0,
          homeScreenAssetsExpanded: !0,
          tokenScannerEnabled: !0,
          approvalsExpanded: !1,
          updateFailed: !1,
          lastUpdateCheck: 0
        },
        w = (0, a.Z0)({
          name: "app",
          initialState: m,
          reducers: {
            setDeviceId(A, n) {
              A.deviceId = n.payload
            },
            setHashKey(A, n) {
              A.hashKey = n.payload
            },
            setAuthenticated(A, n) {
              A.authenticated = n.payload
            },
            setIconTheme(A, n) {
              A.iconTheme = n.payload
            },
            setIcon(A, n) {
              A.icon = n.payload
            },
            setMigrationStatus(A, n) {
              A.migrated = n.payload
            },
            setNewAuthMigrated(A, n) {
              A.newAuthMigrated = n.payload
            },
            setFirstTime(A, n) {
              A.firstTime = n.payload
            },
            setWarningDisplayed(A, n) {
              A.warningDisplayed = n.payload
            },
            setWarningDisplayedSent(A, n) {
              A.warningDisplayedSent = n.payload
            },
            setShowEmptyWalletImportedModal(A, n) {
              A.showEmptyWalletImportedModal = n.payload
            },
            setStorageVersion(A, n) {
              A.storageVersion = n.payload
            },
            setIdentityId(A, n) {
              A.identityId = n.payload
            },
            setAuthenticating(A, n) {
              A.authenticating = n.payload
            },
            setNewsFlagOff(A, n) {
              A.newFlag = d(p({}, A.newFlag), {
                [n.payload]: !0
              })
            },
            setFeatureFlags(A, n) {
              A.featureFlags = n.payload
            },
            setTokenScannerEnabled(A, n) {
              A.tokenScannerEnabled = n.payload
            },
            setLegacyDeviceId(A, n) {
              A.legacyDeviceId = n.payload
            },
            setAuthIdentifier(A, n) {
              A.authIdentifier = n.payload
            },
            setSidePanelOpened(A, n) {
              A.sidePanelOpened = n.payload
            },
            setCountryCode(A, n) {
              A.countryCode = n.payload
            },
            closeOneTap(A) {
              A.oneTap || (A.oneTap = {}), A.oneTap.dismissCount = A.oneTap.dismissCount ? A.oneTap.dismissCount + 1 : 1, A.oneTap.lastTimeClosed = (new Date).getTime()
            },
            useOneTap(A) {
              A.oneTap || (A.oneTap = {}), A.oneTap.dismissCount = 0, A.oneTap.lastTimeClosed = 0
            },
            toggleOneTapSetting(A, n) {
              A.oneTap || (A.oneTap = {}), A.oneTap.isOneTapDisabled = n.payload, n.payload && (A.oneTap.dismissCount = 0, A.oneTap.lastTimeClosed = 0)
            },
            addAnalyticsEvent(A, n) {
              A.analyticsQueue || (A.analyticsQueue = []), A.analyticsQueue.push(d(p({}, n.payload.event), {
                id: n.payload.id
              }))
            },
            clearAnalyticEvent(A, n) {
              A.analyticsQueue = (A.analyticsQueue || []).filter(A => !n.payload.includes(A.id))
            },
            addToast(A, n) {
              A.toasts.push(n.payload)
            },
            removeToast(A, n) {
              A.toasts = A.toasts.filter(A => A.id !== n.payload.id)
            },
            setWalletNewlyImported(A, n) {
              A.walletNewlyImported = n.payload
            },
            setLastTimeClosedWalletModal(A, n) {
              A.lastTimeClosedWalletModal = n.payload
            },
            setPreventAutoTriggerBiometrics(A, n) {
              A.preventAutoTriggerBiometrics = n.payload
            },
            setNavigationOrigin(A, n) {
              A.navigationOrigin = n.payload
            },
            clearNavigationOrigin(A) {
              A.navigationOrigin = void 0
            },
            setHomeScreenAssetsExpanded(A, n) {
              A.homeScreenAssetsExpanded = n.payload
            },
            setApprovalsExpanded(A, n) {
              A.approvalsExpanded = n.payload
            },
            setUpdateAvailable(A, n) {
              A.updateAvailable = n.payload
            },
            setUpdateFailed(A, n) {
              A.updateFailed = n.payload
            },
            setLastUpdateCheck(A, n) {
              A.lastUpdateCheck = n.payload
            },
            setUpdateAttempt(A, n) {
              A.updateAttempt = n.payload
            },
            clearUpdateAttempt(A) {
              A.updateAttempt = void 0
            },
            setReviewPopupDismissed(A) {
              A.reviewPopup || (A.reviewPopup = {}), A.reviewPopup.lastDismissed = Date.now()
            },
            setReviewPopupReviewed(A) {
              A.reviewPopup || (A.reviewPopup = {}), A.reviewPopup.reviewed = !0, A.reviewPopup.lastReviewed = Date.now()
            }
          }
        })
    },
    64001: (A, n, t) => {
      t.d(n, {
        m: () => r
      });
      const r = (0, t(20038).Z0)({
        name: "staking",
        initialState: {
          validators: {},
          delegations: {},
          stakingList: [],
          validatorsLastSync: {}
        },
        reducers: {
          updateValidators(A, n) {
            A.validators[n.payload.blockchain] = n.payload.validators
          },
          updateDelegations(A, n) {
            A.delegations[n.payload.walletId] || (A.delegations[n.payload.walletId] = {}), A.delegations[n.payload.walletId][n.payload.blockchain] = n.payload.delegations
          },
          updateStakingList(A, n) {
            A.stakingList = n.payload
          },
          touchValidators(A, n) {
            A.validatorsLastSync[n.payload] = (new Date).getTime()
          }
        }
      })
    },
    64145: (A, n, t) => {
      t.d(n, {
        Qq: () => i,
        W0: () => B,
        YW: () => s,
        b4: () => r.b4,
        k$: () => l
      });
      var r = t(6517),
        a = t(98939),
        e = t(31335),
        o = t(98649),
        c = (A, n, t) => new Promise((r, a) => {
          var e = A => {
              try {
                c(t.next(A))
              } catch (A) {
                a(A)
              }
            },
            o = A => {
              try {
                c(t.throw(A))
              } catch (A) {
                a(A)
              }
            },
            c = A => A.done ? r(A.value) : Promise.resolve(A.value).then(e, o);
          c((t = t.apply(A, n)).next())
        });
      const i = new o.V,
        B = {
          portName: a.xo,
          checking: !1,
          missCount: 0,
          THRESHOLD: 5e3,
          FIRST_TIME_WAIT: 200,
          RETRY_THRESHOLD: 400,
          MAX_MISS_RECONNECT: 15,
          statusProvider: i
        },
        s = new Proxy({}, {
          get: (A, n, t) => Reflect.get(B.portStream, n, t)
        });

      function l(A) {
        return c(this, null, function*() {
          A && Object.assign(B, A), yield(0, e.i)(B)
        })
      }
    },
    65509: (A, n, t) => {
      t.d(n, {
        e: () => a
      });
      var r, a = ((r = a || {})[r.LAYOUT_1 = 1] = "LAYOUT_1", r[r.LAYOUT_2 = 2] = "LAYOUT_2", r[r.LAYOUT_3 = 3] = "LAYOUT_3", r)
    },
    67982: (A, n, t) => {
      A.exports = t.p + "a17b9c1448ef44367a5f.ttf"
    },
    68157: (A, n, t) => {
      t.d(n, {
        GV: () => i,
        M_: () => B,
        TB: () => s,
        jL: () => c
      }), t(93155);
      var r = t(79448),
        a = (t.n(r), t(62311), t(48275)),
        e = (t(94566), t(71468)),
        o = (A, n, t) => new Promise((r, a) => {
          var e = A => {
              try {
                c(t.next(A))
              } catch (A) {
                a(A)
              }
            },
            o = A => {
              try {
                c(t.throw(A))
              } catch (A) {
                a(A)
              }
            },
            c = A => A.done ? r(A.value) : Promise.resolve(A.value).then(e, o);
          c((t = t.apply(A, n)).next())
        });
      const c = e.wA.withTypes(),
        i = e.d4.withTypes();
      e.Pj.withTypes();
      let B = {};

      function s(A) {
        return o(this, null, function*() {
          const n = new a.P(A);
          return yield n.boot(), B = n, B
        })
      }
    },
    72519: (A, n, t) => {
      t.d(n, {
        b: () => a
      });
      var r, a = ((r = a || {}).LOW_RISK = "LOW_RISK", r.MEDIUM_RISK = "MEDIUM_RISK", r.HIGH_RISK = "HIGH_RISK", r.PENDING = "PENDING", r)
    },
    75576: (A, n, t) => {
      A.exports = t.p + "d52a01d17b566af4e096.ttf"
    },
    77318: (A, n, t) => {
      A.exports = t.p + "ad33b33b93e135d216bd.otf"
    },
    80577: (A, n, t) => {
      t.d(n, {
        r: () => o
      });
      var r = t(11711),
        a = t(98649),
        e = t(26113);

      function o(A) {
        return A.portStream ? Promise.race([A.portStream.emit(r.A.PING), (0, e.yy)(A.FIRST_TIME_WAIT).then(() => a.k.IDLE)]) : Promise.resolve(a.k.IDLE)
      }
    },
    81220: (A, n, t) => {
      t.d(n, {
        X: () => a
      });
      var r = t(44329);
      class a {
        constructor() {
          this.listeners = {}
        }
        addListener(A, n) {
          const t = this.listeners[A] || [];
          t.push(n), this.listeners[A] = t
        }
        once(A, n) {
          this.addListener(A, t => (delete this.listeners[A], n(t)))
        }
        emit(A, n) {
          return new Promise((t, a) => {
            const e = `${A}_${(0,r.Ak)()}_callback`;
            this.once(e, A => ((A, n, t) => new Promise((n, r) => {
              var a = A => {
                  try {
                    o(t.next(A))
                  } catch (A) {
                    r(A)
                  }
                },
                e = A => {
                  try {
                    o(t.throw(A))
                  } catch (A) {
                    r(A)
                  }
                },
                o = A => A.done ? n(A.value) : Promise.resolve(A.value).then(a, e);
              o((t = t.apply(A, null)).next())
            }))(this, 0, function*() {
              var n;
              null != (n = A.data) && n.error ? a(A.data.error) : t(A.data.params)
            })), this.send({
              method: A,
              data: {
                cbMethod: e,
                params: n
              }
            })
          })
        }
        disconnect() {}
      }
    },
    81481: (A, n, t) => {
      t.d(n, {
        K: () => r
      });
      const r = (0, t(20038).Z0)({
        name: "migrations",
        initialState: {
          version: 0,
          postBootVersion: 0
        },
        reducers: {}
      })
    },
    82293: (A, n, t) => {
      t.d(n, {
        A: () => F
      });
      var r = t(71354),
        a = t.n(r),
        e = t(76314),
        o = t.n(e),
        c = t(4417),
        i = t.n(c),
        B = new URL(t(52781), t.b),
        s = new URL(t(60469), t.b),
        l = new URL(t(52598), t.b),
        p = new URL(t(75576), t.b),
        d = new URL(t(39094), t.b),
        m = new URL(t(77318), t.b),
        w = new URL(t(23230), t.b),
        E = new URL(t(84989), t.b),
        y = new URL(t(13787), t.b),
        g = new URL(t(3725), t.b),
        b = new URL(t(67982), t.b),
        u = new URL(t(94023), t.b),
        h = new URL(t(4431), t.b),
        v = new URL(t(44872), t.b),
        x = o()(a()),
        f = i()(B),
        k = i()(s),
        C = i()(l),
        D = i()(p),
        I = i()(d),
        S = i()(m),
        T = i()(w),
        _ = i()(E),
        z = i()(y),
        P = i()(g),
        Y = i()(b),
        G = i()(u),
        q = i()(h),
        N = i()(v);
      x.push([A.id, `/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n* {\n  scrollbar-color: initial;\n  scrollbar-width: initial;\n}\n  body::-webkit-scrollbar {\n    display: none;\n  }\n  body {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    margin: 0px;\n    overflow: hidden;\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--twc-backgroundPrimary) / 1);\n    background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));\n    padding: 0px;\n    font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --tw-text-opacity: 1;\n    color: hsl(var(--twc-textPrimary) / 1);\n    color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n  }\n\n  #root {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  flex: 1 1 0%;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n  input[type='number']::-webkit-inner-spin-button,\n  input[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  .scrollbar-hide::-webkit-scrollbar {\n    display: none;\n  }\n\n  .scrollbar-hide {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  @keyframes ripple-effect {\n    0% {\n      box-shadow: 0 0 0 0px rgba(71, 225, 141, 0.7);\n      background: rgba(71, 225, 141, 0.7);\n    }\n    80% {\n      background: rgba(66, 166, 223, 0);\n    }\n    100% {\n      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);\n    }\n  }\n\n  @keyframes ripple-effect-gray {\n    0% {\n      box-shadow: 0 0 0 0px rgba(115, 115, 115, 0.7);\n      background: rgba(115, 115, 115, 0.7);\n    }\n    80% {\n      background: rgba(66, 166, 223, 0);\n    }\n    100% {\n      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);\n    }\n  }\n\n  @keyframes pulse-effect {\n    0% {\n      transform: scale(1);\n    }\n    3.3% {\n      transform: scale(1.1);\n    }\n    16.5% {\n      transform: scale(1);\n    }\n    33% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  @keyframes swing {\n    0%,\n    100% {\n      transform: rotate(0deg);\n    }\n    10% {\n      transform: rotate(-12deg);\n    }\n    20% {\n      transform: rotate(12deg);\n    }\n    30% {\n      transform: rotate(-10deg);\n    }\n    40% {\n      transform: rotate(10deg);\n    }\n    50% {\n      transform: rotate(-6deg);\n    }\n    60% {\n      transform: rotate(6deg);\n    }\n    70% {\n      transform: rotate(0deg);\n    }\n  }\n\n  .rippleCircle {\n    animation: pulse-effect 2s ease-out infinite;\n  }\n\n  .ripple {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    animation: ripple-effect 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n\n  .ripple-gray {\n    animation: ripple-effect-gray 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n\n  .ripple:nth-child(2) {\n    animation-delay: 0.33s;\n    animation-duration: 2.2s;\n  }\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n:root {\n  --rt-color-white: #fff;\n  --rt-color-dark: #222;\n  --rt-color-success: #8dc572;\n  --rt-color-error: #be6464;\n  --rt-color-warning: #f0ad4e;\n  --rt-color-info: #337ab7;\n  --rt-opacity: 0.9;\n  --rt-transition-show-delay: 0.15s;\n  --rt-transition-closing-delay: 0.15s;\n}\n.core-styles-module_tooltip__3vRRp {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  will-change: opacity;\n}\n.core-styles-module_fixed__pcSol {\n  position: fixed;\n}\n.core-styles-module_arrow__cvMwQ {\n  position: absolute;\n  background: inherit;\n}\n.core-styles-module_noArrow__xock6 {\n  display: none;\n}\n.core-styles-module_clickable__ZuTTB {\n  pointer-events: auto;\n}\n.core-styles-module_show__Nt9eE {\n  opacity: 0.9;\n  opacity: var(--rt-opacity);\n  transition: opacity 0.15s ease-out;\n  transition: opacity var(--rt-transition-show-delay) ease-out;\n}\n.core-styles-module_closing__sGnxF {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  transition: opacity var(--rt-transition-closing-delay) ease-in;\n}\n/** end - core styles **/\n.styles-module_tooltip__mnnfp {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-size: 90%;\n  width: -moz-max-content;\n  width: max-content;\n}\n.styles-module_arrow__K0L3T {\n  width: 8px;\n  height: 8px;\n}\n[class*='react-tooltip__place-top'] > .styles-module_arrow__K0L3T {\n  transform: rotate(45deg);\n}\n[class*='react-tooltip__place-right'] > .styles-module_arrow__K0L3T {\n  transform: rotate(135deg);\n}\n[class*='react-tooltip__place-bottom'] > .styles-module_arrow__K0L3T {\n  transform: rotate(225deg);\n}\n[class*='react-tooltip__place-left'] > .styles-module_arrow__K0L3T {\n  transform: rotate(315deg);\n}\n/** Types variant **/\n.styles-module_dark__xNqje {\n  background: #222;\n  background: var(--rt-color-dark);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_light__Z6W-X {\n  background-color: #fff;\n  background-color: var(--rt-color-white);\n  color: #222;\n  color: var(--rt-color-dark);\n}\n.styles-module_success__A2AKt {\n  background-color: #8dc572;\n  background-color: var(--rt-color-success);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_warning__SCK0X {\n  background-color: #f0ad4e;\n  background-color: var(--rt-color-warning);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_error__JvumD {\n  background-color: #be6464;\n  background-color: var(--rt-color-error);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_info__BWdHW {\n  background-color: #337ab7;\n  background-color: var(--rt-color-info);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${f}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${k}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${C}) format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${D}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${I}) format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${S}) format('opentype');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${T}) format('opentype');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${_}) format('opentype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${z}) format('opentype');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Geeza';\n  src: url(${P}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n@font-face {\n  font-family: 'Geeza';\n  src: url(${Y}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${G}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${q}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${N}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n.\\!container {\n  width: 100% !important;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .\\!container {\n    max-width: 640px !important;\n  }\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .\\!container {\n    max-width: 768px !important;\n  }\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 926px) {\n\n  .\\!container {\n    max-width: 926px !important;\n  }\n\n  .container {\n    max-width: 926px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .\\!container {\n    max-width: 1024px !important;\n  }\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .\\!container {\n    max-width: 1280px !important;\n  }\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\!container {\n    max-width: 1536px !important;\n  }\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.default-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.default-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.default-button {\n  border-radius: 50px;\n}\n.icon-circle-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.icon-circle-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.icon-circle-button {\n  border-radius: 9999px;\n}\n.icon-square-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.icon-square-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.icon-square-button {\n  border-radius: 12px;\n}\n/* Deprecated. */\n.tiny-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.tiny-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.tiny-button {\n  border-radius: 4px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 12px;\n}\n.badge-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.badge-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.badge-button {\n  border-radius: 4px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 12px;\n}\n.circle-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.circle-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.circle-button {\n  border-radius: 9999px;\n  padding: 12px;\n  font-size: 16px;\n  line-height: 20px;\n}\n.word-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.word-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.word-button {\n  border-radius: 4px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 16px;\n  line-height: 20px;\n}\n.checkbox {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.checkbox:checked::before {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.checkbox:disabled {\n  opacity: 0.4;\n}\n.checkbox::before {\n    content: '';\n    display: block;\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: 5px;\n    border-width: 2.5px;\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n    border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  }\n.checkbox[aria-checked="true"]::before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n/* Legacy typography. */\n.massive-text {\n  font-size: 32px;\n  line-height: 40px;\n}\n.screamer-text {\n  font-size: 28px;\n  line-height: 36px;\n}\n.headline-text {\n  font-size: 24px;\n  line-height: 32px;\n}\n.header-text {\n  font-size: 20px;\n  line-height: 28px;\n}\n.title-text {\n  font-size: 16px;\n  line-height: 24px;\n}\n.body-text {\n  font-size: 14px;\n  line-height: 22px;\n}\n.subtitle-text {\n  font-size: 14px;\n  line-height: 20px;\n}\n.caption-text {\n  font-size: 12px;\n  line-height: 16px;\n}\n.navigation-text {\n  font-size: 12px;\n  line-height: 16px;\n}\n/* New typography. */\n.typography-header-48 {\n  font-size: 48px;\n  line-height: 56px;\n}\n.typography-header-32 {\n  font-size: 32px;\n  line-height: 40px;\n}\n.typography-header-24 {\n  font-size: 24px;\n  line-height: 30px;\n}\n.typography-header-20 {\n  font-size: 20px;\n  line-height: 26px;\n}\n.typography-header-18 {\n  font-size: 18px;\n  line-height: 24px;\n}\n.typography-header-16 {\n  font-size: 16px;\n  line-height: 22px;\n}\n.typography-subheader-24 {\n  font-size: 24px;\n  line-height: 28px;\n}\n.typography-subheader-20 {\n  font-size: 20px;\n  line-height: 24px;\n}\n.typography-subheader-18 {\n  font-size: 18px;\n  line-height: 22px;\n}\n.typography-subheader-16 {\n  font-size: 16px;\n  line-height: 20px;\n}\n.typography-subheader-14 {\n  font-size: 14px;\n  line-height: 18px;\n}\n.typography-body-20 {\n  font-size: 20px;\n  line-height: 24px;\n}\n.typography-body-16 {\n  font-size: 16px;\n  line-height: 20px;\n}\n.typography-body-14 {\n  font-size: 14px;\n  line-height: 18px;\n}\n.typography-body-12 {\n  font-size: 12px;\n  line-height: 16px;\n}\n.typography-caption-12 {\n  font-size: 12px;\n  line-height: 16px;\n}\n/* Other styles. */\n.text-unset {\n    text-align: inherit;\n  }\n.break-word {\n    word-break: break-word;\n  }\n.alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n}\n.info-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.info-alt-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-depthBuyBg) / 1);\n  background-color: hsl(var(--twc-depthBuyBg) / var(--twc-depthBuyBg-opacity, var(--tw-bg-opacity)));\n}\n.default-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.brand-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.success-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-success-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-success-1-opacity-1) / var(--twc-success-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.error-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.warning-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.danger-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-errorBg) / 1);\n  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));\n}\n.input {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.input:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.input-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.input-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.search-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.search-field {\n  border-radius: 9999px;\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-input-search-bg) / 1);\n  background-color: hsl(var(--twc-input-search-bg) / var(--twc-input-search-bg-opacity, var(--tw-bg-opacity)));\n  padding: 0.625rem;\n}\n.step-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.step-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.step-field-long {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.step-field-long:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option {\n  margin: 2px;\n  display: flex;\n  width: 1.25rem;\n  height: 1.25rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  border-width: 2.5px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option[aria-checked="true"] {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option[aria-disabled="true"] {\n  opacity: 0.4;\n}\n.radio-group__option-indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.radio-group__option[aria-checked='true'] .radio-group__option-indicator {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.skeleton {\n    --start-color: hsl(\n      var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity))\n    );\n    --end-color: hsl(\n      var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity))\n    );\n\n    background-image: linear-gradient(\n      270deg,\n      var(--start-color),\n      var(--end-color),\n      var(--end-color),\n      var(--start-color)\n    );\n    background-size: 400% 100%;\n    animation: bg-position 3s ease-in-out infinite;\n    box-shadow: none;\n    background-clip: padding-box;\n    cursor: default;\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    flex-shrink: 0;\n    border-radius: 4px;\n  }\n@keyframes bg-position {\n    from {\n      background-position: 200% 0;\n    }\n    to {\n      background-position: -200% 0;\n    }\n  }\n.switch {\n  position: relative;\n  display: inline-flex;\n  height: 24px;\n  width: 40px;\n  flex-shrink: 0;\n  cursor: pointer;\n  border-radius: 9999px;\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-transparent) / 1);\n  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.switch:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.switch:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n  --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.75;\n}\n.switch[aria-checked='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.switch[aria-checked='true'] .switch__toggle {\n  --tw-translate-x: 16px;\n  transform: translate(16px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.switch:disabled {\n  opacity: 0.4;\n}\n.switch__toggle {\n  pointer-events: none;\n  display: inline-block;\n  height: 1.25rem;\n  width: 1.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@supports (color: rgb(0 0 0 / 0)) {\n.switch__toggle {\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  }\n}\n.tw-scrollbar {\n  overflow: hidden;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.tw-scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n  border-radius: var(--scrollbar-track-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));\n}\n.tw-scrollbar::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));\n}\n.tw-scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n  border-radius: var(--scrollbar-thumb-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));\n}\n.tw-scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));\n}\n.tw-scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n  border-radius: var(--scrollbar-corner-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));\n}\n.tw-scrollbar::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));\n}\n.tw-scrollbar {\n  scrollbar-width: thin;\n  scrollbar-color: initial initial;\n  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);\n}\n.tw-scrollbar::-webkit-scrollbar {\n  display: block;\n  width: 8px;\n  height: 8px;\n}\n.tw-scrollbar {\n  --scrollbar-track: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));\n  --scrollbar-thumb: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, 1));\n  --scrollbar-thumb-radius: 8px;\n}\n.tw-tooltip {\n  line-height: 18px;\n  z-index: 50 !important;\n  max-width: 20rem !important;\n  border-radius: 4px !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(var(--twc-tooltip) / 1) !important;\n  background-color: hsl(var(--twc-tooltip) / var(--twc-tooltip-opacity, var(--tw-bg-opacity))) !important;\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  --tw-text-opacity: 1 !important;\n  color: hsl(var(--twc-utility-1-default) / 1) !important;\n  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity))) !important;\n  opacity: 1 !important;\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;\n  --tw-backdrop-blur: blur(40px) !important;\n  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n    font-size: 14px !important;\n}\n.tw-tooltip .react-tooltip-arrow {\n  display: none;\n}\n.tw-overlay {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-overlay-50) / 1);\n  background-color: hsl(var(--twc-overlay-50) / var(--twc-overlay-50-opacity, var(--tw-bg-opacity)));\n  --tw-backdrop-blur: blur(2px);\n  backdrop-filter: blur(2px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.-bottom-0 {\n  bottom: -0px;\n}\n.-bottom-0\\.5 {\n  bottom: -2px;\n}\n.-bottom-1 {\n  bottom: -4px;\n}\n.-bottom-px {\n  bottom: -1px;\n}\n.-left-\\[3px\\] {\n  left: -3px;\n}\n.-right-0 {\n  right: -0px;\n}\n.-right-0\\.5 {\n  right: -2px;\n}\n.-right-1 {\n  right: -4px;\n}\n.-top-8 {\n  top: -32px;\n}\n.-top-\\[2px\\] {\n  top: -2px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-4 {\n  bottom: 16px;\n}\n.bottom-\\[9px\\] {\n  bottom: 9px;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-4 {\n  left: 16px;\n}\n.left-\\[356px\\] {\n  left: 356px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-0 {\n  right: 0px;\n}\n.right-1 {\n  right: 4px;\n}\n.right-1\\.25 {\n  right: 5px;\n}\n.right-2 {\n  right: 8px;\n}\n.right-2\\.5 {\n  right: 0.625rem;\n}\n.right-4 {\n  right: 16px;\n}\n.right-5 {\n  right: 1.25rem;\n}\n.right-\\[125px\\] {\n  right: 125px;\n}\n.right-\\[9px\\] {\n  right: 9px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1 {\n  top: 4px;\n}\n.top-1\\.25 {\n  top: 5px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-7 {\n  top: 1.75rem;\n}\n.top-\\[110px\\] {\n  top: 110px;\n}\n.top-\\[20px\\] {\n  top: 20px;\n}\n.top-\\[5px\\] {\n  top: 5px;\n}\n.-z-10 {\n  z-index: -10;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[1\\] {\n  z-index: 1;\n}\n.z-\\[6\\] {\n  z-index: 6;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.float-right {\n  float: right;\n}\n.m-2 {\n  margin: 8px;\n}\n.m-4 {\n  margin: 16px;\n}\n.m-\\[\\^\\\\s\\] {\n  margin: ^\\s;\n}\n.m-auto {\n  margin: auto;\n}\n.-mx-0 {\n  margin-left: -0px;\n  margin-right: -0px;\n}\n.-mx-0\\.5 {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n.-mx-2 {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n.-mx-4 {\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.-my-3 {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mx-0\\.5 {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.mx-3 {\n  margin-left: 12px;\n  margin-right: 12px;\n}\n.mx-4 {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.mx-\\[-16px\\] {\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.mx-\\[\\^\\\\s\\] {\n  margin-left: ^\\s;\n  margin-right: ^\\s;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.my-0\\.5 {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.my-10 {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.my-11 {\n  margin-top: 2.75rem;\n  margin-bottom: 2.75rem;\n}\n.my-14 {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n.my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.my-2\\.5 {\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.my-3 {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.my-4 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.my-6 {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.my-\\[\\^\\\\s\\] {\n  margin-top: ^\\s;\n  margin-bottom: ^\\s;\n}\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.\\!ml-4 {\n  margin-left: 16px !important;\n}\n.\\!ml-auto {\n  margin-left: auto !important;\n}\n.-mb-2 {\n  margin-bottom: -8px;\n}\n.-mb-4 {\n  margin-bottom: -16px;\n}\n.-ml-2 {\n  margin-left: -8px;\n}\n.-mt-3 {\n  margin-top: -12px;\n}\n.-mt-4 {\n  margin-top: -16px;\n}\n.-mt-6 {\n  margin-top: -24px;\n}\n.-mt-\\[10px\\] {\n  margin-top: -10px;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mb-0\\.5 {\n  margin-bottom: 2px;\n}\n.mb-1 {\n  margin-bottom: 4px;\n}\n.mb-10 {\n  margin-bottom: 40px;\n}\n.mb-16 {\n  margin-bottom: 64px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-2\\.5 {\n  margin-bottom: 0.625rem;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-6 {\n  margin-bottom: 24px;\n}\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n.mb-\\[\\^\\\\s\\] {\n  margin-bottom: ^\\s;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.ml-0\\.5 {\n  margin-left: 2px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-1\\.25 {\n  margin-left: 5px;\n}\n.ml-2 {\n  margin-left: 8px;\n}\n.ml-2\\.5 {\n  margin-left: 0.625rem;\n}\n.ml-3 {\n  margin-left: 12px;\n}\n.ml-4 {\n  margin-left: 16px;\n}\n.ml-6 {\n  margin-left: 24px;\n}\n.ml-\\[12px\\] {\n  margin-left: 12px;\n}\n.ml-\\[258px\\] {\n  margin-left: 258px;\n}\n.ml-\\[\\^\\\\s\\] {\n  margin-left: ^\\s;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-2 {\n  margin-right: 8px;\n}\n.mr-2\\.5 {\n  margin-right: 0.625rem;\n}\n.mr-3 {\n  margin-right: 12px;\n}\n.mr-4 {\n  margin-right: 16px;\n}\n.mr-\\[\\^\\\\s\\] {\n  margin-right: ^\\s;\n}\n.mr-px {\n  margin-right: 1px;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-0\\.5 {\n  margin-top: 2px;\n}\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n.mt-12 {\n  margin-top: 48px;\n}\n.mt-16 {\n  margin-top: 64px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.mt-20 {\n  margin-top: 5rem;\n}\n.mt-24 {\n  margin-top: 6rem;\n}\n.mt-3 {\n  margin-top: 12px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 24px;\n}\n.mt-8 {\n  margin-top: 32px;\n}\n.mt-\\[-20px\\] {\n  margin-top: -20px;\n}\n.mt-\\[-5px\\] {\n  margin-top: -5px;\n}\n.mt-\\[120px\\] {\n  margin-top: 120px;\n}\n.mt-\\[130px\\] {\n  margin-top: 130px;\n}\n.mt-\\[150px\\] {\n  margin-top: 150px;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.mt-\\[\\^\\\\s\\] {\n  margin-top: ^\\s;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.\\!table {\n  display: table !important;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.aspect-\\[2\\/1\\.48\\] {\n  aspect-ratio: 2/1.48;\n}\n.aspect-\\[3\\/1\\] {\n  aspect-ratio: 3/1;\n}\n.h-0 {\n  height: 0px;\n}\n.h-0\\.75 {\n  height: 3px;\n}\n.h-1 {\n  height: 4px;\n}\n.h-10 {\n  height: 40px;\n}\n.h-12 {\n  height: 48px;\n}\n.h-14 {\n  height: 56px;\n}\n.h-15 {\n  height: 60px;\n}\n.h-16 {\n  height: 64px;\n}\n.h-2 {\n  height: 8px;\n}\n.h-2\\.5 {\n  height: 10px;\n}\n.h-28 {\n  height: 7rem;\n}\n.h-3 {\n  height: 12px;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-4 {\n  height: 16px;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 24px;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-7\\.5 {\n  height: 30px;\n}\n.h-72 {\n  height: 18rem;\n}\n.h-8 {\n  height: 32px;\n}\n.h-9 {\n  height: 36px;\n}\n.h-\\[100vh\\] {\n  height: 100vh;\n}\n.h-\\[104px\\] {\n  height: 104px;\n}\n.h-\\[150px\\] {\n  height: 150px;\n}\n.h-\\[170px\\] {\n  height: 170px;\n}\n.h-\\[18px\\] {\n  height: 18px;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-\\[200px\\] {\n  height: 200px;\n}\n.h-\\[20px\\] {\n  height: 20px;\n}\n.h-\\[232px\\] {\n  height: 232px;\n}\n.h-\\[252px\\] {\n  height: 252px;\n}\n.h-\\[26px\\] {\n  height: 26px;\n}\n.h-\\[2px\\] {\n  height: 2px;\n}\n.h-\\[30px\\] {\n  height: 30px;\n}\n.h-\\[330px\\] {\n  height: 330px;\n}\n.h-\\[349px\\] {\n  height: 349px;\n}\n.h-\\[360px\\] {\n  height: 360px;\n}\n.h-\\[36px\\] {\n  height: 36px;\n}\n.h-\\[60vh\\] {\n  height: 60vh;\n}\n.h-\\[6rem\\] {\n  height: 6rem;\n}\n.h-\\[72px\\] {\n  height: 72px;\n}\n.h-\\[780px\\] {\n  height: 780px;\n}\n.h-\\[90px\\] {\n  height: 90px;\n}\n.h-\\[calc\\(100vh-1rem\\)\\] {\n  height: calc(100vh - 1rem);\n}\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-60 {\n  max-height: 15rem;\n}\n.max-h-96 {\n  max-height: 24rem;\n}\n.max-h-\\[235px\\] {\n  max-height: 235px;\n}\n.max-h-\\[250px\\] {\n  max-height: 250px;\n}\n.max-h-\\[400px\\] {\n  max-height: 400px;\n}\n.max-h-\\[50vh\\] {\n  max-height: 50vh;\n}\n.min-h-15 {\n  min-height: 60px;\n}\n.min-h-17 {\n  min-height: 68px;\n}\n.min-h-5 {\n  min-height: 1.25rem;\n}\n.min-h-6 {\n  min-height: 24px;\n}\n.min-h-\\[316px\\] {\n  min-height: 316px;\n}\n.min-h-\\[400px\\] {\n  min-height: 400px;\n}\n.min-h-\\[52px\\] {\n  min-height: 52px;\n}\n.min-h-\\[54px\\] {\n  min-height: 54px;\n}\n.min-h-\\[95vh\\] {\n  min-height: 95vh;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-1 {\n  width: 4px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-10 {\n  width: 40px;\n}\n.w-10\\/12 {\n  width: 83.333333%;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-12 {\n  width: 48px;\n}\n.w-14 {\n  width: 56px;\n}\n.w-16 {\n  width: 64px;\n}\n.w-17 {\n  width: 68px;\n}\n.w-2 {\n  width: 8px;\n}\n.w-2\\.5 {\n  width: 10px;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-22\\.5 {\n  width: 90px;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-28 {\n  width: 7rem;\n}\n.w-3 {\n  width: 12px;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-4 {\n  width: 16px;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-6 {\n  width: 24px;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-7\\.5 {\n  width: 30px;\n}\n.w-8 {\n  width: 32px;\n}\n.w-9 {\n  width: 36px;\n}\n.w-\\[100px\\] {\n  width: 100px;\n}\n.w-\\[102px\\] {\n  width: 102px;\n}\n.w-\\[124px\\] {\n  width: 124px;\n}\n.w-\\[136px\\] {\n  width: 136px;\n}\n.w-\\[150px\\] {\n  width: 150px;\n}\n.w-\\[200px\\] {\n  width: 200px;\n}\n.w-\\[20px\\] {\n  width: 20px;\n}\n.w-\\[224px\\] {\n  width: 224px;\n}\n.w-\\[250px\\] {\n  width: 250px;\n}\n.w-\\[300px\\] {\n  width: 300px;\n}\n.w-\\[305px\\] {\n  width: 305px;\n}\n.w-\\[310px\\] {\n  width: 310px;\n}\n.w-\\[320px\\] {\n  width: 320px;\n}\n.w-\\[350px\\] {\n  width: 350px;\n}\n.w-\\[36px\\] {\n  width: 36px;\n}\n.w-\\[389px\\] {\n  width: 389px;\n}\n.w-\\[413px\\] {\n  width: 413px;\n}\n.w-\\[42px\\] {\n  width: 42px;\n}\n.w-\\[438px\\] {\n  width: 438px;\n}\n.w-\\[472px\\] {\n  width: 472px;\n}\n.w-\\[504px\\] {\n  width: 504px;\n}\n.w-\\[56px\\] {\n  width: 56px;\n}\n.w-\\[600px\\] {\n  width: 600px;\n}\n.w-\\[6rem\\] {\n  width: 6rem;\n}\n.w-\\[77px\\] {\n  width: 77px;\n}\n.w-\\[80px\\] {\n  width: 80px;\n}\n.w-\\[86px\\] {\n  width: 86px;\n}\n.w-\\[90px\\] {\n  width: 90px;\n}\n.w-\\[calc\\(100\\%-32px\\)\\] {\n  width: calc(100% - 32px);\n}\n.w-auto {\n  width: auto;\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.w-min {\n  width: -moz-min-content;\n  width: min-content;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-\\[253px\\] {\n  min-width: 253px;\n}\n.min-w-\\[400px\\] {\n  min-width: 400px;\n}\n.min-w-\\[466px\\] {\n  min-width: 466px;\n}\n.min-w-\\[480px\\] {\n  min-width: 480px;\n}\n.min-w-\\[716px\\] {\n  min-width: 716px;\n}\n.min-w-\\[80px\\] {\n  min-width: 80px;\n}\n.min-w-\\[850px\\] {\n  min-width: 850px;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-max {\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.min-w-min {\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-\\[120px\\] {\n  max-width: 120px;\n}\n.max-w-\\[200px\\] {\n  max-width: 200px;\n}\n.max-w-\\[375px\\] {\n  max-width: 375px;\n}\n.max-w-\\[400px\\] {\n  max-width: 400px;\n}\n.max-w-\\[716px\\] {\n  max-width: 716px;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.origin-\\[50\\%_50\\%\\] {\n  transform-origin: 50% 50%;\n}\n.origin-bottom {\n  transform-origin: bottom;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1 {\n  --tw-translate-y: -4px;\n  transform: translate(var(--tw-translate-x), -4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-5 {\n  --tw-translate-x: 1.25rem;\n  transform: translate(1.25rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), 0px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1 {\n  --tw-translate-y: 4px;\n  transform: translate(var(--tw-translate-x), 4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), 50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[200px\\] {\n  --tw-translate-y: 200px;\n  transform: translate(var(--tw-translate-x), 200px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[calc\\(-50\\%\\+6px\\)\\] {\n  --tw-translate-y: calc(-50% + 6px);\n  transform: translate(var(--tw-translate-x), calc(-50% + 6px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-full {\n  --tw-translate-y: 100%;\n  transform: translate(var(--tw-translate-x), 100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-90 {\n  --tw-rotate: -90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-100 {\n  --tw-scale-x: -1;\n  --tw-scale-y: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(-1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-95 {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(.95) scaleY(.95);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[calc\\(20\\/24\\)\\] {\n  --tw-scale-x: calc(20 / 24);\n  --tw-scale-y: calc(20 / 24);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(calc(20 / 24)) scaleY(calc(20 / 24));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.animate-\\[swing_2s_ease-in-out_infinite\\] {\n  animation: swing 2s ease-in-out infinite;\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes reverse-spin {\n\n  from {\n    transform: rotate(360deg);\n  }\n}\n.animate-reverse-spin {\n  animation: reverse-spin 1s linear infinite;\n}\n@keyframes shimmer {\n\n  0% {\n    background-position: -200% 0;\n  }\n\n  100% {\n    background-position: 200% 0;\n  }\n}\n.animate-shimmer {\n  animation: shimmer 2s ease-in-out infinite;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.resize-none {\n  resize: none;\n}\n.resize {\n  resize: both;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.justify-stretch {\n  justify-content: stretch;\n}\n.gap-1 {\n  gap: 4px;\n}\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n.gap-12 {\n  gap: 48px;\n}\n.gap-2 {\n  gap: 8px;\n}\n.gap-3 {\n  gap: 12px;\n}\n.gap-4 {\n  gap: 16px;\n}\n.gap-6 {\n  gap: 24px;\n}\n.gap-8 {\n  gap: 32px;\n}\n.gap-\\[5px\\] {\n  gap: 5px;\n}\n.gap-x-1 {\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n}\n.gap-x-3 {\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n.gap-y-1 {\n  row-gap: 4px;\n}\n.gap-y-4 {\n  row-gap: 16px;\n}\n.space-x-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0px * 0);\n  margin-right: calc(0px * var(--tw-space-x-reverse));\n  margin-left: calc(0px * (1 - 0));\n  margin-left: calc(0px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(0px * calc(1 - 0));\n  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2px * 0);\n  margin-right: calc(2px * var(--tw-space-x-reverse));\n  margin-left: calc(2px * (1 - 0));\n  margin-left: calc(2px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(2px * calc(1 - 0));\n  margin-left: calc(2px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(4px * 0);\n  margin-right: calc(4px * var(--tw-space-x-reverse));\n  margin-left: calc(4px * (1 - 0));\n  margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(4px * calc(1 - 0));\n  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1\\.25 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(5px * 0);\n  margin-right: calc(5px * var(--tw-space-x-reverse));\n  margin-left: calc(5px * (1 - 0));\n  margin-left: calc(5px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(5px * calc(1 - 0));\n  margin-left: calc(5px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8px * 0);\n  margin-right: calc(8px * var(--tw-space-x-reverse));\n  margin-left: calc(8px * (1 - 0));\n  margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(8px * calc(1 - 0));\n  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.625rem * 0);\n  margin-right: calc(0.625rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.625rem * (1 - 0));\n  margin-left: calc(0.625rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(0.625rem * calc(1 - 0));\n  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(12px * 0);\n  margin-right: calc(12px * var(--tw-space-x-reverse));\n  margin-left: calc(12px * (1 - 0));\n  margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(12px * calc(1 - 0));\n  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(16px * 0);\n  margin-right: calc(16px * var(--tw-space-x-reverse));\n  margin-left: calc(16px * (1 - 0));\n  margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(16px * calc(1 - 0));\n  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(24px * 0);\n  margin-right: calc(24px * var(--tw-space-x-reverse));\n  margin-left: calc(24px * (1 - 0));\n  margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(24px * calc(1 - 0));\n  margin-left: calc(24px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(32px * 0);\n  margin-right: calc(32px * var(--tw-space-x-reverse));\n  margin-left: calc(32px * (1 - 0));\n  margin-left: calc(32px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(32px * calc(1 - 0));\n  margin-left: calc(32px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * (1 - 0));\n  margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0px * calc(1 - 0));\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * 0);\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2px * (1 - 0));\n  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(2px * calc(1 - 0));\n  margin-top: calc(2px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2px * 0);\n  margin-bottom: calc(2px * var(--tw-space-y-reverse));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(4px * (1 - 0));\n  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(4px * calc(1 - 0));\n  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(4px * 0);\n  margin-bottom: calc(4px * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * (1 - 0));\n  margin-top: calc(0.375rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0.375rem * calc(1 - 0));\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * 0);\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(48px * (1 - 0));\n  margin-top: calc(48px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(48px * calc(1 - 0));\n  margin-top: calc(48px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(48px * 0);\n  margin-bottom: calc(48px * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(8px * (1 - 0));\n  margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(8px * calc(1 - 0));\n  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(8px * 0);\n  margin-bottom: calc(8px * var(--tw-space-y-reverse));\n}\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * (1 - 0));\n  margin-top: calc(0.625rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0.625rem * calc(1 - 0));\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * 0);\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(12px * (1 - 0));\n  margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(12px * calc(1 - 0));\n  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(12px * 0);\n  margin-bottom: calc(12px * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(16px * (1 - 0));\n  margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(16px * calc(1 - 0));\n  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(16px * 0);\n  margin-bottom: calc(16px * var(--tw-space-y-reverse));\n}\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * (1 - 0));\n  margin-top: calc(1.25rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1.25rem * calc(1 - 0));\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * 0);\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(24px * (1 - 0));\n  margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(24px * calc(1 - 0));\n  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(24px * 0);\n  margin-bottom: calc(24px * var(--tw-space-y-reverse));\n}\n.space-y-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.75rem * (1 - 0));\n  margin-top: calc(1.75rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1.75rem * calc(1 - 0));\n  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.75rem * 0);\n  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(32px * (1 - 0));\n  margin-top: calc(32px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(32px * calc(1 - 0));\n  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(32px * 0);\n  margin-bottom: calc(32px * var(--tw-space-y-reverse));\n}\n.space-y-\\[2px\\] > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2px * (1 - 0));\n  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(2px * calc(1 - 0));\n  margin-top: calc(2px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2px * 0);\n  margin-bottom: calc(2px * var(--tw-space-y-reverse));\n}\n.self-center {\n  align-self: center;\n}\n.self-stretch {\n  align-self: stretch;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.text-nowrap {\n  text-wrap: nowrap;\n}\n.break-words {\n  word-wrap: break-word;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 4px;\n}\n.rounded-10 {\n  border-radius: 40px;\n}\n.rounded-2 {\n  border-radius: 8px;\n}\n.rounded-3 {\n  border-radius: 12px;\n}\n.rounded-3xl {\n  border-radius: 14px;\n}\n.rounded-4 {\n  border-radius: 16px;\n}\n.rounded-5xl {\n  border-radius: 20px;\n}\n.rounded-6 {\n  border-radius: 24px;\n}\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\n.rounded-\\[24px_0px_0px_24px\\] {\n  border-radius: 24px 0px 0px 24px;\n}\n.rounded-\\[40px\\] {\n  border-radius: 40px;\n}\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n.rounded-curvy {\n  border-radius: 50px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 8px;\n}\n.rounded-xl {\n  border-radius: 10px;\n}\n.rounded-b-4 {\n  border-bottom-right-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.rounded-t-4 {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n.rounded-bl-full {\n  border-bottom-left-radius: 9999px;\n}\n.rounded-br-4 {\n  border-bottom-right-radius: 16px;\n}\n.rounded-tl-full {\n  border-top-left-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.\\!border-error {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(var(--twc-error) / 1) !important;\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity))) !important;\n}\n.border-\\[a-z\\] {\n  border-color: a-z;\n}\n.border-accent-blue {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-blue) / 1);\n  border-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-border-opacity)));\n}\n.border-accent-neon-green {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-neon-green) / 1);\n  border-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-border-opacity)));\n}\n.border-accent-pink {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-pink) / 1);\n  border-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-border-opacity)));\n}\n.border-accent-yellow {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-yellow) / 1);\n  border-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-border-opacity)));\n}\n.border-background-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-background-1) / 1);\n  border-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-border-opacity)));\n}\n.border-backgroundPrimary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-backgroundPrimary) / 1);\n  border-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-border-opacity)));\n}\n.border-backgroundTertiary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-backgroundTertiary) / 1);\n  border-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-border-opacity)));\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, 1);\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(37, 99, 235, 1);\n  border-color: rgba(37, 99, 235, var(--tw-border-opacity));\n}\n.border-error {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error) / 1);\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));\n}\n.border-error-1-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  border-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-line {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-line) / 1);\n  border-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));\n}\n.border-on-primary-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-on-primary-opacity-1) / 1);\n  border-color: hsl(var(--twc-on-primary-opacity-1) / var(--twc-on-primary-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-other-Gold {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-other-Gold) / 1);\n  border-color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-border-opacity)));\n}\n.border-other-Silver {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-other-Silver) / 1);\n  border-color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-border-opacity)));\n}\n.border-primary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n}\n.border-primary-default {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.border-primary-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-opacity-1) / 1);\n  border-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, 1);\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n}\n.border-success {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-success) / 1);\n  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));\n}\n.border-transparent {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-transparent) / 1);\n  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));\n}\n.border-utility-1-opacity-3 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n}\n.border-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.border-b-error-1-default {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-error-1-default) / 1);\n  border-bottom-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-border-opacity)));\n}\n.border-b-on-primary {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-on-primary) / 1);\n  border-bottom-color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-border-opacity)));\n}\n.border-b-primary-default {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-primary-default) / 1);\n  border-bottom-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.border-b-utility-1-opacity-1 {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / 1);\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-b-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.border-t-line {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(var(--twc-line) / 1);\n  border-top-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));\n}\n.border-t-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-top-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.bg-\\[\\#111\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(17, 17, 17, 1);\n  background-color: rgba(17, 17, 17, var(--tw-bg-opacity));\n}\n.bg-\\[\\^\\\\s\\] {\n  background-color: ^\\s;\n}\n.bg-\\[rgba\\(37\\2c 37\\2c 37\\2c 0\\.08\\)\\] {\n  background-color: rgba(37,37,37,0.08);\n}\n.bg-accent-blue {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-blue) / 1);\n  background-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-neon-green {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-neon-green) / 1);\n  background-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-pink {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-pink) / 1);\n  background-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-yellow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-yellow) / 1);\n  background-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-1) / 1);\n  background-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-2 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-2) / 1);\n  background-color: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-primary) / 1);\n  background-color: hsl(var(--twc-background-primary) / var(--twc-background-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-secondary) / 1);\n  background-color: hsl(var(--twc-background-secondary) / var(--twc-background-secondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-tertiary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-tertiary) / 1);\n  background-color: hsl(var(--twc-background-tertiary) / var(--twc-background-tertiary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundPrimary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundPrimary) / 1);\n  background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundSecondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundSecondary) / 1);\n  background-color: hsl(var(--twc-backgroundSecondary) / var(--twc-backgroundSecondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundTertiary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundTertiary) / 1);\n  background-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-bg-opacity)));\n}\n.bg-bg3 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-bg3) / 1);\n  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, 1);\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, 1);\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n.bg-brand-background {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-brand-background) / 1);\n  background-color: hsl(var(--twc-brand-background) / var(--twc-brand-background-opacity, var(--tw-bg-opacity)));\n}\n.bg-button-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary) / 1);\n  background-color: hsl(var(--twc-button-primary) / var(--twc-button-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-button-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary) / 1);\n  background-color: hsl(var(--twc-button-secondary) / var(--twc-button-secondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-error-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-default) / 1);\n  background-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-error-1-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-error-background {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-background) / 1);\n  background-color: hsl(var(--twc-error-background) / var(--twc-error-background-opacity, var(--tw-bg-opacity)));\n}\n.bg-errorBg {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-errorBg) / 1);\n  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, 1);\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-line {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-default) / 1);\n  background-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary\\/10 {\n  background-color: hsl(var(--twc-primary) / 0.1);\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, 1);\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-success-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-success-1-default) / 1);\n  background-color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-successBg {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-successBg) / 1);\n  background-color: hsl(var(--twc-successBg) / var(--twc-successBg-opacity, var(--tw-bg-opacity)));\n}\n.bg-transparent {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-default) / 1);\n  background-color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-2 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-2) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-3 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-4 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-5 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-6 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-6) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity)));\n}\n.bg-warning {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning) / 1);\n  background-color: hsl(var(--twc-warning) / var(--twc-warning-opacity, var(--tw-bg-opacity)));\n}\n.bg-warning-1-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.bg-gradient-primary {\n  background-image: linear-gradient(268deg, var(--tw-gradient-stops));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-light-gradient-mid {\n  --tw-gradient-from: hsl(var(--twc-light-gradient-mid) / var(--twc-light-gradient-mid-opacity, 1)) var(--tw-gradient-from-position);\n  --tw-gradient-to: hsl(var(--twc-light-gradient-mid) / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-utility-1-opacity-5 {\n  --tw-gradient-from: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-from-position);\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-utility-1-opacity-4 {\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-4) / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, 1)) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.to-light-gradient-end {\n  --tw-gradient-to: hsl(var(--twc-light-gradient-end) / var(--twc-light-gradient-end-opacity, 1)) var(--tw-gradient-to-position);\n}\n.to-utility-1-opacity-5 {\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-to-position);\n}\n.bg-\\[length\\:200\\%_100\\%\\] {\n  background-size: 200% 100%;\n}\n.fill-background-2 {\n  fill: hsl(var(--twc-background-2) / 1);\n  fill: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, 1));\n}\n.fill-utility-1-default {\n  fill: hsl(var(--twc-utility-1-default) / 1);\n  fill: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, 1));\n}\n.stroke-current {\n  stroke: currentColor;\n}\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.\\!p-0 {\n  padding: 0px !important;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-1 {\n  padding: 4px;\n}\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n.p-12 {\n  padding: 48px;\n}\n.p-2 {\n  padding: 8px;\n}\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n.p-3 {\n  padding: 12px;\n}\n.p-3\\.5 {\n  padding: 0.875rem;\n}\n.p-4 {\n  padding: 16px;\n}\n.p-6 {\n  padding: 24px;\n}\n.p-\\[10px\\] {\n  padding: 10px;\n}\n.p-\\[\\^\\\\s\\] {\n  padding: ^\\s;\n}\n.\\!py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.px-8 {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.px-\\[10px\\] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-\\[\\^\\\\s\\] {\n  padding-left: ^\\s;\n  padding-right: ^\\s;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-0\\.5 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.py-6 {\n  padding-top: 24px;\n  padding-bottom: 24px;\n}\n.py-8 {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.py-\\[10px\\] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.py-\\[\\^\\\\s\\] {\n  padding-top: ^\\s;\n  padding-bottom: ^\\s;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pb-2 {\n  padding-bottom: 8px;\n}\n.pb-28 {\n  padding-bottom: 7rem;\n}\n.pb-3 {\n  padding-bottom: 12px;\n}\n.pb-4 {\n  padding-bottom: 16px;\n}\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n.pb-6 {\n  padding-bottom: 24px;\n}\n.pb-8 {\n  padding-bottom: 32px;\n}\n.pb-\\[100\\%\\] {\n  padding-bottom: 100%;\n}\n.pb-\\[3px\\] {\n  padding-bottom: 3px;\n}\n.pb-\\[4px\\] {\n  padding-bottom: 4px;\n}\n.pb-\\[\\^\\\\s\\] {\n  padding-bottom: ^\\s;\n}\n.pl-1 {\n  padding-left: 4px;\n}\n.pl-1\\.5 {\n  padding-left: 0.375rem;\n}\n.pl-11 {\n  padding-left: 2.75rem;\n}\n.pl-16 {\n  padding-left: 64px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pl-2\\.5 {\n  padding-left: 0.625rem;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pl-4 {\n  padding-left: 16px;\n}\n.pl-5 {\n  padding-left: 1.25rem;\n}\n.pl-\\[\\^\\\\s\\] {\n  padding-left: ^\\s;\n}\n.pr-1 {\n  padding-right: 4px;\n}\n.pr-10 {\n  padding-right: 40px;\n}\n.pr-2 {\n  padding-right: 8px;\n}\n.pr-3 {\n  padding-right: 12px;\n}\n.pr-4 {\n  padding-right: 16px;\n}\n.pr-\\[2px\\] {\n  padding-right: 2px;\n}\n.pr-\\[30px\\] {\n  padding-right: 30px;\n}\n.pr-\\[56px\\] {\n  padding-right: 56px;\n}\n.pr-\\[\\^\\\\s\\] {\n  padding-right: ^\\s;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-0\\.5 {\n  padding-top: 2px;\n}\n.pt-1 {\n  padding-top: 4px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n.pt-20 {\n  padding-top: 5rem;\n}\n.pt-3 {\n  padding-top: 12px;\n}\n.pt-4 {\n  padding-top: 16px;\n}\n.pt-5 {\n  padding-top: 1.25rem;\n}\n.pt-6 {\n  padding-top: 24px;\n}\n.pt-8 {\n  padding-top: 32px;\n}\n.pt-\\[40px\\] {\n  padding-top: 40px;\n}\n.pt-\\[59px\\] {\n  padding-top: 59px;\n}\n.pt-\\[\\^\\\\s\\] {\n  padding-top: ^\\s;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-start {\n  text-align: left;\n}\n.text-end {\n  text-align: right;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-brand {\n  font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.font-inter {\n  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-\\[11px\\]\\/\\[13px\\] {\n  font-size: 11px;\n  line-height: 13px;\n}\n.text-\\[16px\\] {\n  font-size: 16px;\n}\n.text-\\[17px\\] {\n  font-size: 17px;\n}\n.text-\\[23px\\] {\n  font-size: 23px;\n}\n.text-\\[24px\\] {\n  font-size: 24px;\n}\n.text-body3 {\n  font-size: 14px;\n}\n.text-caption1 {\n  font-size: 12px;\n}\n.text-header-48 {\n  font-size: 48px;\n}\n.text-headline6 {\n  font-size: 24px;\n}\n.text-subheader-14 {\n  font-size: 14px;\n}\n.text-subheader-16 {\n  font-size: 16px;\n}\n.text-xx-small {\n  font-size: 10px;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.leading-\\[18px\\] {\n  line-height: 18px;\n}\n.leading-\\[24px\\] {\n  line-height: 24px;\n}\n.leading-\\[30px\\] {\n  line-height: 30px;\n}\n.leading-body-12 {\n  line-height: 16px;\n}\n.leading-body-14 {\n  line-height: 18px;\n}\n.leading-body-16 {\n  line-height: 20px;\n}\n.leading-body-20 {\n  line-height: 24px;\n}\n.leading-caption-12 {\n  line-height: 16px;\n}\n.leading-header-16 {\n  line-height: 22px;\n}\n.leading-header-18 {\n  line-height: 24px;\n}\n.leading-header-20 {\n  line-height: 26px;\n}\n.leading-header-24 {\n  line-height: 30px;\n}\n.leading-header-32 {\n  line-height: 40px;\n}\n.leading-header-48 {\n  line-height: 56px;\n}\n.leading-headline6 {\n  line-height: 32px;\n}\n.leading-subheader-14 {\n  line-height: 18px;\n}\n.leading-subheader-16 {\n  line-height: 20px;\n}\n.leading-subheader-18 {\n  line-height: 22px;\n}\n.leading-subheader-20 {\n  line-height: 24px;\n}\n.leading-subheader-24 {\n  line-height: 28px;\n}\n.leading-subtitle4 {\n  line-height: 22px;\n}\n.\\!text-primary {\n  --tw-text-opacity: 1 !important;\n  color: hsl(var(--twc-primary) / 1) !important;\n  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity))) !important;\n}\n.text-\\[a-z\\] {\n  color: a-z;\n}\n.text-accent-blue {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-blue) / 1);\n  color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-text-opacity)));\n}\n.text-accent-lavender {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-lavender) / 1);\n  color: hsl(var(--twc-accent-lavender) / var(--twc-accent-lavender-opacity, var(--tw-text-opacity)));\n}\n.text-accent-neon-green {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-neon-green) / 1);\n  color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-text-opacity)));\n}\n.text-accent-pink {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-pink) / 1);\n  color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-text-opacity)));\n}\n.text-accent-yellow {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-yellow) / 1);\n  color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-text-opacity)));\n}\n.text-background-1 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-background-1) / 1);\n  color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-text-opacity)));\n}\n.text-backgroundPrimary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-backgroundPrimary) / 1);\n  color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-text-opacity)));\n}\n.text-backgroundTertiary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-backgroundTertiary) / 1);\n  color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-text-opacity)));\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgba(59, 130, 246, 1);\n  color: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n.text-brand-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-brand-primary) / 1);\n  color: hsl(var(--twc-brand-primary) / var(--twc-brand-primary-opacity, var(--tw-text-opacity)));\n}\n.text-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-error) / 1);\n  color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-text-opacity)));\n}\n.text-error-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-error-1-default) / 1);\n  color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-error-main {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-error-main) / 1);\n  color: hsl(var(--twc-error-main) / var(--twc-error-main-opacity, var(--tw-text-opacity)));\n}\n.text-icon-disabled {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-icon-disabled) / 1);\n  color: hsl(var(--twc-icon-disabled) / var(--twc-icon-disabled-opacity, var(--tw-text-opacity)));\n}\n.text-icon-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-icon-primary) / 1);\n  color: hsl(var(--twc-icon-primary) / var(--twc-icon-primary-opacity, var(--tw-text-opacity)));\n}\n.text-icon-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-icon-secondary) / 1);\n  color: hsl(var(--twc-icon-secondary) / var(--twc-icon-secondary-opacity, var(--tw-text-opacity)));\n}\n.text-iconNormal {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-iconNormal) / 1);\n  color: hsl(var(--twc-iconNormal) / var(--twc-iconNormal-opacity, var(--tw-text-opacity)));\n}\n.text-iconWarning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-iconWarning) / 1);\n  color: hsl(var(--twc-iconWarning) / var(--twc-iconWarning-opacity, var(--tw-text-opacity)));\n}\n.text-on-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-on-primary) / 1);\n  color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-text-opacity)));\n}\n.text-other-Bronze {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Bronze) / 1);\n  color: hsl(var(--twc-other-Bronze) / var(--twc-other-Bronze-opacity, var(--tw-text-opacity)));\n}\n.text-other-Gold {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Gold) / 1);\n  color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-text-opacity)));\n}\n.text-other-Silver {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Silver) / 1);\n  color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-text-opacity)));\n}\n.text-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary) / 1);\n  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));\n}\n.text-primary-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary-default) / 1);\n  color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-text-opacity)));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, 1);\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-success) / 1);\n  color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-text-opacity)));\n}\n.text-success-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-success-1-default) / 1);\n  color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-text-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-primary) / 1);\n  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));\n}\n.text-text-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-secondary) / 1);\n  color: hsl(var(--twc-text-secondary) / var(--twc-text-secondary-opacity, var(--tw-text-opacity)));\n}\n.text-textBrand {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textBrand) / 1);\n  color: hsl(var(--twc-textBrand) / var(--twc-textBrand-opacity, var(--tw-text-opacity)));\n}\n.text-textBuy {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textBuy) / 1);\n  color: hsl(var(--twc-textBuy) / var(--twc-textBuy-opacity, var(--tw-text-opacity)));\n}\n.text-textDisabled {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textDisabled) / 1);\n  color: hsl(var(--twc-textDisabled) / var(--twc-textDisabled-opacity, var(--tw-text-opacity)));\n}\n.text-textPrimary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimary) / 1);\n  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n}\n.text-textPrimaryStatic {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimaryStatic) / 1);\n  color: hsl(var(--twc-textPrimaryStatic) / var(--twc-textPrimaryStatic-opacity, var(--tw-text-opacity)));\n}\n.text-textSecondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textSecondary) / 1);\n  color: hsl(var(--twc-textSecondary) / var(--twc-textSecondary-opacity, var(--tw-text-opacity)));\n}\n.text-textSell {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textSell) / 1);\n  color: hsl(var(--twc-textSell) / var(--twc-textSell-opacity, var(--tw-text-opacity)));\n}\n.text-textThird {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textThird) / 1);\n  color: hsl(var(--twc-textThird) / var(--twc-textThird-opacity, var(--tw-text-opacity)));\n}\n.text-transparent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-transparent) / 1);\n  color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-default) / 1);\n  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-1 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-1) / 1);\n  color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-2 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-2) / 1);\n  color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-3 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-text-opacity)));\n}\n.text-warning-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-warning-1-default) / 1);\n  color: hsl(var(--twc-warning-1-default) / var(--twc-warning-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.decoration-strikethrough {\n  text-decoration-color: hsl(var(--twc-decoration-strikethrough));\n}\n.caret-transparent {\n  caret-color: hsl(var(--twc-transparent) / 1);\n  caret-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline-0 {\n  outline-width: 0px;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.blur-md {\n  --tw-blur: blur(12px);\n  filter: blur(12px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-1 {\n  --tw-backdrop-blur: blur(40px);\n  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.light,[data-theme="light"] {\n  --twc-primary-default: 241.20000000000005 100% 50%;\n  --twc-primary-hover: 241 100% 65.5%;\n  --twc-primary-pressed: 241.20000000000005 100% 69.6%;\n  --twc-primary-opacity-1: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-1-opacity: 0.16;\n  --twc-primary-opacity-2: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-2-opacity: 0.24;\n  --twc-primary-opacity-3: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-3-opacity: 0.32;\n  --twc-on-primary: 0 0% 100%;\n  --twc-on-primary-opacity-1: 0 0% 100%;\n  --twc-on-primary-opacity-1-opacity: 0.40;\n  --twc-background-1: 0 0% 100%;\n  --twc-background-2: 240 7.1% 94.5%;\n  --twc-utility-1-default: 0 0% 14.5%;\n  --twc-utility-1-opacity-1: 0 0% 14.5%;\n  --twc-utility-1-opacity-1-opacity: 0.72;\n  --twc-utility-1-opacity-2: 0 0% 14.5%;\n  --twc-utility-1-opacity-2-opacity: 0.48;\n  --twc-utility-1-opacity-3: 0 0% 14.5%;\n  --twc-utility-1-opacity-3-opacity: 0.24;\n  --twc-utility-1-opacity-4: 0 0% 14.5%;\n  --twc-utility-1-opacity-4-opacity: 0.12;\n  --twc-utility-1-opacity-5: 0 0% 14.5%;\n  --twc-utility-1-opacity-5-opacity: 0.08;\n  --twc-utility-1-opacity-6: 0 0% 14.5%;\n  --twc-utility-1-opacity-6-opacity: 0.04;\n  --twc-success-1-default: 137.3 100% 27.8%;\n  --twc-success-1-opacity-1: 137.3 100% 27.8%;\n  --twc-success-1-opacity-1-opacity: 0.16;\n  --twc-success-1-opacity-2: 137.3 100% 27.8%;\n  --twc-success-1-opacity-2-opacity: 0.24;\n  --twc-success-1-opacity-3: 137.3 100% 27.8%;\n  --twc-success-1-opacity-3-opacity: 0.32;\n  --twc-warning-1-default: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-1: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-1-opacity: 0.16;\n  --twc-warning-1-opacity-2: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-2-opacity: 0.24;\n  --twc-warning-1-opacity-3: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-3-opacity: 0.32;\n  --twc-error-1-default: 0 81.3% 42%;\n  --twc-error-1-hover: 0 63.9% 47.8%;\n  --twc-error-1-pressed: 0 58.6% 53.5%;\n  --twc-error-1-opacity-1: 0 81.3% 42%;\n  --twc-error-1-opacity-1-opacity: 0.16;\n  --twc-error-1-opacity-2: 0 81.3% 42%;\n  --twc-error-1-opacity-2-opacity: 0.24;\n  --twc-error-1-opacity-3: 0 81.3% 42%;\n  --twc-error-1-opacity-3-opacity: 0.32;\n  --twc-accent-pink: 300.70000000000005 100% 84.1%;\n  --twc-accent-neon-green: 82.80000000000001 100% 50%;\n  --twc-accent-yellow: 46.69999999999999 100% 56.7%;\n  --twc-accent-blue: 194.60000000000002 100% 59%;\n  --twc-light-gradient-start: 194.60000000000002 80.4% 46.1%;\n  --twc-light-gradient-mid: 300.9 66.8% 61%;\n  --twc-light-gradient-end: 41.10000000000002 100% 42.4%;\n  --twc-transparent: 0 0% 0%;\n  --twc-transparent-opacity: 0.00;\n  --twc-overlay-100: 0 0% 0%;\n  --twc-overlay-100-opacity: 0.40;\n  --twc-overlay-50: 0 0% 0%;\n  --twc-overlay-50-opacity: 0.16;\n  --twc-tooltip: 0 0% 96.1%;\n  --twc-alert-solid: 137.5 41.4% 88.6%;\n  --twc-other-Bronze: 23.399999999999977 46.6% 34.5%;\n  --twc-other-Silver: 300 2% 49.2%;\n  --twc-other-Gold: 40.30000000000001 61.8% 47.3%;\n  --twc-decoration-strikethrough: 240 0.5% 62.5%;\n  --twc-brand-primary: 241.20000000000005 100% 50%;\n  --twc-button-primary-hovered: 241 100% 65.5%;\n  --twc-button-primary-pressed: 241.20000000000005 100% 69.6%;\n  --twc-brand-background: 241.20000000000005 100% 50%;\n  --twc-brand-background-opacity: 0.16;\n  --twc-brand-on-primary: 0 0% 100%;\n  --twc-background-primary: 0 0% 100%;\n  --twc-background-secondary: 240 7.1% 94.5%;\n  --twc-success-background: 137.5 88.8% 34.9%;\n  --twc-success-background-opacity: 0.16;\n  --twc-error-background: 0 81.3% 42%;\n  --twc-error-background-opacity: 0.16;\n  --twc-warning-background: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-background-opacity: 0.16;\n  --twc-text-primary: 0 0% 14.5%;\n  --twc-text-secondary: 0 0% 14.5%;\n  --twc-text-secondary-opacity: 0.72;\n  --twc-_app-colour-utility-utility-1---opacity-2: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;\n  --twc-background-tertiary: 0 0% 0%;\n  --twc-background-tertiary-opacity: 0.08;\n  --twc-success-main: 137.5 88.8% 34.9%;\n  --twc-error-main: 0 81.3% 42%;\n  --twc-warning-main: 42.10000000000002 98.1% 41.6%;\n  --twc-accent-lavender: 267 100% 56.9%;\n  --twc-accent-neon: 82.89999999999998 88.8% 49.2%;\n  --twc-accent-sand: 46.80000000000001 88.1% 49.4%;\n  --twc-accent-ocean: 194.60000000000002 93.4% 47.5%;\n  --twc-_app-colour-utility-utility-1---opacity-4: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;\n  --twc-_app-colour-utility-utility-1---opacity-5: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;\n  --twc-other-skeleton: 0 0% 14.5%;\n  --twc-other-skeleton-opacity: 0.04;\n  --twc-_app-colour-primary-primary---opacity-2: 241.20000000000005 100% 50%;\n  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;\n  --twc-_app-colour-primary-primary---opacity-3: 241.20000000000005 100% 50%;\n  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;\n  --twc-error-border: 0 81.3% 42%;\n  --twc-error-border-opacity: 0.24;\n  --twc-error-disabled: 0 81.3% 42%;\n  --twc-error-disabled-opacity: 0.32;\n  --twc-error-hovered: 0 63.9% 47.8%;\n  --twc-error-pressed: 0 58.6% 53.5%;\n  --twc-success-border: 137.5 88.8% 34.9%;\n  --twc-success-border-opacity: 0.24;\n  --twc-success-disabled: 137.5 88.8% 34.9%;\n  --twc-success-disabled-opacity: 0.32;\n  --twc-warning-border: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-border-opacity: 0.24;\n  --twc-warning-disabed: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-disabed-opacity: 0.32;\n  --twc-brand-on-primary-disabled: 0 0% 100%;\n  --twc-brand-on-primary-disabled-opacity: 0.80;\n  --twc-accent-fuchsia: 305.4 100% 50%;\n  --twc-accent-lavender-bg: 267 100% 56.9%;\n  --twc-accent-lavender-bg-opacity: 0.24;\n  --twc-accent-neon-bg: 82.89999999999998 88.8% 49.2%;\n  --twc-accent-neon-bg-opacity: 0.24;\n  --twc-accent-sand-bg: 46.80000000000001 88.1% 49.4%;\n  --twc-accent-sand-bg-opacity: 0.24;\n  --twc-accent-ocean-bg: 194.60000000000002 93.4% 47.5%;\n  --twc-accent-ocean-bg-opacity: 0.24;\n  --twc-accent-fuchsia-bg: 305.4 100% 50%;\n  --twc-accent-fuchsia-bg-opacity: 0.24;\n  --twc-icon-primary: 0 0% 14.5%;\n  --twc-icon-secondary: 0 0% 14.5%;\n  --twc-icon-secondary-opacity: 0.72;\n  --twc-icon-disabled: 0 0% 14.5%;\n  --twc-icon-disabled-opacity: 0.40;\n  --twc-button-primary: 241.20000000000005 100% 50%;\n  --twc-button-secondary: 240 7.1% 94.5%;\n  --twc-button-secondary-hovered: 240 4% 85.3%;\n  --twc-button-secondary-disabled: 240 16% 90.2%;\n  --twc-button-secondary-disabled-opacity: 0.40;\n  --twc-button-primary-disabled: 241.20000000000005 100% 50%;\n  --twc-button-primary-disabled-opacity: 0.16;\n  --twc-button-secondary-pressed: 240 8.8% 77.6%;\n  --twc-line-divider: 0 0% 14.5%;\n  --twc-line-divider-opacity: 0.08;\n  --twc-line-border: 0 0% 14.5%;\n  --twc-line-border-opacity: 0.08;\n  --twc-input-border: 0 0% 14.5%;\n  --twc-input-border-opacity: 0.18;\n  --twc-input-search-bg: 0 0% 14.5%;\n  --twc-input-search-bg-opacity: 0.08;\n  --twc-text-disabled: 0 0% 14.5%;\n  --twc-text-disabled-opacity: 0.40;\n  --twc-button-icon-button: 241.20000000000005 100% 50%;\n  --twc-button-icon-button-opacity: 0.12;\n  --twc-action-hovered: 0 0% 0%;\n  --twc-action-hovered-opacity: 0.06;\n  --twc-action-pressed: 240 100% 14.3%;\n  --twc-action-pressed-opacity: 0.12;\n  --twc-action-focused: 241.20000000000005 100% 50%;\n  --twc-action-focused-opacity: 0.24;\n  --twc-background-flow: 0 0% 92.9%;\n  --twc-keyboard-ios-bg: 220 10.6% 83.3%;\n  --twc-keyboard-key-light: 0 0% 100%;\n  --twc-keyboard-action: 211.29999999999995 100% 50%;\n  --twc-keyboard-key-dark: 218.79999999999995 11.1% 70%;\n  --twc-keyboard-on-key: 0 0% 19.2%;\n  --twc-button-icon-button-disabled: 241.20000000000005 100% 50%;\n  --twc-button-icon-button-disabled-opacity: 0.04;\n  --twc-background-actionsheet-bg: 0 0% 0%;\n  --twc-background-actionsheet-bg-opacity: 0.20;\n  --twc-background-actionsheet: 0 0% 100%;\n  --twc-background-modal: 0 0% 91.8%;\n  --twc-browser-primary-bg: 0 0% 100%;\n  --twc-browser-secondary-bg: 0 0% 14.5%;\n  --twc-browser-secondary-bg-opacity: 0.08;\n  --twc-accent-orange-bg: 37.19999999999999 92% 48.8%;\n  --twc-accent-orange-bg-opacity: 0.24;\n  --twc-accent-orange: 37.19999999999999 92% 48.8%;\n  --twc-other-nologo: 267 100% 56.9%;\n  --twc-background-tab: 0 0% 100%;\n  --twc-primary: 241.20000000000005 100% 50%;\n  --twc-primaryHover: 241 100% 65.5%;\n  --twc-primaryPressed: 241.20000000000005 100% 69.6%;\n  --twc-primaryInverse: 241.20000000000005 100% 50%;\n  --twc-primaryInverse-opacity: 0.16;\n  --twc-textPrimary: 0 0% 14.5%;\n  --twc-textPrimaryStatic: 0 0% 14.5%;\n  --twc-textSecondary: 0 0% 14.5%;\n  --twc-textSecondary-opacity: 0.72;\n  --twc-textThird: 0 0% 14.5%;\n  --twc-textThird-opacity: 0.48;\n  --twc-textBuy: 137.3 100% 27.8%;\n  --twc-textSell: 0 81.3% 42%;\n  --twc-textDisabled: 0 0% 14.5%;\n  --twc-textDisabled-opacity: 0.24;\n  --twc-textBrand: 41 85.3% 42.7%;\n  --twc-bg3: 240 7.1% 94.5%;\n  --twc-backgroundPrimary: 0 0% 100%;\n  --twc-backgroundSecondary: 240 7.1% 94.5%;\n  --twc-backgroundTertiary: 0 0% 14.5%;\n  --twc-backgroundTertiary-opacity: 0.12;\n  --twc-successBg: 137.3 100% 27.8%;\n  --twc-successBg-opacity: 0.16;\n  --twc-errorBg: 0 81.3% 42%;\n  --twc-errorBg-opacity: 0.16;\n  --twc-depthBuyBg: 241.20000000000005 100% 50%;\n  --twc-depthBuyBg-opacity: 0.16;\n  --twc-iconNormal: 0 0% 14.5%;\n  --twc-iconNormal-opacity: 0.72;\n  --twc-iconSuccess: 137.3 100% 27.8%;\n  --twc-iconWarning: 41 85.3% 42.7%;\n  --twc-error: 0 81.3% 42%;\n  --twc-warning: 41 85.3% 42.7%;\n  --twc-warning-opacity: 0.16;\n  --twc-info: 241.20000000000005 100% 50%;\n  --twc-info-opacity: 0.16;\n  --twc-success: 137.5 88.8% 34.9%;\n  --twc-line: 0 0% 14.5%;\n  --twc-line-opacity: 0.08;\n  --twc-startGradient: 241.20000000000005 100% 50%;\n  --twc-finishGradient: 0 0% 14.5%;\n  --twc-finishGradient-opacity: 0.48;\n  --twc-lightGradientStart: 194.60000000000002 80.4% 46.1%;\n  --twc-lightGradientMid: 300.9 66.8% 61%;\n  --twc-lightGradientEnd: 41.10000000000002 100% 42.4%;\n}\n.dark,[data-theme="dark"] {\n  --twc-primary-default: 143.89999999999998 100% 64.1%;\n  --twc-primary-hover: 144 100% 78.4%;\n  --twc-primary-pressed: 143.89999999999998 100% 82.7%;\n  --twc-primary-opacity-1: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-1-opacity: 0.16;\n  --twc-primary-opacity-2: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-2-opacity: 0.24;\n  --twc-primary-opacity-3: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-3-opacity: 0.32;\n  --twc-on-primary: 240 1.8% 10.8%;\n  --twc-on-primary-opacity-1: 240 1.8% 10.8%;\n  --twc-on-primary-opacity-1-opacity: 0.40;\n  --twc-background-1: 240 1.8% 10.8%;\n  --twc-background-2: 240 2.7% 14.5%;\n  --twc-utility-1-default: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-1: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-1-opacity: 0.72;\n  --twc-utility-1-opacity-2: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-2-opacity: 0.48;\n  --twc-utility-1-opacity-3: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-3-opacity: 0.24;\n  --twc-utility-1-opacity-4: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-4-opacity: 0.12;\n  --twc-utility-1-opacity-5: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-5-opacity: 0.08;\n  --twc-utility-1-opacity-6: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-6-opacity: 0.04;\n  --twc-success-1-default: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-1: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-1-opacity: 0.16;\n  --twc-success-1-opacity-2: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-2-opacity: 0.24;\n  --twc-success-1-opacity-3: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-3-opacity: 0.32;\n  --twc-warning-1-default: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-1: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-1-opacity: 0.16;\n  --twc-warning-1-opacity-2: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-2-opacity: 0.24;\n  --twc-warning-1-opacity-3: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-3-opacity: 0.32;\n  --twc-error-1-default: 0 100% 68%;\n  --twc-error-1-hover: 0 100% 71.2%;\n  --twc-error-1-pressed: 0 100% 74.5%;\n  --twc-error-1-opacity-1: 0 100% 68%;\n  --twc-error-1-opacity-1-opacity: 0.16;\n  --twc-error-1-opacity-2: 0 100% 68%;\n  --twc-error-1-opacity-2-opacity: 0.24;\n  --twc-error-1-opacity-3: 0 100% 68%;\n  --twc-error-1-opacity-3-opacity: 0.32;\n  --twc-accent-pink: 300.70000000000005 100% 84.1%;\n  --twc-accent-neon-green: 82.80000000000001 100% 50%;\n  --twc-accent-yellow: 46.69999999999999 100% 56.7%;\n  --twc-accent-blue: 194.60000000000002 100% 59%;\n  --twc-light-gradient-start: 194.60000000000002 100% 59%;\n  --twc-light-gradient-mid: 300.70000000000005 100% 84.1%;\n  --twc-light-gradient-end: 46.69999999999999 100% 56.7%;\n  --twc-transparent: 0 0% 0%;\n  --twc-transparent-opacity: 0.00;\n  --twc-overlay-100: 0 0% 37.6%;\n  --twc-overlay-100-opacity: 0.40;\n  --twc-overlay-50: 0 0% 37.6%;\n  --twc-overlay-50-opacity: 0.16;\n  --twc-tooltip: 240 1% 20.6%;\n  --twc-alert-solid: 157.10000000000002 26.6% 15.5%;\n  --twc-other-Bronze: 39.80000000000001 32% 49%;\n  --twc-other-Silver: 22.5 10.8% 85.5%;\n  --twc-other-Gold: 45.89999999999998 96.4% 56.7%;\n  --twc-decoration-strikethrough: 225 1.7% 47.5%;\n  --twc-brand-primary: 143.89999999999998 100% 64.1%;\n  --twc-button-primary-hovered: 144 100% 78.4%;\n  --twc-button-primary-pressed: 143.89999999999998 100% 82.7%;\n  --twc-brand-background: 143.89999999999998 100% 64.1%;\n  --twc-brand-background-opacity: 0.16;\n  --twc-brand-on-primary: 240 1.8% 10.8%;\n  --twc-background-primary: 140 7.7% 7.6%;\n  --twc-background-secondary: 240 3.4% 17.5%;\n  --twc-success-background: 154.79999999999995 68.9% 44.1%;\n  --twc-success-background-opacity: 0.16;\n  --twc-error-background: 0 100% 68%;\n  --twc-error-background-opacity: 0.16;\n  --twc-warning-background: 42 84.9% 53.1%;\n  --twc-warning-background-opacity: 0.16;\n  --twc-text-primary: 216 13.5% 92.7%;\n  --twc-text-secondary: 216 13.5% 92.7%;\n  --twc-text-secondary-opacity: 0.60;\n  --twc-_app-colour-utility-utility-1---opacity-2: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;\n  --twc-background-tertiary: 0 0% 100%;\n  --twc-background-tertiary-opacity: 0.12;\n  --twc-success-main: 154.79999999999995 68.9% 44.1%;\n  --twc-error-main: 0 100% 68%;\n  --twc-warning-main: 42 84.9% 53.1%;\n  --twc-accent-lavender: 266.9 100% 75.1%;\n  --twc-accent-neon: 82.80000000000001 100% 50%;\n  --twc-accent-sand: 46.69999999999999 100% 56.7%;\n  --twc-accent-ocean: 194.60000000000002 100% 59%;\n  --twc-_app-colour-utility-utility-1---opacity-4: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;\n  --twc-_app-colour-utility-utility-1---opacity-5: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;\n  --twc-other-skeleton: 216 13.5% 92.7%;\n  --twc-other-skeleton-opacity: 0.04;\n  --twc-_app-colour-primary-primary---opacity-2: 143.89999999999998 100% 64.1%;\n  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;\n  --twc-_app-colour-primary-primary---opacity-3: 143.89999999999998 100% 64.1%;\n  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;\n  --twc-error-border: 0 100% 68%;\n  --twc-error-border-opacity: 0.24;\n  --twc-error-disabled: 0 100% 68%;\n  --twc-error-disabled-opacity: 0.32;\n  --twc-error-hovered: 0 100% 71.2%;\n  --twc-error-pressed: 0 100% 74.5%;\n  --twc-success-border: 154.79999999999995 68.9% 44.1%;\n  --twc-success-border-opacity: 0.24;\n  --twc-success-disabled: 154.79999999999995 68.9% 44.1%;\n  --twc-success-disabled-opacity: 0.32;\n  --twc-warning-border: 42 84.9% 53.1%;\n  --twc-warning-border-opacity: 0.24;\n  --twc-warning-disabled: 42 84.9% 53.1%;\n  --twc-warning-disabled-opacity: 0.32;\n  --twc-brand-on-primary-disabled: 240 1.8% 10.8%;\n  --twc-brand-on-primary-disabled-opacity: 0.80;\n  --twc-accent-fuchsia: 305.4 100% 50%;\n  --twc-accent-lavender-bg: 266.9 100% 75.1%;\n  --twc-accent-lavender-bg-opacity: 0.32;\n  --twc-accent-neon-bg: 82.80000000000001 100% 50%;\n  --twc-accent-neon-bg-opacity: 0.32;\n  --twc-accent-sand-bg: 46.69999999999999 100% 56.7%;\n  --twc-accent-sand-bg-opacity: 0.32;\n  --twc-accent-ocean-bg: 194.60000000000002 100% 59%;\n  --twc-accent-ocean-bg-opacity: 0.32;\n  --twc-accent-fuchsia-bg: 305.4 100% 50%;\n  --twc-accent-fuchsia-bg-opacity: 0.32;\n  --twc-icon-primary: 216 13.5% 92.7%;\n  --twc-icon-secondary: 216 13.5% 92.7%;\n  --twc-icon-secondary-opacity: 0.72;\n  --twc-icon-disabled: 216 13.5% 92.7%;\n  --twc-icon-disabled-opacity: 0.40;\n  --twc-button-primary: 143.89999999999998 100% 64.1%;\n  --twc-button-secondary: 240 3.4% 17.5%;\n  --twc-button-secondary-hovered: 140 2.1% 27.6%;\n  --twc-button-secondary-disabled: 140 3.4% 17.5%;\n  --twc-button-secondary-disabled-opacity: 0.40;\n  --twc-button-primary-disabled: 143.89999999999998 100% 64.1%;\n  --twc-button-primary-disabled-opacity: 0.32;\n  --twc-button-secondary-pressed: 150 2.2% 36.5%;\n  --twc-line-divider: 216 13.5% 92.7%;\n  --twc-line-divider-opacity: 0.12;\n  --twc-line-border: 216 13.5% 92.7%;\n  --twc-line-border-opacity: 0.12;\n  --twc-input-border: 216 13.5% 92.7%;\n  --twc-input-border-opacity: 0.24;\n  --twc-input-search-bg: 216 13.5% 92.7%;\n  --twc-input-search-bg-opacity: 0.12;\n  --twc-text-disabled: 216 13.5% 92.7%;\n  --twc-text-disabled-opacity: 0.40;\n  --twc-button-icon-button: 143.89999999999998 100% 64.1%;\n  --twc-button-icon-button-opacity: 0.16;\n  --twc-action-hovered: 0 0% 100%;\n  --twc-action-hovered-opacity: 0.08;\n  --twc-action-pressed: 0 0% 100%;\n  --twc-action-pressed-opacity: 0.12;\n  --twc-action-focused: 143.89999999999998 100% 64.1%;\n  --twc-action-focused-opacity: 0.24;\n  --twc-background-flow: 0 0% 28.2%;\n  --twc-keyboard-ios-bg: 0 0% 19.2%;\n  --twc-keyboard-key-light: 0 0% 43.5%;\n  --twc-keyboard-action: 211.29999999999995 100% 50%;\n  --twc-keyboard-key-dark: 0 0% 29.4%;\n  --twc-keyboard-on-key: 0 0% 100%;\n  --twc-button-icon-button-disabled: 143.89999999999998 100% 64.1%;\n  --twc-button-icon-button-disabled-opacity: 0.08;\n  --twc-background-actionsheet-bg: 0 0% 0%;\n  --twc-background-actionsheet-bg-opacity: 0.40;\n  --twc-background-actionsheet: 0 0% 12.2%;\n  --twc-background-modal: 0 0% 14.5%;\n  --twc-browser-primary-bg: 0 0% 23.5%;\n  --twc-browser-secondary-bg: 0 0% 15.7%;\n  --twc-accent-orange-bg: 37.10000000000002 100% 59.4%;\n  --twc-accent-orange-bg-opacity: 0.32;\n  --twc-accent-orange: 37.10000000000002 100% 59.4%;\n  --twc-other-nologo: 266.9 100% 75.1%;\n  --twc-background-tab: 0 0% 100%;\n  --twc-background-tab-opacity: 0.16;\n  --twc-primary: 143.89999999999998 100% 64.1%;\n  --twc-primaryHover: 144 100% 78.4%;\n  --twc-primaryPressed: 143.89999999999998 100% 82.7%;\n  --twc-primaryInverse: 143.89999999999998 100% 64.1%;\n  --twc-primaryInverse-opacity: 0.16;\n  --twc-textPrimary: 216 13.5% 92.7%;\n  --twc-textPrimaryStatic: 0 0% 14.5%;\n  --twc-textSecondary: 216 13.5% 92.7%;\n  --twc-textSecondary-opacity: 0.72;\n  --twc-textThird: 216 13.5% 92.7%;\n  --twc-textThird-opacity: 0.48;\n  --twc-textBuy: 154.89999999999998 61.1% 41.4%;\n  --twc-textSell: 0 100% 68%;\n  --twc-textDisabled: 216 13.5% 92.7%;\n  --twc-textDisabled-opacity: 0.24;\n  --twc-textBrand: 42 84.9% 53.1%;\n  --twc-bg3: 240 2.7% 14.5%;\n  --twc-bg4: 216 13.5% 92.7%;\n  --twc-bg4-opacity: 0.48;\n  --twc-backgroundPrimary: 240 1.8% 10.8%;\n  --twc-backgroundSecondary: 240 2.7% 14.5%;\n  --twc-backgroundTertiary: 216 13.5% 92.7%;\n  --twc-backgroundTertiary-opacity: 0.12;\n  --twc-successBg: 154.89999999999998 61.1% 41.4%;\n  --twc-successBg-opacity: 0.16;\n  --twc-errorBg: 0 100% 68%;\n  --twc-errorBg-opacity: 0.16;\n  --twc-depthBuyBg: 143.89999999999998 100% 64.1%;\n  --twc-depthBuyBg-opacity: 0.16;\n  --twc-iconNormal: 216 13.5% 92.7%;\n  --twc-iconNormal-opacity: 0.72;\n  --twc-iconSuccess: 154.89999999999998 61.1% 41.4%;\n  --twc-iconWarning: 42 84.9% 53.1%;\n  --twc-success: 154.79999999999995 68.9% 44.1%;\n  --twc-error: 0 100% 68%;\n  --twc-warning: 42 84.9% 53.1%;\n  --twc-warning-opacity: 0.16;\n  --twc-info: 143.89999999999998 100% 64.1%;\n  --twc-info-opacity: 0.16;\n  --twc-line: 216 13.5% 92.7%;\n  --twc-line-opacity: 0.08;\n  --twc-startGradient: 143.89999999999998 100% 64.1%;\n  --twc-finishGradient: 216 13.5% 92.7%;\n  --twc-finishGradient-opacity: 0.48;\n  --twc-lightGradientStart: 194.60000000000002 100% 59%;\n  --twc-lightGradientMid: 300.70000000000005 100% 84.1%;\n  --twc-lightGradientEnd: 46.69999999999999 100% 56.7%;\n}\n.scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n  border-radius: var(--scrollbar-track-radius);\n}\n.scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));\n}\n.scrollbar::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));\n}\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n  border-radius: var(--scrollbar-thumb-radius);\n}\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));\n}\n.scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));\n}\n.scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n  border-radius: var(--scrollbar-corner-radius);\n}\n.scrollbar::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));\n}\n.scrollbar::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));\n}\n.scrollbar {\n  scrollbar-width: auto;\n  scrollbar-color: initial initial;\n  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);\n}\n.scrollbar::-webkit-scrollbar {\n  display: block;\n  width: 16px;\n  width: var(--scrollbar-width, 16px);\n  height: 16px;\n  height: var(--scrollbar-height, 16px);\n}\n.word-break {\n  word-break: break-word;\n}\n.text-gradient-light {\n  background: linear-gradient(110deg, hsl(var(--twc-lightGradientStart)) 0%, hsl(var(--twc-lightGradientMid)) 48%, hsl(var(--twc-lightGradientEnd)) 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.\\*\\:-mb-\\[18px\\] > * {\n  margin-bottom: -18px;\n}\n.\\*\\:whitespace-nowrap > * {\n  white-space: nowrap;\n}\n.placeholder\\:text-text-primary::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-primary) / 1);\n  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));\n}\n.placeholder\\:text-text-primary::placeholder {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-primary) / 1);\n  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));\n}\n.last-of-type\\:\\!mb-5:last-of-type {\n  margin-bottom: 1.25rem !important;\n}\n.empty\\:hidden:empty {\n  display: none;\n}\n.data-\\[hidden\\=true\\]\\:hidden[data-hidden=true] {\n  display: none;\n}\n.data-\\[selected\\=true\\]\\:border-primary-default[data-selected=true] {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.data-\\[selected\\=\\'true\\'\\]\\:bg-bg3[data-selected='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-bg3) / 1);\n  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));\n}\n.data-\\[selected\\=\\'true\\'\\]\\:bg-primary[data-selected='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:-translate-x-0:hover {\n  --tw-translate-x: -0px;\n  transform: translate(-0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-\\[1\\.01\\]:hover {\n  --tw-scale-x: 1.01;\n  --tw-scale-y: 1.01;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.01) scaleY(1.01);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-\\[1\\.02\\]:hover {\n  --tw-scale-x: 1.02;\n  --tw-scale-y: 1.02;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.02) scaleY(1.02);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:bg-bg3:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-bg3) / 1);\n  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-button-primary-hovered:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-hovered) / 1);\n  background-color: hsl(var(--twc-button-primary-hovered) / var(--twc-button-primary-hovered-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-button-secondary-hovered:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-hovered) / 1);\n  background-color: hsl(var(--twc-button-secondary-hovered) / var(--twc-button-secondary-hovered-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-error-1-hover:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-hover) / 1);\n  background-color: hsl(var(--twc-error-1-hover) / var(--twc-error-1-hover-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-error-1-opacity-2:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-2) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-2) / var(--twc-error-1-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-line:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-primary-hover:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-hover) / 1);\n  background-color: hsl(var(--twc-primary-hover) / var(--twc-primary-hover-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-primary-opacity-2:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-2) / 1);\n  background-color: hsl(var(--twc-primary-opacity-2) / var(--twc-primary-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-utility-1-opacity-5:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, 1);\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.hover\\:text-primary:hover {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary) / 1);\n  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));\n}\n.hover\\:text-textPrimary:hover {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimary) / 1);\n  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n}\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\n.focus\\:border-error:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error) / 1);\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));\n}\n.focus\\:border-primary-default:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.focus\\:border-success:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-success) / 1);\n  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.active\\:scale-\\[0\\.9\\]:active {\n  --tw-scale-x: 0.9;\n  --tw-scale-y: 0.9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(0.9) scaleY(0.9);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.active\\:scale-\\[1\\.03\\]:active {\n  --tw-scale-x: 1.03;\n  --tw-scale-y: 1.03;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.03) scaleY(1.03);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.active\\:bg-button-primary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-pressed) / 1);\n  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-button-secondary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-pressed) / 1);\n  background-color: hsl(var(--twc-button-secondary-pressed) / var(--twc-button-secondary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-error-1-opacity-3:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-3) / var(--twc-error-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-error-1-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-pressed) / 1);\n  background-color: hsl(var(--twc-error-1-pressed) / var(--twc-error-1-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-primary-opacity-3:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-3) / 1);\n  background-color: hsl(var(--twc-primary-opacity-3) / var(--twc-primary-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-primary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-pressed) / 1);\n  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-utility-1-opacity-4:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-button-primary-pressed:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-pressed) / 1);\n  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-button-secondary-disabled:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-disabled) / 1);\n  background-color: hsl(var(--twc-button-secondary-disabled) / var(--twc-button-secondary-disabled-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-error-1-opacity-1:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-primary-opacity-1:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-primary-pressed:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-pressed) / 1);\n  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n@media (min-width: 768px) {\n\n  .md\\:h-\\[7rem\\] {\n    height: 7rem;\n  }\n\n  .md\\:w-\\[7rem\\] {\n    width: 7rem;\n  }\n\n  .md\\:max-w-\\[438px\\] {\n    max-width: 438px;\n  }\n\n  .md\\:max-w-\\[962px\\] {\n    max-width: 962px;\n  }\n}\n@media (max-width: 378px) {\n\n  .xs-max\\:px-1 {\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n}\n@media (max-width: 500px) {\n\n  .sm-max\\:\\!w-full {\n    width: 100% !important;\n  }\n}\n@media (max-width: 925px) {\n\n  .lg-max\\:mb-6 {\n    margin-bottom: 24px;\n  }\n\n  .lg-max\\:h-\\[180px\\] {\n    height: 180px;\n  }\n\n  .lg-max\\:h-\\[709px\\] {\n    height: 709px;\n  }\n\n  .lg-max\\:w-\\[488px\\] {\n    width: 488px;\n  }\n\n  .lg-max\\:w-full {\n    width: 100%;\n  }\n\n  .lg-max\\:w-min {\n    width: -moz-min-content;\n    width: min-content;\n  }\n\n  .lg-max\\:flex-col {\n    flex-direction: column;\n  }\n}\n@media (min-width: 926px) {\n\n  .lg-min\\:h-\\[312px\\] {\n    height: 312px;\n  }\n\n  .lg-min\\:h-\\[320px\\] {\n    height: 320px;\n  }\n\n  .lg-min\\:h-\\[497px\\] {\n    height: 497px;\n  }\n\n  .lg-min\\:h-\\[540px\\] {\n    height: 540px;\n  }\n\n  .lg-min\\:w-\\[342px\\] {\n    width: 342px;\n  }\n\n  .lg-min\\:w-\\[925px\\] {\n    width: 925px;\n  }\n\n  .lg-min\\:max-w-\\[925px\\] {\n    max-width: 925px;\n  }\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:text-black {\n    --tw-text-opacity: 1;\n    color: rgba(0, 0, 0, 1);\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n  }\n\n  .dark\\:invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) invert(100%) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  }\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:h-6::-moz-range-thumb {\n  height: 24px;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:w-6::-moz-range-thumb {\n  width: 24px;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:cursor-pointer::-moz-range-thumb {\n  cursor: pointer;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:rounded-full::-moz-range-thumb {\n  border-radius: 9999px;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:border-2::-moz-range-thumb {\n  border-width: 2px;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:border-none::-moz-range-thumb {\n  border-style: none;\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:border-background-primary::-moz-range-thumb {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-background-primary) / 1);\n  border-color: hsl(var(--twc-background-primary) / var(--twc-background-primary-opacity, var(--tw-border-opacity)));\n}\n.\\[\\&\\:\\:-moz-range-thumb\\]\\:bg-white::-moz-range-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:h-6::-webkit-slider-thumb {\n  height: 24px;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:w-6::-webkit-slider-thumb {\n  width: 24px;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:cursor-pointer::-webkit-slider-thumb {\n  cursor: pointer;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb {\n  border-radius: 9999px;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:border-2::-webkit-slider-thumb {\n  border-width: 2px;\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:border-background-primary::-webkit-slider-thumb {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-background-primary) / 1);\n  border-color: hsl(var(--twc-background-primary) / var(--twc-background-primary-opacity, var(--tw-border-opacity)));\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-white::-webkit-slider-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:shadow-md::-webkit-slider-thumb {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.\\[\\&\\>\\*\\:last-child\\]\\:ml-auto>*:last-child {\n  margin-left: auto;\n}\n.\\[\\&\\>\\*\\:not\\(\\:first-child\\)\\]\\:ml-4>*:not(:first-child) {\n  margin-left: 16px;\n}\n.\\[\\&_\\*\\]\\:invisible * {\n  visibility: hidden;\n}\n`, "", {
        version: 3,
        sources: ["webpack://./node_modules/tailwindcss/base.css", "webpack://./node_modules/react-tooltip/dist/react-tooltip.css", "webpack://./app/src/popup/uikit/styles/typography.css", "webpack://./node_modules/tailwindcss/components.css", "webpack://./app/src/popup/uikit/styles/components/buttons.css", "webpack://./app/src/popup/uikit/styles/components/checkboxes.css", "webpack://./app/src/popup/uikit/styles/components/text.css", "webpack://./app/src/popup/uikit/styles/components/alerts.css", "webpack://./app/src/popup/uikit/styles/components/inputs.css", "webpack://./app/src/popup/uikit/styles/components/radios.css", "webpack://./app/src/popup/uikit/styles/components/skeletons.css", "webpack://./app/src/popup/uikit/styles/components/switches.css", "webpack://./app/src/popup/uikit/styles/components/misc.css", "webpack://./node_modules/tailwindcss/utilities.css", "webpack://./app/src/popup/uikit/styles/index.css"],
        names: [],
        mappings: "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EAAnB,WAAmB;EAAnB;AAAmB;AAAnB;EAAA,QAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB,iLAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB,6KAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+KAAmB;EAAnB;AAAmB;AAAnB;EAAA,kCAAmB;EAAnB,0LAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB,mLAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,gBAAmB;EAAnB,iKAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB,eAAmB;EAAnB,+JAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB,iBAAmB;EAAnB,mKAAmB;EAAnB;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB,2BAAmB;EAAnB,uLAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;;EAAnB;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,yBAAmB;KAAnB,sBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;KAAnB,qBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;OAAnB;AAAmB;AAAnB;EAAA,qBAAmB;OAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,2BAAmB;EAAnB,mDAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,2BAAmB;EAAnB,mDAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,2BAAmB;EAAnB,mDAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,2BAAmB;EAAnB,mDAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,2BAAmB;EAAnB,mDAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,qCAAmB;EAAnB,6DAAmB;EAAnB,yCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,4BAAmB;EAAnB,oDAAmB;EAAnB,iCAAmB;EAAnB,yDAAmB;EAAnB,qCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,4BAAmB;EAAnB,oDAAmB;EAAnB,iCAAmB;EAAnB,yDAAmB;EAAnB,qCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,4BAAmB;EAAnB,oDAAmB;EAAnB,iCAAmB;EAAnB,yDAAmB;EAAnB,qCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,4BAAmB;EAAnB,oDAAmB;EAAnB,iCAAmB;EAAnB,yDAAmB;EAAnB,qCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+BAAmB;EAAnB,uDAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+BAAmB;EAAnB,uDAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+BAAmB;EAAnB,uDAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,wCAAmB;EAAnB,gEAAmB;EAAnB,iCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+BAAmB;EAAnB,uDAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,wCAAmB;EAAnB,gEAAmB;EAAnB,iCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,uCAAmB;EAAnB,+DAAmB;EAAnB,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,uCAAmB;EAAnB,+DAAmB;EAAnB,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,gCAAmB;EAAnB,wDAAmB;EAAnB,oCAAmB;EAAnB,4DAAmB;EAAnB,6BAAmB;EAAnB;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB,+BAAmB;EAAnB,uDAAmB;EAAnB,mCAAmB;EAAnB,2DAAmB;EAAnB,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iCAAmB;EAAnB,kDAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,+CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,oDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8BAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,kCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,sCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,sDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,4CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,8CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,yCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,iDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,kCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,yCAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,4DAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,4DAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,0CAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,qCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,iDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,iDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,mDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,kDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,kDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,0DAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,kCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,sDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,oDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,sDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,sDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,0CAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,sCAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,+CAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,iDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,yDAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kIAAmB;EAAnB,uFAAmB;EAAnB;AAAmB;AAAnB;EAAA,oIAAmB;EAAnB,wFAAmB;EAAnB;AAAmB;AAAnB;EAAA,yFAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sCAAmB;EAAnB;AAAmB;AAAnB;EAAA,2CAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;KAAnB;AAAmB;AAAnB;EAAA,oBAAmB;KAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2BAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,+BAAmB;EAAnB,6CAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB,sCAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB,0CAA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A;EAAA;AASA;AATA;EAAA,kBASA;EATA,yCASA;EATA;AASA;AATA;EAAA,kBASA;EATA,4DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,8DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,mDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,0CASA;EATA;AASA;AATA;EAAA,kBASA;EATA,mDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,yDASA;EATA;AASA;AATA;EAAA,oBASA;EATA,2BASA;EATA;AASA;AATA;EAAA,oBASA;EATA,kCASA;EATA;AASA;AATA;EAAA,oBASA;EATA,sCASA;EATA;AASA;AATA;EAAA;AASA;AATA;EAAA,sBASA;EATA,uCASA;EATA;AASA;AATA;EAAA,sBASA;EATA,iDASA;EATA;AASA;AATA;EAAA,sBASA;EATA,yCASA;EATA;AASA;AATA;EAAA,8BASA;EATA;AASA;AATA;EAAA,iBASA;EATA,iBASA;EATA,mKASA;EATA;AASA;AATA;EAAA,kBASA;EATA,kBASA;EATA,qKASA;EATA;AASA;AATA;EAAA,kBASA;EATA,4DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,8DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,qDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,qDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,yDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,4DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,+DASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,uDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,qDASA;EATA;AASA;AATA;;EAAA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;AAAA;AATA;;EAAA;IAAA,iBASA;IATA;EASA;AAAA;AATA;;EAAA;IAAA;EASA;AAAA;AATA;;EAAA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA,uBASA;IATA;EASA;;EATA;IAAA;EASA;AAAA;AATA;;EAAA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;;EATA;IAAA;EASA;AAAA;AATA;;EAAA;IAAA,oBASA;IATA,uBASA;IATA;EASA;;EATA;IAAA,yBASA;IATA,6KASA;IATA;EASA;AAAA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA,sBASA;EATA,oDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,wCASA;EATA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA,wBASA;UATA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA,sBASA;EATA,oDASA;EATA;AASA;AATA;EAAA,kBASA;EATA,wCASA;EATA;AASA;AATA;EAAA,iFASA;EATA,iGASA;EATA,sHASA;EATA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA;AATA;EAAA;AASA",
        sourcesContent: ["@tailwind base;\n", ":root {\n  --rt-color-white: #fff;\n  --rt-color-dark: #222;\n  --rt-color-success: #8dc572;\n  --rt-color-error: #be6464;\n  --rt-color-warning: #f0ad4e;\n  --rt-color-info: #337ab7;\n  --rt-opacity: 0.9;\n  --rt-transition-show-delay: 0.15s;\n  --rt-transition-closing-delay: 0.15s;\n}\n\n.core-styles-module_tooltip__3vRRp {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  will-change: opacity;\n}\n\n.core-styles-module_fixed__pcSol {\n  position: fixed;\n}\n\n.core-styles-module_arrow__cvMwQ {\n  position: absolute;\n  background: inherit;\n}\n\n.core-styles-module_noArrow__xock6 {\n  display: none;\n}\n\n.core-styles-module_clickable__ZuTTB {\n  pointer-events: auto;\n}\n\n.core-styles-module_show__Nt9eE {\n  opacity: var(--rt-opacity);\n  transition: opacity var(--rt-transition-show-delay) ease-out;\n}\n\n.core-styles-module_closing__sGnxF {\n  opacity: 0;\n  transition: opacity var(--rt-transition-closing-delay) ease-in;\n}\n\n/** end - core styles **/\n\n.styles-module_tooltip__mnnfp {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-size: 90%;\n  width: max-content;\n}\n\n.styles-module_arrow__K0L3T {\n  width: 8px;\n  height: 8px;\n}\n\n[class*='react-tooltip__place-top'] > .styles-module_arrow__K0L3T {\n  transform: rotate(45deg);\n}\n\n[class*='react-tooltip__place-right'] > .styles-module_arrow__K0L3T {\n  transform: rotate(135deg);\n}\n\n[class*='react-tooltip__place-bottom'] > .styles-module_arrow__K0L3T {\n  transform: rotate(225deg);\n}\n\n[class*='react-tooltip__place-left'] > .styles-module_arrow__K0L3T {\n  transform: rotate(315deg);\n}\n\n/** Types variant **/\n.styles-module_dark__xNqje {\n  background: var(--rt-color-dark);\n  color: var(--rt-color-white);\n}\n\n.styles-module_light__Z6W-X {\n  background-color: var(--rt-color-white);\n  color: var(--rt-color-dark);\n}\n\n.styles-module_success__A2AKt {\n  background-color: var(--rt-color-success);\n  color: var(--rt-color-white);\n}\n\n.styles-module_warning__SCK0X {\n  background-color: var(--rt-color-warning);\n  color: var(--rt-color-white);\n}\n\n.styles-module_error__JvumD {\n  background-color: var(--rt-color-error);\n  color: var(--rt-color-white);\n}\n\n.styles-module_info__BWdHW {\n  background-color: var(--rt-color-info);\n  color: var(--rt-color-white);\n}\n", "@font-face {\n  font-family: 'Inter';\n  src: url('../fonts/inter/Inter-Light.ttf') format('truetype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../fonts/inter/Inter-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../fonts/inter/Inter-Medium.ttf') format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../fonts/inter/Inter-SemiBold.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Inter';\n  src: url('../fonts/inter/Inter-Bold.ttf') format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Binance Plex';\n  src: url('../fonts/binancePlex/BinancePlex-Light.otf') format('opentype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Binance Plex';\n  src: url('../fonts/binancePlex/BinancePlex-Regular.otf') format('opentype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Binance Plex';\n  src: url('../fonts/binancePlex/BinancePlex-Medium.otf') format('opentype');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Binance Plex';\n  src: url('../fonts/binancePlex/BinancePlex-SemiBold.otf') format('opentype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Geeza';\n  src: url('../fonts/geeza/Geeza-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n\n@font-face {\n  font-family: 'Geeza';\n  src: url('../fonts/geeza/Geeza-Bold.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n\n@font-face {\n  font-family: 'Ping Fang';\n  src: url('../fonts/pingFang/PingFang-Light.ttf') format('truetype');\n  font-weight: 300;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n\n@font-face {\n  font-family: 'Ping Fang';\n  src: url('../fonts/pingFang/PingFang-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n\n@font-face {\n  font-family: 'Ping Fang';\n  src: url('../fonts/pingFang/PingFang-Bold.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n", "@tailwind components;\n", "@layer components {\n  .button {\n    @apply flex justify-center items-center cursor-pointer font-medium leading-body-16 disabled:pointer-events-none disabled:opacity-50;\n  }\n\n  .default-button {\n    @apply button rounded-curvy;\n  }\n\n  .icon-circle-button {\n    @apply button rounded-full;\n  }\n\n  .icon-square-button {\n    @apply button rounded-3;\n  }\n\n  /* Deprecated. */\n  .tiny-button {\n    @apply button rounded py-px px-1 text-caption-12;\n  }\n\n  .badge-button {\n    @apply button rounded py-1 px-2 text-caption-12;\n  }\n\n  .circle-button {\n    @apply button rounded-full p-3 text-subheader-16 leading-subheader-16;\n  }\n\n  .word-button {\n    @apply button rounded py-1 px-3 text-subheader-16 leading-subheader-16;\n  }\n}\n", "@layer components {\n  .checkbox {\n    @apply absolute appearance-none top-0 left-0;\n  }\n\n  .checkbox:checked::before {\n    @apply bg-primary border-primary;\n  }\n\n  .checkbox:disabled {\n    @apply opacity-40;\n  }\n\n  .checkbox::before {\n    content: '';\n    @apply block size-5 rounded-[5px] border-utility-1-opacity-3 border-[2.5px] aria-checked:bg-primary;\n  }\n}\n", "@layer components {\n  /* Legacy typography. */\n  .massive-text {\n    @apply text-headline4 leading-headline4;\n  }\n\n  .screamer-text {\n    @apply text-headline5 leading-headline5;\n  }\n\n  .headline-text {\n    @apply text-headline6 leading-headline6;\n  }\n\n  .header-text {\n    @apply text-subtitle1 leading-subtitle1;\n  }\n\n  .title-text {\n    @apply text-subtitle3 leading-subtitle3;\n  }\n\n  .body-text {\n    @apply text-subtitle4 leading-subtitle4;\n  }\n\n  .subtitle-text {\n    @apply text-body3 leading-body3;\n  }\n\n  .caption-text {\n    @apply text-caption1 leading-caption1;\n  }\n\n  .navigation-text {\n    @apply text-caption1 leading-caption1;\n  }\n\n  /* New typography. */\n  .typography-header-48 {\n    @apply text-header-48 leading-header-48;\n  }\n\n  .typography-header-32 {\n    @apply text-header-32 leading-header-32;\n  }\n\n  .typography-header-24 {\n    @apply text-header-24 leading-header-24;\n  }\n\n  .typography-header-20 {\n    @apply text-header-20 leading-header-20;\n  }\n\n  .typography-header-18 {\n    @apply text-header-18 leading-header-18;\n  }\n\n  .typography-header-16 {\n    @apply text-header-16 leading-header-16;\n  }\n\n  .typography-subheader-24 {\n    @apply text-subheader-24 leading-subheader-24;\n  }\n\n  .typography-subheader-20 {\n    @apply text-subheader-20 leading-subheader-20;\n  }\n\n  .typography-subheader-20 {\n    @apply text-subheader-20 leading-subheader-20;\n  }\n\n  .typography-subheader-18 {\n    @apply text-subheader-18 leading-subheader-18;\n  }\n\n  .typography-subheader-16 {\n    @apply text-subheader-16 leading-subheader-16;\n  }\n\n  .typography-subheader-14 {\n    @apply text-subheader-14 leading-subheader-14;\n  }\n\n  .typography-body-20 {\n    @apply text-body-20 leading-body-20;\n  }\n\n  .typography-body-16 {\n    @apply text-body-16 leading-body-16;\n  }\n\n  .typography-body-14 {\n    @apply text-body-14 leading-body-14;\n  }\n\n  .typography-body-12 {\n    @apply text-body-12 leading-body-12;\n  }\n\n  .typography-caption-12 {\n    @apply text-caption-12 leading-caption-12;\n  }\n\n  /* Other styles. */\n  .text-unset {\n    text-align: unset;\n  }\n\n  .break-word {\n    word-break: break-word;\n  }\n}\n", "@layer components {\n  .alert {\n    @apply w-full flex p-3 rounded-2;\n  }\n\n  .info-alert {\n    @apply alert bg-line;\n  }\n\n  .info-alt-alert {\n    @apply alert bg-depthBuyBg;\n  }\n\n  .default-alert {\n    @apply alert bg-utility-1-opacity-4;\n  }\n\n  .brand-alert {\n    @apply alert bg-primary-opacity-1;\n  }\n\n  .success-alert {\n    @apply alert bg-success-1-opacity-1;\n  }\n\n  .error-alert {\n    @apply alert bg-error-1-opacity-1;\n  }\n\n  .warning-alert {\n    @apply alert bg-warning-1-opacity-1;\n  }\n\n  .danger-alert {\n    @apply alert bg-errorBg;\n  }\n}\n", "@layer components {\n  .input {\n    @apply border flex items-center rounded-2 py-2 px-4 bg-transparent border-utility-1-opacity-3 focus-within:border-primary-default;\n  }\n\n  .input-field {\n    @apply input;\n  }\n\n  .search-field {\n    @apply input rounded-full p-2.5 border-none bg-input-search-bg;\n  }\n\n  .step-field {\n    @apply input;\n  }\n\n  .step-field-long {\n    @apply input;\n  }\n}\n", "@layer components {\n  .radio-group__option {\n    @apply flex items-center justify-center size-5 m-0.5 rounded-full border-utility-1-opacity-3 border-[2.5px] aria-checked:border-primary aria-disabled:opacity-40;\n  }\n\n  .radio-group__option-indicator {\n    @apply size-[10px] rounded-full bg-utility-1-opacity-3;\n  }\n\n  .radio-group__option[aria-checked='true'] .radio-group__option-indicator {\n    @apply bg-primary;\n  }\n}\n", "@layer components {\n  .skeleton {\n    --start-color: hsl(\n      var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity))\n    );\n    --end-color: hsl(\n      var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity))\n    );\n\n    background-image: linear-gradient(\n      270deg,\n      var(--start-color),\n      var(--end-color),\n      var(--end-color),\n      var(--start-color)\n    );\n    background-size: 400% 100%;\n    animation: bg-position 3s ease-in-out infinite;\n    box-shadow: none;\n    background-clip: padding-box;\n    cursor: default;\n    pointer-events: none;\n    user-select: none;\n    flex-shrink: 0;\n    @apply flex-shrink-0 rounded-1;\n  }\n\n  @keyframes bg-position {\n    from {\n      background-position: 200% 0;\n    }\n    to {\n      background-position: -200% 0;\n    }\n  }\n}\n", "@layer components {\n  .switch {\n    @apply relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-utility-1-opacity-3 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;\n  }\n\n  .switch[aria-checked='true'] {\n    @apply bg-primary;\n  }\n\n  .switch[aria-checked='true'] .switch__toggle {\n    @apply translate-x-4;\n  }\n\n  .switch:disabled {\n    @apply opacity-40;\n  }\n\n  .switch__toggle {\n    @apply pointer-events-none inline-block w-5 h-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out;\n  }\n}\n", "@layer components {\n  .tw-scrollbar {\n    @apply overflow-hidden overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-utility-1-opacity-3 scrollbar-track-transparent;\n  }\n\n  .tw-tooltip {\n    @apply !max-w-xs !bg-tooltip !opacity-100 !backdrop-blur-1 !text-utility-1-default !typography-body-14 !shadow-md !z-50 !px-3 !py-2 !rounded-1;\n    font-size: 14px !important;\n  }\n\n  .tw-tooltip .react-tooltip-arrow {\n    @apply hidden;\n  }\n\n  .tw-overlay {\n    @apply fixed backdrop-blur-xs inset-0 bg-overlay-50;\n  }\n}\n", "@tailwind utilities;\n", "@import 'tailwindcss/base';\n@import 'react-tooltip/dist/react-tooltip.css';\n@import './typography.css';\n@import './base.css';\n\n@import 'tailwindcss/components';\n@import './components/index.css';\n\n@import 'tailwindcss/utilities';\n"],
        sourceRoot: ""
      }]);
      const F = x
    },
    83397: (A, n, t) => {
      t.d(n, {
        p: () => a
      });
      var r = t(38208);

      function a() {
        return r.w.find(A => A === navigator.language || A.split("-")[0] === navigator.language.split("-")[0]) || "en"
      }
    },
    84989: (A, n, t) => {
      A.exports = t.p + "6563999da1964c37c508.otf"
    },
    88407: (A, n, t) => {
      t.d(n, {
        L: () => c
      });
      var r = t(98649),
        a = t(80577),
        e = t(6517),
        o = (A, n, t) => new Promise((r, a) => {
          var e = A => {
              try {
                c(t.next(A))
              } catch (A) {
                a(A)
              }
            },
            o = A => {
              try {
                c(t.throw(A))
              } catch (A) {
                a(A)
              }
            },
            c = A => A.done ? r(A.value) : Promise.resolve(A.value).then(e, o);
          c((t = t.apply(A, n)).next())
        });

      function c(A) {
        return o(this, null, function*() {
          A.checking || (A.checking = !0, (yield(0, a.r)(A)) === r.k.IDLE ? A.missCount++ : A.statusProvider.emit(r.V.EVENT, r.k.READY), A.missCount >= A.MAX_MISS_RECONNECT && (A.statusProvider.emit(r.V.EVENT, r.k.LOADING), A.portStream = new e.Dz(A.portName), A.statusProvider.emit(r.V.REPLACED, r.k.LOADING), A.missCount = 0), A.checking = !1, setTimeout(() => c(A), A.THRESHOLD))
        })
      }
    },
    89419: (A, n, t) => {
      t.d(n, {
        T: () => r
      });
      const r = (0, t(20038).Z0)({
        name: "sdkFeatureSlice",
        initialState: {
          prepareSend: null,
          prepareSendResolvedAddress: null,
          prepareSendResolvingAddress: !1,
          earn: null,
          stakeDetails: null,
          navigation: null,
          stake: null,
          validatorSelector: null,
          stakeDetailsError: null,
          gasStatus: null,
          gasStation: null,
          homeEarnWidget: null
        },
        reducers: {
          setPrepareSendState(A, n) {
            A.prepareSend = n.payload.data
          },
          removePrepareSendState(A) {
            A.prepareSend = null, A.prepareSendResolvedAddress = null, A.prepareSendResolvingAddress = !1
          },
          setPrepareSendResolvedAddress(A, n) {
            A.prepareSendResolvedAddress = n.payload, A.prepareSendResolvingAddress = !1
          },
          clearPrepareSendResolvedAddress(A) {
            A.prepareSendResolvedAddress = null, A.prepareSendResolvingAddress = !1
          },
          clearPrepareSendAddressError(A) {
            A.prepareSend && (A.prepareSend.addressError = null)
          },
          setPrepareSendResolvingAddress(A, n) {
            A.prepareSendResolvingAddress = n.payload
          },
          setEarnState(A, n) {
            A.earn = n.payload
          },
          removeEarnState(A) {
            A.earn = null
          },
          setStakeDetailsState(A, n) {
            A.stakeDetails = n.payload
          },
          removeStakeDetailsState(A) {
            A.stakeDetails = null
          },
          setStakeDetailsError(A, n) {
            A.stakeDetailsError = n.payload
          },
          removeStakeDetailsError(A) {
            A.stakeDetailsError = null
          },
          setStakeState(A, n) {
            A.stake = n.payload
          },
          removeStakeState(A) {
            A.stake = null
          },
          setNavigation(A, n) {
            A.navigation = n.payload
          },
          clearNavigation(A) {
            A.navigation = null
          },
          setValidatorSelectorState(A, n) {
            A.validatorSelector = n.payload
          },
          removeValidatorSelectorState(A) {
            A.validatorSelector = null
          },
          setGasStatusState(A, n) {
            A.gasStatus = n.payload
          },
          removeGasStatusState(A) {
            A.gasStatus = null
          },
          setGasStationState(A, n) {
            A.gasStation = n.payload
          },
          removeGasStationState(A) {
            A.gasStation = null
          },
          setHomeEarnWidgetState(A, n) {
            A.homeEarnWidget = n.payload
          },
          removeHomeEarnWidgetState(A) {
            A.homeEarnWidget = null
          }
        }
      })
    },
    90658: (A, n, t) => {
      var r;
      t.d(n, {
        A: () => c,
        B: () => o
      });
      const a = "object" == typeof chrome && null != (r = null == chrome ? void 0 : chrome.runtime) && r.id ? t(96815) : {},
        e = a;
      e.action = a.action || a.browserAction;
      const o = () => {
          var A;
          return !(null == (A = null == chrome ? void 0 : chrome.storage) || !A.session)
        },
        c = e
    },
    93726: (A, n, t) => {
      t.d(n, {
        X: () => r
      });
      const r = {
        LIGHT: "light",
        DARK: "dark",
        SYSTEM: "system"
      }
    },
    94023: (A, n, t) => {
      A.exports = t.p + "dd9993384c19c3bc71d3.ttf"
    },
    94323: (A, n, t) => {
      t.d(n, {
        A: () => a
      });
      var r = t(24439);
      const a = {
        SITE_DISCONNECTED: (0, r.w3)("SITE_DISCONNECTED"),
        CHAIN_CHANGED: (0, r.w3)("CHAIN_CHANGED"),
        ACCOUNT_CHANGED: (0, r.w3)("ACCOUNT_CHANGED"),
        DEFAULT_WALLET_CHANGED: (0, r.w3)("DEFAULT_WALLET_CHANGED"),
        BNB_STAKING_CHAIN_CHANGED: (0, r.w3)("BNB_STAKING_CHAIN_CHANGED"),
        ONE_TAP_CLOSED: (0, r.w3)("OneTapClosed"),
        ONE_TAP_WAGMI: (0, r.w3)("OneTapWagmi"),
        WALLET_CONNECTED_ON_ORIGIN: (0, r.w3)("WalletConnectedOnOrigin")
      }
    },
    94566: (A, n, t) => {
      var r = t(14644),
        a = t(61855),
        e = t(58464),
        o = t(1824),
        c = t(28398),
        i = t(35328),
        B = t(42836),
        s = t(17855),
        l = t(31357),
        p = t(52856),
        d = t(48305),
        m = t(81481),
        w = t(64001),
        E = t(4387),
        y = t(89419),
        g = t(12464);
      (0, r.HY)({
        migrations: m.K.reducer,
        app: a.A.reducer,
        dapps: i.b.reducer,
        wallet: d.u.reducer,
        asset: e.H.reducer,
        nft: o.p.reducer,
        fiat: B.Z.reducer,
        notification: s.y.reducer,
        settings: l.s.reducer,
        tx: p.B.reducer,
        blockchains: c.A.reducer,
        staking: w.m.reducer,
        swap: E.W.reducer,
        sdkFeatures: y.T.reducer,
        approvals: g.L.reducer
      })
    },
    98649: (A, n, t) => {
      t.d(n, {
        V: () => c,
        k: () => o
      });
      var r, a = t(37007),
        e = t.n(a),
        o = ((r = o || {}).READY = "READY", r.LOADING = "LOADING", r.IDLE = "IDLE", r.RESTARTING = "RESTARTING", r);
      class c extends(e()) {
        constructor() {
          super(...arguments), this.status = "LOADING"
        }
        emit(A, n) {
          return this.status = n, super.emit(A, n)
        }
        emitReplaced(A, n) {
          return super.emit(A, n)
        }
      }
      c.EVENT = "EVENT", c.REPLACED = "REPLACED"
    }
  }
]);
