try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e.t = e.t || {}, e.t[n] = "3008802e-5a10-4e33-bac3-28d73753dfba", e.i = "sentry-dbid-3008802e-5a10-4e33-bac3-28d73753dfba")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [2176], {
    20002: (e, n, t) => {
      t.d(n, {
        g: () => o
      });
      var r, o = ((r = o || {}).MOBILE_PAY = "MOBILE_PAY", r.BANK_TRANSFER = "BANK_TRANSFER", r.CREDIT_CARD = "CREDIT_CARD", r.DIGITAL_WALLET = "DIGITAL_WALLET", r.P2P = "P2P", r.OTHER = "OTHER", r)
    },
    37464: (e, n, t) => {
      t.d(n, {
        m: () => l
      });
      var r = t(84568),
        o = t(68157),
        i = t(84773),
        a = t(91565);

      function l(e) {
        var n, t, l;
        const {
          deviceId: c,
          hashKey: s
        } = o.M_.getState().app;
        if (!c || !s || null == (n = e.url) || !n.startsWith(r.W2)) return e;
        const u = null == (t = e.method) ? void 0 : t.toUpperCase(),
          [f, d] = e.url.slice(r.W2.length).split("?"),
          y = Object.entries(null != (l = e.params) ? l : {}).filter(([, e]) => void 0 !== e).flatMap(([e, n]) => `${e}=${n}`).join("&"),
          h = (0, i.p)(d ?? y),
          w = (new Date).toUTCString(),
          p = crypto.randomUUID(),
          v = [u, f, h, c, p, w].join(";"),
          m = a.createHmac("sha256", s).update(v).digest("base64");
        return e.headers["X-TW-DATE"] = w, e.headers["X-TW-NONCE"] = p, e.headers["X-TW-CREDENTIAL"] = c, e.headers.Authorization = "HMAC-SHA256 Signature=" + m, e
      }
    },
    42148: (e, n, t) => {
      t.d(n, {
        HK: () => v,
        HV: () => I,
        MK: () => P,
        RT: () => m,
        Rl: () => O,
        WD: () => b,
        gk: () => g,
        vQ: () => p
      });
      var r = t(79372),
        o = (t(20002), t(29251), t(49971), t(62643)),
        i = t(48287).Buffer,
        a = Object.defineProperty,
        l = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        u = {}.hasOwnProperty,
        f = {}.propertyIsEnumerable,
        d = (e, n, t) => n in e ? a(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        y = (e, n) => {
          for (var t in n || (n = {})) u.call(n, t) && d(e, t, n[t]);
          if (s)
            for (var t of s(n)) f.call(n, t) && d(e, t, n[t]);
          return e
        },
        h = (e, n) => l(e, c(n)),
        w = (e, n, t) => new Promise((r, o) => {
          var i = e => {
              try {
                l(t.next(e))
              } catch (e) {
                o(e)
              }
            },
            a = e => {
              try {
                l(t.throw(e))
              } catch (e) {
                o(e)
              }
            },
            l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
          l((t = t.apply(e, n)).next())
        });

      function p(e, n) {
        r.hB.forEach(t => {
          const r = e.findIndex(e => e.symbol === t && !e.address);
          if (r >= 0 && (e[r] = h(y({}, e[r]), {
              hardwareSupportComingSoon: !0
            })), -1 === r) {
            const r = n.find(e => e.symbol === t && !e.address);
            r && e.push(h(y({}, r), {
              hardwareSupportComingSoon: !0
            }))
          }
        })
      }

      function v(e) {
        return e.origin.includes("ramp")
      }

      function m(e) {
        return e.origin.includes("mercuryo")
      }

      function b(e) {
        return e.origin.includes("moonpay")
      }

      function g(e) {
        return !e.origin.includes("ramp") && !e.origin.includes("moonpay")
      }

      function P(e, n, t, r) {
        return w(this, null, function*() {
          const i = [o.yq.transfer({
              fromPubkey: e,
              toPubkey: n,
              lamports: t
            })],
            a = new o.wu({
              payerKey: e,
              recentBlockhash: (yield r.getLatestBlockhash()).blockhash,
              instructions: i
            }).compileToV0Message();
          return new o.Kt(a)
        })
      }

      function I(e) {
        const n = JSON.stringify(e),
          t = "number" != typeof e.version ? "legacy" : e.version;
        return {
          data: n,
          raw: i.from(e.serialize()).toString("base64"),
          version: t
        }
      }

      function O(e) {
        return !!e?.OTHER
      }
    },
    67168: (e, n, t) => {
      t.d(n, {
        U: () => c
      });
      var r = t(8935),
        o = t(68157),
        i = t(61855),
        a = t(91565),
        l = (e, n, t) => new Promise((r, o) => {
          var i = e => {
              try {
                l(t.next(e))
              } catch (e) {
                o(e)
              }
            },
            a = e => {
              try {
                l(t.throw(e))
              } catch (e) {
                o(e)
              }
            },
            l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
          l((t = t.apply(e, n)).next())
        });

      function c() {
        return l(this, null, function*() {
          let e = (0, r.KF)();
          return e || (e = yield function() {
            return l(this, null, function*() {
              let e = crypto.randomUUID();
              return e += "-" + (0, a.createHash)("sha256").update(e).digest("hex").substring(0, 4), e
            })
          }(), o.M_.dispatch(i.A.actions.setAuthIdentifier(e))), e
        })
      }
    },
    72396: (e, n, t) => {
      t.d(n, {
        f: () => L
      });
      var r = t(74848),
        o = t(11377),
        i = t(79372),
        a = t(42148),
        l = t(68632),
        c = t(22146),
        s = t(64145),
        u = t(99360),
        f = t(68157),
        d = t(75485),
        y = t(28398),
        h = t(47996),
        w = t(10537),
        p = t(81282),
        v = t(66392),
        m = t(40790),
        b = t(71287),
        g = t(62643),
        P = t(96540),
        I = t(6442),
        O = t(16763),
        A = (t.n(O), t(84525)),
        E = Object.defineProperty,
        R = Object.defineProperties,
        S = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        C = {}.hasOwnProperty,
        k = {}.propertyIsEnumerable,
        D = (e, n, t) => n in e ? E(e, n, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }) : e[n] = t,
        j = (e, n, t) => new Promise((r, o) => {
          var i = e => {
              try {
                l(t.next(e))
              } catch (e) {
                o(e)
              }
            },
            a = e => {
              try {
                l(t.throw(e))
              } catch (e) {
                o(e)
              }
            },
            l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
          l((t = t.apply(e, n)).next())
        });
      const L = ({
        url: e,
        selectedCrypto: n,
        opened: t,
        onClose: E
      }) => {
        const {
          formatMessage: L
        } = (0, I.A)(), N = (0, w.n)(!0), U = (0, h.o)(n.blockchainId), $ = (0, p.o)(U.id), _ = (0, m.F7)((0, d.X2)(n.assetId, !0)), B = e.includes("ramp"), H = (0, P.useMemo)(() => B ? e.replace("webview-mobile", "webview-desktop") : e, [e]), K = (0, P.useCallback)(e => {
          var t;
          const {
            data: {
              payload: r
            }
          } = e;
          if ("SEND_CRYPTO" === e.data.type) {
            if (n.assetId.toLowerCase() !== (null == (t = r.assetInfo.assetId) ? void 0 : t.toLowerCase())) throw Error("Asset ID mismatch");
            return {
              value: r.amount,
              to: r.address,
              network: U,
              asset: n,
              isInternal: !0,
              type: v.w.Send
            }
          }
        }, [n, N]), M = ((0, P.useCallback)(e => {
          const {
            data: {
              payload: t
            }
          } = e;
          if ("SEND_CRYPTO" === e.data.type) {
            if (n.assetId.toLowerCase() !== t.assetInfo.uai.toLowerCase()) throw Error("Asset ID mismatch");
            return {
              value: (0, A.nj)(t.amount),
              to: t.address,
              network: U,
              asset: n,
              isInternal: !0,
              type: v.w.Send
            }
          }
        }, [n, N]), (0, P.useCallback)(e => {
          var t, r;
          const {
            payload: o,
            type: i
          } = JSON.parse(e.data);
          if ("SEND_CRYPTO" !== i) return;
          const a = !!parseInt(o.currency.metadata.chainId),
            l = U.chainId === o.currency.metadata.chainId;
          if (a && !l) throw Error("Blockchain not found when forming a transaction");
          const c = 0 === parseInt(o?.currency.metadata.contractAddress),
            s = !!n.address,
            u = (null == (t = n.address) ? void 0 : t.toLowerCase()) !== (null == (r = o?.currency.metadata.contractAddress) ? void 0 : r.toLowerCase());
          if (c && !U || s && u) throw Error("Asset ID mismatch");
          return {
            value: (0, A.nj)(o.amount),
            to: o.address,
            network: U,
            asset: n,
            isInternal: !0,
            type: v.w.Send
          }
        }, [n, N])), Y = e => j(null, null, function*() {
          if ((e => !new URL(H).toString().startsWith(new URL(e.origin).toString()) && e.origin !== i.u)(e)) throw Error("Event origin different");
          let n;
          (0, a.HK)(e) ? (e.data.payload.amount = (0, A.nj)(e.data.payload.amount), e.data.payload.assetInfo.assetId = e.data.payload.assetInfo.uai, n = K(e)) : (0, a.RT)(e) ? (e.data.payload.amount = (0, A.nj)(e.data.payload.amount), n = K(e)) : (0, a.WD)(e) ? n = M(e): (0, a.gk)(e) && (n = K(e)), n?.asset && (n.network.blockchain.toLowerCase() === o.J.solana ? yield(e => j(null, null, function*() {
            const n = (0, b.y7)($.url),
              t = yield(0, a.MK)(new g.J3(_?.address), new g.J3(e.to), +e.value, n), r = (0, a.HV)(t), o = yield s.YW.emit(u.A.SOL_SIGN_RAW_TRANSACTION, (e => R(e, S({
                isInternal: !0
              })))(((e, n) => {
                for (var t in n || (n = {})) C.call(n, t) && D(e, t, n[t]);
                if (T)
                  for (var t of T(n)) k.call(n, t) && D(e, t, n[t]);
                return e
              })({}, r)));
            yield((e, n, t) => j(null, null, function*() {
              e.addSignature(new g.J3(_?.address), O.decode(n)), yield t.sendRawTransaction(e.serialize())
            }))(t, o, n)
          }))(n): (yield f.M_.dispatch(y.A.actions.setSelectedBlockchain({
            id: U.id,
            selectedBlockchainType: U.isCustom ? y.l.CUSTOM : y.l.MAIN
          })), yield s.YW.emit(u.A.ETH_SEND_TRANSACTION, n)))
        });
        return (0, P.useEffect)(() => (window.addEventListener("message", Y), () => window.removeEventListener("message", Y)), [e]), (0, r.jsx)(c.a, {
          title: L({
            id: "generic.sell-crypto"
          }),
          opened: t,
          size: e.includes("ramp") ? l.Y.LARGE : l.Y.MEDIUM,
          onClose: E,
          children: (0, r.jsx)("iframe", {
            src: H,
            height: "610px",
            width: "100%"
          })
        })
      }
    },
    75478: (e, n, t) => {
      t.d(n, {
        e: () => y
      });
      var r = t(39255),
        o = t(98939),
        i = t(84568),
        a = t(68157),
        l = t(61855),
        c = t(67168),
        s = t(99603),
        u = t(93155),
        f = (e, n, t) => new Promise((r, o) => {
          var i = e => {
              try {
                l(t.next(e))
              } catch (e) {
                o(e)
              }
            },
            a = e => {
              try {
                l(t.throw(e))
              } catch (e) {
                o(e)
              }
            },
            l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
          l((t = t.apply(e, n)).next())
        });
      let d = !1;

      function y(e) {
        return f(this, null, function*() {
          var n, t, f;
          const y = 403 === (null == (n = e.response) ? void 0 : n.status),
            h = null == (f = null == (t = e.response) ? void 0 : t.config.url) ? void 0 : f.startsWith(i.W2);
          if (y && h && !d) {
            d = !0;
            const e = yield(0, c.U)();
            yield s.A.post(i.W2 + "/v2/devices/fingerprint", {
              identifier: e,
              bundle: r.RL,
              sr: o.O0
            }).then(({
              data: e
            }) => a.M_.dispatch(l.A.actions.setHashKey(e.hash_key))).catch(e => {
              u.A.warn("Error while fetching hash key", e)
            }).finally(() => {
              d = !1
            })
          }
          return Promise.reject(e)
        })
      }
    },
    77333: (e, n, t) => {
      t.d(n, {
        B: () => o
      });
      var r = t(86852);
      const o = e => (e.headers.traceparent = (0, r.J3)(), e)
    },
    84773: (e, n, t) => {
      function r(e) {
        if (!e) return e;
        const n = new URLSearchParams(e),
          t = Array.from(n.keys());
        t.sort((e, n) => e.localeCompare(n));
        const r = new Set(t),
          o = [];
        for (const e of r) {
          const t = n.getAll(e);
          for (const n of t) o.push(`${encodeURIComponent(e)}=${encodeURIComponent(n)}`)
        }
        return o.join("&")
      }
      t.d(n, {
        p: () => r
      }), t(90658)
    },
    86852: (e, n, t) => {
      t.d(n, {
        J3: () => a
      });
      var r, o = ((r = o || {}).VERSION = "00", r.SAMPLED_FLAG = "01", r.UNSAMPLED_FLAG = "00", r);
      const i = e => {
          let n;
          do {
            const t = new Uint8Array(e / 2);
            crypto.getRandomValues(t), n = Array.from(t).map(e => e.toString(16).padStart(2, "0")).join("")
          } while (n.split("").every(e => "0" === e));
          return n
        },
        a = (e = !0) => `00-${i(32)}-${i(16)}-${e?"01":"00"}`
    },
    96324: (e, n, t) => {
      t.d(n, {
        l: () => o
      });
      var r, o = ((r = o || {}).ALL = "all", r.BUY_CRYPTO = "buycrypto", r.SELL_CRYPTO = "sellcrypto", r)
    },
    99603: (e, n, t) => {
      t.d(n, {
        A: () => c,
        h: () => l
      });
      var r = t(37464),
        o = t(77333),
        i = t(75478),
        a = t(71287);
      const l = t(57536).A.create({
        timeout: 5e3,
        adapter: "fetch",
        headers: {
          [a.k0.name]: a.k0.value
        }
      });
      l.interceptors.request.use(o.B, e => e), l.interceptors.request.use(r.m, e => e), l.interceptors.response.use(e => e, i.e);
      const c = l
    }
  }
]);
