const amenagement = require('../models/amenagement.js')
const bureau = require('../models/bureau.js')
const GestionOperationnelle = require('../models/gop.js')
const modifie =async(req,res,next)=>{
     try {
   console.log(req.body)

   for(let i=0;i<req.body.amenagement.length;i++){ 
    await new amenagement({
    competence:req.body.amenagement[i].competence,
    nombre:req.body.amenagement[i].nombre,
    postes:req.body.amenagement[i].postes,        
    responsable:req.body.amenagement[i].responsable,
    salaire:req.body.amenagement[i].salaire
    }
    ).save().then(async (doc)=> await 
    GestionOperationnelle.findByIdAndUpdate(req.body._id,{$push:{amenagement:doc.id}}))
   
  }

  
  for(let i=0;i<req.body.bureau.length;i++){ 
    await new bureau({
      equipement:req.body.bureau[i].equipement,
    espace:req.body.bureau[i].espace,
    quantite:req.body.bureau[i].qualite
    }
    ).save().then(async (doc)=> await GestionOperationnelle
    .findByIdAndUpdate(req.body._id,{$push:{bureau:doc.id}}))
   
  }

     
       var gop = await  GestionOperationnelle.findByIdAndUpdate(req.body._id,{
        etape_procedure:req.body.etape_procedure,
        periode_reunion:req.body.periode_reunion,
        service1:req.body.service1,
        service2:req.body.service2,
        service3:req.body.service3,
        service4:req.body.service4,
        service5:req.body.service5,
        service6:req.body.service6,
        service7:req.body.service7,
        service8:req.body.service8,
        service9:req.body.service9,
        service10:req.body.service10,
  
        }).populate('amenagement').populate('bureau')
        res.json(gop)


     } catch (error) {
        console.log(error)
     }

}
const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await GestionOperationnelle.findById(req.params.id).populate('amenagement').populate('bureau')
    res.json(p)
    console.log(p)
  } catch (error) {
    console.log(error)
  }
}

module.exports={
    modifie,
    voir
}