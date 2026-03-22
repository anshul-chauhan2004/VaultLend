import { useEffect, useMemo, useState } from "react";
import type { BaseError, Hex } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { BLOCK_EXPLORER_URL } from "@/config/contracts";

export type TransactionStatus =
  | "idle"
  | "waiting_signature"
  | "pending"
  | "confirmed"
  | "failed";

function getErrorMessage(error: unknown) {
  if (!error) return "Unknown transaction error";
  if (typeof error === "string") return error;
  if (typeof error === "object" && error !== null && "shortMessage" in error) {
    return String((error as BaseError).shortMessage ?? "Transaction failed");
  }
  if (error instanceof Error) return error.message;
  return "Transaction failed";
}

export function useTrackedWrite() {
  const { writeContractAsync } = useWriteContract();
  const [hash, setHash] = useState<Hex | undefined>();
  const [status, setStatus] = useState<TransactionStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const receipt = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: !!hash,
    },
  });

  useEffect(() => {
    if (receipt.isLoading && hash) {
      setStatus("pending");
    }
  }, [hash, receipt.isLoading]);

  useEffect(() => {
    if (receipt.isSuccess) {
      setStatus("confirmed");
    }
  }, [receipt.isSuccess]);

  useEffect(() => {
    if (receipt.error) {
      setStatus("failed");
      setError(getErrorMessage(receipt.error));
    }
  }, [receipt.error]);

  const execute = async (config: Parameters<typeof writeContractAsync>[0]) => {
    setStatus("waiting_signature");
    setError(null);
    setHash(undefined);

    try {
      const nextHash = await writeContractAsync(config);
      setHash(nextHash);
      setStatus("pending");
      return nextHash;
    } catch (writeError) {
      setStatus("failed");
      setError(getErrorMessage(writeError));
      throw writeError;
    }
  };

  const reset = () => {
    setHash(undefined);
    setStatus("idle");
    setError(null);
  };

  const statusLabel = useMemo(() => {
    switch (status) {
      case "waiting_signature":
        return "Waiting for signature";
      case "pending":
        return "Transaction pending";
      case "confirmed":
        return "Transaction confirmed";
      case "failed":
        return "Transaction failed";
      default:
        return null;
    }
  }, [status]);

  return {
    execute,
    hash,
    explorerUrl: hash ? `${BLOCK_EXPLORER_URL}/tx/${hash}` : null,
    status,
    statusLabel,
    error,
    reset,
    isPending: status === "waiting_signature" || status === "pending",
    isConfirmed: status === "confirmed",
  };
}
