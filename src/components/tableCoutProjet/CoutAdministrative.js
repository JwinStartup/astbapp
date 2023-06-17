import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'

const ControlAdministratif=({ control,index,item,remove })=> {
    const administratif= useWatch({
      control,
      name: "administratif",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`administratif.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`administratif.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`administratif.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`administratif.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutAdministratif({register,control}) {
 // const[administratifs,setAdministratifs] =useState(init_administratif)
    //const {register,handleSubmit,watch,control,getValues,setValue}=useForm({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"administratif",
    }) 
   
  return (
    <>
         
         <tr><td><b>Coût des besoins de formalités administratives </b></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>
                        
                        {fields.map((item, index) => (
                           < ControlAdministratif remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une formalité administrative</button>
                  
    </>
  )
}

export default CoutAdministratif