export type GetTotalValueParams = {
  address: string;
  chains: string;
  assetType?: string;
  excludeRiskToken?: boolean;
};

export type GetSpecificTokenBalanceParams = {
  address: string;
  tokenContractAddresses: string[];
  chainIndex: string;
  tokenContractAddress: string;
  excludeRiskToken?: boolean;
};

export type GetTotalTokenBalanceesParams = {
  address: string;
  chains: string[];
  excludeRiskToken?: boolean;
};
