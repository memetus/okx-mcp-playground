import { get_price } from "../../hooks/marketPrice";
import { GetPriceResponse } from "../../shared/types/response/marketPrice";
import { marketPriceTool } from "../../shared/types/tools/marketPriceTool";
import z from "zod";

const TOOL_NAME = "MARKET_PRICE_GET_PRICE";

export const getPriceParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
};

export const getPriceParamsZodSchema = z.object({
  ...getPriceParams,
});

export type GetPriceParamType = z.infer<typeof getPriceParamsZodSchema>;

export const getPriceTool: marketPriceTool<
  typeof getPriceParams,
  GetPriceParamType,
  GetPriceResponse
> = {
  name: TOOL_NAME,
  description: "Retrieve the latest price of a token.",
  parameters: {
    ...getPriceParams,
  },
  handler: async (params: GetPriceParamType): Promise<GetPriceResponse> => {
    return await get_price(params);
  },
};
