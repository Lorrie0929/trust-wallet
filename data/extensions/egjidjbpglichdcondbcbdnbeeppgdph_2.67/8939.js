try {
  let e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e.t = e.t || {}, e.t[t] = "03313419-162e-4af7-a834-bbf00a1a8868", e.o = "sentry-dbid-03313419-162e-4af7-a834-bbf00a1a8868")
} catch {}("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2.67.0"
}, (self.webpackChunkbrowser_extension_wallet = self.webpackChunkbrowser_extension_wallet || []).push([
  [8939], {
    98939: (e, t, o) => {
      o.d(t, {
        Dv: () => l,
        K4: () => r,
        O0: () => s,
        TF: () => i,
        cc: () => a,
        dQ: () => p,
        hF: () => N,
        k$: () => A,
        my: () => c,
        rK: () => f,
        xo: () => n
      });
      const l = 30,
        n = "popup_channel",
        r = "sidepanel_channel",
        a = {
          unlockWalletCore: "INTERNAL_UnlockWalletCore",
          notificationConfirmPrefix: "INTERNAL_notificationConfirm_",
          notificationCancelPrefix: "INTERNAL_notificationCancel_",
          keyringControllerGetAccounts: "INTERNAL_keyringControllerGetAccounts",
          keyringControllerGetSeedPhrase: "INTERNAL_keyringControllerGetSeedPhrase",
          keyringControllerSetConnectedSites: "INTERNAL_keyringControllerSetConnectedSites",
          keyringControllerSetFirstTime: "INTERNAL_keyringControllerSetFirstTime",
          appControllerCreateVault: "INTERNAL_appControllerCreateVault",
          appControllerRestoreVault: "INTERNAL_appControllerRestoreVault",
          appControllerReset: "INTERNAL_appControllerReset",
          appControllerSetIsAnalyticsEnabled: "INTERNAL_appControllerSetIsAnalyticsEnabled",
          notificationControllerRemoveNotification: "INTERNAL_notificationControllerRemoveNotification",
          settingsControllerSetIsAnalyticsEnabled: "INTERNAL_settingsControllerSetIsAnalyticsEnabled",
          settingsControllerSetIsDefaultWallet: "INTERNAL_settingsControllerSetIsDefaultWallet",
          apiControllerFetch: "INTERNAL_apiControllerFetch"
        },
        i = "REDUX_OBSERVER_CALLBACK_ACTION",
        s = "1920x1080";
      var C, N = ((C = N || {})[C.Bitcoin = 0] = "Bitcoin", C[C.Ethereum = 60] = "Ethereum", C[C.Tron = 195] = "Tron", C[C.Solana = 501] = "Solana", C[C.Arbitrum = 42161] = "Arbitrum", C[C.Base = 8453] = "Base", C[C.SmartChain = 20000714] = "SmartChain", C),
        c = (e => (e[e.CRYPTO = 0] = "CRYPTO", e[e.NFT = 1] = "NFT", e[e.APPROVALS = 2] = "APPROVALS", e))(c || {}),
        f = (e => (e[e.RWA = 0] = "RWA", e[e.AI = 1] = "AI", e[e.MEMES = 2] = "MEMES", e))(f || {}),
        p = (e => (e[e.TOP = 0] = "TOP", e[e.BNB = 1] = "BNB", e[e.ETH = 2] = "ETH", e[e.SOL = 3] = "SOL", e))(p || {}),
        A = (e => (e[e.HOLDINGS = 0] = "HOLDINGS", e[e.HISTORY = 1] = "HISTORY", e[e.ABOUT = 2] = "ABOUT", e))(A || {})
    }
  }
]);
