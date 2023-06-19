const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var ExterneSchema = new Schema({
  
    apporteur: {type:String},
    montantMobilise: {type:String},
    montantTotal: {type:String},
    resteMobilise: {type:String},

  
}
);

module.exports=mongoose.model('Externe',ExterneSchema)