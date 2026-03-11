// const file = "File importing..."
// console.log(file);

// const user = require("./users")

// console.log(user.userName);
// console.log(user.age);
// // const num = user.userData(10)
// console.log(user.userData);

// const express = require("express");
// const { router } = require("./src/router/employeeRout");
// const app = express();
// const users = [
//   { id: 1, name: "Mansuri" },
//   { id: 2, name: "Barsena" },
//   { id: 3, name: "Ansari" },
// ];
// const Employees = [
//   { id: 1, name: "Mansuri",sallary:30000 },
//   { id: 2, name: "Barsena",sallary:40000 },
//   { id: 3, name: "Ansari",sallary:20000 },
// ];

// app.get("/employees", (req, res) => {
//   res.json({
//     message:"Successfull fetch",
//     data:Employees
//   })
// });
// app.get("/test", (req, res) => {
//   res.send("Server is Running");
// });

// app.get("/users", (req, res) => {
//   res.json({
//     message:"Successfull fetch",
//     data:users
//   })
// });


// app.get("/employees/:id", (req, res) => {
//   const responde = Employees.find(e => e.id === parseInt(req.params.id));
//   if (responde) {
//     res.json({
//       message:"Successfull fetch",
//       data:responde
//     })
//   }else{ res.send("Data Not found")}
// });

// const router = require("./routes/employee");
// const employeeRout = require("./src/router/employeeRout")
// app.use(employeeRout)
// console.log(employeeRout);
// app.listen(10000, () => {
//   console.log(`Server start on 10000`);
// });


const express = require("express");

const app = express();
app.use(express.json());


// Database Connection
const dbConnection = require("./src/util/dbConnection");
dbConnection();

// Routes
const productRoutes = require("./src/router/ProductRouter");
app.use("/api", productRoutes);

const bookRoutes = require("./src/router/BooksRouter");
if (bookRoutes) {
  app.use("/books", bookRoutes);
}

const stateRoutes = require("./src/router/stateRoutes");
const cityRoutes = require("./src/router/cityRoutes");
const categoryRoutes = require("./src/router/categoryRoutes");

app.use("/api/states", stateRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/categories", categoryRoutes);

const authRoutes = require("./src/router/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(10000, () => {
  console.log("Server start on 10000");
});