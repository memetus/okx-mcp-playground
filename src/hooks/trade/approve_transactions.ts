import {
  BASE_ENDPOINT,
  TRADE_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { ApproveTransactionsParams } from "../../shared/types/params/trade";
import { ApproveTransactionsResponse } from "../../shared/types/response/trade";

export async function approve_transactions({
  chainIndex,
  chainId,
  tokenContractAddress,
  approveAmount,
}: ApproveTransactionsParams): Promise<ApproveTransactionsResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRADE_ROUTER.APPROVE_TRANSACTIONS,
      {
        chainIndex,
        chainId,
        tokenContractAddress,
        approveAmount,
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
    console.error("Error in approve_transactions:", error);
    throw new Error("Failed to approve transactions");
  }
}
