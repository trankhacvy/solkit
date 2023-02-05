import { Box } from "../shared/Box";
import { Dialog, DialogClose, DialogContent } from "../shared/Dialog";
import { Flex } from "../shared/Flex";
import { Heading } from "../shared/Heading";
import { Text } from "../shared/Text";
import CopyIcon from "../../assets/copy";
import CheckCircleIcon from "../../assets/check-circle";
import { Button } from "../shared/Button";
import useClipboard from "../../hooks/useCopyToClipboard";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import truncate from "../../utils/truncate";
import { toFixed, useWalletBalance } from "../../hooks/useWalletBalance";
import { useModalContext } from "../SolKitProvider/ModalContextProvider";
import { Skeleton } from "../shared/Skeleton";
import { useGetCoinPrice } from "../../hooks/useGetCoinPrice";
import { useGetSNS } from "../../hooks/useGetSNS";
import { IconButton } from "../shared/IconButton";
import IconClose from "../../assets/close";
import { useSolKitContext } from "../SolKitProvider";

export interface AccountModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AccountModal = ({ isOpen, onOpenChange }: AccountModalProps) => {
  const { publicKey, connected, disconnect } = useWallet();
  const { connection } = useConnection();
  const { showDomainName } = useSolKitContext();
  const { sol, isLoading: isBalanceLoading } = useWalletBalance(
    publicKey,
    connection
  );
  const { price, isLoading: isPriceLoading } = useGetCoinPrice("solana", "usd");
  const { domainName, isLoading: isDomainNameLoading } = useGetSNS(
    publicKey,
    connection
  );
  const { onCopy, hasCopied } = useClipboard(publicKey?.toBase58() ?? "");
  const { closeAccountModal } = useModalContext();

  if (!publicKey || !connected) return null;

  let addressAndDomainName = null;
  if (!showDomainName) {
    addressAndDomainName = (
      <Button
        css={{
          p: "0px",
          minHeight: "auto",
          bc: "transparent",
        }}
        onClick={onCopy}
      >
        <Text size={"h6"} fontWeight={"bold"}>
          {truncate(publicKey?.toBase58() ?? "", 8, true)}
        </Text>
        <Flex
          align="center"
          justify="center"
          css={{
            size: "24px",
            ml: "4px",
            fontSize: "$h6",
            color: hasCopied ? "green" : "$primaryText",
          }}
        >
          {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
        </Flex>
      </Button>
    );
  } else if (isDomainNameLoading) {
    addressAndDomainName = (
      <Skeleton
        css={{
          width: "60px",
          height: "24px",
          br: "6px",
        }}
      />
    );
  } else {
    addressAndDomainName = (
      <Box>
        {domainName && (
          <Text size="h6" fontWeight="bold">
            {domainName}
          </Text>
        )}

        <Button
          css={{
            p: "0px",
            minHeight: "auto",
            bc: "transparent",
          }}
          onClick={onCopy}
        >
          <Text
            size={!domainName ? "h6" : "body2"}
            fontWeight={domainName ? "medium" : "bold"}
          >
            {truncate(publicKey?.toBase58() ?? "", 8, true)}
          </Text>
          <Flex
            align="center"
            justify="center"
            css={{
              size: "24px",
              ml: "4px",
              fontSize: "$h6",
              color: hasCopied ? "green" : "$primaryText",
            }}
          >
            {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
          </Flex>
        </Button>
      </Box>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        css={{
          width: "$accountModalWidth",
        }}
      >
        <DialogClose
          asChild
          css={{
            top: "12px",
            right: "12px",
          }}
        >
          <IconButton>
            <IconClose />
          </IconButton>
        </DialogClose>

        <Flex css={{ mt: "40px" }} justify="between">
          {addressAndDomainName}

          <Box
            css={{
              size: "64px",
              br: "$menuButton",
              background: "linear-gradient(to right, #f953c6, #b91d73)",
            }}
          />
        </Flex>

        <Box css={{ py: "40px" }}>
          <Flex align="center">
            {isBalanceLoading ? (
              <Skeleton
                css={{
                  width: "192px",
                  height: "60px",
                  br: "8px",
                }}
              />
            ) : (
              <Heading
                as="h2"
                fontWeight="bold"
                css={{
                  fontSize: "40px",
                }}
              >
                {sol} SOL
              </Heading>
            )}
          </Flex>
          {isPriceLoading ? (
            <Skeleton css={{ width: "64px", height: "24px", br: "8px" }} />
          ) : (
            <Text fontWeight="medium">~{toFixed(price * sol, 4)} $USD</Text>
          )}
        </Box>

        <Button
          onClick={() => {
            closeAccountModal();
            disconnect();
          }}
          css={{ width: "100%" }}
          variant="action"
        >
          Disconnect
        </Button>
      </DialogContent>
    </Dialog>
  );
};
