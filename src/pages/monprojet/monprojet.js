import React from 'react'
import ItemSousEltBp from '../../components/CorpsBp/ItemSousEltBp'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import Menuprojet from '../../components/MenuProjet/menuprojet'
import "./monprojet.css"
function Monprojet() {
  return (
    <div>
      <Entete/>
        <div className="projetPage">
            <div className='projetCenter'>
              <Menuprojet/>
            </div>
        
   
          
        </div>
    </div>
  )
}

export default Monprojet