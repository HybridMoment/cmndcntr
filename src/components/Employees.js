import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Employees (props) {

    const [employees, setEmployees] = useState({staff : []})
    
    useEffect(async()=>{
        const response = await axios("http://localhost:3001/api/getemployees")
        console.log("Printing response")
        console.log(response.data)
        setEmployees({staff : response.data})
    },[])

    return (
        <div>
            <h1>Hello {employees.staff.map(emp =><h2 key = {emp._id}>{emp.name}</h2>)}</h1>
        </div>
    )
}  

export default Employees
