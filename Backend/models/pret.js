const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var PretSchema = new Schema({
    date_remboursement:{type:String} ,
    delai_respecte:{type:String} ,
    montant_rembourse_par_periode:{type:String} ,
    nom_adresse_microfinance:{type:String} ,
    nombre_temps:{type:String} ,
    planB:{type:String},
    pretRembourse:[{
        type:Schema.Types.ObjectId,
        ref:'PretRembourse'
        }],
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('Pret',PretSchema)