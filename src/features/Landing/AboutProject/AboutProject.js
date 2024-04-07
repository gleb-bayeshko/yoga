'use client'

import { styled, Typography } from '@mui/material'
import Image from 'next/image'
import VideoPlayer from '@/ui/components/VideoPlayer/VideoPlayer'
import Wrapper from '@/ui/components/Wrapper/Wrapper'
import Play from '@/ui/icons/Play'
import pawsImg from '../../../../public/aboutProject/paws.png'

const AboutProject = () => {
  return (
    <Section>
      <Wrapper>
        <SectionGrid>
          <VideoPlayerContainer>
            <VideoPlayer
              url="https://www.youtube.com/watch?v=X4xC_yAO2mg"
              preview="https://i3.ytimg.com/vi/X4xC_yAO2mg/maxresdefault.jpg"
              controls={true}
              playIcon={(
                <PlayButton>
                  <Play />
                </PlayButton>
              )}
              width="100%"
              height="100%"
            />
          </VideoPlayerContainer>
          <TextContainer>
            <Typography variant="h2">
              О проекте
            </Typography>
            <Typography variant="body1">
              Удивительное сочетание йоги и общения с нашими четвероногими друзьями – йоге с собаками. Наш проект появился из глубокого желания делиться радостью и гармонией, которые возникают, когда мы соединяем древние практики йоги с безграничной любовью и энергией наших питомцев.
            </Typography>
            <Typography variant="body1">
              Наш проект приглашает всех желающих принять участие в занятиях, вне зависимости от вашего уровня подготовки и опыта в йоге, а также знакомства с миром собак. Мы предлагаем разнообразные программы и мероприятия, каждое из которых наполнено любовью, радостью и гармонией.
            </Typography>
            <ImageContainer>
              <Image
                src={pawsImg}
                alt="paws"
                width={318.96}
                height={407.81}
              />
            </ImageContainer>
          </TextContainer>
        </SectionGrid>
      </Wrapper>
    </Section>
  )
}

const VideoPlayerContainer = styled('div')`
  border-radius: ${props => props.theme.shape.borderRadius.standard}px;
  overflow: hidden;
  max-width: 768px;
  width: 100%;
`

const PlayButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.shape.borderRadius.extraBig}px;
  width: 120px;
  height: 120px;
  backdrop-filter: blur(5.769230842590332px);
  background: rgba(255, 255, 255, 0.4);
`

const SectionGrid = styled('div')`
  display: grid;
  grid-template-columns: minmax(0, 768px) auto;
  column-gap: 24px;
  min-height: 432px;
`

const TextContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  
  &>*:not(:last-child) {
    margin-bottom: 24px;
  }
  
  &>*:not(:first-child) {
    line-height: 24px;
  }
`

const ImageContainer = styled('div')`
  position: absolute;
  right: -349px;
  top: 6px;
  z-index: -1;
`

const Section = styled('section')`
  margin-top: 80px;
`

export default AboutProject
