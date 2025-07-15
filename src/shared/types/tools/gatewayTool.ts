import {
  BroadcastTransactionsParams,
  GetGasLimitParams,
  GetGasPriceParams,
  GetSupportedChainParams,
  SimulateTransactionParams,
} from "../params";
import {
  BroadcastTransactionsResponse,
  GetGasLimitResponse,
  GetGasPriceResponse,
  GetSupportedChainResponse,
  SimulateTransactionsResponse,
} from "../response/gateway";

export type GatewayTool<
  P = unknown,
  A =
    | unknown
    | GetSupportedChainParams
    | GetGasPriceParams
    | GetGasLimitParams
    | SimulateTransactionParams
    | BroadcastTransactionsParams,
  R =
    | unknown
    | GetSupportedChainResponse
    | GetGasPriceResponse
    | GetGasLimitResponse
    | SimulateTransactionsResponse
    | BroadcastTransactionsResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
