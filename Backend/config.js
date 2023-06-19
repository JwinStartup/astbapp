const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/astrainingbusiness',
(err)=>{
    if(!err){console.log('la connexion MongoDB a demarré avec success ')}
  else{ console.log(`Une erreur s'est produite  dans la base de donnée:` +err)}
}
)