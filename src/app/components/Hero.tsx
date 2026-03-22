import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IS_DEPLOYMENT_CONFIGURED } from "@/config/deployment";
import { MARKET_TOKENS } from "@/config/tokens";
import { usePoolData } from "@/hooks/useProtocol";
import {
  formatCompactUsdValue,
  formatPercent,
} from "../lib/protocolDisplay";
import { HeroVisual } from "./HeroVisual";

const RISK_PARAMS = [
  { label: "LTV", value: "75%" },
  { label: "Liquidation Threshold", value: "80%" },
  { label: "Close Factor", value: "50%" },
  { label: "Liquidation Bonus", value: "8%" },
] as const;

export function Hero() {
  const navigate = useNavigate();
  const { data: poolData } = usePoolData();

  const heroMetrics = useMemo(
    () => [
      {
        label: "Total Liquidity",
        value: IS_DEPLOYMENT_CONFIGURED
          ? formatCompactUsdValue(poolData.totalDeposits, MARKET_TOKENS.borrow.decimals)
          : "Awaiting deploy",
      },
      {
        label: "Total Borrows",
        value: IS_DEPLOYMENT_CONFIGURED
          ? formatCompactUsdValue(poolData.totalBorrows, MARKET_TOKENS.borrow.decimals)
          : "Awaiting deploy",
      },
      {
        label: "Utilization",
        value: IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.utilization, 1) : "--",
      },
      {
        label: "Borrow APR",
        value: IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.borrowAPY, 2) : "--",
      },
    ],
    [poolData],
  );

  const scrollToMarkets = () => {
    const section = document.getElementById("markets");
    if (section) {
      const navOffset = 96;
      const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    navigate("/");
    window.setTimeout(() => {
      const fallbackSection = document.getElementById("markets");
      if (!fallbackSection) return;

      const navOffset = 96;
      const top = fallbackSection.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #040d08 0%, #061410 50%, #040d08 100%)",
        minHeight: "100vh",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(0,232,150,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,232,150,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,100,60,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 50,
          right: -50,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,80,48,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-8 pt-16 pb-12 flex items-center gap-12"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex-1 max-w-2xl">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0, 232, 150, 0.08)",
              border: "1px solid rgba(0, 232, 150, 0.2)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00e896",
                boxShadow: "0 0 8px #00e896",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#00e896", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em" }}>
              LIVE LENDING EXPERIENCE
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 5vw, 66px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              marginBottom: 24,
              maxWidth: 760,
            }}
          >
            Open a collateral-backed position.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00e896, #8dffca)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Borrow, lend, and manage it live.
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.58)",
              fontSize: 17,
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 640,
            }}
          >
            VaultLend gives you a live lending interface with wallet-connected collateral,
            liquidity, borrowing, repayment, and position management. This demo environment uses
            faucet-minted assets so you can explore the entire flow without putting real capital at risk.
          </p>

          {!IS_DEPLOYMENT_CONFIGURED && (
            <div
              style={{
                marginBottom: 28,
                maxWidth: 640,
                padding: "16px 18px",
                borderRadius: 16,
                border: "1px solid rgba(255,165,0,0.25)",
                background: "rgba(255,165,0,0.08)",
              }}
            >
              <p style={{ color: "#ffcf87", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                Live protocol numbers unlock after Sepolia deployment
              </p>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 13, lineHeight: 1.6 }}>
                The landing page now reads the real pool state. Until the contracts are deployed,
                the stat cards below intentionally avoid placeholder numbers.
              </p>
            </div>
          )}

          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 36 }}>
            <button
              onClick={() => navigate("/app")}
              style={{
                background: "linear-gradient(135deg, #00e896, #00c278)",
                color: "#030f08",
                padding: "14px 28px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(0,232,150,0.4), 0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              Launch App
            </button>
            <button
              onClick={scrollToMarkets}
              style={{
                background: "rgba(0,232,150,0.06)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: 14,
                fontWeight: 600,
                fontSize: 15,
                border: "1px solid rgba(0,232,150,0.2)",
                cursor: "pointer",
              }}
            >
              View Market
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 14,
              maxWidth: 760,
              marginBottom: 30,
            }}
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                style={{
                  borderRadius: 18,
                  padding: "18px 18px",
                  background: "linear-gradient(135deg, rgba(0,30,18,0.82), rgba(0,20,12,0.94))",
                  border: "1px solid rgba(0,232,150,0.1)",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginBottom: 10 }}>
                  {metric.label}
                </p>
                <p style={{ color: "#ffffff", fontSize: 22, fontWeight: 700 }}>{metric.value}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 10,
            }}
          >
            {RISK_PARAMS.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{item.label}</span>
                <span style={{ color: "#00e896", fontSize: 13, fontWeight: 700 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center" style={{ minHeight: 500 }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
