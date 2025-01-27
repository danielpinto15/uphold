import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CurrencyDisplay from './index'

describe('CurrencyDisplay Component', () => {
  const rates = [
    { pair: 'eur', ask: '0.85' },
    { pair: 'usd', ask: '5.25' },
  ]
  const amount = 100

  it('renders the currency grid correctly', () => {
    render(<CurrencyDisplay rates={rates} amount={amount} />)
    const grid = screen.getByTestId('currency-grid')
    expect(grid).toBeInTheDocument()
    expect(grid.children.length).toBe(rates.length)
  })

  it('renders the correct currency values', () => {
    render(<CurrencyDisplay rates={rates} amount={amount} />)
    rates.forEach((rate) => {
      const expectedValue = (Number(rate.ask) * amount).toFixed(4)
      const currencyElement = screen.getByTestId(rate.pair)
      expect(currencyElement).toBeInTheDocument()
      expect(screen.getByText(expectedValue)).toBeInTheDocument()
    })
  })

  it('renders the currency flags and pairs correctly', () => {
    render(<CurrencyDisplay rates={rates} amount={amount} />)
    rates.forEach((rate) => {
      const currencyElement = screen.getByTestId(rate.pair)
      const img = currencyElement.querySelector('img')
      const pairText = screen.getByText(rate.pair)

      expect(img).toHaveAttribute(
        'src',
        `assets/${rate.pair.toUpperCase()}.png`,
      )
      expect(img).toHaveAttribute('alt', rate.pair)
      expect(pairText).toBeInTheDocument()
    })
  })

  it('renders nothing if rates are not provided', () => {
    render(<CurrencyDisplay rates={null} amount={amount} />)
    const grid = screen.queryByTestId('currency-grid')
    expect(grid).toBeEmptyDOMElement()
  })
})
