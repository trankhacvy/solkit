import { AccountModal } from "../../components/AccountModal";
import { ConnectModal } from "../../components/ConnectModal";
import useDisclosure from "../../hooks/useDisclosure";
import createContext from "../../utils/createContext";

export interface ModalContextValues {
  openConnectModal: VoidFunction;
  closeConnectModal: VoidFunction;

  openAccountModal: VoidFunction;
  closeAccountModal: VoidFunction;
}

const [Provider, useModalContext] = createContext<ModalContextValues>();

export { useModalContext };

export const ModalContextProvider: React.FC<any> = ({ children }) => {
  const {
    isOpen: isConnectModalOpen,
    onOpen: openConnectModal,
    onClose: closeConnectModal,
  } = useDisclosure({ defaultIsOpen: false });

  const {
    isOpen: isAccountModalOpen,
    onOpen: openAccountModal,
    onClose: closeAccountModal,
  } = useDisclosure();

  return (
    <Provider
      value={{
        openConnectModal,
        closeConnectModal,
        openAccountModal,
        closeAccountModal,
      }}
    >
      {children}

      {isConnectModalOpen && (
        <ConnectModal
          isOpen={isConnectModalOpen}
          onOpenChange={(open) => {
            if (open) {
              openConnectModal();
            } else {
              closeConnectModal();
            }
          }}
        />
      )}

      {isAccountModalOpen && (
        <AccountModal
          isOpen={isAccountModalOpen}
          onOpenChange={(open) => {
            if (open) {
              openAccountModal();
            } else {
              closeAccountModal();
            }
          }}
        />
      )}
    </Provider>
  );
};
