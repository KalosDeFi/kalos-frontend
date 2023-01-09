import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'XALO',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xE9E9b8001d86C36F971d046D64983738599C7385',
    },
    token: tokens.xkalo,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x2C0FAeE1f207a6Bb4657746AF26E1Db2c4B4f6bC',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1C60Ec7fcDb05c2c5592c1d2dE2ee551AfC48f0c',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x436e40801083B254f0e9c4b1116F97585d0a24d5',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0xB2053fBcec166207abF673eE8874945Dc759b32D',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'XALO-BUSD LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x63d56A66a740B7AFff58eEa4B63F059e5D1Bf8F4',
    },
    token: tokens.xalo,
    quoteToken: tokens.busd,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  {
    pid: 54,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
    },
    token: tokens.ltc,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 555,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'EOS-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
    },
    token: tokens.eos,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
    },
    token: tokens.link,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 14,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
    },
    token: tokens.xrp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 23,
    lpSymbol: 'BCH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x54edd846db17f43b6e43296134ecd96284671e81',
    },
    token: tokens.bch,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 24,
    lpSymbol: 'YFI-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
    },
    token: tokens.yfi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'BAKE-BNB Bakery LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
    },
    token: tokens.bake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'BURGER-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
    },
    token: tokens.burger,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
    },
    token: tokens.bake,
    quoteToken: tokens.wbnb,
  },
]

export default farms
