import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KalosDeFi',
  description:
    'Kalos Protocol AMM on BSC by user count! Earn XALO through yield farming and more, then stake it in Pools to earn more tokens!',
  image: 'https://singular-smakager-6fd53b.netlify.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PancakeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PancakeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PancakeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PancakeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PancakeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PancakeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PancakeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PancakeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PancakeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
