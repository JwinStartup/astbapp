import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableAmortissement from '../tableAmortissement/tableAmortissement'
import './fmenu.css'
function Fmenu(props) {
    console.log(props)

  return (
  <div className="fmenu">
          
         <ul className="menu">
          {props.tableauTitre.flatMap(u=><li> 
            <a href={`#${u.titre_Id}`} >{u.titre_nom} </a>
            {u.soustitre.map(i=><ul>
             <li> 
             <a href={`#${i.soustitre_Id}`} >{i.soustitre_nom}</a></li>
             </ul>)}
          </li>)}
            
         </ul>
   </div>  
   
  )
}

export default Fmenu