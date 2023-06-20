import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/ForgotPassword"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/forgotPassword" Component={ForgotPassword} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
