const express = require('express')
const { voirById}= require('../controllers/businessPlan.js')

const router = express.Router()
//router.post('/',lire)
router.post('/voirbyId',voirById)



module.exports={
    routes:router
}