import {
  GetTotalValueParams,
  GetSpecificTokenBalanceParams,
  GetTotalTokenBalancesParams,
} from "../params";
import {
  GetSpecificTokenBalanceResponse,
  GetSupportedChainResponse,
  GetTotalTokenBalancesResponse,
  GetTotalValueResponse,
} from "../response/balance";

export type BalanceTool<
  P = unknown,
  A =
    | unknown
    | GetTotalValueParams
    | GetSpecificTokenBalanceParams
    | GetTotalTokenBalancesParams,
  R =
    | unknown
    | GetTotalValueResponse
    | GetSupportedChainResponse
    | GetSpecificTokenBalanceResponse
    | GetTotalTokenBalancesResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
