try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.i = e.i || {}, e.i[t] = "e23e5848-6605-4650-aaac-2ba8f1d671cd", e.h = "sentry-dbid-e23e5848-6605-4650-aaac-2ba8f1d671cd")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [2939], {
    6475: (e, t, l) => {
      l.d(t, {
        q: () => n
      });
      var s = l(1651),
        a = l(58959),
        i = class extends s.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, a.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, a.PL)(), super.getOptimisticResult(e)
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
              state: l
            } = e, s = super.createResult(e, t), {
              isFetching: i,
              isRefetching: r,
              isError: n,
              isRefetchError: o
            } = s, c = l.fetchMeta?.fetchMore?.direction, d = n && "forward" === c, h = i && "forward" === c, u = n && "backward" === c, m = i && "backward" === c;
            return {
              ...s,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, a.rB)(t, l.data),
              hasPreviousPage: (0, a.RQ)(t, l.data),
              isFetchNextPageError: d,
              isFetchingNextPage: h,
              isFetchPreviousPageError: u,
              isFetchingPreviousPage: m,
              isRefetchError: o && !d && !u,
              isRefetching: r && !h && !m
            }
          }
        },
        r = l(44171);

      function n(e, t) {
        return (0, r.t)(e, i, t)
      }
    },
    12939: (e, t, l) => {
      l.r(t), l.d(t, {
        default: () => ne
      });
      var s = l(74848),
        a = l(95455),
        i = l(29584),
        r = l(26264),
        n = l(63369),
        o = l(65512),
        c = l(52619),
        d = l(69666),
        h = l(2543),
        u = l(96540),
        m = l(6442),
        p = l(67008);
      const f = ({
        onClick: e,
        testid: t
      }) => {
        const {
          formatMessage: l
        } = (0, m.A)(), a = (0, u.useMemo)(() => (0, h.uniqueId)("import-info-action-"), []);
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            "data-tooltip-id": a,
            "data-tooltip-content": l({
              id: "manage-crypto.info-action.text"
            }),
            children: (0, s.jsx)(o.$, {
              testid: t,
              size: c.Vp.SMALL,
              shape: c.dB.ICON_SQUARE,
              theme: c.ry.TRANSPARENT,
              noPadding: !0,
              onClick: e,
              children: (0, s.jsx)(d.c, {
                colorClass: "text-utility-1-opacity-1"
              })
            })
          }), (0, s.jsx)(p.m_, {
            id: a,
            className: "tw-tooltip"
          })]
        })
      };
      var g = l(8360),
        b = l(55418),
        y = l(4800),
        w = l(68632),
        v = l(79830),
        k = l(52114),
        x = l(1279),
        N = l(38795),
        P = l(80702),
        C = l(47767),
        M = l(67310),
        F = l(23207),
        j = l(50882),
        O = l(94893),
        S = l(65504),
        T = l(33647),
        A = l(19376),
        z = l(73241),
        I = l(64145),
        R = l(98939),
        L = l(89408),
        B = l(75485),
        E = l(67658),
        D = l(33055),
        q = l(69275),
        G = l(9389),
        H = l(29251),
        K = l(3958),
        V = (e, t, l) => new Promise((s, a) => {
          var i = e => {
              try {
                n(l.next(e))
              } catch (e) {
                a(e)
              }
            },
            r = e => {
              try {
                n(l.throw(e))
              } catch (e) {
                a(e)
              }
            },
            n = e => e.done ? s(e.value) : Promise.resolve(e.value).then(i, r);
          n((l = l.apply(e, t)).next())
        });
      const Q = ({
          asset: e,
          onAssetToggle: t
        }) => {
          var l;
          const {
            trackAnalytics: a
          } = (0, F.s)(), {
            formatMessage: n
          } = (0, m.A)(), o = (0, C.Zp)(), [c, d] = (0, u.useState)(e.isShownInHomeScreen), [h, p] = (0, u.useState)(!1), f = (0, D.A)(), g = (0, G.YL)(), b = (0, q.o)(), y = e => V(null, null, function*() {
            t(e), d(!e.isShownInHomeScreen), p(!0), yield(0, K.A)(I.YW.emit(L.A.TOGGLE_ASSET_VISIBILITY, e), 250), p(!1)
          }), w = (0, E.A)(e), v = (0, u.useMemo)(() => {
            const t = w.isCustom ? R.hF.Ethereum.toString() : (0, B.$5)(e.assetId).coinId;
            return !b[t]
          }, [b, w]), N = (0, u.useMemo)(() => v && f.type === H.S.MNEMONIC && g.derivationIndex > 0, [f, g, v]);
          return w ? (0, s.jsx)(O.c, {
            disabled: v || h,
            onClick: () => V(null, null, function*() {
              v || (c || (yield y(e)), o(`${r.b.ASSET}/${e.assetId}`))
            }),
            children: (0, s.jsxs)("div", {
              className: "flex justify-between space-x-2 items-center",
              children: [(0, s.jsx)("div", {
                className: v ? "opacity-70" : "opacity-100",
                children: (0, s.jsx)(S.q, {
                  src: e.iconUrl,
                  name: e.name,
                  network: e.address ? w : void 0
                })
              }), (0, s.jsxs)("div", {
                className: "flex-grow " + (v ? "opacity-70" : "opacity-100"),
                children: [(0, s.jsxs)("div", {
                  className: "flex flex-row space-x-1 items-center ",
                  children: [(0, s.jsx)("div", {
                    children: (0, s.jsx)(k.E, {
                      testid: "asset-symbol",
                      type: x.jK.SUBHEADER_16,
                      children: e.symbol
                    })
                  }), (0, s.jsx)("div", {
                    children: (0, s.jsx)(A.v, {
                      theme: z.x.SECONDARY,
                      size: z.V.SMALL,
                      testid: "asset-type",
                      children: null != (l = w.displayName) ? l : w.name
                    })
                  })]
                }), (0, s.jsx)("div", {
                  className: "flex flex-row space-x-1",
                  children: (0, s.jsx)(k.E, {
                    testid: "asset-blockchain",
                    type: x.jK.BODY_14,
                    children: e.name
                  })
                })]
              }), (0, s.jsx)("div", {
                className: h ? "opacity-50" : "opacity-100",
                children: v ? (0, s.jsx)(j.E, {
                  text: n({
                    id: N ? "manage-assets.not-supported" : "manage-assets.support-coming-soon",
                    defaultMessage: N ? "Not supported" : "manage-assets.support-coming-soon"
                  })
                }) : (0, s.jsx)(T.d, {
                  testid: "toggle-asset-switch",
                  label: e.name,
                  checked: c,
                  onChange: () => {
                    a({
                      event: i.BQ.TOGGLE_HOMESCREEN_ASSET_VISIBILITY,
                      props: {
                        pageViewSource: i.Un.MANAGE_CRYPTO,
                        assetName: e.name,
                        assetId: e.assetId,
                        enabled: !c
                      }
                    }), y(e)
                  }
                })
              })]
            })
          }) : null
        },
        $ = ({
          assets: e,
          loadMoreItems: t,
          hasNextPage: l,
          onAssetToggle: a
        }) => {
          const i = window.innerHeight - y.a4 - y.Et - y.e4 - y.N - 32 - 34 - 16 - 16 - 36 - 16;
          return (0, s.jsx)(M.A, {
            dataLength: e.length,
            next: t,
            height: i,
            className: "tw-scrollbar",
            hasMore: !!l,
            loader: null,
            scrollThreshold: "5px",
            children: (0, s.jsx)("div", {
              className: "flex flex-col space-y-5",
              children: e.map(e => (0, s.jsx)(Q, {
                asset: e,
                onAssetToggle: a
              }, e.assetId))
            })
          })
        };
      var _, U = l(44832),
        W = ((_ = W || {}).ENABLED = "enabled", _.DISABLED = "disabled", _),
        Z = l(29189),
        J = l(52294),
        X = Object.defineProperty,
        Y = Object.defineProperties,
        ee = Object.getOwnPropertyDescriptors,
        te = Object.getOwnPropertySymbols,
        le = {}.hasOwnProperty,
        se = {}.propertyIsEnumerable,
        ae = (e, t, l) => t in e ? X(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        ie = (e, t) => {
          for (var l in t || (t = {})) le.call(t, l) && ae(e, l, t[l]);
          if (te)
            for (var l of te(t)) se.call(t, l) && ae(e, l, t[l]);
          return e
        },
        re = (e, t) => Y(e, ee(t));
      const ne = () => {
        (0, n.K)({
          event: i.Un.MANAGE_CRYPTO,
          props: null
        });
        const {
          formatMessage: e
        } = (0, m.A)(), t = (0, C.Zp)(), l = (0, P.M)(), d = (0, D.A)(), p = (0, U.g)(), M = (0, Z.f)(), [F, j] = (0, u.useState)(M), [O, S] = (0, u.useState)({}), T = (0, u.useMemo)(() => {
          const e = p.find(e => e.id === F);
          return e ? [(0, B.er)(e.coinId)] : null
        }, [p, F]), [A, z] = (0, u.useState)(""), [I, R] = (0, u.useState)(!1), {
          flattenData: L,
          isFetching: E,
          setQuery: G,
          fetchNextPage: K,
          hasNextPage: V,
          useOnlyBackendResults: Q
        } = (0, N.r)(T, !0), _ = (0, q.o)(), X = (0, u.useRef)(!1), Y = (0, u.useMemo)(() => (({
          search: e,
          assets: t
        }) => e ? t.filter(({
          symbol: t,
          name: l,
          address: s
        }) => s?.toLowerCase().includes(e.toLowerCase()) || t.toLowerCase().includes(e.toLowerCase()) || l.toLowerCase().includes(e.toLowerCase())) : t)({
          search: A,
          assets: l
        }), [l, A]), ee = (0, u.useCallback)((0, h.debounce)(e => {
          R(!0), G(e)
        }, 200), []), te = () => {
          t(r.b.CUSTOM_ASSET_SELECT_NETWORK)
        }, le = (0, u.useMemo)(() => L.map(e => e.assetId), [L]), se = (0, u.useMemo)(() => new Map(l.map(e => [e.assetId, e.isShownInHomeScreen])), [l]), ae = (0, u.useMemo)(() => {
          const e = (Q ? L.map(e => re(ie({}, e), {
            isShownInHomeScreen: e.isShownInHomeScreen || se.get(e.assetId)
          })) : [...Y.filter(e => !le.includes(e.assetId)), ...L.map(e => re(ie({}, e), {
            isShownInHomeScreen: e.isShownInHomeScreen || se.get(e.assetId)
          }))]).filter(e => {
            if (d.type === H.S.PRIVATE_KEY) {
              const t = e.isCustomAsset ? 60 : (0, B.X2)(e.assetId);
              return !(!_[t] || F && F !== e.blockchainId)
            }
            return !F || F === e.blockchainId
          });
          return [...e.filter(e => (e.isShownInHomeScreen || O[e.assetId] === W.ENABLED) && O[e.assetId] !== W.DISABLED), ...e.filter(e => !e.isShownInHomeScreen && O[e.assetId] !== W.ENABLED || O[e.assetId] === W.DISABLED)]
        }, [Y, O, se, L, le, F, Q]);
        (0, u.useEffect)(() => {
          A && (R(!0), G(A))
        }, [F]), (0, u.useEffect)(() => {
          S({})
        }, [A, F]);
        const ne = e => S(t => {
          var l;
          return re(ie({}, t), {
            [e.assetId]: null != (l = t[e.assetId]) ? l : e.isShownInHomeScreen ? W.ENABLED : W.DISABLED
          })
        });
        (0, u.useEffect)(() => {
          !E || X.current ? !E && X.current && (R(!1), X.current = !1) : X.current = !0
        }, [E]);
        const oe = (0, u.useMemo)(() => I ? (0, s.jsx)(b.o, {
          children: (0, s.jsx)("div", {
            children: (0, s.jsx)(v.y, {
              size: w.Y.XLARGE
            })
          })
        }) : 0 === ae.length ? (0, s.jsx)(a.B, {
          message: e({
            id: "token-asset-list.empty-search-caption"
          })
        }) : (0, s.jsxs)("div", {
          className: "mt-4",
          children: [(0, s.jsx)($, {
            assets: ae,
            hasNextPage: V,
            loadMoreItems: K,
            onAssetToggle: ne
          }), (0, s.jsx)("div", {
            className: "mt-4",
            children: (0, s.jsx)(o.$, {
              testid: "import-asset-btn",
              size: c.Vp.SMALL,
              shape: c.dB.DEFAULT,
              theme: c.ry.TRANSPARENT,
              onClick: te,
              children: (0, s.jsx)(k.E, {
                theme: x.Il.BRAND,
                type: x.jK.SUBHEADER_14,
                children: e({
                  id: "manage-crypto.import-asset"
                })
              })
            })
          })]
        }), [I, ae, V, K, te, e]);
        return (0, s.jsxs)(y.LN, {
          children: [(0, s.jsx)(y.zY, {
            backAction: () => t(r.b.DEFAULT),
            title: e({
              id: "manage-crypto.title"
            }),
            infoAction: (0, s.jsx)(f, {
              testid: "import-asset-info-action",
              onClick: te
            })
          }), (0, s.jsxs)(y.Gv, {
            children: [(0, s.jsx)(g.D, {
              testid: "search-asset-input",
              value: A,
              onChange: e => {
                R(!0), z(e.target.value), ee(e.target.value)
              },
              placeholder: e({
                id: "component.input-asset-search.placeholder"
              })
            }), (0, s.jsx)("div", {
              className: "mt-4",
              children: (0, s.jsx)(J.M, {
                localFilteringBlockchainId: F,
                onFilterChange: j
              })
            }), oe]
          })]
        })
      }
    },
    20998: (e, t, l) => {
      l.d(t, {
        S: () => C
      });
      var s = l(74848),
        a = l(96540),
        i = l(6442),
        r = l(52114),
        n = l(1279),
        o = l(8360),
        c = l(94893),
        d = l(9770),
        h = l(97726),
        u = l(46729),
        m = l(95455),
        p = l(65504),
        f = l(68632),
        g = l(98939),
        b = l(22146),
        y = l(23350);
      const w = Object.values(g.hF),
        v = e => w.includes(e),
        k = e => {
          var t;
          return null != (t = e.displayName) ? t : e.name
        },
        x = (e, t) => {
          const l = k(e).toLowerCase(),
            s = e.symbol.toLowerCase();
          return l.includes(t) || s.includes(t)
        },
        N = (e, t) => w.indexOf(e.coinId) - w.indexOf(t.coinId),
        P = (e, t) => k(e).localeCompare(k(t)),
        C = ({
          isOpen: e,
          onClose: t,
          blockchainList: l,
          selectedBlockchainId: g,
          onSelectNetwork: w,
          hideAllNetworksOption: C
        }) => {
          const {
            formatMessage: M
          } = (0, i.A)(), [F, j] = (0, a.useState)(""), O = F.toLowerCase(), S = (0, a.useMemo)(() => l.filter(e => v(e.coinId)).filter(e => !F || x(e, O)).sort(N), [l, F, O]), T = (0, a.useMemo)(() => l.filter(e => !v(e.coinId)).filter(e => !F || x(e, O)).sort(P), [l, F, O]), A = !F && !C, z = F && 0 === S.length && 0 === T.length, I = e => e ? g === e.id : !g, R = e => ((e, t, l) => new Promise((e, t) => {
            var s = e => {
                try {
                  i(l.next(e))
                } catch (e) {
                  t(e)
                }
              },
              a = e => {
                try {
                  i(l.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, a);
            i((l = l.apply(null, null)).next())
          }))(0, 0, function*() {
            w(e), t(), j("")
          });
          return (0, s.jsx)(b.a, {
            opened: e,
            onClose: () => {
              t(), j("")
            },
            title: M({
              id: "select-network.title",
              defaultMessage: "Select network"
            }),
            placement: y.Gn.BOTTOM,
            children: (0, s.jsxs)("div", {
              className: "flex flex-col min-h-[95vh]  space-y-3",
              children: [(0, s.jsx)(o.D, {
                placeholder: M({
                  id: "select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: F,
                onChange: e => j(e.target.value),
                autoFocus: !1,
                testid: "network-modal-search"
              }), (0, s.jsx)("div", {
                className: "flex-1 overflow-y-auto tw-scrollbar flex flex-col",
                children: z ? (0, s.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, s.jsx)(m.B, {})
                }) : (0, s.jsx)("div", {
                  className: "space-y-4",
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [A && (0, s.jsx)(c.c, {
                      onClick: () => R(null),
                      testid: "network-modal-all",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center justify-between py-3",
                        children: [(0, s.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [(0, s.jsx)("div", {
                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                            children: (0, s.jsx)(d.s, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          }), (0, s.jsx)(r.E, {
                            type: n.jK.SUBHEADER_16,
                            theme: n.Il.PRIMARY,
                            children: M({
                              id: "select-crypto.all-networks",
                              defaultMessage: "All networks"
                            })
                          })]
                        }), I(null) ? (0, s.jsx)(h.w, {
                          width: 24,
                          height: 24,
                          colorClass: "text-primary"
                        }) : (0, s.jsx)(u.r, {
                          width: 24,
                          height: 24,
                          colorClass: "text-utility-1-opacity-2"
                        })]
                      })
                    }), S.length > 0 && (0, s.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, s.jsx)("div", {
                        className: "mb-2",
                        children: (0, s.jsx)(r.E, {
                          type: n.jK.BODY_14,
                          theme: n.Il.SECONDARY,
                          weight: n.nG.SEMIBOLD,
                          testid: "popular-networks-title",
                          children: M({
                            id: "select-network.popular-networks",
                            defaultMessage: "Popular networks"
                          })
                        })
                      }), S.map(e => (0, s.jsx)(c.c, {
                        onClick: () => R(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, s.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, s.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, s.jsx)(p.q, {
                              name: k(e),
                              src: e.iconUrl,
                              size: f.Y.LARGE
                            }), (0, s.jsx)(r.E, {
                              type: n.jK.SUBHEADER_16,
                              theme: n.Il.PRIMARY,
                              children: k(e)
                            })]
                          }), I(e) ? (0, s.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, s.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    }), T.length > 0 && (0, s.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, s.jsx)("div", {
                        className: "mb-2",
                        children: (0, s.jsx)(r.E, {
                          type: n.jK.BODY_14,
                          theme: n.Il.SECONDARY,
                          weight: n.nG.SEMIBOLD,
                          testid: "az-networks-title",
                          children: M({
                            id: "select-network.az-networks",
                            defaultMessage: "A-Z networks"
                          })
                        })
                      }), T.map(e => (0, s.jsx)(c.c, {
                        onClick: () => R(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, s.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, s.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, s.jsx)(p.q, {
                              name: k(e),
                              src: e.iconUrl,
                              size: f.Y.LARGE
                            }), (0, s.jsx)(r.E, {
                              type: n.jK.SUBHEADER_16,
                              theme: n.Il.PRIMARY,
                              children: k(e)
                            })]
                          }), I(e) ? (0, s.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, s.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    })]
                  })
                })
              })]
            })
          })
        }
    },
    33647: (e, t, l) => {
      l.d(t, {
        d: () => O
      });
      var s = l(74848),
        a = l(66737),
        i = l(16638),
        r = l(96540),
        n = l(24867),
        o = l(95060),
        c = l(37786),
        d = l(96992),
        h = l(95015),
        u = l(69821),
        m = l(98975),
        p = l(65448),
        f = l(82498),
        g = l(15953),
        b = l(9685),
        y = l(43660),
        w = l(66206),
        v = l(59124),
        k = l(44586),
        x = l(90540);
      let N = (0, r.createContext)(null);
      N.displayName = "GroupContext";
      let P = r.Fragment,
        C = (0, w.FX)(function(e, t) {
          var l;
          let s = (0, r.useId)(),
            P = (0, g.q)(),
            C = (0, p.u)(),
            {
              id: M = P || "headlessui-switch-" + s,
              disabled: F = C || !1,
              checked: j,
              defaultChecked: O,
              onChange: S,
              name: T,
              value: A,
              form: z,
              autoFocus: I = !1,
              ...R
            } = e,
            L = (0, r.useContext)(N),
            [B, E] = (0, r.useState)(null),
            D = (0, r.useRef)(null),
            q = (0, m.P)(D, t, null === L ? null : L.setSwitch, E),
            G = (0, c.K)(O),
            [H, K] = (0, o.P)(j, S, G ?? !1),
            V = (0, d.L)(),
            [Q, $] = (0, r.useState)(!1),
            _ = (0, h.u)(() => {
              $(!0), K?.(!H), V.nextFrame(() => {
                $(!1)
              })
            }),
            U = (0, h.u)(e => {
              if ((0, b.l)(e.currentTarget)) return e.preventDefault();
              e.preventDefault(), _()
            }),
            W = (0, h.u)(e => {
              e.key === k.D.Space ? (e.preventDefault(), _()) : e.key === k.D.Enter && (0, y.q)(e.currentTarget)
            }),
            Z = (0, h.u)(e => e.preventDefault()),
            J = (0, x.o2)(),
            X = (0, v.MM)(),
            {
              isFocusVisible: Y,
              focusProps: ee
            } = (0, a.o)({
              autoFocus: I
            }),
            {
              isHovered: te,
              hoverProps: le
            } = (0, i.M)({
              isDisabled: F
            }),
            {
              pressed: se,
              pressProps: ae
            } = (0, n.Z)({
              disabled: F
            }),
            ie = (0, r.useMemo)(() => ({
              checked: H,
              disabled: F,
              hover: te,
              focus: Y,
              active: se,
              autofocus: I,
              changing: Q
            }), [H, te, Y, se, F, Q, I]),
            re = (0, w.v6)({
              id: M,
              ref: q,
              role: "switch",
              type: (0, u.c)(e, B),
              tabIndex: -1 === e.tabIndex ? 0 : null != (l = e.tabIndex) ? l : 0,
              "aria-checked": H,
              "aria-labelledby": J,
              "aria-describedby": X,
              disabled: F || void 0,
              autoFocus: I,
              onClick: U,
              onKeyUp: W,
              onKeyPress: Z
            }, ee, le, ae),
            ne = (0, r.useCallback)(() => {
              if (void 0 !== G) return K?.(G)
            }, [K, G]),
            oe = (0, w.Ci)();
          return r.createElement(r.Fragment, null, null != T && r.createElement(f.CL, {
            disabled: F,
            data: {
              [T]: A || "on"
            },
            overrides: {
              type: "checkbox",
              checked: H
            },
            form: z,
            onReset: ne
          }), oe({
            ourProps: re,
            theirProps: R,
            slot: ie,
            defaultTag: "button",
            name: "Switch"
          }))
        }),
        M = x.JU,
        F = v.VY,
        j = Object.assign(C, {
          Group: function(e) {
            var t;
            let [l, s] = (0, r.useState)(null), [a, i] = (0, x.b0)(), [n, o] = (0, v.rU)(), c = (0, r.useMemo)(() => ({
              switch: l,
              setSwitch: s
            }), [l, s]), d = e, h = (0, w.Ci)();
            return r.createElement(o, {
              name: "Switch.Description",
              value: n
            }, r.createElement(i, {
              name: "Switch.Label",
              value: a,
              props: {
                htmlFor: null == (t = c.switch) ? void 0 : t.id,
                onClick(e) {
                  l && (e.currentTarget instanceof HTMLLabelElement && e.preventDefault(), l.click(), l.focus({
                    preventScroll: !0
                  }))
                }
              }
            }, r.createElement(N.Provider, {
              value: c
            }, h({
              ourProps: {},
              theirProps: d,
              slot: {},
              defaultTag: P,
              name: "Switch.Group"
            }))))
          },
          Label: M,
          Description: F
        });
      const O = ({
        label: e,
        checked: t,
        testid: l,
        disabled: a,
        onChange: i
      }) => (0, s.jsxs)(j, {
        "data-testid": l,
        checked: t,
        onChange: i,
        className: "switch",
        onClick: e => e.stopPropagation(),
        disabled: a,
        children: [e && (0, s.jsx)("span", {
          className: "sr-only",
          children: e
        }), (0, s.jsx)("span", {
          "aria-hidden": "true",
          className: "switch__toggle"
        })]
      })
    },
    38795: (e, t, l) => {
      l.d(t, {
        r: () => n
      });
      var s = l(6475),
        a = l(96540),
        i = l(64145),
        r = l(89408);

      function n(e, t) {
        const [l, n] = (0, a.useState)(void 0), {
          data: o,
          error: c,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: m,
          status: p
        } = (0, s.q)({
          queryKey: ["tokens", l, e?.join()],
          queryFn: ({
            pageParam: s
          }) => i.YW.emit(r.A.SEARCH_ASSETS, {
            query: l,
            networks: e,
            page: s,
            includeNonCustomTokenNetworks: t
          }),
          enabled: void 0 !== l,
          initialPageParam: 0,
          refetchOnWindowFocus: !1,
          getNextPageParam: e => e?.nextPage
        }), f = (0, a.useMemo)(() => (o?.pages || []).flatMap(e => e?.data || []), [o?.pages]), g = (0, a.useMemo)(() => {
          var e, t, l;
          return null != (l = null == (t = null == (e = o?.pages) ? void 0 : e[0]) ? void 0 : t.useOnlyBackendResults) && l
        }, [o?.pages]);
        return {
          setQuery: n,
          data: o,
          error: c,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: m,
          status: p,
          flattenData: f,
          useOnlyBackendResults: g
        }
      }
    },
    52294: (e, t, l) => {
      l.d(t, {
        M: () => C
      });
      var s = l(74848),
        a = l(29584),
        i = l(23207),
        r = l(65504),
        n = l(68632),
        o = l(64145),
        c = l(22670),
        d = l(28398),
        h = l(44832),
        u = l(29189),
        m = l(69275),
        p = l(33055),
        f = l(29251),
        g = l(26113),
        b = l(96540),
        y = l(6442),
        w = l(98939),
        v = l(52114),
        k = l(1279),
        x = l(20998),
        N = l(10551);
      const P = [w.hF.SmartChain, w.hF.Ethereum, w.hF.Solana, w.hF.Tron, w.hF.Arbitrum],
        C = ({
          useGlobalState: e,
          localFilteringBlockchainId: t,
          onFilterChange: l
        }) => {
          const {
            formatMessage: w
          } = (0, y.A)(), {
            trackAnalytics: C
          } = (0, i.s)(), M = (0, p.A)(), F = (0, m.o)(), j = (0, h.g)(!0), O = (0, u.f)(), [S, T] = (0, b.useState)(!1), A = e ? O : t, z = (0, b.useMemo)(() => {
            if (M.type === f.S.MNEMONIC) return j;
            const e = Object.keys(F).map(e => e);
            return j.filter(t => e.includes(t.coinId.toString()))
          }, [j, F, M]), I = (0, b.useMemo)(() => z?.find(e => e.id === A), [z, A]);
          (0, b.useEffect)(() => {
            e && A && !I && o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null)
          }, [e, A, I]);
          const R = (0, b.useMemo)(() => P.map(e => z.find(t => t.coinId === e)).filter(e => void 0 !== e), [z]),
            L = z.length,
            B = t => ((e, t, l) => new Promise((e, t) => {
              var s = e => {
                  try {
                    i(l.next(e))
                  } catch (e) {
                    t(e)
                  }
                },
                a = e => {
                  try {
                    i(l.throw(e))
                  } catch (e) {
                    t(e)
                  }
                },
                i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, a);
              i((l = l.apply(null, null)).next())
            }))(0, 0, function*() {
              var s;
              if (!e) {
                const e = null != (s = t?.id) ? s : null;
                return void l?.(e)
              }
              if (!t) return void(yield Promise.allSettled([o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null), (0, g.yy)(250)]));
              const i = t.isCustom ? d.l.CUSTOM : d.l.MAIN;
              yield Promise.allSettled([o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, t.id), (0, g.yy)(250)]), C({
                event: a.BQ.SWITCH_FILTERING_NETWORK,
                props: {
                  pageViewSource: a.Un.HOME,
                  blockchainName: t.name,
                  blockchainChainId: t.chainId,
                  blockchainType: i
                }
              })
            }),
            E = e => e ? A === e.id : !A;
          return (0, s.jsxs)("div", {
            className: "flex items-center justify-between overflow-x-auto scrollbar-hide pb-2",
            children: [(0, s.jsx)("button", {
              onClick: () => B(null),
              className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center " + (E(null) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
              "data-testid": "horizontal-network-filter-all",
              title: w({
                id: "component.blockchain-select.all-networks",
                defaultMessage: "All Networks"
              }),
              children: (0, s.jsx)("span", {
                className: E(null) ? "!text-primary" : "",
                children: (0, s.jsx)(v.E, {
                  type: k.jK.SUBHEADER_14,
                  theme: E(null) ? k.Il.PRIMARY_DEFAULT : void 0,
                  children: w({
                    id: "component.blockchain-select.all",
                    defaultMessage: "All"
                  })
                })
              })
            }), R.map(e => {
              var t;
              return (0, s.jsx)("button", {
                onClick: () => B(e),
                className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all " + (E(e) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
                "data-testid": "horizontal-network-filter-" + e.symbol.toLowerCase(),
                title: null != (t = e.displayName) ? t : e.name,
                children: (0, s.jsx)("div", {
                  className: "w-full h-full rounded-full overflow-hidden flex items-center justify-center",
                  children: (0, s.jsx)(r.q, {
                    name: e.name,
                    size: n.Y.MEDIUM,
                    src: e.iconUrl
                  })
                })
              }, e.id)
            }), (0, s.jsxs)("button", {
              onClick: () => T(!0),
              className: "flex-shrink-0 px-3 py-2 rounded-full border-2 border-utility-1-opacity-5 bg-background-2 flex items-center gap-1.5",
              "data-testid": "horizontal-network-filter-more",
              title: L + " networks available",
              children: [(0, s.jsx)(v.E, {
                type: k.jK.SUBHEADER_14,
                children: L
              }), (0, s.jsx)(N.b, {
                width: 12,
                height: 12,
                colorClass: "text-utility-1-opacity-1"
              })]
            }), (0, s.jsx)(x.S, {
              isOpen: S,
              onClose: () => T(!1),
              blockchainList: z,
              selectedBlockchainId: A ?? null,
              onSelectNetwork: B
            })]
          })
        }
    },
    80702: (e, t, l) => {
      l.d(t, {
        M: () => g
      });
      var s = l(96540),
        a = l(47991),
        i = l(10537),
        r = l(15078),
        n = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        h = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        m = (e, t, l) => t in e ? n(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: l
        }) : e[t] = l,
        p = (e, t) => {
          for (var l in t || (t = {})) h.call(t, l) && m(e, l, t[l]);
          if (d)
            for (var l of d(t)) u.call(t, l) && m(e, l, t[l]);
          return e
        };
      const f = (e, t) => e.symbol.localeCompare(t.symbol),
        g = () => {
          const e = (0, a.P)(),
            t = (0, i.n)(),
            l = (0, r.I)(),
            n = p(p({}, t), l);
          return (0, s.useMemo)(() => e.reduce((e, t) => (n[t.blockchainId] && e.push(((e, t) => o(e, c(t)))(p({}, t), {
            blockchain: n[t.blockchainId]
          })), e), []).sort(f), [e, t, l])
        }
    }
  }
]);
