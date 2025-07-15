import {
  GetHitoryByAddressParams,
  GetSpecificTransactionParams,
} from "../params";
import {
  GetHistoryByAddressResponse,
  GetSpecificTransactionResponse,
} from "../response/transaction";

export type TransactionTool<
  P = unknown,
  A = unknown | GetHitoryByAddressParams | GetSpecificTransactionParams,
  R = unknown | GetHistoryByAddressResponse | GetSpecificTransactionResponse
> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
