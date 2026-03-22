import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();
  const handleViewMarket = () => {
    const section = document.getElementById("markets");
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #061410 0%, #040d08 100%)",
        padding: "80px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,40,25,0.8) 0%, rgba(0,25,15,0.9) 100%)",
            border: "1px solid rgba(0,232,150,0.15)",
            borderRadius: 32,
            padding: "72px 80px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: -100,
              left: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,232,150,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              right: -50,
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,80,48,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Top border glow line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(0,232,150,0.5), rgba(0,232,150,0.3), transparent)",
            }}
          />

          <div style={{ position: "relative", maxWidth: 560 }}>
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
              Run the full{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00e896, #00c278)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sepolia demo flow
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7 }}>
              VaultLend is fully onchain, but this version is a Sepolia demonstration that uses
              faucet-minted mock assets. It is designed to show approvals, collateral deposits,
              borrowing, repaying, and withdrawals without requiring real funds.
            </p>
          </div>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, minWidth: 220 }}>
            <button
              onClick={() => navigate("/app")}
              style={{
                background: "linear-gradient(135deg, #00e896, #00c278)",
                color: "#030f08",
                padding: "16px 36px",
                borderRadius: 16,
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(0,232,150,0.4)",
                transition: "all 0.2s ease",
                textAlign: "center",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 45px rgba(0,232,150,0.55)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,232,150,0.4)";
              }}
            >
              Launch App →
            </button>
            <button
              onClick={handleViewMarket}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                padding: "14px 36px",
                borderRadius: 16,
                fontWeight: 500,
                fontSize: 15,
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textAlign: "center",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              View Market
            </button>

            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, textAlign: "center" }}>
              Sepolia demo • Mock assets only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
