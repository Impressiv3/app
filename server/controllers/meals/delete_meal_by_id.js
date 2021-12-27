const { Meal } = require("../../models");

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Meal.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Meal deleted");
    }
    throw new Error("Meal not found");
  } catch (error) {
    return res.status(500).json({
      error: true,
      data: [],
      message: error.message,
    });
  }
};
