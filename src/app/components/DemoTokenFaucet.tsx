import { parseUnits } from "viem";
import { useState } from "react";
import { MARKET_TOKENS, formatTokenAmount } from "@/config/tokens";
import { useTokenBalance, useTokenMint } from "@/hooks/useTokenApproval";

function TransactionNotice({
  title,
  status,
  hash,
  explorerUrl,
  error,
}: {
  title: string;
  status: string | null;
  hash?: string;
  explorerUrl?: string | null;
  error?: string | null;
}) {
  if (!status && !error) return null;

  return (
    <div
      style={{
        marginTop: 12,
        padding: "12px 14px",
        borderRadius: 12,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{title}</p>
      {status && <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{status}</p>}
      {error && <p style={{ color: "#ff8c8c", fontSize: 12, marginTop: 6 }}>{error}</p>}
      {hash && explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00e896", fontSize: 12, marginTop: 8, display: "inline-block" }}
        >
          View on Etherscan
        </a>
      )}
    </div>
  );
}

type InjectedProvider = {
  isMetaMask?: boolean;
  providers?: InjectedProvider[];
  request: (args: {
    method: string;
    params?: unknown[] | Record<string, unknown>;
  }) => Promise<unknown>;
};

function getMetaMaskProvider(): InjectedProvider | undefined {
  const ethereum = (window as Window & { ethereum?: InjectedProvider }).ethereum;

  if (!ethereum) return undefined;

  if (ethereum.providers?.length) {
    return ethereum.providers.find((provider) => provider.isMetaMask) ?? ethereum.providers[0];
  }

  return ethereum;
}

export function DemoTokenFaucet({ disabled = false }: { disabled?: boolean }) {
  const wethMint = useTokenMint(MARKET_TOKENS.collateral.address);
  const usdcMint = useTokenMint(MARKET_TOKENS.borrow.address);
  const wethBalance = useTokenBalance(MARKET_TOKENS.collateral.address);
  const usdcBalance = useTokenBalance(MARKET_TOKENS.borrow.address);
  const [watchAssetStatus, setWatchAssetStatus] = useState<string | null>(null);
  const [watchAssetError, setWatchAssetError] = useState<string | null>(null);

  const addTokenToMetaMask = async (token: typeof MARKET_TOKENS.collateral) => {
    const ethereum = getMetaMaskProvider();

    if (!ethereum) {
      setWatchAssetStatus(null);
      setWatchAssetError("MetaMask was not detected in this browser.");
      return;
    }

    setWatchAssetStatus(`Opening MetaMask prompt for ${token.symbol}...`);
    setWatchAssetError(null);

    try {
      const added = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
          },
        },
      });

      if (added) {
        setWatchAssetStatus(`${token.symbol} was added to MetaMask.`);
        return;
      }

      setWatchAssetStatus(null);
      setWatchAssetError(`${token.symbol} was not added. Check the MetaMask prompt and try again.`);
    } catch (error) {
      setWatchAssetStatus(null);
      setWatchAssetError(
        error instanceof Error ? error.message : `Failed to add ${token.symbol} to MetaMask.`
      );
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(8,35,24,0.9) 0%, rgba(5,20,13,0.95) 100%)",
        border: "1px solid rgba(0,232,150,0.12)",
        borderRadius: 20,
        padding: 24,
        marginBottom: 32,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 520 }}>
          <p style={{ color: "#00e896", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
            DEMO TOKEN FAUCET
          </p>
          <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Mint assets for the live demo market
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6 }}>
            Use the faucet to seed your wallet with demo assets for collateral, supplying,
            borrowing, and repayment flows. These balances are for testing the interface and do
            not represent real value.
          </p>
        </div>
        <div style={{ minWidth: 260, color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
          <p>
            Wallet WETH:{" "}
            <span style={{ color: "#fff" }}>
              {formatTokenAmount(wethBalance.balance, MARKET_TOKENS.collateral.decimals, 4)}
            </span>
          </p>
          <p style={{ marginTop: 6 }}>
            Wallet USDC:{" "}
            <span style={{ color: "#fff" }}>
              {formatTokenAmount(usdcBalance.balance, MARKET_TOKENS.borrow.decimals, 2)}
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 20,
        }}
      >
        <button
          onClick={() => wethMint.mint(parseUnits("5", MARKET_TOKENS.collateral.decimals))}
          disabled={disabled || wethMint.isPending}
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            border: "1px solid rgba(98,126,234,0.35)",
            background: "rgba(98,126,234,0.14)",
            color: "#dbe4ff",
            fontWeight: 700,
            cursor: disabled || wethMint.isPending ? "not-allowed" : "pointer",
          }}
        >
          {wethMint.isPending ? "Minting WETH..." : "Mint 5 WETH"}
        </button>
        <button
          onClick={() => usdcMint.mint(parseUnits("10000", MARKET_TOKENS.borrow.decimals))}
          disabled={disabled || usdcMint.isPending}
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            border: "1px solid rgba(39,117,202,0.35)",
            background: "rgba(39,117,202,0.14)",
            color: "#d9ecff",
            fontWeight: 700,
            cursor: disabled || usdcMint.isPending ? "not-allowed" : "pointer",
          }}
        >
          {usdcMint.isPending ? "Minting USDC..." : "Mint 10,000 USDC"}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 14,
        }}
      >
        <button
          onClick={() => void addTokenToMetaMask(MARKET_TOKENS.collateral)}
          disabled={disabled}
          style={{
            padding: "12px 16px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "#ffffff",
            fontWeight: 600,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          Add WETH to MetaMask
        </button>
        <button
          onClick={() => void addTokenToMetaMask(MARKET_TOKENS.borrow)}
          disabled={disabled}
          style={{
            padding: "12px 16px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "#ffffff",
            fontWeight: 600,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          Add USDC to MetaMask
        </button>
      </div>

      {disabled && (
        <p style={{ color: "#ffcc80", fontSize: 12, marginTop: 16 }}>
          Switch to the configured Sepolia deployment before minting demo tokens.
        </p>
      )}
      {!disabled && (
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: 16 }}>
          Minting gives demo tokens to your wallet first. They only become collateral after you
          approve and deposit them into VaultLend. Use the MetaMask buttons above to make the demo
          tokens visible in your wallet.
        </p>
      )}

      <TransactionNotice
        title="WETH mint"
        status={wethMint.statusLabel}
        hash={wethMint.hash}
        explorerUrl={wethMint.explorerUrl}
        error={wethMint.error}
      />
      <TransactionNotice
        title="USDC mint"
        status={usdcMint.statusLabel}
        hash={usdcMint.hash}
        explorerUrl={usdcMint.explorerUrl}
        error={usdcMint.error}
      />
      <TransactionNotice
        title="MetaMask token import"
        status={watchAssetStatus}
        error={watchAssetError}
      />
    </div>
  );
}
