import React from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import './formClientel.css'
function FormClientel() {
  return (
    
        <div className='ItemSousEltBpClient'>
    
            <div className="ItemSousEltBpHautClient">
                <div className='ItemSousEltBpHautGaucheClient'> 
                <div className="ItemBpNbrClient">1</div> <div className="ItemBpDescClient">clientéle visée</div>
                 </div>
                 <div className='ItemSousEltBpHautDroiteClient'> <BiChevronDownCircle  size={30}/> </div>
            </div>
    
            <div className="ItemSousEltBpBasClient">            
                <textarea name="" id="" cols="30" rows="10" placeholder="Cette offre vise comme clientéle">
    
                </textarea>
               
               
    
                <button className="NTLClient">Enregistrer</button>
                </div>
    
        </div>
  )
}

export default FormClientel