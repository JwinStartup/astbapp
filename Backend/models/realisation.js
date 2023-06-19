const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var realisationSchema = new Schema(
    {
        activite: { type:String},
        datedebut: { type:String},
        datefin: { type:String},
       responsable: { type:String}, 
        objectif: { type:String},
 
     }
);

module.exports=mongoose.model('Realisation',realisationSchema)