const express = require('express')
const { creer}= require('../controllers/testController.js')

const router = express.Router()
//router.post('/',lire)
router.post('/creer',creer)



module.exports={
    routes:router
}