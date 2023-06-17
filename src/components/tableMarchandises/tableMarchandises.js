import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlMarchandises=({ control,index,item,remove })=> {
    const marchandises= useWatch({
      control,
      name: "marchandises",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValues={item.marchandise}
        name={`marchandises.${index}.marchandise`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValues={item.quantite}
        name={`marchandises.${index}.quantite`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValues={item.prixUnitaire}
        name={`marchandises.${index}.prixUnitaire`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValues={item.total}
        name={`marchandises.${index}.total`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
  
const initMarchandises={
  marchandises:[],
  total_quantite:"",
  totaux:"",
}
function TableMarchandises(props) {
    const {register,control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"marchandises",
    }) 
 
  return (
    <div>
         <div>
                        <table class="tableau">
                    <thead>
              <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Matières premières et marchandises</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Quantité</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Prix Unitaire</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Total</th>
              </thead>  
              <tbody>
                        {fields.map((item, index) => (
                           < ControlMarchandises remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un apport</button>
            <tr><td><b>Total coût d'achat matières premières ou marchandises</b></td> <td><input type="text"  {...register('total_quantite')} /></td> <td style={{background:"black"}}></td> <td><input type="text"{...register('totaux')} /></td></tr>
               </tbody>     
               </table>      
    </div>
    </div>
  )
}

export default TableMarchandises