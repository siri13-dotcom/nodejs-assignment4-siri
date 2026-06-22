const express = require("express");

const app = express();
const PORT = 3000;

const employees = [
  {
    name: "Aghil",
    age: 20,
    salary: 50000,
    department: "development",
    city: "Hyderabad"
  },
  {
    name: "Babu",
    age: 25,
    salary: 60000,
    department: "marketing",
    city: "Delhi"
  },
  {
    name: "Babu",
    age: 25,
    salary: 60000,
    department: "marketing",
    city: "Pune"
  },
  {
    name: "Chaitanya",
    age: 30,
    salary: 70000,
    department: "sales",
    city: "Mumbai"
  },
  {
    name: "Divya",
    age: 28,
    salary: 55000,
    department: "development",
    city: "Bangalore"
  },
  {
    name: "Eesha",
    age: 22,
    salary: 48000,
    department: "hr",
    city: "Chennai"
  },
  {
    name: "Farhan",
    age: 27,
    salary: 62000,
    department: "marketing",
    city: "Hyderabad"
  },
  {
    name: "Gaurav",
    age: 32,
    salary: 72000,
    department: "sales",
    city: "Delhi"
  },
  {
    name: "Harin",
    age: 29,
    salary: 53000,
    department: "development",
    city: "Pune"
  },
  {
    name: "Ishita",
    age: 24,
    salary: 49000,
    department: "hr",
    city: "Mumbai"
  },
  {
    name: "Jatin",
    age: 31,
    salary: 71000,
    department: "sales",
    city: "Bangalore"
  },
  {
    name: "Kritika",
    age: 26,
    salary: 59000,
    department: "development",
    city: "Chennai"
  },
  {
    name: "Lalita",
    age: 23,
    salary: 54000,
    department: "marketing",
    city: "Hyderabad"
  },
  {
    name: "Manan",
    age: 33,
    salary: 73000,
    department: "sales",
    city: "Delhi"
  },
  {
    name: "Neha",
    age: 21,
    salary: 47000,
    department: "hr",
    city: "Pune"
  },
  {
    name: "Omkar",
    age: 30,
    salary: 70000,
    department: "marketing",
    city: "Hyderabad"
  }
];

// GET all employees or employees by city
app.get("/api/employees", (req, res) => {
  const { city } = req.query;

  if (city) {
    const filteredEmployees = employees.filter(
      employee =>
        employee.city.toLowerCase() === city.toLowerCase()
    );

    return res.json(filteredEmployees);
  }

  const employeesWithTier = employees.map(employee => ({
    ...employee,
    tier: employee.salary > 50000 ? 1 : 2
  }));

  res.json(employeesWithTier);
});

// GET total salary or total salary by city
app.get("/api/employees/salary/total", (req, res) => {
  const { city } = req.query;

  let filteredEmployees = employees;

  if (city) {
    filteredEmployees = employees.filter(
      employee =>
        employee.city.toLowerCase() === city.toLowerCase()
    );
  }

  const totalSalary = filteredEmployees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  res.json({ totalSalary });
});

// GET total salary of tier 1 employees
app.get("/api/employees/salary/tier1", (req, res) => {
  const totalSalary = employees
    .filter(employee => employee.salary > 50000)
    .reduce((sum, employee) => sum + employee.salary, 0);

  res.json({ totalSalary });
});

// Home route
app.get("/", (req, res) => {
  res.send("Employee API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});