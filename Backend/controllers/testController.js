const Test = require('../models/test.js')
const user = require('../models/user')
const creer = async (req,res,next)=>{
     try {
        console.log(req.body)
        const testEnt= await new  Test({
            note:req.body.note,
            type:req.body.type,
            creerPar:req.body.id_user
        }).save()
      const utilisateur= await user.findById(req.body.id_user)
      utilisateur.estTeste=  true,
      utilisateur.test=  testEnt._id
      await utilisateur.save(
        //(doc)=>{
         // res.json(doc)}
          )
          res.json(utilisateur)
     } catch (error) {
        console.log(error)
     }

}

module.exports={
    creer
}