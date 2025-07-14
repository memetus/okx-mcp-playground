import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { GetQuotesParams } from "src/shared/types/api/params/trade";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

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
}: GetQuotesParams) {
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
