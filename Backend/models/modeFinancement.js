const mongoose = require ('mongoose')
const Schema = mongoose.Schema
var ModeFinancementSchema = new Schema({
    affacturage:{type:Boolean},
    appelAssociés:{type:Boolean},
    apportPersonelle:{type:Boolean},
    businessAngel:{type:Boolean},
    capitalRisque:{type:Boolean},
    creditBail:{type:Boolean},
    loveMoney:{type:Boolean},
    pret:{type:Boolean},
    pretBancaire:{type:Boolean},
    soutienFamilial:{type:Boolean},
    subvention:{type:Boolean}
}
);

module.exports=mongoose.model('ModeFinancement',ModeFinancementSchema)