import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "../serviceRequest/serviceRequest.css"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const EditContact = () => {

    const { id } = useParams()
    const location = useLocation()
    const { assign, srData } = location.state

    const editCts = srData.contacts?.find((item) => item._id == id)

    let refresh = useNavigate()

    const handleUpdate = async (e) => {
      e.preventDefault()
      const name = e.target.elements.name.value
      const assignEmp = e.target.elements.assignEmp.value
      const ctsUpdate = { name, assignEmp}

      await axios.patch(
        `${process.env.REACT_APP_BackendURL}/api/v1/jobs/cts/${id}`,
        ctsUpdate,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      refresh("/contacts")
    }

  return (
    <div className="dashboard_container">
      <Sidebar />
      <div className="edit_container">
        <h1>Edit Contact</h1>
        <form onSubmit={handleUpdate} className="edit_form">
          <input type="text" name="name" defaultValue={editCts.name} />
          <select
            name="assignEmp"
            id="assignEmp"
            defaultValue={editCts.assignEmp}
          >
            {assign.allEmployees?.map((emp) => (
              <option key={emp._id} value={emp.fname}>
                {emp.fname}
              </option>
            ))}
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default EditContact
