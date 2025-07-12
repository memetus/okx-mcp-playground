import { BASE_ENDPOINT, GATEWAY_ROUTER } from "src/shared/constants";
import { BroadcastTransactionsParams } from "src/shared/types/api/params/gateway";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function brodcast_transactions({
  signedTx,
  chainIndex,
  address,
  extraData,
  enableMevProtection,
  jitoSignedTx,
}: BroadcastTransactionsParams) {
  try {
    const endopint = joinEndpoint(
      BASE_ENDPOINT,
      GATEWAY_ROUTER.BRODCAST_TRANSACTIONS
    );

    const response = await fetch(endopint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signedTx,
        chainIndex,
        address,
        extraData,
        enableMevProtection,
        jitoSignedTx,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in brodcast_transactions:", error);
    throw new Error("Failed to broadcast transactions");
  }
}
