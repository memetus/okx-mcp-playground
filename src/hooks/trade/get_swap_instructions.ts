import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetSwapInstructionsParams } from "../../shared/types/params/trade";
import { GetSwapInstructionsResponse } from "../../shared/types/response/trade";

export async function get_swap_instructions({
  chainIndex,
  chainId,
  amount,
  fromTokenAddress,
  toTokenAddress,
  slippage,
  autoSlippage,
  maxAutoSlippage,
  userWalletAddress,
  swapReceiverAddress,
  fromTokenReferrerWalletAddress,
  toTokenReferrerWalletAddress,
  positiveSlippagePercent,
  positiveSlippageFeeAddress,
  dexIds,
  directRoute,
  priceImpactProtectionPercentage,
  computeUnitPrice,
  computeUnitLimit,
}: GetSwapInstructionsParams): Promise<GetSwapInstructionsResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRADE_ROUTER.GET_SWAP_INSTRUCTIONS,
      {
        chainIndex,
        chainId,
        amount,
        fromTokenAddress,
        toTokenAddress,
        slippage,
        autoSlippage,
        maxAutoSlippage,
        userWalletAddress,
        swapReceiverAddress,
        fromTokenReferrerWalletAddress,
        toTokenReferrerWalletAddress,
        positiveSlippagePercent,
        positiveSlippageFeeAddress,
        dexIds,
        directRoute,
        priceImpactProtectionPercentage,
        computeUnitPrice,
        computeUnitLimit,
      }
    );

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
    console.error("Error in get_swap_instructions:", error);
    throw new Error("Failed to retrieve swap instructions");
  }
}
