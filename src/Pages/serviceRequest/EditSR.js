import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./serviceRequest.css"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const EditSR = () => {
  const { id } = useParams()
  const location = useLocation()
  const { assign, srData } = location.state
  console.log(assign, srData)
  /* eslint-disable */
  const editSR = srData.serviceRequests?.find((item) => item._id == id)
  console.log(editSR)
  /* eslint-enable */

  let refresh = useNavigate()

  const handleUpdate = async (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const assignEmp = e.target.elements.assignEmp.value
    const type = e.target.elements.type.value
    const srUpdate = { name, assignEmp, type }
    console.log(srUpdate)

    await axios.patch(
      `${process.env.REACT_APP_BackendURL}/api/v1/jobs/sr/${id}`,
      srUpdate,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    refresh("/service_requests")
  }

  return (
    <div className="dashboard_container">
      <Sidebar />
      <div className="edit_container">
        <h1>Edit Service Request</h1>
        <form onSubmit={handleUpdate} className="edit_form">
          <input type="text" name="name" defaultValue={editSR.name} />
          <select
            name="assignEmp"
            id="assignEmp"
            defaultValue={editSR.assignEmp}
          >
            {assign.allEmployees?.map((emp) => (
              <option key={emp._id} value={emp.fname}>
                {emp.fname}
              </option>
            ))}
          </select>
          <select name="type" id="type" defaultValue={editSR.type}>
            <option value="open">Open</option>
            <option value="in_process">In process</option>
            <option value="cancelled">Cancelled</option>
            <option value="released">Released</option>
            <option value="completed">Completed</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default EditSR
