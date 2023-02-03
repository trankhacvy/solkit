import {
  CoinbaseWalletAdapter,
  CoinbaseWalletAdapterConfig,
} from "@solana/wallet-adapter-wallets";
import { SolKitWallet } from "../types/wallet";

export const coinbaseWallet = (
  config: CoinbaseWalletAdapterConfig = {}
): SolKitWallet => {
  return {
    id: "Coinbase Wallet",
    getAdapter: () => {
      const adapter = new CoinbaseWalletAdapter(config);
      return adapter;
    },
    extensions: {
      chrome:
        "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
    },
    mobile: {
      android: "https://play.google.com/store/apps/details?id=org.toshi",
      ios: "https://apps.apple.com/app/apple-store/id1278383455?pt=118788940",
    },
    extension: {
      setupGuide: "https://www.coinbase.com/wallet",
    },
  };
};
