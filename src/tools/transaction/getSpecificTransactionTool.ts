import { get_specific_transaction } from "../../hooks/transaction";
import { GetSpecificTransactionResponse } from "../../shared/types/response/transaction";
import { TransactionTool } from "../../shared/types/tools/transactionTool";
import z from "zod";

const TOOL_NAME = "TRANSACTION_GET_SPECIFIC_TRANSACTION";

export const getSpecificTransactionParams = {
  chainIndex: z.string(),
  txHash: z.string(),
  type: z.string().optional(),
};

export const getSpecificTransactionParamsZodSchema = z.object({
  ...getSpecificTransactionParams,
});

export type GetSpecificTransactionParamType = z.infer<
  typeof getSpecificTransactionParamsZodSchema
>;

export const getSpecificTransactionTool: TransactionTool<
  typeof getSpecificTransactionParams,
  GetSpecificTransactionParamType,
  GetSpecificTransactionResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve details of a transaction based on txHash.",
  parameters: {
    ...getSpecificTransactionParams,
  },
  handler: async (
    params: GetSpecificTransactionParamType
  ): Promise<GetSpecificTransactionResponse> => {
    return await get_specific_transaction(params);
  },
};
