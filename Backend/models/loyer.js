const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var LoyerSchema = new Schema({
  
    designation: {type:String},
    nombre: {type:String},
    prixtotal: {type:String},
    prixunitaire: {type:String}
  
}
);

module.exports=mongoose.model('Loyer',LoyerSchema)