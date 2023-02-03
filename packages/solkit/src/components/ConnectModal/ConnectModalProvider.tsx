import { useCallback, useEffect, useState } from "react";
import { WalletError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletStep } from "../../common/walletStep";
import createContext from "../../utils/createContext";
import { SolKitWalletInstance } from "../../types/wallet";

export interface ConnectModalContextValues {
  walletStep: WalletStep;
  previousWalletStep: WalletStep;
  setWalletStep: (step: WalletStep) => void;
  selectedWallet: SolKitWalletInstance | null;
  setSelectedWallet: (wallet: SolKitWalletInstance | null) => void;
  error: WalletError | null;
  changeWalletStep: (newWalletStep: WalletStep, isBack?: boolean) => void;
  selectWallet: (wallet: SolKitWalletInstance) => void;
}

const [Provider, useConnectModalContext] =
  createContext<ConnectModalContextValues>();

export { useConnectModalContext };

export const ConnectModalContextProvider: React.FC<any> = ({ children }) => {
  const { select } = useWallet();
  const [selectedWallet, setSelectedWallet] =
    useState<SolKitWalletInstance | null>(null);
  const [error, setError] = useState<WalletError | null>(null);
  const [walletStep, setWalletStep] = useState(WalletStep.Intro);
  const [previousWalletStep, setPreviousWalletStep] = useState(
    WalletStep.Intro
  );

  const changeWalletStep = useCallback(
    (newWalletStep: WalletStep, isBack: boolean = false) => {
      if (!isBack && newWalletStep === WalletStep.GetWallets) {
        setPreviousWalletStep(WalletStep.GetWallets);
      } else if (!isBack && newWalletStep === WalletStep.Connecting) {
        setPreviousWalletStep(WalletStep.Connecting);
      }

      setWalletStep(newWalletStep);
    },
    [setWalletStep]
  );

  const selectWallet = useCallback(
    (wallet: SolKitWalletInstance) => {
      setSelectedWallet(wallet);
      changeWalletStep(WalletStep.Connecting);
      select(wallet.adapter.name);
    },
    [setSelectedWallet, changeWalletStep, select]
  );

  useEffect(() => {
    if (!selectedWallet) return;

    selectedWallet.adapter.on("error", (error: WalletError) => {
      setError(error);
    });

    return () => {
      selectedWallet.adapter.off("error", () => {
        setError(null);
      });
    };
  }, [selectedWallet]);

  return (
    <Provider
      value={{
        walletStep,
        previousWalletStep,
        setWalletStep,
        selectedWallet,
        setSelectedWallet,
        error,
        changeWalletStep,
        selectWallet,
      }}
    >
      {children}
    </Provider>
  );
};
