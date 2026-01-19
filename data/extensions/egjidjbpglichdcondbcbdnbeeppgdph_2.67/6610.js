try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.h = e.h || {}, e.h[t] = "7212993b-ad69-4a9f-a4f2-c1d5a75ea630", e.u = "sentry-dbid-7212993b-ad69-4a9f-a4f2-c1d5a75ea630")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [6610], {
    6475: (e, t, s) => {
      s.d(t, {
        q: () => n
      });
      var a = s(1651),
        r = s(58959),
        i = class extends a.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, r.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, r.PL)(), super.getOptimisticResult(e)
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "forward"
                }
              }
            })
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "backward"
                }
              }
            })
          }
          createResult(e, t) {
            const {
              state: s
            } = e, a = super.createResult(e, t), {
              isFetching: i,
              isRefetching: l,
              isError: n,
              isRefetchError: c
            } = a, o = s.fetchMeta?.fetchMore?.direction, d = n && "forward" === o, h = i && "forward" === o, u = n && "backward" === o, m = i && "backward" === o;
            return {
              ...a,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, r.rB)(t, s.data),
              hasPreviousPage: (0, r.RQ)(t, s.data),
              isFetchNextPageError: d,
              isFetchingNextPage: h,
              isFetchPreviousPageError: u,
              isFetchingPreviousPage: m,
              isRefetchError: c && !d && !u,
              isRefetching: l && !h && !m
            }
          }
        },
        l = s(44171);

      function n(e, t) {
        return (0, l.t)(e, i, t)
      }
    },
    16610: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => ge
      });
      var a = s(74848),
        r = s(62184),
        i = s(68656),
        l = s(16276),
        n = s(29584),
        c = s(23207),
        o = s(75395),
        d = s(13950),
        h = s(73082),
        u = s(26264),
        m = s(65512),
        f = s(52619),
        g = s(22146),
        C = s(52114),
        v = s(1279),
        p = s(21612),
        b = s(6442);
      const y = ({
        opened: e,
        onClose: t
      }) => {
        const {
          formatMessage: s
        } = (0, b.A)(), r = (0, p.s)();
        return (0, a.jsx)(g.a, {
          opened: e,
          onClose: t,
          title: s({
            id: "backup-seedphrase-cta.receive-crypto-header"
          }),
          children: (0, a.jsxs)("div", {
            className: "flex flex-col items-center space-y-2.5 text-center",
            children: [(0, a.jsx)(h.X, {}), (0, a.jsx)(C.E, {
              testid: "before-receive-modal-title",
              type: v.jK.HEADER,
              children: s({
                id: "backup-seedphrase-cta.receive-crypto-header"
              })
            }), (0, a.jsx)(C.E, {
              weight: v.nG.NORMAL,
              theme: v.Il.SECONDARY,
              children: s({
                id: "backup-seedphrase-cta.body"
              })
            }), (0, a.jsxs)("div", {
              className: "w-full flex flex-col space-y-5 pt-5",
              children: [(0, a.jsx)(m.$, {
                testid: "before-receive-modal-backup-button",
                onClick: () => r(u.b.ONBOARDING + "?flow=BACKUP_SEEDPHRASE"),
                children: s({
                  id: "backup-seedphrase-cta.back-up-secret-phrase-button"
                })
              }), (0, a.jsx)(m.$, {
                testid: "before-receive-proceed-button",
                theme: f.ry.TRANSPARENT,
                noPadding: !0,
                onClick: () => {
                  t()
                },
                children: (0, a.jsx)(C.E, {
                  theme: v.Il.BRAND,
                  type: v.jK.TITLE,
                  children: s({
                    id: "modal-remove-wallet.proceed-anyway"
                  })
                })
              })]
            })]
          })
        })
      };
      var w = s(60380),
        x = s(63111),
        k = s(65504),
        N = s(55418),
        P = s(4800),
        M = s(99550),
        S = s(28945),
        I = s(68632),
        O = s(26858),
        T = s(67658),
        A = s(40790),
        F = s(9702),
        H = s(96540),
        R = s(47767),
        B = s(85266);
      const V = () => {
        var e, t;
        const {
          formatMessage: s
        } = (0, b.A)(), h = (0, R.Zp)(), {
          assetId: u
        } = (0, R.g)(), {
          state: m
        } = (0, R.zy)(), g = (0, O.Mr)(u) ?? m?.asset, p = (0, T.A)(g), V = (0, A.F7)(p.coinId), E = (0, o.L)(g.blockchainId), {
          trackAnalytics: j
        } = (0, c.s)(), D = (0, F.D)(), Z = (0, H.useRef)(!1), [Q, U] = (0, H.useState)(!1), {
          navigationOrigin: q,
          clearNavigationOrigin: z
        } = (0, B.o)(), $ = (0, H.useMemo)(() => {
          var e;
          return null != (e = V?.address) ? e : E
        }, [V, E]), L = (0, A.N4)($);
        return (0, H.useEffect)(() => {
          D && !Z.current && (U(!0), Z.current = !0)
        }, [D]), L && g ? (0, a.jsxs)(P.LN, {
          children: [(0, a.jsx)(P.zY, {
            title: s({
              id: "modal-receive.title"
            }, {
              assetSymbol: g?.symbol
            }),
            backAction: () => {
              q ? (z(), h(q)) : h("/receive")
            }
          }), (0, a.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [(0, a.jsx)(w.F, {
              theme: x.Z.WARNING,
              children: s({
                id: "generic.modal-receive-warning-alert",
                defaultMessage: "Only send {assetName} ({assetType}) assets to this address. Other assets will be lost forever."
              }, {
                assetName: g?.name,
                assetType: null != (t = g.type) ? t : g.symbol
              })
            }), (0, a.jsx)(N.o, {
              children: (0, a.jsx)(S.r, {
                data: L,
                customLogo: (0, a.jsx)(l.D, {
                  children: (0, a.jsx)(k.q, {
                    name: g.name,
                    network: g.address ? p : void 0,
                    src: g.iconUrl,
                    size: I.Y.MEDIUM
                  })
                })
              })
            }), (0, a.jsx)("div", {
              className: "w-[250px] mx-auto",
              children: (0, a.jsx)(r.i, {
                disableRegister: p.isCustom,
                coinId: p.coinId,
                address: L,
                onCopy: () => {
                  j({
                    event: n.BQ.COPY_ADDRESS,
                    props: {
                      pageViewSource: n.Un.RECEIVE
                    }
                  })
                },
                shape: f.dB.DEFAULT,
                size: f.Vp.LARGE,
                theme: f.ry.SECONDARY,
                className: "overflow-hidden !py-2",
                children: (0, a.jsx)("div", {
                  className: "overflow-hidden break-words",
                  children: (0, a.jsx)(C.E, {
                    type: v.jK.SUBHEADER_14,
                    weight: v.nG.MEDIUM,
                    theme: v.Il.UTILITY_1_DEFAULT,
                    testid: "account-address",
                    children: $
                  })
                })
              })
            }), (0, a.jsx)(d.S, {
              label: s({
                id: "modal-receive.cex-funding-providers",
                defaultMessage: "Deposit from exchange"
              }),
              assetId: g.assetId,
              walletAddress: L,
              pageViewSource: n.Un.RECEIVE
            })]
          }), (0, a.jsx)(y, {
            opened: Q,
            onClose: () => U(!1)
          })]
        }) : (0, a.jsxs)(N.o, {
          direction: M.R.COLUMN,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(i.L, {})
          }), (0, a.jsx)("div", {
            className: "pt-3",
            children: (0, a.jsx)(C.E, {
              children: s({
                id: "modal-receive.account-does-not-exist"
              }, {
                asset: null != (e = g?.name) ? e : "Asset not provided"
              })
            })
          })]
        })
      };
      var E = s(80702),
        j = s(38795),
        D = s(19376),
        Z = s(73241),
        Q = s(97371),
        U = s(88774),
        q = s(45452),
        z = s(94893),
        $ = s(40053);
      const L = ({
        asset: e,
        onQRCodeClick: t
      }) => {
        var s;
        const {
          formatMessage: r
        } = (0, b.A)(), [i, l] = (0, H.useState)(!1), n = (0, T.A)(e), c = (0, A.F7)(n?.coinId), d = (0, o.L)(e.blockchainId), h = (0, H.useMemo)(() => {
          var e;
          return null != (e = c?.address) ? e : d
        }, [c, d]), u = (0, H.useMemo)(() => h ? (0, $.p)({
          value: h,
          maxCharsPerSide: 6
        }) : null, [h]), m = () => {
          h && t(e, h)
        };
        return n ? (0, a.jsx)(z.c, {
          testid: "receive-asset-row",
          onClick: m,
          children: (0, a.jsxs)("div", {
            className: "flex items-center space-x-3 py-2 cursor-pointer",
            children: [(0, a.jsx)(k.q, {
              name: e.name,
              network: e.address ? n : void 0,
              src: e.iconUrl,
              size: I.Y.LARGE
            }), (0, a.jsxs)("div", {
              className: "flex-grow min-w-0",
              children: [(0, a.jsxs)("div", {
                className: "flex items-center space-x-1",
                children: [(0, a.jsx)(C.E, {
                  testid: "asset-symbol",
                  type: v.jK.SUBHEADER_16,
                  weight: v.nG.MEDIUM,
                  children: e.symbol
                }), (0, a.jsx)(D.v, {
                  size: Z.V.SMALL,
                  theme: Z.x.SECONDARY,
                  children: null != (s = n.displayName) ? s : n.name
                })]
              }), (0, a.jsx)("div", {
                className: "mt-1",
                children: i ? (0, a.jsxs)("div", {
                  className: "flex items-center space-x-1 text-primary",
                  children: [(0, a.jsx)(U.S, {
                    width: 14,
                    height: 14
                  }), (0, a.jsx)(C.E, {
                    type: v.jK.BODY_14,
                    theme: v.Il.PRIMARY_DEFAULT,
                    children: r({
                      id: "receive-asset-cell.address-copied",
                      defaultMessage: "Address copied"
                    })
                  })]
                }) : u && (0, a.jsx)(C.E, {
                  testid: "asset-address",
                  type: v.jK.BODY_14,
                  theme: v.Il.UTILITY_1_OPACITY_1,
                  children: u
                })
              })]
            }), (0, a.jsxs)("div", {
              className: "flex items-center space-x-2",
              children: [(0, a.jsx)("button", {
                type: "button",
                "data-testid": "qr-code-button",
                onClick: e => {
                  e.stopPropagation(), m()
                },
                className: "w-10 h-10 rounded-full bg-bg2 flex items-center justify-center hover:bg-bg3 transition-colors",
                children: (0, a.jsx)(Q.l, {
                  width: 20,
                  height: 20,
                  colorClass: "text-textPrimary"
                })
              }), h && (0, a.jsx)(q.T, {
                testid: "copy-button",
                value: h,
                onCopy: () => {
                  l(!0), setTimeout(() => {
                    l(!1)
                  }, 5e3)
                },
                width: 20,
                height: 20,
                className: "rounded-full bg-bg2 hover:bg-bg3 transition-colors flex items-center justify-center"
              })]
            })]
          })
        }) : null
      };
      var W = s(95455),
        K = s(79830),
        _ = s(44832),
        G = s(75485),
        J = s(67310),
        X = Object.defineProperty,
        Y = Object.defineProperties,
        ee = Object.getOwnPropertyDescriptors,
        te = Object.getOwnPropertySymbols,
        se = {}.hasOwnProperty,
        ae = {}.propertyIsEnumerable,
        re = (e, t, s) => t in e ? X(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s
        }) : e[t] = s,
        ie = (e, t) => {
          for (var s in t || (t = {})) se.call(t, s) && re(e, s, t[s]);
          if (te)
            for (var s of te(t)) ae.call(t, s) && re(e, s, t[s]);
          return e
        },
        le = (e, t) => Y(e, ee(t));
      const ne = [{
          symbol: "BTC",
          name: "Bitcoin",
          blockchainId: "bitcoin",
          address: void 0
        }, {
          symbol: "ETH",
          name: "Ethereum",
          blockchainId: "ethereum",
          address: void 0
        }, {
          symbol: "SOL",
          name: "Solana",
          blockchainId: "solana",
          address: void 0
        }, {
          symbol: "TWT",
          name: "Trust Wallet Token",
          blockchainId: "smartchain",
          address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003"
        }, {
          symbol: "BNB",
          name: "BNB",
          blockchainId: "smartchain",
          address: void 0
        }, {
          symbol: "USDT",
          name: "Tether",
          blockchainId: "ethereum",
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        }, {
          symbol: "USDC",
          name: "USD Coin",
          blockchainId: "ethereum",
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        }],
        ce = (e, t, s) => {
          let a = t;
          return s && (a = a.filter(({
            blockchainId: e
          }) => e === s)), e ? a.filter(({
            symbol: t,
            name: s,
            address: a
          }) => a?.toLowerCase().includes(e.toLowerCase()) || t.toLowerCase().includes(e.toLowerCase()) || s.toLowerCase().includes(e.toLowerCase())) : a
        },
        oe = ({
          searchQuery: e,
          targetBlockchainId: t,
          onQRCodeClick: s
        }) => {
          const {
            formatMessage: r
          } = (0, b.A)(), i = (0, E.M)(), l = (0, _.g)(), n = (0, H.useMemo)(() => {
            if (!t) return null;
            const e = l.find(e => e.id === t);
            return e ? [(0, G.er)(e.coinId)] : null
          }, [l, t]), {
            flattenData: c,
            isFetching: o,
            setQuery: d,
            fetchNextPage: h,
            hasNextPage: u,
            useOnlyBackendResults: m
          } = (0, j.r)(n, !0);
          (0, H.useEffect)(() => {
            d(e || "")
          }, [e, d]), (0, H.useEffect)(() => {
            e && d(e)
          }, [t, e, d]);
          const f = (0, H.useMemo)(() => i.map(e => ie({}, e)), [i]),
            g = (0, H.useMemo)(() => {
              if (!e) return ce("", f, t);
              if (m) return c.filter(e => !t || e.blockchainId === t).map(e => {
                var t, s, a;
                return le(ie({}, e), {
                  isCustomAsset: null != (t = e.isCustomAsset) && t,
                  isUserCustomAsset: null != (s = e.isUserCustomAsset) && s,
                  isShownInHomeScreen: null != (a = e.isShownInHomeScreen) && a
                })
              });
              const s = ce(e, f, t),
                a = new Set(s.map(e => e.assetId)),
                r = c.filter(e => !(a.has(e.assetId) || t && e.blockchainId !== t)).map(e => {
                  var t, s, a;
                  return le(ie({}, e), {
                    isCustomAsset: null != (t = e.isCustomAsset) && t,
                    isUserCustomAsset: null != (s = e.isUserCustomAsset) && s,
                    isShownInHomeScreen: null != (a = e.isShownInHomeScreen) && a
                  })
                });
              return [...s, ...r]
            }, [e, f, c, t, m]),
            p = (0, H.useMemo)(() => ne.map(e => {
              const t = f.find(t => {
                var s;
                return t.blockchainId === e.blockchainId && t.symbol === e.symbol && (void 0 === e.address ? !t.address : (null == (s = t.address) ? void 0 : s.toLowerCase()) === e.address.toLowerCase())
              });
              if (t) return t;
              const s = l.find(t => t.id === e.blockchainId),
                a = e.address ? `${s?.coinId}_${e.address}` : "" + s?.coinId,
                r = e.address ? (0, G.fV)({
                  id: e.blockchainId,
                  address: e.address
                }) : s?.iconUrl;
              return {
                assetId: a,
                symbol: e.symbol,
                name: e.name,
                iconUrl: r,
                blockchainId: e.blockchainId,
                address: e.address,
                decimals: 18,
                balance: "0",
                isShownInHomeScreen: !1,
                isCustomAsset: !1,
                isUserCustomAsset: !1
              }
            }), [f, l]),
            y = (0, H.useMemo)(() => ce(e, p, t), [e, p, t]),
            w = (0, H.useMemo)(() => {
              const e = new Set(p.map(e => e.assetId));
              return g.filter(t => !e.has(t.assetId))
            }, [g, p]),
            x = y.length > 0,
            k = e ? g.length > 0 : w.length > 0,
            N = e ? g.length > 0 : w.length > 0,
            M = window.innerHeight - P.a4 - P.Et - P.e4 - P.N - 32 - 16 - 34 - 16;
          return e && o && 0 === g.length ? (0, a.jsx)("div", {
            className: "flex justify-center py-8",
            children: (0, a.jsx)(K.y, {
              size: I.Y.XLARGE
            })
          }) : g.length ? (0, a.jsx)(J.A, {
            dataLength: g.length,
            next: h,
            height: M,
            className: "tw-scrollbar",
            hasMore: !!e && !!u,
            loader: null,
            scrollThreshold: "5px",
            children: (0, a.jsxs)("div", {
              className: "flex flex-col w-full space-y-6",
              children: [x && (0, a.jsxs)("div", {
                className: "flex flex-col space-y-2",
                children: [(0, a.jsx)(C.E, {
                  type: v.jK.SUBHEADER_14,
                  theme: v.Il.SECONDARY,
                  weight: v.nG.SEMIBOLD,
                  children: r({
                    id: "receive-token-list.popular",
                    defaultMessage: "Popular"
                  })
                }), (0, a.jsx)("div", {
                  className: "flex flex-col",
                  children: y.map(e => (0, a.jsx)(L, {
                    asset: e,
                    onQRCodeClick: s
                  }, e.assetId))
                })]
              }), N && (0, a.jsxs)("div", {
                className: "flex flex-col space-y-2",
                children: [k && (0, a.jsx)(C.E, {
                  type: v.jK.SUBHEADER_14,
                  theme: v.Il.SECONDARY,
                  weight: v.nG.SEMIBOLD,
                  children: r({
                    id: "receive-token-list.all-crypto",
                    defaultMessage: "All Crypto"
                  })
                }), (0, a.jsx)("div", {
                  className: "flex flex-col",
                  children: e ? g.map(e => (0, a.jsx)(L, {
                    asset: e,
                    onQRCodeClick: s
                  }, e.assetId)) : w.map(e => (0, a.jsx)(L, {
                    asset: e,
                    onQRCodeClick: s
                  }, e.assetId))
                })]
              })]
            })
          }) : (0, a.jsx)(W.B, {
            message: r({
              id: "token-asset-list.empty-search-caption",
              defaultMessage: "No assets found"
            })
          })
        };
      var de = s(63369),
        he = s(8360),
        ue = s(29189),
        me = s(52294);
      const fe = () => {
          (0, de.K)({
            event: n.Un.RECEIVE,
            props: null
          });
          const {
            formatMessage: e
          } = (0, b.A)(), t = (0, R.Zp)(), [s, r] = (0, H.useState)(""), [i, l] = (0, H.useState)(""), c = (0, H.useRef)(null), o = (0, ue.f)(), [d, h] = (0, H.useState)(o ?? void 0), {
            navigationOrigin: m,
            clearNavigationOrigin: f
          } = (0, B.o)();
          return (0, H.useEffect)(() => (c.current && clearTimeout(c.current), c.current = setTimeout(() => {
            l(s)
          }, 250), () => {
            c.current && clearTimeout(c.current)
          }), [s]), (0, a.jsxs)(P.LN, {
            children: [(0, a.jsx)(P.zY, {
              backAction: () => {
                m ? (f(), t(m)) : t("/fund")
              },
              title: e({
                id: "select-asset.receive.title",
                defaultMessage: "Select asset to receive"
              })
            }), (0, a.jsxs)(P.Gv, {
              children: [(0, a.jsxs)("div", {
                className: "flex flex-col space-y-4 mb-4",
                children: [(0, a.jsx)(he.D, {
                  value: s,
                  onChange: e => r(e.target.value),
                  placeholder: e({
                    id: "buy-select-crypto.search-placeholder",
                    defaultMessage: "Search"
                  })
                }), (0, a.jsx)(me.M, {
                  localFilteringBlockchainId: d,
                  onFilterChange: e => h(e ?? void 0)
                })]
              }), (0, a.jsx)(oe, {
                searchQuery: i,
                targetBlockchainId: d,
                onQRCodeClick: (e, s) => {
                  t(`${u.b.RECEIVE}/${e.assetId}`, {
                    state: {
                      asset: e
                    }
                  })
                }
              })]
            })]
          })
        },
        ge = () => (0, a.jsxs)(R.BV, {
          children: [(0, a.jsx)(R.qh, {
            index: !0,
            element: (0, a.jsx)(fe, {})
          }), (0, a.jsx)(R.qh, {
            path: "/:assetId",
            element: (0, a.jsx)(V, {})
          })]
        })
    },
    38795: (e, t, s) => {
      s.d(t, {
        r: () => n
      });
      var a = s(6475),
        r = s(96540),
        i = s(64145),
        l = s(89408);

      function n(e, t) {
        const [s, n] = (0, r.useState)(void 0), {
          data: c,
          error: o,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: m,
          status: f
        } = (0, a.q)({
          queryKey: ["tokens", s, e?.join()],
          queryFn: ({
            pageParam: a
          }) => i.YW.emit(l.A.SEARCH_ASSETS, {
            query: s,
            networks: e,
            page: a,
            includeNonCustomTokenNetworks: t
          }),
          enabled: void 0 !== s,
          initialPageParam: 0,
          refetchOnWindowFocus: !1,
          getNextPageParam: e => e?.nextPage
        }), g = (0, r.useMemo)(() => (c?.pages || []).flatMap(e => e?.data || []), [c?.pages]), C = (0, r.useMemo)(() => {
          var e, t, s;
          return null != (s = null == (t = null == (e = c?.pages) ? void 0 : e[0]) ? void 0 : t.useOnlyBackendResults) && s
        }, [c?.pages]);
        return {
          setQuery: n,
          data: c,
          error: o,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: m,
          status: f,
          flattenData: g,
          useOnlyBackendResults: C
        }
      }
    },
    80702: (e, t, s) => {
      s.d(t, {
        M: () => C
      });
      var a = s(96540),
        r = s(47991),
        i = s(10537),
        l = s(15078),
        n = Object.defineProperty,
        c = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        h = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        m = (e, t, s) => t in e ? n(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s
        }) : e[t] = s,
        f = (e, t) => {
          for (var s in t || (t = {})) h.call(t, s) && m(e, s, t[s]);
          if (d)
            for (var s of d(t)) u.call(t, s) && m(e, s, t[s]);
          return e
        };
      const g = (e, t) => e.symbol.localeCompare(t.symbol),
        C = () => {
          const e = (0, r.P)(),
            t = (0, i.n)(),
            s = (0, l.I)(),
            n = f(f({}, t), s);
          return (0, a.useMemo)(() => e.reduce((e, t) => (n[t.blockchainId] && e.push(((e, t) => c(e, o(t)))(f({}, t), {
            blockchain: n[t.blockchainId]
          })), e), []).sort(g), [e, t, s])
        }
    },
    97371: (e, t, s) => {
      s.d(t, {
        l: () => r
      });
      var a = s(74848);
      const r = ({
        width: e,
        height: t,
        colorClass: s
      }) => (0, a.jsx)("svg", {
        className: s,
        fill: "none",
        width: e ?? 17,
        height: t ?? 17,
        viewBox: "0 0 17 17",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, a.jsx)("path", {
          d: "M3.33333 2.60547C3.11233 2.60549 2.90038 2.6933 2.7441 2.84957C2.58783 3.00585 2.50002 3.2178 2.5 3.4388V7.10547C2.50002 7.32648 2.58783 7.53842 2.7441 7.6947C2.90038 7.85098 3.11233 7.93878 3.33333 7.9388H7C7.22101 7.93878 7.43296 7.85098 7.58923 7.6947C7.74551 7.53842 7.83331 7.32648 7.83333 7.10547V3.4388C7.83331 3.2178 7.74551 3.00585 7.58923 2.84957C7.43296 2.6933 7.22101 2.60549 7 2.60547H3.33333ZM10 2.60547C9.77899 2.60549 9.56704 2.6933 9.41077 2.84957C9.25449 3.00585 9.16669 3.2178 9.16667 3.4388V7.10547C9.16669 7.32648 9.25449 7.53842 9.41077 7.6947C9.56704 7.85098 9.77899 7.93878 10 7.9388H13.6667C13.8877 7.93878 14.0996 7.85098 14.2559 7.6947C14.4122 7.53842 14.5 7.32648 14.5 7.10547V3.4388C14.5 3.2178 14.4122 3.00585 14.2559 2.84957C14.0996 2.6933 13.8877 2.60549 13.6667 2.60547H10ZM4.16667 4.27214H6.16667V6.27214H4.16667V4.27214ZM10.8333 4.27214H12.8333V6.27214H10.8333V4.27214ZM3.33333 9.27214C3.11233 9.27216 2.90038 9.35996 2.7441 9.51624C2.58783 9.67251 2.50002 9.88446 2.5 10.1055V13.7721C2.50002 13.9931 2.58783 14.2051 2.7441 14.3614C2.90038 14.5176 3.11233 14.6054 3.33333 14.6055H7C7.22101 14.6054 7.43296 14.5176 7.58923 14.3614C7.74551 14.2051 7.83331 13.9931 7.83333 13.7721V10.1055C7.83331 9.88446 7.74551 9.67251 7.58923 9.51624C7.43296 9.35996 7.22101 9.27216 7 9.27214H3.33333ZM10 9.27214C9.77899 9.27214 9.56702 9.35993 9.41074 9.51621C9.25446 9.67249 9.16667 9.88446 9.16667 10.1055C9.16667 10.3265 9.25446 10.5384 9.41074 10.6947C9.56702 10.851 9.77899 10.9388 10 10.9388C10.221 10.9388 10.433 10.851 10.5893 10.6947C10.7455 10.5384 10.8333 10.3265 10.8333 10.1055C10.8333 9.88446 10.7455 9.67249 10.5893 9.51621C10.433 9.35993 10.221 9.27214 10 9.27214ZM13.6667 9.27214C13.4457 9.27214 13.2337 9.35993 13.0774 9.51621C12.9211 9.67249 12.8333 9.88446 12.8333 10.1055C12.8333 10.3265 12.9211 10.5384 13.0774 10.6947C13.2337 10.851 13.4457 10.9388 13.6667 10.9388C13.8877 10.9388 14.0996 10.851 14.2559 10.6947C14.4122 10.5384 14.5 10.3265 14.5 10.1055C14.5 9.88446 14.4122 9.67249 14.2559 9.51621C14.0996 9.35993 13.8877 9.27214 13.6667 9.27214ZM4.16667 10.9388H6.16667V12.9388H4.16667V10.9388ZM11.8333 11.1055C11.6123 11.1055 11.4004 11.1933 11.2441 11.3495C11.0878 11.5058 11 11.7178 11 11.9388C11 12.1598 11.0878 12.3718 11.2441 12.5281C11.4004 12.6843 11.6123 12.7721 11.8333 12.7721C12.0543 12.7721 12.2663 12.6843 12.4226 12.5281C12.5789 12.3718 12.6667 12.1598 12.6667 11.9388C12.6667 11.7178 12.5789 11.5058 12.4226 11.3495C12.2663 11.1933 12.0543 11.1055 11.8333 11.1055ZM10 12.9388C9.77899 12.9388 9.56702 13.0266 9.41074 13.1829C9.25446 13.3392 9.16667 13.5511 9.16667 13.7721C9.16667 13.9931 9.25446 14.2051 9.41074 14.3614C9.56702 14.5177 9.77899 14.6055 10 14.6055C10.221 14.6055 10.433 14.5177 10.5893 14.3614C10.7455 14.2051 10.8333 13.9931 10.8333 13.7721C10.8333 13.5511 10.7455 13.3392 10.5893 13.1829C10.433 13.0266 10.221 12.9388 10 12.9388ZM13.6667 12.9388C13.4457 12.9388 13.2337 13.0266 13.0774 13.1829C12.9211 13.3392 12.8333 13.5511 12.8333 13.7721C12.8333 13.9931 12.9211 14.2051 13.0774 14.3614C13.2337 14.5177 13.4457 14.6055 13.6667 14.6055C13.8877 14.6055 14.0996 14.5177 14.2559 14.3614C14.4122 14.2051 14.5 13.9931 14.5 13.7721C14.5 13.5511 14.4122 13.3392 14.2559 13.1829C14.0996 13.0266 13.8877 12.9388 13.6667 12.9388Z",
          fill: "currentColor"
        })
      })
    }
  }
]);
