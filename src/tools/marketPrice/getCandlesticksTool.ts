import { get_candlesticks } from "../../hooks/marketPrice";
import { GetCandleSticksResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_CANDLESTICKS";

export const getCandlesticksParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
  after: z.string().optional(),
  before: z.string().optional(),
  bar: z.string().optional(),
  limit: z.number().optional(),
};

export const getCandlesticksParamsZodSchema = z.object({
  ...getCandlesticksParams,
});

export type GetCandlesticksParamType = z.infer<
  typeof getCandlesticksParamsZodSchema
>;

export const getCandlesticksTool: marketPriceTool<
  typeof getCandlesticksParams,
  GetCandlesticksParamType,
  GetCandleSticksResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve the candlestick charts.",
  parameters: {
    ...getCandlesticksParams,
  },
  handler: async (
    params: GetCandlesticksParamType
  ): Promise<GetCandleSticksResponse> => {
    return await get_candlesticks(params);
  },
};
