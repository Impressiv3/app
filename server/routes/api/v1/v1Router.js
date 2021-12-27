const router = require("express").Router();
const mealsRouter = require("./meals/mealsRouter");

router.get("/", (req, res) => {
  res.json({ message: "Api version: 1.0" });
});

router.use("/meals", mealsRouter);

router.use(function (err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;
        return errors;
      }, {}),
    });
  }

  return next(err);
});

module.exports = router;
