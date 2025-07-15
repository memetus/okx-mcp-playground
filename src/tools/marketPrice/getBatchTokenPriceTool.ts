import { get_batch_token_price } from "../../hooks/marketPrice/get_batch_token_price";
import { GetBatchTokenPriceResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_BATCH_TOKEN_PRICE";

export const getBatchTokenPriceToolParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
};

export const getBatchTokenPriceToolParamsZodSchema = z.object({
  ...getBatchTokenPriceToolParams,
});

export type GetBatchTokenPriceToolParamType = z.infer<
  typeof getBatchTokenPriceToolParamsZodSchema
>;

export const getBatchTokenPriceTool: marketPriceTool<
  typeof getBatchTokenPriceToolParams,
  GetBatchTokenPriceToolParamType,
  GetBatchTokenPriceResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve the latest price for multiple tokens.",
  parameters: {
    ...getBatchTokenPriceToolParams,
  },
  handler: async (
    params: GetBatchTokenPriceToolParamType
  ): Promise<GetBatchTokenPriceResponse> => {
    return await get_batch_token_price(params);
  },
};
