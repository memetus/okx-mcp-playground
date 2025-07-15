import { get_gas_price } from "../../hooks/gateway";
import { GetGasPriceResponse } from "../../shared/types/response/gateway";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_GET_GAS_PRICE";

export const getGasPriceParams = {
  chainIndex: z.string(),
};

export const getGasPriceParamsZodSchema = z.object({
  ...getGasPriceParams,
});

export type GetGasPriceParamType = z.infer<typeof getGasPriceParamsZodSchema>;

export const getGasPriceTool: GatewayTool<
  typeof getGasPriceParams,
  GetGasPriceParamType,
  GetGasPriceResponse
> = {
  name: TOOL_NAME,
  description: "Dynamically obtain estimated gas prices for various chains.",
  parameters: {
    ...getGasPriceParams,
  },
  handler: async (
    params: GetGasPriceParamType
  ): Promise<GetGasPriceResponse> => {
    return await get_gas_price(params);
  },
};
