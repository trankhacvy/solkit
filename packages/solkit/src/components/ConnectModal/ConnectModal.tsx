import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Dialog, DialogContent, DialogClose } from "../shared/Dialog";
import { ConnectModalContextProvider } from "./ConnectModalProvider";
import {
  ModalSizeContextProvider,
  useModalSizeContext,
} from "./ModalSizeProvider";
import { Sidebar } from "./Sidebar";
import { ConnectContent } from "./ConnectContent/ConnectContent";
import { isMobile } from "../../utils/isMobile";
import { MobileConnectContent } from "./ConnectContent/MobileConnectContent";
import { IconButton } from "../shared/IconButton";
import IconClose from "../../assets/close";
import { Flex } from "../shared/Flex";
import { Box } from "../shared/Box";

export interface ConnectModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConnectModal = ({ isOpen, onOpenChange }: ConnectModalProps) => {
  const { connected, publicKey } = useWallet();

  useEffect(() => {
    if (connected && publicKey) {
      onOpenChange(false);
    }
  }, [connected, publicKey, onOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <ConnectModalContextProvider>
        <ConnectModalContent />
      </ConnectModalContextProvider>
    </Dialog>
  );
};

const ConnectModalContent = () => {
  const { connected } = useWallet();
  const { compactModeEnabled } = useModalSizeContext();
  const mobile = isMobile();

  if (connected) return null;

  let contentStyle: Record<string, any> = {
    width: "$compatModalWidth",
    "@large": {
      width: "$wideModalWidth",
    },
  };

  if (compactModeEnabled) {
    contentStyle = {
      width: "$compatModalWidth",
      minWidth: "$compatModalWidth",
    };
  }

  if (mobile) {
    contentStyle = {
      width: "100vw",
      "@large": {
        width: "$compatModalWidth",
      },
      overflow: "hidden",
    };
  }

  return (
    <DialogContent
      css={{
        p: "0",
        ...contentStyle,
      }}
    >
      {mobile ? (
        <MobileConnectContent />
      ) : (
        <DesktopContent compactModeEnabled={compactModeEnabled} />
      )}
    </DialogContent>
  );
};

const DesktopContent = ({
  compactModeEnabled,
}: {
  compactModeEnabled: boolean;
}) => {
  return (
    <Box
      css={{
        display: "flex",
      }}
    >
      {!compactModeEnabled ? (
        <DialogClose
          asChild
          css={{
            top: "-40px",
            right: 0,
          }}
        >
          <IconButton variant="close">
            <IconClose />
          </IconButton>
        </DialogClose>
      ) : null}
      <Sidebar compactModeEnabled={compactModeEnabled} />
      <ConnectContent compactModeEnabled={compactModeEnabled} />
    </Box>
  );
};
