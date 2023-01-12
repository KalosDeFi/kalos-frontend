import BigNumber from 'bignumber.js'
import { convertSharesToXalo } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import kalosVaultAbi from 'config/abi/KalosVault.json'
import { getKalosVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestXaloRewards',
      'calculateTotalPendingXaloRewards',
    ].map((method) => ({
      address: getKalosVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedXaloBountyReward], [totalPendingXaloHarvest]] = await multicallv2(
      kalosVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalXaloInVaultEstimate = convertSharesToXalo(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalXaloInVault: totalXaloInVaultEstimate.xaloAsBigNumber.toJSON(),
      estimatedXaloBountyReward: new BigNumber(estimatedXaloBountyReward.toString()).toJSON(),
      totalPendingXaloHarvest: new BigNumber(totalPendingXaloHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalXaloInVault: null,
      estimatedXaloBountyReward: null,
      totalPendingXaloHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getKalosVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(kalosVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
