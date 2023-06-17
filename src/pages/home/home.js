import React, { useEffect, useState } from 'react'
import "./home.css";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import Entete from '../../components/Entete/entete';
import {useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../reducer/store/store_index'
import akworld from '../../Assets/logoPartner/akworld.png'
import astraining from '../../Assets/logoPartner/astraining.png'
import jadco from '../../Assets/logoPartner/jadco.png'
import jwin from '../../Assets/logoPartner/jwin.jpeg'
import {RiWhatsappFill} from 'react-icons/ri'
import { FaFacebook, FaGooglePlus } from 'react-icons/fa';
import { fetchWrapper } from '../../reducer/helpers/helpers';
import BtnHome from '../../components/btnHome/btnHome';
import { isTester } from '../../redux/userSlice';


function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.authUser)
  const [user,setUser]=useState(null)
  console.log(authUser)
  const imagePartner =[akworld,astraining,jadco,jwin]

  return (
<div className="Home">
        
  <Entete/>
<div className="container">
  <h1>Je me forme et je crée mon entreprise</h1>
  <p>Cette plateforme est specialisée dans la formation des entrepreneurs et aide à la créaction d'entreprise en Côte d'Ivoire</p>
     <BtnHome/>
     <div style={{display:'flex',flexDirection:'row'}}>
     <div style={{display:'flex',flexDirection:'column',width:'600px',position:'relative',top:'122px',rigth:'98px',justifyContent:'center',padding:'20px'}}>
       <h3 style={{color:'black'}}>Nos partenaires</h3>
     <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:"space-between"}}> {imagePartner.map(i=><img src={i} style={{width:'55px'}} />)}</div>
     </div>

     <div style={{display:'flex',flexDirection:'column',width:'335px',position:'relative',left:'400px',top:'112px',justifyContent:'center'}}>
       <h3 style={{color:'black'}}>Réjoignez nos communautés</h3>
     <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:"space-between"}}>
     <RiWhatsappFill size={40} color='green'/>
     <FaFacebook size={40} color='blue'/>
     <FaGooglePlus size={40} color='red'/> 
     </div>
     </div>
     </div>
  </div>

  
</div>  
  )
}

export default Home