
import styled from "styled-components"
import { useState } from "react"
import { FormLegend } from "./FormLegend"
import { SubmitButton } from "./SubmitButton"
import { Card } from "../assets/Card"
import { API_URL, MAX_LENGTH, MIN_LENGTH } from "../../Constants"

const StyledInput = styled.input`
  font-family: monospace;
  padding: 10px 20px 40px 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme, $isOverLimit }) => $isOverLimit ? 'red' : theme.color.text.secondary};
  font-size: 13px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme, $isOverLimit }) => $isOverLimit ? 'red' : theme.color.text.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
}
`
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
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(postedMessage),
        headers: { "Content-Type": "application/json" },
      })
      const newMessage = await response.json()


      setMessages(prevMessages => [newMessage, ...prevMessages])

      setMyValue("")
    } catch (error) {
      console.error("Error submitting message:", error)
    }

  }

  return (
    <Card variant="form">
      <form onSubmit={handleSubmit}>
        <FormLegend></FormLegend>
        <StyledInput
          type="text"
          placeholder="Type your happy thought..."
          value={myValue}
          onChange={handleInputChange}
          $isOverLimit={isOverLimit}
        />
        <StyledCounter $isOverLimit={isOverLimit}>{isOverLimit ? 0 : remainingChars} characters remaining</StyledCounter>
        {error && <StyledError>{error}</StyledError>}
        <SubmitButton />
      </form>
    </Card>
  )
}


