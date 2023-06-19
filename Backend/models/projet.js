const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var projetSchema = new Schema({
    nom_projet :{
        type:String
    },
    slogan :{
        type:String
    },
    aChoisirMode:{
        type:Boolean
    },
    code:{
        type:Number
    },
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
    verrou:{
        type:Boolean
    },    
    businessPlan:{
        type:Schema.Types.ObjectId,
        ref:'Businessplan'
    },
    rechercheFinancement:{
        type:Schema.Types.ObjectId,
        ref:'RechercheFinancement'
    }
    }
);

module.exports=mongoose.model('Projet',projetSchema)