import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { GetAllTokensParams } from "src/shared/types/api/params/trade";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_all_tokens({
  chainIndex,
  chainId,
}: GetAllTokensParams) {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, TRADE_ROUTER.GET_ALL_TOKENS, {
      chainIndex,
      chainId,
    });

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_all_tokens:", error);
    throw new Error("Failed to retrieve all tokens");
  }
}
