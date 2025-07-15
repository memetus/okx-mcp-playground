export type GetSupportedChainResponse = {
  code: string;
  data: {
    chainIndex: string;
    chainName: string;
    chainSymbol: string;
  }[];
  msg: string;
};

export type GetPriceResponse = {
  code: string;
  data: {
    chainIndex: string;
    tokenContractAddress: string;
    time: string;
    price: string;
  }[];
  msg: string;
};

export type GetBatchTokenPriceResponse = {
  code: string;
  msg: string;
  data: {
    chainIndex: string;
    marketCap: string;
    price: string;
    priceChange1H: string;
    priceChange24H: string;
    priceChange4H: string;
    priceChange5M: string;
    time: string;
    tokenContractAddress: string;
    volume1H: string;
    volume24H: string;
    volume4H: string;
    volume5M: string;
  }[];
};

export type GetTradesResponse = {
  code: string;
  data: {
    id: string;
    chainIndex: string;
    tokenContractAddress: string;
    txHashUrl: string;
    userAddress: string;
    dexName: string;
    poolLogoUrl: string;
    type: string;
    changedTokenInfo: {
      amount: string;
      tokenSymbol: string;
      tokenContractAddress: string;
    }[];
    price: string;
    volume: string;
    time: string;
    isFiltered: string;
  }[];
  msg: string;
};

export type GetCandleSticksResponse = {
  code: string;
  data: string[];
  msg: string;
};

export type GetCandlesticksHistoryResponse = {
  code: string;
  data: string[];
  msg: string;
};
