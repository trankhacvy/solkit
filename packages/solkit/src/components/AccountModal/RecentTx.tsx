import { Box } from "../shared/Box";
import { Flex } from "../shared/Flex";
import { Text } from "../shared/Text";
import { Button } from "../shared/Button";
import TxSuccessIcon from "../../assets/tx-success";
import ExternalIcon from "../../assets/external";

export interface RecentTxProps {}

export const RecentTx = (props: RecentTxProps) => {
  return (
    <Box
      css={{
        py: "24px",
      }}
    >
      <Flex justify="between" css={{ mb: "16px" }}>
        <Text size="body2" fontWeight="medium" variant="secondary">
          Recent Transactions
        </Text>
        <Button>
          <Text size="body2" fontWeight="medium" variant="secondary">
            Clear all
          </Text>
        </Button>
      </Flex>
      <TransactionRow />
      <TransactionRow />
      <TransactionRow />
      <TransactionRow />
    </Box>
  );
};

const TransactionRow = () => {
  return (
    <Flex
      align="center"
      css={{
        width: "100%",
        p: "8px",
        br: "12px",
        mb: "8px",
        "&:hover": {
          bc: "rgba(60, 66, 66, 0.1)",
        },
      }}
    >
      <Flex
        align="center"
        justify="center"
        css={{ fontSize: "$h6", size: "28px" }}
      >
        <TxSuccessIcon />
      </Flex>
      <Box
        css={{
          mx: "16px",
          flexGrow: "1",
        }}
      >
        <Text css={{ mb: "4px" }} size="body2" fontWeight="extrabold">
          Swap 1 SOL for 3,867.26 DAI
        </Text>
        <Text size="caption" fontWeight="medium" variant="secondary">
          Confirmed
        </Text>
      </Box>
      <Flex
        align="center"
        justify="center"
        css={{ fontSize: "$h6", size: "28px" }}
      >
        <ExternalIcon />
      </Flex>
    </Flex>
  );
};
