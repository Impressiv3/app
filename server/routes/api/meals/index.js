const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Meals" });
});

module.exports = router;
