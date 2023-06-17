import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import './formation.css'
export default function () {
  const navigate = useNavigate()
  const item=[{nom:"Test du profil",num:"01",background:"#00bcd4"},
  {nom:"Description du projet d'entreprise",num:"02",background:"rgb(38 238 29"},
  {nom:"Description de l'entrepeneur",num:"03",background:"rgb(25 56 60)"},
  {nom:"Etude de marché",num:"04",background:"rgb(241 138 69)"},
  {nom:"Stratégie commerçiale",num:"05",background:"rgb(43 152 166)"},
  {nom:"Gestion opérationnelle du projet",num:"06",background:"rgb(119 212 0)"},
  {nom:"Budgetisation du projet",num:"07",background:"rgb(25 56 60)"},
  {nom:"Previsions financières et économiques",num:"08",background:"rgb(241 138 69)"},
  {nom:"Recherche de financement",num:"09",background:"#00bcd4"}
]
  return (
    
    <div >
      <Entete/>
   <div className='formationPage'>
     <div className='formationDroite'> </div>
     
     <div className='formation'>  
      <div className='hautFormation'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
      </div>
      <div className='milieuFormation'>
       
       <div className='milieuFormationG'>
        <h2 style={{textDecoration:"underline"}}>Les modules</h2>
        <div style={{display:"flex",flexDirection:"column"}}>
        {item.map(u=><div style={{display:"flex",color:"white",flexDirection:"row",width:'300px',background:`${u.background}`,justifyContent:"space-between",margin:"5px"}}>
          <p style={{margin:"3px"}}>{u.nom}</p><p style={{margin:"3px"}}>{u.num}</p>
          </div>)}

        
          </div>
          </div>

       <div className='milieuFormationM'>
       <h2 style={{textDecoration:"underline"}}>Centres de formation</h2>
       <div style={{width:'300px'}}>
        <div><p>Paroise saint André à yopougon </p> </div>
       </div>
       </div>

       <div className='milieuFormationD'>
        <h2 style={{textDecoration:"underline"}}>Coûts</h2>
        <div 
        style={{
          width:'300px',
          height:"80%",
          border:"5px solid red",
          borderRadius:"35px",
          background:"white", 
          display:"flex",
          alignItems:"center",
          fontSize:"40px",
          justifyContent:"center"}}>
        
       <h4 style={{textDecoration:"underline overline"}}>10000 FCFA</h4>
       </div>
       </div>


      </div>
      <div className='basFormation'><button onClick={()=>navigate("/formation/test")}>Je passe le test du profil entrepeneur</button></div>
       </div>

       <div className='divButonCommencer'> 
       <button onClick={()=>navigate("/formation/test")}>Je passe le test du profil entrepeneur</button>
       </div>
    </div>
    </div>
  )
}
