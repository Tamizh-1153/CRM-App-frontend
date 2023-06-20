import React, { useEffect, useState } from "react"

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() =>{
    fetchData()
  },[setData])

  const fetchData = async () => {
    try {
        const response = await fetch(
          "https://crm-backend-frz0.onrender.com/api/v1/jobs/all",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        const resData = await response.json()
        
        setData(resData)
        
        
    } catch (error) {
        console.log(error.message);
    }
    
  }
  //console.log(data.data.leads[0].leads)

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        Info about User
        <li>Service Request count is : {data.srCount}</li>
        <li>Leads count is : {data.ldCount}</li>
        <li>Contacts count is : {data.ctsCount}</li>
        
        
      </ul>
    </div>
  )
}

export default Dashboard
