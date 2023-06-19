const express = require('express')
const {changeMotdepasse,tester,voir,modifie,listeUtilisateurs, ajoutUserParEmail, ajout_numero,confirmation_numero,connexion, oubliePassword }= require('../controllers/userController')

const router = express.Router()
router.post('/inscription_email',ajoutUserParEmail)
router.get('/liste',listeUtilisateurs)
router.post('/ajout_numero',ajout_numero)
router.post('/confirmation_numero',confirmation_numero)
router.post('/connexion',connexion)
router.post('/oubliePassword',oubliePassword)
router.post('/modifie',modifie)
router.post('/tester',tester)

router.get('/voir/:id',voir)
router.post('/motdepassechange',changeMotdepasse)






module.exports={
    routes:router
}