const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var EtudeMarcheSchema = new Schema({
    marche_local:{type:String},
    marche_local_disperse:{type:String},
    marche_regional:{type:String},
    marche_national:{type:String},
    marche_international:{type:String},
    type_concurrent:{type:String},
    annee_concurrent:{type:String},
    nom_concurrent:{ type:String},
    localite_concurrent:{type:String},
    activite_propose_concurrent:{type:String},
    frequence_concurrent:{ type:String},
    periode_concurrent:{ type:String},
    localisation_fournisseur_concurrent:{type:String},
    tarif_initial_concurrent: { type:String},
    tarif_final_concurrent:{ type:String},
    nombre_employes_concurrent:{ type:String},
    salaire_employes_concurrent:{type:String},
    chiffre_affaire_initial_concurrent:{ type:String},
    chiffre_affaire_final_concurrent:{ type:String},
    moyens_concurrent:{ type:String},
    forces_concurrent:{  type:String},
    nom_client:{type:String},
    localisation_client:{type:String},
    pouvoir_dachat_client:{  type:String},
    montant_depense_initial_client:{ type:String},
    montant_depense_final_client:{  type:String},
    produit_service_prefere_client:{ type:String},
    element_apprecie_client:{type:String},
    element_deprecie_client:{type:String},
    nom_fournisseur:{type:String},
    localisation_forurnisseur:{  type:String},
    prix_fournisseur:{  type:String},
    type_paiement_fournisseur:{  type:String},
    moyen_paiement_fournisseur:{ type:String},
    delais_livraison_fournisseur:{ type:String},
    frequence_livraison_fournisseur:{type:String},
    forces_fournisseur:{ type:String},
    faiblesse_fournisseur:{type:String},
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
}
);

module.exports=mongoose.model('EtudeMarche',EtudeMarcheSchema)