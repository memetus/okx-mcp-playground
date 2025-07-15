import {
  BASE_ENDPOINT,
  INDEX_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTokenIndexPriceParams } from "src/shared/types/params/indexPrice";
import { GetTokenIndexPriceResponse } from "src/shared/types/response/indexPrice";

export async function get_token_index_price({
  chainIndex,
  tokenContractAddress,
}: GetTokenIndexPriceParams): Promise<GetTokenIndexPriceResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      INDEX_PRICE_ROUTER.GET_TOKEN_INDEX_PRICE
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

    return await response.json();
  } catch (error) {
    console.error("Error in get_token_index_price:", error);
    throw new Error("Failed to get token index price");
  }
}
