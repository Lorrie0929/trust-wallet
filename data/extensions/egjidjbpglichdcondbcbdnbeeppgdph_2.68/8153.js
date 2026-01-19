"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8153], {
    2496: (e, t, n) => {
      n.d(t, {
        D: () => A
      });
      var r = n(74848),
        a = n(9302),
        s = n(25708),
        i = n(52114),
        o = n(1279),
        c = n(66392),
        l = n(40053),
        d = n(6442);
      const u = ({
        type: e,
        from: t,
        to: n,
        symbol: a
      }) => {
        const {
          formatMessage: s
        } = (0, d.A)(), u = (0, l.p)({
          value: t ?? "",
          maxCharsPerSide: 7
        }), h = (0, l.p)({
          value: n ?? "",
          maxCharsPerSide: 7
        });
        let m;
        switch (e) {
          case c.w.Receive:
          case c.w.Claim:
          case c.w.ClaimRewards:
          case c.w.Undelegate:
            m = `${s({id:"generic.from"})}: ${u}`;
            break;
          case c.w.Send:
          case c.w.Delegate:
          case c.w.Redelegate:
          case c.w.Compound:
          case c.w.Approve:
          case c.w.Revoke:
            m = `${s({id:"generic.to"})}: ${h}`;
            break;
          case c.w.Swap:
            m = `${s({id:"generic.to"})}: ${a}`;
            break;
          default:
            return null
        }
        return (0, r.jsx)(i.E, {
          testid: "tx-item-subtitle",
          type: o.jK.BODY_14,
          theme: o.Il.UTILITY_1_OPACITY_1,
          children: m
        })
      };
      var h = n(26264),
        m = n(96540),
        f = n(20413),
        g = n(94893),
        v = n(65504),
        p = n(68632),
        x = n(19376),
        w = n(73241),
        y = n(69254),
        b = n(21094),
        C = n(57379),
        N = n(47767);
      const P = ({
        transaction: e
      }) => {
        const {
          formatMessage: t
        } = (0, d.A)(), n = (0, N.Zp)(), a = (0, m.useMemo)(() => ["merlin", "internet_computer", "blast", "scroll", "bouncebit"], []), {
          id: l,
          status: P,
          type: k,
          from: $,
          to: D,
          symbol: F,
          nft: M,
          amount: T,
          fee: I,
          isUnlimited: H
        } = (0, f.A)(e), R = k === c.w.Receive || k === c.w.ClaimRewards || k === c.w.Claim || k === c.w.Undelegate, A = (0, C.I)(k), O = Array.isArray(D) && D.length > 0 && void 0 !== D[0].id ? D[0].id : D, S = (0, m.useMemo)(() => k === c.w.Revoke ? "0" : A || R || k === c.w.Contract && parseFloat(T) > 0 || k === c.w.Approve && parseFloat(T) > 0 ? T : I[0] || "0", [A, I, T, k]), j = k === c.w.Approve && H || k === c.w.Revoke;
        return (0, r.jsx)(g.c, {
          testid: "tx-item",
          onClick: () => n(`${h.b.TRANSACTION}/${encodeURIComponent(l)}`),
          children: (0, r.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [(0, r.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [(0, r.jsx)("div", {
                className: "flex w-9 h-9 justify-center items-center",
                children: (0, r.jsx)(s.A, {
                  status: P,
                  type: k
                })
              }), (0, r.jsxs)("div", {
                className: "flex flex-col space-y-1",
                children: [(0, r.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, r.jsx)(i.E, {
                    testid: "tx-type",
                    children: t({
                      id: "component.transaction-item.type." + k
                    })
                  }), "confirmed" !== P && (!a.includes(e.blockchain.id) || "pending" === P) && (0, r.jsx)(x.v, {
                    testid: "tx-status",
                    size: w.V.SMALL,
                    theme: "pending" === P ? w.x.WARNING : w.x.ERROR,
                    children: t({
                      id: "component.transaction-item.status." + P
                    })
                  })]
                }), ("string" == typeof O || "string" == typeof $) && (0, r.jsx)(u, {
                  type: k,
                  from: $,
                  to: O,
                  symbol: F
                })]
              })]
            }), (0, r.jsx)("div", {
              children: M ? (0, r.jsx)(v.q, {
                size: p.Y.LARGE,
                src: M.previewImage.url,
                name: M.name,
                network: M.blockchain
              }) : (0, r.jsx)(y.h, {
                testid: "tx-amount",
                amountType: b.Cu.CRYPTO,
                value: S,
                currency: F,
                theme: "0" === S ? o.Il.UTILITY_1_DEFAULT : R ? o.Il.SUCCESS_1_DEFAULT : o.Il.UTILITY_1_DEFAULT,
                prefix: "0" === S || k === c.w.Approve || k === c.w.Revoke ? "" : R ? "+" : "-",
                tinyThreshold: 6,
                maxSignificantDecimals: 6,
                shouldHideAmount: j
              })
            })]
          })
        })
      };
      var k = n(26858),
        $ = n(36322),
        D = n(65512),
        F = n(52619),
        M = n(8168),
        T = n(21612),
        I = n(29584),
        H = n(11717),
        R = n(38921);
      const A = ({
        transactions: e,
        children: t,
        loadMoreItems: n,
        hasNextPage: s,
        historyAvailable: c,
        fetchingStarted: l,
        fetchingTransactions: u,
        scrollableAreaHeight: f,
        asset: g
      }) => {
        var v, p;
        const {
          formatMessage: x
        } = (0, d.A)(), w = (0, T.s)(), y = (0, N.Zp)(), b = (e => {
          if (!e) return !1;
          const t = (0, k.Mr)(e),
            n = (0, $.f)(e);
          return t?.isBuyCryptoEnabled && !n
        })(null != (v = g?.assetId) ? v : ""), C = (0, H.w)(null != (p = g?.assetId) ? p : ""), A = (0, R.G)(g), O = (0, m.useRef)(null), S = (0, m.useMemo)(() => {
          var e, t;
          const n = f < (null != (t = null == (e = O.current) ? void 0 : e.offsetHeight) ? t : 0);
          return c && !n && s || l && u
        }, [c, Object.values(e).length, s]), j = Object.keys(e).length > 0;
        return (0, r.jsxs)("div", {
          className: "flex flex-col w-full space-y-4 mb-3 items-center",
          ref: O,
          children: [t, j && (0, r.jsx)("div", {
            className: "flex flex-col w-full space-y-4",
            children: Object.entries(e).map(([e, t]) => (0, r.jsx)(M.b, {
              title: e,
              children: t.map(e => (0, r.jsx)(P, {
                transaction: e
              }, e.hash))
            }, e))
          }), !j && !u && (0, r.jsxs)("div", {
            className: "flex flex-col space-y-4 items-center w-[310px]",
            children: [(0, r.jsx)(a.x, {}), (0, r.jsx)("div", {
              className: "text-center px-6",
              children: (0, r.jsx)(i.E, {
                type: o.jK.BODY_14,
                theme: o.Il.UTILITY_1_OPACITY_1,
                children: x({
                  id: "history-list.no-transactions-found",
                  defaultMessage: "Your crypto transactions will appear here once you start using wallet."
                })
              })
            }), b || C && (0, r.jsx)(D.$, {
              testid: "show-more-btn",
              onClick: b ? () => {
                var e;
                w(`${h.b.BUY}/${null!=(e=g?.assetId)?e:""}`)
              } : () => {
                y(A, {
                  state: {
                    pageViewSource: I.Un.ASSET
                  }
                })
              },
              shape: F.dB.DEFAULT,
              theme: F.ry.PRIMARY,
              children: x({
                id: `history-list.${b?"buy":"swap"}-crypto`,
                defaultMessage: b ? "Buy Crypto" : "Swap Crypto"
              })
            })]
          }), S && (0, r.jsx)(D.$, {
            testid: "show-more-btn",
            onClick: n,
            shape: F.dB.DEFAULT,
            size: F.Vp.SMALL,
            theme: F.ry.SUBTLE,
            fullWidth: !1,
            loading: u,
            loadingData: x({
              id: "generic.loading",
              defaultMessage: "Loading"
            }),
            children: x({
              id: "history-list.load-more"
            })
          })]
        })
      }
    },
    6475: (e, t, n) => {
      n.d(t, {
        q: () => o
      });
      var r = n(1651),
        a = n(58959),
        s = class extends r.$ {
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
              state: n
            } = e, r = super.createResult(e, t), {
              isFetching: s,
              isRefetching: i,
              isError: o,
              isRefetchError: c
            } = r, l = n.fetchMeta?.fetchMore?.direction, d = o && "forward" === l, u = s && "forward" === l, h = o && "backward" === l, m = s && "backward" === l;
            return {
              ...r,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, a.rB)(t, n.data),
              hasPreviousPage: (0, a.RQ)(t, n.data),
              isFetchNextPageError: d,
              isFetchingNextPage: u,
              isFetchPreviousPageError: h,
              isFetchingPreviousPage: m,
              isRefetchError: c && !d && !h,
              isRefetching: i && !u && !m
            }
          }
        },
        i = n(44171);

      function o(e, t) {
        return (0, i.t)(e, s, t)
      }
    },
    8168: (e, t, n) => {
      n.d(t, {
        b: () => i
      });
      var r = n(74848),
        a = n(52114),
        s = n(1279);
      const i = ({
        title: e,
        children: t
      }) => (0, r.jsxs)("div", {
        className: "my-2 flex flex-col space-y-4 pb-2",
        children: [e && (0, r.jsx)(a.E, {
          theme: s.Il.THIRD,
          testid: "category-title",
          children: e
        }), t]
      })
    },
    11717: (e, t, n) => {
      n.d(t, {
        w: () => i
      });
      var r = n(26858),
        a = n(33055),
        s = n(29251);

      function i(e) {
        const t = (0, r.Mr)(e),
          n = (0, a.A)();
        return (t?.isSwapEnabled || t?.isSwapCrossChainEnabled) && n?.type !== s.S.HARDWARE
      }
    },
    20413: (e, t, n) => {
      n.d(t, {
        A: () => l
      });
      var r = n(26858),
        a = n(40790),
        s = n(96540),
        i = (n.n(s), n(44657)),
        o = n(79941),
        c = n(34476);
      const l = e => {
        const t = (0, c.m)(e.blockchain.id),
          n = (0, a.F7)(t.coinId),
          l = t.isCustom ? (0, r.dJ)(t, e.assetId) : (0, r.Mr)(e.assetId);
        return (0, s.useMemo)(() => {
          var r, a;
          const s = {
            id: e.hash,
            from: e.events[0].metadata.from,
            to: e.events[0].metadata.to,
            type: e.events[0].type,
            status: e.status,
            symbol: null != (r = l?.symbol) ? r : t.symbol,
            fee: e.fee,
            date: e.createdAt,
            amount: (0, o.ct)(e, l)
          };
          if ((0, o.fO)(e.events)) {
            if (!n) return s.type = i.wL.Send, s.amount = Math.abs(+s.amount).toString(), s;
            const t = n.address,
              {
                from: r,
                to: a
              } = e.events[0].metadata,
              o = r === t ? a : r;
            parseFloat(s.amount) > 0 ? (s.type = i.wL.Receive, s.from = o, s.to = t) : (s.type = i.wL.Send, s.from = t, s.to = o, s.amount = Math.abs(+s.amount).toString())
          }
          return (0, o.x0)(e.events) && (s.input = e.events[0].metadata.input), (0, o.m5)(e.events) && (s.isUnlimited = e.events[0].metadata.isUnlimited), e.nft && (s.nft = {
            onChainId: e.nft.onChainId,
            previewImage: e.nft.previewImageURL,
            originalImage: e.nft.originalMediaURL,
            name: e.nft.name,
            collectionName: e.nft.collectionName,
            collectionId: e.nft.collectionId,
            blockchain: {
              iconUrl: t.iconUrl,
              name: null != (a = t.displayName) ? a : t.name
            }
          }), s
        }, [JSON.stringify(e)])
      }
    },
    25708: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var r = n(74848),
        a = n(64720),
        s = n(93077),
        i = n(88774),
        o = n(30081),
        c = n(68632),
        l = n(79830),
        d = n(66392),
        u = n(96159),
        h = n(54290);
      const m = ({
        status: e,
        type: t
      }) => {
        if ("pending" === e) return (0, r.jsx)(l.y, {
          size: c.Y.SMALL
        });
        let n;
        switch (t) {
          case d.w.Contract:
          case d.w.RegisterToken:
          case d.w.TrustLine:
          case d.w.Approve:
          case d.w.Revoke:
            n = (0, r.jsx)(o.p, {
              width: 24,
              height: 24,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Receive:
            n = (0, r.jsx)(s.Z, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Send:
            n = (0, r.jsx)(h.s, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Swap:
          case d.w.Trade:
            n = (0, r.jsx)(u.f, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          case d.w.Delegate:
          case d.w.Undelegate:
          case d.w.Redelegate:
          case d.w.Claim:
          case d.w.ClaimRewards:
            n = (0, r.jsx)(a.S, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            });
            break;
          default:
            n = (0, r.jsx)(i.S, {
              width: 20,
              height: 20,
              colorClass: "text-iconNormal"
            })
        }
        return (0, r.jsx)("div", {
          className: "flex w-full justify-center items-center h-full bg-bg3 rounded-full",
          children: n
        })
      }
    },
    30081: (e, t, n) => {
      n.d(t, {
        p: () => a
      });
      var r = n(74848);
      const a = ({
        width: e,
        height: t,
        colorClass: n
      }) => (0, r.jsx)("svg", {
        className: n,
        fill: "none",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.0561 2.62763C4.45795 2.22576 5.00301 2 5.57132 2H14.857C15.0465 2 15.2282 2.07525 15.3621 2.20921L20.3622 7.20921C20.496 7.34316 20.5713 7.52484 20.5713 7.71429V19.8571C20.5713 20.4254 20.3456 20.9706 19.9438 21.3724C19.5419 21.7743 18.9968 22 18.4285 22H5.57132C5.003 22 4.45795 21.7743 4.0561 21.3724C3.65424 20.9706 3.42847 20.4254 3.42847 19.8571V4.14286C3.42847 3.57454 3.65424 3.02949 4.0561 2.62763ZM8.42847 7.53571C7.93535 7.53571 7.53561 7.93546 7.53561 8.42857C7.53561 8.92169 7.93535 9.32143 8.42847 9.32143H11.2856C11.7787 9.32143 12.1785 8.92169 12.1785 8.42857C12.1785 7.93546 11.7787 7.53571 11.2856 7.53571H8.42847ZM8.42847 11.8214C7.93535 11.8214 7.53561 12.2212 7.53561 12.7143C7.53561 13.2074 7.93535 13.6071 8.42847 13.6071H15.5713C16.0644 13.6071 16.4642 13.2074 16.4642 12.7143C16.4642 12.2212 16.0644 11.8214 15.5713 11.8214H8.42847ZM7.53561 17C7.53561 16.5069 7.93535 16.1071 8.42847 16.1071H15.5713C16.0644 16.1071 16.4642 16.5069 16.4642 17C16.4642 17.4931 16.0644 17.8929 15.5713 17.8929H8.42847C7.93535 17.8929 7.53561 17.4931 7.53561 17Z",
          fill: "currentColor"
        })
      })
    },
    34476: (e, t, n) => {
      n.d(t, {
        m: () => i
      });
      var r = n(96540),
        a = (n.n(r), n(10537)),
        s = n(15078);

      function i(e) {
        const t = (0, a.n)(),
          n = (0, s.I)();
        return (0, r.useMemo)(() => {
          var r;
          return null != (r = t[e]) ? r : n[e]
        }, [e, t, n])
      }
    },
    36322: (e, t, n) => {
      n.d(t, {
        f: () => s
      });
      var r = n(92257),
        a = n(79372);

      function s(e) {
        return "GB" === (0, r.F)() && !a.uV.includes(e)
      }
    },
    38921: (e, t, n) => {
      n.d(t, {
        G: () => a
      });
      var r = n(26264);

      function a(e) {
        return e ? e.defaultSwapPair ? `${r.b.SWAP}?from=${e.defaultSwapPair.fromAsset}&to=${e.defaultSwapPair.toAsset}` : e.defaultSwapCrossChainPair ? `${r.b.SWAP}?from=${e.defaultSwapCrossChainPair.fromAsset}&to=${e.defaultSwapCrossChainPair.toAsset}` : `${r.b.SWAP}?from=${e.assetId}` : r.b.SWAP
      }
    },
    45871: (e, t, n) => {
      n.d(t, {
        x: () => s
      });
      var r = n(68157),
        a = n(96540);
      n.n(a);
      const s = () => {
        var e;
        const t = null != (e = (0, r.GV)(e => {
          var t;
          return null == (t = e.tx.itemsPerWalletAccount[e.wallet.walletId]) ? void 0 : t[e.wallet.selectedAccountId]
        })) ? e : [];
        return (0, a.useMemo)(() => (t.sort((e, t) => t.createdAt - e.createdAt), t), [t])
      }
    },
    54894: (e, t, n) => {
      n.d(t, {
        d: () => s
      });
      var r = n(68157),
        a = n(96540);
      n.n(a);
      const s = e => {
        const {
          tx: t,
          wallet: n
        } = r.M_.getState();
        return (0, a.useMemo)(() => {
          var r, a, s, i;
          return null != (i = null == (s = null == (a = null == (r = t.fetchedTransactionPeriodsByAccount) ? void 0 : r[n.walletId]) ? void 0 : a[n.selectedAccountId]) ? void 0 : s[e]) ? i : {}
        }, [t.fetchedTransactionPeriodsByAccount, n.walletId, n.selectedAccountId, e])
      }
    },
    62266: (e, t, n) => {
      n.d(t, {
        Qp: () => p,
        Tl: () => x
      });
      var r = n(54894),
        a = n(64145),
        s = n(22670),
        i = n(68157),
        o = n(52856),
        c = n(9389),
        l = n(33055),
        d = n(85005),
        u = n(97665),
        h = n(6475),
        m = n(96540),
        f = (n.n(m), (e, t, n) => new Promise((r, a) => {
          var s = e => {
              try {
                o(n.next(e))
              } catch (e) {
                a(e)
              }
            },
            i = e => {
              try {
                o(n.throw(e))
              } catch (e) {
                a(e)
              }
            },
            o = e => e.done ? r(e.value) : Promise.resolve(e.value).then(s, i);
          o((n = n.apply(e, t)).next())
        }));
      const g = 1,
        v = 6,
        p = new Date("01/03/2009");

      function x(e, t, n) {
        const [x, w] = (0, m.useState)(new Date), [y, b] = (0, m.useState)((0, d.NW)(new Date, g)), [C, N] = (0, m.useState)(!1), P = (0, l.v)(), k = (0, c.Cb)(), {
          from: $,
          to: D,
          nextToken: F
        } = (0, r.d)(e.assetId), M = (0, m.useRef)(void 0), [T, I] = (0, m.useState)(!1), [H, R] = (0, m.useState)(!1), A = (0, u.jE)();
        (0, m.useEffect)(() => {
          p >= y && I(!1)
        }, [y]);
        const O = (0, m.useCallback)(() => {
            !$ || !D || new Date($).getTime() < y.getTime() && f(null, null, function*() {
              yield a.YW.emit(s.A.FETCH_MISSING_TRANSACTIONS, {
                from: x,
                to: $,
                asset: e,
                blockchain: t,
                accountAddress: n,
                limit: 50
              })
            })
          }, [$, D, x, y]),
          S = (t, n, r) => {
            i.M_.dispatch(o.B.actions.updateCachedTransactionsPeriod({
              selectedWalletId: P,
              accountId: k,
              assetId: e.assetId,
              from: t,
              to: n,
              nextToken: r
            }))
          },
          {
            data: j,
            hasNextPage: E,
            isFetching: q,
            status: z,
            fetchNextPage: U
          } = (0, h.q)({
            queryKey: ["transactions", e.assetId],
            queryFn: r => f(null, [r], function*({
              pageParam: r
            }) {
              if (M.current || r.from < p) return I(!1), null;
              const c = {
                  asset: e,
                  blockchain: t,
                  accountAddress: n,
                  from: r.from.toISOString(),
                  to: r.to.toISOString(),
                  limit: 50,
                  nextToken: r.nextToken
                },
                {
                  transactions: l,
                  chainUnsupported: u,
                  emptyPeriodFetched: h,
                  nextToken: m
                } = yield a.YW.emit(s.A.FETCH_ASSET_TRANSACTION_HISTORY, c);
              let f = r.from,
                g = r.to,
                C = m;
              return u ? (M.current = !0, I(!1), {}) : (l?.length && i.M_.dispatch(o.B.actions.updateTxs({
                items: l,
                walletId: P,
                accountId: k
              })), $ || S(x.toUTCString(), y.toUTCString()), r.from > new Date($) && new Date($) > y && (S(c.from, D, F), f = (0, d.NW)(new Date(D), -v), g = new Date(D), C = void 0), r.to < new Date(D) && S($, c.to, r.nextToken), w(f), b(g), N(!!h), H || O(), {
                from: f,
                to: g,
                nextToken: C
              })
            }),
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            staleTime: 3e5,
            gcTime: 864e5,
            initialPageParam: {
              to: y,
              from: x,
              nextToken: void 0
            },
            getNextPageParam: e => {
              var t;
              if (y > p && null !== e) return e.nextToken || F || !e.from ? {
                nextToken: null != (t = e.nextToken) ? t : F,
                from: x,
                to: y
              } : {
                from: new Date(e.to.getTime()),
                to: (0, d.NW)(e.to, v)
              }
            }
          }),
          W = (0, m.useMemo)(() => {
            var e;
            if (null != (e = j?.pages[0]) && e.from) return y.getTime()
          }, [z, y, j]);
        return (0, m.useEffect)(() => {
          C && y > p && (U(), N(!1))
        }, [C]), (0, m.useEffect)(() => () => {
          A.removeQueries(), R(!0)
        }, []), {
          isFetching: q,
          transactionsFetched: T,
          hasNextPage: E,
          lastFetchedTransactionTime: W,
          emptyPeriodFetched: C,
          fetchNextPage: U
        }
      }
    },
    69325: (e, t, n) => {
      n.d(t, {
        q: () => o
      });
      var r = n(66392),
        a = n(45871),
        s = n(96540),
        i = n(6442);
      const o = (e, t) => {
        const {
          locale: n
        } = (0, i.A)(), o = (0, a.x)();
        return (0, s.useMemo)(() => {
          const a = (e && t ? o.filter(n => {
              const a = n.events.some(e => function(e) {
                return e === r.w.Trade || e === r.w.Inscribe || e === r.w.Send || e === r.w.Delegate || e === r.w.Undelegate || e === r.w.ClaimRewards || e === r.w.Claim || e === r.w.Compound || e === r.w.Redelegate || e === r.w.Utxo || e === r.w.Contract || e === r.w.Receive || e === r.w.Revoke || e === r.w.Approve
              }(e.type) || "swap" === e.type) && n.blockchain.id === e.id && n.assetId === t.assetId;
              return n.events.some(e => "contract" === e.type) ? a : a && !n.events.some(e => !e.metadata.to)
            }) : o).filter(e => e.events.some(e => void 0 !== e.type)),
            s = {};
          for (const e of a) {
            const t = new Date(e.createdAt),
              r = `${t.toLocaleDateString(n,{month:"short"})} ${t.getDate()}, ${t.getFullYear()}`;
            s[r] || (s[r] = []), s[r].push(e)
          }
          return s
        }, [t?.address, e?.chainId, e?.id, o])
      }
    },
    85005: (e, t, n) => {
      function r(e, t) {
        const n = new Date(e.getTime());
        return n.setMonth(n.getMonth() - t), n
      }

      function a(e, t) {
        const n = new Date(e.getTime());
        return n.setDate(n.getDate() - t), n
      }
      n.d(t, {
        NW: () => r,
        t6: () => a
      }), n(15192)
    }
  }
]);
