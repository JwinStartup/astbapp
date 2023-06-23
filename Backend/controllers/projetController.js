'use strict'
const { estAuth } = require('../Enchaineur/est-auth.js')
const Projet = require('../models/projet.js')
const Utilisateur = require('../models/user')
const BusinessPlan = require('../models/businessPLan')
const httpContext= require('express-http-context')
const PresentProjet=require('../models/presentprojet')
const PresentEntrepreneur = require('../models/presentEntrepreneurs.js')
const EtudeMarche= require ('../models/em')
const GestionOperationnelle= require('../models/gop')
const StrategieCommercial = require ('../models/sc')
const PrevisionFinanciere = require('../models/pfp')
const RechercheFinancement= require('../models/rechercheFinancement')
const EpargnePersonelle = require('../models/epargnePersonelle.js')
const SoutienFamilial = require('../models/soutienFamilial.js')
const LoveMoney = require('../models/loveMoney')
const PretBancaire = require('../models/pretBancaire.js')
const AppelAssocie = require('../models/appelAssocie.js')
const Subvention = require('../models/subvention.js')

const supprimer=async(req,res,next)=>{
  try{
     const projet= await Projet.findByIdAndDelete(req.body.id)
     res.json(projet)
  }catch(error){
    console.log(error)
  }
}
const creer =async(req,res,next)=>{
 console.log( req.body)
   try {
   const userExist= await Utilisateur.findById(req.body.id_user); 
 var presentP= await new PresentProjet({
  creerPar:req.body.id_user
 }).save()
 var em= await new EtudeMarche({
  creerPar:req.body.id_user
 }).save()
 var presentEnt= await new PresentEntrepreneur({
  creerPar:req.body.id_user
 }).save()
 var gop= await new GestionOperationnelle({
  creerPar:req.body.id_user
 }).save()
 var sc= await new StrategieCommercial({
  creerPar:req.body.id_user
 }).save()
 var pfp= await new PrevisionFinanciere({
  creerPar:req.body.id_user
 }).save()

 var epargnePersonelle= await new EpargnePersonelle({
  creerPar:req.body.id_user
 }).save()
 var soutienFamilial= await new SoutienFamilial({
  creerPar:req.body.id_user
 }).save()
 var loveMoney= await new LoveMoney({
  creerPar:req.body.id_user
 }).save()
 var pretBancaire= await new PretBancaire({
  creerPar:req.body.id_user
 }).save()
 var appelAssocie= await new AppelAssocie({
  creerPar:req.body.id_user
 }).save()

 var subvention= await new Subvention({
  creerPar:req.body.id_user
 }).save()


 var business = await new BusinessPlan({
   creerPar:req.body.id_user 
}).save() 
var rechercheFinancement = await new RechercheFinancement({
  creerPar:req.body.id_user 
}).save() 
         

     await business.updateOne(
      {presentProjet:presentP._id,
        presentEntrepreneur:presentEnt._id,
        etudeMarche:em._id,
        gestionOperationnelle:gop._id,
        previsionFinanciere:pfp._id,
        strategieCommercial:sc._id},{new:true})

    await rechercheFinancement.updateOne(
      { epargnePersonelle:epargnePersonelle._id,
        soutienFamilial: soutienFamilial._id,
        loveMoney:loveMoney._id,
        pretBancaire:pretBancaire._id,
        appelAssocie:appelAssocie._id,
        subvention:subvention._id
      },{new:true})   


    var projet = await new Projet({
            nom_projet:req.body.nom_projet,
            slogan:req.body.slogan,
            code:req.body.code,
            verrou:true,
            aChoisirMode:false,
            creerPar:req.body.id_user,
            businessPlan:business._id,
            rechercheFinancement:rechercheFinancement._id
        })
projet.save().then(
  
  async (doc)=>{
    rechercheFinancement.projet= await doc._id
    business.projet= await doc._id
    await rechercheFinancement.save()
    await business.save()
    console.log(doc)
    res.status(201).json(doc)
  
  })

  
  } catch (error) {
      console.log(error)
      
  }
}
const deverouiller = async (req,res,next)=>{
    try {
      console.log(req.body)
        const projet= await Projet.findById(req.body.id_projet);
       if(req.body.codeDeverouillage==projet.code){
            await projet.updateOne({verrou:false},{new:true})
          res.send(projet)
        }else{
            res.send('verrouiller')
        }
    } catch (error) {
        console.log(error)
    }
}

const voirParId =async (req,res,next)=>{
  console.log('le id projet',req.body)
  const monProjet =  await Projet.findById(req.body.id)
   res.json(monProjet)
}
const voir =async (req,res,next)=>{
   try {
       console.log(req.body)
    const mesProjets =  await Projet.find({creerPar:req.body.userId})
      
      res.json(mesProjets)

   } catch (error) {
     new Error(error)  
   } 
  
}
const listeProjet=async (req,res,next)=>{
  try { 
    const mesProjets =  await Projet.find().populate('creerPar')
      
      res.json(mesProjets)
  } catch (error) {
    new Error(error)  
  } 
 
}

module.exports={
    creer,
    voirParId,
    voir,
supprimer,
    deverouiller,
    listeProjet
   
}
