export type GetTotalValueParams = {
  address: string;
  chains: string;
  assetType?: string | undefined;
  excludeRiskToken?: boolean | undefined;
};

export type GetSpecificTokenBalanceParams = {
  address: string;
  tokenContractAddresses: string[];
  chainIndex: string;
  tokenContractAddress: string;
  excludeRiskToken?: string | undefined;
};

export type GetTotalTokenBalancesParams = {
  address: string;
  chains: string[];
  excludeRiskToken?: string | undefined;
};
