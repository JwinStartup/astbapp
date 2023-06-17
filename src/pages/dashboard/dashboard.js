import React from 'react'
import Entete from '../../components/Entete/entete'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiBookMarkFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import BtnRetourComponent from '../../components/btnRetourComponent'


function Dashboard() {
  const navigate = useNavigate()

    return (
        <div >
          <Entete/>
    <BtnRetourComponent libelle={'Home'} navigateur={()=>navigate('/')}/>
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
        <div  style={{
          width: '1000px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          >

        <div className='menuprojet'>

        <button  
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
        className='btnStyle'
        onClick={()=>navigate('/dashboard/inscription')}>
            <RiBookMarkFill size={25}/>
           <p style={{fontSize:'16px'}}> Inscription des Utilisateurs</p>
        </button>
        <button  
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
        className="btnStyle"
       onClick={()=>navigate('/dashboard/utilisateurs')}>
          <GiReceiveMoney size={25}/>
           <p style={{fontSize:'16px'}}> Liste des utilisateurs </p>
        </button>

        <button  
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
        className="btnStyle"
       onClick={()=>navigate('/dashboard/projet')}>
          <GiReceiveMoney size={25}/>
           <p style={{fontSize:'16px'}}> Liste des projets </p>
        </button>
        
    </div>
            </div>

        </div>
        )



}
export default Dashboard