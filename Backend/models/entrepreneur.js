const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var EntrepreneursSchema = new Schema({
   nom :{
      type:String
  },
  email :{
      type:String
  },
  photo:{
      type:String
  },
  age:{
      type:String
  },
  situation:{
      type:String
  },
  domaineCompetence:[{
    type:Schema.Types.ObjectId,
    ref:'DomaineCompetence'
  }],
  contact:{
      type:String
  },
  cursus:[{
    type:Schema.Types.ObjectId,
    ref:'Cursus'
  }],
  experience:[{
    type:Schema.Types.ObjectId,
    ref:'Experience'
  }],
  informatique:{
      type:String
  },
  langues:{
      type:String
  },
  loisir:{
      type:String
  },
  permis:{
      type:String
  }
},
);

module.exports=mongoose.model('Entrepreneur',EntrepreneursSchema)