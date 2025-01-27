import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CurrencyInput from './index'

describe('CurrencyInput Component', () => {
  it('renders the input correctly with the initial value', () => {
    render(<CurrencyInput value="1000" onChange={() => {}} />)

    // Busca pelo input baseado no papel (role)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle({
      outline: 'none',
      width: '50%',
      fontSize: 'inherit',
      color: 'rgb(0, 0, 0)',
    })

    // Verifica que o valor inicial foi corretamente exibido
    expect(input.value).toBe('1,000.00')
  })

  it('calls onChange with the correct raw value when input changes', () => {
    const handleChange = vi.fn()
    render(<CurrencyInput value="1000" onChange={handleChange} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '2,000' } })

    // Simula uma mudança e verifica o valor bruto enviado
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('2000.00')
  })

  it('formats decimal values correctly', () => {
    const handleChange = vi.fn()
    render(<CurrencyInput value="1234.56" onChange={handleChange} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '3,456.78' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('3456.78')
  })

  it('handles empty input correctly', () => {
    const handleChange = vi.fn()
    render(<CurrencyInput value="1000" onChange={handleChange} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('')
  })
})
