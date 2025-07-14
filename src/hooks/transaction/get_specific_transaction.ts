import { BASE_ENDPOINT, TRANSACTION_ROUTER } from "src/shared/constants";
import { GetSpecificTransactionParams } from "src/shared/types/api/params/transaction";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_specific_transaction({
  chainIndex,
  txHash,
  type,
}: GetSpecificTransactionParams) {
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
