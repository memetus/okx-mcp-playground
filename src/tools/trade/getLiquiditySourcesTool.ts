import { get_liquidity_sources } from "../../hooks/trade";
import { GetLiquiditySourcesResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_LIQUIDITY_SOURCES";

export const getLiquiditySourcesParams = {
  chainIndex: z.string(),
  chainId: z.string(),
};

export const getLiquiditySourcesParamsZodSchema = z.object({
  ...getLiquiditySourcesParams,
});

export type GetLiquiditySourcesParamType = z.infer<
  typeof getLiquiditySourcesParamsZodSchema
>;

export const getLiquiditySourcesTool: TradeTool<
  typeof getLiquiditySourcesParams,
  GetLiquiditySourcesParamType,
  GetLiquiditySourcesResponse
> = {
  name: TOOL_NAME,
  description:
    "Get a list of liquidity that are available for swap in the OKX aggregation protocol.",
  parameters: {
    ...getLiquiditySourcesParams,
  },
  handler: async (
    params: GetLiquiditySourcesParamType
  ): Promise<GetLiquiditySourcesResponse> => {
    return await get_liquidity_sources(params);
  },
};
