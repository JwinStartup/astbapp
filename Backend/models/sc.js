const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var StrategieComSchema = new Schema({
    produit:[{
        type:Schema.Types.ObjectId,
    ref:'produit'
    }
      ],
      creepar:{
        type:Schema.Types.ObjectId,
    ref:'user'
    }
      ,
        produit_service_propose:{type:String},
        positionnement:{type:String},
        slogan:{type:String},
        moyen_promotion:{type:String},
        objectif_vente:{type:String},
        moyen_strategique:{type:String},
        chiffre_affaire:{type:String},
        benefice:{type:String},
        nom_lieu:{type:String}
}
);

module.exports=mongoose.model('StrategieCommercial',StrategieComSchema)