'use strict'
const Presentprojet = require('../models/presentprojet.js')
const BusinessPlan = require('../models/businessplan')
const projet = require('../models/projet.js')
const realisation = require('../models/realisation.js')
const autrePlan = require('../models/autrePlan')
const associe = require('../models/associe.js')
const modifie =async(req,res,next)=>{
     try {
      console.log("------------------------------------------",req.body,"---------------------------------------")
     if(req.body.autreplan){for(let i=0;i<req.body.autreplan.length;i++){ 
             
      await new autrePlan({nom:req.body.autreplan[i].nom,
        description:req.body.autreplan[i].description}
      ).save().then(async (doc)=> await Presentprojet.findByIdAndUpdate(req.body._id,{$push:{autreplan:doc.id}}))
     
    }}

    if(req.body.realisation){ for(let i=0;i<req.body.realisation.length;i++){ 
      
      await new realisation({datedebut:req.body.realisation[i].datedebut,
        activite:req.body.realisation[i].activite,
        datefin:req.body.realisation[i].datefin,
        responsable:req.body.realisation[i].responsable,
        objectif:req.body.realisation[i].objectif
      }
      ).save().then(async (doc)=> await Presentprojet.findByIdAndUpdate(req.body._id,{$push:{realisation:doc.id}}))
       
       }}

       if(req.body.associe){for(let i=0;i<req.body.associe.length;i++){ 
     
          
      await new associe({nom:req.body.associe[i].nom}
      ).save().then(async (doc)=> await Presentprojet.findByIdAndUpdate(req.body._id,{$push:{associe:doc.id}}))
      
    }}
     
      const po= await Presentprojet.findByIdAndUpdate(req.body._id,{
            nom:req.body.nom,
            le:req.body.le,
            pays:req.body.pays,
            ville:req.body.ville,   
            autrelieu:req.body.autrelieu,
            etatespace:req.body.etatespace,
            dimension:req.body.dimension,
            raisons:req.body.raisons,
            besoins:req.body.besoins,
            objectifcourtterme:req.body.objectifcourtterme,
            objectifmoyenterme:req.body.objectifmoyenterme,
            objectiflongterme:req.body.objectiflongterme,
            clientel:req.body.clientel,
            serviceproduit:req.body.serviceproduit,
            avantage:req.body.avantage,
            avantageCon:req.body.avantageCon,            
            model:req.body.model,
            contrainte:req.body.contrainte,
            formejuridique:req.body.formejuridique,
            proprietaire:req.body.proprietaire,
            plan_economique:req.body.plan_economique,
            plansocial:req.body.plansocial,
            planpersonnel:req.body.planpersonnel,
        }).populate('autreplan').populate('associe').populate('realisation')
        res.json(po)

     } catch (error) {
        console.log(error)
     }

}

const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await Presentprojet.findById(req.params.id).populate('autreplan').populate('associe').populate('realisation')
    res.json(p)
    console.log(p)
  } catch (error) {
    
  }
}

module.exports={
    modifie,
    voir
   
}