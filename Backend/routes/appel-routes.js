const express = require('express')
const { modifie,voir}= require('../controllers/appelController.js')

const router = express.Router()
router.get('/voir/:id',voir)
router.post('/modifie',modifie)



module.exports={
    routes:router
}