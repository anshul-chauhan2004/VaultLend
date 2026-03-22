import { CONTRACTS, LENDING_POOL_ABI } from "@/config/contracts";
import { useTrackedWrite } from "./useTransaction";

const LENDING_POOL_GAS_LIMIT = 1_000_000n;

function useLendingPoolWrite(functionName: string) {
  const tx = useTrackedWrite();

  return {
    ...tx,
    run: async (args: readonly unknown[]) =>
      tx.execute({
        address: CONTRACTS.LENDING_POOL,
        abi: LENDING_POOL_ABI,
        functionName,
        args,
        gas: LENDING_POOL_GAS_LIMIT,
      }),
  };
}

export function useDepositCollateral() {
  const action = useLendingPoolWrite("depositCollateral");
  return {
    ...action,
    deposit: (amount: bigint) => action.run([amount]),
  };
}

export function useWithdrawCollateral() {
  const action = useLendingPoolWrite("withdrawCollateral");
  return {
    ...action,
    withdraw: (amount: bigint) => action.run([amount]),
  };
}

export function useDeposit() {
  const action = useLendingPoolWrite("deposit");
  return {
    ...action,
    deposit: (amount: bigint) => action.run([amount]),
  };
}

export function useWithdrawLiquidity() {
  const action = useLendingPoolWrite("withdrawLiquidity");
  return {
    ...action,
    withdraw: (amount: bigint) => action.run([amount]),
  };
}

export function useBorrow() {
  const action = useLendingPoolWrite("borrow");
  return {
    ...action,
    borrow: (amount: bigint) => action.run([amount]),
  };
}

export function useRepay() {
  const action = useLendingPoolWrite("repay");
  return {
    ...action,
    repay: (amount: bigint) => action.run([amount]),
  };
}

export function useLiquidate() {
  const action = useLendingPoolWrite("liquidate");
  return {
    ...action,
    liquidate: (userAddress: `0x${string}`, repayAmount: bigint, to: `0x${string}`) =>
      action.run([userAddress, repayAmount, to]),
  };
}
