import React, { useEffect, useState } from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import "./creactionProjet.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import  { fetchWrapper } from '../../reducer/helpers/helpers'

const initialState={
   id_user:"",
  nom_projet:""
}

const CreactionProjet=(props)=> {
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.auth)
  const { register, handleSubmit, formState } = useForm({defaultValues:initialState});
  const [projetId,setProjetId]=useState('')
  const navigate = useNavigate()

  const { errors, isSubmitting } = formState;

  const onSubmit=async (data)=>{
    console.log(data)
    const response = await fetchWrapper.post("http://localhost:8080/api/projet/creer",{
      id_user: authUser.user.user._id,
      nom_projet:data.nom_projet,
     });
     console.log(response._id)
     navigate(  `/projet/${response._id}/verouiller`  )

      }
  return (
    <div>
        <div className='proAvant'>
        <div className="projDiv">
        <form  className="divFo" onSubmit={handleSubmit(onSubmit)}>
        <div className="hautinscriptionFor">
           <div style={{display: "flex",width: "100%",justifyContent: "space-between"}}>
             <button onClick={()=>props.retourne()} style={{background:'transparent',border:'none',cursor:'pointer'}}> <FiChevronLeft size={35}/></button>
            <h2 className="h2">Je crée un nouveau projet</h2>
            </div> 
            <hr className="hr"/>
            </div>
        <div className="enBasCree"> 
         <div>  <label  className="nomBp_label">Nom du projet <input {...register("nom_projet",
            {
              required: `Nom du projet est requis`  
            } )  
            }
            id="nom_projet" 
         type="text" className="nomBp" placeholder='Entrer le nom du projet' /></label>
            { /*   <label  className="nomBp_label">Code Projet 
                <input type="text" className="codeBp" placeholder='Entrer votre code Projet'/>
            </label> */}
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

export default CreactionProjet