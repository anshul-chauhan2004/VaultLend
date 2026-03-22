import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const [showDropdown, setShowDropdown] = useState(false);

  const formatAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setShowDropdown(false);
    }
  };

  const isAppRoute = location.pathname.startsWith("/app") || location.pathname.startsWith("/dashboard");

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
        {/* Logo with App Link */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
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
            Vault<span style={{ color: "#00e896" }}>Lend</span>
          </span>
        </button>

        {/* Right side: App Link + Wallet */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {isConnected && (
            <button
              onClick={() => navigate(isAppRoute ? "/" : "/app")}
              style={{
                background: "transparent",
                border: "1px solid rgba(0, 232, 150, 0.3)",
                color: "#00e896",
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {isAppRoute ? "Home" : "Open App"}
            </button>
          )}

          {isConnected && address ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                  background: "rgba(0, 232, 150, 0.1)",
                  border: "1px solid rgba(0, 232, 150, 0.3)",
                  color: "#00e896",
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>●</span> {formatAddress(address)}
              </button>

              {showDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: 8,
                    background: "rgba(4, 12, 8, 0.95)",
                    border: "1px solid rgba(0, 232, 150, 0.2)",
                    borderRadius: 8,
                    minWidth: 200,
                    zIndex: 1000,
                  }}
                >
                  <button
                    onClick={handleCopyAddress}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: 14,
                      borderBottom: "1px solid rgba(0, 232, 150, 0.1)",
                    }}
                  >
                    📋 Copy Address
                  </button>
                  <button
                    onClick={() => {
                      switchChain?.({ chainId: 11155111 });
                      setShowDropdown(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: 14,
                      borderBottom: "1px solid rgba(0, 232, 150, 0.1)",
                    }}
                  >
                    🔄 Switch Network
                  </button>
                  <button
                    onClick={() => {
                      disconnect();
                      setShowDropdown(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "none",
                      border: "none",
                      color: "#ff6b6b",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    🚪 Disconnect
                  </button>
                </div>
              )}
            </div>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>
    </nav>
  );
}
