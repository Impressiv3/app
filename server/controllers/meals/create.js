const db = require("../../models");
const Meal = db.meals;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Meal
  const meal = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price,
    max_seats: req.body.max_seats,
    available_seats: req.body.max_seats,
    date: Date.now(),
  };

  // Save Meal in the database
  Meal.create(Meal)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Meal.",
      });
    });
};
