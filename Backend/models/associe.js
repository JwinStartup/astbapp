const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var associeSchema = new Schema({
    nom :{type:String},
},
);

module.exports=mongoose.model('Associe',associeSchema)