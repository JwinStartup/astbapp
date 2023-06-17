import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaFolder, FaHandHoldingHeart, FaUser } from 'react-icons/fa'
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import './CreerRfinancement.css'
import {HiUserGroup}from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import { GiBank, GiShop } from 'react-icons/gi'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import { MdFamilyRestroom, MdRealEstateAgent, MdSavings } from 'react-icons/md'
export default function CreerRfinancement() {
    const {id} = useParams()
  const navigate = useNavigate()
   const [data,setData] = useState()
   const [rechercheFinancement,setMenuBusinessPlan] = useState([
    {nom:'Epargne personnelle',/*lien:`/Epargne/${id}`*/icon:<MdSavings size={25}/>},
    {nom:'Soutien ou apport familial',/*lien:`/Apport/${id}`*/icon:<MdFamilyRestroom size={25}/>},
    {nom:'Love money',/*lien:`/LoveMoney/${id}`*/icon:<FaHandHoldingHeart size={25}/>},
    {nom:'Prêt bancaire ou des microfinances',/*lien:`/pret/${id}`*/icon:<GiBank size={25}/>},
    {nom:'Appel à des associés',/*lien:`/AppelAssocie/${id}`*/icon:<HiUserGroup size={25}/>},
    {nom:'Subvention ',/*lien:`/Subvention/${id}`*/icon:<MdRealEstateAgent size={25}/>}
   ])

    // creer des buttons et  fonction  separement
    // connecter  la propiete onClick de chaque bouton à la fonction 
    //chaque fonction doit appeller l'api de creaction des constituans du business plan 
    //  et renvoyer l' id de creaction
    // enfin faire rediction vers la page du constituant correspondant à la fonction en navigate et id.
useEffect( ()=>{ 
  console.log(id)
 const fecthData = async ()=>{ 
    const data= await fetchWrapper.get(`http://localhost:8080/api/rechercheFinancement/voir/${id}`)
    console.log(data)
    setData(data)
  }
  fecthData().catch(console.error)

 
},[id])
//console.log(rechercheFinancement,data)
const onRfinancement=(p)=>{
  console.log(p)
 switch (p) {
    case 0:
      navigate(`/projet/rFinancement/${data._id}/Epargne/${data.epargnePersonelle}`);
      break
      case 1:
      navigate(`/projet/rFinancement/${data._id}/Apport/${data.soutienFamilial}`);
      break
      case 2:
      navigate(`/projet/rFinancement/${data._id}/LoveMoney/${data.loveMoney}`);
      break
      case 3:
      navigate(`/projet/rFinancement/${data._id}/pret/${data.pretBancaire}`);
      break
      case 4:
      navigate(`/projet/rFinancement/${data._id}/AppelAssocie/${data.appelAssocie}`);
      break
      case 5:
        navigate(`/projet/rFinancement/${data._id}/Subvention/${data.subvention}`);
      break
  }
}
///${data.subvention}
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
{rechercheFinancement.length!=0&&<div 
      style={{display: 'flex',justifyContent: 'center', alignItems:' center',width: '70%',flexWrap: 'wrap'}} 
              >
    
             {rechercheFinancement.map((valeur,index,tab)=>
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
                          key={index} onClick={()=>onRfinancement(index)}
                          >
                            {valeur.icon}

                           <p style={{fontSize:'15px'}}> {valeur.nom}</p>
                            
                            </button>)}
            </div>}
                   
        </div>
</div>)
}
