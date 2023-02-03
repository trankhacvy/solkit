// import { styled } from "../../../stitches.config";
import { styled } from "../../../themes";
import { Box } from "../../shared/Box";
import { Flex } from "../../shared/Flex";
import { Text } from "../../shared/Text";
import { Heading } from "../../shared/Heading";
import { Link } from "../../shared/Link";
import { useConnectModalContext } from "../../ConnectModal/ConnectModalProvider";
import { WalletStep } from "../../../common/walletStep";
import SolanaIcon from "../../../assets/solana";
import BoltIcon from "../../../assets/bolt";
import LockIcon from "../../../assets/lock";
import QuestionIcon from "../../../assets/question";
import { LEARN_MORE_URL } from "../../../common/urls";

const StyledSolanaIcon = styled(SolanaIcon, {
  fontSize: "$xl",
});

const StyledBoltIcon = styled(BoltIcon, {
  fontSize: "$xl",
});

const StyledLockIcon = styled(LockIcon, {
  fontSize: "$xl",
});

const StyledQuestionIcon = styled(QuestionIcon, {
  fontSize: "$xl",
});

export interface IntroProps {}

export const Intro = () => {
  const { changeWalletStep } = useConnectModalContext();

  return (
    <Box css={{ p: "16px" }}>
      <Box
        css={{
          px: "20px",
          py: "16px",
          br: "$modal",
        }}
      >
        <Flex
          direction="row"
          align="center"
          gap="3"
          css={{
            mb: "20px",
          }}
        >
          <StyledSolanaIcon />
          <Text as="h2" fontWeight="semibold" size="h6">
            SOLANA
          </Text>
        </Flex>

        <Heading as="h2" size="h4" css={{ fontWeight: "$bold", mb: "20px" }}>
          Owning a Solana wallet?
        </Heading>

        <Box css={{ mb: "20px" }}>
          <StyledBoltIcon />
          <Heading
            as="h4"
            size="h6"
            css={{ fontWeight: "$semibold", mb: "20px" }}
          >
            Instant transaction
          </Heading>
          <Text size="body2">
            Solana is made to handle thousands of transactions per second, and
            almost zero-fee (less than <b>$0.01</b> )
          </Text>
        </Box>

        <Box css={{ mb: "40px" }}>
          <StyledLockIcon />
          <Heading
            as="h4"
            size="h6"
            css={{ fontWeight: "$semibold", mb: "8px" }}
          >
            You control your crypto
          </Heading>
          <Text size="body2">
            Using a non-custodial wallet enables you to control your crypto
            without having to trust third parties.
          </Text>
        </Box>

        <Flex justify="between">
          <Link
            href={LEARN_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="brand"
          >
            <Flex align="center" gap="2">
              <StyledQuestionIcon />
              <Text size="body1">What is a wallet?</Text>
            </Flex>
          </Link>
          <Link
            onClick={() => changeWalletStep(WalletStep.GetWallets)}
            colorScheme="brand"
          >
            <Text size="body1">Get a wallet</Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
