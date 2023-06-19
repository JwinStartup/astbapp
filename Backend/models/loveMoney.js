const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var LoveMoneySchema = new Schema({
    nombre_personne_contact:{type:String},
    planB:{type:String},
    love:[{
        type:Schema.Types.ObjectId,
        ref:'Love'
        }],
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('LoveMoney',LoveMoneySchema)