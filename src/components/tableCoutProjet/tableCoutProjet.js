import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'
import CoutTransport from './CoutTransport'
import CoutCommunication from './CoutCommunication.js'
import CoutLoyer from './CoutLoyer.js'
import CoutEquipement from './CoutEquipement.js'
import CoutAdministrative from './CoutAdministrative.js'
import CoutRoulement from './CoutRoulement.js'
import CoutPublicite from './CoutPublicite.js'
import CoutDivers from './CoutDivers.js'


function TableCoutProjet() {
    const {register,control,watch}=useFormContext()
  return (
    <div>
         <div>
                        <table class="tableau">
                    <thead>
                      <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>DESIGNATION</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>NOMBRE</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>PRIX UNITAIRE</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>PRIX TOTAL</th>
                        </thead>
                        <tbody>
                         <CoutTransport {...{control,register}} />
                         <CoutCommunication  {...{control,register}} />
                         <CoutAdministrative {...{control,register}} />
                         <CoutLoyer  {...{control,register}} />
                         <CoutEquipement  {...{control,register}} />
                         <CoutRoulement  {...{control,register}} />
                         <CoutPublicite  {...{control,register}} />
                         <CoutDivers  {...{control,register}} />
                        <tr><td  style={{padding:"15px"}}><b>TOTAL COUT DU PROJET</b></td> <td colspan="3">
                           <input {...register('cout_total_projet')} type="text"/>
                           </td></tr>
                    </tbody>
                    
                    </table>
                     
                    </div>
    </div>
  )
}

export default TableCoutProjet