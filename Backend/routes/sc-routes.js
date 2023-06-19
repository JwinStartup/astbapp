const express = require('express')
const { modifie,voir}= require('../controllers/scController.js')

const router = express.Router()
//router.post('/',lire)
router.get('/voir/:id',voir)
router.post('/modifie',modifie)



module.exports={
    routes:router
}