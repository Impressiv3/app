const { Meal } = require("../../../models/v1");
const { body, check, validationResult } = require("express-validator");


exports.get_meal_by_id = async (req, res) => {
  const { id } = req.params;

 try {
    const meal = await Meal.findOne({
      where: { id: id },
    });
    if (meal) {
      return res.status(200).json({
        meta: {
          http: 200,
          code: "get_meal_by_id_200",
          error: false,
          errors: error,
          text: `Request: get_meal_by_id id: ${req.params.id}, succesfully completed.`,
          more_info: "https://www.localhost:8080/get_all_meals_200.pdf",
        },
        data: [meal],
      });
    }
    return res.status(404).json({
      meta: {
        http: 404,
        code: "get_meal_by_id_404",
        error: true,
        errors: error,
        text: `There was an error while fetching meal by id: ${req.params.id}.`,
        more_info: "https://www.localhost:8080/get_meal_by_id_404.pdf",
      },
      data: [],
    });
  } catch (error) {
    return res.status(500).json({
      meta: {
        http: 500,
        code: "get_meal_by_id_500",
        error: true,
        errors: error,
        text: `There was an error while fetching meal by id: ${req.params.id}`,
        more_info: "https://www.localhost:8080/get_meal_by_id_500.pdf",
      },
      data: [],
    });
  } 
};