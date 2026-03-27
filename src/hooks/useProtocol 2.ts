import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { CONTRACTS, LENDING_POOL_ABI, MARKET_CONFIG } from "@/config/contracts";
import { MARKET_TOKENS } from "@/config/tokens";

export interface AccountData {
  collateral: bigint;
  debt: bigint;
  availableToBorrow: bigint;
  healthFactor: number;
}

export interface PoolData {
  totalDeposits: bigint;
  totalBorrows: bigint;
  supplyAPY: number;
  borrowAPY: number;
  utilization: number;
}

/**
 * Hook to fetch account data from the lending protocol
 * Mock data structure - replace with real contract call
 */
export function useAccountData() {
  const { address, isConnected } = useAccount();
  
  // In production, replace with real contract call:
  // const { data: accountData } = useReadContract({
  //   address: CONTRACTS.LENDING_POOL,
  //   abi: LENDING_POOL_ABI,
  //   functionName: "accountData",
  //   args: [address!],
  //   enabled: isConnected && !!address,
  // });

  // For now, return mock data
  const mockData: AccountData = {
    collateral: parseUnits("2.5", MARKET_TOKENS.collateral.decimals),
    debt: parseUnits("1200", MARKET_TOKENS.borrow.decimals),
    availableToBorrow: parseUnits("685", MARKET_TOKENS.borrow.decimals),
    healthFactor: 1.85,
  };

  return {
    data: mockData,
    isLoading: false,
    error: null,
  };
}

/**
 * Hook to fetch pool statistics from the lending protocol
 * Mock data - replace with real contract call
 */
export function usePoolData() {
  // In production, replace with real contract call:
  // const { data: poolData } = useReadContract({
  //   address: CONTRACTS.LENDING_POOL,
  //   abi: LENDING_POOL_ABI,
  //   functionName: "getPoolData",
  // });

  const mockData: PoolData = {
    totalDeposits: parseUnits("125000", MARKET_TOKENS.borrow.decimals),
    totalBorrows: parseUnits("93750", MARKET_TOKENS.borrow.decimals),
    supplyAPY: 0.045, // 4.5%
    borrowAPY: 0.065, // 6.5%
    utilization: 0.75, // 75%
  };

  return {
    data: mockData,
    isLoading: false,
    error: null,
  };
}

/**
 * Calculate health factor based on account data
 * HF = (CollateralValue × LT) / Debt
 * where LT is liquidation threshold
 */
export function calculateHealthFactor(
  collateralValue: number,
  debt: number
): number {
  if (debt === 0) return Infinity;
  return (collateralValue * MARKET_CONFIG.liquidationThreshold) / debt;
}

/**
 * Get health factor state: "safe" | "warning" | "danger"
 */
export function getHealthFactorState(hf: number): "safe" | "warning" | "danger" {
  if (hf >= 2.0) return "safe";
  if (hf >= 1.0) return "warning";
  return "danger";
}

/**
 * Check if a position is liquidatable
 */
export function isLiquidatable(healthFactor: number): boolean {
  return healthFactor < MARKET_CONFIG.liquidationThreshold;
}
