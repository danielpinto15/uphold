import './styles.css'
import React from 'react'

const CurrencyDisplay = ({ rates, amount }) => {
  return (
    <div data-testid="currency-grid" className="currency-display-grid">
      {rates &&
        rates.map((rate) => {
          return (
            <div
              data-testid={rate.pair}
              key={rate.pair}
              className="currency-display-item"
            >
              <p>{(Number(rate.ask) * amount)?.toFixed(4)}</p>
              <div className="currency-info">
                <img
                  src={`assets/${rate.pair.toUpperCase()}.png`}
                  alt={rate.pair}
                  className="currency-flag"
                />
                <p>{rate.pair}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default CurrencyDisplay
