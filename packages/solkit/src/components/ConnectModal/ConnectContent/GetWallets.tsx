import { Box } from "../../shared/Box";
import { Button } from "../../shared/Button";
import { Flex } from "../../shared/Flex";
import { Image } from "../../shared/Image";
import { Text } from "../../shared/Text";
import { useWalletAdapters } from "../../../hooks/useWalletAdapters";
import { SolKitWalletInstance } from "../../../types/wallet";

export interface GetWalletsProps {
  onSelectWallet: (wallet: SolKitWalletInstance) => void;
}

export const GetWallets = ({ onSelectWallet }: GetWalletsProps) => {
  const wallets = useWalletAdapters();
  // FIXME only display wallets have extensions
  const shownWallets = wallets.splice(0, 3);

  return (
    <Flex
      direction="column"
      gap="3"
      css={{
        width: "$full",
        p: "24px",
        size: "$full",
      }}
    >
      {shownWallets.map((wallet) => (
        <WalletItem
          key={wallet.adapter.name}
          name={wallet.adapter.name}
          icon={wallet.adapter.icon}
          onGet={() => {
            onSelectWallet(wallet);
          }}
        />
      ))}
    </Flex>
  );
};

type WalletItemProps = {
  name: string;
  icon: string;
  onGet: VoidFunction;
};

const WalletItem = ({ name, icon, onGet }: WalletItemProps) => {
  return (
    <Flex
      align="center"
      css={{
        width: "$full",
        br: "$menuButton",
        bc: "$modalBackground",
        p: "16px",
      }}
      gap="3"
    >
      <Image
        src={icon}
        alt={name}
        css={{
          size: "$menuButtonIconSize",
          br: "$full",
        }}
      />
      <Box css={{ fg: "1" }}>
        <Text fontWeight="bold">{name}</Text>
      </Box>
      <Button onClick={onGet} variant="action" size="small">
        Get
      </Button>
    </Flex>
  );
};
