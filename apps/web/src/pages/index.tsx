import dynamic from "next/dynamic";
import { ConnectButton, SolKitProvider, createTheme } from "@husky/solkit";

const Toggle = dynamic(
  () => import("../components/Toggle").then((mod) => mod.Toggle),
  {
    ssr: false,
  }
);

export default function Web() {
  return (
    <div className="container relative mx-auto py-20 px-6">
      <Toggle />
      <SolKitProvider>
        <div className="h-screen py-40 flex items-start justify-center">
          <ConnectButton showBalance={true} />
        </div>
      </SolKitProvider>
    </div>
  );
}
