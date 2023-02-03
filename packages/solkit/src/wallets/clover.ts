import {
  CloverWalletAdapter,
  CloverWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const cloverWallet = (
  config: CloverWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Clover",
    getAdapter: () => {
      const adapter = new CloverWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android: "https://clv.org",
      ios: "https://apps.apple.com/app/clover-wallet/id1570072858",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk",
    },
    extension: {
      setupGuide: "https://clv.org/",
    },
  };
};
