import React from 'react'
import { Text, TooltipText, useTooltip } from '@kalosdefi/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentXaloProfitBalanceProps {
  xaloToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentXaloProfitBalance: React.FC<RecentXaloProfitBalanceProps> = ({
  xaloToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={xaloToDisplay} decimals={3} bold unit=" XALO" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={xaloToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentXaloProfitBalance
