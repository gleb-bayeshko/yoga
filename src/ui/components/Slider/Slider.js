'use client'

import { useRef, useState } from 'react'
import { styled } from '@mui/material'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import SliderArrowLeft from '@/ui/icons/SliderArrowLeft'
import 'swiper/css/free-mode'

const Slider = ({
  slidesPerView,
  spaceBetween,
  breakpoints,
  className,
  children,
}) => {
  const [reachSliderState, setReachSliderState] = useState('start')
  const swiperRef = useRef()

  function handleSlidesChange(swiper) {
    if (swiper.isBeginning) {
      setReachSliderState('start')
    } else if (swiper.isEnd) {
      setReachSliderState('end')
    } else {
      setReachSliderState('process')
    }
  }

  function handleSliderPrev() {
    swiperRef.current?.slidePrev()
  }

  function handleSliderNext() {
    swiperRef.current?.slideNext()
  }

  function handleSliderInit(swiper) {
    swiperRef.current = swiper
  }

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        modules={[Navigation, FreeMode]}
        onBeforeInit={handleSliderInit}
        className={className}
        onSlideChange={handleSlidesChange}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
      <ArrowsContainer>
        <ArrowLeft
          disabled={reachSliderState === 'start'}
          onClick={handleSliderPrev}
        >
          <SliderArrowLeft />
        </ArrowLeft>
        <ArrowRight
          disabled={reachSliderState === 'end'}
          onClick={handleSliderNext}
        >
          <SliderArrowLeft />
        </ArrowRight>
      </ArrowsContainer>
    </div>
  )
}

const ArrowsContainer = styled('div')`
  display: flex;
  margin-top: 24px;
`

const ArrowLeft = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 8px;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.palette.primary.main10};
  outline: none;
  border: none;
  cursor: pointer;
  transition: ${props => props.theme.transitions.duration.standard}ms;
  
  &:hover {
    background: ${props => props.theme.palette.primary.main};
    
    & path {
      fill: ${props => props.theme.palette.white.main};
    }
  }
  
  &:disabled {
    filter: opacity(0.40);
    background: ${props => props.theme.palette.primary.main10};
    
    &:hover {
      background: ${props => props.theme.palette.primary.main10};

      & path {
        fill: ${props => props.theme.palette.primary.main};
      }
    }
  }
`

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
  margin-left: 24px;
`

export default Slider
