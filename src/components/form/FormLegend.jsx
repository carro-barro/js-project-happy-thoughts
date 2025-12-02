import styled from "styled-components"

const StyledLegend = styled.legend`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.text.primary};
`
export const FormLegend = () => {
  return <StyledLegend>What's making you happy right now?</StyledLegend>
}