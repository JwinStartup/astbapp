const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var CofondateurSchema = new Schema({
delai_dattendu:{type:String},
moment_attendu:{type:String},
montant_apporte:{type:String},
montant_attendu:{type:String},
montant_respecte:{type:String},
nom_contact:{type:String},
reponse_donne:{type:String}
},
);

module.exports=mongoose.model('Cofondateur',CofondateurSchema)