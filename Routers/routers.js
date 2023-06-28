const router = require("express").Router()

const controller = require("../Controller/Controller")

router.get("/getAll", controller.getAll)
router.post("/getAll", controller.postAll)



module.exports = router;