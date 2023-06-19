import { useState } from "react"

function App() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      "https://crm-backend-frz0.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )

    const data = await response.json()
    console.log(data.token)
    localStorage.setItem("token", data.token)
    if(data.user){
      alert('Login successful')
    }else{
      alert('Login failed')
    }
    window.location.href = "https://crm-application-tm.netlify.app/dashboard"
  }

  return (
    <div>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <input className="btn btn-primary my-3 " type="submit" value="Login" />
      </form>
    </div>
  )
}

export default App
