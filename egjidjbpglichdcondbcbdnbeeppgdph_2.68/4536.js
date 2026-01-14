"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [4536], {
    54536: (e, r, s) => {
      s.r(r), s.d(r, {
        default: () => Q
      });
      var n = s(74848),
        a = s(29584),
        c = s(26264),
        l = s(63369),
        d = s(95455),
        t = s(10537),
        i = s(15078),
        o = s(69275),
        h = s(3280),
        u = s(93155),
        v = s(96540),
        m = s(62184),
        p = s(65504),
        f = s(52114),
        b = s(1279),
        x = s(40053);
      const y = ({
        blockchain: e,
        address: r
      }) => {
        var s;
        return (0, n.jsx)("div", {
          className: "flex flex-col space-y-2",
          children: (0, n.jsxs)("div", {
            className: "flex justify-between space-x-3 py-2 items-center",
            children: [(0, n.jsx)("div", {
              children: (0, n.jsx)(p.q, {
                name: e.name,
                src: e.iconUrl
              })
            }), (0, n.jsxs)("div", {
              className: "flex-grow",
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(f.E, {
                  type: b.jK.BODY_16,
                  children: null != (s = e.displayName) ? s : e.name
                })
              }), (0, n.jsx)("div", {
                className: "flex flex-row space-x-1 items-center",
                children: (0, n.jsx)(f.E, {
                  type: b.jK.BODY_14,
                  theme: b.Il.UTILITY_1_OPACITY_1,
                  weight: b.nG.MEDIUM,
                  children: (0, x.p)({
                    value: r,
                    maxCharsPerSide: 6
                  })
                })
              })]
            }), (0, n.jsx)("div", {
              className: "text-right",
              children: (0, n.jsx)("div", {
                className: "p-1",
                children: (0, n.jsx)(m.i, {
                  coinId: e.coinId,
                  address: r,
                  width: 20,
                  height: 20
                })
              })
            })]
          })
        })
      };
      var g = s(4800),
        k = s(6442);
      const N = ({
        searchQuery: e
      }) => {
        const {
          formatMessage: r
        } = (0, k.A)(), s = (() => {
          const e = (0, h.p)(),
            r = (0, t.n)(!0),
            s = (0, i.I)(!0),
            n = (0, o.o)(),
            a = (0, v.useMemo)(() => ({
              ethereum: n[60],
              solana: n[501],
              binance: n[714]
            }), [n]),
            c = (0, v.useCallback)(e => !!n[e], [n]);
          return (0, v.useMemo)(() => {
            const l = [...r, ...s];
            return (e ? l.filter(e => c(e.coinId)) : l).map(e => {
              var r;
              const s = null == (r = n[e.coinId]) ? void 0 : r.address;
              if (!s) {
                const r = e.blockchain.toLowerCase(),
                  s = a[r];
                return s ? {
                  blockchain: e,
                  address: s.address
                } : (u.A.warn(`Could not retrieve address from account for blockchain ${e.name} and coin id ${e.coinId}`), null)
              }
              return {
                blockchain: e,
                address: s
              }
            }).filter(e => null !== e)
          }, [r, s, e, c, n, a])
        })(), a = (0, v.useMemo)(() => ((e, r) => e ? r.filter(({
          blockchain: r
        }) => {
          var s;
          return r.name.toLowerCase().includes(e.toLowerCase()) || (null == (s = r.displayName) ? void 0 : s.toLowerCase().includes(e.toLowerCase())) || r.chainId && !Number.isNaN(parseInt(e)) && parseInt(r.chainId) === parseInt(e)
        }) : r)(e, s), [e, s]);
        return 0 === a.length ? (0, n.jsx)(d.B, {
          message: r({
            id: "your-addresses.empty-search"
          })
        }) : (0, n.jsx)(g.LO, {
          children: a.map(({
            blockchain: e,
            address: r
          }) => (0, n.jsx)(y, {
            blockchain: e,
            address: r
          }, e.id))
        })
      };
      var w = s(8360),
        I = s(47996),
        C = s(29189),
        M = s(47767);
      const Q = () => {
        var e, r;
        (0, l.K)({
          event: a.Un.ADDRESSES,
          props: null
        });
        const s = (0, C.f)(),
          d = (0, I.o)(s ?? ""),
          {
            formatMessage: t
          } = (0, k.A)(),
          i = (0, M.Zp)(),
          [o, h] = (0, v.useState)(null != (r = null != (e = d?.displayName) ? e : d?.name) ? r : "");
        return (0, n.jsxs)(g.LN, {
          children: [(0, n.jsx)(g.zY, {
            backAction: () => i(c.b.DEFAULT),
            title: t({
              id: "your-addresses.title"
            })
          }), (0, n.jsxs)(g.Gv, {
            children: [(0, n.jsx)(w.D, {
              value: o,
              onChange: e => h(e.target.value),
              placeholder: t({
                id: "component.input-addresses-search.placeholder"
              })
            }), (0, n.jsx)(N, {
              searchQuery: o
            })]
          })]
        })
      }
    }
  }
]);
