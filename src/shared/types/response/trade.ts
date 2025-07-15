export type GetSupportedChainsResponse = {
  code: string;
  data: {
    chainIndex: string;
    chainId: string;
    chainName: string;
    dexTokenApproveAddress: string;
  }[];
  msg: string;
};

export type GetTokensResponse = {
  code: string;
  data: {
    decimals: string;
    tokenContractAddress: string;
    tokenLogoUrl: string;
    tokenName: string;
    tokenSymbol: string;
  }[];
  msg: string;
};

export type GetLiquiditySourcesResponse = {
  code: string;
  data: {
    id: string;
    logo: string;
    name: string;
  }[];
  msg: string;
};

export type ApproveTransactionsResponse = {
  code: string;
  data: {
    data: string;
    dexContractAddress: string;
    gasLimit: string;
    gasPrice: string;
  }[];
  msg: string;
};

export type GetQuotesResponse = {
  code: string;
  data: [
    {
      chainId: string;
      dexRouterList: {
        router: string;
        routerPercent: string;
        subRouterList: {
          dexProtocol: {
            dexName: string;
            percent: string;
          }[];
          fromToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
          toToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
        }[];
      }[];
      estimateGasFee: string;
      fromToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      fromTokenAmount: string;
      originToTokenAmount: string;
      priceImpactPercentage: string;
      quoteCompareList: {
        amountOut: string;
        dexLogo: string;
        dexName: string;
        tradeFee: string;
      }[];
      swapMode: string;
      toToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      toTokenAmount: string;
      tradeFee: string;
    }
  ];
  msg: string;
};

export type GetSwapInstructionsResponse = {
  code: string;
  msg: string;
  data: {
    addressLookupTableAccount: string[];
    instructionLists: {
      data: string;
      accounts: {
        isSigner: boolean;
        isWritable: boolean;
        pubkey: string;
      }[];
      programId: string;
    }[];
    routerResult: {
      chainId: string;
      chainIndex: string;
      dexRouterList: {
        router: string;
        routerPercent: string;
        subRouterList: {
          dexProtocol: {
            dexName: string;
            percent: string;
          }[];
          fromToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
          toToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
        }[];
      }[];
      estimateGasFee: string;
      fromToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      fromTokenAmount: string;
      priceImpactPercentage: string;
      quoteCompareList: {
        amountOut: string;
        dexLogo: string;
        dexName: string;
        tradeFee: string;
      }[];
      swapMode: string;
      toToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      toTokenAmount: string;
      tradeFee: string;
    };
    tx: {
      from: string;
      minReceiveAmount: string;
      slippage: string;
      to: string;
    };
  };
};

export type ExecuteSwapResponse = {
  code: string;
  msg: string;
  data: {
    routerResult: {
      chainId: string;
      chainIndex: string;
      dexRouterList: {
        router: string;
        routerPercent: string;
        subRouterList: {
          dexProtocol: {
            dexName: string;
            percent: string;
          }[];
          fromToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
          toToken: {
            decimal: string;
            isHoneyPot: boolean;
            taxRate: string;
            tokenContractAddress: string;
            tokenSymbol: string;
            tokenUnitPrice: string;
          };
        }[];
      }[];
      estimateGasFee: string;
      fromToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      fromTokenAmount: string;
      priceImpactPercentage: string;
      quoteCompareList: {
        amountOut: string;
        dexLogo: string;
        dexName: string;
        tradeFee: string;
      }[];
      toToken: {
        decimal: string;
        isHoneyPot: boolean;
        taxRate: string;
        tokenContractAddress: string;
        tokenSymbol: string;
        tokenUnitPrice: string;
      };
      toTokenAmount: string;
      tradeFee: string;
    };
    tx: {
      data: string;
      from: string;
      gas: string;
      gasPrice: string;
      maxPriorityFeePerGas: string;
      minReceiveAmount: string;
      signatureData: string[];
      to: string;
      value: string;
    };
  }[];
};

export type GetTransactionStatusResponse = {
  code: string;
  msg: string;
  data: {
    chainId: string;
    chainIndex: string;
    dexRouter: string;
    errorMsg: string;
    fromAddress: string;
    fromTokenDetails: {
      amount: string;
      symbol: string;
      tokenAddress: string;
    };
    gasLimit: string;
    gasPrice: string;
    gasUsed: string;
    height: string;
    referralAmount: string;
    status: string;
    toAddress: string;
    toTokenDetails: {
      amount: string;
      symbol: string;
      tokenAddress: string;
    };
    txFee: string;
    txHash: string;
    txTime: string;
    txType: string;
  };
};
