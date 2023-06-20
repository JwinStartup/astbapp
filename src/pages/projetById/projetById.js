import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import Menuprojet from '../../components/MenuProjet/menuprojet'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import './projetById.css'

export default function ProjetById() {
    const {id }=useParams()
    const navigate = useNavigate()
     const [data,setData]=useState()
    useEffect( ()=>{ 
        console.log(id)
       const fecthData = async ()=>{ 
          const response= await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/projet/voirById",{id:id});
          setData(response)
          //setData(data)
          console.log(response)
        }
        fecthData().catch(console.error)
      },[id])
    return( 
<div >
    <Entete />
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
    <div 
                style={{
                  display: 'flex',    
                  marginLeft: '20px',
                  alignItems: 'center',
                  fontSize: '18px',
                  color: 'black',
                  cursor:'pointer'
                }}
                onClick={()=>navigate('/projet')}
                >
               <FaChevronLeft/>
               Projet
               
               </div> 
    <div className='proAvant'>
    
        <div className="projDiv">
       <Menuprojet  data={data}/>

        </div>
        
    </div>

</div>
)
}
