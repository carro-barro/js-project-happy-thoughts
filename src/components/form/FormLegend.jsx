import styled from "styled-components"

const StyledLegend = styled.legend`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  } 
`
export const FormLegend = () => {
  return <StyledLegend>What's making you happy right now?</StyledLegend>
}