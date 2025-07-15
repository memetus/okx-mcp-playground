import { approve_transactions } from "../../hooks/trade";
import { ApproveTransactionsResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_APPROVE_TRANSACTIONS";

export const approveTransactionsParams = {
  chainIndex: z.string(),
  chainId: z.string(),
  tokenContractAddress: z.string(),
  approveAmount: z.string(),
};

export const approveTransactionsParamsZodSchema = z.object({
  ...approveTransactionsParams,
});

export type ApproveTransactionsParamType = z.infer<
  typeof approveTransactionsParamsZodSchema
>;

export const approveTransactionsTool: TradeTool<
  typeof approveTransactionsParams,
  ApproveTransactionsParamType,
  ApproveTransactionsResponse
> = {
  name: TOOL_NAME,
  description:
    "According to the ERC-20 standard, we need to make sure that the OKX router has permission to spend funds with the user's wallet before making a transaction. This API will generate the relevant data for calling the contract.",
  parameters: {
    ...approveTransactionsParams,
  },
  handler: async (
    params: ApproveTransactionsParamType
  ): Promise<ApproveTransactionsResponse> => {
    return await approve_transactions(params);
  },
};
