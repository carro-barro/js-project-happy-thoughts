import styled from "styled-components"
import { FormLegend } from "./FormLegend"
import { SubmitButton } from "./SubmitButton"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background.secondary};
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 300px;
  height: auto;
  box-shadow: ${({ theme }) => theme.color.ui.shadow};
  border: 1px solid ${({ theme }) => theme.color.ui.border};
  `
const StyledInput = styled.input`
  padding: 10px 20px 40px 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-radius: 5px;
  font-size: 13px;
`

export const Form = () => {
  return (
    <StyledForm>
      <FormLegend></FormLegend>
      <StyledInput type="text" placeholder="Type your happy thought..." maxLength="140" />
      <SubmitButton />
    </StyledForm>
  )
}
