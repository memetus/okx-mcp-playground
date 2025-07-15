import { get_supported_chain } from "../../hooks/transaction";
import { GetSupportedChainResponse } from "../../shared/types/response/indexPrice";
import { TransactionTool } from "../../shared/types/tools/transactionTool";
import z from "zod";

const TOOL_NAME = "TRANSACTION_GET_SUPPORTED_CHAINS";

export const getSupportedChainParams = {};

export const getSupportedChainParamsZodSchema = z.object({
  ...getSupportedChainParams,
});

export type GetSupportedChainParamType = z.infer<
  typeof getSupportedChainParamsZodSchema
>;

export const getSupportedChainTool: TransactionTool<
  typeof getSupportedChainParams,
  GetSupportedChainParamType,
  GetSupportedChainResponse
> = {
  name: TOOL_NAME,
  description:
    "Retrieve information on chains supported by Transaction history API.",
  parameters: {
    ...getSupportedChainParams,
  },
  handler: async (): Promise<GetSupportedChainResponse> => {
    return await get_supported_chain();
  },
};
