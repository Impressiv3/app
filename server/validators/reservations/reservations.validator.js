const { check, body, param, validationResult } = require("express-validator");

exports.validate_meal = (method) => {
  switch (method) {
    case "create_new_review": {
      return [
        body("title", "title doesn't exists").exists().trim().escape(),
        body("description", "description does not exist").exists().escape().trim(),
        body("location", "location must be a string").exists().trim().escape().isString(),
        body("price", "price must be a number").exists().trim().escape().isInt(),
        body("max_seats", "max_seats must be a number")
          .exists()
          .withMessage("You must provide this info.")
          .trim()
          .escape()
          .toInt(),
        body("available_seats")
          .exists().withMessage("You must provide this value")
          .isInt().withMessage("Available seats must be a number."),
      ];
    }
  }
};

