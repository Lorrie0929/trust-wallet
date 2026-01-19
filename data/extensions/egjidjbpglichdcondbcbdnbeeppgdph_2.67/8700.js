try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e.l = e.l || {}, e.l[l] = "85811fb6-d246-45d7-816b-1975fc445fc3", e.o = "sentry-dbid-85811fb6-d246-45d7-816b-1975fc445fc3")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8700], {
    28700: (e, l, o) => {
      o.r(l), o.d(l, {
        default: () => c
      });
      var t = o(74848),
        a = o(71836),
        f = o(63369),
        s = o(82444),
        d = o(98939),
        i = o(29584),
        n = o(6442),
        b = o(74215);
      const c = () => {
        const e = (0, b.v)();
        (0, f.K)({
          event: i.Un.ONBOARDING_MAX_ACCOUNTS_REACHED,
          props: {
            setupType: e
          }
        });
        const {
          formatMessage: l
        } = (0, n.A)();
        return (0, t.jsx)(s.Q, {
          heading: l({
            id: "max-wallets-reached.title"
          }, {
            b: () => (0, t.jsx)("b", {
              children: d.Dv
            })
          }),
          subHeading: l({
            id: "max-wallets-reached.description"
          }),
          animation: (0, t.jsx)(a.D, {})
        })
      }
    }
  }
]);
