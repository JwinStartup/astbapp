const apport = require('../models/apport')
const SoutienFamilial = require('../models/soutienFamilial')
const modifie =async(req,res,next)=>{
     try {
   console.log(req.body)
/*
   for(let i=0;i<req.body.apport.length;i++){ 
    await new apport({
    date_final:req.body.apport[i].date_final,
    delai:req.body.apport[i].delai,
    delai_dattendu:req.body.apport[i].delai_dattendu,
    lien_famille_connaissance:req.body.apport[i].lien_famille_connaissance,
    montant_apporte:req.body.apport[i].montant_apporte,
    montant_demande:req.body.apport[i].montant_demande,
    montant_respecte:req.body.apport[i].montant_respecte,
    nom_contact:req.body.apport[i].nom_contact,
    reponse_donne:req.body.apport[i].reponse_donne,
    statut_contacter:req.body.apport[i].statut_contacter
    }
    ).save().then(async (doc)=> await 
    SoutienFamilial.findByIdAndUpdate(req.body._id,{$push:{apport:doc.id}}))
   
  }
     
       var eP = await  SoutienFamilial.findByIdAndUpdate(req.body._id,{
        apport_personnel:req.body.apport_personnel,
        cout_demarrage_projet:req.body.cout_demarrage_projet,
        date_atteinte_epargne:req.body.date_atteinte_epargne,
        delai_respecte:req.body.delai_respecte,
        disponible_montant:req.body.disponible_montant,
        duree_obtention_montant:req.body.duree_obtention_montant,
         planB:req.body.planB
        }).populate('apport')
        res.json(eP)
*/

     } catch (error) {
        console.log(error)
     }

}
const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await SoutienFamilial.findById(req.params.id).populate('apport')
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