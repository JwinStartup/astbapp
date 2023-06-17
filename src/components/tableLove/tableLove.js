import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlLove=({ control,index,field,remove })=> {
    const loveMoney= useWatch({
      control,
      name: "loveMoney",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        name={`loveMoney.${index}.nom_contact`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        name={`loveMoney.${index}.montant_attendu`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
       <td> <Controller
        control={control}
        name={`loveMoney.${index}.statut_contacter`}
        render={({ field }) => <select {...field} type="text"  id=""><option>non</option><option>oui</option></select>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`loveMoney.${index}.reponse_donne`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`loveMoney.${index}.moment_attendu`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`loveMoney.${index}.delai_dattendu`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       
       <td> <Controller
        control={control}
        name={`loveMoney.${index}.montant_apporte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        name={`loveMoney.${index}.montant_respecte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableLove() {
  const {register,handleSubmit,watch,control,getValues,setValue}=useFormContext({})
  const {fields,append,remove}=useFieldArray({
      control:control,
      name:"loveMoney",
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
            <ControlLove remove={remove} key={field.id} {...{ control, index, field }}/>
        ))}
        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une personne</button>
        </tbody>
    </table>

                           
    </>
  )
}

export default TableLove