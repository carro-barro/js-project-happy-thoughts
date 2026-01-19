import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`

const prixClipFix = keyframes`
  0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
  25% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
  50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
  75% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%); }
  100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0); }
`


const StyledLoader = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;
  margin-top: 32px;
  color: black;
  
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid black;
    animation: ${prixClipFix} 2s linear infinite ;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Loader = () => {
  return (
    <StyledContainer>
      <StyledLoader></StyledLoader>
      <p>Loading happy thoughts...</p>
    </StyledContainer>
  )
}