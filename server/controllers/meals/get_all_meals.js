const { Meal } = require("../../models");

exports.get_all_meals = async (req, res) => {
  try {
    const meals = await Meal.findAll({});
    return res.status(200).json({
      meta: {
        http: 200,
        code: "get_all_meals_200",
        error: false,
        error_message: null,
        text: "Request: get_all_meals , succesfully completed.",
        more_info: "https://www.localhost:8080/get_all_meals_200.pdf",
      },
      data: meals,
    });
  } catch (error) {
    return res.status(500).json({
      meta: {
        http: 500,
        code: "get_all_meals_500",
        error: true,
        error_message: error.message,
        text: "There was an error while fetching all the meals.",
        more_info: "https://www.localhost:8080/get_all_meals_500.pdf",
      },
      data: [],
    });
  } finally {
    console.info("Query - get all meals finished -");
  }
};
