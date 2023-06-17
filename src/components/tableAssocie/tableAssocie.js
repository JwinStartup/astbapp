import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlAssocie=({ control,index,field,remove })=> {
    const associe= useWatch({
      control,
      name: "associe",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        name={`associe.${index}.nom_contact`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        name={`associe.${index}.montant_attendu`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
       <td> <Controller
        control={control}
        name={`associe.${index}.statut_contacter`}
        render={({ field }) => <select {...field} type="text"  id=""><option>non</option><option>oui</option></select>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`associe.${index}.reponse_donne`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`associe.${index}.moment_attendu`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`associe.${index}.delai_dattendu`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       
       <td> <Controller
        control={control}
        name={`associe.${index}.montant_apporte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        name={`associe.${index}.montant_respecte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableAssocie(props) {
    const {register,handleSubmit,watch,control,getValues,setValue}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control,
        name:"associe",
    }) 
   
   
  return (
    <>               
    
        <table class="tableau" style={{height:'auto'}}>
                <thead>
                    <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Nom et contact</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Quel montant esperez-vous avoir avec lui</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>lui en avez-vous déja parlé?</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Si oui,quel a étè sa reponse ?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Si non, quand comptez-vous le faire?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Quand compte-il/elle vous apporter son soutien?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant apporté  et date de l'apport?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant respecté?</th> 

                    </thead>
                    <tbody >
        {fields.map((field, index) => (
            < ControlAssocie remove={remove} key={field.id} {...{ control, index, field }}/>
        ))}
        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un associé</button>
        </tbody>
    </table>

                           
    </>
  )
}

export default TableAssocie