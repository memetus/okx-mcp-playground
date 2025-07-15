export type GetSupportedChainsParams = {
  chainIndex: string;
  chainId?: string | undefined;
};

export type GetTokensParams = {
  chainIndex: string;
  chainId: string;
};

export type GetLiquiditySourcesParams = {
  chainIndex: string;
  chainId: string;
};

export type ApproveTransactionsParams = {
  chainIndex: string;
  chainId: string;
  tokenContractAddress: string;
  approveAmount: string;
};

export type GetQuotesParams = {
  chainIndex: string;
  chainId: string;
  amount: string;
  swapMode: string;
  fromTokenAddress: string;
  toTokenAddress: string;
  dexIds?: string | undefined;
  directRoute?: boolean | undefined;
  priceImpactProtectionPercentage?: string | undefined;
  feePercent?: string | undefined;
};

export type GetSwapInstructionsParams = {
  chainIndex: string;
  chainId: string;
  amount: string;
  fromTokenAddress: string;
  toTokenAddress: string;
  slippage: string;
  autoSlippage?: boolean | undefined;
  maxAutoSlippage?: string | undefined;
  userWalletAddress: string;
  swapReceiverAddress?: string | undefined;
  feePercent?: string | undefined;
  fromTokenReferrerWalletAddress?: string | undefined;
  toTokenReferrerWalletAddress?: string | undefined;
  positiveSlippagePercent?: string | undefined;
  positiveSlippageFeeAddress?: string | undefined;
  dexIds?: string | undefined;
  directRoute?: boolean | undefined;
  priceImpactProtectionPercentage?: string | undefined;
  computeUnitPrice?: string | undefined;
  computeUnitLimit?: string | undefined;
};

export type ExecuteSwapParams = {
  chainIndex: string;
  chainId: string;
  amount: string;
  swapMode: string;
  fromTokenAddress: string;
  toTokenAddress: string;
  slippage: string;
  userWalletAddress: string;
  swapReceiverAddress?: string | undefined;
  feePercent?: string | undefined;
  fromTokenReferrerWalletAddress?: string | undefined;
  toTokenReferrerWalletAddress?: string | undefined;
  positiveSlippagePercent?: string | undefined;
  positiveSlippageFeeAddress?: string | undefined;
  gasLevel?: string | undefined;
  gasPrice?: string | undefined;
  tips?: string | undefined;
  dexIds?: string | undefined;
  directRoute?: boolean | undefined;
  priceImpactProtectionPercentage?: string | undefined;
  computeUnitPrice?: string | undefined;
  computeUnitLimit?: string | undefined;
  callDataMemo?: string | undefined;
  autoSlippage?: boolean | undefined;
  maxAutoSlippage?: string | undefined;
};

export type GetTransactionStatusParams = {
  chainIndex: string;
  chainId: string;
  txHash: string;
  isFromMyProject?: boolean | undefined;
};
