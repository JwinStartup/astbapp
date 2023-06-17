import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlPret=({ control,index,item,remove })=> {
    const pret= useWatch({
      control,
      name: "pret",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        defaultValue={item.mois}
        name={`pret.${index}.mois`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        defaultValue={item.montantPret}
        name={`pret.${index}.montantPret`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.montantCumul}
        name={`pret.${index}.montantCumul`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.observation}
        name={`pret.${index}.observation`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TablePret() {
    const {control}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control,
        name:"pret",
    }) 

  return (
    <>               
    
                        <table class="tableau" style={{height:'auto'}}>
                             <thead>
                                  <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Mois</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant Remboursé </th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant cumulé</th> <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Observation</th> 
                                    </thead>
                                    <tbody >
                        {fields.map((item, index) => (
                           < ControlPret remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une date</button>
                        </tbody>
                    </table>

                           
    </>
  )
}

export default TablePret