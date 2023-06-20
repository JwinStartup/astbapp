import React, { useEffect, useState } from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import "../creerProjet/creerProjet.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import  { fetchWrapper } from '../../reducer/helpers/helpers'
import Entete from '../../components/Entete/entete'


const ProjetVerouiller=()=> {
  const {id }=useParams()
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.auth)
  const  methods = useForm();
  const [projetId,setProjetId]=useState('')
  const { errors, isSubmitting } = methods.formState;

  const [verrouProjet,setVerrouProjet]=useState(false)
    const navigate = useNavigate()
    const suivantProjet=()=>{
       
    }
    const retourneVerrou =(e)=>{
      e.preventDefault()
      setVerrouProjet(false)
  }
  const onSubmit=async (data)=>{
    console.log(data)
    const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/projet/deverouiller",{
      id_projet: id,
      codeDeverouillage:data.code_projet,
     });
     console.log(response)
     navigate(`/projet`)


      }
   
  return (
    <div>
        <Entete />
        <div className='proAvant'>
        <div className="projDiv">
        <div className="hautinscriptionFor">
           <form className="divFo" onSubmit={methods.handleSubmit(onSubmit)}>
           <div className="hautinscriptionFor">
           <div style={{display: "flex",width: "100%",justifyContent: "space-between"}}>
             <button type='button' onClick={()=>navigate('/projet')} style={{background:'transparent',border:'none',cursor:'pointer'}}> <FiChevronLeft size={35}/></button>
            <h2 className="h2">Je deverouille mon projet</h2>
            </div> 
            <hr className="hr"/>
            <p style={{textAlign:"center",fontSize:"16px",fontStyle:"oblique"}}>Veuillez contacter le service client de Astraning Business pour obtenir le code de votre projet</p>
            </div>
        <div className="enBasCree"> 
         <div>  <label  className="nomBp_label">Code du projet <input 
         type="number"
         className="nomBp" 
         placeholder='Entrer votre code  projet' 
         {...methods.register("code_projet",
         {
           required: `Code du projet est requis`  
         } )  
         }
         id="code_projet" 
         
         /></label>
            { /*   <label  className="nomBp_label">Code Projet 
                <input type="text" className="codeBp" placeholder='Entrer votre code Projet'/>
            </label> */}
          </div> 
           <button type='submit' className="creerButton" >
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
             Deverouiller votre projet</button>
           </div>
           </form>
        </div>
        </div>
        </div>
        
    
</div>) 
}
export default ProjetVerouiller
