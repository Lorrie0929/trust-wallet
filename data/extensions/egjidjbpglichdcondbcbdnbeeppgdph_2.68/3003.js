"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3003], {
    83003: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => v
      });
      var a = n(74848),
        o = n(2496),
        l = n(29584),
        i = n(63369),
        r = n(23688),
        c = n(68157),
        s = n(52856),
        h = n(97665),
        u = n(6475),
        f = n(96540),
        d = n(22670),
        g = n(62266),
        x = n(64145),
        m = n(33055),
        w = n(85005),
        P = n(10537),
        D = n(9389),
        k = (e, t, n) => new Promise((a, o) => {
          var l = e => {
              try {
                r(n.next(e))
              } catch (e) {
                o(e)
              }
            },
            i = e => {
              try {
                r(n.throw(e))
              } catch (e) {
                o(e)
              }
            },
            r = e => e.done ? a(e.value) : Promise.resolve(e.value).then(l, i);
          r((n = n.apply(e, t)).next())
        }),
        y = n(69325),
        N = n(4800),
        b = n(67310),
        T = n(6442);
      const v = (0, r.K)(() => {
        (0, i.K)({
          event: l.Un.HISTORY,
          props: null
        });
        const {
          formatMessage: e
        } = (0, T.A)(), t = (0, y.q)(), n = window.innerHeight - N.a4 - N.e4 - N.Et - 64, [r, v] = (0, f.useState)(!0), {
          fetchNextPage: F,
          hasNextPage: p,
          isFetchingNextPage: I,
          isFirstFetch: O
        } = function() {
          const e = (0, m.v)(),
            t = (0, D.Cb)(),
            {
              from: n,
              to: a,
              blockchains: o,
              nextToken: l
            } = (() => {
              const {
                tx: e,
                wallet: t
              } = c.M_.getState();
              return (0, f.useMemo)(() => {
                var n, a, o;
                return null != (o = null == (a = null == (n = e.fetchedAllChainsTransactionPeriodsByAccount) ? void 0 : n[t.walletId]) ? void 0 : a[t.selectedAccountId]) ? o : {}
              }, [e.fetchedAllChainsTransactionPeriodsByAccount, t.walletId, t.selectedAccountId])
            })(),
            i = (0, P.n)(!0),
            r = (0, h.jE)(),
            [y, N] = (0, f.useState)(new Date),
            [b, T] = (0, f.useState)((0, w.t6)(new Date, 29)),
            [v, F] = (0, f.useState)(!1),
            [p, I] = (0, f.useState)(!1),
            [O, M] = (0, f.useState)(l),
            [j, q] = (0, f.useState)([]),
            [A, W] = (0, f.useState)(!0),
            C = (0, f.useRef)(0),
            H = (0, f.useMemo)(() => i.filter(e => !j.includes(e.id)), [i, j]),
            K = (0, f.useCallback)(() => {
              !n || !a || !A || new Date(b) > new Date(n) && k(null, null, function*() {
                yield x.YW.emit(d.A.FETCH_ALL_CHAINS_MISSING_TRANSACTIONS, {
                  from: y,
                  to: n,
                  blockchains: H
                }), N(new Date(a)), T((0, w.t6)(new Date(a), 29)), F(!0)
              })
            }, [n, a, y, b]),
            L = (0, f.useCallback)(e => {
              A && k(null, null, function*() {
                yield x.YW.emit(d.A.FETCH_ALL_CHAINS_MISSING_TRANSACTIONS, {
                  from: new Date(n),
                  to: new Date(a),
                  blockchains: e
                })
              })
            }, []),
            R = (n, a, o) => {
              M(o), c.M_.dispatch(s.B.actions.updateAllChainsCachedTransactionsPeriod({
                blockchains: H.map(e => e.id),
                selectedWalletId: e,
                accountId: t,
                from: n,
                to: a,
                nextToken: o
              }))
            },
            {
              fetchNextPage: z,
              hasNextPage: B,
              isFetchingNextPage: E
            } = (0, u.q)({
              queryKey: ["transactions", e],
              queryFn: l => k(null, [l], function*({
                pageParam: l
              }) {
                C.current++;
                const {
                  transactions: r,
                  nextToken: h,
                  unsupportedChains: u
                } = yield x.YW.emit(d.A.FETCH_ASSETS_TRANSACTION_HISTORY, {
                  from: l.from,
                  to: l.to,
                  nextToken: l.nextToken,
                  blockchains: H
                });
                let f = l.from,
                  g = l.to,
                  m = h;
                if (r?.length && c.M_.dispatch(s.B.actions.updateTxs({
                    items: r,
                    walletId: e,
                    accountId: t
                  })), u?.length && (q(u), o?.length)) {
                  const e = i.filter(e => !u.includes(e.id)).filter(e => !o.includes(e.id));
                  e.length > 0 && L(e)
                }
                return n || R(y.toISOString(), b.toISOString()), l.from > new Date(n) && new Date(n) > b && (R(y.toISOString(), a, O), f = (0, w.t6)(new Date(a), -29), g = new Date(a), m = void 0), (l.to < new Date(a) || new Date(a).getTime() === l.to.getTime() && m !== O) && R(n, b.toISOString(), m), v && F(!1), N(f), T(g), I(!r?.length), K(), {
                  transactions: r,
                  from: f,
                  to: g,
                  nextToken: m
                }
              }),
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 3e5,
              gcTime: 864e5,
              enabled: A,
              initialPageParam: {
                from: y,
                to: b,
                nextToken: void 0
              },
              getNextPageParam: e => {
                var t;
                if (b > g.Qp && null !== e) return v ? {
                  from: y,
                  to: b,
                  nextToken: O
                } : e.nextToken || O ? {
                  nextToken: null != (t = e.nextToken) ? t : O,
                  from: y,
                  to: b
                } : {
                  from: new Date(e.to.getTime()),
                  to: (0, w.t6)(e.to, 29)
                }
              }
            });
          return (0, f.useEffect)(() => {
            p && C.current > 1 && b > g.Qp && z(), I(!1)
          }, [p]), (0, f.useEffect)(() => () => {
            r.removeQueries(), W(!1)
          }, []), {
            fetchNextPage: z,
            hasNextPage: B,
            isFetchingNextPage: E,
            isFirstFetch: 2 > C.current
          }
        }();
        return (0, f.useEffect)(() => {
          (Object.keys(t).length || !O) && v(!1)
        }, [t]), (0, a.jsxs)(N.LN, {
          children: [(0, a.jsx)(N.zY, {
            title: e({
              id: "history-list.title"
            })
          }), (0, a.jsx)(N.Gv, {
            children: (0, a.jsx)(b.A, {
              dataLength: Object.values(t).flat().length,
              next: F,
              height: n,
              className: "tw-scrollbar",
              hasMore: !!p,
              loader: null,
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: (0, a.jsx)(o.D, {
                transactions: t,
                scrollableAreaHeight: n,
                loadMoreItems: F,
                fetchingTransactions: I || r,
                hasNextPage: p,
                historyAvailable: !0
              })
            })
          })]
        })
      })
    }
  }
]);
