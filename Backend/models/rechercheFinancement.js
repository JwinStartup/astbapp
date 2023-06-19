const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var rechercheFinancement = new Schema({
    projet:{
        type:Schema.Types.ObjectId,
        ref:'Projet'
    },
    modeFinancement:{
        type:Schema.Types.ObjectId,
        ref:'ModeFinancement'
    }
    ,
    creerPar:{
        type:Schema.Types.ObjectId,
        ref:'User'
        },
    
    epargnePersonelle:{
        type:Schema.Types.ObjectId,
        ref:'EpargnePersonelle'
    },
    soutienFamilial:{
        type:Schema.Types.ObjectId,
        ref:'SoutienFamilial'
    },

    loveMoney:{
        type:Schema.Types.ObjectId,
        ref:'LoveMoney'
    },

    pretBancaire:{
    type:Schema.Types.ObjectId,
    ref:'PretBancaire'
    },
    appelAssocie:{
        type:Schema.Types.ObjectId,
        ref:'AppelAssocie'
    },
    subvention:{
        type:Schema.Types.ObjectId,
        ref:'Subvention'
    }
    }
);

module.exports=mongoose.model('RechercheFinancement',rechercheFinancement)