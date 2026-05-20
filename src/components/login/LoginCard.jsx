import styled from 'styled-components'
import { LogInForm } from "./LoginForm"
import { Link } from 'react-router-dom'
import { Card } from '../assets/Card'

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
        <h1>Logga in</h1>
        <p>Fyll i dina uppgifter för att logga in.</p>
      </StyledTextContainer>
      <LogInForm handleLogin={handleLogin} />
      <StyledLoginContainer>
        <p>Inte registrerad? Bli medlem <StyledLink to="/skapa-konto">här</StyledLink></p>
      </StyledLoginContainer>
    </Card>
  )
}