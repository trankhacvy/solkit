import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useModalContext } from "../components/SolKitProvider/ModalContextProvider";

export type UserConnectButtonReturn = {
  // connect state
  publicKey: PublicKey | null;
  connecting: boolean;
  connected: boolean;
  disconnecting: boolean;
  // connect modal
  openConnectModal: VoidFunction;
  // connect modal
  openAccountModal: VoidFunction;
};

export const useConnectButton = () => {
  const { connected, connecting, disconnecting, publicKey } = useWallet();
  const { openConnectModal, openAccountModal } = useModalContext();

  return {
    connected,
    connecting,
    disconnecting,
    publicKey,
    // connect modal
    openConnectModal,
    // account modal
    openAccountModal,
  };
};
