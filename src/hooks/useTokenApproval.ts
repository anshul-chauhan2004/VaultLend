import { useAccount, useReadContract } from "wagmi";
import { ERC20_ABI } from "@/config/contracts";
import { CONTRACTS } from "@/config/contracts";
import { useTrackedWrite } from "./useTransaction";

const TOKEN_WRITE_GAS_LIMIT = 300_000n;

export function useTokenAllowance(tokenAddress: string, spenderAddress: string) {
  const { address } = useAccount();

  const query = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: address ? [address as `0x${string}`, spenderAddress as `0x${string}`] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 5_000,
    },
  });

  return {
    allowance: (query.data as bigint | undefined) ?? 0n,
    refetch: query.refetch,
    isLoading: query.isLoading,
  };
}

export function useTokenApproval(
  tokenAddress: string,
  spenderAddress: string = CONTRACTS.LENDING_POOL,
) {
  const tx = useTrackedWrite();

  return {
    ...tx,
    approve: (amount: bigint) =>
      tx.execute({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [spenderAddress as `0x${string}`, amount],
        gas: TOKEN_WRITE_GAS_LIMIT,
      }),
  };
}

export function useTokenBalance(tokenAddress: string) {
  const { address } = useAccount();

  const query = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address as `0x${string}`] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 5_000,
    },
  });

  return {
    balance: (query.data as bigint | undefined) ?? 0n,
    refetch: query.refetch,
    isLoading: query.isLoading,
  };
}

export function useTokenMint(tokenAddress: string) {
  const { address } = useAccount();
  const tx = useTrackedWrite();

  return {
    ...tx,
    mint: (amount: bigint) => {
      if (!address) {
        throw new Error("Wallet not connected");
      }

      return tx.execute({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: "mint",
        args: [address as `0x${string}`, amount],
        gas: TOKEN_WRITE_GAS_LIMIT,
      });
    },
  };
}
