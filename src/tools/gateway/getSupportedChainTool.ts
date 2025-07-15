import { get_supported_chain } from "../../hooks/gateway";
import { GetSupportedChainResponse } from "../../shared/types/response/balance";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_GET_SUPPORTED_CHAINS";

export const getSupportedChainParams = {};

export const getSupportedChainParamsZodSchema = z.object({
  ...getSupportedChainParams,
});

export type GetSupportedChainParamType = z.infer<
  typeof getSupportedChainParamsZodSchema
>;

export const getSupportedChainTool: GatewayTool<
  typeof getSupportedChainParams,
  GetSupportedChainParamType,
  GetSupportedChainResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve information on chains supported by Onchain gateway API",
  parameters: {
    ...getSupportedChainParams,
  },
  handler: async (): Promise<GetSupportedChainResponse> => {
    return await get_supported_chain();
  },
};
