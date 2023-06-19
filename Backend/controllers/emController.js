const EtudeMarche = require('../models/em.js')
const modifie =async(req,res,next)=>{
     try {
   console.log(req.body)
     
      var em = await  EtudeMarche.findByIdAndUpdate(req.body._id,{
        marche_local:req.body.marche_local,
        marche_local_disperse:req.body.marche_local_disperse,
        marche_regional:req.body.marche_regional,
        marche_national:req.body.marche_national,
        marche_international:req.body.marche_international,
        type_concurrent:req.body.type_concurrent,
        annee_concurrent:req.body.annee_concurrent,
        nom_concurrent:req.body.nom_concurrent,
        localite_concurrent:req.body.localite_concurrent,
        activite_propose_concurrent:req.body.activite_propose_concurrent,
        frequence_concurrent:req.body.frequence_concurrent,
        periode_concurrent:req.body.periode_concurrent,
        localisation_fournisseur_concurrent:req.body.localisation_fournisseur_concurrent,
        tarif_initial_concurrent:req.body.tarif_initial_concurrent ,
        tarif_final_concurrent:req.body.tarif_final_concurrent,
        nombre_employes_concurrent:req.body.nombre_employes_concurrent,
        salaire_employes_concurrent:req.body.salaire_employes_concurrent,
        chiffre_affaire_initial_concurrent:req.body.chiffre_affaire_initial_concurrent,
        chiffre_affaire_final_concurrent:req.body.chiffre_affaire_final_concurrent,
        moyens_concurrent:req.body.moyens_concurrent,
        forces_concurrent:req.body.forces_concurrent,
        nom_client:req.body.nom_client,
        localisation_client:req.body.localisation_client,
        pouvoir_dachat_client:req.body.pouvoir_dachat_client,
        montant_depense_initial_client:req.body.montant_depense_initial_client,
        montant_depense_final_client:req.body.montant_depense_final_client,
        produit_service_prefere_client:req.body.produit_service_prefere_client,
        element_apprecie_client:req.body.element_apprecie_client,
        element_deprecie_client:req.body.element_deprecie_client,
        nom_fournisseur:req.body.nom_fournisseur,
        localisation_forurnisseur:req.body.localisation_forurnisseur,
        prix_fournisseur:req.body.prix_fournisseur,
        type_paiement_fournisseur:req.body.type_paiement_fournisseur,
        moyen_paiement_fournisseur:req.body.moyen_paiement_fournisseur,
        delais_livraison_fournisseur:req.body.delais_livraison_fournisseur,
        frequence_livraison_fournisseur:req.body.frequence_livraison_fournisseur,
        forces_fournisseur:req.body.forces_fournisseur,
        faiblesse_fournisseur:req.body.faiblesse_fournisseur
           
        }).then((d)=>res.json(d))
      


     } catch (error) {
        console.log(error)
     }

}

const voir =async (req,res,next)=>{
  try {
    
    console.log(req.params.id)
    const p= await EtudeMarche.findById(req.params.id)
    console.log(p)
    res.json(p)
  
  } catch (error) {
    
  }
}
module.exports={
    modifie,
    voir
}