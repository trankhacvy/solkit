import { useState, useMemo, SVGProps } from "react";
import {
  ConnectButton,
  SolKitProvider,
  createTheme,
  ModalSizeOptions,
  ModalSizes,
} from "@husky/solkit";
import { useWallet } from "@solana/wallet-adapter-react";

const HorizontalModal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 7C23 5.89543 22.1046 5 21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7ZM21 12.9957V17H3V7H21V11.0043C20.9691 11.0015 20.9379 11 20.9062 11H19.9062C19.354 11 18.9062 11.4477 18.9062 12C18.9062 12.5523 19.354 13 19.9062 13H20.9062C20.9379 13 20.9691 12.9985 21 12.9957Z"
      fill="black"
    />
  </svg>
);

const VerticalModal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 23C18.1046 23 19 22.1046 19 21L19 3C19 1.89543 18.1046 1 17 1L7 0.999999C5.89543 0.999999 5 1.89543 5 3L5 21C5 22.1046 5.89543 23 7 23L17 23ZM11.0005 21L7 21L7 3L17 3L17 21L12.9995 21C12.9998 20.9896 13 20.9792 13 20.9687L13 19.9687C13 19.4165 12.5523 18.9687 12 18.9687C11.4477 18.9687 11 19.4165 11 19.9687L11 20.9687C11 20.9792 11.0002 20.9896 11.0005 21Z"
      fill="black"
    />
  </svg>
);

const brandColors = ["#F44336", "#2196F3", "#4CAF50", "#FFC107"];

const radiusOptions = [
  { name: "L", value: "16px" },
  { name: "M", value: "8px" },
  { name: "S", value: "4px" },
  { name: "-", value: "0px" },
];

const themeOptions = [
  { name: "dark", value: "dark", color: "black" },
  { name: "light", value: "light", color: "white" },
];

const sizeOptions = [
  { name: "Wide", value: ModalSizeOptions.WIDE, icon: <HorizontalModal /> },
  {
    name: "Compat",
    value: ModalSizeOptions.COMPACT,
    icon: <VerticalModal />,
  },
];

export default function Home() {
  const { connected } = useWallet();
  const [brandColor, setBrandColor] = useState(brandColors[0]);
  const [radius, setRadius] = useState(radiusOptions[0].value);
  const [size, setSize] = useState<ModalSizes>(ModalSizeOptions.WIDE);
  const [theme, setTheme] = useState(themeOptions[0].name);
  const [showBalance, setShowBalance] = useState(false);
  const [showDomainName, setShowDomainName] = useState(false);

  const resolvedTheme = useMemo(() => {
    return createTheme({
      type: theme === "dark" ? "dark" : "light",
      theme: {
        colors: {
          brand: brandColor,
        },
        radii: {
          modal: radius,
        },
      },
    });
  }, [brandColor, radius, theme]);

  return (
    <div className="max-w-screen-lg relative mx-auto my-10 md:my-20 p-4 md:px-6 md:py-10 bg-white rounded-xl shadow-lg">
      <div className="prose prose-slate dark:prose-invert">
        <h1>Solkit</h1>
        <p className="text-lg max-w-[50ch] font-semibold">
          A React component library for connecting a Solana wallet to dApp.
          Provide developers with a fast, easy, and fully customizable way to
          add a top-notch wallet experience to their dApps.
        </p>
        <h4 className="underline">Try it out</h4>
      </div>
      <div className="max-w-screen-md relative mx-auto border border-slate-500/30 rounded-lg p-5 mt-10">
        <div className="flex items-center justify-center py-20">
          <SolKitProvider
            size={size}
            theme={resolvedTheme}
            showDomainName={showDomainName}
          >
            <ConnectButton showBalance={showBalance} />
          </SolKitProvider>
        </div>
        <div className="absolute top-5 right-5">{/* <Toggle /> */}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Brand color */}
          <div className="flex flex-col gap-2">
            <label className="text-scale-1200 text-base">Brand color</label>
            <div className="flex items-center gap-3">
              {brandColors.map((color) => (
                <button
                  onClick={() => {
                    setBrandColor(color);
                  }}
                  key={color}
                  className={[
                    `h-10 w-10 rounded-full transition hover:scale-105`,
                    brandColor === color
                      ? "ring-scale-400 border-scale-800 border-2 ring-2 dark:ring-white"
                      : "",
                  ].join(" ")}
                  style={{
                    backgroundColor: `${color}`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Border */}
          <div className="flex flex-col gap-2">
            <label className="text-scale-1200 text-base">Rounded corners</label>
            <div className="flex items-center gap-3">
              {radiusOptions.map((radii) => (
                <button
                  key={radii.name}
                  onClick={() => {
                    setRadius(radii.value);
                  }}
                  className={[
                    "bg-scale-100 dark:bg-scale-400 border-scale-500 ring-scale-400 border-scale-800 flex h-10 w-10 items-center justify-center rounded-full border hover:scale-105",
                    radius === radii.value
                      ? "ring-scale-400 border-scale-800 border-2 ring-2 dark:ring-white"
                      : "",
                  ].join(" ")}
                >
                  {radii.name}
                </button>
              ))}
            </div>
          </div>

          {/* size */}
          <div className="flex flex-col gap-2">
            <label className="text-scale-1200 text-base">Modal</label>
            <div className="flex items-center gap-3">
              {sizeOptions.map((s) => (
                <button
                  key={s.name}
                  onClick={() => {
                    setSize(s.value as any);
                  }}
                  className={[
                    "bg-scale-100 dark:bg-scale-400 border-scale-500 ring-scale-400 border-scale-800 flex h-10 w-10 items-center justify-center rounded-full border hover:scale-105",
                    size === s.value
                      ? "ring-scale-400 border-scale-800 border-2 ring-2 dark:ring-white"
                      : "",
                  ].join(" ")}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div className="flex flex-col gap-2">
            <label className="text-scale-1200 text-base">Mode</label>
            <div className="flex items-center gap-3">
              {themeOptions.map((op) => (
                <button
                  key={op.name}
                  onClick={() => {
                    setTheme(op.name);
                  }}
                  className={[
                    "bg-scale-100 dark:bg-scale-400 border-scale-500 ring-scale-400 border-scale-800 flex h-10 w-10 items-center justify-center rounded-full border hover:scale-105",
                    theme === op.name
                      ? "ring-scale-400 border-scale-800 border-2 ring-2 dark:ring-white"
                      : "",
                  ].join(" ")}
                  style={{
                    backgroundColor: op.color,
                  }}
                />
              ))}
            </div>
          </div>

          {/* balance */}
          {connected && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center mb-4">
                <input
                  id="balance"
                  type="checkbox"
                  checked={showBalance}
                  onChange={(event) => setShowBalance(event.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="balance"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Show Balance
                </label>
              </div>
            </div>
          )}

          {/* domain */}
          {connected && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center mb-4">
                <input
                  id="domain"
                  type="checkbox"
                  checked={showDomainName}
                  onChange={(event) => setShowDomainName(event.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="domain"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Show Domain Name
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
