import {
  BASE_ENDPOINT,
  INDEX_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetHistoricalIndexPriceParams } from "../../shared/types/params/indexPrice";
import { GetHistoricalIndexPriceResponse } from "../../shared/types/response/indexPrice";

export async function get_historical_index_price({
  chainIndex,
  tokenContractAddress,
  limit,
  cursor,
  begin,
  end,
  period,
}: GetHistoricalIndexPriceParams): Promise<GetHistoricalIndexPriceResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      INDEX_PRICE_ROUTER.GET_HISTORICAL_INDEX_PRICE,
      {
        chainIndex,
        tokenContractAddress,
        limit,
        cursor,
        begin,
        end,
        period,
      }
    );

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_historical_index_price:", error);
    throw new Error("Failed to get historical index price");
  }
}
