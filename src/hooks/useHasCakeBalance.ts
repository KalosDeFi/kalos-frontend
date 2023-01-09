import BigNumber from 'bignumber.js'
import { getKaloAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CAKE balance is at least the amount passed in
 */
const useHasKaloBalance = (minimumBalance: BigNumber) => {
  const { balance: xaloBalance } = useTokenBalance(getKaloAddress())
  return xaloBalance.gte(minimumBalance)
}

export default useHasKaloBalance
