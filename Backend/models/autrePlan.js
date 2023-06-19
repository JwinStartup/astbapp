const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var autrePlanSchema = new Schema({
 nom: {
        type:String
    },
     description:{
        type:String
     }
},
);

module.exports=mongoose.model('Autreplan',autrePlanSchema)