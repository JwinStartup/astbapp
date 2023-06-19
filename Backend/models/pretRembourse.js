const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var PretRembourseSchema = new Schema({
    mois:{type:String}, 
    montantCumul:{type:String}, 
    montantPret:{type:String}, 
    observation:{type:String}

});

module.exports=mongoose.model('PretRembourse',PretRembourseSchema)