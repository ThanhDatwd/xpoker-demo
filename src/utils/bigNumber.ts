import BigNumber from "bignumber.js";

export const BIG_ZERO = new BigNumber(0);
export const BIG_TEN = new BigNumber(10);

export function normalizeTokenDecimal(tokenInWei: any, decimals = 18) {
  if (!tokenInWei) {
    return new BigNumber(0);
  }

  const bigNumber = ["string", "number"].includes(typeof tokenInWei)
    ? new BigNumber(tokenInWei)
    : tokenInWei;

  return bigNumber.div(BIG_TEN.pow(decimals));
}
