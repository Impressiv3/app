const { check, body, validationResult } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create_new_meal": {
      return [
        body("title", "title doesn't exists").exists(),
        body("description", "description does not exist").exists(),
        body("price").optional().isInt(),
      ];
    }
  }
};
