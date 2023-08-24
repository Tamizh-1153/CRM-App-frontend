import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "../serviceRequest/serviceRequest.css"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const EditLeads = () => {
  const { id } = useParams()
  const location = useLocation()
  const { assign, srData } = location.state
  /* eslint-disable */
  const editLD = srData.leads?.find((item) => item._id == id)
  /* eslint-enable */

  let refresh = useNavigate()

  const handleUpdate = async (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const assignEmp = e.target.elements.assignEmp.value
    const type = e.target.elements.type.value
    const ldUpdate = { name, assignEmp, type }

    await axios.patch(
      `${process.env.REACT_APP_BackendURL}/api/v1/jobs/ld/${id}`,
      ldUpdate,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    refresh("/leads")
  }

  return (
    <div className="dashboard_container">
      <Sidebar />
      <div className="edit_container">
        <h1>Edit Lead</h1>
        <form onSubmit={handleUpdate} className="edit_form">
          <input type="text" name="name" defaultValue={editLD.name} />
          <select
            name="assignEmp"
            id="assignEmp"
            defaultValue={editLD.assignEmp}
          >
            {assign.allEmployees?.map((emp) => (
              <option key={emp._id} value={emp.fname}>
                {emp.fname}
              </option>
            ))}
          </select>
          <select name="type" id="type" defaultValue={editLD.type}>
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

export default EditLeads
