'use strict'
const { estAuth } = require('../Enchaineur/est-auth.js')
const Projet = require('../models/projet.js')
const Utilisateur = require('../models/user')
const httpContext= require('express-http-context')
const rechercheFinancement = require('../models/rechercheFinancement.js')
 const Mode = require('../models/modeFinancement')


const creer =async (req,res,next)=>{
   try {
      console.log(req.body)
      const modeFine = await new Mode({
         affacturage:req.body.affacturage,
         appelAssociés:req.body.appelAssociés,
         apportPersonelle:req.body.apportPersonelle,
         businessAngel:req.body.businessAngel,
         capitalRisque:req.body.capitalRisque,
         creditBail:req.body.creditBail,
         loveMoney:req.body.loveMoney,
         pret:req.body.pret,
         pretBancaire:req.body.pretBancaire,
         soutienFamilial:req.body.soutienFamilial,
         subvention:req.body.subvention
      }).save()
    const rfinancement= await rechercheFinancement.findById(req.body.id_rfinancement)
    rfinancement.modeFinancement=  await modeFine._id
     await rfinancement.save()
    const projet = await Projet.findById(rfinancement.projet) 
    projet.aChoisirMode = await true
    await projet.save()
    res.json(projet)
  } catch (error) {
   console.log(error)
  }
}

module.exports={
    creer,
}