'use strict'
const { estAuth } = require('../Enchaineur/est-auth.js')
const Projet = require('../models/projet.js')
const Utilisateur = require('../models/user')
const httpContext= require('express-http-context')
const rechercheFinancement = require('../models/rechercheFinancement.js')



const voir =async (req,res,next)=>{
   try {
  const rfinancement= await rechercheFinancement.findById(req.params.id)
   
  res.json(rfinancement)
  } catch (error) {
  }
}

module.exports={
  
    voir,
  
   
}