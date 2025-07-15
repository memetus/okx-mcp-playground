import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetSupportedChainsParams } from "../../shared/types/params/trade";
import { GetSupportedChainsResponse } from "../../shared/types/response/trade";

export async function get_supported_chains({
  chainIndex,
  chainId,
}: GetSupportedChainsParams): Promise<GetSupportedChainsResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRADE_ROUTER.GET_SUPPORTED_CHAIN,
      {
        chainIndex,
        chainId,
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
