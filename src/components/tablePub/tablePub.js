import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlPub=({ control,index,item,remove })=> {
    const pub= useWatch({
      control,
      name: "marketing_publicite",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`marketing_publicite.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.nombres}
        name={`marketing_publicite.${index}.nombres`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.prix}
        name={`marketing_publicite.${index}.prix`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
    <td> <Controller
        control={control}
        defaultValue={item.total}
        name={`marketing_publicite.${index}.total`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
  const initPub={
    publicite:[],
    total_cout_marketing:"",
  }
function TablePub() {
    const {register,control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"marketing_publicite",
    }) 
 
   
  return (
    <table>
            <thead>
                        <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Désignation élements de publicité</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Nombre</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Prix</th> <th  style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Total</th>
             </thead>   
             <tbody>       {fields.map((item, index) => (
                           < ControlPub remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un coût publicité</button>
                        <tr><td colspan="3"><b>Total coût marketing</b></td> <td><input type="text" {...register('total_cout_mmarketing')} /></td></tr>
           </tbody> 
                          
    </table>
  )
}

export default TablePub