import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kalo,
    earningToken: tokens.kalo,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1172fAC86615CF70A941896F36d889771B8B9EF7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
