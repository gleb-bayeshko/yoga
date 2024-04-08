'use client'

import { Button, styled, Typography } from '@mui/material'
import Image from 'next/image'
import certificateImg from '@/../public/certificate/certificate.png'
import { anchors } from '@/features/Navbar/const'
import Wrapper from '@/ui/components/Wrapper/Wrapper'

const Certificate = () => {
  return (
    <Section id={anchors.certificate}>
      <Wrapper>
        <Typography variant="h2">
          Подарите эмоции
        </Typography>
        <SectionGrid>
          <ImageContainer>
            <Image
              src={certificateImg}
              alt="Сертификат"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageContainer>
          <TextContainer>
            <Typography variant="body1">
              Подарите человеку, который для вас важен, нечто уникальное и незабываемое - подарочный сертификат на занятия йогой с собаками от нашей компании. Это оригинальный способ объединить любовь к йоге и безграничную привязанность к четвероногим друзьям.
            </Typography>
            <Typography variant="body1">
              Вы можете самостоятельно выбрать номинал сертификата. <br />
              Баланс сертификата можно расходовать на несколько разных мероприятий
            </Typography>
            <CertificateButton variant="brand">
            Оформить сертификат
            </CertificateButton>
          </TextContainer>
        </SectionGrid>
      </Wrapper>
    </Section>
  )
}

const Section = styled('section')`
  margin-top: 160px;

  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 80px;
  }
`

const SectionGrid = styled('div')`
  display: grid;
  grid-template-columns: minmax(0, 640px) auto;
  column-gap: 80px;
  margin-top: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: auto;
  }
`

const TextContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &>*:first-child {
    margin-bottom: 32px;
  }

  &>*:not(:first-child) {
    line-height: 24px;
  }
`

const ImageContainer = styled('div')`
  & img {
    border-radius: ${props => props.theme.shape.borderRadius.standard}px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    margin-bottom: 32px;
  }
`

const CertificateButton = styled(Button)`
  width: min-content;
  margin-top: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`

export default Certificate
