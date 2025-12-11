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
      background-color: ${$isClicked ? theme.color.action.primary : theme.color.action.secondary}
      border-radius: 70%;
      padding: 10px 12px;
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 13px;
  }
`


export const Button = ({ variant, children, onClick, $isClicked }) => {
  return <StyledButton $variant={variant} onClick={onClick} $isClicked={$isClicked}>{children}</StyledButton>
}