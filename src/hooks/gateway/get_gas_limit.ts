import {
  BASE_ENDPOINT,
  GATEWAY_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";
import { GetGasLimitParams } from "../../shared/types/params/gateway";
import { GetGasLimitResponse } from "../../shared/types/response/gateway";

export async function get_gas_limit({
  chainIndex,
  fromAddress,
  toAddress,
  txAmount,
  extJson,
}: GetGasLimitParams): Promise<GetGasLimitResponse> {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, GATEWAY_ROUTER.GET_GAS_LIMIT);

    const headers = generateHeaderKey();

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        chainIndex,
        fromAddress,
        toAddress,
        txAmount,
        extJson,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in get_gas_limit:", error);
    throw new Error("Failed to retrieve gas limit");
  }
}
