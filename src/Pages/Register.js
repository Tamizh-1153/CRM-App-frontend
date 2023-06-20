import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const refresh=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      "https://crm-backend-frz0.onrender.com/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          role,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
    if (data.err) {
      alert("Provide valid details for registration")
      refresh('/register')
    } else {
      alert("Registered successfully")
    }
    //window.location.href = "/login"
    refresh('/login')
    console.log(data)
  }

  return (
    <div>
      <h1 className="my-5 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          className="form-control"
          type="text"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          placeholder="First name"
        />
        <br />
        <input
          className="form-control"
          type="text"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Last name"
        />
        <br />
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

        <select
          className="form-select"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="junior employee">Junior employee</option>
          <option value="senior employee">Senior employee</option>
        </select>
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <br />
      <div className="d-flex justify-content-center">
        <h6 className="d-flex align-items-end" style={{height:'4vh'}}>Already a member?</h6>
        <Link to='/login'>
        <button className="btn btn-primary">Log In</button>
        </Link>
      </div>
    </div>
  )
}

export default Register
