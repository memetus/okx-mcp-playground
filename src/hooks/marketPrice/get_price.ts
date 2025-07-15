import {
  BASE_ENDPOINT,
  MARKET_PRICE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetPriceParams } from "../../shared/types/params/marketPrice";
import { GetPriceResponse } from "../../shared/types/response/marketPrice";

export async function get_price({
  chainIndex,
  tokenContractAddress,
}: GetPriceParams): Promise<GetPriceResponse> {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, MARKET_PRICE_ROUTER.GET_PRICE);

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        chainIndex,
        tokenContractAddress,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_price:", error);
    throw new Error("Failed to retrieve market price");
  }
}
