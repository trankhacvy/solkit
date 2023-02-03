import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { CoingeckoResponse } from "../types/common";

const SWR_KEY = "GET_COIN_PRICE";

export function useGetCoinPrice(coin = "solana", currency: "usd") {
  const { data, ...rest } = useSWR([SWR_KEY, coin, currency], () =>
    fetcher<CoingeckoResponse>(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    )
  );

  return {
    price: data?.[coin]?.[currency] ?? 0,
    ...rest,
  };
}
