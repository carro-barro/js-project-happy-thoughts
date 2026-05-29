import styled from "styled-components"
import { Card } from "../reusable/Card"
import { LikeButton } from "./LikeButton"
import { DateDisplay } from "./DisplayDate"
import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"
import { useState } from "react"
import { EditInput } from "./EditInput"

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
const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
  color: ${({ theme }) => theme.color.text.secondary};
`

export const SubmittedMessage = ({ submittedMessage, timestamp, likes, _id, onLike, onDelete, onEdit }) => {
  const [ isEditing, setIsEditing] = useState(false)

  const handleSave = (newText) => {
    onEdit(_id, newText)
    setIsEditing(false)
  }

  return (
    <Card variant="submitted">

      {isEditing ? (
        <EditInput 
          initialMessage={submittedMessage}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <StyledWrapper>
            <StyledMessage>{submittedMessage}</StyledMessage>
            <StyledButtonWrapper>
              <DeleteButton onClick={() => onDelete?.(_id)} />
              <EditButton onClick={() => setIsEditing(true)} />
            </StyledButtonWrapper>
          </StyledWrapper>
          <StyledInfo>
            <LikeButton likes={likes} _id={_id} onLike={onLike} />
            <DateDisplay timestamp={timestamp} />
          </StyledInfo>
        </>
      )}

    </Card>
  )
}

