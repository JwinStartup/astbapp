import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlAmortissement=({ control,index,item,remove })=> {
    const amortissementMateriel= useWatch({
      control,
      name: "amortissementMateriel",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.designation}
        name={`amortissementMateriel.${index}.designation`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.prix}
        name={`amortissementMateriel.${index}.prix`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
       <td> <Controller
        control={control}
        defaultValue={item.duree}
        name={`amortissementMateriel.${index}.duree`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td>  <td> <Controller
      control={control}
      defaultValue={item.amortissementMensuel}
      name={`amortissementMateriel.${index}.amortissementMensuel`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td>  <td> <Controller
    control={control}
    defaultValue={item.amortissementAnnuel}
    name={`amortissementMateriel.${index}.amortissementAnnuel`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> 
     
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
  const initAmortissement={
    amortissementMateriel:[],
    total_amortissement_annuel:"",
    total_amortissement_mensuel:""
  }
function TableAmortissement(props) {
    const {register,control,getValues}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"amortissementMateriel",
    }) 
   
  return (
   <div> <table>
            <thead>
            <th style={{border:"solid 1px black", backgroundColor:"gray",color: "white"}}>Désignation</th> <th  style={{border:"solid 1px black", backgroundColor:"gray",color: "white"}}>Prix</th> <th  style={{border:"solid 1px black", backgroundColor:"gray",color: "white"}}>Durée <br/>de vie</th> <th  style={{border:"solid 1px black", backgroundColor:"gray",color: "white"}}>Amortissement <br/>Annuel</th> <th  style={{border:"solid 1px black", backgroundColor:"gray",color: "white"}}>Amortissement <br/> Mensuel</th>

             </thead>   
             <tbody>       {fields.map((item, index) => (
                           < ControlAmortissement remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                <button type="button" className='btnTable' onClick={()=>append()}>ajouter un cout amortissementMateriel</button> 
           <tr><td colspan="3"><b>Total coût amortissementMateriel</b></td> <td><input type="text" {...register('total_amortissement_materiel_annuel')} /></td> <td><input type="test" {...register('total_amortissement_materiel_mensuel')}/></td></tr>
         </tbody>         
    </table>

    </div>
  )
}

export default TableAmortissement