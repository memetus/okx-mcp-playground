import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetCandlesticksHistoryParams } from "src/shared/types/api/params/market";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_candlestics_history({
  chainIndex,
  tokenContractAddress,
  after,
  before,
  bar,
  limit,
}: GetCandlesticksHistoryParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_ROUTER.GET_CANDLESTICKS_HISTORY,
      {
        chainIndex,
        tokenContractAddress,
        after,
        before,
        bar,
        limit,
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
    console.error("Error in get_candlestics_history:", error);
    throw new Error("Failed to retrieve candlestick history");
  }
}
