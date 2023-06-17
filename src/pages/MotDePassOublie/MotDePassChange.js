import React, { useEffect } from 'react'
import { FaArrowLeft, FaCamera, FaChevronCircleLeft, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  '../../components/profil/profil';
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { fetchWrapper } from '../../reducer/helpers/helpers';
import { useForm } from 'react-hook-form';
import Entete from '../../components/Entete/entete';
import Poli from "../../Assets/BGSVG/Polygone3.png"
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import { ThreeDots } from 'react-loader-spinner';
function MotdepassChange(props) {
const authUser = useSelector(x => x.auth)
  const navigate=useNavigate()
  const methods =useForm({})
  const onSubmit= async d=>{
    console.log(d)
      const response = await fetchWrapper.post("http://localhost:8080/api/users/motdepassechange",{mouveau_mot2pass:d.nouveau,id:authUser.user.user._id});
     if(response){ 
      navigate(-1)
     } 
  }
    return(
        <div>
<Entete/>
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
          left: '200px',
           top:'5%'

        }}
        
        />
        <img src={Vert} 
        style={{
          position: 'absolute',
          zIndex:'-2',
          width: '200px',
          height: '150px',
          left:'90px'

        }}
        
        />
    <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
<div className="compte" style={{height: '350px',position: 'absolute',margin: '40px',left:'300px',top:'150px'}}>

             <div onClick={()=>navigate(-1)} style={{display: 'flex', 
                    alignItems: 'center',
                    padding: '16px 0px 0px 16px',
                    fontSize: '18px',
                    color: 'red',
                    cursor:'pointer',
                    }}> <FaChevronLeft/>
                        Retour
                </div>
           <h3>Modifier votre mot de passe</h3>
           
              <div >
              <p style={{margin: '0px 0px 5px 60px'}}>Ancien mot de passe </p>
              <input {...methods.register('ancien',{required: `Password  requis`})} type='text' style={{height:'30px',border:"none"}} className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Nouveau mot de passe </p>
              <input {...methods.register('nouveau',{required: `Password  requis`})} type='text' style={{height:'30px',border:"none"}}   className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Confirmer mot de passe </p>
              <input {...methods.register('confimer',{required: `Password  requis`})} type='text' style={{height:'30px',border:"none"}}  className='inputNom' />
              <div style={{display:'flex',justifyContent: 'center'}}> 
              <button   type="submit"style={{  
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
                              background:'rgba(34, 172, 244, 0.48)',
                              cursor: 'pointer',
                              }}>
            {methods.formState.isSubmitting  && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
          />} Modifier 
                  </button>
                  </div>
       </div>
        </div>
       </form>
               </div>

    )

}
export default MotdepassChange