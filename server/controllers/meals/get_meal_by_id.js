const { Meal } = require("../../models");

exports.get_meal_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const meal = await Meal.findOne({
      where: { id: id },
    });
    if (meal) {
      return res.status(200).json({ meal });
    }
    return res.status(404).send("Meal with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
 