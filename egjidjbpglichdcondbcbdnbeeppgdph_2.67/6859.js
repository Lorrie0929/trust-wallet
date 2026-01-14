try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e.t = e.t || {}, e.t[n] = "06515828-82b6-4ed8-bb20-c91d9b47f5c7", e.i = "sentry-dbid-06515828-82b6-4ed8-bb20-c91d9b47f5c7")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [6859], {
    6859: (e, n, t) => {
      t.r(n), t.d(n, {
        default: () => H
      });
      var r = t(74848),
        i = t(20413),
        l = t(17761),
        a = t(74576),
        c = t(90086),
        o = t(57886),
        s = t(31170),
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
                children: (0, r.jsx)(s.E, {
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
                children: (0, r.jsx)(o.y, {
                  width: 15,
                  height: 15
                })
              })]
            })
        }
      };
      var f = t(45452),
        m = t(4800),
        g = t(55074),
        p = t(48346),
        b = t(69254),
        y = t(49798),
        w = t(34476),
        x = t(5027),
        T = t(44657),
        k = t(80772),
        N = t(21094),
        I = t(40053),
        C = t(96540);
      const F = ({
        transaction: e,
        asset: n,
        totalTransactionFee: t,
        gasPrice: o
      }) => {
        var s, u, F;
        const {
          formatMessage: $
        } = (0, h.A)(), {
          isAdvancedTransactionDataEnabled: A
        } = (0, x.j)(), D = (0, w.m)(e.blockchain.id), {
          from: E,
          to: M,
          type: O,
          input: j,
          amount: P,
          isUnlimited: S
        } = (0, i.A)(e), U = (0, C.useMemo)(() => (e.feeIs7702 || void 0 !== e.solanaFlexGasRequestId) && "pending" === e.status, [e]), z = (0, C.useMemo)(() => {
          var n;
          return e.solanaFlexGasRequestId ? e.hash : e.feeIs7702 && null != (n = e.initialHash) ? n : e.hash
        }, [e]);
        return (0, r.jsxs)(m.LO, {
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
          }), (0, r.jsx)(a.C, {
            recipient: M,
            type: O,
            network: null != (u = null == (s = e.destination) ? void 0 : s.blockchain) ? u : D
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
                }), (0, r.jsx)(f.T, {
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
              var l, a, c, o;
              return (0, r.jsx)(b.h, {
                testid: "tx-fee-" + i,
                value: e.feeIs7702 && null != (a = null == (l = e.initialFee) ? void 0 : l[0]) ? a : t,
                amountType: N.Cu.CRYPTO,
                tinyThreshold: 10,
                maxSignificantDecimals: 10,
                currency: null != (o = null == (c = e?.feeAsset) ? void 0 : c.symbol) ? o : (0, k.Hy)(D, n)
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
                children: [o, " ", D.symbol]
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
          }), !D.isCustom && (0, r.jsx)(l.h, {
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
          formatMessage: l
        } = (0, h.A)(), a = (0, E.K)(e.blockchain.id, e.blockchain.isCustom), {
          trackAnalytics: c
        } = (0, $.s)();
        if (!a.explorer) return null;
        const o = null != (n = a.explorer) && n.url.endsWith("/") ? a.explorer.url : (null == (t = a.explorer) ? void 0 : t.url) + "/",
          s = null == (i = a.explorer) ? void 0 : i.txPath,
          d = s ? s.startsWith("/") ? s.substring(1) : s : "tx/",
          u = (0, C.useMemo)(() => e.feeIs7702 && "pending" === e.status, [e]),
          v = `${o}${d}${e.hash}`;
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(A.$, {
            onClick: () => ((e, n, t) => new Promise((e, n) => {
              var r = e => {
                  try {
                    l(t.next(e))
                  } catch (e) {
                    n(e)
                  }
                },
                i = e => {
                  try {
                    l(t.throw(e))
                  } catch (e) {
                    n(e)
                  }
                },
                l = n => n.done ? e(n.value) : Promise.resolve(n.value).then(r, i);
              l((t = t.apply(null, null)).next())
            }))(0, 0, function*() {
              c({
                event: D.Un.BLOCKCHAIN_EXPLORER,
                props: {
                  pageViewResourceType: D.Rb.EXTERNAL,
                  explorerUrl: a.explorer.url
                }
              }), yield(0, M.kK)(v)
            }),
            loading: u,
            disabled: u,
            children: l({
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
        var i, l, a, c;
        const o = (0, E.K)(n.blockchain.id, n.blockchain.isCustom),
          s = (0, U.q)(e),
          {
            currency: d,
            baseCurrencyType: h
          } = (0, S.P)(),
          v = n.nft,
          f = (0, C.useMemo)(() => +(0, z.ct)(n, e), [n, e]),
          m = s?.price ? (0, B.A)(v ? t : f).mul(null != (i = s.price) ? i : 0).toNumber() : null;
        return (0, r.jsxs)("div", {
          className: "flex flex-col items-center space-y-1",
          children: [(0, r.jsx)(j.q, {
            name: v ? null != (a = null == (l = n.nft) ? void 0 : l.name) ? a : "" : e.name,
            network: e.address ? o : void 0,
            src: v ? null == (c = n.nft) ? void 0 : c.previewImageURL.url : e.iconUrl,
            size: P.Y.XLARGE
          }), 0 === f ? null : (0, r.jsx)(b.h, {
            textType: u.jK.HEADER,
            amountType: N.Cu.CRYPTO,
            value: f
          }), 0 === m ? null : (0, r.jsx)(b.h, {
            textType: u.jK.SUBTITLE,
            theme: u.Il.SECONDARY,
            amountType: h,
            value: m,
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
            var t, r;
            return null != (r = null != (t = n.find(n => n.hash === e)) ? t : n.find(n => n.initialHash === e)) ? r : n.find(n => n.solanaFlexGasRequestId === e)
          }, [e, n])
        })(e);
        if (!n) throw Error("Could not find transaction with id " + e);
        const {
          type: t
        } = (0, i.A)(n), l = (0, w.m)(n.blockchain.id), a = (0, E.K)(l.id, l.isCustom), {
          isAdvancedTransactionDataEnabled: c
        } = (0, x.j)();
        if (!a) throw Error(`Could not find network with chain ID "${l.id}".`);
        const o = a.isCustom ? (0, G.dJ)(a, n.assetId) : (0, G.Mr)(n.assetId),
          s = (0, C.useMemo)(() => {
            var e;
            return q.Js(null != (e = n.gasPrice) ? e : 0, "ether")
          }, [n]),
          d = (0, C.useMemo)(() => {
            var e, t;
            return n.feeIs7702 ? +(null != (t = null == (e = n.initialFee) ? void 0 : e[0]) ? t : n.fee[0]) : n.fee.reduce((e, n) => {
              var t;
              return parseFloat(null != (t = e + "") ? t : "0") + parseFloat(n ?? "0")
            }, 0) + (c ? parseFloat(s) : 0)
          }, [n.fee, s]);
        if (!o) throw Error(`Could not find asset with assetId: "${n.assetId}".`);
        (0, V.K)({
          event: D.Un.TRANSACTION,
          props: {
            blockchainName: l.name,
            blockchainType: l.isCustom ? X.l.CUSTOM : X.l.MAIN,
            blockchainChainId: l.chainId
          }
        });
        const {
          formatMessage: u
        } = (0, h.A)(), v = (0, L.Zp)();
        return (0, r.jsxs)(m.LN, {
          children: [(0, r.jsx)(m.zY, {
            backAction: () => v(-1),
            title: u({
              id: `transaction.${t}.title`
            }, {
              assetSymbol: o.symbol
            })
          }), (0, r.jsxs)(m.Gv, {
            children: [(0, r.jsx)(J, {
              transaction: n,
              asset: o,
              totalTransactionFee: d
            }), (0, r.jsx)(F, {
              transaction: n,
              asset: o,
              totalTransactionFee: d,
              gasPrice: s
            }), (0, r.jsx)(O, {
              transaction: n
            })]
          })]
        })
      }
    },
    20413: (e, n, t) => {
      t.d(n, {
        A: () => s
      });
      var r = t(26858),
        i = t(40790),
        l = t(96540),
        a = t(44657),
        c = t(79941),
        o = t(34476);
      const s = e => {
        const n = (0, o.m)(e.blockchain.id),
          t = (0, i.F7)(n.coinId),
          s = n.isCustom ? (0, r.dJ)(n, e.assetId) : (0, r.Mr)(e.assetId);
        return (0, l.useMemo)(() => {
          var r, i;
          const l = {
            id: e.hash,
            from: e.events[0].metadata.from,
            to: e.events[0].metadata.to,
            type: e.events[0].type,
            status: e.status,
            symbol: null != (r = s?.symbol) ? r : n.symbol,
            fee: e.fee,
            date: e.createdAt,
            amount: (0, c.ct)(e, s)
          };
          if ((0, c.fO)(e.events)) {
            if (!t) return l.type = a.wL.Send, l.amount = Math.abs(+l.amount).toString(), l;
            const n = t.address,
              {
                from: r,
                to: i
              } = e.events[0].metadata,
              c = r === n ? i : r;
            parseFloat(l.amount) > 0 ? (l.type = a.wL.Receive, l.from = c, l.to = n) : (l.type = a.wL.Send, l.from = n, l.to = c, l.amount = Math.abs(+l.amount).toString())
          }
          return (0, c.x0)(e.events) && (l.input = e.events[0].metadata.input), (0, c.m5)(e.events) && (l.isUnlimited = e.events[0].metadata.isUnlimited), e.nft && (l.nft = {
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
          }), l
        }, [JSON.stringify(e)])
      }
    },
    34476: (e, n, t) => {
      t.d(n, {
        m: () => a
      });
      var r = t(96540),
        i = t(10537),
        l = t(15078);

      function a(e) {
        const n = (0, i.n)(),
          t = (0, l.I)();
        return (0, r.useMemo)(() => {
          var r;
          return null != (r = n[e]) ? r : t[e]
        }, [e, n, t])
      }
    },
    45871: (e, n, t) => {
      t.d(n, {
        x: () => l
      });
      var r = t(68157),
        i = t(96540);
      const l = () => {
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
        l = t(72267),
        a = Object.defineProperty,
        c = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        d = {}.hasOwnProperty,
        u = {}.propertyIsEnumerable,
        h = (e, n, t) => n in e ? a(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t;
      const v = e => {
        var n = e,
          {
            value: t,
            inline: a = !1
          } = n,
          v = ((e, n) => {
            var t = {};
            for (var r in e) d.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
            if (null != e && s)
              for (var r of s(e)) 0 > n.indexOf(r) && u.call(e, r) && (t[r] = e[r]);
            return t
          })(n, ["value", "inline"]);
        const f = (0, r.jsx)(l.XU, {
          value: t,
          month: "short",
          day: "2-digit",
          hourCycle: "h23",
          hour: "numeric",
          minute: "2-digit",
          year: "numeric"
        });
        return a ? f : (0, r.jsx)(i.E, ((e, n) => c(e, o(n)))(((e, n) => {
          for (var t in n || (n = {})) d.call(n, t) && h(e, t, n[t]);
          if (s)
            for (var t of s(n)) u.call(n, t) && h(e, t, n[t]);
          return e
        })({}, v), {
          children: f
        }))
      }
    }
  }
]);
