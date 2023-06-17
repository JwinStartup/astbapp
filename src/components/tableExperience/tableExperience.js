import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlExperience=({ control,index,item,remove,name })=> {
    const experience = useWatch({
      control,
      name:`${name}.experience `,
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.dateDebut}
        name={`${name}.experience.${index}.dateDebut`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.dateFin}
        name={`${name}.experience.${index}.dateFin`}
        render={({ field }) => <input {...field} type="date" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.diplomes}
        name={`${name}.experience.${index}.diplomes`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableExperience(props) {
    const {control,getValues}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control,
        name:`${props.name}.experience` ,
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
                        <th>ANNEE DE DEBUT</th> <th>ANNEE DE FIN</th><th>LISTE DES EXPERIENCES PROFESSIONNELLES ACQUISES</th>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           < ControlExperience name={props.name} remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                    </tbody>
                    </table>
                    <button type="button" className='btnTable' onClick={()=>handleAppend({dateDebut:"",dateFin:"",diplomes:""})}>ajouter un experience</button>
                     
                    </div>
    </div>
  )
}

export default TableExperience