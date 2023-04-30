const express = require("express");
const router = express.Router();
const employeeSchema = require("../models/employee");

//New Employee
router.post("/employees", (req, res) => {
    const employee = employeeSchema (req.body);
    employee
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;