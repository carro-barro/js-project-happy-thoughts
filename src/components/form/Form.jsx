
import styled from "styled-components"
import { useState } from "react"
import { FormLegend } from "./FormLegend"
import { Button } from "../reusable/Button"
import { Card } from "../reusable/Card"
import { FormInput } from "../reusable/FormInput"
import { API_URL_HAPPY_THOUGHTS, MAX_LENGTH, MIN_LENGTH } from "../../Constants"

const StyledCounter = styled.p`
  color: ${({ theme, $isOverLimit }) => $isOverLimit ? 'red' : theme.color.text.secondary};
`
const StyledError = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -5px; /* Adjust spacing to align with counter area */
  margin-bottom: 10px;
`

export const Form = ({ setMessages }) => {
  const [myValue, setMyValue] = useState("")
  const [error, setError] = useState(null)

 const localUser = localStorage.getItem("user")

  const user = localUser && localUser !== "undefined" ? JSON.parse(localUser) : null

  const token = user?.accessToken

  const trimmedValue = myValue.trim()
  const remainingChars = MAX_LENGTH - myValue.length
  const isOverLimit = remainingChars < 0
  const isSubmitDisabled = myValue.trim() === "" || isOverLimit

  const handleInputChange = (event) => {
    setMyValue(event.target.value)
    setError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)


    if (trimmedValue === "") {
      setError("The happy thought cannot be empty.")
      return
    }

    if (trimmedValue.length > MAX_LENGTH) {
      setError(`The happy thought is too long (over ${MAX_LENGTH} characters).`)
      return
    }

    if (trimmedValue.length < MIN_LENGTH) {
      setError(`The happy thought must be at least ${MIN_LENGTH} characters long.`)
      return
    }

    const postedMessage = {
      message: trimmedValue
    }

    try {
      const response = await fetch(`${API_URL_HAPPY_THOUGHTS}/`, {
        method: "POST",
        body: JSON.stringify(postedMessage),
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      })
      const newMessage = await response.json()

      if (response.ok && newMessage.success) {
        setMessages(prevMessages => [newMessage.response, ...prevMessages])
        setMyValue("")
      } else {
        setError("Error submitting message")
      }
    } catch (error) {
      console.error("Error submitting message:", error)
    }

  }

  return (
    <Card variant="form">
      <form onSubmit={handleSubmit}>
        <FormLegend />
        <FormInput
          type="text"
          placeholder="Type your happy thought..."
          value={myValue}
          onChange={handleInputChange}
          $isOverLimit={isOverLimit}
        />
        <StyledCounter $isOverLimit={isOverLimit}>{isOverLimit ? 0 : remainingChars} characters remaining</StyledCounter>
        {error && <StyledError>{error}</StyledError>}
        <Button variant="submit" type="submit" text="❤️ Send Happy Thought ❤️" />
      </form>
    </Card>
  )
}


