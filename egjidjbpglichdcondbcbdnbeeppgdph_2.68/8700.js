"use strict";
(self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8700], {
    28700: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => p
      });
      var a = s(74848),
        i = s(71836),
        n = s(63369),
        r = s(82444),
        d = s(98939),
        l = s(29584),
        c = s(6442),
        o = s(74215);
      const p = () => {
        const e = (0, o.v)();
        (0, n.K)({
          event: l.Un.ONBOARDING_MAX_ACCOUNTS_REACHED,
          props: {
            setupType: e
          }
        });
        const {
          formatMessage: t
        } = (0, c.A)();
        return (0, a.jsx)(r.Q, {
          heading: t({
            id: "max-wallets-reached.title"
          }, {
            b: () => (0, a.jsx)("b", {
              children: d.Dv
            })
          }),
          subHeading: t({
            id: "max-wallets-reached.description"
          }),
          animation: (0, a.jsx)(i.D, {})
        })
      }
    }
  }
]);
