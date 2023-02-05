import "../styles.css";
import type { AppProps } from "next/app";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import {
  braveWallet,
  coinbaseWallet,
  exodusWallet,
  getAdaptersForWallets,
  phantomWallet,
  slopWallet,
  solflareWallet,
  solletWallet,
  torusWallet,
} from "@husky/solkit";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const wallets = useMemo(
    () =>
      getAdaptersForWallets([
        phantomWallet(),
        solflareWallet(),
        slopWallet(),
        solletWallet(),
        exodusWallet(),
        torusWallet(),
        braveWallet(),
        coinbaseWallet(),
      ]),
    []
  );

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_RPC_URL!}>
        <WalletProvider wallets={wallets} autoConnect>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default MyApp;
