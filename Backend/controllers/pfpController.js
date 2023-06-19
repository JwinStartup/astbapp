const PrevisionFinanciere = require('../models/pfp.js')
const Administratif = require('../models/administratif.js')
const Divers = require('../models/divers.js')
const Marchandises = require('../models/marchandises.js')
const Publicite = require('../models/publicite.js')
const Loyer = require('../models/loyer.js')
const Equipement = require('../models/equipement.js')
const Transport = require('../models/transport.js')
const Communication = require('../models/communication.js')
const Fond_roulement = require('../models/fond_roulement.js')
const interne = require('../models/interne.js')
const externe = require('../models/externe.js')
const salaires = require('../models/salaire.js')

const modifie =async(req,res,next)=>{
  try {
       console.log(req.body)
  // console.log(req.body)
 if(req.body.interne){  
  for(let i=0;i<req.body.interne.length;i++){ 
    if(req.body.interne[i]._id){
      await interne.findByIdAndUpdate(req.body.interne[i]._id,{
        apporteur:req.body.interne[i].apporteur,
        montantMobilise:req.body.interne[i].montantMobilise,
        montantTotal:req.body.interne[i].montantTotal,
        resteMobilise:req.body.interne[i].resteMobilise}
      )
    }else{ await new interne({apporteur:req.body.interne[i].apporteur,
      montantMobilise:req.body.interne[i].montantMobilise,
      montantTotal:req.body.interne[i].montantTotal,
      resteMobilise:req.body.interne[i].resteMobilise}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{interne:doc.id}}))
    }
  }}
 if(req.body.externe){  for(let i=0;i<req.body.externe.length;i++){ 
   if(req.body.externe[i]._id){
     await externe.findByIdAndUpdate(req.body.externe[i]._id,{apporteur:req.body.externe[i].apporteur,  
      montantMobilise:req.body.externe[i].montantMobilise,
      montantTotal:req.body.externe[i].montantTotal,
      resteMobilise:req.body.externe[i].resteMobilise}
    )

   }else{
    await new externe({apporteur:req.body.externe[i].apporteur,  
      montantMobilise:req.body.externe[i].montantMobilise,
      montantTotal:req.body.externe[i].montantTotal,
      resteMobilise:req.body.externe[i].resteMobilise}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{externe:doc.id}}))
    }}
  }
  if(req.body.administratif){  for(let i=0;i<req.body.administratif.length;i++){ 
   if(req.body.administratif[i]._id){
   await  Administratif.findByIdAndUpdate(req.body.administratif[i]._id,{designation:req.body.administratif[i].designation,
      nombre:req.body.administratif[i].nombre,
      prixunitaire:req.body.administratif[i].prixunitaire,
      prixtotal:req.body.administratif[i].prixtotal}
    )

   }else{await new Administratif({designation:req.body.administratif[i].designation,
      nombre:req.body.administratif[i].nombre,
      prixunitaire:req.body.administratif[i].prixunitaire,
      prixtotal:req.body.administratif[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{administratif:doc.id}}))
    }}
  }
 if(req.body.loyer){  for(let i=0;i<req.body.loyer.length;i++){ 
     if(req.body.loyer[i]._id){
      await Loyer.findByIdAndUpdate(req.body.loyer[i]._id,{designation:req.body.loyer[i].designation,
        nombre:req.body.loyer[i].nombre,
        prixunitaire:req.body.loyer[i].prixnitaire,
        prixtotal:req.body.loyer[i].prixtotal}
      )
     }else{ 
    await new Loyer({designation:req.body.loyer[i].designation,
      nombre:req.body.loyer[i].nombre,
      prixunitaire:req.body.loyer[i].prixnitaire,
      prixtotal:req.body.loyer[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{loyer:doc.id}}))
    }}
  }
 if(req.body.equipement){  for(let i=0;i<req.body.equipement.length;i++){ 
  if(req.body.equipement[i]._id){
   await  Equipement.findByIdAndUpdate(req.body.equipement[i]._id,{designation:req.body.equipement[i].designation,
      nombre:req.body.equipement[i].nombre,
      prixunitaire:req.body.equipement[i].prixunitaire,
      prixtotal:req.body.equipement[i].prixtotal}
    )
  }else{
    await new Equipement({designation:req.body.equipement[i].designation,
      nombre:req.body.equipement[i].nombre,
      prixunitaire:req.body.equipement[i].prixunitaire,
      prixtotal:req.body.equipement[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{equipement:doc.id}}))
    }
  }
  }
 if(req.body.transport){  for(let i=0;i<req.body.transport.length;i++){ 
   if(req.body.transport[i]._id){  
    console.log(req.body.transport[i]._id)
     await Transport.findByIdAndUpdate(req.body.transport[i]._id,{
      designation:req.body.transport[i].designation,
      nombre:req.body.transport[i].nombre,
      prixunitaire:req.body.transport[i].prixunitaire,
      prixtotal:req.body.transport[i].prixtotal
      })
    }else{
    await new Transport({designation:req.body.transport[i].designation,
      nombre:req.body.transport[i].nombre,
      prixunitaire:req.body.transport[i].prixunitaire,
      prixtotal:req.body.transport[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{transport:doc.id}}))
    }
  } 
  }
 if(req.body.fond_roulement){  for(let i=0;i<req.body.fond_roulement.length;i++){ 
     if(req.body.fond_roulement[i]._id){
      await Fond_roulement.findByIdAndUpdate(req.body.fond_roulement[i]._id,{designation:req.body.fond_roulement[i].designation,
        nombre:req.body.fond_roulement[i].nombre,
        prixunitaire:req.body.fond_roulement[i].prixunitaire,
        prixtotal:req.body.fond_roulement[i].prixtotal}
      )
     }else{   
  await new Fond_roulement({designation:req.body.fond_roulement[i].designation,
      nombre:req.body.fond_roulement[i].nombre,
      prixunitaire:req.body.fond_roulement[i].prixunitaire,
      prixtotal:req.body.fond_roulement[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{fond_roulement:doc.id}}))
    }}
  }
 if(req.body.communication){  for(let i=0;i<req.body.communication.length;i++){ 
    if(req.body.communication[i]._id){
      await Communication.findByIdAndUpdate(req.body.communication[i]._id,{designation:req.body.communication[i].designation,
        nombre:req.body.communication[i].nombre,
        prixunitaire:req.body.communication[i].prixunitaire,
        prixtotal:req.body.communication[i].prixtotal}
      )
    }else{   
  await new Communication({designation:req.body.communication[i].designation,
      nombre:req.body.communication[i].nombre,
      prixunitaire:req.body.communication[i].prixunitaire,
      prixtotal:req.body.communication[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{communication:doc.id}}))
    }}
  } 
 if(req.body.divers){  for(let i=0;i<req.body.divers.length;i++){ 
   if(req.body.divers[i]._id){
    await  Divers.findByIdAndUpdate(req.body.divers[i]._id,{designation:req.body.divers[i].designation,
      nombre:req.body.divers[i].nombre,
      prixunitaire:req.body.divers[i].prixunitaire,
      prixtotal:req.body.divers[i].prixtotal}
    )  
   }else{ 
  await new Divers({designation:req.body.divers[i].designation,
      nombre:req.body.divers[i].nombre,
      prixunitaire:req.body.divers[i].prixunitaire,
      prixtotal:req.body.divers[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{divers:doc.id}}))
    }}
  }  
 if(req.body.publicite){  for(let i=0;i<req.body.publicite.length;i++){ 
  if(req.body.publicite[i]._id){
    await Publicite.findByIdAndUpdate(req.body.publicite[i]._id,{designation:req.body.publicite[i].designation,
      nombre:req.body.publicite[i].nombre,
      prixunitaire:req.body.publicite[i].prixunitaire,
      prixtotal:req.body.publicite[i].prixtotal}
    )
  }else{ 
    await new Publicite({designation:req.body.publicite[i].designation,
      nombre:req.body.publicite[i].nombre,
      prixunitaire:req.body.publicite[i].prixunitaire,
      prixtotal:req.body.publicite[i].prixtotal}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{publicite:doc.id}}))
    }}
  }  
 if(req.body.marchandise){  for(let i=0;i<req.body.marchandise.length;i++){ 
   if(req.body.marchandise[i]._id){
    await  Marchandises.findByIdAndUpdate(req.body.marchandise[i]._id,{marchandise:req.body.marchandise[i].marchandise,
      prixUnitaire:req.body.marchandise[i].prixUnitaire,
      quantite:req.body.marchandise[i].quantite,
      total:req.body.marchandise[i].total}
    )  
   }else{ 
  await new Marchandises({marchandise:req.body.marchandise[i].marchandise,
      prixUnitaire:req.body.marchandise[i].prixUnitaire,
      quantite:req.body.marchandise[i].quantite,
      total:req.body.marchandise[i].total}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{marchandises:doc.id}}))
    }}
  }  
 if(req.body.salaires){  for(let i=0;i<req.body.salaires.length;i++){ 
   if(req.body.salaires[i]._id){
    await  salaires.findByIdAndUpdate(req.body.salaires[i]._id,{poste:req.body.salaires[i].poste,
      salaires:req.body.salaires[i].salaires,
      salaireBrut:req.body.salaires[i].salaireBrut}
    )
   }else{  
    await new salaires({poste:req.body.salaires[i].poste,
      salaires:req.body.salaires[i].salaires,
      salaireBrut:req.body.salaires[i].salaireBrut}
    ).save().then(async (doc)=> await PrevisionFinanciere.findByIdAndUpdate(req.body._id,{$push:{salaires:doc.id}}))
    }}
  }

      var pfp = await  PrevisionFinanciere.findByIdAndUpdate(req.body._id,{
        cout_total_besoin_transport_course_demarrage:req.body.cout_total_besoin_transport_course_demarrage,
        cout_total_appel_telephonique_demarrage:req.body.cout_total_appel_telephonique_demarrage,
        cout_total_besoin_formalite_administrative:req.body.cout_total_besoin_formalite_administrative,
        cout_aquisition_amenagement_local:req.body.cout_aquisition_amenagement_local,
        cout_total_besoin_equipement_materiel:req.body.cout_total_besoin_equipement_materiel,
        cout_total_besoin_fonds_roulement:req.body.cout_total_besoin_fonds_roulement,
        cout_total_autres_besoin_divers_demarrage:req.body.cout_total_autres_besoin_divers_demarrage,
        cout_total_projet:req.body.cout_total_projet,
        mois_seul_rentabilite:req.body.mois_seul_rentabilite,
        annee_de_rentabilite:req.body.annee_de_rentabilite,
        chiffre_d_affaire_annuel:req.body.chiffre_d_affaire_annuel,
        })  

        pfp.nom_produitOne= await req.body.nom_produitOne
        pfp.prix_produitOne.mois1= await req.body.prix_produitOne.mois1
        pfp.prix_produitOne.mois2= await req.body.prix_produitOne.mois2
        pfp.prix_produitOne.mois3= await req.body.prix_produitOne.mois3
        pfp.prix_produitOne.mois4= await req.body.prix_produitOne.mois4
        pfp.prix_produitOne.mois5= await req.body.prix_produitOne.mois5
        pfp.prix_produitOne.mois6= await req.body.prix_produitOne.mois6
        pfp.prix_produitOne.mois7= await req.body.prix_produitOne.mois7
        pfp.prix_produitOne.mois8= await req.body.prix_produitOne.mois8
        pfp.prix_produitOne.mois9= await req.body.prix_produitOne.mois9
        pfp.prix_produitOne.mois10= await req.body.prix_produitOne.mois10
        pfp.prix_produitOne.mois11= await req.body.prix_produitOne.mois11
        pfp.prix_produitOne.mois12= await req.body.prix_produitOne.mois12
        await  pfp.save()

        pfp.total_produitOne.mois1= await req.body.total_produitOne.mois1
        pfp.total_produitOne.mois2= await req.body.total_produitOne.mois2
        pfp.total_produitOne.mois3= await req.body.total_produitOne.mois3
        pfp.total_produitOne.mois4= await req.body.total_produitOne.mois4
        pfp.total_produitOne.mois5= await req.body.total_produitOne.mois5
        pfp.total_produitOne.mois6= await req.body.total_produitOne.mois6
        pfp.total_produitOne.mois7= await req.body.total_produitOne.mois7
        pfp.total_produitOne.mois8= await req.body.total_produitOne.mois8
        pfp.total_produitOne.mois9= await req.body.total_produitOne.mois9
        pfp.total_produitOne.mois10= await req.body.total_produitOne.mois10
        pfp.total_produitOne.mois11= await req.body.total_produitOne.mois11
        pfp.total_produitOne.mois12= await req.body.total_produitOne.mois12
        await  pfp.save()
        pfp.quantite_produitOne.mois1= await req.body.quantite_produitOne.mois1
        pfp.quantite_produitOne.mois2= await req.body.quantite_produitOne.mois2
        pfp.quantite_produitOne.mois3= await req.body.quantite_produitOne.mois3
        pfp.quantite_produitOne.mois4= await req.body.quantite_produitOne.mois4
        pfp.quantite_produitOne.mois5= await req.body.quantite_produitOne.mois5
        pfp.quantite_produitOne.mois6= await req.body.quantite_produitOne.mois6
        pfp.quantite_produitOne.mois7= await req.body.quantite_produitOne.mois7
        pfp.quantite_produitOne.mois8= await req.body.quantite_produitOne.mois8
        pfp.quantite_produitOne.mois9= await req.body.quantite_produitOne.mois9
        pfp.quantite_produitOne.mois10= await req.body.quantite_produitOne.mois10
        pfp.quantite_produitOne.mois11= await req.body.quantite_produitOne.mois11
        pfp.quantite_produitOne.mois12= await req.body.quantite_produitOne.mois12
        await  pfp.save()
        pfp.nom_produitThree= await req.body.nom_produitThree
        pfp.prix_produitThree.mois1= await req.body.prix_produitThree.mois1
        pfp.prix_produitThree.mois2= await req.body.prix_produitThree.mois2
        pfp.prix_produitThree.mois3= await req.body.prix_produitThree.mois3
        pfp.prix_produitThree.mois4= await req.body.prix_produitThree.mois4
        pfp.prix_produitThree.mois5= await req.body.prix_produitThree.mois5
        pfp.prix_produitThree.mois6= await req.body.prix_produitThree.mois6
        pfp.prix_produitThree.mois7= await req.body.prix_produitThree.mois7
        pfp.prix_produitThree.mois8= await req.body.prix_produitThree.mois8
        pfp.prix_produitThree.mois9= await req.body.prix_produitThree.mois9
        pfp.prix_produitThree.mois10= await req.body.prix_produitThree.mois10
        pfp.prix_produitThree.mois11= await req.body.prix_produitThree.mois11
        pfp.prix_produitThree.mois12= await req.body.prix_produitThree.mois12

        await  pfp.save()
        pfp.total_produitThree.mois1= await req.body.total_produitThree.mois1
        pfp.total_produitThree.mois2= await req.body.total_produitThree.mois2
        pfp.total_produitThree.mois3= await req.body.total_produitThree.mois3
        pfp.total_produitThree.mois4= await req.body.total_produitThree.mois4
        pfp.total_produitThree.mois5= await req.body.total_produitThree.mois5
        pfp.total_produitThree.mois6= await req.body.total_produitThree.mois6
        pfp.total_produitThree.mois7= await req.body.total_produitThree.mois7
        pfp.total_produitThree.mois8= await req.body.total_produitThree.mois8
        pfp.total_produitThree.mois9= await req.body.total_produitThree.mois9
        pfp.total_produitThree.mois10= await req.body.total_produitThree.mois10
        pfp.total_produitThree.mois11= await req.body.total_produitThree.mois11
        pfp.total_produitThree.mois12= await req.body.total_produitThree.mois12
        await  pfp.save()
        pfp.quantite_produitThree.mois1= await req.body.quantite_produitThree.mois1
        pfp.quantite_produitThree.mois2= await req.body.quantite_produitThree.mois2
        pfp.quantite_produitThree.mois3= await req.body.quantite_produitThree.mois3
        pfp.quantite_produitThree.mois4= await req.body.quantite_produitThree.mois4
        pfp.quantite_produitThree.mois5= await req.body.quantite_produitThree.mois5
        pfp.quantite_produitThree.mois6= await req.body.quantite_produitThree.mois6
        pfp.quantite_produitThree.mois7= await req.body.quantite_produitThree.mois7
        pfp.quantite_produitThree.mois8= await req.body.quantite_produitThree.mois8
        pfp.quantite_produitThree.mois9= await req.body.quantite_produitThree.mois9
        pfp.quantite_produitThree.mois10= await req.body.quantite_produitThree.mois10
        pfp.quantite_produitThree.mois11= await req.body.quantite_produitThree.mois11
        pfp.quantite_produitThree.mois12= await req.body.quantite_produitThree.mois12
        await  pfp.save()
        pfp.nom_produitTwo= await req.body.nom_produitTwo
        pfp.prix_produitTwo.mois1= await req.body.prix_produitTwo.mois1
        pfp.prix_produitTwo.mois2= await req.body.prix_produitTwo.mois2
        pfp.prix_produitTwo.mois3= await req.body.prix_produitTwo.mois3
        pfp.prix_produitTwo.mois4= await req.body.prix_produitTwo.mois4
        pfp.prix_produitTwo.mois5= await req.body.prix_produitTwo.mois5
        pfp.prix_produitTwo.mois6= await req.body.prix_produitTwo.mois6
        pfp.prix_produitTwo.mois7= await req.body.prix_produitTwo.mois7
        pfp.prix_produitTwo.mois8= await req.body.prix_produitTwo.mois8
        pfp.prix_produitTwo.mois9= await req.body.prix_produitTwo.mois9
        pfp.prix_produitTwo.mois10= await req.body.prix_produitTwo.mois10
        pfp.prix_produitTwo.mois11= await req.body.prix_produitTwo.mois11
        pfp.prix_produitTwo.mois12= await req.body.prix_produitTwo.mois12

        await  pfp.save()
        pfp.total_produitTwo.mois1= await req.body.total_produitTwo.mois1
        pfp.total_produitTwo.mois2= await req.body.total_produitTwo.mois2
        pfp.total_produitTwo.mois3= await req.body.total_produitTwo.mois3
        pfp.total_produitTwo.mois4= await req.body.total_produitTwo.mois4
        pfp.total_produitTwo.mois5= await req.body.total_produitTwo.mois5
        pfp.total_produitTwo.mois6= await req.body.total_produitTwo.mois6
        pfp.total_produitTwo.mois7= await req.body.total_produitTwo.mois7
        pfp.total_produitTwo.mois8= await req.body.total_produitTwo.mois8
        pfp.total_produitTwo.mois9= await req.body.total_produitTwo.mois9
        pfp.total_produitTwo.mois10= await req.body.total_produitTwo.mois10
        pfp.total_produitTwo.mois11= await req.body.total_produitTwo.mois11
        pfp.total_produitTwo.mois12= await req.body.total_produitTwo.mois12
        await  pfp.save()
        pfp.quantite_produitTwo.mois1= await req.body.quantite_produitTwo.mois1
        pfp.quantite_produitTwo.mois2= await req.body.quantite_produitTwo.mois2
        pfp.quantite_produitTwo.mois3= await req.body.quantite_produitTwo.mois3
        pfp.quantite_produitTwo.mois4= await req.body.quantite_produitTwo.mois4
        pfp.quantite_produitTwo.mois5= await req.body.quantite_produitTwo.mois5
        pfp.quantite_produitTwo.mois6= await req.body.quantite_produitTwo.mois6
        pfp.quantite_produitTwo.mois7= await req.body.quantite_produitTwo.mois7
        pfp.quantite_produitTwo.mois8= await req.body.quantite_produitTwo.mois8
        pfp.quantite_produitTwo.mois9= await req.body.quantite_produitTwo.mois9
        pfp.quantite_produitTwo.mois10= await req.body.quantite_produitTwo.mois10
        pfp.quantite_produitTwo.mois11= await req.body.quantite_produitTwo.mois11
        pfp.quantite_produitTwo.mois12= await req.body.quantite_produitTwo.mois12
        await  pfp.save()
        pfp.nom_produitFour= await req.body.nom_produitFour
        pfp.prix_produitFour.mois1= await req.body.prix_produitFour.mois1
        pfp.prix_produitFour.mois2= await req.body.prix_produitFour.mois2
        pfp.prix_produitFour.mois3= await req.body.prix_produitFour.mois3
        pfp.prix_produitFour.mois4= await req.body.prix_produitFour.mois4
        pfp.prix_produitFour.mois5= await req.body.prix_produitFour.mois5
        pfp.prix_produitFour.mois6= await req.body.prix_produitFour.mois6
        pfp.prix_produitFour.mois7= await req.body.prix_produitFour.mois7
        pfp.prix_produitFour.mois8= await req.body.prix_produitFour.mois8
        pfp.prix_produitFour.mois9= await req.body.prix_produitFour.mois9
        pfp.prix_produitFour.mois10= await req.body.prix_produitFour.mois10
        pfp.prix_produitFour.mois11= await req.body.prix_produitFour.mois11
        pfp.prix_produitFour.mois12= await req.body.prix_produitFour.mois12

        await  pfp.save()
        pfp.total_produitFour.mois1= await req.body.total_produitFour.mois1
        pfp.total_produitFour.mois2= await req.body.total_produitFour.mois2
        pfp.total_produitFour.mois3= await req.body.total_produitFour.mois3
        pfp.total_produitFour.mois4= await req.body.total_produitFour.mois4
        pfp.total_produitFour.mois5= await req.body.total_produitFour.mois5
        pfp.total_produitFour.mois6= await req.body.total_produitFour.mois6
        pfp.total_produitFour.mois7= await req.body.total_produitFour.mois7
        pfp.total_produitFour.mois8= await req.body.total_produitFour.mois8
        pfp.total_produitFour.mois9= await req.body.total_produitFour.mois9
        pfp.total_produitFour.mois10= await req.body.total_produitFour.mois10
        pfp.total_produitFour.mois11= await req.body.total_produitFour.mois11
        pfp.total_produitFour.mois12= await req.body.total_produitFour.mois12
        await  pfp.save()
        pfp.quantite_produitFour.mois1= await req.body.quantite_produitFour.mois1
        pfp.quantite_produitFour.mois2= await req.body.quantite_produitFour.mois2
        pfp.quantite_produitFour.mois3= await req.body.quantite_produitFour.mois3
        pfp.quantite_produitFour.mois4= await req.body.quantite_produitFour.mois4
        pfp.quantite_produitFour.mois5= await req.body.quantite_produitFour.mois5
        pfp.quantite_produitFour.mois6= await req.body.quantite_produitFour.mois6
        pfp.quantite_produitFour.mois7= await req.body.quantite_produitFour.mois7
        pfp.quantite_produitFour.mois8= await req.body.quantite_produitFour.mois8
        pfp.quantite_produitFour.mois9= await req.body.quantite_produitFour.mois9
        pfp.quantite_produitFour.mois10= await req.body.quantite_produitFour.mois10
        pfp.quantite_produitFour.mois11= await req.body.quantite_produitFour.mois11
        pfp.quantite_produitFour.mois12= await req.body.quantite_produitFour.mois12
        await  pfp.save()
        
        pfp.vente.mois1= await req.body.vente.mois1
        pfp.vente.mois2= await req.body.vente.mois2
        pfp.vente.mois3= await req.body.vente.mois3
        pfp.vente.mois4= await req.body.vente.mois4
        pfp.vente.mois5= await req.body.vente.mois5
        pfp.vente.mois6= await req.body.vente.mois6
        pfp.vente.mois7= await req.body.vente.mois7
        pfp.vente.mois8= await req.body.vente.mois8
        pfp.vente.mois9= await req.body.vente.mois9
        pfp.vente.mois10= await req.body.vente.mois10
        pfp.vente.mois11= await req.body.vente.mois11
        pfp.vente.mois12= await req.body.vente.mois12
        await  pfp.save()
        pfp.amortissement.mois1= await req.body.amortissement.mois1
        pfp.amortissement.mois2= await req.body.amortissement.mois2
        pfp.amortissement.mois3= await req.body.amortissement.mois3
        pfp.amortissement.mois4= await req.body.amortissement.mois4
        pfp.amortissement.mois5= await req.body.amortissement.mois5
        pfp.amortissement.mois6= await req.body.amortissement.mois6
        pfp.amortissement.mois7= await req.body.amortissement.mois7
        pfp.amortissement.mois8= await req.body.amortissement.mois8
        pfp.amortissement.mois9= await req.body.amortissement.mois9
        pfp.amortissement.mois10= await req.body.amortissement.mois10
        pfp.amortissement.mois11= await req.body.amortissement.mois11
        pfp.amortissement.mois12= await req.body.amortissement.mois12
 
        await  pfp.save()
        pfp.totalEntre.mois1= await req.body.totalEntre.mois1
        pfp.totalEntre.mois2= await req.body.totalEntre.mois2
        pfp.totalEntre.mois3= await req.body.totalEntre.mois3
        pfp.totalEntre.mois4= await req.body.totalEntre.mois4
        pfp.totalEntre.mois5= await req.body.totalEntre.mois5
        pfp.totalEntre.mois6= await req.body.totalEntre.mois6
        pfp.totalEntre.mois7= await req.body.totalEntre.mois7
        pfp.totalEntre.mois8= await req.body.totalEntre.mois8
        pfp.totalEntre.mois9= await req.body.totalEntre.mois9
        pfp.totalEntre.mois10= await req.body.totalEntre.mois10
        pfp.totalEntre.mois11= await req.body.totalEntre.mois11
        pfp.totalEntre.mois12= await req.body.totalEntre.mois12
        await  pfp.save()
        pfp.totalCumul.mois1= await req.body.totalCumul.mois1
        pfp.totalCumul.mois2= await req.body.totalCumul.mois2
        pfp.totalCumul.mois3= await req.body.totalCumul.mois3
        pfp.totalCumul.mois4= await req.body.totalCumul.mois4
        pfp.totalCumul.mois5= await req.body.totalCumul.mois5
        pfp.totalCumul.mois6= await req.body.totalCumul.mois6
        pfp.totalCumul.mois7= await req.body.totalCumul.mois7
        pfp.totalCumul.mois8= await req.body.totalCumul.mois8
        pfp.totalCumul.mois9= await req.body.totalCumul.mois9
        pfp.totalCumul.mois10= await req.body.totalCumul.mois10
        pfp.totalCumul.mois11= await req.body.totalCumul.mois11
        pfp.totalCumul.mois12= await req.body.totalCumul.mois12
        await  pfp.save()
        pfp.totalSorties.mois1= await req.body.totalSorties.mois1
        pfp.totalSorties.mois2= await req.body.totalSorties.mois2
        pfp.totalSorties.mois3= await req.body.totalSorties.mois3
        pfp.totalSorties.mois4= await req.body.totalSorties.mois4
        pfp.totalSorties.mois5= await req.body.totalSorties.mois5
        pfp.totalSorties.mois6= await req.body.totalSorties.mois6
        pfp.totalSorties.mois7= await req.body.totalSorties.mois7
        pfp.totalSorties.mois8= await req.body.totalSorties.mois8
        pfp.totalSorties.mois9= await req.body.totalSorties.mois9
        pfp.totalSorties.mois10= await req.body.totalSorties.mois10
        pfp.totalSorties.mois11= await req.body.totalSorties.mois11
        pfp.totalSorties.mois12= await req.body.totalSorties.mois12
        await  pfp.save()
        pfp.totalcumulSorties.mois1= await req.body.totalcumulSorties.mois1
        pfp.totalcumulSorties.mois2= await req.body.totalcumulSorties.mois2
        pfp.totalcumulSorties.mois3= await req.body.totalcumulSorties.mois3
        pfp.totalcumulSorties.mois4= await req.body.totalcumulSorties.mois4
        pfp.totalcumulSorties.mois5= await req.body.totalcumulSorties.mois5
        pfp.totalcumulSorties.mois6= await req.body.totalcumulSorties.mois6
        pfp.totalcumulSorties.mois7= await req.body.totalcumulSorties.mois7
        pfp.totalcumulSorties.mois8= await req.body.totalcumulSorties.mois8
        pfp.totalcumulSorties.mois9= await req.body.totalcumulSorties.mois9
        pfp.totalcumulSorties.mois10= await req.body.totalcumulSorties.mois10
        pfp.totalcumulSorties.mois11= await req.body.totalcumulSorties.mois11
        pfp.totalcumulSorties.mois12= await req.body.totalcumulSorties.mois12
        await  pfp.save()
        pfp.autreCout.mois1= await req.body.autreCout.mois1
        pfp.autreCout.mois2= await req.body.autreCout.mois2
        pfp.autreCout.mois3= await req.body.autreCout.mois3
        pfp.autreCout.mois4= await req.body.autreCout.mois4
        pfp.autreCout.mois5= await req.body.autreCout.mois5
        pfp.autreCout.mois6= await req.body.autreCout.mois6
        pfp.autreCout.mois7= await req.body.autreCout.mois7
        pfp.autreCout.mois8= await req.body.autreCout.mois8
        pfp.autreCout.mois9= await req.body.autreCout.mois9
        pfp.autreCout.mois10= await req.body.autreCout.mois10
        pfp.autreCout.mois11= await req.body.autreCout.mois11
        pfp.autreCout.mois12= await req.body.autreCout.mois12
        await  pfp.save()
        pfp.remboursement.mois1= await req.body.remboursement.mois1
        pfp.remboursement.mois2= await req.body.remboursement.mois2
        pfp.remboursement.mois3= await req.body.remboursement.mois3
        pfp.remboursement.mois4= await req.body.remboursement.mois4
        pfp.remboursement.mois5= await req.body.remboursement.mois5
        pfp.remboursement.mois6= await req.body.remboursement.mois6
        pfp.remboursement.mois7= await req.body.remboursement.mois7
        pfp.remboursement.mois8= await req.body.remboursement.mois8
        pfp.remboursement.mois9= await req.body.remboursement.mois9
        pfp.remboursement.mois10= await req.body.remboursement.mois10
        pfp.remboursement.mois11= await req.body.remboursement.mois11
        pfp.remboursement.mois12= await req.body.remboursement.mois12
        await  pfp.save()
        pfp.mainOeuvre.mois1= await req.body.mainOeuvre.mois1
        pfp.mainOeuvre.mois2= await req.body.mainOeuvre.mois2
        pfp.mainOeuvre.mois3= await req.body.mainOeuvre.mois3
        pfp.mainOeuvre.mois4= await req.body.mainOeuvre.mois4
        pfp.mainOeuvre.mois5= await req.body.mainOeuvre.mois5
        pfp.mainOeuvre.mois6= await req.body.mainOeuvre.mois6
        pfp.mainOeuvre.mois7= await req.body.mainOeuvre.mois7
        pfp.mainOeuvre.mois8= await req.body.mainOeuvre.mois8
        pfp.mainOeuvre.mois9= await req.body.mainOeuvre.mois9
        pfp.mainOeuvre.mois10= await req.body.mainOeuvre.mois10
        pfp.mainOeuvre.mois11= await req.body.mainOeuvre.mois11
        pfp.mainOeuvre.mois12= await req.body.mainOeuvre.mois12
        await  pfp.save()
        pfp.matiere.mois1= await req.body.matiere.mois1
        pfp.matiere.mois2= await req.body.matiere.mois2
        pfp.matiere.mois3= await req.body.matiere.mois3
        pfp.matiere.mois4= await req.body.matiere.mois4
        pfp.matiere.mois5= await req.body.matiere.mois5
        pfp.matiere.mois6= await req.body.matiere.mois6
        pfp.matiere.mois7= await req.body.matiere.mois7
        pfp.matiere.mois8= await req.body.matiere.mois8
        pfp.matiere.mois9= await req.body.matiere.mois9
        pfp.matiere.mois10= await req.body.matiere.mois10
        pfp.matiere.mois11= await req.body.matiere.mois11
        pfp.matiere.mois12= await req.body.matiere.mois12
        await  pfp.save()
        pfp.totalCharge.mois1= await req.body.totalCharge.mois1
        pfp.totalCharge.mois2= await req.body.totalCharge.mois2
        pfp.totalCharge.mois3= await req.body.totalCharge.mois3
        pfp.totalCharge.mois4= await req.body.totalCharge.mois4
        pfp.totalCharge.mois5= await req.body.totalCharge.mois5
        pfp.totalCharge.mois6= await req.body.totalCharge.mois6
        pfp.totalCharge.mois7= await req.body.totalCharge.mois7
        pfp.totalCharge.mois8= await req.body.totalCharge.mois8
        pfp.totalCharge.mois9= await req.body.totalCharge.mois9
        pfp.totalCharge.mois10= await req.body.totalCharge.mois10
        pfp.totalCharge.mois11= await req.body.totalCharge.mois11
        pfp.totalCharge.mois12= await req.body.totalCharge.mois12
        await  pfp.save()
        pfp.coutFonctionement.mois1= await req.body.coutFonctionement.mois1
        pfp.coutFonctionement.mois2= await req.body.coutFonctionement.mois2
        pfp.coutFonctionement.mois3= await req.body.coutFonctionement.mois3
        pfp.coutFonctionement.mois4= await req.body.coutFonctionement.mois4
        pfp.coutFonctionement.mois5= await req.body.coutFonctionement.mois5
        pfp.coutFonctionement.mois6= await req.body.coutFonctionement.mois6
        pfp.coutFonctionement.mois7= await req.body.coutFonctionement.mois7
        pfp.coutFonctionement.mois8= await req.body.coutFonctionement.mois8
        pfp.coutFonctionement.mois9= await req.body.coutFonctionement.mois9
        pfp.coutFonctionement.mois10= await req.body.coutFonctionement.mois10
        pfp.coutFonctionement.mois11= await req.body.coutFonctionement.mois11
        pfp.coutFonctionement.mois12= await req.body.coutFonctionement.mois12
        await  pfp.save()
        pfp.achatMarchandise.mois1= await req.body.achatMarchandise.mois1
        pfp.achatMarchandise.mois2= await req.body.achatMarchandise.mois2
        pfp.achatMarchandise.mois3= await req.body.achatMarchandise.mois3
        pfp.achatMarchandise.mois4= await req.body.achatMarchandise.mois4
        pfp.achatMarchandise.mois5= await req.body.achatMarchandise.mois5
        pfp.achatMarchandise.mois6= await req.body.achatMarchandise.mois6
        pfp.achatMarchandise.mois7= await req.body.achatMarchandise.mois7
        pfp.achatMarchandise.mois8= await req.body.achatMarchandise.mois8
        pfp.achatMarchandise.mois9= await req.body.achatMarchandise.mois9
        pfp.achatMarchandise.mois10= await req.body.achatMarchandise.mois10
        pfp.achatMarchandise.mois11= await req.body.achatMarchandise.mois11
        pfp.achatMarchandise.mois12= await req.body.achatMarchandise.mois12
        await  pfp.save()
        pfp.chiffreDaffaire.mois1= await req.body.chiffreDaffaire.mois1
        pfp.chiffreDaffaire.mois2= await req.body.chiffreDaffaire.mois2
        pfp.chiffreDaffaire.mois3= await req.body.chiffreDaffaire.mois3
        pfp.chiffreDaffaire.mois4= await req.body.chiffreDaffaire.mois4
        pfp.chiffreDaffaire.mois5= await req.body.chiffreDaffaire.mois5
        pfp.chiffreDaffaire.mois6= await req.body.chiffreDaffaire.mois6
        pfp.chiffreDaffaire.mois7= await req.body.chiffreDaffaire.mois7
        pfp.chiffreDaffaire.mois8= await req.body.chiffreDaffaire.mois8
        pfp.chiffreDaffaire.mois9= await req.body.chiffreDaffaire.mois9
        pfp.chiffreDaffaire.mois10= await req.body.chiffreDaffaire.mois10
        pfp.chiffreDaffaire.mois11= await req.body.chiffreDaffaire.mois11
        pfp.chiffreDaffaire.mois12= await req.body.chiffreDaffaire.mois12
        await  pfp.save()
        pfp.coutMainDoeuvreSalaire.mois1= await req.body.coutMainDoeuvreSalaire.mois1
        pfp.coutMainDoeuvreSalaire.mois2= await req.body.coutMainDoeuvreSalaire.mois2
        pfp.coutMainDoeuvreSalaire.mois3= await req.body.coutMainDoeuvreSalaire.mois3
        pfp.coutMainDoeuvreSalaire.mois4= await req.body.coutMainDoeuvreSalaire.mois4
        pfp.coutMainDoeuvreSalaire.mois5= await req.body.coutMainDoeuvreSalaire.mois5
        pfp.coutMainDoeuvreSalaire.mois6= await req.body.coutMainDoeuvreSalaire.mois6
        pfp.coutMainDoeuvreSalaire.mois7= await req.body.coutMainDoeuvreSalaire.mois7
        pfp.coutMainDoeuvreSalaire.mois8= await req.body.coutMainDoeuvreSalaire.mois8
        pfp.coutMainDoeuvreSalaire.mois9= await req.body.coutMainDoeuvreSalaire.mois9
        pfp.coutMainDoeuvreSalaire.mois10= await req.body.coutMainDoeuvreSalaire.mois10
        pfp.coutMainDoeuvreSalaire.mois11= await req.body.coutMainDoeuvreSalaire.mois11
        pfp.coutMainDoeuvreSalaire.mois12= await req.body.coutMainDoeuvreSalaire.mois12
       
        await  pfp.save()
        pfp.dotation.mois1= await req.body.dotation.mois1
        pfp.dotation.mois2= await req.body.dotation.mois2
        pfp.dotation.mois3= await req.body.dotation.mois3
        pfp.dotation.mois4= await req.body.dotation.mois4
        pfp.dotation.mois5= await req.body.dotation.mois5
        pfp.dotation.mois6= await req.body.dotation.mois6
        pfp.dotation.mois7= await req.body.dotation.mois7
        pfp.dotation.mois8= await req.body.dotation.mois8
        pfp.dotation.mois9= await req.body.dotation.mois9
        pfp.dotation.mois10= await req.body.dotation.mois10
        pfp.dotation.mois11= await req.body.dotation.mois11
        pfp.dotation.mois12= await req.body.dotation.mois12
        await  pfp.save()
        pfp.publiciteMarketing.mois1= await req.body.publiciteMarketing.mois1
        pfp.publiciteMarketing.mois2= await req.body.publiciteMarketing.mois2
        pfp.publiciteMarketing.mois3= await req.body.publiciteMarketing.mois3
        pfp.publiciteMarketing.mois4= await req.body.publiciteMarketing.mois4
        pfp.publiciteMarketing.mois5= await req.body.publiciteMarketing.mois5
        pfp.publiciteMarketing.mois6= await req.body.publiciteMarketing.mois6
        pfp.publiciteMarketing.mois7= await req.body.publiciteMarketing.mois7
        pfp.publiciteMarketing.mois8= await req.body.publiciteMarketing.mois8
        pfp.publiciteMarketing.mois9= await req.body.publiciteMarketing.mois9
        pfp.publiciteMarketing.mois10= await req.body.publiciteMarketing.mois10
        pfp.publiciteMarketing.mois11= await req.body.publiciteMarketing.mois11
        pfp.publiciteMarketing.mois12= await req.body.publiciteMarketing.mois12
        await  pfp.save()
        pfp.rembousementEmp.mois1= await req.body.rembousementEmp.mois1
        pfp.rembousementEmp.mois2= await req.body.rembousementEmp.mois2
        pfp.rembousementEmp.mois3= await req.body.rembousementEmp.mois3
        pfp.rembousementEmp.mois4= await req.body.rembousementEmp.mois4
        pfp.rembousementEmp.mois5= await req.body.rembousementEmp.mois5
        pfp.rembousementEmp.mois6= await req.body.rembousementEmp.mois6
        pfp.rembousementEmp.mois7= await req.body.rembousementEmp.mois7
        pfp.rembousementEmp.mois8= await req.body.rembousementEmp.mois8
        pfp.rembousementEmp.mois9= await req.body.rembousementEmp.mois9
        pfp.rembousementEmp.mois10= await req.body.rembousementEmp.mois10
        pfp.rembousementEmp.mois11= await req.body.rembousementEmp.mois11
        pfp.rembousementEmp.mois12= await req.body.rembousementEmp.mois12
        await  pfp.save()
         pfp.resultatNet.mois1= await req.body.resultatNet.mois1
        pfp.resultatNet.mois2= await req.body.resultatNet.mois2
        pfp.resultatNet.mois3= await req.body.resultatNet.mois3
        pfp.resultatNet.mois4= await req.body.resultatNet.mois4
        pfp.resultatNet.mois5= await req.body.resultatNet.mois5
        pfp.resultatNet.mois6= await req.body.resultatNet.mois6
        pfp.resultatNet.mois7= await req.body.resultatNet.mois7
        pfp.resultatNet.mois8= await req.body.resultatNet.mois8
        pfp.resultatNet.mois9= await req.body.resultatNet.mois9
        pfp.resultatNet.mois10= await req.body.resultatNet.mois10
        pfp.resultatNet.mois11= await req.body.resultatNet.mois11
        pfp.resultatNet.mois12= await req.body.resultatNet.mois12
        await  pfp.save()
        pfp.venteResultat.mois1= await req.body.venteResultat.mois1
        pfp.venteResultat.mois2= await req.body.venteResultat.mois2
        pfp.venteResultat.mois3= await req.body.venteResultat.mois3
        pfp.venteResultat.mois4= await req.body.venteResultat.mois4
        pfp.venteResultat.mois5= await req.body.venteResultat.mois5
        pfp.venteResultat.mois6= await req.body.venteResultat.mois6
        pfp.venteResultat.mois7= await req.body.venteResultat.mois7
        pfp.venteResultat.mois8= await req.body.venteResultat.mois8
        pfp.venteResultat.mois9= await req.body.venteResultat.mois9
        pfp.venteResultat.mois10= await req.body.venteResultat.mois10
        pfp.venteResultat.mois11= await req.body.venteResultat.mois11
        pfp.venteResultat.mois12= await req.body.venteResultat.mois12
       await  pfp.save().then((d)=>res.json(d))
     } catch (error) {
        console.log(error)
     }

}

const voir =async (req,res,next)=>{
  try {
    console.log(req.params.id)
    const p= await PrevisionFinanciere.findById(req.params.id).populate('transport').populate('divers').populate('equipement').populate('communication').populate('fond_roulement').populate('administratif')
    res.json(p)
  
  } catch (error) {
    
  }
}
module.exports={
    modifie,
    voir
}