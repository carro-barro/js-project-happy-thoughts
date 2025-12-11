import styled, { createGlobalStyle } from "styled-components"
import { useState, useEffect } from "react"
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

  const handleLikes = async (_id) => {
    try {
      const response = await fetch(`https://happy-thoughts-api-4ful.onrender.com/thoughts/${_id}/like`, {
        method: "POST"
      })

      const updatedMessage = await response.json()

      setMessages(prevMessages => prevMessages.map(msg => msg._id === updatedMessage._id ? updatedMessage : msg))

    } catch (error) {
      console.error("Error liking message:", error)
    }
  }

  useEffect(() => {

    const fetchMessages = async () => {
      try {
        const res = await fetch("https://happy-thoughts-api-4ful.onrender.com/thoughts")
        const json = await res.json()

        console.log("Fetched messages:", json)

        setMessages(json)
      } catch (error) {
        console.log("error: couldn't fetch the messages", error)
      }
    }

    fetchMessages()

  }, [])

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Form setMessages={setMessages} />
      {(messages || []).map((message) =>
        <SubmittedMessage
          key={message._id}
          submittedMessage={message.message} timestamp={message.createdAt} likes={message.hearts} _id={message._id}
          onLike={handleLikes}
        />
      )}
    </>
  )
}
