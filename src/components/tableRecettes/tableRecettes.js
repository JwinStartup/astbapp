import React, { useEffect, useState } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'


const ControlVente=({control,register})=> {
    const vente= useWatch({
      control:control,
      name:"vente",
  })
    
      
    return (<tr >
         <td> VENTE</td>
         <td> <Controller
        //defaultValue={vente.mois1}
         control={control}
        name={`vente.mois1`}
        render={() => <input {...register('vente.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        //defaultValue={vente.mois2}
         control={control}
        name={`vente.mois2`}
        render={() => <input {...register('vente.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      //defaultValue={vente.mois3}
      control={control}
        name={`vente.mois3`}
        render={() => <input {...register('vente.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    //defaultValue={vente.mois4}
    control={control}
        name={`vente.mois4`}
        render={() => <input {...register('vente.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       //defaultValue={vente.mois5}
       control={control}
        name={`vente.mois5`}
        render={() => <input {...register('vente.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={vente.mois6}
      control={control}
      name={`vente.mois6`}
      render={() => <input {...register('vente.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={vente.mois7}
    control={control}
    name={`vente.mois7`}
    render={() => <input {...register('vente.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={vente.mois8}
  control={control}
  name={`vente.mois8`}
  render={() => <input {...register('vente.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={vente.mois9}
        name={`vente.mois9`}
        render={() => <input {...register('vente.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={vente.mois1}
      control={control}
      name={`vente.mois10`}
      render={() => <input {...register('vente.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={vente.mois1}
    control={control}
    name={`vente.mois11`}
    render={() => <input {...register('vente.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={vente.mois1}
  control={control}
  name={`vente.mois12`}
  render={() => <input {...register('vente.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlTotalCumulEntre=({control,register})=> {
   
    const totalCumul= useWatch({
        control:control,
        name: "totalCumul",
    });
    
      
    return (<tr >
         <td> TOTAL CUMUL DES ENTREES</td>
         <td> <Controller
        //defaultValue={totalCumul.mois1}
         control={control}
        name={`totalCumul.mois1`}
        render={() => <input {...register('totalCumul.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        //defaultValue={totalCumul.mois2}
         control={control}
        name={`totalCumul.mois2`}
        render={() => <input {...register('totalCumul.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      //defaultValue={totalCumul.mois3}
      control={control}
        name={`totalCumul.mois3`}
        render={() => <input {...register('totalCumul.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    //defaultValue={totalCumul.mois4}
    control={control}
        name={`totalCumul.mois4`}
        render={() => <input {...register('totalCumul.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       //defaultValue={totalCumul.mois5}
       control={control}
        name={`totalCumul.mois5`}
        render={() => <input {...register('totalCumul.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={totalCumul.mois6}
      control={control}
      name={`totalCumul.mois6`}
      render={() => <input {...register('totalCumul.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={totalCumul.mois7}
    control={control}
    name={`totalCumul.mois7`}
    render={() => <input {...register('totalCumul.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={totalCumul.mois8}
  control={control}
  name={`totalCumul.mois8`}
  render={() => <input {...register('totalCumul.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={totalCumul.mois9}
        name={`totalCumul.mois9`}
        render={() => <input {...register('totalCumul.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={totalCumul.mois10}
      control={control}
      name={`totalCumul.mois10`}
      render={() => <input {...register('totalCumul.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={totalCumul.mois11}
    control={control}
    name={`totalCumul.mois11`}
    render={() => <input {...register('totalCumul.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={totalCumul.mois12}
  control={control}
  name={`totalCumul.mois12`}
  render={() => <input {...register('totalCumul.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
 
  const ControlTotalEntre=({control,register})=> {
   
    const totalEntre= useWatch({
        control:control,
        name: "totalEntre",
    });
    
    return (<tr >
         <td> TOTAL DES ENTREES</td>
         <td> <Controller
        //defaultValue={totalEntre.mois1}
         control={control}
        name={`totalEntre.mois1`}
        render={() => <input {...register('totalEntre.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
        //defaultValue={totalEntre.mois2}
         control={control}
        name={`totalEntre.mois2`}
        render={() => <input {...register('totalEntre.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      //defaultValue={totalEntre.mois3}
      control={control}
        name={`totalEntre.mois3`}
        render={() => <input {...register('totalEntre.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    //defaultValue={totalEntre.mois4}
    control={control}
        name={`totalEntre.mois4`}
        render={() => <input {...register('totalEntre.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       //defaultValue={totalEntre.mois5}
       control={control}
        name={`totalEntre.mois5`}
        render={() => <input {...register('totalEntre.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={totalEntre.mois6}
      control={control}
      name={`totalEntre.mois6`}
      render={() => <input {...register('totalEntre.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={totalEntre.mois7}
    control={control}
    name={`totalEntre.mois7`}
    render={() => <input {...register('totalEntre.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={totalEntre.mois8}
  control={control}
  name={`totalEntre.mois8`}
  render={() => <input {...register('totalEntre.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={totalEntre.mois9}
        name={`totalEntre.mois9`}
        render={() => <input {...register('totalEntre.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      //defaultValue={totalEntre.mois10}
      control={control}
      name={`totalEntre.mois10`}
      render={() => <input {...register('totalEntre.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    //defaultValue={totalEntre.mois11}
    control={control}
    name={`totalEntre.mois11`}
    render={() => <input {...register('totalEntre.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  //defaultValue={totalEntre.mois12}
  control={control}
  name={`totalEntre.mois12`}
  render={() => <input {...register('totalEntre.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }

 
function TableRecettes() {
    const {register,control,getValues}=useFormContext()
    
  return (
   <div> <table>
            <thead>
            <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Produits / services</th>
             <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 1</th>
              <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 2</th>
               <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 3</th> 
               <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 4</th>
                <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 5</th> 
                <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 6</th>
                <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 7</th>
                <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 8</th>
                 <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 9</th>
                  <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 10</th> 
                  <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 11</th>
                   <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Mois 12</th>

             </thead>   
             <tbody>
               <ControlVente 
           {...{control,register}}
             />  
           <ControlTotalEntre  
           {...{control,register}}

             />  
                  <ControlTotalCumulEntre  
           {...{control,register}}
             />             
                        

           </tbody> 
           <tfoot>
           </tfoot>
                          
    </table>

    </div>
  )
}

export default TableRecettes