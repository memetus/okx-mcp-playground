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
  after?: string | undefined;
  before?: string | undefined;
};

export type GetCandlesticksParams = {
  chainIndex: string;
  tokenContractAddress: string;
  after?: string | undefined;
  before?: string | undefined;
  bar?: string | undefined;
  limit?: number | undefined;
};

export type GetCandlesticksHistoryParams = {
  chainIndex: string;
  tokenContractAddress: string;
  after?: string | undefined;
  before?: string | undefined;
  bar?: string | undefined;
  limit?: number | undefined;
};

export type GetBatchTokenPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
};
