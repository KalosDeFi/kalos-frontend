import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { simpleRpcProvider } from 'utils/providers'
import useRefresh from 'hooks/useRefresh'
import {
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
  fetchKalosVaultPublicData,
  fetchKalosVaultUserData,
  fetchKalosVaultFees,
  fetchPoolsStakingLimitsAsync,
} from '.'
import { State, Pool } from '../types'
import { transformPool } from './helpers'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      const blockNumber = await simpleRpcProvider.getBlockNumber()
      dispatch(fetchPoolsPublicDataAsync(blockNumber))
    }

    fetchPoolsPublicData()
    dispatch(fetchPoolsStakingLimitsAsync())
  }, [dispatch, slowRefresh])
}

export const usePools = (account): { pools: Pool[]; userDataLoaded: boolean } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const { pools, userDataLoaded } = useSelector((state: State) => ({
    pools: state.pools.data,
    userDataLoaded: state.pools.userDataLoaded,
  }))
  return { pools: pools.map(transformPool), userDataLoaded }
}

export const useFetchKalosVault = () => {
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchKalosVaultPublicData())
  }, [dispatch, fastRefresh])

  useEffect(() => {
    dispatch(fetchKalosVaultUserData({ account }))
  }, [dispatch, fastRefresh, account])

  useEffect(() => {
    dispatch(fetchKalosVaultFees())
  }, [dispatch])
}

export const useKalosVault = () => {
  const {
    totalShares: totalSharesAsString,
    pricePerFullShare: pricePerFullShareAsString,
    totalXaloInVault: totalXaloInVaultAsString,
    estimatedXaloBountyReward: estimatedXaloBountyRewardAsString,
    totalPendingXaloHarvest: totalPendingXaloHarvestAsString,
    fees: { performanceFee, callFee, withdrawalFee, withdrawalFeePeriod },
    userData: {
      isLoading,
      userShares: userSharesAsString,
      xaloAtLastUserAction: xaloAtLastUserActionAsString,
      lastDepositedTime,
      lastUserActionTime,
    },
  } = useSelector((state: State) => state.pools.kalosVault)

  const estimatedXaloBountyReward = useMemo(() => {
    return new BigNumber(estimatedXaloBountyRewardAsString)
  }, [estimatedXaloBountyRewardAsString])

  const totalPendingXaloHarvest = useMemo(() => {
    return new BigNumber(totalPendingXaloHarvestAsString)
  }, [totalPendingXaloHarvestAsString])

  const totalShares = useMemo(() => {
    return new BigNumber(totalSharesAsString)
  }, [totalSharesAsString])

  const pricePerFullShare = useMemo(() => {
    return new BigNumber(pricePerFullShareAsString)
  }, [pricePerFullShareAsString])

  const totalXaloInVault = useMemo(() => {
    return new BigNumber(totalXaloInVaultAsString)
  }, [totalXaloInVaultAsString])

  const userShares = useMemo(() => {
    return new BigNumber(userSharesAsString)
  }, [userSharesAsString])

  const xaloAtLastUserAction = useMemo(() => {
    return new BigNumber(xaloAtLastUserActionAsString)
  }, [xaloAtLastUserActionAsString])

  return {
    totalShares,
    pricePerFullShare,
    totalXaloInVault,
    estimatedXaloBountyReward,
    totalPendingXaloHarvest,
    fees: {
      performanceFee,
      callFee,
      withdrawalFee,
      withdrawalFeePeriod,
    },
    userData: {
      isLoading,
      userShares,
      xaloAtLastUserAction,
      lastDepositedTime,
      lastUserActionTime,
    },
  }
}
