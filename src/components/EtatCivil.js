import React, { useEffect, useRef, useState } from 'react'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import './EtatCivil.css'
import axios from 'axios'
import { Audio, ThreeDots } from  'react-loader-spinner'
import { authActions } from '../reducer/store/store_index'
import { useSelector, useDispatch } from 'react-redux';

const initialState={
  nom_utilisateur:"",
  email:"",
  password:"",
  sexe:"Masculin"
 } 

function EtatCivil(props) {
 const dispatch = useDispatch();
  const [loading,setLoading]=useState(false);
  const {register,handleSubmit,errors,formState,watch,control,getValues,setValue}=useForm({defaultValues:initialState})
  const [data, setData] = useState(initialState)
  const password = useRef({});
  password.current = watch("password", "")
  
 
 const onSubmit=async (data)=>{
    setLoading(true)       
    const response = await axios.post("http://localhost:8080/api/users/inscription_email",data);
      if(response.status===200){
          console.log(response.data)
          const {email,password} = data
          await dispatch(authActions.login({email,password}));
          setLoading(false)
          props.onInscris()
      }
      }
 useEffect(() => {
  console.log(watch())
  setData({...data,
        nom_utilisateur:getValues("nom_utilisateur"),
        email:getValues("email"),
        password:getValues("password"),
        sexe:getValues("sexe"),
  })

}, [watch])

  return (
    <div>
      
<form className='etat' onSubmit={handleSubmit(onSubmit)} autoComplete='off'> 
           <div className='NP'> 
             <div >
              <p>Nom d'utilisateur</p>
              <input {...register("nom_utilisateur",
            {
              required: `Nom d'utilisateur est requis`  
            } )  
            }
               id="nom_utilisateur"  
                type='text' 
                className='inputNom' 
                placeholder=  'Nom  utilisateur '
                style={{width:'450px'}}
                />
            </div>
            
            </div>
            <div className="nom_prenom">
                   <div  className="nomForm">
                       <p className=""> Nom</p> 
                       <input {...register('nom')} type="text" className="nomformInput"  placeholder='Entrer votre nom'/>
                    </div>
                    <div  className="nomForm">
                       <p className="">
                        Prenom
                       </p> <input {...register('prenom')} type="text" className="nomformInput" placeholder='Entrer votre nom'/>
                    </div>
                  </div>
            
            <div className='EMAIL'>
             <div>
              <p>Email</p>
              <input
               {...register('email', {
                required: `e-mail est requis`,
                pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
                id="email"    
                className='inputEmail'  
                placeholder='Entrer votre Email'/>
   
            </div>
            <div>
            <p>Sexe</p>
            <select id="sexe"   type='text' className='inputSexe' defaultValue="Masculin">
              <option selected>Masculin</option>
              <option>Feminin</option>
            </select>
            </div>
            </div>
           <div className='MPC'> 
            <div>
              <p>Mot de passe</p>
              <input {...register("password",
               { 
              required: `Password  requis`,
              minLength: {
                value: 8,
                message: "Votre mot de passe doit avoir au mois 8 caractères"
              }}
              )} 
                  id="password"  
                  type='password' 
                  className='inputMot'  
                  placeholder='Entrer votre mot de passe'/>
            </div>
            <div>
              <p>Confirmer votre mot de passe</p>
              <input {...register("password_repeat",
                {
                  required: `Password  requis`,
                  validate: value =>
                    value === password.current || "Mot de passe non conforme"
                }

              )} id="passwordConfirme"  type='password' className='inputConfirmeMot'  placeholder='Confirmer votre mot de passe'/>
            </div>
            </div>
            <button   type="submit"  className="btnConf" style={{cursor:"pointer",display:"flex",height:"35px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
             {loading===true && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
          />} Incrivez-vous 
                  </button>
        </form> 

    </div>
  )
}

export default EtatCivil