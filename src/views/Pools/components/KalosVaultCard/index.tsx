import React from 'react'
import styled from 'styled-components'
import { Box, CardBody, Flex, Text, useMatchBreakpoints } from '@kalosdefi/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import tokens from 'config/constants/tokens'
import { useKalosVault } from 'state/pools/hooks'
import { Pool } from 'state/types'
import AprRow from '../PoolCard/AprRow'
import { StyledCard, StyledCardInner } from '../PoolCard/StyledCard'
import CardFooter from '../PoolCard/CardFooter'
import StyledCardHeader from '../PoolCard/StyledCardHeader'
import VaultCardActions from './VaultCardActions'
import UnstakingFeeCountdownRow from './UnstakingFeeCountdownRow'
import RecentXaloProfitRow from './RecentXaloProfitRow'

const StyledCardBody = styled(CardBody)<{ isLoading: boolean }>`
  min-height: ${({ isLoading }) => (isLoading ? '0' : '254px')};
`

interface KalosVaultProps {
  pool: Pool
  showStakedOnly: boolean
}

const KalosVaultCard: React.FC<KalosVaultProps> = ({ pool, showStakedOnly }) => {
  const { t } = useTranslation()
  const { isXl } = useMatchBreakpoints()
  const { account } = useWeb3React()
  const {
    userData: { userShares, isLoading: isVaultUserDataLoading },
    fees: { performanceFee },
  } = useKalosVault()

  const accountHasSharesStaked = userShares && userShares.gt(0)
  const isLoading = !pool.userData || isVaultUserDataLoading
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  if (showStakedOnly && !accountHasSharesStaked) {
    return null
  }

  return (
    <StyledCard isPromoted={{ isDesktop: isXl }}>
      <StyledCardInner>
        <StyledCardHeader
          isStaking={accountHasSharesStaked}
          isAutoVault
          earningToken={tokens.xalo}
          stakingToken={tokens.xalo}
        />
        <StyledCardBody isLoading={isLoading}>
          <AprRow pool={pool} performanceFee={performanceFeeAsDecimal} />
          <Box mt="24px">
            <RecentXaloProfitRow />
          </Box>
          <Box mt="8px">
            <UnstakingFeeCountdownRow />
          </Box>
          <Flex mt="32px" flexDirection="column">
            {account ? (
              <VaultCardActions pool={pool} accountHasSharesStaked={accountHasSharesStaked} isLoading={isLoading} />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                  {t('Start earning')}
                </Text>
                <ConnectWalletButton />
              </>
            )}
          </Flex>
        </StyledCardBody>
        <CardFooter pool={pool} account={account} />
      </StyledCardInner>
    </StyledCard>
  )
}

export default KalosVaultCard
