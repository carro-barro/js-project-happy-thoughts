import styled, { createGlobalStyle } from "styled-components"
import { useState, useEffect } from "react"
import { Form } from "./components/form/Form"
import { SubmittedMessage } from "./components/submitted_message/SubmittedMessage"
import { API_URL } from "./Constants"
import { Loader } from "./components/assets/Loader"
import { ErrorMessage } from "./components/assets/ErrorMessage"

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLikes = async (_id) => {
    try {
      const response = await fetch(`${API_URL}/${_id}/like`, {
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
        const res = await fetch(`${API_URL}`)
        const json = await res.json()

        setMessages(json)
        setLoading(false)
      } catch (error) {
        console.log("error: couldn't fetch the messages", error)
        setLoading(false)
        setError(true)
      }
    }

    fetchMessages()

  }, [])

  return (
    <>
      <GlobalStyle />
      <Form setMessages={setMessages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
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