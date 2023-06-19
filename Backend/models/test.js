const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var TestSchema = new Schema({
    note:{type:String},
    type:{type:String},
    creerPar:{
        type:Schema.Types.ObjectId,
     ref:'User'
    }
});

module.exports=mongoose.model('Test',TestSchema)