'use client'

import { Box, styled, Typography } from '@mui/material'
import { footerLink } from '@/features/Footer/const'
import { socials } from '@/features/Navbar/const'
import StyledLink from '@/ui/components/StyledLink/StyledLink'
import Wrapper from '@/ui/components/Wrapper/Wrapper'
import Logo from '@/ui/icons/Logo'

const Footer = () => {
  return (
    <FooterSection>
      <Wrapper>
        <FooterContainer>
          <FooterContent>
            <LogoContainer href="/">
              <Logo />
              <LogoTitle>
                Yoga Doggy
              </LogoTitle>
            </LogoContainer>
            <NavListContainer>
              {footerLink.map(({ id, title, link }) => (
                <NavList key={id}>
                  <NavBarLink href={link}>
                    {title}
                  </NavBarLink>
                </NavList>
              ))}
            </NavListContainer>
            <ContactsContainer>
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
            </ContactsContainer>
            <OrganizationInfoContainer>
              <OrganizationInfo>
                ИП Иванов Иван Иванович
              </OrganizationInfo>
              <OrganizationInfo>
                ИНН: 615146597868
              </OrganizationInfo>
              <OrganizationInfo>
                ОГРНИП: 322619600015321
              </OrganizationInfo>
              <OrganizationNote>
                *Запрещен на территории РФ
              </OrganizationNote>
            </OrganizationInfoContainer>
          </FooterContent>
          <MapContent>
            <iframe
              src="https://yandex.by/map-widget/v1/?ll=37.560322%2C55.720836&mode=whatshere&whatshere%5Bpoint%5D=37.559120%2C55.727908&whatshere%5Bzoom%5D=12&z=12"
              width="760"
              height="320"
              frameBorder="1"
              allowFullScreen="true"
              className="footer-map"
              style={{ position:'relative' }}
            ></iframe>
          </MapContent>
        </FooterContainer>
      </Wrapper>
    </FooterSection>
  )
}

const FooterSection = styled('footer')`
  padding: 80px 0;
  background: ${props => props.theme.palette.primary.main};
  
  & * {
    color: ${props => props.theme.palette.white.main};
  }

  ${props => props.theme.breakpoints.down('md')} {
    padding: 40px 0;
  }
`

const LogoTitle = styled(Typography)`
  color: ${props => props.theme.palette.white.main};
  font-weight: 600;
  font-size: 29px;
  margin-left: 12px;

  ${props => props.theme.breakpoints.down('md')} {
    font-size: 22px;
  }
`

const LogoContainer = styled(StyledLink)`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  
  & svg {
    width: 36px;
    height: 36px;
  }
  
  & path {
    stroke: ${props => props.theme.palette.white.main};
  }

  ${props => props.theme.breakpoints.down('md')} {
    & svg {
      width: 27px;
      height: 27px;
    }
  }
`

const NavBarLink = styled(StyledLink)`
  margin: 0 12px;
  color: ${props => props.theme.palette.white.main};
  text-wrap: nowrap;

  &:hover {
    color: ${props => props.theme.palette.primary.semiLight};
  }
`

const Phone = styled('a')`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.palette.white.main};
  margin-right: 16px;
`

const SocialLink = styled(StyledLink)`
  display: flex;
  margin: 0;
  
  &:not(:last-child) {
    margin-right: 8px;
  }

  & path {
    fill: ${props => props.theme.palette.white.main};
    opacity: 1;
    fill-opacity: 1;
  }
  
  &:hover path {
    fill: ${props => props.theme.palette.primary.light};
  }
`

const NavListContainer = styled('ul')`
  display: flex;
  padding-left: 0;
  margin: 0;

  ${props => props.theme.breakpoints.down('xl')} {
    flex-wrap: wrap;
  }

  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`

const NavList = styled('li')`
 list-style: none;

  &:first-child a {
    margin-left: 0;
  }

  &:last-child a {
    margin-right: 0;
  }

  ${props => props.theme.breakpoints.down('xl')} {
    &:first-child a,  &:last-child a, & a {
      margin-left: 0;
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

const ContactsContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

const OrganizationInfoContainer = styled('div')`
  margin-top: 32px;
`

const OrganizationInfo = styled('p')`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.palette.white.main};
  
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const OrganizationNote = styled('p')`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.palette.white.main50};
  margin-top: 32px;

  ${props => props.theme.breakpoints.down('md')} {
    margin-bottom: 40px;
  }
`
const FooterContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 152px;

  ${props => props.theme.breakpoints.down('semixl')} {
    column-gap: 80px;
  }

  ${props => props.theme.breakpoints.down('lg')} {
    column-gap: 40px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
  }
`

const FooterContent = styled('div')`
`

const MapContent = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  & .footer-map {
    border-radius: ${props => props.theme.shape.borderRadius.small}px;
    overflow: hidden;
    width: 100%;
  }

  ${props => props.theme.breakpoints.down('md')} {
    iframe {
      height: 320px;
    }
  }
`

export default Footer
