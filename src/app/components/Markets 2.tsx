const markets = [
  {
    symbol: "ETH",
    name: "Ethereum",
    color: "#627EEA",
    totalSupply: "$92.3M",
    totalBorrow: "$48.1M",
    supplyApy: "3.85%",
    borrowApy: "5.20%",
    ltv: "80%",
    utilization: 52,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 12.5L12 16L20 12.5L12 2Z" fill="#627EEA" opacity="0.8" />
        <path d="M12 16L4 12.5L12 22L20 12.5L12 16Z" fill="#627EEA" />
        <path d="M12 2L12 16" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    color: "#F7931A",
    totalSupply: "$71.2M",
    totalBorrow: "$32.4M",
    supplyApy: "2.40%",
    borrowApy: "4.10%",
    ltv: "70%",
    utilization: 45,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F7931A" opacity="0.9" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">₿</text>
      </svg>
    ),
  },
  {
    symbol: "stETH",
    name: "Lido Staked ETH",
    color: "#00A3FF",
    totalSupply: "$68.9M",
    totalBorrow: "$18.7M",
    supplyApy: "5.92%",
    borrowApy: "7.10%",
    ltv: "75%",
    utilization: 27,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(0,163,255,0.15)" stroke="#00A3FF" strokeWidth="1.5" />
        <path d="M12 5L7 12.5L12 15L17 12.5L12 5Z" fill="#00A3FF" />
        <path d="M12 15L7 12.5L12 19L17 12.5L12 15Z" fill="#00A3FF" opacity="0.7" />
      </svg>
    ),
  },
  {
    symbol: "USDC",
    name: "USDC Stablecoin",
    color: "#2775CA",
    totalSupply: "$52.4M",
    totalBorrow: "$31.2M",
    supplyApy: "4.50%",
    borrowApy: "3.20%",
    ltv: "90%",
    utilization: 60,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(39,117,202,0.15)" stroke="#2775CA" strokeWidth="1.5" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2775CA">$</text>
      </svg>
    ),
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    color: "#26A17B",
    totalSupply: "$58.7M",
    totalBorrow: "$42.1M",
    supplyApy: "4.65%",
    borrowApy: "3.40%",
    ltv: "90%",
    utilization: 72,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(38,161,123,0.15)" stroke="#26A17B" strokeWidth="1.5" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#26A17B" letterSpacing="-1">฿</text>
      </svg>
    ),
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    color: "#F4D03F",
    totalSupply: "$41.3M",
    totalBorrow: "$18.6M",
    supplyApy: "4.20%",
    borrowApy: "2.80%",
    ltv: "90%",
    utilization: 45,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(244,208,63,0.15)" stroke="#F4D03F" strokeWidth="1.5" />
        <path d="M12 6L15 10H9L12 6Z" fill="#F4D03F" />
        <path d="M12 18L9 14H15L12 18Z" fill="#F4D03F" opacity="0.7" />
      </svg>
    ),
  },
];

import { useNavigate } from "react-router-dom";

export function Markets() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "#040d08",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
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
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
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
                LENDING MARKET
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
              WETH / USDC
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.6, maxWidth: 460 }}>
              Deposit WETH as collateral and borrow USDC. Smart contract audited, full on-chain transparency.
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
              transition: "all 0.2s",
              boxShadow: "0 0 20px rgba(0, 232, 150, 0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(0, 232, 150, 0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0, 232, 150, 0.3)";
            }}
          >
            Open Market →
          </button>
        </div>

        {/* Market Card */}
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
          {/* Corner accent */}
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
            {/* Market Header */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                Deposit WETH as collateral
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                Borrow USDC at floating rates
              </p>
            </div>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
                marginBottom: 32,
              }}
            >
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Total Liquidity</p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>$452.3M</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Total Borrows</p>
                <p style={{ color: "#ff6b6b", fontSize: 24, fontWeight: 700 }}>$315.4M</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Utilization</p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>69.8%</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Supply APY</p>
                <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>4.50%</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Borrow APR</p>
                <p style={{ color: "#ff6b6b", fontSize: 24, fontWeight: 700 }}>6.20%</p>
              </div>
            </div>

            {/* Risk Parameters */}
            <div
              style={{
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 12,
                padding: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: 16,
              }}
            >
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 6 }}>LTV</p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>75%</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 6 }}>Liquidation Threshold</p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>80%</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 6 }}>Close Factor</p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>50%</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 6 }}>Liquidation Bonus</p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
