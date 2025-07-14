import { BASE_ENDPOINT, GATEWAY_ROUTER } from "src/shared/constants";
import { SimulateTransactionParams } from "src/shared/types/api/params/gateway";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function simulate_transactions({
  fromAddress,
  toAddress,
  chainIndex,
  txAmount,
  extJson,
  priorityFee,
  gasPrice,
}: SimulateTransactionParams) {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      GATEWAY_ROUTER.SIMULATE_TRANSACTIONS
    );

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
