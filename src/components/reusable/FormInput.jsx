// [ ] ändra så att den stämmer till projektet, direkt kopierad från medlemsportalen

import styled from 'styled-components'

const StyledInputContainer = styled.div`
  margin-top: 15px;
`

const StyledLabel = styled.label`
  display: block;
  color: ${({theme}) => theme.color.text.primary};
  font-size: 15px;
  margin-bottom: 6px;
`


const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 2px solid transparent;
  appearance: none;
  -webkit-appearance: none;
  background: ${({theme}) => theme.color.background.primary};
  color: ${({theme}) => theme.color.text.primary};

  &:focus,
  &:focus-visible {
    border: 2px solid #442E57;
    outline: 2px solid orange;
  }
`

const StyledTextarea = styled.textarea`
  height: 120px;
  resize: vertical;
  padding: 8px;
  width: 100%;
  border-radius: 3px;
  border: 2px solid transparent;
  appearance: none;
  -webkit-appearance: none;
  background: ${({theme}) => theme.color.background.primary};
  color: ${({theme}) => theme.color.text.primary};

  &:focus,
  &:focus-visible {
    border: 2px solid #442E57;
    outline: 2px solid orange;
  }

`

export const FormInput = ({ type, id, name, label, value, onChange, variant, placeholder, $isOverLimit }) => {

  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {type === 'textarea'
        ? <StyledTextarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} $isOverLimit={$isOverLimit}/>
        : <StyledInput $variant={variant} type={type} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
      }
    </StyledInputContainer>
  )
}