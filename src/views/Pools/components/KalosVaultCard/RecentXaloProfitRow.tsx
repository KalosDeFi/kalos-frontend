import React from 'react'
import { Flex, Text } from '@kalosdefi/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceXaloBusd } from 'state/farms/hooks'
import { useKalosVault } from 'state/pools/hooks'
import { getKalosVaultEarnings } from 'views/Pools/helpers'
import RecentXaloProfitBalance from './RecentXaloProfitBalance'

const RecentXaloProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { xaloAtLastUserAction, userShares, lastUserActionTime },
  } = useKalosVault()
  const xaloPriceBusd = usePriceXaloBusd()
  const { hasAutoEarnings, autoXaloToDisplay, autoUsdToDisplay } = getKalosVaultEarnings(
    account,
    xaloAtLastUserAction,
    userShares,
    pricePerFullShare,
    xaloPriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent XALO profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentXaloProfitBalance
          cakeToDisplay={autoCakeToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentXaloProfitCountdownRow
