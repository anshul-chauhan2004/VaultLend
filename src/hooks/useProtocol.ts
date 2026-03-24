import { formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS, LENDING_POOL_ABI, MARKET_CONFIG } from "@/config/contracts";
import { IS_DEPLOYMENT_CONFIGURED } from "@/config/deployment";

const MAX_UINT256 = (1n << 256n) - 1n;

export interface AccountData {
  collateral: bigint;
  debt: bigint;
  availableToBorrow: bigint;
  suppliedLiquidity: bigint;
  healthFactor: number;
}

export interface PoolData {
  totalDeposits: bigint;
  totalBorrows: bigint;
  totalCollateral: bigint;
  availableLiquidity: bigint;
  supplyAPY: number;
  borrowAPY: number;
  utilization: number;
}

function toHealthFactor(value: bigint | undefined): number {
  if (!value || value === 0n) return 0;
  if (value === MAX_UINT256) return Number.POSITIVE_INFINITY;
  return Number(formatUnits(value, 18));
}

function parseAccountTuple(data: unknown): AccountData {
  const tuple = data as
    | readonly [bigint, bigint, bigint, bigint]
    | {
        collateral: bigint;
        debt: bigint;
        availableToBorrow: bigint;
        healthFactor: bigint;
      }
    | undefined;

  const collateral = tuple
    ? "collateral" in tuple
      ? tuple.collateral
      : tuple[0]
    : 0n;
  const debt = tuple
    ? "debt" in tuple
      ? tuple.debt
      : tuple[1]
    : 0n;
  const availableToBorrow = tuple
    ? "availableToBorrow" in tuple
      ? tuple.availableToBorrow
      : tuple[2]
    : 0n;
  const rawHealthFactor = tuple
    ? "healthFactor" in tuple
      ? tuple.healthFactor
      : tuple[3]
    : 0n;

  return {
    collateral,
    debt,
    availableToBorrow,
    healthFactor: toHealthFactor(rawHealthFactor),
  };
}

function parsePoolTuple(data: unknown): {
  totalDeposits: bigint;
  totalBorrows: bigint;
  totalCollateral: bigint;
} {
  const tuple = data as readonly [bigint, bigint, bigint] | undefined;

  return {
    totalDeposits: tuple?.[0] ?? 0n,
    totalBorrows: tuple?.[1] ?? 0n,
    totalCollateral: tuple?.[2] ?? 0n,
  };
}

export function useAccountData() {
  const { address, isConnected } = useAccount();
  const enabled = isConnected && !!address && IS_DEPLOYMENT_CONFIGURED;

  const accountDataQuery = useReadContract({
    address: CONTRACTS.LENDING_POOL,
    abi: LENDING_POOL_ABI,
    functionName: "getAccountData",
    args: address ? [address] : undefined,
    query: {
      enabled,
      refetchInterval: 5_000,
    },
  });

  const liquidityBalanceQuery = useReadContract({
    address: CONTRACTS.LENDING_POOL,
    abi: LENDING_POOL_ABI,
    functionName: "liquidityBalance",
    args: address ? [address] : undefined,
    query: {
      enabled,
      refetchInterval: 5_000,
    },
  });

  return {
    data: {
      ...parseAccountTuple(accountDataQuery.data),
      suppliedLiquidity: (liquidityBalanceQuery.data as bigint | undefined) ?? 0n,
    },
    isLoading: accountDataQuery.isLoading || liquidityBalanceQuery.isLoading,
    error: accountDataQuery.error ?? liquidityBalanceQuery.error,
    refetch: () => {
      void accountDataQuery.refetch();
      void liquidityBalanceQuery.refetch();
    },
  };
}

export function usePoolData() {
  const enabled = IS_DEPLOYMENT_CONFIGURED;

  const poolDataQuery = useReadContract({
    address: CONTRACTS.LENDING_POOL,
    abi: LENDING_POOL_ABI,
    functionName: "getPoolData",
    query: {
      enabled,
      refetchInterval: 5_000,
    },
  });

  const borrowAPRQuery = useReadContract({
    address: CONTRACTS.LENDING_POOL,
    abi: LENDING_POOL_ABI,
    functionName: "borrowAPR",
    query: {
      enabled,
      refetchInterval: 10_000,
    },
  });

  const reserveFactorQuery = useReadContract({
    address: CONTRACTS.LENDING_POOL,
    abi: LENDING_POOL_ABI,
    functionName: "RESERVE_FACTOR",
    query: {
      enabled,
      refetchInterval: 10_000,
    },
  });

  const base = parsePoolTuple(poolDataQuery.data);
  const availableLiquidity =
    base.totalDeposits > base.totalBorrows ? base.totalDeposits - base.totalBorrows : 0n;
  const utilization =
    base.totalDeposits > 0n
      ? Number((base.totalBorrows * 10_000n) / base.totalDeposits) / 100
      : 0;

  const borrowAPRRaw = (borrowAPRQuery.data as bigint | undefined) ?? 0n;
  const reserveFactorRaw = (reserveFactorQuery.data as bigint | undefined) ?? 0n;
  const borrowAPY = Number(formatUnits(borrowAPRRaw, 16));
  const reserveFactorRatio = Number(formatUnits(reserveFactorRaw, 18));
  const utilizationRatio = utilization / 100;
  const supplyAPY = borrowAPY * utilizationRatio * (1 - reserveFactorRatio);

  return {
    data: {
      ...base,
      availableLiquidity,
      supplyAPY,
      borrowAPY,
      utilization,
    } satisfies PoolData,
    isLoading:
      poolDataQuery.isLoading || borrowAPRQuery.isLoading || reserveFactorQuery.isLoading,
    error: poolDataQuery.error ?? borrowAPRQuery.error ?? reserveFactorQuery.error,
    refetch: () => {
      void poolDataQuery.refetch();
      void borrowAPRQuery.refetch();
      void reserveFactorQuery.refetch();
    },
  };
}

export function calculateHealthFactor(collateralValue: number, debt: number): number {
  if (debt === 0) return Number.POSITIVE_INFINITY;
  return (collateralValue * MARKET_CONFIG.liquidationThreshold) / debt;
}

export function getHealthFactorState(hf: number): "safe" | "warning" | "danger" {
  if (!Number.isFinite(hf)) return "safe";
  if (hf >= 2.0) return "safe";
  if (hf >= 1.0) return "warning";
  return "danger";
}

export function isLiquidatable(healthFactor: number): boolean {
  return Number.isFinite(healthFactor) && healthFactor < 1;
}
