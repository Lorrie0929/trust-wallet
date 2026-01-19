"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463, 8095], {
    40463: (e, i, n) => {
      n.r(i), n.d(i, {
        OriginParam: () => v,
        default: () => m
      });
      var t = n(74848),
        r = n(68305),
        l = n(68315),
        c = n(26264),
        d = n(63369),
        a = n(4800),
        o = n(29584),
        s = n(34138),
        h = n(6442),
        p = n(47767);
      const v = {
          key: "origin",
          value: "reported"
        },
        m = () => {
          (0, d.K)({
            event: o.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, p.Zp)(),
            {
              formatMessage: i
            } = (0, h.A)(),
            {
              reportedItems: n
            } = (0, s.a)();
          return 0 === n.length ? (0, t.jsxs)(a.LN, {
            children: [(0, t.jsx)(a.zY, {
              title: i({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, t.jsx)(a.Gv, {
              children: (0, t.jsx)(l.w, {
                title: i({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, t.jsxs)(a.LN, {
            children: [(0, t.jsx)(a.zY, {
              title: i({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, t.jsx)(a.Gv, {
              children: (0, t.jsx)(a.LO, {
                children: (0, t.jsx)(r.I, {
                  collections: n,
                  onClick: i => {
                    e(`${c.b.NFT_COLLECTIONS}/${i.id}?${v.key}=${v.value}`)
                  },
                  alwaysShowAllCollections: !0
                })
              })
            })]
          })
        }
    },
    46707: (e, i, n) => {
      n.d(i, {
        j: () => l
      });
      var t = n(68157),
        r = n(96540);
      n.n(r);
      const l = (e, i) => {
        const n = (0, t.GV)(i => i.nft.nfts[e].items);
        return (0, r.useMemo)(() => n.find(e => e.id === i), [n, i])
      }
    },
    65818: (e, i, n) => {
      n.d(i, {
        Q: () => l
      });
      var t = n(96540),
        r = (n.n(t), n(78023));
      const l = e => {
        const i = (0, r.X)();
        return (0, t.useMemo)(() => i.find(i => i.id === e), [e, i])
      }
    },
    78095: (e, i, n) => {
      n.r(i), n.d(i, {
        default: () => A
      });
      var t = n(74848),
        r = n(95297),
        l = n(26264),
        c = n(52114),
        d = n(1279),
        a = n(6442);
      const o = ({
          name: e,
          value: i,
          rarity: n
        }) => {
          const {
            formatMessage: r
          } = (0, a.A)(), l = i.toLowerCase().startsWith("http") ? i.toLowerCase() : i;
          return (0, t.jsxs)("div", {
            className: "flex flex-col bg-bg3 rounded-3xl p-4",
            children: [(0, t.jsx)("div", {
              children: (0, t.jsx)(c.E, {
                type: d.jK.CAPTION,
                children: e
              })
            }), (0, t.jsx)("div", {
              children: (0, t.jsx)(c.E, {
                type: d.jK.TITLE,
                children: l
              })
            }), n > 0 && (0, t.jsx)("div", {
              children: (0, t.jsx)(c.E, {
                weight: d.nG.NORMAL,
                children: r({
                  id: "nft-item.rarity-text"
                }, {
                  rarity: n
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
          } = (0, a.A)();
          return e && 0 !== e.length ? (0, t.jsxs)("div", {
            className: "pt-4",
            children: [(0, t.jsx)("div", {
              className: "pb-2",
              children: (0, t.jsx)(c.E, {
                type: d.jK.TITLE,
                children: i({
                  id: "nft-item.attributes"
                })
              })
            }), (0, t.jsx)("div", {
              className: "grid grid-cols-2 gap-2",
              children: e.map((e, i) => (0, t.jsx)(o, {
                name: e.key,
                value: e.value,
                rarity: e.rarity
              }, i))
            })]
          }) : null
        };
      var h = n(65512),
        p = n(45452),
        v = n(52619),
        m = n(4800),
        u = n(55074),
        f = n(43825),
        g = n(65818),
        $ = n(46707),
        y = n(56834),
        b = n(40053),
        N = n(26113),
        k = n(96540),
        w = n(47767),
        I = n(84976),
        C = n(40463),
        x = n(63369),
        M = n(29584),
        P = n(23207);
      const A = () => {
        var e;
        (0, x.K)({
          event: M.Un.NFT_ITEM,
          props: null
        });
        const i = (0, w.Zp)(),
          {
            formatMessage: n
          } = (0, a.A)(),
          {
            collectionId: o,
            nftId: A
          } = (0, w.g)(),
          [E] = (0, I.ok)(),
          [T, F] = (0, k.useState)(null),
          [j, O] = (0, k.useState)(!0),
          {
            trackAnalytics: Q
          } = (0, P.s)();
        if (!o) throw Error("Collection Id is missing.");
        const R = (0, g.Q)(o);
        if (!R) throw Error(`Could not find collection for collectionId "${o}"`);
        if (!A) throw Error("NFT Id is missing.");
        const S = (0, $.j)(o, A);
        if (!S) throw Error(`Could not find NFT item for nftId "${A}"`);
        const V = [y.KM.ethereum, y.KM.solana].includes(R.blockchain.blockchain.toLowerCase()),
          q = !j && !!T,
          z = `loadCachedItems=true${E.get("initPage")?"&initPage="+parseInt(E.get("initPage")):""}${E.get(C.OriginParam.key)===C.OriginParam.value?`&${C.OriginParam.key}=${C.OriginParam.value}`:""}`;
        return (0, k.useEffect)(() => {
          ((e, i, n) => new Promise((e, i) => {
            var t = e => {
                try {
                  l(n.next(e))
                } catch (e) {
                  i(e)
                }
              },
              r = e => {
                try {
                  l(n.throw(e))
                } catch (e) {
                  i(e)
                }
              },
              l = i => i.done ? e(i.value) : Promise.resolve(i.value).then(t, r);
            l((n = n.apply(null, null)).next())
          }))(0, 0, function*() {
            const e = function(e, i, n) {
              var t;
              return `https://opensea.io/assets/${null!=(t={avalanchec:"avalanche",smartchain:"bsc",polygon:"matic"}[e])?t:e}/${i}/${n}`
            }(R.blockchain.id, R.contractAddress, S.onChainId);
            (yield fetch(e)).ok && F(e)
          }).catch(N.Z).finally(() => O(!1))
        }, [R.blockchain.id, R.contractAddress, S.onChainId]), (0, t.jsxs)(m.LN, {
          children: [(0, t.jsx)(m.zY, {
            backAction: () => i(`${l.b.NFT_COLLECTIONS}/${R.id}?${z}`),
            title: R.name
          }), (0, t.jsx)(m.Gv, {
            children: (0, t.jsxs)(m.LO, {
              children: [(0, t.jsx)("div", {
                children: (0, t.jsx)(r.J, {
                  mainMedia: S.originalMediaURL,
                  fallbackMedia: S.previewImageURL,
                  name: S.name
                })
              }), (0, t.jsx)("div", {
                className: "text-center pt-4",
                children: (0, t.jsx)(c.E, {
                  type: d.jK.TITLE,
                  children: S.name
                })
              }), V && (0, t.jsx)("div", {
                className: "pt-4",
                children: (0, t.jsx)(h.$, {
                  onClick: () => i(`${l.b.SEND}/${o}/${A}`),
                  children: n({
                    id: "generic.send"
                  })
                })
              }), q && (0, t.jsx)("div", {
                className: "pt-4",
                children: (0, t.jsx)(h.$, {
                  theme: v.ry.TRANSPARENT,
                  onClick: () => {
                    Q({
                      event: M.Un.OPENSEA,
                      props: {
                        pageViewResourceType: M.Rb.EXTERNAL
                      }
                    }), (0, N.sP)(T)
                  },
                  children: (0, t.jsx)(c.E, {
                    theme: d.Il.BRAND,
                    children: n({
                      id: "nft-item.view-on-opensea"
                    })
                  })
                })
              }), S.description.length > 0 && (0, t.jsxs)("div", {
                className: "pt-4",
                children: [(0, t.jsx)("div", {
                  className: "pb-2",
                  children: (0, t.jsx)(c.E, {
                    type: d.jK.TITLE,
                    children: n({
                      id: "generic.description"
                    })
                  })
                }), (0, t.jsx)(f.z, {
                  text: S.description
                })]
              }), (0, t.jsxs)("div", {
                className: "pt-4",
                children: [(0, t.jsx)(u.F, {
                  label: n({
                    id: "generic.network"
                  }),
                  children: (0, t.jsx)(c.E, {
                    children: null != (e = R.blockchain.displayName) ? e : R.blockchain.name
                  })
                }), R.contractAddress.length > 0 && (0, t.jsxs)(u.F, {
                  label: n({
                    id: "generic.contract-address"
                  }),
                  children: [(0, t.jsx)(c.E, {
                    children: (0, b.p)({
                      value: R.contractAddress
                    })
                  }), (0, t.jsx)(p.T, {
                    value: R.contractAddress
                  })]
                }), (0, t.jsxs)(u.F, {
                  label: n({
                    id: "generic.token-id"
                  }),
                  children: [(0, t.jsx)(c.E, {
                    children: (0, b.p)({
                      value: S.onChainId
                    })
                  }), (0, t.jsx)(p.T, {
                    value: S.onChainId
                  })]
                }), (0, t.jsx)(u.F, {
                  label: n({
                    id: "generic.type"
                  }),
                  children: (0, t.jsx)(c.E, {
                    children: S.type
                  })
                }), (0, t.jsx)(u.F, {
                  label: n({
                    id: "generic.balance"
                  }),
                  children: (0, t.jsx)(c.E, {
                    children: S.balance
                  })
                })]
              }), (0, t.jsx)(s, {
                properties: S.properties
              })]
            })
          })]
        })
      }
    }
  }
]);
