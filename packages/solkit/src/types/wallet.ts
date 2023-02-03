import type { Adapter } from "@solana/wallet-adapter-base";

interface WalletMeta {
  id: string;
  mobile?: {
    android?: string;
    ios?: string;
  };
  extensions?: {
    chrome?: string;
    firefox?: string;
    safari?: string;
    brave?: string;
    edge?: string;
  };
  extension?: {
    setupGuide?: string;
  };
}

export interface SolKitWallet<A extends Adapter = Adapter> extends WalletMeta {
  getAdapter: () => A;
}

export interface SolKitWalletInstance<A extends Adapter = Adapter>
  extends WalletMeta {
  adapter: A;
}
