import {
  SolflareWalletAdapter,
  SolflareWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const solflareWallet = (
  config: SolflareWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Solflare",
    getAdapter: () => {
      const adapter = new SolflareWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.solflare.mobile",
      ios: "https://apps.apple.com/us/app/solflare/id1580902717",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic",
    },
    extension: {
      setupGuide: "https://solflare.com/download",
    },
  };
};
