const { check, body, validationResult } = require("express-validator");
const { Meal } = require("../../../models/v1");

exports.create_new_meal = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({
        meta: {
          http: 422,
          code: "create_new_meal_422",
          error: true,
          errors: errors.array(),
          text: "Not all fields passed the validation. Please check errors for more details.",
          more_info: "https://www.localhost:8080/create_new_meal_422.pdf",
        },
        data: [],
      });
      return;
    }

    const newMeal = await Meal.create(req.body);
    res.json({
      meta: {
        http: 201,
        code: "create_new_meal_201",
        error: false,
        errors: errors.array(),
        text: "Request: create_new_meal , succesfully completed.",
        more_info: "https://www.localhost:8080/get_all_meals_201.pdf",
      },
      data: [newMeal],
    });
  } catch (err) {
    return next(err);
  }
};
