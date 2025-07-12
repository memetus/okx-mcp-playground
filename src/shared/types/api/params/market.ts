export type GetSupportedChainParams = {
  chainIndex: string;
};

export type GetPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
};

export type GetTradesParams = {
  chainIndex: string;
  tokenContractAddress: string;
  after?: string;
  before?: string;
};

export type GetCandleSticksParams = {
  chainIndex: string;
  tokenContractAddress: string;
  after?: string;
  before?: string;
  bar?: string;
  limit?: number;
};

export type GetCandlesticksHistoryParams = {
  chainIndex: string;
  tokenContractAddress: string;
  after?: string;
  before?: string;
  bar?: string;
  limit?: number;
};
