'use strict'
const Utilisateur = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const { createAccessToken, createRefreshToken } = require('../Enchaineur/est-auth');





const changeMotdepasse=async(req,res,next)=>{
  try {
    console.log(req.body)
  const user= await Utilisateur.findById(req.body.id)
  const hashedpassword= await bcrypt.hash(req.body.mouveau_mot2pass,12);
       user.password= await hashedpassword
      await user.save()
      res.json(user)
  } catch (error) {
    console.log(error)
  }
}


const voir=async (req,res,next)=>{
  try{
    console.log(req.params.id)
    const user= await  Utilisateur.findById(req.params.id).populate('test')
    console.log(user)
    res.json(user)
  }catch(error){
        console.log(error)
  }
}


const modifie=async (req,res,next)=>{
  try{
    const user= await  Utilisateur.findByIdAndUpdate(req.body._id,{
      nom:req.body.nom,
      prenom:req.body.prenom,
      typeUser:req.body.typeUser,
      contact:req.body.contact,
      sexe:req.body.sexe,
      numeroConfirme:req.body.numeroConfirme,
      situation:req.body.situation,
      habitation:req.body.habitation,
      niveau:req.body.niveau,
      profession:req.body.profession,
      inscriptionEtape:1
    })
    res.json(user)

  }catch(error){
        console.log(error)
  }
}
const ajoutUserParEmail= async(req,res,next)=>{
    try {
      const userExist= await Utilisateur.findOne({email:req.body.email}); 
               
      if(userExist){
          res.send("L'email a deja étè utilisé,Veuillez utiliser un autre")
      }
      const hashedpassword= await bcrypt.hash(req.body.password,12);
       
      var user = await new Utilisateur({
              nom_utilisateur:'Ast_001',
              email:req.body.email,
              sexe:req.body.sexe,   
              password:hashedpassword,
              typeUser:req.body.typeUser,
              estTeste:false,
              typeUser:req.body.typeUser,
              habitation:req.body.habitation,
              numeroConfirme:req.body.numeroConfirme,
              profession:req.body.profession,
              situation:req.body.situation,
              contact:req.body.contact,
              nom:req.body.nom,
              prenom:req.body.prenom,
              niveau:req.body.niveau,
          })
     
  user.save((err,doc)=>{
    if (err) { return console.error(err) }
      res.json({
        email:doc.email,
        password:req.body.password
      })
      
    })
    
    } catch (error) {
        console.log(error)
        
    }
}

const ajout_numero= async(req,res,next)=>{
  console.log(req.body)
  try {
    const userExist= await Utilisateur.findById(req.body.id); 
    if(userExist){
      console.log("Genial!! tu es inscris")
      userExist.numeroConfirme=req.body.numero
      userExist.codeConfirme="52524"
      userExist.inscriptionEtape=1 
      userExist.save((err,doc)=>{
        if (err) { return console.error(err) }
          res.send("numero ajouté")
          return console.log(doc)
      })
  } 
  } catch (error) {
    console.log(error)
  }
}
const tester =async (req,res,next)=>{
  try {
    console.log(req.body.id)
 // const userExist= await Utilisateur.findById(req.body.id); 
  //userExist.estTeste=true
  //userExist.save((err,doc)=>{
  //  if (err) { return console.error(err) }
  //    res.json(doc)
 // })
} catch (error) {
    
}
}

const confirmation_numero=async(req,res,next)=>{
  
  try {
    const userExist= await Utilisateur.findById(req.body.id); 
    console.log(userExist)
     const code= userExist.codeConfirme
     if(code==req.body.code){  
           userExist.inscriptionEtape=1
           userExist.save((err,doc)=>{
           res.send("confirmation effectuée avec success")
    })
      }else{
        res.send('code erroné')
      }
  } catch (error) {
    console.log(error)
  }
}

const connexion=async(req,res,next)=>{
  try {
  const user= await Utilisateur.findOne({email:req.body.email});
      
  if (!user){
    console.log('incorrect email')
      throw new Error('Email incorrect')
  }
  const estEgal= await bcrypt.compare(req.body.password,user.password);
  if(!estEgal){
    console.log('incorrect Mp')
  throw new Error('Mot de passe incorrect')
  }
  const token =jwt.sign({userID:user.id,email:user.email}, 'astraining',
    {
        expiresIn:'1h'
    });
  
    user.connexionStatut="oui"
    await user.save();
    console.log()
    res.json( {
        user:user._doc,
        token:token,
        tokenExpiration:1,
      
    })
  } catch (error) {
    res.send(error.message)
  }
}
const listeUtilisateurs=async(req,res,next)=>{
  try {
    console.log('hello')
    const user= await Utilisateur.find();
    res.json(user)
  } catch (error) {
 res.send(error)
}
    
}
const oubliePassword=async(req,res,next)=>{
     try {
    const user= await Utilisateur.findOne({email:req.body.email});
    if (!user){
      console.log("1")
     res.send('Email incorrect')
      }
      user.codeConfirme="102543"
      const code= user.codeConfirme
      if(code==req.body.codeConfirme){  
      const hashedpassword= await bcrypt.hash(req.body.password,12)
      user.password = hashedpassword

      await user.save((err,doc)=>{
        if (err) { return console.error(err) }
          res.send("votre mot de passe a étè modifié")
          return console.log(doc) 
          })
      
      }else{
        res.send("code incorrect")
      }
      
   
     } catch (error) {
      res.send(error)
     }
}
module.exports={
    ajoutUserParEmail,
    ajout_numero,
    confirmation_numero,
    connexion,
    oubliePassword,
    modifie,
    voir,
    changeMotdepasse,
    tester,
    listeUtilisateurs
}