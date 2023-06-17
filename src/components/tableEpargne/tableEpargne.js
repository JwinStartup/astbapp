import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlEpargne=({ control,index,item,remove })=> {
    const epargne= useWatch({
      control,
      name: "epargne",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
       // defaultValue={item.mois}
        name={`epargne.${index}.mois`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
       // defaultValue={item.montantEpargne}
        name={`epargne.${index}.montantEpargne`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
       // defaultValue={item.montantCumul}
        name={`epargne.${index}.montantCumul`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableEpargne() {
    const {register,control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"epargne",
    }) 
 
   
   
  return (
    <>               
    
                        <table class="tableau" style={{height:'auto'}}>
                             <thead>
                                  <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Mois</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant Epargne </th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant cumulé</th> 
                                    </thead>
                                    <tbody >
                        {fields.map((item, index) => (
                           < ControlEpargne remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une date</button>
                        </tbody>
                    </table>

                           
    </>
  )
}

export default TableEpargne