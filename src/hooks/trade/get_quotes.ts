import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetQuotesParams } from "../../shared/types/params/trade";
import { GetQuotesResponse } from "../../shared/types/response/trade";

export async function get_quotes({
  chainIndex,
  chainId,
  amount,
  swapMode,
  fromTokenAddress,
  toTokenAddress,
  dexIds,
  directRoute,
  priceImpactProtectionPercentage,
  feePercent,
}: GetQuotesParams): Promise<GetQuotesResponse> {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, TRADE_ROUTER.GET_QUOTES, {
      chainIndex,
      chainId,
      amount,
      swapMode,
      fromTokenAddress,
      toTokenAddress,
      dexIds,
      directRoute,
      priceImpactProtectionPercentage,
      feePercent,
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
    console.error("Error in get_quotes:", error);
    throw new Error("Failed to retrieve quotes");
  }
}
