const love = require('../models/love.js')
const LoveMoney = require('../models/loveMoney')
const modifie =async(req,res,next)=>{
     try {
   console.log(req.body)
/*
   for(let i=0;i<req.body.love.length;i++){ 
    await new love({
    date_final:req.body.love[i].date_final,
    delai:req.body.love[i].delai,
    delai_dattendu:req.body.love[i].delai_dattendu,
    lien_famille_connaissance:req.body.love[i].lien_famille_connaissance,
    montant_apporte:req.body.love[i].montant_apporte,
    montant_demande:req.body.love[i].montant_demande,
    montant_respecte:req.body.love[i].montant_respecte,
    nom_contact:req.body.love[i].nom_contact,
    reponse_donne:req.body.love[i].reponse_donne,
    statut_contacter:req.body.love[i].statut_contacter
    }
    ).save().then(async (doc)=> await 
    LoveMoney.findByIdAndUpdate(req.body._id,{$push:{love:doc.id}}))
   
  }
     
       var eP = await  LoveMoney.findByIdAndUpdate(req.body._id,{
        apport_personnel:req.body.apport_personnel,
        cout_demarrage_projet:req.body.cout_demarrage_projet,
        date_atteinte_epargne:req.body.date_atteinte_epargne,
        delai_respecte:req.body.delai_respecte,
        disponible_montant:req.body.disponible_montant,
        duree_obtention_montant:req.body.duree_obtention_montant,
         planB:req.body.planB
        }).populate('love')
        res.json(eP)
*/

     } catch (error) {
        console.log(error)
     }

}
const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await LoveMoney.findById(req.params.id).populate('love')
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