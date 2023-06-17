import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlSalaires=({ control,index,item,remove })=> {
    const salaires= useWatch({
      control,
      name: "salaires",
    });

    return (<tr >
         <td> <Controller
        control={control}
        defaultValue={item.poste}
        name={`salaires.${index}.poste`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        control={control}
        defaultValue={item.salaire}
        name={`salaires.${index}.salaire`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        defaultValue={item.coutBrut}
        name={`salaires.${index}.salaireBrut`}
        render={({ field }) => <input {...field} type="text"  id=""/>
        }
      /></td>
    
      
     <td style={{border:"none"}}><button type="button" onClick={()=>remove(index)}>X</button></td>
    </tr>    );
  }
  const initSalaires={
    salaires:[],
    total_cout_main_doeuvre:"",
  }
function TableSalaires() {
    const {register,control}=useFormContext()
    const {fields,append,remove}=useFieldArray({
        control,
        name:"salaires",
    }) 
   
  return (
    <div>
         <table>
          <thead>
                 <th style={{border:"solid 1px black",color:"white",backgroundColor:"gray"}}>Postes</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Salaire (net)</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Coût brut (incluant <br/> charges et impôts)</th>
              </thead>
              <tbody>
                        {fields.map((item, index) => (
                           < ControlSalaires remove={remove} key={item.id} {...{ control, index, item }}/>
                        ))}
                        <button type="button" className='btnTable' onClick={()=>append()}>ajouter un salaire</button>
                        <tr><td colspan="2"><b>Total coût de main d'oeuvre</b></td> <td><input type="text" {...register('total_cout_main_doeuvre')} /></td></tr>
              </tbody>
        </table>                    
    </div>
  )
}

export default TableSalaires