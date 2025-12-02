import styled, { createGlobalStyle } from "styled-components"
import { Form } from "./components/form/Form"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
   margin: 0;
   font-family: "roboto mono";
  }
`

export const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Form />
    </>
  )
}
