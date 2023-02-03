import { Box } from "../../shared/Box";
import { Flex } from "../../shared/Flex";
import { Text } from "../../shared/Text";
import { useConnectModalContext } from "../../ConnectModal/ConnectModalProvider";
import { useWalletAdapters } from "../../../hooks/useWalletAdapters";
import { Button } from "../../shared/Button";
import { Image } from "../../shared/Image";
import { WalletStep } from "../../../common/walletStep";

export interface MobileIntroProps {}

export const MobileIntro = () => {
  const { changeWalletStep, selectWallet } = useConnectModalContext();
  const wallets = useWalletAdapters();

  return (
    <Box
      css={{
        width: "100%",
      }}
    >
      <Box
        css={{
          py: "20px",
          borderBottom: "1px solid $divider",
        }}
      >
        <Flex
          css={{
            overflow: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {wallets.map((wallet) => (
            <WalletItem
              key={wallet.adapter.name}
              icon={wallet.adapter.icon}
              name={wallet.adapter.name}
              onItemClick={() => selectWallet(wallet)}
            />
          ))}
        </Flex>
      </Box>

      <Flex
        direction="column"
        align="center"
        css={{
          px: "20px",
          py: "32px",
          bc: "$modalContentBackgroundGray",
        }}
      >
        <Text
          css={{
            mb: "8px",
          }}
          size="body1"
          fontWeight="semibold"
        >
          I don’t have a Wallet
        </Text>
        <Text
          css={{ textAlign: "center", mb: "32px", maxWidth: "29ch" }}
          fontWeight="medium"
          variant="secondary"
        >
          Get a Solana wallet. Solana is made to handle thousands of
          transactions per second with fee less than $0.01
        </Text>
        <Flex
          css={{
            width: "$full",
          }}
          justify="center"
          gap="4"
        >
          <Button
            onClick={() => changeWalletStep(WalletStep.GetWallets)}
            variant="action"
          >
            Get a Wallet
          </Button>
          <Button variant="action">Learn More</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

interface WalletItemProps {
  icon?: string;
  name: string;
  onItemClick: VoidFunction;
}

const WalletItem = ({ icon, name, onItemClick }: WalletItemProps) => {
  return (
    <Button
      css={{
        flexShrink: 0,
        flexGrow: 0,
        px: "20px",
      }}
      onClick={onItemClick}
    >
      <Flex
        direction="column"
        align="center"
        css={{
          width: "64px",
        }}
      >
        <Box
          css={{
            size: "64px",
            p: "8px",
            mb: "8px",
            bc: "$connectedButtonPrimaryBackground",
            br: "12px",
          }}
        >
          <Image
            src={icon}
            alt={name}
            css={{
              size: "$full",
            }}
          />
        </Box>
        <Text
          fontWeight="semibold"
          css={{
            textAlign: "center",
          }}
        >
          {name}
        </Text>
      </Flex>
    </Button>
  );
};
