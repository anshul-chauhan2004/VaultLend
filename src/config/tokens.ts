import { CONTRACTS } from "./contracts";

// Token Metadata Configuration

export interface TokenMetadata {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  color: string;
  icon?: string;
}

export const TOKENS: Record<string, TokenMetadata> = {
  WETH: {
    address: CONTRACTS.WETH_TOKEN,
    symbol: "WETH",
    name: "Mock Wrapped Ethereum",
    decimals: 18,
    color: "#627EEA",
  },
  USDC: {
    address: CONTRACTS.USDC_TOKEN,
    symbol: "USDC",
    name: "Mock USD Coin",
    decimals: 6,
    color: "#2775CA",
  },
};

// Market structure: WETH collateral, USDC borrowable
export const MARKET_TOKENS = {
  collateral: TOKENS.WETH,
  borrow: TOKENS.USDC,
} as const;

// Helper to get token by address
export function getTokenByAddress(address: string): TokenMetadata | undefined {
  return Object.values(TOKENS).find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
}

// Helper to format token amounts
export function formatTokenAmount(
  amount: bigint,
  decimals: number,
  precision: number = 2,
  minDisplay: number = 0,
): string {
  const minDisplayUnits =
    minDisplay > 0 ? BigInt(Math.floor(minDisplay * 10 ** decimals)) : 0n;
  const normalizedAmount = amount < minDisplayUnits ? 0n : amount;
  const divisor = 10n ** BigInt(decimals);
  const wholePart = normalizedAmount / divisor;
  const fractionalPart = normalizedAmount % divisor;

  const fractional = (fractionalPart.toString().padStart(decimals, "0")).slice(0, precision);

  if (fractional === "0".repeat(precision)) {
    return wholePart.toLocaleString();
  }

  return `${wholePart.toLocaleString()}.${fractional}`;
}
