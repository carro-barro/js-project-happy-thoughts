
import styled from 'styled-components'
import { Button } from "../components/assets/Button"
import { Link } from 'react-router-dom'

// [ ] fixa så det matchar theme

const StyledHome = styled.div`
  background: ${({theme}) => theme.color.background.primary};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  text-align: center;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const Home = () => {

  return (
      <StyledHome>
        <h1>Välkommen till Happy Thoughts!</h1>
        <p>Logga in eller skapa ditt konto nedan</p>
        <StyledContentContainer>
          <Button as={Link} to="/logga-in" text="Logga in" variant="submit"/> 
          <Button as={Link} to="/skapa-konto" text="Skapa konto" variant="submit"/> 
      </StyledContentContainer>
     </StyledHome>
   )
}
