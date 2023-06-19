const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var AppelAssocieSchema = new Schema({
    montant_total_reunis:{type:String} ,
    nombre_personne_contact:{type:String} ,
    planB:{type:String},
    associe:[{
        type:Schema.Types.ObjectId,
        ref:'Cofondateur'
        }],
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('AppelAssocie',AppelAssocieSchema)