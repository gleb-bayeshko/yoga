'use client'

import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { anchors } from '@/features/Navbar/const'
import { photoSlider } from '@/mock/photoSlider'
import Slider from '@/ui/components/Slider/Slider'
import SliderSlide from '@/ui/components/Slider/SliderSlide'
import StyledLink from '@/ui/components/StyledLink/StyledLink'
import Wrapper from '@/ui/components/Wrapper/Wrapper'

const PhotoReports = () => {
  return (
    <Section id={anchors.photoReports}>
      <PhotoReportsWrapper>
        <HeaderContainer display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">
            Свежие фотоотчеты
          </Typography>
          <PhotoReportsLink href="#" highlighted>
            Смотреть все фотографии
          </PhotoReportsLink>
        </HeaderContainer>
        <Slider
          slidesPerView={5}
          spaceBetween={16}
          className="mySwiper"
          breakpoints={{
            100: { slidesPerView: 1.07, freeMode: { enabled: true } },
            640: { slidesPerView: 3, },
            1240: { slidesPerView: 5 },
          }}
        >
          {photoSlider.map(({
            id,
            url
          }) => (
            <SliderSlide key={id}>
              <Image
                src={url}
                alt="Фотоотчет"
                width={323}
                height={323}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
              />
            </SliderSlide>
          ))}
        </Slider>
      </PhotoReportsWrapper>
    </Section>
  )
}

const Section = styled('section')`
  margin-top: 80px;

  ${props => props.theme.breakpoints.down('sm')} {
    margin-top: 56px;
  }
`

const HeaderContainer = styled(Box)`
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  ${props => props.theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const PhotoReportsWrapper = styled(Wrapper)`
  ${props => props.theme.breakpoints.down('sm')} {
    &.MuiContainer-root {
      padding-right: 0;
    }
    
    & .swiper {
      padding-right: 16px;
    }
  }
`

const PhotoReportsLink = styled(StyledLink)`
  font-weight: 500;
  font-size: 24px;
  
  ${props => props.theme.breakpoints.down('sm')} {
    margin: 16px 0 0;
    font-size: 20px;
  }
`

export default PhotoReports
