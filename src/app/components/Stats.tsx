import { IS_DEPLOYMENT_CONFIGURED } from "@/config/deployment";
import { MARKET_TOKENS } from "@/config/tokens";
import { usePoolData } from "@/hooks/useProtocol";
import { formatPercent, formatTokenUnits, formatUsdValue } from "../lib/protocolDisplay";

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(0,30,18,0.8) 0%, rgba(0,20,12,0.9) 100%)",
        border: "1px solid rgba(0,232,150,0.1)",
        borderRadius: 20,
        padding: "28px 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 80,
          height: 80,
          background: "radial-gradient(circle at top right, rgba(0,232,150,0.06), transparent 70%)",
          borderRadius: "0 20px 0 0",
        }}
      />
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {value}
      </div>
      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 6 }}>{label}</div>
      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 500 }}>{sub}</div>
    </div>
  );
}

export function Stats() {
  const { data: poolData } = usePoolData();

  const stats = [
    {
      label: "Total Liquidity",
      value: IS_DEPLOYMENT_CONFIGURED
        ? formatUsdValue(poolData.totalDeposits, MARKET_TOKENS.borrow.decimals)
        : "--",
      sub: `${MARKET_TOKENS.borrow.symbol} supplied to the market`,
    },
    {
      label: "Available Liquidity",
      value: IS_DEPLOYMENT_CONFIGURED
        ? formatUsdValue(poolData.availableLiquidity, MARKET_TOKENS.borrow.decimals)
        : "--",
      sub: "Ready to borrow immediately",
    },
    {
      label: "Locked Collateral",
      value: IS_DEPLOYMENT_CONFIGURED
        ? `${formatTokenUnits(poolData.totalCollateral, MARKET_TOKENS.collateral.decimals)} ${MARKET_TOKENS.collateral.symbol}`
        : "--",
      sub: `${MARKET_TOKENS.collateral.symbol} securing open positions`,
    },
    {
      label: "Borrow APR",
      value: IS_DEPLOYMENT_CONFIGURED ? formatPercent(poolData.borrowAPY, 2) : "--",
      sub: `Live variable rate for ${MARKET_TOKENS.borrow.symbol} borrowers`,
    },
  ];

  return (
    <section
      style={{
        background: "#040d08",
        padding: "0 0 80px",
        position: "relative",
      }}
    >
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0,232,150,0.2), rgba(0,232,150,0.4), rgba(0,232,150,0.2), transparent)",
          marginBottom: 64,
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} sub={stat.sub} />
          ))}
        </div>
      </div>
    </section>
  );
}
