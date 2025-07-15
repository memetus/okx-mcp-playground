import {
  GetBatchTokenPriceResponse,
  GetCandlesticksHistoryResponse,
  GetCandleSticksResponse,
  GetPriceResponse,
  GetSupportedChainResponse,
  GetTradesResponse,
} from "../response/marketPrice";
import {
  GetPriceParams,
  GetSupportedChainParams,
  GetTradesParams,
  GetBatchTokenPriceParams,
  GetCandlesticksParams,
  GetCandlesticksHistoryParams,
} from "../params";

export type marketPriceTool<
  P = unknown,
  A =
    | unknown
    | GetSupportedChainParams
    | GetPriceParams
    | GetBatchTokenPriceParams
    | GetTradesParams
    | GetCandlesticksParams
    | GetCandlesticksHistoryParams,
  R =
    | unknown
    | GetSupportedChainResponse
    | GetPriceResponse
    | GetBatchTokenPriceResponse
    | GetTradesResponse
    | GetCandleSticksResponse
    | GetCandlesticksHistoryResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
