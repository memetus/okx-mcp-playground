import {
  BALANCE_ROUTER,
  BASE_ENDPOINT,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTotalTokenBalancesParams } from "../../shared/types/params/balance";
import { GetTotalTokenBalancesResponse } from "../../shared/types/response/balance";

export async function get_total_token_balances({
  address,
  chains,
  excludeRiskToken,
}: GetTotalTokenBalancesParams): Promise<GetTotalTokenBalancesResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      BALANCE_ROUTER.GET_TOTAL_TOKEN_BALANCES,
      {
        address,
        chains,
        excludeRiskToken,
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
    console.error("Error in get_total_token_balances:", error);
    throw new Error("Failed to retrieve total token balances");
  }
}
