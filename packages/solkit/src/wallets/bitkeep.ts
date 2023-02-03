import {
  BitKeepWalletAdapter,
  BitKeepWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const bitkeepWallet = (
  config: BitKeepWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "BitKeep",
    getAdapter: () => {
      const adapter = new BitKeepWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.bitkeep.wallet",
      ios: "https://apps.apple.com/app/bitkeep/id1395301115",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak",
    },
    extension: {
      setupGuide: "https://bitkeep.com/en/download",
    },
  };
};
