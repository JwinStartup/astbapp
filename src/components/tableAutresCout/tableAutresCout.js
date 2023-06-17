import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlAutreCout=({ control,index,item,remove })=> {
    const autreCout= useWatch({
      control,
      name: "fonctionement",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`fonctionement.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.cout}
        name={`fonctionement.${index}.cout`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }

function TableAutreCout(props) {
    const {register,control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"fonctionement",
    }) 
    
  return (
   <div> <table>
            <thead>
            <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>DESIGNATION</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>COUT</th>

             </thead>   
             <tbody>       {fields.map((item, index) => (
                           < ControlAutreCout remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
            <button type="button" className='btnTable' onClick={()=>append()}>ajouter un autres cout</button>
            <tr><td><b>Total autres coûts de fonctionnement ou de production</b></td> <td><input {...(register('total_autreCout_fonctionement'))} /></td></tr>

           </tbody> 
          
                          
    </table>

    </div>
  )
}

export default TableAutreCout