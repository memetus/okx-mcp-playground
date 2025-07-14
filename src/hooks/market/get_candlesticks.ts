import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetCandleSticksParams } from "src/shared/types/api/params/market";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_candlesticks({
  chainIndex,
  tokenContractAddress,
  after,
  before,
  bar,
  limit,
}: GetCandleSticksParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_ROUTER.GET_CANDLESTICKS,
      {
        chainIndex,
        tokenContractAddress,
        after,
        before,
        bar,
        limit,
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
    console.error("Error in get_candlesticks:", error);
    throw new Error("Failed to retrieve candlestick data");
  }
}
