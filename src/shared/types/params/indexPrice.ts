export type GetTokenIndexPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
};

export type GetHistoricalIndexPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
  limit?: string;
  cursor?: string;
  begin?: string;
  end?: string;
  period?: string;
};
