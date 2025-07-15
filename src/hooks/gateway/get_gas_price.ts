import {
  BASE_ENDPOINT,
  GATEWAY_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetGasPriceParams } from "../../shared/types/params/gateway";
import { GetGasPriceResponse } from "../../shared/types/response/gateway";

export async function get_gas_price({
  chainIndex,
}: GetGasPriceParams): Promise<GetGasPriceResponse> {
  try {
    const endopint = joinEndpoint(BASE_ENDPOINT, GATEWAY_ROUTER.GET_GAS_PRICE, {
      chainIndex,
    });

    const headers = generateHeaderKey();

    const response = await fetch(endopint, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_gas_price:", error);
    throw new Error("Failed to retrieve gas price");
  }
}
