import { BASE_ENDPOINT, TRANSACTION_ROUTER } from "src/shared/constants";
import { GetHitoryByAddressParams } from "src/shared/types/api/params/transaction";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_history_by_address({
  address,
  chains,
  tokenContractAddrdss,
  begin,
  end,
  cursor,
  lmit,
}: GetHitoryByAddressParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRANSACTION_ROUTER.GET_HISTORY_BY_ADDRESS,
      {
        address,
        chains,
        tokenContractAddrdss,
        begin,
        end,
        cursor,
        lmit,
      }
    );

    const response = await fetch(endpoint, {
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
    console.error("Error in get_history_by_address:", error);
    throw new Error("Failed to retrieve transaction history");
  }
}
