import { Button } from "../reusable/Button";
import styled from "styled-components"

const StyledWrapper = styled.div`
  align-self: flex-start;
`

const StyledImage = styled.img`
  width: 23px;
`

export const EditButton = ({ onClick }) => {

  return (
    <StyledWrapper>
      <Button variant="edit" onClick={onClick}>
        <StyledImage src="/icons/edit.png" alt="edit message" />
      </Button>
    </StyledWrapper>
  )
}