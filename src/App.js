import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/ForgotPassword"
import ServiceRequest from "./Pages/serviceRequest/ServiceRequest"
import EditSR from "./Pages/serviceRequest/EditSR"
import Leads from "./Pages/Leads/Leads"
import EditLeads from "./Pages/Leads/EditLeads"
import Contacts from "./Pages/contacts/Contacts"
import EditContact from "./Pages/contacts/EditContact"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/service_requests" Component={ServiceRequest} />
          <Route path="/service_requests/:id" Component={EditSR} />
          <Route path="/leads" Component={Leads} />
          <Route path="/leads/:id" Component={EditLeads} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="/contacts/:id" Component={EditContact} />
          <Route path="/forgotPassword" Component={ForgotPassword} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
