try {
  let M = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    N = (new M.Error).stack;
  N && (M.M = M.M || {}, M.M[N] = "e5e49921-1a29-4eee-9132-c1cf924f1781", M.N = "sentry-dbid-e5e49921-1a29-4eee-9132-c1cf924f1781")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5077], {
    45077: (M, N, D) => {
      D.r(N), D.d(N, {
        ReactComponent: () => a,
        default: () => e
      });
      var I, g, i = D(96540);

      function l() {
        return l = Object.assign ? Object.assign.bind() : function(M) {
          for (var N = 1; arguments.length > N; N++) {
            var D = arguments[N];
            for (var I in D)({}).hasOwnProperty.call(D, I) && (M[I] = D[I])
          }
          return M
        }, l.apply(null, arguments)
      }
      var a = function(M) {
        return i.createElement("svg", l({
          xmlns: "http://www.w3.org/2000/svg",
          width: 96,
          height: 96,
          fill: "none"
        }, M), i.createElement("mask", {
          id: "curacao_svg__a",
          width: 96,
          height: 96,
          x: 0,
          y: 0,
          maskUnits: "userSpaceOnUse",
          style: {
            maskType: "alpha"
          }
        }, I || (I = i.createElement("path", {
          fill: "#fff",
          d: "M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48"
        }))), g || (g = i.createElement("g", {
          mask: "url(#curacao_svg__a)"
        }, i.createElement("path", {
          fill: "#0052B4",
          d: "M141.046-.18H-3.134v96.12h144.18z"
        }), i.createElement("path", {
          fill: "#FFDA44",
          d: "M141.046 59.895H-3.134V71.91h144.18z"
        }), i.createElement("path", {
          fill: "#F0F0F0",
          d: "m21.477 20.386-1.602-4.897-1.602 4.897h-5.186l4.195 3.033-1.602 4.896 4.195-3.023 4.195 3.023-1.602-4.896 4.196-3.033zM36.275 33.842l-2.132-6.538-2.133 6.538h-6.919l5.597 4.035-2.132 6.529 5.587-4.035 5.597 4.035-2.143-6.529 5.597-4.035z"
        }))))
      };
      const e = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzJfNjE5MjkiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiI+CjxwYXRoIGQ9Ik00OCA5NkM3NC41MDk3IDk2IDk2IDc0LjUwOTcgOTYgNDhDOTYgMjEuNDkwMyA3NC41MDk3IDAgNDggMEMyMS40OTAzIDAgMCAyMS40OTAzIDAgNDhDMCA3NC41MDk3IDIxLjQ5MDMgOTYgNDggOTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMl82MTkyOSkiPgo8cGF0aCBkPSJNMTQxLjA0NiAtMC4xODAyMDZILTMuMTMzNzlWOTUuOTM5OUgxNDEuMDQ2Vi0wLjE4MDIwNloiIGZpbGw9IiMwMDUyQjQiLz4KPHBhdGggZD0iTTE0MS4wNDYgNTkuODk0OUgtMy4xMzM3OVY3MS45MDk5SDE0MS4wNDZWNTkuODk0OVoiIGZpbGw9IiNGRkRBNDQiLz4KPHBhdGggZD0iTTIxLjQ3NzIgMjAuMzg1NUwxOS44NzUyIDE1LjQ4OTNMMTguMjczMiAyMC4zODU1SDEzLjA4NjdMMTcuMjgxOSAyMy40MTkzTDE1LjY3OTkgMjguMzE1NEwxOS44NzUyIDI1LjI5MTZMMjQuMDcwNCAyOC4zMTU0TDIyLjQ2ODQgMjMuNDE5M0wyNi42NjM2IDIwLjM4NTVIMjEuNDc3MloiIGZpbGw9IiNGMEYwRjAiLz4KPHBhdGggZD0iTTM2LjI3NTQgMzMuODQyM0wzNC4xNDI3IDI3LjMwNDFMMzIuMDEwMSAzMy44NDIzSDI1LjA5MTRMMzAuNjg4NCAzNy44Nzc0TDI4LjU1NTggNDQuNDA1NUwzNC4xNDI3IDQwLjM3MDVMMzkuNzM5NyA0NC40MDU1TDM3LjU5NzEgMzcuODc3NEw0My4xOTQxIDMzLjg0MjNIMzYuMjc1NFoiIGZpbGw9IiNGMEYwRjAiLz4KPC9nPgo8L3N2Zz4K"
    }
  }
]);
