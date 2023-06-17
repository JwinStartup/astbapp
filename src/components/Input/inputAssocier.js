import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'





function InputAssocier() {
    const { control, getValues}= useFormContext()
   
    const {fields,append,remove}=useFieldArray({
        control,
        name:"associe"
        
    }) 
    const handleAppend=(value)=>{
        append(value);
        console.log("ajoux:",getValues())
    }
    const handleRemove=(index)=>{
        remove(index);
        console.log("supprimer",getValues())
    }
  /* useEffect(() => {
      props.associer(getValues())
      console.log(watch('associe'))
   }, [fields])


   */
  return (
    <div>
          {fields.map((item,index)=>{
                            return(
                            <div key={item.id}>
                                <Controller
                                render={({field})=>
                                    <div> (M/Mme/Mlle) : 
                                    <input {...field} style={{width:"50%"}} type="text"/>
                                    <br/><br/> 
                                    <button onClick={()=>handleRemove(index)}>x</button>
                                    </div>
                                }
                                name= {`associe[${index}].nom`}
                                control={control}
                                defaultValue={item.nom}
                                />
                                </div>)
                            })}
                         <button type="button" className='btnTable' onClick={()=>handleAppend({nom:""})}>ajouter associer</button>
    </div>
  )
}

export default InputAssocier