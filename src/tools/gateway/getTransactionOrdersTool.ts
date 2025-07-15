import { get_transaction_orders } from "../../hooks/gateway";
import { GetTransactionOrdersResponse } from "../../shared/types/response/gateway";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_GET_TRANSACTION_ORDERS";

export const getTransactionOrdersParams = {
  address: z.string(),
  chainIndex: z.string(),
  txStatus: z.string().optional(),
  orderId: z.string().optional(),
  cursor: z.string().optional(),
  limit: z.string().optional(),
};

export const getTransactionOrdersParamsZodSchema = z.object({
  ...getTransactionOrdersParams,
});

export type GetTransactionOrdersParamType = z.infer<
  typeof getTransactionOrdersParamsZodSchema
>;

export const getTransactionOrdersTool: GatewayTool<
  typeof getTransactionOrdersParams,
  GetTransactionOrdersParamType,
  GetTransactionOrdersResponse
> = {
  name: TOOL_NAME,
  description:
    "Get the list of orders sent from transaction broadcasting API. This supports querying transactions sorted in descending order by time.",
  parameters: {
    ...getTransactionOrdersParams,
  },
  handler: async (
    params: GetTransactionOrdersParamType
  ): Promise<GetTransactionOrdersResponse> => {
    return await get_transaction_orders(params);
  },
};
