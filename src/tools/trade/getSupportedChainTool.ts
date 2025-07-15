import { get_supported_chains } from "../../hooks/trade";
import { GetSupportedChainsResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_SUPPORTED_CHAINS";

export const getSupportedChainsToolParams = {
  chainIndex: z.string(),
  chainId: z.string().optional(),
};

export const getSupportedChainToolParamsZodSchema = z.object({
  ...getSupportedChainsToolParams,
});

export type GetSupportedChainsToolParamType = z.infer<
  typeof getSupportedChainToolParamsZodSchema
>;

export const getSupportedChainsTool: TradeTool<
  typeof getSupportedChainsToolParams,
  GetSupportedChainsToolParamType,
  GetSupportedChainsResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve information on chains supported for single-chain exchanges. The request returns supported target chains for cross-chain transactions.",
  parameters: {
    ...getSupportedChainsToolParams,
  },
  handler: async (params: GetSupportedChainsToolParamType) => {
    return await get_supported_chains(params);
  },
};
