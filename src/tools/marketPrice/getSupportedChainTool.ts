import { get_supported_chain } from "../../hooks/marketPrice";
import { GetSupportedChainResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_SUPPORTED_CHAIN";

export const getSupportedChainParams = {
  chainIndex: z.string(),
};

export const getSupportedChainParamsZodSchema = z.object({
  ...getSupportedChainParams,
});

export type GetSupportedChainParamType = z.infer<
  typeof getSupportedChainParamsZodSchema
>;

export const getSupportedChainTool: marketPriceTool<
  typeof getSupportedChainParams,
  GetSupportedChainParamType,
  GetSupportedChainResponse
> = {
  name: TOOL_NAME,
  description: "Get the list of supported chains for the market.",
  parameters: {
    ...getSupportedChainParams,
  },
  handler: async (
    params: GetSupportedChainParamType
  ): Promise<GetSupportedChainResponse> => {
    return await get_supported_chain(params);
  },
};
