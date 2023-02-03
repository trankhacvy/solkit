import useSWR from "swr";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { PublicKey, Connection } from "@solana/web3.js";

export function toFixed(n: number, fixed: number): number {
  return ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
}

function lamportsToSol(lamports: number, digitsToDisplay?: number): number {
  const sol = lamports / LAMPORTS_PER_SOL;

  if (digitsToDisplay) {
    return toFixed(sol, digitsToDisplay);
  }

  return sol;
}

const SWR_KEY = "GET_BALANCE";

export function useWalletBalance(
  publicKey: PublicKey | null,
  connection: Connection
) {
  const { data, ...rest } = useSWR(
    publicKey ? [SWR_KEY, publicKey.toBase58()] : null,
    () => connection.getBalance(publicKey as PublicKey)
  );

  return {
    sol: data ? lamportsToSol(data, 4) : 0,
    ...rest,
  };
}
