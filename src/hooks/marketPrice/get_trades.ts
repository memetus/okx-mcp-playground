import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTradesResponse } from "../../shared/types/response/marketPrice";
import { GetTradesParams } from "../../shared/types/params/marketPrice";

export async function get_trades({
  chainIndex,
  tokenContractAddress,
  after,
  before,
}: GetTradesParams): Promise<GetTradesResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      MARKET_PRICE_ROUTER.GET_TRADES,
      {
        chainIndex,
        tokenContractAddress,
        after,
        before,
      }
    );

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "GET",
      headers,
    });

    return await response.json();
  } catch (error) {
    console.error("Error in get_trades:", error);
    throw new Error("Failed to retrieve trades");
  }
}
