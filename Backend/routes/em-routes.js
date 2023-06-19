const express = require('express')
const { voir,modifie}= require('../controllers/emController.js')

const router = express.Router()
router.post('/modifie',modifie)
router.get('/voir/:id',voir)



module.exports={
    routes:router
}