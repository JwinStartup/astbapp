import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlCursus=({ control,index,item,remove,name })=> {
    const cursus = useWatch({
      control,
      name:`${name}.cursus`,
    });
 
    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.dateDebut}
        name= {`${name}.cursus.${index}.dateDebut`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td> 
       <td> <Controller
        control={control}
        defaultValue={item.dateFin}
        name= {`${name}.cursus.${index}.dateFin`}
        render={({ field }) => <input {...field} type="date" id="" />
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.formation}
        name= {`${name}.cursus.${index}.formation`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
     
    </tr>    );
  }
function TableCursus(props) {
    const {control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:`${props.name}.cursus`
    }) 
    const handleAppend=(value)=>{
      append(value);
      console.log("ajoux:",getValues())
  }
  const handleRemove=(index)=>{
      remove(index);
      console.log("supprimer",getValues())
  }  

  return (
    <div>
         <div>
                        <table class="tableau">
                    <thead>
                        <th>ANNEE DE DEBUT</th><th>ANNEE DE FIN</th> <th>FORMATION OU DIPLOMES OBTENUS</th>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           < ControlCursus name={props.name} remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                    </tbody>
                    
                    </table>
                    <button type="button" className='btnTable' onClick={()=>handleAppend({dateDebut:"",dateFin:"",formation:""})}>ajouter un cursus</button>
                     
                    </div>
    </div>
  )
}

export default TableCursus