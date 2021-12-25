const router = require("express").Router();
const create = require("../../../controllers/meals");

router.get("/", (req, res) => {
  res.json({ message: "Meals" });
});

router.post('/', function(req, res){
  create;
});

module.exports = router;
