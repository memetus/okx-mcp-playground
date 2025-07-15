import { get_historical_index_price } from "../../hooks/indexPrice/index";
import { GetHistoricalIndexPriceResponse } from "../../shared/types/response/indexPrice";
import { IndexPriceTool } from "../../shared/types/tools/IndexPriceTool";
import z from "zod";

const TOOL_NAME = "INDEX_PRICE_GET_HISTORICAL_INDEX_PRICE";

export const getHistoricalIndexPriceParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
};

export const getHistoricalIndexPriceParamsZodSchema = z.object({
  ...getHistoricalIndexPriceParams,
});

export type GetHistoricalIndexPriceParamType = z.infer<
  typeof getHistoricalIndexPriceParamsZodSchema
>;

export const getHistoricalIndexPriceTool: IndexPriceTool<
  typeof getHistoricalIndexPriceParams,
  GetHistoricalIndexPriceParamType,
  GetHistoricalIndexPriceResponse
> = {
  name: TOOL_NAME,
  description: "Query historical prices for a specific token.",
  parameters: {
    ...getHistoricalIndexPriceParams,
  },
  handler: async (
    params: GetHistoricalIndexPriceParamType
  ): Promise<GetHistoricalIndexPriceResponse> => {
    return await get_historical_index_price(params);
  },
};
