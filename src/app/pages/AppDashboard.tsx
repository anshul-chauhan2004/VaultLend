import { useMemo, useState } from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { NETWORK_ID, NETWORK_NAME } from "@/config/contracts";
import { IS_DEPLOYMENT_CONFIGURED } from "@/config/deployment";
import { MARKET_TOKENS, TOKENS } from "@/config/tokens";
import { getHealthFactorState, useAccountData, usePoolData } from "@/hooks/useProtocol";
import { AccountStatus } from "../components/AccountStatus";
import { ActionModals } from "../components/ActionModals";
import { DemoTokenFaucet } from "../components/DemoTokenFaucet";
import { PositionOutlook } from "../components/PositionOutlook";
import { getEffectiveAvailableLiquidity } from "../lib/protocolDisplay";

function formatUnitsDisplay(amount: bigint, decimals: number, fractionDigits = 2, minDisplay = 0) {
  const value = Number(amount) / 10 ** decimals;
  const clamped = value < minDisplay ? 0 : value;
  return clamped.toLocaleString(undefined, {
    maximumFractionDigits: fractionDigits,
  });
}

export function AppDashboard() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const poolData = usePoolData();
  const accountData = useAccountData();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const isWrongNetwork = isConnected && chainId !== NETWORK_ID;

  const pool = poolData.data;
  const account = accountData.data;
  const hfState = getHealthFactorState(account.healthFactor);
  const [selectedCollateralAsset, setSelectedCollateralAsset] = useState(MARKET_TOKENS.collateral.symbol);
  const [selectedMarketAsset, setSelectedMarketAsset] = useState(MARKET_TOKENS.borrow.symbol);

  const collateralAsset = TOKENS[selectedCollateralAsset];
  const marketAsset = TOKENS[selectedMarketAsset];

  const marketCards = useMemo(
    () => {
      const effectiveAvailableLiquidity = getEffectiveAvailableLiquidity(
        pool.totalDeposits,
        pool.totalBorrows,
        pool.availableLiquidity,
        MARKET_TOKENS.borrow.decimals,
        1,
      );

      return [
      {
        title: "Total Liquidity",
        value: `${formatUnitsDisplay(pool.totalDeposits, MARKET_TOKENS.borrow.decimals)} ${
          MARKET_TOKENS.borrow.symbol
        }`,
        caption: "Supplied into the market",
      },
      {
        title: "Available Liquidity",
        value: `${formatUnitsDisplay(effectiveAvailableLiquidity, MARKET_TOKENS.borrow.decimals)} ${
          MARKET_TOKENS.borrow.symbol
        }`,
        caption: "Immediately available to borrow",
      },
      {
        title: "Total Borrows",
        value: `${formatUnitsDisplay(pool.totalBorrows, MARKET_TOKENS.borrow.decimals, 2, 1)} ${
          MARKET_TOKENS.borrow.symbol
        }`,
        caption: "Outstanding debt across the pool",
      },
      {
        title: "Locked Collateral",
        value: `${formatUnitsDisplay(pool.totalCollateral, MARKET_TOKENS.collateral.decimals, 4)} ${
          MARKET_TOKENS.collateral.symbol
        }`,
        caption: "Assets securing open positions",
      },
      {
        title: "Utilization",
        value: `${pool.utilization.toFixed(2)}%`,
        caption: "Borrowed vs supplied capital",
      },
      {
        title: "Supply APY",
        value: `${pool.supplyAPY.toFixed(2)}%`,
        caption: "Estimated yield for suppliers",
      },
      {
        title: "Borrow APR",
        value: `${pool.borrowAPY.toFixed(2)}%`,
        caption: "Current variable borrow cost",
      },
    ];
    },
    [pool],
  );

  if (!isConnected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          marginTop: "80px",
          background: "#040d08",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
          <p style={{ fontSize: 18, marginBottom: 12 }}>Please connect MetaMask to continue</p>
          <p style={{ fontSize: 14 }}>Connect your wallet to explore the live demo market.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#040d08",
        padding: "120px 32px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {!IS_DEPLOYMENT_CONFIGURED && (
          <div
            style={{
              marginBottom: 24,
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,165,0,0.3)",
              background: "rgba(255,165,0,0.08)",
            }}
          >
            <p style={{ color: "#ffcc80", fontWeight: 700, marginBottom: 8 }}>
              Sepolia deployment not configured yet
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
              Run the Sepolia deployment script to replace placeholder addresses before the live
              demo.
            </p>
          </div>
        )}

        {isWrongNetwork && (
          <div
            style={{
              marginBottom: 24,
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,100,100,0.3)",
              background: "rgba(255,100,100,0.08)",
            }}
          >
            <p style={{ color: "#ff9c9c", fontWeight: 700, marginBottom: 8 }}>
              Wrong network connected
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 16 }}>
              Switch MetaMask to {NETWORK_NAME} to interact with the protocol.
            </p>
            <button
              onClick={() => switchChain({ chainId: NETWORK_ID })}
              disabled={isSwitching}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "none",
                background: isSwitching
                  ? "rgba(0,232,150,0.25)"
                  : "linear-gradient(135deg, #00e896, #00c278)",
                color: "#04120b",
                fontWeight: 700,
                cursor: isSwitching ? "not-allowed" : "pointer",
              }}
            >
              {isSwitching ? "Switching..." : `Switch to ${NETWORK_NAME}`}
            </button>
          </div>
        )}

        <DemoTokenFaucet disabled={isWrongNetwork || !IS_DEPLOYMENT_CONFIGURED} />

        <div
          style={{
            marginBottom: 32,
            padding: 18,
            borderRadius: 16,
            border: "1px solid rgba(0,232,150,0.14)",
            background: "rgba(0,232,150,0.05)",
          }}
        >
          <p style={{ color: "#9ff7d0", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
            This is a live demo market using faucet-minted assets
          </p>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 13, lineHeight: 1.6 }}>
            The assets in this app are for demonstration only. Depositing them as collateral and
            borrowing against them shows the full position flow without putting real market value at risk.
          </p>
        </div>

        <div
          style={{
            marginBottom: 28,
            padding: 22,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            <div style={{ maxWidth: 540 }}>
              <p style={{ color: "#00e896", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
                MARKET ROUTING
              </p>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
                Choose the assets you want to work with
              </h3>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.65 }}>
                The interface is structured like a broader lending app, with separate asset routes
                for collateral and for borrowing or supplying. Today’s live market already wires
                in the active assets below.
              </p>
            </div>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 16,
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.12)",
                minWidth: 220,
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 8 }}>
                Network
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>{NETWORK_NAME}</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <div
              style={{
                padding: 18,
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 10 }}>
                Collateral asset
              </label>
              <select
                value={selectedCollateralAsset}
                onChange={(event) => setSelectedCollateralAsset(event.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#07160f",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                }}
              >
                <option value={MARKET_TOKENS.collateral.symbol}>
                  {MARKET_TOKENS.collateral.symbol} · {MARKET_TOKENS.collateral.name}
                </option>
              </select>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 12, marginTop: 10 }}>
                Used when you deposit or withdraw position collateral.
              </p>
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 10 }}>
                Borrow / supply asset
              </label>
              <select
                value={selectedMarketAsset}
                onChange={(event) => setSelectedMarketAsset(event.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#07160f",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                }}
              >
                <option value={MARKET_TOKENS.borrow.symbol}>
                  {MARKET_TOKENS.borrow.symbol} · {MARKET_TOKENS.borrow.name}
                </option>
              </select>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 12, marginTop: 10 }}>
                Used for supplying liquidity, borrowing, and repaying balances.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Active Lending Market
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              lineHeight: 1.6,
              marginBottom: 24,
              maxWidth: 760,
            }}
          >
            Wallet balances, collateral, debt, utilization, and rates are read from the deployed
            contracts in real time. The dashboard is laid out like a production lending terminal,
            with asset routing, live market state, and position planning in one place.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {marketCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                  border: "1px solid rgba(0,232,150,0.1)",
                  borderRadius: 16,
                  padding: "24px",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  {card.title}
                </p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>{card.value}</p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  {card.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,25,15,0.5) 0%, rgba(0,16,10,0.6) 100%)",
            border: "1px solid rgba(0,232,150,0.1)",
            borderRadius: 16,
            padding: "24px",
            marginBottom: 40,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#00e896" }}>
            Market Parameters
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                Collateral Asset
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>{collateralAsset.symbol}</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                Borrow / Supply Asset
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>{marketAsset.symbol}</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                LTV
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>75%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                Liquidation Threshold
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>80%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                Close Factor
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>50%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                Liquidation Bonus
              </p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>8%</p>
            </div>
          </div>
        </div>

        <PositionOutlook account={account} pool={pool} marketAsset={marketAsset} />

        <AccountStatus
          account={account}
          hfState={hfState}
          onActionClick={setActiveModal}
          collateralAsset={collateralAsset}
          marketAsset={marketAsset}
        />
        {activeModal && (
          <ActionModals
            activeModal={activeModal}
            onClose={() => setActiveModal(null)}
            disabled={isWrongNetwork || !IS_DEPLOYMENT_CONFIGURED}
            collateralAsset={collateralAsset}
            marketAsset={marketAsset}
          />
        )}
      </div>
    </div>
  );
}
