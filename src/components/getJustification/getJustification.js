import React, { Children } from 'react'
import "./getJustification.css"
import {BiChevronDownCircle} from "react-icons/bi"
const Justification=()=>{
    return(
        <div className='ItemSousEltBpJ'>

        <div className="ItemSousEltBpHautJ">
            <div className='ItemSousEltBpHautGaucheJ'> 
            <div className="ItemBpNbrJ">1</div> <div className="ItemBpDescJ">Justification du projet</div>
             </div>
             <div className='ItemSousEltBpHautDroiteJ'> <BiChevronDownCircle size={30}/> </div>
        </div>

        <div className="ItemSousEltBpBasJ">
            
            <textarea name="" id="" cols="30" rows="10" placeholder="Enumerez les raisons qui motivent la mise en place du projet">

            </textarea>
            <button className="NTLJ">Enregistrer</button>
            </div>

    </div>
    )
}
export default Justification