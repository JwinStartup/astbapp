import React  from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function BtnRetourComponent(props) { 
    const navigate=useNavigate()
    return (
        <div 
                style={{
                  display: 'flex',    
                  marginLeft: '20px',
                  alignItems: 'center',
                  fontSize: '18px',
                  color: 'black',
                  cursor:'pointer'
                  
                }}
                onClick={props.navigateur}
                >
               <FaChevronLeft/>
               {props.libelle}
               
               </div>)
}

export default BtnRetourComponent