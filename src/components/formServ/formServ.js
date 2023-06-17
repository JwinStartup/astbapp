import React from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import './formServ.css'
function FormServ() {
  
  return (
    
        <div className='ItemSousEltBpServ'>
    
            <div className="ItemSousEltBpHautServ">
                <div className='ItemSousEltBpHautGaucheServ'> 
                <div className="ItemBpNbrServ">1</div> <div className="ItemBpDescServ">Services ou produits de l'entreprise</div>
                 </div>
                 <div className='ItemSousEltBpHautDroiteServ'> <BiChevronDownCircle  size={30}/> </div>
            </div>
    
            <div className="ItemSousEltBpBasServ">            
                <textarea name="" id="" cols="30" rows="10" placeholder="Pour satisfaire une telle clientèle , l'entreprise offrira les services ou produits suivants:">
    
                </textarea>
               
               
    
                <button className="NTLServ">Enregistrer</button>
                </div>
    
        </div>
  )
}

export default FormServ