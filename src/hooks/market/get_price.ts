import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetPriceParams } from "src/shared/types/api/params/market";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_price({
  chainIndex,
  tokenContractAddress,
}: GetPriceParams) {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, MARKET_ROUTER.GET_PRICE);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
