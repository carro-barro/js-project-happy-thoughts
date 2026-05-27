
import styled from 'styled-components'
import { SignUpCard } from '../components/signup/SignupCard'
import { Button } from "../components/assets/Button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useUserStore } from '../store/userStore'


const StyledBliMedlem = styled.div`
  background: ${({theme}) => theme.color.background.primary};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const Signup = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  // const { setUserData } = useUserStore()


  const handleSignUp = (userData) => {
    setUser(userData)
    // setUserData(userData) // AI
    navigate('/happy-thoughts')
  }
  return (
      <StyledBliMedlem>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          <SignUpCard handleSignUp={handleSignUp} />
      </StyledContentContainer>
     </StyledBliMedlem>
   )
}