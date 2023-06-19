const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var bureauSchema = new Schema({
    equipement:{type:String},
    espace:{type:String},
    quantite:{type:String},
},
);

module.exports=mongoose.model('Bureau',bureauSchema)