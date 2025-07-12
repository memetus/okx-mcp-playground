export type GetAllTokensParams = {
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
  dexIds?: string;
  directRoute?: boolean;
  priceImpactProtectionPercentage?: string;
  feePercent?: string;
};

export type GetSwapInstructionsParams = {
  chainIndex: string;
  chainId: string;
  amount: string;
  fromTokenAddress: string;
  toTokenAddress: string;
  slippage: string;
  autoSlippage?: boolean;
  maxAutoSlippage?: string;
  userWalletAddress: string;
  swapReceiverAddress?: string;
  feePercent?: string;
  fromTokenReferrerWalletAddress?: string;
  toTokenReferrerWalletAddress?: string;
  positiveSlippagePercent?: string;
  positiveSlippageFeeAddress?: string;
  dexIds?: string;
  directRoute?: boolean;
  priceImpactProtectionPercentage?: string;
  computeUnitPrice?: string;
  computeUnitLimit?: string;
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
  swapReceiverAddress?: string;
  feePercent?: string;
  fromTokenReferrerWalletAddress?: string;
  toTokenReferrerWalletAddress?: string;
  positiveSlippagePercent?: string;
  positiveSlippageFeeAddress?: string;
  gasLevel?: string;
  gasPrice?: string;
  tips?: string;
  dexIds?: string;
  directRoute?: boolean;
  priceImpactProtectionPercentage?: string;
  computeUnitPrice?: string;
  computeUnitLimit?: string;
  callDataMemo?: string;
  autoSlippage?: boolean;
  maxAutoSlippage?: string;
};

export type GetTransactionStatusParams = {
  chainIndex: string;
  chainId: string;
  txHash: string;
  isFromMyProject?: boolean;
};
