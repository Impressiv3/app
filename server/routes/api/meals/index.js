const router = require("express").Router();
const { create } = require("../../../controllers/meals/create");


router.get("/", (req, res) => {
  res.json({ message: "Meals" });
});

router.post('/', create);

module.exports = router;
