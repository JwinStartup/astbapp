import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

function AutrePlan() {
  const { control, getValues,watch}= useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"autreplan",
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
          {fields.map((item,index)=>{
                            return(
                              <div key={item.id}>
                                  {console.log(item)}
                                <div> Au plan
                              <Controller
                              render={({field})=>
                               <input {...field}  type="text"/> 
                              }
                              name= {`autreplan.${index}.nom`}
                              control={control}
                              defaultValue={item.nom}
                              />
                              : <br/><br/>
                              </div>

                              <div>
                              Ce projet sera le bienvenue parce qu'il permettra : <br/><br/>
                              <Controller
                              render={({field})=>
                              <textarea {...field}   id="" cols="55" rows="15"></textarea>
                              }
                              name= {`autreplan.${index}.description`}
                              control={control}
                              defaultValue={item.description}
                              />
                              <br/><br/>
                              </div>

                              <div><button onClick={()=>handleRemove(index)}>X</button></div>
                             </div> )

                            })}
                         <button type="button" className='btnTable' onClick={()=>handleAppend({nom:"",description:""})}>ajouter un plan</button>

    </div>
  )
}

export default AutrePlan