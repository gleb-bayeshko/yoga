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
              height={820.88}
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
              <Button variant="brandWhite">
              ближайшие мероприятия
              </Button>
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
  right: -44px;
  bottom: -10px;
  z-index: 10;
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
`

const BannerSubtitle = styled(Typography)`
  position: relative;
  z-index: 12;
  color: ${props => props.theme.palette.white.main};
  margin-bottom: 40px;
  max-width: 530px;
`

const EventsLink = styled(StyledLink)`
  position: relative;
  z-index: 12;
`

export default Banner
