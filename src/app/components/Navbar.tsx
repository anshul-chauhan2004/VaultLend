export function Navbar() {
  return (
    <nav
      style={{
        background: "rgba(4, 12, 8, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 230, 150, 0.08)",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            style={{
              background: "linear-gradient(135deg, #00e896, #00b860)",
              boxShadow: "0 0 16px rgba(0, 232, 150, 0.5)",
            }}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
              <path d="M9 5.5L12.5 7.5V11.5L9 13.5L5.5 11.5V7.5L9 5.5Z" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
          <span style={{ color: "#ffffff", letterSpacing: "-0.02em" }} className="text-lg font-semibold">
            Verdant<span style={{ color: "#00e896" }}>Fi</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {["Markets", "Borrow", "Earn", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              style={{ color: "rgba(255,255,255,0.6)" }}
              className="text-sm hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          style={{
            background: "linear-gradient(135deg, #00e896, #00c278)",
            boxShadow: "0 0 20px rgba(0, 232, 150, 0.35)",
            color: "#030f08",
          }}
          className="px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
        >
          Launch App
        </button>
      </div>
    </nav>
  );
}
