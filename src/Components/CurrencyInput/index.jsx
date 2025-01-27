import { NumericFormat } from 'react-number-format'

const styles = {
  outline: 'none',
  width: '50%',
  fontSize: 'inherit',
  color: 'black',
}

const CurrencyInput = ({ value, onChange }) => {
  return (
    <NumericFormat
      value={value}
      onValueChange={(values) => {
        const { value: rawValue } = values
        if (onChange) onChange(rawValue)
      }}
      thousandSeparator=","
      decimalScale={2}
      fixedDecimalScale={true}
      style={styles}
    />
  )
}

export default CurrencyInput
