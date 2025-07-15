import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetTransactionStatusParams } from "../../shared/types/params/trade";
import { GetTransactionStatusResponse } from "../../shared/types/response/trade";

export async function get_transaction_status({
  chainIndex,
  chainId,
  txHash,
  isFromMyProject,
}: GetTransactionStatusParams): Promise<GetTransactionStatusResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRADE_ROUTER.GET_TRANSACTION_STATUS,
      {
        chainIndex,
        chainId,
        txHash,
        isFromMyProject,
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
    console.error("Error in get_transaction_status:", error);
    throw new Error("Failed to retrieve transaction status");
  }
}
