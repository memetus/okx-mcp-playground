import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { GetTransactionStatusParams } from "src/shared/types/api/params/trade";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_transaction_status({
  chainIndex,
  chainId,
  txHash,
  isFromMyProject,
}: GetTransactionStatusParams) {
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
