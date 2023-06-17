import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'
import { authActions } from  '../../reducer/store/store_index'
import {useSelector, useDispatch } from 'react-redux';

const initialState={
    id:"6325da1f7016ace7c6b0e7c3",
    code:""
   } 

const ValidCode=()=>{
const authUser = useSelector(x => x.auth)
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false);
  const {register,handleSubmit,errors,formState,watch,control,getValues,setValue}=useForm({defaultValues:initialState})
  const onSubmit=async (data)=>{
    const {user}=authUser.user
    setLoading(true) 
    console.log(data)
      const response = await axios.post("http://localhost:8080/api/users/confirmation_numero",{id:user._id,code:data.code});
      if(response.status===200){
          console.log(response.data)
          setLoading(false)
          navigate('/')
      }
      }
     
    return(
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="validCode">
          <p>Vous avez reçu un code par sms sur le numero <span>0758440027</span>.Veuillez inserer le code.Vous n'avez pas reçu  de code? <a> Renvoyer un code</a></p>
         <div className="inputCode">
            <input type="text"  
             {...register("code",
             {
               required: `Entre le code`  ,
             } )  }/>
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
          />} Confirmer
                  </button>
        </form>
    )
}
export default ValidCode