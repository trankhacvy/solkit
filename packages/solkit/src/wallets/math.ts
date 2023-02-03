import {
  MathWalletAdapter,
  MathWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const mathWallet = (
  config: MathWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "MathWallet",
    getAdapter: () => {
      const adapter = new MathWalletAdapter(config);
      return adapter;
    },
    mobile: {
      android:
        "https://play.google.com/store/apps/details?id=com.mathwallet.android",
      ios: "https://apps.apple.com/vn/app/mathwallet-web3-wallet/id1582612388",
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc",
      brave:
        "https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc",
      edge: "https://microsoftedge.microsoft.com/addons/detail/math-wallet/dfeccadlilpndjjohbjdblepmjeahlmm",
    },
    extension: {
      setupGuide: "https://mathwallet.org",
    },
  };
};
