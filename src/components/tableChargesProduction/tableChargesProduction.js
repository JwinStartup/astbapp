import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlChargesProduction=({ control,index,item,remove })=> {
    const chargeProduction= useWatch({
      control,
      name: "chargeProduction",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`chargeProduction.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.totalMensuel}
        name={`chargeProduction.${index}.totalMensuel`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
 
function TableChargesProduction(props) {
    const {register,control,getValues,setValue}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"chargeProduction",
    }) 
   
   
  return (
   <div> <table>
            <thead>
            <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>DESIGNATION</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Total Mensuel</th>
             </thead>   
             <tbody>       {fields.map((item, index) => (
                           < ControlChargesProduction remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
              <button type="button" className='btnTable' onClick={()=>append()}>ajouter une charge production </button>
           <tr><td><b>Total coûts de charges de production</b></td> <td><input type="text" {...register('cout_charge_production')}/></td></tr>
           </tbody>
                          
    </table>

    </div>
  )
}

export default TableChargesProduction