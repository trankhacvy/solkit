import {
  PhantomWalletAdapter,
  PhantomWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const phantomWallet = (
  config: PhantomWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Phantom",
    getAdapter: () => {
      const adapter = new PhantomWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android: "https://play.google.com/store/apps/details?id=app.phantom",
      ios: "https://apps.apple.com/app/phantom-solana-wallet/1598432977",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
    },
    extension: {
      setupGuide: "https://phantom.app/download",
    },
  };
};
