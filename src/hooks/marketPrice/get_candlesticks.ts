import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetCandlesticksParams } from "../../shared/types/params/marketPrice";
import { GetCandleSticksResponse } from "../../shared/types/response/marketPrice";

export async function get_candlesticks({
  chainIndex,
  tokenContractAddress,
  after,
  before,
  bar,
  limit,
}: GetCandlesticksParams): Promise<GetCandleSticksResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_PRICE_ROUTER.GET_CANDLESTICKS,
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
