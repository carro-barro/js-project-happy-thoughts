import styled from "styled-components"

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  max-width: fit-content;
  font-family: "roboto mono";
  font-size: 11px;

  ${({ theme, $variant }) =>
    $variant === "submit" &&
    `
      background-color: ${theme.color.action.primary};
      color: ${theme.color.text.primary};
      border-radius: 20px;
    `}

  ${({ theme, $variant }) =>
    $variant === "like" &&
    `
      background-color: ${theme.color.action.secondary};
      border-radius: 50%;
    `}
`


export const Button = ({ variant, children }) => {
  return <StyledButton $variant={variant}>{children}</StyledButton>
}