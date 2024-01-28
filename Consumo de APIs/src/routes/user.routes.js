const { Router } = require("express");

const { getUsersMostPopular } = require("../controllers/user.controllers");

const router = Router();

router.get("/mostPopular", getUsersMostPopular);

module.exports = router;
