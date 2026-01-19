"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463], {
    40463: (e, t, n) => {
      n.r(t), n.d(t, {
        OriginParam: () => p,
        default: () => u
      });
      var i = n(74848),
        l = n(68305),
        o = n(68315),
        c = n(26264),
        d = n(63369),
        r = n(4800),
        s = n(29584),
        a = n(34138),
        h = n(6442),
        f = n(47767);
      const p = {
          key: "origin",
          value: "reported"
        },
        u = () => {
          (0, d.K)({
            event: s.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, f.Zp)(),
            {
              formatMessage: t
            } = (0, h.A)(),
            {
              reportedItems: n
            } = (0, a.a)();
          return 0 === n.length ? (0, i.jsxs)(r.LN, {
            children: [(0, i.jsx)(r.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, i.jsx)(r.Gv, {
              children: (0, i.jsx)(o.w, {
                title: t({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, i.jsxs)(r.LN, {
            children: [(0, i.jsx)(r.zY, {
              title: t({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + c.b.DEFAULT)
            }), (0, i.jsx)(r.Gv, {
              children: (0, i.jsx)(r.LO, {
                children: (0, i.jsx)(l.I, {
                  collections: n,
                  onClick: t => {
                    e(`${c.b.NFT_COLLECTIONS}/${t.id}?${p.key}=${p.value}`)
                  },
                  alwaysShowAllCollections: !0
                })
              })
            })]
          })
        }
    }
  }
]);
