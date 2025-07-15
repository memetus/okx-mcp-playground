export type BroadcastTransactionsParams = {
  signedTx: string;
  chainIndex: string;
  address: string;
  extraData?: string | undefined;
  enableMevProtection?: boolean | undefined;
  jitoSignedTx?: string | undefined;
};

export type GetGasPriceParams = {
  chainIndex: string;
};

export type GetGasLimitParams = {
  chainIndex: string;
  fromAddress: string;
  toAddress: string;
  txAmount?: string | undefined;
  extJson?:
    | {
        inputData?: string | undefined;
      }
    | undefined;
};

export type GetTransactionOrdersParams = {
  address: string;
  chainIndex: string;
  txStatus?: string | undefined;
  orderId?: string | undefined;
  cursor?: string | undefined;
  limit?: string | undefined;
};

export type SimulateTransactionParams = {
  fromAddress: string;
  toAddress: string;
  chainIndex: string;
  txAmount?: string | undefined;
  extJson: {
    inputData: string;
  };
  priorityFee?: string | undefined;
  gasPrice?: string | undefined;
};
