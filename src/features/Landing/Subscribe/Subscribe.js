'use client'

import { useState } from 'react'
import { Button, styled, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import dogImg from '@/../public/subscribe/dog.png'
import { anchors, socials } from '@/features/Navbar/const'
import Input from '@/ui/components/Input/Input'
import StyledLink from '@/ui/components/StyledLink/StyledLink'
import Wrapper from '@/ui/components/Wrapper/Wrapper'

const Subscribe = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mail, setMail] = useState('')

  function handleMailFormSubmit(e) {
    e.preventDefault()

    if (!mail) return

    console.log(mail)
  }

  function handleInputChange(e) {
    setMail(e.target.value)
  }

  return (
    <Section id={anchors.subscribe}>
      <Wrapper>
        <GridContainer>
          <SubscribeContent>
            <Typography variant="h2">
              Подпишитесь нас, будем дружить
            </Typography>
            <SocialLinks>
              {socials.map(({ id, link, Icon, title }) => (
                <SocialLink href={link} key={id}>
                  <SocialButton variant="default">
                    <Icon />
                    <SocialTitle>
                      {title}
                    </SocialTitle>
                  </SocialButton>
                </SocialLink>
              ))}
            </SocialLinks>
            <MailingTitle>
              Рассылки по почте
            </MailingTitle>
            <MailingDescription variant="body1">
              Напишем о новых анонсах, площадках и форматах. Не очень часто, но всгеда по делу
            </MailingDescription>
            <SubmitForm onSubmit={handleMailFormSubmit}>
              <MailInput
                onChange={handleInputChange}
                placeholder={isMobile ? 'Введите почту' : 'Введите адрес электронной почты'}
                id="mail-input"
              />
              <SubmitButton variant="brand" type="submit">
                Подписаться
              </SubmitButton>
            </SubmitForm>
          </SubscribeContent>
          <ImageContainer>
            <Image
              src={dogImg}
              alt="Собака"
              width={592}
            />
          </ImageContainer>
        </GridContainer>
      </Wrapper>
      <Circle />
    </Section>
  )
}

const Section = styled('section')`
  position: relative;
  margin-top: 80px;
  overflow: hidden;
`

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    padding-top: 0;
    padding-bottom: 40px;
  }
`

const SubscribeContent = styled('div')`
`

const SocialLinks = styled('div')`
  display: flex;
  margin-top: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`

const SocialLink = styled(StyledLink)`
  &:not(:last-child) {
    margin-right: 24px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 24px;
    }
    
  }
`

const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;

  & path {
    transition: ${props => props.theme.transitions.duration.standard}ms;
  }
  
  &:hover path {
    fill: ${props => props.theme.palette.primary.main};
  }

  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`

const SocialTitle = styled('div')`
  margin-left: 8px;
`

const MailingTitle = styled('div')`
  margin: 32px 0 12px;
  font-weight: 700;
  font-size: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    font-size: 24px;
  }
`

const MailingDescription = styled(Typography)`
  font-size: 18px;
`

const MailInput = styled(Input)`
  width: 100%;
`

const SubmitForm = styled('form')`
  display: flex;
  margin-top: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`

const SubmitButton = styled(Button)`
  margin-left: 24px;
  padding: 24px 32px;
  height: 48px;
  border-radius: 12px;

  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
    margin-top: 16px;
    margin-left: 0;
  }
`

const ImageContainer = styled('div')`
  & img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  ${props => props.theme.breakpoints.down('semixl')} {
    & img {
      width: 442px;
      height: auto;
      z-index: -1;
    }
  }

  ${props => props.theme.breakpoints.down('lg')} {
    & img {
      width: 220px;
      height: auto;
    }
  }

  ${props => props.theme.breakpoints.down('extramd')} {
    display: none;
  }
`

const Circle = styled('div')`
  position: absolute;
  width: 957px;
  height: 957px;
  filter: blur(164px);
  background: radial-gradient(50.00% 50.00% at 50% 50%,rgb(252, 159, 107),rgb(252, 118, 42) 100%);
  right: 0;
  bottom: -600px;
  border-radius: 100%;
  z-index: -2;

  ${props => props.theme.breakpoints.down('semixl')} {
    width: 657px;
    height: 657px;
    bottom: -300px;
  }

  ${props => props.theme.breakpoints.down('lg')} {
    width: 357px;
    height: 357px;
    bottom: -200px;
  }

  ${props => props.theme.breakpoints.down('extramd')} {
    display: none;
  }
`

export default Subscribe
