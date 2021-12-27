const router = require("express").Router();
const { get_meal_by_id } = require("../../../../controllers/v1/meals/get_meal_by_id");
const { create_new_meal } = require("../../../../controllers/v1/meals/create_new_meal");
const { get_all_meals } = require("../../../../controllers/v1/meals/get_all_meals");
const { validate } = require("../../../../controllers/v1/validator.js");

router.get("/", get_all_meals); // FILTERED

router.get("/:id", get_meal_by_id);

router.post("/", validate("create_new_meal"), create_new_meal);

module.exports = router;
