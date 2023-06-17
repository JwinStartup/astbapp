import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'

const ControlDivers=({ control,index,item,remove })=> {
    const divers= useWatch({
      control,
      name: "divers",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`divers.${index}.designation`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`divers.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`divers.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`divers.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutDivers({control,register}) {
  //const[divers,setDivers] =useState(init_diver)
  //  const {register,handleSubmit,watch,control,getValues,setValue}=useForm({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"divers",
    }) 
 
   
  return (
    <>
         
                        
                       <tr><td><b>Coût des besoins divers de demarrage </b> (voir la <br/> page 23)</td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>

                        {fields.map((item, index) => (
                           < ControlDivers remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter  divers</button>
               
    </>
  )
}

export default CoutDivers