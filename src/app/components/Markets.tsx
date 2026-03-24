import { useNavigate } from "react-router-dom";
import { IS_DEPLOYMENT_CONFIGURED } from "@/config/deployment";
import { MARKET_CONFIG } from "@/config/contracts";
import { MARKET_TOKENS } from "@/config/tokens";
import { usePoolData } from "@/hooks/useProtocol";
import {
  formatPercent,
  formatRiskPercent,
  formatTokenUnits,
  formatUsdValue,
  getEffectiveAvailableLiquidity,
} from "../lib/protocolDisplay";

const RISK_ITEMS = [
  { label: "LTV", value: formatRiskPercent(MARKET_CONFIG.ltv) },
  {
    label: "Liquidation Threshold",
    value: formatRiskPercent(MARKET_CONFIG.liquidationThreshold),
  },
  { label: "Close Factor", value: formatRiskPercent(MARKET_CONFIG.closeFactor) },
  { label: "Liquidation Bonus", value: formatRiskPercent(MARKET_CONFIG.liquidationBonus) },
] as const;

export function Markets() {
  const navigate = useNavigate();
  const { data: poolData } = usePoolData();
  const effectiveAvailableLiquidity = getEffectiveAvailableLiquidity(
    poolData.totalDeposits,
    poolData.totalBorrows,
    poolData.availableLiquidity,
    MARKET_TOKENS.borrow.decimals,
    1,
  );

  return (
    <section
      id="markets"
      style={{
        background: "#040d08",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: 0,
          width: 500,
          height: 400,
          background: "radial-gradient(circle, rgba(0,60,35,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0,232,150,0.08)",
                border: "1px solid rgba(0,232,150,0.18)",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 20,
              }}
            >
              <span style={{ color: "#00e896", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em" }}>
                LIVE DEMO MARKET
              </span>
            </div>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              Collateral-backed borrowing, live market state
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.6, maxWidth: 520 }}>
              The landing page market card reads the same live state as the app dashboard. The
              balances and rates come from onchain demo activity so you can inspect real position
              behavior without synthetic placeholders.
            </p>
          </div>

          <button
            onClick={() => navigate("/app")}
            style={{
              background: "linear-gradient(135deg, #00e896, #00b860)",
              color: "#040d08",
              padding: "12px 24px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0, 232, 150, 0.3)",
            }}
          >
            Open App
          </button>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,25,15,0.6) 0%, rgba(0,16,10,0.8) 100%)",
            border: "1px solid rgba(0,232,150,0.15)",
            borderRadius: 20,
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 150,
              height: 150,
              background: "radial-gradient(circle at top right, rgba(0,232,150,0.08), transparent 70%)",
              borderRadius: "0 20px 0 0",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                Live market state
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                Supply liquidity, post collateral, and monitor utilization, rates, and risk in real time.
              </p>
            </div>

            {!IS_DEPLOYMENT_CONFIGURED && (
              <div
                style={{
                  marginBottom: 24,
                  padding: "16px 18px",
                  borderRadius: 14,
                  background: "rgba(255,165,0,0.08)",
                  border: "1px solid rgba(255,165,0,0.18)",
                }}
              >
                <p style={{ color: "#ffcf87", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  Sepolia deployment pending
                </p>
                <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 13, lineHeight: 1.6 }}>
                  These values switch to live onchain numbers as soon as the Sepolia contracts are
                  deployed and the frontend config is updated.
                </p>
              </div>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 24,
                marginBottom: 32,
              }}
            >
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Total Liquidity
                </p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED
                    ? formatUsdValue(poolData.totalDeposits, MARKET_TOKENS.borrow.decimals)
                    : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Supplied into the market
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Total Borrows
                </p>
                <p style={{ color: "#ff6b6b", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED
                    ? formatUsdValue(poolData.totalBorrows, MARKET_TOKENS.borrow.decimals, 2, 1)
                    : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Outstanding market debt
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Available Liquidity
                </p>
                <p style={{ color: "#ffffff", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED
                    ? formatUsdValue(effectiveAvailableLiquidity, MARKET_TOKENS.borrow.decimals)
                    : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Ready to borrow
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Utilization
                </p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.utilization, 1) : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Of supplied capital
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Supply APY
                </p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.supplyAPY, 2) : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Earned by suppliers
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>
                  Borrow APR
                </p>
                <p style={{ color: "#ff6b6b", fontSize: 24, fontWeight: 700 }}>
                  {IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.borrowAPY, 2) : "--"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
                  Current variable borrow cost
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: 20,
              }}
            >
              <div
                style={{
                  background: "rgba(0,232,150,0.05)",
                  border: "1px solid rgba(0,232,150,0.1)",
                  borderRadius: 12,
                  padding: "20px",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 10 }}>
                  Locked Collateral
                </p>
                <p style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 6 }}>
                  {IS_DEPLOYMENT_CONFIGURED
                    ? formatTokenUnits(poolData.totalCollateral, MARKET_TOKENS.collateral.decimals)
                    : "--"}{" "}
                  {MARKET_TOKENS.collateral.symbol}
                </p>
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12 }}>
                  Total {MARKET_TOKENS.collateral.symbol} securing the market
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
                  gap: 16,
                }}
              >
                {RISK_ITEMS.map((item) => (
                  <div key={item.label}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 6 }}>
                      {item.label}
                    </p>
                    <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
