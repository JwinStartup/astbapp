import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'




const ControlFond=({ control,index,item,remove })=> {
    const fond= useWatch({
      control,
      name: "fond_roulement",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`fond_roulement.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`fond_roulement.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`fond_roulement.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`fond_roulement.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none",position:"relative"}}><button type="button"  onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutFond({control,register}) {
 // const[fond_roulements,setFond_roulements] =useState(init_fond_roulement)
   // const {register,control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"fond_roulement",
    }) 
  
   
  return (
    <>
         
                        
                       <tr><td><b>Coût des besoins en fond de roulement </b> (voir la <br/> page 23)</td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>

                        {fields.map((item, index) => (
                           < ControlFond remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                       <button type="button" className='btnTable' onClick={()=>append()}>ajouter de fond</button>
    </>
  )
}

export default CoutFond