import { get_specific_token_balance } from "../../hooks/balance";
import { GetSpecificTokenBalanceResponse } from "../../shared/types/response/balance";
import { BalanceTool } from "../../shared/types/tools/balanceTool";
import z from "zod";

const TOOL_NAME = "BALANCE_GET_SPECIFIC_TOKEN_BALANCE";

export const getSpecificTokenBalanceParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
  address: z.string(),
  tokenContractAddresses: z.array(z.string()),
  excludeRiskToken: z.string().optional(),
};

export const getSpecificTokenBalanceParamsZodSchema = z.object({
  ...getSpecificTokenBalanceParams,
});

export type GetSpecificTokenBalanceParamType = z.infer<
  typeof getSpecificTokenBalanceParamsZodSchema
>;

export const getSpecificTokenBalanceTool: BalanceTool<
  typeof getSpecificTokenBalanceParams,
  GetSpecificTokenBalanceParamType,
  GetSpecificTokenBalanceResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve the list of token balances for an address across multiple chains or specified chains.",
  parameters: {
    ...getSpecificTokenBalanceParams,
  },
  handler: async (
    params: GetSpecificTokenBalanceParamType
  ): Promise<GetSpecificTokenBalanceResponse> => {
    return await get_specific_token_balance(params);
  },
};
