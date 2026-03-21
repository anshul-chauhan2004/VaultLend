const markets = [
  {
    symbol: "ETH",
    name: "Ethereum",
    color: "#627EEA",
    totalSupply: "$214.5M",
    totalBorrow: "$98.2M",
    supplyApy: "4.12%",
    borrowApy: "5.80%",
    ltv: "80%",
    utilization: 45,
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
    totalSupply: "$318.7M",
    totalBorrow: "$141.3M",
    supplyApy: "2.85%",
    borrowApy: "4.20%",
    ltv: "70%",
    utilization: 44,
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
    totalSupply: "$156.2M",
    totalBorrow: "$52.8M",
    supplyApy: "6.40%",
    borrowApy: "7.92%",
    ltv: "75%",
    utilization: 33,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(0,163,255,0.15)" stroke="#00A3FF" strokeWidth="1.5" />
        <path d="M12 5L7 12.5L12 15L17 12.5L12 5Z" fill="#00A3FF" />
        <path d="M12 15L7 12.5L12 19L17 12.5L12 15Z" fill="#00A3FF" opacity="0.7" />
      </svg>
    ),
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    color: "#8247E5",
    totalSupply: "$48.9M",
    totalBorrow: "$21.4M",
    supplyApy: "5.20%",
    borrowApy: "6.95%",
    ltv: "65%",
    utilization: 43,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(130,71,229,0.15)" stroke="#8247E5" strokeWidth="1.5" />
        <path d="M8 14L12 8L16 14H8Z" fill="#8247E5" />
        <path d="M8 14H16L14 18H10L8 14Z" fill="#8247E5" opacity="0.6" />
      </svg>
    ),
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    color: "#2A5ADA",
    totalSupply: "$32.1M",
    totalBorrow: "$14.7M",
    supplyApy: "3.75%",
    borrowApy: "5.10%",
    ltv: "65%",
    utilization: 45,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(42,90,218,0.15)" stroke="#2A5ADA" strokeWidth="1.5" />
        <path d="M12 5L15 7V10L12 12L9 10V7L12 5Z" fill="#2A5ADA" />
        <path d="M12 12L15 14V17L12 19L9 17V14L12 12Z" fill="#2A5ADA" opacity="0.7" />
      </svg>
    ),
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    color: "#FF007A",
    totalSupply: "$27.4M",
    totalBorrow: "$8.9M",
    supplyApy: "4.88%",
    borrowApy: "6.50%",
    ltv: "60%",
    utilization: 32,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(255,0,122,0.1)" stroke="#FF007A" strokeWidth="1.5" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FF007A">🦄</text>
      </svg>
    ),
  },
];

export function Markets() {
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
                LENDING MARKETS
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
              Top lending markets
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.6, maxWidth: 460 }}>
              Supply assets to earn yield or use them as collateral to borrow stablecoins. Rates update every block.
            </p>
          </div>

          <button
            style={{
              background: "rgba(0,232,150,0.06)",
              color: "#00e896",
              padding: "12px 24px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              border: "1px solid rgba(0,232,150,0.2)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.12)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.06)";
            }}
          >
            View All Markets →
          </button>
        </div>

        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.4fr 1.4fr 1fr 1fr 1fr 1fr",
            padding: "12px 24px",
            borderRadius: 12,
            marginBottom: 10,
          }}
        >
          {["Asset", "Total Supply", "Total Borrow", "Supply APY", "Borrow APY", "LTV", "Utilization"].map((h) => (
            <div key={h} style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>
              {h}
            </div>
          ))}
        </div>

        {/* Market rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {markets.map((m) => (
            <div
              key={m.symbol}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.4fr 1.4fr 1fr 1fr 1fr 1fr",
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.08)",
                borderRadius: 16,
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.22)";
                el.style.background = "linear-gradient(135deg, rgba(0,40,24,0.85) 0%, rgba(0,25,15,0.9) 100%)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.08)";
                el.style.background = "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)";
                el.style.transform = "translateX(0)";
              }}
            >
              {/* Asset */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {m.icon}
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600, fontSize: 15 }}>{m.symbol}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>{m.name}</div>
                </div>
              </div>

              {/* Total Supply */}
              <div style={{ color: "#ffffff", fontWeight: 500, fontSize: 14 }}>{m.totalSupply}</div>

              {/* Total Borrow */}
              <div style={{ color: "#ffffff", fontWeight: 500, fontSize: 14 }}>{m.totalBorrow}</div>

              {/* Supply APY */}
              <div style={{ color: "#00e896", fontWeight: 600, fontSize: 14 }}>{m.supplyApy}</div>

              {/* Borrow APY */}
              <div style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: 14 }}>{m.borrowApy}</div>

              {/* LTV */}
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{m.ltv}</div>

              {/* Utilization bar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{m.utilization}%</div>
                <div
                  style={{
                    height: 4,
                    width: "100%",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 100,
                    overflow: "hidden",
                    maxWidth: 80,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${m.utilization}%`,
                      background: m.utilization > 70
                        ? "linear-gradient(90deg, #ff6b35, #ff4040)"
                        : "linear-gradient(90deg, #00e896, #00c278)",
                      borderRadius: 100,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
