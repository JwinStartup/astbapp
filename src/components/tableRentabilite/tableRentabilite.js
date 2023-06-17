import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'


const ControlRentableProduitOne=({control,register})=> {
  const produitOne= useWatch({
      control:control,
      name: "produitOne",
  });
  

  return (
    <>
    <tr>
    <td>
    <Controller
      control={control}
      //defaultValue={nom_produitOne}
      name={`nom_produitOne`}
      render={() => <input {...register('nom_produitOne')} type="text" placeholder='Nom produit'/>
      }
    /></td>
       <td colSpan={13} style={{background:'black'}} > </td>
  </tr> 
    <tr>
    <td> Quantite</td> 
       <td> <Controller
      control={control}
      //defaultValue={quantite_produitOne.mois1}
      name={`quantite_produitOne.mois1`}
      render={() => <input {...register('quantite_produitOne.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={quantite_produitOne.mois2}
      name={`quantite_produitOne.mois2`}
      render={() => <input {...register('quantite_produitOne.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitOne.mois3}
    name={`quantite_produitOne.mois3`}
    render={() => <input {...register('quantite_produitOne.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitOne.mois4}
  name={`quantite_produitOne.mois4`}
  render={() => <input {...register('quantite_produitOne.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitOne.mois5}
name={`quantite_produitOne.mois5`}
render={() => <input {...register('quantite_produitOne.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitOne.mois6}
      name={`quantite_produitOne.mois6`}
      render={() => <input {...register('quantite_produitOne.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitOne.mois7}
    name={`quantite_produitOne.mois7`}
    render={() => <input {...register('quantite_produitOne.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitOne.mois8}
  name={`quantite_produitOne.mois8`}
  render={() => <input {...register('quantite_produitOne.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitOne.mois9}
name={`quantite_produitOne.mois9`}
render={() => <input {...register('quantite_produitOne.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitOne.mois10}
      name={`quantite_produitOne.mois10`}
      render={() => <input {...register('quantite_produitOne.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitOne.mois11}
    name={`quantite_produitOne.mois11`}
    render={() => <input {...register('quantite_produitOne.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitOne.mois12}
  name={`quantite_produitOne.mois12`}
  render={() => <input {...register('quantite_produitOne.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr >
       <td> Prix unitaire</td> 
       <td> <Controller
      control={control}
      //defaultValue={prix_produitOne.mois1}
      name={`prix_produitOne.mois1`}
      render={() => <input {...register('prix_produitOne.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={prix_produitOne.mois2}
      name={`prix_produitOne.mois2`}
      render={() => <input {...register('prix_produitOne.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitOne.mois3}
    name={`prix_produitOne.mois3`}
    render={() => <input {...register('prix_produitOne.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitOne.mois4}
  name={`prix_produitOne.mois4`}
  render={() => <input {...register('prix_produitOne.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitOne.mois5}
name={`prix_produitOne.mois5`}
render={() => <input {...register('prix_produitOne.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitOne.mois6}
      name={`prix_produitOne.mois6`}
      render={() => <input {...register('prix_produitOne.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitOne.mois7}
    name={`prix_produitOne.mois7`}
    render={() => <input {...register('prix_produitOne.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitOne.mois8}
  name={`prix_produitOne.mois8`}
  render={() => <input {...register('prix_produitOne.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitOne.mois9}
name={`prix_produitOne.mois9`}
render={() => <input {...register('prix_produitOne.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitOne.mois10}
      name={`prix_produitOne.mois10`}
      render={() => <input {...register('prix_produitOne.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitOne.mois11}
    name={`prix_produitOne.mois11`}
    render={() => <input {...register('prix_produitOne.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitOne.mois12}
  name={`prix_produitOne.mois12`}
  render={() => <input {...register('prix_produitOne.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr>
  <td>Montant Total</td> 
       <td> <Controller
      control={control}
      //defaultValue={total_produitOne.mois1}
      name={`total_produitOne.mois1`}
      render={() => <input {...register('total_produitOne.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={total_produitOne.mois2}
      name={`total_produitOne.mois2`}
      render={() => <input {...register('total_produitOne.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitOne.mois3}
    name={`total_produitOne.mois3`}
    render={() => <input {...register('total_produitOne.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitOne.mois4}
  name={`total_produitOne.mois4`}
  render={() => <input {...register('total_produitOne.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitOne.mois5}
name={`total_produitOne.mois5`}
render={() => <input {...register('total_produitOne.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitOne.mois6}
      name={`total_produitOne.mois6`}
      render={() => <input {...register('total_produitOne.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitOne.mois7}
    name={`total_produitOne.mois7`}
    render={() => <input {...register('total_produitOne.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitOne.mois8}
  name={`total_produitOne.mois8`}
  render={() => <input {...register('total_produitOne.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitOne.mois9}
name={`total_produitOne.mois9`}
render={() => <input {...register('total_produitOne.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitOne.mois10}
      name={`total_produitOne.mois10`}
      render={() => <input {...register('total_produitOne.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitOne.mois11}
    name={`total_produitOne.mois11`}
    render={() => <input {...register('total_produitOne.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitOne.mois12}
  name={`total_produitOne.mois12`}
  render={() => <input {...register('total_produitOne.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 
  
   </>);
}

const ControlRentableProduitTwo=({control,register})=> {
  const produitTwo= useWatch({
      control:control,
      name: "produitTwo",
  });
  

  return (
    <>
    <tr>
    <td>
    <Controller
      control={control}
      //defaultValue={nom_produitTwo}
      name={`nom_produitTwo`}
      render={() => <input {...register('nom_produitTwo')} type="text" placeholder='Nom produit'/>
      }
    /></td>
       <td colSpan={13} style={{background:'black'}} > </td>
  </tr> 
    <tr>
    <td> Quantite</td> 
       <td> <Controller
      control={control}
      //defaultValue={quantite_produitTwo.mois}
      name={`quantite_produitTwo.mois1`}
      render={() => <input {...register('quantite_produitTwo.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={quantite_produitTwo.mois}
      name={`quantite_produitTwo.mois2`}
      render={() => <input {...register('quantite_produitTwo.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitTwo.mois}
    name={`quantite_produitTwo.mois3`}
    render={() => <input {...register('quantite_produitTwo.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitTwo.mois}
  name={`quantite_produitTwo.mois4`}
  render={() => <input {...register('quantite_produitTwo.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitTwo.mois}
name={`quantite_produitTwo.mois5`}
render={() => <input {...register('quantite_produitTwo.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitTwo.mois}
      name={`quantite_produitTwo.mois6`}
      render={() => <input {...register('quantite_produitTwo.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitTwo.mois}
    name={`quantite_produitTwo.mois7`}
    render={() => <input {...register('quantite_produitTwo.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitTwo.mois}
  name={`quantite_produitTwo.mois8`}
  render={() => <input {...register('quantite_produitTwo.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitTwo.mois}
name={`quantite_produitTwo.mois9`}
render={() => <input {...register('quantite_produitTwo.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitTwo.mois}
      name={`quantite_produitTwo.mois10`}
      render={() => <input {...register('quantite_produitTwo.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitTwo.mois}
    name={`quantite_produitTwo.mois11`}
    render={() => <input {...register('quantite_produitTwo.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitTwo.mois}
  name={`quantite_produitTwo.mois12`}
  render={() => <input {...register('quantite_produitTwo.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr >
       <td> Prix unitaire</td> 
       <td> <Controller
      control={control}
      //defaultValue={prix_produitTwo.mois1}
      name={`prix_produitTwo.mois1`}
      render={() => <input {...register('prix_produitTwo.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={prix_produitTwo.mois2}
      name={`prix_produitTwo.mois2`}
      render={() => <input {...register('prix_produitTwo.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitTwo.mois3}
    name={`prix_produitTwo.mois3`}
    render={() => <input {...register('prix_produitTwo.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitTwo.mois4}
  name={`prix_produitTwo.mois4`}
  render={() => <input {...register('prix_produitTwo.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitTwo.mois5}
name={`prix_produitTwo.mois5`}
render={() => <input {...register('prix_produitTwo.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitTwo.mois6}
      name={`prix_produitTwo.mois6`}
      render={() => <input {...register('prix_produitTwo.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitTwo.mois7}
    name={`prix_produitTwo.mois7`}
    render={() => <input {...register('prix_produitTwo.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitTwo.mois8}
  name={`prix_produitTwo.mois8`}
  render={() => <input {...register('prix_produitTwo.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitTwo.mois9}
name={`prix_produitTwo.mois9`}
render={() => <input {...register('prix_produitTwo.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitTwo.mois10}
      name={`prix_produitTwo.mois10`}
      render={() => <input {...register('prix_produitTwo.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitTwo.mois11}
    name={`prix_produitTwo.mois11`}
    render={() => <input {...register('prix_produitTwo.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitTwo.mois12}
  name={`prix_produitTwo.mois12`}
  render={() => <input {...register('prix_produitTwo.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr>
  <td>Montant Total</td> 
       <td> <Controller
      control={control}
      //defaultValue={total_produitTwo.mois1}
      name={`total_produitTwo.mois1`}
      render={() => <input {...register('total_produitTwo.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={total_produitTwo.mois2}
      name={`total_produitTwo.mois2`}
      render={() => <input {...register('total_produitTwo.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitTwo.mois3}
    name={`total_produitTwo.mois3`}
    render={() => <input {...register('total_produitTwo.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitTwo.mois4}
  name={`total_produitTwo.mois4`}
  render={() => <input {...register('total_produitTwo.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitTwo.mois5}
name={`total_produitTwo.mois5`}
render={() => <input {...register('total_produitTwo.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitTwo.mois6}
      name={`total_produitTwo.mois6`}
      render={() => <input {...register('total_produitTwo.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitTwo.mois7}
    name={`total_produitTwo.mois7`}
    render={() => <input {...register('total_produitTwo.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitTwo.mois8}
  name={`total_produitTwo.mois8`}
  render={() => <input {...register('total_produitTwo.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitTwo.mois9}
name={`total_produitTwo.mois9`}
render={() => <input {...register('total_produitTwo.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitTwo.mois1}
      name={`total_produitTwo.mois10`}
      render={() => <input {...register('total_produitTwo.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitTwo.mois1}
    name={`total_produitTwo.mois11`}
    render={() => <input {...register('total_produitTwo.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitTwo.mois1}
  name={`total_produitTwo.mois12`}
  render={() => <input {...register('total_produitTwo.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 
  
   </>);
}

const ControlRentableProduitFour=({control,register})=> {
  const produitFour= useWatch({
      control:control,
      name: "produitFour",
  });
  

  return (
    <>
    <tr>
    <td>
    <Controller
      control={control}
      //defaultValue={nom_produitFour}
      name={`nom_produitFour`}
      render={() => <input {...register('nom_produitFour')} type="text" placeholder='Nom produit'/>
      }
    /></td>
       <td colSpan={13} style={{background:'black'}} > </td>
  </tr> 
    <tr>
    <td> Quantite</td> 
       <td> <Controller
      control={control}
      //defaultValue={quantite_produitFour.mois}
      name={`quantite_produitFour.mois1`}
      render={() => <input {...register('quantite_produitFour.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={quantite_produitFour.mois}
      name={`quantite_produitFour.mois2`}
      render={() => <input {...register('quantite_produitFour.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitFour.mois}
    name={`quantite_produitFour.mois3`}
    render={() => <input {...register('quantite_produitFour.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitFour.mois}
  name={`quantite_produitFour.mois4`}
  render={() => <input {...register('quantite_produitFour.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitFour.mois}
name={`quantite_produitFour.mois5`}
render={() => <input {...register('quantite_produitFour.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitFour.mois}
      name={`quantite_produitFour.mois6`}
      render={() => <input {...register('quantite_produitFour.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitFour.mois}
    name={`quantite_produitFour.mois7`}
    render={() => <input {...register('quantite_produitFour.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitFour.mois}
  name={`quantite_produitFour.mois8`}
  render={() => <input {...register('quantite_produitFour.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitFour.mois}
name={`quantite_produitFour.mois9`}
render={() => <input {...register('quantite_produitFour.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitFour.mois}
      name={`quantite_produitFour.mois10`}
      render={() => <input {...register('quantite_produitFour.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitFour.mois}
    name={`quantite_produitFour.mois11`}
    render={() => <input {...register('quantite_produitFour.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitFour.mois}
  name={`quantite_produitFour.mois12`}
  render={() => <input {...register('quantite_produitFour.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr >
       <td> Prix unitaire</td> 
       <td> <Controller
      control={control}
      //defaultValue={prix_produitFour.mois1}
      name={`prix_produitFour.mois1`}
      render={() => <input {...register('prix_produitFour.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={prix_produitFour.mois2}
      name={`prix_produitFour.mois2`}
      render={() => <input {...register('prix_produitFour.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitFour.mois3}
    name={`prix_produitFour.mois3`}
    render={() => <input {...register('prix_produitFour.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitFour.mois4}
  name={`prix_produitFour.mois4`}
  render={() => <input {...register('prix_produitFour.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitFour.mois5}
name={`prix_produitFour.mois5`}
render={() => <input {...register('prix_produitFour.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitFour.mois6}
      name={`prix_produitFour.mois6`}
      render={() => <input {...register('prix_produitFour.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitFour.mois7}
    name={`prix_produitFour.mois7`}
    render={() => <input {...register('prix_produitFour.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitFour.mois8}
  name={`prix_produitFour.mois8`}
  render={() => <input {...register('prix_produitFour.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitFour.mois9}
name={`prix_produitFour.mois9`}
render={() => <input {...register('prix_produitFour.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitFour.mois10}
      name={`prix_produitFour.mois10`}
      render={() => <input {...register('prix_produitFour.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitFour.mois11}
    name={`prix_produitFour.mois11`}
    render={() => <input {...register('prix_produitFour.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitFour.mois12}
  name={`prix_produitFour.mois12`}
  render={() => <input {...register('prix_produitFour.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr>
  <td>Montant Total</td> 
       <td> <Controller
      control={control}
      //defaultValue={total_produitFour.mois1}
      name={`total_produitFour.mois1`}
      render={() => <input {...register('total_produit.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={total_produitFour.mois2}
      name={`total_produitFour.mois2`}
      render={() => <input {...register('total_produit.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitFour.mois3}
    name={`total_produitFour.mois3`}
    render={() => <input {...register('total_produit.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitFour.mois4}
  name={`total_produitFour.mois4`}
  render={() => <input {...register('total_produit.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitFour.mois5}
name={`total_produitFour.mois5`}
render={() => <input {...register('total_produit.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitFour.mois6}
      name={`total_produitFour.mois6`}
      render={() => <input {...register('total_produit.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitFour.mois7}
    name={`total_produitFour.mois7`}
    render={() => <input {...register('total_produit.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitFour.mois8}
  name={`total_produitFour.mois8`}
  render={() => <input {...register('total_produit.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitFour.mois9}
name={`total_produitFour.mois9`}
render={() => <input {...register('total_produit.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitFour.mois10}
      name={`total_produitFour.mois10`}
      render={() => <input {...register('total_produit.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitFour.mois11}
    name={`total_produitFour.mois11`}
    render={() => <input {...register('total_produit.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitFour.mois12}
  name={`total_produitFour.mois12`}
  render={() => <input {...register('total_produit.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 
  
   </>);
}

const ControlRentableProduitThree=({control,register})=> {
  const produitThree= useWatch({
      control:control,
      name: "produitThree",
  });
  

  return (
    <>
    <tr>
    <td>
    <Controller
      control={control}
      //defaultValue={produitThree.nom_produit}
      name={`nom_produitThree`}
      render={() => <input {...register('nom_produitThree')} type="text" placeholder='Nom produit'/>
      }
    /></td>
       <td colSpan={13} style={{background:'black'}} > </td>
  </tr> 
    <tr>
    <td> Quantite</td> 
       <td> <Controller
      control={control}
      //defaultValue={produitThree.quantite.mois}
      name={`quantite_produitThree.mois1`}
      render={() => <input {...register('quantite_produitThree.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={quantite_produitThree.mois}
      name={`quantite_produitThree.mois2`}
      render={() => <input {...register('quantite_produitThree.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitThree.mois}
    name={`quantite_produitThree.mois3`}
    render={() => <input {...register('quantite_produitThree.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitThree.mois}
  name={`quantite_produitThree.mois4`}
  render={() => <input {...register('quantite_produitThree.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitThree.mois}
name={`quantite_produitThree.mois5`}
render={() => <input {...register('quantite_produitThree.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitThree.mois}
      name={`quantite_produitThree.mois6`}
      render={() => <input {...register('quantite_produitThree.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitThree.mois}
    name={`quantite_produitThree.mois7`}
    render={() => <input {...register('quantite_produitThree.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitThree.mois}
  name={`quantite_produitThree.mois8`}
  render={() => <input {...register('quantite_produitThree.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={quantite_produitThree.mois}
name={`quantite_produitThree.mois9`}
render={() => <input {...register('quantite_produitThree.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={quantite_produitThree.mois}
      name={`quantite_produitThree.mois10`}
      render={() => <input {...register('quantite_produitThree.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={quantite_produitThree.mois}
    name={`quantite_produitThree.mois11`}
    render={() => <input {...register('quantite_produitThree.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={quantite_produitThree.mois}
  name={`quantite_produitThree.mois12`}
  render={() => <input {...register('quantite_produitThree.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr >
       <td> Prix unitaire</td> 
       <td> <Controller
      control={control}
      //defaultValue={prix_produitThree.mois1}
      name={`prix_produitThree.mois1`}
      render={() => <input {...register('prix_produitThree.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={prix_produitThree.mois2}
      name={`prix_produitThree.mois2`}
      render={() => <input {...register('prix_produitThree.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitThree.mois3}
    name={`prix_produitThree.mois3`}
    render={() => <input {...register('prix_produitThree.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitThree.mois4}
  name={`prix_produitThree.mois4`}
  render={() => <input {...register('prix_produitThree.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitThree.mois5}
name={`prix_produitThree.mois5`}
render={() => <input {...register('prix_produitThree.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitThree.mois6}
      name={`prix_produitThree.mois6`}
      render={() => <input {...register('prix_produitThree.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitThree.mois7}
    name={`prix_produitThree.mois7`}
    render={() => <input {...register('prix_produitThree.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitThree.mois8}
  name={`prix_produitThree.mois8`}
  render={() => <input {...register('prix_produitThree.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={prix_produitThree.mois9}
name={`prix_produitThree.mois9`}
render={() => <input {...register('prix_produitThree.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={prix_produitThree.mois10}
      name={`prix_produitThree.mois10`}
      render={() => <input {...register('prix_produitThree.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={prix_produitThree.mois11}
    name={`prix_produitThree.mois11`}
    render={() => <input {...register('prix_produitThree.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={prix_produitThree.mois12}
  name={`prix_produitThree.mois12`}
  render={() => <input {...register('prix_produitThree.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 


  <tr>
  <td>Montant Total</td> 
       <td> <Controller
      control={control}
      //defaultValue={total_produitThree.mois1}
      name={`total_produitThree.mois1`}
      render={() => <input {...register('total_produitThree.mois1')} type="text" id=""/>
      }
    /></td> 
    <td> <Controller
      control={control}
      //defaultValue={total_produitThree.mois2}
      name={`total_produitThree.mois2`}
      render={() => <input {...register('total_produitThree.mois2')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitThree.mois3}
    name={`total_produitThree.mois3`}
    render={() => <input {...register('total_produitThree.mois3')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitThree.mois4}
  name={`total_produitThree.mois4`}
  render={() => <input {...register('total_produitThree.mois4')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitThree.mois5}
name={`total_produitThree.mois5`}
render={() => <input {...register('total_produitThree.mois5')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitThree.mois6}
      name={`total_produitThree.mois6`}
      render={() => <input {...register('total_produitThree.mois6')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitThree.mois7}
    name={`total_produitThree.mois7`}
    render={() => <input {...register('total_produitThree.mois7')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitThree.mois8}
  name={`total_produitThree.mois8`}
  render={() => <input {...register('total_produitThree.mois8')} type="text" id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={total_produitThree.mois9}
name={`total_produitThree.mois9`}
render={() => <input {...register('total_produitThree.mois9')} type="text" id=""/>
}
/></td> <td> <Controller
      control={control}
      //defaultValue={total_produitThree.mois1}
      name={`total_produitThree.mois10`}
      render={() => <input {...register('total_produitThree.mois10')} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={total_produitThree.mois1}
    name={`total_produitThree.mois11`}
    render={() => <input {...register('total_produitThree.mois11')} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={total_produitThree.mois1}
  name={`total_produitThree.mois12`}
  render={() => <input {...register('total_produitThree.mois12')} type="text" id=""/>
  }
/></td>
  </tr> 
  
   </>);
}
function TableRentabilite() {
    const {register,control}=useFormContext()
    
   
  return (
   <div> <table>
            <thead>
            <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>Produits / services</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 1</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 2</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 3</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 4</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 5</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 6</th><th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 7</th><th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 8</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 9</th>  <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 10</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 11</th> <th style={{border:"solid 1px black",backgroundColor:"gray",color:"white"}}>mois 12</th>
             </thead>   
             <tbody>       
                           <ControlRentableProduitOne  {...{control,register}} />
                           <ControlRentableProduitTwo {...{control,register}} />
                           <ControlRentableProduitThree {...{control,register}} />
                           <ControlRentableProduitFour {...{control,register}} />
<tr><td><b>CHIFFRES D'AFFAIRES</b></td><td><input type="text" {...register('total_mois_un')} /></td> <td><input type="text" {...register('total_mois_deux')} /></td> <td><input type="text" {...register('total_mois_trois')} /></td> <td><input type="text" {...register('total_mois_quatre')} /></td> <td><input type="text" {...register('total_mois_cinq')} /></td> <td><input type="text" {...register('total_mois_six')} /></td><td><input type="text" {...register('total_mois_sept')} /></td><td><input type="text" {...register('total_mois_huit')} /></td><td><input type="text" {...register('total_mois_neuf')} /></td><td><input type="text" {...register('total_mois_dix')} /></td><td><input type="text" {...register('total_mois_onze')} /></td><td><input type="text" {...register('total_mois_douze')} /></td></tr>
           </tbody> 
                          
    </table>

    </div>
  )
}

export default TableRentabilite