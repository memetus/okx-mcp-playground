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

export type GetHistoryByAddressResponse = {
  code: string;
  msg: string;
  data: {
    cursor: string;
    transactionList: {
      chainIndex: string;
      txHash: string;
      methodId: string;
      nonce: string;
      txTime: string;
      from: {
        address: string;
        amount: string;
      }[];
      to: {
        address: string;
        amount: string;
      }[];
      tokenContractAddress: string;
      amount: string;
      symbol: string;
      txFee: string;
      txStatus: string;
      hitBlacklist: boolean;
      itype: string;
    }[];
  }[];
};

export type GetSpecificTransactionResponse = {
  code: string;
  msg: string;
  data: {
    chainIndex: string;
    height: string;
    txTime: string;
    txhash: string;
    gasLimit: string;
    gasUsed: string;
    gasPrice: string;
    txFee: string;
    nonce: string;
    symbol: string;
    amount: string;
    txStatus: string;
    methodId: string;
    l1OriginHash: string;
    fromDetails: {
      address: string;
      vinIndex: string;
      preVoutIndex: string;
      txHash: string;
      isContract: boolean;
      amount: string;
    }[];
    toDetails: {
      address: string;
      voutIndex: string;
      isContract: boolean;
      amount: string;
    }[];
    internalTransactionDetails: {
      from: string;
      to: string;
      isFromContract: boolean;
      isToContract: boolean;
      amount: string;
      txStatus: string;
    }[];
    tokenTransferDetails: [];
  }[];
};
