import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const Controlposte=({ control,index,item,remove })=> {
    const amenagement = useWatch({
      control,
      name: "amenagement",
    });
 
    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.postes}
        name={`amenagement.${index}.postes`}
        render={({ field }) =><input type="text" {...field}/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.nombre}
        name={`amenagement.${index}.nombre`}
        render={({ field }) =><input type="text" {...field}/>
        }
      /></td>
       <td> <Controller
        control={control}
        defaultValue={item.responsable}
        name={`amenagement.${index}.responsable`}
        render={({ field }) =><input type="text" {...field}/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.competence}
        name={`amenagement.${index}.competence`}
        render={({ field }) =><input type="text" {...field}/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.salaire}
        name={`amenagement.${index}.salaire`}
        render={({ field }) =><input type="text" {...field}/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
     
    </tr>    );
  }
function TablePoste(props) {
    const {control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"amenagement",
    }) 
    const handleAppend=(value)=>{
      append(value);
     // console.log("ajoux:",getValues())
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
                        <th>POSTES</th><th>NOMBRE</th><th>RESPONSABILITES</th><th>COMPETENCES REQUISES</th><th>SALAIRE</th>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           < Controlposte remove={remove} key={item.id} {...{ control, index, item }}/>
                          
                        ))}
                           <tr><td>TOTAUX</td> <td></td> <td colspan="2" style={{background: "black"}}></td> <td></td></tr>
                    </tbody>
                    
                    </table>
                    <button type="button" className='btnTable' onClick={()=>handleAppend({postes:"",nombre:"",responsable:""})}>ajouter un amenagement</button>
                     
                    </div>
    </div>
  )
}

export default TablePoste