const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var EpargneSchema = new Schema({
    mois:{type:String} ,
    montantCumul:{type:String} ,
    montantEpargne:{type:String} ,
},
);

module.exports=mongoose.model('Epargne',EpargneSchema)