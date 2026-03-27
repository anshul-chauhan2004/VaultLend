import { useReadContract, useWriteContract, useAccount } from "wagmi";
import { ERC20_ABI } from "@/config/contracts";
import { CONTRACTS } from "@/config/contracts";

/**
 * Hook to check and manage token allowance
 */
export function useTokenAllowance(tokenAddress: string, spenderAddress: string) {
  const { address } = useAccount();
  
  // Check current allowance
  const { data: allowance, refetch } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [address as `0x${string}`, spenderAddress as `0x${string}`],
    query: { enabled: !!address },
  });

  return {
    allowance: allowance || BigInt(0),
    refetch,
  };
}

/**
 * Hook to approve token spending
 */
export function useTokenApproval(tokenAddress: string, spenderAddress: string = CONTRACTS.LENDING_POOL) {
  const {
    data: hash,
    isPending,
    writeContract,
  } = useWriteContract();

  const approve = (amount: bigint) => {
    writeContract({
      address: tokenAddress as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "approve",
      args: [spenderAddress as `0x${string}`, amount],
    });
  };

  return {
    approve,
    hash,
    isPending,
  };
}

/**
 * Hook to get token balance
 */
export function useTokenBalance(tokenAddress: string) {
  const { address } = useAccount();
  
  const { data: balance, refetch } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
    query: { enabled: !!address },
  });

  return {
    balance: balance || BigInt(0),
    refetch,
  };
}
