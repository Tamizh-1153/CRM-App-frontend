import React, { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./serviceRequest.css"
import { Link, useNavigate } from "react-router-dom"
import Logout from "../../components/logout/Logout"

const ServiceRequest = () => {
  const refresh = useNavigate()
  const isToken = localStorage.getItem("token")
  const [assign, setAssign] = useState({})
  const [name, setName] = useState("")
  const [assignEmp, setAssignEmp] = useState("")
  const [srData, setSRData] = useState({})

  useEffect(() => {
    fetchAssign()
  }, [setAssign])

  const fetchAssign = async () => {
    try {
      const assignResponse = await fetch(
        `${process.env.REACT_APP_BackendURL}/api/v1/jobs/all-employees`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      const srResponse = await fetch(
        `${process.env.REACT_APP_BackendURL}/api/v1/jobs/sr`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      const assignResData = await assignResponse.json()
      setAssign(assignResData)
      const srResData = await srResponse.json()
      setSRData(srResData)
      console.log(srResData)
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(srData)

  const handleSRSubmit = async (e) => {
    e.preventDefault()
    console.log(name, assignEmp)

    await fetch(`${process.env.REACT_APP_BackendURL}/api/v1/jobs/sr`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, assignEmp }),
    })
    fetchAssign()
  }

  return (
    isToken ?
    <div className="dashboard_container">
      <Sidebar />
      <div className="service_request_content">
        <Logout />
        <h1>Service Requests </h1>
        {srData.fUser === "junior employee" ? null : (
          <div className="add_sr">
            <form onSubmit={handleSRSubmit}>
              <input
                type="text"
                placeholder="Service Request"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <select
                name="sr"
                id="sr"
                value={assignEmp}
                onChange={(e) => setAssignEmp(e.target.value)}
              >
                <option key={41} value="null" selected>
                  Choose
                </option>
                {assign.allEmployees?.map((emp) => (
                  <option key={emp._id} value={emp.fname}>
                    {emp.fname}
                  </option>
                ))}
              </select>
              <input type="submit" />
            </form>
          </div>
        )}

        <table className="sr_table">
          <thead>
            <tr>
              <th>Service Request</th>
              <th>Assigned</th>
              <th>Status</th>
              {srData.fUser === "junior employee" ? null : <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {srData.serviceRequests?.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.assignEmp}</td>
                <td>{item.type}</td>
                {srData.fUser === "junior employee" ? null : (
                  <td>
                    <Link
                      to={`/service_requests/${item._id}`}
                      state={{ assign, srData }}
                    >
                      <button className="edit_btn">Edit</button>
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    : refresh('/login')
  )
}

export default ServiceRequest
