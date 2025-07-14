export type BroadcastTransactionsParams = {
  signedTx: string;
  chainIndex: string;
  address: string;
  extraData?: string;
  enableMevProtection?: boolean;
  jitoSignedTx?: string;
};

export type GetGasPriceParams = {
  chainIndex: string;
};

export type GetGasLimitParams = {
  chainIndex: string;
  fromAddress: string;
  toAddress: string;
  txAmount?: string;
  extJson?: {
    inputData?: string;
  };
};

export type GetTransactionOrdersParams = {
  address: string;
  chainIndex: string;
  txStatus?: string;
  orderId?: string;
  cursor?: string;
  limit?: string;
};

export type SimulateTransactionParams = {
  fromAddress: string;
  toAddress: string;
  chainIndex: string;
  txAmount?: string;
  extJson: {
    inputData?: string;
  };
  priorityFee?: string;
  gasPrice?: string;
};
