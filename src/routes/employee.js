const express = require("express");
const employee = require("../models/Employee");
const employeeRoute = express.Router();

// we can use route if we want to use both post and get and to the same enedpoint.
employeeRoute
  .route("/employees")
  .get(async (req, res) => {
    try {
      const employeeList = await employee.find({});
      res.status(200).json(employeeList);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newEmployee = new employee({
        ...req.body,
      });
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).send(err);
    }
  });


//can get employee by id
employeeRoute.get("/employees/:employeeid", async (req, res) => {
  try {
    const foundEmployee = await employee.findById(req.params.employeeid);
    if (!foundEmployee) {
      res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json(foundEmployee);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// can update employee by id
employeeRoute.put("/employees/:employeeid", async (req, res) => {
  try {
    const updatedBook = await employee.findByIdAndUpdate(req.params.employeeid, req.body);

    if (!updatedBook) {
      res.status(404).json({ message: "employee not found" });
    } else {
      res.status(200).json({ message: "employee updated successfully!"});
    }
  } catch (error) {
    res.status(500).send(err);
  }
});

// can delete employee b y id
employeeRoute.delete("/employees/:employeeid", async (req, res) => {
  try {
    const deleteEmployee = await employee.findByIdAndRemove({
      _id: req.params.employeeid,
    });

    if (!deleteEmployee) {
      res.status(200).json({ message: "employee not found" });
    } else {
      res.status(200).json({ message: "employee deleted successfully!"});
    }
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = employeeRoute;
