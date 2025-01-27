import { useCallback, useEffect, useState } from 'react'
import { fetchExchangeRates } from './services/upHoldApi'

import CurrencyInput from './Components/CurrencyInput'
import CurrencyDisplay from './Components/CurrencyDisplay'
import useDebounce from './hooks/useDebounce'
import CurrencySelect from './Components/CurrencySelect'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import LoadingSpinner from './Components/LoadingSpinner'
import './App.css'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [rates, setRates] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [isLoading, setIsLoading] = useState(false)
  const debouncedAmount = useDebounce(amount || 1, 500)

  const fetchRates = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await fetchExchangeRates(selectedCurrency)
      setRates(data)
    } finally {
      setIsLoading(false)
    }
  }, [selectedCurrency])

  useEffect(() => {
    fetchRates()
  }, [selectedCurrency, fetchRates])

  return (
    <div className="rootContainer">
      <Navbar />
      <div className="container">
        <h1>Currency Converter</h1>
        <h3>
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </h3>
        <div className="currency-container">
          <CurrencyInput value={amount} onChange={setAmount} />
          <CurrencySelect onChange={setSelectedCurrency} />
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : amount > 0 ? (
          <CurrencyDisplay rates={rates} amount={debouncedAmount} />
        ) : (
          <div className="no-amount-container">
            <p>Enter an amount to check the rates</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
