import { get_trades } from "../../hooks/marketPrice";
import { GetTradesResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_TRADES";

export const getTradesParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
  after: z.string().optional(),
  limit: z.number().optional(),
};

export const getTradesParamsZodSchema = z.object({
  ...getTradesParams,
});

export type GetTradesParamType = z.infer<typeof getTradesParamsZodSchema>;

export const getTradesTool: marketPriceTool<
  typeof getTradesParams,
  GetTradesParamType,
  GetTradesResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve the recent transactions of a token.",
  parameters: {
    ...getTradesParams,
  },
  handler: async (params: GetTradesParamType): Promise<GetTradesResponse> => {
    return await get_trades(params);
  },
};
