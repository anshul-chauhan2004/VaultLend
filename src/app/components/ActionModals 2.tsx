import React, { useState } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";
import {
  useDepositCollateral,
  useWithdrawCollateral,
  useBorrow,
  useRepay,
  useDeposit,
  useWithdraw,
  useLiquidate,
} from "@/hooks/useProtocolActions";
import { useTokenApproval, useTokenBalance } from "@/hooks/useTokenApproval";
import { MARKET_TOKENS } from "@/config/tokens";

interface ActionModalsProps {
  activeModal: string;
  onClose: () => void;
}

export function ActionModals({ activeModal, onClose }: ActionModalsProps) {
  const { address } = useAccount();
  const [amount, setAmount] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  // Action hooks
  const depositCollateral = useDepositCollateral();
  const withdrawCollateral = useWithdrawCollateral();
  const borrow = useBorrow();
  const repay = useRepay();
  const deposit = useDeposit();
  const withdraw = useWithdraw();
  const liquidate = useLiquidate();

  // Token approval hooks
  const collateralApproval = useTokenApproval(
    MARKET_TOKENS.collateral.address,
  );
  const borrowTokenApproval = useTokenApproval(
    MARKET_TOKENS.borrow.address,
  );

  const collateralBalance = useTokenBalance(MARKET_TOKENS.collateral.address);
  const borrowBalance = useTokenBalance(MARKET_TOKENS.borrow.address);

  const handleAction = (actionType: string) => {
    const amountInUnits = BigInt(Math.floor(parseFloat(amount) * Math.pow(10, MARKET_TOKENS.collateral.decimals)));

    switch (actionType) {
      case "depositCollateral":
        depositCollateral.deposit(amountInUnits);
        break;
      case "withdrawCollateral":
        withdrawCollateral.withdraw(amountInUnits);
        break;
      case "borrow":
        const borrowAmount = BigInt(Math.floor(parseFloat(amount) * Math.pow(10, MARKET_TOKENS.borrow.decimals)));
        borrow.borrow(borrowAmount);
        break;
      case "repay":
        const repayAmount = BigInt(Math.floor(parseFloat(amount) * Math.pow(10, MARKET_TOKENS.borrow.decimals)));
        repay.repay(repayAmount);
        break;
      case "supply":
        const supplyAmount = BigInt(Math.floor(parseFloat(amount) * Math.pow(10, MARKET_TOKENS.borrow.decimals)));
        deposit.deposit(supplyAmount);
        break;
    }

    setAmount("");
  };

  // Overlay and modal styling
  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, rgba(0,30,20,0.95) 0%, rgba(0,16,10,0.98) 100%)",
    border: "1px solid rgba(0,232,150,0.2)",
    borderRadius: 24,
    padding: "32px",
    maxWidth: "480px",
    width: "90%",
    maxHeight: "85vh",
    overflow: "auto",
  };

  const closeModal = () => {
    setAmount("");
    setSelectedUser("");
    onClose();
  };

  // Render nothing if no modal is active
  if (!activeModal) return null;

  return (
    <div style={overlayStyle} onClick={closeModal}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
            }}
          >
            {activeModal === "depositCollateral" && "Deposit Collateral"}
            {activeModal === "withdrawCollateral" && "Withdraw Collateral"}
            {activeModal === "borrow" && "Borrow USDC"}
            {activeModal === "repay" && "Repay Debt"}
            {activeModal === "supply" && "Supply Liquidity"}
            {activeModal === "withdrawLiquidity" && "Withdraw Liquidity"}
            {activeModal === "liquidate" && "Liquidate Position"}
          </h3>
          <button
            onClick={closeModal}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.5)",
              fontSize: 24,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        {activeModal === "depositCollateral" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.collateral.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 20 }}>
              Balance: {(Number(collateralBalance.balance) / Math.pow(10, MARKET_TOKENS.collateral.decimals)).toFixed(4)} {MARKET_TOKENS.collateral.symbol}
            </p>
            <button
              onClick={() => handleAction("depositCollateral")}
              disabled={!amount || depositCollateral.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !depositCollateral.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !depositCollateral.isPending ? "pointer" : "not-allowed",
              }}
            >
              {depositCollateral.isPending ? "Depositing..." : "Deposit Collateral"}
            </button>
          </div>
        )}

        {activeModal === "withdrawCollateral" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.collateral.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <button
              onClick={() => handleAction("withdrawCollateral")}
              disabled={!amount || withdrawCollateral.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !withdrawCollateral.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !withdrawCollateral.isPending ? "pointer" : "not-allowed",
              }}
            >
              {withdrawCollateral.isPending ? "Withdrawing..." : "Withdraw Collateral"}
            </button>
          </div>
        )}

        {activeModal === "borrow" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.borrow.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 20 }}>
              This action will reduce your health factor
            </p>
            <button
              onClick={() => handleAction("borrow")}
              disabled={!amount || borrow.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !borrow.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !borrow.isPending ? "pointer" : "not-allowed",
              }}
            >
              {borrow.isPending ? "Borrowing..." : "Borrow USDC"}
            </button>
          </div>
        )}

        {activeModal === "repay" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.borrow.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 20 }}>
              Balance: {(Number(borrowBalance.balance) / Math.pow(10, MARKET_TOKENS.borrow.decimals)).toFixed(4)} {MARKET_TOKENS.borrow.symbol}
            </p>
            <button
              onClick={() => handleAction("repay")}
              disabled={!amount || repay.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !repay.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !repay.isPending ? "pointer" : "not-allowed",
              }}
            >
              {repay.isPending ? "Repaying..." : "Repay Debt"}
            </button>
          </div>
        )}

        {activeModal === "supply" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.borrow.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 20 }}>
              Earn 4.50% APY on your USDC supply
            </p>
            <button
              onClick={() => handleAction("supply")}
              disabled={!amount || deposit.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !deposit.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !deposit.isPending ? "pointer" : "not-allowed",
              }}
            >
              {deposit.isPending ? "Supplying..." : "Supply Liquidity"}
            </button>
          </div>
        )}

        {activeModal === "withdrawLiquidity" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Amount ({MARKET_TOKENS.borrow.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <button
              onClick={() => handleAction("withdrawLiquidity")}
              disabled={!amount || withdraw.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && !withdraw.isPending ? "linear-gradient(135deg, #00e896, #00c278)" : "rgba(0,232,150,0.3)",
                color: "#030f08",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && !withdraw.isPending ? "pointer" : "not-allowed",
              }}
            >
              {withdraw.isPending ? "Withdrawing..." : "Withdraw Liquidity"}
            </button>
          </div>
        )}

        {activeModal === "liquidate" && (
          <div>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              User Address
            </label>
            <input
              type="text"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              placeholder="0x..."
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 14,
              }}
            />
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 12 }}>
              Repay Amount ({MARKET_TOKENS.borrow.symbol})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(0,232,150,0.05)",
                border: "1px solid rgba(0,232,150,0.2)",
                borderRadius: 12,
                color: "#ffffff",
                marginBottom: 16,
                fontSize: 16,
              }}
            />
            <button
              onClick={async () => {
                const repayAmount = BigInt(Math.floor(parseFloat(amount) * Math.pow(10, MARKET_TOKENS.borrow.decimals)));
                liquidate.liquidate(selectedUser as Address, repayAmount, address as Address);
              }}
              disabled={!amount || !selectedUser || liquidate.isPending}
              style={{
                width: "100%",
                padding: "12px",
                background: amount && selectedUser && !liquidate.isPending ? "linear-gradient(135deg, #ff6666, #ff4444)" : "rgba(255,100,100,0.3)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: amount && selectedUser && !liquidate.isPending ? "pointer" : "not-allowed",
              }}
            >
              {liquidate.isPending ? "Liquidating..." : "Execute Liquidation"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
