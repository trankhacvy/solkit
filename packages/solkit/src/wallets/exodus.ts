import {
  ExodusWalletAdapter,
  ExodusWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const exodusWallet = (
  config: ExodusWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Exodus",
    getAdapter: () => {
      const adapter = new ExodusWalletAdapter(config);
      return adapter;
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/exodus-web3-wallet/aholpfdialjgjfhomihkjbmgjidlcdno",
      brave:
        "https://chrome.google.com/webstore/detail/exodus-web3-wallet/aholpfdialjgjfhomihkjbmgjidlcdno",
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=exodusmovement.exodus",
      ios: "https://apps.apple.com/app/apple-store/id1414384820",
    },
    extension: {
      setupGuide: "https://www.exodus.com/download",
    },
  };
};
