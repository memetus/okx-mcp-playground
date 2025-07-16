import { get_candlesticks_history } from "../../hooks/marketPrice";
import { GetCandlesticksHistoryResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_CANDLESTICKS_HISTORY";

export const getCandlesticksHistoryParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
  after: z.string().optional(),
  before: z.string().optional(),
  bar: z.string().optional(),
  limit: z.number().optional(),
};

export const getCandlesticksHistoryParamsZodSchema = z.object({
  ...getCandlesticksHistoryParams,
});

export type GetCandlesticksHistoryParamType = z.infer<
  typeof getCandlesticksHistoryParamsZodSchema
>;

export const getCandlesticksHistoryTool: marketPriceTool<
  typeof getCandlesticksHistoryParams,
  GetCandlesticksHistoryParamType,
  GetCandlesticksHistoryResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve historical candlestick charts.",
  parameters: {
    ...getCandlesticksHistoryParams,
  },
  handler: async (
    params: GetCandlesticksHistoryParamType
  ): Promise<GetCandlesticksHistoryResponse> => {
    return await get_candlesticks_history(params);
  },
};
