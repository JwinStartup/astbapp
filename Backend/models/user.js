const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var userSchema = new Schema({
    nom_utilisateur :{
        type:String
    },
    nom :{
        type:String
    },
    prenom :{
        type:String
    },
    email :{
        type:String
    },
    password:{
        type:String
    },
    numeroConfirme:{
        type:String
    },
    codeConfirme:{
        type:String
    },
    
    photo:{
        type:String
    },
    habitation:{
        type:String
    },
    situation:{
        type:String
    },
    typeUser:{
        type:String
    },
    sexe:{
        type:String
    },
    contact:{
        type:String
    },
    niveau:{
        type:String
    },
    profession:{
        type:String
    },
    centreFormation:{
        type:String
    },
    projetId:{
        type:String
    },
   inscrisFormationStatut:{
    type:String
   },
   codeProjet:{
    type:String
   },
   connexionStatut:{
    type:String
   },
   inscrisFormationNumero:{
    type:String
   },
   inscriptionEtape:{
    type:Number
   },
   estMode:{
    type:Boolean
   },
   estTeste:{
    type:Boolean
   },
   test:{
    type:Schema.Types.ObjectId,
        ref:'Test'
   }

},
);

module.exports=mongoose.model('User',userSchema)