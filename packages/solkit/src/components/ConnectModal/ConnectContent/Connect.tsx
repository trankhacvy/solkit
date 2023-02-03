import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletStep } from "../../../common/walletStep";
import { useConnectModalContext } from "../../ConnectModal/ConnectModalProvider";
import { Button } from "../../shared/Button";
import { Flex } from "../../shared/Flex";
import { Heading } from "../../shared/Heading";
import { Image } from "../../shared/Image";
import { Text } from "../../shared/Text";
import IconSpinner from "../../../assets/spinner";
import { Box } from "../../shared/Box";
import { isMobile } from "../../../utils/isMobile";
import { useModalSizeContext, ModalSizeOptions } from "../ModalSizeProvider";
import { SolKitWalletInstance } from "../../../types/wallet";

export interface ConnectProps {
  wallet: SolKitWalletInstance;
}

export const Connect = ({ wallet }: ConnectProps) => {
  const { connecting } = useWallet();
  const { modalSize } = useModalSizeContext();
  const { changeWalletStep, error, selectWallet } = useConnectModalContext();
  const installed =
    wallet.adapter.readyState === WalletReadyState.Installed ||
    wallet.adapter.readyState === WalletReadyState.Loadable;
  const mobile = isMobile();
  const compactModeEnabled = modalSize === ModalSizeOptions.COMPACT;

  let extra;
  if (installed) {
    if (connecting) {
      extra = (
        <Flex align="center" gap="3">
          <Box
            css={{
              fontSize: "18px",
            }}
            as={IconSpinner}
          />
          <Text size="body2" fontWeight="medium">
            Waiting for connection
          </Text>
        </Flex>
      );
    } else {
      extra = error ? (
        <Flex direction="column" align="center">
          <Text
            size="body2"
            variant="error"
            fontWeight="medium"
            css={{
              mb: "12px",
            }}
          >
            Connection failed
          </Text>
          <Button
            variant="action"
            size={mobile ? "large" : "small"}
            onClick={() => selectWallet(wallet)}
          >
            Try again
          </Button>
        </Flex>
      ) : null;
    }
  } else {
    extra = (
      <>
        <Text
          css={{
            textAlign: "center",
            maxWidth: "26ch",
            mb: "16px",
          }}
          size="body2"
          fontWeight="medium"
        >
          Your browser has not installed {wallet.adapter.name} wallet extension
        </Text>
        <Button
          variant="action"
          size="small"
          onClick={() => changeWalletStep(WalletStep.GetWalletDetail)}
        >
          Get {wallet.adapter.name} wallet
        </Button>
      </>
    );
  }

  return (
    <ConnectUI
      icon={wallet.adapter.icon}
      walletName={wallet.adapter.name}
      extra={extra}
      compactModeEnabled={compactModeEnabled}
    />
  );
};

type ConnectUIProps = {
  icon: string;
  walletName: string;
  extra?: React.ReactNode;
  compactModeEnabled?: boolean;
};

const ConnectUI = ({
  icon,
  walletName,
  extra,
  compactModeEnabled = false,
}: ConnectUIProps) => {
  const mobile = isMobile();

  return (
    <Flex
      direction="column"
      css={{
        size: "$full",
      }}
      align="center"
      justify="center"
    >
      <Image
        src={icon}
        alt={walletName}
        css={{
          size: mobile || compactModeEnabled ? "64px" : "32px",
          mb: "8px",
        }}
      />
      <Heading as="h2" size="h6" css={{ mb: "16px", fontWeight: "$bold" }}>
        {walletName}
      </Heading>
      {extra}
    </Flex>
  );
};
