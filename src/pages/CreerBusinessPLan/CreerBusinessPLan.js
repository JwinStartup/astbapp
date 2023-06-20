import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaFolder, FaUser } from 'react-icons/fa'
import { GrWorkshop} from 'react-icons/gr'
import { FcStatistics } from 'react-icons/fc'
import { IoMdAnalytics } from 'react-icons/io'
import './CreerBusinessPlan.css'
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import { useNavigate, useParams } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import { GiShop } from 'react-icons/gi'
import { fetchWrapper } from '../../reducer/helpers/helpers'
export default function CreerBusinessPLan() {
  
    const {id} = useParams()
  const navigate = useNavigate()
   const [data,setData] = useState()
   const [menuBusinessPlan,setMenuBusinessPlan] = useState([
    {nom:'Presentation projet',/*lien:`/pp/${data.presentProjet}`,*/icon:<FaFolder size={25}/>},
    {nom:'Presentation entrepreneurs',/*lien:`/pe/${data.presentEntrepreneur}`,*/icon:<FaUser size={25}/>},
    {nom:'Etude de marché',/*lien:`/em/${data.etudeMarche}`,*/icon:<GiShop size={25}/>},
    {nom:'Strategie commerciale',/*lien:`/sc/${data.strategieCommercial}`,*/icon:<GrWorkshop size={25}/>},
    {nom:'Gestion operationnelle',/*lien:`/gop/${data.gestionOperationnelle}`,*/icon:<IoMdAnalytics size={25}/>},
    {nom:'Prevision financière',/*lien:`/gop/${data.gestionOperationnelle}`,*/icon:<FcStatistics size={25}/>}
   ])

    // creer des buttons et  fonction  separement
    // connecter  la propiete onClick de chaque bouton à la fonction 
    //chaque fonction doit appeller l'api de creaction des constituans du business plan 
    //  et renvoyer l' id de creaction
    // enfin faire rediction vers la page du constituant correspondant à la fonction en navigate et id.
useEffect( ()=>{ 
  console.log(id)
 const fecthData = async ()=>{ 
    const data= await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/businessplan/voirbyId",{id:id});
    console.log(data)
    setData(data)
  }
  fecthData().catch(console.error)

 
},[id])
console.log(menuBusinessPlan,data)
const onBusinessPlan=(p)=>{
  console.log(p)
 switch (p) {
    case 0:
      navigate(`/projet/businessplan/${data._id}/pp/${data.presentProjet}`);
      break
      case 1:
      navigate(`/projet/businessplan/${data._id}/pe/${data.presentEntrepreneur}`);
      break
      case 2:
      navigate(`/projet/businessplan/${data._id}/em/${data.etudeMarche}`);
      break
      case 3:
      navigate(`/projet/businessplan/${data._id}/sc/${data.strategieCommercial}`);
      break
      case 4:
      navigate(`/projet/businessplan/${data._id}/gop/${data.gestionOperationnelle}`);
      break
      case 5:
      navigate(`/projet/businessplan/${data._id}/pfp/${data.previsionFinanciere}`);  
      break
  }
}
return(<div >
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
  <Entete />
    <div 
                style={{
                  display: 'flex',    
                  marginLeft: '20px',
                  alignItems: 'center',
                  fontSize: '18px',
                  color: 'black',
                  cursor:'pointer'
                }}
                onClick={()=>navigate(-1)}
                >
               <FaChevronLeft/>
               Retour
               
               </div> 
    <div className='proAvant'>
{menuBusinessPlan.length!=0&&<div 
         
        
        
        
              style={{display: 'flex',justifyContent: 'center', alignItems:' center',width: '70%',flexWrap: 'wrap'}} 
              >
    
             {menuBusinessPlan.map((valeur,index,tab)=>
                          <button className="btnStyle"
                          style={{
                            width: '254px',
                            height: '250px',
                            border: 'none',
                            borderRadius: '20px',
                            margin: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            boxShadow:' 0px 0px 0.5px 1px #4544444d',
                          }}
                          key={index} onClick={()=>onBusinessPlan(index)}
                          >
                            {valeur.icon}

                           <p style={{fontSize:'15px'}}> {valeur.nom}</p>
                            
                            </button>)}
            </div>}
                   
        </div>
</div>)
}
