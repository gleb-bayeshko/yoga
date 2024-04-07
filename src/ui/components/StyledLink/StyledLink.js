import { styled } from '@mui/material'
import Link from 'next/link'

const StyledLink = props => (
  <StyledLinkElement {...props} />
)

const StyledLinkElement = styled(Link)`
  text-decoration: none;
  color: ${props => props.highlighted ? props.theme.palette.primary.main : props.theme.palette.black.main};
  transition: color ${props => props.theme.transitions.duration.standard}ms;
  
  &:hover {
    color: ${props => props.highlighted ? props.theme.palette.primary.mainContrast : props.theme.palette.primary.main};
  }
`

export default StyledLink
