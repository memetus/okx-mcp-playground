import { get_supported_chain } from "../../hooks/balance";
import { GetSupportedChainResponse } from "../../shared/types/response/balance";
import { BalanceTool } from "../../shared/types/tools/balanceTool";
import z from "zod";

const TOOL_NAME = "BALANCE_GET_SUPPORTED_CHAIN";

export const getSupportedChainParams = {};

export const getSupportedChainParamsZodSchema = z.object({
  ...getSupportedChainParams,
});

export type GetSupportedChainParamType = z.infer<
  typeof getSupportedChainParamsZodSchema
>;

export const getSupportedChainTool: BalanceTool<
  typeof getSupportedChainParams,
  GetSupportedChainParamType,
  GetSupportedChainResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve information on chains supported by the DEX Balance endpoint.",
  parameters: {
    ...getSupportedChainParams,
  },
  handler: async (): Promise<GetSupportedChainResponse> => {
    return await get_supported_chain();
  },
};
