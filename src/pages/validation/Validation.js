import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import './Validation.css'
import ValidCode from '../../components/ValidCode/ValidCode'
import Entete from '../../components/Entete/entete'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'
import { authActions } from  '../../reducer/store/store_index'
import {useSelector, useDispatch } from 'react-redux';


const initialState={
  id:"",
  numero:"",
 } 
 

function Validation() {
const authUser = useSelector(x => x.auth)

  const [loading,setLoading]=useState(false);
  const {register,handleSubmit,errors,formState,watch,control,getValues,setValue}=useForm({defaultValues:initialState})
  const [suivant,setSuivant]=useState(false)
  const onSubmit=async (data)=>{
    const {user}=authUser.user
    console.log(user._id)
    setLoading(true) 
    console.log(data)
      const response = await axios.post("http://localhost:8080/api/users/ajout_numero",{
        id: user._id,
        numero:data.numero,
       } );
      if(response.status===200){
          console.log(response.data)
          setLoading(false)
          setSuivant(true)
      }
      }
     
  return (
    <div className='inscription'>
              <Entete/>
  <img src={arc} className="gaucheArc" />
        <img src={Poli} className="gaucheP" />
        <img src={Vert} className="gaucheV" />
        <div className='formInVal'>
        {suivant==false?<form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='formula'>
    <div className='formCorp'>
    <div className='gooDiv'>
       <p>Veuillez entrer votre numero de télèphonne</p>
       <div className='lesInput'>
        <input className='input225' type='text'  defaultValue="+225"/>
        <input 
           {...register("numero",
            {
              required: true  ,
             setValueAs: e => "+225".concat(e) ,
            } )  
            }
          type='text'
           className='inputNom' 
           placeholder='Entrez votre numero de télèphone'
           />
       </div>  <button   type="submit"  className="btnConf" style={{cursor:"pointer",display:"flex",height:"35px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
             {loading===true && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
          />} Confirmer
                  </button>
       </div>
    
          </div>
        </form>:<ValidCode />}
        </div>
        </div>
  )
}

export default Validation