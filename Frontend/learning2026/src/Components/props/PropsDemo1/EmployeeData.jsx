import React from 'react'
import EmployeeTable from './EmployeeTable';

function EmployeeData() {
    const employees = [
    { id: 1, name: "Jiyan", position: "Frontend Developer", salary: 30000 },
    { id: 2, name: "Aman", position: "Backend Developer", salary: 35000 },
    { id: 3, name: "Sara", position: "UI/UX Designer", salary: 28000 },
    { id: 4, name: "Rahul", position: "Full Stack Developer", salary: 40000 },
  ];
  return (
    <div>
         <div>
      <h2 style={{ textAlign: "center" }}>Employee Management</h2>
      <EmployeeTable data={employees} />
    </div>
    </div>
  )
}

export default EmployeeData