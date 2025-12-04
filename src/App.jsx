import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"
import { Form } from "./components/form/Form"
import { SubmittedMessage } from "./components/submitted message/SubmittedMessage"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
   margin: 0;
   font-family: monospace;
  }
`

export const App = () => {
  const [messages, setMessages] = useState([])

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Form setMessages={setMessages} />
      {messages.map((message, index) =>
        <SubmittedMessage
          key={index}
          submittedMessage={message.text} timestamp={message.timestamp}
        />

      )}
    </>
  )
}
