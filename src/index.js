const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
/*const wallTentRoutes = require("./routes/walltent");*/
const clientRoutes = require("./routes/clients");
const employeeRoutes = require("./routes/employees");
const studentRoutes = require("./routes/students");
const playRoutes = require("./routes/plays");
const ticketRoutes = require("./routes/tickets");

const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json()); 
//Gestión de las rutas usando el middleware
//app.use("/api", wallTentRoutes);
app.use("/api", clientRoutes);
app.use("/api", employeeRoutes);
app.use("/api", studentRoutes);
app.use("/api", playRoutes);
app.use("/api", ticketRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose

    .connect(process.env.MONGODB_URI)

    .then(() => console.log("Conexión exitosa"))

    .catch((error) => console.log(error));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});