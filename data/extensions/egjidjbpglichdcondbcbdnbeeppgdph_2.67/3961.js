try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.u = e.u || {}, e.u[t] = "adfd44c1-1589-485e-88f1-6a91ddd5e0f2", e.k = "sentry-dbid-adfd44c1-1589-485e-88f1-6a91ddd5e0f2")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [3961], {
    3961: (e, t, r) => {
      r.r(t), r.d(t, {
        App: () => ar,
        Page: () => nr,
        default: () => sr
      });
      var i = r(74848),
        n = r(8457),
        a = r(26264),
        s = r(23688),
        o = r(44199),
        l = r(35177),
        d = r(16742),
        c = r(29584),
        h = r(63369),
        u = r(96540),
        p = Object.defineProperty,
        f = Object.defineProperties,
        m = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        C = {}.hasOwnProperty,
        k = {}.propertyIsEnumerable,
        b = (e, t, r) => t in e ? p(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        x = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && b(e, r, t[r]);
          if (F)
            for (var r of F(t)) k.call(t, r) && b(e, r, t[r]);
          return e
        },
        v = (e, t) => f(e, m(t));
      const g = (0, u.createContext)({
          getAsset: e => null,
          setAsset: (e, t) => {}
        }),
        w = ({
          children: e
        }) => {
          const [t, r] = (0, u.useState)({});

          function n() {
            return (new Date).getTime()
          }
          const a = {
            getAsset: e => t[e] && n() <= t[e].expiresAt ? t[e] : null,
            setAsset: (e, t) => {
              r(r => v(x({}, r), {
                [e]: v(x({}, t), {
                  expiresAt: n() + 3e5
                })
              }))
            }
          };
          return (0, i.jsx)(g.Provider, {
            value: a,
            children: e
          })
        };
      var L = r(95455),
        y = r(50882),
        A = r(88774),
        D = r(65504),
        E = r(69254),
        B = r(52114),
        N = r(1279),
        M = r(21094),
        j = r(7668),
        P = r(19376),
        S = r(73241);
      const W = ({
        symbol: e,
        name: t,
        iconUrl: r,
        blockchain: n,
        value: a,
        disabled: s,
        balance: o,
        contractAddress: l,
        isRwa: d
      }) => (0, i.jsx)(j.sx, {
        value: a,
        disabled: s,
        className: "cursor-pointer",
        children: ({
          checked: a
        }) => (0, i.jsxs)("div", {
          className: "flex items-center justify-between " + (s ? "opacity-50" : "opacity-100"),
          children: [(0, i.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [(0, i.jsx)(D.q, {
              src: r,
              name: t,
              network: l ? n : void 0
            }), (0, i.jsxs)("div", {
              className: "flex flex-col",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [(0, i.jsx)(B.E, {
                  testid: "asset-record-symbol",
                  type: N.jK.TITLE,
                  theme: a ? N.Il.BRAND : N.Il.PRIMARY,
                  children: e
                }), d && (0, i.jsx)(P.v, {
                  size: S.V.SMALL,
                  theme: S.x.SECONDARY,
                  children: "RWA"
                }), n.displayName && (0, i.jsx)(y.E, {
                  text: n.displayName
                })]
              }), (0, i.jsx)(B.E, {
                testid: "asset-record-name",
                type: N.jK.TITLE,
                theme: N.Il.THIRD,
                children: t
              })]
            })]
          }), (0, i.jsxs)("div", {
            className: "flex items-center space-x-1",
            children: [o && parseFloat(o) > 0 && (0, i.jsx)(E.h, {
              testid: "asset-record-balance",
              amountType: M.Cu.CRYPTO,
              value: parseFloat(o),
              textType: N.jK.TITLE,
              theme: a ? N.Il.BRAND : N.Il.PRIMARY
            }), a && (0, i.jsx)(A.S, {
              width: 20,
              height: 20,
              colorClass: "text-primary"
            })]
          })]
        })
      });
      var T = r(11377);
      const O = ["XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB", "Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh", "XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1", "XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ", "XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W", "Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ", "XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN", "Preb5VKsmKgMGhMKUhDpe7A2AhMDmrZtMMZmvFEhLbU", "Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re", "XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg", "Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu", "XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp", "Prep57BLk9uKWRzKigtQBbrYFxcDXtHuCjxFRM5UXAS", "XsaQTCgebC2KPbf27KUhdv5JFvHhQ4GDAPURwrEhAzb", "Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu", "PreYKD2kJ5xGgoZ644VPfbEN7sW8bWCUREHr5S3ebV9", "Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg", "PrekBgzytydXoDTrH5NW9ABP68c96twxML8oV1NnV8d", "PreYPq1LdVBhKsYC3nRmZW5Y9yJXwSuDYmUSikFCwGS", "Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy", "PreGERrFuZAJqTxJ5oC3DeQmfdrniNzJgqKGFb2ZLE6", "XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe", "XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2"],
        V = ["0x9DCf7f739B8C0270E2FC0Cc8D0DaBe355a150dBa", "0x3807562a482b824c08a564dfefcc471806d3e00a", "0x2Df38cA485D01fC15e4FD85847ed26b7EF871c1c", "0x0692481C369E2BDc728A69ae31b848343a4567Be", "0xeD3618Bb8778F8eBBe2f241Da532227591771D04", "0x71d24Baeb0A033ec5F90FF65C4210545AF378D97", "0xD08DDb436e731f32455Fe302723eE0FD2E9E8706", "0x73d2ccEE12C120E7DA265a2dE9d9f952a0101b4f", "0x21deafD91116FCe9fE87C8f15Bde03f99a309b72", "0x4604b0b581269843ac7a6b70A5FC019E7762e511", "0x06954faa913fA14c28Eb1b2e459594F22f33f3dE", "0x77A1a02e4a888ADA8620b93C30dE8a41E621126c", "0x4EFD92F372898B57F292De69fCe377dd7D912bDd", "0x3859385363f7BB4Dfe42811cCF3F294FcD41dd1D", "0xCa468554e5C0423Ee858fe3942c9568C51FcAa79", "0x28151F5888833D3d767C4d6945a0Ee50D1B193E3", "0x4111b60bc87F2Bd1e81E783E271D7F0ec6EE088B", "0xD8e26FcC879b30cB0a0B543925a2B3500f074D81", "0xFdA09936DbD717368De0835bA441d9E62069d36f", "0xFEFf7a377A86462F5a2A872009722C154707F09e", "0x2ca12a3F9635fD69C21580def14F25C210cA9612", "0xF404E5f887dBd5508e16a1198fCDD5DE1A4296B8", "0xfF7CF16aA2fFc463b996DB2f7B7cf0130336899D", "0x5Bcd8195E3Ef58f677aeF9eBC276B5087c027050", "0xE3419710c1f77D44B4DaB02316d3f048818C4E59", "0xf15FbC1349ab99ABAd63db3f9A510BF413bE3BeF", "0xb035c3d5083bdc80074F380aeBc9Fcb68aBa0A28", "0x980a1001ee94e54142b231f44C7CA7c9DF71FBe1", "0x25018520138bbaB60684AD7983D4432E8B8E926B", "0x5Ce215d9c37a195DF88e294a06B8396C296B4e15", "0x74a03d741226f738098C35da8188E57acA50d146", "0x8d05432C2786e3F93f1a9A62b9572DBf54f3ea06", "0x01B19c68f8A9eE3a480dA788ba401cFAbdf19B93", "0x5Bf1b2A808598C0eF4Af1673a5457d86fE6d7B3d", "0xdeB6B89088cA9B7d7756087c8a0F7C6DF46f319C", "0x050362Ab1072Cb2Ce74d74770E22A3203Ad04ee5", "0x998f02A9E343EF6E3E6f28700d5A20F839fD74E6", "0x82106347dDbB23cE44Cf4cE4053Ef1adf8b9323B", "0xaB02fc332e9278eBCbbC6B4a8038050c01D15F69", "0x908266C1192628371Cff7AD2F5Eba4dE061a0ac5", "0xA9431d354cFAD3c6B76E50f0e73b43D48Be80CD0", "0x4D21aFfD27183B07335935F81A5C26b6A5A15355", "0xc3D93B45249E8E06cfeB01d25A96337E8893265d", "0x3cE219D498D807317F840f4CB0f03FA27dd65046", "0x0C1f3412A44Ff99E40bF14e06e5Ea321aE7B3938", "0x4AD2118Da8a65eaa81402A3d583FEF6eE76BDf3F", "0x9d4C6AD12B55E4645b585209F90Cc26614061E91", "0x8a23C6BaadB88512b30475C83Df6A63881e33e1E", "0x339ce23a355ed6D513DD3e1462975C4eCD86823a", "0x0c666485b02F7A87d21AdD7AEb9F5e64975AA490", "0x3632DEa96A953C11dac2f00b4A05a32CD1063fAE", "0xbc843b147DB4C7E00721d76037b8b92e13AfE13f", "0x8F3E41b378ae010c46d255F36bFC1D303b52dceb", "0x3Cafdbfe682aec17d5acE2f97A2f3ab3dCf6a4A9", "0x34bfdFF25F0fdA6d3ad0c33F1e06c0D40bD68885", "0x41765F0FCddC276309195166C7A62AE522FA09ef", "0x0d54D4279B9E8c54cD8547c2C75A8Ee81A0BcaE8", "0x03C1EC4CA9DBb168E6Db0DeF827c085999CBffaF", "0x55720eF5b023Fd043AE5F8D2e526030207978950", "0xbb8774FB97436d23d74C1b882E8E9A69322cFD31", "0x5D1a9a9B118fF19721e0111f094f2360b6Ef7A2f", "0xbA47214eDd2bb43099611b208f75E4b42FDcfEDc", "0x2Bc7Ff0C5dA9F1a4A51F96e77C5b0F7165DC06d2", "0x25d3f236B2d61656eebdeA86Ac6D42168e340011", "0x241958c86c7744d15d5f6314BA1Ea4c81DDA2896", "0xAbA9Ae731Aad63335C604E5f6E6A5db2e05f549d", "0xFd50Fc4E3686a8DA814c5C3D6121d8aB98a537F0", "0xF042cfa86cf1D598a75Bdb55c3507a1F39f9493b", "0x57270D35A840BC5C094da6FBeCA033FB71eA6Ab0", "0xD904bCf89B7CedF5c89f9Df7e829191D695F847E", "0xd5C5B2883735Fa9B658Dd52e2FCC8d7c0f1A42Ce", "0x14c3abF95Cb9C93a8b82C1CdCB76D72Cb87b2d4c", "0xA29dC2102dfc2a0A4A5dCb84Af984315567c9858", "0x691b126cF619707Ed5d16CaB1B27C000aa8De300", "0x6cc0afD51CE4Cb6920B775F3D6376Ab82b9A93Bb", "0x4C82c8cD9a218612DCe60b156B73A36705645e3b", "0xCabD955322dfbf94C084929ac5E9Eca3fEB5556F", "0xdB57d9C14e357Fc01E49035a808779Df41E9B4e2", "0x7042a8fFc7c7049684BfBc2fcb41b72380755a43", "0x2D1F7226Bd1F780AF6B9A49DCC0aE00E8Df4bDEE", "0x075756F3b6381a79633438fAA8964946bf40163d", "0xB812837b81a3a6b81d7CD74CfB19A7f2784555E5", "0xaC37c20C1d0E5285035e056101a64e263Ff94a41", "0x590F21186489cA1612f49a4B1ff5c66acD6796A9", "0xf6b1117ec07684D3958caD8BEb1b302bfD21103f", "0x7a0F89c1606f71499950AA2590d547c3975B728E", "0xE51bA774ebF6392c45Bf1d9E6b334d07992460d3", "0xf192957AE52dB3eb088654403CC2eDeD014ae556", "0x8bCF9012f4b0c1C3D359eDb7133C294f82f80790", "0x59644165402b611b350645555B50Afb581C71EB2", "0x070D79021dD7e841123cB0CF554993bF683c511D", "0x992651BFeB9A0DCC4457610E284ba66D86489d4d", "0x0c8276E4FeC072cf7854Be69c70F7773D1610857", "0x032deC3372F25C41EA8054B4987a7c4832CDB338", "0x62cA254a363dc3c748e7E955c20447aB5bF06fF7", "0xF3e4872e6a4cF365888D93b6146a2bAA7348F1A4", "0x2816169A49953C548BfEb3948dCF05c4A0E4657D", "0x4f0CA3df1c2e6b943cf82E649d576ffe7B2fABCF", "0xe5b26BA77E6a4d79a7c54a5296d81254269D9700", "0x0e397938C1Aa0680954093495B70A9F5e2249aBa", "0xFeDC5f4a6c38211c1338aa411018DFAf26612c08", "0x073E7a0669833d356fa88ca65CC6D454EFaAa3c5", "0xcDD60D15125bf3362b6838D2506b0Fa33bc1a515", "0xfDb46864A7C476F0914c5E82CdED3364a9F56F8a"],
        R = "c20000714";

      function Z(e) {
        return !!e.address && (e.blockchain.name.toLowerCase() === T.J.solana.toLowerCase() ? O.includes(e.address) : e.blockchain.name.toLowerCase() === T.J.ethereum.toLowerCase() && V.includes(e.address))
      }
      var I = r(64145),
        _ = r(89408),
        z = r(26858),
        U = r(47991),
        H = r(75485),
        q = r(10537),
        X = r(82361),
        G = r(69275),
        K = r(79960),
        Q = r(33055),
        J = r(29251),
        Y = Object.defineProperty,
        $ = Object.defineProperties,
        ee = Object.getOwnPropertyDescriptors,
        te = Object.getOwnPropertySymbols,
        re = {}.hasOwnProperty,
        ie = {}.propertyIsEnumerable,
        ne = (e, t, r) => t in e ? Y(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        ae = (e, t) => {
          for (var r in t || (t = {})) re.call(t, r) && ne(e, r, t[r]);
          if (te)
            for (var r of te(t)) ie.call(t, r) && ne(e, r, t[r]);
          return e
        },
        se = (e, t) => $(e, ee(t));
      const oe = e => {
          const t = (0, q.n)(),
            r = (0, K.t)(),
            i = (0, X.B)();
          return (0, u.useMemo)(() => e.reduce((e, n) => {
            var a;
            const s = i.find(e => e.id === n.assetId);
            return e.push(se(ae({}, n), {
              fiat: s,
              blockchain: t[n.blockchainId],
              balance: (null == (a = r[n.assetId]) ? void 0 : a.balance) || "0"
            })), e
          }, []).sort(H.JG), [e, r, i, t])
        },
        le = e => {
          const t = (0, U.P)(),
            [r, i] = (0, u.useState)(null),
            n = (0, u.useMemo)(() => t.find(t => e === t.assetId), [t, e]);
          (0, u.useEffect)(() => {
            !n && e && ((e, t, r) => {
              new Promise((e, t) => {
                var i = e => {
                    try {
                      a(r.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  n = e => {
                    try {
                      a(r.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
                a((r = r.apply(null, null)).next())
              })
            })(0, 0, function*() {
              const {
                address: t
              } = (0, H.$5)(e), {
                data: r
              } = yield I.YW.emit(_.A.SEARCH_ASSETS, {
                query: t,
                networks: [(0, H.er)(e)],
                includeNonCustomTokenNetworks: !0
              });
              r?.length && i(r[0])
            })
          }, [n, e]);
          const a = n || r;
          return oe(a ? [a] : [])
        };
      var de = r(8360),
        ce = r(8168),
        he = r(22146),
        ue = r(79830),
        pe = r(38795),
        fe = r(2543),
        me = r(6442),
        Fe = Object.defineProperty,
        Ce = Object.defineProperties,
        ke = Object.getOwnPropertyDescriptors,
        be = Object.getOwnPropertySymbols,
        xe = {}.hasOwnProperty,
        ve = {}.propertyIsEnumerable,
        ge = (e, t, r) => t in e ? Fe(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        we = (e, t) => {
          for (var r in t || (t = {})) xe.call(t, r) && ge(e, r, t[r]);
          if (be)
            for (var r of be(t)) ve.call(t, r) && ge(e, r, t[r]);
          return e
        },
        Le = (e, t) => Ce(e, ke(t));
      const ye = ({
          header: e,
          defaultAssets: t,
          reservedAsset: r,
          scopedBlockchain: n,
          selectedAsset: a,
          onAssetSelect: s,
          opened: o,
          onClose: l
        }) => {
          const {
            formatMessage: d
          } = (0, me.A)(), c = le(n), h = (0, q.n)(), [p, f] = (0, u.useState)(""), [m, F] = (0, u.useState)(!1), {
            flattenData: C,
            isFetching: k,
            setQuery: b
          } = (0, pe.r)([n], !0), x = (0, u.useMemo)(() => {
            var e, r, i, n;
            if (0 === C.length) return t;
            const a = null == (e = t.without) ? void 0 : e.items,
              s = null == (r = t.balance) ? void 0 : r.items,
              o = new Set([...null != (i = a?.map(e => e.assetId)) ? i : [], ...null != (n = s?.map(e => e.assetId)) ? n : []]),
              l = C.filter(e => !o.has(e.assetId));
            return Le(we({}, t), {
              without: Le(we({}, t.without), {
                items: [...a ?? [], ...l.map(e => Le(we({}, e), {
                  blockchain: h[e.blockchainId]
                }))]
              })
            })
          }, [t, C, h]), v = p.length > 0 ? {
            search: {
              title: d({
                id: "asset-selection-modal.search-results-category"
              }),
              items: [...c.filter(e => e.symbol.toLowerCase().includes(p.toLowerCase()) || e.name.toLowerCase().includes(p.toLowerCase())), ...C.map(e => Le(we({}, e), {
                blockchain: h[e.blockchainId]
              }))]
            }
          } : x, g = (0, u.useCallback)((0, fe.debounce)(e => {
            b(e)
          }, 400), []);

          function w() {
            f(""), l()
          }
          return (0, u.useEffect)(() => {
            o && b("")
          }, [o, b]), (0, u.useEffect)(() => {
            const e = g;
            return p.length > 0 ? (F(!0), e(p)) : (F(!1), e("")), () => e.cancel()
          }, [p]), (0, u.useEffect)(() => {
            k || F(!1)
          }, [k]), (0, i.jsx)(he.a, {
            title: e,
            opened: o,
            onClose: w,
            children: (0, i.jsxs)("div", {
              className: "flex flex-col min-h-[400px] space-y-4",
              children: [(0, i.jsx)(de.D, {
                testid: "assets-search-input",
                placeholder: d({
                  id: "asset-selection-modal.input-placeholder"
                }),
                value: p,
                onChange: function(e) {
                  f(e.target.value)
                }
              }), m ? (0, i.jsx)("div", {
                className: "flex justify-center",
                children: (0, i.jsx)(ue.y, {})
              }) : (0, i.jsx)(j.z6, {
                value: a,
                onChange: function(e) {
                  let t;
                  for (const r of Object.keys(v))
                    if (t = v[r].items.find(t => t.assetId === e), t) {
                      s(t);
                      break
                    } w()
                },
                children: Object.keys(v).filter(e => v[e].items.length > 0 || "" !== p).map(e => (0, i.jsx)(ce.b, {
                  title: v[e].title,
                  children: v[e].items.length > 0 ? v[e].items.map(e => (0, i.jsx)(W, {
                    name: e.name,
                    symbol: e.symbol,
                    iconUrl: e.iconUrl,
                    blockchain: e.blockchain,
                    balance: e.balance,
                    value: e.assetId,
                    contractAddress: e.address,
                    disabled: r === e.assetId,
                    isRwa: Z(e)
                  }, e.assetId)) : (0, i.jsx)(L.B, {})
                }, e))
              })]
            })
          })
        },
        Ae = 60 * Math.PI,
        De = ({
          progress: e
        }) => {
          const t = Ae - e / 100 * Ae;
          return (0, i.jsx)("div", {
            className: "relative w-6 h-6",
            children: (0, i.jsxs)("svg", {
              className: "w-full h-full",
              viewBox: "0 0 100 100",
              children: [(0, i.jsx)("circle", {
                className: "text-backgroundTertiary stroke-current",
                strokeWidth: 10,
                cx: 50,
                cy: 50,
                r: 30,
                fill: "transparent"
              }), (0, i.jsx)("circle", {
                className: "text-primary -rotate-90 origin-[50%_50%] progress-ring__circle stroke-current",
                style: {
                  transition: "stroke-dashoffset 0.35s"
                },
                strokeWidth: 10,
                strokeLinecap: "round",
                cx: 50,
                cy: 50,
                r: 30,
                fill: "transparent",
                strokeDasharray: `${Ae} ${Ae}`,
                strokeDashoffset: t
              })]
            })
          })
        },
        Ee = ({
          isLoading: e,
          rate: t,
          refreshInterval: r,
          runCountdown: n,
          onCountdownFinish: a
        }) => {
          const {
            formatMessage: s
          } = (0, me.A)(), [o, l] = (0, u.useState)(0), d = r + 1, c = 1e3 * (d - o) / (1e3 * d / 100);
          return (0, u.useEffect)(() => {
            let e;
            return o > 1 ? e = setTimeout(() => {
              l(e => e - 1)
            }, 1e3) : 1 === o && a(), () => {
              clearTimeout(e)
            }
          }, [o]), (0, u.useEffect)(() => {
            l(n ? d : 0)
          }, [n]), (0, i.jsx)("div", {
            className: "flex items-center space-x-2",
            children: (0, i.jsx)("div", {
              className: "flex items-center space-x-1 min-h-6 " + (e ? "opacity-50" : "opacity-100"),
              children: t ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(De, {
                  progress: c
                }), (0, i.jsxs)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: [t.fromAsset.amount, " ", t.fromAsset.symbol]
                }), (0, i.jsx)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: "="
                }), (0, i.jsxs)(B.E, {
                  theme: N.Il.SECONDARY,
                  children: [t.toAsset.amount, " ", t.toAsset.symbol]
                })]
              }) : (0, i.jsxs)(B.E, {
                theme: N.Il.SECONDARY,
                children: [s({
                  id: "dashboard.find-best-price"
                }), "..."]
              })
            })
          })
        };
      var Be = r(20998);
      const Ne = ({
        domains: e,
        selectedNetwork: t,
        onNetworkSelect: r,
        opened: n,
        onClose: a
      }) => {
        const s = function(e) {
          const t = (0, q.n)(!0);
          return (0, u.useMemo)(() => t.filter(t => e.includes((0, H.er)(t.coinId))), [e, t])
        }(e);
        return (0, i.jsx)(Be.S, {
          isOpen: n,
          onClose: a,
          blockchainList: s,
          hideAllNetworksOption: !0,
          selectedBlockchainId: t ?? null,
          onSelectNetwork: function(e) {
            e && r(e), a()
          }
        })
      };
      var Me = r(2454),
        je = r(33647),
        Pe = r(68157);

      function Se(e) {
        return (0, Pe.GV)(e => e.swap.settings)[e]
      }
      var We = r(67008),
        Te = r(4387);
      r(56120);
      const Oe = ({
        opened: e,
        onClose: t
      }) => {
        const {
          formatMessage: r
        } = (0, me.A)(), n = Se("mev"), a = Se("thorchainStreams"), s = Se("solanaTurboSwaps"), o = (Se("environment"), (0, u.useMemo)(() => (0, fe.uniqueId)("mev-tooltip-"), [])), l = (0, u.useMemo)(() => (0, fe.uniqueId)("thorchain-tooltip-"), []), d = (0, u.useMemo)(() => (0, fe.uniqueId)("solana-tooltip-"), []), c = (0, u.useMemo)(() => (0, fe.uniqueId)("env-tooltip-"), []);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(he.a, {
            title: r({
              id: "settings-modal.title"
            }),
            opened: e,
            onClose: t,
            children: (0, i.jsxs)("div", {
              className: "flex flex-col space-y-5",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, i.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.mev-protection"
                    })
                  }), (0, i.jsx)("div", {
                    "data-tooltip-id": o,
                    "data-tooltip-content": r({
                      id: "settings-modal.mev-tooltip"
                    }),
                    children: (0, i.jsx)(Me.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, i.jsx)(je.d, {
                  testid: "settings-mev-switch",
                  checked: n,
                  onChange: () => {
                    Pe.M_.dispatch(Te.W.actions.toggleMev())
                  }
                })]
              }), (0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, i.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.thorchain-streaming",
                      defaultMessage: "Thorchain streams"
                    })
                  }), (0, i.jsx)("div", {
                    "data-tooltip-id": l,
                    "data-tooltip-content": r({
                      id: "settings-modal.thorchain-tooltip",
                      defaultMessage: "Gives better quote, but takes longer to process the swap"
                    }),
                    children: (0, i.jsx)(Me.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, i.jsx)(je.d, {
                  testid: "settings-thorchain-switch",
                  checked: a,
                  onChange: () => {
                    Pe.M_.dispatch(Te.W.actions.toggleThorchainStreams())
                  }
                })]
              }), (0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, i.jsx)(B.E, {
                    type: N.jK.TITLE,
                    children: r({
                      id: "settings-modal.solana-turbo-swaps",
                      defaultMessage: "Solana turbo swaps"
                    })
                  }), (0, i.jsx)("div", {
                    "data-tooltip-id": d,
                    "data-tooltip-content": r({
                      id: "settings-modal.solana-tooltip",
                      defaultMessage: "Control how fast your transactions will land. Turbo costs more SOL, but will also be faster."
                    }),
                    children: (0, i.jsx)(Me.m, {
                      colorClass: "text-iconNormal",
                      height: 16,
                      width: 16
                    })
                  })]
                }), (0, i.jsx)(je.d, {
                  testid: "settings-solana-switch",
                  checked: s,
                  onChange: () => {
                    Pe.M_.dispatch(Te.W.actions.toggleSolanaTurboSwaps())
                  }
                })]
              }), !1]
            })
          }), (0, i.jsx)(We.m_, {
            id: o,
            className: "tw-tooltip"
          }), (0, i.jsx)(We.m_, {
            id: l,
            className: "tw-tooltip"
          }), (0, i.jsx)(We.m_, {
            id: d,
            className: "tw-tooltip"
          }), (0, i.jsx)(We.m_, {
            id: c,
            className: "tw-tooltip"
          })]
        })
      };
      var Ve = r(9505),
        Re = r(65512),
        Ze = r(16665);
      const Ie = ({
        defaultSlippage: e = "2",
        onSave: t,
        opened: r,
        onClose: n
      }) => {
        const {
          formatMessage: a
        } = (0, me.A)(), [s, o] = (0, u.useState)(e), l = (0, Ve.R)({
          value: s,
          min: 0,
          max: 30
        });
        return (0, u.useEffect)(() => {
          o(e)
        }, [e]), (0, i.jsx)(he.a, {
          title: a({
            id: "swap-details.slippage-tolerance"
          }),
          opened: r,
          onClose: function() {
            n(), o(e)
          },
          children: (0, i.jsxs)("div", {
            className: "flex flex-col space-y-4",
            children: [(0, i.jsx)(Ze.S, {
              onlyPositive: !0,
              value: s,
              validation: l,
              onChange: function(e) {
                const t = e.target.value;
                isNaN(+t) || t.startsWith("0x") || o(t)
              }
            }), (0, i.jsx)(Re.$, {
              onClick: function() {
                t(s), n()
              },
              disabled: !l.isValid,
              "data-testid": "save-slippage-button",
              children: a({
                id: "generic.save"
              })
            })]
          })
        })
      };
      var _e = r(45132),
        ze = r(7707),
        Ue = r(26113);
      const He = e => {
        const t = (0, X.B)(),
          {
            getAsset: r
          } = (0, u.useContext)(g);
        return (0, u.useMemo)(() => {
          var i;
          if (!e) return null;
          const n = r(e);
          return n ? n.price : (null == (i = t.find(t => t.id === e)) ? void 0 : i.price.toString()) ?? null
        }, [e])
      };
      var qe, Xe = r(21190),
        Ge = r(94893),
        Ke = r(52619),
        Qe = r(152),
        Je = r(41327),
        Ye = r(69666),
        $e = r(98005),
        et = r(40980),
        tt = r(42201),
        rt = r(50784),
        it = r(68632),
        nt = r(48346),
        at = r(21612),
        st = r(64920),
        ot = r(15192),
        lt = ((qe = lt || {}).FROM = "FROM", qe.TO = "TO", qe),
        dt = r(86170);
      const ct = ({
          origin: e,
          network: t,
          asset: r,
          amount: n,
          priceImpact: s,
          isLoading: o = !1,
          disabled: l = !1,
          children: d,
          onAmountChange: c,
          onNetworkClick: h,
          onTokenClick: p,
          onAmountExcess: f,
          testid: m
        }) => {
          var F;
          const {
            formatMessage: C
          } = (0, me.A)(), k = (0, at.s)(), {
            baseCurrencyType: b,
            currency: x
          } = (0, dt.P)(), {
            walletBalance: v,
            fiatAmount: w,
            isLoading: L
          } = ((e, t) => {
            var r;
            const [i, n] = (0, u.useState)("0"), [a, s] = (0, u.useState)("0"), [o, l] = (0, u.useState)(!1), {
              getAsset: d,
              setAsset: c
            } = (0, u.useContext)(g), h = (0, ze.A)(null != (r = e?.assetId) ? r : ""), p = (0, X.B)(), f = (0, u.useMemo)(() => {
              var t;
              if (e) return null == (t = p.find(t => t.id === e.assetId)) ? void 0 : t.price.toString()
            }, [e?.assetId]), m = parseFloat(t) * parseFloat(f ?? a);
            return (0, u.useEffect)(() => {
              ((e, t, r) => new Promise((e, t) => {
                var i = e => {
                    try {
                      a(r.next(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  n = e => {
                    try {
                      a(r.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  },
                  a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
                a((r = r.apply(null, null)).next())
              }))(0, 0, function*() {
                if (e && (n(h), "0" === h && !f)) {
                  let t = "0",
                    r = "0";
                  const i = d(e.assetId);
                  if (i) t = i.balance, r = i.price;
                  else {
                    l(!0);
                    const i = yield I.YW.emit(_e.A.FETCH_SWAP_ASSET_BALANCE, e);
                    t = i.balance, r = i.price, c(e.assetId, i)
                  }
                  n(t), s(r)
                }
              }).catch(Ue.Z).finally(() => l(!1))
            }, [e?.assetId]), {
              walletBalance: i,
              fiatAmount: m,
              isLoading: o
            }
          })(r, n.length > 0 ? n : "0"), y = e === lt.FROM && !r?.address, A = parseFloat(v) > 0, j = e === lt.FROM && (A || r?.isBuyCryptoEnabled), P = e === lt.TO && o, S = (0, st.W)((0, ot.A)(v), 5), W = (() => {
            if (!L && e === lt.FROM) try {
              return new ot.A(n).gt(v)
            } catch {}
            return !1
          })(), T = u.Children.toArray(d).filter(Boolean).length > 0, O = s && 0 !== parseFloat(s), V = O && parseFloat(s) > 0;
          return (0, u.useEffect)(() => {
            f?.(W)
          }, [W]), (0, i.jsxs)(Qe.Z, {
            error: W,
            noPadding: !0,
            children: [(0, i.jsxs)("div", {
              className: "flex flex-col space-y-3 p-4",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center space-x-1",
                  children: [(0, i.jsx)(B.E, {
                    theme: N.Il.SECONDARY,
                    type: N.jK.CAPTION,
                    children: C({
                      id: "generic." + (e === lt.FROM ? "from" : "to")
                    })
                  }), (0, i.jsx)(Ge.c, {
                    onClick: () => h(e),
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center",
                      children: [(0, i.jsx)(D.q, {
                        src: t.iconUrl,
                        name: t.name,
                        size: it.Y.XXSMALL
                      }), (0, i.jsx)("div", {
                        className: "ml-1 mr-px",
                        children: (0, i.jsx)(B.E, {
                          type: N.jK.CAPTION,
                          theme: N.Il.SECONDARY,
                          weight: N.nG.MEDIUM,
                          children: null != (F = t.displayName) ? F : t.name
                        })
                      }), (0, i.jsx)(Je.v, {
                        width: 16,
                        height: 16,
                        colorClass: "text-iconNormal"
                      })]
                    })
                  })]
                }), r && (0, i.jsx)("div", {
                  className: "flex flex-1 items-center justify-end",
                  children: L ? (0, i.jsx)(nt.S, {
                    widthClass: "w-22.5",
                    heightClass: "h-4"
                  }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)($e.l, {
                      width: 16,
                      height: 16,
                      colorClass: "text-iconNormal"
                    }), (0, i.jsx)("div", {
                      className: "flex ml-1.25",
                      children: (0, i.jsx)(B.E, {
                        testid: m + "-wallet-balance",
                        type: N.jK.CAPTION,
                        theme: N.Il.SECONDARY,
                        children: S
                      })
                    }), !y && j && (0, i.jsx)("div", {
                      className: "ml-2.5",
                      children: (0, i.jsx)(Re.$, {
                        testid: m + "-max-button",
                        theme: Ke.ry.INVERSE_BRAND,
                        shape: Ke.dB.TINY,
                        disabled: l,
                        onClick: A ? function() {
                          r && c?.(v)
                        } : function() {
                          return ((e, t, r) => new Promise((t, i) => {
                            var n = e => {
                                try {
                                  s(r.next(e))
                                } catch (e) {
                                  i(e)
                                }
                              },
                              a = e => {
                                try {
                                  s(r.throw(e))
                                } catch (e) {
                                  i(e)
                                }
                              },
                              s = e => e.done ? t(e.value) : Promise.resolve(e.value).then(n, a);
                            s((r = r.apply(e, null)).next())
                          }))(this, 0, function*() {
                            yield k(`${a.b.BUY}/${r?.assetId}`)
                          })
                        },
                        children: (0, i.jsx)(B.E, {
                          theme: N.Il.BRAND,
                          type: N.jK.CAPTION,
                          weight: N.nG.MEDIUM,
                          children: A ? "Max" : C({
                            id: "generic.buy"
                          })
                        })
                      })
                    })]
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "flex items-center justify-between space-x-2",
                children: [r ? (0, i.jsx)(Xe.W, {
                  testid: m + "-asset-selector",
                  iconUrl: r.iconUrl,
                  symbol: r.symbol,
                  contractAddress: r.address,
                  onClick: () => p(e)
                }) : (0, i.jsxs)("div", {
                  className: "flex items-center space-x-2.5",
                  children: [(0, i.jsx)(Re.$, {
                    testid: m + "-asset-selector-empty",
                    onClick: () => p(e),
                    shape: Ke.dB.ICON_CIRCLE,
                    theme: Ke.ry.SUBTLE,
                    fullWidth: !1,
                    children: (0, i.jsx)(Ye.c, {
                      width: 20,
                      height: 20,
                      colorClass: "text-primary"
                    })
                  }), (0, i.jsx)(Ge.c, {
                    onClick: () => p(e),
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center space-x-1",
                      children: [(0, i.jsx)(B.E, {
                        type: N.jK.TITLE,
                        weight: N.nG.SEMIBOLD,
                        children: C({
                          id: "dashboard.select-token"
                        })
                      }), (0, i.jsx)(Je.v, {
                        width: 20,
                        height: 20,
                        colorClass: "text-iconNormal"
                      })]
                    })
                  })]
                }), r ? (0, i.jsxs)("div", {
                  className: "flex flex-col w-full items-end space-y-1 overflow-hidden",
                  children: [e === lt.FROM ? (0, i.jsx)(et.R, {
                    testid: m + "-amount-input",
                    placeholder: "0",
                    value: n,
                    disabled: l,
                    amountType: tt.yf.CRYPTO,
                    onChange: e => c?.(e)
                  }) : o ? (0, i.jsx)(nt.S, {
                    widthClass: "w-40",
                    heightClass: "h-8"
                  }) : (0, i.jsx)(E.h, {
                    fitFontSizeToContainer: !0,
                    testid: m + "-amount-input-readonly",
                    amountType: M.Cu.CRYPTO,
                    textType: N.jK.HEADLINE,
                    value: n
                  }), L || P ? (0, i.jsx)(nt.S, {
                    widthClass: "w-28",
                    heightClass: "h-4"
                  }) : W ? (0, i.jsx)(B.E, {
                    type: N.jK.CAPTION,
                    theme: N.Il.ERROR,
                    weight: N.nG.MEDIUM,
                    children: C({
                      id: "dashboard.balance-exceeded"
                    })
                  }) : (0, i.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [(0, i.jsx)(E.h, {
                      testid: m + "-amount-fiat",
                      textType: N.jK.CAPTION,
                      theme: N.Il.SECONDARY,
                      weight: N.nG.NORMAL,
                      prefix: w > 0 ? "≈" : "",
                      amountType: b,
                      value: w,
                      currency: x
                    }), O && (0, i.jsxs)(B.E, {
                      type: N.jK.CAPTION,
                      weight: N.nG.MEDIUM,
                      theme: V ? N.Il.SUCCESS : N.Il.ERROR,
                      children: ["(", V && "+", s, "%)"]
                    })]
                  })]
                }) : (0, i.jsx)("div", {
                  className: "flex text-end",
                  children: (0, i.jsx)(B.E, {
                    type: N.jK.HEADLINE,
                    children: "0"
                  })
                })]
              })]
            }), T && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(rt.c, {
                noMargin: !0
              }), (0, i.jsx)("div", {
                className: "px-4 py-2",
                children: d
              })]
            })]
          })
        },
        ht = ({
          label: e,
          loading: t,
          children: r,
          wrap: n = !0
        }) => (0, i.jsxs)("li", {
          className: "flex items-center justify-between py-2 space-x-1.25",
          children: [(0, i.jsx)(B.E, {
            type: N.jK.CAPTION,
            theme: N.Il.SECONDARY,
            children: e
          }), (0, i.jsx)("div", {
            className: `flex ${n?"flex-wrap":""} items-center justify-end space-x-1.25 *:whitespace-nowrap`,
            children: t ? (0, i.jsx)(nt.S, {
              widthClass: "w-22.5",
              heightClass: "h-4"
            }) : r
          })]
        });
      var ut = r(75321);
      const pt = ({
        isLoading: e,
        disabled: t,
        receiveAsset: r,
        minimumAmount: n,
        provider: a,
        fees: s,
        slippage: o,
        openSlippageModal: l
      }) => {
        var d, c, h, u;
        const {
          formatMessage: p
        } = (0, me.A)(), f = He(null == (d = s.routing.breakdown[0]) ? void 0 : d.assetId), m = He(null == (c = s.provider.breakdown[0]) ? void 0 : c.assetId), F = He(null == (h = s.relayer.breakdown[0]) ? void 0 : h.assetId), C = He(r.assetId), k = s.routing.total * (f ? parseFloat(f) : 0), b = s.provider.total * (m ? parseFloat(m) : 0), x = s.relayer.total * (F ? parseFloat(F) : 0), {
          currency: v,
          baseCurrencyType: g
        } = (0, dt.P)(), w = parseFloat(n) * (C ? parseFloat(C) : 0), L = "thorchain" !== a?.id;
        return (0, i.jsx)(Qe.Z, {
          children: (0, i.jsxs)("ul", {
            children: [(0, i.jsxs)(ht, {
              label: p({
                id: "swap-details.provider"
              }),
              loading: e,
              children: [(0, i.jsx)(D.q, {
                src: a?.favIconUrl,
                name: null != (u = a?.title) ? u : "",
                size: it.Y.XSMALL
              }), (0, i.jsx)(B.E, {
                type: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                children: a?.title
              })]
            }), s.provider.total > 0 && (0, i.jsx)(ht, {
              label: p({
                id: "swap-details.provider-fee"
              }),
              loading: e,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col text-right",
                children: [(0, i.jsxs)("div", {
                  children: [(0, i.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    weight: N.nG.MEDIUM,
                    amountType: M.Cu.CRYPTO,
                    value: s.provider.total,
                    suffix: " " + s.provider.breakdown[0].symbol
                  }), b > 0 && (0, i.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    theme: N.Il.THIRD,
                    amountType: M.Cu.FIAT,
                    currency: v,
                    value: b,
                    prefix: "(≈",
                    suffix: ")"
                  })]
                }), s.relayer.total > 0 && (0, i.jsxs)("div", {
                  children: [(0, i.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    weight: N.nG.MEDIUM,
                    amountType: M.Cu.CRYPTO,
                    value: s.relayer.total,
                    suffix: " " + s.relayer.breakdown[0].symbol
                  }), x > 0 && (0, i.jsx)(E.h, {
                    textType: N.jK.CAPTION,
                    theme: N.Il.THIRD,
                    amountType: g,
                    value: x,
                    currency: v,
                    prefix: "(≈",
                    suffix: ")"
                  })]
                })]
              })
            }), s.routing.total > 0 && (0, i.jsxs)(ht, {
              label: p({
                id: "swap-details.routing-fee"
              }),
              loading: e,
              children: [(0, i.jsx)(E.h, {
                textType: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                amountType: M.Cu.CRYPTO,
                value: s.routing.total,
                suffix: " " + s.routing.breakdown[0].symbol
              }), k > 0 && (0, i.jsx)(E.h, {
                textType: N.jK.CAPTION,
                theme: N.Il.THIRD,
                amountType: g,
                value: k,
                currency: v,
                prefix: "(≈",
                suffix: ")"
              })]
            }), (0, i.jsxs)(ht, {
              label: p({
                id: "swap-details.minimum-amount-receive"
              }),
              loading: e,
              children: [(0, i.jsx)(E.h, {
                testid: "swap-min-amount",
                textType: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                amountType: M.Cu.CRYPTO,
                value: n,
                suffix: " " + r.symbol
              }), w > 0 && (0, i.jsx)(E.h, {
                textType: N.jK.CAPTION,
                theme: N.Il.THIRD,
                amountType: g,
                currency: v,
                value: w,
                prefix: "(≈",
                suffix: ")"
              })]
            }), L && (0, i.jsxs)(ht, {
              label: p({
                id: "swap-details.slippage-tolerance"
              }),
              loading: e,
              wrap: !1,
              children: [(0, i.jsxs)(B.E, {
                testid: "swap-slippage",
                type: N.jK.CAPTION,
                weight: N.nG.MEDIUM,
                children: [o, "%"]
              }), (0, i.jsx)(Re.$, {
                disabled: t,
                onClick: l,
                theme: Ke.ry.TRANSPARENT,
                noPadding: !0,
                children: (0, i.jsx)(ut.R, {
                  width: 16,
                  height: 16,
                  colorClass: "text-iconNormal"
                })
              })]
            })]
          })
        })
      };
      var ft = r(23207),
        mt = Object.defineProperty,
        Ft = Object.defineProperties,
        Ct = Object.getOwnPropertyDescriptors,
        kt = Object.getOwnPropertySymbols,
        bt = {}.hasOwnProperty,
        xt = {}.propertyIsEnumerable,
        vt = (e, t, r) => t in e ? mt(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        gt = (e, t) => {
          for (var r in t || (t = {})) bt.call(t, r) && vt(e, r, t[r]);
          if (kt)
            for (var r of kt(t)) xt.call(t, r) && vt(e, r, t[r]);
          return e
        },
        wt = (e, t) => Ft(e, Ct(t)),
        Lt = r(97286),
        yt = r(60380),
        At = r(63111),
        Dt = r(81593),
        Et = r(31441),
        Bt = r(41314),
        Nt = r(22670),
        Mt = r(99360),
        jt = r(68969),
        Pt = r(56158),
        St = r(28398),
        Wt = r(83071),
        Tt = r(93155),
        Ot = r(47767),
        Vt = r(45871),
        Rt = r(51594),
        Zt = r(9389);
      const It = ({
        width: e,
        height: t
      }) => (0, i.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? "138",
        height: t ?? "144",
        viewBox: "0 0 138 144",
        fill: "none",
        children: [(0, i.jsxs)("g", {
          clipPath: "url(#clip0_14295_9826)",
          children: [(0, i.jsx)("path", {
            d: "M6.635 77.0871H20.069L85.7773 53.1711V48.2814L80.289 46.284L1.14355 75.0896L6.635 77.0871Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, i.jsx)("path", {
            d: "M20.0723 84.1916V77.0871L85.7806 53.1711V60.2756L20.0723 84.1916Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M20.0723 82.0708V79.2668L85.7806 55.3477V58.1548L20.0723 82.0708Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M20.0688 77.0867H6.63477V84.1913H20.0688V77.0867Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M6.635 84.1915V77.087L1.14355 75.0895V82.1941L6.635 84.1915Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M20.0684 80.6011L85.7767 56.6852L101.854 62.5358L36.1457 86.4549",
            fill: "url(#paint0_linear_14295_9826)"
          }), (0, i.jsx)("path", {
            d: "M36.5527 76.1879L41.0581 77.8262",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M28.5498 80.2175L29.7533 80.6555",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M32.5156 79.6152L37.0178 81.2567",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M38.2002 81.6852L39.4037 82.1231",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M30.6555 20.9642C27.5963 22.0764 26.5314 26.8684 28.2768 31.6667C30.0222 36.465 33.8123 39.4896 36.3391 38.5696L44.518 35.5923L37.3189 18.5383L30.6555 20.9642Z",
            fill: "#2D9FFF"
          }), (0, i.jsx)("path", {
            d: "M37.3208 18.5409L30.6574 20.9668C27.9605 21.9466 26.8168 25.784 27.7746 29.9648L40.2288 25.4312L37.3208 18.5409Z",
            fill: "#1B1B1C"
          }), (0, i.jsx)("path", {
            d: "M30.6555 20.9642C27.5963 22.0764 26.5314 26.8684 28.2768 31.6667C30.0222 36.465 33.8123 39.4896 36.3391 38.5696L44.518 35.5923L37.3189 18.5383L30.6555 20.9642Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M32.248 25.9229C30.6223 26.5152 30.4017 29.4831 31.9045 32.0004C32.4906 32.9833 33.5523 33.9978 34.425 33.7647L39.3714 31.9657L36.5768 24.3508L32.248 25.9261V25.9229Z",
            fill: "#2D9FFF"
          }), (0, i.jsx)("path", {
            d: "M34.428 33.7613C35.3227 33.5218 35.8489 32.0915 34.6201 29.7506L37.8652 28.5691L39.3712 31.9623L34.4248 33.7613H34.428Z",
            fill: "#1B1B1C",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M32.248 25.9229C30.6223 26.5152 30.4017 29.4831 31.9045 32.0004C32.4906 32.9833 33.5523 33.9978 34.425 33.7647L39.3714 31.9657L36.5768 24.3508L32.248 25.9261V25.9229Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M39.5467 23.2668L32.25 25.9227C33.9482 25.3052 35.9803 27.6335 37.2279 30.5257C38.5732 33.6448 38.882 37.6429 36.3394 38.5691L43.7842 35.8596L39.5467 23.2668Z",
            fill: "#2D9FFF"
          }), (0, i.jsx)("path", {
            d: "M43.4567 34.884L42.8014 32.9338L38.2394 34.5942C38.2835 35.4385 38.2016 36.2262 37.959 36.8878L43.4567 34.8872V34.884Z",
            fill: "#1B1B1C"
          }), (0, i.jsx)("path", {
            d: "M39.5467 23.2668L32.25 25.9227C33.9482 25.3052 35.9803 27.6335 37.2279 30.5257C38.5732 33.6448 38.882 37.6429 36.3394 38.5691L43.7842 35.8596L39.5467 23.2668Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M60.3916 143.562C58.0633 144.41 55.357 143.285 53.2776 140.912C44.2228 131.057 40.1932 110.396 40.1932 95.2985V32.1988C40.1932 25.6614 34.894 19.4233 30.6533 20.9671L87.1683 0.396976C91.4184 -1.14995 96.7082 5.10393 96.7082 11.6288V74.7315C96.7082 104.026 107.54 118.049 109.61 120.412C111.686 122.784 116.724 123.061 116.724 123.061L60.3947 143.565L60.3916 143.562Z",
            fill: "url(#paint1_linear_14295_9826)"
          }), (0, i.jsx)("path", {
            d: "M40.1936 95.3021C40.1936 110.4 44.2232 131.061 53.2779 140.916C55.3541 143.288 58.0636 144.413 60.3919 143.566L116.721 123.062C116.721 123.062 111.686 122.785 109.607 120.412C107.54 118.049 96.7054 104.026 96.7054 74.732L40.1904 95.3021H40.1936Z",
            fill: "url(#paint2_linear_14295_9826)"
          }), (0, i.jsx)("path", {
            d: "M96.7122 74.7318V65.9481L40.1973 86.1306V95.2988C40.1973 102.454 41.1046 110.859 43.0202 118.771L99.3933 98.254C97.8212 91.893 96.7122 84.0922 96.7122 74.7287V74.7318Z",
            fill: "#1B1B1C",
            stroke: "#1B1B1C",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M60.3916 143.562C58.0633 144.41 55.357 143.285 53.2776 140.912C44.2228 131.057 40.1932 110.396 40.1932 95.2985V32.1988C40.1932 25.6614 34.894 19.4233 30.6533 20.9671L87.1683 0.396976C91.4184 -1.14995 96.7082 5.10393 96.7082 11.6288V74.7315C96.7082 104.026 107.54 118.049 109.61 120.412C111.686 122.784 116.724 123.061 116.724 123.061L60.3947 143.565L60.3916 143.562Z",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M60.3936 143.562C63.0274 142.605 64.4137 139.394 64.0955 135.686L120.425 115.182C120.74 118.89 119.356 122.098 116.723 123.058L60.3936 143.562Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M47.9189 43.5174V75.6784L74.0025 66.1826V34.0216L47.9189 43.5174Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M47.9189 34.9512V38.3318L64.8911 32.1566V28.7729L47.9189 34.9512Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M47.9189 75.6784C60.6882 71.0597 60.7008 38.864 47.9189 43.5174",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M91.0821 31.0332C92.6198 26.8694 91.49 22.6162 88.5585 21.5335C85.6269 20.4509 82.0038 22.9487 80.4661 27.1126C78.9283 31.2765 80.0581 35.5296 82.9896 36.6123C85.9212 37.6949 89.5443 35.1971 91.0821 31.0332Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M86.9309 29.5013C87.2667 28.5922 87.0202 27.6636 86.3803 27.4273C85.7405 27.191 84.9496 27.7364 84.6138 28.6456C84.2781 29.5548 84.5246 30.4834 85.1644 30.7197C85.8042 30.956 86.5951 30.4105 86.9309 29.5013Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M85.7715 21.4823V36.6586",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M79.5566 64.2281L86.9605 61.5312",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M79.5566 61.3074L90.0795 57.4763",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M79.5566 58.3868L90.0795 54.5557",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M79.5566 55.4659L90.0795 51.6348",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M79.5566 52.5451L90.0795 48.7172",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M74.0035 34.0215C61.2343 38.6402 61.2217 70.8359 74.0035 66.1825",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M53.5 125.807L57.3437 124.409",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M52.6094 123.211L71.5223 116.327",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M51.8184 120.58L68.948 114.345",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M51.1064 117.918L68.9481 111.425",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M36.1436 86.4539L101.852 62.5348L117.932 68.3885L52.2209 92.3045",
            fill: "url(#paint3_linear_14295_9826)"
          }), (0, i.jsx)("path", {
            d: "M96.7129 64.416V72.4405",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M131.37 64.3836H117.936L52.2246 88.2996V93.1893L57.7161 95.1899L136.858 66.3811L131.37 64.3836Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, i.jsx)("path", {
            d: "M136.858 66.3816V73.4893L57.7158 102.295V95.1905L136.858 66.3816Z",
            fill: "#2D9FFF"
          }), (0, i.jsx)("path", {
            d: "M75.9346 95.6623L78.6913 87.5527L80.15 87.0234L77.3082 95.1614L75.9346 95.6623Z",
            fill: "#F4F4F7"
          }), (0, i.jsx)("path", {
            d: "M77.3061 88.057L74.5525 96.1666L57.7158 102.294V95.1899L77.3061 88.057Z",
            fill: "#F4F4F7"
          }), (0, i.jsx)("path", {
            d: "M136.858 66.3816V73.4893L57.7158 102.295V95.1905L136.858 66.3816Z",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, i.jsx)("path", {
            d: "M61.8942 97.7789C62.1564 97.1229 62.0008 96.444 61.5467 96.2626C61.0927 96.0812 60.5121 96.4659 60.25 97.1219C59.9879 97.778 60.1435 98.4568 60.5975 98.6383C61.0515 98.8197 61.6321 98.4349 61.8942 97.7789Z",
            fill: "#0500FF"
          }), (0, i.jsx)("path", {
            d: "M108.094 76.8527V83.9573L89.5654 90.6995V83.595L108.094 76.8527Z",
            fill: "#1B1B1C",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M90.0029 87.0806L94.65 85.4392C96.408 84.8185 95.9575 83.7442 97.1547 83.2369C98.3488 82.7297 97.8951 86.2961 99.4798 85.7133C101.065 85.1336 101.024 80.9528 102.221 80.4329C103.292 79.9698 103.131 82.3957 104.36 81.9263L107.652 80.6598",
            stroke: "#48FF91",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M105.237 75.8142L108.095 76.8539L89.5666 83.5961L86.709 82.5564L105.237 75.8142Z",
            fill: "#0500FF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M52.2246 93.1891V100.297L57.7161 102.294V95.1897L52.2246 93.1891Z",
            fill: "#2D9FFF",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M70.5357 93.8979L69.2786 93.4411C69.1526 93.397 68.9572 93.397 68.7934 93.4569L64.9182 94.8683C64.6 94.9849 64.2944 95.2936 64.1243 95.719C63.8628 96.3743 64.0172 97.0548 64.4708 97.2344C64.4771 97.2344 64.4866 97.2407 64.4866 97.2407L65.7437 97.6975C65.7437 97.6975 66.985 96.9697 68.0814 96.097L68.847 95.8198C69.1652 95.7001 69.4708 95.3913 69.6409 94.966C69.6598 94.9187 69.6724 94.8683 69.6882 94.821C70.3025 94.3296 70.5325 93.9011 70.5325 93.9011L70.5357 93.8979Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, i.jsx)("path", {
            d: "M70.5534 93.9047C70.3958 93.8417 70.2226 93.848 70.0493 93.9079L66.1741 95.3225C65.8559 95.439 65.5503 95.7478 65.3801 96.1731C65.1186 96.8285 65.273 97.509 65.7267 97.6886C65.8842 97.7516 66.0575 97.7421 66.2308 97.6791L70.106 96.2676C70.4242 96.1511 70.7298 95.8423 70.8999 95.417C71.1614 94.7617 71.0071 94.0812 70.5534 93.9016V93.9047Z",
            fill: "#48FF91",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeMiterlimit: "10"
          }), (0, i.jsx)("path", {
            d: "M40.1973 84.9767V87.9665",
            stroke: "#0500FF",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M40.2002 84.9772L96.7151 64.4166",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M45.4404 86.0369L49.0195 87.3412",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M84.9219 72.6833L88.5009 73.9845",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M47.584 82.2904L52.0893 83.9318",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M53.2715 84.3607L54.4782 84.7986",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M58.4404 80.1189L62.9457 81.7603",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M82.959 69.4236L87.4643 71.0619",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M64.1279 82.1896L65.3315 82.6275",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M80.0186 74.2587L81.2221 74.6967",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M56.0371 80.5033L57.2406 80.9412",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M72.1152 73.3353L73.9111 73.9906",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M75.0967 74.4205L76.3002 74.8584",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, i.jsx)("path", {
            d: "M102.557 66.4966L103.76 66.9377",
            stroke: "#F4F4F7",
            strokeWidth: "0.29761",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), (0, i.jsxs)("defs", {
          children: [(0, i.jsxs)("linearGradient", {
            id: "paint0_linear_14295_9826",
            x1: "66.4164",
            y1: "84.93",
            x2: "56.2464",
            y2: "60.0185",
            gradientUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("stop", {
              stopColor: "#48FF91"
            }), (0, i.jsx)("stop", {
              offset: "1",
              stopColor: "#2D9FFF"
            })]
          }), (0, i.jsxs)("linearGradient", {
            id: "paint1_linear_14295_9826",
            x1: "54.2984",
            y1: "22.7251",
            x2: "51.006",
            y2: "13.8216",
            gradientUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("stop", {
              stopColor: "#FFAEFE"
            }), (0, i.jsx)("stop", {
              offset: "0.97",
              stopColor: "#FFEF6A"
            }), (0, i.jsx)("stop", {
              offset: "1",
              stopColor: "#FFF465"
            })]
          }), (0, i.jsxs)("linearGradient", {
            id: "paint2_linear_14295_9826",
            x1: "67.8556",
            y1: "91.6884",
            x2: "85.5775",
            y2: "136.373",
            gradientUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("stop", {
              stopColor: "#FFF465",
              stopOpacity: "0"
            }), (0, i.jsx)("stop", {
              offset: "1",
              stopColor: "#FFF465"
            })]
          }), (0, i.jsxs)("linearGradient", {
            id: "paint3_linear_14295_9826",
            x1: "78.147",
            y1: "80.1401",
            x2: "67.9769",
            y2: "55.2254",
            gradientUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("stop", {
              stopColor: "#48FF91"
            }), (0, i.jsx)("stop", {
              offset: "1",
              stopColor: "#2D9FFF"
            })]
          }), (0, i.jsx)("clipPath", {
            id: "clip0_14295_9826",
            children: (0, i.jsx)("rect", {
              width: "136.637",
              height: "144",
              fill: "white",
              transform: "translate(0.681641)"
            })
          })]
        })]
      });
      var _t = r(58065);
      const zt = ({
        opened: e,
        onClose: t,
        setSpendAsset: r,
        setReceiveAsset: n,
        pendingRawToken: a,
        setIsUSCitizenError: s
      }) => {
        const {
          formatMessage: o
        } = (0, me.A)();
        return (0, i.jsx)(he.a, {
          opened: e,
          onClose: t,
          children: (0, i.jsxs)("div", {
            className: "flex flex-col min-h-[316px] space-y-8 m-4 items-center",
            children: [(0, i.jsx)(It, {}), (0, i.jsx)("h2", {
              className: "text-textPrimary text-center font-inter text-[24px] font-bold leading-[30px]",
              children: o({
                id: "us-citizen-modal.title",
                defaultMessage: "Are you a US citizen?"
              })
            }), (0, i.jsx)("p", {
              className: "text-textSecondary text-center font-inter text-[16px] font-medium leading-[24px]",
              children: (0, i.jsx)(_t.A, {
                id: "modal.us-citizen-alert",
                defaultMessage: "I acknowledge and agree that these RWAs are not to be offered, sold, or delivered in the US, UK, EU, or to US Persons (as defined in Rule 902 of Regulation S of the U.S. Securities Act of 1933, as amended). I further acknowledge that any acquisition in breach of these restrictions may result in my holdings being suspended, cancelled, or required to be sold. Read <a1>here</a1> for more information. Subjects to <a2>T&Cs</a2> and the <a3>Risk Disclosures</a3>. I hereby certify that:",
                values: {
                  a1: e => (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://trustwallet.com",
                    children: e
                  }),
                  a2: e => (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://trustwallet.com/terms-of-service",
                    children: e
                  }),
                  a3: e => (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener nofollow noreferrer",
                    className: "underline hover:text-blue-600",
                    href: "https://docs.google.com/document/d/1CaX4RkQmTQTX3rAq7NGXaPUH2ovCmxIWV8p3eQ6kql0/edit?tab=t.0",
                    children: e
                  })
                }
              })
            }), (0, i.jsxs)("div", {
              className: "w-full py-3 flex flex-col gap-3",
              children: [(0, i.jsx)(Re.$, {
                onClick: function() {
                  if (!a.asset) throw Error("pending RAW Asset is not defined.");
                  Pe.M_.dispatch(Te.W.actions.setIsUSCitizen(!1)), a.swapOrigin === lt.FROM ? r(a.asset) : n(a.asset), t()
                },
                shape: Ke.dB.DEFAULT,
                theme: Ke.ry.PRIMARY,
                size: Ke.Vp.LARGE,
                children: o({
                  id: "us-citizen-modal.negate",
                  defaultMessage: "I am not US citizen"
                })
              }), (0, i.jsx)(Re.$, {
                onClick: function() {
                  Pe.M_.dispatch(Te.W.actions.setIsUSCitizen(!0)), s(!0), t()
                },
                shape: Ke.dB.DEFAULT,
                theme: Ke.ry.SECONDARY,
                size: Ke.Vp.LARGE,
                children: o({
                  id: "us-citizen-modal.confirm",
                  defaultMessage: "I am US citizen"
                })
              })]
            })]
          })
        })
      };
      var Ut = Object.defineProperty,
        Ht = Object.defineProperties,
        qt = Object.getOwnPropertyDescriptors,
        Xt = Object.getOwnPropertySymbols,
        Gt = {}.hasOwnProperty,
        Kt = {}.propertyIsEnumerable,
        Qt = (e, t, r) => t in e ? Ut(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        Jt = (e, t) => {
          for (var r in t || (t = {})) Gt.call(t, r) && Qt(e, r, t[r]);
          if (Xt)
            for (var r of Xt(t)) Kt.call(t, r) && Qt(e, r, t[r]);
          return e
        },
        Yt = (e, t) => Ht(e, qt(t)),
        $t = (e, t, r) => new Promise((i, n) => {
          var a = e => {
              try {
                o(r.next(e))
              } catch (e) {
                n(e)
              }
            },
            s = e => {
              try {
                o(r.throw(e))
              } catch (e) {
                n(e)
              }
            },
            o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(a, s);
          o((r = r.apply(e, t)).next())
        });
      const er = () => {
          var e;
          (0, h.K)({
            event: c.Un.SWAP,
            props: null
          });
          const {
            formatMessage: t
          } = (0, me.A)(), r = (0, Ot.Zp)(), n = (0, Ot.zy)(), {
            state: s
          } = n, o = (0, Zt.YL)(), {
            fromAsset: l,
            toAsset: p
          } = (0, Pe.GV)(e => e.swap.assets), f = (0, Pe.GV)(e => e.swap.spendAmount), {
            qsFrom: m,
            qsTo: F
          } = (() => {
            var e, t;
            const {
              search: r
            } = (0, Ot.zy)(), i = new URLSearchParams(r), n = null != (e = i.get("from")) ? e : "", a = null != (t = i.get("to")) ? t : "";
            return {
              qsFrom: le(n)[0],
              qsTo: le(a)[0]
            }
          })(), C = (0, u.useRef)(!0), k = (0, u.useRef)(!0), b = (0, u.useRef)(0), x = (0, u.useRef)(!1), v = (0, u.useRef)(!1), g = (0, u.useRef)(!1), w = (0, Pt.U)(), {
            domains: L
          } = (0, u.useContext)(d.C), [y] = (0, Wt.j)(), A = (e => {
            const {
              data: t
            } = (0, Lt.I)({
              queryKey: ["swap-pairs"],
              queryFn: () => I.YW.emit(_e.A.FETCH_SWAP_PAIRS, e),
              staleTime: 36e5,
              refetchOnWindowFocus: !1
            });
            return t
          })(L), D = ((e, t) => {
            const r = (0, U.P)(),
              i = (0, Q.A)(),
              n = (0, G.o)(),
              a = (0, u.useMemo)(() => r.filter(t => e.includes((0, H.er)(t.assetId))), [r]),
              s = (0, q.n)(),
              o = (0, z.Mr)(R),
              l = oe(a),
              d = (0, u.useMemo)(() => {
                if (i?.type === J.S.PRIVATE_KEY && !n[parseInt((0, H.X2)(R))]) {
                  const e = r.find(e => !!n[parseInt((0, H.X2)(e.assetId))]);
                  return se(ae({}, e), {
                    blockchain: s[e.blockchainId]
                  })
                }
                return null
              }, [i]);
            return (0, u.useMemo)(() => {
              if (t) return se(ae({}, t), {
                blockchain: s[t.blockchainId]
              });
              const e = l.filter(e => !!parseFloat(e.balance)),
                r = se(ae({}, o), {
                  blockchain: s[o.blockchainId]
                });
              return e.length > 0 ? e[0] : d || r
            }, [t, l, s, o, d])
          })(L, s), [E, M] = (0, u.useState)(m?.blockchain || l?.blockchain || D.blockchain), [j, P] = (0, u.useState)(m || l || D), [S, W] = (0, u.useState)(f || ""), [Z, K] = (0, u.useState)(!1), [Y, $] = (0, u.useState)(F?.blockchain || p?.blockchain || l?.blockchain || D.blockchain), [ee, te] = (0, u.useState)(F || p), [re, ie] = (0, u.useState)("0"), [ne, de] = (0, u.useState)(!1), [ce, he] = (0, u.useState)(!1), [ue, pe] = (0, u.useState)(!1), [Fe, Ce] = (0, u.useState)(!1), [ke, be] = (0, u.useState)(!1), [xe, ve] = (0, u.useState)(!1), [ge, we] = (0, u.useState)(!1), [Le, Ae] = (0, u.useState)(lt.FROM), {
            solanaTurboSwaps: De
          } = (0, Pe.GV)(e => e.swap.settings), [Be, Me] = (0, u.useState)("2"), [je, Se] = (0, u.useState)({
            id: "",
            minimumAmount: "0",
            priceImpact: "0",
            exchangeRate: null,
            approval: null,
            fees: {
              provider: {
                breakdown: [],
                total: 0
              },
              relayer: {
                breakdown: [],
                total: 0
              },
              routing: {
                breakdown: [],
                total: 0
              }
            },
            provider: null,
            error: "",
            insufficientBalance: !1,
            slippage: "2",
            warnings: [],
            refreshInterval: 60
          }), We = (0, u.useCallback)(() => {
            Pe.M_.dispatch(Te.W.actions.setSwap712Data({
              isEip712: !1,
              provider: null
            }))
          }, []), [Ve, Ze] = (0, u.useState)(!1), [ze, Ue] = (0, u.useState)(""), qe = le((0, H.er)(E.coinId))[0], Xe = le((0, H.er)(Y.coinId))[0], Ge = (0, Pe.GV)(e => e.swap.isUSCitizen), [Qe, Je] = (0, u.useState)(!1), [Ye, $e] = (0, u.useState)({
            asset: null,
            swapOrigin: ""
          }), et = (0, u.useRef)(!1), tt = le("c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")[0], rt = (0, u.useCallback)(e => {
            if (!e?.address) return !1;
            let t = !1;
            return e.blockchain.name.toLowerCase() === T.J.solana.toLowerCase() ? t = O.includes(e.address) : e.blockchain.name.toLowerCase() === T.J.ethereum.toLowerCase() && (t = V.includes(e.address)), t && (et.current = !0), t
          }, []), it = (0, u.useCallback)(e => e.name.toLowerCase() === T.J.ethereum.toLowerCase(), []), nt = (0, u.useMemo)(() => rt(j), [j]), at = (0, u.useMemo)(() => rt(ee), [ee]);
          (0, u.useEffect)(() => {
            if (tt) {
              if (et.current) return void(et.current = !1);
              nt && it(E) && Le === lt.TO && ee?.assetId !== tt.assetId ? P(tt) : at && it(Y) && Le === lt.FROM && j?.assetId !== tt.assetId && te(tt)
            }
          }, [j, ee, tt?.assetId]), (0, u.useEffect)(() => {
            tt && (nt && it(E) && Le === lt.FROM ? (it(Y) || (k.current = !0, $(E)), te(tt)) : at && it(Y) && Le === lt.TO && (it(E) || (C.current = !0, M(Y)), P(tt)))
          }, [nt, at, tt?.assetId]);
          const {
            trackSwapAnalyticsEvent: st,
            trackSwapApproveAnalyticsEvent: dt
          } = (({
            quote: e,
            receiveAsset: t,
            receiveAmount: r,
            slippage: i,
            spendAsset: n,
            spendAmount: a,
            pageViewSource: s
          }) => {
            var o, l;
            const {
              trackAnalytics: d
            } = (0, ft.s)(), h = (0, X.B)(), u = (0, Q.A)(), p = He(null == (o = e.fees.routing.breakdown[0]) ? void 0 : o.assetId), f = He(null == (l = e.fees.provider.breakdown[0]) ? void 0 : l.assetId), m = He(t?.assetId);
            return {
              trackSwapAnalyticsEvent: () => {
                var o, l, F, C;
                if (!n) return;
                const k = e.fees.provider.total * (f ? parseFloat(f) : 0),
                  b = e.fees.routing.total * (p ? parseFloat(p) : 0),
                  x = (0, ot.A)(r).minus((0, ot.A)(r).mul((0, ot.A)(i).div(100))).toNumber(),
                  v = x * (m ? parseFloat(m) : 0),
                  g = (0, ot.A)(a).mul(null != (l = null == (o = h.find(e => e.id === n?.assetId)) ? void 0 : o.price) ? l : 0).toNumber(),
                  w = (0, ot.A)(r).mul(null != (C = null == (F = h.find(e => e.id === t.assetId)) ? void 0 : F.price) ? C : 0).toNumber(),
                  L = {
                    assetOutId: n.assetId,
                    assetOutBlockchainId: n.blockchain.id,
                    assetOutAmount: parseFloat(a),
                    assetOutFiat: g,
                    assetInId: t.assetId,
                    assetInBlockchainId: t.blockchain.id,
                    assetInAmount: parseFloat(r),
                    assetInFiat: w,
                    routingFeeAmount: e.fees.routing.total,
                    routingFeeFiat: b,
                    providerOrigin: e.provider.origin,
                    providerFeeAmount: e.fees.provider.total,
                    providerFeeFiat: k,
                    minReceiveAmount: x,
                    minReceiveFiat: v,
                    maxSlippage: parseFloat(e.slippage),
                    walletType: u.type,
                    pageViewSource: s
                  };
                d({
                  event: c.BQ.SWAP_TRANSACTION,
                  props: L
                })
              },
              trackSwapApproveAnalyticsEvent: () => {
                const t = {
                  pageViewSource: c.Un.SWAP,
                  providerOrigin: e.provider.origin,
                  contract: e.approval.contract,
                  walletType: u.type
                };
                d({
                  event: c.BQ.SWAP_APPROVAL_TRANSACTION,
                  props: t
                })
              }
            }
          })({
            quote: je,
            receiveAsset: ee,
            receiveAmount: re,
            slippage: Be,
            spendAsset: j,
            spendAmount: S,
            pageViewSource: null != (e = s?.pageViewSource) ? e : c.Un.SWAP
          }), {
            isPairSet: ht,
            isPairIdentical: ut,
            hasSpendAmount: mt,
            canGetQuote: Ft,
            isSwapAllSet: Ct,
            hasQuoteError: kt,
            hasTxError: bt
          } = ((e, t, r, i, n, a) => {
            const s = !!e && !!t,
              o = s && e.assetId === t.assetId,
              l = parseFloat(r) > 0,
              d = s && !o && l;
            return {
              isPairSet: s,
              isPairIdentical: o,
              hasSpendAmount: l,
              canGetQuote: d,
              isSwapAllSet: d && !i,
              hasQuoteError: n.length > 0,
              hasTxError: a.length > 0
            }
          })(j, ee, S, Z, je.error, ze), {
            headerText: xt,
            defaultAssets: vt,
            scopedBlockchain: It,
            reservedAsset: _t,
            selectedAsset: Ut
          } = ((e, t, r, i, n, a) => {
            var s;
            const {
              formatMessage: o
            } = (0, me.A)(), l = (0, H.er)(e === lt.FROM ? r.coinId : n.coinId), d = le(l), c = e === lt.FROM ? r.id : n.id, h = (0, u.useMemo)(() => {
              var e;
              const r = [...d, ...null != (e = t && t[c]) ? e : []];
              return d.length && r.sort(H.JG), r
            }, [null == (s = d[0]) ? void 0 : s.assetId, t, r.id, n.id]), p = (0, u.useMemo)(() => h.filter(e => !!parseFloat(e.balance)), [h]), f = (0, u.useMemo)(() => h.filter(e => !parseFloat(e.balance)), [h]);
            return {
              headerText: e === lt.FROM ? o({
                id: "asset-selection-modal.you-pay"
              }) : o({
                id: "asset-selection-modal.you-get"
              }),
              defaultAssets: wt(gt({}, p.length > 0 ? {
                balance: {
                  title: o({
                    id: "asset-selection-modal.balance-category"
                  }),
                  items: p
                }
              } : {}), {
                without: {
                  title: 0 === f.length ? "" : o({
                    id: "asset-selection-modal.rest-of-crypto-category"
                  }),
                  items: f
                }
              }),
              scopedBlockchain: l,
              reservedAsset: e === lt.FROM ? a?.assetId : i?.assetId,
              selectedAsset: e === lt.FROM ? i?.assetId : a?.assetId
            }
          })(Le, A, E, j, Y, ee);

          function Ht(e) {
            x.current = !1, Me(e)
          }

          function qt(e) {
            Ae(e), Ce(!0)
          }

          function Xt(e) {
            Ae(e), be(!0)
          }
          const Gt = (0, Vt.x)(),
            [Kt, Qt] = (0, u.useState)(null),
            [er, tr] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            j?.assetId !== l?.assetId && Pe.M_.dispatch(Te.W.actions.setFromAsset(j)), ee?.assetId !== p?.assetId && Pe.M_.dispatch(Te.W.actions.setToAsset(ee))
          }, [j, ee]), (0, u.useEffect)(() => {
            S !== f && Pe.M_.dispatch(Te.W.actions.setSpendAmount(S))
          }, [S, f]), (0, u.useEffect)(() => {
            if (!Kt) return;
            const e = Gt.find(e => e.hash === Kt);
            "confirmed" === e?.status && (Qt(null), tr(!1), Se(e => Yt(Jt({}, e), {
              approval: null
            })))
          }, [Gt, Kt]);
          const rr = (0, u.useCallback)((0, fe.debounce)((e, r, i, n) => $t(null, null, function*() {
            const a = ++b.current;
            try {
              de(!0), Ze(!1);
              const {
                id: t,
                receiveAmount: s,
                minimumAmount: o,
                priceImpact: l,
                exchangeRate: d,
                approval: c,
                fees: h,
                provider: u,
                insufficientBalance: p,
                slippage: f,
                warnings: m,
                refreshInterval: F
              } = yield I.YW.emit(_e.A.FETCH_SWAP_QUOTE, {
                assetOut: e,
                assetIn: r,
                amount: i,
                slippage: x.current ? void 0 : n
              });
              if (a !== b.current) return;
              ie(s), x.current && (g.current = !0, Ht(f)), Se({
                id: t,
                priceImpact: l,
                minimumAmount: o,
                exchangeRate: d,
                approval: c,
                provider: u,
                fees: h,
                error: "",
                insufficientBalance: p,
                slippage: f,
                warnings: m,
                refreshInterval: F
              }), Ze(!0)
            } catch (e) {
              if (ie("0"), e.message === jt.oq) return void Se(e => Yt(Jt({}, e), {
                priceImpact: "0",
                exchangeRate: null,
                warnings: [],
                error: t({
                  id: "errors.route-not-available"
                })
              }));
              if (e.message.startsWith(jt.Zq)) return void Se(t => Yt(Jt({}, t), {
                priceImpact: "0",
                exchangeRate: null,
                warnings: [],
                error: e.message.replace(jt.Zq, "")
              }))
            } finally {
              a === b.current && de(!1)
            }
          }), 300), []);
          return (0, u.useEffect)(() => {
            C.current ? C.current = !1 : P(qe)
          }, [E.coinId]), (0, u.useEffect)(() => {
            p && !v.current && (te(p), v.current = !0)
          }, [p]), (0, u.useEffect)(() => {
            F && !v.current && (te(F), v.current = !0)
          }, [F]), (0, u.useEffect)(() => {
            k.current ? k.current = !1 : te(Xe)
          }, [Y?.coinId]), (0, u.useEffect)(() => {
            x.current = !0
          }, [E?.coinId, j?.assetId, Y?.coinId, ee?.assetId]), (0, u.useEffect)(() => {
            if (g.current) return void(g.current = !1);
            const e = rr;
            return Ze(!1), Se(e => Yt(Jt({}, e), {
              warnings: [],
              error: ""
            })), ht && (mt && !ut ? (de(!0), e(j, ee, {
              value: S,
              decimals: j?.decimals
            }, Be)) : (ie("0"), Se(e => Yt(Jt({}, e), {
              priceImpact: "0"
            })), de(!1))), () => e.cancel()
          }, [ht, mt, j, ee, S, rr, Be, De]), (0, i.jsxs)("div", {
            className: "p-6",
            children: [(0, i.jsxs)("div", {
              className: "bg-backgroundPrimary",
              children: [(0, i.jsxs)("div", {
                className: "flex justify-end mb-6",
                children: [Qe && (0, i.jsx)("div", {
                  className: "max-w-[400px] w-full m-auto px-2",
                  children: (0, i.jsx)(yt.F, {
                    theme: At.Z.ERROR,
                    className: "ml-3",
                    children: t({
                      id: "swap.us-citizen-rwa-error",
                      defaultMessage: "US citizens are not allowed to swap RWA tokens"
                    })
                  })
                }), (0, i.jsx)(Re.$, {
                  noPadding: !0,
                  fullWidth: !1,
                  shape: Ke.dB.CIRCLE,
                  theme: Ke.ry.TRANSPARENT,
                  testid: "settings-button",
                  onClick: () => pe(!0),
                  children: (0, i.jsx)(Dt.Z, {
                    colorClass: "text-iconNormal"
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "max-w-[400px] m-auto",
                children: [(0, i.jsx)(ct, {
                  testid: "swap-from",
                  origin: lt.FROM,
                  network: E,
                  asset: j,
                  amount: S,
                  disabled: ce,
                  onAmountChange: W,
                  onNetworkClick: qt,
                  onTokenClick: Xt,
                  onAmountExcess: K
                }), (0, i.jsx)("div", {
                  className: "relative z0 flex w-10 h-10 -my-3 mx-auto rounded-curvy bg-backgroundPrimary",
                  children: (0, i.jsx)(Re.$, {
                    noPadding: !0,
                    testid: "swap-change-quote-button",
                    theme: Ke.ry.TRANSPARENT,
                    shape: Ke.dB.CIRCLE,
                    disabled: ne || ce,
                    onClick: function() {
                      ht && !ut && (C.current = !0, k.current = !0, M(Y), P(ee), W(re), $(E), te(j), ie(S))
                    },
                    children: (0, i.jsx)(Et.D, {
                      colorClass: "text-iconNormal hover:text-primary transition"
                    })
                  })
                }), (0, i.jsxs)(ct, {
                  testid: "swap-to",
                  origin: lt.TO,
                  network: Y,
                  asset: ee,
                  amount: re,
                  priceImpact: je.priceImpact,
                  isLoading: ne,
                  disabled: ce,
                  onNetworkClick: qt,
                  onTokenClick: Xt,
                  children: [Ft && !kt && (0, i.jsx)(Ee, {
                    isLoading: ne,
                    rate: je.exchangeRate,
                    refreshInterval: je.refreshInterval,
                    runCountdown: Ve,
                    onCountdownFinish: () => Ft && rr(j, ee, {
                      value: S,
                      decimals: j?.decimals
                    }, Be)
                  }), kt && (0, i.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, i.jsx)(Bt.i, {
                      colorClass: "text-iconWarning"
                    }), (0, i.jsx)(B.E, {
                      theme: N.Il.WARNING,
                      type: N.jK.SUBTITLE,
                      children: je.error
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: "my-6 flex flex-col gap-2",
                  children: [(nt && it(E) || at && it(Y)) && (0, i.jsx)(yt.F, {
                    theme: At.Z.DEFAULT,
                    children: t({
                      id: "swap.restrict-only-usdc-pair-info",
                      defaultMessage: "You can only pair USDC with this asset"
                    })
                  }), (0, i.jsxs)(Re.$, {
                    testid: "swap-button",
                    disabled: !Ct || er || ne || ce || kt || !je.approval && je.insufficientBalance,
                    loading: ne || ce || er,
                    onClick: function() {
                      return $t(this, null, function*() {
                        try {
                          if (Ue(""), he(!0), y !== j?.blockchain.id && (yield I.YW.emit(Nt.A.SWITCH_BLOCKCHAIN, {
                              blockchainId: j?.blockchain.id,
                              blockchainType: j?.blockchain.isCustom ? St.l.CUSTOM : St.l.MAIN
                            })), je.approval) {
                            const e = yield I.YW.emit(_e.A.FETCH_SWAP_APPROVAL_PAYLOAD, {
                              approval: je.approval,
                              provider: je.provider
                            }), t = yield I.YW.emit(Mt.A.ETH_SIGN_TRANSACTION, e);
                            if (dt(), !t) throw Error("Transaction Hash is empty.");
                            Qt(t), tr(!0)
                          } else {
                            const e = yield I.YW.emit(_e.A.FETCH_SWAP_TRANSACTION_PAYLOAD, {
                              id: je.id,
                              assetOut: j,
                              assetIn: ee,
                              provider: je.provider
                            });
                            let t;
                            if (e.isEip712) {
                              Pe.M_.dispatch(Te.W.actions.setSwap712Data({
                                isEip712: e.isEip712,
                                provider: je.provider
                              }));
                              const r = j ? o.items[j.blockchain.coinId].address : "";
                              t = yield I.YW.emit(Mt.A.ETH_SIGN_TYPED_MESSAGE, {
                                address: r,
                                raw: e.data,
                                version: Rt.SignTypedDataVersion.V4,
                                isInternal: !0
                              })
                            } else t = yield I.YW.emit(Mt.A.SWAP_TRANSACTION_CONFIRMATION, Jt({
                              id: je.id,
                              assetOut: j,
                              assetIn: ee,
                              amountOut: {
                                value: S,
                                decimals: j?.decimals
                              },
                              quote: je
                            }, e));
                            try {
                              yield I.YW.emit(_e.A.RECORD_SWAP_TRANSACTION, {
                                stepId: je.id,
                                txHashOrSignature: t
                              })
                            } catch {
                              Tt.A.error("Failed to record swap tx"), We()
                            }
                            w.find(e => ee?.assetId === e.assetId) || (yield I.YW.emit(_.A.ADD_ASSET, {
                              asset: Yt(Jt({}, ee), {
                                isShownInHomeScreen: !0
                              }),
                              blockchainType: St.l.MAIN
                            })), st(), We(), r(a.b.HISTORY)
                          }
                        } catch (e) {
                          We(), [jt.Xc, jt.$i].includes(e.message) && Ue(t({
                            id: "errors.transaction-generation"
                          }))
                        } finally {
                          he(!1)
                        }
                      })
                    },
                    children: [je.approval ? t({
                      id: "dashboard.approve-crypto"
                    }, {
                      symbol: j?.symbol
                    }) : t({
                      id: "dashboard." + (je.insufficientBalance ? "insufficient-balance" : "swap")
                    }, {
                      symbol: qe.symbol
                    }), " "]
                  })]
                }), bt && (0, i.jsx)("div", {
                  className: "mb-4",
                  children: (0, i.jsx)(yt.F, {
                    theme: At.Z.WARNING,
                    children: ze
                  })
                }), je.warnings.map(e => (0, i.jsx)("div", {
                  className: "my-4",
                  children: (0, i.jsx)(yt.F, {
                    theme: At.Z.WARNING,
                    children: e
                  })
                }, e)), Ft && !kt && (0, i.jsx)(pt, {
                  isLoading: ne,
                  disabled: ce,
                  slippage: je.slippage,
                  receiveAsset: ee,
                  minimumAmount: je.minimumAmount,
                  provider: je.provider,
                  fees: je.fees,
                  openSlippageModal: () => ve(!0)
                })]
              })]
            }), (0, i.jsx)(Oe, {
              onClose: () => pe(!1),
              opened: ue
            }), (0, i.jsx)(Ne, {
              domains: L,
              opened: Fe,
              selectedNetwork: Le === lt.FROM ? E.id : Y.id,
              onNetworkSelect: function(e) {
                Le === lt.FROM ? M(e) : $(e)
              },
              onClose: () => Ce(!1)
            }), (0, i.jsx)(ye, {
              header: xt,
              defaultAssets: vt,
              scopedBlockchain: It,
              opened: ke,
              reservedAsset: _t,
              selectedAsset: Ut,
              onAssetSelect: function(e) {
                const t = rt(e);
                if (t && null === Ge) return $e({
                  asset: e,
                  swapOrigin: Le
                }), void we(!0);
                t && Ge ? Je(!0) : (Qe && Je(!1), Le === lt.FROM ? P(e) : te(e))
              },
              onClose: () => be(!1)
            }), (0, i.jsx)(Ie, {
              defaultSlippage: je.slippage,
              onSave: Ht,
              opened: xe,
              onClose: () => ve(!1)
            }), (0, i.jsx)(zt, {
              setIsUSCitizenError: Je,
              setReceiveAsset: te,
              setSpendAsset: P,
              pendingRawToken: Ye,
              opened: ge,
              onClose: () => we(!1)
            })]
          })
        },
        tr = () => (0, i.jsx)(w, {
          children: (0, i.jsx)(er, {})
        });
      var rr = r(4800),
        ir = r(3280);
      const nr = () => {
          const {
            formatMessage: e
          } = (0, me.A)(), t = (0, Ot.Zp)(), {
            isLoading: r
          } = (0, u.useContext)(d.C), s = (0, ir.p)(), c = (0, o.X)(), h = (0, l.R)(), p = !c && !h;
          return s ? (t(a.b.DEFAULT), null) : (0, i.jsx)(rr.LN, {
            loose: !0,
            altTheme: p,
            children: (0, i.jsx)(rr.LO, {
              children: (0, i.jsxs)(rr.Gv, {
                loose: !0,
                children: [p ? (0, i.jsx)("div", {
                  className: "flex my-11 justify-center",
                  children: (0, i.jsx)(Ge.c, {
                    onClick: () => t(a.b.DEFAULT),
                    children: (0, i.jsx)(n.A, {})
                  })
                }) : (0, i.jsx)(rr.zY, {
                  title: e({
                    id: "swap.title",
                    defaultMessage: "Swap"
                  })
                }), r ? (0, i.jsx)("div", {
                  className: "mx-auto",
                  children: (0, i.jsx)(ue.y, {})
                }) : (0, i.jsx)("div", {
                  className: `flex flex-1 flex-col flex-grow-0 \n            self-center bg-backgroundPrimary rounded\n            ${p?"border-line border":""} \n            p-0 container`,
                  children: (0, i.jsx)(tr, {})
                })]
              })
            })
          })
        },
        ar = (0, s.K)(() => (0, i.jsx)(d.M, {
          children: (0, i.jsx)(nr, {})
        })),
        sr = ar
    },
    6475: (e, t, r) => {
      r.d(t, {
        q: () => o
      });
      var i = r(1651),
        n = r(58959),
        a = class extends i.$ {
          constructor(e, t) {
            super(e, t)
          }
          bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
          }
          setOptions(e, t) {
            super.setOptions({
              ...e,
              behavior: (0, n.PL)()
            }, t)
          }
          getOptimisticResult(e) {
            return e.behavior = (0, n.PL)(), super.getOptimisticResult(e)
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "forward"
                }
              }
            })
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: {
                fetchMore: {
                  direction: "backward"
                }
              }
            })
          }
          createResult(e, t) {
            const {
              state: r
            } = e, i = super.createResult(e, t), {
              isFetching: a,
              isRefetching: s,
              isError: o,
              isRefetchError: l
            } = i, d = r.fetchMeta?.fetchMore?.direction, c = o && "forward" === d, h = a && "forward" === d, u = o && "backward" === d, p = a && "backward" === d;
            return {
              ...i,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, n.rB)(t, r.data),
              hasPreviousPage: (0, n.RQ)(t, r.data),
              isFetchNextPageError: c,
              isFetchingNextPage: h,
              isFetchPreviousPageError: u,
              isFetchingPreviousPage: p,
              isRefetchError: l && !c && !u,
              isRefetching: s && !h && !p
            }
          }
        },
        s = r(44171);

      function o(e, t) {
        return (0, s.t)(e, a, t)
      }
    },
    8168: (e, t, r) => {
      r.d(t, {
        b: () => s
      });
      var i = r(74848),
        n = r(52114),
        a = r(1279);
      const s = ({
        title: e,
        children: t,
        className: r = ""
      }) => (0, i.jsxs)("div", {
        className: "my-2 flex flex-col space-y-4 pb-2 " + r,
        children: [e && (0, i.jsx)(n.E, {
          theme: a.Il.THIRD,
          testid: "category-title",
          children: e
        }), t]
      })
    },
    9505: (e, t, r) => {
      r.d(t, {
        R: () => m
      });
      var i = r(15192),
        n = r(96540),
        a = r(6442),
        s = Object.defineProperty,
        o = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        c = {}.hasOwnProperty,
        h = {}.propertyIsEnumerable,
        u = (e, t, r) => t in e ? s(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        p = (e, t) => {
          for (var r in t || (t = {})) c.call(t, r) && u(e, r, t[r]);
          if (d)
            for (var r of d(t)) h.call(t, r) && u(e, r, t[r]);
          return e
        },
        f = (e, t) => o(e, l(t));
      const m = ({
        value: e,
        min: t,
        max: r
      }) => {
        const {
          formatMessage: s
        } = (0, a.A)(), [o, l] = (0, n.useState)({
          isValid: !1,
          number: !1,
          min: !1,
          max: !1
        });
        (0, n.useEffect)(() => {
          l(p({}, (({
            value: e,
            min: t,
            max: r
          }) => {
            const n = {
              number: !1,
              min: !1,
              max: !1
            };
            if (!e) return f(p({}, n), {
              isValid: !1
            });
            try {
              const a = (0, i.A)(e);
              n.number = !0, n.min = typeof t >= "u" || a.gte((0, i.A)(t)), n.max = typeof r >= "u" || a.lte((0, i.A)(r))
            } catch {} finally {
              return f(p({}, n), {
                isValid: Object.values(n).every(e => !!e)
              })
            }
          })({
            value: e,
            min: t,
            max: r
          })))
        }, [e, t, r]);
        const d = (0, n.useMemo)(() => o.number ? o.min ? o.max ? void 0 : s({
          id: "validate-amount.max"
        }, {
          number: r
        }) : s({
          id: "validate-amount.min"
        }, {
          number: t
        }) : s({
          id: "validate-amount.generic"
        }), [s, o, t]);
        return {
          isValid: o.isValid,
          error: d
        }
      }
    },
    16742: (e, t, r) => {
      r.d(t, {
        C: () => a,
        M: () => s
      });
      var i = r(74848),
        n = r(43412);
      const a = (0, r(96540).createContext)({
          domains: [],
          isLoading: !1
        }),
        s = ({
          children: e
        }) => {
          const [t, r] = (0, n.G)();
          return (0, i.jsx)(a.Provider, {
            value: {
              domains: r,
              isLoading: t
            },
            children: e
          })
        }
    },
    20998: (e, t, r) => {
      r.d(t, {
        S: () => y
      });
      var i = r(74848),
        n = r(96540),
        a = r(6442),
        s = r(52114),
        o = r(1279),
        l = r(8360),
        d = r(94893),
        c = r(9770),
        h = r(97726),
        u = r(46729),
        p = r(95455),
        f = r(65504),
        m = r(68632),
        F = r(98939),
        C = r(22146),
        k = r(23350);
      const b = Object.values(F.hF),
        x = e => b.includes(e),
        v = e => {
          var t;
          return null != (t = e.displayName) ? t : e.name
        },
        g = (e, t) => {
          const r = v(e).toLowerCase(),
            i = e.symbol.toLowerCase();
          return r.includes(t) || i.includes(t)
        },
        w = (e, t) => b.indexOf(e.coinId) - b.indexOf(t.coinId),
        L = (e, t) => v(e).localeCompare(v(t)),
        y = ({
          isOpen: e,
          onClose: t,
          blockchainList: r,
          selectedBlockchainId: F,
          onSelectNetwork: b,
          hideAllNetworksOption: y
        }) => {
          const {
            formatMessage: A
          } = (0, a.A)(), [D, E] = (0, n.useState)(""), B = D.toLowerCase(), N = (0, n.useMemo)(() => r.filter(e => x(e.coinId)).filter(e => !D || g(e, B)).sort(w), [r, D, B]), M = (0, n.useMemo)(() => r.filter(e => !x(e.coinId)).filter(e => !D || g(e, B)).sort(L), [r, D, B]), j = !D && !y, P = D && 0 === N.length && 0 === M.length, S = e => e ? F === e.id : !F, W = e => ((e, t, r) => new Promise((e, t) => {
            var i = e => {
                try {
                  a(r.next(e))
                } catch (e) {
                  t(e)
                }
              },
              n = e => {
                try {
                  a(r.throw(e))
                } catch (e) {
                  t(e)
                }
              },
              a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
            a((r = r.apply(null, null)).next())
          }))(0, 0, function*() {
            b(e), t(), E("")
          });
          return (0, i.jsx)(C.a, {
            opened: e,
            onClose: () => {
              t(), E("")
            },
            title: A({
              id: "select-network.title",
              defaultMessage: "Select network"
            }),
            placement: k.Gn.BOTTOM,
            children: (0, i.jsxs)("div", {
              className: "flex flex-col min-h-[95vh]  space-y-3",
              children: [(0, i.jsx)(l.D, {
                placeholder: A({
                  id: "select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: D,
                onChange: e => E(e.target.value),
                autoFocus: !1,
                testid: "network-modal-search"
              }), (0, i.jsx)("div", {
                className: "flex-1 overflow-y-auto tw-scrollbar flex flex-col",
                children: P ? (0, i.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, i.jsx)(p.B, {})
                }) : (0, i.jsx)("div", {
                  className: "space-y-4",
                  children: (0, i.jsxs)(i.Fragment, {
                    children: [j && (0, i.jsx)(d.c, {
                      onClick: () => W(null),
                      testid: "network-modal-all",
                      children: (0, i.jsxs)("div", {
                        className: "flex items-center justify-between py-3",
                        children: [(0, i.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [(0, i.jsx)("div", {
                            className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                            children: (0, i.jsx)(c.s, {
                              width: 20,
                              height: 20,
                              colorClass: "text-primary"
                            })
                          }), (0, i.jsx)(s.E, {
                            type: o.jK.SUBHEADER_16,
                            theme: o.Il.PRIMARY,
                            children: A({
                              id: "select-crypto.all-networks",
                              defaultMessage: "All networks"
                            })
                          })]
                        }), S(null) ? (0, i.jsx)(h.w, {
                          width: 24,
                          height: 24,
                          colorClass: "text-primary"
                        }) : (0, i.jsx)(u.r, {
                          width: 24,
                          height: 24,
                          colorClass: "text-utility-1-opacity-2"
                        })]
                      })
                    }), N.length > 0 && (0, i.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, i.jsx)("div", {
                        className: "mb-2",
                        children: (0, i.jsx)(s.E, {
                          type: o.jK.BODY_14,
                          theme: o.Il.SECONDARY,
                          weight: o.nG.SEMIBOLD,
                          testid: "popular-networks-title",
                          children: A({
                            id: "select-network.popular-networks",
                            defaultMessage: "Popular networks"
                          })
                        })
                      }), N.map(e => (0, i.jsx)(d.c, {
                        onClick: () => W(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, i.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, i.jsx)(f.q, {
                              name: v(e),
                              src: e.iconUrl,
                              size: m.Y.LARGE
                            }), (0, i.jsx)(s.E, {
                              type: o.jK.SUBHEADER_16,
                              theme: o.Il.PRIMARY,
                              children: v(e)
                            })]
                          }), S(e) ? (0, i.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, i.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    }), M.length > 0 && (0, i.jsxs)("div", {
                      className: "mt-4",
                      children: [(0, i.jsx)("div", {
                        className: "mb-2",
                        children: (0, i.jsx)(s.E, {
                          type: o.jK.BODY_14,
                          theme: o.Il.SECONDARY,
                          weight: o.nG.SEMIBOLD,
                          testid: "az-networks-title",
                          children: A({
                            id: "select-network.az-networks",
                            defaultMessage: "A-Z networks"
                          })
                        })
                      }), M.map(e => (0, i.jsx)(d.c, {
                        onClick: () => W(e),
                        testid: "network-modal-" + e.symbol.toLowerCase(),
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center justify-between py-2",
                          children: [(0, i.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, i.jsx)(f.q, {
                              name: v(e),
                              src: e.iconUrl,
                              size: m.Y.LARGE
                            }), (0, i.jsx)(s.E, {
                              type: o.jK.SUBHEADER_16,
                              theme: o.Il.PRIMARY,
                              children: v(e)
                            })]
                          }), S(e) ? (0, i.jsx)(h.w, {
                            width: 24,
                            height: 24,
                            colorClass: "text-primary"
                          }) : (0, i.jsx)(u.r, {
                            width: 24,
                            height: 24,
                            colorClass: "text-utility-1-opacity-2"
                          })]
                        })
                      }, e.coinId))]
                    })]
                  })
                })
              })]
            })
          })
        }
    },
    21190: (e, t, r) => {
      r.d(t, {
        W: () => c
      });
      var i = r(74848),
        n = r(94893),
        a = r(41327),
        s = r(65504),
        o = r(68632),
        l = r(52114),
        d = r(1279);
      const c = ({
        iconUrl: e,
        icon: t,
        name: r = "",
        symbol: c,
        network: h,
        onClick: u,
        testid: p,
        contractAddress: f,
        variant: m = "default"
      }) => (0, i.jsx)(n.c, {
        testid: p,
        onClick: u,
        children: (0, i.jsxs)("div", {
          className: "flex items-center " + ("default" === m ? "space-x-2.5" : "space-x-1 bg-button-secondary hover:bg-button-secondary-hovered rounded-full p-4"),
          children: [e ? (0, i.jsx)(s.q, {
            size: "default" === m ? o.Y.LARGE : o.Y.XXSMALL,
            src: e,
            name: r,
            network: f ? h : void 0
          }) : t, (0, i.jsxs)("div", {
            className: "flex " + ("default" === m ? "flex-col" : "flex-row"),
            children: [(0, i.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, i.jsx)(l.E, {
                type: "default" === m ? d.jK.TITLE : d.jK.SUBHEADER_14,
                weight: d.nG.SEMIBOLD,
                children: c
              }), (0, i.jsx)(a.v, {
                width: "default" === m ? 20 : 16,
                height: "default" === m ? 20 : 16,
                colorClass: "default" === m ? "text-iconNormal" : "text-icon-primary"
              })]
            }), r && (0, i.jsx)("div", {
              className: "flex whitespace-nowrap",
              children: (0, i.jsx)(l.E, {
                type: d.jK.CAPTION,
                theme: d.Il.SECONDARY,
                children: r
              })
            })]
          })]
        })
      })
    },
    31441: (e, t, r) => {
      r.d(t, {
        D: () => n
      });
      var i = r(74848);
      const n = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, i.jsxs)("svg", {
        className: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: e ?? 24,
        height: t ?? 24,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [(0, i.jsx)("path", {
          d: "M18.0748 7.90867L14.5998 4.30034C14.2415 3.92534 13.6498 3.917 13.2748 4.27534C12.8998 4.63367 12.8915 5.22534 13.2498 5.60034L15.1915 7.617H3.23314C2.71647 7.617 2.2998 8.03367 2.2998 8.55034C2.2998 9.067 2.71647 9.48367 3.23314 9.48367H17.3998C17.6331 9.48367 17.8665 9.40034 18.0498 9.22534C18.4248 8.867 18.4331 8.27534 18.0748 7.90034V7.90867Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          d: "M16.7664 11.167H2.59975C2.36642 11.167 2.13308 11.2503 1.94975 11.4253C1.57475 11.7837 1.56642 12.3753 1.92475 12.7503L5.39975 16.3587C5.75808 16.7337 6.34975 16.742 6.72475 16.3837C7.09975 16.0253 7.10809 15.4337 6.74975 15.0587L4.80808 13.042H16.7748C17.2914 13.042 17.7081 12.6253 17.7081 12.1087C17.7081 11.592 17.2914 11.1753 16.7748 11.1753L16.7664 11.167Z",
          fill: "currentColor"
        })]
      })
    },
    33647: (e, t, r) => {
      r.d(t, {
        d: () => B
      });
      var i = r(74848),
        n = r(66737),
        a = r(16638),
        s = r(96540),
        o = r(24867),
        l = r(95060),
        d = r(37786),
        c = r(96992),
        h = r(95015),
        u = r(69821),
        p = r(98975),
        f = r(65448),
        m = r(82498),
        F = r(15953),
        C = r(9685),
        k = r(43660),
        b = r(66206),
        x = r(59124),
        v = r(44586),
        g = r(90540);
      let w = (0, s.createContext)(null);
      w.displayName = "GroupContext";
      let L = s.Fragment,
        y = (0, b.FX)(function(e, t) {
          var r;
          let i = (0, s.useId)(),
            L = (0, F.q)(),
            y = (0, f.N)(),
            {
              id: A = L || "headlessui-switch-" + i,
              disabled: D = y || !1,
              checked: E,
              defaultChecked: B,
              onChange: N,
              name: M,
              value: j,
              form: P,
              autoFocus: S = !1,
              ...W
            } = e,
            T = (0, s.useContext)(w),
            [O, V] = (0, s.useState)(null),
            R = (0, s.useRef)(null),
            Z = (0, p.P)(R, t, null === T ? null : T.setSwitch, V),
            I = (0, d.K)(B),
            [_, z] = (0, l.P)(E, N, I ?? !1),
            U = (0, c.L)(),
            [H, q] = (0, s.useState)(!1),
            X = (0, h.N)(() => {
              q(!0), z?.(!_), U.nextFrame(() => {
                q(!1)
              })
            }),
            G = (0, h.N)(e => {
              if ((0, C.l)(e.currentTarget)) return e.preventDefault();
              e.preventDefault(), X()
            }),
            K = (0, h.N)(e => {
              e.key === v.D.Space ? (e.preventDefault(), X()) : e.key === v.D.Enter && (0, k.q)(e.currentTarget)
            }),
            Q = (0, h.N)(e => e.preventDefault()),
            J = (0, g.o2)(),
            Y = (0, x.MM)(),
            {
              isFocusVisible: $,
              focusProps: ee
            } = (0, n.o)({
              autoFocus: S
            }),
            {
              isHovered: te,
              hoverProps: re
            } = (0, a.M)({
              isDisabled: D
            }),
            {
              pressed: ie,
              pressProps: ne
            } = (0, o.Z)({
              disabled: D
            }),
            ae = (0, s.useMemo)(() => ({
              checked: _,
              disabled: D,
              hover: te,
              focus: $,
              active: ie,
              autofocus: S,
              changing: H
            }), [_, te, $, ie, D, H, S]),
            se = (0, b.v6)({
              id: A,
              ref: Z,
              role: "switch",
              type: (0, u.c)(e, O),
              tabIndex: -1 === e.tabIndex ? 0 : null != (r = e.tabIndex) ? r : 0,
              "aria-checked": _,
              "aria-labelledby": J,
              "aria-describedby": Y,
              disabled: D || void 0,
              autoFocus: S,
              onClick: G,
              onKeyUp: K,
              onKeyPress: Q
            }, ee, re, ne),
            oe = (0, s.useCallback)(() => {
              if (void 0 !== I) return z?.(I)
            }, [z, I]),
            le = (0, b.Ci)();
          return s.createElement(s.Fragment, null, null != M && s.createElement(m.CL, {
            disabled: D,
            data: {
              [M]: j || "on"
            },
            overrides: {
              type: "checkbox",
              checked: _
            },
            form: P,
            onReset: oe
          }), le({
            ourProps: se,
            theirProps: W,
            slot: ae,
            defaultTag: "button",
            name: "Switch"
          }))
        }),
        A = g.JU,
        D = x.VY,
        E = Object.assign(y, {
          Group: function(e) {
            var t;
            let [r, i] = (0, s.useState)(null), [n, a] = (0, g.b0)(), [o, l] = (0, x.rU)(), d = (0, s.useMemo)(() => ({
              switch: r,
              setSwitch: i
            }), [r, i]), c = e, h = (0, b.Ci)();
            return s.createElement(l, {
              name: "Switch.Description",
              value: o
            }, s.createElement(a, {
              name: "Switch.Label",
              value: n,
              props: {
                htmlFor: null == (t = d.switch) ? void 0 : t.id,
                onClick(e) {
                  r && (e.currentTarget instanceof HTMLLabelElement && e.preventDefault(), r.click(), r.focus({
                    preventScroll: !0
                  }))
                }
              }
            }, s.createElement(w.Provider, {
              value: d
            }, h({
              ourProps: {},
              theirProps: c,
              slot: {},
              defaultTag: L,
              name: "Switch.Group"
            }))))
          },
          Label: A,
          Description: D
        });
      const B = ({
        label: e,
        checked: t,
        testid: r,
        disabled: n,
        onChange: a
      }) => (0, i.jsxs)(E, {
        "data-testid": r,
        checked: t,
        onChange: a,
        className: "switch",
        onClick: e => e.stopPropagation(),
        disabled: n,
        children: [e && (0, i.jsx)("span", {
          className: "sr-only",
          children: e
        }), (0, i.jsx)("span", {
          "aria-hidden": "true",
          className: "switch__toggle"
        })]
      })
    },
    38795: (e, t, r) => {
      r.d(t, {
        r: () => o
      });
      var i = r(6475),
        n = r(96540),
        a = r(64145),
        s = r(89408);

      function o(e, t) {
        const [r, o] = (0, n.useState)(void 0), {
          data: l,
          error: d,
          fetchNextPage: c,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: f
        } = (0, i.q)({
          queryKey: ["tokens", r, e?.join()],
          queryFn: ({
            pageParam: i
          }) => a.YW.emit(s.A.SEARCH_ASSETS, {
            query: r,
            networks: e,
            page: i,
            includeNonCustomTokenNetworks: t
          }),
          enabled: void 0 !== r,
          initialPageParam: 0,
          refetchOnWindowFocus: !1,
          getNextPageParam: e => e?.nextPage
        }), m = (0, n.useMemo)(() => (l?.pages || []).flatMap(e => e?.data || []), [l?.pages]), F = (0, n.useMemo)(() => {
          var e, t, r;
          return null != (r = null == (t = null == (e = l?.pages) ? void 0 : e[0]) ? void 0 : t.useOnlyBackendResults) && r
        }, [l?.pages]);
        return {
          setQuery: o,
          data: l,
          error: d,
          fetchNextPage: c,
          hasNextPage: h,
          isFetching: u,
          isFetchingNextPage: p,
          status: f,
          flattenData: m,
          useOnlyBackendResults: F
        }
      }
    },
    44199: (e, t, r) => {
      r.d(t, {
        X: () => a
      });
      var i = r(96540);

      function n() {
        const e = document.documentElement;
        return {
          width: parseInt(e.style.width, 10) || 0,
          height: parseInt(e.style.height, 10) || 0
        }
      }
      const a = () => {
        const [e, t] = (0, i.useState)(() => {
          const {
            width: e,
            height: t
          } = n();
          return window.innerWidth === e && window.innerHeight === t
        });
        return (0, i.useEffect)(() => {
          const e = () => {
            const {
              width: e,
              height: r
            } = n();
            t(window.innerWidth === e && window.innerHeight === r)
          };
          return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), e
      }
    },
    45871: (e, t, r) => {
      r.d(t, {
        x: () => a
      });
      var i = r(68157),
        n = r(96540);
      const a = () => {
        var e;
        const t = null != (e = (0, i.GV)(e => {
          var t;
          return null == (t = e.tx.itemsPerWalletAccount[e.wallet.walletId]) ? void 0 : t[e.wallet.selectedAccountId]
        })) ? e : [];
        return (0, n.useMemo)(() => (t.sort((e, t) => t.createdAt - e.createdAt), t), [t])
      }
    },
    68969: (e, t, r) => {
      r.d(t, {
        $i: () => s,
        Xc: () => a,
        Zq: () => n,
        oq: () => i
      });
      const i = "FAILED_QUOTE_GENERATION",
        n = "FAILED_AMBER_RPC_ERROR",
        a = "FAILED_APPROVAL_TRANSACTION_PAYLOAD_GENERATION",
        s = "FAILED_SWAP_TRANSACTION_PAYLOAD_GENERATION"
    },
    98005: (e, t, r) => {
      r.d(t, {
        l: () => n
      });
      var i = r(74848);
      const n = ({
        width: e,
        height: t,
        colorClass: r
      }) => (0, i.jsxs)("svg", {
        className: r,
        fill: "none",
        width: e ?? 20,
        height: t ?? 20,
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          paddingLeft: "1px"
        },
        children: [(0, i.jsx)("path", {
          d: "M16.495 4.75012H4.995C4.375 4.75012 3.875 5.25012 3.875 5.87012C3.875 6.49012 4.375 6.99012 4.995 6.99012H16.495C16.985 6.99012 17.375 7.38012 17.375 7.87012V16.1101C17.375 16.6001 16.975 16.9901 16.495 16.9901H3.505C3.015 16.9901 2.625 16.5901 2.625 16.1101V3.87012C2.625 3.39012 3.015 2.99012 3.495 2.99012H16.495C17.115 2.99012 17.615 2.49012 17.615 1.87012C17.615 1.25012 17.115 0.750122 16.495 0.750122H3.495C1.775 0.750122 0.375 2.15012 0.375 3.87012V16.1101C0.375 17.8401 1.785 19.2401 3.505 19.2401H16.495C18.225 19.2401 19.625 17.8401 19.625 16.1101V7.87012C19.625 6.15012 18.215 4.75012 16.495 4.75012Z",
          fill: "currentColor"
        }), (0, i.jsx)("path", {
          d: "M14.6249 12.5001C15.2449 12.5001 15.7449 12.0001 15.7449 11.3801C15.7449 10.7601 15.2449 10.2601 14.6249 10.2601H12.3749C11.7549 10.2601 11.2549 10.7601 11.2549 11.3801C11.2549 12.0001 11.7549 12.5001 12.3749 12.5001H14.6249Z",
          fill: "currentColor"
        })]
      })
    }
  }
]);
