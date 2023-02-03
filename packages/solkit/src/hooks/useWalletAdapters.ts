import { useWallet } from "@solana/wallet-adapter-react";
import { SolKitWalletInstance } from "../types/wallet";
import { flatten } from "../utils/flatten";

export const useWalletAdapters = () => {
  const { wallets } = useWallet();

  const solkitWallets = flatten<SolKitWalletInstance>(
    wallets.map(
      // @ts-expect-error
      (wallet) => (wallet.adapter._wallets as SolKitWalletInstance[]) ?? []
    )
  );

  return solkitWallets;
};
