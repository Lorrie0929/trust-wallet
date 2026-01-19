try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e.l = e.l || {}, e.l[l] = "7d4968ff-b2e0-4e83-a6fe-019ba7d191df", e.t = "sentry-dbid-7d4968ff-b2e0-4e83-a6fe-019ba7d191df")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5901], {
    55901: (e, l, a) => {
      a.r(l), a.d(l, {
        default: () => N
      });
      var t = a(74848),
        s = a(23688),
        i = a(4800),
        r = a(6442),
        c = a(97286),
        d = a(64145),
        o = a(99360),
        n = a(52114),
        f = a(1279),
        h = a(2543),
        p = a(80179),
        u = a(23207),
        m = a(29584),
        y = a(63369);
      const g = ({
        dapps: e,
        categoryName: l
      }) => {
        const {
          trackAnalytics: a
        } = (0, u.s)(), {
          formatMessage: s
        } = (0, r.A)();
        return (0, y.K)({
          event: m.Un.DISCOVER,
          props: null
        }), 0 === e.length ? (0, t.jsx)("div", {
          className: "flex items-center justify-center py-8",
          children: (0, t.jsx)(n.E, {
            theme: f.Il.SECONDARY,
            type: f.jK.BODY_14,
            children: s({
              id: "discover.no-dapps-available",
              defaultMessage: "No dapps available in this category"
            })
          })
        }) : (0, t.jsx)("div", {
          className: "space-y-2 tw-scrollbar overflow-y-auto pb-4",
          children: e.map(e => (0, t.jsxs)("div", {
            className: "flex items-center space-x-3 p-3 rounded-lg hover:bg-utility-1-opacity-5 cursor-pointer transition-colors",
            onClick: () => (e => {
              a({
                event: m.BQ.DISCOVER_DAPP_CLICK,
                props: {
                  groupName: l,
                  dappUrl: e.url,
                  pageViewSource: m.Un.DISCOVER
                }
              }), (0, p.kK)(e.url)
            })(e),
            children: [(0, t.jsx)("div", {
              className: "flex-shrink-0",
              children: (0, t.jsx)("img", {
                src: e.image,
                alt: e.name,
                className: "w-12 h-12 rounded-lg object-cover"
              })
            }), (0, t.jsxs)("div", {
              className: "flex-1 min-w-0",
              children: [(0, t.jsx)(n.E, {
                theme: f.Il.UTILITY_1_DEFAULT,
                type: f.jK.SUBHEADER_16,
                weight: f.nG.MEDIUM,
                truncated: !0,
                children: e.name
              }), (0, t.jsx)(n.E, {
                theme: f.Il.UTILITY_1_OPACITY_1,
                type: f.jK.BODY_14,
                children: (0, h.truncate)(e.description, {
                  length: 82
                })
              })]
            })]
          }, e.i))
        })
      };
      var b = a(51848),
        x = a(79830),
        v = a(68632);
      const w = ({
          categories: e
        }) => [...e].sort((e, l) => e.category.order - l.category.order).map(e => (0, t.jsx)(b.oz, {
          "data-testid": "tab-" + e.category.i,
          className: "outline-none flex flex-col items-center justify-center h-full mb-0.5",
          children: ({
            selected: l
          }) => (0, t.jsxs)("div", {
            className: "flex flex-col w-fit h-full justify-between",
            children: [(0, t.jsx)("div", {
              className: "flex items-center h-full",
              children: (0, t.jsx)(n.E, {
                theme: l ? f.Il.UTILITY_1_DEFAULT : f.Il.UTILITY_1_OPACITY_2,
                type: f.jK.SUBHEADER_16,
                weight: f.nG.MEDIUM,
                noWrap: !0,
                children: e.category.name
              })
            }), (0, t.jsx)("div", {
              "data-selected": l,
              className: "w-full h-1 rounded-full data-[selected='true']:bg-primary"
            })]
          })
        }, e.category.i)),
        N = (0, s.K)(() => {
          const {
            formatMessage: e
          } = (0, r.A)(), {
            data: l,
            isLoading: a
          } = (0, c.I)({
            queryKey: ["dapp-discovery"],
            queryFn: () => d.YW.emit(o.A.FETCH_RECOMMENDED_DAPPS),
            staleTime: 3e5,
            gcTime: 6e5
          }), s = (l ?? []).sort((e, l) => e.category.order - l.category.order);
          return (0, t.jsxs)(i.LN, {
            children: [(0, t.jsx)(i.zY, {
              title: e({
                id: "discover.title",
                defaultMessage: "Discover"
              })
            }), (0, t.jsxs)("div", {
              className: "flex-1 flex flex-col",
              children: [!!s?.length && (0, t.jsxs)(b.fu, {
                as: t.Fragment,
                children: [(0, t.jsx)(b.wb, {
                  className: "flex space-x-4 mb-2 h-10 items-center overflow-x-auto tw-scrollbar flex-shrink-0",
                  children: (0, t.jsx)(w, {
                    categories: s
                  })
                }), (0, t.jsx)(b.T2, {
                  className: "flex-1 flex flex-col",
                  children: s.map(e => (0, t.jsx)(b.Kp, {
                    className: "flex-1 flex flex-col",
                    children: (0, t.jsx)(i.LO, {
                      children: (0, t.jsx)(g, {
                        dapps: e.results,
                        categoryName: e.category.name
                      })
                    })
                  }, e.category.i))
                })]
              }), !s?.length && (0, t.jsx)("div", {
                className: "flex-1 flex items-center justify-center",
                children: a ? (0, t.jsx)(x.y, {
                  size: v.Y.LARGE
                }) : (0, t.jsx)(n.E, {
                  theme: f.Il.SECONDARY,
                  type: f.jK.BODY_14,
                  children: e({
                    id: "generic.error",
                    defaultMessage: "An error occurred"
                  })
                })
              })]
            })]
          })
        })
    }
  }
]);
