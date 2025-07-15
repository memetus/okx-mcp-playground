import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetBatchTokenPriceParams } from "../../shared/types/params/marketPrice";
import { GetBatchTokenPriceResponse } from "../../shared/types/response/marketPrice";

export async function get_batch_token_price({
  chainIndex,
  tokenContractAddress,
}: GetBatchTokenPriceParams): Promise<GetBatchTokenPriceResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_PRICE_ROUTER.GET_BATCH_TOKEN_PRICE
    );

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        chainIndex,
        tokenContractAddress,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_batch_token_price:", error);
    throw new Error("Failed to retrieve batch token prices");
  }
}
