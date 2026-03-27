import React, { useState } from "react";
import { useAccount } from "wagmi";
import { usePoolData, useAccountData, getHealthFactorState } from "@/hooks/useProtocol";
import { formatTokenAmount, MARKET_TOKENS } from "@/config/tokens";
import { AccountStatus } from "./AccountStatus";
import { ActionModals } from "./ActionModals";

export function Dashboard() {
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
            Pool Statistics
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
                Total USDC supplied
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
                Total USDC borrowed
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
                {(pool.utilization * 100).toFixed(1)}%
              </p>
              <div
                style={{
                  background: "rgba(0,232,150,0.1)",
                  height: 4,
                  borderRadius: 2,
                  marginTop: 12,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(90deg, #00e896, #00c278)",
                    height: "100%",
                    width: `${pool.utilization * 100}%`,
                  }}
                />
              </div>
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
                {(pool.supplyAPY * 100).toFixed(2)}%
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>Earn on USDC supplied</p>
            </div>

            {/* Borrow APY */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,25,15,0.8) 0%, rgba(0,16,10,0.9) 100%)",
                border: "1px solid rgba(0,232,150,0.1)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>Borrow APY</p>
              <p style={{ color: "#00e896", fontSize: 24, fontWeight: 700 }}>
                {(pool.borrowAPY * 100).toFixed(2)}%
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 8 }}>Cost to borrow USDC</p>
            </div>
          </div>
        </div>

        {/* Account Status & Actions */}
        {isConnected && <AccountStatus account={account} hfState={hfState} onActionClick={setActiveModal} />}

        {/* Action Modals */}
        {activeModal && <ActionModals activeModal={activeModal} onClose={() => setActiveModal(null)} />}
      </div>
    </div>
  );
}
