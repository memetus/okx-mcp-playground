import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetLiquiditySourcesParams } from "../../shared/types/params/trade";
import { GetLiquiditySourcesResponse } from "../../shared/types/response/trade";

export async function get_liquidity_sources({
  chainIndex,
  chainId,
}: GetLiquiditySourcesParams): Promise<GetLiquiditySourcesResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRADE_ROUTER.GET_LIQUIDITY_SOURCES,
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
    console.error("Error in get_liquidity_sources:", error);
    throw new Error("Failed to retrieve liquidity sources");
  }
}
