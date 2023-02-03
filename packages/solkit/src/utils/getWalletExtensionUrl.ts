import { SolKitWalletInstance } from "../types/wallet";
import { getBrowser, BrowserType } from "./browsers";

export function getWalletExtensionUrl(
  wallet: SolKitWalletInstance,
  fallbackToChrome = false
) {
  const extensions = wallet.extensions;
  if (!extensions) return null;

  const browser = getBrowser();

  let url;
  switch (String(browser)) {
    case BrowserType.Chrome:
      url = extensions.chrome;
      break;
    case BrowserType.Edge:
      url = extensions.edge;
      break;
    case BrowserType.Firefox:
      url = extensions.firefox;
      break;
    case BrowserType.Brave:
      url = extensions.brave;
      break;
    default:
      url = null;
  }

  return fallbackToChrome ? url ?? extensions.chrome : url;
}
