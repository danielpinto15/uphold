import SDK from '@uphold/uphold-sdk-javascript'
import { currencies } from '../utils/constants'

const sdk = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'foo',
  clientSecret: 'bar',
})

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await sdk.getTicker(`${baseCurrency}`)

    const filteredResponse = response
      ?.map((rate) => ({
        pair: rate.pair.replace(`${rate.currency}`, '').replace('-', ''),
        ask: rate.ask,
      }))
      .filter(
        (rate) =>
          currencies[rate.pair] && currencies[rate.pair].code !== baseCurrency,
      )

    return filteredResponse
  } catch (error) {
    console.error('Error fetching exchange rates:', error)
    return {}
  }
}
