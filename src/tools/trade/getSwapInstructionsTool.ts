import { get_swap_instructions } from "../../hooks/trade";
import { GetSwapInstructionsResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_SWAP_INSTRUCTIONS";

export const getSwapInstructionsParams = {
  chainIndex: z.string(),
  chainId: z.string(),
  amount: z.string(),
  fromTokenAddress: z.string(),
  toTokenAddress: z.string(),
  slippage: z.string(),
  autoSlippage: z.boolean().optional(),
  maxAutoSlippage: z.string().optional(),
  userWalletAddress: z.string(),
  swapReceiverAddress: z.string().optional(),
  feePercent: z.string().optional(),
  fromTokenReferrerWalletAddress: z.string().optional(),
  toTokenReferrerWalletAddress: z.string().optional(),
  positiveSlippagePercent: z.string().optional(),
  positiveSlippageFeeAddress: z.string().optional(),
  dexIds: z.string().optional(),
  directRoute: z.boolean().optional(),
  priceImpactProtectionPercentage: z.string().optional(),
  computeUnitPrice: z.string().optional(),
  computeUnitLimit: z.string().optional(),
};

export const getSwapInstructionsParamsZodSchema = z.object({
  ...getSwapInstructionsParams,
});

export type GetSwapInstructionsParamType = z.infer<
  typeof getSwapInstructionsParamsZodSchema
>;

export const getSwapInstructionsTool: TradeTool<
  typeof getSwapInstructionsParams,
  GetSwapInstructionsParamType,
  GetSwapInstructionsResponse
> = {
  name: TOOL_NAME,
  description:
    "Obtain transaction instruction data for redemption or custom assembly in Solana.",
  parameters: {
    ...getSwapInstructionsParams,
  },
  handler: async (
    params: GetSwapInstructionsParamType
  ): Promise<GetSwapInstructionsResponse> => {
    return get_swap_instructions(params);
  },
};
