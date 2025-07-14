import { BASE_ENDPOINT, INDEX_ROUTER } from "src/shared/constants";
import { GetHistoryicalIndexPriceParams } from "src/shared/types/api/params";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_historical_index_price({
  chainIndex,
  tokenContractAddress,
  limit,
  cursor,
  begin,
  end,
  period,
}: GetHistoryicalIndexPriceParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      INDEX_ROUTER.GET_HISTORICAL_INDEX_PRICE,
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

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
