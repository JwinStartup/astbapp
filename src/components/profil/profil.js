import React from 'react'
import { FaArrowLeft, FaCamera, FaChevronCircleLeft, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  '../../components/profil/profil.css';
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import { BsFillPlusCircleFill } from 'react-icons/bs';

const ProfilAlt=(choix)=>{
  const navigate = useNavigate()

  const changeMotpass=()=>{
     navigate('/')
  }
  switch (choix) {
    case "MOT_DE_PASSE":
      return(
        <div>
           <h3>Modifier votre mot de passe</h3>
           
              <div >
              <p style={{margin: '0px 0px 5px 60px'}}>Ancien mot de passe </p>
              <input type='text' style={{height:'30px',border:"none"}} className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Nouveau mot de passe </p>
              <input type='text' style={{height:'30px',border:"none"}}   className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Confirmer mot de passe </p>
              <input type='text' style={{height:'30px',border:"none"}}  className='inputNom' />
              <button onClick={changeMotpass} style={{background: 'rgba(34, 172, 244, 0.48)',padding:'9px',margin:'5px',height:'43px',borderRadius:'18px'}}>Changer votre mot de passe</button>
       </div>
        </div>
      )
      break;
  case "PHOTO_PROFIL":
      return(
        <div >
           <h3>Changer sa photo de profil</h3>
            <div style={{}}>
            <img src={photoLo} style={{borderRadius:"50%",width:"90px",height:"90px", border: "6px solid #c9c9c9",margin: "4px"}}/> 
           <div style={{position:"absolute",borderRadius:'50%',bottom:'120px',right:'280px',background:"#00B4FF",width:"32px",height:'32px',lineHeight:'32px',overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <input type='file' style={{position:'absolute',transform: 'scale(2)',opacity:'0'}}/>
            <FaCamera size={20}  color='white'/>
           </div>
           </div>
            <button onClick={changeMotpass} style={{background: 'rgba(34, 172, 244, 0.48)',padding:'9px',margin:'5px',height:'43px',borderRadius:'18px'}}>Changer la photo de profil</button>
        </div>
      )
      break;
      case "MODIFIER_NOM_PROJET":
      return(
        <div >
           <h3>Modifier le nom du projet</h3>
            <div>
              <p style={{margin: '0px 0px 5px 60px'}}>Ancien nom du projet </p>
              <input type='text' style={{height:'35px',border:"none"}} className='inputNom' />
              <p style={{margin: '0px 0px 5px 60px'}}>Nouveau nom du projet </p>
              <input type='text' style={{height:'35px',border:"none"}}   className='inputNom' />
            </div>
            <button onClick={changeMotpass} style={{background: 'rgba(34, 172, 244, 0.48)',padding:'9px',margin:'5px',height:'43px',borderRadius:'18px'}}>Changer le nom du projet</button>

        </div>
      )
      break;
      case 'SUPRIMER_PROJET':
        return(
          <div  style={{heigh:'340px'}}>
            <h3>Supprimer le projet</h3>
            <div>
              <p style={{margin: '0px 0px 5px 60px'}}> Nom du projet </p>
              <input type='text' style={{height:'35px',border:"none"}} className='inputNom' />
              <button onClick={changeMotpass} style={{background: 'rgba(34, 172, 244, 0.48)',padding:'9px',margin:'35px',height:'43px',borderRadius:'18px'}}>Supprimer projet</button>
            </div>
          </div>
        )
        break;
    }
}

function ProfilCompoment(props) {
    return(
        <div>
            <div className="compte" style={{height: '310px',position: 'absolute',margin: '40px',left:'380px',top:'220px'}}>
            <div onClick={()=>props.retourne('PROFIL')} style={{display: 'flex', 
          alignItems: 'center',
          padding: '16px 0px 0px 16px',
          fontSize: '18px',
          color: 'red',
          cursor:'pointer',
         }}> <FaChevronLeft/>
            Retour
       </div>

                {ProfilAlt(props.alt)}
        </div>
               </div>

    )

}
export default ProfilCompoment