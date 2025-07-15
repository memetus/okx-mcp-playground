import {
  BASE_ENDPOINT,
  TRANSACTION_ROUTER,
  generateHeaderKey,
  joinEndpoint,
} from "../../shared";

export async function get_supported_chain() {
  try {
    const endpoint = joinEndpoint(
      BASE_ENDPOINT,
      TRANSACTION_ROUTER.GET_SUPPORTED_CHAIN
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
