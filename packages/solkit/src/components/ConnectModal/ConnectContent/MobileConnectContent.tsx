import { WalletStep } from "../../../common/walletStep";
import { Box } from "../../shared/Box";
import { Flex } from "../../shared/Flex";
import { useConnectModalContext } from "../ConnectModalProvider";
import { Header } from "./Header";
import { Connect } from "./Connect";
import { GetWallets } from "./GetWallets";
import { GetWalletDetail } from "./GetWalletDetail";
import { MobileIntro } from "./MobileIntro";

export interface MobileConnectContentProps {}

export const MobileConnectContent = () => {
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
    case WalletStep.Intro:
      content = <MobileIntro />;
      title = "Connect a Wallet";
      hasBack = false;
      break;
    case WalletStep.Connecting:
      content = selectedWallet ? <Connect wallet={selectedWallet} /> : null;
      title = selectedWallet?.adapter.name as string;
      hasBack = true;
      backStep = WalletStep.Intro;
      backButtonCallback = () => {
        setSelectedWallet(null);
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
  console.log("step", walletStep);
  return (
    <Flex direction="column" css={{ fg: "1" }}>
      <Header
        onBack={() => {
          if (backStep) {
            changeWalletStep(backStep, true);
          }
          backButtonCallback?.();
        }}
        hasBack={hasBack}
        title={title}
      />
      <Box
        css={{
          width: "$full",
          height: "1px",
          minHeight: walletStep === WalletStep.Intro ? 420 : 320,
          overflowY: "auto",
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
  );
};
