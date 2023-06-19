const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var GestionOperationnelleSchema = new Schema({
    bureau:[
        { type:Schema.Types.ObjectId,
            ref:'Bureau'}
       ],
    amenagement:[
        {
            type:Schema.Types.ObjectId,
            ref:'Amenagement'
        }
        
    ],
    etape_procedure:{type:String},
    periode_reunion:{type:String},
    service1:{type:String},
    service2:{type:String},
    service3:{type:String},
    service4:{type:String},
    service5:{type:String},
    service6:{type:String},
    service7:{type:String},
    service8:{type:String},
    service9:{type:String},
    service10:{type:String},


creerPar:{
    type:Schema.Types.ObjectId,
    ref:'User'
}
},
);

module.exports=mongoose.model('GestionOperationnelle',GestionOperationnelleSchema)