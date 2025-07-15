import { get_transaction_status } from "../../hooks/trade";
import { GetTransactionStatusResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_TRANSACTION_STATUS";

export const getTransactionStatusParams = {
  chainIndex: z.string(),
  chainId: z.string(),
  txHash: z.string(),
  isFromMyProject: z.boolean().optional(),
};

export const getTransactionStatusParamsZodSchema = z.object({
  ...getTransactionStatusParams,
});

export type GetTransactionStatusParamType = z.infer<
  typeof getTransactionStatusParamsZodSchema
>;

export const getTransactionStatusTool: TradeTool<
  typeof getTransactionStatusParams,
  GetTransactionStatusParamType,
  GetTransactionStatusResponse
> = {
  name: TOOL_NAME,
  description:
    "Get the final transaction status of a single-chain swap using txhash.",
  parameters: {
    ...getTransactionStatusParams,
  },
  handler: async (
    params: GetTransactionStatusParamType
  ): Promise<GetTransactionStatusResponse> => {
    return get_transaction_status(params);
  },
};
