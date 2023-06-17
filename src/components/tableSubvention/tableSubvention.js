import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlSubvention=({ control,index,item,remove })=> {
    const subvention= useWatch({
      control,
      name: "subvention",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        defaultValue={item.nom_organisation}
        name={`subvention.${index}.nom_organisation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        defaultValue={item.montant_attendu}
        name={`subvention.${index}.montant_attendu`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
       <td> <Controller
        control={control}
        defaultValue={item.montant_atteint}
        name={`subvention.${index}.montant_atteint`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>

        <td> <Controller
        control={control}
        defaultValue={item.montant_recu}
        name={`subvention.${index}.montant_recu`}
        render={({ field }) => <select {...field} type="text"  id=""><option>non</option><option>oui</option></select>
        }
      /></td>   
       <td> <Controller
        control={control}
        defaultValue={item.montant_reliquat}
        name={`subvention.${index}.montant_reliquat`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableSubvention(props) {
    const {control}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control,
        name:"subvention",
    }) 
   
   
   
  return (
    <>               
    
        <table class="tableau" style={{height:'auto'}}>
                <thead>
                    <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Nom de l'organisation</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant attendu</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant reçu</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant atteint?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant reliquat</th> 
                    </thead>
                    <tbody >
        {fields.map((item, index) => (
            < ControlSubvention remove={remove} key={item.id} {...{ control, index, item }}/>
        ))}
        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une organisation</button>
        </tbody>
    </table>

                           
    </>
  )
}

export default TableSubvention