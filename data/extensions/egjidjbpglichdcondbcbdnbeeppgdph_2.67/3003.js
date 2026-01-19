try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "f82feed0-785a-4db0-a22d-81c13f1586c7", e.o = "sentry-dbid-f82feed0-785a-4db0-a22d-81c13f1586c7")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3003], {
    83003: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => N
      });
      var a = n(74848),
        o = n(2496),
        l = n(29584),
        i = n(63369),
        c = n(23688),
        s = n(68157),
        r = n(52856),
        f = n(97665),
        u = n(6475),
        d = n(96540),
        h = n(22670),
        g = n(62266),
        w = n(64145),
        x = n(33055),
        b = n(85005),
        m = n(10537),
        y = n(9389),
        P = (e, t, n) => new Promise((a, o) => {
          var l = e => {
              try {
                c(n.next(e))
              } catch (e) {
                o(e)
              }
            },
            i = e => {
              try {
                c(n.throw(e))
              } catch (e) {
                o(e)
              }
            },
            c = e => e.done ? a(e.value) : Promise.resolve(e.value).then(l, i);
          c((n = n.apply(e, t)).next())
        }),
        D = n(69325),
        T = n(4800),
        p = n(67310),
        k = n(6442);
      const N = (0, c.K)(() => {
        (0, i.K)({
          event: l.Un.HISTORY,
          props: null
        });
        const {
          formatMessage: e
        } = (0, k.A)(), t = (0, D.q)(), n = window.innerHeight - T.a4 - T.e4 - T.Et - 64, [c, N] = (0, d.useState)(!0), {
          fetchNextPage: v,
          hasNextPage: F,
          isFetchingNextPage: I,
          isFirstFetch: O
        } = function() {
          const e = (0, x.v)(),
            t = (0, y.Cb)(),
            {
              from: n,
              to: a,
              blockchains: o,
              nextToken: l
            } = (() => {
              const {
                tx: e,
                wallet: t
              } = s.M_.getState();
              return (0, d.useMemo)(() => {
                var n, a, o;
                return null != (o = null == (a = null == (n = e.fetchedAllChainsTransactionPeriodsByAccount) ? void 0 : n[t.walletId]) ? void 0 : a[t.selectedAccountId]) ? o : {}
              }, [e.fetchedAllChainsTransactionPeriodsByAccount, t.walletId, t.selectedAccountId])
            })(),
            i = (0, m.n)(!0),
            c = (0, f.jE)(),
            [D, T] = (0, d.useState)(new Date),
            [p, k] = (0, d.useState)((0, b.t6)(new Date, 29)),
            [N, v] = (0, d.useState)(!1),
            [F, I] = (0, d.useState)(!1),
            [O, M] = (0, d.useState)(l),
            [j, q] = (0, d.useState)([]),
            [A, W] = (0, d.useState)(!0),
            C = (0, d.useRef)(0),
            H = (0, d.useMemo)(() => i.filter(e => !j.includes(e.id)), [i, j]),
            K = (0, d.useCallback)(() => {
              !n || !a || !A || new Date(p) > new Date(n) && P(null, null, function*() {
                yield w.YW.emit(h.A.FETCH_ALL_CHAINS_MISSING_TRANSACTIONS, {
                  from: D,
                  to: n,
                  blockchains: H
                }), T(new Date(a)), k((0, b.t6)(new Date(a), 29)), v(!0)
              })
            }, [n, a, D, p]),
            L = (0, d.useCallback)(e => {
              A && P(null, null, function*() {
                yield w.YW.emit(h.A.FETCH_ALL_CHAINS_MISSING_TRANSACTIONS, {
                  from: new Date(n),
                  to: new Date(a),
                  blockchains: e
                })
              })
            }, []),
            R = (n, a, o) => {
              M(o), s.M_.dispatch(r.B.actions.updateAllChainsCachedTransactionsPeriod({
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
              queryFn: l => P(null, [l], function*({
                pageParam: l
              }) {
                C.current++;
                const {
                  transactions: c,
                  nextToken: f,
                  unsupportedChains: u
                } = yield w.YW.emit(h.A.FETCH_ASSETS_TRANSACTION_HISTORY, {
                  from: l.from,
                  to: l.to,
                  nextToken: l.nextToken,
                  blockchains: H
                });
                let d = l.from,
                  g = l.to,
                  x = f;
                if (c?.length && s.M_.dispatch(r.B.actions.updateTxs({
                    items: c,
                    walletId: e,
                    accountId: t
                  })), u?.length && (q(u), o?.length)) {
                  const e = i.filter(e => !u.includes(e.id)).filter(e => !o.includes(e.id));
                  e.length > 0 && L(e)
                }
                return n || R(D.toISOString(), p.toISOString()), l.from > new Date(n) && new Date(n) > p && (R(D.toISOString(), a, O), d = (0, b.t6)(new Date(a), -29), g = new Date(a), x = void 0), (l.to < new Date(a) || new Date(a).getTime() === l.to.getTime() && x !== O) && R(n, p.toISOString(), x), N && v(!1), T(d), k(g), I(!c?.length), K(), {
                  transactions: c,
                  from: d,
                  to: g,
                  nextToken: x
                }
              }),
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 3e5,
              gcTime: 864e5,
              enabled: A,
              initialPageParam: {
                from: D,
                to: p,
                nextToken: void 0
              },
              getNextPageParam: e => {
                var t;
                if (p > g.Qp && null !== e) return N ? {
                  from: D,
                  to: p,
                  nextToken: O
                } : e.nextToken || O ? {
                  nextToken: null != (t = e.nextToken) ? t : O,
                  from: D,
                  to: p
                } : {
                  from: new Date(e.to.getTime()),
                  to: (0, b.t6)(e.to, 29)
                }
              }
            });
          return (0, d.useEffect)(() => {
            F && C.current > 1 && p > g.Qp && z(), I(!1)
          }, [F]), (0, d.useEffect)(() => () => {
            c.removeQueries(), W(!1)
          }, []), {
            fetchNextPage: z,
            hasNextPage: B,
            isFetchingNextPage: E,
            isFirstFetch: 2 > C.current
          }
        }();
        return (0, d.useEffect)(() => {
          (Object.keys(t).length || !O) && N(!1)
        }, [t]), (0, a.jsxs)(T.LN, {
          children: [(0, a.jsx)(T.zY, {
            title: e({
              id: "history-list.title"
            })
          }), (0, a.jsx)(T.Gv, {
            children: (0, a.jsx)(p.A, {
              dataLength: Object.values(t).flat().length,
              next: v,
              height: n,
              className: "tw-scrollbar",
              hasMore: !!F,
              loader: null,
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: (0, a.jsx)(o.D, {
                transactions: t,
                scrollableAreaHeight: n,
                loadMoreItems: v,
                fetchingTransactions: I || c,
                hasNextPage: F,
                historyAvailable: !0
              })
            })
          })]
        })
      })
    }
  }
]);
