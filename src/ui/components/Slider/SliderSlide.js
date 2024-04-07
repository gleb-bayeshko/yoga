'use client'

import { styled } from '@mui/material'
import { SwiperSlide } from 'swiper/react'

const SliderSlide = ({ children, ...rest }) => {
  return (
    <Slide {...rest}>
      {children}
    </Slide>
  )
}

const Slide = styled(SwiperSlide)`
  height: 323px;
  background: green;
  border-radius: ${props => props.theme.shape.borderRadius.small}px;
  overflow: hidden;
`

SliderSlide.displayName = 'SwiperSlide'

export default SliderSlide
