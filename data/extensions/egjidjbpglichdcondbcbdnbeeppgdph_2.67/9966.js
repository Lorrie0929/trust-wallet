try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e.i = e.i || {}, e.i[a] = "822d31bc-7b0f-4831-95f0-c75e0f2c16d3", e.t = "sentry-dbid-822d31bc-7b0f-4831-95f0-c75e0f2c16d3")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [9966], {
    14940: (e, a, i) => {
      i.d(a, {
        h: () => b
      });
      var n = i(74848),
        t = i(97726),
        l = i(46729),
        r = i(7668),
        s = i(52114),
        c = i(1279),
        o = i(79830),
        d = i(50882),
        u = i(90924),
        m = i(69254),
        h = i(21094);
      const b = ({
        id: e,
        providerName: a,
        providerIcon: i,
        cryptoAmount: b,
        cryptoCurrency: y,
        fiatAmount: p,
        fiatCurrency: g,
        badgeText: f,
        isLoading: v,
        reversedAmounts: w = !1,
        onClick: k
      }) => (0, n.jsx)(r.sx, {
        value: e,
        className: "cursor-pointer",
        onClick: k,
        children: ({
          checked: e
        }) => (0, n.jsxs)("div", {
          className: "flex items-center justify-between py-4 gap-2",
          children: [(0, n.jsxs)("div", {
            className: "flex items-center space-x-3 flex-1 min-w-0",
            children: [i ? (0, n.jsx)("img", {
              src: i,
              alt: a,
              className: "w-10 h-10 object-contain"
            }) : (0, n.jsx)("div", {
              className: "w-10 h-10 rounded-full bg-background-secondary flex items-center justify-center flex-shrink-0",
              children: (0, n.jsx)(s.E, {
                type: c.jK.SUBHEADER_16,
                weight: c.nG.SEMIBOLD,
                children: a.charAt(0)
              })
            }), (0, n.jsx)("div", {
              className: "flex flex-col min-w-0 flex-1",
              children: (0, n.jsxs)("div", {
                className: "flex items-center gap-1 min-w-0 flex-wrap",
                children: [(0, n.jsx)(s.E, {
                  type: c.jK.TITLE,
                  theme: c.Il.PRIMARY,
                  weight: c.nG.SEMIBOLD,
                  truncated: !0,
                  children: a
                }), f && (0, n.jsx)(d.E, {
                  theme: u.e.PRIMARY,
                  type: u.f.WIDER,
                  text: f
                })]
              })
            })]
          }), (0, n.jsx)("div", {
            className: "flex items-center space-x-3 flex-shrink-0",
            children: v ? (0, n.jsx)(o.y, {}) : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", {
                className: "flex flex-col items-end",
                children: w && void 0 !== p && g ? (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(m.h, {
                    value: p,
                    amountType: h.Cu.FIAT,
                    currency: g,
                    textType: c.jK.TITLE,
                    theme: c.Il.PRIMARY,
                    weight: c.nG.SEMIBOLD,
                    maxSignificantDecimals: 2
                  }), (0, n.jsx)(m.h, {
                    value: b,
                    amountType: h.Cu.CRYPTO,
                    currency: y,
                    textType: c.jK.BODY_12,
                    theme: c.Il.SECONDARY,
                    weight: c.nG.MEDIUM,
                    maxSignificantDecimals: 6
                  })]
                }) : (0, n.jsx)(m.h, {
                  value: b,
                  amountType: h.Cu.CRYPTO,
                  currency: y,
                  textType: c.jK.TITLE,
                  theme: c.Il.PRIMARY,
                  weight: c.nG.SEMIBOLD,
                  maxSignificantDecimals: 6
                })
              }), e ? (0, n.jsx)(t.w, {
                width: 24,
                height: 24,
                colorClass: "text-brand-primary"
              }) : (0, n.jsx)(l.r, {
                width: 24,
                height: 24,
                colorClass: "text-icon-disabled"
              })]
            })
          })]
        })
      })
    },
    21190: (e, a, i) => {
      i.d(a, {
        W: () => d
      });
      var n = i(74848),
        t = i(94893),
        l = i(41327),
        r = i(65504),
        s = i(68632),
        c = i(52114),
        o = i(1279);
      const d = ({
        iconUrl: e,
        icon: a,
        name: i = "",
        symbol: d,
        network: u,
        onClick: m,
        testid: h,
        contractAddress: b,
        variant: y = "default"
      }) => (0, n.jsx)(t.c, {
        testid: h,
        onClick: m,
        children: (0, n.jsxs)("div", {
          className: "flex items-center " + ("default" === y ? "space-x-2.5" : "space-x-1 bg-button-secondary hover:bg-button-secondary-hovered rounded-full p-4"),
          children: [e ? (0, n.jsx)(r.q, {
            size: "default" === y ? s.Y.LARGE : s.Y.XXSMALL,
            src: e,
            name: i,
            network: b ? u : void 0
          }) : a, (0, n.jsxs)("div", {
            className: "flex " + ("default" === y ? "flex-col" : "flex-row"),
            children: [(0, n.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [(0, n.jsx)(c.E, {
                type: "default" === y ? o.jK.TITLE : o.jK.SUBHEADER_14,
                weight: o.nG.SEMIBOLD,
                children: d
              }), (0, n.jsx)(l.v, {
                width: "default" === y ? 20 : 16,
                height: "default" === y ? 20 : 16,
                colorClass: "default" === y ? "text-iconNormal" : "text-icon-primary"
              })]
            }), i && (0, n.jsx)("div", {
              className: "flex whitespace-nowrap",
              children: (0, n.jsx)(c.E, {
                type: o.jK.CAPTION,
                theme: o.Il.SECONDARY,
                children: i
              })
            })]
          })]
        })
      })
    },
    23384: (e, a, i) => {
      i.d(a, {
        A: () => t
      });
      var n = i(24439);
      const t = {
        FETCH_TOKENS_AVAILABLE_TO_BUY: (0, n.If)("FetchTokensAvailableToBuy"),
        FETCH_TOKENS_AVAILABLE_TO_SELL: (0, n.If)("FetchTokensAvailableToSell"),
        GET_BUY_CRYPTO_ASSETS: (0, n.If)("GetBuyCryptoAssets"),
        GET_BUY_PROVIDER_ROUTES: (0, n.If)("GetBuyProviderRoutes"),
        BUY_CRYPTO_QUOTE: (0, n.If)("BuyCryptoQuote"),
        BUY_CRYPTO: (0, n.If)("BuyCrypto"),
        SELL_CRYPTO_QUOTE: (0, n.If)("SellCryptoQuote"),
        SELL_CRYPTO: (0, n.If)("SellCrypto"),
        ONE_CLICK_BUY_CRYPTO_CONFIG: (0, n.If)("OneClickBuyCryptoConfig"),
        BUY_CRYPTO_WIDGET_QUOTE: (0, n.If)("BuyCryptoWidgetQuote"),
        GET_P2P_BUY_CRYPTO_CONFIG: (0, n.If)("GetP2PBuyCryptoConfig"),
        GET_P2P_BUY_CRYPTO_QUOTES: (0, n.If)("GetP2PBuyCryptoQuotes"),
        GET_P2P_BUY_CRYPTO_CHECKOUT: (0, n.If)("GetP2PBuyCryptoCheckout")
      }
    },
    25160: (e, a, i) => {
      i.d(a, {
        H: () => l
      });
      var n, t = ((n = t || {}).MOBILE_PAY = "MOBILE_PAY", n.BANK_TRANSFER = "BANK_TRANSFER", n.CREDIT_CARD = "CREDIT_CARD", n.DIGITAL_WALLET = "DIGITAL_WALLET", n.P2P = "P2P", n.OTHER = "OTHER", n),
        l = (e => (e.LAST_USED = "LastUsed", e.LOCAL = "Local", e.DEFAULT = "Default", e))(l || {})
    },
    28744: (e, a, i) => {
      i.d(a, {
        q: () => k
      });
      var n = i(74848),
        t = i(4800),
        l = i(6442),
        r = i(96540),
        s = i(8360),
        c = i(7668),
        o = i(79830),
        d = i(52114),
        u = i(1279),
        m = i(95455),
        h = i(79372),
        b = i(25160),
        y = i(97726),
        p = i(46729),
        g = i(34205),
        f = i(50882),
        v = i(90924);
      const w = ({
          fiatCurrency: e,
          badges: a,
          onClick: i
        }) => {
          const {
            formatMessage: t
          } = (0, l.A)(), r = h.O5[e] || e, s = (0, g.y)(e), o = a?.includes(b.H.LAST_USED), m = s ? (0, n.jsx)("img", {
            src: s,
            alt: e,
            className: "w-10 h-10 rounded-full object-cover"
          }) : null;
          return (0, n.jsx)(c.sx, {
            value: e,
            className: "cursor-pointer",
            onClick: i,
            children: ({
              checked: a
            }) => (0, n.jsxs)("div", {
              className: "flex items-center justify-between py-3",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center space-x-3",
                children: [(0, n.jsx)("div", {
                  className: "flex-shrink-0",
                  children: m
                }), (0, n.jsxs)("div", {
                  className: "flex flex-col",
                  children: [(0, n.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, n.jsx)(d.E, {
                      type: u.jK.TITLE,
                      theme: u.Il.PRIMARY,
                      children: e
                    }), o && (0, n.jsx)(f.E, {
                      theme: v.e.SUCCESS,
                      text: t({
                        id: "select-fiat.last-used",
                        defaultMessage: "Last used"
                      }),
                      className: "text-xx-small"
                    })]
                  }), (0, n.jsx)(d.E, {
                    type: u.jK.BODY,
                    theme: u.Il.THIRD,
                    children: r
                  })]
                })]
              }), (0, n.jsx)("div", {
                className: "flex items-center",
                children: a ? (0, n.jsx)(y.w, {
                  width: 24,
                  height: 24,
                  colorClass: "text-brand-primary"
                }) : (0, n.jsx)(p.r, {
                  width: 24,
                  height: 24,
                  colorClass: "text-icon-disabled"
                })
              })]
            })
          }, e)
        },
        k = ({
          onBackAction: e,
          selectedFiatCurrency: a,
          onSelectCurrency: i,
          currencies: y,
          isLoading: p
        }) => {
          const {
            formatMessage: g
          } = (0, l.A)(), [f, v] = (0, r.useState)(""), k = y.filter(e => function(e, a) {
            const i = h.O5[a] || "";
            return a.toLowerCase().includes(e.toLowerCase()) || i.toLowerCase().includes(e.toLowerCase())
          }(f, e.fiatCurrency)), x = k.find(e => {
            var a;
            return null == (a = e.badges) ? void 0 : a.includes(b.H.LOCAL)
          }), N = k.filter(e => {
            var a;
            return !(null != (a = e.badges) && a.includes(b.H.LOCAL))
          });
          return (0, n.jsxs)(t.LN, {
            wide: !0,
            children: [(0, n.jsx)(t.zY, {
              backAction: e,
              title: g({
                id: "currency-selection-modal.fiat-header",
                defaultMessage: "Select currency"
              })
            }), (0, n.jsxs)(t.Gv, {
              children: [(0, n.jsx)(s.D, {
                placeholder: g({
                  id: "select-fiat.search-placeholder",
                  defaultMessage: "Search"
                }),
                value: f,
                onChange: e => v(e.target.value),
                autoFocus: !1,
                className: "mb-7"
              }), (0, n.jsx)(t.LO, {
                children: p ? (0, n.jsx)("div", {
                  className: "flex text-primary justify-center py-8",
                  children: (0, n.jsx)(o.y, {})
                }) : (0, n.jsxs)(c.z6, {
                  value: a,
                  children: [x && (0, n.jsxs)("div", {
                    className: "flex flex-col mb-5",
                    children: [(0, n.jsx)(d.E, {
                      theme: u.Il.THIRD,
                      testid: "category-title",
                      children: g({
                        id: "select-fiat.local-currency",
                        defaultMessage: "Local currency"
                      })
                    }), (0, n.jsx)(w, {
                      fiatCurrency: x.fiatCurrency,
                      badges: x.badges,
                      onClick: () => i(x.fiatCurrency)
                    })]
                  }), N.length > 0 ? (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, n.jsx)(d.E, {
                      theme: u.Il.THIRD,
                      testid: "category-title",
                      children: g({
                        id: "select-fiat.available-currencies",
                        defaultMessage: "Available currencies"
                      })
                    }), N.map(e => (0, n.jsx)(w, {
                      fiatCurrency: e.fiatCurrency,
                      badges: e.badges,
                      onClick: () => i(e.fiatCurrency)
                    }, e.fiatCurrency))]
                  }) : (0, n.jsx)(m.B, {})]
                })
              })]
            })]
          })
        }
    },
    29618: (e, a, i) => {
      i.d(a, {
        d: () => b
      });
      var n = i(74848),
        t = i(4800),
        l = i(6442),
        r = i(79830),
        s = i(52114),
        c = i(1279),
        o = i(7668),
        d = i(41327),
        u = i(65512),
        m = i(52619),
        h = i(42151);
      const b = ({
        onBackAction: e,
        selectedQuoteId: a,
        onSelectProvider: i,
        isLoading: b,
        isError: y,
        hasQuotes: p,
        paymentMethod: g,
        children: f
      }) => {
        const {
          formatMessage: v
        } = (0, l.A)(), w = window.innerHeight - (g ? h.q : h.QA);
        return (0, n.jsxs)(t.LN, {
          wide: !0,
          children: [(0, n.jsx)("div", {
            className: "mb-3",
            children: (0, n.jsx)(t.zY, {
              backAction: e,
              title: v({
                id: "select-provider.title",
                defaultMessage: "Select provider"
              })
            })
          }), (0, n.jsx)(t.Gv, {
            children: b ? (0, n.jsx)("div", {
              className: "flex justify-center py-8",
              children: (0, n.jsx)(r.y, {})
            }) : y ? (0, n.jsx)("div", {
              className: "flex flex-col items-center justify-center py-8",
              children: (0, n.jsx)(s.E, {
                type: c.jK.BODY_14,
                theme: c.Il.SECONDARY,
                children: v({
                  id: "select-provider.error",
                  defaultMessage: "Failed to load providers. Please try again."
                })
              })
            }) : p ? (0, n.jsxs)(n.Fragment, {
              children: [g && (0, n.jsxs)("div", {
                className: "mb-5",
                children: [(0, n.jsx)("div", {
                  className: "mb-3",
                  children: (0, n.jsx)(s.E, {
                    type: c.jK.BODY_14,
                    theme: c.Il.SECONDARY,
                    children: v({
                      id: "select-provider.payment-method",
                      defaultMessage: "Payment method"
                    })
                  })
                }), (0, n.jsxs)(u.$, {
                  theme: m.ry.SECONDARY,
                  shape: m.dB.DEFAULT,
                  className: "flex items-center justify-between py-5 px-4 bg-background-secondary rounded-4",
                  onClick: g.onSelect,
                  children: [(0, n.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [g.imageUrl && (0, n.jsx)("img", {
                      src: g.imageUrl,
                      alt: g.displayName,
                      width: 40,
                      height: 40,
                      className: g.isTemplateImage ? "dark:invert" : ""
                    }), (0, n.jsx)(s.E, {
                      type: c.jK.SUBHEADER_16,
                      weight: c.nG.SEMIBOLD,
                      children: g.displayName
                    })]
                  }), (0, n.jsx)(d.v, {
                    width: 20,
                    height: 20,
                    colorClass: "text-icon-secondary"
                  })]
                })]
              }), (0, n.jsx)("div", {
                className: "mb-2",
                children: (0, n.jsx)(s.E, {
                  type: c.jK.BODY_14,
                  theme: c.Il.SECONDARY,
                  children: v({
                    id: "select-provider.all-providers",
                    defaultMessage: "All providers"
                  })
                })
              }), (0, n.jsx)("div", {
                className: "overflow-y-auto tw-scrollbar",
                style: {
                  height: w
                },
                children: (0, n.jsx)(o.z6, {
                  value: a,
                  children: f
                })
              })]
            }) : (0, n.jsx)("div", {
              className: "flex flex-col items-center justify-center py-8",
              children: (0, n.jsx)(s.E, {
                type: c.jK.BODY_14,
                theme: c.Il.SECONDARY,
                children: v({
                  id: "select-provider.no-providers",
                  defaultMessage: "No providers available for this asset."
                })
              })
            })
          })]
        })
      }
    },
    33926: (e, a, i) => {
      i.d(a, {
        A: () => g
      });
      var n = i(74848),
        t = i(97726),
        l = i(46729),
        r = i(65504),
        s = i(68632),
        c = i(7668),
        o = i(52114),
        d = i(1279),
        u = i(69254),
        m = i(21094),
        h = i(86170),
        b = i(87841),
        y = i(75485),
        p = i(41393);
      const g = ({
        asset: e,
        balance: a,
        fiatPrice: i,
        onClick: g
      }) => {
        const {
          imageUrls: f,
          networkInfo: v
        } = (e => {
          var a;
          const i = (0, b.w)(),
            {
              coinId: n,
              address: t
            } = (0, y.$5)(e),
            l = null !== n && null != (a = i[n]) ? a : null,
            r = l ? (0, p.ys)(e, l.id) : null;
          return {
            blockchain: l ?? null,
            imageUrls: r,
            networkInfo: (t && l ? {
              iconUrl: r?.chainImageUrl,
              name: l.name,
              displayName: l.displayName
            } : null) ?? null,
            address: t,
            coinId: n
          }
        })(e.assetId), {
          currency: w,
          baseCurrencyType: k,
          isCrypto: x
        } = (0, h.P)(), N = void 0 !== a && parseFloat(a) > 0, C = void 0 !== i ? i * parseFloat(a ?? "0") : void 0, T = void 0 !== a;
        return (0, n.jsx)(c.sx, {
          value: e.assetId,
          className: "cursor-pointer",
          onClick: g,
          children: ({
            checked: i
          }) => {
            var c;
            return (0, n.jsxs)("div", {
              className: "flex items-center justify-between py-3",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center space-x-3",
                children: [(0, n.jsx)(r.q, {
                  size: s.Y.LARGE,
                  src: f?.assetImageUrl,
                  name: null != (c = e.name) ? c : e.symbol,
                  network: v ?? void 0
                }), (0, n.jsxs)("div", {
                  className: "flex flex-col",
                  children: [(0, n.jsx)("div", {
                    className: "flex items-center space-x-2",
                    children: (0, n.jsx)(o.E, {
                      type: d.jK.TITLE,
                      theme: d.Il.PRIMARY,
                      weight: d.nG.SEMIBOLD,
                      children: e.symbol
                    })
                  }), e.name && (0, n.jsx)(o.E, {
                    type: d.jK.BODY_12,
                    theme: d.Il.SECONDARY,
                    weight: d.nG.MEDIUM,
                    children: e.name
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: "flex items-center space-x-3",
                children: [T && (0, n.jsx)("div", {
                  className: "flex flex-col items-end",
                  children: N ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(u.h, {
                      testid: "asset-fiat-value",
                      value: C,
                      currency: w,
                      amountType: k,
                      textType: d.jK.BODY_14,
                      theme: d.Il.PRIMARY,
                      weight: d.nG.MEDIUM,
                      maxSignificantDecimals: x ? 8 : 2,
                      tinyThreshold: x ? 8 : 2
                    }), (0, n.jsxs)("div", {
                      className: "flex items-center space-x-1",
                      children: [(0, n.jsx)(u.h, {
                        testid: "asset-balance",
                        value: a,
                        amountType: m.Cu.CRYPTO,
                        textType: d.jK.BODY_12,
                        theme: d.Il.SECONDARY
                      }), (0, n.jsx)(o.E, {
                        type: d.jK.BODY_12,
                        theme: d.Il.SECONDARY,
                        children: e.symbol
                      })]
                    })]
                  }) : (0, n.jsxs)(o.E, {
                    type: d.jK.BODY_14,
                    theme: d.Il.SECONDARY,
                    children: ["0 ", e.symbol]
                  })
                }), i ? (0, n.jsx)(t.w, {
                  width: 24,
                  height: 24,
                  colorClass: "text-brand-primary"
                }) : (0, n.jsx)(l.r, {
                  width: 24,
                  height: 24,
                  colorClass: "text-icon-disabled"
                })]
              })]
            })
          }
        })
      }
    },
    34205: (e, a, i) => {
      i.d(a, {
        y: () => o
      });
      var n, t = i(96540),
        l = ((n = l || {}).UNITED_STATES_OF_AMERICA = "united-states-of-america", n.EUROPEAN_UNION = "european-union", n.UNITED_KINGDOM = "united-kingdom", n.JAPAN = "japan", n.CHINA = "china", n.AUSTRALIA = "australia", n.CANADA = "canada", n.SWITZERLAND = "switzerland", n.INDIA = "india", n.SOUTH_KOREA = "south-korea", n.SINGAPORE = "singapore", n.HONG_KONG = "hong-kong", n.TAIWAN = "taiwan", n.THAILAND = "thailand", n.MALAYSIA = "malaysia", n.INDONESIA = "indonesia", n.PHILIPPINES = "philippines", n.VIETNAM = "vietnam", n.PAKISTAN = "pakistan", n.BANGLADESH = "bangladesh", n.SRI_LANKA = "sri-lanka", n.MYANMAR = "myanmar", n.CAMBODIA = "cambodia", n.LAOS = "laos", n.NEPAL = "nepal", n.BHUTAN = "bhutan", n.MALDIVES = "maldives", n.AFGHANISTAN = "afghanistan", n.SWEDEN = "sweden", n.NORWAY = "norway", n.DENMARK = "denmark", n.REPUBLIC_OF_POLAND = "republic-of-poland", n.CZECH_REPUBLIC = "czech-republic", n.HUNGARY = "hungary", n.ROMANIA = "romania", n.BULGARIA = "bulgaria", n.CROATIA = "croatia", n.ICELAND = "iceland", n.TURKEY = "turkey", n.RUSSIA = "russia", n.UKRAINE = "ukraine", n.BELARUS = "belarus", n.GEORGIA = "georgia", n.ARMENIA = "armenia", n.AZERBAIJAN = "azerbaijan", n.KAZAKHSTAN = "kazakhstan", n.KYRGYZSTAN = "kyrgyzstan", n.TAJIKISTAN = "tajikistan", n.TURKMENISTAN = "turkmenistan", n.UZBEKISTN = "uzbekistn", n.REPUBLIC_OF_MACEDONIA = "republic-of-macedonia", n.SERBIA = "serbia", n.ALBANIA = "albania", n.BOSNIA_AND_HERZEGOVINA = "bosnia-and-herzegovina", n.MOLDOVA = "moldova", n.UNITED_ARAB_EMIRATES = "united-arab-emirates", n.SAUDI_ARABIA = "saudi-arabia", n.QATAR = "qatar", n.KUWAIT = "kuwait", n.BAHRAIN = "bahrain", n.OMAN = "oman", n.JORDAN = "jordan", n.ISRAEL = "israel", n.LEBANON = "lebanon", n.SYRIA = "syria", n.IRAQ = "iraq", n.IRAN = "iran", n.YEMEN = "yemen", n.SOUTH_AFRICA = "south-africa", n.EGYPT = "egypt", n.NIGERIA = "nigeria", n.KENYA = "kenya", n.GHANA = "ghana", n.TANZANIA = "tanzania", n.UGANDA = "uganda", n.ETHIOPIA = "ethiopia", n.MOROCCO = "morocco", n.ALGERIA = "algeria", n.TUNISIA = "tunisia", n.LIBYA = "libya", n.SUDAN = "sudan", n.ANGOLA = "angola", n.MOZAMBIQUE = "mozambique", n.ZAMBIA = "zambia", n.ZIMBABWE = "zimbabwe", n.BOTSWANA = "botswana", n.NAMIBIA = "namibia", n.SWAZILAND = "swaziland", n.LESOTHO = "lesotho", n.MALAWI = "malawi", n.MADAGASCAR = "madagascar", n.MAURITIUS = "mauritius", n.SEYCHELLES = "seychelles", n.RWANDA = "rwanda", n.BURUNDI = "burundi", n.DJIBOUTI = "djibouti", n.ERITREA = "eritrea", n.SOMALIA = "somalia", n.COMOROS = "comoros", n.GAMBIA = "gambia", n.GUINEA = "guinea", n.SIERRA_LEONE = "sierra-leone", n.LIBERIA = "liberia", n.CAPE_VERDE = "cape-verde", n.SAO_TOME_AND_PRINCIPE = "sao-tome-and-principe", n.BENIN = "benin", n.CAMEROON = "cameroon", n.DEMOCRATIC_REPUBLIC_OF_CONGO = "democratic-republic-of-congo", n.BRAZIL = "brazil", n.MEXICO = "mexico", n.ARGENTINA = "argentina", n.COLOMBIA = "colombia", n.CHILE = "chile", n.PERU = "peru", n.VENEZUELA = "venezuela", n.COSTA_RICA = "costa-rica", n.GUATEMALA = "guatemala", n.HONDURAS = "honduras", n.NICARAGUA = "nicaragua", n.PANAMA = "panama", n.BOLIVIA = "bolivia", n.PARAGUAY = "paraguay", n.URUGUAY = "uruguay", n.DOMINICAN_REPUBLIC = "dominican-republic", n.CUBA = "cuba", n.HAITI = "haiti", n.JAMAICA = "jamaica", n.TRINIDAD_AND_TOBAGO = "trinidad-and-tobago", n.BAHAMAS = "bahamas", n.BARBADOS = "barbados", n.BELIZE = "belize", n.SALVADOR = "salvador", n.SURINAME = "suriname", n.GUYANA = "guyana", n.ANTIGUA_AND_BARBUDA = "antigua-and-barbuda", n.ARUBA = "aruba", n.CURACAO = "curacao", n.CAYMAN_ISLANDS = "cayman-islands", n.BERMUDA = "bermuda", n.FALKLAND_ISLANDS = "falkland-islands", n.NEW_ZEALAND = "new-zealand", n.FIJI = "fiji", n.PAPUA_NEW_GUINEA = "papua-new-guinea", n.SOLOMON_ISLANDS = "solomon-islands", n.TONGA = "tonga", n.SAMOA = "samoa", n.VANUATU = "vanuatu", n.FRENCH_POLYNESIA = "french-polynesia", n.BRUNEI = "brunei", n.NORTH_KOREA = "north-korea", n.MONGOLIA = "mongolia", n.MACAO = "macao", n.GERMANY = "germany", n.ITALY = "italy", n.BELGIUM = "belgium", n.GREECE = "greece", n.ESTONIA = "estonia", n.LATVIA = "latvia", n.LITHUANIA = "lithuania", n.SLOVAKIA = "slovakia", n.MAURITANIA = "mauritania", n.UNITED_NATIONS = "united-nations", n.GUERNSEY = "guernsey", n.ISLE_OF_MAN = "isle-of-man", n.JERSEY = "jersey", n.GIBRALTAR = "gibraltar", n);
      const r = {
          USD: "united-states-of-america",
          EUR: "european-union",
          GBP: "united-kingdom",
          JPY: "japan",
          CNY: "china",
          AUD: "australia",
          CAD: "canada",
          CHF: "switzerland",
          INR: "india",
          KRW: "south-korea",
          SGD: "singapore",
          HKD: "hong-kong",
          TWD: "taiwan",
          THB: "thailand",
          MYR: "malaysia",
          IDR: "indonesia",
          PHP: "philippines",
          VND: "vietnam",
          PKR: "pakistan",
          BDT: "bangladesh",
          LKR: "sri-lanka",
          MMK: "myanmar",
          KHR: "cambodia",
          LAK: "laos",
          NPR: "nepal",
          BTN: "bhutan",
          MVR: "maldives",
          AFN: "afghanistan",
          AFA: "afghanistan",
          SEK: "sweden",
          NOK: "norway",
          DKK: "denmark",
          PLN: "republic-of-poland",
          CZK: "czech-republic",
          HUF: "hungary",
          RON: "romania",
          BGN: "bulgaria",
          HRK: "croatia",
          ISK: "iceland",
          TRY: "turkey",
          RUB: "russia",
          UAH: "ukraine",
          BYN: "belarus",
          BYR: "belarus",
          GEL: "georgia",
          AMD: "armenia",
          AZN: "azerbaijan",
          KZT: "kazakhstan",
          KGS: "kyrgyzstan",
          TJS: "tajikistan",
          TMT: "turkmenistan",
          UZS: "uzbekistn",
          MKD: "republic-of-macedonia",
          RSD: "serbia",
          ALL: "albania",
          BAM: "bosnia-and-herzegovina",
          MDL: "moldova",
          AED: "united-arab-emirates",
          SAR: "saudi-arabia",
          QAR: "qatar",
          KWD: "kuwait",
          BHD: "bahrain",
          OMR: "oman",
          JOD: "jordan",
          ILS: "israel",
          LBP: "lebanon",
          SYP: "syria",
          IQD: "iraq",
          IRR: "iran",
          YER: "yemen",
          ZAR: "south-africa",
          EGP: "egypt",
          NGN: "nigeria",
          KES: "kenya",
          GHS: "ghana",
          TZS: "tanzania",
          UGX: "uganda",
          ETB: "ethiopia",
          MAD: "morocco",
          DZD: "algeria",
          TND: "tunisia",
          LYD: "libya",
          SDG: "sudan",
          AOA: "angola",
          MZN: "mozambique",
          MZM: "mozambique",
          ZMW: "zambia",
          ZMK: "zambia",
          ZWL: "zimbabwe",
          BWP: "botswana",
          NAD: "namibia",
          SZL: "swaziland",
          LSL: "lesotho",
          MWK: "malawi",
          MGA: "madagascar",
          MUR: "mauritius",
          SCR: "seychelles",
          RWF: "rwanda",
          BIF: "burundi",
          DJF: "djibouti",
          ERN: "eritrea",
          SOS: "somalia",
          KMF: "comoros",
          GMD: "gambia",
          GNF: "guinea",
          SLL: "sierra-leone",
          LRD: "liberia",
          CVE: "cape-verde",
          STN: "sao-tome-and-principe",
          STD: "sao-tome-and-principe",
          XOF: "benin",
          XAF: "cameroon",
          CDF: "democratic-republic-of-congo",
          BRL: "brazil",
          MXN: "mexico",
          ARS: "argentina",
          COP: "colombia",
          CLP: "chile",
          CLF: "chile",
          PEN: "peru",
          VES: "venezuela",
          VEF: "venezuela",
          CRC: "costa-rica",
          GTQ: "guatemala",
          HNL: "honduras",
          NIO: "nicaragua",
          PAB: "panama",
          BOB: "bolivia",
          PYG: "paraguay",
          UYU: "uruguay",
          DOP: "dominican-republic",
          CUP: "cuba",
          CUC: "cuba",
          HTG: "haiti",
          JMD: "jamaica",
          TTD: "trinidad-and-tobago",
          BSD: "bahamas",
          BBD: "barbados",
          BZD: "belize",
          SVC: "salvador",
          SRD: "suriname",
          GYD: "guyana",
          XCD: "antigua-and-barbuda",
          AWG: "aruba",
          ANG: "curacao",
          KYD: "cayman-islands",
          BMD: "bermuda",
          FKP: "falkland-islands",
          NZD: "new-zealand",
          FJD: "fiji",
          PGK: "papua-new-guinea",
          SBD: "solomon-islands",
          TOP: "tonga",
          WST: "samoa",
          VUV: "vanuatu",
          XPF: "french-polynesia",
          BND: "brunei",
          KPW: "north-korea",
          MNT: "mongolia",
          MOP: "macao",
          DEM: "germany",
          ITL: "italy",
          BEF: "belgium",
          GRD: "greece",
          EEK: "estonia",
          LVL: "latvia",
          LTL: "lithuania",
          SKK: "slovakia",
          MRO: "mauritania",
          MRU: "mauritania",
          XAG: "european-union",
          XAU: "european-union",
          XDR: "united-nations",
          GGP: "guernsey",
          IMP: "isle-of-man",
          JEP: "jersey",
          GIP: "gibraltar",
          SHP: "united-nations"
        },
        s = {
          "united-states-of-america": () => i.e(4024).then(i.bind(i, 74024)),
          "european-union": () => i.e(564).then(i.bind(i, 90564)),
          "united-kingdom": () => i.e(6156).then(i.bind(i, 16156)),
          japan: () => i.e(1803).then(i.bind(i, 91803)),
          china: () => i.e(5410).then(i.bind(i, 25410)),
          australia: () => i.e(4165).then(i.bind(i, 94165)),
          canada: () => i.e(5575).then(i.bind(i, 25575)),
          switzerland: () => i.e(2996).then(i.bind(i, 22996)),
          india: () => i.e(9954).then(i.bind(i, 9954)),
          "south-korea": () => i.e(3157).then(i.bind(i, 83157)),
          singapore: () => i.e(4321).then(i.bind(i, 4321)),
          "hong-kong": () => i.e(5323).then(i.bind(i, 85323)),
          taiwan: () => i.e(3513).then(i.bind(i, 93513)),
          thailand: () => i.e(324).then(i.bind(i, 80324)),
          malaysia: () => i.e(7016).then(i.bind(i, 27016)),
          indonesia: () => i.e(6597).then(i.bind(i, 26597)),
          philippines: () => i.e(5926).then(i.bind(i, 5926)),
          vietnam: () => i.e(7595).then(i.bind(i, 77595)),
          pakistan: () => i.e(8331).then(i.bind(i, 70712)),
          bangladesh: () => i.e(9370).then(i.bind(i, 59370)),
          "sri-lanka": () => i.e(3517).then(i.bind(i, 3517)),
          myanmar: () => i.e(9234).then(i.bind(i, 79234)),
          cambodia: () => i.e(7379).then(i.bind(i, 97379)),
          laos: () => i.e(278).then(i.bind(i, 20278)),
          nepal: () => i.e(9201).then(i.bind(i, 19201)),
          bhutan: () => i.e(5833).then(i.bind(i, 65833)),
          maldives: () => i.e(1546).then(i.bind(i, 91546)),
          afghanistan: () => i.e(4289).then(i.bind(i, 44289)),
          sweden: () => i.e(5225).then(i.bind(i, 15225)),
          norway: () => i.e(3051).then(i.bind(i, 53051)),
          denmark: () => i.e(4333).then(i.bind(i, 24333)),
          "republic-of-poland": () => i.e(4166).then(i.bind(i, 34166)),
          "czech-republic": () => i.e(3207).then(i.bind(i, 53207)),
          hungary: () => i.e(5841).then(i.bind(i, 65841)),
          romania: () => i.e(78).then(i.bind(i, 10078)),
          bulgaria: () => i.e(5942).then(i.bind(i, 75942)),
          croatia: () => i.e(264).then(i.bind(i, 30264)),
          iceland: () => i.e(3294).then(i.bind(i, 20913)),
          turkey: () => i.e(4995).then(i.bind(i, 74995)),
          russia: () => i.e(8742).then(i.bind(i, 48742)),
          ukraine: () => i.e(4160).then(i.bind(i, 74160)),
          belarus: () => i.e(1891).then(i.bind(i, 61891)),
          georgia: () => i.e(1303).then(i.bind(i, 81303)),
          armenia: () => i.e(3029).then(i.bind(i, 95410)),
          azerbaijan: () => i.e(1158).then(i.bind(i, 21158)),
          kazakhstan: () => i.e(9723).then(i.bind(i, 29723)),
          kyrgyzstan: () => i.e(1729).then(i.bind(i, 54110)),
          tajikistan: () => i.e(4075).then(i.bind(i, 24075)),
          turkmenistan: () => i.e(4940).then(i.bind(i, 24940)),
          uzbekistan: () => i.e(9376).then(i.bind(i, 49376)),
          "north-macedonia": () => i.e(9265).then(i.bind(i, 19265)),
          serbia: () => i.e(3151).then(i.bind(i, 13151)),
          albania: () => i.e(2835).then(i.bind(i, 2835)),
          "bosnia-and-herzegovina": () => i.e(5070).then(i.bind(i, 95070)),
          moldova: () => i.e(2711).then(i.bind(i, 92711)),
          "united-arab-emirates": () => i.e(7998).then(i.bind(i, 77998)),
          "saudi-arabia": () => i.e(5734).then(i.bind(i, 5734)),
          qatar: () => i.e(1216).then(i.bind(i, 91216)),
          kuwait: () => i.e(9702).then(i.bind(i, 79702)),
          bahrain: () => i.e(5804).then(i.bind(i, 35804)),
          oman: () => i.e(1036).then(i.bind(i, 41036)),
          jordan: () => i.e(8195).then(i.bind(i, 98195)),
          israel: () => i.e(3541).then(i.bind(i, 73541)),
          lebanon: () => i.e(7736).then(i.bind(i, 17736)),
          syria: () => i.e(907).then(i.bind(i, 70907)),
          iraq: () => i.e(4202).then(i.bind(i, 84202)),
          iran: () => i.e(5789).then(i.bind(i, 95789)),
          yemen: () => i.e(2849).then(i.bind(i, 22849)),
          "south-africa": () => i.e(9535).then(i.bind(i, 59535)),
          egypt: () => i.e(4294).then(i.bind(i, 51913)),
          nigeria: () => i.e(4138).then(i.bind(i, 64138)),
          kenya: () => i.e(9355).then(i.bind(i, 19355)),
          ghana: () => i.e(9510).then(i.bind(i, 29510)),
          tanzania: () => i.e(7507).then(i.bind(i, 47507)),
          uganda: () => i.e(7629).then(i.bind(i, 17629)),
          ethiopia: () => i.e(1428).then(i.bind(i, 61428)),
          morocco: () => i.e(9813).then(i.bind(i, 89813)),
          algeria: () => i.e(6214).then(i.bind(i, 66214)),
          tunisia: () => i.e(3824).then(i.bind(i, 23824)),
          libya: () => i.e(1004).then(i.bind(i, 81004)),
          sudan: () => i.e(4346).then(i.bind(i, 94346)),
          angola: () => i.e(2043).then(i.bind(i, 4424)),
          mozambique: () => i.e(9095).then(i.bind(i, 89095)),
          zambia: () => i.e(9285).then(i.bind(i, 19285)),
          zimbabwe: () => i.e(8098).then(i.bind(i, 28098)),
          botswana: () => i.e(5064).then(i.bind(i, 35064)),
          namibia: () => i.e(1316).then(i.bind(i, 11316)),
          eswatini: () => i.e(3884).then(i.bind(i, 23884)),
          lesotho: () => i.e(5965).then(i.bind(i, 5965)),
          malawi: () => i.e(6442).then(i.bind(i, 66442)),
          madagascar: () => i.e(333).then(i.bind(i, 80333)),
          mauritius: () => i.e(5186).then(i.bind(i, 5186)),
          seychelles: () => i.e(8684).then(i.bind(i, 48684)),
          rwanda: () => i.e(6960).then(i.bind(i, 16960)),
          burundi: () => i.e(1360).then(i.bind(i, 31360)),
          djibouti: () => i.e(2003).then(i.bind(i, 42003)),
          eritrea: () => i.e(4989).then(i.bind(i, 74989)),
          somalia: () => i.e(137).then(i.bind(i, 70137)),
          comoros: () => i.e(2009).then(i.bind(i, 22009)),
          gambia: () => i.e(5762).then(i.bind(i, 35762)),
          guinea: () => i.e(9266).then(i.bind(i, 39266)),
          "sierra-leone": () => i.e(3959).then(i.bind(i, 63959)),
          liberia: () => i.e(1937).then(i.bind(i, 1937)),
          "cape-verde": () => i.e(5273).then(i.bind(i, 5273)),
          "sao-tome-and-principe": () => i.e(6843).then(i.bind(i, 69224)),
          benin: () => i.e(6461).then(i.bind(i, 96461)),
          cameroon: () => i.e(8137).then(i.bind(i, 78137)),
          "democratic-republic-of-congo": () => i.e(496).then(i.bind(i, 40496)),
          brazil: () => i.e(3431).then(i.bind(i, 43431)),
          mexico: () => i.e(8640).then(i.bind(i, 48640)),
          argentina: () => i.e(6172).then(i.bind(i, 96172)),
          colombia: () => i.e(707).then(i.bind(i, 707)),
          chile: () => i.e(4996).then(i.bind(i, 64996)),
          peru: () => i.e(7587).then(i.bind(i, 7587)),
          venezuela: () => i.e(6034).then(i.bind(i, 76034)),
          "costa-rica": () => i.e(7195).then(i.bind(i, 77195)),
          guatemala: () => i.e(9476).then(i.bind(i, 49476)),
          honduras: () => i.e(5469).then(i.bind(i, 25469)),
          nicaragua: () => i.e(7314).then(i.bind(i, 27314)),
          panama: () => i.e(217).then(i.bind(i, 10217)),
          bolivia: () => i.e(1895).then(i.bind(i, 1895)),
          paraguay: () => i.e(7245).then(i.bind(i, 47245)),
          uruguay: () => i.e(5863).then(i.bind(i, 55863)),
          "dominican-republic": () => i.e(3860).then(i.bind(i, 13860)),
          cuba: () => i.e(8138).then(i.bind(i, 48138)),
          haiti: () => i.e(464).then(i.bind(i, 30464)),
          jamaica: () => i.e(5541).then(i.bind(i, 85541)),
          "trinidad-and-tobago": () => i.e(2441).then(i.bind(i, 92441)),
          bahamas: () => i.e(3592).then(i.bind(i, 43592)),
          barbados: () => i.e(6487).then(i.bind(i, 66487)),
          belize: () => i.e(3744).then(i.bind(i, 83744)),
          "el-salvador": () => i.e(4255).then(i.bind(i, 84255)),
          suriname: () => i.e(8287).then(i.bind(i, 58287)),
          guyana: () => i.e(796).then(i.bind(i, 40796)),
          "antigua-and-barbuda": () => i.e(8872).then(i.bind(i, 18872)),
          aruba: () => i.e(5358).then(i.bind(i, 35358)),
          curacao: () => i.e(5077).then(i.bind(i, 45077)),
          "cayman-islands": () => i.e(9075).then(i.bind(i, 99075)),
          bermuda: () => i.e(7243).then(i.bind(i, 67243)),
          "falkland-islands": () => i.e(239).then(i.bind(i, 40239)),
          "new-zealand": () => i.e(6349).then(i.bind(i, 66349)),
          fiji: () => i.e(4365).then(i.bind(i, 44365)),
          "papua-new-guinea": () => i.e(2807).then(i.bind(i, 62807)),
          "solomon-islands": () => i.e(543).then(i.bind(i, 60543)),
          tonga: () => i.e(1880).then(i.bind(i, 41880)),
          samoa: () => i.e(1522).then(i.bind(i, 11522)),
          vanuatu: () => i.e(5775).then(i.bind(i, 25775)),
          "french-polynesia": () => i.e(9576).then(i.bind(i, 9576)),
          brunei: () => i.e(758).then(i.bind(i, 90758)),
          "north-korea": () => i.e(6803).then(i.bind(i, 66803)),
          mongolia: () => i.e(3799).then(i.bind(i, 83799)),
          macao: () => i.e(1766).then(i.bind(i, 51766)),
          germany: () => i.e(4608).then(i.bind(i, 14608)),
          italy: () => i.e(2982).then(i.bind(i, 82982)),
          belgium: () => i.e(6388).then(i.bind(i, 56388)),
          greece: () => i.e(6864).then(i.bind(i, 76864)),
          estonia: () => i.e(3254).then(i.bind(i, 60873)),
          latvia: () => i.e(6556).then(i.bind(i, 76556)),
          lithuania: () => i.e(2594).then(i.bind(i, 12594)),
          slovakia: () => i.e(153).then(i.bind(i, 10153)),
          mauritania: () => i.e(4626).then(i.bind(i, 14626)),
          "united-nations": () => i.e(3255).then(i.bind(i, 53255)),
          guernsey: () => i.e(295).then(i.bind(i, 10295)),
          "isle-of-man": () => i.e(6973).then(i.bind(i, 76973)),
          jersey: () => i.e(7457).then(i.bind(i, 77457)),
          gibraltar: () => i.e(4319).then(i.bind(i, 84319))
        },
        c = e => {
          return a = function*() {
            const a = s[e];
            if (!a) return null;
            try {
              return (yield a()).default
            } catch {
              return null
            }
          }, new Promise((e, i) => {
            var n = e => {
                try {
                  l(a.next(e))
                } catch (e) {
                  i(e)
                }
              },
              t = e => {
                try {
                  l(a.throw(e))
                } catch (e) {
                  i(e)
                }
              },
              l = a => a.done ? e(a.value) : Promise.resolve(a.value).then(n, t);
            l((a = a.apply(null, null)).next())
          });
          var a
        },
        o = e => {
          const [a, i] = (0, t.useState)(null), n = r[e];
          return (0, t.useEffect)(() => {
            let e = !0;
            return ((e, a, i) => {
              new Promise((e, a) => {
                var n = e => {
                    try {
                      l(i.next(e))
                    } catch (e) {
                      a(e)
                    }
                  },
                  t = e => {
                    try {
                      l(i.throw(e))
                    } catch (e) {
                      a(e)
                    }
                  },
                  l = a => a.done ? e(a.value) : Promise.resolve(a.value).then(n, t);
                l((i = i.apply(null, null)).next())
              })
            })(0, 0, function*() {
              let a = n ? yield c(n): null;
              a || (a = yield c("united-nations")), e && i(a)
            }), () => {
              e = !1
            }
          }, [n]), a
        }
    },
    41393: (e, a, i) => {
      i.d(a, {
        e9: () => r,
        ys: () => l
      }), i(79372);
      var n = i(75485),
        t = i(84568);

      function l(e, a) {
        const {
          address: i
        } = (0, n.$5)(e);
        return i ? {
          assetImageUrl: `${t.WL}/blockchains/${a}/assets/${i}/logo.png`,
          chainImageUrl: `${t.WL}/blockchains/${a}/info/logo.png`
        } : {
          assetImageUrl: `${t.WL}/blockchains/${a}/info/logo.png`
        }
      }

      function r(e, a) {
        const {
          coinId: i,
          address: t
        } = (0, n.$5)(e.assetId);
        if (null === i) return null;
        const r = a[i];
        if (!r) return null;
        const s = l(e.assetId, r.id),
          c = "name" in e ? e.name : e.symbol;
        return {
          blockchainId: r.id,
          name: c,
          address: t ?? void 0,
          symbol: e.symbol,
          decimals: r.decimals,
          iconUrl: s.assetImageUrl,
          balance: "0",
          assetId: e.assetId,
          isShownInHomeScreen: !1,
          isBuyCryptoEnabled: !0
        }
      }
    },
    42151: (e, a, i) => {
      i.d(a, {
        $D: () => r,
        QA: () => o,
        e1: () => t,
        ht: () => l,
        q: () => c,
        v1: () => s
      });
      var n = i(4800);
      const t = 300,
        l = n.a4 + n.Et + n.e4 + n.N + 32 + 16 + 40 + 24 + 44 + 16,
        r = n.a4 + n.Et + n.e4 + n.N + 32 + 16 + 24 + 16,
        s = n.a4 + n.Et + n.e4 + n.N + 32 + 16,
        c = n.a4 + n.Et + n.e4 + n.N + 24 + 64 + 16 + 24 + 16,
        o = n.a4 + n.Et + n.e4 + n.N + 24 + 16
    },
    49051: (e, a, i) => {
      i.d(a, {
        y: () => b
      });
      var n = i(74848),
        t = i(34205),
        l = i(21190),
        r = i(40980),
        s = i(42201),
        c = i(48346),
        o = i(52114),
        d = i(1279),
        u = i(47996),
        m = i(86933),
        h = i(6442);
      const b = ({
        asset: e,
        amount: a,
        onAmountChange: i,
        onAssetClick: b,
        isLoading: y,
        isEditable: p = !0,
        className: g = ""
      }) => {
        const {
          locale: f
        } = (0, h.A)(), v = (0, t.y)(e?.symbol), w = (e => null !== e && void 0 !== e.assetId)(e), k = (0, u.o)(w ? e.blockchainId : ""), x = void 0 === a || "" === a || w ? a : "0" === a ? "" : parseInt(a).toLocaleString(f), N = "" === a || "0" === a || void 0 === a ? "0" : a;
        return null === e ? null : (0, n.jsxs)("div", {
          className: "flex items-center gap-6",
          children: [(0, n.jsx)("div", {
            className: "flex-1",
            children: (0, n.jsx)(c.S, {
              isLoading: y,
              widthClass: "w-32",
              heightClass: "h-12",
              children: p ? (0, n.jsx)(r.R, {
                placeholder: "0",
                value: x ?? "",
                amountType: w ? s.yf.CRYPTO : s.yf.FIAT,
                onChange: e => i?.(e),
                autoFocus: !0,
                testid: "input-amount",
                align: s.Bi.RIGHT,
                className: (0, m.G)("placeholder:text-text-primary text-header-48 font-bold leading-header-48", g),
                baseFontSize: 48,
                minScaleFactor: .5
              }) : (0, n.jsx)(o.E, {
                type: d.jK.HEADER_24,
                theme: d.Il.SECONDARY,
                children: N
              })
            })
          }), w ? (0, n.jsx)(l.W, {
            iconUrl: e.iconUrl,
            symbol: e.symbol,
            contractAddress: e.address,
            network: k,
            onClick: b,
            testid: void 0 !== x ? "input-currency" : "output-currency",
            variant: "compact"
          }) : (0, n.jsx)(l.W, {
            iconUrl: v || void 0,
            symbol: e.symbol,
            onClick: b,
            testid: void 0 !== x ? "input-currency" : "output-currency",
            variant: "compact"
          })]
        })
      }
    },
    73208: (e, a, i) => {
      i.d(a, {
        l: () => t
      });
      var n, t = ((n = t || {}).ALL = "all", n.TOP_100 = "top100", n.STABLES = "stables", n)
    },
    73632: (e, a, i) => {
      i.d(a, {
        A: () => M
      });
      var n = i(74848),
        t = i(4800),
        l = i(47767),
        r = i(6442),
        s = i(96540),
        c = i(8360),
        o = i(52114),
        d = i(1279),
        u = i(44832),
        m = i(67310),
        h = i(94893),
        b = i(65504),
        y = i(68632),
        p = i(9770),
        g = i(97726),
        f = i(46729);
      const v = ({
        network: e,
        isSelected: a,
        onSelect: i
      }) => {
        var t, l, s;
        const {
          formatMessage: c
        } = (0, r.A)(), u = null != (l = null != (t = e?.displayName) ? t : e?.name) ? l : c({
          id: "buy-select-crypto.all-networks",
          defaultMessage: "All networks"
        });
        return (0, n.jsx)(h.c, {
          onClick: i,
          testid: "network-row-" + (null != (s = e?.coinId) ? s : "all"),
          children: (0, n.jsxs)("div", {
            className: "flex items-center justify-between py-3",
            children: [(0, n.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [e?.iconUrl ? (0, n.jsx)(b.q, {
                name: u,
                src: e.iconUrl,
                size: y.Y.LARGE
              }) : (0, n.jsx)("div", {
                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                children: (0, n.jsx)(p.s, {
                  width: 20,
                  height: 20,
                  colorClass: "text-primary"
                })
              }), (0, n.jsx)(o.E, {
                type: d.jK.SUBHEADER_16,
                theme: d.Il.PRIMARY,
                children: u
              })]
            }), a ? (0, n.jsx)(g.w, {
              width: 24,
              height: 24,
              colorClass: "text-primary"
            }) : (0, n.jsx)(f.r, {
              width: 24,
              height: 24,
              colorClass: "text-utility-1-opacity-2"
            })]
          })
        })
      };
      var w = i(95455),
        k = i(98939);
      const x = t.a4 + t.Et + t.e4 + t.N + 32 + 16,
        N = Object.values(k.hF),
        C = e => N.includes(e),
        T = e => {
          var a;
          return null != (a = e.displayName) ? a : e.name
        },
        S = (e, a) => {
          const i = T(e).toLowerCase(),
            n = e.symbol.toLowerCase();
          return i.includes(a) || n.includes(a)
        },
        A = (e, a) => N.indexOf(e.coinId) - N.indexOf(a.coinId),
        P = (e, a) => T(e).localeCompare(T(a)),
        M = ({
          selectedNetwork: e,
          setSelectedNetwork: a
        }) => {
          const i = (0, l.Zp)(),
            {
              formatMessage: h
            } = (0, r.A)(),
            [b, y] = (0, s.useState)(""),
            p = (0, u.g)(!0),
            g = window.innerHeight - x,
            f = b.toLowerCase(),
            k = p.filter(e => C(e.coinId)).filter(e => !b || S(e, f)).sort(A),
            N = p.filter(e => !C(e.coinId)).filter(e => !b || S(e, f)).sort(P),
            T = !b,
            M = e => {
              a(e), i(-1)
            },
            D = T ? k.length + N.length : k.length,
            z = b && 0 === k.length && 0 === N.length;
          return (0, n.jsxs)(t.LN, {
            children: [(0, n.jsx)(t.zY, {
              backAction: () => {
                i(-1)
              },
              title: h({
                id: "buy-select-network.title",
                defaultMessage: "Select network"
              })
            }), (0, n.jsxs)(t.Gv, {
              children: [(0, n.jsx)(c.D, {
                placeholder: h({
                  id: "buy-select-network.search-placeholder",
                  defaultMessage: "Search for network"
                }),
                value: b,
                onChange: e => y(e.target.value),
                autoFocus: !1,
                className: "mb-4",
                testid: "select-network-search"
              }), z ? (0, n.jsx)(w.B, {}) : (0, n.jsxs)(m.A, {
                dataLength: D,
                next: () => {},
                height: g,
                className: "tw-scrollbar",
                hasMore: !1,
                loader: null,
                children: [T && (0, n.jsx)(v, {
                  network: null,
                  isSelected: null === e,
                  onSelect: () => M(null)
                }), k.length > 0 && (0, n.jsxs)("div", {
                  className: "mt-4",
                  children: [(0, n.jsx)("div", {
                    className: "mb-2",
                    children: (0, n.jsx)(o.E, {
                      type: d.jK.BODY_14,
                      theme: d.Il.SECONDARY,
                      weight: d.nG.SEMIBOLD,
                      testid: "popular-networks-title",
                      children: h({
                        id: "buy-select-network.popular-networks",
                        defaultMessage: "Popular networks"
                      })
                    })
                  }), k.map(a => (0, n.jsx)(v, {
                    network: a,
                    isSelected: e?.coinId === a.coinId,
                    onSelect: () => M(a)
                  }, a.coinId))]
                }), N.length > 0 && (0, n.jsxs)("div", {
                  className: "mt-4",
                  children: [(0, n.jsx)("div", {
                    className: "mb-2",
                    children: (0, n.jsx)(o.E, {
                      type: d.jK.BODY_14,
                      theme: d.Il.SECONDARY,
                      weight: d.nG.SEMIBOLD,
                      testid: "az-networks-title",
                      children: h({
                        id: "buy-select-network.az-networks",
                        defaultMessage: "A-Z networks"
                      })
                    })
                  }), N.map(a => (0, n.jsx)(v, {
                    network: a,
                    isSelected: e?.coinId === a.coinId,
                    onSelect: () => M(a)
                  }, a.coinId))]
                })]
              })]
            })]
          })
        }
    },
    75985: (e, a, i) => {
      i.d(a, {
        d: () => t
      });
      var n = i(96540);

      function t(e, a) {
        const [i, t] = (0, n.useState)(e);
        return (0, n.useEffect)(() => {
          const i = setTimeout(() => t(e), a);
          return () => clearTimeout(i)
        }, [e]), i
      }
    },
    83596: (e, a, i) => {
      i.d(a, {
        b: () => f
      });
      var n = i(74848),
        t = i(4800),
        l = i(6442),
        r = i(8360),
        s = i(7668),
        c = i(79830),
        o = i(68632),
        d = i(95455),
        u = i(94893),
        m = i(52114),
        h = i(1279);
      const b = ({
        children: e,
        isSelected: a,
        onClick: i,
        testid: t
      }) => (0, n.jsx)(u.c, {
        onClick: i,
        testid: t,
        children: (0, n.jsxs)("div", {
          className: "flex flex-col space-y-2",
          children: [(0, n.jsx)(m.E, {
            type: h.jK.TITLE,
            theme: a ? h.Il.PRIMARY : h.Il.DISABLED,
            children: e
          }), (0, n.jsx)("div", {
            className: "flex self-center w-full rounded-10 h-1 " + (a ? "bg-primary" : "bg-transparent")
          })]
        })
      });
      var y = i(73208);
      const p = ({
        selectedTab: e,
        onTabChange: a
      }) => {
        const {
          formatMessage: i
        } = (0, l.A)(), t = [{
          id: y.l.ALL,
          label: i({
            id: "buy-select-crypto.tab-all",
            defaultMessage: "All"
          }),
          testId: "buy-crypto-tab-all"
        }, {
          id: y.l.TOP_100,
          label: i({
            id: "buy-select-crypto.tab-top100",
            defaultMessage: "Top 100"
          }),
          testId: "buy-crypto-tab-top100"
        }, {
          id: y.l.STABLES,
          label: i({
            id: "buy-select-crypto.tab-stables",
            defaultMessage: "Stables"
          }),
          testId: "buy-crypto-tab-stables"
        }];
        return (0, n.jsxs)("div", {
          className: "flex flex-col",
          children: [(0, n.jsx)("div", {
            className: "flex space-x-8 px-3",
            children: t.map(i => (0, n.jsx)(b, {
              isSelected: e === i.id,
              onClick: () => a(i.id),
              testid: i.testId,
              children: i.label
            }, i.id))
          }), (0, n.jsx)("div", {
            className: "border-b border-utility-1-opacity-5 -mx-4"
          })]
        })
      };
      var g = i(67310);
      const f = ({
        onBackAction: e,
        searchText: a,
        onSearchChange: i,
        showTabs: u = !1,
        selectedTab: m,
        onTabChange: h,
        selectedNetwork: b,
        networkFilterNavigateTo: y,
        selectedAssetId: f,
        isLoading: v,
        isEmpty: w,
        hasMore: k,
        onLoadMore: x,
        scrollableAreaHeight: N,
        children: C
      }) => {
        const {
          formatMessage: T
        } = (0, l.A)();
        return (0, n.jsxs)(t.LN, {
          wide: !0,
          children: [(0, n.jsx)(t.zY, {
            backAction: e,
            title: T({
              id: "currency-selection-modal.crypto-header",
              defaultMessage: "Select crypto"
            })
          }), (0, n.jsxs)(t.Gv, {
            children: [(0, n.jsx)(r.D, {
              placeholder: T({
                id: "buy-select-crypto.search-placeholder",
                defaultMessage: "Search"
              }),
              value: a,
              onChange: i,
              autoFocus: !1,
              className: "mb-4",
              testid: "select-crypto-search"
            }), u && void 0 !== m && h && (0, n.jsx)("div", {
              className: "mb-4",
              children: (0, n.jsx)(p, {
                selectedTab: m,
                onTabChange: h
              })
            }), v ? (0, n.jsx)("div", {
              className: "flex justify-center items-center py-8",
              children: (0, n.jsx)(c.y, {})
            }) : w ? (0, n.jsx)(d.B, {}) : (0, n.jsx)(g.A, {
              dataLength: 0,
              next: x,
              height: N,
              className: "tw-scrollbar",
              hasMore: k,
              loader: k ? (0, n.jsx)("div", {
                className: "flex items-center justify-center py-4",
                children: (0, n.jsx)(c.y, {
                  size: o.Y.SMALL
                })
              }) : null,
              scrollThreshold: "5px",
              children: (0, n.jsx)(s.z6, {
                value: f ?? "",
                children: C
              })
            })]
          })]
        })
      }
    },
    84568: (e, a, i) => {
      i.d(a, {
        JR: () => n,
        W2: () => t,
        WL: () => l,
        wr: () => r
      });
      const n = "https://api.trustwallet.com",
        t = "https://gateway.us.trustwallet.com",
        l = "https://assets-cdn.trustwallet.com",
        r = "https://naming.trustwallet.com"
    }
  }
]);
