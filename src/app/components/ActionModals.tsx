import { useEffect, useMemo, useState } from "react";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import { CONTRACTS, NETWORK_NAME } from "@/config/contracts";
import { formatTokenAmount, MARKET_TOKENS, TokenMetadata } from "@/config/tokens";
import { useAccountData, usePoolData } from "@/hooks/useProtocol";
import {
  useBorrow,
  useDeposit,
  useDepositCollateral,
  useLiquidate,
  useRepay,
  useWithdrawCollateral,
  useWithdrawLiquidity,
} from "@/hooks/useProtocolActions";
import {
  useTokenAllowance,
  useTokenApproval,
  useTokenBalance,
} from "@/hooks/useTokenApproval";

type ModalAction =
  | "depositCollateral"
  | "withdrawCollateral"
  | "supply"
  | "withdrawLiquidity"
  | "borrow"
  | "repay"
  | "liquidate";

type ActionConfig = {
  title: string;
  description: string;
  token: (typeof MARKET_TOKENS)[keyof typeof MARKET_TOKENS];
  submitLabel: string;
  approvalToken?: "weth" | "usdc";
  amountHint: string;
};

type TxState = {
  statusLabel: string | null;
  hash?: string;
  explorerUrl?: string | null;
  error?: string | null;
};

const ACTION_CONFIG: Record<ModalAction, ActionConfig> = {
  depositCollateral: {
    title: "Deposit Collateral",
    description: "Approve the selected collateral asset, then lock it so you can open or expand a borrow.",
    token: MARKET_TOKENS.collateral,
    submitLabel: "Deposit Asset",
    approvalToken: "weth",
    amountHint: "Wallet balance",
  },
  withdrawCollateral: {
    title: "Withdraw Collateral",
    description: "Withdraw unlocked collateral while keeping your health factor in a safe range.",
    token: MARKET_TOKENS.collateral,
    submitLabel: "Withdraw Asset",
    amountHint: "Deposited balance",
  },
  supply: {
    title: "Supply Liquidity",
    description: "Approve the selected market asset, then add it to the pool and earn the live supply yield.",
    token: MARKET_TOKENS.borrow,
    submitLabel: "Supply Asset",
    approvalToken: "usdc",
    amountHint: "Wallet balance",
  },
  withdrawLiquidity: {
    title: "Withdraw Liquidity",
    description: "Withdraw available pool liquidity back to your wallet.",
    token: MARKET_TOKENS.borrow,
    submitLabel: "Withdraw Liquidity",
    amountHint: "Available pool balance",
  },
  borrow: {
    title: "Open Borrow",
    description: "Borrow against your deposited collateral at the current live market rate.",
    token: MARKET_TOKENS.borrow,
    submitLabel: "Borrow Asset",
    amountHint: "Borrow limit",
  },
  repay: {
    title: "Repay Balance",
    description: "Approve the selected market asset, then repay your debt to improve your health factor.",
    token: MARKET_TOKENS.borrow,
    submitLabel: "Repay Debt",
    approvalToken: "usdc",
    amountHint: "Outstanding debt",
  },
  liquidate: {
    title: "Liquidate Position",
    description: "Approve the market asset, then repay up to the close factor and receive discounted collateral.",
    token: MARKET_TOKENS.borrow,
    submitLabel: "Liquidate",
    approvalToken: "usdc",
    amountHint: "Repay amount",
  },
};

function isModalAction(value: string): value is ModalAction {
  return value in ACTION_CONFIG;
}

function formatDisplayAmount(amount: bigint, decimals: number, precision = 4) {
  return `${formatTokenAmount(amount, decimals, precision)}`;
}

function toInputAmount(amount: bigint, decimals: number) {
  const divisor = 10n ** BigInt(decimals);
  const whole = amount / divisor;
  const fraction = (amount % divisor).toString().padStart(decimals, "0");
  const trimmedFraction = fraction.replace(/0+$/, "");
  return trimmedFraction ? `${whole.toString()}.${trimmedFraction}` : whole.toString();
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Unable to process this transaction";
}

