const { body } = require("express-validator");

const signup = () => {
  return [
    body("fullName", "Full Name is required").isString(),
    body("email", "Email is required").isEmail(),
    body("password", "Password is required")
      .isLength({ min: 2, max: 20})
      .withMessage("Password must be between 8-20 characters")
      
      
  ];
};

module.exports = { signup };
