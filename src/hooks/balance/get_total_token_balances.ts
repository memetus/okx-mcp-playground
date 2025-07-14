import { BALANCE_ROUTER, BASE_ENDPOINT } from "src/shared/constants";
import { GetTotalTokenBalanceesParams } from "src/shared/types/api/params/balance";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_total_token_balances({
  address,
  chains,
  excludeRiskToken,
}: GetTotalTokenBalanceesParams) {
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
