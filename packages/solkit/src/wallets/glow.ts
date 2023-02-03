import {
  GlowWalletAdapter,
  GlowWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const glowWallet = (
  config: GlowWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Glow",
    getAdapter: () => {
      const adapter = new GlowWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.luma.wallet.prod",
      ios: "https://apps.apple.com/ru/app/glow-solana-wallet/id1599584512",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/glow-solana-wallet-beta/ojbcfhjmpigfobfclfflafhblgemeidi",
      edge: "https://microsoftedge.microsoft.com/addons/detail/glow-solana-wallet-beta/niihfokdlimbddhfmngnplgfcgpmlido",
      firefox:
        "https://addons.mozilla.org/en-US/firefox/addon/glow-solana-wallet/",
      brave:
        "https://chrome.google.com/webstore/detail/glow-solana-wallet-beta/ojbcfhjmpigfobfclfflafhblgemeidi",
    },
    extension: {
      setupGuide: "https://glow.app",
    },
  };
};
