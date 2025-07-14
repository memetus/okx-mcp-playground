import { BALANCE_ROUTER, BASE_ENDPOINT } from "src/shared/constants";
import { GetTotalValueParams } from "src/shared/types/api/params/balance";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_total_value({
  address,
  chains,
  assetType,
  excludeRiskToken,
}: GetTotalValueParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      BALANCE_ROUTER.GET_TOTAL_VALUE,
      {
        address,
        chains,
        assetType,
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
    console.error("Error in get_total_value:", error);
    throw new Error("Failed to retrieve total value");
  }
}
