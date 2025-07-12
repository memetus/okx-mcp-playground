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
