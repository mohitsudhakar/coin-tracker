/**
 * Created by mohit on 13/1/18.
 */
angular.module('coin-tracker')
  .service('constantsService', function () {

    var constantsService = {}

    constantsService.myCoins = {
      bitfinex: [
        {
          name: 'ethereum-classic',
          symbol: 'ETC'
        },
        {
          name: 'zcash',
          symbol: 'ZEC'
        },
        {
          name: 'monero',
          symbol: 'XMR'
        },
        {
          name: 'ripple',
          symbol: 'XRP'
        },
        {
          name: 'iota',
          symbol: 'IOT'
        },
        {
          name: 'eos',
          symbol: 'EOS'
        },
        {
          name: 'omisego',
          symbol: 'OMG'
        },
        {
          name: 'eidoo',
          symbol: 'EDO'
        },
        {
          name: 'streamr-datacoin',
          symbol: 'DAT'
        }
      ],
      binance: [
        { // in my ether wallet
          name: 'ethereum',
          symbol: 'ETH'
        },
        // {
        //   name: 'bitcoin',
        //   symbol: 'BTC'
        // },
        {
          name: 'binance-coin',
          symbol: 'BNB'
        },
        {
          name: 'neo',
          symbol: 'NEO'
        },
        {
          name: '0x',
          symbol: 'ZRX'
        },
        {
          name: 'omisego',
          symbol: 'OMG'
        },
        {
          name: 'loopring',
          symbol: 'LRC'
        },
        {
          name: 'salt',
          symbol: 'SALT'
        },
        {
          name: 'request-network',
          symbol: 'REQ'
        },
        {
          name: 'bitshares',
          symbol: 'BTS'
        },
        {
          name: 'stellar',
          symbol: 'XLM'
        },
        {
          name: 'WABI',
          symbol: 'WABI'
        },
        {
          name: 'icon',
          symbol: 'ICX'
        },
        {
          name: 'simple-token',
          symbol: 'OST'
        }
      ],
      kucoin: [
        {
          name: 'kucoin-shares',
          symbol: 'KCS'
        },
        {
          name: 'oyster-pearl',
          symbol: 'PRL'
        },
        {
          name: 'vechain',
          symbol: 'VEN'
        },
        {
          name: 'bounty0x',
          symbol: 'BNTY'
        },
        {
          name: 'red-pulse',
          symbol: 'RPX'
        }
      ],
      bitgrail: [{name:'raiblocks', symbol: 'XRB'}]

    }

    constantsService.getNumberOfCoins = function () {
      return {
        bitfinex: [
          {
            symbol: 'ETC',
            amount: 24.97
          },
          {
            symbol: 'ZEC',
            amount: 1.012
          },
          {
            symbol: 'XMR',
            amount: 15
          },
          {
            symbol: 'XRP',
            amount: 551
          },
          {
            symbol: 'IOT',
            amount: 303
          },
          {
            symbol: 'EOS',
            amount: 62.93
          },
          {
            symbol: 'OMG',
            amount: 17.38
          },
          {
            symbol: 'EDO',
            amount: 99
          },
          {
            symbol: 'DAT',
            amount: 1000
          }
        ],
        binance: [
          { // in myetherwallet
            symbol: 'ETH',
            amount: 2.99
          },
          // {
          //   symbol: 'BTC',
          //   amount: 0
          // },
          {
            symbol: 'BNB',
            amount: 96.26
          },
          {
            symbol: 'NEO',
            amount: 12
          },
          {
            symbol: 'ZRX',
            amount: 348
          },
          {
            symbol: 'OMG',
            amount: 14.5
          },
          {
            symbol: 'LRC',
            amount: 235
          },
          {
            symbol: 'SALT',
            amount: 50
          },
          {
            symbol: 'REQ',
            amount: 500
          },
          {
            symbol: 'BTS',
            amount: 2737
          },
          {
            symbol: 'XLM',
            amount: 147
          },
          {
            symbol: 'WABI',
            amount: 50
          },
          {
            symbol: 'ICX',
            amount: 120.5
          },
          {
            symbol: 'OST',
            amount: 471
          }
        ],
        kucoin: [
          {
            symbol: 'KCS',
            amount: 15
          },
          {
            symbol: 'PRL',
            amount: 100
          },
          {
            symbol: 'VEN',
            amount: 118
          },
          {
            symbol: 'BNTY',
            amount: 449
          },
          {
            symbol: 'RPX',
            amount: 1800
          }
        ],
        bitgrail: [
          {
            symbol: 'XRB',
            amount: 180
          }
        ]
      }
    }

    constantsService.getMyBitfinexCoinStringQuery = function () {
      var bitfinexCoins = constantsService.myCoins['bitfinex']
      return bitfinexCoins.reduce(function (acc, val, index) {
        return acc + 't' + val.symbol + 'USD' + ',';
      }, '')
    }

    return constantsService;

  })
