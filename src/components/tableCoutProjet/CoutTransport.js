import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlTransport=({ control,index,item,remove })=> {
    const transport= useWatch({
      control,
      name: "transport",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`transport.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`transport.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`transport.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`transport.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutTransport({control,register}) {
  //  const {control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"transport",
    }) 
  
  return (
    < >
                        <tr><td><b>Coût des besoins de transport des courses de démarrage</b></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>
                       
                        {fields.map((item, index) => (
                           < ControlTransport remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button className='btnTable' type="button" onClick={()=>append()}>ajouter une course</button> 
    </>
  )
}

export default CoutTransport