const { Meal } = require("../../models");

exports.create_new_meal = async (req, res) => {
  try {
    const newMeal = await Meal.create(req.body);
    return res.status(201).json({
      newMeal,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
