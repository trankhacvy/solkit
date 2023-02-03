import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { Button } from "../shared/Button";
import { useConnectButton } from "../../hooks/useConnectButton";
import { Text } from "../shared/Text";
import { Box } from "../shared/Box";
import truncate from "../../utils/truncate";
import SolanaIcon from "../../assets/solana";
import ArrowDownIcon from "../../assets/arrow-down";
import { Flex } from "../shared/Flex";
import { useWalletBalance } from "../../hooks/useWalletBalance";
import { Skeleton } from "../shared/Skeleton";
import { useGetSNS } from "../../hooks/useGetSNS";

export interface ConnectButtonProps {
  showBalance?: boolean;
  label?: string;
}

export const ConnectButton = ({
  showBalance = false,
  label = "Connect Wallet",
}: ConnectButtonProps) => {
  const { connected, publicKey, openConnectModal, openAccountModal } =
    useConnectButton();

  const ready = connected && publicKey;

  return ready ? (
    <ConnectedButton
      publicKey={publicKey}
      showBalance={showBalance}
      onClick={openAccountModal}
    />
  ) : (
    <Button variant="primary" onClick={openConnectModal}>
      {label}
    </Button>
  );
};

type ConnectedButtonProps = {
  publicKey?: PublicKey | null;
  showBalance?: boolean;
  onClick: VoidFunction;
};

const ConnectedButton = ({
  publicKey,
  showBalance = false,
  onClick,
}: ConnectedButtonProps) => {
  const { connection } = useConnection();
  const { sol, isLoading } = useWalletBalance(
    publicKey as PublicKey | null,
    connection
  );
  const { domainName, isLoading: isDomainNameLoading } = useGetSNS(
    publicKey as PublicKey | null,
    connection
  );

  return (
    <Button
      css={{
        bc: "$connectedButtonSecondaryBackground",
        p: "0",
        br: "$full",
        display: "inline-flex",
        overflow: "hidden",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "$connectedButtonBorder",
      }}
      onClick={onClick}
    >
      {showBalance && (
        <Flex
          css={{
            px: "12px",
          }}
          align="center"
          gap="2"
        >
          <Flex
            align="center"
            justify="center"
            css={{
              size: "20px",
              bc: "$black",
              br: "$full",
              fontSize: "12px",
            }}
          >
            <SolanaIcon />
          </Flex>

          {isLoading ? (
            <Skeleton
              css={{
                width: "64px",
                height: "24px",
                br: "4px",
              }}
            />
          ) : (
            <Text size="body2" fontWeight="bold">
              {sol}
            </Text>
          )}
        </Flex>
      )}

      <Box
        css={{
          px: "8px",
          py: "6px",
          bc: !showBalance
            ? "$connectedButtonSecondaryBackground"
            : "$connectedButtonPrimaryBackground",
          br: "$full",
        }}
      >
        <Flex align="center" gap="2">
          <Box
            css={{
              size: "32px",
              br: "$full",
              background: "linear-gradient(to right, #f953c6, #b91d73)",
            }}
          />
          {isDomainNameLoading ? (
            <Skeleton css={{ width: "96px", height: "24px", br: "4px" }} />
          ) : (
            <Text fontWeight="bold">
              {domainName ?? truncate(publicKey?.toBase58() ?? "", 8, true)}
            </Text>
          )}

          <Box
            css={{
              br: "$full",
              fontSize: "$h6",
            }}
            as={ArrowDownIcon}
          />
        </Flex>
      </Box>
    </Button>
  );
};
