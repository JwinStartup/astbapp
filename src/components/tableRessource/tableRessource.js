import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'
import RessourcesInternes from './ressourcesInternes.js'
import RessourcesExternes from './ressourcesExternes.js'



function TableRessources() {
   const {register,control,getValues}=useFormContext()
 
  return (
    <div>
         <div>
                        <table class="tableau">
                    <thead>
                    <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>APPORTEURS DE FONDS</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant total <br/> apport fixé</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant dejà <br/> mobilisé</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Reste à <br/> mobiliser</th>
                        </thead>
                        <tbody>
                        <tr><th>Ressources internes</th> <th colspan="3" style={{background:"black"}}></th></tr>
                         <RessourcesInternes {...{control,register}} />
                        <tr><th>Ressources exterieures</th> <th colspan="3" style={{background:"black"}}></th></tr>
                         <RessourcesExternes {...{control,register}} />
                         <tr><td><b>TOTAL</b></td> <td><input type="text" {...register('totaux_apport_fixe')}/></td> <td><input type="text" {...register('totaux_montant_mobilise')}/></td><td><input type="text" {...register('totaux_reste_a_mobilise')}/></td></tr>
                    </tbody>
                    </table>
                     
                    </div>
    </div>
  )
}

export default TableRessources