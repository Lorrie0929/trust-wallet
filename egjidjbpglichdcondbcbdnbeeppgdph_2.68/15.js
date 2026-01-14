"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [15], {
    1824: (t, n, r) => {
      r.d(n, {
        p: () => a
      });
      const a = (0, r(20038).Z0)({
        name: "nft",
        initialState: {
          collections: [],
          collectionsLastSync: null,
          reportedByWallet: {},
          nfts: {}
        },
        reducers: {
          addCollections(t, n) {
            t.collections.push(...n.payload.collections)
          },
          resetCollections(t, n) {
            t.collections = n.payload.collections
          },
          removeCollection(t, n) {
            t.collections = t.collections.filter(t => t.id !== n.payload.id)
          },
          reduceCollectionOwnedTokens(t, n) {
            const r = t.collections.find(t => t.id === n.payload.id);
            r && (r.totalOwnedTokens -= 1)
          },
          reportCollection(t, n) {
            if (n.payload.report) t.reportedByWallet[n.payload.walletId] ? t.reportedByWallet[n.payload.walletId].push(n.payload.collectionId) : t.reportedByWallet[n.payload.walletId] = [n.payload.collectionId];
            else {
              const r = t.reportedByWallet[n.payload.walletId].indexOf(n.payload.collectionId);
              t.reportedByWallet[n.payload.walletId].splice(r, 1)
            }
          },
          resetCollectionItems(t, n) {
            t.nfts[n.payload.collectionId] = {
              lastSync: Date.now(),
              items: n.payload.items
            }
          },
          appendCollectionItems(t, n) {
            n.payload.collectionId in t.nfts && (t.nfts[n.payload.collectionId].items.push(...n.payload.items), t.nfts[n.payload.collectionId].lastSync = Date.now())
          },
          resetItemsByCollectionKey(t) {
            const n = Object.keys(t.nfts);
            for (let r = 0; r < n.length; r++) t.collections.some(t => t.id === n[r]) || delete t.nfts[n[r]]
          },
          touchNFTs(t) {
            t.collectionsLastSync = Date.now()
          }
        }
      })
    },
    2597: (t, n, r) => {
      r.d(n, {
        Dz: () => o,
        b4: () => i,
        uv: () => c
      });
      var a = r(90658),
        e = r(81220);
      class o extends e.X {
        constructor(t) {
          var n;
          super(), this.port = null == (n = a.A.runtime) ? void 0 : n.connect({
            name: t || "extension-message"
          }), this.port || location.reload(), this.port.onMessage.addListener(t => {
            const n = t.method;
            !n || !this.listeners[n] || this.listeners[n].forEach(n => n(t))
          })
        }
        send(t) {
          try {
            this.port.postMessage(t)
          } catch (t) {
            if ("Attempting to use a disconnected port object" === t?.message) return;
            throw t
          }
        }
        listen(t) {
          this.port.onMessage.addListener(n => {
            t(n)
          })
        }
        disconnect() {
          this.port.disconnect()
        }
      }
      const c = t => (a.A.runtime.onMessage.addListener(t), () => a.A.runtime.onMessage.removeListener(t)),
        i = t => a.A.runtime.sendMessage(t)
    },
    3725: (t, n, r) => {
      t.exports = r.p + "8f89158e397ee29236ed.ttf"
    },
    4387: (t, n, r) => {
      r.d(n, {
        W: () => c
      });
      var a = r(56120),
        e = r(20038);
      const o = {
          settings: {
            mev: !0,
            thorchainStreams: !0,
            solanaTurboSwaps: !1,
            environment: a.g.PRODUCTION
          },
          isP2PBannerClosed: !1,
          isUSCitizen: null,
          assets: {
            fromAsset: null,
            toAsset: null
          },
          swap712Data: {
            isEip712: !1,
            provider: null
          }
        },
        c = (0, e.Z0)({
          name: "swap",
          initialState: o,
          reducers: {
            toggleMev(t) {
              t.settings.mev = !t.settings.mev
            },
            toggleThorchainStreams(t) {
              t.settings.thorchainStreams = !t.settings.thorchainStreams
            },
            toggleSolanaTurboSwaps(t) {
              t.settings.solanaTurboSwaps = !t.settings.solanaTurboSwaps
            },
            updateEnvironment(t, n) {
              t.settings.environment = n.payload
            },
            closeP2PBanner(t) {
              t.isP2PBannerClosed = !0
            },
            setFromAsset(t, n) {
              t.assets.fromAsset = n.payload
            },
            setToAsset(t, n) {
              t.assets.toAsset = n.payload
            },
            setSwap712Data(t, n) {
              t.swap712Data = n.payload
            },
            setIsUSCitizen(t, n) {
              t.isUSCitizen = n.payload
            }
          }
        })
    },
    4431: (t, n, r) => {
      t.exports = r.p + "8e752fd0ad0ea39bc216.ttf"
    },
    6517: (t, n, r) => {
      r.d(n, {
        Dz: () => e.Dz,
        M8: () => a.M,
        b4: () => e.b4,
        uv: () => e.uv
      }), r(13123), r(32887);
      var a = r(35798),
        e = r(2597)
    },
    11711: (t, n, r) => {
      r.d(n, {
        A: () => e
      });
      var a = r(24439);
      const e = {
        RESET: (0, a.If)("Reset"),
        LOCK: (0, a.If)("Lock"),
        LOCK_CALLBACK: (0, a.If)("Lock_callback"),
        AUTHENTICATE: (0, a.If)("Authenticate"),
        REGISTER_DEVICE: (0, a.If)("RegisterDevice"),
        APP_DISPLAYED: (0, a.If)("AppDisplayed"),
        WARNING_DISPLAYED: (0, a.If)("WarningDisplayed"),
        ICON_THEME_CHANGED: (0, a.If)("IconThemeChanged"),
        OPEN_POPUP: (0, a.If)("OpenPopup"),
        GET_APP_SETTINGS: (0, a.w3)("GetAppSettings"),
        GET_APP_NODES: (0, a.w3)("GetAppNodes"),
        GET_STORE: (0, a.If)("GetStore"),
        GET_REDUX_STATE: (0, a.If)("GetReduxState"),
        DISPATCH_REDUX_ACTION: (0, a.If)("DispatchReduxAction"),
        PING: (0, a.w3)("Ping"),
        GET_ONE_TAP_SETTINGS: (0, a.w3)("GetOneTapSettings"),
        ONE_TAP_DISMISS: (0, a.w3)("OneTapDismiss"),
        ONE_TAP_CONNECT: (0, a.w3)("OneTapConnect"),
        GET_TOKEN_SCANNER_I18N: (0, a.w3)("GetTokenScannerI18n"),
        GET_TOKEN_SCANNER_ENABLED: (0, a.w3)("GetTokenScannerEnabled"),
        GET_TOKEN_BASIC_INFO: (0, a.w3)("GetTokenBasicInfo"),
        GET_TOKEN_MARKET_DATA: (0, a.w3)("GetTokenMarketData"),
        GET_SIMILAR_TOKENS_COUNT: (0, a.w3)("GetSimilarTokensCount"),
        GET_SIMILAR_TOKENS: (0, a.w3)("GetSimilarTokens"),
        OPEN_SWAP_PAGE: (0, a.w3)("OpenSwapPage"),
        GET_FEATURE_FLAG: (0, a.w3)("GetFeatureFlag"),
        SET_TOKEN_SCANNER_ENABLED: (0, a.w3)("SetTokenScannerEnabled"),
        TRACK_ANALYTICS: (0, a.w3)("TrackAnalytics"),
        ANNOUNCEMENT_DISPLAYED: (0, a.If)("AnnouncementDisplayed"),
        FETCH_ANNOUNCEMENTS: (0, a.If)("FetchAnnouncements"),
        FETCH_USER_VIP_TIER_DATA: (0, a.If)("FetchUserVipTierData"),
        FETCH_FUNDING_METHODS: (0, a.If)("FetchFundingMethods"),
        ROUTE_CHANGED: (0, a.If)("RouteChanged")
      }
    },
    12464: (t, n, r) => {
      r.d(n, {
        L: () => i
      });
      var a = r(20038),
        e = r(72519),
        o = r(93155);

      function c(t, n) {
        t.approvalsPerWallet[n] || (t.approvalsPerWallet[n] = {
          items: [],
          lastSync: null
        })
      }
      const i = (0, a.Z0)({
        name: "approvals",
        initialState: {
          approvalsPerWallet: {}
        },
        reducers: {
          startWallet(t, n) {
            c(t, n.payload.walletId)
          },
          setApprovalsLoading(t, n) {
            c(t, n.payload.walletId), t.approvalsPerWallet[n.payload.walletId].loading = !0
          },
          updateApprovals(t, n) {
            c(t, n.payload.walletId);
            const {
              approvals: r,
              walletId: a,
              nextToken: i,
              append: l
            } = n.payload, s = t.approvalsPerWallet[a].items.filter(t => t.risk_analysis.level === e.b.PENDING), p = Date.now(), d = new Set;
            if (s.forEach(t => {
                t.pendingTimestamp && p - t.pendingTimestamp > 6e5 && (d.add(`${t.chain}-${t.address}-${t.asset.id}-${t.spender.address}`), o.A.debug("[ApprovalsStore] Pending approval expired", {
                  chain: t.chain,
                  asset: t.asset.id,
                  spender: t.spender.address
                }))
              }), o.A.debug("[ApprovalsStore] Updating approvals", {
                newCount: r.length,
                existingCount: t.approvalsPerWallet[a].items.length,
                pendingCount: s.length,
                expiredCount: d.size,
                append: l
              }), l) t.approvalsPerWallet[a].items = [...t.approvalsPerWallet[a].items, ...r];
            else {
              const n = [...r];
              s.forEach(t => {
                if (r.some(n => n.chain === t.chain && n.address.toLowerCase() === t.address.toLowerCase() && n.asset.id === t.asset.id && n.spender.address.toLowerCase() === t.spender.address.toLowerCase())) {
                  const r = `${t.chain}-${t.address}-${t.asset.id}-${t.spender.address}`;
                  if (d.has(r)) o.A.debug("[ApprovalsStore] Using backend data for expired approval");
                  else {
                    const r = n.findIndex(n => n.chain === t.chain && n.address.toLowerCase() === t.address.toLowerCase() && n.asset.id === t.asset.id && n.spender.address.toLowerCase() === t.spender.address.toLowerCase());
                    r >= 0 && (n[r] = t, o.A.debug("[ApprovalsStore] Preserving PENDING status"))
                  }
                } else o.A.debug("[ApprovalsStore] Approval revoked on-chain", {
                  chain: t.chain,
                  asset: t.asset.id,
                  spender: t.spender.address
                })
              }), t.approvalsPerWallet[a].items = n
            }
            t.approvalsPerWallet[a].lastSync = (new Date).getTime(), t.approvalsPerWallet[a].nextToken = i, t.approvalsPerWallet[a].error = !1, t.approvalsPerWallet[a].loading = !1
          },
          setApprovalsError(t, n) {
            c(t, n.payload.walletId), t.approvalsPerWallet[n.payload.walletId].error = !0, t.approvalsPerWallet[n.payload.walletId].loading = !1
          },
          clearApprovalsError(t, n) {
            c(t, n.payload.walletId), t.approvalsPerWallet[n.payload.walletId].error = !1
          },
          clearApprovals(t, n) {
            c(t, n.payload.walletId), t.approvalsPerWallet[n.payload.walletId].items = [], t.approvalsPerWallet[n.payload.walletId].lastSync = null, t.approvalsPerWallet[n.payload.walletId].nextToken = void 0
          },
          markApprovalAsPendingRevoke(t, n) {
            c(t, n.payload.walletId);
            const {
              chain: r,
              address: a,
              assetId: i,
              spenderAddress: l,
              walletId: s,
              txHash: p
            } = n.payload, d = t.approvalsPerWallet[s].items.findIndex(t => t.chain === r && t.address.toLowerCase() === a.toLowerCase() && t.asset.id === i && t.spender.address.toLowerCase() === l.toLowerCase());
            0 > d ? o.A.warn("[ApprovalsStore] Approval not found", {
              chain: r,
              assetId: i,
              spenderAddress: l
            }) : (t.approvalsPerWallet[s].items[d].risk_analysis.level = e.b.PENDING, t.approvalsPerWallet[s].items[d].pendingTxHash = p, t.approvalsPerWallet[s].items[d].pendingTimestamp = Date.now(), o.A.debug("[ApprovalsStore] Marked approval as PENDING"))
          },
          removeApproval(t, n) {
            c(t, n.payload.walletId);
            const {
              chain: r,
              address: a,
              assetId: e,
              spenderAddress: o,
              walletId: i
            } = n.payload;
            t.approvalsPerWallet[i].items = t.approvalsPerWallet[i].items.filter(t => !(t.chain === r && t.address.toLowerCase() === a.toLowerCase() && t.asset.id === e && t.spender.address.toLowerCase() === o.toLowerCase()))
          }
        }
      })
    },
    13123: (t, n, r) => {
      r(66644), r(81220).X
    },
    13787: (t, n, r) => {
      t.exports = r.p + "850da36ebaa95f783ceb.otf"
    },
    15314: (t, n, r) => {
      r.d(n, {
        W: () => e
      });
      var a, e = ((a = e || {}).LIGHT = "light", a.DARK = "dark", a)
    },
    17855: (t, n, r) => {
      r.d(n, {
        y: () => d
      });
      var a = r(20038),
        e = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        l = {}.hasOwnProperty,
        s = {}.propertyIsEnumerable,
        p = (t, n, r) => n in t ? e(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r;
      const d = (0, a.Z0)({
        name: "notification",
        initialState: [],
        reducers: {
          updateNotification(t, n) {
            const r = ((t, n) => o(t, c(n)))(((t, n) => {
                for (var r in n || (n = {})) l.call(n, r) && p(t, r, n[r]);
                if (i)
                  for (var r of i(n)) s.call(n, r) && p(t, r, n[r]);
                return t
              })({}, n.payload), {
                expiresAt: (new Date).getTime() + 6e5
              }),
              a = r.id,
              e = t.findIndex(t => t.id === a);
            0 > e ? t.push(r) : t.splice(e, 1, r)
          },
          removeNotification(t, n) {
            const r = n.payload,
              a = t.findIndex(t => t.id === r); - 1 !== a && t.splice(a, 1)
          },
          cleanAll: () => []
        }
      })
    },
    20015: (t, n, r) => {
      r.r(n), r.d(n, {
        default: () => A
      });
      var a = r(74848),
        e = r(85072),
        o = r.n(e),
        c = r(97825),
        i = r.n(c),
        l = r(77659),
        s = r.n(l),
        p = r(55056),
        d = r.n(p),
        w = r(10540),
        y = r.n(w),
        b = r(41113),
        g = r.n(b),
        h = r(82293),
        v = {};
      v.styleTagTransform = g(), v.setAttributes = d(), v.insert = s().bind(null, "head"), v.domAPI = i(), v.insertStyleElement = y(), o()(h.A, v), h.A && h.A.locals && h.A.locals;
      var u = r(5338),
        x = r(71468),
        m = r(68157),
        f = r(64145),
        k = r(96540);
      const S = () => (0, a.jsxs)("div", {
        className: "loading-page-container",
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          padding: "16px",
          boxSizing: "border-box"
        },
        children: [(0, a.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flex: 1
          },
          children: (0, a.jsx)("div", {
            className: "loading-spinner",
            style: {
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          })
        }), (0, a.jsx)("style", {
          children: "\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n          \n          .loading-page-container {\n            background-color: #FFFFFF;\n          }\n          \n          .loading-spinner {\n            border: 3px solid #2525253D;\n            border-top: 3px solid #0500FF;\n          }\n          \n          /* Dark mode styles */\n          @media (prefers-color-scheme: dark) {\n            .loading-page-container {\n              background-color: #1B1B1C;\n            }\n            \n            .loading-spinner {\n              border-color: #EAECEF3D;\n              border-top-color: #48FF91;\n            }\n          }\n        "
        })]
      });
      var T = r(93155);
      const _ = (0, k.lazy)(() => Promise.all([r.e(8100), r.e(4482)]).then(r.bind(r, 94499))),
        A = function(t) {
          return ((t, n, r) => new Promise((n, a) => {
            var e = t => {
                try {
                  c(r.next(t))
                } catch (t) {
                  a(t)
                }
              },
              o = t => {
                try {
                  c(r.throw(t))
                } catch (t) {
                  a(t)
                }
              },
              c = t => t.done ? n(t.value) : Promise.resolve(t.value).then(e, o);
            c((r = r.apply(t, null)).next())
          }))(this, 0, function*() {
            yield(0, f.k$)(t);
            const n = yield(0, m.TB)(f.YW), r = document.getElementById("root");

            function e(t, n, r, a, e, o) {
              T.A.debug({
                id: t,
                phase: n,
                actualDuration: r,
                baseDuration: a,
                startTime: e,
                commitTime: o
              })
            }(0, u.createRoot)(r).render((0, a.jsx)(x.Kq, {
              store: n,
              children: (0, a.jsx)(k.Suspense, {
                fallback: (0, a.jsx)(k.Profiler, {
                  id: "LoadingPage",
                  onRender: e,
                  children: (0, a.jsx)(S, {})
                }),
                children: (0, a.jsx)(k.Profiler, {
                  id: "App",
                  onRender: e,
                  children: (0, a.jsx)(_, {})
                })
              })
            }))
          })
        }
    },
    23230: (t, n, r) => {
      t.exports = r.p + "5f36217efbb124e1f06e.otf"
    },
    24439: (t, n, r) => {
      r.d(n, {
        If: () => c,
        w3: () => i
      });
      var a, e = ((a = e || {}).INTERNAL = "INTERNAL", a.PUBLIC = "PUBLIC", a);

      function o(t, n) {
        return `${n}_${t}`
      }

      function c(t) {
        return o(t, "INTERNAL")
      }

      function i(t) {
        return o(t, "PUBLIC")
      }
    },
    26113: (t, n, r) => {
      r.d(n, {
        Z: () => a,
        sP: () => e,
        yy: () => o
      });
      const a = () => {},
        e = t => {
          const n = window.open(t, "_blank", "noopener nofollow noreferrer");
          n && (n.opener = null)
        },
        o = t => new Promise(n => setTimeout(n, t))
    },
    28398: (t, n, r) => {
      r.d(n, {
        A: () => h,
        l: () => y
      });
      var a, e = r(37724),
        o = r(93155),
        c = r(20038),
        i = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        s = {}.hasOwnProperty,
        p = {}.propertyIsEnumerable,
        d = (t, n, r) => n in t ? i(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        w = (t, n) => {
          for (var r in n || (n = {})) s.call(n, r) && d(t, r, n[r]);
          if (l)
            for (var r of l(n)) p.call(n, r) && d(t, r, n[r]);
          return t
        },
        y = ((a = y || {}).MAIN = "MAIN", a.CUSTOM = "CUSTOM", a);
      const b = w(w(w({
        items: {},
        customItems: {},
        blockchainsLastSync: null,
        filterByBlockchain: null
      }, e.KW), e.Ed), e.Mh);

      function g(t, n, r) {
        var a;
        return !(null == (a = {
          CUSTOM: t.customItems,
          MAIN: t.items
        } [r]) || !a[n])
      }
      const h = (0, c.Z0)({
        name: "blockchains",
        initialState: b,
        reducers: {
          updateBlockchains(t, n) {
            n.payload.forEach(n => {
              t.items[n.id] = n, delete t.customItems[n.id]
            })
          },
          setSelectedBlockchainIfNone(t, n) {
            const {
              id: r,
              selectedBlockchainType: a
            } = n.payload;
            if (!t.selectedBlockchain) {
              if (g(t, r, a)) return t.selectedBlockchainType = n.payload.selectedBlockchainType, void(t.selectedBlockchain = n.payload.id);
              o.A.error(`Invalid blockchain for selected type ${r}:${a}`)
            }
          },
          setSelectedBlockchain(t, n) {
            const {
              id: r,
              selectedBlockchainType: a
            } = n.payload;
            if (g(t, r, a)) return t.selectedBlockchainType = n.payload.selectedBlockchainType, void(t.selectedBlockchain = n.payload.id);
            o.A.error(`Invalid blockchain for selected type ${r}:${a}`)
          },
          setFilteringBlockchain(t, n) {
            t.filterByBlockchain = n.payload
          },
          addCustomBlockchain(t, n) {
            t.customItems[n.payload.id] = n.payload
          },
          removeCustomBlockchain(t, n) {
            delete t.customItems[n.payload]
          },
          touchBlockchains(t) {
            t.blockchainsLastSync = (new Date).getTime()
          }
        }
      })
    },
    31335: (t, n, r) => {
      r.d(n, {
        i: () => s
      });
      var a = r(88407),
        e = r(98649),
        o = r(80577),
        c = r(26113),
        i = r(93155),
        l = r(6517);

      function s(t) {
        return new Promise(n => {
          (0, o.r)(t).then(r => {
            r === e.k.READY ? (n(t), (0, a.L)(t)) : (t.portStream = new l.Dz(t.portName), t.statusProvider.emit(e.V.REPLACED, e.k.LOADING), (0, o.r)(t).then(r => {
              r === e.k.READY ? (t.statusProvider.emit(e.V.EVENT, e.k.READY), n(t), (0, a.L)(t)) : n((0, c.yy)(t.RETRY_THRESHOLD).then(() => s(t)))
            }).catch(i.A.error))
          }).catch(i.A.error)
        })
      }
    },
    31357: (t, n, r) => {
      r.d(n, {
        s: () => u
      });
      var a = r(6517),
        e = r(20038),
        o = r(93726),
        c = r(94323),
        i = r(83397),
        l = Object.defineProperty,
        s = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        w = {}.hasOwnProperty,
        y = {}.propertyIsEnumerable,
        b = (t, n, r) => n in t ? l(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        g = (t, n) => {
          for (var r in n || (n = {})) w.call(n, r) && b(t, r, n[r]);
          if (d)
            for (var r of d(n)) y.call(n, r) && b(t, r, n[r]);
          return t
        },
        h = (t, n) => s(t, p(n));
      const v = {
          locale: (0, i.p)(),
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
            colorMode: o.X.SYSTEM
          },
          translations: {},
          translationsLastFetch: {},
          preferSidePanel: !0,
          baseCurrency: "USD",
          passkeyId: null,
          isPasswordGenerated: !1
        },
        u = (0, e.Z0)({
          name: "settings",
          initialState: v,
          reducers: {
            setLanguage(t, n) {
              t.locale = n.payload
            },
            setLoadingTranslations(t, n) {
              t.loadingTranslations = n.payload
            },
            setIsCustomNonceEnabled(t, n) {
              t.developerSettings.isCustomNonceEnabled = n.payload
            },
            setIsAdvancedGasControlsEnabled(t, n) {
              t.developerSettings.isAdvancedGasControlsEnabled = n.payload
            },
            setIsAdvancedTransactionDataEnabled(t, n) {
              t.developerSettings.isAdvancedTransactionDataEnabled = n.payload
            },
            setPushNotifications(t, n) {
              t.pushNotifications.isPushEnabled = n.payload, t.pushNotifications.isSendAndReceiveEnabled = n.payload
            },
            setNotificationTopics(t, n) {
              t.pushNotifications.topics = n.payload
            },
            setTranslations(t, n) {
              t.translations[t.locale] = n.payload.messages
            },
            setTranslationsLastFetch(t, n) {
              t.translationsLastFetch[n.payload.language] = n.payload.timestamp
            },
            setIsDefaultWallet(t, n) {
              (0, a.M8)({
                method: c.A.DEFAULT_WALLET_CHANGED,
                data: {
                  params: n.payload
                }
              }), t.isDefaultWallet = n.payload
            },
            setIsAnalyticsEnabled(t, n) {
              t.privacy = h(g({}, t.privacy), {
                isAnalyticsEnabled: n.payload
              })
            },
            setHideBalancesOnDashboard(t, n) {
              t.privacy = h(g({}, t.privacy), {
                hideBalancesOnDashboard: n.payload
              })
            },
            setUIColorMode(t, n) {
              t.ui = h(g({}, t.ui), {
                colorMode: n.payload
              })
            },
            toggleSidePanelPreference(t, n) {
              t.preferSidePanel = n.payload
            },
            setBaseCurrency(t, n) {
              t.baseCurrency = n.payload
            },
            setPasskeyId(t, n) {
              t.passkeyId = n.payload
            },
            setIsExportPrivateKeyEnabled(t, n) {
              t.developerSettings.isExportPrivateKeyEnabled = n.payload
            },
            setIsPasswordGenerated(t, n) {
              t.isPasswordGenerated = n.payload
            }
          }
        })
    },
    32887: (t, n, r) => {
      var a = r(37007);
      r.n(a)
    },
    35328: (t, n, r) => {
      r.d(n, {
        b: () => d
      });
      var a = r(20038),
        e = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        l = {}.hasOwnProperty,
        s = {}.propertyIsEnumerable,
        p = (t, n, r) => n in t ? e(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r;
      const d = (0, a.Z0)({
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
          addDapp(t, n) {
            const r = n.payload,
              {
                origin: a
              } = r;
            return Object.values(t.dapps).find(t => t.origin === a) || (t.dapps[r.id] = r), t
          },
          addConnectedDapp(t, n) {
            const {
              id: r,
              chainId: a,
              networkId: e,
              accountId: o,
              address: c,
              walletId: i
            } = n.payload;
            return t.connectedDapps[r] || (t.connectedDapps[r] = []), t.connectedDapps[r].find(t => t.accountId === o && t.address === c) || t.connectedDapps[r].push({
              id: r,
              date: (new Date).getTime(),
              chainId: a,
              networkId: e,
              address: c,
              accountId: o,
              walletId: i
            }), t
          },
          disconnectDapp(t, n) {
            const {
              id: r,
              accountId: a
            } = n.payload, e = t.connectedDapps[r];
            if (!e) return t;
            const o = e.filter(t => t.accountId !== a);
            return t.connectedDapps[r] = o, 0 === o.length && delete t.connectedDapps[r], t
          },
          addBlacklistedSite(t, n) {
            const r = ((t, n) => o(t, c(n)))(((t, n) => {
              for (var r in n || (n = {})) l.call(n, r) && p(t, r, n[r]);
              if (i)
                for (var r of i(n)) s.call(n, r) && p(t, r, n[r]);
              return t
            })({}, n.payload), {
              id: (0, a.Ak)(),
              date: (new Date).getTime()
            });
            return t.blacklistedSites = [...t.blacklistedSites, r], t
          },
          removeBlacklistedSite: (t, n) => (t.blacklistedSites = t.blacklistedSites.filter(t => t.id !== n.payload), t)
        }
      })
    },
    35798: (t, n, r) => {
      r.d(n, {
        M: () => e
      });
      var a = r(90658);
      const e = t => {
        return n = function*() {
          var n;
          const r = null != (n = yield a.A.tabs.query({})) ? n : [];
          yield Promise.all(r.filter(t => !!t?.id).map(n => a.A.tabs.sendMessage(n.id, t).catch(t => {
            var n;
            null == (n = a.A.runtime.lastError) || n.message
          })))
        }, new Promise((t, r) => {
          var a = t => {
              try {
                o(n.next(t))
              } catch (t) {
                r(t)
              }
            },
            e = t => {
              try {
                o(n.throw(t))
              } catch (t) {
                r(t)
              }
            },
            o = n => n.done ? t(n.value) : Promise.resolve(n.value).then(a, e);
          o((n = n.apply(null, null)).next())
        });
        var n
      }
    },
    37724: (t, n, r) => {
      r.d(n, {
        Ed: () => e,
        KW: () => c,
        Mh: () => o
      });
      var a = r(47236);
      const e = {
          selectedBlockchainOnSolana: "solana",
          selectedBlockchainTypeOnSolana: a.l.MAIN,
          validatorsLastSync: 0
        },
        o = {
          selectedBlockchainOnBinance: "binance",
          selectedBlockchainTypeOnBinance: a.l.MAIN
        },
        c = {
          selectedBlockchain: "",
          selectedBlockchainType: a.l.MAIN
        }
    },
    38208: (t, n, r) => {
      r.d(n, {
        w: () => a
      });
      const a = ["ar", "bg-BG", "my-MM", "zh-CN", "zh-TC", "cs-CZ", "da-DK", "en", "fr", "de", "el-GR", "id", "it", "ja", "kk-KZ", "ko", "lv-LV", "lo-LA", "pl-PL", "pt", "pt-BR", "ro-RO", "ru", "si-LK", "es-ES", "es-LA", "sv-SE", "tr", "uk-UA", "vi"]
    },
    39094: (t, n, r) => {
      t.exports = r.p + "f0be7d273c3543fe4c4a.ttf"
    },
    42836: (t, n, r) => {
      r.d(n, {
        Z: () => a
      });
      const a = (0, r(20038).Z0)({
        name: "fiat",
        initialState: {
          rates: {},
          items: []
        },
        reducers: {
          updateFiats(t, n) {
            for (const r of n.payload) {
              const n = t.items.findIndex(t => t.id === r.id);
              0 > n ? t.items.push(r) : t.items.splice(n, 1, r)
            }
          }
        }
      })
    },
    44872: (t, n, r) => {
      t.exports = r.p + "e87a6b531eb2210f7d44.ttf"
    },
    45668: (t, n, r) => {
      function a(t, n) {
        return "mnemonic" === t && (t = "Seed Phrase"), `${t.charAt(0).toUpperCase()+t.slice(1)} ${n.reduce((n,r)=>r.type===t?++n:n,1)}`
      }
      r.d(n, {
        k: () => a
      })
    },
    47236: (t, n, r) => {
      r.d(n, {
        l: () => e
      });
      var a, e = ((a = e || {}).MAIN = "MAIN", a.CUSTOM = "CUSTOM", a)
    },
    48275: (t, n, r) => {
      r.d(n, {
        P: () => s
      });
      var a = r(98939),
        e = r(11711),
        o = r(93155);
      let c = 0,
        i = new Map,
        l = i;
      class s {
        constructor(t) {
          this.dispatch = t => (o.A.getLogger(s.name).debug("Dispatching action " + JSON.stringify(t)), this.transport.emit(e.A.DISPATCH_REDUX_ACTION, t).catch(o.A.error), t), this.ensureCanMutateNextListeners = () => {
            l === i && (l = new Map, i.forEach((t, n) => {
              l.set(n, t)
            }))
          }, this.getState = () => this.state, this.subscribe = t => {
            this.ensureCanMutateNextListeners();
            const n = c++;
            l.set(n, t);
            let r = !0;
            return () => {
              r && (r = !1, this.ensureCanMutateNextListeners(), l.delete(n), i = null)
            }
          }, this.replaceReducer = t => {
            throw Error("Method not implemented.")
          }, this.setTransport(t)
        }
        setTransport(t) {
          this.transport = t, this.transport.listen(t => {
            t.method === a.TF && (this.state = t.data, (i = l).forEach(t => {
              t()
            }))
          })
        }
        boot() {
          return t = this, n = function*() {
            try {
              const t = yield this.transport.emit(e.A.GET_REDUX_STATE);
              this.state = t
            } catch (t) {
              return o.A.error(t)
            }
          }, new Promise((r, a) => {
            var e = t => {
                try {
                  c(n.next(t))
                } catch (t) {
                  a(t)
                }
              },
              o = t => {
                try {
                  c(n.throw(t))
                } catch (t) {
                  a(t)
                }
              },
              c = t => t.done ? r(t.value) : Promise.resolve(t.value).then(e, o);
            c((n = n.apply(t, null)).next())
          });
          var t, n
        } [Symbol.observable]() {
          throw Error("Method not implemented.")
        }
      }
    },
    48305: (t, n, r) => {
      r.d(n, {
        u: () => h
      });
      var a = r(20038),
        e = r(98939),
        o = r(45668),
        c = r(93155),
        i = Object.defineProperty,
        l = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        w = {}.propertyIsEnumerable,
        y = (t, n, r) => n in t ? i(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        b = (t, n) => {
          for (var r in n || (n = {})) d.call(n, r) && y(t, r, n[r]);
          if (p)
            for (var r of p(n)) w.call(n, r) && y(t, r, n[r]);
          return t
        },
        g = (t, n) => l(t, s(n));
      const h = (0, a.Z0)({
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
          setSwitching(t, n) {
            t.switching = n.payload
          },
          changeWalletName(t, n) {
            t.wallets[n.payload.id].name = n.payload.name
          },
          setWalletId(t, n) {
            t.walletId = n.payload.walletId, t.selectedAccountId = n.payload.accountId
          },
          addToBalancesArray(t, n) {
            t.balancesPerWalletAccount[n.payload.id] = {}, t.balancesPerWalletAccount[n.payload.id][t.selectedAccountId] = t.balancesPerWalletAccount[n.payload.id][t.selectedAccountId] || {}
          },
          addWallet(t, n) {
            Object.keys(t.wallets).length < e.Dv ? (t.wallets[n.payload.id] = {
              balance: "0",
              id: n.payload.id,
              registered: !1,
              type: n.payload.type,
              name: n.payload.name || (0, o.k)(n.payload.type, Object.values(t.wallets)),
              isImported: n.payload.isImported
            }, t.balancesPerWalletAccount[n.payload.id] = {}, t.balancesPerWalletAccount[n.payload.id][n.payload.accountId] = {}, t.accountsPerWallet[n.payload.id] = {}, t.accountsPerWallet[n.payload.id][n.payload.accountId] = {}) : c.A.error("Maximum wallets amount reached")
          },
          removeWallet(t, n) {
            delete t.wallets[n.payload], delete t.accountsPerWallet[n.payload], t.walletId = Object.keys(t.wallets)[0], t.walletId && (t.selectedAccountId = Object.keys(t.accountsPerWallet[t.walletId])[0]), Object.keys(t.accountsPerWallet).forEach(r => {
              r === n.payload && delete t.accountsPerWallet[r]
            })
          },
          setWalletAsRegistered(t, n) {
            t.accountsPerWallet[n.payload.walletId][n.payload.accountId] = g(b({}, t.accountsPerWallet[n.payload.walletId][n.payload.accountId]), {
              registered: !0
            })
          },
          setWalletCoinsAsRegistered(t, n) {
            t.accountsPerWallet[n.payload.walletId][n.payload.accountId] = g(b({}, t.accountsPerWallet[n.payload.walletId][n.payload.accountId]), {
              coinsRegistered: !0
            })
          },
          setCoinsAsRegistered(t, n) {
            const r = t.accountsPerWallet[n.payload.walletId][n.payload.accountId].coinsRegisteredMap || {};
            Object.keys(n.payload.records).forEach(t => {
              r[t] = n.payload.records[t]
            }), t.accountsPerWallet[n.payload.walletId][n.payload.accountId].coinsRegisteredMap = r
          },
          removeAccount(t, n) {
            const {
              walletId: r,
              accountId: a
            } = n.payload;
            if (Object.values(t.accountsPerWallet[r]).find(t => t.id === a)) return t.accountsPerWallet[r] && delete t.accountsPerWallet[r][a], t.balancesPerWalletAccount[r] && delete t.balancesPerWalletAccount[r][a], t;
            c.A.error(`Account with id ${a} not found in wallet ${r}`)
          },
          addAccounts(t, n) {
            t.accountsPerWallet[n.payload.walletId][n.payload.accountId] = t.accountsPerWallet[n.payload.walletId][n.payload.accountId] || {}, t.accountsPerWallet[n.payload.walletId][n.payload.accountId] = {
              id: n.payload.accountId,
              items: n.payload.accounts,
              derivationIndex: n.payload.derivationIndex,
              name: n.payload.name,
              registered: !1
            }, t.balancesPerWalletAccount[n.payload.walletId] || (t.balancesPerWalletAccount[n.payload.walletId] = {}), t.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] || (t.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] = {})
          },
          pushAccounts(t, n) {
            t.accountsPerWallet[n.payload.walletId] || (t.accountsPerWallet[n.payload.walletId] = {}), t.accountsPerWallet[n.payload.walletId][n.payload.accountId] || (t.accountsPerWallet[n.payload.walletId][n.payload.accountId] = {}), t.accountsPerWallet[n.payload.walletId][n.payload.accountId].items = b(b({}, t.accountsPerWallet[n.payload.walletId][n.payload.accountId].items), n.payload.accounts)
          },
          setRefreshingBalance(t, n) {
            t.refreshingBalance = n.payload
          },
          setSeedPhraseBackupRequired(t, n) {
            t.wallets[n.payload.walletId].seedPhraseBackupRequired = n.payload.backupRequired
          },
          setBalances(t, n) {
            n.payload.balances.forEach(r => {
              const {
                balance: a,
                staked: e,
                rewards: o,
                pending: c,
                frozen: i,
                locked: l,
                blocked: s,
                claimable: p,
                transferable: d,
                inscription: w,
                coinId: y,
                address: b,
                dust: g,
                blockchainId: h,
                assetId: v,
                bandwidth: u,
                energy: x,
                reserved: m
              } = r;
              t.balancesPerWalletAccount[n.payload.walletId] || (t.balancesPerWalletAccount[n.payload.walletId] = {}), t.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] || (t.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId] = {}), t.balancesPerWalletAccount[n.payload.walletId][n.payload.accountId][v] = {
                balance: a,
                staked: e,
                rewards: o,
                pending: c,
                frozen: i,
                locked: l,
                blocked: s,
                claimable: p,
                transferable: d,
                inscription: w,
                dust: g,
                coinId: y,
                address: b,
                blockchainId: h,
                bandwidth: u,
                energy: x,
                reserved: m
              }
            })
          },
          updateRefreshLastRun(t, n) {
            t.refreshLastRun = n.payload
          },
          updateAssetsLastRun(t, n) {
            t.wallets[n.payload.walletId].assetsLastRun = n.payload.timestamp
          },
          addAddressBookWallet(t, n) {
            t.addressBook[n.payload.id] = n.payload
          },
          setAddressBookWallet(t, n) {
            t.addressBook[n.payload.id] = n.payload
          },
          removeAddressBookWallet(t, n) {
            const r = b({}, t.addressBook);
            delete r[n.payload], t.addressBook = r
          },
          removeAddressBookWalletAddress(t, n) {
            const r = b({}, t.addressBook);
            delete r[n.payload.walletId].addresses[n.payload.coinId], t.addressBook[n.payload.walletId] = r[n.payload.walletId]
          },
          updateAccountName(t, n) {
            t.accountsPerWallet[n.payload.walletId][n.payload.accountId].name = n.payload.name
          }
        }
      })
    },
    52598: (t, n, r) => {
      t.exports = r.p + "c51b145d8cf66a74cc74.ttf"
    },
    52781: (t, n, r) => {
      t.exports = r.p + "8583bd6fce14da34ea43.ttf"
    },
    52856: (t, n, r) => {
      r.d(n, {
        B: () => g
      });
      var a = r(93155),
        e = r(20038),
        o = r(15192),
        c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        p = {}.hasOwnProperty,
        d = {}.propertyIsEnumerable,
        w = (t, n, r) => n in t ? c(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        y = (t, n) => {
          for (var r in n || (n = {})) p.call(n, r) && w(t, r, n[r]);
          if (s)
            for (var r of s(n)) d.call(n, r) && w(t, r, n[r]);
          return t
        },
        b = (t, n) => i(t, l(n));
      const g = (0, e.Z0)({
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
          startWallet(t, n) {
            t.itemsPerWalletAccount[n.payload.walletId] = {}, t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []
          },
          updateTransactionStatus(t, n) {
            const {
              id: r,
              status: e,
              fee: c,
              walletId: i,
              hash: l,
              accountId: s
            } = n.payload;
            t.itemsPerWalletAccount[i] || (t.itemsPerWalletAccount[i] = {}), t.itemsPerWalletAccount[i][s] || (t.itemsPerWalletAccount[i][s] = []);
            const p = t.itemsPerWalletAccount[i][s],
              d = p.findIndex(t => t.hash === r);
            0 > d ? a.A.warn("Trying to update transaction out of range " + r) : p[d] = b(y({}, p[d]), {
              status: e,
              fee: (0, o.z)(c[0]).gt(0) ? c : p[d].fee,
              initialFee: p[d].fee,
              hash: l || p[d].hash,
              initialHash: p[d].initialHash
            }), t.itemsPerWalletAccount[i][s] = p
          },
          updateTx(t, n) {
            var r, a;
            const e = n.payload.item;
            t.itemsPerWalletAccount[n.payload.walletId] || (t.itemsPerWalletAccount[n.payload.walletId] = {}), t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const o = null != (a = null == (r = t.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : r[n.payload.accountId]) ? a : [],
              c = o.findIndex(t => t.hash === e.hash);
            0 > c ? o.push(e) : o[c] = b(y({}, e), {
              nft: o[c].nft
            }), t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = o
          },
          removeAccountTransactions(t, n) {
            t.itemsPerWalletAccount[n.payload.walletId] && delete t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId], t.fetchedTransactionPeriodsByAccount[n.payload.walletId] && delete t.fetchedTransactionPeriodsByAccount[n.payload.walletId][n.payload.accountId], t.fetchedAllChainsTransactionPeriodsByAccount[n.payload.walletId] && delete t.fetchedAllChainsTransactionPeriodsByAccount[n.payload.walletId][n.payload.accountId]
          },
          updateTxs(t, n) {
            var r, a;
            t.itemsPerWalletAccount[n.payload.walletId] || (t.itemsPerWalletAccount[n.payload.walletId] = {}), t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const e = null != (a = null == (r = t.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : r[n.payload.accountId]) ? a : [];
            n.payload.items.forEach(t => {
              const n = e.findIndex(n => n.hash === t.hash);
              if (0 > n) e.push(t);
              else {
                const r = e[n].events.map((n, r) => {
                  const a = t.events[r];
                  return b(y({}, a), {
                    metadata: y(y({}, n.metadata), a.metadata)
                  })
                });
                e[n] = b(y({}, t), {
                  nft: e[n].nft,
                  events: r
                })
              }
            }), t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = e
          },
          updateGasFees(t, n) {
            t.gasFees = n.payload
          },
          updateCachedTransactionsPeriod(t, n) {
            const {
              selectedWalletId: r,
              assetId: a,
              from: e,
              to: o,
              nextToken: c,
              accountId: i
            } = n.payload;
            t.fetchedTransactionPeriodsByAccount[r] || (t.fetchedTransactionPeriodsByAccount[r] = {}), t.fetchedTransactionPeriodsByAccount[r][i] || (t.fetchedTransactionPeriodsByAccount[r][i] = {}), t.fetchedTransactionPeriodsByAccount[r][i][a] = {
              from: e,
              to: o,
              nextToken: c
            }
          },
          updateAllChainsCachedTransactionsPeriod(t, n) {
            const {
              selectedWalletId: r,
              blockchains: a,
              from: e,
              to: o,
              nextToken: c,
              accountId: i
            } = n.payload;
            t.fetchedAllChainsTransactionPeriodsByAccount[r] || (t.fetchedAllChainsTransactionPeriodsByAccount[r] = {}), t.fetchedAllChainsTransactionPeriodsByAccount[r][i] = {
              from: e,
              to: o,
              blockchains: a,
              nextToken: c
            }
          },
          removeTxsForNetwork(t, n) {
            var r, a;
            t.itemsPerWalletAccount[n.payload.walletId] || (t.itemsPerWalletAccount[n.payload.walletId] = {}), t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] || (t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = []);
            const e = null != (a = null == (r = t.itemsPerWalletAccount[n.payload.walletId]) ? void 0 : r[n.payload.accountId]) ? a : [];
            t.itemsPerWalletAccount[n.payload.walletId][n.payload.accountId] = e.filter(t => t.blockchain.id !== n.payload.blockchainId)
          }
        }
      })
    },
    56120: (t, n, r) => {
      r.d(n, {
        g: () => e
      });
      var a, e = ((a = e || {}).STAGING = "staging", a.PRODUCTION = "production", a)
    },
    58464: (t, n, r) => {
      r.d(n, {
        H: () => b
      });
      var a = r(20038),
        e = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        l = {}.hasOwnProperty,
        s = {}.propertyIsEnumerable,
        p = (t, n, r) => n in t ? e(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        d = (t, n) => {
          for (var r in n || (n = {})) l.call(n, r) && p(t, r, n[r]);
          if (i)
            for (var r of i(n)) s.call(n, r) && p(t, r, n[r]);
          return t
        },
        w = (t, n) => o(t, c(n));

      function y(t, n) {
        t.assetsPerWallet[n] || (t.assetsPerWallet[n] = {
          itemsV2: [],
          testItems: [],
          assetsLastSync: null
        })
      }
      const b = (0, a.Z0)({
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
          startWallet(t, n) {
            y(t, n.payload.walletId)
          },
          updateAssetsV2(t, n) {
            y(t, n.payload.walletId);
            const r = t.assetsPerWallet[n.payload.walletId].itemsV2;
            for (const t of n.payload.assets) {
              const n = r.findIndex(n => n.blockchainId === t.blockchainId && n.address === t.address),
                a = w(d({}, t), {
                  name: "Binance" === t.name ? "BNB Chain" : t.name
                });
              0 > n ? r.push(a) : r.splice(n, 1, a)
            }
          },
          updateMigratableAssets(t, n) {
            t.assetsToBeMigrated.items = n.payload, t.assetsToBeMigrated.lastSync = (new Date).getTime()
          },
          removeAssetsForBlockchain(t, n) {
            y(t, n.payload.walletId);
            for (const r of Object.keys(t.assetsPerWallet)) t.assetsPerWallet[r].itemsV2 = t.assetsPerWallet[r].itemsV2.filter(t => t.blockchainId !== n.payload.blockchainId)
          },
          setIsShownInHomeScreen(t, n) {
            y(t, n.payload.walletId);
            const r = t.assetsPerWallet[n.payload.walletId].itemsV2.findIndex(t => t.assetId === n.payload.item.assetId);
            0 > r ? t.assetsPerWallet[n.payload.walletId].itemsV2.push(w(d({}, n.payload.item), {
              isShownInHomeScreen: !0
            })) : t.assetsPerWallet[n.payload.walletId].itemsV2.splice(r, 1, w(d({}, t.assetsPerWallet[n.payload.walletId].itemsV2[r]), {
              isShownInHomeScreen: !t.assetsPerWallet[n.payload.walletId].itemsV2[r].isShownInHomeScreen
            }))
          },
          setIsShownInHomeScreenBulk(t, n) {
            y(t, n.payload.walletId), n.payload.items.forEach(r => b.caseReducers.setIsShownInHomeScreen(t, {
              payload: {
                item: r,
                walletId: n.payload.walletId
              },
              type: n.type
            }))
          },
          touchAssets(t) {
            t.assetsLastSync = (new Date).getTime()
          },
          setAssetsWithBalanceAlreadyEnabled(t, n) {
            t.assetsWithBalanceAlreadyEnabled[n.payload.currentWalletId] = n.payload.assetsEnabled
          },
          setMarketSentimentSupportedCrypto(t, n) {
            t.marketSentimentSupportedCrypto = n.payload
          },
          setIsAssetRegistered(t, n) {
            const r = t.assetsPerWallet[n.payload.walletId].itemsV2.findIndex(t => t.assetId === n.payload.assetId);
            r >= 0 && (t.assetsPerWallet[n.payload.walletId].itemsV2[r].isRegistered = n.payload.isRegistered)
          },
          setCexFundingAssets(t, n) {
            t.cexFundingAssets[n.payload.providerId] = n.payload.assets
          }
        }
      })
    },
    60469: (t, n, r) => {
      t.exports = r.p + "86c330c66f7333ff6202.ttf"
    },
    61855: (t, n, r) => {
      r.d(n, {
        A: () => g
      });
      var a = r(15314),
        e = r(20038),
        o = Object.defineProperty,
        c = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        s = {}.hasOwnProperty,
        p = {}.propertyIsEnumerable,
        d = (t, n, r) => n in t ? o(t, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : t[n] = r,
        w = (t, n) => {
          for (var r in n || (n = {})) s.call(n, r) && d(t, r, n[r]);
          if (l)
            for (var r of l(n)) p.call(n, r) && d(t, r, n[r]);
          return t
        },
        y = (t, n) => c(t, i(n));
      const b = {
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
          iconTheme: a.W.LIGHT,
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
          approvalsExpanded: !1
        },
        g = (0, e.Z0)({
          name: "app",
          initialState: b,
          reducers: {
            setDeviceId(t, n) {
              t.deviceId = n.payload
            },
            setHashKey(t, n) {
              t.hashKey = n.payload
            },
            setAuthenticated(t, n) {
              t.authenticated = n.payload
            },
            setIconTheme(t, n) {
              t.iconTheme = n.payload
            },
            setIcon(t, n) {
              t.icon = n.payload
            },
            setMigrationStatus(t, n) {
              t.migrated = n.payload
            },
            setNewAuthMigrated(t, n) {
              t.newAuthMigrated = n.payload
            },
            setFirstTime(t, n) {
              t.firstTime = n.payload
            },
            setWarningDisplayed(t, n) {
              t.warningDisplayed = n.payload
            },
            setWarningDisplayedSent(t, n) {
              t.warningDisplayedSent = n.payload
            },
            setShowEmptyWalletImportedModal(t, n) {
              t.showEmptyWalletImportedModal = n.payload
            },
            setStorageVersion(t, n) {
              t.storageVersion = n.payload
            },
            setIdentityId(t, n) {
              t.identityId = n.payload
            },
            setAuthenticating(t, n) {
              t.authenticating = n.payload
            },
            setNewsFlagOff(t, n) {
              t.newFlag = y(w({}, t.newFlag), {
                [n.payload]: !0
              })
            },
            setFeatureFlags(t, n) {
              t.featureFlags = n.payload
            },
            setTokenScannerEnabled(t, n) {
              t.tokenScannerEnabled = n.payload
            },
            setLegacyDeviceId(t, n) {
              t.legacyDeviceId = n.payload
            },
            setAuthIdentifier(t, n) {
              t.authIdentifier = n.payload
            },
            setSidePanelOpened(t, n) {
              t.sidePanelOpened = n.payload
            },
            setCountryCode(t, n) {
              t.countryCode = n.payload
            },
            closeOneTap(t) {
              t.oneTap || (t.oneTap = {}), t.oneTap.dismissCount = t.oneTap.dismissCount ? t.oneTap.dismissCount + 1 : 1, t.oneTap.lastTimeClosed = (new Date).getTime()
            },
            useOneTap(t) {
              t.oneTap || (t.oneTap = {}), t.oneTap.dismissCount = 0, t.oneTap.lastTimeClosed = 0
            },
            toggleOneTapSetting(t, n) {
              t.oneTap || (t.oneTap = {}), t.oneTap.isOneTapDisabled = n.payload, n.payload && (t.oneTap.dismissCount = 0, t.oneTap.lastTimeClosed = 0)
            },
            addAnalyticsEvent(t, n) {
              t.analyticsQueue || (t.analyticsQueue = []), t.analyticsQueue.push(y(w({}, n.payload.event), {
                id: n.payload.id
              }))
            },
            clearAnalyticEvent(t, n) {
              t.analyticsQueue = (t.analyticsQueue || []).filter(t => !n.payload.includes(t.id))
            },
            addToast(t, n) {
              t.toasts.push(n.payload)
            },
            removeToast(t, n) {
              t.toasts = t.toasts.filter(t => t.id !== n.payload.id)
            },
            setWalletNewlyImported(t, n) {
              t.walletNewlyImported = n.payload
            },
            setLastTimeClosedWalletModal(t, n) {
              t.lastTimeClosedWalletModal = n.payload
            },
            setPreventAutoTriggerBiometrics(t, n) {
              t.preventAutoTriggerBiometrics = n.payload
            },
            setNavigationOrigin(t, n) {
              t.navigationOrigin = n.payload
            },
            clearNavigationOrigin(t) {
              t.navigationOrigin = void 0
            },
            setHomeScreenAssetsExpanded(t, n) {
              t.homeScreenAssetsExpanded = n.payload
            },
            setApprovalsExpanded(t, n) {
              t.approvalsExpanded = n.payload
            }
          }
        })
    },
    64001: (t, n, r) => {
      r.d(n, {
        m: () => a
      });
      const a = (0, r(20038).Z0)({
        name: "staking",
        initialState: {
          validators: {},
          delegations: {},
          stakingList: [],
          validatorsLastSync: {}
        },
        reducers: {
          updateValidators(t, n) {
            t.validators[n.payload.blockchain] = n.payload.validators
          },
          updateDelegations(t, n) {
            t.delegations[n.payload.walletId] || (t.delegations[n.payload.walletId] = {}), t.delegations[n.payload.walletId][n.payload.blockchain] = n.payload.delegations
          },
          updateStakingList(t, n) {
            t.stakingList = n.payload
          },
          touchValidators(t, n) {
            t.validatorsLastSync[n.payload] = (new Date).getTime()
          }
        }
      })
    },
    64145: (t, n, r) => {
      r.d(n, {
        Qq: () => l,
        W0: () => s,
        YW: () => p,
        b4: () => a.b4,
        k$: () => d
      });
      var a = r(6517),
        e = r(98939),
        o = r(31335),
        c = r(98649),
        i = (t, n, r) => new Promise((a, e) => {
          var o = t => {
              try {
                i(r.next(t))
              } catch (t) {
                e(t)
              }
            },
            c = t => {
              try {
                i(r.throw(t))
              } catch (t) {
                e(t)
              }
            },
            i = t => t.done ? a(t.value) : Promise.resolve(t.value).then(o, c);
          i((r = r.apply(t, n)).next())
        });
      const l = new c.V,
        s = {
          portName: e.xo,
          checking: !1,
          missCount: 0,
          THRESHOLD: 5e3,
          FIRST_TIME_WAIT: 200,
          RETRY_THRESHOLD: 400,
          MAX_MISS_RECONNECT: 15,
          statusProvider: l
        },
        p = new Proxy({}, {
          get: (t, n, r) => Reflect.get(s.portStream, n, r)
        });

      function d(t) {
        return i(this, null, function*() {
          t && Object.assign(s, t), yield(0, o.i)(s)
        })
      }
    },
    67982: (t, n, r) => {
      t.exports = r.p + "a17b9c1448ef44367a5f.ttf"
    },
    68157: (t, n, r) => {
      r.d(n, {
        GV: () => s,
        M_: () => p,
        TB: () => d,
        jL: () => l
      }), r(93155);
      var a = r(79448),
        e = r.n(a),
        o = (r(62311), r(48275)),
        c = (r(94566), r(71468)),
        i = (t, n, r) => new Promise((a, e) => {
          var o = t => {
              try {
                i(r.next(t))
              } catch (t) {
                e(t)
              }
            },
            c = t => {
              try {
                i(r.throw(t))
              } catch (t) {
                e(t)
              }
            },
            i = t => t.done ? a(t.value) : Promise.resolve(t.value).then(o, c);
          i((r = r.apply(t, n)).next())
        });
      e();
      const l = c.wA.withTypes(),
        s = c.d4.withTypes();
      c.Pj.withTypes();
      let p = {};

      function d(t) {
        return i(this, null, function*() {
          const n = new o.P(t);
          return yield n.boot(), p = n, p
        })
      }
    },
    72519: (t, n, r) => {
      r.d(n, {
        b: () => e
      });
      var a, e = ((a = e || {}).LOW_RISK = "LOW_RISK", a.MEDIUM_RISK = "MEDIUM_RISK", a.HIGH_RISK = "HIGH_RISK", a.PENDING = "PENDING", a)
    },
    75576: (t, n, r) => {
      t.exports = r.p + "d52a01d17b566af4e096.ttf"
    },
    77318: (t, n, r) => {
      t.exports = r.p + "ad33b33b93e135d216bd.otf"
    },
    80577: (t, n, r) => {
      r.d(n, {
        r: () => c
      });
      var a = r(11711),
        e = r(98649),
        o = r(26113);

      function c(t) {
        return t.portStream ? Promise.race([t.portStream.emit(a.A.PING), (0, o.yy)(t.FIRST_TIME_WAIT).then(() => e.k.IDLE)]) : Promise.resolve(e.k.IDLE)
      }
    },
    81220: (t, n, r) => {
      r.d(n, {
        X: () => e
      });
      var a = r(44329);
      class e {
        constructor() {
          this.listeners = {}
        }
        addListener(t, n) {
          const r = this.listeners[t] || [];
          r.push(n), this.listeners[t] = r
        }
        once(t, n) {
          this.addListener(t, r => (delete this.listeners[t], n(r)))
        }
        emit(t, n) {
          return new Promise((r, e) => {
            const o = `${t}_${(0,a.Ak)()}_callback`;
            this.once(o, t => ((t, n, r) => new Promise((n, a) => {
              var e = t => {
                  try {
                    c(r.next(t))
                  } catch (t) {
                    a(t)
                  }
                },
                o = t => {
                  try {
                    c(r.throw(t))
                  } catch (t) {
                    a(t)
                  }
                },
                c = t => t.done ? n(t.value) : Promise.resolve(t.value).then(e, o);
              c((r = r.apply(t, null)).next())
            }))(this, 0, function*() {
              var n;
              null != (n = t.data) && n.error ? e(t.data.error) : r(t.data.params)
            })), this.send({
              method: t,
              data: {
                cbMethod: o,
                params: n
              }
            })
          })
        }
        disconnect() {}
      }
    },
    81481: (t, n, r) => {
      r.d(n, {
        K: () => a
      });
      const a = (0, r(20038).Z0)({
        name: "migrations",
        initialState: {
          version: 0,
          postBootVersion: 0
        },
        reducers: {}
      })
    },
    82293: (t, n, r) => {
      r.d(n, {
        A: () => R
      });
      var a = r(31601),
        e = r.n(a),
        o = r(76314),
        c = r.n(o),
        i = r(4417),
        l = r.n(i),
        s = new URL(r(52781), r.b),
        p = new URL(r(60469), r.b),
        d = new URL(r(52598), r.b),
        w = new URL(r(75576), r.b),
        y = new URL(r(39094), r.b),
        b = new URL(r(77318), r.b),
        g = new URL(r(23230), r.b),
        h = new URL(r(84989), r.b),
        v = new URL(r(13787), r.b),
        u = new URL(r(3725), r.b),
        x = new URL(r(67982), r.b),
        m = new URL(r(94023), r.b),
        f = new URL(r(4431), r.b),
        k = new URL(r(44872), r.b),
        S = c()(e()),
        T = l()(s),
        _ = l()(p),
        A = l()(d),
        E = l()(w),
        I = l()(y),
        P = l()(b),
        z = l()(g),
        C = l()(h),
        N = l()(v),
        B = l()(u),
        D = l()(x),
        O = l()(m),
        Y = l()(f),
        X = l()(k);
      S.push([t.id, `/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n* {\n  scrollbar-color: initial;\n  scrollbar-width: initial;\n}\n  body::-webkit-scrollbar {\n    display: none;\n  }\n  body {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    margin: 0px;\n    overflow: hidden;\n    --tw-bg-opacity: 1;\n    background-color: hsl(var(--twc-backgroundPrimary) / 1);\n    background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));\n    padding: 0px;\n    font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --tw-text-opacity: 1;\n    color: hsl(var(--twc-textPrimary) / 1);\n    color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n  }\n\n  #root {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  flex: 1 1 0%;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n  input[type='number']::-webkit-inner-spin-button,\n  input[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  @keyframes ripple-effect {\n    0% {\n      box-shadow: 0 0 0 0px rgba(71, 225, 141, 0.7);\n      background: rgba(71, 225, 141, 0.7);\n    }\n    80% {\n      background: rgba(66, 166, 223, 0);\n    }\n    100% {\n      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);\n    }\n  }\n\n  @keyframes ripple-effect-gray {\n    0% {\n      box-shadow: 0 0 0 0px rgba(115, 115, 115, 0.7);\n      background: rgba(115, 115, 115, 0.7);\n    }\n    80% {\n      background: rgba(66, 166, 223, 0);\n    }\n    100% {\n      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);\n    }\n  }\n\n  @keyframes pulse-effect {\n    0% {\n      transform: scale(1);\n    }\n    3.3% {\n      transform: scale(1.1);\n    }\n    16.5% {\n      transform: scale(1);\n    }\n    33% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  .rippleCircle {\n    animation: pulse-effect 2s ease-out infinite;\n  }\n\n  .ripple {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    animation: ripple-effect 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n\n  .ripple-gray {\n    animation: ripple-effect-gray 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n\n  .ripple:nth-child(2) {\n    animation-delay: 0.33s;\n    animation-duration: 2.2s;\n  }\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n:root {\n  --rt-color-white: #fff;\n  --rt-color-dark: #222;\n  --rt-color-success: #8dc572;\n  --rt-color-error: #be6464;\n  --rt-color-warning: #f0ad4e;\n  --rt-color-info: #337ab7;\n  --rt-opacity: 0.9;\n  --rt-transition-show-delay: 0.15s;\n  --rt-transition-closing-delay: 0.15s;\n}\n.core-styles-module_tooltip__3vRRp {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  will-change: opacity;\n}\n.core-styles-module_fixed__pcSol {\n  position: fixed;\n}\n.core-styles-module_arrow__cvMwQ {\n  position: absolute;\n  background: inherit;\n}\n.core-styles-module_noArrow__xock6 {\n  display: none;\n}\n.core-styles-module_clickable__ZuTTB {\n  pointer-events: auto;\n}\n.core-styles-module_show__Nt9eE {\n  opacity: 0.9;\n  opacity: var(--rt-opacity);\n  transition: opacity 0.15s ease-out;\n  transition: opacity var(--rt-transition-show-delay) ease-out;\n}\n.core-styles-module_closing__sGnxF {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  transition: opacity var(--rt-transition-closing-delay) ease-in;\n}\n/** end - core styles **/\n.styles-module_tooltip__mnnfp {\n  padding: 8px 16px;\n  border-radius: 3px;\n  font-size: 90%;\n  width: -moz-max-content;\n  width: max-content;\n}\n.styles-module_arrow__K0L3T {\n  width: 8px;\n  height: 8px;\n}\n[class*='react-tooltip__place-top'] > .styles-module_arrow__K0L3T {\n  transform: rotate(45deg);\n}\n[class*='react-tooltip__place-right'] > .styles-module_arrow__K0L3T {\n  transform: rotate(135deg);\n}\n[class*='react-tooltip__place-bottom'] > .styles-module_arrow__K0L3T {\n  transform: rotate(225deg);\n}\n[class*='react-tooltip__place-left'] > .styles-module_arrow__K0L3T {\n  transform: rotate(315deg);\n}\n/** Types variant **/\n.styles-module_dark__xNqje {\n  background: #222;\n  background: var(--rt-color-dark);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_light__Z6W-X {\n  background-color: #fff;\n  background-color: var(--rt-color-white);\n  color: #222;\n  color: var(--rt-color-dark);\n}\n.styles-module_success__A2AKt {\n  background-color: #8dc572;\n  background-color: var(--rt-color-success);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_warning__SCK0X {\n  background-color: #f0ad4e;\n  background-color: var(--rt-color-warning);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_error__JvumD {\n  background-color: #be6464;\n  background-color: var(--rt-color-error);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n.styles-module_info__BWdHW {\n  background-color: #337ab7;\n  background-color: var(--rt-color-info);\n  color: #fff;\n  color: var(--rt-color-white);\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${T}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${_}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${A}) format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${E}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Inter';\n  src: url(${I}) format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${P}) format('opentype');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${z}) format('opentype');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${C}) format('opentype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Binance Plex';\n  src: url(${N}) format('opentype');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Geeza';\n  src: url(${B}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n@font-face {\n  font-family: 'Geeza';\n  src: url(${D}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+0600-06FF, U+0750-077F;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${O}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${Y}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n@font-face {\n  font-family: 'Ping Fang';\n  src: url(${X}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n  unicode-range: U+4E00-9FFF, U+20000-2A6DF;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 926px) {\n\n  .container {\n    max-width: 926px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.default-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.default-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.default-button {\n  border-radius: 50px;\n}\n.icon-circle-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.icon-circle-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.icon-circle-button {\n  border-radius: 9999px;\n}\n.icon-square-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.icon-square-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.icon-square-button {\n  border-radius: 12px;\n}\n/* Deprecated. */\n.tiny-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.tiny-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.tiny-button {\n  border-radius: 4px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 12px;\n}\n.badge-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.badge-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.badge-button {\n  border-radius: 4px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 12px;\n}\n.circle-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.circle-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.circle-button {\n  border-radius: 9999px;\n  padding: 12px;\n  font-size: 16px;\n  line-height: 20px;\n}\n.word-button {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 20px;\n}\n.word-button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.word-button {\n  border-radius: 4px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 16px;\n  line-height: 20px;\n}\n.checkbox {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.checkbox:checked::before {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.checkbox:disabled {\n  opacity: 0.4;\n}\n.checkbox::before {\n    content: '';\n    display: block;\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: 5px;\n    border-width: 2.5px;\n    --tw-border-opacity: 1;\n    border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n    border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  }\n.checkbox[aria-checked="true"]::before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n/* Legacy typography. */\n.massive-text {\n  font-size: 32px;\n  line-height: 40px;\n}\n.screamer-text {\n  font-size: 28px;\n  line-height: 36px;\n}\n.headline-text {\n  font-size: 24px;\n  line-height: 32px;\n}\n.header-text {\n  font-size: 20px;\n  line-height: 28px;\n}\n.title-text {\n  font-size: 16px;\n  line-height: 24px;\n}\n.body-text {\n  font-size: 14px;\n  line-height: 22px;\n}\n.subtitle-text {\n  font-size: 14px;\n  line-height: 20px;\n}\n.caption-text {\n  font-size: 12px;\n  line-height: 16px;\n}\n.navigation-text {\n  font-size: 12px;\n  line-height: 16px;\n}\n/* New typography. */\n.typography-header-48 {\n  font-size: 48px;\n  line-height: 56px;\n}\n.typography-header-32 {\n  font-size: 32px;\n  line-height: 40px;\n}\n.typography-header-24 {\n  font-size: 24px;\n  line-height: 30px;\n}\n.typography-header-20 {\n  font-size: 20px;\n  line-height: 26px;\n}\n.typography-header-18 {\n  font-size: 18px;\n  line-height: 24px;\n}\n.typography-header-16 {\n  font-size: 16px;\n  line-height: 22px;\n}\n.typography-subheader-24 {\n  font-size: 24px;\n  line-height: 28px;\n}\n.typography-subheader-20 {\n  font-size: 20px;\n  line-height: 24px;\n}\n.typography-subheader-18 {\n  font-size: 18px;\n  line-height: 22px;\n}\n.typography-subheader-16 {\n  font-size: 16px;\n  line-height: 20px;\n}\n.typography-subheader-14 {\n  font-size: 14px;\n  line-height: 18px;\n}\n.typography-body-20 {\n  font-size: 20px;\n  line-height: 24px;\n}\n.typography-body-16 {\n  font-size: 16px;\n  line-height: 20px;\n}\n.typography-body-14 {\n  font-size: 14px;\n  line-height: 18px;\n}\n.typography-body-12 {\n  font-size: 12px;\n  line-height: 16px;\n}\n.typography-caption-12 {\n  font-size: 12px;\n  line-height: 16px;\n}\n/* Other styles. */\n.text-unset {\n    text-align: inherit;\n  }\n.break-word {\n    word-break: break-word;\n  }\n.alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n}\n.info-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.info-alt-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-depthBuyBg) / 1);\n  background-color: hsl(var(--twc-depthBuyBg) / var(--twc-depthBuyBg-opacity, var(--tw-bg-opacity)));\n}\n.default-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.brand-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.success-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-success-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-success-1-opacity-1) / var(--twc-success-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.error-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.warning-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.danger-alert {\n  display: flex;\n  width: 100%;\n  border-radius: 8px;\n  padding: 12px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-errorBg) / 1);\n  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));\n}\n.input {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.input:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.input-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.input-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.search-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.search-field {\n  border-radius: 9999px;\n  border-style: none;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-6) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity)));\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.step-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.step-field:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.step-field-long {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.step-field-long:focus-within {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option {\n  margin: 2px;\n  display: flex;\n  width: 1.25rem;\n  height: 1.25rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  border-width: 2.5px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option[aria-checked="true"] {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n}\n.radio-group__option[aria-disabled="true"] {\n  opacity: 0.4;\n}\n.radio-group__option-indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.radio-group__option[aria-checked='true'] .radio-group__option-indicator {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.skeleton {\n    --start-color: hsl(\n      var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity))\n    );\n    --end-color: hsl(\n      var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity))\n    );\n\n    background-image: linear-gradient(\n      270deg,\n      var(--start-color),\n      var(--end-color),\n      var(--end-color),\n      var(--start-color)\n    );\n    background-size: 400% 100%;\n    animation: bg-position 3s ease-in-out infinite;\n    box-shadow: none;\n    background-clip: padding-box;\n    cursor: default;\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    flex-shrink: 0;\n    border-radius: 4px;\n  }\n@keyframes bg-position {\n    from {\n      background-position: 200% 0;\n    }\n    to {\n      background-position: -200% 0;\n    }\n  }\n.switch {\n  position: relative;\n  display: inline-flex;\n  height: 24px;\n  width: 40px;\n  flex-shrink: 0;\n  cursor: pointer;\n  border-radius: 9999px;\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-transparent) / 1);\n  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.switch:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.switch:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n  --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.75;\n}\n.switch[aria-checked='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.switch[aria-checked='true'] .switch__toggle {\n  --tw-translate-x: 16px;\n  transform: translate(16px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.switch:disabled {\n  opacity: 0.4;\n}\n.switch__toggle {\n  pointer-events: none;\n  display: inline-block;\n  height: 1.25rem;\n  width: 1.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@supports (color: rgb(0 0 0 / 0)) {\n.switch__toggle {\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  }\n}\n.tw-scrollbar {\n  overflow: hidden;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.tw-scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n  border-radius: var(--scrollbar-track-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));\n}\n.tw-scrollbar::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));\n}\n.tw-scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n  border-radius: var(--scrollbar-thumb-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));\n}\n.tw-scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));\n}\n.tw-scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n  border-radius: var(--scrollbar-corner-radius);\n}\n.tw-scrollbar::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));\n}\n.tw-scrollbar::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));\n}\n.tw-scrollbar {\n  scrollbar-width: thin;\n  scrollbar-color: initial initial;\n  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);\n}\n.tw-scrollbar::-webkit-scrollbar {\n  display: block;\n  width: 8px;\n  height: 8px;\n}\n.tw-scrollbar {\n  --scrollbar-track: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));\n  --scrollbar-thumb: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, 1));\n  --scrollbar-thumb-radius: 8px;\n}\n.tw-tooltip {\n  line-height: 18px;\n  z-index: 50 !important;\n  max-width: 20rem !important;\n  border-radius: 4px !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(var(--twc-tooltip) / 1) !important;\n  background-color: hsl(var(--twc-tooltip) / var(--twc-tooltip-opacity, var(--tw-bg-opacity))) !important;\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  --tw-text-opacity: 1 !important;\n  color: hsl(var(--twc-utility-1-default) / 1) !important;\n  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity))) !important;\n  opacity: 1 !important;\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;\n  --tw-backdrop-blur: blur(40px) !important;\n  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n    font-size: 14px !important;\n}\n.tw-tooltip .react-tooltip-arrow {\n  display: none;\n}\n.tw-overlay {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-overlay-50) / 1);\n  background-color: hsl(var(--twc-overlay-50) / var(--twc-overlay-50-opacity, var(--tw-bg-opacity)));\n  --tw-backdrop-blur: blur(2px);\n  backdrop-filter: blur(2px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.-bottom-0 {\n  bottom: -0px;\n}\n.-bottom-0\\.5 {\n  bottom: -2px;\n}\n.-bottom-1 {\n  bottom: -4px;\n}\n.-bottom-px {\n  bottom: -1px;\n}\n.-left-\\[3px\\] {\n  left: -3px;\n}\n.-right-0 {\n  right: -0px;\n}\n.-right-0\\.5 {\n  right: -2px;\n}\n.-right-1 {\n  right: -4px;\n}\n.-top-8 {\n  top: -32px;\n}\n.-top-\\[2px\\] {\n  top: -2px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-4 {\n  bottom: 16px;\n}\n.bottom-\\[9px\\] {\n  bottom: 9px;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-4 {\n  left: 16px;\n}\n.left-\\[356px\\] {\n  left: 356px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-0 {\n  right: 0px;\n}\n.right-1 {\n  right: 4px;\n}\n.right-1\\.25 {\n  right: 5px;\n}\n.right-2 {\n  right: 8px;\n}\n.right-2\\.5 {\n  right: 0.625rem;\n}\n.right-4 {\n  right: 16px;\n}\n.right-5 {\n  right: 1.25rem;\n}\n.right-\\[125px\\] {\n  right: 125px;\n}\n.right-\\[9px\\] {\n  right: 9px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1 {\n  top: 4px;\n}\n.top-1\\.25 {\n  top: 5px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-7 {\n  top: 1.75rem;\n}\n.top-\\[110px\\] {\n  top: 110px;\n}\n.top-\\[20px\\] {\n  top: 20px;\n}\n.top-\\[5px\\] {\n  top: 5px;\n}\n.-z-10 {\n  z-index: -10;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[1\\] {\n  z-index: 1;\n}\n.z-\\[6\\] {\n  z-index: 6;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.float-right {\n  float: right;\n}\n.m-4 {\n  margin: 16px;\n}\n.m-auto {\n  margin: auto;\n}\n.-mx-0 {\n  margin-left: -0px;\n  margin-right: -0px;\n}\n.-mx-0\\.5 {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n.-mx-2 {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n.-my-3 {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mx-0\\.5 {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.mx-3 {\n  margin-left: 12px;\n  margin-right: 12px;\n}\n.mx-4 {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.mx-\\[-16px\\] {\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.my-0\\.5 {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.my-10 {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.my-11 {\n  margin-top: 2.75rem;\n  margin-bottom: 2.75rem;\n}\n.my-14 {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n.my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.my-2\\.5 {\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.my-3 {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.my-4 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.my-6 {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.\\!ml-4 {\n  margin-left: 16px !important;\n}\n.\\!ml-auto {\n  margin-left: auto !important;\n}\n.-mb-2 {\n  margin-bottom: -8px;\n}\n.-mb-4 {\n  margin-bottom: -16px;\n}\n.-ml-2 {\n  margin-left: -8px;\n}\n.-mt-3 {\n  margin-top: -12px;\n}\n.-mt-4 {\n  margin-top: -16px;\n}\n.-mt-6 {\n  margin-top: -24px;\n}\n.-mt-\\[10px\\] {\n  margin-top: -10px;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mb-0\\.5 {\n  margin-bottom: 2px;\n}\n.mb-1 {\n  margin-bottom: 4px;\n}\n.mb-10 {\n  margin-bottom: 40px;\n}\n.mb-16 {\n  margin-bottom: 64px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-2\\.5 {\n  margin-bottom: 0.625rem;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-6 {\n  margin-bottom: 24px;\n}\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.ml-0\\.5 {\n  margin-left: 2px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-1\\.25 {\n  margin-left: 5px;\n}\n.ml-2 {\n  margin-left: 8px;\n}\n.ml-2\\.5 {\n  margin-left: 0.625rem;\n}\n.ml-3 {\n  margin-left: 12px;\n}\n.ml-4 {\n  margin-left: 16px;\n}\n.ml-6 {\n  margin-left: 24px;\n}\n.ml-\\[12px\\] {\n  margin-left: 12px;\n}\n.ml-\\[258px\\] {\n  margin-left: 258px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-2 {\n  margin-right: 8px;\n}\n.mr-2\\.5 {\n  margin-right: 0.625rem;\n}\n.mr-3 {\n  margin-right: 12px;\n}\n.mr-4 {\n  margin-right: 16px;\n}\n.mr-px {\n  margin-right: 1px;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-0\\.5 {\n  margin-top: 2px;\n}\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n.mt-12 {\n  margin-top: 48px;\n}\n.mt-16 {\n  margin-top: 64px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.mt-20 {\n  margin-top: 5rem;\n}\n.mt-24 {\n  margin-top: 6rem;\n}\n.mt-3 {\n  margin-top: 12px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 24px;\n}\n.mt-8 {\n  margin-top: 32px;\n}\n.mt-\\[-20px\\] {\n  margin-top: -20px;\n}\n.mt-\\[-5px\\] {\n  margin-top: -5px;\n}\n.mt-\\[120px\\] {\n  margin-top: 120px;\n}\n.mt-\\[130px\\] {\n  margin-top: 130px;\n}\n.mt-\\[150px\\] {\n  margin-top: 150px;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.\\!table {\n  display: table !important;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.aspect-\\[2\\/1\\.48\\] {\n  aspect-ratio: 2/1.48;\n}\n.aspect-\\[3\\/1\\] {\n  aspect-ratio: 3/1;\n}\n.h-0 {\n  height: 0px;\n}\n.h-0\\.75 {\n  height: 3px;\n}\n.h-1 {\n  height: 4px;\n}\n.h-10 {\n  height: 40px;\n}\n.h-12 {\n  height: 48px;\n}\n.h-14 {\n  height: 56px;\n}\n.h-15 {\n  height: 60px;\n}\n.h-16 {\n  height: 64px;\n}\n.h-2 {\n  height: 8px;\n}\n.h-2\\.5 {\n  height: 10px;\n}\n.h-28 {\n  height: 7rem;\n}\n.h-3 {\n  height: 12px;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-4 {\n  height: 16px;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 24px;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-7\\.5 {\n  height: 30px;\n}\n.h-72 {\n  height: 18rem;\n}\n.h-8 {\n  height: 32px;\n}\n.h-9 {\n  height: 36px;\n}\n.h-\\[100vh\\] {\n  height: 100vh;\n}\n.h-\\[104px\\] {\n  height: 104px;\n}\n.h-\\[150px\\] {\n  height: 150px;\n}\n.h-\\[170px\\] {\n  height: 170px;\n}\n.h-\\[18px\\] {\n  height: 18px;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-\\[200px\\] {\n  height: 200px;\n}\n.h-\\[20px\\] {\n  height: 20px;\n}\n.h-\\[232px\\] {\n  height: 232px;\n}\n.h-\\[252px\\] {\n  height: 252px;\n}\n.h-\\[26px\\] {\n  height: 26px;\n}\n.h-\\[2px\\] {\n  height: 2px;\n}\n.h-\\[30px\\] {\n  height: 30px;\n}\n.h-\\[330px\\] {\n  height: 330px;\n}\n.h-\\[349px\\] {\n  height: 349px;\n}\n.h-\\[360px\\] {\n  height: 360px;\n}\n.h-\\[36px\\] {\n  height: 36px;\n}\n.h-\\[60vh\\] {\n  height: 60vh;\n}\n.h-\\[6rem\\] {\n  height: 6rem;\n}\n.h-\\[72px\\] {\n  height: 72px;\n}\n.h-\\[780px\\] {\n  height: 780px;\n}\n.h-\\[90px\\] {\n  height: 90px;\n}\n.h-\\[calc\\(100vh-1rem\\)\\] {\n  height: calc(100vh - 1rem);\n}\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-60 {\n  max-height: 15rem;\n}\n.max-h-96 {\n  max-height: 24rem;\n}\n.max-h-\\[235px\\] {\n  max-height: 235px;\n}\n.max-h-\\[250px\\] {\n  max-height: 250px;\n}\n.max-h-\\[400px\\] {\n  max-height: 400px;\n}\n.max-h-\\[50vh\\] {\n  max-height: 50vh;\n}\n.min-h-15 {\n  min-height: 60px;\n}\n.min-h-17 {\n  min-height: 68px;\n}\n.min-h-5 {\n  min-height: 1.25rem;\n}\n.min-h-6 {\n  min-height: 24px;\n}\n.min-h-\\[316px\\] {\n  min-height: 316px;\n}\n.min-h-\\[400px\\] {\n  min-height: 400px;\n}\n.min-h-\\[52px\\] {\n  min-height: 52px;\n}\n.min-h-\\[54px\\] {\n  min-height: 54px;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-1 {\n  width: 4px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-10 {\n  width: 40px;\n}\n.w-10\\/12 {\n  width: 83.333333%;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-12 {\n  width: 48px;\n}\n.w-14 {\n  width: 56px;\n}\n.w-16 {\n  width: 64px;\n}\n.w-17 {\n  width: 68px;\n}\n.w-2 {\n  width: 8px;\n}\n.w-2\\.5 {\n  width: 10px;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-22\\.5 {\n  width: 90px;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-28 {\n  width: 7rem;\n}\n.w-3 {\n  width: 12px;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-4 {\n  width: 16px;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-6 {\n  width: 24px;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-7\\.5 {\n  width: 30px;\n}\n.w-8 {\n  width: 32px;\n}\n.w-9 {\n  width: 36px;\n}\n.w-\\[100px\\] {\n  width: 100px;\n}\n.w-\\[102px\\] {\n  width: 102px;\n}\n.w-\\[124px\\] {\n  width: 124px;\n}\n.w-\\[136px\\] {\n  width: 136px;\n}\n.w-\\[150px\\] {\n  width: 150px;\n}\n.w-\\[200px\\] {\n  width: 200px;\n}\n.w-\\[20px\\] {\n  width: 20px;\n}\n.w-\\[224px\\] {\n  width: 224px;\n}\n.w-\\[250px\\] {\n  width: 250px;\n}\n.w-\\[300px\\] {\n  width: 300px;\n}\n.w-\\[305px\\] {\n  width: 305px;\n}\n.w-\\[310px\\] {\n  width: 310px;\n}\n.w-\\[320px\\] {\n  width: 320px;\n}\n.w-\\[350px\\] {\n  width: 350px;\n}\n.w-\\[36px\\] {\n  width: 36px;\n}\n.w-\\[389px\\] {\n  width: 389px;\n}\n.w-\\[413px\\] {\n  width: 413px;\n}\n.w-\\[42px\\] {\n  width: 42px;\n}\n.w-\\[438px\\] {\n  width: 438px;\n}\n.w-\\[472px\\] {\n  width: 472px;\n}\n.w-\\[504px\\] {\n  width: 504px;\n}\n.w-\\[56px\\] {\n  width: 56px;\n}\n.w-\\[600px\\] {\n  width: 600px;\n}\n.w-\\[6rem\\] {\n  width: 6rem;\n}\n.w-\\[77px\\] {\n  width: 77px;\n}\n.w-\\[80px\\] {\n  width: 80px;\n}\n.w-\\[86px\\] {\n  width: 86px;\n}\n.w-\\[90px\\] {\n  width: 90px;\n}\n.w-\\[calc\\(100\\%-32px\\)\\] {\n  width: calc(100% - 32px);\n}\n.w-auto {\n  width: auto;\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.w-min {\n  width: -moz-min-content;\n  width: min-content;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-\\[253px\\] {\n  min-width: 253px;\n}\n.min-w-\\[400px\\] {\n  min-width: 400px;\n}\n.min-w-\\[466px\\] {\n  min-width: 466px;\n}\n.min-w-\\[480px\\] {\n  min-width: 480px;\n}\n.min-w-\\[716px\\] {\n  min-width: 716px;\n}\n.min-w-\\[80px\\] {\n  min-width: 80px;\n}\n.min-w-\\[850px\\] {\n  min-width: 850px;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-max {\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.min-w-min {\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-\\[120px\\] {\n  max-width: 120px;\n}\n.max-w-\\[200px\\] {\n  max-width: 200px;\n}\n.max-w-\\[375px\\] {\n  max-width: 375px;\n}\n.max-w-\\[400px\\] {\n  max-width: 400px;\n}\n.max-w-\\[716px\\] {\n  max-width: 716px;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.origin-\\[50\\%_50\\%\\] {\n  transform-origin: 50% 50%;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1 {\n  --tw-translate-y: -4px;\n  transform: translate(var(--tw-translate-x), -4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-5 {\n  --tw-translate-x: 1.25rem;\n  transform: translate(1.25rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), 0px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1 {\n  --tw-translate-y: 4px;\n  transform: translate(var(--tw-translate-x), 4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), 50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[200px\\] {\n  --tw-translate-y: 200px;\n  transform: translate(var(--tw-translate-x), 200px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[calc\\(-50\\%\\+6px\\)\\] {\n  --tw-translate-y: calc(-50% + 6px);\n  transform: translate(var(--tw-translate-x), calc(-50% + 6px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-90 {\n  --tw-rotate: -90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-100 {\n  --tw-scale-x: -1;\n  --tw-scale-y: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(-1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-95 {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(.95) scaleY(.95);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[calc\\(20\\/24\\)\\] {\n  --tw-scale-x: calc(20 / 24);\n  --tw-scale-y: calc(20 / 24);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(calc(20 / 24)) scaleY(calc(20 / 24));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes reverse-spin {\n\n  from {\n    transform: rotate(360deg);\n  }\n}\n.animate-reverse-spin {\n  animation: reverse-spin 1s linear infinite;\n}\n@keyframes shimmer {\n\n  0% {\n    background-position: -200% 0;\n  }\n\n  100% {\n    background-position: 200% 0;\n  }\n}\n.animate-shimmer {\n  animation: shimmer 2s ease-in-out infinite;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.resize-none {\n  resize: none;\n}\n.resize {\n  resize: both;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.justify-stretch {\n  justify-content: stretch;\n}\n.gap-1 {\n  gap: 4px;\n}\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n.gap-12 {\n  gap: 48px;\n}\n.gap-2 {\n  gap: 8px;\n}\n.gap-3 {\n  gap: 12px;\n}\n.gap-4 {\n  gap: 16px;\n}\n.gap-6 {\n  gap: 24px;\n}\n.gap-8 {\n  gap: 32px;\n}\n.gap-\\[5px\\] {\n  gap: 5px;\n}\n.gap-x-1 {\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n}\n.gap-x-3 {\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n.gap-y-1 {\n  row-gap: 4px;\n}\n.gap-y-4 {\n  row-gap: 16px;\n}\n.space-x-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0px * 0);\n  margin-right: calc(0px * var(--tw-space-x-reverse));\n  margin-left: calc(0px * (1 - 0));\n  margin-left: calc(0px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(0px * calc(1 - 0));\n  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2px * 0);\n  margin-right: calc(2px * var(--tw-space-x-reverse));\n  margin-left: calc(2px * (1 - 0));\n  margin-left: calc(2px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(2px * calc(1 - 0));\n  margin-left: calc(2px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(4px * 0);\n  margin-right: calc(4px * var(--tw-space-x-reverse));\n  margin-left: calc(4px * (1 - 0));\n  margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(4px * calc(1 - 0));\n  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1\\.25 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(5px * 0);\n  margin-right: calc(5px * var(--tw-space-x-reverse));\n  margin-left: calc(5px * (1 - 0));\n  margin-left: calc(5px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(5px * calc(1 - 0));\n  margin-left: calc(5px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8px * 0);\n  margin-right: calc(8px * var(--tw-space-x-reverse));\n  margin-left: calc(8px * (1 - 0));\n  margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(8px * calc(1 - 0));\n  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.625rem * 0);\n  margin-right: calc(0.625rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.625rem * (1 - 0));\n  margin-left: calc(0.625rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(0.625rem * calc(1 - 0));\n  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(12px * 0);\n  margin-right: calc(12px * var(--tw-space-x-reverse));\n  margin-left: calc(12px * (1 - 0));\n  margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(12px * calc(1 - 0));\n  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(16px * 0);\n  margin-right: calc(16px * var(--tw-space-x-reverse));\n  margin-left: calc(16px * (1 - 0));\n  margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(16px * calc(1 - 0));\n  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(24px * 0);\n  margin-right: calc(24px * var(--tw-space-x-reverse));\n  margin-left: calc(24px * (1 - 0));\n  margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(24px * calc(1 - 0));\n  margin-left: calc(24px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(32px * 0);\n  margin-right: calc(32px * var(--tw-space-x-reverse));\n  margin-left: calc(32px * (1 - 0));\n  margin-left: calc(32px * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(32px * calc(1 - 0));\n  margin-left: calc(32px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * (1 - 0));\n  margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0px * calc(1 - 0));\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * 0);\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2px * (1 - 0));\n  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(2px * calc(1 - 0));\n  margin-top: calc(2px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2px * 0);\n  margin-bottom: calc(2px * var(--tw-space-y-reverse));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(4px * (1 - 0));\n  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(4px * calc(1 - 0));\n  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(4px * 0);\n  margin-bottom: calc(4px * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * (1 - 0));\n  margin-top: calc(0.375rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0.375rem * calc(1 - 0));\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * 0);\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(48px * (1 - 0));\n  margin-top: calc(48px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(48px * calc(1 - 0));\n  margin-top: calc(48px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(48px * 0);\n  margin-bottom: calc(48px * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(8px * (1 - 0));\n  margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(8px * calc(1 - 0));\n  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(8px * 0);\n  margin-bottom: calc(8px * var(--tw-space-y-reverse));\n}\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * (1 - 0));\n  margin-top: calc(0.625rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0.625rem * calc(1 - 0));\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * 0);\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(12px * (1 - 0));\n  margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(12px * calc(1 - 0));\n  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(12px * 0);\n  margin-bottom: calc(12px * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(16px * (1 - 0));\n  margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(16px * calc(1 - 0));\n  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(16px * 0);\n  margin-bottom: calc(16px * var(--tw-space-y-reverse));\n}\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * (1 - 0));\n  margin-top: calc(1.25rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1.25rem * calc(1 - 0));\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * 0);\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(24px * (1 - 0));\n  margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(24px * calc(1 - 0));\n  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(24px * 0);\n  margin-bottom: calc(24px * var(--tw-space-y-reverse));\n}\n.space-y-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.75rem * (1 - 0));\n  margin-top: calc(1.75rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1.75rem * calc(1 - 0));\n  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.75rem * 0);\n  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(32px * (1 - 0));\n  margin-top: calc(32px * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(32px * calc(1 - 0));\n  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(32px * 0);\n  margin-bottom: calc(32px * var(--tw-space-y-reverse));\n}\n.self-center {\n  align-self: center;\n}\n.self-stretch {\n  align-self: stretch;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.text-nowrap {\n  text-wrap: nowrap;\n}\n.break-words {\n  word-wrap: break-word;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 4px;\n}\n.rounded-2 {\n  border-radius: 8px;\n}\n.rounded-3 {\n  border-radius: 12px;\n}\n.rounded-3xl {\n  border-radius: 14px;\n}\n.rounded-4 {\n  border-radius: 16px;\n}\n.rounded-5xl {\n  border-radius: 20px;\n}\n.rounded-6 {\n  border-radius: 24px;\n}\n.rounded-\\[24px_0px_0px_24px\\] {\n  border-radius: 24px 0px 0px 24px;\n}\n.rounded-\\[40px\\] {\n  border-radius: 40px;\n}\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n.rounded-curvy {\n  border-radius: 50px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 8px;\n}\n.rounded-xl {\n  border-radius: 10px;\n}\n.rounded-b-4 {\n  border-bottom-right-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.rounded-t-4 {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n.rounded-bl-full {\n  border-bottom-left-radius: 9999px;\n}\n.rounded-br-4 {\n  border-bottom-right-radius: 16px;\n}\n.rounded-tl-full {\n  border-top-left-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.\\!border-error {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(var(--twc-error) / 1) !important;\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity))) !important;\n}\n.border-accent-blue {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-blue) / 1);\n  border-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-border-opacity)));\n}\n.border-accent-neon-green {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-neon-green) / 1);\n  border-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-border-opacity)));\n}\n.border-accent-pink {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-pink) / 1);\n  border-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-border-opacity)));\n}\n.border-accent-yellow {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-accent-yellow) / 1);\n  border-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-border-opacity)));\n}\n.border-background-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-background-1) / 1);\n  border-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-border-opacity)));\n}\n.border-backgroundPrimary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-backgroundPrimary) / 1);\n  border-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-border-opacity)));\n}\n.border-backgroundTertiary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-backgroundTertiary) / 1);\n  border-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-border-opacity)));\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, 1);\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.border-error {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error) / 1);\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));\n}\n.border-error-1-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  border-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-line {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-line) / 1);\n  border-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));\n}\n.border-on-primary-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-on-primary-opacity-1) / 1);\n  border-color: hsl(var(--twc-on-primary-opacity-1) / var(--twc-on-primary-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-other-Gold {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-other-Gold) / 1);\n  border-color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-border-opacity)));\n}\n.border-other-Silver {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-other-Silver) / 1);\n  border-color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-border-opacity)));\n}\n.border-primary {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary) / 1);\n  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));\n}\n.border-primary-default {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.border-primary-opacity-1 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-opacity-1) / 1);\n  border-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-success {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-success) / 1);\n  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));\n}\n.border-transparent {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-transparent) / 1);\n  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));\n}\n.border-utility-1-opacity-3 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));\n}\n.border-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.border-b-error-1-default {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-error-1-default) / 1);\n  border-bottom-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-border-opacity)));\n}\n.border-b-on-primary {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-on-primary) / 1);\n  border-bottom-color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-border-opacity)));\n}\n.border-b-primary-default {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-primary-default) / 1);\n  border-bottom-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.border-b-utility-1-opacity-1 {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / 1);\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-border-opacity)));\n}\n.border-b-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.border-t-line {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(var(--twc-line) / 1);\n  border-top-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));\n}\n.border-t-utility-1-opacity-5 {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  border-top-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));\n}\n.bg-\\[rgba\\(37\\2c 37\\2c 37\\2c 0\\.08\\)\\] {\n  background-color: rgba(37,37,37,0.08);\n}\n.bg-accent-blue {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-blue) / 1);\n  background-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-neon-green {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-neon-green) / 1);\n  background-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-pink {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-pink) / 1);\n  background-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-bg-opacity)));\n}\n.bg-accent-yellow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-accent-yellow) / 1);\n  background-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-1) / 1);\n  background-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-2 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-2) / 1);\n  background-color: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-primary) / 1);\n  background-color: hsl(var(--twc-background-primary) / var(--twc-background-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-background-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-background-secondary) / 1);\n  background-color: hsl(var(--twc-background-secondary) / var(--twc-background-secondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundPrimary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundPrimary) / 1);\n  background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundSecondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundSecondary) / 1);\n  background-color: hsl(var(--twc-backgroundSecondary) / var(--twc-backgroundSecondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-backgroundTertiary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-backgroundTertiary) / 1);\n  background-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-bg-opacity)));\n}\n.bg-bg3 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-bg3) / 1);\n  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, 1);\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-button-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary) / 1);\n  background-color: hsl(var(--twc-button-primary) / var(--twc-button-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-button-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary) / 1);\n  background-color: hsl(var(--twc-button-secondary) / var(--twc-button-secondary-opacity, var(--tw-bg-opacity)));\n}\n.bg-error-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-default) / 1);\n  background-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-error-1-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-errorBg {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-errorBg) / 1);\n  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));\n}\n.bg-line {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-default) / 1);\n  background-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-primary-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-success-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-success-1-default) / 1);\n  background-color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-successBg {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-successBg) / 1);\n  background-color: hsl(var(--twc-successBg) / var(--twc-successBg-opacity, var(--tw-bg-opacity)));\n}\n.bg-transparent {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-transparent) / 1);\n  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-default {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-default) / 1);\n  background-color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-2 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-2) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-3 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-4 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-5 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));\n}\n.bg-utility-1-opacity-6 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-6) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity)));\n}\n.bg-warning {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning) / 1);\n  background-color: hsl(var(--twc-warning) / var(--twc-warning-opacity, var(--tw-bg-opacity)));\n}\n.bg-warning-1-opacity-1 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.bg-gradient-primary {\n  background-image: linear-gradient(268deg, var(--tw-gradient-stops));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-light-gradient-mid {\n  --tw-gradient-from: hsl(var(--twc-light-gradient-mid) / var(--twc-light-gradient-mid-opacity, 1)) var(--tw-gradient-from-position);\n  --tw-gradient-to: hsl(var(--twc-light-gradient-mid) / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-utility-1-opacity-5 {\n  --tw-gradient-from: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-from-position);\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-utility-1-opacity-4 {\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-4) / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, 1)) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.to-light-gradient-end {\n  --tw-gradient-to: hsl(var(--twc-light-gradient-end) / var(--twc-light-gradient-end-opacity, 1)) var(--tw-gradient-to-position);\n}\n.to-utility-1-opacity-5 {\n  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-to-position);\n}\n.bg-\\[length\\:200\\%_100\\%\\] {\n  background-size: 200% 100%;\n}\n.fill-background-2 {\n  fill: hsl(var(--twc-background-2) / 1);\n  fill: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, 1));\n}\n.fill-utility-1-default {\n  fill: hsl(var(--twc-utility-1-default) / 1);\n  fill: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, 1));\n}\n.stroke-current {\n  stroke: currentColor;\n}\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.\\!p-0 {\n  padding: 0px !important;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-1 {\n  padding: 4px;\n}\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n.p-12 {\n  padding: 48px;\n}\n.p-2 {\n  padding: 8px;\n}\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n.p-3 {\n  padding: 12px;\n}\n.p-3\\.5 {\n  padding: 0.875rem;\n}\n.p-4 {\n  padding: 16px;\n}\n.p-6 {\n  padding: 24px;\n}\n.p-\\[10px\\] {\n  padding: 10px;\n}\n.\\!px-4 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n.\\!py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n.\\!py-3 {\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.px-8 {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-0\\.5 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.py-6 {\n  padding-top: 24px;\n  padding-bottom: 24px;\n}\n.py-8 {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pb-2 {\n  padding-bottom: 8px;\n}\n.pb-28 {\n  padding-bottom: 7rem;\n}\n.pb-3 {\n  padding-bottom: 12px;\n}\n.pb-4 {\n  padding-bottom: 16px;\n}\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n.pb-6 {\n  padding-bottom: 24px;\n}\n.pb-8 {\n  padding-bottom: 32px;\n}\n.pb-\\[100\\%\\] {\n  padding-bottom: 100%;\n}\n.pb-\\[3px\\] {\n  padding-bottom: 3px;\n}\n.pb-\\[4px\\] {\n  padding-bottom: 4px;\n}\n.pl-1 {\n  padding-left: 4px;\n}\n.pl-1\\.5 {\n  padding-left: 0.375rem;\n}\n.pl-11 {\n  padding-left: 2.75rem;\n}\n.pl-16 {\n  padding-left: 64px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pl-2\\.5 {\n  padding-left: 0.625rem;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pl-4 {\n  padding-left: 16px;\n}\n.pr-1 {\n  padding-right: 4px;\n}\n.pr-10 {\n  padding-right: 40px;\n}\n.pr-2 {\n  padding-right: 8px;\n}\n.pr-3 {\n  padding-right: 12px;\n}\n.pr-4 {\n  padding-right: 16px;\n}\n.pr-\\[2px\\] {\n  padding-right: 2px;\n}\n.pr-\\[30px\\] {\n  padding-right: 30px;\n}\n.pr-\\[56px\\] {\n  padding-right: 56px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-0\\.5 {\n  padding-top: 2px;\n}\n.pt-1 {\n  padding-top: 4px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n.pt-20 {\n  padding-top: 5rem;\n}\n.pt-3 {\n  padding-top: 12px;\n}\n.pt-4 {\n  padding-top: 16px;\n}\n.pt-5 {\n  padding-top: 1.25rem;\n}\n.pt-6 {\n  padding-top: 24px;\n}\n.pt-8 {\n  padding-top: 32px;\n}\n.pt-\\[40px\\] {\n  padding-top: 40px;\n}\n.pt-\\[59px\\] {\n  padding-top: 59px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-start {\n  text-align: left;\n}\n.text-end {\n  text-align: right;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-brand {\n  font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.font-inter {\n  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n.text-\\[11px\\]\\/\\[13px\\] {\n  font-size: 11px;\n  line-height: 13px;\n}\n.text-\\[16px\\] {\n  font-size: 16px;\n}\n.text-\\[17px\\] {\n  font-size: 17px;\n}\n.text-\\[23px\\] {\n  font-size: 23px;\n}\n.text-\\[24px\\] {\n  font-size: 24px;\n}\n.text-body3 {\n  font-size: 14px;\n}\n.text-caption1 {\n  font-size: 12px;\n}\n.text-header-48 {\n  font-size: 48px;\n}\n.text-headline6 {\n  font-size: 24px;\n}\n.text-subheader-14 {\n  font-size: 14px;\n}\n.text-subheader-16 {\n  font-size: 16px;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.leading-\\[18px\\] {\n  line-height: 18px;\n}\n.leading-\\[24px\\] {\n  line-height: 24px;\n}\n.leading-\\[30px\\] {\n  line-height: 30px;\n}\n.leading-body-12 {\n  line-height: 16px;\n}\n.leading-body-14 {\n  line-height: 18px;\n}\n.leading-body-16 {\n  line-height: 20px;\n}\n.leading-body-20 {\n  line-height: 24px;\n}\n.leading-caption-12 {\n  line-height: 16px;\n}\n.leading-header-16 {\n  line-height: 22px;\n}\n.leading-header-18 {\n  line-height: 24px;\n}\n.leading-header-20 {\n  line-height: 26px;\n}\n.leading-header-24 {\n  line-height: 30px;\n}\n.leading-header-32 {\n  line-height: 40px;\n}\n.leading-header-48 {\n  line-height: 56px;\n}\n.leading-headline6 {\n  line-height: 32px;\n}\n.leading-subheader-14 {\n  line-height: 18px;\n}\n.leading-subheader-16 {\n  line-height: 20px;\n}\n.leading-subheader-18 {\n  line-height: 22px;\n}\n.leading-subheader-20 {\n  line-height: 24px;\n}\n.leading-subheader-24 {\n  line-height: 28px;\n}\n.leading-subtitle4 {\n  line-height: 22px;\n}\n.text-accent-blue {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-blue) / 1);\n  color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-text-opacity)));\n}\n.text-accent-lavender {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-lavender) / 1);\n  color: hsl(var(--twc-accent-lavender) / var(--twc-accent-lavender-opacity, var(--tw-text-opacity)));\n}\n.text-accent-neon-green {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-neon-green) / 1);\n  color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-text-opacity)));\n}\n.text-accent-pink {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-pink) / 1);\n  color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-text-opacity)));\n}\n.text-accent-yellow {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-accent-yellow) / 1);\n  color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-text-opacity)));\n}\n.text-background-1 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-background-1) / 1);\n  color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-text-opacity)));\n}\n.text-backgroundPrimary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-backgroundPrimary) / 1);\n  color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-text-opacity)));\n}\n.text-backgroundTertiary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-backgroundTertiary) / 1);\n  color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-text-opacity)));\n}\n.text-brand-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-brand-primary) / 1);\n  color: hsl(var(--twc-brand-primary) / var(--twc-brand-primary-opacity, var(--tw-text-opacity)));\n}\n.text-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-error) / 1);\n  color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-text-opacity)));\n}\n.text-error-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-error-1-default) / 1);\n  color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-icon-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-icon-primary) / 1);\n  color: hsl(var(--twc-icon-primary) / var(--twc-icon-primary-opacity, var(--tw-text-opacity)));\n}\n.text-icon-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-icon-secondary) / 1);\n  color: hsl(var(--twc-icon-secondary) / var(--twc-icon-secondary-opacity, var(--tw-text-opacity)));\n}\n.text-iconNormal {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-iconNormal) / 1);\n  color: hsl(var(--twc-iconNormal) / var(--twc-iconNormal-opacity, var(--tw-text-opacity)));\n}\n.text-iconWarning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-iconWarning) / 1);\n  color: hsl(var(--twc-iconWarning) / var(--twc-iconWarning-opacity, var(--tw-text-opacity)));\n}\n.text-on-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-on-primary) / 1);\n  color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-text-opacity)));\n}\n.text-other-Bronze {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Bronze) / 1);\n  color: hsl(var(--twc-other-Bronze) / var(--twc-other-Bronze-opacity, var(--tw-text-opacity)));\n}\n.text-other-Gold {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Gold) / 1);\n  color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-text-opacity)));\n}\n.text-other-Silver {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-other-Silver) / 1);\n  color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-text-opacity)));\n}\n.text-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary) / 1);\n  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));\n}\n.text-primary-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary-default) / 1);\n  color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-text-opacity)));\n}\n.text-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-success) / 1);\n  color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-text-opacity)));\n}\n.text-success-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-success-1-default) / 1);\n  color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-textBrand {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textBrand) / 1);\n  color: hsl(var(--twc-textBrand) / var(--twc-textBrand-opacity, var(--tw-text-opacity)));\n}\n.text-textBuy {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textBuy) / 1);\n  color: hsl(var(--twc-textBuy) / var(--twc-textBuy-opacity, var(--tw-text-opacity)));\n}\n.text-textDisabled {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textDisabled) / 1);\n  color: hsl(var(--twc-textDisabled) / var(--twc-textDisabled-opacity, var(--tw-text-opacity)));\n}\n.text-textPrimary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimary) / 1);\n  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n}\n.text-textPrimaryStatic {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimaryStatic) / 1);\n  color: hsl(var(--twc-textPrimaryStatic) / var(--twc-textPrimaryStatic-opacity, var(--tw-text-opacity)));\n}\n.text-textSecondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textSecondary) / 1);\n  color: hsl(var(--twc-textSecondary) / var(--twc-textSecondary-opacity, var(--tw-text-opacity)));\n}\n.text-textSell {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textSell) / 1);\n  color: hsl(var(--twc-textSell) / var(--twc-textSell-opacity, var(--tw-text-opacity)));\n}\n.text-textThird {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textThird) / 1);\n  color: hsl(var(--twc-textThird) / var(--twc-textThird-opacity, var(--tw-text-opacity)));\n}\n.text-transparent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-transparent) / 1);\n  color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-default) / 1);\n  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-1 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-1) / 1);\n  color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-2 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-2) / 1);\n  color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-text-opacity)));\n}\n.text-utility-1-opacity-3 {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-utility-1-opacity-3) / 1);\n  color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-text-opacity)));\n}\n.text-warning-1-default {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-warning-1-default) / 1);\n  color: hsl(var(--twc-warning-1-default) / var(--twc-warning-1-default-opacity, var(--tw-text-opacity)));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.decoration-strikethrough {\n  text-decoration-color: hsl(var(--twc-decoration-strikethrough));\n}\n.caret-transparent {\n  caret-color: hsl(var(--twc-transparent) / 1);\n  caret-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline-0 {\n  outline-width: 0px;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.blur-md {\n  --tw-blur: blur(12px);\n  filter: blur(12px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-1 {\n  --tw-backdrop-blur: blur(40px);\n  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.light,[data-theme="light"] {\n  --twc-primary-default: 241.20000000000005 100% 50%;\n  --twc-primary-hover: 241 100% 65.5%;\n  --twc-primary-pressed: 241.20000000000005 100% 69.6%;\n  --twc-primary-opacity-1: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-1-opacity: 0.16;\n  --twc-primary-opacity-2: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-2-opacity: 0.24;\n  --twc-primary-opacity-3: 241.20000000000005 100% 50%;\n  --twc-primary-opacity-3-opacity: 0.32;\n  --twc-on-primary: 0 0% 100%;\n  --twc-on-primary-opacity-1: 0 0% 100%;\n  --twc-on-primary-opacity-1-opacity: 0.40;\n  --twc-background-1: 0 0% 100%;\n  --twc-background-2: 240 7.1% 94.5%;\n  --twc-utility-1-default: 0 0% 14.5%;\n  --twc-utility-1-opacity-1: 0 0% 14.5%;\n  --twc-utility-1-opacity-1-opacity: 0.72;\n  --twc-utility-1-opacity-2: 0 0% 14.5%;\n  --twc-utility-1-opacity-2-opacity: 0.48;\n  --twc-utility-1-opacity-3: 0 0% 14.5%;\n  --twc-utility-1-opacity-3-opacity: 0.24;\n  --twc-utility-1-opacity-4: 0 0% 14.5%;\n  --twc-utility-1-opacity-4-opacity: 0.12;\n  --twc-utility-1-opacity-5: 0 0% 14.5%;\n  --twc-utility-1-opacity-5-opacity: 0.08;\n  --twc-utility-1-opacity-6: 0 0% 14.5%;\n  --twc-utility-1-opacity-6-opacity: 0.04;\n  --twc-success-1-default: 137.3 100% 27.8%;\n  --twc-success-1-opacity-1: 137.3 100% 27.8%;\n  --twc-success-1-opacity-1-opacity: 0.16;\n  --twc-success-1-opacity-2: 137.3 100% 27.8%;\n  --twc-success-1-opacity-2-opacity: 0.24;\n  --twc-success-1-opacity-3: 137.3 100% 27.8%;\n  --twc-success-1-opacity-3-opacity: 0.32;\n  --twc-warning-1-default: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-1: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-1-opacity: 0.16;\n  --twc-warning-1-opacity-2: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-2-opacity: 0.24;\n  --twc-warning-1-opacity-3: 41 85.3% 42.7%;\n  --twc-warning-1-opacity-3-opacity: 0.32;\n  --twc-error-1-default: 0 81.3% 42%;\n  --twc-error-1-hover: 0 63.9% 47.8%;\n  --twc-error-1-pressed: 0 58.6% 53.5%;\n  --twc-error-1-opacity-1: 0 81.3% 42%;\n  --twc-error-1-opacity-1-opacity: 0.16;\n  --twc-error-1-opacity-2: 0 81.3% 42%;\n  --twc-error-1-opacity-2-opacity: 0.24;\n  --twc-error-1-opacity-3: 0 81.3% 42%;\n  --twc-error-1-opacity-3-opacity: 0.32;\n  --twc-accent-pink: 300.70000000000005 100% 84.1%;\n  --twc-accent-neon-green: 82.80000000000001 100% 50%;\n  --twc-accent-yellow: 46.69999999999999 100% 56.7%;\n  --twc-accent-blue: 194.60000000000002 100% 59%;\n  --twc-light-gradient-start: 194.60000000000002 80.4% 46.1%;\n  --twc-light-gradient-mid: 300.9 66.8% 61%;\n  --twc-light-gradient-end: 41.10000000000002 100% 42.4%;\n  --twc-transparent: 0 0% 0%;\n  --twc-transparent-opacity: 0.00;\n  --twc-overlay-100: 0 0% 0%;\n  --twc-overlay-100-opacity: 0.40;\n  --twc-overlay-50: 0 0% 0%;\n  --twc-overlay-50-opacity: 0.16;\n  --twc-tooltip: 0 0% 96.1%;\n  --twc-alert-solid: 137.5 41.4% 88.6%;\n  --twc-other-Bronze: 23.399999999999977 46.6% 34.5%;\n  --twc-other-Silver: 300 2% 49.2%;\n  --twc-other-Gold: 40.30000000000001 61.8% 47.3%;\n  --twc-decoration-strikethrough: 240 0.5% 62.5%;\n  --twc-brand-primary: 241.20000000000005 100% 50%;\n  --twc-button-primary-hovered: 241 100% 65.5%;\n  --twc-button-primary-pressed: 241.20000000000005 100% 69.6%;\n  --twc-brand-background: 241.20000000000005 100% 50%;\n  --twc-brand-background-opacity: 0.16;\n  --twc-brand-on-primary: 0 0% 100%;\n  --twc-background-primary: 0 0% 100%;\n  --twc-background-secondary: 240 7.1% 94.5%;\n  --twc-success-background: 137.5 88.8% 34.9%;\n  --twc-success-background-opacity: 0.16;\n  --twc-error-background: 0 81.3% 42%;\n  --twc-error-background-opacity: 0.16;\n  --twc-warning-background: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-background-opacity: 0.16;\n  --twc-text-primary: 0 0% 14.5%;\n  --twc-text-secondary: 0 0% 14.5%;\n  --twc-text-secondary-opacity: 0.72;\n  --twc-_app-colour-utility-utility-1---opacity-2: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;\n  --twc-background-tertiary: 0 0% 0%;\n  --twc-background-tertiary-opacity: 0.08;\n  --twc-success-main: 137.5 88.8% 34.9%;\n  --twc-error-main: 0 81.3% 42%;\n  --twc-warning-main: 42.10000000000002 98.1% 41.6%;\n  --twc-accent-lavender: 267 100% 56.9%;\n  --twc-accent-neon: 82.89999999999998 88.8% 49.2%;\n  --twc-accent-sand: 46.80000000000001 88.1% 49.4%;\n  --twc-accent-ocean: 194.60000000000002 93.4% 47.5%;\n  --twc-_app-colour-utility-utility-1---opacity-4: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;\n  --twc-_app-colour-utility-utility-1---opacity-5: 0 0% 14.5%;\n  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;\n  --twc-other-skeleton: 0 0% 14.5%;\n  --twc-other-skeleton-opacity: 0.04;\n  --twc-_app-colour-primary-primary---opacity-2: 241.20000000000005 100% 50%;\n  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;\n  --twc-_app-colour-primary-primary---opacity-3: 241.20000000000005 100% 50%;\n  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;\n  --twc-error-border: 0 81.3% 42%;\n  --twc-error-border-opacity: 0.24;\n  --twc-error-disabled: 0 81.3% 42%;\n  --twc-error-disabled-opacity: 0.32;\n  --twc-error-hovered: 0 63.9% 47.8%;\n  --twc-error-pressed: 0 58.6% 53.5%;\n  --twc-success-border: 137.5 88.8% 34.9%;\n  --twc-success-border-opacity: 0.24;\n  --twc-success-disabled: 137.5 88.8% 34.9%;\n  --twc-success-disabled-opacity: 0.32;\n  --twc-warning-border: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-border-opacity: 0.24;\n  --twc-warning-disabed: 42.10000000000002 98.1% 41.6%;\n  --twc-warning-disabed-opacity: 0.32;\n  --twc-brand-on-primary-disabled: 0 0% 100%;\n  --twc-brand-on-primary-disabled-opacity: 0.80;\n  --twc-accent-fuchsia: 305.4 100% 50%;\n  --twc-accent-lavender-bg: 267 100% 56.9%;\n  --twc-accent-lavender-bg-opacity: 0.24;\n  --twc-accent-neon-bg: 82.89999999999998 88.8% 49.2%;\n  --twc-accent-neon-bg-opacity: 0.24;\n  --twc-accent-sand-bg: 46.80000000000001 88.1% 49.4%;\n  --twc-accent-sand-bg-opacity: 0.24;\n  --twc-accent-ocean-bg: 194.60000000000002 93.4% 47.5%;\n  --twc-accent-ocean-bg-opacity: 0.24;\n  --twc-accent-fuchsia-bg: 305.4 100% 50%;\n  --twc-accent-fuchsia-bg-opacity: 0.24;\n  --twc-icon-primary: 0 0% 14.5%;\n  --twc-icon-secondary: 0 0% 14.5%;\n  --twc-icon-secondary-opacity: 0.72;\n  --twc-icon-disabled: 0 0% 14.5%;\n  --twc-icon-disabled-opacity: 0.40;\n  --twc-button-primary: 241.20000000000005 100% 50%;\n  --twc-button-secondary: 240 7.1% 94.5%;\n  --twc-button-secondary-hovered: 240 4% 85.3%;\n  --twc-button-secondary-disabled: 240 16% 90.2%;\n  --twc-button-secondary-disabled-opacity: 0.40;\n  --twc-button-primary-disabled: 241.20000000000005 100% 50%;\n  --twc-button-primary-disabled-opacity: 0.16;\n  --twc-button-secondary-pressed: 240 8.8% 77.6%;\n  --twc-line-divider: 0 0% 14.5%;\n  --twc-line-divider-opacity: 0.08;\n  --twc-line-border: 0 0% 14.5%;\n  --twc-line-border-opacity: 0.08;\n  --twc-input-border: 0 0% 14.5%;\n  --twc-input-border-opacity: 0.18;\n  --twc-input-search-bg: 0 0% 14.5%;\n  --twc-input-search-bg-opacity: 0.08;\n  --twc-text-disabled: 0 0% 14.5%;\n  --twc-text-disabled-opacity: 0.40;\n  --twc-button-icon-button: 241.20000000000005 100% 50%;\n  --twc-button-icon-button-opacity: 0.12;\n  --twc-action-hovered: 0 0% 0%;\n  --twc-action-hovered-opacity: 0.06;\n  --twc-action-pressed: 240 100% 14.3%;\n  --twc-action-pressed-opacity: 0.12;\n  --twc-action-focused: 241.20000000000005 100% 50%;\n  --twc-action-focused-opacity: 0.24;\n  --twc-background-flow: 0 0% 92.9%;\n  --twc-keyboard-ios-bg: 220 10.6% 83.3%;\n  --twc-keyboard-key-light: 0 0% 100%;\n  --twc-keyboard-action: 211.29999999999995 100% 50%;\n  --twc-keyboard-key-dark: 218.79999999999995 11.1% 70%;\n  --twc-keyboard-on-key: 0 0% 19.2%;\n  --twc-button-icon-button-disabled: 241.20000000000005 100% 50%;\n  --twc-button-icon-button-disabled-opacity: 0.04;\n  --twc-background-actionsheet-bg: 0 0% 0%;\n  --twc-background-actionsheet-bg-opacity: 0.20;\n  --twc-background-actionsheet: 0 0% 100%;\n  --twc-background-modal: 0 0% 91.8%;\n  --twc-browser-primary-bg: 0 0% 100%;\n  --twc-browser-secondary-bg: 0 0% 14.5%;\n  --twc-browser-secondary-bg-opacity: 0.08;\n  --twc-accent-orange-bg: 37.19999999999999 92% 48.8%;\n  --twc-accent-orange-bg-opacity: 0.24;\n  --twc-accent-orange: 37.19999999999999 92% 48.8%;\n  --twc-other-nologo: 267 100% 56.9%;\n  --twc-background-tab: 0 0% 100%;\n  --twc-primary: 241.20000000000005 100% 50%;\n  --twc-primaryHover: 241 100% 65.5%;\n  --twc-primaryPressed: 241.20000000000005 100% 69.6%;\n  --twc-primaryInverse: 241.20000000000005 100% 50%;\n  --twc-primaryInverse-opacity: 0.16;\n  --twc-textPrimary: 0 0% 14.5%;\n  --twc-textPrimaryStatic: 0 0% 14.5%;\n  --twc-textSecondary: 0 0% 14.5%;\n  --twc-textSecondary-opacity: 0.72;\n  --twc-textThird: 0 0% 14.5%;\n  --twc-textThird-opacity: 0.48;\n  --twc-textBuy: 137.3 100% 27.8%;\n  --twc-textSell: 0 81.3% 42%;\n  --twc-textDisabled: 0 0% 14.5%;\n  --twc-textDisabled-opacity: 0.24;\n  --twc-textBrand: 41 85.3% 42.7%;\n  --twc-bg3: 240 7.1% 94.5%;\n  --twc-backgroundPrimary: 0 0% 100%;\n  --twc-backgroundSecondary: 240 7.1% 94.5%;\n  --twc-backgroundTertiary: 0 0% 14.5%;\n  --twc-backgroundTertiary-opacity: 0.12;\n  --twc-successBg: 137.3 100% 27.8%;\n  --twc-successBg-opacity: 0.16;\n  --twc-errorBg: 0 81.3% 42%;\n  --twc-errorBg-opacity: 0.16;\n  --twc-depthBuyBg: 241.20000000000005 100% 50%;\n  --twc-depthBuyBg-opacity: 0.16;\n  --twc-iconNormal: 0 0% 14.5%;\n  --twc-iconNormal-opacity: 0.72;\n  --twc-iconSuccess: 137.3 100% 27.8%;\n  --twc-iconWarning: 41 85.3% 42.7%;\n  --twc-error: 0 81.3% 42%;\n  --twc-warning: 41 85.3% 42.7%;\n  --twc-warning-opacity: 0.16;\n  --twc-info: 241.20000000000005 100% 50%;\n  --twc-info-opacity: 0.16;\n  --twc-success: 137.5 88.8% 34.9%;\n  --twc-line: 0 0% 14.5%;\n  --twc-line-opacity: 0.08;\n  --twc-startGradient: 241.20000000000005 100% 50%;\n  --twc-finishGradient: 0 0% 14.5%;\n  --twc-finishGradient-opacity: 0.48;\n  --twc-lightGradientStart: 194.60000000000002 80.4% 46.1%;\n  --twc-lightGradientMid: 300.9 66.8% 61%;\n  --twc-lightGradientEnd: 41.10000000000002 100% 42.4%;\n}\n.dark,[data-theme="dark"] {\n  --twc-primary-default: 143.89999999999998 100% 64.1%;\n  --twc-primary-hover: 144 100% 78.4%;\n  --twc-primary-pressed: 143.89999999999998 100% 82.7%;\n  --twc-primary-opacity-1: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-1-opacity: 0.16;\n  --twc-primary-opacity-2: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-2-opacity: 0.24;\n  --twc-primary-opacity-3: 143.89999999999998 100% 64.1%;\n  --twc-primary-opacity-3-opacity: 0.32;\n  --twc-on-primary: 240 1.8% 10.8%;\n  --twc-on-primary-opacity-1: 240 1.8% 10.8%;\n  --twc-on-primary-opacity-1-opacity: 0.40;\n  --twc-background-1: 240 1.8% 10.8%;\n  --twc-background-2: 240 2.7% 14.5%;\n  --twc-utility-1-default: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-1: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-1-opacity: 0.72;\n  --twc-utility-1-opacity-2: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-2-opacity: 0.48;\n  --twc-utility-1-opacity-3: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-3-opacity: 0.24;\n  --twc-utility-1-opacity-4: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-4-opacity: 0.12;\n  --twc-utility-1-opacity-5: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-5-opacity: 0.08;\n  --twc-utility-1-opacity-6: 216 13.5% 92.7%;\n  --twc-utility-1-opacity-6-opacity: 0.04;\n  --twc-success-1-default: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-1: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-1-opacity: 0.16;\n  --twc-success-1-opacity-2: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-2-opacity: 0.24;\n  --twc-success-1-opacity-3: 154.89999999999998 61.1% 41.4%;\n  --twc-success-1-opacity-3-opacity: 0.32;\n  --twc-warning-1-default: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-1: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-1-opacity: 0.16;\n  --twc-warning-1-opacity-2: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-2-opacity: 0.24;\n  --twc-warning-1-opacity-3: 42 84.9% 53.1%;\n  --twc-warning-1-opacity-3-opacity: 0.32;\n  --twc-error-1-default: 0 100% 68%;\n  --twc-error-1-hover: 0 100% 71.2%;\n  --twc-error-1-pressed: 0 100% 74.5%;\n  --twc-error-1-opacity-1: 0 100% 68%;\n  --twc-error-1-opacity-1-opacity: 0.16;\n  --twc-error-1-opacity-2: 0 100% 68%;\n  --twc-error-1-opacity-2-opacity: 0.24;\n  --twc-error-1-opacity-3: 0 100% 68%;\n  --twc-error-1-opacity-3-opacity: 0.32;\n  --twc-accent-pink: 300.70000000000005 100% 84.1%;\n  --twc-accent-neon-green: 82.80000000000001 100% 50%;\n  --twc-accent-yellow: 46.69999999999999 100% 56.7%;\n  --twc-accent-blue: 194.60000000000002 100% 59%;\n  --twc-light-gradient-start: 194.60000000000002 100% 59%;\n  --twc-light-gradient-mid: 300.70000000000005 100% 84.1%;\n  --twc-light-gradient-end: 46.69999999999999 100% 56.7%;\n  --twc-transparent: 0 0% 0%;\n  --twc-transparent-opacity: 0.00;\n  --twc-overlay-100: 0 0% 37.6%;\n  --twc-overlay-100-opacity: 0.40;\n  --twc-overlay-50: 0 0% 37.6%;\n  --twc-overlay-50-opacity: 0.16;\n  --twc-tooltip: 240 1% 20.6%;\n  --twc-alert-solid: 157.10000000000002 26.6% 15.5%;\n  --twc-other-Bronze: 39.80000000000001 32% 49%;\n  --twc-other-Silver: 22.5 10.8% 85.5%;\n  --twc-other-Gold: 45.89999999999998 96.4% 56.7%;\n  --twc-decoration-strikethrough: 225 1.7% 47.5%;\n  --twc-brand-primary: 143.89999999999998 100% 64.1%;\n  --twc-button-primary-hovered: 144 100% 78.4%;\n  --twc-button-primary-pressed: 143.89999999999998 100% 82.7%;\n  --twc-brand-background: 143.89999999999998 100% 64.1%;\n  --twc-brand-background-opacity: 0.16;\n  --twc-brand-on-primary: 240 1.8% 10.8%;\n  --twc-background-primary: 140 7.7% 7.6%;\n  --twc-background-secondary: 240 3.4% 17.5%;\n  --twc-success-background: 154.79999999999995 68.9% 44.1%;\n  --twc-success-background-opacity: 0.16;\n  --twc-error-background: 0 100% 68%;\n  --twc-error-background-opacity: 0.16;\n  --twc-warning-background: 42 84.9% 53.1%;\n  --twc-warning-background-opacity: 0.16;\n  --twc-text-primary: 216 13.5% 92.7%;\n  --twc-text-secondary: 216 13.5% 92.7%;\n  --twc-text-secondary-opacity: 0.72;\n  --twc-_app-colour-utility-utility-1---opacity-2: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;\n  --twc-background-tertiary: 0 0% 100%;\n  --twc-background-tertiary-opacity: 0.12;\n  --twc-success-main: 154.79999999999995 68.9% 44.1%;\n  --twc-error-main: 0 100% 68%;\n  --twc-warning-main: 42 84.9% 53.1%;\n  --twc-accent-lavender: 266.9 100% 75.1%;\n  --twc-accent-neon: 82.80000000000001 100% 50%;\n  --twc-accent-sand: 46.69999999999999 100% 56.7%;\n  --twc-accent-ocean: 194.60000000000002 100% 59%;\n  --twc-_app-colour-utility-utility-1---opacity-4: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;\n  --twc-_app-colour-utility-utility-1---opacity-5: 216 13.5% 92.7%;\n  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;\n  --twc-other-skeleton: 216 13.5% 92.7%;\n  --twc-other-skeleton-opacity: 0.04;\n  --twc-_app-colour-primary-primary---opacity-2: 143.89999999999998 100% 64.1%;\n  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;\n  --twc-_app-colour-primary-primary---opacity-3: 143.89999999999998 100% 64.1%;\n  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;\n  --twc-error-border: 0 100% 68%;\n  --twc-error-border-opacity: 0.24;\n  --twc-error-disabled: 0 100% 68%;\n  --twc-error-disabled-opacity: 0.32;\n  --twc-error-hovered: 0 100% 71.2%;\n  --twc-error-pressed: 0 100% 74.5%;\n  --twc-success-border: 154.79999999999995 68.9% 44.1%;\n  --twc-success-border-opacity: 0.24;\n  --twc-success-disabled: 154.79999999999995 68.9% 44.1%;\n  --twc-success-disabled-opacity: 0.32;\n  --twc-warning-border: 42 84.9% 53.1%;\n  --twc-warning-border-opacity: 0.24;\n  --twc-warning-disabled: 42 84.9% 53.1%;\n  --twc-warning-disabled-opacity: 0.32;\n  --twc-brand-on-primary-disabled: 240 1.8% 10.8%;\n  --twc-brand-on-primary-disabled-opacity: 0.80;\n  --twc-accent-fuchsia: 305.4 100% 50%;\n  --twc-accent-lavender-bg: 266.9 100% 75.1%;\n  --twc-accent-lavender-bg-opacity: 0.32;\n  --twc-accent-neon-bg: 82.80000000000001 100% 50%;\n  --twc-accent-neon-bg-opacity: 0.32;\n  --twc-accent-sand-bg: 46.69999999999999 100% 56.7%;\n  --twc-accent-sand-bg-opacity: 0.32;\n  --twc-accent-ocean-bg: 194.60000000000002 100% 59%;\n  --twc-accent-ocean-bg-opacity: 0.32;\n  --twc-accent-fuchsia-bg: 305.4 100% 50%;\n  --twc-accent-fuchsia-bg-opacity: 0.32;\n  --twc-icon-primary: 216 13.5% 92.7%;\n  --twc-icon-secondary: 216 13.5% 92.7%;\n  --twc-icon-secondary-opacity: 0.72;\n  --twc-icon-disabled: 216 13.5% 92.7%;\n  --twc-icon-disabled-opacity: 0.40;\n  --twc-button-primary: 143.89999999999998 100% 64.1%;\n  --twc-button-secondary: 240 3.4% 17.5%;\n  --twc-button-secondary-hovered: 140 2.1% 27.6%;\n  --twc-button-secondary-disabled: 140 3.4% 17.5%;\n  --twc-button-secondary-disabled-opacity: 0.40;\n  --twc-button-primary-disabled: 143.89999999999998 100% 64.1%;\n  --twc-button-primary-disabled-opacity: 0.32;\n  --twc-button-secondary-pressed: 150 2.2% 36.5%;\n  --twc-line-divider: 216 13.5% 92.7%;\n  --twc-line-divider-opacity: 0.12;\n  --twc-line-border: 216 13.5% 92.7%;\n  --twc-line-border-opacity: 0.12;\n  --twc-input-border: 216 13.5% 92.7%;\n  --twc-input-border-opacity: 0.24;\n  --twc-input-search-bg: 216 13.5% 92.7%;\n  --twc-input-search-bg-opacity: 0.12;\n  --twc-text-disabled: 216 13.5% 92.7%;\n  --twc-text-disabled-opacity: 0.40;\n  --twc-button-icon-button: 143.89999999999998 100% 64.1%;\n  --twc-button-icon-button-opacity: 0.16;\n  --twc-action-hovered: 0 0% 100%;\n  --twc-action-hovered-opacity: 0.08;\n  --twc-action-pressed: 0 0% 100%;\n  --twc-action-pressed-opacity: 0.12;\n  --twc-action-focused: 143.89999999999998 100% 64.1%;\n  --twc-action-focused-opacity: 0.24;\n  --twc-background-flow: 0 0% 28.2%;\n  --twc-keyboard-ios-bg: 0 0% 19.2%;\n  --twc-keyboard-key-light: 0 0% 43.5%;\n  --twc-keyboard-action: 211.29999999999995 100% 50%;\n  --twc-keyboard-key-dark: 0 0% 29.4%;\n  --twc-keyboard-on-key: 0 0% 100%;\n  --twc-button-icon-button-disabled: 143.89999999999998 100% 64.1%;\n  --twc-button-icon-button-disabled-opacity: 0.08;\n  --twc-background-actionsheet-bg: 0 0% 0%;\n  --twc-background-actionsheet-bg-opacity: 0.40;\n  --twc-background-actionsheet: 0 0% 12.2%;\n  --twc-background-modal: 0 0% 14.5%;\n  --twc-browser-primary-bg: 0 0% 23.5%;\n  --twc-browser-secondary-bg: 0 0% 15.7%;\n  --twc-accent-orange-bg: 37.10000000000002 100% 59.4%;\n  --twc-accent-orange-bg-opacity: 0.32;\n  --twc-accent-orange: 37.10000000000002 100% 59.4%;\n  --twc-other-nologo: 266.9 100% 75.1%;\n  --twc-background-tab: 0 0% 100%;\n  --twc-background-tab-opacity: 0.16;\n  --twc-primary: 143.89999999999998 100% 64.1%;\n  --twc-primaryHover: 144 100% 78.4%;\n  --twc-primaryPressed: 143.89999999999998 100% 82.7%;\n  --twc-primaryInverse: 143.89999999999998 100% 64.1%;\n  --twc-primaryInverse-opacity: 0.16;\n  --twc-textPrimary: 216 13.5% 92.7%;\n  --twc-textPrimaryStatic: 0 0% 14.5%;\n  --twc-textSecondary: 216 13.5% 92.7%;\n  --twc-textSecondary-opacity: 0.72;\n  --twc-textThird: 216 13.5% 92.7%;\n  --twc-textThird-opacity: 0.48;\n  --twc-textBuy: 154.89999999999998 61.1% 41.4%;\n  --twc-textSell: 0 100% 68%;\n  --twc-textDisabled: 216 13.5% 92.7%;\n  --twc-textDisabled-opacity: 0.24;\n  --twc-textBrand: 42 84.9% 53.1%;\n  --twc-bg3: 240 2.7% 14.5%;\n  --twc-bg4: 216 13.5% 92.7%;\n  --twc-bg4-opacity: 0.48;\n  --twc-backgroundPrimary: 240 1.8% 10.8%;\n  --twc-backgroundSecondary: 240 2.7% 14.5%;\n  --twc-backgroundTertiary: 216 13.5% 92.7%;\n  --twc-backgroundTertiary-opacity: 0.12;\n  --twc-successBg: 154.89999999999998 61.1% 41.4%;\n  --twc-successBg-opacity: 0.16;\n  --twc-errorBg: 0 100% 68%;\n  --twc-errorBg-opacity: 0.16;\n  --twc-depthBuyBg: 143.89999999999998 100% 64.1%;\n  --twc-depthBuyBg-opacity: 0.16;\n  --twc-iconNormal: 216 13.5% 92.7%;\n  --twc-iconNormal-opacity: 0.72;\n  --twc-iconSuccess: 154.89999999999998 61.1% 41.4%;\n  --twc-iconWarning: 42 84.9% 53.1%;\n  --twc-success: 154.79999999999995 68.9% 44.1%;\n  --twc-error: 0 100% 68%;\n  --twc-warning: 42 84.9% 53.1%;\n  --twc-warning-opacity: 0.16;\n  --twc-info: 143.89999999999998 100% 64.1%;\n  --twc-info-opacity: 0.16;\n  --twc-line: 216 13.5% 92.7%;\n  --twc-line-opacity: 0.08;\n  --twc-startGradient: 143.89999999999998 100% 64.1%;\n  --twc-finishGradient: 216 13.5% 92.7%;\n  --twc-finishGradient-opacity: 0.48;\n  --twc-lightGradientStart: 194.60000000000002 100% 59%;\n  --twc-lightGradientMid: 300.70000000000005 100% 84.1%;\n  --twc-lightGradientEnd: 46.69999999999999 100% 56.7%;\n}\n.scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n  border-radius: var(--scrollbar-track-radius);\n}\n.scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));\n}\n.scrollbar::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));\n}\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n  border-radius: var(--scrollbar-thumb-radius);\n}\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));\n}\n.scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));\n}\n.scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n  border-radius: var(--scrollbar-corner-radius);\n}\n.scrollbar::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));\n}\n.scrollbar::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));\n}\n.scrollbar {\n  scrollbar-width: auto;\n  scrollbar-color: initial initial;\n  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);\n}\n.scrollbar::-webkit-scrollbar {\n  display: block;\n  width: 16px;\n  width: var(--scrollbar-width, 16px);\n  height: 16px;\n  height: var(--scrollbar-height, 16px);\n}\n.word-break {\n  word-break: break-word;\n}\n.text-gradient-light {\n  background: linear-gradient(110deg, hsl(var(--twc-lightGradientStart)) 0%, hsl(var(--twc-lightGradientMid)) 48%, hsl(var(--twc-lightGradientEnd)) 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.\\*\\:-mb-\\[18px\\] > * {\n  margin-bottom: -18px;\n}\n.\\*\\:whitespace-nowrap > * {\n  white-space: nowrap;\n}\n.placeholder\\:text-text-primary::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-primary) / 1);\n  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));\n}\n.placeholder\\:text-text-primary::placeholder {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-text-primary) / 1);\n  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));\n}\n.last-of-type\\:\\!mb-5:last-of-type {\n  margin-bottom: 1.25rem !important;\n}\n.empty\\:hidden:empty {\n  display: none;\n}\n.data-\\[hidden\\=true\\]\\:hidden[data-hidden=true] {\n  display: none;\n}\n.data-\\[selected\\=true\\]\\:border-primary-default[data-selected=true] {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.data-\\[selected\\=\\'true\\'\\]\\:bg-bg3[data-selected='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-bg3) / 1);\n  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));\n}\n.data-\\[selected\\=\\'true\\'\\]\\:bg-primary[data-selected='true'] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary) / 1);\n  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:-translate-x-0:hover {\n  --tw-translate-x: -0px;\n  transform: translate(-0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-\\[1\\.01\\]:hover {\n  --tw-scale-x: 1.01;\n  --tw-scale-y: 1.01;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.01) scaleY(1.01);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-\\[1\\.02\\]:hover {\n  --tw-scale-x: 1.02;\n  --tw-scale-y: 1.02;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.02) scaleY(1.02);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:bg-button-primary-hovered:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-hovered) / 1);\n  background-color: hsl(var(--twc-button-primary-hovered) / var(--twc-button-primary-hovered-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-button-secondary-hovered:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-hovered) / 1);\n  background-color: hsl(var(--twc-button-secondary-hovered) / var(--twc-button-secondary-hovered-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-error-1-hover:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-hover) / 1);\n  background-color: hsl(var(--twc-error-1-hover) / var(--twc-error-1-hover-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-error-1-opacity-2:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-2) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-2) / var(--twc-error-1-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-line:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-line) / 1);\n  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-primary-hover:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-hover) / 1);\n  background-color: hsl(var(--twc-primary-hover) / var(--twc-primary-hover-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-primary-opacity-2:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-2) / 1);\n  background-color: hsl(var(--twc-primary-opacity-2) / var(--twc-primary-opacity-2-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:bg-utility-1-opacity-5:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));\n}\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, 1);\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.hover\\:text-primary:hover {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-primary) / 1);\n  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));\n}\n.hover\\:text-textPrimary:hover {\n  --tw-text-opacity: 1;\n  color: hsl(var(--twc-textPrimary) / 1);\n  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));\n}\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\n.focus\\:border-error:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-error) / 1);\n  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));\n}\n.focus\\:border-primary-default:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-primary-default) / 1);\n  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));\n}\n.focus\\:border-success:focus {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--twc-success) / 1);\n  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.active\\:scale-\\[0\\.9\\]:active {\n  --tw-scale-x: 0.9;\n  --tw-scale-y: 0.9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(0.9) scaleY(0.9);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.active\\:scale-\\[1\\.03\\]:active {\n  --tw-scale-x: 1.03;\n  --tw-scale-y: 1.03;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.03) scaleY(1.03);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.active\\:bg-button-primary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-pressed) / 1);\n  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-button-secondary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-pressed) / 1);\n  background-color: hsl(var(--twc-button-secondary-pressed) / var(--twc-button-secondary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-error-1-opacity-3:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-3) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-3) / var(--twc-error-1-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-error-1-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-pressed) / 1);\n  background-color: hsl(var(--twc-error-1-pressed) / var(--twc-error-1-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-primary-opacity-3:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-3) / 1);\n  background-color: hsl(var(--twc-primary-opacity-3) / var(--twc-primary-opacity-3-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-primary-pressed:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-pressed) / 1);\n  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.active\\:bg-utility-1-opacity-4:active {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);\n  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-button-primary-pressed:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-primary-pressed) / 1);\n  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-button-secondary-disabled:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-button-secondary-disabled) / 1);\n  background-color: hsl(var(--twc-button-secondary-disabled) / var(--twc-button-secondary-disabled-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-error-1-opacity-1:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-error-1-opacity-1) / 1);\n  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-primary-opacity-1:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-opacity-1) / 1);\n  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));\n}\n.disabled\\:bg-primary-pressed:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--twc-primary-pressed) / 1);\n  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));\n}\n@media (min-width: 768px) {\n\n  .md\\:h-\\[7rem\\] {\n    height: 7rem;\n  }\n\n  .md\\:w-\\[7rem\\] {\n    width: 7rem;\n  }\n\n  .md\\:max-w-\\[438px\\] {\n    max-width: 438px;\n  }\n\n  .md\\:max-w-\\[962px\\] {\n    max-width: 962px;\n  }\n}\n@media (max-width: 378px) {\n\n  .xs-max\\:px-1 {\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n}\n@media (max-width: 500px) {\n\n  .sm-max\\:\\!w-full {\n    width: 100% !important;\n  }\n}\n@media (max-width: 925px) {\n\n  .lg-max\\:mb-6 {\n    margin-bottom: 24px;\n  }\n\n  .lg-max\\:h-\\[180px\\] {\n    height: 180px;\n  }\n\n  .lg-max\\:h-\\[709px\\] {\n    height: 709px;\n  }\n\n  .lg-max\\:w-\\[488px\\] {\n    width: 488px;\n  }\n\n  .lg-max\\:w-full {\n    width: 100%;\n  }\n\n  .lg-max\\:w-min {\n    width: -moz-min-content;\n    width: min-content;\n  }\n\n  .lg-max\\:flex-col {\n    flex-direction: column;\n  }\n}\n@media (min-width: 926px) {\n\n  .lg-min\\:h-\\[312px\\] {\n    height: 312px;\n  }\n\n  .lg-min\\:h-\\[320px\\] {\n    height: 320px;\n  }\n\n  .lg-min\\:h-\\[497px\\] {\n    height: 497px;\n  }\n\n  .lg-min\\:h-\\[540px\\] {\n    height: 540px;\n  }\n\n  .lg-min\\:w-\\[342px\\] {\n    width: 342px;\n  }\n\n  .lg-min\\:w-\\[925px\\] {\n    width: 925px;\n  }\n\n  .lg-min\\:max-w-\\[925px\\] {\n    max-width: 925px;\n  }\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:text-black {\n    --tw-text-opacity: 1;\n    color: rgba(0, 0, 0, 1);\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n  }\n}\n.\\[\\&\\>\\*\\:last-child\\]\\:ml-auto>*:last-child {\n  margin-left: auto;\n}\n.\\[\\&\\>\\*\\:not\\(\\:first-child\\)\\]\\:ml-4>*:not(:first-child) {\n  margin-left: 16px;\n}\n.\\[\\&_\\*\\]\\:invisible * {\n  visibility: hidden;\n}\n`, ""]);
      const R = S
    },
    83397: (t, n, r) => {
      r.d(n, {
        p: () => e
      });
      var a = r(38208);

      function e() {
        return a.w.find(t => t === navigator.language || t.split("-")[0] === navigator.language.split("-")[0]) || "en"
      }
    },
    84989: (t, n, r) => {
      t.exports = r.p + "6563999da1964c37c508.otf"
    },
    88407: (t, n, r) => {
      r.d(n, {
        L: () => i
      });
      var a = r(98649),
        e = r(80577),
        o = r(6517),
        c = (t, n, r) => new Promise((a, e) => {
          var o = t => {
              try {
                i(r.next(t))
              } catch (t) {
                e(t)
              }
            },
            c = t => {
              try {
                i(r.throw(t))
              } catch (t) {
                e(t)
              }
            },
            i = t => t.done ? a(t.value) : Promise.resolve(t.value).then(o, c);
          i((r = r.apply(t, n)).next())
        });

      function i(t) {
        return c(this, null, function*() {
          t.checking || (t.checking = !0, (yield(0, e.r)(t)) === a.k.IDLE ? t.missCount++ : t.statusProvider.emit(a.V.EVENT, a.k.READY), t.missCount >= t.MAX_MISS_RECONNECT && (t.statusProvider.emit(a.V.EVENT, a.k.LOADING), t.portStream = new o.Dz(t.portName), t.statusProvider.emit(a.V.REPLACED, a.k.LOADING), t.missCount = 0), t.checking = !1, setTimeout(() => i(t), t.THRESHOLD))
        })
      }
    },
    89419: (t, n, r) => {
      r.d(n, {
        T: () => a
      });
      const a = (0, r(20038).Z0)({
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
          setPrepareSendState(t, n) {
            t.prepareSend = n.payload.data
          },
          removePrepareSendState(t) {
            t.prepareSend = null, t.prepareSendResolvedAddress = null, t.prepareSendResolvingAddress = !1
          },
          setPrepareSendResolvedAddress(t, n) {
            t.prepareSendResolvedAddress = n.payload, t.prepareSendResolvingAddress = !1
          },
          clearPrepareSendResolvedAddress(t) {
            t.prepareSendResolvedAddress = null, t.prepareSendResolvingAddress = !1
          },
          clearPrepareSendAddressError(t) {
            t.prepareSend && (t.prepareSend.addressError = null)
          },
          setPrepareSendResolvingAddress(t, n) {
            t.prepareSendResolvingAddress = n.payload
          },
          setEarnState(t, n) {
            t.earn = n.payload
          },
          removeEarnState(t) {
            t.earn = null
          },
          setStakeDetailsState(t, n) {
            t.stakeDetails = n.payload
          },
          removeStakeDetailsState(t) {
            t.stakeDetails = null
          },
          setStakeDetailsError(t, n) {
            t.stakeDetailsError = n.payload
          },
          removeStakeDetailsError(t) {
            t.stakeDetailsError = null
          },
          setStakeState(t, n) {
            t.stake = n.payload
          },
          removeStakeState(t) {
            t.stake = null
          },
          setNavigation(t, n) {
            t.navigation = n.payload
          },
          clearNavigation(t) {
            t.navigation = null
          },
          setValidatorSelectorState(t, n) {
            t.validatorSelector = n.payload
          },
          removeValidatorSelectorState(t) {
            t.validatorSelector = null
          },
          setGasStatusState(t, n) {
            t.gasStatus = n.payload
          },
          removeGasStatusState(t) {
            t.gasStatus = null
          },
          setGasStationState(t, n) {
            t.gasStation = n.payload
          },
          removeGasStationState(t) {
            t.gasStation = null
          },
          setHomeEarnWidgetState(t, n) {
            t.homeEarnWidget = n.payload
          },
          removeHomeEarnWidgetState(t) {
            t.homeEarnWidget = null
          }
        }
      })
    },
    90658: (t, n, r) => {
      var a;
      r.d(n, {
        A: () => i,
        B: () => c
      });
      const e = "object" == typeof chrome && null != (a = null == chrome ? void 0 : chrome.runtime) && a.id ? r(96815) : {},
        o = e;
      o.action = e.action || e.browserAction;
      const c = () => {
          var t;
          return !(null == (t = null == chrome ? void 0 : chrome.storage) || !t.session)
        },
        i = o
    },
    93726: (t, n, r) => {
      r.d(n, {
        X: () => a
      });
      const a = {
        LIGHT: "light",
        DARK: "dark",
        SYSTEM: "system"
      }
    },
    94023: (t, n, r) => {
      t.exports = r.p + "dd9993384c19c3bc71d3.ttf"
    },
    94323: (t, n, r) => {
      r.d(n, {
        A: () => e
      });
      var a = r(24439);
      const e = {
        SITE_DISCONNECTED: (0, a.w3)("SITE_DISCONNECTED"),
        CHAIN_CHANGED: (0, a.w3)("CHAIN_CHANGED"),
        ACCOUNT_CHANGED: (0, a.w3)("ACCOUNT_CHANGED"),
        DEFAULT_WALLET_CHANGED: (0, a.w3)("DEFAULT_WALLET_CHANGED"),
        BNB_STAKING_CHAIN_CHANGED: (0, a.w3)("BNB_STAKING_CHAIN_CHANGED"),
        ONE_TAP_CLOSED: (0, a.w3)("OneTapClosed"),
        ONE_TAP_WAGMI: (0, a.w3)("OneTapWagmi"),
        WALLET_CONNECTED_ON_ORIGIN: (0, a.w3)("WalletConnectedOnOrigin")
      }
    },
    94566: (t, n, r) => {
      var a = r(14644),
        e = r(61855),
        o = r(58464),
        c = r(1824),
        i = r(28398),
        l = r(35328),
        s = r(42836),
        p = r(17855),
        d = r(31357),
        w = r(52856),
        y = r(48305),
        b = r(81481),
        g = r(64001),
        h = r(4387),
        v = r(89419),
        u = r(12464);
      (0, a.HY)({
        migrations: b.K.reducer,
        app: e.A.reducer,
        dapps: l.b.reducer,
        wallet: y.u.reducer,
        asset: o.H.reducer,
        nft: c.p.reducer,
        fiat: s.Z.reducer,
        notification: p.y.reducer,
        settings: d.s.reducer,
        tx: w.B.reducer,
        blockchains: i.A.reducer,
        staking: g.m.reducer,
        swap: h.W.reducer,
        sdkFeatures: v.T.reducer,
        approvals: u.L.reducer
      })
    },
    98649: (t, n, r) => {
      r.d(n, {
        V: () => i,
        k: () => c
      });
      var a, e = r(37007),
        o = r.n(e),
        c = ((a = c || {}).READY = "READY", a.LOADING = "LOADING", a.IDLE = "IDLE", a.RESTARTING = "RESTARTING", a);
      class i extends(o()) {
        constructor() {
          super(...arguments), this.status = "LOADING"
        }
        emit(t, n) {
          return this.status = n, super.emit(t, n)
        }
        emitReplaced(t, n) {
          return super.emit(t, n)
        }
      }
      i.EVENT = "EVENT", i.REPLACED = "REPLACED"
    }
  }
]);
