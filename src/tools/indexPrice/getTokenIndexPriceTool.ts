import { get_token_index_price } from "../../hooks/indexPrice/index";
import { GetTokenIndexPriceResponse } from "../../shared/types/response/indexPrice";
import { IndexPriceTool } from "../../shared/types/tools/IndexPriceTool";
import z from "zod";

const TOOL_NAME = "INDEX_PRICE_GET_TOKEN_INDEX_PRICE";

export const getTokenIndexPriceParams = {
  chainIndex: z.string(),
  tokenContractAddress: z.string(),
};

export const getTokenIndexPriceParamsZodSchema = z.object({
  ...getTokenIndexPriceParams,
});

export type GetTokenIndexPriceParamType = z.infer<
  typeof getTokenIndexPriceParamsZodSchema
>;

export const getTokenIndexPriceTool: IndexPriceTool<
  typeof getTokenIndexPriceParams,
  GetTokenIndexPriceParamType,
  GetTokenIndexPriceResponse
> = {
  name: TOOL_NAME,
  description:
    "The index price refers to a currency price calculated from the prices of multiple third-party data sources.",
  parameters: {
    ...getTokenIndexPriceParams,
  },
  handler: async (
    params: GetTokenIndexPriceParamType
  ): Promise<GetTokenIndexPriceResponse> => {
    return await get_token_index_price(params);
  },
};
