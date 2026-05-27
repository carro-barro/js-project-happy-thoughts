import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
  const localUser = localStorage.getItem("user")
  // const user = useUserStore((state) => state.user) // För att persist ska funka använder vi userStore istället för att hämta från localStorage. 
  if (!localUser || localUser === "undefined") {
    console.log("No valid user found")
    return <Navigate to="/log-in" replace />
  }

  let user = null
  try {
    user = JSON.parse(localUser)
  } catch (error) {
    console.error("Error parsing user from localStorage:", error)
    return <Navigate to="/log-in" replace />
  }

  if (!user.accessToken) {
    return <Navigate to="/log-in" replace />
  }

  return <Outlet />
}
