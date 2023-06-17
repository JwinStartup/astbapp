import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlLoyer=({ control,index,item,remove })=> {
    const loyer= useWatch({
      control,
      name: "loyer",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`loyer.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`loyer.${index}.nombre`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixunitaire}
        name={`loyer.${index}.prixunitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.prixtotal}
        name={`loyer.${index}.prixtotal`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutLoyer({control,register}) {
 // const[loyers,setLoyers] =useState(init_loyer)
 //   const {register,control,getValues}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"loyer",
    }) 
   
  return (
    <>
         
                        
                       <tr><td><b>Coût d'acquisition et aménagement d'un local </b></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td> <td style={{backgroundColor: "black"}}></td></tr>
                        {fields.map((item, index) => (
                           < ControlLoyer remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter de loyer</button>

    </>
  )
}

export default CoutLoyer