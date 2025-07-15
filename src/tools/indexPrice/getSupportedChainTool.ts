import { get_supported_chain } from "../../hooks/indexPrice/index";
import { GetSupportedChainResponse } from "../../shared/types/response/indexPrice";
import { IndexPriceTool } from "../../shared/types/tools/IndexPriceTool";
import z from "zod";

const TOOL_NAME = "INDEX_PRICE_GET_SUPPORTED_CHAIN";

export const getSupportedChainParams = {};

export const getSupportedChainParamsZodSchema = z.object({
  ...getSupportedChainParams,
});

export type GetSupportedChainParamType = z.infer<
  typeof getSupportedChainParamsZodSchema
>;

export const getSupportedChainTool: IndexPriceTool<
  typeof getSupportedChainParams,
  GetSupportedChainParamType,
  GetSupportedChainResponse
> = {
  name: TOOL_NAME,
  description: "Get the list of supported chains for the index.",
  parameters: {
    ...getSupportedChainParams,
  },
  handler: async (): Promise<GetSupportedChainResponse> => {
    return await get_supported_chain();
  },
};
