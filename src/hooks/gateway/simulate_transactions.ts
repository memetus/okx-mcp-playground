import {
  BASE_ENDPOINT,
  GATEWAY_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { SimulateTransactionParams } from "../../shared/types/params/gateway";
import { SimulateTransactionsResponse } from "../../shared/types/response/gateway";

export async function simulate_transactions({
  fromAddress,
  toAddress,
  chainIndex,
  txAmount,
  extJson,
  priorityFee,
  gasPrice,
}: SimulateTransactionParams): Promise<SimulateTransactionsResponse> {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      GATEWAY_ROUTER.SIMULATE_TRANSACTIONS
    );

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        fromAddress,
        toAddress,
        chainIndex,
        txAmount,
        extJson,
        priorityFee,
        gasPrice,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in simulate_transactions:", error);
    throw new Error("Failed to simulate transactions");
  }
}
