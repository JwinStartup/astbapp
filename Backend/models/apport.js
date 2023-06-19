const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var ApportSchema = new Schema({
    date_final:{type:String},
    delai:{type:String},
    delai_dattendu:{type:String},
    lien_famille_connaissance:{type:String},
    montant_apporte:{type:String},
    montant_demande:{type:String},
    montant_respecte:{type:String},
    nom_contact:{type:String},
    reponse_donne:{type:String},
    statut_contacter:{type:String}
},
);

module.exports=mongoose.model('Apport',ApportSchema)