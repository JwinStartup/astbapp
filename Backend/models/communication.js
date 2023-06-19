const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var CommunicationSchema = new Schema({
  
    designation: {type:String},
    nombre: {type:String},
    prixtotal: {type:String},
    prixunitaire: {type:String}
  
}
);

module.exports=mongoose.model('Communication',CommunicationSchema)