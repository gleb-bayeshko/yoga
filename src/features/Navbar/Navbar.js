'use client'

import { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import SelectMenu from '../../ui/components/Select/SelectMenu'
import SelectOption from '../../ui/components/Select/SelectOption'
import StyledLink from '../../ui/components/StyledLink/StyledLink'
import Wrapper from '../../ui/components/Wrapper/Wrapper'
import Logo from '../../ui/icons/Logo'
import { cities, links, socials } from './const'

const Navbar = () => {
  const [city, setCity] = useState(cities[0])

  return (
    <Wrapper>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" paddingY="20px">
          <LogoContainer href="/">
            <Logo />
            <LogoTitle>
              Yoga Doggy
            </LogoTitle>
          </LogoContainer>
          <SelectMenu
            defaultValue={city}
            onChange={() => {}}
            menuTitle="Выберите город"
          >
            {cities.map(city => (
              <SelectOption value={city} key={city}>{city}</SelectOption>
            ))}
          </SelectMenu>
        </Box>
        <Box display="flex">
          {links.map(({ id, title, link }) => (
            <NavBarLink href={link} key={id}>
              {title}
            </NavBarLink>
          ))}
        </Box>
        <Box display="flex" alignItems="center">
          <Phone href="tel:88001234567">
            8 800 123 45 67
          </Phone>
          <Box display="flex">
            {socials.map(({ id, link, Icon }) => (
              <SocialLink key={id} href={link}>
                <Icon />
              </SocialLink>
            ))}
          </Box>
          <LogInLink href="#">
            <Button variant="default">
              Войти в кабинет
            </Button>
          </LogInLink>
        </Box>
      </Box>
    </Wrapper>
  )
}

const LogoTitle = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
  font-weight: 600;
  margin-left: 8px;
`

const LogoContainer = styled(StyledLink)`
  display: flex;
  margin-right: 16px;
`

const NavBarLink = styled(StyledLink)`
  margin: 0 24px;
`

const Phone = styled('a')`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.palette.black.main};
  margin-right: 16px;
`

const SocialLink = styled(StyledLink)`
  display: flex;
  margin: 0;
  
  &:not(:last-child) {
    margin-right: 8px;
  }
  
  &:hover path {
    fill: ${props => props.theme.palette.primary.main};
  }
`

const LogInLink = styled(StyledLink)`
  margin-left: 24px;
`

export default Navbar
