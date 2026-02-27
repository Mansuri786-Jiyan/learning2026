// const file = "File importing..."
// console.log(file);

// const user = require("./users")

// console.log(user.userName);
// console.log(user.age);
// // const num = user.userData(10)
// console.log(user.userData);

const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Mansuri" },
  { id: 2, name: "Barsena" },
  { id: 3, name: "Ansari" },
];

const Employees = [
  { id: 1, name: "Mansuri",sallary:30000 },
  { id: 2, name: "Barsena",sallary:40000 },
  { id: 3, name: "Ansari",sallary:20000 },
];

app.get("/test", (req, res) => {
  res.send("Server is Running");
});

app.get("/users", (req, res) => {
  res.json({
    message:"Successfull fetch",
    data:users
  })
});

app.get("/employees", (req, res) => {
  res.json({
    message:"Successfull fetch",
    data:Employees
  })
});

app.get("/employees/:id", (req, res) => {
  const responde = Employees.find(e => e.id === parseInt(req.params.id));
  if (responde) {
    res.json({
      message:"Successfull fetch",
      data:responde
    })
  }else{ res.send("Data Not found")}
});

app.listen(10000, (req, res) => {
  console.log(`Server start on 10000`);
});
