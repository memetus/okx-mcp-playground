import { BASE_ENDPOINT, TRADE_ROUTER } from "src/shared/constants";
import { ApproveTransactionsParams } from "src/shared/types/api/params/trade";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function approve_transactions({
  chainIndex,
  chainId,
  tokenContractAddress,
  approveAmount,
}: ApproveTransactionsParams) {
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
