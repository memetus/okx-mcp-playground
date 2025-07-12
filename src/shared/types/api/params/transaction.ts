export type GetHitoryByAddressParams = {
  address: string;
  chains?: string;
  tokenContractAddrdss?: string;
  begin?: string;
  end?: string;
  cursor?: string;
  lmit?: string;
};

export type GetSpecificTransactionParams = {
  chainIndex: string;
  txHash: string;
  type?: string;
};
