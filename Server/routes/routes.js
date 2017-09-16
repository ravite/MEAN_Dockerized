var express = require('express'),
router = express.Router();

//routes for user api
router.use("/users", require("../controllers/users.api"));

//add here other api routes

module.exports = router;