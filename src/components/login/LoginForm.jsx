// [ ] ändra så att den stämmer till projektet, direkt kopierad från medlemsportalen

import styled from 'styled-components'
import { Button } from '../reusable/Button' 
import { FormInput } from "../reusable/FormInput"
import { API_URL_USERS } from '../../Constants' 
import { useFormStore } from "../../store/useFormStore" 

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledContentContainer = styled.div`

`

export const LogInForm = ({ handleLogin }) => {
  const { loginData, setLoginField, setLoginError, setLoginSubmitting, resetLogin } = useFormStore()

  //göra en handleSubmit

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submit clicked", loginData)

    if (!loginData.email || !loginData.password) {
      setLoginError("Please fill in all fields")
      // setError kopplat till backend error response?
      return
    }

    setLoginError('')
    setLoginSubmitting(true)

      //fetch API med method POST
    try {
      const response = await fetch(`${API_URL_USERS}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()
       console.log("Login response status:", response.status)
       console.log("Login response data:", data)

      if (!response.ok) {
        //lägga in error response från backend
        throw new Error(data?.message || "Login failed")
      }
      console.log("Login lyckades, anropar handleLogin")

      //handledLogin som "skapas" i login page
      if (handleLogin) {
        handleLogin(data.response)
        resetLogin()
      }
    } catch (error) {
      // Error response från backend (?)
      setLoginError(error.message || "Invalid email or password")
    } finally {
      setLoginSubmitting(false)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContentContainer>
        <FormInput 
          onChange={(event) => setLoginField('email', event.target.value)} 
          type="email" 
          id="email" 
          name="email"
          placeholder="example@example.com"
          value={loginData.email}
          label="Email"
        />
        <FormInput 
          onChange={(event) => setLoginField('password', event.target.value)} 
          type="password" 
          id="password" 
          name="password"
          placeholder="ex. 1234"
          value={loginData.password}
          label="Password"
        />
      </StyledContentContainer>
      {loginData.error && <p>{loginData.error}</p>}
      <Button 
        type="submit"
        text={loginData.isSubmitting ? "Logging in..." : "Log in"}
        variant="submit" disabled={loginData.isSubmitting}
      />
    </StyledForm>

  )
}