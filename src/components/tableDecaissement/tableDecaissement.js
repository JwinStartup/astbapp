import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlMatiere=({control,register})=> {
    const matiere= useWatch({
        control:control,
        name: "matiere",
    });
    
      
    return (<tr >
         <td> COÛT D'ACHAT MATIÈRES PREMIÈRES</td>
         <td> <Controller
         control={control}
        //defaultValue={matiere.mois1}
        name={`matiere.mois1`}
        render={() => <input {...register('matiere.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={matiere.mois2}
        name={`matiere.mois2`}
        render={() => <input {...register('matiere.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={matiere.mois3}
        name={`matiere.mois3`}
        render={() => <input {...register('matiere.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={matiere.mois4}
        name={`matiere.mois4`}
        render={() => <input {...register('matiere.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={matiere.mois5}
        name={`matiere.mois5`}
        render={() => <input {...register('matiere.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={matiere.mois6}
      name={`matiere.mois6`}
      render={() => <input {...register('matiere.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={matiere.mois7}
    name={`matiere.mois7`}
    render={() => <input {...register('matiere.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={matiere.mois8}
  name={`matiere.mois8`}
  render={() => <input {...register('matiere.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={matiere.mois9}
        name={`matiere.mois9`}
        render={() => <input {...register('matiere.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={matiere.mois10}
      name={`matiere.mois10`}
      render={() => <input {...register('matiere.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={matiere.mois11}
    name={`matiere.mois11`}
    render={() => <input {...register('matiere.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={matiere.mois12}
  name={`matiere.mois12`}
  render={() => <input {...register('matiere.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }

  const ControlRemboursement=({control,register})=> {
    const remboursement= useWatch({
        control:control,
        name: "remboursement",
    });
    
      
    return (<tr >
         <td>REMBOURSEMENT EMPRUNT</td>
         <td> <Controller
         control={control}
        //defaultValue={remboursement.mois1}
        name={`remboursement.mois1`}
        render={() => <input {...register('remboursement.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={remboursement.mois2}
        name={`remboursement.mois2`}
        render={() => <input {...register('remboursement.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={remboursement.mois3}
        name={`remboursement.mois3`}
        render={() => <input {...register('remboursement.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={remboursement.mois4}
        name={`remboursement.mois4`}
        render={() => <input {...register('remboursement.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={remboursement.mois5}
        name={`remboursement.mois5`}
        render={() => <input {...register('remboursement.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={remboursement.mois6}
      name={`remboursement.mois6`}
      render={() => <input {...register('remboursement.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={remboursement.mois7}
    name={`remboursement.mois7`}
    render={() => <input {...register('remboursement.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={remboursement.mois8}
  name={`remboursement.mois8`}
  render={() => <input {...register('remboursement.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={remboursement.mois9}
        name={`remboursement.mois9`}
        render={() => <input {...register('remboursement.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={remboursement.mois10}
      name={`remboursement.mois10`}
      render={() => <input {...register('remboursement.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={remboursement.mois11}
    name={`remboursement.mois11`}
    render={() => <input {...register('remboursement.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={remboursement.mois12}
  name={`remboursement.mois12`}
  render={() => <input {...register('remboursement.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }  
  const ControlAmortissement=({control,register})=> {
    const amortissement= useWatch({
        control:control,
        name: "amortissement",
    });
    
      
    return (<tr >
         <td> COÛT DE L'AMORTISSEMENT</td>
         <td> <Controller
         control={control}
        //defaultValue={amortissement.mois1}
        name={`amortissement.mois1`}
        render={() => <input {...register('amortissement.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={amortissement.mois2}
        name={`amortissement.mois2`}
        render={() => <input {...register('amortissement.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={amortissement.mois3}
        name={`amortissement.mois3`}
        render={() => <input {...register('amortissement.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={amortissement.mois4}
        name={`amortissement.mois4`}
        render={() => <input {...register('amortissement.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={amortissement.mois5}
        name={`amortissement.mois5`}
        render={() => <input {...register('amortissement.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={amortissement.mois6}
      name={`amortissement.mois6`}
      render={() => <input {...register('amortissement.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={amortissement.mois7}
    name={`amortissement.mois7`}
    render={() => <input {...register('amortissement.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={amortissement.mois8}
  name={`amortissement.mois8`}
  render={() => <input {...register('amortissement.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={amortissement.mois9}
        name={`amortissement.mois9`}
        render={() => <input {...register('amortissement.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={amortissement.mois10}
      name={`amortissement.mois10`}
      render={() => <input {...register('amortissement.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={amortissement.mois11}
    name={`amortissement.mois11`}
    render={() => <input {...register('amortissement.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={amortissement.mois12}
  name={`amortissement.mois12`}
  render={() => <input {...register('amortissement.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
 
  const ControlMainOeuvre=({control,register})=> {
    const mainOeuvre= useWatch({
        control:control,
        name: "mainOeuvre",
    });
    
      
    return (<tr >
         <td> COÛT DE MAIN D'OEUVRE</td>
         <td> <Controller
         control={control}
        //defaultValue={mainOeuvre.mois1}
        name={`mainOeuvre.mois1`}
        render={() => <input {...register('mainOeuvre.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={mainOeuvre.mois2}
        name={`mainOeuvre.mois2`}
        render={() => <input {...register('mainOeuvre.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={mainOeuvre.mois3}
        name={`mainOeuvre.mois3`}
        render={() => <input {...register('mainOeuvre.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={mainOeuvre.mois4}
        name={`mainOeuvre.mois4`}
        render={() => <input {...register('mainOeuvre.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={mainOeuvre.mois5}
        name={`mainOeuvre.mois5`}
        render={() => <input {...register('mainOeuvre.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={mainOeuvre.mois6}
      name={`mainOeuvre.mois6`}
      render={() => <input {...register('mainOeuvre.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={mainOeuvre.mois7}
    name={`mainOeuvre.mois7`}
    render={() => <input {...register('mainOeuvre.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={mainOeuvre.mois8}
  name={`mainOeuvre.mois8`}
  render={() => <input {...register('mainOeuvre.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={mainOeuvre.mois9}
        name={`mainOeuvre.mois9`}
        render={() => <input {...register('mainOeuvre.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={mainOeuvre.mois10}
      name={`mainOeuvre.mois10`}
      render={() => <input {...register('mainOeuvre.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={mainOeuvre.mois11}
    name={`mainOeuvre.mois11`}
    render={() => <input {...register('mainOeuvre.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={mainOeuvre.mois12}
  name={`mainOeuvre.mois12`}
  render={() => <input {...register('mainOeuvre.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlTotalSorties=({control,register})=> {
    const totalSorties= useWatch({
        control:control,
        name: "totalSorties",
    });
    
      
    return (<tr >
         <td> TOTAL DES SORTIES</td>
         <td> <Controller
         control={control}
        //defaultValue={totalSorties.mois1}
        name={`totalSorties.mois1`}
        render={() => <input {...register('totalSorties.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={totalSorties.mois2}
        name={`totalSorties.mois2`}
        render={() => <input {...register('totalSorties.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={totalSorties.mois3}
        name={`totalSorties.mois3`}
        render={() => <input {...register('totalSorties.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={totalSorties.mois4}
        name={`totalSorties.mois4`}
        render={() => <input {...register('totalSorties.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={totalSorties.mois5}
        name={`totalSorties.mois5`}
        render={() => <input {...register('totalSorties.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={totalSorties.mois6}
      name={`totalSorties.mois6`}
      render={() => <input {...register('totalSorties.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={totalSorties.mois7}
    name={`totalSorties.mois7`}
    render={() => <input {...register('totalSorties.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={totalSorties.mois8}
  name={`totalSorties.mois8`}
  render={() => <input {...register('totalSorties.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={totalSorties.mois9}
        name={`totalSorties.mois9`}
        render={() => <input {...register('totalSorties.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={totalSorties.mois10}
      name={`totalSorties.mois10`}
      render={() => <input {...register('totalSorties.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={totalSorties.mois11}
    name={`totalSorties.mois11`}
    render={() => <input {...register('totalSorties.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={totalSorties.mois12}
  name={`totalSorties.mois12`}
  render={() => <input {...register('totalSorties.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlAutreCout=({control,register})=> {
    const autreCout= useWatch({
        control:control,
        name: "autreCout",
    });
    
      
    return (<tr >
         <td> AUTRES COÛTS</td>
         <td> <Controller
         control={control}
        //defaultValue={autreCout.mois1}
        name={`autreCout.mois1`}
        render={() => <input {...register('autreCout.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={autreCout.mois2}
        name={`autreCout.mois2`}
        render={() => <input {...register('autreCout.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={autreCout.mois3}
        name={`autreCout.mois3`}
        render={() => <input {...register('autreCout.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={autreCout.mois4}
        name={`autreCout.mois4`}
        render={() => <input {...register('autreCout.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={autreCout.mois5}
        name={`autreCout.mois5`}
        render={() => <input {...register('autreCout.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={autreCout.mois6}
      name={`autreCout.mois6`}
      render={() => <input {...register('autreCout.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={autreCout.mois7}
    name={`autreCout.mois7`}
    render={() => <input {...register('autreCout.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={autreCout.mois8}
  name={`autreCout.mois8`}
  render={() => <input {...register('autreCout.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={autreCout.mois9}
        name={`autreCout.mois9`}
        render={() => <input {...register('autreCout.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={autreCout.mois10}
      name={`autreCout.mois10`}
      render={() => <input {...register('autreCout.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={autreCout.mois11}
    name={`autreCout.mois11`}
    render={() => <input {...register('autreCout.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={autreCout.mois12}
  name={`autreCout.mois12`}
  render={() => <input {...register('autreCout.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlTotalCumulSorties=({control,register})=> {
    const totalcumulSorties= useWatch({
        control:control,
        name: "totalcumulSorties",
    });
    
      
    return (<tr >
         <td> TOTAL CUMUL DES SORTIES</td>
         <td> <Controller
         control={control}
        //defaultValue={totalcumulSorties.mois1}
        name={`totalcumulSorties.mois1`}
        render={() => <input {...register('totalcumulSorties.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
        //defaultValue={totalcumulSorties.mois2}
        name={`totalcumulSorties.mois2`}
        render={() => <input {...register('totalcumulSorties.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
     //defaultValue={totalcumulSorties.mois3}
        name={`totalcumulSorties.mois3`}
        render={() => <input {...register('totalcumulSorties.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
   //defaultValue={totalcumulSorties.mois4}
        name={`totalcumulSorties.mois4`}
        render={() => <input {...register('totalcumulSorties.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
      //defaultValue={totalcumulSorties.mois5}
        name={`totalcumulSorties.mois5`}
        render={() => <input {...register('totalcumulSorties.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={totalcumulSorties.mois6}
      name={`totalcumulSorties.mois6`}
      render={() => <input {...register('totalcumulSorties.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={totalcumulSorties.mois7}
    name={`totalcumulSorties.mois7`}
    render={() => <input {...register('totalcumulSorties.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={totalcumulSorties.mois8}
  name={`totalcumulSorties.mois8`}
  render={() => <input {...register('totalcumulSorties.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={totalcumulSorties.mois9}
        name={`totalcumulSorties.mois9`}
        render={() => <input {...register('totalcumulSorties.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
     //defaultValue={totalcumulSorties.mois10}
      name={`totalcumulSorties.mois10`}
      render={() => <input {...register('totalcumulSorties.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
   //defaultValue={totalcumulSorties.mois11}
    name={`totalcumulSorties.mois11`}
    render={() => <input {...register('totalcumulSorties.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
 //defaultValue={totalcumulSorties.mois12}
  name={`totalcumulSorties.mois12`}
  render={() => <input {...register('totalcumulSorties.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
 
function TableDecaissement() {
    const {register,control}=useFormContext()
   
     
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
               <ControlMatiere 
                 {...{control,register}}
             />  
           <ControlMainOeuvre  
                 {...{control,register}}
             />  
                  <ControlAmortissement  
                 {...{control,register}}
             />             
                 <ControlRemboursement  
                 {...{control,register}}
             /> 
             <ControlAutreCout  
                 {...{control,register}}
             /> 
              <ControlTotalSorties  
                 {...{control,register}}
             />
              <ControlTotalCumulSorties  
                 {...{control,register}}
             />         

           </tbody> 
           <tfoot>
           </tfoot>
                          
    </table>

    </div>
  )
}

export default TableDecaissement