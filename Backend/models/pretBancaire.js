const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var PretBancaireSchema = new Schema({
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
}
);

module.exports=mongoose.model('PretBancaire',PretBancaireSchema)