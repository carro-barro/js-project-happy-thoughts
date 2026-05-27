import styled from "styled-components"
import { Button } from "../reusable/Button"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL_USERS } from "../../Constants"

// [ ] Ta bort local storage och flytta handleLogout till userStore

const StyledNavbar = styled.nav`
  background: ${({theme}) => theme.color.background.secondary};
  border-bottom: 1px solid ${({theme}) => theme.color.ui.border};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledName = styled.p`
  fontsize: 15px;
  align-self: center;
  margin-left: 35px;
`

const StyledButtonWrapper = styled.div`
  margin: 35px 35px 30px 0;
`

export const Navbar = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => {
    const localUserData = localStorage.getItem("user")
    return localUserData && localUserData !== "undefined" ? JSON.parse(localUserData) : null
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return
      try {
        const response = await fetch(`${API_URL_USERS}/${user.id}`, {
          headers: { "Authorization": `Bearer ${user.accessToken}`}
        })

        const data = await response.json()
        console.log("user response:", data )

        setUser(prevUser => ({ ...prevUser, ...data.user }))
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])


  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/log-in")
  }

  return (
    <StyledNavbar>
        <StyledName>Logged in as: {user?.firstName}</StyledName>
        <StyledButtonWrapper>
          <Button onClick={handleLogout} text="Log out" variant="submit" />
        </StyledButtonWrapper>
      </StyledNavbar>
  )
}
