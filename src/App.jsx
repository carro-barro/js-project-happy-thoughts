import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Theme } from "./Theme"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HappyThoughts } from "./pages/HappyThoughts"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Home } from "./pages/Home"
import { ProtectedRoute } from "./components/reusable/ProtectedRoute"

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
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/log-in" element={<Login />}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/happy-thoughts" element={<HappyThoughts/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
