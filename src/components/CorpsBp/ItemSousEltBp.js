import React, { Children } from 'react'
import "./ItemSousEltBp.css"
import {BiChevronDownCircle} from "react-icons/bi"
const ItemSousEltBp = props => {
  console.log(props)
  return (
    <div className='ItemSousEltBp'>

        <div className="ItemSousEltBpHaut">
            <div className='ItemSousEltBpHautGauche'> 
            <div className="ItemBpNbr">{props.nombre}</div> <div className="ItemBpDesc">{props.desc}</div>
             </div>
             <div className='ItemSousEltBpHautDroite'> <BiChevronDownCircle size={30}/> </div>
        </div>

        <div className="ItemSousEltBpBas">
          {props.Children}
        </div>

    </div>
  )
}
export default ItemSousEltBp

