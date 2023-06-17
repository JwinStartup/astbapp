import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect} from 'react'
import { FaChevronLeft } from "react-icons/fa"



const SousEntet=(props)=>{
const navigate = useNavigate()
const  MenuBusinessPLan=[
    {nom:'Presentation projet'},
    {nom:'Presentation entrepreneur'},
    {nom:'Etude de marché'},
    {nom:'Strategie commerciale'},
    {nom:'Gestion operationnelle'},
    {nom:'Prevision financieres'}
]
const  MenuRechercheFinancement=[
  {nom:'Epargne personnelle'},
  {nom:'Apport familial'},
  {nom:'Love money'},
  {nom:'Pret bancaire'},
  {nom:'Appel à des associés'},
  {nom:'Subventions étatique'}
]
const {id} = useParams()

    return(
        <div 
        style={{
          display: 'flex',    
          margin: '0px 40px 5px 40px',
          alignItems: 'center',
          justifyContent:'space-between'
        }}
        >
      <div style={{display: 'flex', margin: '0px 40px 5px 40px',
          alignItems: 'center',
          fontSize: '18px',
          color: 'black',
          cursor:'pointer',
          justifyContent:'space-between'}} 
          onClick={()=>navigate(-1)
            //props.parent=='Recherche financement'?navigate(`/projet/${id}/rFinancement`):navigate(`/projet/${id}/projet/projet/businessplan`)
          }> <FaChevronLeft/>
       Retour
       </div>
       <div><span>{props.parent} </span> - <span style={{color:'rgb(161 38 107 / 88%)'}}>{props.enfant} </span></div>
       {props.parent=='Business plan'?<div style={{display:'flex'}}>
       {MenuBusinessPLan.map(u=><div style={{background:props.enfant==u.nom?'rgb(56 187 255 / 69%)':'gainsboro', width:props.enfant==u.nom?'15px':'10px',height:props.enfant==u.nom?'15px':'10px',borderRadius:"50px",margin:props.enfant==u.nom?'0px':'3px', display:"'inline-block"}}></div>
       )}</div>
        :
       <div style={{display:'flex'}}>
       {MenuRechercheFinancement.map(u=><div style={{background:props.enfant==u.nom?'rgb(56 187 255 / 69%)':'gainsboro', width:props.enfant==u.nom?'15px':'10px',height:props.enfant==u.nom?'15px':'10px',borderRadius:"50px",margin:props.enfant==u.nom?'0px':'3px', display:"'inline-block"}}></div>
       )}</div>}
       </div>
    )
}
export default SousEntet