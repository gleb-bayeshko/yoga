'use client'

import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { photoSlider } from '@/mock/photoSlider'
import Slider from '@/ui/components/Slider/Slider'
import SliderSlide from '@/ui/components/Slider/SliderSlide'
import StyledLink from '@/ui/components/StyledLink/StyledLink'
import Wrapper from '@/ui/components/Wrapper/Wrapper'

const PhotoReports = () => {
  return (
    <Section>
      <Wrapper>
        <HeaderContainer display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">
            О проекте
          </Typography>
          <StyledLink href="#" highlighted>
            Смотреть все фотографии
          </StyledLink>
        </HeaderContainer>
        <Slider
          slidesPerView={5}
          spaceBetween={16}
          className="mySwiper"
        >
          {photoSlider.map(({
            id,
            url
          }) => (
            <SliderSlide key={id}>
              <Image
                src={url}
                alt="Picture of the author"
                width={323}
                height={323}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
              />
            </SliderSlide>
          ))}
        </Slider>
      </Wrapper>
    </Section>
  )
}

const Section = styled('section')`
  margin-top: 80px;
`

const HeaderContainer = styled(Box)`
  margin-bottom: 24px;
`

export default PhotoReports
