import { WalletStep } from "../../../common/walletStep";
import { Intro } from "./Intro";
import { Box } from "../../shared/Box";
import { Flex } from "../../shared/Flex";
import { useConnectModalContext } from "../ConnectModalProvider";
import { Header } from "./Header";
import { Connect } from "./Connect";
import { GetWallets } from "./GetWallets";
import { GetWalletDetail } from "./GetWalletDetail";

export interface ConnectContentProps {
  compactModeEnabled: boolean;
}

export const ConnectContent = ({ compactModeEnabled }: ConnectContentProps) => {
  const {
    selectedWallet,
    setSelectedWallet,
    walletStep,
    previousWalletStep,
    changeWalletStep,
  } = useConnectModalContext();

  let title = "";
  let content = null;
  let hasBack = false;
  let backStep: WalletStep | null = null;
  let backButtonCallback: VoidFunction;

  switch (walletStep) {
    case WalletStep.Connecting:
      content = selectedWallet ? <Connect wallet={selectedWallet} /> : null;
      title = compactModeEnabled ? "Connect a Wallet" : "";
      hasBack = compactModeEnabled;
      backStep = compactModeEnabled ? WalletStep.Intro : null;
      backButtonCallback = () => {
        if (compactModeEnabled) {
          setSelectedWallet(null);
        }
      };
      break;
    case WalletStep.GetWallets:
      content = (
        <GetWallets
          onSelectWallet={(wallet) => {
            setSelectedWallet(wallet);
            changeWalletStep(WalletStep.GetWalletDetail);
          }}
        />
      );
      title = "Get a Wallet";
      hasBack = true;
      backStep = WalletStep.Intro;
      backButtonCallback = () => {
        setSelectedWallet(null);
      };

      break;
    case WalletStep.GetWalletDetail:
      content = selectedWallet ? (
        <GetWalletDetail wallet={selectedWallet} />
      ) : null;
      title = selectedWallet?.adapter.name as string;
      hasBack = true;
      backStep = previousWalletStep;
      backButtonCallback = () => {
        if (previousWalletStep === WalletStep.GetWallets) {
          setSelectedWallet(null);
        }
      };
      break;
    default:
      break;
  }

  if (compactModeEnabled && walletStep === WalletStep.Intro) {
    return null;
  }

  if (walletStep === WalletStep.Intro) {
    return <Intro />;
  }

  let bg = compactModeEnabled
    ? { bc: "$modalBackground" }
    : { bc: "$modalContentBackgroundGray" };

  return (
    <Flex
      direction="column"
      css={{ p: compactModeEnabled ? 0 : "16px", fg: "1" }}
    >
      <Flex
        direction="column"
        css={{
          size: "$full",
          br: "$modal",
          overflow: "hidden",
          ...bg,
        }}
      >
        {title ? (
          <Header
            onBack={() => {
              if (backStep) {
                changeWalletStep(backStep, true);
              }
              backButtonCallback?.();
            }}
            hasBack={hasBack}
            title={title}
            hasClose={compactModeEnabled}
          />
        ) : null}
        <Box
          css={{
            size: "$full",
            minHeight: 348,
          }}
        >
          <Flex
            direction="column"
            align="center"
            css={{
              size: "$full",
            }}
          >
            {content}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
