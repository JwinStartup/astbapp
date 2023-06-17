import React, { useEffect } from 'react'
import {Controller, useFieldArray,useFormContext, useWatch} from 'react-hook-form'

const ControlEmprunt=({ control,index,item,remove })=> {
    const empruntAmortissement= useWatch({
      control,
      name: "empruntAmortissement",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`empruntAmortissement.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.cout}
        name={`empruntAmortissement.${index}.cout`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
 
function TableAmortissementEmprunt(props) {
    const {register,control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control:control,
        name:"empruntAmortissement",
    }) 
   
  
  return (
   <div> 
                     <p>
                        le montant de <span class="tlpro"><input {...register('montant_emprunt')} type="text" /></span> FCFA contracté sur <span class="tlpro"><input {...register('duree_emprunt')} type="text" /></span>
                        an(s) donnera les détails de remboursement suivants :
                    </p><br/>
    <table>
            <thead>
            <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>DESIGNATION</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>MONTANT</th>
             </thead>   
             <tbody>       {fields.map((item, index) => (
                           < ControlEmprunt remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}   
              <button type="button" className='btnTable' onClick={()=>append()}>ajouter un amortissement</button>
             <tr><td><b>Total de l'amortissement de l'emprunt financier</b></td> <td><input type="text" {...register('cout_total_amortissement_emprunt')}/></td></tr>
           </tbody> 
                          
    </table>

    </div>
  )
}

export default TableAmortissementEmprunt