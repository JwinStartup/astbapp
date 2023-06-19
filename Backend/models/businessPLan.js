const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var businessPLanSchema = new Schema({
    projet:{
        type:Schema.Types.ObjectId,
        ref:'Projet'
    },
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
    
    presentProjet:{
        type:Schema.Types.ObjectId,
        ref:'PresentProjet'
    },

    presentEntrepreneur:{
        type:Schema.Types.ObjectId,
        ref:'PresentEntrepreneur'
    },

    etudeMarche:{
        type:Schema.Types.ObjectId,
        ref:'EtudeMarche'
    },

    strategieCommercial:{
    type:Schema.Types.ObjectId,
    ref:'StrategieCommercial'
    },

    gestionOperationnelle:{
        type:Schema.Types.ObjectId,
        ref:'GestionOperationnelle'
    },

    previsionFinanciere:{
        type:Schema.Types.ObjectId,
        ref:'PrevisionFinanciere'
    },


    }
);

module.exports=mongoose.model('BusinessPlan',businessPLanSchema)