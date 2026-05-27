import styled from "styled-components"
import { Card } from "../reusable/Card"
import { LikeButton } from "./LikeButton"
import { DateDisplay } from "./DisplayDate"
import { DeleteButton } from "./DeleteButton"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

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

export const SubmittedMessage = ({ submittedMessage, timestamp, likes, _id, onLike, onDelete }) => {
  return (
    <Card variant="submitted">
      <StyledWrapper>
        <StyledMessage>{submittedMessage}</StyledMessage>
        <DeleteButton onClick={() => onDelete?.(_id)} />
      </StyledWrapper>
      <StyledInfo>
        <LikeButton likes={likes} _id={_id} onLike={onLike} />
        <DateDisplay timestamp={timestamp} />
      </StyledInfo>
    </Card>
  )
}

