'use client'

import { styled, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { faqs } from '@/features/Landing/Faq/const'
import { anchors } from '@/features/Navbar/const'
import Wrapper from '@/ui/components/Wrapper/Wrapper'
import ExpandArrow from '@/ui/icons/ExpandArrow'

const Faq = () => {
  return (
    <Section id={anchors.faq}>
      <Wrapper>
        <Typography variant="h2">
          Частые вопросы
        </Typography>
        <FaqContainer>
          {faqs.map(({ id, title, description }) => (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ExpandArrow />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {title}
              </AccordionSummary>
              <AccordionDetails>
                {description}
              </AccordionDetails>
            </Accordion>
          ))}
        </FaqContainer>
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

const FaqContainer = styled('div')`
  margin-top: 32px;
`

export default Faq
