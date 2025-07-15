import { get_gas_limit } from "../../hooks/gateway";
import { GetGasLimitResponse } from "../../shared/types/response/gateway";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_GET_GAS_LIMIT";

export const getGasLimitParams = {
  chainIndex: z.string(),
  fromAddress: z.string(),
  toAddress: z.string(),
  txAmount: z.string().optional(),
  extJson: z
    .object({
      inputData: z.string().optional(),
    })
    .optional(),
};

export const getGasLimitParamsZodSchema = z.object({
  ...getGasLimitParams,
});

export type GetGasLimitParamType = z.infer<typeof getGasLimitParamsZodSchema>;

export const getGasLimitTool: GatewayTool<
  typeof getGasLimitParams,
  GetGasLimitParamType,
  GetGasLimitResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve estimated Gas Limit consumption through pre-execution of transaction information.",
  parameters: {
    ...getGasLimitParams,
  },
  handler: async (
    params: GetGasLimitParamType
  ): Promise<GetGasLimitResponse> => {
    return await get_gas_limit(params);
  },
};
