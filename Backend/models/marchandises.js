const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var MarchandisesSchema = new Schema({
  
    marchandise: {type:String},
    prixUnitaire: {type:String},
    quantite: {type:String},
    total: {type:String},

  
}
);

module.exports=mongoose.model('Marchandises',MarchandisesSchema)