const features = [
  {
    title: "Deposit Collateral",
    desc: "Lock your ETH, WBTC, stETH, or any supported asset as collateral. Your assets remain on-chain and fully transparent at all times.",
    tag: "Step 01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L24 8V20L14 25L4 20V8L14 3Z" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <path d="M14 9V19M10 13H18" stroke="#00e896" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    highlight: "Multi-collateral",
  },
  {
    title: "Borrow USDC Instantly",
    desc: "Access up to 80% of your collateral value as USDC. Funds arrive in your wallet within seconds — no credit checks, no paperwork.",
    tag: "Step 02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#00e896" strokeWidth="1.5" fill="rgba(0,232,150,0.1)" />
        <text x="14" y="19" textAnchor="middle" fontSize="12" fontWeight="700" fill="#00e896">$</text>
      </svg>
    ),
    highlight: "Up to 80% LTV",
  },
  {
    title: "Real-time Health Factor",
    desc: "Monitor your position health with live updates. Get alerts before liquidation thresholds are reached so you always stay protected.",
    tag: "Step 03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14H8L10 8L13 20L16 12L18 16H24" stroke="#00e896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: "Live monitoring",
  },
  {
    title: "Flexible Repayment",
    desc: "Repay your loan anytime — partially or in full — with no early repayment penalties. Interest accrues per block for maximum precision.",
    tag: "Step 04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M22 10C22 10 20 6 14 6C8.5 6 5 10.5 5 14C5 18 8.5 22 14 22C18 22 21 19.5 22 17" stroke="#00e896" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 10H22V6" stroke="#00e896" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: "No penalties",
  },
];

export function Features() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #040d08 0%, #061410 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,60,35,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
              HOW IT WORKS
            </span>
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Borrow in four simple steps
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            VerdantFi makes DeFi lending straightforward. No complex interfaces, just clean, powerful tools for managing your crypto-backed loans.
          </p>
        </div>

        {/* Feature cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {features.map((feat, i) => (
            <div
              key={feat.title}
              style={{
                background: "linear-gradient(160deg, rgba(0,28,18,0.9) 0%, rgba(0,16,10,0.95) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 24,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.28)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,232,150,0.07)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(0,232,150,0.1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Step number background */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontSize: 56,
                  fontWeight: 800,
                  color: "rgba(0,232,150,0.04)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Top glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, rgba(0,232,150,0.3), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              />

              {/* Step tag */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#00e896",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  opacity: 0.7,
                }}
              >
                {feat.tag}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "rgba(0,232,150,0.08)",
                  border: "1px solid rgba(0,232,150,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {feat.icon}
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                }}
              >
                {feat.title}
              </h3>

              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                {feat.desc}
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(0,232,150,0.08)",
                  borderRadius: 8,
                  padding: "5px 10px",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#00e896",
                    display: "inline-block",
                  }}
                />
                <span style={{ color: "#00e896", fontSize: 12, fontWeight: 500 }}>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
