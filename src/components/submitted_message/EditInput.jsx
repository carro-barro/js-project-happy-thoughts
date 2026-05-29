import styled from "styled-components"
import { Button } from "../reusable/Button"
import { useState } from "react"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.ui.border};
  border-radius: 8px;
  font-family: sans-serif;
  resize: vertical;
  font-size: 14px;
`

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`

export const EditInput = ({ initialMessage, onSave, onCancel}) => {
  const [editText, setEditText] = useState(initialMessage)

  const handleSubmit = (e) => {
    e.preventDefault()
      if (editText.trim() !== "" && editText !== initialMessage) {
        onSave(editText.trim())
      }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextArea 
        rows="3"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        maxLength={140}
        minLength={5}
      />
      <StyledButtonContainer>
        <Button variant="go-back" type="button" onClick={onCancel} text="Cancel" />
        <Button variant="submit" type="submit" text="Save"  disabled={editText.trim() === ""}/>
      </StyledButtonContainer>
    </StyledForm>
  )
}