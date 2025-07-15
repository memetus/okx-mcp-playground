import { get_quotes } from "../../hooks/trade";
import { GetQuotesResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_QUOTES";

export const getQuotesParams = {
  chainIndex: z.string(),
  chainId: z.string(),
  amount: z.string(),
  swapMode: z.string(),
  fromTokenAddress: z.string(),
  toTokenAddress: z.string(),
  dexIds: z.string().optional(),
  directRoute: z.boolean().optional(),
  priceImpactProtectionPercentage: z.string().optional(),
  feePercent: z.string().optional(),
};

const getQuotesParamsZodSchema = z.object({
  ...getQuotesParams,
});

export type GetQuotesParamType = z.infer<typeof getQuotesParamsZodSchema>;

export const getQuotesTool: TradeTool<
  typeof getQuotesParams,
  GetQuotesParamType
> = {
  name: TOOL_NAME,
  description: "Get the best quote for a swap through OKX DEX.",
  parameters: {
    ...getQuotesParams,
  },
  handler: async (params: GetQuotesParamType): Promise<GetQuotesResponse> => {
    return get_quotes(params);
  },
};
