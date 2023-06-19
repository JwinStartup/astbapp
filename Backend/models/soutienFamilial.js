const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var SoutienFamilialSchema = new Schema({
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('SoutienFamilial',SoutienFamilialSchema)