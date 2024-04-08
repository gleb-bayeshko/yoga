import { Container, styled } from '@mui/material'

const Wrapper = ({ children, ...rest }) => {
  return (
    <WrapperComponent
      maxWidth={false}
      disableGutters
      {...rest}
    >
      {children}
    </WrapperComponent>
  )
}

const WrapperComponent = styled(Container)`
  padding: 0 50px;
  max-width: 1780px;
  
  ${props => props.theme.breakpoints.down('md')} {
    padding: 0 24px; 
  }
`

export default Wrapper
