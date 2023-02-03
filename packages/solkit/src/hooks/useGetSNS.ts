import useSWR from "swr";
import {
  performReverseLookupBatch,
  getAllDomains,
} from "@bonfida/spl-name-service";
import { PublicKey, Connection } from "@solana/web3.js";

const SWR_KEY = "FETCH_SNS";

export function useGetSNS(publicKey: PublicKey | null, connection: Connection) {
  const { data, ...rest } = useSWR(
    publicKey ? [SWR_KEY, publicKey.toBase58()] : null,
    async () => {
      try {
        const domains = await getAllDomains(connection, publicKey as PublicKey);
        const reverses = await performReverseLookupBatch(connection, domains);
        if (Array.isArray(reverses) && reverses.length > 0) {
          return `${reverses[0]}.sol`;
        }
        return null;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

  return {
    domainName: data,
    ...rest,
  };
}
