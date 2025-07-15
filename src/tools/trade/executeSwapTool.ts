import { execute_swap } from "../../hooks/trade";
import { ExecuteSwapResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_EXECUTE_SWAP";

export const executeSwapParams = {
  chainIndex: z.string(),
  chainId: z.string(),
  amount: z.string(),
  swapMode: z.string(),
  fromTokenAddress: z.string(),
  toTokenAddress: z.string(),
  slippage: z.string(),
  userWalletAddress: z.string(),
  swapReceiverAddress: z.string().optional(),
  feePercent: z.string().optional(),
  fromTokenReferrerWalletAddress: z.string().optional(),
  toTokenReferrerWalletAddress: z.string().optional(),
  positiveSlippagePercent: z.string().optional(),
  positiveSlippageFeeAddress: z.string().optional(),
  gasLevel: z.string().optional(),
  gasPrice: z.string().optional(),
  tips: z.string().optional(),
  dexIds: z.string().optional(),
  directRoute: z.boolean().optional(),
  priceImpactProtectionPercentage: z.string().optional(),
  computeUnitPrice: z.string().optional(),
  computeUnitLimit: z.string().optional(),
  callDataMemo: z.string().optional(),
  autoSlippage: z.boolean().optional(),
  maxAutoSlippage: z.string().optional(),
};

export const executeSwapParamsZodSchema = z.object({
  ...executeSwapParams,
});

export type ExecuteSwapParamType = z.infer<typeof executeSwapParamsZodSchema>;

export const executeSwapTool: TradeTool<
  typeof executeSwapParams,
  ExecuteSwapParamType,
  ExecuteSwapResponse
> = {
  name: TOOL_NAME,
  description:
    "Generate the data to call the OKX DEX router to execute a swap.",
  parameters: {
    ...executeSwapParams,
  },
  handler: async (
    params: ExecuteSwapParamType
  ): Promise<ExecuteSwapResponse> => {
    return execute_swap(params);
  },
};
