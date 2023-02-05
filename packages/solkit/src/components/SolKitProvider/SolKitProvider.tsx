import { PropsWithChildren } from "react";
import { useApplyTheme } from "../../hooks/useApplyTheme";
import { ThemeConfig } from "../../themes/types";
import createContext from "../../utils/createContext";
import {
  ModalSizeContextProvider,
  ModalSizeOptions,
  ModalSizes,
} from "../ConnectModal/ModalSizeProvider";
import { ModalContextProvider } from "./ModalContextProvider";

export interface SolKitContextValues {
  size: ModalSizes;
  showDomainName: boolean;
}

const [Provider, useSolKitContext] = createContext<SolKitContextValues>();

interface SolKitProviderProps {
  size?: ModalSizes;
  showDomainName?: boolean;
  theme?: ThemeConfig;
}

export const SolKitProvider = ({
  size = ModalSizeOptions.WIDE,
  showDomainName = false,
  theme,
  children,
}: PropsWithChildren<SolKitProviderProps>) => {
  useApplyTheme(theme);

  return (
    <Provider
      value={{
        size,
        showDomainName,
      }}
    >
      <ModalSizeContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </ModalSizeContextProvider>
    </Provider>
  );
};

export { useSolKitContext };
