const express = require('express')
const { creer}= require('../controllers/modeController.js')

const router = express.Router()
router.post('/creer',creer)



module.exports={
    routes:router
}