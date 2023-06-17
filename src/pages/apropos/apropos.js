import React from 'react'
import './apropos.css'
import asGroup from "../../Assets/BGSVG/ASTRAINING_LOGO_PNG.png"
import {MdLocationOn} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from "react-router-dom"
import Entete from '../../components/Entete/entete'
import FormBesoin from '../../components/formBesion/formBesoin'

import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
export default function apropos() {
  return (
    <div >
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
        <div className='aproposPage'>
        
         <div className='introLogo'>
           <img src={asGroup} className='logoAs' /> 
            <div>Le GROUPE AS est une organisation associative à but non lucrative specialisée dans la formation professionnelle, le coaching et le soutien scolaire à domicile.
             AS-TRAINING BUSNINESS  est un produit du GROUPE AS qui propose aux utilisateurs des formations en Finances,en Comptabilités, en Rèdaction business plan, en Entrepeneuriat ,
             en Marketing digital et Informatique. 
             </div>
           <div></div>
        </div>

     <div className='numLieu'>
       
       
       <div className='numLieuABABI'>
      <div className='localLieu'>
        <MdLocationOn />
      
     <div className='localLieuP'>
       <p>Abidjan-Cocoody Riviera 2 carrefour garage 2ème étage immeuble AFRILAND FIRST BANK</p>
      <p>07 59 63 27 88 - 05 04 26 06 53 - 01 40 19 59 03</p>
      </div>
      </div>
       
      </div>
      
      
      <div className='numLieuBOUAKE'>
       <div className='localLieu'> <MdLocationOn />
      <div className='localLieuP'>
        <p>Bouake-Ahougnansou SICOGI prés de l'imprimerie natinale</p>
       <p>07 79 73 19 70</p>
      </div>
      </div>
     </div>

      <div className='numLieuKORO'>
      <div className='localLieu'>
        <MdLocationOn />
        <div className='localLieuP'>
        <p>Korhogo-Quartier tchékélézo </p>
        <p>07 58 80 10 46</p>
      </div>
      </div>
      </div>

      <div className='numLieuYAKRO'>
      <div className='localLieu'>
        <MdLocationOn />
     <div className='localLieuP'>
        <p>Yamoussoukro -INPHB </p>
        <p>07 59 98 44 83</p>
      </div>
      </div>
      </div>
      
      
      
      
      
      </div>
      </div>
       
   <h1></h1>

    </div>


  )
}
