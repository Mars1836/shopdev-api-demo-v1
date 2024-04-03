const express = require("express");
const router = express.Router();
let users = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Alice", age: 30, gender: "Female" },
  { name: "Bob", age: 35, gender: "Male" },
];

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});
router.get("/api/user", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
    matadata: users,
  });
});

module.exports = router;
