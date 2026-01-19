"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [1627], {
    6475: (e, t, s) => {
      s.d(t, {
        q: () => o
      });
      var a = s(1651),
        i = s(58959),
        r = class extends a.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, i.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, i.PL)(), super.getOptimisticResult(e)
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
              isFetching: r,
              isRefetching: n,
              isError: o,
              isRefetchError: c
            } = a, l = s.fetchMeta?.fetchMore?.direction, d = o && "forward" === l, h = r && "forward" === l, u = o && "backward" === l, p = r && "backward" === l;
            return {
              ...a,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.rB)(t, s.data),
              hasPreviousPage: (0, i.RQ)(t, s.data),
              isFetchNextPageError: d,
              isFetchingNextPage: h,
              isFetchPreviousPageError: u,
              isFetchingPreviousPage: p,
              isRefetchError: c && !d && !u,
              isRefetching: n && !h && !p
            }
          }
        },
        n = s(44171);

      function o(e, t) {
        return (0, n.t)(e, r, t)
      }
    },
    21627: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => be
      });
      var a = s(74848),
        i = s(95455),
        r = s(29584),
        n = s(26264),
        o = s(63369),
        c = s(65512),
        l = s(52619),
        d = s(69666),
        h = s(2543),
        u = s(96540),
        p = s(6442),
        g = s(67008);
      const m = ({
        onClick: e,
        testid: t
      }) => {
        const {
          formatMessage: s
        } = (0, p.A)(), i = (0, u.useMemo)(() => (0, h.uniqueId)("import-info-action-"), []);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            "data-tooltip-id": i,
            "data-tooltip-content": s({
              id: "manage-crypto.info-action.text"
            }),
            children: (0, a.jsx)(c.$, {
              testid: t,
              size: l.Vp.SMALL,
              shape: l.dB.ICON_SQUARE,
              theme: l.ry.TRANSPARENT,
              noPadding: !0,
              onClick: e,
              children: (0, a.jsx)(d.c, {
                colorClass: "text-utility-1-opacity-1"
              })
            })
          }), (0, a.jsx)(g.m_, {
            id: i,
            className: "tw-tooltip"
          })]
        })
      };
      var f = s(8360),
        v = s(55418),
        b = s(4800),
        P = s(68632),
        y = s(79830),
        x = s(52114),
        w = s(1279),
        N = s(38795),
        k = s(47991),
        F = s(10537),
        C = s(15078),
        M = Object.defineProperty,
        O = Object.defineProperties,
        j = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        S = {}.hasOwnProperty,
        A = {}.propertyIsEnumerable,
        R = (e, t, s) => t in e ? M(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s
        }) : e[t] = s,
        E = (e, t) => {
          for (var s in t || (t = {})) S.call(t, s) && R(e, s, t[s]);
          if (T)
            for (var s of T(t)) A.call(t, s) && R(e, s, t[s]);
          return e
        };
      const I = (e, t) => e.symbol.localeCompare(t.symbol);
      var D = s(47767),
        L = s(67310),
        q = s(23207),
        z = s(50882),
        G = s(94893),
        H = s(65504),
        K = s(33647),
        Q = s(19376),
        V = s(73241),
        $ = s(64145),
        _ = s(98939),
        B = s(89408),
        U = s(75485),
        W = s(67658),
        J = s(33055),
        X = s(69275),
        Y = s(9389),
        Z = s(29251),
        ee = s(3958),
        te = (e, t, s) => new Promise((a, i) => {
          var r = e => {
              try {
                o(s.next(e))
              } catch (e) {
                i(e)
              }
            },
            n = e => {
              try {
                o(s.throw(e))
              } catch (e) {
                i(e)
              }
            },
            o = e => e.done ? a(e.value) : Promise.resolve(e.value).then(r, n);
          o((s = s.apply(e, t)).next())
        });
      const se = ({
          asset: e,
          onAssetToggle: t
        }) => {
          var s;
          const {
            trackAnalytics: i
          } = (0, q.s)(), {
            formatMessage: o
          } = (0, p.A)(), c = (0, D.Zp)(), [l, d] = (0, u.useState)(e.isShownInHomeScreen), [h, g] = (0, u.useState)(!1), m = (0, J.A)(), f = (0, Y.YL)(), v = (0, X.o)(), b = e => te(null, null, function*() {
            t(e), d(!e.isShownInHomeScreen), g(!0), yield(0, ee.A)($.YW.emit(B.A.TOGGLE_ASSET_VISIBILITY, e), 250), g(!1)
          }), P = (0, W.A)(e), y = (0, u.useMemo)(() => {
            const t = P.isCustom ? _.M7.toString() : (0, U.$5)(e.assetId).coinId;
            return !v[t]
          }, [v, P]), N = (0, u.useMemo)(() => y && m.type === Z.S.MNEMONIC && f.derivationIndex > 0, [m, f, y]);
          return P ? (0, a.jsx)(G.c, {
            disabled: y || h,
            onClick: () => te(null, null, function*() {
              y || (l || (yield b(e)), c(`${n.b.ASSET}/${e.assetId}`))
            }),
            children: (0, a.jsxs)("div", {
              className: "flex justify-between space-x-2 items-center",
              children: [(0, a.jsx)("div", {
                className: y ? "opacity-70" : "opacity-100",
                children: (0, a.jsx)(H.q, {
                  src: e.iconUrl,
                  name: e.name,
                  network: e.address ? P : void 0
                })
              }), (0, a.jsxs)("div", {
                className: "flex-grow " + (y ? "opacity-70" : "opacity-100"),
                children: [(0, a.jsxs)("div", {
                  className: "flex flex-row space-x-1 items-center ",
                  children: [(0, a.jsx)("div", {
                    children: (0, a.jsx)(x.E, {
                      testid: "asset-symbol",
                      type: w.jK.SUBHEADER_16,
                      children: e.symbol
                    })
                  }), (0, a.jsx)("div", {
                    children: (0, a.jsx)(Q.v, {
                      theme: V.x.SECONDARY,
                      size: V.V.SMALL,
                      testid: "asset-type",
                      children: null != (s = P.displayName) ? s : P.name
                    })
                  })]
                }), (0, a.jsx)("div", {
                  className: "flex flex-row space-x-1",
                  children: (0, a.jsx)(x.E, {
                    testid: "asset-blockchain",
                    type: w.jK.BODY_14,
                    children: e.name
                  })
                })]
              }), (0, a.jsx)("div", {
                className: h ? "opacity-50" : "opacity-100",
                children: y ? (0, a.jsx)(z.E, {
                  text: o({
                    id: N ? "manage-assets.not-supported" : "manage-assets.support-coming-soon",
                    defaultMessage: N ? "Not supported" : "manage-assets.support-coming-soon"
                  })
                }) : (0, a.jsx)(K.d, {
                  testid: "toggle-asset-switch",
                  label: e.name,
                  checked: l,
                  onChange: () => {
                    i({
                      event: r.BQ.TOGGLE_HOMESCREEN_ASSET_VISIBILITY,
                      props: {
                        pageViewSource: r.Un.MANAGE_CRYPTO,
                        assetName: e.name,
                        assetId: e.assetId,
                        enabled: !l
                      }
                    }), b(e)
                  }
                })
              })]
            })
          }) : null
        },
        ae = ({
          assets: e,
          loadMoreItems: t,
          hasNextPage: s,
          onAssetToggle: i
        }) => {
          const r = window.innerHeight - b.a4 - b.Et - b.e4 - b.N - 32 - 34 - 16 - 16 - 36 - 16;
          return (0, a.jsx)(L.A, {
            dataLength: e.length,
            next: t,
            height: r,
            className: "tw-scrollbar",
            hasMore: !!s,
            loader: null,
            scrollThreshold: "5px",
            children: (0, a.jsx)("div", {
              className: "flex flex-col space-y-5",
              children: e.map(e => (0, a.jsx)(se, {
                asset: e,
                onAssetToggle: i
              }, e.assetId))
            })
          })
        };
      var ie, re = s(44832),
        ne = s(3330),
        oe = ((ie = oe || {}).ENABLED = "enabled", ie.DISABLED = "disabled", ie),
        ce = s(29189),
        le = Object.defineProperty,
        de = Object.defineProperties,
        he = Object.getOwnPropertyDescriptors,
        ue = Object.getOwnPropertySymbols,
        pe = {}.hasOwnProperty,
        ge = {}.propertyIsEnumerable,
        me = (e, t, s) => t in e ? le(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s
        }) : e[t] = s,
        fe = (e, t) => {
          for (var s in t || (t = {})) pe.call(t, s) && me(e, s, t[s]);
          if (ue)
            for (var s of ue(t)) ge.call(t, s) && me(e, s, t[s]);
          return e
        },
        ve = (e, t) => de(e, he(t));
      const be = () => {
        (0, o.K)({
          event: r.Un.MANAGE_CRYPTO,
          props: null
        });
        const {
          formatMessage: e
        } = (0, p.A)(), t = (0, D.Zp)(), s = (() => {
          const e = (0, k.P)(),
            t = (0, F.n)(),
            s = (0, C.I)(),
            a = E(E({}, t), s);
          return (0, u.useMemo)(() => e.reduce((e, t) => (a[t.blockchainId] && e.push(((e, t) => O(e, j(t)))(E({}, t), {
            blockchain: a[t.blockchainId]
          })), e), []).sort(I), [e, t, s])
        })(), d = (0, J.A)(), g = (0, re.g)(), M = (0, ce.f)(), [T, S] = (0, u.useState)(M), [A, R] = (0, u.useState)({}), L = (0, u.useMemo)(() => {
          const e = g.find(e => e.id === T);
          return e ? [(0, U.er)(e.coinId)] : null
        }, [g, T]), [q, z] = (0, u.useState)(""), [G, H] = (0, u.useState)(!1), {
          flattenData: K,
          isFetching: Q,
          setQuery: V,
          fetchNextPage: $,
          hasNextPage: _
        } = (0, N.r)(L, !0), B = (0, X.o)(), W = (0, u.useRef)(!1), Y = (0, u.useMemo)(() => (({
          search: e,
          assets: t
        }) => e ? t.filter(({
          symbol: t,
          name: s,
          address: a
        }) => a?.toLowerCase().includes(e.toLowerCase()) || t.toLowerCase().includes(e.toLowerCase()) || s.toLowerCase().includes(e.toLowerCase())) : t)({
          search: q,
          assets: s
        }), [s, q]), ee = (0, u.useCallback)((0, h.debounce)(e => {
          H(!0), V(e)
        }, 200), []), te = () => {
          t(n.b.CUSTOM_ASSET_SELECT_NETWORK)
        }, se = (0, u.useMemo)(() => K.map(e => e.assetId), [K]), ie = (0, u.useMemo)(() => new Map(s.map(e => [e.assetId, e.isShownInHomeScreen])), [s]), le = (0, u.useMemo)(() => {
          const e = [...Y.filter(e => !se.includes(e.assetId)), ...K.map(e => ve(fe({}, e), {
            isShownInHomeScreen: e.isShownInHomeScreen || ie.get(e.assetId)
          }))].filter(e => {
            if (d.type === Z.S.PRIVATE_KEY) {
              const t = e.isCustomAsset ? 60 : (0, U.X2)(e.assetId);
              return !(!B[t] || T && T !== e.blockchainId)
            }
            return !T || T === e.blockchainId
          });
          return [...e.filter(e => (e.isShownInHomeScreen || A[e.assetId] === oe.ENABLED) && A[e.assetId] !== oe.DISABLED), ...e.filter(e => !e.isShownInHomeScreen && A[e.assetId] !== oe.ENABLED || A[e.assetId] === oe.DISABLED)]
        }, [Y, A, ie, K, se, T]);
        (0, u.useEffect)(() => {
          q && (H(!0), V(q))
        }, [T]), (0, u.useEffect)(() => {
          R({})
        }, [q, T]);
        const de = e => R(t => {
          var s;
          return ve(fe({}, t), {
            [e.assetId]: null != (s = t[e.assetId]) ? s : e.isShownInHomeScreen ? oe.ENABLED : oe.DISABLED
          })
        });
        (0, u.useEffect)(() => {
          !Q || W.current ? !Q && W.current && (H(!1), W.current = !1) : W.current = !0
        }, [Q]);
        const he = (0, u.useMemo)(() => G ? (0, a.jsx)(v.o, {
          children: (0, a.jsx)("div", {
            children: (0, a.jsx)(y.y, {
              size: P.Y.XLARGE
            })
          })
        }) : 0 === le.length ? (0, a.jsx)(i.B, {
          message: e({
            id: "token-asset-list.empty-search-caption"
          })
        }) : (0, a.jsxs)("div", {
          className: "mt-4",
          children: [(0, a.jsx)(ae, {
            assets: le,
            hasNextPage: _,
            loadMoreItems: $,
            onAssetToggle: de
          }), (0, a.jsx)("div", {
            className: "mt-4",
            children: (0, a.jsx)(c.$, {
              testid: "import-asset-btn",
              size: l.Vp.SMALL,
              shape: l.dB.DEFAULT,
              theme: l.ry.TRANSPARENT,
              onClick: te,
              children: (0, a.jsx)(x.E, {
                theme: w.Il.BRAND,
                type: w.jK.SUBHEADER_14,
                children: e({
                  id: "manage-crypto.import-asset"
                })
              })
            })
          })]
        }), [G, le, _, $, te, e]);
        return (0, a.jsxs)(b.LN, {
          children: [(0, a.jsx)(b.zY, {
            backAction: () => t(n.b.DEFAULT),
            title: e({
              id: "manage-crypto.title"
            }),
            infoAction: (0, a.jsx)(m, {
              testid: "import-asset-info-action",
              onClick: te
            })
          }), (0, a.jsxs)(b.Gv, {
            children: [(0, a.jsx)(f.D, {
              testid: "search-asset-input",
              value: q,
              onChange: e => {
                H(!0), z(e.target.value), ee(e.target.value)
              },
              placeholder: e({
                id: "component.input-asset-search.placeholder"
              })
            }), (0, a.jsx)("div", {
              className: "mt-4",
              children: (0, a.jsx)(ne.u, {
                localFilteringBlockchainId: T,
                showText: !0,
                onFilterChange: S
              })
            }), he]
          })]
        })
      }
    },
    33647: (e, t, s) => {
      s.d(t, {
        d: () => j
      });
      var a = s(74848),
        i = s(66737),
        r = s(16638),
        n = s(96540),
        o = s(24867),
        c = s(95060),
        l = s(37786),
        d = s(96992),
        h = s(95015),
        u = s(69821),
        p = s(98975),
        g = s(65448),
        m = s(82498),
        f = s(15953),
        v = s(9685),
        b = s(43660),
        P = s(66206),
        y = s(59124),
        x = s(44586),
        w = s(90540);
      let N = (0, n.createContext)(null);
      N.displayName = "GroupContext";
      let k = n.Fragment,
        F = (0, P.FX)(function(e, t) {
          var s;
          let a = (0, n.useId)(),
            k = (0, f.q)(),
            F = (0, g.i)(),
            {
              id: C = k || "headlessui-switch-" + a,
              disabled: M = F || !1,
              checked: O,
              defaultChecked: j,
              onChange: T,
              name: S,
              value: A,
              form: R,
              autoFocus: E = !1,
              ...I
            } = e,
            D = (0, n.useContext)(N),
            [L, q] = (0, n.useState)(null),
            z = (0, n.useRef)(null),
            G = (0, p.P)(z, t, null === D ? null : D.setSwitch, q),
            H = (0, l.K)(j),
            [K, Q] = (0, c.P)(O, T, H ?? !1),
            V = (0, d.L)(),
            [$, _] = (0, n.useState)(!1),
            B = (0, h.i)(() => {
              _(!0), Q?.(!K), V.nextFrame(() => {
                _(!1)
              })
            }),
            U = (0, h.i)(e => {
              if ((0, v.l)(e.currentTarget)) return e.preventDefault();
              e.preventDefault(), B()
            }),
            W = (0, h.i)(e => {
              e.key === x.D.Space ? (e.preventDefault(), B()) : e.key === x.D.Enter && (0, b.q)(e.currentTarget)
            }),
            J = (0, h.i)(e => e.preventDefault()),
            X = (0, w.o2)(),
            Y = (0, y.MM)(),
            {
              isFocusVisible: Z,
              focusProps: ee
            } = (0, i.o)({
              autoFocus: E
            }),
            {
              isHovered: te,
              hoverProps: se
            } = (0, r.M)({
              isDisabled: M
            }),
            {
              pressed: ae,
              pressProps: ie
            } = (0, o.Z)({
              disabled: M
            }),
            re = (0, n.useMemo)(() => ({
              checked: K,
              disabled: M,
              hover: te,
              focus: Z,
              active: ae,
              autofocus: E,
              changing: $
            }), [K, te, Z, ae, M, $, E]),
            ne = (0, P.v6)({
              id: C,
              ref: G,
              role: "switch",
              type: (0, u.c)(e, L),
              tabIndex: -1 === e.tabIndex ? 0 : null != (s = e.tabIndex) ? s : 0,
              "aria-checked": K,
              "aria-labelledby": X,
              "aria-describedby": Y,
              disabled: M || void 0,
              autoFocus: E,
              onClick: U,
              onKeyUp: W,
              onKeyPress: J
            }, ee, se, ie),
            oe = (0, n.useCallback)(() => {
              if (void 0 !== H) return Q?.(H)
            }, [Q, H]),
            ce = (0, P.Ci)();
          return n.createElement(n.Fragment, null, null != S && n.createElement(m.CL, {
            disabled: M,
            data: {
              [S]: A || "on"
            },
            overrides: {
              type: "checkbox",
              checked: K
            },
            form: R,
            onReset: oe
          }), ce({
            ourProps: ne,
            theirProps: I,
            slot: re,
            defaultTag: "button",
            name: "Switch"
          }))
        }),
        C = w.JU,
        M = y.VY,
        O = Object.assign(F, {
          Group: function(e) {
            var t;
            let [s, a] = (0, n.useState)(null), [i, r] = (0, w.b0)(), [o, c] = (0, y.rU)(), l = (0, n.useMemo)(() => ({
              switch: s,
              setSwitch: a
            }), [s, a]), d = e, h = (0, P.Ci)();
            return n.createElement(c, {
              name: "Switch.Description",
              value: o
            }, n.createElement(r, {
              name: "Switch.Label",
              value: i,
              props: {
                htmlFor: null == (t = l.switch) ? void 0 : t.id,
                onClick(e) {
                  s && (e.currentTarget instanceof HTMLLabelElement && e.preventDefault(), s.click(), s.focus({
                    preventScroll: !0
                  }))
                }
              }
            }, n.createElement(N.Provider, {
              value: l
            }, h({
              ourProps: {},
              theirProps: d,
              slot: {},
              defaultTag: k,
              name: "Switch.Group"
            }))))
          },
          Label: C,
          Description: M
        });
      const j = ({
        label: e,
        checked: t,
        testid: s,
        disabled: i,
        onChange: r
      }) => (0, a.jsxs)(O, {
        "data-testid": s,
        checked: t,
        onChange: r,
        className: "switch",
        onClick: e => e.stopPropagation(),
        disabled: i,
        children: [e && (0, a.jsx)("span", {
          className: "sr-only",
          children: e
        }), (0, a.jsx)("span", {
          "aria-hidden": "true",
          className: "switch__toggle"
        })]
      })
    },
    38795: (e, t, s) => {
      s.d(t, {
        r: () => o
      });
      var a = s(6475),
        i = s(96540),
        r = (s.n(i), s(64145)),
        n = s(89408);

      function o(e, t) {
        const [s, o] = (0, i.useState)(void 0), {
          data: c,
          error: l,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: g
        } = (0, a.q)({
          queryKey: ["tokens", s, e?.join()],
          queryFn: ({
            pageParam: a
          }) => r.YW.emit(n.A.SEARCH_ASSETS, {
            query: s,
            networks: e,
            page: a,
            includeNonCustomTokenNetworks: t
          }),
          enabled: void 0 !== s,
          initialPageParam: 0,
          refetchOnWindowFocus: !1,
          getNextPageParam: e => e?.nextPage
        }), m = (0, i.useMemo)(() => (c?.pages || []).flatMap(e => e?.data || []), [c?.pages]);
        return {
          setQuery: o,
          data: c,
          error: l,
          fetchNextPage: d,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: g,
          flattenData: m
        }
      }
    }
  }
]);
