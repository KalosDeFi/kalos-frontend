import BigNumber from 'bignumber.js'
import { getKalosVaultContract } from 'utils/contractHelpers'

const kalosVaultContract = getKalosVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await kalosVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      xaloAtLastUserAction: new BigNumber(userContractResponse.xaloAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      xaloAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
