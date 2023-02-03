import {
  BraveWalletAdapter,
  BraveWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const braveWallet = (
  config: BraveWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Brave",
    getAdapter: () => {
      const adapter = new BraveWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.brave.browser",
      ios: "https://apps.apple.com/us/app/brave-private-web-browser/id1052879175",
    },
    extension: {
      setupGuide: "https://brave.com/wallet",
    },
  };
};
