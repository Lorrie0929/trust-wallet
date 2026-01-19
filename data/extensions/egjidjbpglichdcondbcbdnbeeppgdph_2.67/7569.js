try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "d173aecb-5c9b-4cdb-9fbf-4fcce1d20634", e.l = "sentry-dbid-d173aecb-5c9b-4cdb-9fbf-4fcce1d20634")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463, 7569], {
    40463: (e, t, l) => {
      l.r(t), l.d(t, {
        OriginParam: () => m,
        default: () => g
      });
      var n = l(74848),
        i = l(68305),
        o = l(68315),
        c = l(26264),
        r = l(63369),
        d = l(4800),
        a = l(29584),
        s = l(34138),
        h = l(6442),
        f = l(47767);
      const m = {
          key: "origin",
          value: "reported"
        },
        g = () => {
          (0, r.K)({
            event: a.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, f.Zp)(),
            {
              formatMessage: t
            } = (0, h.A)(),
            {
              reportedItems: l
            } = (0, s.a)();
          return 0 === l.length ? (0, n.jsxs)(d.LN, {
            children: [(0, n.jsx)(d.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, n.jsx)(d.Gv, {
              children: (0, n.jsx)(o.w, {
                title: t({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, n.jsxs)(d.LN, {
            children: [(0, n.jsx)(d.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, n.jsx)(d.Gv, {
              children: (0, n.jsx)(d.LO, {
                children: (0, n.jsx)(i.I, {
                  collections: l,
                  onClick: t => {
                    e(`${c.b.NFT_COLLECTIONS}/${t.id}?${m.key}=${m.value}`)
                  },
                  alwaysShowAllCollections: !0
                })
              })
            })]
          })
        }
    },
    47569: (e, t, l) => {
      l.r(t), l.d(t, {
        default: () => A
      });
      var n = l(74848),
        i = l(68315),
        o = l(26264),
        c = l(95297),
        r = l(94893),
        d = l(68632),
        a = l(79830),
        s = l(52114),
        h = l(1279),
        f = l(67310);
      const m = ({
        nfts: e,
        loadMoreItems: t,
        hasNextPage: l,
        onClick: i
      }) => {
        const o = window.innerHeight - 38 - 16 - 16;
        return (0, n.jsx)(f.A, {
          dataLength: e.length,
          next: t,
          height: o,
          className: "tw-scrollbar",
          hasMore: !!l,
          loader: (0, n.jsx)("div", {
            className: "flex items-center justify-center py-4",
            children: (0, n.jsx)(a.y, {
              size: d.Y.LARGE
            })
          }),
          children: (0, n.jsx)("div", {
            className: "grid grid-cols-3 gap-4",
            children: e.map((e, t) => (0, n.jsx)(r.c, {
              onClick: () => i(e.id),
              testid: "nft-collection-item",
              children: (0, n.jsxs)("div", {
                className: "text-center",
                children: [(0, n.jsx)("div", {
                  className: "md:w-[7rem] md:h-[7rem] w-[6rem] h-[6rem]",
                  children: (0, n.jsx)(c.J, {
                    mainMedia: e.previewImageURL,
                    fallbackMedia: e.originalMediaURL,
                    name: e.name,
                    asListItem: !0
                  })
                }), (0, n.jsx)("div", {
                  className: "md:w-[7rem] w-[6rem]",
                  children: (0, n.jsx)(s.E, {
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
      var g = l(55418),
        b = l(4800),
        u = l(64145);
      const p = {
        COLLECTION_NFTS_REQUESTED: (0, l(24439).If)("CollectionNFTsRequested")
      };
      var w = l(65818),
        v = l(96540),
        y = l(94524),
        N = l(68157),
        $ = l(26113),
        k = l(6442),
        C = l(47767),
        I = l(84976),
        T = l(40463),
        P = l(63369),
        M = l(29584),
        x = l(98939);
      const A = () => {
        const e = (0, C.Zp)(),
          {
            formatMessage: t
          } = (0, k.A)(),
          {
            collectionId: l
          } = (0, C.g)(),
          [c] = (0, I.ok)(),
          r = c.get("loadCachedItems"),
          s = c.get("initPage"),
          h = c.get(T.OriginParam.key),
          [f, A] = (0, v.useState)(!r),
          [E, L] = (0, v.useState)(s ? parseInt(s) : 0),
          [O, S] = (0, v.useState)(!1);
        if (!l) throw Error("Collection Id is missing.");
        const z = (0, w.Q)(l);
        if (!z) throw Error(`Could not find collection for collectionId "${l}"`);
        const {
          total: F,
          reported: Q
        } = (e => {
          const t = (0, N.GV)(e => e.nft.nfts),
            l = (0, y.m)(),
            n = t[e];
          return (0, v.useMemo)(() => {
            var t;
            return {
              total: null != (t = n?.items) ? t : [],
              reported: l.includes(e)
            }
          }, [e, n, l])
        })(l);
        (0, P.K)({
          event: M.Un.NFT_COLLECTION,
          props: {
            collectionName: z.name,
            reported: Q
          }
        });
        const R = () => e(h === T.OriginParam.value ? o.b.NFT_REPORTED_COLLECTIONS : o.b.DEFAULT, h === T.OriginParam.value ? void 0 : {
            state: {
              activeTab: x.my.NFT
            }
          }),
          _ = (0, v.useCallback)(t => {
            e(`${o.b.NFT_COLLECTIONS}/${l}/nfts/${t}?initPage=${O?E+1:0}${h===T.OriginParam.value?`&${T.OriginParam.key}=${T.OriginParam.value}`:""}`)
          }, [l, O, h, E, e]),
          j = (0, v.useCallback)(() => L(e => e + 1), []);
        return (0, v.useEffect)(() => {
          (!r || E > 0) && ((e, t, l) => new Promise((e, t) => {
            var n = e => {
                try {
                  o(l.next(e))
                } catch (e) {
                  t(e)
                }
              },
              i = e => {
                try {
                  o(l.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, i);
            o((l = l.apply(null, null)).next())
          }))(0, 0, function*() {
            const {
              hasNextPage: e
            } = yield u.YW.emit(p.COLLECTION_NFTS_REQUESTED, {
              collectionId: l,
              page: E
            });
            S(e)
          }).catch($.Z).finally(() => A(!1))
        }, [l, r, E]), f ? (0, n.jsxs)(b.LN, {
          children: [(0, n.jsx)(b.zY, {
            backAction: R,
            title: z.name
          }), (0, n.jsx)(b.Gv, {
            children: (0, n.jsx)(g.o, {
              children: (0, n.jsx)("div", {
                children: (0, n.jsx)(a.y, {
                  size: d.Y.XLARGE
                })
              })
            })
          })]
        }) : 0 === F.length ? (0, n.jsxs)(b.LN, {
          children: [(0, n.jsx)(b.zY, {
            backAction: R,
            title: z.name
          }), (0, n.jsx)(b.Gv, {
            children: (0, n.jsx)(i.w, {
              title: t({
                id: "nft-collection.nothing-bought"
              }),
              action: {
                label: t({
                  id: "generic.receive"
                }),
                handler: () => e(o.b.RECEIVE)
              }
            })
          })]
        }) : (0, n.jsxs)(b.LN, {
          children: [(0, n.jsx)(b.zY, {
            title: z.name,
            backAction: R
          }), (0, n.jsx)(b.Gv, {
            children: (0, n.jsx)(m, {
              nfts: F,
              onClick: _,
              hasNextPage: O,
              loadMoreItems: j
            })
          })]
        })
      }
    },
    65818: (e, t, l) => {
      l.d(t, {
        Q: () => o
      });
      var n = l(96540),
        i = l(78023);
      const o = e => {
        const t = (0, i.X)();
        return (0, n.useMemo)(() => t.find(t => t.id === e), [e, t])
      }
    }
  }
]);
