const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var CursusSchema = new Schema({
  
   dateDebut:{
      type:String
  },
  dateFin:{
     type:String
 },
      formation:{
          type:String
      }
  
}
);

module.exports=mongoose.model('Cursus',CursusSchema)