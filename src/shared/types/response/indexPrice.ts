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

export type GetTokenIndexPriceResponse = {
  code: string;
  msg: string;
  data: {
    chainIndex: string;
    tokenContractAddress: string;
    time: string;
    price: string;
  }[];
};

export type GetHistoricalIndexPriceResponse = {
  code: string;
  msg: string;
  data: {
    cursor: string;
    prices: {
      time: string;
      price: string;
    }[];
  }[];
};
