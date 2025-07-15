export type GetSupportedChainResponse = {
  code: string;
  data: {
    name: string;
    logoUrl: string;
    shortName: string;
    chainIndex: string;
  }[];
  msg: string;
};

export type GetGasPriceResponse = {
  code: string;
  data: {
    normal: string;
    min: string;
    max: string;
  }[];
  msg: string;
};

export type GetGasLimitResponse = {
  code: string;
  data: {
    gasLimit: string;
  }[];
  msg: string;
};

export type SimulateTransactionsResponse = {
  code: string;
  data: {
    intention: string;
    assetChange: {
      assetType: string;
      name: string;
      symbol: string;
      decimals: number;
      address: string;
      imageUrl: string;
      rawValue: string;
    }[];
    gasUsed: string;
    failReason: string;
    risks: [];
  }[];
  msg: string;
};

export type BroadcastTransactionsResponse = {
  code: string;
  data: {
    orderId: string;
    txHash: string;
  }[];
  msg: string;
};

export type GetTransactionOrdersResponse = {
  code: string;
  msg: string;
  data: {
    cursor: string;
    orders: {
      chainIndex: string;
      orderId: string;
      address: string;
      txHash: string;
      failReason: string;
      txstatus: string;
    }[];
  }[];
};
