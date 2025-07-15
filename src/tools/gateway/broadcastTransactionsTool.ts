import { broadcast_transactions } from "../../hooks/gateway";
import { BroadcastTransactionsResponse } from "../../shared/types/response/gateway";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_BROADCAST_TRANSACTIONS";

export const broadcastTransactionsParams = {
  signedTx: z.string(),
  chainIndex: z.string(),
  address: z.string(),
  extraData: z.string().optional(),
  enableMevProtection: z.boolean().optional(),
  jitoSignedTx: z.string().optional(),
};

export const broadcastTransactionsParamsZodSchema = z.object({
  ...broadcastTransactionsParams,
});

export type BroadcastTransactionsParamType = z.infer<
  typeof broadcastTransactionsParamsZodSchema
>;

export const broadcastTransactionsTool: GatewayTool<
  typeof broadcastTransactionsParams,
  BroadcastTransactionsParamType,
  BroadcastTransactionsResponse
> = {
  name: TOOL_NAME,
  description: "Broadcast transactions to the specified blockchain.",
  parameters: {
    ...broadcastTransactionsParams,
  },
  handler: async (
    params: BroadcastTransactionsParamType
  ): Promise<BroadcastTransactionsResponse> => {
    return await broadcast_transactions(params);
  },
};
