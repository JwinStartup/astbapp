const express = require('express')
const { supprimer,listeProjet,creer,deverouiller, voir, voirParId}= require('../controllers/projetController.js')
const estAuth=require('../Enchaineur/est-auth')

const router = express.Router()
//router.post('/',lire)
router.post('/creer',creer)
router.post('/voirById',voirParId)
router.post('/deverouiller',deverouiller)
router.post('/voir',voir)
router.get('/liste',listeProjet)

router.delete('/delete',supprimer)



module.exports={
    routes:router
}