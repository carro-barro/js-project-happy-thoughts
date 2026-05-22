
import styled from 'styled-components'
import { LogInCard } from '../components/login/LoginCard'
import { Button } from '../components/assets/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useUserStore } from '../store/userStore'

const StyledLoggaIn = styled.div`
  background: ${({theme}) => theme.color.background.primary};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

//[ ] ändra så det är från store istället
export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  // const { setUserData } = useUserStore()


// [ ] ska handleLogin vara på loginCard istället för loginpage??
  const handleLogin = (userData) => {
    setUser(userData)
    // setUserData(userData) // AI
    // [ ] Normally one would also set an expiration date for the token and store it in a secure cookie or in a more secure storage. But for now we just store it in localStorage for simplicity.
    // [ ] ta bort localstorage/persist och använd fetch/httpOnly cookies
   localStorage.setItem("user", JSON.stringify(userData))
    navigate('/happy-thoughts')
  }


  return (
      <StyledLoggaIn>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          <LogInCard handleLogin={handleLogin}/>
      </StyledContentContainer>
     </StyledLoggaIn>
   )
}
