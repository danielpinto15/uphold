import { useEffect, useState } from 'react'
import Select from 'react-select'
import { currencies } from '../../utils/constants'

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '25px',
  }),
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
}

const formatOptionLabel = ({ name, image }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={image}
      alt={name}
      style={{ width: '20px', marginRight: '10px' }}
    />
    {name}
  </div>
)

export default function CurrencySelect({ onChange }) {
  const [selectedOption, setSelectedOption] = useState({
    value: 'USD',
    label: 'USD',
    name: 'USD',
    image: 'assets/USD.png',
  })

  useEffect(() => {
    onChange && onChange(selectedOption.value)
  }, [selectedOption, onChange])

  const options = Object.entries(currencies).map(
    ([key, { code, name, image }]) => {
      return {
        value: code,
        label: name,
        name,
        image,
      }
    },
  )

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={(option) => setSelectedOption(option)}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
    />
  )
}
