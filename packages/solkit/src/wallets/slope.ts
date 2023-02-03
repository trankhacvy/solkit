import {
  SlopeWalletAdapter,
  SlopeWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const slopWallet = (
  config: SlopeWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Slope",
    getAdapter: () => {
      const adapter = new SlopeWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android: "https://play.google.com/store/apps/details?id=com.wd.wallet",
      ios: "https://apps.apple.com/us/app/slope-wallet/id1574624530",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo",
    },
    extension: {
      setupGuide: "https://slope.finance/",
    },
  };
};
