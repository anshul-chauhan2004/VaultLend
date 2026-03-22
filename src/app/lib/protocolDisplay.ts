import { formatUnits } from "viem";

export function formatUsdValue(amount: bigint, decimals = 6, maximumFractionDigits = 2) {
  const value = Number(formatUnits(amount, decimals));
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

export function formatCompactUsdValue(amount: bigint, decimals = 6, maximumFractionDigits = 1) {
  const value = Number(formatUnits(amount, decimals));
  return value.toLocaleString(undefined, {
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
