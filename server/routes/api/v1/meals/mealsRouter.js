const router = require("express").Router();
const { get_meal_by_id } = require("../../../../controllers/v1/meals/get_meal_by_id");
const { create_new_meal } = require("../../../../controllers/v1/meals/create_new_meal");
const { get_all_meals } = require("../../../../controllers/v1/meals/get_all_meals");


router.get("/", get_all_meals); // FILTERED

router.get("/:id", get_meal_by_id);

router.post("/", create_new_meal);


module.exports = router;
