import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import React, { useEffect } from 'react'


  const ControlVente=({control})=> {
    const vente= useWatch({
      control,
      name: "vente",
    });

    return (<tr >
         <td>  vente(chiffres d'affaires)</td> 
         <td> <Controller
        control={control}
        name={`vente.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`vente.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`vente.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`vente.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`vente.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`vente.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`vente.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`vente.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`vente.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`vente.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`vente.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`vente.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
     
    
    </tr>    );
  }
  const ControlEntrees=({control})=> {
    const entrees= useWatch({
      control,
      name: "entrees",
    });

    return (<tr >
         <td> Total des entrees</td> 
         <td> <Controller
        control={control}
        name={`entrees.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`entrees.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`entrees.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`entrees.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`entrees.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`entrees.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`entrees.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`entrees.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`entrees.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`entrees.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`entrees.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`entrees.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
     
    
    </tr>    );
  }
  const ControlCumule=({control})=> {
    const cumule= useWatch({
      control,
      name: "cumule",
    });

    return (<tr >
         <td> Montant cumule</td> 
         <td> <Controller
        control={control}
        name={`cumule.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`cumule.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`cumule.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`cumule.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`cumule.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`cumule.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`cumule.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`cumule.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td><td>  <Controller
  control={control}
  name={`cumule.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td><td>  <Controller
        control={control}
        name={`cumule.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`cumule.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td><td>  <Controller
    control={control}
    name={`cumule.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
     
    
    </tr>    );
  }
  function ControleRecettes({donne,control}) {
    const {register,handleSubmit,fields,getValues} = useForm({})
    useEffect(() => {
     donne(getValues())
     }, [fields])
     
    return( <>
                           <ControlVente  
                            {...{ control ,fields  }}
                           />
                           <ControlEntrees
                                   {...{ control ,fields  }}
                           />
                           <ControlCumule 
                                {...{ control ,fields  }}
                           /> 
</>
  )}
  export default ControleRecettes