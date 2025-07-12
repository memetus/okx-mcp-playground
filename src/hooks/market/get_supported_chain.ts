import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetSupportedChainParams } from "src/shared/types/api/params/market";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_supported_chain({
  chainIndex,
}: GetSupportedChainParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_ROUTER.GET_SUPPORTED_CHAIN,
      {
        chainIndex,
      }
    );

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
    console.error("Error in get_supported_chain:", error);
    throw new Error("Failed to retrieve supported chains");
  }
}
