'use strict'
const { estAuth } = require('../Enchaineur/est-auth.js')
const Projet = require('../models/projet.js')
const Utilisateur = require('../models/user')
const BusinessPlan = require('../models/businessPLan')
const httpContext= require('express-http-context')



const voirById =async (req,res,next)=>{
   try {
    
   const businessPLan= await BusinessPlan.findById(req.body.id)
    res.json(businessPLan)

   
  } catch (error) {
   
      
  }
}

module.exports={
  
    voirById,
  
   
}
