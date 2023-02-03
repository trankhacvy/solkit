import {
  TorusWalletAdapter,
  TorusWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const torusWallet = (
  config: TorusWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Torus",
    getAdapter: () => {
      const adapter = new TorusWalletAdapter(config);
      return adapter;
    },
    extension: {
      setupGuide: "https://tor.us/",
    },
  };
};
