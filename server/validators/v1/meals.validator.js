const { check, body, validationResult } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create_new_meal": {
      return [
        body("title", "title doesn't exists").exists().trim().escape(),
        body("description", "description does not exist").exists().escape().trim(),
        body("location", "location must be a string").exists().trim().escape().isString(),
        body("price", "price must be a number").exists().trim().escape().isInt(),
        body("max_seats", "max_seats must be a number").exists().trim().escape().toInt(),
        body("available_seats", "available_seats must be a number").exists().trim().escape().isInt(),
        body("available_seats", "date must be in ISO date format").exists().trim().escape(),
      ];
    }
  }
};
