import styled from "styled-components"

const StyledCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.ui.border};
  box-shadow: ${({ theme }) => theme.color.ui.shadow};
  `

export const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}