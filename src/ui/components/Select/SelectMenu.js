import { createContext, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
import SelectArrowDown from '../../icons/SelectArrowDown'

export const SelectContext = createContext({})

const SelectMenu = ({ children, defaultValue, onChange, menuTitle, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(defaultValue)

  function handleClick(e){
    setAnchorEl(e.currentTarget)
    setMenuOpen(true)
  }
  function handleClose() {
    setAnchorEl(null)
    setMenuOpen(false)
  }

  function handleItemClick(value) {
    setCurrentValue(value)
    onChange(value)
    handleClose()
  }

  return (
    <div>
      <MainButton
        display="flex"
        alignItems="center"
        onClick={handleClick}
      >
        <TextButton
          variant="body1"
          sx={{ fontWeight: '500' }}
        >
          {currentValue}
        </TextButton>
        <ArrowContainer open={menuOpen}>
          <SelectArrowDown />
        </ArrowContainer>
      </MainButton>
      <Menu
        open={menuOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuPopoverTitle variant="h5">
          {menuTitle}
        </MenuPopoverTitle>
        <SelectContext.Provider value={{ handleItemClick, currentValue }}>
          {children}
        </SelectContext.Provider>
      </Menu>
    </div>
  )
}

const TextButton = styled(Typography)`
  font-weight: 500;
  margin-right: 5.5px;
  user-select: none;
`

const ArrowContainer = styled('div')`
  margin-bottom: 3px;
  transform: rotate(${props => props.open ? '180deg' : '0deg'});
  transition: transform ${props => props.theme.transitions.duration.short}ms;
  transform-origin: center;
`

const MainButton = styled(Box)`
  cursor: pointer;
`

const MenuPopoverTitle = styled(Typography)`
  padding: 0 16px 8px;
  font-weight: 700;
  font-family: ${props => props.theme.typography.fontFamily};
`

export default SelectMenu
