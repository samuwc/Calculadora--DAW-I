const express = require("express")
const router = express.Router()
var controller = require("../controller/controller")

router.get('/', controller.abreCalculadora)
router.post('/', controller.abreResultado)

module.exports = router