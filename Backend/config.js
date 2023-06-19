const mongoose = require ('mongoose')

mongoose.connect('mongodb+srv://jeanakoupaul:jupy0500908420@cluster0.t2vaevc.mongodb.net/',
(err)=>{
    if(!err){console.log('la connexion MongoDB a demarré avec success ')}
  else{ console.log(`Une erreur s'est produite  dans la base de donnée:` +err)}
}
)
