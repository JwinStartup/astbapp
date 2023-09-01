import './test.css'
import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Fmenu from '../../components/fmenu/fmenu'
import TestComponent from '../../components/testComponent/testComponent'
import data from '../../data/test.json'
import { useState } from 'react'
import Entete from '../../components/Entete/entete'
import { Controller, useForm } from 'react-hook-form'
import Backdrop from '../../components/Backdrop/Backdrop'
import Profiltest from './profilTest'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import { useDispatch, useSelector } from 'react-redux'
import BtnRetourComponent from '../../components/btnRetourComponent'

export default function Test() {
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.auth)
  const navigate = useNavigate()
  const methods=useForm({})
  const [profil,setProfil]=useState(null)
  const [user,setUser]=useState(null)
    const [reponse,setReponse]= useState({})
    const [compteur,setCompteur]= useState(0)
    const [idStore,setIdStore]= useState(0)
   
    const onScore= async (p)=>{
       const score = Object.values(p)
       const total= score.reduce((acc,valeur)=>acc+valeur)
     const {note,type,desc}= observation(total)
     const fect = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/test/creer",{id_user:authUser.user.user._id , note:note , type:type})  
        setProfil({note:note,type:type,desc:desc})
        setUser(fect)
    }
       const onReponse=(id,point,index)=>{
        setReponse(
          {
           ...reponse,
           [id]:point
          }
          )
          if(idStore!=id || data[index].id != id){
            setCompteur(compteur+1)
          }
        setIdStore(id)
       }
     
     const observation=(total)=>{
        if(total>=0 & total<=5){                
        return({note:`${total}`,type:'Profil entrepreneur tres bas',desc:`Soyez,realiste ! il vous sera probablement difficile d'evoluer actuellement dans un milieu entrepreneurial`})
          }

          if(total>=6 & total<=10){
          return({note:`${total}`,type:'Profil entrepreneur bas',desc:`Votre profil entrepreneurial semble plutot bas. Vous auriez certainement grand profit à revoir certaines de vos opinios,attitudes ou comportements concernant votre désir de devenir entrepreneur`})
          }

          if(total>=11 & total<=15){ 
          return({note:`${total}`,type:'Profil entrepreneur en phase de transition',desc:`Vous êtez dans une zonne de transition . Vous êtes probablement apte à devenir entrepreneur ,mais vous devrez y mettre beaucoup d'efforts et de persévérance . Une aide et suivi sous forme de conseil et encouragement vous aeraient d'une grande utilité `})
            }

          if(total>=16 & total<=20){ 
          return({note:`${total}`,type:'Profil entrepreneur bien affirmé ',desc:`Votre profil entrepreneurial est bien affirmé,cependant votre succés comme entrepreneur pourrait dépendre des capacité (aptitudes,competences) que vous avez ou des ressources dont vous disposez.`})
      }

            if(total>=21 & total<=25){ 
            return({note:`${total}`,type:'Profil entrepreneur excellent ',desc:`Vous avez le profil de l'entrepreneur.Si vous nèavez pas encore votre entrepreise  ou n'avez pas encore songé à vous lancer dans la mêlée,n'hésitez plus`})
       }
    
    }
  

  return (
    <div>
         <Entete/>
        <BtnRetourComponent libelle={'Retour'} navigateur={()=>navigate('/')}/>
         <div><h3 style={{margin:'1px',color:"GrayText"}}>Passer le test entrepeneur</h3> <spam style={{fontStyle:'italic',color:'red'}}>{25-compteur} question(s) à repondre </spam></div>

   {profil!= null&&<div>
    <Backdrop/>
    <Profiltest note={profil.note} type={profil.type} desc={profil.desc} user={user} retourne={()=>setProfil(null) } />
    </div>}
  <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',height:'550px',overflow:'auto'}}>
  
      {data.flatMap((u,index,tab)=> 
      <fieldset key={index} style={{width:"630px",margin:"10px"}}>
            <legend>Question {u.id} : {u.q}</legend>
            <div style={{display:'flex' ,flexDirection:'row'}}>
              {u.r.map((value,indice,array)=><label   key={indice} style={{fontSize:'18px' ,display:"flex",flexDirection:'column',justifyContent:"flex-start",alignItems:"center",margin:"10px"}} >
              
                 <input  
                 name={u.id}
                 onChange={()=>onReponse(u.id,value.points,index)}
                  style={{width:"16px"  ,height:"16px",margin:'10px',cursor:'pointer'}}
                  type="radio"/>
                  {value.reponse}
                </label>)}
                  </div>

          </fieldset>)}
         {compteur==25 &&<div class="envoyer">

                <button   className="submit" onClick={()=>onScore(reponse)} >
                  ENVOYER
                 </button>

             </div>}

    </div>
  </div>
)}
