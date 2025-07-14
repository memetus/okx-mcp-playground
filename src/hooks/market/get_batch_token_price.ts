import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetBatchTokenPriceParams } from "src/shared/types/api/params/market";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_batch_token_price({
  chainIndex,
  tokenContractAddress,
}: GetBatchTokenPriceParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_ROUTER.GET_BATCH_TOKEN_PRICE
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
