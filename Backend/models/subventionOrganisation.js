const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var SubventionOrganisationSchema = new Schema({
    delai_attendu:{type:String} ,
    montant_attendu:{type:String} ,
    montant_demarrage:{type:String}, 
    montant_total_reunis:{type:String}, 
    observation:{type:String} ,
    organisation_contacter:{type:String}, 
    planB:{type:String} ,
    statut_periode:{type:String},
    subvention:[{
        type:Schema.Types.ObjectId,
        ref:'Subvention'
        }],
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('SubventionOrganisation',SubventionOrganisationSchema)