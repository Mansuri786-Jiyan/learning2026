// const employees = [
//     { id: 1, name: "Mansuri", sallary: 30000 },
//     { id: 2, name: "Barsena", sallary: 40000 },
//     { id: 3, name: "Ansari", sallary: 20000 },
// ];

// const findEmpbyid = (req, res) => {
//     const id = parseInt(req.params.id);

//     const employee = employees.find((emp) => emp.id == id);

//     if (employee) {
//         res.json({
//             message: "Successfully fetched",
//             data: employee
//         });
//     } else {

//         res.json({
//             message: "Employee not found"
//         });
//     }



//     res.json({
//         message: "Successfully fetched",
//         data: employees
//     });
// };

// module.exports = { findEmpbyid };