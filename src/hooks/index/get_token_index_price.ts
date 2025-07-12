import { BASE_ENDPOINT, INDEX_ROUTER } from "src/shared/constants";
import { GetTokenIndexPriceParams } from "src/shared/types/api/params";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_token_index_price({
  chainIndex,
  tokenContractAddress,
}: GetTokenIndexPriceParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      INDEX_ROUTER.GET_TOKEN_INDEX_PRICE
    );

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
