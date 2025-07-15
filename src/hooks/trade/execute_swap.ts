import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { ExecuteSwapParams } from "../../shared/types/params/trade";
import { ExecuteSwapResponse } from "../../shared/types/response/trade";

export async function execute_swap({
  chainIndex,
  chainId,
  amount,
  swapMode,
  fromTokenAddress,
  toTokenAddress,
  slippage,
  userWalletAddress,
  swapReceiverAddress,
  feePercent,
  fromTokenReferrerWalletAddress,
  toTokenReferrerWalletAddress,
  positiveSlippagePercent,
  positiveSlippageFeeAddress,
  gasLevel,
  gasPrice,
  computeUnitLimit,
  computeUnitPrice,
  tips,
  dexIds,
  directRoute,
  priceImpactProtectionPercentage,
  callDataMemo,
  autoSlippage,
  maxAutoSlippage,
}: ExecuteSwapParams): Promise<ExecuteSwapResponse> {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, TRADE_ROUTER.EXECUTE_SWAP, {
      chainIndex,
      chainId,
      amount,
      swapMode,
      fromTokenAddress,
      toTokenAddress,
      slippage,
      userWalletAddress,
      swapReceiverAddress,
      feePercent,
      fromTokenReferrerWalletAddress,
      toTokenReferrerWalletAddress,
      positiveSlippagePercent,
      positiveSlippageFeeAddress,
      gasLevel,
      gasPrice,
      computeUnitLimit,
      computeUnitPrice,
      tips,
      dexIds,
      directRoute,
      priceImpactProtectionPercentage,
      callDataMemo,
      autoSlippage,
      maxAutoSlippage,
    });

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in execute_swap:", error);
    throw new Error("Failed to execute swap");
  }
}
