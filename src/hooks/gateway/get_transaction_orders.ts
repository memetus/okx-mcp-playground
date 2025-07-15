import {
  BASE_ENDPOINT,
  GATEWAY_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTransactionOrdersParams } from "../../shared/types/params/gateway";
import { GetTransactionOrdersResponse } from "../../shared/types/response/gateway";

export async function get_transaction_orders({
  chainIndex,
  address,
  txStatus,
  orderId,
  cursor,
  limit,
}: GetTransactionOrdersParams): Promise<GetTransactionOrdersResponse> {
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
    console.error("Error in get_transaction_order:", error);
    throw new Error("Failed to retrieve transaction order");
  }
}
