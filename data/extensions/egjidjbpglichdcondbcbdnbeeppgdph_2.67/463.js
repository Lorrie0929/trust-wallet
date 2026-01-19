try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e.l = e.l || {}, e.l[l] = "7f7f74c4-95b3-4d0b-9023-065890fe8be5", e.o = "sentry-dbid-7f7f74c4-95b3-4d0b-9023-065890fe8be5")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [463], {
    40463: (e, l, o) => {
      o.r(l), o.d(l, {
        OriginParam: () => h,
        default: () => p
      });
      var t = o(74848),
        i = o(68305),
        n = o(68315),
        d = o(26264),
        c = o(63369),
        f = o(4800),
        s = o(29584),
        r = o(34138),
        a = o(6442),
        b = o(47767);
      const h = {
          key: "origin",
          value: "reported"
        },
        p = () => {
          (0, c.K)({
            event: s.Un.NFT_REPORTED_COLLECTIONS,
            props: null
          });
          const e = (0, b.Zp)(),
            {
              formatMessage: l
            } = (0, a.A)(),
            {
              reportedItems: o
            } = (0, r.a)();
          return 0 === o.length ? (0, t.jsxs)(f.LN, {
            children: [(0, t.jsx)(f.zY, {
              title: l({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + d.b.DEFAULT)
            }), (0, t.jsx)(f.Gv, {
              children: (0, t.jsx)(n.w, {
                title: l({
                  id: "nft-collection.nothing-hidden"
                }),
                testid: "no-nfts-hidden"
              })
            })]
          }) : (0, t.jsxs)(f.LN, {
            children: [(0, t.jsx)(f.zY, {
              title: l({
                id: "nft-reported-collections.hidden-collections"
              }),
              backAction: () => e("" + d.b.DEFAULT)
            }), (0, t.jsx)(f.Gv, {
              children: (0, t.jsx)(f.LO, {
                children: (0, t.jsx)(i.I, {
                  collections: o,
                  onClick: l => {
                    e(`${d.b.NFT_COLLECTIONS}/${l.id}?${h.key}=${h.value}`)
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
