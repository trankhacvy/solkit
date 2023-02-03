import { Box } from "../../shared/Box";
import { Button } from "../../shared/Button";
import { Link } from "../../shared/Link";
import { Text } from "../../shared/Text";
import { getWalletExtensionUrl } from "../../../utils/getWalletExtensionUrl";
import { SolKitWalletInstance } from "../../../types/wallet";

export interface GetWalletDetailProps {
  wallet: SolKitWalletInstance;
}

export const GetWalletDetail = ({ wallet }: GetWalletDetailProps) => {
  const extensionUrl = getWalletExtensionUrl(wallet, true);

  return (
    <Box css={{ p: "24px" }}>
      <Box
        css={{
          p: "16px",
          br: "$modal",
          bc: "$modalBackground",
          mb: "20px",
        }}
      >
        <Text fontWeight="bold" css={{ mb: "8px" }}>
          Step 1:
        </Text>
        <Text fontWeight="medium" size="body2" css={{ mb: "12px" }}>
          Download {wallet.adapter.name} wallet extension from browser app store
        </Text>

        <Button
          as={Link}
          href={extensionUrl ?? ""}
          rel="noreferrer"
          target="_blank"
          variant="action"
          size="small"
          noUnderline
        >
          Go to browser app store
        </Button>
      </Box>

      <Box
        css={{
          p: "16px",
          br: "$modal",
          bc: "$modalBackground",
        }}
      >
        <Text fontWeight="bold" css={{ mb: "$2" }}>
          Step 2:
        </Text>
        <Text fontWeight="medium" size="body2">
          Re-connect to {wallet.adapter.name} wallet in the wallet list on the
          left menu
        </Text>
      </Box>
    </Box>
  );
};
