import React, { Component, useState } from 'react'
import Homme from "../../Assets/BGSVG/Homme.svg"
import Voile from "../../Assets/BGSVG/voile.svg"
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import {FaFacebook} from "react-icons/fa"
import {FaGooglePlus} from "react-icons/fa"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import './inscription.css'
import EtatCivil from '../../components/EtatCivil'
import Entete from '../../components/Entete/entete'
import { useForm } from 'react-hook-form'
import { ThreeDots } from 'react-loader-spinner'
import BtnRetourComponent from '../../components/btnRetourComponent'
import { fetchWrapper } from '../../reducer/helpers/helpers'
function Inscription (){ 
  const navigate = useNavigate()
  const methods=useForm()
  const [loading,setLoading]=useState(false);

  const onSubmit=async (data)=>{
    console.log(data)
    const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/users/inscription_email",data);
     if(response){
          navigate('/dashboard/utilisateurs')
      }
      }

    return (
      <div className='inscription'>
              <Entete/>
              <BtnRetourComponent libelle={'Dashboard'} navigateur={()=>navigate(-1)}/>
       
        <img src={arc} style={{
          position: 'absolute',
          zIndex:'-2',
          width: '800px',
          height: '500px',
          left: '2px',
        }} />
        <img src={Poli} 
        style={{
          position: 'absolute',
          zIndex:'-2',
          width: '200px',
          height: '150px',
          left: '90px',
        }}
        
        />
        <img src={Vert} 
        style={{
          position: 'absolute',
          zIndex:'-2',
          width: '800px',
          height: '500px',
          left: '2px',
        }}
        
        />
        <div className='formIn'>
             <div className='formEntete'>
             <h2>Inscrivez - Vous</h2>
             <h4>Bienvenu(e)(s), Vous pouvez maintenant vous inscrire</h4>
             </div>
         <form style={
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin:'5px',
            background: '#9ccbf2',
            borderRadius: '10px'
            }

         }
         autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}
         >
        <div style={{
            display : 'flex',
            marginBottom:'25px'
        }}>
        <div className='etat'>
        <div  className="nomForm">
                       <p className="">Type utilisateur</p> 
         <select {...methods.register('typeUser')} className="nomFormSelect">
                       <option >admin</option>
                       <option selected>etudiant</option>
                       </select>
            </div>
            <div className="nom_prenom">
                   <div  className="nomForm">
                       <p className=""> Nom</p> 
                       <input {...methods.register('nom')} type="text" 
                        style={{
                          width: '250px',
                          margin: '0px ',
                        }}  
                       placeholder='Entrer votre nom'/>
                    </div>
                    <div  className="nomForm">
                       <p className="">
                        Prenom
                       </p> <input {...methods.register('prenom')} type="text" 
                       style={{
                    width: '250px',
                    margin: '0px ',
                  }}  
                       
                        placeholder='Entrer votre nom'/>
                    </div>
                  </div>
            
            <div className='EMAIL'>
             <div>
              <p>Email</p>
              <input
               {...methods.register('email', {
                required: `e-mail est requis`,
                pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
                id="email"    
                style={{
                  width: '250px',
                  margin: '0px 5px',
                }}   
                placeholder='Entrer votre Email'/>
   
            </div>
            <div>
            <p>Sexe</p>
            <select id="sexe"   type='text' 
             style={{
              width: '250px',
              margin: '0px 5px',
              fontSize:'15px'
            }}  
            defaultValue="Masculin">
              <option selected>Masculin</option>
              <option>Feminin</option>
            </select>
            </div>
            </div>
           <div className='MPC'> 
            <div>
              <p>Mot de passe</p>
              <input {...methods.register("password",
               { 
              required: `Password  requis`,
              minLength: {
                value: 8,
                message: "Votre mot de passe doit avoir au mois 8 caractères"
              }}
              )} 
                  id="password"  
                  type='password' 
                  style={{
                    width: '250px',
                    margin: '0px 5px',
                  }}  
                  placeholder='Entrer votre mot de passe'/>
            </div>
            <div>
              <p>Confirmer votre mot de passe</p>
              <input {...methods.register("password_repeat",
                {
                  required: `Password  requis`,
                 // validate: value =>
                 //   value === password.current || "Mot de passe non conforme"
                }

              )} id="passwordConfirme"  type='password' style={{
                width: '250px',
                margin: '0px 5px',
              }} 
                placeholder='Confirmer votre mot de passe'/>
            </div>
            </div>
            </div>
          
           <hr className='horizonTable'/>
           <div
           style={{
            height: '270px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}
           >

           <div className="lieu_situation">
                    <div  className="nomForm">
                       <p className="">Lieu d'habitation</p> <input {...methods.register('habitation')} type="text" 
                      style={{
                        width: '200px',
                        margin: '0px 5px',
                        boxSizing: 'border-box',
                        height: '35px',
                        borderRadius: '7px',
                        border: 'none',
                        fontSize:'15px'
                }}
                       placeholder="Entre votre lieu d'habitation" />
                    </div>
                    <div  className="nomForm">
                     <p className="">Situation matrimoniale</p>   <select {...methods.register('situation')} 
                     style={{
                      width: '230px',
                      margin: '0px 5px',
                      boxSizing: 'border-box',
                      height: '35px',
                      borderRadius: '7px',
                      border: 'none',
                      fontSize:'15px'

              }}
                     >
                       
                       <option selected>Célibataire sans enfant</option>
                       <option >Célibataire avec enfant</option>
                       <option >Marié  sans enfant</option>
                       <option >Marié avec  enfant</option>
                    </select>
                    </div>
                </div>
                   <div className="contact">  <div  className="nomForm">
                     <p> Contact1</p>   <input {...methods.register('numeroConfirme')} type="text" 
                     style={{
                        width: '200px',
                        margin: '0px 5px',
                        boxSizing: 'border-box',
                        height: '35px',
                        borderRadius: '7px',
                        border: 'none',
                        fontSize:'15px'
                }} 
                     placeholder='Entrer votre contact'/>
                    </div>
                    <div  className="nomForm">
                       <p className="">Contact2</p>  <input {...methods.register('contact')} type="text" 
                       style={{
                        width: '230px',
                        margin: '0px 5px',
                        boxSizing: 'border-box',
                        height: '35px',
                        borderRadius: '7px',
                        border: 'none',
                        fontSize:'15px'
                }} 
                       placeholder='Entrer votre contact'/>
                    </div>
                    </div>

                 <div className='niveau_profession'>  
                     <div  className="nomForm">
                      <p className="">Niveau d'etude</p>   <select {...methods.register('niveau')} 
                     style={{
                      width: '200px',
                      margin: '0px 5px',
                      boxSizing: 'border-box',
                      height: '35px',
                      borderRadius: '7px',
                      border: 'none',
                      fontSize:'15px'
              }}
                      >
                       <option selected >Sans diplome</option>
                       <option >CEPE ou Diplome équivalent</option>
                       <option >BEPC ou Diplome équivalent</option>
                       <option >BAC ou Diplome équivalent</option>
                       <option >LICENCE ou Diplome équivalent</option>
                       <option >MASTER ou Diplome équivalent</option>
                    </select>
                    </div>
                    
                    <div  className="nomForm">
                      <p className="">Profession ou activité actuelle</p>   <input {...methods.register('profession')} type="text" 
                      style={{
                        width: '230px',
                        margin: '0px 5px',
                        boxSizing: 'border-box',
                        height: '35px',
                        borderRadius: '7px',
                        border: 'none',
                        fontSize:'15px'
                }}
                      placeholder='Entrer votre profession'/>
                    </div>
                    
                </div>
           </div>
           </div>
         <div style={{display:'flex',justifyContent: 'center'}}>
         <button   type="submit"  className="btnConf" style={{
          cursor: 'pointer',
          display: 'flex',
          height: '35px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
          height: '50px',
          border: 'none',
          fontSize: '1.2em',
          borderRadius: '40px',
          margin: '5px',
          cursor: 'pointer',
          }}
          >
      {methods.formState.isSubmitting && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
          />}


             Incrivez-vous 
          
          </button>
    
        </div>
          </form>  
          </div>
        </div>
    )
  }

export default Inscription
