import { get_total_token_balances } from "../../hooks/balance";
import { GetTotalTokenBalancesResponse } from "../../shared/types/response/balance";
import z from "zod";

const TOOL_NAME = "BALANCE_GET_TOTAL_TOKEN_BALANCES";

export const getTotalTokenBalancesParams = {
  address: z.string(),
  chains: z.string().array(),
  excludeRiskToken: z.string().optional(),
};

export const getTotalTokenBalancesParamsZodSchema = z.object({
  ...getTotalTokenBalancesParams,
});

export type GetTotalTokenBalancesParamType = z.infer<
  typeof getTotalTokenBalancesParamsZodSchema
>;

export const getTotalTokenBalancesTool = {
  name: TOOL_NAME,
  description:
    "Retrieve the list of token balances for an address across multiple chains or specified chains.",
  parameters: {
    ...getTotalTokenBalancesParams,
  },
  handler: async (
    params: GetTotalTokenBalancesParamType
  ): Promise<GetTotalTokenBalancesResponse> => {
    return await get_total_token_balances(params);
  },
};
