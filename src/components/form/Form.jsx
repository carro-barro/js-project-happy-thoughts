import styled from "styled-components"
import { useState } from "react"
import { FormLegend } from "./FormLegend"
import { SubmitButton } from "./SubmitButton"
import { Card } from "../assets/Card"

const StyledInput = styled.input`
  font-family: monospace;
  padding: 10px 20px 40px 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  font-size: 13px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }

`

export const Form = ({ setMessages }) => {
  const [myValue, setMyValue] = useState("")

  const handleInputChange = (event) => {
    setMyValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (myValue.trim() === "") {
      return
    }

    const newMessage = {
      text: myValue,
      timestamp: Date.now()
    }

    setMessages(prevMessages => [newMessage, ...prevMessages])

    setMyValue("")
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
          maxLength={140}
          required
        />
        <p>{myValue.length}/140</p>
        <SubmitButton />
      </form>
    </Card>
  )
}
