import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { ExecuteSwapParams } from "src/shared/types/api/params/trade";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

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
}: ExecuteSwapParams) {
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
