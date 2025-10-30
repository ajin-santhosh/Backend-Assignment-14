const express = require("express")
const router = express.Router()
const validate = require('../controller/validate')

router.get('/validate',validate)
module.exports = router
