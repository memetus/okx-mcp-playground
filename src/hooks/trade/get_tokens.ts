import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTokensParams } from "../../shared/types/params/trade";
import { GetTokensResponse } from "../../shared/types/response/trade";

export async function get_tokens({
  chainIndex,
  chainId,
}: GetTokensParams): Promise<GetTokensResponse> {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, TRADE_ROUTER.GET_TOKENS, {
      chainIndex,
      chainId,
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
    console.error("Error in get_tokens:", error);
    throw new Error("Failed to retrieve tokens");
  }
}
