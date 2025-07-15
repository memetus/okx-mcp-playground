import {
  GetHistoricalIndexPriceResponse,
  GetSupportedChainResponse,
  GetTokenIndexPriceResponse,
} from "../response/indexPrice";
import {
  GetHistoricalIndexPriceParams,
  GetSupportedChainParams,
  GetTokenIndexPriceParams,
} from "../params";

export type IndexPriceTool<
  P = unknown,
  A =
    | unknown
    | GetSupportedChainParams
    | GetTokenIndexPriceParams
    | GetHistoricalIndexPriceParams,
  R =
    | unknown
    | GetSupportedChainResponse
    | GetHistoricalIndexPriceResponse
    | GetTokenIndexPriceResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
