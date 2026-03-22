import React from "react";
import { formatTokenAmount, TokenMetadata } from "@/config/tokens";
import { AccountData, isLiquidatable } from "@/hooks/useProtocol";

interface AccountStatusProps {
  account: AccountData;
  hfState: "safe" | "warning" | "danger";
  onActionClick: (action: string) => void;
  collateralAsset: TokenMetadata;
  marketAsset: TokenMetadata;
}

export function AccountStatus({
  account,
  hfState,
  onActionClick,
  collateralAsset,
  marketAsset,
}: AccountStatusProps) {
  const collateralFormatted = formatTokenAmount(
    account.collateral,
    collateralAsset.decimals
  );
  const debtFormatted = formatTokenAmount(account.debt, marketAsset.decimals);
  const availableFormatted = formatTokenAmount(
    account.availableToBorrow,
    marketAsset.decimals
  );

  const isLiquidatable_ = isLiquidatable(account.healthFactor);
  const hasDebt = account.debt > 0n;
  const healthFactorDisplay = Number.isFinite(account.healthFactor)
    ? account.healthFactor.toFixed(2)
    : "No Debt";
  const healthFactorDescription = !hasDebt
    ? "You do not have an active borrow yet. Deposit collateral, supply liquidity, or open a small position to start the live demo flow."
    : hfState === "safe"
      ? "Your position is healthy. You can safely borrow more or reduce your debt."
      : hfState === "warning"
        ? "Your position is at risk. Consider depositing more collateral or repaying debt."
        : "Your position is in danger of liquidation. Deposit collateral or repay debt immediately.";
  const hfColor =
    hfState === "safe"
      ? "#00e896"
      : hfState === "warning"
        ? "#ffa500"
        : "#ff4444";

  return (
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
        My Account
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {/* Left Column - Account Data */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Collateral */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(0,40,25,0.9) 0%, rgba(0,25,15,0.95) 100%)",
              border: "1px solid rgba(0,232,150,0.15)",
              borderRadius: 20,
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>Collateral Deposited</p>
                <p style={{ color: "#00e896", fontSize: 32, fontWeight: 700 }}>
                  {collateralFormatted}
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                  {collateralAsset.symbol}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  onClick={() => onActionClick("depositCollateral")}
                  style={{
                    background: "rgba(0,232,150,0.1)",
                    border: "1px solid rgba(0,232,150,0.3)",
                    color: "#00e896",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Deposit
                </button>
                <button
                  onClick={() => onActionClick("withdrawCollateral")}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.86)",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Debt */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(40,0,0,0.6) 0%, rgba(20,0,0,0.8) 100%)",
              border: "1px solid rgba(255,100,100,0.15)",
              borderRadius: 20,
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>Current Debt</p>
                <p style={{ color: "#ff6666", fontSize: 32, fontWeight: 700 }}>
                  {debtFormatted}
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                  {marketAsset.symbol}
                </p>
              </div>
              <button
                onClick={() => onActionClick("repay")}
                style={{
                  background: "rgba(255,100,100,0.1)",
                  border: "1px solid rgba(255,100,100,0.3)",
                  color: "#ff9999",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Repay
              </button>
            </div>
          </div>

          {/* Available to Borrow */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(0,30,50,0.6) 0%, rgba(0,20,40,0.8) 100%)",
              border: "1px solid rgba(100,150,255,0.15)",
              borderRadius: 20,
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>Available to Borrow</p>
                <p style={{ color: "rgba(100,200,255,0.9)", fontSize: 32, fontWeight: 700 }}>
                  {availableFormatted}
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                  {marketAsset.symbol}
                </p>
              </div>
              <button
                onClick={() => onActionClick("borrow")}
                style={{
                  background: "rgba(100,150,255,0.1)",
                  border: "1px solid rgba(100,150,255,0.3)",
                  color: "rgba(100,200,255,0.9)",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Borrow
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Health Factor & Risk */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Health Factor */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(0,40,25,0.9) 0%, rgba(0,25,15,0.95) 100%)",
              border: `1px solid rgba(${hfColor === "#00e896" ? "0,232,150" : hfColor === "#ffa500" ? "255,165,0" : "255,68,68"},0.3)`,
              borderRadius: 20,
              padding: "28px",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 16 }}>Health Factor</p>

            {/* Large Display */}
            <p
              style={{
                color: hfColor,
                fontSize: hasDebt ? 48 : 40,
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              {healthFactorDisplay}
            </p>

            {/* Status Indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: hfColor,
                  boxShadow: `0 0 12px ${hfColor}`,
                }}
              />
              <span
                style={{
                  color: hfColor,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {hfState === "safe"
                  ? "Safe"
                  : hfState === "warning"
                    ? "Warning"
                    : "Danger"}
              </span>
            </div>

            {/* Description */}
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.6 }}>
              {healthFactorDescription}
            </p>

            {/* Risk Gauge */}
            <div style={{ marginTop: 20 }}>
              <div
                style={{
                  background: "rgba(0,232,150,0.1)",
                  height: 8,
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(0,232,150,0.2)",
                }}
              >
                <div
                  style={{
                    background:
                      hfColor === "#00e896"
                        ? "linear-gradient(90deg, #00b86b, #00e896)"
                        : hfColor === "#ffa500"
                          ? "linear-gradient(90deg, #ff8f1f, #ffc14d)"
                          : "linear-gradient(90deg, #ff5c5c, #ff8b8b)",
                    height: "100%",
                    width: `${hasDebt && Number.isFinite(account.healthFactor)
                      ? Math.min((account.healthFactor / 3) * 100, 100)
                      : 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Liquidation Status */}
          {isLiquidatable_ && (
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,50,50,0.15) 0%, rgba(255,30,30,0.2) 100%)",
                border: "1px solid rgba(255,100,100,0.5)",
                borderRadius: 20,
                padding: "20px",
              }}
            >
              <p style={{ color: "#ff6666", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                🚨 Position is Liquidatable
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.6 }}>
                Your health factor is below the liquidation threshold. Liquidators can repay your debt and receive collateral as a reward.
              </p>
              <button
                onClick={() => onActionClick("liquidate")}
                style={{
                  background: "rgba(255,100,100,0.2)",
                  border: "1px solid rgba(255,100,100,0.4)",
                  color: "#ff9999",
                  padding: "10px 16px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: 12,
                  width: "100%",
                }}
              >
                Liquidate Position
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Supply/Withdraw Liquidity Actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginTop: 20,
        }}
      >
        <button
          onClick={() => onActionClick("supply")}
          style={{
            background: "linear-gradient(135deg, #00e896, #00c278)",
            color: "#030f08",
            padding: "16px 24px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 8px 20px rgba(0, 232, 150, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          Supply Liquidity
        </button>
        <button
          onClick={() => onActionClick("withdrawLiquidity")}
          style={{
            background: "rgba(0,232,150,0.1)",
            color: "#00e896",
            padding: "16px 24px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 14,
            border: "1px solid rgba(0,232,150,0.3)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.1)";
          }}
        >
          Withdraw Liquidity
        </button>
      </div>
    </div>
  );
}
