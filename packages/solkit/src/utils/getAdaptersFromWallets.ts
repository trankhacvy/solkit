import { Adapter } from "@solana/wallet-adapter-base";
import { SolKitWallet } from "../types/wallet";

export const getAdaptersForWallets = (wallets: SolKitWallet[]) => {
  const adapters: Adapter[] = [];

  wallets.forEach((wallet) => {
    const { getAdapter, ...walletMetadata } = wallet;
    const adapter = getAdapter();

    if (!adapters.includes(adapter)) {
      adapters.push(adapter);
      // @ts-expect-error
      adapter._wallets = [];
    }
    // @ts-expect-error
    adapter._wallets.push({
      ...walletMetadata,
      adapter,
    });
  });

  return adapters;
};
