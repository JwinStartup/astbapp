import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlEquipement=({ control,index,item,remove })=> {
    const equipement= useWatch({
      control,
      name: "equipement",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`equipement.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`equipement.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`equipement.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`equipement.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutEquipement({control,register}) {
 // const[equipements,setEquipements] =useState(init_equipement)
   // const {register,control,getValues}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"equipement",

    }) 
  
  return (
    <>
         
                        
                       <tr><td><b>Coût des besoins d'équipements materiels </b> (voir la <br/> page 23)</td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>

                        {fields.map((item, index) => (
                           < ControlEquipement remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un equipement</button>
                  
    </>
  )
}

export default CoutEquipement