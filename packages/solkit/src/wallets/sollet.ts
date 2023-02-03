import {
  SolletWalletAdapter,
  SolletWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const solletWallet = ({
  provider = "https://www.sollet.io",
  ...config
}: SolletWalletAdapterConfig = {}): SolKitWallet => {
  return {
    id: "Sollet",
    getAdapter: () => {
      const adapter = new SolletWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.solflare.mobile",
      ios: "https://apps.apple.com/us/app/solflare/id1580902717",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic",
    },
    extension: {
      setupGuide: "",
    },
  };
};
