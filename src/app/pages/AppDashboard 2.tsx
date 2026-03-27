import { useState } from "react";
import { useAccount } from "wagmi";
import { usePoolData, useAccountData, getHealthFactorState } from "@/hooks/useProtocol";
import { formatTokenAmount, MARKET_TOKENS } from "@/config/tokens";
import { AccountStatus } from "../components/AccountStatus";
import { ActionModals } from "../components/ActionModals";

export function AppDashboard() {
  const { isConnected } = useAccount();
  const poolData = usePoolData();
  const accountData = useAccountData();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  if (!isConnected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          marginTop: "80px",
          background: "#040d08",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
          <p style={{ fontSize: 18, marginBottom: 12 }}>Please connect your wallet to continue</p>
          <p style={{ fontSize: 14 }}>VaultLend requires MetaMask to interact with the protocol</p>
        </div>
      </div>
    );
  }

  const pool = poolData.data;
  const account = accountData.data;
  const hfState = getHealthFactorState(account.healthFactor);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#040d08",
        padding: "120px 32px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Pool Statistics */}
        <div style={{ marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            WETH/USDC Market
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            {/* Total Liquidity */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Total Liquidity</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                ${(Number(pool.totalDeposits) / 1_000_000).toFixed(2)}M
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>
                USDC supplied
              </p>
            </div>

            {/* Total Borrows */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Total Borrows</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                ${(Number(pool.totalBorrows) / 1_000_000).toFixed(2)}M
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>
                USDC borrowed
              </p>
            </div>

            {/* Utilization */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Utilization</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                {pool.utilization.toFixed(1)}%
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>
                of supplied capital
              </p>
            </div>

            {/* Supply APY */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Supply APY</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                {pool.supplyAPY.toFixed(2)}%
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>
                earned on USDC
              </p>
            </div>

            {/* Borrow APR */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Borrow APR</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                {pool.borrowAPY.toFixed(2)}%
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>
                cost to borrow USDC
              </p>
            </div>
          </div>
        </div>

        {/* Market Parameters */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,25,15,0.5) 0%, rgba(0,16,10,0.6) 100%)",
            border: "1px solid rgba(0,232,150,0.1)",
            borderRadius: 16,
            padding: "24px",
            marginBottom: 60,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: "#00e896" }}>
            Market Parameters
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>LTV (Loan-to-Value)</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>75%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Liquidation Threshold</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>80%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Close Factor</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>50%</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Liquidation Bonus</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>8%</p>
            </div>
          </div>
        </div>

        {/* My Account */}
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          My Account
        </h2>
        <AccountStatus 
          account={account} 
          hfState={hfState}
          onActionClick={setActiveModal} 
        />
        {activeModal && (
          <ActionModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </div>
    </div>
  );
}
