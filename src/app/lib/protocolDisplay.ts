import { formatUnits } from "viem";

export const USDC_REPAY_DUST = 0.01;

export function getDisplayThresholdUnits(decimals = 6, minDisplay = 0) {
  return minDisplay > 0 ? BigInt(Math.floor(minDisplay * 10 ** decimals)) : 0n;
}

export function clampDustAmount(amount: bigint, decimals = 6, minDisplay = 0) {
  const threshold = getDisplayThresholdUnits(decimals, minDisplay);
  return amount < threshold ? 0n : amount;
}

export function getEffectiveAvailableLiquidity(
  totalDeposits: bigint,
  totalBorrows: bigint,
  availableLiquidity: bigint,
  decimals = 6,
  minDisplay = 0,
) {
  const threshold = getDisplayThresholdUnits(decimals, minDisplay);
  return totalBorrows < threshold ? totalDeposits : availableLiquidity;
}

export function getEffectiveAvailableToBorrow(
  availableToBorrow: bigint,
  debt: bigint,
  decimals = 6,
  minDisplay = 0,
) {
  const threshold = getDisplayThresholdUnits(decimals, minDisplay);
  return debt < threshold ? availableToBorrow + debt : availableToBorrow;
}

export function formatUsdValue(amount: bigint, decimals = 6, maximumFractionDigits = 2, minDisplay = 0) {
  const value = Number(formatUnits(amount, decimals));
  const clamped = value < minDisplay ? 0 : value;
  return clamped.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

export function formatCompactUsdValue(amount: bigint, decimals = 6, maximumFractionDigits = 1, minDisplay = 0) {
  const value = Number(formatUnits(amount, decimals));
  const clamped = value < minDisplay ? 0 : value;
  return clamped.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

export function formatTokenUnits(amount: bigint, decimals: number, maximumFractionDigits = 4) {
  const value = Number(formatUnits(amount, decimals));
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

export function formatPercent(value: number, maximumFractionDigits = 2) {
  return `${value.toFixed(maximumFractionDigits)}%`;
}

export function formatRiskPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}
