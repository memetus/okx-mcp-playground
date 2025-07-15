import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetSupportedChainParams } from "src/shared/types/params/marketPrice";
import { GetSupportedChainResponse } from "../../shared/types/response/marketPrice";

export async function get_supported_chain({
  chainIndex,
}: GetSupportedChainParams): Promise<GetSupportedChainResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_PRICE_ROUTER.GET_SUPPORTED_CHAIN,
      {
        chainIndex,
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
    console.error("Error in get_supported_chain:", error);
    throw new Error("Failed to retrieve supported chains");
  }
}
