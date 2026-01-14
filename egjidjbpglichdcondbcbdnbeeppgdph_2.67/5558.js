try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e.o = e.o || {}, e.o[o] = "d97ea718-f071-40ce-9c23-e958cc2b58c4", e.l = "sentry-dbid-d97ea718-f071-40ce-9c23-e958cc2b58c4")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [5558], {
    75558: e => {
      e.exports = function() {
        throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
      }
    }
  }
]);
