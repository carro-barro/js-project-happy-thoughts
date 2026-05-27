import { Button } from "../reusable/Button";
import styled from "styled-components"

const StyledWrapper = styled.div`
  align-self: flex-start;
`

const StyledImage = styled.img`
  width: 20px;
`

export const DeleteButton = ({ onClick }) => {

  return (
    <StyledWrapper>
      <Button variant="delete" onClick={onClick}>
        <StyledImage src="/icons/x.png" alt="delete message" />
      </Button>
    </StyledWrapper>
  )
}