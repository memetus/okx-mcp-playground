import { BASE_ENDPOINT, GATEWAY_ROUTER } from "src/shared/constants";
import { GetTransactionOrdersParams } from "src/shared/types/api/params/gateway";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_transaction_order({
  chainIndex,
  address,
  txStatus,
  orderId,
  cursor,
  limit,
}: GetTransactionOrdersParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      GATEWAY_ROUTER.GET_TRANSACTION_ORDER,
      {
        chainIndex,
        address,
        txStatus,
        orderId,
        cursor,
        limit,
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
    console.error("Error in get_transaction_order:", error);
    throw new Error("Failed to retrieve transaction order");
  }
}
