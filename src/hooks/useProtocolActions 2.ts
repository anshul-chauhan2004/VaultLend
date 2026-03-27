import { useWriteContract } from "wagmi";
import { CONTRACTS, LENDING_POOL_ABI } from "@/config/contracts";

/**
 * Hook for depositing collateral (WETH)
 */
export function useDepositCollateral() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const deposit = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "depositCollateral",
      args: [amount],
    });
  };

  return { deposit, isPending, hash };
}

/**
 * Hook for withdrawing collateral
 */
export function useWithdrawCollateral() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const withdraw = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "withdrawCollateral",
      args: [amount],
    });
  };

  return { withdraw, isPending, hash };
}

/**
 * Hook for depositing liquidity (USDC)
 */
export function useDeposit() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const deposit = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "deposit",
      args: [amount],
    });
  };

  return { deposit, isPending, hash };
}

/**
 * Hook for withdrawing liquidity
 */
export function useWithdraw() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const withdraw = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "withdraw",
      args: [amount],
    });
  };

  return { withdraw, isPending, hash };
}

/**
 * Hook for borrowing stablecoin (USDC)
 */
export function useBorrow() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const borrow = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "borrow",
      args: [amount],
    });
  };

  return { borrow, isPending, hash };
}

/**
 * Hook for repaying debt
 */
export function useRepay() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const repay = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "repay",
      args: [amount],
    });
  };

  return { repay, isPending, hash };
}

/**
 * Hook for liquidating an unsafe position
 */
export function useLiquidate() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  const liquidate = (
    userAddress: `0x${string}`,
    repayAmount: bigint,
    to: `0x${string}`
  ) => {
    writeContract({
      address: CONTRACTS.LENDING_POOL as `0x${string}`,
      abi: LENDING_POOL_ABI,
      functionName: "liquidate",
      args: [userAddress, repayAmount, to],
    });
  };

  return { liquidate, isPending, hash };
}
