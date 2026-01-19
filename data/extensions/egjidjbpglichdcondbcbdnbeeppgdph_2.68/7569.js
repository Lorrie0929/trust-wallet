"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463, 7569], {
    40463: (e, t, n) => {
      n.r(t), n.d(t, {
        OriginParam: () => f,
        default: () => g
      });
      var i = n(74848),
        l = n(68305),
        c = n(68315),
        r = n(26264),
        o = n(63369),
        d = n(4800),
        a = n(29584),
        s = n(34138),
        h = n(6442),
        m = n(47767);
      const f = {
          key: "origin",
          value: "reported"
        },
        g = () => {
          (0, o.K)({
            event: a.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, m.Zp)(),
            {
              formatMessage: t
            } = (0, h.A)(),
            {
              reportedItems: n
            } = (0, s.a)();
          return 0 === n.length ? (0, i.jsxs)(d.LN, {
            children: [(0, i.jsx)(d.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + r.b.DEFAULT)
            }), (0, i.jsx)(d.Gv, {
              children: (0, i.jsx)(c.w, {
                title: t({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, i.jsxs)(d.LN, {
            children: [(0, i.jsx)(d.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + r.b.DEFAULT)
            }), (0, i.jsx)(d.Gv, {
              children: (0, i.jsx)(d.LO, {
                children: (0, i.jsx)(l.I, {
                  collections: n,
                  onClick: t => {
                    e(`${r.b.NFT_COLLECTIONS}/${t.id}?${f.key}=${f.value}`)
                  },
                  alwaysShowAllCollections: !0
                })
              })
            })]
          })
        }
    },
    47569: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => E
      });
      var i = n(74848),
        l = n(68315),
        c = n(26264),
        r = n(95297),
        o = n(94893),
        d = n(68632),
        a = n(79830),
        s = n(52114),
        h = n(1279),
        m = n(67310);
      const f = ({
        nfts: e,
        loadMoreItems: t,
        hasNextPage: n,
        onClick: l
      }) => {
        const c = window.innerHeight - 38 - 16 - 16;
        return (0, i.jsx)(m.A, {
          dataLength: e.length,
          next: t,
          height: c,
          className: "tw-scrollbar",
          hasMore: !!n,
          loader: (0, i.jsx)("div", {
            className: "flex items-center justify-center py-4",
            children: (0, i.jsx)(a.y, {
              size: d.Y.LARGE
            })
          }),
          children: (0, i.jsx)("div", {
            className: "grid grid-cols-3 gap-4",
            children: e.map((e, t) => (0, i.jsx)(o.c, {
              onClick: () => l(e.id),
              testid: "nft-collection-item",
              children: (0, i.jsxs)("div", {
                className: "text-center",
                children: [(0, i.jsx)("div", {
                  className: "md:w-[7rem] md:h-[7rem] w-[6rem] h-[6rem]",
                  children: (0, i.jsx)(r.J, {
                    mainMedia: e.previewImageURL,
                    fallbackMedia: e.originalMediaURL,
                    name: e.name,
                    asListItem: !0
                  })
                }), (0, i.jsx)("div", {
                  className: "md:w-[7rem] w-[6rem]",
                  children: (0, i.jsx)(s.E, {
                    type: h.jK.SUBTITLE,
                    truncated: !0,
                    children: e.name
                  })
                })]
              })
            }, t))
          })
        })
      };
      var g = n(55418),
        u = n(4800),
        v = n(64145);
      const p = {
        COLLECTION_NFTS_REQUESTED: (0, n(24439).If)("CollectionNFTsRequested")
      };
      var N = n(65818),
        w = n(96540),
        $ = n(94524),
        k = n(68157),
        C = n(26113),
        I = n(6442),
        b = n(47767),
        y = n(84976),
        P = n(40463),
        M = n(63369),
        x = n(29584),
        A = n(98939);
      const E = () => {
        const e = (0, b.Zp)(),
          {
            formatMessage: t
          } = (0, I.A)(),
          {
            collectionId: n
          } = (0, b.g)(),
          [r] = (0, y.ok)(),
          o = r.get("loadCachedItems"),
          s = r.get("initPage"),
          h = r.get(P.OriginParam.key),
          [m, E] = (0, w.useState)(!o),
          [T, L] = (0, w.useState)(s ? parseInt(s) : 0),
          [O, S] = (0, w.useState)(!1);
        if (!n) throw Error("Collection Id is missing.");
        const z = (0, N.Q)(n);
        if (!z) throw Error(`Could not find collection for collectionId "${n}"`);
        const {
          total: F,
          reported: Q
        } = (e => {
          const t = (0, k.GV)(e => e.nft.nfts),
            n = (0, $.m)(),
            i = t[e];
          return (0, w.useMemo)(() => {
            var t;
            return {
              total: null != (t = i?.items) ? t : [],
              reported: n.includes(e)
            }
          }, [e, i, n])
        })(n);
        (0, M.K)({
          event: x.Un.NFT_COLLECTION,
          props: {
            collectionName: z.name,
            reported: Q
          }
        });
        const R = () => e(h === P.OriginParam.value ? c.b.NFT_REPORTED_COLLECTIONS : c.b.DEFAULT, h === P.OriginParam.value ? void 0 : {
            state: {
              activeTab: A.my.NFT
            }
          }),
          _ = (0, w.useCallback)(t => {
            e(`${c.b.NFT_COLLECTIONS}/${n}/nfts/${t}?initPage=${O?T+1:0}${h===P.OriginParam.value?`&${P.OriginParam.key}=${P.OriginParam.value}`:""}`)
          }, [n, O, h, T, e]),
          j = (0, w.useCallback)(() => L(e => e + 1), []);
        return (0, w.useEffect)(() => {
          (!o || T > 0) && ((e, t, n) => new Promise((e, t) => {
            var i = e => {
                try {
                  c(n.next(e))
                } catch (e) {
                  t(e)
                }
              },
              l = e => {
                try {
                  c(n.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              c = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, l);
            c((n = n.apply(null, null)).next())
          }))(0, 0, function*() {
            const {
              hasNextPage: e
            } = yield v.YW.emit(p.COLLECTION_NFTS_REQUESTED, {
              collectionId: n,
              page: T
            });
            S(e)
          }).catch(C.Z).finally(() => E(!1))
        }, [n, o, T]), m ? (0, i.jsxs)(u.LN, {
          children: [(0, i.jsx)(u.zY, {
            backAction: R,
            title: z.name
          }), (0, i.jsx)(u.Gv, {
            children: (0, i.jsx)(g.o, {
              children: (0, i.jsx)("div", {
                children: (0, i.jsx)(a.y, {
                  size: d.Y.XLARGE
                })
              })
            })
          })]
        }) : 0 === F.length ? (0, i.jsxs)(u.LN, {
          children: [(0, i.jsx)(u.zY, {
            backAction: R,
            title: z.name
          }), (0, i.jsx)(u.Gv, {
            children: (0, i.jsx)(l.w, {
              title: t({
                id: "nft-collection.nothing-bought"
              }),
              action: {
                label: t({
                  id: "generic.receive"
                }),
                handler: () => e(c.b.RECEIVE)
              }
            })
          })]
        }) : (0, i.jsxs)(u.LN, {
          children: [(0, i.jsx)(u.zY, {
            title: z.name,
            backAction: R
          }), (0, i.jsx)(u.Gv, {
            children: (0, i.jsx)(f, {
              nfts: F,
              onClick: _,
              hasNextPage: O,
              loadMoreItems: j
            })
          })]
        })
      }
    },
    65818: (e, t, n) => {
      n.d(t, {
        Q: () => c
      });
      var i = n(96540),
        l = (n.n(i), n(78023));
      const c = e => {
        const t = (0, l.X)();
        return (0, i.useMemo)(() => t.find(t => t.id === e), [e, t])
      }
    }
  }
]);
