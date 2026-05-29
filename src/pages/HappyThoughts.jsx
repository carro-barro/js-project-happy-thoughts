import { useState, useEffect } from "react"
import { Form } from "../components/form/Form"
import { SubmittedMessage } from "../components/submitted_message/SubmittedMessage"
import { API_URL_HAPPY_THOUGHTS } from "../Constants"
import { Loader } from "../components/reusable/Loader"
import { ErrorMessage } from "../components/reusable/ErrorMessage"
import { Navbar } from "../components/reusable/Navbar"


export const HappyThoughts = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const localUser = localStorage.getItem("user")

  const user = localUser && localUser !== "undefined" ? JSON.parse(localUser) : null

  const token = user?.accessToken

  const handleLikes = async (id) => {
    try {

      // [ ] ändra till rätt like route, har inte skapat den i backend än
      const response = await fetch(`${API_URL_HAPPY_THOUGHTS}/${id}/like`, {
        method: "PATCH"
      })

      const json = await response.json()

      if (response.ok && json.success) {
        const updatedMessage = json.response

        setMessages(prevMessages => prevMessages.map(msg => msg._id === updatedMessage._id ? updatedMessage : msg))
      }


    } catch (error) {
      console.error("Error liking message:", error)
    }
  }


  const deleteMessage = async (id) => {
    if (!id) return
    if (!token) {
      console.warn("Cannot delete: no token")
      return
    }
    try {
      const response = await fetch(`${API_URL_HAPPY_THOUGHTS}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        console.error("Delete failed: ", response.status, error.message )
      }

      setMessages(prev => prev.filter(m => m._id !== id))
    } catch (error) {
      console.error("Error deleting message: ", error)
    }
  }

  const handleEdit = async (id, newText) => {

    if (!token) {
      alert("You have to be logged in to edit messages")
      return
    }

    try {
      const response = await fetch(`${API_URL_HAPPY_THOUGHTS}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({message: newText})
      })

      const json = await response.json()

      if (response.ok && json.success) {
        const updatedMessage = json.response

        setMessages(prevMessages => prevMessages.map(msg => msg._id === updatedMessage._id ? updatedMessage : msg))
      } else {
        alert(json.message || "Couldn't update the message")
      }

    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  useEffect(() => {

    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_URL_HAPPY_THOUGHTS}/`,)
        const json = await res.json()

        if (!json.success) {
          console.error("an error occured")
          setError(true)
        }

        setMessages(json.response)
        console.log("Fetched messages:", json.response)
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
    <Navbar />
      <Form setMessages={setMessages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {(messages || []).map((message) =>
        <SubmittedMessage
          key={message._id}
          submittedMessage={message.message} 
          timestamp={message.createdAt} 
          likes={message.hearts} 
          _id={message._id}
          onLike={handleLikes}
          onDelete={deleteMessage}
          onEdit={handleEdit}
        />
      )}
    </>
  )
}