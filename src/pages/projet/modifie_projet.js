import React from 'react'
import { FaArrowLeft, FaCamera, FaChevronCircleLeft, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  '../../components/profil/profil';
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { fetchWrapper } from '../../reducer/helpers/helpers';
import { useForm } from 'react-hook-form';
import Entete from '../../components/Entete/entete';

function ModifieProjet(props) {
const authUser = useSelector(x => x.auth)
  const navigate=useNavigate()
  const methods =useForm({ })
  const onSubmit= async d=>{
    console.log(d)
    const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/projet/modifie",d);
    navigate(-1)
  }
// console.log(response)

    return(
        <div>
<Entete/>

    <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
<div className="compte" style={{height: '350px',position: 'absolute',margin: '40px',left:'300px',top:'150px'}}>

             <div  style={{display: 'flex', 
                    alignItems: 'center',
                    padding: '16px 0px 0px 16px',
                    fontSize: '18px',
                    color: 'red',
                    cursor:'pointer',
                    }}> <FaChevronLeft/>
                        Retour
                </div>
          
           <h3>Modifier le nom du projet</h3>
            <div>
              <p style={{margin: '0px 0px 5px 60px'}}>Ancien nom du projet </p>
              <input {...methods.register('ancien_nom')} type='text' style={{height:'35px',border:"none"}} className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Nouveau nom du projet </p>
              <input {...methods.register('nouveau_nom')} type='text' style={{height:'35px',border:"none"}}   className='inputNom' />
            </div>
            <div className=""> 
                      <input  value="Changer son mot de passe" type="submit" style={{background: 'rgba(34, 172, 244, 0.48)',padding:'9px',margin:'5px',height:'43px',borderRadius:'18px'}}/>
            </div>
        
        </div>
       </form>
               </div>

    )

}
export default ModifieProjet
