import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlRealisation=({ control,index,item })=> {
    const realisation = useWatch({
      control,
      name: "realisation",
    });
 
    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.activite}
        name={`realisation.${index}.activite`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.datedebut}
        name={`realisation.${index}.datedebut`}
        render={({ field }) => <input {...field} type="date"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.datefin}
        name={`realisation.${index}.datefin`}
        render={({ field }) => <input {...field} type="date"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.responsable}
        name={`realisation.${index}.responsable`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        defaultValue={item.objectif}
        name={`realisation.${index}.objectif`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
    
    </tr>    );
  }
function TableRealisation() {
  const { control, getValues,watch}= useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"realisation",
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
                        <th>Activités</th> <th>Date prévisionnelle <br/>de début de <br/>réalisation</th> <th>Date prévisionnelle <br/>de fin de <br/>réalisation</th> <th>Responsable de <br/>la réalisation</th> <th>Objectifs à <br/>atteindre</th>
                        </thead>
                        <tbody>
                        {fields.map((item, index) => (
                           <ControlRealisation key={item.id} {...{ control, index, item }}/>
                        ))}
                    </tbody>
                    
                    </table>
                    <button type="button" className='btnTable' onClick={()=>handleAppend({activite:"",datedebut:"",datefin:"",responsable:"",objectif:""})}>ajouter une realisation</button>
                     
                    </div>
    </div>
  )
}

export default TableRealisation