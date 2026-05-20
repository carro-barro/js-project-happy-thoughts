import styled from 'styled-components'
import { SignUpForm } from "./SignupForm"
import { Link } from 'react-router-dom'
import { Card } from '../assets/Card'

const StyledSignUpCard = styled.div`
  background: ${({theme}) => theme.color.background.secondary};
  color: ${({theme}) => theme.color.text.primary};
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-self: center;
  padding: 80px 40px;
  margin-top: 60px;
  border-radius: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 50%;
    max-width: 450px;
  }
`

const StyledTextContainer = styled.div`

`

const StyledSignupContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export const SignUpCard = ({ handleSignUp }) => {

  //[ ] ändra så att texterna är rätt

  return (
    <Card variant="form" >
      <StyledTextContainer>
        <h1>Bli medlem</h1>
        <p>Skapa ditt konto genom att fylla i formuläret nedan.</p>
      </StyledTextContainer>
      <SignUpForm handleSignUp={handleSignUp} />
      <StyledSignupContainer>
        <p>Redan medlem? Logga in <StyledLink to="/logga-in">här</StyledLink></p>
      </StyledSignupContainer>
    </Card>
  )
}