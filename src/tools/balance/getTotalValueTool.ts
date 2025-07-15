import { get_total_value } from "../../hooks/balance";
import { GetTotalValueResponse } from "../../shared/types/response/balance";
import { BalanceTool } from "../../shared/types/tools/balanceTool";
import z from "zod";

const TOOL_NAME = "BALANCE_GET_TOTAL_VALUE";

export const getTotalValueParams = {
  address: z.string(),
  chains: z.string(),
  assetType: z.string().optional(),
  excludeRiskToken: z.boolean().optional(),
};

export const getTotalValueParamsZodSchema = z.object({
  ...getTotalValueParams,
});

export type GetTotalValueParamType = z.infer<
  typeof getTotalValueParamsZodSchema
>;

export const getTotalValueTool: BalanceTool<
  typeof getTotalValueParams,
  GetTotalValueParamType,
  GetTotalValueResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve the total balance of all tokens and DeFi assets under an account.",
  parameters: {
    ...getTotalValueParams,
  },
  handler: async (
    params: GetTotalValueParamType
  ): Promise<GetTotalValueResponse> => {
    return await get_total_value(params);
  },
};
