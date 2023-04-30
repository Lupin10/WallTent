const express = require("express");
const router = express.Router();
const studentSchema = require("../models/student");

//New Student
router.post("/students", (req, res) => {
    const student = studentSchema (req.body);
    student
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});