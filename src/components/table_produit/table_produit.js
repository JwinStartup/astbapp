import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'
const Controlproduit=({ control,index,item,remove })=> {
    const produit = useWatch({
      control,
      name: "produit",
    });
 
    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.service_produit}
        name={`produit.${index}.service_produit`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.tarif}
        name={`produit.${index}.tarif`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
     
    </tr>    );
  }
function TableProduit(props) {
    const {watch,control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"produit",
    }) 
    const handleAppend=(value)=>{
      append(value);
      console.log("ajoux:",getValues())
  }
  const handleRemove=(index)=>{
      remove(index);
      console.log("supprimer",getValues())
  }  

   console.log(watch("realisation"))
   
  return (
    <div>
         <div>
                        <table class="tableau">
                        <thead>
                        <tr><th>SERVICES DU PRODUITS</th><th>TARIFS</th></tr>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           < Controlproduit remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                    </tbody>
                    
                    </table>
                    <button type="button"  className='btnTable' onClick={()=>handleAppend({service_produit:"",tarif:""})}>ajouter un produit(service)</button>
                     
                    </div>
                    
    </div>
  )
}

export default TableProduit