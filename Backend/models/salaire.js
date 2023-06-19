const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var SalaireSchema = new Schema({
    poste: {type:String},
    salaire: {type:String},
    salaireBrut: {type:String},
}
);

module.exports=mongoose.model('Salaire',SalaireSchema)