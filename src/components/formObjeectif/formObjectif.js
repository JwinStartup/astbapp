import React from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import './formObjectif.css'
function FormObjectif(props) {
  return (
    <div className='ItemSousEltBpObj'>

        <div className="ItemSousEltBpHautObj">
            <div className='ItemSousEltBpHautGaucheObj'> 
            <div className="ItemBpNbrObj">3</div> <div className="ItemBpDescObj">Objectifs du projet</div>
             </div>
             <div className='ItemSousEltBpHautDroiteObj'> <BiChevronDownCircle  size={30}/> </div>
        </div>

        <div className="ItemSousEltBpBasObj">
          <div className="objcourt">  <p className="courtTermes">Objectifs à court terme</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Les objectifs à court terme sont:">

            </textarea>
           </div>
           <div className="objcourt">  <p className="courtTermes">Objectifs à moyen terme</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Les objectifs à moyen terme sont:">

            </textarea>
           </div>
           <div className="objcourt">  <p className="courtTermes">Objectifs à long terme</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Les objectifs à long terme sont:">

            </textarea>
           </div>

            <button className="NTLObj">Enregistrer</button>
            </div>

    </div>
  )
}

export default FormObjectif