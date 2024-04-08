'use client'

import { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import SelectMenu from '@/ui/components/Select/SelectMenu'
import BurgerMenu from '@/ui/icons/BurgerMenu'
import SelectOption from '../../ui/components/Select/SelectOption'
import StyledLink from '../../ui/components/StyledLink/StyledLink'
import Wrapper from '../../ui/components/Wrapper/Wrapper'
import Logo from '../../ui/icons/Logo'
import { cities, links, socials } from './const'

const Navbar = () => {
  const [city, setCity] = useState(cities[0])

  return (
    <Wrapper>
      <NavbarContainer display="flex" justifyContent="space-between" alignItems="center" component="header">
        <LeftContainer display="flex" paddingY="20px">
          <LogoContainer href="/">
            <Logo />
            <LogoTitle>
              Yoga Doggy
            </LogoTitle>
          </LogoContainer>
          <SelectContainer>
            <SelectMenu
              defaultValue={city}
              onChange={() => {}}
              menuTitle="Выберите город"
            >
              {cities.map(city => (
                <SelectOption value={city} key={city}>{city}</SelectOption>
              ))}
            </SelectMenu>
            <Spacer />
          </SelectContainer>
          <BurgerMenuContainer>
            <BurgerMenu />
          </BurgerMenuContainer>
        </LeftContainer>
        <NavListContainer>
          {links.map(({ id, title, link }) => (
            <NavList key={id}>
              <NavBarLink href={link}>
                {title}
              </NavBarLink>
            </NavList>
          ))}
        </NavListContainer>
        <Box display="flex" alignItems="center">
          <Phone href="tel:88001234567">
            8 800 123 45 67
          </Phone>
          <SocialsContainer display="flex">
            {socials.map(({ id, link, Icon }) => (
              <SocialLink key={id} href={link}>
                <Icon />
              </SocialLink>
            ))}
          </SocialsContainer>
          <LogInLink href="#">
            <Button variant="default">
              Войти в кабинет
            </Button>
          </LogInLink>
        </Box>
      </NavbarContainer>
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
  align-items: center;
  margin-right: 16px;
`

const NavBarLink = styled(StyledLink)`
  margin: 0 12px;
  text-wrap: nowrap;
`

const Phone = styled('a')`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.palette.black.main};
  margin-right: 16px;

  ${props => props.theme.breakpoints.down('xl')} {
    display: none;
  }
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

  ${props => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`

const NavListContainer = styled('ul')`
  display: flex;
  padding-left: 0;
  margin: 0;

  ${props => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`

const NavList = styled('li')`
 list-style: none;
`

const LeftContainer = styled(Box)`
 & .MuiBox-root {
   position: absolute;
 }

  ${props => props.theme.breakpoints.down('lg')} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

const Spacer = styled('div')`
 width: 100px;
`

const SocialsContainer = styled(Box)`
  ${props => props.theme.breakpoints.down('xl')} {
    display: none;
  }
`

const SelectContainer = styled('div')`
  ${props => props.theme.breakpoints.down('semixl')} {
    display: none;
  }
`

const BurgerMenuContainer = styled('div')`
  display: none;
  
  ${props => props.theme.breakpoints.down('lg')} {
    display: flex;
    align-items: center;
  }
`

const NavbarContainer = styled(Box)`
  height: 64px;
  padding: 9px 0;
`

export default Navbar
