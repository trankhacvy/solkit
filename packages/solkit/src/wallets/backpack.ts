import {
  BackpackWalletAdapter,
  BackpackWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const backpackWallet = (
  config: BackpackWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Backpack",
    getAdapter: () => {
      const adapter = new BackpackWalletAdapter(config);
      return adapter;
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof",
    },
    extension: {
      setupGuide: 'https://www.backpack.app/'
    },
  };
};
