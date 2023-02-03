import {
  Coin98WalletAdapter,
  Coin98WalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const coin98Wallet = (
  config: Coin98WalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Coin98",
    getAdapter: () => {
      const adapter = new Coin98WalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
      ios: "https://apps.apple.com/us/app/coin98-wallet/id1561969966",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",
    },
    extension: {
      setupGuide: "https://coin98.com/wallet",
    },
  };
};
