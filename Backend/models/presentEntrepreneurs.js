const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var PresentEntrepreneursSchema = new Schema({
  entrepreneur:[{
    type:Schema.Types.ObjectId,
    ref:'Entrepreneur'
  }],
  creerPar:{
    type:Schema.Types.ObjectId,
    ref:'User'
}
  
}
);

module.exports=mongoose.model('PresentEntrepreneur',PresentEntrepreneursSchema)