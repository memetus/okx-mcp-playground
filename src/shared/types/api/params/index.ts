export type GetTokenIndexPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
};

export type GetHistoryicalIndexPriceParams = {
  chainIndex: string;
  tokenContractAddress: string;
  limit?: string;
  cursor?: string;
  begin?: string;
  end?: string;
  period?: string;
};
