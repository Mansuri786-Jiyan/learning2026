import React from 'react'

function EmployeeTable(props) {
  return (
     <div className="table table-striped" >
      <table style={{Width:"100px",textAlign:'center'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>₹{emp.salary}</td>
            </tr>
))}
        </tbody>
      </table>

      

    </div>
  )
}

export default EmployeeTable