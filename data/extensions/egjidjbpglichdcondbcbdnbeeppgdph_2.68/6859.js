"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [6859], {
    6859: (e, n, t) => {
      t.r(n), t.d(n, {
        default: () => H
      });
      var r = t(74848),
        i = t(20413),
        a = t(17761),
        l = t(74576),
        c = t(90086),
        s = t(57886),
        o = t(31170),
        d = t(52114),
        u = t(1279),
        h = t(6442);
      const v = ({
        status: e
      }) => {
        const {
          formatMessage: n
        } = (0, h.A)();
        switch (e) {
          case "failed":
            return (0, r.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)(d.E, {
                  testid: "tx-status",
                  theme: u.Il.ERROR,
                  children: n({
                    id: "generic.failed"
                  })
                })
              }), (0, r.jsx)("div", {
                className: "text-error",
                children: (0, r.jsx)(o.E, {
                  width: 15,
                  height: 15
                })
              })]
            });
          case "pending":
            return (0, r.jsx)("div", {
              className: "flex items-center space-x-1",
              children: (0, r.jsx)("div", {
                children: (0, r.jsx)(d.E, {
                  testid: "tx-status",
                  theme: u.Il.WARNING,
                  children: n({
                    id: "generic.pending"
                  })
                })
              })
            });
          case "confirmed":
            return (0, r.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)(d.E, {
                  testid: "tx-status",
                  theme: u.Il.SUCCESS,
                  children: n({
                    id: "generic.confirmed"
                  })
                })
              }), (0, r.jsx)("div", {
                className: "text-textBuy",
                children: (0, r.jsx)(s.y, {
                  width: 15,
                  height: 15
                })
              })]
            })
        }
      };
      var m = t(45452),
        f = t(4800),
        g = t(55074),
        p = t(48346),
        b = t(69254),
        y = t(49798),
        x = t(34476),
        w = t(5027),
        T = t(44657),
        k = t(80772),
        N = t(21094),
        I = t(40053),
        C = t(96540);
      const F = ({
        transaction: e,
        asset: n,
        totalTransactionFee: t,
        gasPrice: s
      }) => {
        var o, u, F;
        const {
          formatMessage: $
        } = (0, h.A)(), {
          isAdvancedTransactionDataEnabled: A
        } = (0, w.j)(), D = (0, x.m)(e.blockchain.id), {
          from: E,
          to: M,
          type: O,
          input: j,
          amount: P,
          isUnlimited: S
        } = (0, i.A)(e), U = (0, C.useMemo)(() => e.feeIs7702 && "pending" === e.status, [e]), z = (0, C.useMemo)(() => {
          var n;
          return e.feeIs7702 && null != (n = e.initialHash) ? n : e.hash
        }, [e]);
        return (0, r.jsxs)(f.LO, {
          children: [(0, r.jsx)(g.F, {
            label: $({
              id: "generic.status"
            }),
            children: (0, r.jsx)(v, {
              status: e.status
            })
          }), (0, r.jsx)(g.F, {
            label: $({
              id: "generic.time"
            }),
            children: (0, r.jsx)(y.X, {
              value: e.createdAt
            })
          }), e.nft && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.F, {
              label: $({
                id: "generic.collection"
              }),
              children: (0, r.jsx)(d.E, {
                children: e.nft.collectionName
              })
            }), (0, r.jsx)(g.F, {
              label: $({
                id: "generic.token"
              }) + " ID",
              children: (0, r.jsx)(d.E, {
                children: e.nft.onChainId
              })
            })]
          }), (0, r.jsx)(c.q, {
            network: D,
            sender: E
          }), (0, r.jsx)(l.C, {
            recipient: M,
            type: O,
            network: null != (u = null == (o = e.destination) ? void 0 : o.blockchain) ? u : D
          }), (0, r.jsx)(g.F, {
            label: $({
              id: "generic.hash"
            }),
            children: (0, r.jsx)(p.S, {
              isLoading: U,
              widthClass: "w-22.5",
              heightClass: "h-4",
              children: (0, r.jsxs)("div", {
                className: "flex space-x-1 items-center",
                children: [(0, r.jsx)(d.E, {
                  children: (0, I.p)({
                    value: z
                  })
                }), (0, r.jsx)(m.T, {
                  width: 15,
                  height: 15,
                  value: z
                })]
              })
            })
          }), e.memo && (0, r.jsx)(g.F, {
            label: $({
              id: "generic.memo"
            }),
            children: (0, r.jsx)(d.E, {
              children: isNaN(parseInt(e.memo)) ? e.memo : parseInt(e.memo)
            })
          }), (parseFloat(P) > 0 || S) && (0, r.jsx)(g.F, {
            label: $({
              id: "generic.amount"
            }),
            children: (0, r.jsx)(b.h, {
              testid: "tx-amount",
              value: P,
              amountType: N.Cu.CRYPTO,
              currency: e.nft ? "" : n.symbol,
              tinyThreshold: 10,
              maxSignificantDecimals: 10,
              isUnlimited: S
            })
          }), (0, r.jsx)(g.F, {
            label: $({
              id: "generic.network-fee"
            }),
            children: e.fee.map((t, i) => {
              var a, l, c;
              return (0, r.jsx)(b.h, {
                testid: "tx-fee-" + i,
                value: e.feeIs7702 && null != (l = null == (a = e.initialFee) ? void 0 : a[0]) ? l : t,
                amountType: N.Cu.CRYPTO,
                tinyThreshold: 10,
                maxSignificantDecimals: 10,
                currency: e.feeIs7702 ? null == (c = e.feeAsset) ? void 0 : c.symbol : (0, k.Hy)(D, n)
              }, i + t)
            })
          }), (0, r.jsx)(g.F, {
            label: $({
              id: "generic.network"
            }),
            children: (0, r.jsx)(d.E, {
              testid: "tx-network",
              children: null != (F = D.displayName) ? F : D.name
            })
          }), A && (0, r.jsxs)(r.Fragment, {
            children: [e.nonce && (0, r.jsx)(g.F, {
              label: $({
                id: "generic.nonce"
              }),
              children: (0, r.jsx)(d.E, {
                children: parseInt(e.nonce)
              })
            }), e.gasLimit && (0, r.jsx)(g.F, {
              label: $({
                id: "generic.gas-limit"
              }),
              children: (0, r.jsx)(d.E, {
                children: parseInt(e.gasLimit)
              })
            }), e.gasPrice && (0, r.jsx)(g.F, {
              label: $({
                id: "generic.gas-price"
              }),
              children: (0, r.jsxs)(d.E, {
                children: [s, " ", D.symbol]
              })
            }), O === T.wL.Contract && (0, r.jsx)(g.F, {
              label: $({
                id: "generic.input-data"
              }),
              children: (0, r.jsx)("div", {
                className: "w-2/3 bg-bg3 rounded-lg p-4 text-right overflow-auto",
                children: (0, r.jsx)(d.E, {
                  children: j
                })
              })
            })]
          }), !D.isCustom && (0, r.jsx)(a.h, {
            asset: n,
            blockchain: D,
            type: O,
            amount: e.nft ? 0 : parseFloat(P),
            fee: t,
            feeAsset: e.feeAsset
          })]
        })
      };
      var $ = t(23207),
        A = t(65512),
        D = t(29584),
        E = t(34798),
        M = t(80179);
      const O = ({
        transaction: e
      }) => {
        var n, t, i;
        const {
          formatMessage: a
        } = (0, h.A)(), l = (0, E.K)(e.blockchain.id, e.blockchain.isCustom), {
          trackAnalytics: c
        } = (0, $.s)();
        if (!l.explorer) return null;
        const s = null != (n = l.explorer) && n.url.endsWith("/") ? l.explorer.url : (null == (t = l.explorer) ? void 0 : t.url) + "/",
          o = null == (i = l.explorer) ? void 0 : i.txPath,
          d = o ? o.startsWith("/") ? o.substring(1) : o : "tx/",
          u = (0, C.useMemo)(() => e.feeIs7702 && "pending" === e.status, [e]),
          v = `${s}${d}${e.hash}`;
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(A.$, {
            onClick: () => ((e, n, t) => new Promise((e, n) => {
              var r = e => {
                  try {
                    a(t.next(e))
                  } catch (e) {
                    n(e)
                  }
                },
                i = e => {
                  try {
                    a(t.throw(e))
                  } catch (e) {
                    n(e)
                  }
                },
                a = n => n.done ? e(n.value) : Promise.resolve(n.value).then(r, i);
              a((t = t.apply(null, null)).next())
            }))(0, 0, function*() {
              c({
                event: D.Un.BLOCKCHAIN_EXPLORER,
                props: {
                  pageViewResourceType: D.Rb.EXTERNAL,
                  explorerUrl: l.explorer.url
                }
              }), yield(0, M.kK)(v)
            }),
            loading: u,
            disabled: u,
            children: a({
              id: "transaction.btn-view-on-explorer"
            })
          })
        })
      };
      var j = t(65504),
        P = t(68632),
        S = t(86170),
        U = t(92588),
        z = t(79941),
        B = t(15192);
      const J = ({
        asset: e,
        transaction: n,
        totalTransactionFee: t
      }) => {
        var i, a, l, c;
        const s = (0, E.K)(n.blockchain.id, n.blockchain.isCustom),
          o = (0, U.q)(e),
          {
            currency: d,
            baseCurrencyType: h
          } = (0, S.P)(),
          v = n.nft,
          m = (0, C.useMemo)(() => +(0, z.ct)(n, e), [n, e]),
          f = o?.price ? (0, B.A)(v ? t : m).mul(null != (i = o.price) ? i : 0).toNumber() : null;
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-center space-y-1",
          children: [(0, r.jsx)(j.q, {
            name: v ? null != (l = null == (a = n.nft) ? void 0 : a.name) ? l : "" : e.name,
            network: e.address ? s : void 0,
            src: v ? null == (c = n.nft) ? void 0 : c.previewImageURL.url : e.iconUrl,
            size: P.Y.XLARGE
          }), 0 === m ? null : (0, r.jsx)(b.h, {
            textType: u.jK.HEADER,
            amountType: N.Cu.CRYPTO,
            value: m
          }), 0 === f ? null : (0, r.jsx)(b.h, {
            textType: u.jK.SUBTITLE,
            theme: u.Il.SECONDARY,
            amountType: h,
            value: f,
            currency: d
          })]
        })
      };
      var L = t(47767),
        R = t(45871),
        V = t(63369),
        X = t(28398),
        q = t(83729),
        G = t(26858);
      const H = () => {
        const {
          id: e
        } = (0, L.g)();
        if (!e) throw Error(`Transaction id invalid "${e}" is invalid.`);
        const n = (e => {
          const n = (0, R.x)();
          return (0, C.useMemo)(() => {
            var t;
            return null != (t = n.find(n => n.hash === e)) ? t : n.find(n => n.initialHash === e)
          }, [e, n])
        })(e);
        if (!n) throw Error("Could not find transaction with id " + e);
        const {
          type: t
        } = (0, i.A)(n), a = (0, x.m)(n.blockchain.id), l = (0, E.K)(a.id, a.isCustom), {
          isAdvancedTransactionDataEnabled: c
        } = (0, w.j)();
        if (!l) throw Error(`Could not find network with chain ID "${a.id}".`);
        const s = l.isCustom ? (0, G.dJ)(l, n.assetId) : (0, G.Mr)(n.assetId),
          o = (0, C.useMemo)(() => {
            var e;
            return q.Js(null != (e = n.gasPrice) ? e : 0, "ether")
          }, [n]),
          d = (0, C.useMemo)(() => {
            var e, t;
            return n.feeIs7702 ? +(null != (t = null == (e = n.initialFee) ? void 0 : e[0]) ? t : n.fee[0]) : n.fee.reduce((e, n) => {
              var t;
              return parseFloat(null != (t = e + "") ? t : "0") + parseFloat(n ?? "0")
            }, 0) + (c ? parseFloat(o) : 0)
          }, [n.fee, o]);
        if (!s) throw Error(`Could not find asset with assetId: "${n.assetId}".`);
        (0, V.K)({
          event: D.Un.TRANSACTION,
          props: {
            blockchainName: a.name,
            blockchainType: a.isCustom ? X.l.CUSTOM : X.l.MAIN,
            blockchainChainId: a.chainId
          }
        });
        const {
          formatMessage: u
        } = (0, h.A)(), v = (0, L.Zp)();
        return (0, r.jsxs)(f.LN, {
          children: [(0, r.jsx)(f.zY, {
            backAction: () => v(-1),
            title: u({
              id: `transaction.${t}.title`
            }, {
              assetSymbol: s.symbol
            })
          }), (0, r.jsxs)(f.Gv, {
            children: [(0, r.jsx)(J, {
              transaction: n,
              asset: s,
              totalTransactionFee: d
            }), (0, r.jsx)(F, {
              transaction: n,
              asset: s,
              totalTransactionFee: d,
              gasPrice: o
            }), (0, r.jsx)(O, {
              transaction: n
            })]
          })]
        })
      }
    },
    20413: (e, n, t) => {
      t.d(n, {
        A: () => o
      });
      var r = t(26858),
        i = t(40790),
        a = t(96540),
        l = (t.n(a), t(44657)),
        c = t(79941),
        s = t(34476);
      const o = e => {
        const n = (0, s.m)(e.blockchain.id),
          t = (0, i.F7)(n.coinId),
          o = n.isCustom ? (0, r.dJ)(n, e.assetId) : (0, r.Mr)(e.assetId);
        return (0, a.useMemo)(() => {
          var r, i;
          const a = {
            id: e.hash,
            from: e.events[0].metadata.from,
            to: e.events[0].metadata.to,
            type: e.events[0].type,
            status: e.status,
            symbol: null != (r = o?.symbol) ? r : n.symbol,
            fee: e.fee,
            date: e.createdAt,
            amount: (0, c.ct)(e, o)
          };
          if ((0, c.fO)(e.events)) {
            if (!t) return a.type = l.wL.Send, a.amount = Math.abs(+a.amount).toString(), a;
            const n = t.address,
              {
                from: r,
                to: i
              } = e.events[0].metadata,
              c = r === n ? i : r;
            parseFloat(a.amount) > 0 ? (a.type = l.wL.Receive, a.from = c, a.to = n) : (a.type = l.wL.Send, a.from = n, a.to = c, a.amount = Math.abs(+a.amount).toString())
          }
          return (0, c.x0)(e.events) && (a.input = e.events[0].metadata.input), (0, c.m5)(e.events) && (a.isUnlimited = e.events[0].metadata.isUnlimited), e.nft && (a.nft = {
            onChainId: e.nft.onChainId,
            previewImage: e.nft.previewImageURL,
            originalImage: e.nft.originalMediaURL,
            name: e.nft.name,
            collectionName: e.nft.collectionName,
            collectionId: e.nft.collectionId,
            blockchain: {
              iconUrl: n.iconUrl,
              name: null != (i = n.displayName) ? i : n.name
            }
          }), a
        }, [JSON.stringify(e)])
      }
    },
    34476: (e, n, t) => {
      t.d(n, {
        m: () => l
      });
      var r = t(96540),
        i = (t.n(r), t(10537)),
        a = t(15078);

      function l(e) {
        const n = (0, i.n)(),
          t = (0, a.I)();
        return (0, r.useMemo)(() => {
          var r;
          return null != (r = n[e]) ? r : t[e]
        }, [e, n, t])
      }
    },
    45871: (e, n, t) => {
      t.d(n, {
        x: () => a
      });
      var r = t(68157),
        i = t(96540);
      t.n(i);
      const a = () => {
        var e;
        const n = null != (e = (0, r.GV)(e => {
          var n;
          return null == (n = e.tx.itemsPerWalletAccount[e.wallet.walletId]) ? void 0 : n[e.wallet.selectedAccountId]
        })) ? e : [];
        return (0, i.useMemo)(() => (n.sort((e, n) => n.createdAt - e.createdAt), n), [n])
      }
    },
    49798: (e, n, t) => {
      t.d(n, {
        X: () => v
      });
      var r = t(74848),
        i = t(52114),
        a = t(72267),
        l = Object.defineProperty,
        c = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        o = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        h = (e, n, t) => n in e ? l(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t;
      const v = e => {
        var n = e,
          {
            value: t,
            inline: l = !1
          } = n,
          v = ((e, n) => {
            var t = {};
            for (var r in e) d.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
            if (null != e && o)
              for (var r of o(e)) 0 > n.indexOf(r) && u.call(e, r) && (t[r] = e[r]);
            return t
          })(n, ["value", "inline"]);
        const m = (0, r.jsx)(a.XU, {
          value: t,
          month: "short",
          day: "2-digit",
          hourCycle: "h23",
          hour: "numeric",
          minute: "2-digit",
          year: "numeric"
        });
        return l ? m : (0, r.jsx)(i.E, ((e, n) => c(e, s(n)))(((e, n) => {
          for (var t in n || (n = {})) d.call(n, t) && h(e, t, n[t]);
          if (o)
            for (var t of o(n)) u.call(n, t) && h(e, t, n[t]);
          return e
        })({}, v), {
          children: m
        }))
      }
    }
  }
]);
