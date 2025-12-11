import styled from "styled-components"

const StyledButton = styled.button`
  
  border: none;
  max-width: fit-content;
  font-family: monospace;
  font-size: 11px;

  ${({ theme, $variant }) =>
    $variant === "submit" &&
    `
      background-color: ${theme.color.action.primary};
      color: ${theme.color.text.primary};
      border-radius: 20px;
      padding: 10px 20px;
    `}

  ${({ theme, $variant, $isClicked }) =>
    $variant === "like" &&
    `
      background-color: ${$isClicked ? theme.color.action.primary : theme.color.action.secondary};
      color: ${theme.color.text.primary};
      border-radius: 70%;
      padding: 10px 12px;
       cursor: pointer;
      transition: background-color 0.2s;
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 13px;
  }
`


export const Button = ({ variant, children, onClick, $isClicked, disabled }) => {
  return <StyledButton $variant={variant} onClick={onClick} $isClicked={$isClicked} disabled={disabled}>{children}</StyledButton>
}