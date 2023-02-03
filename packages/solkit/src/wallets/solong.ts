import {
  SolongWalletAdapter,
  SolongWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const solongWallet = (
  config: SolongWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Solong",
    getAdapter: () => {
      const adapter = new SolongWalletAdapter(config);
      return adapter;
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/solong/memijejgibaodndkimcclfapfladdchj",
    },
    extension: {
      setupGuide: "https://solongwallet.io",
    },
  };
};
