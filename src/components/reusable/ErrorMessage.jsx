import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ErrorMessage = () => {
  return (
    <StyledContainer>
      <p>Couldn't fetch messages right now, Try again later!</p>
    </StyledContainer>
  )
}