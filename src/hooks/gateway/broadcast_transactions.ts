import {
  BASE_ENDPOINT,
  GATEWAY_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { BroadcastTransactionsParams } from "../../shared/types/params/gateway";
import { BroadcastTransactionsResponse } from "../../shared/types/response/gateway";

export async function broadcast_transactions({
  signedTx,
  chainIndex,
  address,
  extraData,
  enableMevProtection,
  jitoSignedTx,
}: BroadcastTransactionsParams): Promise<BroadcastTransactionsResponse> {
  try {
    const endopint = joinEndpoint(
      BASE_ENDPOINT,
      GATEWAY_ROUTER.BRODCAST_TRANSACTIONS
    );

    const headers = generateHeaderKey();

    const response = await fetch(endopint, {
      method: "POST",
      headers,
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
