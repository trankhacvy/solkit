import { Flex } from "../shared/Flex";
import { Text } from "../shared/Text";
import { Box } from "../shared/Box";
import { Heading } from "../shared/Heading";
import { WalletStep } from "../../common/walletStep";
import { useWalletAdapters } from "../../hooks/useWalletAdapters";
import { useConnectModalContext } from "../ConnectModal/ConnectModalProvider";
import { Link } from "../shared/Link";
import { Image } from "../shared/Image";
import { Button } from "../shared/Button";
import { LEARN_MORE_URL } from "../../common/urls";

export interface SidebarProps {
  compactModeEnabled: boolean;
}

export const Sidebar = ({ compactModeEnabled }: SidebarProps) => {
  const { selectWallet, walletStep, changeWalletStep, selectedWallet } =
    useConnectModalContext();
  const wallets = useWalletAdapters();

  if (compactModeEnabled && walletStep !== WalletStep.Intro) {
    return null;
  }

  return (
    <Box
      css={{
        minWidth: compactModeEnabled
          ? "$compatModalWidth"
          : "$modalSidebarWidth",
        py: compactModeEnabled ? "20px" : "32px",
      }}
    >
      <Box
        css={{
          px: compactModeEnabled ? "20px" : "40px",
          position: "relative",
          mb: "16px",
        }}
      >
        <Heading
          as="h2"
          size="h5"
          css={{
            fontWeight: "$bold",
            textAlign: "center",
          }}
        >
          Connect Wallet
        </Heading>
      </Box>

      <Box
        css={{
          height: "calc(5 * $menuButtonHeight + 20px)",
          overflowY: "auto",
          px: compactModeEnabled ? "20px" : "40px",
          pb: "20px",
          borderBottom: compactModeEnabled
            ? "1px solid var(--colors-divider)"
            : "none",
        }}
      >
        <Flex direction="column">
          {wallets.map((wallet) => (
            <WalletItem
              key={wallet.adapter.name}
              icon={wallet.adapter.icon}
              name={wallet.adapter.name}
              active={wallet.id === selectedWallet?.id}
              onItemClick={() => selectWallet(wallet)}
            />
          ))}
        </Flex>
      </Box>

      {compactModeEnabled ? (
        <Box css={{ p: "20px" }}>
          <Text
            css={{
              textAlign: "center",
              mb: "8px",
            }}
            fontWeight="bold"
          >
            I don’t have a Wallet
          </Text>
          <Text
            css={{
              textAlign: "center",
              maxWidth: "39ch",
            }}
            size="body2"
            variant="secondary"
          >
            Get a Solana Wallet. Solana is made to handle thousands of
            transactions per second with fee less than $0.01
          </Text>
          <Flex justify="center" gap="4" css={{ mt: "20px" }}>
            <Button
              onClick={() => changeWalletStep(WalletStep.GetWallets)}
              size="small"
              variant="action"
            >
              Get a Wallet
            </Button>
            <Button
              as="a"
              href={LEARN_MORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="action"
            >
              Learn More
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box
          css={{
            px: compactModeEnabled ? "20px" : "40px",
            mt: "12px",
          }}
        >
          <Link colorScheme="brand">
            <Text
              css={{
                textAlign: "center",
              }}
            >
              I don’t have a wallet
            </Text>
          </Link>
        </Box>
      )}
    </Box>
  );
};

interface WalletItemProps {
  icon?: string;
  name: string;
  onItemClick: VoidFunction;
  active?: boolean;
}

export const WalletItem = ({
  icon,
  name,
  active = false,
  onItemClick,
}: WalletItemProps) => {
  return (
    <Button
      css={{
        height: "$menuButtonHeight",
        justifyContent: "flex-start",
        position: "relative",
        outline: "none",
        border: "none",
        width: "100%",
        br: "$menuButton",
        backgroundColor: active ? "$brand" : "transparent",
        "&:hover": {
          backgroundColor: active ? "$brand" : "$walletMenuButtonHover",
        },
      }}
      onClick={onItemClick}
    >
      <Flex align="center" gap="3">
        <Image
          src={icon}
          alt={name}
          css={{
            size: "$menuButtonIconSize",
          }}
        />
        <Text
          fontWeight="bold"
          css={{
            color: active ? "white" : "$primaryText",
          }}
        >
          {name}
        </Text>
      </Flex>
    </Button>
  );
};
