const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var DomaineCompetenceSchema = new Schema({
    competence:{type:String
}
  
}
);

module.exports=mongoose.model('DomaineCompetence',DomaineCompetenceSchema)