import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlPublicite=({ control,index,item,remove })=> {
    const publicite= useWatch({
      control,
      name: "publicite",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`publicite.${index}.designation`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`publicite.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`publicite.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`publicite.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutPublicite({control,register}) {
 // const[publicites,setPublicites] =useState(init_publicite)
   // const {register,control,getValues}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"publicite",
        
    }) 
   
   
  return (
    <>
                       <tr><td><b>Coût des besoins de publicité de lancement </b> (voir la <br/> page 23)</td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>

                        {fields.map((item, index) => (
                           < ControlPublicite remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button"  className='btnTable' onClick={()=>append()}>ajouter frais de publicite</button>
  
    </>
  )
}

export default CoutPublicite