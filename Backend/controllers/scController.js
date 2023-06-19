const StrategieCommercial = require('../models/sc.js')
const produit = require('../models/produit')
const modifie = async (req,res,next)=>{
     try {
      console.log(req.body)
           for(let i=0;i<req.body.produit.length;i++){ 
             if(!req.body.produit[i]._id==false){
             await produit.findByIdAndUpdate(req.body.produit[i]._id,{service_produit:req.body.produit[i].service_produit,tarif:req.body.produit[i].tarif})}
              else{ 
      await new produit({service_produit:req.body.produit[i].service_produit,
        tarif:req.body.produit[i].tarif}
      ).save().then(async (doc)=> await StrategieCommercial.findByIdAndUpdate(req.body._id,{$push:{produit:doc.id}}))
     }
    }     
      var strategi = await StrategieCommercial.findByIdAndUpdate(req.body._id,{
        produit_service_propose:req.body.produit_service_propose,
        positionnement:req.body.positionnement,
        slogan:req.body.slogan,
        moyen_promotion:req.body.moyen_promotion,
        objectif_vente:req.body.objectif_vente,
        moyen_strategique:req.body.moyen_strategique,
        chiffre_affaire:req.body.chiffre_affaire,
        benefice:req.body.benefice,
        nom_lieu:req.body.nom_lieu
           
        }).populate('produit').then((d)=>res.json(d))

        

     } catch (error) {
        console.log(error)
     }

}
const voir =async (req,res,next)=>{
  try {
    const p= await StrategieCommercial.findById(req.params.id).populate('produit')
    res.json(p)
  
  } catch (error) {
    
  }
}
module.exports={
    modifie,
    voir
}