function TransactionPanel({
  label,
  tx,
}: {
  label: string;
  tx: TxState;
}) {
  if (!tx.statusLabel && !tx.error) {
    return null;
  }

  return (
    <div
      style={{
        padding: "14px 16px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{label}</p>
      {tx.statusLabel && (
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>{tx.statusLabel}</p>
      )}
      {tx.error && <p style={{ color: "#ff9f9f", fontSize: 12, marginTop: 6 }}>{tx.error}</p>}
      {tx.hash && tx.explorerUrl && (
        <a
          href={tx.explorerUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00e896", fontSize: 12, display: "inline-block", marginTop: 8 }}
        >
          View on Etherscan
        </a>
      )}
    </div>
  );
}

export function ActionModals({
  activeModal,
  onClose,
  disabled = false,
  collateralAsset,
  marketAsset,
}: {
  activeModal: string;
  onClose: () => void;
  disabled?: boolean;
  collateralAsset: TokenMetadata;
  marketAsset: TokenMetadata;
}) {
  const { address } = useAccount();
  const [amount, setAmount] = useState("");
  const [targetAddress, setTargetAddress] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const accountData = useAccountData().data;
  const poolData = usePoolData().data;

  const depositCollateral = useDepositCollateral();
  const withdrawCollateral = useWithdrawCollateral();
  const deposit = useDeposit();
  const withdrawLiquidity = useWithdrawLiquidity();
  const borrow = useBorrow();
  const repay = useRepay();
  const liquidate = useLiquidate();

  const wethApproval = useTokenApproval(MARKET_TOKENS.collateral.address, CONTRACTS.LENDING_POOL);
  const usdcApproval = useTokenApproval(MARKET_TOKENS.borrow.address, CONTRACTS.LENDING_POOL);

  const wethAllowance = useTokenAllowance(MARKET_TOKENS.collateral.address, CONTRACTS.LENDING_POOL);
  const usdcAllowance = useTokenAllowance(MARKET_TOKENS.borrow.address, CONTRACTS.LENDING_POOL);
  const wethBalance = useTokenBalance(MARKET_TOKENS.collateral.address);
  const usdcBalance = useTokenBalance(MARKET_TOKENS.borrow.address);

  const config = isModalAction(activeModal) ? ACTION_CONFIG[activeModal] : null;
  const selectedAsset =
    activeModal === "depositCollateral" || activeModal === "withdrawCollateral"
      ? collateralAsset
      : marketAsset;

  const parsedAmount = useMemo(() => {
    if (!config || amount.trim() === "") return 0n;

    try {
      return parseUnits(amount, config.token.decimals);
    } catch {
      return null;
    }
  }, [amount, config]);

  const approvalTx =
    config?.approvalToken === "weth"
      ? wethApproval
      : config?.approvalToken === "usdc"
        ? usdcApproval
        : null;

  const allowance =
    config?.approvalToken === "weth"
      ? wethAllowance.allowance
      : config?.approvalToken === "usdc"
        ? usdcAllowance.allowance
        : 0n;

  const currentTx = useMemo(() => {
    switch (activeModal) {
      case "depositCollateral":
        return depositCollateral;
      case "withdrawCollateral":
        return withdrawCollateral;
      case "supply":
        return deposit;
      case "withdrawLiquidity":
        return withdrawLiquidity;
      case "borrow":
        return borrow;
      case "repay":
        return repay;
      case "liquidate":
        return liquidate;
      default:
        return null;
    }
  }, [
    activeModal,
    borrow,
    deposit,
    depositCollateral,
    liquidate,
    repay,
    withdrawCollateral,
    withdrawLiquidity,
  ]);

  const maxAmount = useMemo(() => {
    switch (activeModal) {
      case "depositCollateral":
        return wethBalance.balance;
      case "withdrawCollateral":
        return accountData.collateral;
      case "supply":
        return usdcBalance.balance;
      case "withdrawLiquidity":
        return poolData.availableLiquidity;
      case "borrow":
        return accountData.availableToBorrow < poolData.availableLiquidity
          ? accountData.availableToBorrow
          : poolData.availableLiquidity;
      case "repay":
        return accountData.debt < usdcBalance.balance ? accountData.debt : usdcBalance.balance;
      case "liquidate": {
        const closeFactorDebt = accountData.debt / 2n;
        return closeFactorDebt < usdcBalance.balance ? closeFactorDebt : usdcBalance.balance;
      }
      default:
        return 0n;
    }
  }, [accountData, activeModal, poolData.availableLiquidity, usdcBalance.balance, wethBalance.balance]);

  const primaryInfo = useMemo(() => {
    switch (activeModal) {
      case "withdrawCollateral":
        return {
          label: "Deposited collateral",
          amount: accountData.collateral,
          decimals: collateralAsset.decimals,
          symbol: collateralAsset.symbol,
        };
      case "withdrawLiquidity":
        return {
          label: "Available pool balance",
          amount: poolData.availableLiquidity,
          decimals: marketAsset.decimals,
          symbol: marketAsset.symbol,
        };
      case "borrow":
        return {
          label: "Borrow limit",
          amount: accountData.availableToBorrow,
          decimals: marketAsset.decimals,
          symbol: marketAsset.symbol,
        };
      case "repay":
        return {
          label: "Outstanding debt",
          amount: accountData.debt,
          decimals: marketAsset.decimals,
          symbol: marketAsset.symbol,
        };
      case "liquidate":
        return {
          label: "Repay amount",
          amount: maxAmount,
          decimals: marketAsset.decimals,
          symbol: marketAsset.symbol,
        };
      default:
        return {
          label: config?.amountHint ?? "Available amount",
          amount: maxAmount,
          decimals: selectedAsset.decimals,
          symbol: selectedAsset.symbol,
        };
    }
  }, [
    accountData.availableToBorrow,
    accountData.collateral,
    accountData.debt,
    activeModal,
    collateralAsset.decimals,
    collateralAsset.symbol,
    config?.amountHint,
    marketAsset.decimals,
    marketAsset.symbol,
    maxAmount,
    poolData.availableLiquidity,
    selectedAsset.decimals,
    selectedAsset.symbol,
  ]);

  const secondaryInfo = useMemo(() => {
    switch (activeModal) {
      case "repay":
        return {
          label: "Repayable now",
          amount: maxAmount,
          decimals: marketAsset.decimals,
          symbol: marketAsset.symbol,
        };
      default:
        return {
          label: "Wallet Balance",
          amount:
            selectedAsset.symbol === MARKET_TOKENS.collateral.symbol
              ? wethBalance.balance
              : usdcBalance.balance,
          decimals: selectedAsset.decimals,
          symbol: selectedAsset.symbol,
        };
    }
  }, [
    activeModal,
    marketAsset.decimals,
    marketAsset.symbol,
    maxAmount,
    selectedAsset.decimals,
    selectedAsset.symbol,
    usdcBalance.balance,
    wethBalance.balance,
  ]);

  const needsApproval =
    !!approvalTx && parsedAmount !== null && parsedAmount > 0n && allowance < parsedAmount;

  useEffect(() => {
    setAmount("");
    setTargetAddress(address ?? "");
    setFormError(null);

    depositCollateral.reset();
    withdrawCollateral.reset();
    deposit.reset();
    withdrawLiquidity.reset();
    borrow.reset();
    repay.reset();
    liquidate.reset();
    wethApproval.reset();
    usdcApproval.reset();
  }, [activeModal, address]);

  if (!config || !currentTx) {
    return null;
  }

  const closeModal = () => {
    setFormError(null);
    depositCollateral.reset();
    withdrawCollateral.reset();
    deposit.reset();
    withdrawLiquidity.reset();
    borrow.reset();
    repay.reset();
    liquidate.reset();
    wethApproval.reset();
    usdcApproval.reset();
    onClose();
  };

  const setMax = () => {
    if (activeModal === "repay") {
      setAmount(toInputAmount(accountData.debt, marketAsset.decimals));
      return;
    }

    setAmount(toInputAmount(maxAmount, config.token.decimals));
  };

  const handleApprove = async () => {
    if (!approvalTx || parsedAmount === null || parsedAmount <= 0n) {
      setFormError("Enter a valid amount before approving.");
      return;
    }

    setFormError(null);

    try {
      await approvalTx.approve(parsedAmount);
    } catch {
      // Error state is handled by the transaction hook.
    }
  };

  const handleSubmit = async () => {
    if (parsedAmount === null) {
      setFormError("Enter a valid numeric amount.");
      return;
    }

    if (parsedAmount <= 0n) {
      setFormError("Amount must be greater than zero.");
      return;
    }

    if (activeModal === "repay") {
      if (parsedAmount > accountData.debt) {
        setFormError(`Amount exceeds your outstanding ${selectedAsset.symbol} debt.`);
        return;
      }

      if (parsedAmount > usdcBalance.balance) {
        setFormError(`Insufficient ${selectedAsset.symbol} balance to repay this amount.`);
        return;
      }
    } else if (parsedAmount > maxAmount) {
      setFormError(`Amount exceeds the available ${config.token.symbol} for this action.`);
      return;
    }

    if (needsApproval) {
      setFormError(`Approve ${config.token.symbol} before submitting this transaction.`);
      return;
    }

    setFormError(null);

    try {
      switch (activeModal) {
        case "depositCollateral":
          await depositCollateral.deposit(parsedAmount);
          break;
        case "withdrawCollateral":
          await withdrawCollateral.withdraw(parsedAmount);
          break;
        case "supply":
          await deposit.deposit(parsedAmount);
          break;
        case "withdrawLiquidity":
          await withdrawLiquidity.withdraw(parsedAmount);
          break;
        case "borrow":
          await borrow.borrow(parsedAmount);
          break;
        case "repay":
          await repay.repay(parsedAmount);
          break;
        case "liquidate":
          if (!address || !targetAddress) {
            setFormError("Connect your wallet and provide the borrower address.");
            return;
          }
          await liquidate.liquidate(targetAddress as `0x${string}`, parsedAmount, address);
          break;
      }
    } catch (error) {
      setFormError(getErrorMessage(error));
    }
  };

  const actionTxState: TxState = {
    statusLabel: currentTx.statusLabel,
    hash: currentTx.hash,
    explorerUrl: currentTx.explorerUrl,
    error: currentTx.error,
  };

  const approvalTxState: TxState = approvalTx
    ? {
        statusLabel: approvalTx.statusLabel,
        hash: approvalTx.hash,
        explorerUrl: approvalTx.explorerUrl,
        error: approvalTx.error,
      }
    : { statusLabel: null };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,8,5,0.72)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          borderRadius: 24,
          border: "1px solid rgba(0,232,150,0.14)",
          background: "linear-gradient(135deg, rgba(7,24,16,0.98) 0%, rgba(4,14,9,0.98) 100%)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.45)",
          padding: 28,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
          <div>
            <p style={{ color: "#00e896", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
              {NETWORK_NAME.toUpperCase()} MARKET
            </p>
            <h3 style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 10 }}>
              {config.title}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.64)", fontSize: 14, lineHeight: 1.6 }}>
              {config.description}
            </p>
          </div>
          <button
            onClick={closeModal}
            style={{
              alignSelf: "flex-start",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.6)",
              borderRadius: 999,
              width: 38,
              height: 38,
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            ×
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 11, marginBottom: 6 }}>
              Selected Asset
            </p>
            <p style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
              {selectedAsset.symbol}
            </p>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 11, marginBottom: 6 }}>
              {primaryInfo.label}
            </p>
            <p style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
              {formatDisplayAmount(primaryInfo.amount, primaryInfo.decimals)} {primaryInfo.symbol}
            </p>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 11, marginBottom: 6 }}>
              {secondaryInfo.label}
            </p>
            <p style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
              {formatDisplayAmount(secondaryInfo.amount, secondaryInfo.decimals)}{" "}
              {secondaryInfo.symbol}
            </p>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.46)", fontSize: 11, marginBottom: 6 }}>
              Health Factor
            </p>
            <p style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
              {Number.isFinite(accountData.healthFactor)
                ? accountData.healthFactor.toFixed(2)
                : "Infinite"}
            </p>
          </div>
        </div>

        {activeModal === "liquidate" && (
          <div style={{ marginBottom: 16 }}>
            <label
              htmlFor="borrower-address"
              style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 8 }}
            >
              Borrower Address
            </label>
            <input
              id="borrower-address"
              value={targetAddress}
              onChange={(event) => setTargetAddress(event.target.value)}
              placeholder="0x..."
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                fontSize: 14,
                outline: "none",
              }}
            />
          </div>
        )}

        <div style={{ marginBottom: 16 }}>
          <label
            htmlFor="token-amount"
            style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 8 }}
          >
            Amount ({selectedAsset.symbol})
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="token-amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder={`0.0 ${selectedAsset.symbol}`}
              inputMode="decimal"
              style={{
                width: "100%",
                padding: "16px 80px 16px 16px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                fontSize: 16,
                outline: "none",
              }}
            />
            <button
              onClick={setMax}
              type="button"
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                bottom: 10,
                padding: "0 12px",
                borderRadius: 12,
                border: "1px solid rgba(0,232,150,0.18)",
                background: "rgba(0,232,150,0.12)",
                color: "#00e896",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Max
            </button>
          </div>
        </div>

        {needsApproval && (
          <div
            style={{
              marginBottom: 16,
              padding: "12px 14px",
              borderRadius: 14,
              background: "rgba(255,196,0,0.08)",
              border: "1px solid rgba(255,196,0,0.18)",
            }}
          >
            <p style={{ color: "#ffd36a", fontSize: 13 }}>
              Token approval is required before this transaction can be submitted.
            </p>
          </div>
        )}

        {formError && (
          <div
            style={{
              marginBottom: 16,
              padding: "12px 14px",
              borderRadius: 14,
              background: "rgba(255,80,80,0.08)",
              border: "1px solid rgba(255,80,80,0.2)",
            }}
          >
            <p style={{ color: "#ff9f9f", fontSize: 13 }}>{formError}</p>
          </div>
        )}

        <div style={{ display: "grid", gap: 12 }}>
          {approvalTx && (
            <button
              onClick={() => void handleApprove()}
              disabled={disabled || approvalTx.isPending || parsedAmount === null || parsedAmount <= 0n}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: needsApproval ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                cursor:
                  disabled || approvalTx.isPending || parsedAmount === null || parsedAmount <= 0n
                    ? "not-allowed"
                    : "pointer",
                opacity: needsApproval ? 1 : 0.7,
              }}
            >
              {approvalTx.isPending
                ? `Approving ${selectedAsset.symbol}...`
                : `Approve ${selectedAsset.symbol}`}
            </button>
          )}

          <button
            onClick={() => void handleSubmit()}
            disabled={
              disabled ||
              currentTx.isPending ||
              parsedAmount === null ||
              parsedAmount <= 0n ||
              needsApproval
            }
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: 16,
              border: "none",
              background:
                disabled || needsApproval
                  ? "rgba(0,232,150,0.18)"
                  : "linear-gradient(135deg, #00e896, #00c278)",
              color: disabled || needsApproval ? "rgba(255,255,255,0.65)" : "#04120b",
              fontSize: 15,
              fontWeight: 800,
              cursor:
                disabled ||
                currentTx.isPending ||
                parsedAmount === null ||
                parsedAmount <= 0n ||
                needsApproval
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {currentTx.isPending ? `${config.submitLabel}...` : config.submitLabel}
          </button>
        </div>

        {disabled && (
          <p style={{ color: "#ffcc80", fontSize: 12, marginTop: 14 }}>
            Connect to the configured network with the active deployment before sending transactions.
          </p>
        )}

        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
          <TransactionPanel label="Approval Status" tx={approvalTxState} />
          <TransactionPanel label="Transaction Status" tx={actionTxState} />
        </div>
      </div>
    </div>
  );
}
