import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'

const ControlInternes=({ control,index,item,remove })=> {
    const internes= useWatch({
      control,
      name: "internes",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        defaultValue={item.apporteur}
        name={`internes.${index}.apporteur`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        defaultValue={item.montantTotal}
        name={`internes.${index}.montantTotal`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.montantMobilise}
        name={`internes.${index}.montantMobilise`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.resteMobilise}
        name={`internes.${index}.resteMobilise`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutInternes({control}) {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"internes",
    }) 
  
   //console.log(getValues("internes"))
   
  return (
    <>
                        {fields.map((item, index) => (
                           < ControlInternes remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un apport</button>

                           
    </>
  )
}

export default CoutInternes