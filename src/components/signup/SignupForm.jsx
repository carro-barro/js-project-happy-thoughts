// [ ] ändra så att den stämmer till projektet, direkt kopierad från medlemsportalen

import styled from 'styled-components'
import { Button } from '../reusable/Button'
import { FormInput } from "../reusable/FormInput"
import { useFormStore } from '../../store/useFormStore'
import { API_URL_USERS } from '../../Constants' 


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

//lägga till input firstname, lastname, city- auto search

export const SignUpForm = ({ handleSignUp }) => {
  const { signUpData, setSignUpField, setSignUpSubmitting, resetSignUp, setSignUpError } = useFormStore()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit clicked", signUpData)

    setSignUpError('')
    setSignUpSubmitting(true)

    try {
      const response = await fetch(`${API_URL_USERS}/signup`, {
        method: 'POST',
        body: JSON.stringify({
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          email: signUpData.email,
          password: signUpData.password
        }),
        headers: {
          'Content-Type': 'application/json'   
        } 
     })

      const data = await response.json()
      console.log("Sign up response status:", response.status)
      console.log("Sign up response data:", data)
      
      if (!response.ok) {
        throw new Error(data?.message || "Sign up failed")
      }
      console.log("Sign up successful, calling handleSignUp")

      if (handleSignUp) {
        handleSignUp(data.response)
        resetSignUp()
      } 

    } catch (error) {
      setSignUpError(error.message || "Error signing up")
    } finally {
      setSignUpSubmitting(false)
    }
    
  }


  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput 
        variant="signup"
        type="text" 
        id="firstName" 
        name="firstName"
        required
        value={signUpData.firstName}
        placeholder="ex. Jane"
        onChange={(event) => setSignUpField('firstName', event.target.value)}
        label="First Name" />
      <FormInput 
        variant="signup"
        type="text" 
        id="lastName" 
        name="lastName"
        required
        value={signUpData.lastName}
        placeholder="ex. Doe"
        onChange={(event) => setSignUpField('lastName', event.target.value)}
        label="Last Name" />
      <FormInput 
        variant="signup"
        type="email" 
        id="email" 
        name="email" 
        required
        value={signUpData.email}
        placeholder="jane.doe@example.com"
        onChange={(event) => setSignUpField('email', event.target.value)}
        label="Email" />
      <FormInput 
        variant="signup"
        type="password" 
        id="password" 
        name="password" 
        required
        value={signUpData.password}
        placeholder="ex. 1234"
        onChange={(event) => setSignUpField('password', event.target.value)}
        label="Password" />
      {signUpData.error && <p>{signUpData.error}</p>}
      <Button
        type="submit"
        text={signUpData.isSubmitting ? "Creating account..." : "Create account"} 
        variant="submit" disabled={signUpData.isSubmitting}/>
    </StyledForm>
  )
}