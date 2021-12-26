const { Meal } = require("../../models");

exports.get_all_meals = async (req, res) => {
  try {
    const meals = await Meal.findAll({});
    return res.status(200).json({ meals });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
