const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var ExperienceSchema = new Schema({
  
    dateDebut:{
        type:String
    },
    dateFin:{
       type:String
   },
    diplomes:{
        type:String
    }
  
}
);

module.exports=mongoose.model('Experience',ExperienceSchema)