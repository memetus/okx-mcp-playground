export type GetHitoryByAddressParams = {
  address: string;
  chains?: string | undefined;
  tokenContractAddrdss?: string | undefined;
  begin?: string | undefined;
  end?: string | undefined;
  cursor?: string | undefined;
  lmit?: string | undefined;
};

export type GetSpecificTransactionParams = {
  chainIndex: string;
  txHash: string;
  type?: string | undefined;
};
