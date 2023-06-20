import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/login"
            Component={Login}
          />
          <Route
            path="/register"
            Component={Register}
          />
          <Route
            path="/dashboard"
            Component={Dashboard}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
