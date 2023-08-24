import React, { useEffect, useState } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import "./dashboard.css"
import Logout from "../components/logout/Logout"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const refresh=useNavigate()
  const isToken=localStorage.getItem('token')
  const [data, setData] = useState({})
  /* eslint-disable */
  useEffect(() => {
    fetchData()
  }, [setData])
  /* eslint-enable */

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BackendURL}/api/v1/jobs/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      const resData = await response.json()
      setData(resData)
      console.log(resData)
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  //console.log(data.data.leads[0].leads)

  return (
    isToken ?<div className="dashboard_container">
      <Sidebar />
      <div className="dashboard_content">
        <Logout />
        <h2> Info about User </h2>
        <table>
          <tbody>
            <tr>
              <td>Service Request Count</td>
              <td>{data.srCount}</td>
            </tr>
            <tr>
              <td>Leads Count</td>
              <td>{data.ldCount}</td>
            </tr>
            <tr>
              <td>Contacts Count</td>
              <td>{data.ctsCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    : refresh('/login')
    
  )
}

export default Dashboard
