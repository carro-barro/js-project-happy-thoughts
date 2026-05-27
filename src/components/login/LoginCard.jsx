import styled from 'styled-components'
import { LogInForm } from "./LoginForm"
import { Link } from 'react-router-dom'
import { Card } from '../reusable/Card'

const StyledTextContainer = styled.div`

`

const StyledLoginContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export const LogInCard = ({ handleLogin }) => {

  return (
    <Card variant="form">
      <StyledTextContainer>
        <h1>Log in</h1>
        <p>Fill in your details to log in.</p>
      </StyledTextContainer>
      <LogInForm handleLogin={handleLogin} />
      <StyledLoginContainer>
        <p>Not registered? Sign up <StyledLink to="/sign-up">here</StyledLink></p>
      </StyledLoginContainer>
    </Card>
  )
}