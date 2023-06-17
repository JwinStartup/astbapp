import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlCommunication=({ control,index,item,remove })=> {
    const communication= useWatch({
      control,
      name: "communication",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`communication.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`communication.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`communication.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`communication.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutCommunication({register,control}) {
   // const {register,control}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"communication"
    }) 
  
   
  return (
    <>
                   <tr><td><b>Coût des besoins de communication telephonique/ Internet<br/> de démarrage </b></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>
                        {fields.map((item, index) => (
                           < ControlCommunication remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable'  onClick={()=>append()}>ajouter une course</button>
    </>
  )
}

export default CoutCommunication