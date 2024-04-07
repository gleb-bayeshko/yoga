import { useContext } from 'react'
import { styled } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { SelectContext } from './SelectMenu'

const SelectOption = ({ value, children }) => {
  const { handleItemClick, currentValue } = useContext(SelectContext)

  function handleClick() {
    handleItemClick(value)
  }

  return (
    <SelectMenuOption value={value} selected={value === currentValue} onClick={handleClick}>
      { children }
    </SelectMenuOption>
  )
}

const SelectMenuOption = styled(MenuItem)`
  font-family: ${props => props.theme.typography.fontFamily};
`

export default SelectOption
