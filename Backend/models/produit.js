const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var produitSchema = new Schema({
service_produit:{
        type:String
    },
tarif:{
       type:String
   }
}
);

module.exports=mongoose.model('produit',produitSchema)