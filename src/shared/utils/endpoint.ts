import { ENV } from "../env";

export const joinEndpoint = (
  base: string,
  paths: string,
  query: Record<
    string,
    | string
    | number
    | boolean
    | [string | number]
    | string[]
    | number[]
    | undefined
  > = {}
): string => {
  const safeQuery = Object.entries(query).map(([key, value]) => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    } else if (Array.isArray(value)) {
      return value
        .map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
        .join("&");
    }
    return "";
  });
  return base + paths + (safeQuery.length > 0 ? "?" + safeQuery.join("&") : "");
};

export const generateHeaderKey = () => {
  return {
    "Content-Type": "application/json",
    "OK-ACCESS-KEY": ENV.OKX_API_KEY,
    "OK-ACCESS-SIGN": ENV.OKX_API_SECRET,
    "OK-ACCESS-PASSPHRASE": ENV.OKX_PASSPHRASE,
    "OK-ACCESS-TIMESTAMP": new Date().toISOString(),
  };
};
