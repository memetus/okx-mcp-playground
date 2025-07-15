import { simulate_transactions } from "../../hooks/gateway/simulate_transactions";
import { SimulateTransactionsResponse } from "../../shared/types/response/gateway";
import { GatewayTool } from "../../shared/types/tools/gatewayTool";
import z from "zod";

const TOOL_NAME = "GATEWAY_SIMULATE_TRANSACTIONS";

export const simulateTransactionsParams = {
  fromAddress: z.string(),
  toAddress: z.string(),
  chainIndex: z.string(),
  txAmount: z.string().optional(),
  extJson: z.object({
    inputData: z.string(),
  }),
  priorityFee: z.string().optional(),
  gasPrice: z.string().optional(),
};

export const simulateTransactionsParamsZodSchema = z.object({
  ...simulateTransactionsParams,
});

export type SimulateTransactionsParamType = z.infer<
  typeof simulateTransactionsParamsZodSchema
>;

export const simulateTransactionsTool: GatewayTool<
  typeof simulateTransactionsParams,
  SimulateTransactionsParamType,
  SimulateTransactionsResponse
> = {
  name: TOOL_NAME,
  description:
    "Simulate a blockchain transaction before executing it to see the expected outcomes and potential risks.",
  parameters: {
    ...simulateTransactionsParams,
  },
  handler: async (
    params: SimulateTransactionsParamType
  ): Promise<SimulateTransactionsResponse> => {
    return await simulate_transactions(params);
  },
};
