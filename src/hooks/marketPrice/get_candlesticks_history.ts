import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetCandlesticksHistoryParams } from "../../shared/types/params/marketPrice";
import { GetCandlesticksHistoryResponse } from "../../shared/types/response/marketPrice";

export async function get_candlestics_history({
  chainIndex,
  tokenContractAddress,
  after,
  before,
  bar,
  limit,
}: GetCandlesticksHistoryParams): Promise<GetCandlesticksHistoryResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_PRICE_ROUTER.GET_CANDLESTICKS_HISTORY,
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
    console.error("Error in get_candlestics_history:", error);
    throw new Error("Failed to retrieve candlestick history");
  }
}
