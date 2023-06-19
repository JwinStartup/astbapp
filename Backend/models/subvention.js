const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var SubventionSchema = new Schema({
    montant_atteint:{type:String}, 
    montant_attendu:{type:String}, 
    montant_recu:{type:String}, 
    montant_reliquat:{type:String}, 
    nom_organisation:{type:String},
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
}
);

module.exports=mongoose.model('Subvention',SubventionSchema)