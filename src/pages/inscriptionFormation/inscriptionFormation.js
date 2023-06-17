import React, { useState } from 'react'
import Entete from '../../components/Entete/entete'
import {FaUserCircle} from "react-icons/fa"
import {BsFillPlusCircleFill} from "react-icons/bs"
import "./inscriptionFormation.css"
import {  useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import { useSelector } from 'react-redux'
import BtnRetourComponent from '../../components/btnRetourComponent'
import Skeleton from 'react-loading-skeleton'

export default function InscriptionFormation() {
  const {id }=useParams()
  const authUser = useSelector(x => x.auth)
  const methods =useForm({
 defaultValues: async ()=>await fetchWrapper.get(`http://localhost:8080/api/users/voir/${id}`)
 //.then((d)=>console.log(d)) 
  })
  const navigate = useNavigate()
 
   const onSubmit= async d=>{
          console.log(d)
          const response = await fetchWrapper.post("http://localhost:8080/api/users/modifie",d);
       console.log(response)
       if(response){
        navigate(-1)
       }
        }
  
  return (
    <div>
        <Entete/>
        <BtnRetourComponent libelle={'Retour'} navigateur={()=>navigate(-1)}/>
        <div className="formFormation">
         <div className="centerFormation">
            <div className="hautinscriptionFor">
            <h2 className="h2">Je modifies les informations</h2>
            <hr className="hr"/>
            </div>
            <div className="basinscriptionForm">
                  
                   <form className="inscriptionForm" autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
                 <div> 
                   <FaUserCircle size={100} className="faUser"/>
                   <BsFillPlusCircleFill size={20} className="bsFill"/>
                 </div>
                    <div className="nom_prenom" style={{display:"flex",flexDirection:'row'}}>
                   <div  className="nomForm">
                       <p className=""> Nom</p> 
                       {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('nom')} type="text" className="nomformInput"  placeholder='Entrer votre nom'/>}
                    </div>
                    <div  className="nomForm">
                       <p className="">
                        Prenom
                       </p> {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('prenom')} type="text" className="nomformInput" placeholder='Entrer votre nom'/>}
                    </div>
                  </div>

                <div className="lieu_situation">
                    <div  className="nomForm">
                       <p className="">Lieu d'habitation</p> {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('habitation')} type="text" className="nomformInput" placeholder="Entre votre lieu d'habitation" />}
                    </div>
                    <div  className="nomForm">
                     <p className="">Situation matrimoniale</p>  {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>: <select {...methods.register('situation')} className="nomFormSelect">
                       <option >Célibataire sans enfant</option>
                       <option >Célibataire avec enfant</option>
                       <option >Marié avec sans enfant</option>
                       <option >Marié avec sans enfant</option>
                    </select>}
                    </div>
                </div>
                   <div className="contact">  <div  className="nomForm">
                     <p> Sexe</p>   {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:
                     <select {...methods.register('sexe')} className="nomFormSelect">
                     <option >Masculin</option>
                     <option >Feminin</option>
                     </select>
                     }
                    </div>
                   {authUser.user.user.typeUser=='admin'&&<div  className="nomForm">
                       <p className="">Type utilisateur</p>  {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:
                       <select {...methods.register('typeUser')} className="nomFormSelect">
                       <option >admin</option>
                       <option >etudiant</option>
                       </select>
                       }
                    </div>}
                    </div>
                    <div className="contact">  <div  className="nomForm">
                     <p> Contact1</p>   {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('numeroConfirme')} type="text" className="nomformInput" placeholder='Entrer votre contact' />}
                    </div>
                    <div  className="nomForm">
                       <p className="">Contact2</p>  {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('contact')} type="text" className="nomformInput" placeholder='Entrer votre contact'/>}
                    </div>
                    </div>

                 <div className='niveau_profession'>  
                     <div  className="nomForm">
                      <p className="">Niveau d'etude</p>  {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<select {...methods.register('niveau')} className="nomFormSelect">
                       <option >Sans diplome</option>
                       <option >CEPE ou diplome équivalent</option>
                       <option >BEPC ou diplome équivalent</option>
                       <option >BAC ou diplome équivalent</option>
                       <option >LICENCE ou diplome équivalent</option>
                       <option >MASTER ou diplome équivalent</option>
                    </select>}
                    </div>
                    
                    <div  className="nomForm">
                      <p className="">Profession ou activité actuelle</p>   {methods.formState.isLoading==true?<Skeleton style={{boxSizing: 'border-box',width: '300px',height: '35px',borderRadius: '7px',border: 'none'}}/>:<input {...methods.register('profession')} type="text" className="nomformInput" placeholder='Entrer votre profession'/>}
                    </div>
                    
                </div>
                  <div className=""> 
                      <input className="suivantinF" value="Mettre à jour" type="submit" />
                  </div>
                   </form>
            </div>
                        
            </div>


        </div>
    </div>
  )
}
