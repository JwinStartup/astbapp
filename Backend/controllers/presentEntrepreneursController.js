'use strict'
const Associer = require('../models/associe.js')
const cursus = require('../models/cursus.js')
const domaineCompetence = require('../models/domaineCompetence.js')
const entrepreneur = require('../models/entrepreneur.js')
const experience = require('../models/experience.js')
const presentEntrepreneur = require('../models/presentEntrepreneurs.js')

const voir =async(req,res,next)=>{
     try {
   console.log(req.body)
   const p= await presentEntrepreneur.findById(req.params.id)
   .populate({path:'entrepreneur',
             populate:({path:'domaineCompetence cursus experience'}),
   }
   )
   res.json(p)      
     } catch (error) {
        console.log(error)
     }

}

const modifie =async (req,res,next)=>{
  try {
    console.log(req.body)
    for(let i=0;i<req.body.entrepreneur.length;i++){ 
      const entre = await new entrepreneur({
        nom :req.body.entrepreneur[i].nom,
        email :req.body.entrepreneur[i].email,
        photo:"",
        age:req.body.entrepreneur[i].age,
        situation:req.body.entrepreneur[i].situation,
        contact:req.body.entrepreneur[i].contact,
        informatique:req.body.entrepreneur[i].informatique,
        langues:req.body.entrepreneur[i].langues,
        loisir:req.body.entrepreneur[i].loisir,
        permis:req.body.entrepreneur[i].permis
        }).save().then( async (entre)=> { 
     //       console.log(entre)
     
      for(let j=0;j<req.body.entrepreneur[i].domaineCompetence.length;j++){
            const  domaine=  await new domaineCompetence({
              competence:req.body.entrepreneur[i].domaineCompetence[j].competence
            }).save().then((doc)=>entre.domaineCompetence.push(doc._id))
      }
      for(let j=0;j<req.body.entrepreneur[i].cursus.length;j++){
        const  domaine=  await new cursus({
          dateDebut:req.body.entrepreneur[i].cursus[j].dateDebut,
          dateFin:req.body.entrepreneur[i].cursus[j].dateFin,
          formation:req.body.entrepreneur[i].cursus[j].formation
        }).save().then((doc)=>entre.cursus.push(doc._id))
  }

  for(let j=0;j<req.body.entrepreneur[i].experience.length;j++){
    const  domaine=  await new experience({
          dateDebut:req.body.entrepreneur[i].experience[j].dateDebut,
          dateFin:req.body.entrepreneur[i].experience[j].dateFin,
          diplomes:req.body.entrepreneur[i].experience[j].diplomes
    }).save().then((doc)=>entre.experience.push(doc._id))
}
await entre.save()
 await presentEntrepreneur.findByIdAndUpdate(req.body._id,{$push:{entrepreneur:entre.id}})
 res.json(presentEntrepreneur)
})}

      } catch (error) {
         console.log(error)
      }
 

}

module.exports={
   voir,
   modifie
   
}