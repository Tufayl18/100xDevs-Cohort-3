const express = require("express")
const router = express.Router()
const { signin, signup, getMyInfo } = require("../controllers/userController.js")
router.post("/signup", signup)

router.post("/signin", signin)

router.get("/me", getMyInfo)
module.exports = router
