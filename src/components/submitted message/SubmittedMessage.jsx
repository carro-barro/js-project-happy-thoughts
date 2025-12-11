
import styled from "styled-components"
import { Card } from "../assets/Card"
import { LikeButton } from "./LikeButton"
import { DateDisplay } from "./DisplayDate"

const StyledMessage = styled.p`
  font-size: 13px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }
`
const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
  color: ${({ theme }) => theme.color.text.secondary};
`

export const SubmittedMessage = ({ submittedMessage, timestamp, likes, _id, onLike }) => {
  return (
    <Card variant="submitted">
      <StyledMessage>{submittedMessage}</StyledMessage>
      <StyledInfo>
        <LikeButton likes={likes} _id={_id} onLike={onLike} />
        <DateDisplay timestamp={timestamp} />
      </StyledInfo>
    </Card>
  )
}