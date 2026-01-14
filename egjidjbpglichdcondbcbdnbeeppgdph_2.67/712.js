try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.u = e.u || {}, e.u[t] = "997ce623-2c44-4ae7-bdfa-e7829d11820a", e.m = "sentry-dbid-997ce623-2c44-4ae7-bdfa-e7829d11820a")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [712], {
    2472: (e, t, r) => {
      r.d(t, {
        i: () => s
      });
      var n = r(74848),
        l = r(48346);
      const s = ({
        length: e,
        isLoading: t,
        widthClass: r = "w-20",
        heightClass: s = "h-4",
        horizontal: i = !1,
        fullWidth: a = !1
      }) => t ? (0, n.jsx)("div", {
        className: `flex ${i?"flex-row":"flex-col"} gap-2`,
        children: [...Array(e)].map((e, t) => (0, n.jsx)(l.S, {
          isLoading: !0,
          widthClass: r,
          heightClass: s,
          fullWidth: a
        }, "skeleton-line-list-" + t))
      }) : null
    },
    6475: (e, t, r) => {
      r.d(t, {
        q: () => a
      });
      var n = r(1651),
        l = r(58959),
        s = class extends n.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, l.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, l.PL)(), super.getOptimisticResult(e)
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
              state: r
            } = e, n = super.createResult(e, t), {
              isFetching: s,
              isRefetching: i,
              isError: a,
              isRefetchError: o
            } = n, c = r.fetchMeta?.fetchMore?.direction, d = a && "forward" === c, u = s && "forward" === c, h = a && "backward" === c, m = s && "backward" === c;
            return {
              ...n,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, l.rB)(t, r.data),
              hasPreviousPage: (0, l.RQ)(t, r.data),
              isFetchNextPageError: d,
              isFetchingNextPage: u,
              isFetchPreviousPageError: h,
              isFetchingPreviousPage: m,
              isRefetchError: o && !d && !h,
              isRefetching: i && !u && !m
            }
          }
        },
        i = r(44171);

      function a(e, t) {
        return (0, i.t)(e, s, t)
      }
    },
    20998: (e, t, r) => {
      r.d(t, {
        S: () => P
      });
      var n = r(74848),
        l = r(96540),
        s = r(6442),
        i = r(52114),
        a = r(1279),
        o = r(8360),
        c = r(94893),
        d = r(9770),
        u = r(97726),
        h = r(46729),
        m = r(95455),
        f = r(65504),
        p = r(68632),
        y = r(98939),
        g = r(22146),
        v = r(23350);
      const b = Object.values(y.hF),
        w = e => b.includes(e),
        x = e => {
          var t;
          return null != (t = e.displayName) ? t : e.name
        },
        N = (e, t) => {
          const r = x(e).toLowerCase(),
            n = e.symbol.toLowerCase();
          return r.includes(t) || n.includes(t)
        },
        k = (e, t) => b.indexOf(e.coinId) - b.indexOf(t.coinId),
        C = (e, t) => x(e).localeCompare(x(t)),
        P = ({
          isOpen: e,
          onClose: t,
          blockchainList: r,
          selectedBlockchainId: y,
          onSelectNetwork: b,
          hideAllNetworksOption: P
        }) => {
          const {
            formatMessage: F
          } = (0, s.A)(), [M, A] = (0, l.useState)(""), S = M.toLowerCase(), j = (0, l.useMemo)(() => r.filter(e => w(e.coinId)).filter(e => !M || N(e, S)).sort(k), [r, M, S]), T = (0, l.useMemo)(() => r.filter(e => !w(e.coinId)).filter(e => !M || N(e, S)).sort(C), [r, M, S]), I = !M && !P, L = M && 0 === j.length && 0 === T.length, B = e => e ? y === e.id : !y, q = e => ((e, t, r) => new Promise((e, t) => {
            var n = e => {
                try {
                  s(r.next(e))
                } catch (e) {
                  t(e)
                }
              },
              l = e => {
                try {
                  s(r.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
            s((r = r.apply(null, null)).next())
          }))(0, 0, function*() {
            b(e), t(), A("")
          });
          return (0, n.jsx)(g.a, {
            opened: e,
            onClose: () => {
              t(), A("")
            },
            title: F({
              id: "select-network.title",
              defaultMessage: "Select network"
            }),
            placement: v.Gn.BOTTOM,
            children: (0, n.jsxs)("div", {
              className: "flex flex-col min-h-[95vh]  space-y-3",
              children: [(0, n.jsx)(o.D, {
                placeholder: F({
                  id: "select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: M,
                onChange: e => A(e.target.value),
                autoFocus: !1,
                testid: "network-modal-search"
              }), (0, n.jsx)("div", {
                className: "flex-1 overflow-y-auto tw-scrollbar flex flex-col",
                children: L ? (0, n.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, n.jsx)(m.B, {})
                }) : (0, n.jsx)("div", {
                  className: "space-y-4",
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [I && (0, n.jsx)(c.c, {
                      onClick: () => q(null),
                      testid: "network-modal-all",
                      children: (0, n.jsxs)("div", {
                        className: "flex items-center justify-between py-3",
                        children: [(0, n.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [(0, n.jsx)("div", {
                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                            children: (0, n.jsx)(d.s, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          }), (0, n.jsx)(i.E, {
                            type: a.jK.SUBHEADER_16,
                            theme: a.Il.PRIMARY,
                            children: F({
                              id: "select-crypto.all-networks",
                              defaultMessage: "All networks"
                            })
                          })]
                        }), B(null) ? (0, n.jsx)(u.w, {
                          width: 24,
                          height: 24,
                          colorClass: "text-primary"
                        }) : (0, n.jsx)(h.r, {
                          width: 24,
                          height: 24,
                          colorClass: "text-utility-1-opacity-2"
                        })]
                      })
                    }), j.length > 0 && (0, n.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, n.jsx)("div", {
                        className: "mb-2",
                        children: (0, n.jsx)(i.E, {
                          type: a.jK.BODY_14,
                          theme: a.Il.SECONDARY,
                          weight: a.nG.SEMIBOLD,
                          testid: "popular-networks-title",
                          children: F({
                            id: "select-network.popular-networks",
                            defaultMessage: "Popular networks"
                          })
                        })
                      }), j.map(e => (0, n.jsx)(c.c, {
                        onClick: () => q(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, n.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, n.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, n.jsx)(f.q, {
                              name: x(e),
                              src: e.iconUrl,
                              size: p.Y.LARGE
                            }), (0, n.jsx)(i.E, {
                              type: a.jK.SUBHEADER_16,
                              theme: a.Il.PRIMARY,
                              children: x(e)
                            })]
                          }), B(e) ? (0, n.jsx)(u.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, n.jsx)(h.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    }), T.length > 0 && (0, n.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, n.jsx)("div", {
                        className: "mb-2",
                        children: (0, n.jsx)(i.E, {
                          type: a.jK.BODY_14,
                          theme: a.Il.SECONDARY,
                          weight: a.nG.SEMIBOLD,
                          testid: "az-networks-title",
                          children: F({
                            id: "select-network.az-networks",
                            defaultMessage: "A-Z networks"
                          })
                        })
                      }), T.map(e => (0, n.jsx)(c.c, {
                        onClick: () => q(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, n.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, n.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, n.jsx)(f.q, {
                              name: x(e),
                              src: e.iconUrl,
                              size: p.Y.LARGE
                            }), (0, n.jsx)(i.E, {
                              type: a.jK.SUBHEADER_16,
                              theme: a.Il.PRIMARY,
                              children: x(e)
                            })]
                          }), B(e) ? (0, n.jsx)(u.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, n.jsx)(h.r, {
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
    38331: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => rt
      });
      var n, l = r(74848),
        s = r(84976),
        i = r(47767),
        a = r(4800),
        o = r(6442),
        c = r(96540),
        d = r(49051),
        u = r(52619),
        h = r(65512),
        m = r(48346),
        f = r(2472),
        p = r(26264),
        y = ((n = y || {}).REGULAR = "regular", n.P2P = "p2p", n);
      const g = (0, c.createContext)(null),
        v = () => {
          const e = (0, c.useContext)(g);
          if (!e) throw Error("useBuyContext must be inside BuyContextProvider");
          return e
        };
      var b = r(63369),
        w = r(29584),
        x = r(41327),
        N = r(52114),
        k = r(1279);
      const C = ({
        quote: e,
        paymentCategory: t,
        isLoading: r,
        onClick: n
      }) => {
        var s;
        const {
          formatMessage: i
        } = (0, o.A)();
        if (r) return (0, l.jsxs)("div", {
          className: "flex items-center justify-between w-full py-3 px-4 bg-background-secondary rounded-4 animate-pulse",
          children: [(0, l.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [(0, l.jsx)("div", {
              className: "w-10 h-10 rounded-full bg-background-tertiary"
            }), (0, l.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [(0, l.jsx)("div", {
                className: "w-[100px] h-4 bg-background-tertiary rounded"
              }), (0, l.jsx)("div", {
                className: "w-[80px] h-3.5 bg-background-tertiary rounded"
              })]
            })]
          }), (0, l.jsx)("div", {
            className: "w-5 h-5 bg-background-tertiary rounded"
          })]
        });
        if (!e) return null;
        const a = e.provider.name,
          c = e.provider.imageUrl,
          d = null != (s = t?.displayName) ? s : e.paymentMethod.paymentMethod;
        return (0, l.jsx)(h.$, {
          onClick: n,
          theme: u.ry.SECONDARY,
          shape: u.dB.DEFAULT,
          className: "flex items-center justify-between py-3 px-4 bg-background-secondary rounded-4",
          children: (0, l.jsxs)("div", {
            className: "flex items-center justify-between w-full",
            children: [(0, l.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [c ? (0, l.jsx)("img", {
                src: c,
                alt: a,
                className: "w-10 h-10"
              }) : (0, l.jsx)("div", {
                className: "w-10 h-10 rounded-full bg-background-primary flex items-center justify-center",
                children: (0, l.jsx)(N.E, {
                  type: k.jK.SUBHEADER_16,
                  weight: k.nG.SEMIBOLD,
                  children: a.charAt(0)
                })
              }), (0, l.jsxs)("div", {
                className: "flex flex-col items-start",
                children: [(0, l.jsx)(N.E, {
                  type: k.jK.SUBHEADER_16,
                  weight: k.nG.SEMIBOLD,
                  children: d
                }), (0, l.jsx)(N.E, {
                  type: k.jK.BODY_14,
                  theme: k.Il.UTILITY_1_OPACITY_1,
                  children: i({
                    id: "buy-enter-amount.p2p-provider",
                    defaultMessage: "with {providerName}"
                  }, {
                    providerName: a
                  })
                })]
              })]
            }), (0, l.jsx)(x.v, {
              width: 20,
              height: 20,
              colorClass: "text-icon-secondary"
            })]
          })
        })
      };
      var P = r(97286),
        F = r(64145),
        M = r(23384),
        A = (e => (e.DIRECT = "DIRECT", e.INDIRECT = "INDIRECT", e.BINANCE_INDIRECT = "BINANCE_INDIRECT", e))(A || {}),
        S = (e => (e.KYCed = "KYCed", e.LastUsed = "LastUsed", e.IsRecommended = "IsRecommended", e.BestPrice = "BestPrice", e.ProviderDefaultForRegion = "ProviderDefaultForRegion", e))(S || {});
      const j = ({
        assetId: e,
        currency: t,
        amount: r,
        enabled: n = !0,
        isP2P: l = !1
      }) => {
        var s, i, a, o, c;
        const d = n && !!e && !!t && !!r && "0" !== r,
          {
            data: u,
            isPending: h,
            isFetching: m,
            isError: f,
            error: p,
            refetch: y
          } = (0, P.I)({
            queryKey: ["buy-provider-routes", e, t, r],
            queryFn: () => {
              const n = {
                assetId: e,
                currency: t,
                amount: r
              };
              return F.YW.emit(M.A.GET_BUY_PROVIDER_ROUTES, n)
            },
            enabled: d && !l,
            retry: 2,
            refetchOnWindowFocus: !1,
            gcTime: 3e5
          }),
          {
            data: g,
            isPending: v,
            isFetching: b,
            isError: w,
            error: x,
            refetch: N
          } = (0, P.I)({
            queryKey: ["p2p-buy-quotes", e, t, r],
            queryFn: () => F.YW.emit(M.A.GET_P2P_BUY_CRYPTO_QUOTES, {
              assetId: e,
              amount: r,
              currency: t
            }),
            enabled: d && l,
            retry: 2,
            refetchOnWindowFocus: !1,
            gcTime: 3e5
          }),
          k = l ? v : h,
          C = l ? b : m,
          j = l ? w : f,
          T = l ? x : p,
          I = l ? N : y,
          L = null != (s = g?.quotes) ? s : [],
          B = null != (a = null == (i = u?.onramp) ? void 0 : i.quotes) ? a : [],
          q = null != (c = null == (o = u?.onramp) ? void 0 : o.paymentCategories) ? c : [],
          O = B.length && q.length ? q.map(e => {
            var t;
            const r = [...B.filter(t => t.paymentMethod.categoryId === e.id)].sort((e, t) => {
                if (e.isRecommended && !t.isRecommended) return -1;
                if (!e.isRecommended && t.isRecommended) return 1;
                const r = e.badges.includes(S.BestPrice),
                  n = t.badges.includes(S.BestPrice);
                return r && !n ? -1 : !r && n ? 1 : t.digitalMoney.amount - e.digitalMoney.amount
              }),
              n = null != (t = r.find(e => e.isRecommended)) ? t : r[0];
            return {
              category: e,
              quotes: r,
              recommendedQuote: n
            }
          }).filter(e => e.quotes.length > 0) : [],
          E = (() => {
            if (B.length) return B.find(e => e.isRecommended) || B.find(e => e.badges.includes(S.BestPrice)) || B.reduce((e, t) => t.digitalMoney.amount > e.digitalMoney.amount ? t : e, B[0])
          })(),
          D = (() => {
            if (L.length) return L[0]
          })(),
          _ = (() => {
            var e;
            if (O.length) {
              if (E) {
                const e = O.find(e => e.quotes.some(e => e.id === E.id));
                if (e) return e.category
              }
              return null == (e = O[0]) ? void 0 : e.category
            }
          })(),
          V = u?.routeType;
        return {
          providerRoutes: u,
          routeType: V,
          isDirectRoute: l ? L.length > 0 : V === A.DIRECT,
          allQuotes: B,
          paymentCategories: q,
          providersByCategory: O,
          bestQuote: E,
          defaultCategory: _,
          p2pQuotes: L,
          p2pBestQuote: D,
          isLoading: k,
          isFetching: C,
          isError: j,
          error: T,
          refetch: I
        }
      };
      var T = r(73900),
        I = r(42430),
        L = r(53982),
        B = r(57097),
        q = r(89408),
        O = r(42564),
        E = r(28398),
        D = r(23207),
        _ = Object.defineProperty,
        V = Object.defineProperties,
        R = Object.getOwnPropertyDescriptors,
        z = Object.getOwnPropertySymbols,
        H = {}.hasOwnProperty,
        W = {}.propertyIsEnumerable,
        Q = (e, t, r) => t in e ? _(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        U = (e, t) => {
          for (var r in t || (t = {})) H.call(t, r) && Q(e, r, t[r]);
          if (z)
            for (var r of z(t)) W.call(t, r) && Q(e, r, t[r]);
          return e
        },
        K = (e, t) => V(e, R(t)),
        Z = (e, t, r) => new Promise((n, l) => {
          var s = e => {
              try {
                a(r.next(e))
              } catch (e) {
                l(e)
              }
            },
            i = e => {
              try {
                a(r.throw(e))
              } catch (e) {
                l(e)
              }
            },
            a = e => e.done ? n(e.value) : Promise.resolve(e.value).then(s, i);
          a((r = r.apply(e, t)).next())
        }),
        G = Object.defineProperty,
        Y = Object.defineProperties,
        $ = Object.getOwnPropertyDescriptors,
        J = Object.getOwnPropertySymbols,
        X = {}.hasOwnProperty,
        ee = {}.propertyIsEnumerable,
        te = (e, t, r) => t in e ? G(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        re = (e, t) => {
          for (var r in t || (t = {})) X.call(t, r) && te(e, r, t[r]);
          if (J)
            for (var r of J(t)) ee.call(t, r) && te(e, r, t[r]);
          return e
        },
        ne = (e, t) => Y(e, $(t)),
        le = (e, t, r) => new Promise((n, l) => {
          var s = e => {
              try {
                a(r.next(e))
              } catch (e) {
                l(e)
              }
            },
            i = e => {
              try {
                a(r.throw(e))
              } catch (e) {
                l(e)
              }
            },
            a = e => e.done ? n(e.value) : Promise.resolve(e.value).then(s, i);
          a((r = r.apply(e, t)).next())
        }),
        se = r(61228),
        ie = Object.defineProperty,
        ae = Object.defineProperties,
        oe = Object.getOwnPropertyDescriptors,
        ce = Object.getOwnPropertySymbols,
        de = {}.hasOwnProperty,
        ue = {}.propertyIsEnumerable,
        he = (e, t, r) => t in e ? ie(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        me = (e, t) => {
          for (var r in t || (t = {})) de.call(t, r) && he(e, r, t[r]);
          if (ce)
            for (var r of ce(t)) ue.call(t, r) && he(e, r, t[r]);
          return e
        },
        fe = (e, t) => ae(e, oe(t));
      const pe = () => {
          var e, t, r, n, s, y, g;
          (0, b.K)({
            event: w.Un.FIAT_ON_RAMPS,
            props: null
          });
          const {
            formatMessage: x
          } = (0, o.A)(), P = (0, i.Zp)(), {
            selectedCrypto: A,
            selectedFiat: S,
            setSelectedFiat: _,
            selectedProvider: V,
            setSelectedProvider: R,
            selectedPaymentCategory: z,
            setSelectedPaymentCategory: H,
            isP2PBuy: W
          } = v(), Q = () => W ? "?mode=p2p" : "", G = !!A?.assetId && !!S?.amount && "0" !== S.amount, {
            bestQuote: Y,
            p2pBestQuote: $,
            defaultCategory: J,
            isDirectRoute: X,
            isLoading: ee
          } = j({
            assetId: null != (e = A?.assetId) ? e : "",
            currency: null != (t = S?.symbol) ? t : "USD",
            amount: null != (r = S?.amount) ? r : "0",
            enabled: G,
            isP2P: W
          }), te = (() => {
            const {
              trackAnalytics: e
            } = (0, D.s)();
            return (0, B.n)({
              mutationFn: e => Z(null, [e], function*({
                quote: e,
                asset: t
              }) {
                var r;
                const n = (e => ({
                    id: e.id,
                    isRecommended: e.isRecommended,
                    digitalMoney: e.digitalMoney,
                    fiatMoney: e.fiatMoney,
                    provider: e.provider,
                    paymentMethod: {
                      paymentMethod: e.paymentMethod.paymentMethod,
                      providerName: e.paymentMethod.providerName
                    }
                  }))(e),
                  l = yield F.YW.emit(M.A.BUY_CRYPTO, {
                    quote: n,
                    assetId: t.assetId
                  });
                if (null != (r = l.error) && r.message) throw Error(l.error.message);
                return {
                  response: l,
                  quote: e,
                  asset: t
                }
              }),
              onSuccess: t => Z(null, [t], function*({
                response: t,
                quote: r,
                asset: n
              }) {
                const {
                  url: l,
                  addressField: s,
                  address: i
                } = t, a = new URL(l);
                s && a.searchParams.set(s, i);
                for (const [e, t] of a.searchParams) "address" === e && a.searchParams.set(e, (0, O.d)(t));
                window.open(a.toString(), "_blank"), e({
                  event: w.Un.FIAT_ON_RAMPS_PROVIDER,
                  props: {
                    pageViewResourceType: w.Rb.EXTERNAL,
                    blockchainId: n.blockchainId,
                    assetCurrency: r.digitalMoney.currency,
                    assetAmount: r.digitalMoney.amount,
                    assetFiatCurrency: r.fiatMoney.currency,
                    assetFiatAmount: r.fiatMoney.amount,
                    providerName: r.provider.name,
                    paymentMethod: r.paymentMethod.paymentMethod,
                    subPaymentMethod: r.paymentMethod.providerName
                  }
                }), n.isShownInHomeScreen || (yield F.YW.emit(q.A.ADD_ASSET, {
                  asset: K(U({}, n), {
                    isShownInHomeScreen: !0
                  }),
                  blockchainType: E.l.MAIN
                }))
              })
            })
          })(), ie = (() => {
            const {
              trackAnalytics: e
            } = (0, D.s)();
            return (0, B.n)({
              mutationFn: e => le(null, [e], function*({
                quote: e,
                asset: t
              }) {
                return {
                  response: yield F.YW.emit(M.A.GET_P2P_BUY_CRYPTO_CHECKOUT, {
                    quoteId: e.id,
                    assetId: t.assetId
                  }),
                  quote: e,
                  asset: t
                }
              }),
              onSuccess: t => le(null, [t], function*({
                response: t,
                quote: r,
                asset: n
              }) {
                const {
                  url: l
                } = t;
                window.open(l, "_blank"), e({
                  event: w.Un.FIAT_ON_RAMPS_PROVIDER,
                  props: {
                    pageViewResourceType: w.Rb.EXTERNAL,
                    blockchainId: n.blockchainId,
                    assetCurrency: r.digitalMoney.currency,
                    assetAmount: r.digitalMoney.amount,
                    assetFiatCurrency: r.fiatMoney.currency,
                    assetFiatAmount: r.fiatMoney.amount,
                    providerName: r.provider.name,
                    paymentMethod: r.paymentMethod.paymentMethod,
                    subPaymentMethod: r.paymentMethod.providerName
                  }
                }), n.isShownInHomeScreen || (yield F.YW.emit(q.A.ADD_ASSET, {
                  asset: ne(re({}, n), {
                    isShownInHomeScreen: !0
                  }),
                  blockchainType: E.l.MAIN
                }))
              })
            })
          })();
          (0, c.useEffect)(() => {
            Y && !V && R(Y), J && !z && H(J)
          }, [Y, J, V, z, R, H]);
          const ae = V ?? Y,
            oe = W ? $?.digitalMoney.amount.toFixed(6) : ae?.digitalMoney.amount.toFixed(6),
            ce = "" !== S.amount && "0" !== S.amount,
            de = (({
              isValidFiatAmount: e,
              selectedFiat: t,
              formatMessage: r
            }) => {
              if (!e) return {
                isValid: !0,
                error: null
              };
              const n = parseFloat(t.amount);
              if (isNaN(n)) return {
                isValid: !0,
                error: null
              };
              const {
                minAmount: l,
                maxAmount: s,
                symbol: i
              } = t;
              return l && s ? l > n ? {
                isValid: !1,
                error: {
                  type: "min",
                  message: r({
                    id: "buy-enter-amount.min-amount-error",
                    defaultMessage: "Min amount is {amount} {currency}"
                  }, {
                    amount: l.toLocaleString(void 0, {
                      maximumFractionDigits: 2
                    }),
                    currency: i
                  })
                }
              } : n > s ? {
                isValid: !1,
                error: {
                  type: "max",
                  message: r({
                    id: "buy-enter-amount.max-amount-error",
                    defaultMessage: "Max amount is {amount} {currency}"
                  }, {
                    amount: s.toLocaleString(void 0, {
                      maximumFractionDigits: 2
                    }),
                    currency: i
                  })
                }
              } : {
                isValid: !0,
                error: null
              } : {
                isValid: !0,
                error: null
              }
            })({
              isValidFiatAmount: ce,
              selectedFiat: S,
              formatMessage: x
            }),
            ue = S.suggestedAmounts && S.suggestedAmounts.length > 0,
            he = W ? null != (s = null == (n = ie.error) ? void 0 : n.message) ? s : null : null != (g = null == (y = te.error) ? void 0 : y.message) ? g : null,
            pe = W ? ie.isPending : te.isPending;
          return (0, l.jsx)(a.LN, {
            wide: !0,
            children: (0, l.jsxs)("div", {
              className: "flex flex-col justify-between flex-1",
              children: [(0, l.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0, l.jsx)(a.zY, {
                  backAction: () => {
                    P(-1)
                  },
                  title: x({
                    id: "fund.buy-crypto.title",
                    defaultMessage: "Buy crypto"
                  })
                }), (0, l.jsx)(I.A, {
                  vipBenefitsId: L.n.ONRAMP_FEE_DISCOUNT
                })]
              }), (0, l.jsxs)(a.Gv, {
                className: "flex flex-col items-end gap-8 justify-center",
                children: [(0, l.jsx)(d.y, {
                  asset: S,
                  amount: S.amount,
                  onAmountChange: e => _(fe(me({}, S), {
                    amount: e
                  })),
                  onAssetClick: () => P(p.b.BUY_NEW + "/select-fiat" + Q())
                }), (0, l.jsx)(d.y, {
                  asset: A,
                  amount: oe,
                  onAssetClick: () => P(p.b.BUY_NEW + "/select-crypto" + Q()),
                  isLoading: ce && ee,
                  isEditable: !1
                })]
              }), (0, l.jsxs)("div", {
                className: "flex flex-col",
                children: [(0, l.jsxs)("div", {
                  className: "grid grid-cols-4 gap-1.5 mb-6 h-[26px] items-center",
                  children: [(0, l.jsx)(f.i, {
                    length: 4,
                    widthClass: "w-full",
                    heightClass: "h-9",
                    fullWidth: !0,
                    isLoading: !ue,
                    horizontal: !0
                  }), ue && S.suggestedAmounts.map((e, t) => (0, l.jsx)(h.$, {
                    size: u.Vp.SMALL,
                    onClick: () => (e => {
                      _(fe(me({}, S), {
                        amount: e.toString()
                      }))
                    })(e),
                    fullWidth: !0,
                    theme: u.ry.SUBTLE,
                    className: "font-semibold ",
                    children: e
                  }, "suggested-amount-" + t))]
                }), (0, l.jsx)("div", {
                  className: "mb-4",
                  children: ce ? de.error ? (0, l.jsxs)("div", {
                    className: "flex items-center gap-2 py-5 px-4 bg-error-background rounded-4",
                    children: [(0, l.jsx)(T.U, {
                      width: 14,
                      height: 14,
                      colorClass: "text-error-main"
                    }), (0, l.jsx)(N.E, {
                      theme: k.Il.ERROR,
                      type: k.jK.BODY_14,
                      weight: k.nG.SEMIBOLD,
                      children: de.error.message
                    })]
                  }) : ee ? (0, l.jsx)(m.S, {
                    isLoading: !0,
                    widthClass: "w-full",
                    heightClass: "h-16",
                    fullWidth: !0
                  }) : W && $ ? (0, l.jsx)("div", {
                    className: "flex items-center py-3 px-4 bg-background-secondary rounded-4",
                    children: (0, l.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [$.provider.imageUrl && (0, l.jsx)("img", {
                        src: $.provider.imageUrl,
                        alt: $.provider.name,
                        className: "w-10 h-10"
                      }), (0, l.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [(0, l.jsx)(N.E, {
                          type: k.jK.SUBHEADER_16,
                          weight: k.nG.SEMIBOLD,
                          children: "P2P"
                        }), (0, l.jsx)(N.E, {
                          type: k.jK.BODY_14,
                          theme: k.Il.UTILITY_1_OPACITY_1,
                          children: x({
                            id: "buy-enter-amount.p2p-provider",
                            defaultMessage: "with {providerName}"
                          }, {
                            providerName: $.provider.name
                          })
                        })]
                      })]
                    })
                  }) : X ? (0, l.jsx)(C, {
                    quote: ae,
                    paymentCategory: z,
                    isLoading: !1,
                    onClick: () => P(p.b.BUY_NEW + "/select-provider")
                  }) : (0, l.jsx)("div", {
                    className: "flex items-center justify-center py-3 px-4 bg-background-secondary rounded-xl",
                    children: (0, l.jsx)(N.E, {
                      type: k.jK.BODY_14,
                      theme: k.Il.SECONDARY,
                      children: x({
                        id: "buy-enter-amount.no-payment-method",
                        defaultMessage: "No available payment method"
                      })
                    })
                  }) : (0, l.jsxs)("div", {
                    className: "flex items-center py-3 gap-2 px-4 bg-background-secondary rounded-xl",
                    children: [(0, l.jsx)(se.A, {
                      width: 24,
                      height: 24,
                      colorClass: "text-text-secondary"
                    }), (0, l.jsx)(N.E, {
                      type: k.jK.BODY_14,
                      theme: k.Il.SECONDARY,
                      children: x({
                        id: "buy-enter-amount.enter-amount-no-quote",
                        defaultMessage: "Enter amount and select payment"
                      })
                    })]
                  })
                }), he && (0, l.jsxs)("div", {
                  className: "flex items-center gap-2 py-3 px-4 bg-error-background rounded-4 mb-4",
                  children: [(0, l.jsx)(T.U, {
                    width: 14,
                    height: 14,
                    colorClass: "text-error-main"
                  }), (0, l.jsx)(N.E, {
                    theme: k.Il.ERROR,
                    type: k.jK.BODY_14,
                    weight: k.nG.SEMIBOLD,
                    children: he
                  })]
                }), (0, l.jsx)(h.$, {
                  size: u.Vp.LARGE,
                  shape: u.dB.DEFAULT,
                  theme: u.ry.PRIMARY,
                  onClick: () => {
                    A && (W && $ ? ie.mutate({
                      quote: $,
                      asset: A
                    }) : ae && te.mutate({
                      quote: ae,
                      asset: A
                    }))
                  },
                  disabled: !ce || !de.isValid || !X || pe,
                  loading: pe,
                  children: x({
                    id: "fund.buy-crypto-button",
                    defaultMessage: "{label}"
                  }, {
                    label: ce ? "Continue" : "Enter amount"
                  })
                })]
              })]
            })
          })
        },
        ye = e => {
          const {
            data: t,
            isFetching: r,
            error: n,
            refetch: l
          } = (0, P.I)({
            queryKey: ["currency-config", e],
            queryFn: () => F.YW.emit(M.A.ONE_CLICK_BUY_CRYPTO_CONFIG, {
              assetId: e
            }),
            enabled: !!e,
            retry: 2,
            refetchOnWindowFocus: !1,
            staleTime: 3e5,
            gcTime: 6e5
          });
          return {
            currencies: t ?? [],
            isLoading: r && !t,
            error: n,
            refetch: l
          }
        };
      var ge = r(25160),
        ve = (e => (e.DEFAULT = "Default", e.LOCAL = "Local", e.LAST_USED = "LastUsed", e.POPULAR = "Popular", e))(ve || {}),
        be = r(28744),
        we = Object.defineProperty,
        xe = Object.defineProperties,
        Ne = Object.getOwnPropertyDescriptors,
        ke = Object.getOwnPropertySymbols,
        Ce = {}.hasOwnProperty,
        Pe = {}.propertyIsEnumerable,
        Fe = (e, t, r) => t in e ? we(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r;
      const Me = () => {
        const e = (0, i.Zp)(),
          {
            selectedFiat: t,
            setSelectedFiat: r,
            selectedCrypto: n,
            isP2PBuy: s,
            p2pConfig: a,
            isP2PConfigLoading: o
          } = v(),
          {
            currencies: d,
            isLoading: u
          } = ye(s ? void 0 : n?.assetId),
          h = () => s ? "?mode=p2p" : "",
          m = (0, c.useMemo)(() => s && a?.supportedCurrencies ? a.supportedCurrencies.map(e => {
            var t, r;
            return {
              fiatCurrency: e.fiatCurrency,
              badges: null != (r = null == (t = e.badges) ? void 0 : t.map(e => e === ve.LOCAL ? ge.H.LOCAL : e === ve.LAST_USED ? ge.H.LAST_USED : e)) ? r : []
            }
          }) : [], [s, a?.supportedCurrencies]),
          f = (0, c.useMemo)(() => d.map(e => ({
            fiatCurrency: e.fiatCurrency,
            badges: e.badges
          })), [d]),
          y = s ? m : f,
          g = s ? o : u;
        return (0, l.jsx)(be.q, {
          onBackAction: () => {
            e(-1)
          },
          selectedFiatCurrency: t.symbol,
          onSelectCurrency: t => {
            var n;
            if (s) {
              const l = null == (n = a?.supportedCurrencies) ? void 0 : n.find(e => e.fiatCurrency === t);
              l && (r({
                fiatCurrency: t,
                amount: l.defaultAmount,
                symbol: t,
                minAmount: parseFloat(l.minAmount),
                maxAmount: parseFloat(l.maxAmount),
                defaultAmount: parseFloat(l.defaultAmount),
                suggestedAmounts: l.suggestedAmounts
              }), e(p.b.BUY_NEW + "/enter-amount" + h()))
            } else {
              const n = d.find(e => e.fiatCurrency === t);
              n && (r(((e, t) => xe(e, Ne(t)))(((e, t) => {
                for (var r in t || (t = {})) Ce.call(t, r) && Fe(e, r, t[r]);
                if (ke)
                  for (var r of ke(t)) Pe.call(t, r) && Fe(e, r, t[r]);
                return e
              })({}, n), {
                amount: n.defaultAmount.toString(),
                symbol: t
              })), e(p.b.BUY_NEW + "/enter-amount" + h()))
            }
          },
          currencies: y,
          isLoading: g
        })
      };
      var Ae = r(6475),
        Se = r(73208),
        je = r(75485),
        Te = r(41393),
        Ie = r(87841),
        Le = r(75985),
        Be = r(42151),
        qe = r(83596),
        Oe = r(33926),
        Ee = r(52294),
        De = r(44832);
      const _e = () => {
        var e, t;
        const r = (0, i.Zp)(),
          n = (0, i.zy)(),
          {
            formatMessage: s
          } = (0, o.A)(),
          {
            selectedCrypto: a,
            setSelectedCrypto: d,
            selectedNetwork: u,
            setSelectedNetwork: h,
            isP2PBuy: m,
            p2pConfig: f,
            selectedFiat: y,
            isP2PConfigLoading: g
          } = v(),
          b = n.pathname === p.b.BUY_NEW;
        (0, c.useEffect)(() => {
          if (a && b) {
            const e = m ? "?mode=p2p" : "";
            r(p.b.BUY_NEW + "/enter-amount" + e, {
              replace: !0
            })
          }
        }, [a, r, b, m]);
        const [w, x] = (0, c.useState)(Se.l.ALL), [C, P] = (0, c.useState)(""), A = (0, Le.d)(C, Be.e1), S = (0, De.g)(!0), j = e => {
          const t = e.target.value;
          P(t)
        }, T = (0, Ie.w)(), {
          assets: I,
          p2pAssets: L,
          recentlyPurchased: B,
          isLoading: q,
          hasNextPage: O,
          fetchNextPage: E
        } = (({
          tab: e,
          network: t,
          query: r,
          limit: n = 20,
          enabled: l = !0,
          isP2PBuy: s = !1,
          p2pAssets: i = [],
          blockchainsByCoinId: a = {}
        }) => {
          const o = t => {
              if (r) return t.all;
              switch (e) {
                case Se.l.ALL:
                  return t.all;
                case Se.l.TOP_100:
                  return t.top100;
                case Se.l.STABLES:
                  return t.stablecoins;
                default:
                  return t.all
              }
            },
            c = (() => {
              if (!s || !i.length) return [];
              const e = (r ?? "").toLowerCase();
              return e ? i.filter(t => {
                var r, n;
                if (t.symbol.toLowerCase().includes(e) || t.network.toLowerCase().includes(e)) return !0;
                const l = (0, je.X2)(t.assetId, !0),
                  s = a[l];
                return (null != (n = null != (r = s?.displayName) ? r : s?.name) ? n : "").toLowerCase().includes(e)
              }) : i
            })(),
            {
              data: d,
              isFetching: u,
              isFetchingNextPage: h,
              error: m,
              refetch: f,
              fetchNextPage: p,
              hasNextPage: y
            } = (0, Ae.q)({
              queryKey: ["buy-crypto-assets", e, t, r, n],
              queryFn: l => ((e, t, r) => new Promise((e, n) => {
                var l = e => {
                    try {
                      i(r.next(e))
                    } catch (e) {
                      n(e)
                    }
                  },
                  s = e => {
                    try {
                      i(r.throw(e))
                    } catch (e) {
                      n(e)
                    }
                  },
                  i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(l, s);
                i((r = r.apply(null, t)).next())
              }))(0, [l], function*({
                pageParam: l
              }) {
                const {
                  offset: s
                } = l;
                return F.YW.emit(M.A.GET_BUY_CRYPTO_ASSETS, (l => {
                  const s = {};
                  if (r) return s.query = r, s.allNetwork = t, s.allLimit = n, s.allOffset = l, s;
                  switch (e) {
                    case Se.l.ALL:
                      s.allNetwork = t, s.allLimit = n, s.allOffset = l;
                      break;
                    case Se.l.TOP_100:
                      s.top100Network = t, s.top100Limit = n, s.top100Offset = l;
                      break;
                    case Se.l.STABLES:
                      s.stablecoinsNetwork = t, s.stablecoinsLimit = n, s.stablecoinsOffset = l
                  }
                  return s
                })(s))
              }),
              initialPageParam: {
                offset: 0
              },
              getNextPageParam: (e, t) => {
                const r = o(e);
                if (!r) return;
                const n = t.reduce((e, t) => {
                  var r, n;
                  const l = o(t);
                  return e + (null != (n = null == (r = l?.docs) ? void 0 : r.length) ? n : 0)
                }, 0);
                return n < r.total ? {
                  offset: n
                } : void 0
              },
              refetchOnWindowFocus: !1,
              staleTime: 3e5,
              gcTime: 6e5,
              enabled: l && !s
            }),
            g = d?.pages ? d.pages.flatMap(e => {
              var t, r;
              return null != (r = null == (t = o(e)) ? void 0 : t.docs) ? r : []
            }) : [],
            v = s ? c.length : null != (w = d?.pages) && w[0] && null != (N = null == (x = o(d.pages[0])) ? void 0 : x.total) ? N : 0,
            b = (() => {
              var t, n, l;
              if (!s && e === Se.l.ALL && !r) return null == (l = null == (n = null == (t = d?.pages) ? void 0 : t[0]) ? void 0 : n.recentlyPurchased) ? void 0 : l.docs
            })();
          var w, x, N;
          return {
            assets: g,
            p2pAssets: c,
            total: v,
            recentlyPurchased: b,
            isLoading: !s && u && !d,
            isFetchingNextPage: h,
            error: m,
            refetch: f,
            fetchNextPage: p,
            hasNextPage: !s && (y ?? !1)
          }
        })({
          tab: w,
          network: null != (e = u?.coinId) ? e : void 0,
          query: A || void 0,
          isP2PBuy: m,
          p2pAssets: f?.currencySupportedAssets,
          blockchainsByCoinId: T
        }), D = m ? window.innerHeight - Be.v1 : window.innerHeight - Be.ht, _ = !m && !A && B && B.length > 0, V = () => {
          r(-1)
        }, R = e => {
          var t;
          const n = m ? L.find(t => t.assetId === e) : null != (t = I.find(t => t.assetId === e)) ? t : B?.find(t => t.assetId === e);
          if (!n) return;
          const l = (0, Te.e9)(n, T);
          l && (d(l), r(b ? p.b.BUY_NEW + "/enter-amount" + (m ? "?mode=p2p" : "") : -1))
        }, z = m ? g : q, H = !z && 0 === I.length && !_ && !m;
        return m ? (0, l.jsxs)(qe.b, {
          onBackAction: V,
          searchText: C,
          onSearchChange: j,
          selectedNetwork: u,
          networkFilterNavigateTo: p.b.BUY_NEW + "/select-network",
          selectedAssetId: a?.assetId,
          isLoading: g,
          isEmpty: 0 === L.length && !g,
          hasMore: !1,
          onLoadMore: () => {},
          scrollableAreaHeight: D,
          children: [(0, l.jsx)(N.E, {
            theme: k.Il.THIRD,
            children: s({
              id: "buy-select-crypto.p2p-assets-title",
              defaultMessage: "Available to {fiat} pair"
            }, {
              fiat: y?.symbol
            })
          }), L.map(e => (0, l.jsx)(Oe.A, {
            asset: e,
            onClick: () => R(e.assetId)
          }, e.assetId))]
        }) : (0, l.jsxs)(qe.b, {
          onBackAction: V,
          searchText: C,
          onSearchChange: j,
          showTabs: !0,
          selectedTab: w,
          onTabChange: e => {
            x(e)
          },
          selectedNetwork: u,
          networkFilterNavigateTo: p.b.BUY_NEW + "/select-network",
          selectedAssetId: a?.assetId,
          isLoading: z,
          isEmpty: H,
          hasMore: O,
          onLoadMore: E,
          scrollableAreaHeight: D,
          children: [_ && B && B.length > 0 && (0, l.jsxs)("div", {
            className: "mb-4",
            children: [(0, l.jsx)(N.E, {
              theme: k.Il.THIRD,
              testid: "recently-purchased-title",
              children: s({
                id: "buy-select-crypto.recently-purchased",
                defaultMessage: "Recently purchased"
              })
            }), B.map(e => (0, l.jsx)(Oe.A, {
              asset: e,
              onClick: () => R(e.assetId)
            }, "recent-" + e.assetId))]
          }), (0, l.jsx)("div", {
            className: "mb-4",
            children: (0, l.jsx)(Ee.M, {
              useGlobalState: !1,
              localFilteringBlockchainId: null != (t = u?.id) ? t : null,
              onFilterChange: e => {
                const t = e ? S.find(t => t.id === e) : null;
                h(t ?? null)
              }
            })
          })]
        })
      };
      var Ve = r(73632);
      const Re = () => {
        const {
          selectedNetwork: e,
          setSelectedNetwork: t
        } = v();
        return (0, l.jsx)(Ve.A, {
          selectedNetwork: e,
          setSelectedNetwork: t
        })
      };
      var ze = r(29618),
        He = r(14940);
      const We = () => {
        var e, t, r, n;
        const s = (0, i.Zp)(),
          {
            formatMessage: a
          } = (0, o.A)(),
          {
            selectedCrypto: d,
            selectedFiat: u,
            selectedProvider: h,
            setSelectedProvider: m,
            selectedPaymentCategory: f,
            setSelectedPaymentCategory: y
          } = v(),
          {
            providersByCategory: g,
            paymentCategories: b,
            bestQuote: w,
            defaultCategory: x,
            isLoading: C,
            isError: P
          } = j({
            assetId: null != (e = d?.assetId) ? e : "",
            currency: null != (t = u?.symbol) ? t : "USD",
            amount: null != (r = u?.amount) ? r : "0",
            enabled: !!d?.assetId && !!u?.amount && "0" !== u.amount
          });
        (0, c.useEffect)(() => {
          !f && x && y(x)
        }, [f, x, y]);
        const F = (() => {
            var e;
            if (!f) return [];
            const t = g.find(e => e.category.id === f.id);
            return null != (e = t?.quotes) ? e : []
          })(),
          M = (() => {
            var e;
            if (!h) return null;
            const t = F.find(e => e.provider.name === h.provider.name && e.paymentMethod.paymentMethod === h.paymentMethod.paymentMethod && e.paymentMethod.categoryId === h.paymentMethod.categoryId);
            return null != (e = t?.id) ? e : null
          })(),
          A = e => {
            const t = F.find(t => t.id === e);
            t && (m(t), s(-1))
          },
          T = null != (n = M ?? w?.id) ? n : "",
          I = f ? {
            displayName: f.displayName,
            imageUrl: f.imageUrl,
            isTemplateImage: f.isTemplateImage,
            onSelect: () => {
              s(p.b.BUY_NEW + "/select-payment-method")
            }
          } : void 0;
        return (0, l.jsx)(ze.d, {
          onBackAction: () => {
            s(-1)
          },
          selectedQuoteId: T,
          onSelectProvider: A,
          isLoading: C,
          isError: P,
          hasQuotes: b.length > 0,
          paymentMethod: I,
          children: 0 === F.length ? (0, l.jsx)("div", {
            className: "flex flex-col items-center justify-center py-8",
            children: (0, l.jsx)(N.E, {
              type: k.jK.BODY_14,
              theme: k.Il.SECONDARY,
              children: a({
                id: "select-provider.no-providers-for-method",
                defaultMessage: "No providers available for this payment method."
              })
            })
          }) : F.map(e => (0, l.jsx)(He.h, {
            id: e.id,
            providerName: e.provider.name,
            providerIcon: e.provider.imageUrl,
            cryptoAmount: e.digitalMoney.amount,
            cryptoCurrency: e.digitalMoney.currency,
            badgeText: e.badges.includes(S.BestPrice) ? a({
              id: "select-provider.best-quote",
              defaultMessage: "Best quote"
            }) : void 0,
            onClick: () => A(e.id)
          }, e.id))
        })
      };
      var Qe = r(79830),
        Ue = r(7668),
        Ke = r(97726),
        Ze = r(46729);
      const Ge = ({
          category: e
        }) => (0, l.jsx)(Ue.sx, {
          value: e.id,
          className: "cursor-pointer",
          children: ({
            checked: t
          }) => (0, l.jsxs)("div", {
            className: "flex items-center justify-between py-4",
            children: [(0, l.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [e.imageUrl ? (0, l.jsx)("img", {
                src: e.imageUrl,
                alt: e.displayName,
                width: 40,
                height: 40,
                className: e.isTemplateImage ? "dark:invert" : ""
              }) : (0, l.jsx)("div", {
                className: "w-10 h-10 rounded-full bg-background-secondary flex items-center justify-center",
                children: (0, l.jsx)(N.E, {
                  type: k.jK.SUBHEADER_16,
                  weight: k.nG.SEMIBOLD,
                  children: e.displayName.charAt(0)
                })
              }), (0, l.jsx)(N.E, {
                type: k.jK.TITLE,
                theme: k.Il.PRIMARY,
                weight: k.nG.SEMIBOLD,
                children: e.displayName
              })]
            }), (0, l.jsx)("div", {
              className: "flex items-center",
              children: t ? (0, l.jsx)(Ke.w, {
                width: 24,
                height: 24,
                colorClass: "text-brand-primary"
              }) : (0, l.jsx)(Ze.r, {
                width: 24,
                height: 24,
                colorClass: "text-icon-disabled"
              })
            })]
          })
        }),
        Ye = () => {
          var e, t, r, n;
          const s = (0, i.Zp)(),
            {
              formatMessage: c
            } = (0, o.A)(),
            {
              selectedCrypto: d,
              selectedFiat: u,
              selectedPaymentCategory: h,
              setSelectedPaymentCategory: m,
              setSelectedProvider: f
            } = v(),
            {
              paymentCategories: p,
              providersByCategory: y,
              isLoading: g,
              isError: b
            } = j({
              assetId: null != (e = d?.assetId) ? e : "",
              currency: null != (t = u?.symbol) ? t : "USD",
              amount: null != (r = u?.amount) ? r : "0",
              enabled: !!d?.assetId && !!u?.amount && "0" !== u.amount
            });
          return (0, l.jsxs)(a.LN, {
            wide: !0,
            children: [(0, l.jsx)(a.zY, {
              backAction: () => {
                s(-1)
              },
              title: c({
                id: "buy-select-payment-method.title",
                defaultMessage: "Payment methods"
              })
            }), (0, l.jsx)(a.Gv, {
              children: g ? (0, l.jsx)("div", {
                className: "flex justify-center py-8",
                children: (0, l.jsx)(Qe.y, {})
              }) : b ? (0, l.jsx)("div", {
                className: "flex flex-col items-center justify-center py-8",
                children: (0, l.jsx)(N.E, {
                  type: k.jK.BODY_14,
                  theme: k.Il.SECONDARY,
                  children: c({
                    id: "buy-select-payment-method.error",
                    defaultMessage: "Failed to load payment methods. Please try again."
                  })
                })
              }) : 0 === p.length ? (0, l.jsx)("div", {
                className: "flex flex-col items-center justify-center py-8",
                children: (0, l.jsx)(N.E, {
                  type: k.jK.BODY_14,
                  theme: k.Il.SECONDARY,
                  children: c({
                    id: "buy-select-payment-method.no-methods",
                    defaultMessage: "No payment methods available."
                  })
                })
              }) : (0, l.jsx)(Ue.z6, {
                value: null != (n = h?.id) ? n : "",
                onChange: e => {
                  const t = p.find(t => t.id === e);
                  if (t) {
                    m(t);
                    const r = y.find(t => t.category.id === e);
                    r?.recommendedQuote ? f(r.recommendedQuote) : r?.quotes[0] && f(r.quotes[0]), s(-1)
                  }
                },
                children: p.map(e => (0, l.jsx)(Ge, {
                  category: e
                }, e.id))
              })
            })]
          })
        };
      var $e = r(47991);
      const Je = "USD",
        Xe = ({
          children: e,
          mode: t = y.REGULAR
        }) => {
          var r;
          const n = (0, i.zy)(),
            s = (0, $e.P)(),
            a = null == (r = n.state) ? void 0 : r.assetId,
            o = t === y.P2P,
            [d, u] = (0, c.useState)(null),
            [h, m] = (0, c.useState)(null),
            [f, p] = (0, c.useState)(null),
            [v, b] = (0, c.useState)(null),
            {
              config: w,
              isLoading: x
            } = (() => {
              var e, t, r, n;
              const {
                data: l,
                isFetching: s,
                error: i,
                refetch: a
              } = (0, P.I)({
                queryKey: ["p2p-buy-crypto-config"],
                queryFn: () => F.YW.emit(M.A.GET_P2P_BUY_CRYPTO_CONFIG),
                retry: 2,
                refetchOnWindowFocus: !1,
                staleTime: 3e5,
                gcTime: 6e5
              });
              return {
                config: l ?? null,
                selectedAsset: null != (e = l?.selectedAsset) ? e : null,
                supportedCurrencies: null != (t = l?.supportedCurrencies) ? t : [],
                currencySupportedAssets: null != (r = l?.currencySupportedAssets) ? r : [],
                providers: null != (n = l?.providers) ? n : [],
                isLoading: s && !l,
                error: i,
                refetch: a
              }
            })(),
            {
              currencies: N
            } = ye(o ? void 0 : d?.assetId),
            [k, C] = (0, c.useState)({
              fiatCurrency: Je,
              defaultAmount: 0,
              minAmount: 0,
              maxAmount: 0,
              suggestedAmounts: [],
              amount: "",
              symbol: Je
            }),
            [A, S] = (0, c.useState)(null),
            [j, T] = (0, c.useState)(!1);
          (0, c.useEffect)(() => {
            if (a && !d && s.length > 0) {
              const e = s.find(e => e.assetId === a);
              e && u(e)
            }
          }, [a, d, s]), (0, c.useEffect)(() => {
            var e, t, r, n, l, s;
            if (!o || !w || j) return;
            const i = w.supportedCurrencies;
            if (!i.length) return;
            const a = null != (n = null != (r = null != (t = null != (e = i.find(e => {
              var t;
              return null == (t = e.badges) ? void 0 : t.includes(ve.DEFAULT)
            })) ? e : i.find(e => {
              var t;
              return null == (t = e.badges) ? void 0 : t.includes(ve.LAST_USED)
            })) ? t : i.find(e => {
              var t;
              return null == (t = e.badges) ? void 0 : t.includes(ve.LOCAL)
            })) ? r : i.find(e => e.fiatCurrency === Je)) ? n : i[0];
            if (a) {
              const e = a.fiatCurrency;
              C({
                fiatCurrency: e,
                defaultAmount: parseFloat(a.defaultAmount),
                minAmount: parseFloat(a.minAmount),
                maxAmount: parseFloat(a.maxAmount),
                suggestedAmounts: null != (l = a.suggestedAmounts) ? l : [],
                badges: null == (s = a.badges) ? void 0 : s.map(e => e),
                amount: a.defaultAmount,
                symbol: e
              }), T(!0)
            }
          }, [o, w, j]), (0, c.useEffect)(() => {
            var e;
            if (o || !N.length || !d?.assetId || A === d.assetId) return;
            const t = (e => {
              const t = e.find(e => {
                var t;
                return null == (t = e.badges) ? void 0 : t.includes(ge.H.LAST_USED)
              });
              if (t) return t;
              const r = e.find(e => {
                var t;
                return null == (t = e.badges) ? void 0 : t.includes(ge.H.LOCAL)
              });
              return r || e.find(e => e.fiatCurrency === Je) || e[0]
            })(N);
            t && (C({
              fiatCurrency: t.fiatCurrency,
              defaultAmount: t.defaultAmount,
              minAmount: t.minAmount,
              maxAmount: t.maxAmount,
              suggestedAmounts: null != (e = t.suggestedAmounts) ? e : [],
              badges: t.badges,
              amount: t.defaultAmount.toString(),
              symbol: t.fiatCurrency
            }), S(d.assetId), p(null), b(null))
          }, [o, N, d?.assetId, A]);
          const I = e => {
              C(t => (t.amount !== e.amount && p(null), e))
            },
            L = e => {
              u(e), p(null), b(null), S(null)
            },
            B = (0, c.useMemo)(() => ({
              buyFlowMode: t,
              isP2PBuy: o,
              p2pConfig: o ? w : null,
              isP2PConfigLoading: !!o && x,
              selectedFiat: k,
              setSelectedFiat: I,
              selectedCrypto: d,
              setSelectedCrypto: L,
              selectedNetwork: h,
              setSelectedNetwork: m,
              selectedProvider: f,
              setSelectedProvider: p,
              selectedPaymentCategory: v,
              setSelectedPaymentCategory: b
            }), [t, o, w, x, k, I, d, L, h, f, v]);
          return (0, l.jsx)(g.Provider, {
            value: B,
            children: e
          })
        };
      var et = r(84118),
        tt = r(84206);
      const rt = () => {
        const [e] = (0, s.ok)(), t = "p2p" === e.get("mode") ? y.P2P : y.REGULAR, {
          enabled: r
        } = (0, et.x)(tt.t);
        return r ? (0, l.jsx)(Xe, {
          mode: t,
          children: (0, l.jsxs)(i.BV, {
            children: [(0, l.jsx)(i.qh, {
              index: !0,
              element: (0, l.jsx)(_e, {})
            }), (0, l.jsx)(i.qh, {
              path: "/enter-amount",
              element: (0, l.jsx)(pe, {})
            }), (0, l.jsx)(i.qh, {
              path: "/select-fiat",
              element: (0, l.jsx)(Me, {})
            }), (0, l.jsx)(i.qh, {
              path: "/select-crypto",
              element: (0, l.jsx)(_e, {})
            }), (0, l.jsx)(i.qh, {
              path: "/select-network",
              element: (0, l.jsx)(Re, {})
            }), (0, l.jsx)(i.qh, {
              path: "/select-provider",
              element: (0, l.jsx)(We, {})
            }), (0, l.jsx)(i.qh, {
              path: "/select-payment-method",
              element: (0, l.jsx)(Ye, {})
            })]
          })
        }) : (0, l.jsx)(i.C5, {
          to: p.b.BUY,
          state: {
            showBackButton: !0
          }
        })
      }
    },
    42430: (e, t, r) => {
      r.d(t, {
        A: () => w
      });
      var n = r(74848),
        l = r(53982),
        s = r(4751),
        i = r(64145),
        a = r(97286),
        o = r(11711),
        c = r(85655),
        d = r(98939),
        u = r(22146),
        h = r(65512),
        m = r(52619),
        f = r(23350),
        p = r(28898),
        y = r(15314),
        g = r(6442);
      const v = ({
        opened: e,
        vipTier: t,
        feesDiscountPercentage: r,
        onClose: l
      }) => {
        const {
          theme: s
        } = (0, p.h)(), {
          formatMessage: i
        } = (0, g.A)();
        if (!t) return null;
        const a = s === y.W.DARK ? t.icon_dark : t.icon_light;
        return (0, n.jsx)(u.a, {
          opened: e,
          onClose: l,
          title: t.display_name + " benefit",
          placement: f.Gn.CENTER,
          centerTitle: !0,
          children: (0, n.jsxs)("div", {
            className: "flex flex-col items-center space-y-6 py-4",
            children: [(0, n.jsx)("div", {
              className: "w-32 h-32 flex items-center justify-center",
              children: (0, n.jsx)("img", {
                src: a,
                alt: t.display_name + " tier",
                className: "w-full h-full"
              })
            }), (0, n.jsx)("p", {
              className: "text-center text-body3 font-medium leading-subtitle4 text-utility-1-opacity-2 px-4",
              children: i({
                id: "vip.modal-benefits-description",
                defaultMessage: "You're currently enjoying {feesDiscountPercentage}% off fees with your Trust Premium {displayName} benefits. Tap below to learn more about your Premium status and discover additional perks."
              }, {
                displayName: t?.display_name,
                feesDiscountPercentage: r
              })
            }), (0, n.jsx)(h.$, {
              theme: m.ry.PRIMARY,
              size: m.Vp.LARGE,
              onClick: () => {
                window.open("https://trustwallet.com/blog/announcements/introducing-trust-premium", "_blank", "noopener,noreferrer"), l()
              },
              fullWidth: !0,
              children: "Learn more"
            })]
          })
        })
      };
      var b = r(96540);
      const w = ({
        vipBenefitsId: e
      }) => {
        var t;
        const {
          vipTier: r,
          feesDiscountPercentage: u,
          isPendingVipData: h,
          isErrorVipData: m
        } = (e => {
          var t, r, n, s, u, h, m, f, p;
          const y = (0, c.nK)(d.hF.Ethereum.toString()),
            {
              data: g,
              isPending: v,
              isError: b
            } = (0, a.I)({
              queryKey: ["vip-tier-data", y?.address],
              queryFn: () => i.YW.emit(o.A.FETCH_USER_VIP_TIER_DATA, {
                address: y?.address
              }),
              enabled: !!y?.address
            }),
            w = null != (r = null == (t = g?.data) ? void 0 : t.vip_tier_level) ? r : l.j.NONE,
            x = null == (u = null == (s = null == (n = g?.data) ? void 0 : n.vip_config) ? void 0 : s.vip_tiers) ? void 0 : u.find(e => e.level === w),
            N = null == (f = null == (m = null == (h = g?.data) ? void 0 : h.vip_config) ? void 0 : m.vip_benefits) ? void 0 : f.find(t => t.id === e);
          return {
            feesDiscountPercentage: null == (p = N?.properties[w]) ? void 0 : p.value,
            vipTier: x,
            isPendingVipData: v,
            isErrorVipData: b
          }
        })(e), [f, p] = (0, b.useState)(!1), {
          formatMessage: y
        } = (0, g.A)(), w = r?.level === l.j.SILVER, x = r?.level === l.j.GOLD, N = w ? "border-other-Silver" : "border-other-Gold";
        return !w && !x || h || m ? null : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: `py-3 px-4 rounded-4 flex items-center gap-2 bg-background-2 border-2 ${N} cursor-pointer hover:opacity-80 transition-opacity`,
            onClick: () => p(!0),
            children: [(0, n.jsx)(s.hu, {
              tier: null == (t = r?.level) ? void 0 : t.toString(),
              width: 24,
              height: 24
            }), (0, n.jsx)("span", {
              className: "text-caption1 font-semibold text-utility-1-opacity-1",
              children: y({
                id: "vip.banner-benefits",
                defaultMessage: "{displayName} benefit: {feesDiscountPercentage}% off on fees applied."
              }, {
                displayName: r?.display_name,
                feesDiscountPercentage: u
              })
            })]
          }), (0, n.jsx)(v, {
            opened: f,
            vipTier: r,
            feesDiscountPercentage: u,
            onClose: () => p(!1)
          })]
        })
      }
    },
    52294: (e, t, r) => {
      r.d(t, {
        M: () => P
      });
      var n = r(74848),
        l = r(29584),
        s = r(23207),
        i = r(65504),
        a = r(68632),
        o = r(64145),
        c = r(22670),
        d = r(28398),
        u = r(44832),
        h = r(29189),
        m = r(69275),
        f = r(33055),
        p = r(29251),
        y = r(26113),
        g = r(96540),
        v = r(6442),
        b = r(98939),
        w = r(52114),
        x = r(1279),
        N = r(20998),
        k = r(10551);
      const C = [b.hF.SmartChain, b.hF.Ethereum, b.hF.Solana, b.hF.Tron, b.hF.Arbitrum],
        P = ({
          useGlobalState: e,
          localFilteringBlockchainId: t,
          onFilterChange: r
        }) => {
          const {
            formatMessage: b
          } = (0, v.A)(), {
            trackAnalytics: P
          } = (0, s.s)(), F = (0, f.A)(), M = (0, m.o)(), A = (0, u.g)(!0), S = (0, h.f)(), [j, T] = (0, g.useState)(!1), I = e ? S : t, L = (0, g.useMemo)(() => {
            if (F.type === p.S.MNEMONIC) return A;
            const e = Object.keys(M).map(e => e);
            return A.filter(t => e.includes(t.coinId.toString()))
          }, [A, M, F]), B = (0, g.useMemo)(() => L?.find(e => e.id === I), [L, I]);
          (0, g.useEffect)(() => {
            e && I && !B && o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null)
          }, [e, I, B]);
          const q = (0, g.useMemo)(() => C.map(e => L.find(t => t.coinId === e)).filter(e => void 0 !== e), [L]),
            O = L.length,
            E = t => ((e, t, r) => new Promise((e, t) => {
              var n = e => {
                  try {
                    s(r.next(e))
                  } catch (e) {
                    t(e)
                  }
                },
                l = e => {
                  try {
                    s(r.throw(e))
                  } catch (e) {
                    t(e)
                  }
                },
                s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, l);
              s((r = r.apply(null, null)).next())
            }))(0, 0, function*() {
              var n;
              if (!e) {
                const e = null != (n = t?.id) ? n : null;
                return void r?.(e)
              }
              if (!t) return void(yield Promise.allSettled([o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, null), (0, y.yy)(250)]));
              const s = t.isCustom ? d.l.CUSTOM : d.l.MAIN;
              yield Promise.allSettled([o.YW.emit(c.A.SWITCH_FILTERING_BLOCKCHAIN, t.id), (0, y.yy)(250)]), P({
                event: l.BQ.SWITCH_FILTERING_NETWORK,
                props: {
                  pageViewSource: l.Un.HOME,
                  blockchainName: t.name,
                  blockchainChainId: t.chainId,
                  blockchainType: s
                }
              })
            }),
            D = e => e ? I === e.id : !I;
          return (0, n.jsxs)("div", {
            className: "flex items-center justify-between overflow-x-auto scrollbar-hide pb-2",
            children: [(0, n.jsx)("button", {
              onClick: () => E(null),
              className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center " + (D(null) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
              "data-testid": "horizontal-network-filter-all",
              title: b({
                id: "component.blockchain-select.all-networks",
                defaultMessage: "All Networks"
              }),
              children: (0, n.jsx)("span", {
                className: D(null) ? "!text-primary" : "",
                children: (0, n.jsx)(w.E, {
                  type: x.jK.SUBHEADER_14,
                  theme: D(null) ? x.Il.PRIMARY_DEFAULT : void 0,
                  children: b({
                    id: "component.blockchain-select.all",
                    defaultMessage: "All"
                  })
                })
              })
            }), q.map(e => {
              var t;
              return (0, n.jsx)("button", {
                onClick: () => E(e),
                className: "flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all " + (D(e) ? "border-primary bg-background-2" : "border-transparent bg-background-2"),
                "data-testid": "horizontal-network-filter-" + e.symbol.toLowerCase(),
                title: null != (t = e.displayName) ? t : e.name,
                children: (0, n.jsx)("div", {
                  className: "w-full h-full rounded-full overflow-hidden flex items-center justify-center",
                  children: (0, n.jsx)(i.q, {
                    name: e.name,
                    size: a.Y.MEDIUM,
                    src: e.iconUrl
                  })
                })
              }, e.id)
            }), (0, n.jsxs)("button", {
              onClick: () => T(!0),
              className: "flex-shrink-0 px-3 py-2 rounded-full border-2 border-utility-1-opacity-5 bg-background-2 flex items-center gap-1.5",
              "data-testid": "horizontal-network-filter-more",
              title: O + " networks available",
              children: [(0, n.jsx)(w.E, {
                type: x.jK.SUBHEADER_14,
                children: O
              }), (0, n.jsx)(k.b, {
                width: 12,
                height: 12,
                colorClass: "text-utility-1-opacity-1"
              })]
            }), (0, n.jsx)(N.S, {
              isOpen: j,
              onClose: () => T(!1),
              blockchainList: L,
              selectedBlockchainId: I ?? null,
              onSelectNetwork: E
            })]
          })
        }
    },
    53982: (e, t, r) => {
      r.d(t, {
        j: () => s,
        n: () => l
      });
      var n, l = ((n = l || {}).TWT_GAS_RAMP = "zero_gas_twt_ramp", n.TWT_GAS_FEE_DISCOUNT = "twt_gas_fee_discount", n.SWAP_FEE_DISCOUNT = "swap_fee_discount", n.ONRAMP_FEE_DISCOUNT = "on_ramp_fee_discount", n.OFFRAMP_FEE_DISCOUNT = "off_ramp_fee_discount", n.TRUST_ALPHA_ACCESS = "trust_alpha_access", n.COMMUNITY_AIRDROP = "community_airdrop", n),
        s = (e => (e[e.NONE = 0] = "NONE", e[e.BRONZE = 1] = "BRONZE", e[e.SILVER = 2] = "SILVER", e[e.GOLD = 3] = "GOLD", e))(s || {})
    },
    61228: (e, t, r) => {
      r.d(t, {
        A: () => l
      });
      var n = r(74848);
      const l = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, n.jsxs)("svg", {
        className: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 17 13",
        fill: "none",
        children: [(0, n.jsxs)("g", {
          clipPath: "url(#clip0_10654_4700)",
          children: [(0, n.jsx)("path", {
            d: "M15 0H1.66667C0.75 0 0 0.808333 0 1.79167V10.9083C0 11.8917 0.75 12.7 1.66667 12.7H15C15.925 12.7 16.6667 11.8917 16.6667 10.9083V1.79167C16.6667 0.808333 15.925 0 15 0ZM14.7917 1.875V2.39167H1.875V1.875H14.7917ZM1.875 10.8333V4.26667H14.7917V10.8333H1.875Z",
            fill: "currentColor"
          }), (0, n.jsx)("path", {
            d: "M12.8171 5H10.9421C10.4255 5 10.0088 5.41667 10.0088 5.93333C10.0088 6.45 10.4255 6.86667 10.9421 6.86667H12.8171C13.3338 6.86667 13.7505 6.45 13.7505 5.93333C13.7505 5.41667 13.3338 5 12.8171 5Z",
            fill: "currentColor"
          })]
        }), (0, n.jsx)("defs", {
          children: (0, n.jsx)("clipPath", {
            id: "clip0_10654_4700",
            children: (0, n.jsx)("rect", {
              width: "16.6667",
              height: "12.7083",
              fill: "white"
            })
          })
        })]
      })
    },
    84206: (e, t, r) => {
      r.d(t, {
        t: () => n
      });
      const n = {
        name: "onramp-revamp",
        default: !1
      }
    }
  }
]);
