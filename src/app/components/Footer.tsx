const footerLinks = {
  Protocol: ["Markets", "Borrow", "Earn", "Liquidations", "Governance"],
  Developers: ["Documentation", "GitHub", "Bug Bounty", "Audits", "Brand Kit"],
  Community: ["Discord", "Twitter / X", "Telegram", "Blog", "Newsletter"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#030b07",
        borderTop: "1px solid rgba(0,232,150,0.08)",
        padding: "80px 0 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Top section */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #00e896, #00b860)",
                  boxShadow: "0 0 16px rgba(0,232,150,0.5)",
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                  <path d="M9 5.5L12.5 7.5V11.5L9 13.5L5.5 11.5V7.5L9 5.5Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <span style={{ color: "#ffffff", fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>
                Verdant<span style={{ color: "#00e896" }}>Fi</span>
              </span>
            </div>

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
              A decentralized, non-custodial lending protocol enabling crypto-backed borrowing without selling your assets.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Twitter", path: "M4 4L12 12M12 4L4 12" },
                { label: "Discord", path: "M8 7C8 7 6 8 6 10C6 12 8 13 8 13M12 7C12 7 14 8 14 10C14 12 12 13 12 13M7 15C7 15 9 16 10 16C11 16 13 15 13 15" },
                { label: "GitHub", path: "M8 3C5.24 3 3 5.24 3 8C3 10.19 4.43 12.05 6.43 12.7C6.68 12.74 6.77 12.59 6.77 12.46V11.44C5.34 11.74 5.04 10.74 5.04 10.74C4.81 10.17 4.48 10.02 4.48 10.02C4.02 9.71 4.51 9.72 4.51 9.72C5.02 9.76 5.28 10.24 5.28 10.24C5.73 11.01 6.49 10.79 6.78 10.67C6.82 10.34 6.95 10.12 7.1 10C5.9 9.88 4.63 9.41 4.63 7.37C4.63 6.78 4.83 6.3 5.18 5.93C5.13 5.81 4.95 5.26 5.23 4.53C5.23 4.53 5.66 4.4 6.77 5.1C7.23 4.97 7.72 4.9 8.2 4.9C8.68 4.9 9.17 4.97 9.63 5.1C10.74 4.4 11.17 4.53 11.17 4.53C11.45 5.26 11.27 5.81 11.22 5.93C11.57 6.3 11.77 6.78 11.77 7.37C11.77 9.42 10.5 9.88 9.29 10C9.48 10.16 9.65 10.49 9.65 11V12.46C9.65 12.59 9.74 12.74 9.99 12.7C11.97 12.05 13 10.19 13 8C13 5.24 11.09 3 8 3Z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(0,232,150,0.06)",
                    border: "1px solid rgba(0,232,150,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(0,232,150,0.12)";
                    el.style.borderColor = "rgba(0,232,150,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(0,232,150,0.06)";
                    el.style.borderColor = "rgba(0,232,150,0.12)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={s.path} stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  marginBottom: 20,
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "block",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#00e896";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
            © 2026 VerdantFi Protocol. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(0,232,150,0.06)",
                borderRadius: 8,
                padding: "6px 12px",
                border: "1px solid rgba(0,232,150,0.12)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00e896",
                  boxShadow: "0 0 6px #00e896",
                  display: "inline-block",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>All systems operational</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
              Built on Ethereum
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
}
