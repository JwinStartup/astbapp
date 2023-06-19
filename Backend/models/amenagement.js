const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var amenagementSchema = new Schema({
    competence:{type:String},
    nombre:{type:String},
    postes:{type:String},        
    responsable:{type:String},
    salaire:{type:String}
},
);

module.exports=mongoose.model('Amenagement',amenagementSchema)