import styled from 'styled-components'
import { SignUpForm } from "./SignupForm"
import { Link } from 'react-router-dom'
import { Card } from '../reusable/Card'


const StyledTextContainer = styled.div`

`

const StyledSignupContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export const SignUpCard = ({ handleSignUp }) => {

  return (
    <Card variant="form" >
      <StyledTextContainer>
        <h1>Create an account</h1>
        <p>Fill in the form below to create your account.</p>
      </StyledTextContainer>
      <SignUpForm handleSignUp={handleSignUp} />
      <StyledSignupContainer>
        <p>Already have an account? Log in <StyledLink to="/log-in">here</StyledLink></p>
      </StyledSignupContainer>
    </Card>
  )
}