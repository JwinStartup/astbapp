import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'

const ControlExternes=({ control,index,item,remove })=> {
    const externes= useWatch({
      control,
      name: "externes",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.apporteur}
        name={`externes.${index}.apporteur`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.montantTotal}
        name={`externes.${index}.montantTotal`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.montantMobilise}
        name={`externes.${index}.montantMobilise`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.resteMobilise}
        name={`externes.${index}.resteMobilise`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function CoutExternes({control}) {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"externes",
    }) 
 
  return (
    <>
                        {fields.map((item, index) => (
                           < ControlExternes remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un apport</button>

                           
    </>
  )
}

export default CoutExternes