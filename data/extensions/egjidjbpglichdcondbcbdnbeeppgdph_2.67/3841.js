try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e.l = e.l || {}, e.l[l] = "69a9ee2c-8b19-471c-845f-658adb1502d8", e.o = "sentry-dbid-69a9ee2c-8b19-471c-845f-658adb1502d8")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3841], {
    63841: (e, l, o) => {
      o.r(l), o.d(l, {
        default: () => p
      });
      var t = o(74848),
        a = o(96540),
        f = o(85434),
        s = o(12996),
        d = o(8224),
        b = o(41383),
        n = o(37708);
      const p = () => {
        const e = (0, s.F)(),
          {
            flowCompleted: l
          } = (0, n.e)(),
          {
            data: {
              password: o
            }
          } = (0, a.useContext)(d.x),
          [p, u] = (0, a.useState)(e || l ? f.jK.COMPLETED : f.jK.AUTHENTICATION);
        (0, a.useEffect)(() => {
          e || o ? u(f.jK.COMPLETED) : p !== f.jK.COMPLETED && u(f.jK.AUTHENTICATION)
        }, [e]);
        const w = b.globalSteps[p];
        return (0, t.jsx)(w, {
          setCurrentStep: u
        })
      }
    }
  }
]);
