const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var Fond_roulementSchema = new Schema({
  
    designation: {type:String},
    nombre: {type:String},
    prixtotal: {type:String},
    prixunitaire: {type:String}
  
}
);

module.exports=mongoose.model('Fond_roulement',Fond_roulementSchema)