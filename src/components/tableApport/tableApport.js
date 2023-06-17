import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlApport=({ control,index,field,remove })=> {
    const apport= useWatch({
      control,
      name: "apport",
    });

    return (
    
        <tr >
         <td> <Controller
        control={control}
        name={`apport.${index}.nom_contact`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>
         <td> <Controller
        control={control}
        name={`apport.${index}.lien_famille_connaissance`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`apport.${index}.montant_demande`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.statut_contacter`}
        render={({ field }) => <select {...field} type="text"  id=""><option>non</option><option>oui</option></select>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.reponse_donne`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.delai`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.delai_dattendu`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.date_final`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
       <td> <Controller
        control={control}
        name={`apport.${index}.montant_apporte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
      <td> <Controller
        control={control}
        name={`apport.${index}.montant_respecte`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
function TableApport(props) {
    const {register,handleSubmit,watch,control,getValues,setValue}=useFormContext({})
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"apport",
    }) 
   
   
  return (
    <>               
    
        <table class="tableau" style={{height:'auto'}}>
                <thead>
                    <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Nom et contact</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Lien familial ou connaissance </th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Combien comptez vous lui demander?</th>
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>L'avez-vous déja contacté ?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Quelle a étè sa reponse?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Quand comptez-vous le faire?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Quand compte-t-elle vous apporter son soutien?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Date finale de son apport</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant apporté?</th> 
                     <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Montant respecté?</th> 

                    </thead>
                    <tbody >
        {fields.map((field, index) => (
            < ControlApport remove={remove} key={field.id} {...{ control, index, field }}/>
        ))}
        <button type="button" className='btnTable' onClick={()=>append()}>ajouter une personne</button>
        </tbody>
    </table>

                           
    </>
  )
}

export default TableApport