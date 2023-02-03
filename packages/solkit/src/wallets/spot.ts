import {
  SpotWalletAdapter,
  SpotWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const splotWallet = (
  config: SpotWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Spot",
    getAdapter: () => {
      const adapter = new SpotWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android: "https://play.google.com/store/apps/details?id=com.spot.spot",
      ios: "https://apps.apple.com/us/app/buy-bitcoin-spot-wallet-app/id1390560448",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/spot/pfdaepphglddodhkmcfoefimbcnkipmn",
      brave:
        "https://chrome.google.com/webstore/detail/spot/pfdaepphglddodhkmcfoefimbcnkipmn",
    },
    extension: {
      setupGuide: "https://www.spot-wallet.com",
    },
  };
};
