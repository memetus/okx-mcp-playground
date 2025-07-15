export type GetTotalValueResponse = {
  code: string;
  msg: string;
  data: {
    totalValue: string;
  }[];
};

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

export type GetSpecificTokenBalanceResponse = {
  code: string;
  msg: string;
  data: {
    tokenAssets: {
      chainIndex: string;
      tokenContractAddress: string;
      symbol: string;
      balance: string;
      tokenPrice: string;
      isRiskToken: boolean;
      rawBalance: string;
      address: string;
    }[];
  }[];
};

export type GetTotalTokenBalancesResponse = {
  code: string;
  msg: string;
  data: {
    tokenAssets: {
      chainIndex: string;
      tokenContractAddress: string;
      symbol: string;
      balance: string;
      tokenPrice: string;
      isRiskToken: boolean;
      rawBalance: string;
      address: string;
    }[];
  }[];
};
