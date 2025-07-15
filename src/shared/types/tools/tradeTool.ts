import {
  ExecuteSwapResponse,
  GetLiquiditySourcesResponse,
  GetQuotesResponse,
  GetSupportedChainsResponse,
  GetSwapInstructionsResponse,
  GetTokensResponse,
  GetTransactionStatusResponse,
} from "../response/trade";
import {
  ExecuteSwapParams,
  GetLiquiditySourcesParams,
  GetQuotesParams,
  GetSupportedChainsParams,
  GetSwapInstructionsParams,
  GetTokensParams,
  GetTransactionStatusParams,
} from "../params";

export type TradeTool<
  P = unknown,
  A =
    | unknown
    | GetSupportedChainsParams
    | GetTokensParams
    | GetLiquiditySourcesParams
    | GetQuotesParams
    | GetSwapInstructionsParams
    | ExecuteSwapParams
    | GetTransactionStatusParams,
  R =
    | unknown
    | GetSupportedChainsResponse
    | GetTokensResponse
    | GetLiquiditySourcesResponse
    | GetQuotesResponse
    | GetSwapInstructionsResponse
    | ExecuteSwapResponse
    | GetTransactionStatusResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
