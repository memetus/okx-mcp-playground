import { BASE_ENDPOINT, INDEX_ROUTER } from "src/shared/constants";
import { generateHeaderKey, joinEndpoint } from "src/shared/utils/endpoint";

export async function get_supported_chain() {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      INDEX_ROUTER.GET_TOKEN_INDEX_PRICE
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
    console.error("Error in get_supported_chain:", error);
    throw new Error("Failed to retrieve supported chains");
  }
}
