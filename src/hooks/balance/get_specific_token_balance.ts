import {
  BALANCE_ROUTER,
  BASE_ENDPOINT,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetSpecificTokenBalanceParams } from "../../shared/types/params/balance";
import { GetSpecificTokenBalanceResponse } from "../../shared/types/response/balance";

export async function get_specific_token_balance({
  chainIndex,
  tokenContractAddress,
  address,
  tokenContractAddresses,
  excludeRiskToken,
}: GetSpecificTokenBalanceParams): Promise<GetSpecificTokenBalanceResponse> {
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
