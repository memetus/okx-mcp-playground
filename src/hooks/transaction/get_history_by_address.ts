import {
  BASE_ENDPOINT,
  TRANSACTION_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetHitoryByAddressParams } from "../../shared/types/params/transaction";
import { GetHistoryByAddressResponse } from "../../shared/types/response/transaction";

export async function get_history_by_address({
  address,
  chains,
  tokenContractAddrdss,
  begin,
  end,
  cursor,
  lmit,
}: GetHitoryByAddressParams): Promise<GetHistoryByAddressResponse> {
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
    console.error("Error in get_history_by_address:", error);
    throw new Error("Failed to retrieve transaction history");
  }
}
