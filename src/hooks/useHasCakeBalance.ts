import BigNumber from 'bignumber.js'
import { getXaloAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CAKE balance is at least the amount passed in
 */
const useHasKaloBalance = (minimumBalance: BigNumber) => {
  const { balance: xaloBalance } = useTokenBalance(getXaloAddress())
  return xaloBalance.gte(minimumBalance)
}

export default useHasKaloBalance
