import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlBureau=({ control,index,item,remove })=> {
    const bureau = useWatch({
      control,
      name: "bureau",
    });
    console.log(item)
    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.espace}
        name={`bureau.${index}.espace`}
        render={({ field }) =><div>la salle ou bureau de <span class="span"><input type="text" {...field}/></span></div>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.equipement}
        name={`bureau.${index}.equipement`}
        render={({ field }) =><textarea {...field}  id="" cols="25" rows="7"></textarea> 
        }
      /></td>
       <td> <Controller
        control={control}
        defaultValue={item.quantite}
        name={`bureau.${index}.quantite`}
        render={({ field }) =><textarea {...field} id="" cols="18" rows="7"></textarea>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
     
    </tr>    );
  }
function TableBureau() {
    const {control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"bureau",
    }) 
    const handleAppend=(value)=>{
      append(value);
  }
  const handleRemove=(index)=>{
      remove(index);
      //console.log("supprimer",getValues())
  }  
  return (
    <div>
         <div>
                        <table class="tableau">
                        <thead>
                        <th>Espace</th><th>Equipements</th><th>Quantité</th>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           < ControlBureau remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                    </tbody>
                    
                    </table>
                    <button type="button" className='btnTable' onClick={()=>handleAppend({espace:"",equipement:"",quantite:""})}>ajouter un bureau</button>
                     
                    </div>
    </div>
  )
}

export default TableBureau