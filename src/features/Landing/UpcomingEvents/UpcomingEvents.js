'use client'

import { useState } from 'react'
import { Button, styled, Typography } from '@mui/material'
import EventCard from '@/features/Landing/UpcomingEvents/EventCard/EventCard'
import { anchors } from '@/features/Navbar/const'
import { upcomingEvents } from '@/mock/upcomingEvents'
import Wrapper from '@/ui/components/Wrapper/Wrapper'

const UpcomingEvents = () => {
  const [currentItems, setCurrentItems] = useState(upcomingEvents.slice(0, 5))

  function fetchData() {
    setCurrentItems([
      ...currentItems,
      ...upcomingEvents.slice(currentItems.length, currentItems.length + 5)
    ])
  }

  return (
    <Section id={anchors.upcomingEvents}>
      <Wrapper>
        <Typography variant="h2">
          Ближайшие мероприятия
        </Typography>
        <Events>
          {currentItems.map(({ id, ...rest }) => (
            <EventCard key={id} {...rest} />
          ))}
        </Events>
        {currentItems.length < upcomingEvents.length && (
          <LoadMoreButton
            onClick={fetchData}
            variant="outlined"
          >
            Показать больше
          </LoadMoreButton>
        )}
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

const Events = styled('div')`
  margin-top: 32px;
`

const LoadMoreButton = styled(Button)`
  width: 100%;
  margin-top: 32px;
`

export default UpcomingEvents
