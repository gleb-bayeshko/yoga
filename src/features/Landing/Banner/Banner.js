'use client'

import { Box, Button, styled, Typography, } from '@mui/material'
import Image from 'next/image'
import { valisca } from '@/styles/fonts/fonts'
import StyledLink from '@/ui/components/StyledLink/StyledLink'
import Wrapper from '@/ui/components/Wrapper/Wrapper'
import bannerImg from '../../../../public/banner/bannerImage.png'

const Banner = () => {
  return (
    <section>
      <Background>
        <Wrapper>
          <Circle />
          <ImageContainer>
            <Image
              src={bannerImg}
              alt="Picture of the author"
              width={1205.07}
            />
          </ImageContainer>
          <TextContainer>
            <BannerTitle className={valisca.className}>
              Йога с Хвостиком
            </BannerTitle>
            <BannerSubtitle variant="h4">
              Приходи на занятие йогой с породистыми собачками
            </BannerSubtitle>
            <EventsLink href="#">
              <EventsButton variant="brandWhite">
               ближайшие мероприятия
              </EventsButton>
            </EventsLink>
          </TextContainer>
        </Wrapper>
      </Background>
    </section>

  )
}

const Background = styled(Box)`
  overflow: hidden;
  background: ${props => props.theme.palette.primary.mainContrast};
  position: relative;
  height: 721px;

  ${props => props.theme.breakpoints.down('xl')} {
    height: 561px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    height: 650px;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    min-height: 560px;
    height: auto;
  }
`

const Circle = styled('div')`
  position: absolute;
  width: 957px;
  height: 957px;
  filter: blur(164px);
  background: radial-gradient(50.00% 50.00% at 50% 50%,rgb(252, 159, 107),rgb(252, 118, 42) 100%);
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100%;
`

const ImageContainer = styled('div')`
  position: absolute;
  right: -14px;
  bottom: -10px;
  z-index: 10;

  ${props => props.theme.breakpoints.down('xl')} {
    right: -64px;

    & img {
      width: 750px;
      height: auto;
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    bottom: unset;
    right: unset;
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
    
    & img {
      width: 360px;
      height: auto;
    }
  }

  ${props => props.theme.breakpoints.down('sm')} {
    top: 70px;
    
    & img {
      width: 380px;
      height: 271px;
    }
  }
`

const TextContainer = styled(Box)`
  
`

const BannerTitle = styled('h1')`
  position: relative;
  z-index: 5;
  font-weight: 400;
  font-size: 194px;
  line-height: 0.87113;
  color: #faffe8;
  margin: 86px 0 24px;

  ${props => props.theme.breakpoints.down('xl')} {
    font-size: 114px;
    max-width: 500px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    font-weight: 400;
    font-size: 82px;
    text-align: center;
    margin: 50px auto 24px;
    max-width: 100%;

    line-height: 1.07143;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    font-weight: 400;
    font-size: 42px;
    line-height: 1.07143;
    max-width: 350px;
    margin-top: 32px;
  }
`

const BannerSubtitle = styled(Typography)`
  position: relative;
  z-index: 12;
  color: ${props => props.theme.palette.white.main};
  margin-bottom: 40px;
  max-width: 530px;

  ${props => props.theme.breakpoints.down('md')} {
    max-width: 100%;
    text-align: center;
    margin-top: 200px;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    font-weight: 500;
    font-size: 20px;
    max-width: 310px;
    margin: 256px auto 24px;
  }
`

const EventsLink = styled(StyledLink)`
  position: relative;
  z-index: 12;
`

const EventsButton = styled(Button)`
  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`

export default Banner
