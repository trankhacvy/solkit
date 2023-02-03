import { useSolKitContext } from "../SolKitProvider";
import { useWindowSize } from "../../hooks/useWindowSize";
import { largeScreenMinWidth } from "../../themes";
import createContext from "../../utils/createContext";

export const ModalSizeOptions = {
  COMPACT: "compact",
  WIDE: "wide",
} as const;

export type ModalSizes =
  (typeof ModalSizeOptions)[keyof typeof ModalSizeOptions];

export interface ModalSizeContextValues {
  modalSize: ModalSizes;
  compactModeEnabled: boolean;
}

const [Provider, useModalSizeContext] = createContext<ModalSizeContextValues>();

export { useModalSizeContext };

export const ModalSizeContextProvider: React.FC<any> = ({ children }) => {
  const { size } = useSolKitContext();
  const { width } = useWindowSize();

  const isSmallScreen =
    size === ModalSizeOptions.COMPACT || (width && width < largeScreenMinWidth);
  
  return (
    <Provider
      value={{
        modalSize: isSmallScreen
          ? ModalSizeOptions.COMPACT
          : ModalSizeOptions.WIDE,
        compactModeEnabled: isSmallScreen as boolean,
      }}
    >
      {children}
    </Provider>
  );
};
