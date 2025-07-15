import {
  BASE_ENDPOINT,
  TRANSACTION_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetSpecificTransactionParams } from "../../shared/types/params/transaction";
import { GetSpecificTransactionResponse } from "../../shared/types/response/transaction";

export async function get_specific_transaction({
  chainIndex,
  txHash,
  type,
}: GetSpecificTransactionParams): Promise<GetSpecificTransactionResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRANSACTION_ROUTER.GET_SPECIFIC_TRANSACTION,
      {
        chainIndex,
        txHash,
        type,
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
    console.error("Error in get_specific_transaction:", error);
    throw new Error("Failed to retrieve specific transaction");
  }
}
