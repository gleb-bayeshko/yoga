import { Container } from '@mui/material'

const Wrapper = ({ children, ...rest }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ padding: '0 40px', maxWidth: '1760px' }}
      {...rest}
    >
      {children}
    </Container>
  )
}

export default Wrapper
