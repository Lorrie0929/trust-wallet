try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e.i = e.i || {}, e.i[i] = "1861c5a5-0327-40b2-be6b-96fc653868c8", e.l = "sentry-dbid-1861c5a5-0327-40b2-be6b-96fc653868c8")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463, 8095], {
    40463: (e, i, l) => {
      l.r(i), l.d(i, {
        OriginParam: () => f,
        default: () => u
      });
      var n = l(74848),
        t = l(68305),
        r = l(68315),
        c = l(26264),
        d = l(63369),
        o = l(4800),
        a = l(29584),
        s = l(34138),
        h = l(6442),
        p = l(47767);
      const f = {
          key: "origin",
          value: "reported"
        },
        u = () => {
          (0, d.K)({
            event: a.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, p.Zp)(),
            {
              formatMessage: i
            } = (0, h.A)(),
            {
              reportedItems: l
            } = (0, s.a)();
          return 0 === l.length ? (0, n.jsxs)(o.LN, {
            children: [(0, n.jsx)(o.zY, {
              title: i({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, n.jsx)(o.Gv, {
              children: (0, n.jsx)(r.w, {
                title: i({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, n.jsxs)(o.LN, {
            children: [(0, n.jsx)(o.zY, {
              title: i({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, n.jsx)(o.Gv, {
              children: (0, n.jsx)(o.LO, {
                children: (0, n.jsx)(t.I, {
                  collections: l,
                  onClick: i => {
                    e(`${c.b.NFT_COLLECTIONS}/${i.id}?${f.key}=${f.value}`)
                  },
                  alwaysShowAllCollections: !0
                })
              })
            })]
          })
        }
    },
    46707: (e, i, l) => {
      l.d(i, {
        j: () => r
      });
      var n = l(68157),
        t = l(96540);
      const r = (e, i) => {
        const l = (0, n.GV)(i => i.nft.nfts[e].items);
        return (0, t.useMemo)(() => l.find(e => e.id === i), [l, i])
      }
    },
    65818: (e, i, l) => {
      l.d(i, {
        Q: () => r
      });
      var n = l(96540),
        t = l(78023);
      const r = e => {
        const i = (0, t.X)();
        return (0, n.useMemo)(() => i.find(i => i.id === e), [e, i])
      }
    },
    78095: (e, i, l) => {
      l.r(i), l.d(i, {
        default: () => P
      });
      var n = l(74848),
        t = l(95297),
        r = l(26264),
        c = l(52114),
        d = l(1279),
        o = l(6442);
      const a = ({
          name: e,
          value: i,
          rarity: l
        }) => {
          const {
            formatMessage: t
          } = (0, o.A)(), r = i.toLowerCase().startsWith("http") ? i.toLowerCase() : i;
          return (0, n.jsxs)("div", {
            className: "flex flex-col bg-bg3 rounded-3xl p-4",
            children: [(0, n.jsx)("div", {
              children: (0, n.jsx)(c.E, {
                type: d.jK.CAPTION,
                children: e
              })
            }), (0, n.jsx)("div", {
              children: (0, n.jsx)(c.E, {
                type: d.jK.TITLE,
                children: r
              })
            }), l > 0 && (0, n.jsx)("div", {
              children: (0, n.jsx)(c.E, {
                weight: d.nG.NORMAL,
                children: t({
                  id: "nft-item.rarity-text"
                }, {
                  rarity: l
                })
              })
            })]
          })
        },
        s = ({
          properties: e
        }) => {
          const {
            formatMessage: i
          } = (0, o.A)();
          return e && 0 !== e.length ? (0, n.jsxs)("div", {
            className: "pt-4",
            children: [(0, n.jsx)("div", {
              className: "pb-2",
              children: (0, n.jsx)(c.E, {
                type: d.jK.TITLE,
                children: i({
                  id: "nft-item.attributes"
                })
              })
            }), (0, n.jsx)("div", {
              className: "grid grid-cols-2 gap-2",
              children: e.map((e, i) => (0, n.jsx)(a, {
                name: e.key,
                value: e.value,
                rarity: e.rarity
              }, i))
            })]
          }) : null
        };
      var h = l(65512),
        p = l(45452),
        f = l(52619),
        u = l(4800),
        g = l(55074),
        v = l(43825),
        m = l(65818),
        b = l(46707),
        y = l(56834),
        w = l(40053),
        $ = l(26113),
        N = l(96540),
        k = l(47767),
        I = l(84976),
        C = l(40463),
        T = l(63369),
        x = l(29584),
        M = l(23207);
      const P = () => {
        var e;
        (0, T.K)({
          event: x.Un.NFT_ITEM,
          props: null
        });
        const i = (0, k.Zp)(),
          {
            formatMessage: l
          } = (0, o.A)(),
          {
            collectionId: a,
            nftId: P
          } = (0, k.g)(),
          [A] = (0, I.ok)(),
          [E, F] = (0, N.useState)(null),
          [j, O] = (0, N.useState)(!0),
          {
            trackAnalytics: Q
          } = (0, M.s)();
        if (!a) throw Error("Collection Id is missing.");
        const R = (0, m.Q)(a);
        if (!R) throw Error(`Could not find collection for collectionId "${a}"`);
        if (!P) throw Error("NFT Id is missing.");
        const S = (0, b.j)(a, P);
        if (!S) throw Error(`Could not find NFT item for nftId "${P}"`);
        const V = [y.KM.ethereum, y.KM.solana].includes(R.blockchain.blockchain.toLowerCase()),
          q = !j && !!E,
          z = `loadCachedItems=true${A.get("initPage")?"&initPage="+parseInt(A.get("initPage")):""}${A.get(C.OriginParam.key)===C.OriginParam.value?`&${C.OriginParam.key}=${C.OriginParam.value}`:""}`;
        return (0, N.useEffect)(() => {
          ((e, i, l) => new Promise((e, i) => {
            var n = e => {
                try {
                  r(l.next(e))
                } catch (e) {
                  i(e)
                }
              },
              t = e => {
                try {
                  r(l.throw(e))
                } catch (e) {
                  i(e)
                }
              },
              r = i => i.done ? e(i.value) : Promise.resolve(i.value).then(n, t);
            r((l = l.apply(null, null)).next())
          }))(0, 0, function*() {
            const e = function(e, i, l) {
              var n;
              return `https://opensea.io/assets/${null!=(n={avalanchec:"avalanche",smartchain:"bsc",polygon:"matic"}[e])?n:e}/${i}/${l}`
            }(R.blockchain.id, R.contractAddress, S.onChainId);
            (yield fetch(e)).ok && F(e)
          }).catch($.Z).finally(() => O(!1))
        }, [R.blockchain.id, R.contractAddress, S.onChainId]), (0, n.jsxs)(u.LN, {
          children: [(0, n.jsx)(u.zY, {
            backAction: () => i(`${r.b.NFT_COLLECTIONS}/${R.id}?${z}`),
            title: R.name
          }), (0, n.jsx)(u.Gv, {
            children: (0, n.jsxs)(u.LO, {
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(t.J, {
                  mainMedia: S.originalMediaURL,
                  fallbackMedia: S.previewImageURL,
                  name: S.name
                })
              }), (0, n.jsx)("div", {
                className: "text-center pt-4",
                children: (0, n.jsx)(c.E, {
                  type: d.jK.TITLE,
                  children: S.name
                })
              }), V && (0, n.jsx)("div", {
                className: "pt-4",
                children: (0, n.jsx)(h.$, {
                  onClick: () => i(`${r.b.SEND}/${a}/${P}`),
                  children: l({
                    id: "generic.send"
                  })
                })
              }), q && (0, n.jsx)("div", {
                className: "pt-4",
                children: (0, n.jsx)(h.$, {
                  theme: f.ry.TRANSPARENT,
                  onClick: () => {
                    Q({
                      event: x.Un.OPENSEA,
                      props: {
                        pageViewResourceType: x.Rb.EXTERNAL
                      }
                    }), (0, $.sP)(E)
                  },
                  children: (0, n.jsx)(c.E, {
                    theme: d.Il.BRAND,
                    children: l({
                      id: "nft-item.view-on-opensea"
                    })
                  })
                })
              }), S.description.length > 0 && (0, n.jsxs)("div", {
                className: "pt-4",
                children: [(0, n.jsx)("div", {
                  className: "pb-2",
                  children: (0, n.jsx)(c.E, {
                    type: d.jK.TITLE,
                    children: l({
                      id: "generic.description"
                    })
                  })
                }), (0, n.jsx)(v.z, {
                  text: S.description
                })]
              }), (0, n.jsxs)("div", {
                className: "pt-4",
                children: [(0, n.jsx)(g.F, {
                  label: l({
                    id: "generic.network"
                  }),
                  children: (0, n.jsx)(c.E, {
                    children: null != (e = R.blockchain.displayName) ? e : R.blockchain.name
                  })
                }), R.contractAddress.length > 0 && (0, n.jsxs)(g.F, {
                  label: l({
                    id: "generic.contract-address"
                  }),
                  children: [(0, n.jsx)(c.E, {
                    children: (0, w.p)({
                      value: R.contractAddress
                    })
                  }), (0, n.jsx)(p.T, {
                    value: R.contractAddress
                  })]
                }), (0, n.jsxs)(g.F, {
                  label: l({
                    id: "generic.token-id"
                  }),
                  children: [(0, n.jsx)(c.E, {
                    children: (0, w.p)({
                      value: S.onChainId
                    })
                  }), (0, n.jsx)(p.T, {
                    value: S.onChainId
                  })]
                }), (0, n.jsx)(g.F, {
                  label: l({
                    id: "generic.type"
                  }),
                  children: (0, n.jsx)(c.E, {
                    children: S.type
                  })
                }), (0, n.jsx)(g.F, {
                  label: l({
                    id: "generic.balance"
                  }),
                  children: (0, n.jsx)(c.E, {
                    children: S.balance
                  })
                })]
              }), (0, n.jsx)(s, {
                properties: S.properties
              })]
            })
          })]
        })
      }
    }
  }
]);
