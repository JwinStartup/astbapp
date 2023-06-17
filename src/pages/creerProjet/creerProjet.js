import React, { useEffect, useState } from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import "./creerProjet.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import  { fetchWrapper } from '../../reducer/helpers/helpers'
import Entete from '../../components/Entete/entete'

const initialState={
  id_user:"",
  nom_projet:""
}

const CreerProjet=()=> {
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.auth)
  const methods = useForm();
  const [projetId,setProjetId]=useState('')
  const navigate = useNavigate()

  const { errors, isSubmitting } = methods.formState;

  const [verrouProjet,setVerrouProjet]=useState(false)
   // const {navigate }= useNavigate()
    const suivantProjet=()=>{
       
    }
    const retourneVerrou =(e)=>{
      e.preventDefault()
      setVerrouProjet(false)
  }
  const onSubmit=async (data)=>{
    console.log(data)
    const response = await fetchWrapper.post("http://localhost:8080/api/projet/creer",{
      id_user: authUser.user.user._id,
      nom_projet:data.nom_projet,
      slogan:data.slogan,
     });
     console.log(response._id)
     navigate(  `/projet/${response._id}/verouiller`  )

      }
   
  return (
    <div >
        <Entete/>
        <div className='proAvant'>
        <div className="projDiv">
        <form autoComplete='off' style={{
          backgroundColor: '#9ccbf2',
          borderRadius: '27px',
          height: '300px',
          padding: '0px',
        }} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="hautinscriptionFor">
           <div style={{display: "flex",width: "100%",justifyContent: "space-between"}}>
             <button onClick={()=>navigate("/projet")} style={{background:'transparent',border:'none',cursor:'pointer'}}> 
             <FiChevronLeft size={35} /></button>
            <h2 className="h2">Je crée mon nouveau projet</h2>
            </div> 
            <hr className="hr"/>
            </div>
        <div className="enBasCree"> 
         <div>  <label  className="nomBp_label">Nom du projet <input {...methods.register("nom_projet",
            {
              required: `Nom du projet est requis`  
            } )  
            }
            id="nom_projet" 
         type="text" className="nomBp" placeholder='Entrer le nom du projet' /></label>
           
          </div> 
          <div>  <label  className="nomBp_label">Un slogan <input {...methods.register("slogan")  
            }
            id="nom_projet" 
         type="text" className="nomBp" placeholder='Entrer un slogan' /></label>
           
          </div> 

           <button type='submit' 
           className="creerButton" >
           {isSubmitting  && <ThreeDots 
            height="20" 
            width="20" 
            radius="9"
            color="white" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{margin:"5px"}}
            wrapperClassName=""
            visible={true}
            />}
          Suivant</button>
           </div>
           </form>
           
         </div>   
</div>
    </div>
  )
}

export default CreerProjet