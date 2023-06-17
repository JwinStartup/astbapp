import React, { Children } from 'react'
import "./getComponentNTL.css"
import {BiChevronDownCircle} from "react-icons/bi"
const GetComponentNTL = props => {
  console.log(props)
  return (
    <div className='ItemSousEltBp'>

        <div className="ItemSousEltBpHaut">
            <div className='ItemSousEltBpHautGauche'> 
            <div className="ItemBpNbr">3</div> <div className="ItemBpDesc">Nom-Type-Localisation</div>
             </div>
             <div className='ItemSousEltBpHautDroite'> <BiChevronDownCircle size={30}/> </div>
        </div>

        <div className="ItemSousEltBpBas">
            <div className="nomNTL">
                <p className="nom">Nom</p>
                <input type="text" className="inputNTL" />
            </div>
            <div className="typeNTL">
                <p className="type">Type</p>
                <input type="text" className="inputNTL" />
            </div>
            <div className="LocalNTL">
                <p className="nom">Lieu</p>
                <input type="text" className="inputNTL" />
            </div>
             <button className="NTL">Enregistrer</button>
        </div>

    </div>
  )
}
export default GetComponentNTL