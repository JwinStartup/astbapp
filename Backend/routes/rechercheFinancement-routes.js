const express = require('express')
const { voir}= require('../controllers/rechercheFinancement')

const router = express.Router()
//router.post('/',lire)
router.get('/voir/:id',voir)



module.exports={
    routes:router
}