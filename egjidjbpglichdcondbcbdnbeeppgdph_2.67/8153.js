try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.o = e.o || {}, e.o[t] = "06556d98-3107-4e79-bde3-4400ce3c3f37", e.i = "sentry-dbid-06556d98-3107-4e79-bde3-4400ce3c3f37")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8153], {
    2496: (e, t, n) => {
      n.d(t, {
        D: () => A
      });
      var r = n(74848),
        a = n(9302),
        s = n(25708),
        o = n(52114),
        i = n(1279),
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
        let f;
        switch (e) {
          case c.w.Receive:
          case c.w.Claim:
          case c.w.ClaimRewards:
          case c.w.Undelegate:
            f = `${s({id:"generic.from"})}: ${u}`;
            break;
          case c.w.Send:
          case c.w.Delegate:
          case c.w.Redelegate:
          case c.w.Compound:
          case c.w.Approve:
          case c.w.Revoke:
            f = `${s({id:"generic.to"})}: ${h}`;
            break;
          case c.w.Swap:
            f = `${s({id:"generic.to"})}: ${a}`;
            break;
          default:
            return null
        }
        return (0, r.jsx)(o.E, {
          testid: "tx-item-subtitle",
          type: i.jK.BODY_14,
          theme: i.Il.UTILITY_1_OPACITY_1,
          children: f
        })
      };
      var h = n(26264),
        f = n(96540),
        m = n(20413),
        g = n(94893),
        p = n(65504),
        v = n(68632),
        w = n(19376),
        y = n(73241),
        x = n(69254),
        b = n(21094),
        C = n(57379),
        N = n(47767);
      const P = ({
        transaction: e
      }) => {
        const {
          formatMessage: t
        } = (0, d.A)(), n = (0, N.Zp)(), a = (0, f.useMemo)(() => ["merlin", "internet_computer", "blast", "scroll", "bouncebit"], []), {
          id: l,
          status: P,
          type: k,
          from: $,
          to: T,
          symbol: D,
          nft: F,
          amount: M,
          fee: I,
          isUnlimited: H
        } = (0, m.A)(e), R = k === c.w.Receive || k === c.w.ClaimRewards || k === c.w.Claim || k === c.w.Undelegate, A = (0, C.I)(k), O = Array.isArray(T) && T.length > 0 && void 0 !== T[0].id ? T[0].id : T, S = (0, f.useMemo)(() => k === c.w.Revoke ? "0" : A || R || k === c.w.Contract && parseFloat(M) > 0 || k === c.w.Approve && parseFloat(M) > 0 ? M : I[0] || "0", [A, I, M, k]), j = k === c.w.Approve && H || k === c.w.Revoke;
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
                  children: [(0, r.jsx)(o.E, {
                    testid: "tx-type",
                    children: t({
                      id: "component.transaction-item.type." + k
                    })
                  }), "confirmed" !== P && (!a.includes(e.blockchain.id) || "pending" === P) && (0, r.jsx)(w.v, {
                    testid: "tx-status",
                    size: y.V.SMALL,
                    theme: "pending" === P ? y.x.WARNING : y.x.ERROR,
                    children: t({
                      id: "component.transaction-item.status." + P
                    })
                  })]
                }), ("string" == typeof O || "string" == typeof $) && (0, r.jsx)(u, {
                  type: k,
                  from: $,
                  to: O,
                  symbol: D
                })]
              })]
            }), (0, r.jsx)("div", {
              children: F ? (0, r.jsx)(p.q, {
                size: v.Y.LARGE,
                src: F.previewImage.url,
                name: F.name,
                network: F.blockchain
              }) : (0, r.jsx)(x.h, {
                testid: "tx-amount",
                amountType: b.Cu.CRYPTO,
                value: S,
                currency: D,
                theme: "0" === S ? i.Il.UTILITY_1_DEFAULT : R ? i.Il.SUCCESS_1_DEFAULT : i.Il.UTILITY_1_DEFAULT,
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
        T = n(65512),
        D = n(52619),
        F = n(8168),
        M = n(21612),
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
        scrollableAreaHeight: m,
        asset: g
      }) => {
        var p, v;
        const {
          formatMessage: w
        } = (0, d.A)(), y = (0, M.s)(), x = (0, N.Zp)(), b = (e => {
          if (!e) return !1;
          const t = (0, k.Mr)(e),
            n = (0, $.f)(e);
          return t?.isBuyCryptoEnabled && !n
        })(null != (p = g?.assetId) ? p : ""), C = (0, H.w)(null != (v = g?.assetId) ? v : ""), A = (0, R.G)(g), O = (0, f.useRef)(null), S = (0, f.useMemo)(() => {
          var e, t;
          const n = m < (null != (t = null == (e = O.current) ? void 0 : e.offsetHeight) ? t : 0);
          return c && !n && s || l && u
        }, [c, Object.values(e).length, s]), j = Object.keys(e).length > 0;
        return (0, r.jsxs)("div", {
          className: "flex flex-col w-full space-y-4 mb-3 items-center",
          ref: O,
          children: [t, j && (0, r.jsx)("div", {
            className: "flex flex-col w-full space-y-4",
            children: Object.entries(e).map(([e, t]) => (0, r.jsx)(F.b, {
              title: e,
              children: t.map(e => (0, r.jsx)(P, {
                transaction: e
              }, e.hash))
            }, e))
          }), !j && !u && (0, r.jsxs)("div", {
            className: "flex flex-col space-y-4 items-center w-[310px]",
            children: [(0, r.jsx)(a.x, {}), (0, r.jsx)("div", {
              className: "text-center px-6",
              children: (0, r.jsx)(o.E, {
                type: i.jK.BODY_14,
                theme: i.Il.UTILITY_1_OPACITY_1,
                children: w({
                  id: "history-list.no-transactions-found",
                  defaultMessage: "Your crypto transactions will appear here once you start using wallet."
                })
              })
            }), b || C && (0, r.jsx)(T.$, {
              testid: "show-more-btn",
              onClick: b ? () => {
                var e;
                y(`${h.b.BUY}/${null!=(e=g?.assetId)?e:""}`)
              } : () => {
                x(A, {
                  state: {
                    pageViewSource: I.Un.ASSET
                  }
                })
              },
              shape: D.dB.DEFAULT,
              theme: D.ry.PRIMARY,
              children: w({
                id: `history-list.${b?"buy":"swap"}-crypto`,
                defaultMessage: b ? "Buy Crypto" : "Swap Crypto"
              })
            })]
          }), S && (0, r.jsx)(T.$, {
            testid: "show-more-btn",
            onClick: n,
            shape: D.dB.DEFAULT,
            size: D.Vp.SMALL,
            theme: D.ry.SUBTLE,
            fullWidth: !1,
            loading: u,
            loadingData: w({
              id: "generic.loading",
              defaultMessage: "Loading"
            }),
            children: w({
              id: "history-list.load-more"
            })
          })]
        })
      }
    },
    6475: (e, t, n) => {
      n.d(t, {
        q: () => i
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
              isRefetching: o,
              isError: i,
              isRefetchError: c
            } = r, l = n.fetchMeta?.fetchMore?.direction, d = i && "forward" === l, u = s && "forward" === l, h = i && "backward" === l, f = s && "backward" === l;
            return {
              ...r,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, a.rB)(t, n.data),
              hasPreviousPage: (0, a.RQ)(t, n.data),
              isFetchNextPageError: d,
              isFetchingNextPage: u,
              isFetchPreviousPageError: h,
              isFetchingPreviousPage: f,
              isRefetchError: c && !d && !h,
              isRefetching: o && !u && !f
            }
          }
        },
        o = n(44171);

      function i(e, t) {
        return (0, o.t)(e, s, t)
      }
    },
    8168: (e, t, n) => {
      n.d(t, {
        b: () => o
      });
      var r = n(74848),
        a = n(52114),
        s = n(1279);
      const o = ({
        title: e,
        children: t,
        className: n = ""
      }) => (0, r.jsxs)("div", {
        className: "my-2 flex flex-col space-y-4 pb-2 " + n,
        children: [e && (0, r.jsx)(a.E, {
          theme: s.Il.THIRD,
          testid: "category-title",
          children: e
        }), t]
      })
    },
    11717: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var r = n(26858),
        a = n(33055),
        s = n(29251);

      function o(e) {
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
        o = n(44657),
        i = n(79941),
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
            amount: (0, i.ct)(e, l)
          };
          if ((0, i.fO)(e.events)) {
            if (!n) return s.type = o.wL.Send, s.amount = Math.abs(+s.amount).toString(), s;
            const t = n.address,
              {
                from: r,
                to: a
              } = e.events[0].metadata,
              i = r === t ? a : r;
            parseFloat(s.amount) > 0 ? (s.type = o.wL.Receive, s.from = i, s.to = t) : (s.type = o.wL.Send, s.from = t, s.to = i, s.amount = Math.abs(+s.amount).toString())
          }
          return (0, i.x0)(e.events) && (s.input = e.events[0].metadata.input), (0, i.m5)(e.events) && (s.isUnlimited = e.events[0].metadata.isUnlimited), e.nft && (s.nft = {
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
        A: () => f
      });
      var r = n(74848),
        a = n(64720),
        s = n(93077),
        o = n(88774),
        i = n(30081),
        c = n(68632),
        l = n(79830),
        d = n(66392),
        u = n(96159),
        h = n(54290);
      const f = ({
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
            n = (0, r.jsx)(i.p, {
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
            n = (0, r.jsx)(o.S, {
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
        m: () => o
      });
      var r = n(96540),
        a = n(10537),
        s = n(15078);

      function o(e) {
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
      const s = e => {
        const {
          tx: t,
          wallet: n
        } = r.M_.getState();
        return (0, a.useMemo)(() => {
          var r, a, s, o;
          return null != (o = null == (s = null == (a = null == (r = t.fetchedTransactionPeriodsByAccount) ? void 0 : r[n.walletId]) ? void 0 : a[n.selectedAccountId]) ? void 0 : s[e]) ? o : {}
        }, [t.fetchedTransactionPeriodsByAccount, n.walletId, n.selectedAccountId, e])
      }
    },
    62266: (e, t, n) => {
      n.d(t, {
        Qp: () => v,
        Tl: () => w
      });
      var r = n(54894),
        a = n(64145),
        s = n(22670),
        o = n(68157),
        i = n(52856),
        c = n(9389),
        l = n(33055),
        d = n(85005),
        u = n(97665),
        h = n(6475),
        f = n(96540),
        m = (e, t, n) => new Promise((r, a) => {
          var s = e => {
              try {
                i(n.next(e))
              } catch (e) {
                a(e)
              }
            },
            o = e => {
              try {
                i(n.throw(e))
              } catch (e) {
                a(e)
              }
            },
            i = e => e.done ? r(e.value) : Promise.resolve(e.value).then(s, o);
          i((n = n.apply(e, t)).next())
        });
      const g = 1,
        p = 6,
        v = new Date("01/03/2009");

      function w(e, t, n) {
        const [w, y] = (0, f.useState)(new Date), [x, b] = (0, f.useState)((0, d.NW)(new Date, g)), [C, N] = (0, f.useState)(!1), P = (0, l.v)(), k = (0, c.Cb)(), {
          from: $,
          to: T,
          nextToken: D
        } = (0, r.d)(e.assetId), F = (0, f.useRef)(void 0), [M, I] = (0, f.useState)(!1), [H, R] = (0, f.useState)(!1), A = (0, u.jE)();
        (0, f.useEffect)(() => {
          v >= x && I(!1)
        }, [x]);
        const O = (0, f.useCallback)(() => {
            !$ || !T || new Date($).getTime() < x.getTime() && m(null, null, function*() {
              yield a.YW.emit(s.A.FETCH_MISSING_TRANSACTIONS, {
                from: w,
                to: $,
                asset: e,
                blockchain: t,
                accountAddress: n,
                limit: 50
              })
            })
          }, [$, T, w, x]),
          S = (t, n, r) => {
            o.M_.dispatch(i.B.actions.updateCachedTransactionsPeriod({
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
            queryFn: r => m(null, [r], function*({
              pageParam: r
            }) {
              if (F.current || r.from < v) return I(!1), null;
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
                  nextToken: f
                } = yield a.YW.emit(s.A.FETCH_ASSET_TRANSACTION_HISTORY, c);
              let m = r.from,
                g = r.to,
                C = f;
              return u ? (F.current = !0, I(!1), {}) : (l?.length && o.M_.dispatch(i.B.actions.updateTxs({
                items: l,
                walletId: P,
                accountId: k
              })), $ || S(w.toUTCString(), x.toUTCString()), r.from > new Date($) && new Date($) > x && (S(c.from, T, D), m = (0, d.NW)(new Date(T), -p), g = new Date(T), C = void 0), r.to < new Date(T) && S($, c.to, r.nextToken), y(m), b(g), N(!!h), H || O(), {
                from: m,
                to: g,
                nextToken: C
              })
            }),
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            staleTime: 3e5,
            gcTime: 864e5,
            initialPageParam: {
              to: x,
              from: w,
              nextToken: void 0
            },
            getNextPageParam: e => {
              var t;
              if (x > v && null !== e) return e.nextToken || D || !e.from ? {
                nextToken: null != (t = e.nextToken) ? t : D,
                from: w,
                to: x
              } : {
                from: new Date(e.to.getTime()),
                to: (0, d.NW)(e.to, p)
              }
            }
          }),
          W = (0, f.useMemo)(() => {
            var e;
            if (null != (e = j?.pages[0]) && e.from) return x.getTime()
          }, [z, x, j]);
        return (0, f.useEffect)(() => {
          C && x > v && (U(), N(!1))
        }, [C]), (0, f.useEffect)(() => () => {
          A.removeQueries(), R(!0)
        }, []), {
          isFetching: q,
          transactionsFetched: M,
          hasNextPage: E,
          lastFetchedTransactionTime: W,
          emptyPeriodFetched: C,
          fetchNextPage: U
        }
      }
    },
    69325: (e, t, n) => {
      n.d(t, {
        q: () => i
      });
      var r = n(66392),
        a = n(45871),
        s = n(96540),
        o = n(6442);
      const i = (e, t) => {
        const {
          locale: n
        } = (0, o.A)(), i = (0, a.x)();
        return (0, s.useMemo)(() => {
          const a = (e && t ? i.filter(n => {
              const a = n.events.some(e => function(e) {
                return e === r.w.Trade || e === r.w.Inscribe || e === r.w.Send || e === r.w.Delegate || e === r.w.Undelegate || e === r.w.ClaimRewards || e === r.w.Claim || e === r.w.Compound || e === r.w.Redelegate || e === r.w.Utxo || e === r.w.Contract || e === r.w.Receive || e === r.w.Revoke || e === r.w.Approve
              }(e.type) || "swap" === e.type) && n.blockchain.id === e.id && n.assetId === t.assetId;
              return n.events.some(e => "contract" === e.type) ? a : a && !n.events.some(e => !e.metadata.to)
            }) : i).filter(e => e.events.some(e => void 0 !== e.type)),
            s = {};
          for (const e of a) {
            const t = new Date(e.createdAt),
              r = `${t.toLocaleDateString(n,{month:"short"})} ${t.getDate()}, ${t.getFullYear()}`;
            s[r] || (s[r] = []), s[r].push(e)
          }
          return s
        }, [t?.address, e?.chainId, e?.id, i])
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
