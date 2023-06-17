import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

function InputCompetence(props) {
    const {control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:`${props.name}.domaineCompetence`  // "domaineCompetence",
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
                            <div key={item.id} style={{display:"flex"}}>
                              <Controller
                                render={({field})=>
                                <div style={{display:"flex",flexDirection:"row",width:"100%"}}>
                                    <p style={{width:"100%",marginBottom:"15px"}}>
                                    - <input {...field} style={{width: "80%"}}  type="text"/></p>
                                    <button type="button" onClick={()=>handleRemove(index)}>X</button>
                                    <br/>
                                </div>
                                }
                                name= {`${props.name}.domaineCompetence[${index}].competence`}
                                control={control}
                                defaultValue={item.competence}
                                
                                />
                                </div>)
                            })}
                         <button type="button" className='btnTable' onClick={()=>handleAppend({competence:""})}>ajouter une competence</button>
    </div>
  )
}

export default InputCompetence