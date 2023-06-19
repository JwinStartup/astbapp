const express = require('express')
const { modifie,voir}= require('../controllers/epargneController.js')

const router = express.Router()
router.get('/voir/:id',voir)
router.post('/modifie',modifie)



module.exports={
    routes:router
}