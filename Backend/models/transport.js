const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var TransportSchema = new Schema({
  
    designation: {type:String},
    nombre: {type:String},
    prixtotal: {type:String},
    prixunitaire: {type:String}
  
}
);

module.exports=mongoose.model('Transport',TransportSchema)