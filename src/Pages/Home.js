import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="d-flex justify-content-around align-items-center" style={{height:'100vh'}}>
      <Link to="/login">
        <button className="btn btn-primary">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-primary">Register</button>
      </Link>
    </div>
  )
}

export default Home
