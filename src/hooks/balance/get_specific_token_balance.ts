import { BALANCE_ROUTER, BASE_ENDPOINT } from "src/shared/constants";
import { GetSpecificTokenBalanceParams } from "src/shared/types/api/params/balance";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_specific_token_balance({
  chainIndex,
  tokenContractAddress,
  address,
  tokenContractAddresses,
  excludeRiskToken,
}: GetSpecificTokenBalanceParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      BALANCE_ROUTER.GET_SPECIFIC_TOKEN_BALANCE
    );

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        chainIndex,
        tokenContractAddress,
        address,
        tokenContractAddresses,
        excludeRiskToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_specific_token_balance:", error);
    throw new Error("Failed to retrieve specific token balance");
  }
}
