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
        <Button variant="text">
          как добраться?
        </Button>
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
          <Button variant="brand">
            Подробнее
          </Button>
        </PriceBlock>
      </InfoContainer>
    </CardContainer>
  )
}

const CardContainer = styled('div')`
  display: grid;
  grid-template-columns: 180px auto auto;
  background: ${props => props.theme.palette.black.main3};
  border-radius: ${props => props.theme.shape.borderRadius.small}px;
  column-gap: 72px;
  padding: 24px;
  
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

const DateContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DateValue = styled('div')`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`

const AddressContainer = styled('div')`
  display: flex;
  flex-direction: column;
`
const Address = styled('p')`
  font-weight: 600;
  font-size: 24px;
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
`

const TablerWalkIcon = styled(TablerWalk)`
  margin-right: 3px;
`

const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

const InfoDescription = styled('div')`
  display: flex;
`

const InfoBlock = styled('div')`
  display: flex;
  margin-left: 16px;
`

const InfoDescriptionValue = styled('p')`
  font-weight: 500;
  font-size: 16px;
  margin-left: 8px;
`

const PriceBlock = styled('div')`
  display: flex;
  align-items: center;
`

const Price = styled('p')`
  font-weight: 500;
  font-size: 32px;
  margin-right: 16px;
`

export default EventCard
