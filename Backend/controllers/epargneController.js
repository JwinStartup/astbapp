const epargne = require('../models/epargne')
const EpargnePersonelle = require('../models/epargnePersonelle')
const modifie =async(req,res,next)=>{
     try {
   console.log(req.body)

   for(let i=0;i<req.body.epargne.length;i++){ 
    await new epargne({
    mois:req.body.epargne[i].mois ,
    montantCumul:req.body.epargne[i].montantCumul ,
    montantEpargne:req.body.epargne[i].montantEpargne
    }
    ).save().then(async (doc)=> await 
    EpargnePersonelle.findByIdAndUpdate(req.body._id,{$push:{epargne:doc.id}}))
   
  }
     
       var eP = await  EpargnePersonelle.findByIdAndUpdate(req.body._id,{
        apport_personnel:req.body.apport_personnel,
        cout_demarrage_projet:req.body.cout_demarrage_projet,
        date_atteinte_epargne:req.body.date_atteinte_epargne,
        delai_respecte:req.body.delai_respecte,
        disponible_montant:req.body.disponible_montant,
        duree_obtention_montant:req.body.duree_obtention_montant,
         planB:req.body.planB
        }).populate('epargne')
        res.json(eP)


     } catch (error) {
        console.log(error)
     }

}
const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await EpargnePersonelle.findById(req.params.id).populate('epargne')
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