export function weiToETH(weiAmount: bigint): number {
  return Number(weiAmount) / 10 ** 18;
}

export function ETHToWei(ETHAmount: number): bigint {
  return BigInt(ETHAmount * 10 ** 18);
}
