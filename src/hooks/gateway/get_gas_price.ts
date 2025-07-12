import { BASE_ENDPOINT, GATEWAY_ROUTER } from "src/shared/constants";
import { GetGasPriceParams } from "src/shared/types/api/params/gateway";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_gas_price({ chainIndex }: GetGasPriceParams) {
  try {
    const endopint = joinEndpoint(BASE_ENDPOINT, GATEWAY_ROUTER.GET_GAS_PRICE, {
      chainIndex,
    });

    const response = await fetch(endopint, {
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
    console.error("Error in get_gas_price:", error);
    throw new Error("Failed to retrieve gas price");
  }
}
