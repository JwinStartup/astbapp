const express = require('express')
const { modifie,voir}= require('../controllers/pretController.js')

const router = express.Router()
router.get('/voir/:id',voir)
router.post('/modifie',modifie)



module.exports={
    routes:router
}