import './entete.css'
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import {useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../reducer/store/store_index'
import { FaUserCircle } from 'react-icons/fa';

const Entete =()=>{
  const location=useLocation()
  const dispatch = useDispatch();
  const authUser = useSelector(x => x.auth)
  const onSubmit=(e)=> {
    e.preventDefault()
    return dispatch(authActions.logout());
}
 console.log(location.pathname)
    return(
        <div >
            <nav className='entete'>
  <div><Link to="/" id="logo">AsTraining Business</Link> </div>
    <ul>
    {authUser.user!= null &&<li>
        {authUser.user.user.typeUser=="admin" &&<Link style={{textDecoration: /^\/dashboard/.test(location.pathname)==true && 'underline 2px double #9ccbf2'}}  to="/dashboard">Dashboard</Link>}
      </li>}
      <li>
        {authUser.user!= null &&<Link style={{textDecoration:/^\/projet/.test(location.pathname)==true  && 'underline 2px double #9ccbf2'}}  to="/projet">Projet</Link>}
      </li>
      <li><Link  style={{textDecoration:/^\/apropos/.test(location.pathname)==true  && 'underline 2px double #9ccbf2'}} to="/apropos">Apropos</Link></li>
      
        {authUser.user== null ?
        <li className="btnCon"><Link to="/connexion">Connectez-vous</Link></li>:
      <li>
        <ul className="menuProfil">
        	<li>
           <a>
           <FaUserCircle size={40} className="faUser"/>
           {authUser.user.user.nom==undefined?
           <p className="nomProfile" >
           {authUser.user.user.nom_utilisateur}</p>
           :<p className="nomProfile" >
           {authUser.user.user.nom} {authUser.user.user.prenom} </p>}
           </a>
     
	    	    <ul className='sous-menu'>
		        	<li><Link to={`/profil/${authUser.user.user._id}`} >Voir profil</Link></li>
		        	{authUser.user != null &&<li style={{border:'1px solid red',borderRadius:'20px',height:'40px',marginBottom:"10px"}} ><a onClick={(e)=>onSubmit(e)}>Déconnecter</a></li>}
	        	</ul>

        	</li>
         </ul>
      </li> }
     
    
    </ul>
  </nav>
        </div>
    )
  }
export default Entete