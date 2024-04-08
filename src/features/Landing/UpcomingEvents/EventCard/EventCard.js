'use client'

import { Button, styled } from '@mui/material'
import LogoGray from '@/ui/icons/LogoGray'
import TablerWalk from '@/ui/icons/TablerWalk'
import Ticket from '@/ui/icons/Ticket'

const EventCard = ({
  date,
  time,
  address,
  metro,
  walkTime,
  category,
  placesRemain,
  price
}) => {
  return (
    <CardContainer>
      <DateContainer>
        <DateValue>
          {date}
        </DateValue>
        <DateValue>
          {time}
        </DateValue>
      </DateContainer>
      <AddressContainer>
        <Address>
          {address}
        </Address>
        <MapButton variant="text">
          как добраться?
        </MapButton>
        <AddressFooter>
          <Metro>
            <MetroIcon />
            {metro}
          </Metro>
          <WalkTimeContainer>
            <TablerWalkIcon />
            {walkTime}
          </WalkTimeContainer>
        </AddressFooter>
      </AddressContainer>
      <InfoContainer>
        <InfoDescription>
          <InfoBlock>
            <LogoGray />
            <InfoDescriptionValue>
              {category}
            </InfoDescriptionValue>
          </InfoBlock>
          <InfoBlock>
            <Ticket />
            <InfoDescriptionValue>
              {`Осталось ${placesRemain} мест`}
            </InfoDescriptionValue>
          </InfoBlock>
        </InfoDescription>
        <PriceBlock>
          <Price>
            {price}
          </Price>
          <MoreButton variant="brand">
            Подробнее
          </MoreButton>
        </PriceBlock>
      </InfoContainer>
    </CardContainer>
  )
}

const CardContainer = styled('div')`
  display: grid;
  grid-template-columns: 180px auto auto;
  grid-template-areas: "date adress info";
  background: ${props => props.theme.palette.black.main3};
  border-radius: ${props => props.theme.shape.borderRadius.small}px;
  column-gap: 72px;
  padding: 24px;
  
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  ${props => props.theme.breakpoints.down('lg')} {
    grid-template-columns: auto auto;
    grid-template-areas:  
            "date info"
            "adress info";
  }

  ${props => props.theme.breakpoints.down('md')} {
    grid-template-columns: auto;
    grid-template-areas: 
            "date"
            "adress"
            "info";
    justify-content: center;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    justify-content: start;
  }
`

const DateContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: date;

  ${props => props.theme.breakpoints.down('md')} {
    align-items: center;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    align-items: start;
  }
`

const DateValue = styled('div')`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  ${props => props.theme.breakpoints.down('md')} {
    font-weight: 600;
    font-size: 28px;
  }
`

const AddressContainer = styled('div')`
  display: flex;
  flex-direction: column;
  grid-area: adress;

  ${props => props.theme.breakpoints.down('lg')} {
    margin-top: 12px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 24px;
    align-items: center;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    align-items: start;
  }
`
const Address = styled('p')`
  font-weight: 600;
  font-size: 24px;

  ${props => props.theme.breakpoints.down('md')} {
    font-weight: 600;
    font-size: 18px;
  }
`

const Metro = styled('div')`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
`

const MetroIcon = styled('div')`
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background: ${props => props.theme.palette.danger.mainLight};
  margin-right: 8px;
`

const AddressFooter = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 14px;

  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`

const WalkTimeContainer = styled('div')`
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.shape.borderRadius.small}px;
  background: ${props => props.theme.palette.white.main};
  padding: 8px 12px;
  min-width: 114px;
  height: 40px;
  font-weight: 500;
  font-size: 15px;
  margin-left: 16px;

  ${props => props.theme.breakpoints.down('md')} {
    margin-left: 0;
    margin-top: 8px;
    max-width: 238px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const TablerWalkIcon = styled(TablerWalk)`
  margin-right: 3px;
`

const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  grid-area: info;

  ${props => props.theme.breakpoints.down('md')} {
    align-items: center;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    align-items: start;
  }
`

const InfoDescription = styled('div')`
  display: flex;

  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  }
`

const InfoBlock = styled('div')`
  display: flex;
  margin-left: 16px;

  ${props => props.theme.breakpoints.down('md')} {
    margin-left: 0;
    
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

const InfoDescriptionValue = styled('p')`
  font-weight: 500;
  font-size: 16px;
  margin-left: 8px;
`

const PriceBlock = styled('div')`
  display: flex;
  align-items: center;

  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 24px
  }
`

const Price = styled('p')`
  font-weight: 500;
  font-size: 32px;
  margin-right: 16px;
`

const MapButton = styled(Button)`
  ${props => props.theme.breakpoints.down('md')} {
    margin-top: 8px;
  }
`

const MoreButton = styled(Button)`
  ${props => props.theme.breakpoints.down('md')} {
    height: 62px;
    padding: 20px;
  }
`

export default EventCard
