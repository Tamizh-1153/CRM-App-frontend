import React from "react"
import "./logout.css"
import { useNavigate } from "react-router-dom"

const Logout = () => {

    const refresh=useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    refresh("/login")
  }

  return (
    <div className="logout_container">
      <button onClick={handleLogout} className="logout_btn">
        Log out
      </button>
    </div>
  )
}

export default Logout
