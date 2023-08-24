import React from "react"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="crm_list_container">
      <ul className="crm_list">
        <li>
          <a href="/dashboard">Dashboard</a>{" "}
        </li>
        <li>
          <a href="/service_requests">Service Request </a>{" "}
        </li>
        <li>
          <a href="/leads">Leads </a>
        </li>
        <li>
          <a href="/contacts">Contacts </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
