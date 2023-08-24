import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function App() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const refresh = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `${process.env.REACT_APP_BackendURL}/api/v1/auth/login`,
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
      refresh("/dashboard")
    }else{
      alert('Login failed')
      refresh('/login')
    }
    
    
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
        <Link to='/forgotPassword'>
        <input className="btn btn-primary my-3 " type="submit" value="Forgot Password" />
        </Link>
        <input className="btn btn-primary my-3 " type="submit" value="Login" />
      </form>
    </div>
  )
}

export default App
