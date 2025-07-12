import { BASE_ENDPOINT, MARKET_ROUTER } from "src/shared/constants";
import { GetTradesParams } from "src/shared/types/api/params/market";
import { joinEndpoint } from "src/shared/utils/endpoint";

export async function get_trades({
  chainIndex,
  tokenContractAddress,
  after,
  before,
}: GetTradesParams) {
  try {
    const endpoint = joinEndpoint(BASE_ENDPOINT, MARKET_ROUTER.GET_TRADES, {
      chainIndex,
      tokenContractAddress,
      after,
      before,
    });

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error in get_trades:", error);
    throw new Error("Failed to retrieve trades");
  }
}
