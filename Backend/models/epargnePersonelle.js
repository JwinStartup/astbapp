const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var EpargnePersonelleSchema = new Schema({
    apport_personnel:{type:String},
    cout_demarrage_projet:{type:String},
    date_atteinte_epargne:{type:String},
    delai_respecte:{type:String},
    disponible_montant:{type:String},
    duree_obtention_montant:{type:String},
    planB:{type:String},
    epargne:[{
        type:Schema.Types.ObjectId,
        ref:'Epargne'
        }],
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
  
}
);

module.exports=mongoose.model('EpargnePersonelle',EpargnePersonelleSchema)