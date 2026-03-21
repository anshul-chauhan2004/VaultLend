const stats = [
  {
    label: "Total Value Locked",
    value: "$842M",
    sub: "+12.4% this month",
    positive: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L19 6V16L11 20L3 16V6L11 2Z" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <path d="M11 7V15M8 10L11 7L14 10" stroke="#00e896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Available Liquidity",
    value: "$394M",
    sub: "Across all markets",
    positive: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <path d="M7 14C7 14 8.5 11 11 11C13.5 11 15 14 15 14" stroke="#00e896" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="8" r="1.5" fill="#00e896" />
      </svg>
    ),
  },
  {
    label: "Best Borrow APY",
    value: "3.2%",
    sub: "USDC stable rate",
    positive: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 15L8 9L12 13L19 5" stroke="#00e896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="5" r="2" fill="rgba(0,232,150,0.2)" stroke="#00e896" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Supported Assets",
    value: "24+",
    sub: "Cross-chain collateral",
    positive: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <rect x="12" y="3" width="7" height="7" rx="2" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <rect x="3" y="12" width="7" height="7" rx="2" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <rect x="12" y="12" width="7" height="7" rx="2" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
      </svg>
    ),
  },
];

export function Stats() {
  return (
    <section
      style={{
        background: "#040d08",
        padding: "0 0 80px",
        position: "relative",
      }}
    >
      {/* Divider line with glow */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,232,150,0.2), rgba(0,232,150,0.4), rgba(0,232,150,0.2), transparent)",
          marginBottom: 64,
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "linear-gradient(135deg, rgba(0,30,18,0.8) 0%, rgba(0,20,12,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 20,
                padding: "28px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.3)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,232,150,0.08)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Corner accent */}
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
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(0,232,150,0.08)",
                  border: "1px solid rgba(0,232,150,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {stat.icon}
              </div>

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
                {stat.value}
              </div>

              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 6 }}>
                {stat.label}
              </div>

              <div
                style={{
                  color: stat.positive ? "#00e896" : "rgba(255,255,255,0.3)",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {stat.positive && "↑ "}{stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
