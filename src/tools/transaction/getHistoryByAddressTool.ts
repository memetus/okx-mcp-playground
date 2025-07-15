import { get_history_by_address } from "../../hooks/transaction";
import { GetHistoryByAddressResponse } from "../../shared/types/response/transaction";
import { TransactionTool } from "../../shared/types/tools/transactionTool";
import z from "zod";

const TOOL_NAME = "TRANSACTION_GET_HISTORY_BY_ADDRESS";

export const getHistoryByAddressParams = {
  address: z.string(),
  chains: z.string().optional(),
  tokenContractAddress: z.string().optional(),
  begin: z.string().optional(),
  end: z.string().optional(),
  cursor: z.string().optional(),
  limit: z.string().optional(),
};

export const getHistoryByAddressParamsZodSchema = z.object({
  ...getHistoryByAddressParams,
});

export type GetHistoryByAddressParamType = z.infer<
  typeof getHistoryByAddressParamsZodSchema
>;

export const getHistoryByAddressTool: TransactionTool<
  typeof getHistoryByAddressParams,
  GetHistoryByAddressParamType,
  GetHistoryByAddressResponse
> = {
  name: TOOL_NAME,
  description:
    "Query the transaction history under the address dimension, sorted in descending chronological order.",
  parameters: {
    ...getHistoryByAddressParams,
  },
  handler: async (
    params: GetHistoryByAddressParamType
  ): Promise<GetHistoryByAddressResponse> => {
    return await get_history_by_address(params);
  },
};
