import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const refresh=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      "https://crm-backend-frz0.onrender.com/api/v1/auth/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
      if (data.status==='ok') {
        alert("Sent password reset link")
      } else {
        alert("Email does not exists")
      }
      refresh("/login")
  }

  return (
    <div>
      <h1 className="text-center my-5">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="btn btn-primary my-5 "
          type="submit"
          value="Send reset link"
        />
      </form>
    </div>
  )
}

export default ForgotPassword
