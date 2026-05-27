
import styled from 'styled-components'
import { Button } from "../components/reusable/Button"
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
        <h1>Welcome to Happy Thoughts!</h1>
        <p>Log in or create your account below</p>
        <StyledContentContainer>
          <Button as={Link} to="/log-in" text="Log in" variant="submit"/> 
          <Button as={Link} to="/sign-up" text="Sign up" variant="submit"/> 
      </StyledContentContainer>
     </StyledHome>
   )
}
