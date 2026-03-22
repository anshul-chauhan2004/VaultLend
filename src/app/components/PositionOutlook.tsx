import { useEffect, useMemo, useState } from "react";
import { AccountData, PoolData } from "@/hooks/useProtocol";
import { TokenMetadata } from "@/config/tokens";

const REPAYMENT_WINDOWS = [7, 30, 60, 90, 180] as const;

function formatAmount(value: number, symbol: string, fractionDigits = 2) {
  return `${value.toLocaleString(undefined, {
    minimumFractionDigits: value > 0 ? Math.min(fractionDigits, 2) : 0,
    maximumFractionDigits: fractionDigits,
  })} ${symbol}`;
}

function formatTimestamp(date: Date) {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function buildPath(points: Array<{ x: number; y: number }>) {
  if (points.length === 0) return "";

  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
}

export function PositionOutlook({
  account,
  pool,
  marketAsset,
}: {
  account: AccountData;
  pool: PoolData;
  marketAsset: TokenMetadata;
}) {
  const [repaymentDays, setRepaymentDays] = useState<(typeof REPAYMENT_WINDOWS)[number]>(30);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const principal = Number(account.debt) / 10 ** marketAsset.decimals;
  const apr = pool.borrowAPY / 100;
  const dailyInterest = principal * apr / 365;
  const projectedInterest = dailyInterest * repaymentDays;
  const totalProjectedRepayment = principal + projectedInterest;
  const dueDate = new Date(now.getTime() + repaymentDays * 24 * 60 * 60 * 1000);
  const hasDebt = account.debt > 0n;

  const chart = useMemo(() => {
    const width = 520;
    const height = 180;
    const paddingX = 18;
    const paddingY = 18;
    const points = Array.from({ length: 6 }, (_, index) => {
      const progress = index / 5;
      const elapsedDays = repaymentDays * progress;
      const projectedTotal = principal + dailyInterest * elapsedDays;
      return { day: elapsedDays, total: projectedTotal };
    });

    const maxValue = Math.max(...points.map((point) => point.total), principal || 1, 1);
    const minValue = Math.min(...points.map((point) => point.total), principal);
    const range = Math.max(maxValue - minValue, 1);

    const mappedPoints = points.map((point, index) => ({
      x: paddingX + ((width - paddingX * 2) * index) / (points.length - 1),
      y: height - paddingY - ((point.total - minValue) / range) * (height - paddingY * 2),
      day: point.day,
      total: point.total,
    }));

    return {
      width,
      height,
      points: mappedPoints,
      path: buildPath(mappedPoints),
    };
  }, [dailyInterest, principal, repaymentDays]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(0,25,15,0.72) 0%, rgba(0,16,10,0.88) 100%)",
        border: "1px solid rgba(0,232,150,0.12)",
        borderRadius: 20,
        padding: 24,
        marginBottom: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 22,
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <p style={{ color: "#00e896", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
            REPAYMENT OUTLOOK
          </p>
          <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            Timeline and interest projection
          </h3>
          <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.65 }}>
            Explore how your projected repayment changes over time using the current live borrow
            rate. This updates from the latest onchain APR and your active balance.
          </p>
        </div>

        <div
          style={{
            minWidth: 240,
            padding: "16px 18px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 12, marginBottom: 8 }}>
            Live rate snapshot
          </p>
          <p style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
            {pool.borrowAPY.toFixed(2)}%
          </p>
          <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 12 }}>
            Updated {formatTimestamp(now)}
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {REPAYMENT_WINDOWS.map((days) => (
          <button
            key={days}
            onClick={() => setRepaymentDays(days)}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border:
                repaymentDays === days
                  ? "1px solid rgba(0,232,150,0.42)"
                  : "1px solid rgba(255,255,255,0.1)",
              background:
                repaymentDays === days ? "rgba(0,232,150,0.12)" : "rgba(255,255,255,0.04)",
              color: repaymentDays === days ? "#00e896" : "rgba(255,255,255,0.78)",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {days} days
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 18,
            borderRadius: 18,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.44)", fontSize: 12, marginBottom: 6 }}>
                Projection curve
              </p>
              <p style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
                {hasDebt ? "Estimated repayment over time" : "Open a borrow to activate the chart"}
              </p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 12 }}>
              Horizon: {repaymentDays} days
            </p>
          </div>

          <svg
            viewBox={`0 0 ${chart.width} ${chart.height}`}
            style={{ width: "100%", height: 220, display: "block" }}
          >
            <defs>
              <linearGradient id="repaymentStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e896" />
                <stop offset="100%" stopColor="#8dffca" />
              </linearGradient>
            </defs>

            {[0.2, 0.4, 0.6, 0.8].map((line) => (
              <line
                key={line}
                x1="18"
                x2={chart.width - 18}
                y1={chart.height * line}
                y2={chart.height * line}
                stroke="rgba(255,255,255,0.07)"
                strokeDasharray="4 6"
              />
            ))}

            <path
              d={chart.path}
              fill="none"
              stroke="url(#repaymentStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={hasDebt ? 1 : 0.45}
            />

            {chart.points.map((point, index) => (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#00e896"
                  opacity={hasDebt ? 1 : 0.45}
                />
                <text
                  x={point.x}
                  y={chart.height - 2}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.38)"
                  fontSize="11"
                >
                  {Math.round(point.day)}d
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              label: "Current balance",
              value: formatAmount(principal, marketAsset.symbol, 2),
              tone: "#ffffff",
            },
            {
              label: `Estimated interest in ${repaymentDays} days`,
              value: hasDebt ? formatAmount(projectedInterest, marketAsset.symbol, 4) : `0 ${marketAsset.symbol}`,
              tone: "#00e896",
            },
            {
              label: "Projected repayment",
              value: hasDebt ? formatAmount(totalProjectedRepayment, marketAsset.symbol, 2) : `0 ${marketAsset.symbol}`,
              tone: "#8dffca",
            },
            {
              label: "Daily interest run rate",
              value: hasDebt ? formatAmount(dailyInterest, marketAsset.symbol, 6) : `0 ${marketAsset.symbol}`,
              tone: "rgba(255,255,255,0.86)",
            },
            {
              label: "Target repayment date",
              value: formatTimestamp(dueDate),
              tone: "rgba(255,255,255,0.86)",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "16px 18px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.44)", fontSize: 12, marginBottom: 8 }}>
                {item.label}
              </p>
              <p style={{ color: item.tone, fontSize: 22, fontWeight: 700 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
