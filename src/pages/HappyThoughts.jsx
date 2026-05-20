import { useState, useEffect } from "react"
import { Form } from "../components/form/Form"
import { SubmittedMessage } from "../components/submitted_message/SubmittedMessage"
import { API_URL_HAPPY_THOUGHTS } from "../Constants"
import { Loader } from "../components/assets/Loader"
import { ErrorMessage } from "../components/assets/ErrorMessage"
import { LogInForm } from "../components/login/LoginForm"


export const HappyThoughts = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLikes = async (_id) => {
    try {

      // [ ] ändra till rätt like route, har inte skapat den i backend än
      const response = await fetch(`${API_URL_HAPPY_THOUGHTS}/${_id}/like`, {
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
        const res = await fetch(`${API_URL_HAPPY_THOUGHTS}`)
        const json = await res.json()

        if (!json.success) {
          console.error("an error occured")
        }

        setMessages(json.response)
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
      {!user ? (
        <>
          <LogInForm/>
          {/* lägg in så att loginform länkar till signup */}
        </>
      ) : (
        <>
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
      )}
    </>
  )
}