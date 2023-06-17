import React from 'react'
import ItemSousEltBp from '../../components/CorpsBp/ItemSousEltBp'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import FormBesoin from '../../components/formBesion/formBesoin'
import FormClientel from '../../components/formClientel/formClientel'
import FormObjectif from '../../components/formObjeectif/formObjectif'
import FormServ from '../../components/formServ/formServ'
import GetComponentNTL from '../../components/getComponentNTL/getComponentNTL'
import Justification from '../../components/getJustification/getJustification'
import "./businesPlan.css"
function BusinesPlan() {
  return (
    <div className="BusinesPlan">
        <Entete/>
    <div className="HautBp">  
        <div className="droitbsp"><Fmenu/></div>  
        <div className="gaucheB">
          <GetComponentNTL />
           <Justification/>
           <FormBesoin/>
           <FormObjectif/>
           <FormClientel />
          <FormServ/>
          <ItemSousEltBp nombre={"1"} desc={"Avantage concurrentiels (les forces ) des produits /services"}/>
          <ItemSousEltBp nombre={"1"} desc={"Modes de vente"}/>
          <ItemSousEltBp nombre={"1"} desc={"Contraintes du projet"}/>
          <ItemSousEltBp nombre={"3"} desc={"Forme juridique de l'entreprise"}/>
          <ItemSousEltBp nombre={"5"} desc={"Interêts du projet"}/>
          <ItemSousEltBp nombre={"1"} desc={"Programme de réabilitation"}/>
          
        </div>
        </div>
    </div>
  )
}

export default BusinesPlan