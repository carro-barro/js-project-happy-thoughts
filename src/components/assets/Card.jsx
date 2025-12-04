import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px auto 15px auto;
  width: 80%;
  max-width: 300px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.color.ui.border};
  box-shadow: ${({ theme }) => theme.color.ui.shadow};

  ${({ theme, $variant }) =>
    $variant === "form" &&
    `
      background-color: ${theme.color.background.secondary};
    `}

  ${({ theme, $variant }) =>
    $variant === "submitted" &&
    `
      background-color: ${theme.color.background.primary};
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 90%;
      max-width: 500px;
  }
  `

export const Card = ({ variant, children }) => {
  return <StyledCard $variant={variant}>{children}</StyledCard>
}