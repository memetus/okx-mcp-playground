import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { GetLiquiditySourcesParams } from "src/shared/types/api/params/trade";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_liquidity_sources({
  chainIndex,
  chainId,
}: GetLiquiditySourcesParams) {
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
