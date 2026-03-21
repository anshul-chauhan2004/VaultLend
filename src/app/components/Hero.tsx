import { HeroVisual } from "./HeroVisual";

export function Hero() {
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
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,232,150,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,232,150,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glow top-left */}
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

      {/* Ambient glow right */}
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

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12 flex items-center gap-12" style={{ minHeight: "calc(100vh - 80px)" }}>
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
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
            <span style={{ color: "#00e896", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em" }}>
              DECENTRALIZED LENDING PROTOCOL
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Borrow stablecoins{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00e896, #00c278)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              without selling
            </span>{" "}
            your crypto
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Deposit ETH, WBTC, or other crypto assets as collateral and instantly borrow USDC at competitive rates. 
            Monitor your health factor in real-time and stay in full control of your positions.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button
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
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(0,232,150,0.55), 0 8px 20px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,232,150,0.4), 0 4px 15px rgba(0,0,0,0.3)";
              }}
            >
              Launch App →
            </button>
            <button
              style={{
                background: "rgba(0,232,150,0.06)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: 14,
                fontWeight: 600,
                fontSize: 15,
                border: "1px solid rgba(0,232,150,0.2)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.12)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,232,150,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,232,150,0.06)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,232,150,0.2)";
              }}
            >
              View Markets
            </button>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10 5.5L15 6.3L11.5 9.7L12.4 14.7L8 12.3L3.6 14.7L4.5 9.7L1 6.3L6 5.5L8 1Z" fill="#00e896" opacity="0.8" />
              </svg>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Audited by Trail of Bits</span>
            </div>
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="6" width="12" height="9" rx="2" stroke="#00e896" strokeWidth="1.3" opacity="0.8" />
                <path d="M5 6V4.5C5 2.57 6.57 1 8.5 1S12 2.57 12 4.5V6" stroke="#00e896" strokeWidth="1.3" opacity="0.8" />
              </svg>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Non-custodial</span>
            </div>
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#00e896" strokeWidth="1.3" opacity="0.8" />
                <path d="M5.5 8L7 9.5L10.5 6" stroke="#00e896" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
              </svg>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>100% On-chain</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex-1 flex items-center justify-center" style={{ minHeight: 500 }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
