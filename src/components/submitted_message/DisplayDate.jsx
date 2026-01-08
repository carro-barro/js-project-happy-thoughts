import moment from 'moment'
import styled from 'styled-components'

const StyledDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const DateDisplay = ({ timestamp }) => {

  const relativeTime = moment(timestamp).fromNow()

  return <StyledDate>{relativeTime}</StyledDate>

}