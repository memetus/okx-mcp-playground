import { BASE_ENDPOINT, GATEWAY_ROUTER } from "src/shared/constants";
import { GetGasLimitParams } from "src/shared/types/api/params/gateway";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_gas_limit({
  chainIndex,
  fromAddress,
  toAddress,
  txAmount,
  extJson,
}: GetGasLimitParams) {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, GATEWAY_ROUTER.GET_GAS_LIMIT);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
