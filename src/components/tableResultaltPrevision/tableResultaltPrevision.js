import React, { useEffect } from 'react'
import {Controller, useFieldArray, useForm, useFormContext, useWatch} from 'react-hook-form'

const ControlVenteResultat=({control,register})=> {
  // // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const venteResultat= useWatch({
        control:control,
        name: "venteResultat",
    });
    
      
    return (<tr >
         <td> Ventes</td>
         <td> <Controller
         control={control}
         //defaultValue={venteResultat.mois1}
        name={`venteResultat.mois1`}
        render={() => <input {...register('venteResultat.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={venteResultat.mois2}
        name={`venteResultat.mois2`}
        render={() => <input {...register('venteResultat.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={venteResultat.mois3}
        name={`venteResultat.mois3`}
        render={() => <input {...register('venteResultat.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={venteResultat.mois4}
        name={`venteResultat.mois4`}
        render={() => <input {...register('venteResultat.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={venteResultat.mois5}
        name={`venteResultat.mois5`}
        render={() => <input {...register('venteResultat.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={venteResultat.mois6}
      name={`venteResultat.mois6`}
      render={() => <input {...register('venteResultat.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={venteResultat.mois7}
    name={`venteResultat.mois7`}
    render={() => <input {...register('venteResultat.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={venteResultat.mois8}
  name={`venteResultat.mois8`}
  render={() => <input {...register('venteResultat.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={venteResultat.mois9}
        name={`venteResultat.mois9`}
        render={() => <input {...register('venteResultat.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={venteResultat.mois10}
      name={`venteResultat.mois10`}
      render={() => <input {...register('venteResultat.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={venteResultat.mois11}
    name={`venteResultat.mois11`}
    render={() => <input {...register('venteResultat.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={venteResultat.mois12}
  name={`venteResultat.mois12`}
  render={() => <input {...register('venteResultat.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }

  const ControlMainDoeuvreSalaire=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const coutMainDoeuvreSalaire= useWatch({
        control:control,
        name: "coutMainDoeuvreSalaire",
    });
    
    return (<tr >
         <td>Coût main d'oeuvre(Salaire)</td>
         <td> <Controller
         control={control}
         //defaultValue={coutMainDoeuvreSalaire.mois1}
        name={`coutMainDoeuvreSalaire.mois1`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={coutMainDoeuvreSalaire.mois2}
        name={`coutMainDoeuvreSalaire.mois2`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={coutMainDoeuvreSalaire.mois3}
        name={`coutMainDoeuvreSalaire.mois3`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={coutMainDoeuvreSalaire.mois4}
        name={`coutMainDoeuvreSalaire.mois4`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={coutMainDoeuvreSalaire.mois5}
        name={`coutMainDoeuvreSalaire.mois5`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={coutMainDoeuvreSalaire.mois6}
      name={`coutMainDoeuvreSalaire.mois6`}
      render={() => <input {...register('coutMainDoeuvreSalaire.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={coutMainDoeuvreSalaire.mois7}
    name={`coutMainDoeuvreSalaire.mois7`}
    render={() => <input {...register('coutMainDoeuvreSalaire.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={coutMainDoeuvreSalaire.mois8}
  name={`coutMainDoeuvreSalaire.mois8`}
  render={() => <input {...register('coutMainDoeuvreSalaire.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={coutMainDoeuvreSalaire.mois9}
        name={`coutMainDoeuvreSalaire.mois9`}
        render={() => <input {...register('coutMainDoeuvreSalaire.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={coutMainDoeuvreSalaire.mois10}
      name={`coutMainDoeuvreSalaire.mois10`}
      render={() => <input {...register('coutMainDoeuvreSalaire.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={coutMainDoeuvreSalaire.mois11}
    name={`coutMainDoeuvreSalaire.mois11`}
    render={() => <input {...register('coutMainDoeuvreSalaire.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={coutMainDoeuvreSalaire.mois12}
  name={`coutMainDoeuvreSalaire.mois12`}
  render={() => <input {...register('coutMainDoeuvreSalaire.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }  
  const ControlAchatMarchandises=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const achatMarchandise= useWatch({
        control:control,
        name: "achatMarchandise",
    });

      
    return (<tr >
         <td> Coût d'achat marchandises</td>
         <td> <Controller
         control={control}
         //defaultValue={achatMarchandise.mois1}
        name={`achatMarchandise.mois1`}
        render={() => <input {...register('achatMarchandise.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={achatMarchandise.mois2}
        name={`achatMarchandise.mois2`}
        render={() => <input {...register('achatMarchandise.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={achatMarchandise.mois3}
        name={`achatMarchandise.mois3`}
        render={() => <input {...register('achatMarchandise.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={achatMarchandise.mois4}
        name={`achatMarchandise.mois4`}
        render={() => <input {...register('achatMarchandise.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={achatMarchandise.mois5}
        name={`achatMarchandise.mois5`}
        render={() => <input {...register('achatMarchandise.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={achatMarchandise.mois6}
      name={`achatMarchandise.mois6`}
      render={() => <input {...register('achatMarchandise.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={achatMarchandise.mois7}
    name={`achatMarchandise.mois7`}
    render={() => <input {...register('achatMarchandise.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={achatMarchandise.mois8}
  name={`achatMarchandise.mois8`}
  render={() => <input {...register('achatMarchandise.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={achatMarchandise.mois9}
        name={`achatMarchandise.mois9`}
        render={() => <input {...register('achatMarchandise.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={achatMarchandise.mois10}
      name={`achatMarchandise.mois10`}
      render={() => <input {...register('achatMarchandise.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={achatMarchandise.mois11}
    name={`achatMarchandise.mois11`}
    render={() => <input {...register('achatMarchandise.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={achatMarchandise.mois12}
  name={`achatMarchandise.mois12`}
  render={() => <input {...register('achatMarchandise.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
 
  const ControlChiffreDaffaire=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const chiffreDaffaire= useWatch({
        control:control,
        name: "chiffreDaffaire",
    });
    
      
    return (<tr >
         <td> CHIFFRE D'AFFAIRE (A)</td>
         <td> <Controller
         control={control}
         //defaultValue={chiffreDaffaire.mois1}
        name={`chiffreDaffaire.mois1`}
        render={() => <input {...register('chiffreDaffaire.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={chiffreDaffaire.mois2}
        name={`chiffreDaffaire.mois2`}
        render={() => <input {...register('chiffreDaffaire.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={chiffreDaffaire.mois3}
        name={`chiffreDaffaire.mois3`}
        render={() => <input {...register('chiffreDaffaire.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={chiffreDaffaire.mois4}
        name={`chiffreDaffaire.mois4`}
        render={() => <input {...register('chiffreDaffaire.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={chiffreDaffaire.mois5}
        name={`chiffreDaffaire.mois5`}
        render={() => <input {...register('chiffreDaffaire.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={chiffreDaffaire.mois6}
      name={`chiffreDaffaire.mois6`}
      render={() => <input {...register('chiffreDaffaire.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={chiffreDaffaire.mois7}
    name={`chiffreDaffaire.mois7`}
    render={() => <input {...register('chiffreDaffaire.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={chiffreDaffaire.mois8}
  name={`chiffreDaffaire.mois8`}
  render={() => <input {...register('chiffreDaffaire.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={chiffreDaffaire.mois9}
        name={`chiffreDaffaire.mois9`}
        render={() => <input {...register('chiffreDaffaire.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={chiffreDaffaire.mois10}
      name={`chiffreDaffaire.mois10`}
      render={() => <input {...register('chiffreDaffaire.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={chiffreDaffaire.mois11}
    name={`chiffreDaffaire.mois11`}
    render={() => <input {...register('chiffreDaffaire.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={chiffreDaffaire.mois12}
  name={`chiffreDaffaire.mois12`}
  render={() => <input {...register('chiffreDaffaire.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlDotationAmortissement=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const dotation= useWatch({
        control:control,
        name: "dotation",
    });
    
      
    return (<tr >
         <td> Dotation aux amortissements</td>
         <td> <Controller
         control={control}
         //defaultValue={dotation.mois1}
        name={`dotation.mois1`}
        render={() => <input {...register('dotation.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={dotation.mois2}
        name={`dotation.mois2`}
        render={() => <input {...register('dotation.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={dotation.mois3}
        name={`dotation.mois3`}
        render={() => <input {...register('dotation.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={dotation.mois4}
        name={`dotation.mois4`}
        render={() => <input {...register('dotation.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={dotation.mois5}
        name={`dotation.mois5`}
        render={() => <input {...register('dotation.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={dotation.mois6}
      name={`dotation.mois6`}
      render={() => <input {...register('dotation.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={dotation.mois7}
    name={`dotation.mois7`}
    render={() => <input {...register('dotation.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={dotation.mois8}
  name={`dotation.mois8`}
  render={() => <input {...register('dotation.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={dotation.mois9}
        name={`dotation.mois9`}
        render={() => <input {...register('dotation.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={dotation.mois10}
      name={`dotation.mois10`}
      render={() => <input {...register('dotation.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={dotation.mois11}
    name={`dotation.mois11`}
    render={() => <input {...register('dotation.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={dotation.mois12}
  name={`dotation.mois12`}
  render={() => <input {...register('dotation.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlPubliciteMarketing=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const publiciteMarketing= useWatch({
        control:control,
        name: "publiciteMarketing",
    });
    
      
    return (<tr >
         <td> Coût publicité et marketing</td>
         <td> <Controller
         control={control}
         //defaultValue={publiciteMarketing.mois1}
        name={`publiciteMarketing.mois1`}
        render={() => <input {...register('publiciteMarketing.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={publiciteMarketing.mois2}
        name={`publiciteMarketing.mois2`}
        render={() => <input {...register('publiciteMarketing.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={publiciteMarketing.mois3}
        name={`publiciteMarketing.mois3`}
        render={() => <input {...register('publiciteMarketing.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={publiciteMarketing.mois4}
        name={`publiciteMarketing.mois4`}
        render={() => <input {...register('publiciteMarketing.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={publiciteMarketing.mois5}
        name={`publiciteMarketing.mois5`}
        render={() => <input {...register('publiciteMarketing.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={publiciteMarketing.mois6}
      name={`publiciteMarketing.mois6`}
      render={() => <input {...register('publiciteMarketing.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={publiciteMarketing.mois7}
    name={`publiciteMarketing.mois7`}
    render={() => <input {...register('publiciteMarketing.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={publiciteMarketing.mois8}
  name={`publiciteMarketing.mois8`}
  render={() => <input {...register('publiciteMarketing.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={publiciteMarketing.mois9}
        name={`publiciteMarketing.mois9`}
        render={() => <input {...register('publiciteMarketing.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={publiciteMarketing.mois10}
      name={`publiciteMarketing.mois10`}
      render={() => <input {...register('publiciteMarketing.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={publiciteMarketing.mois11}
    name={`publiciteMarketing.mois11`}
    render={() => <input {...register('publiciteMarketing.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={publiciteMarketing.mois12}
  name={`publiciteMarketing.mois12`}
  render={() => <input {...register('publiciteMarketing.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlRembousementEmp=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const rembousementEmp= useWatch({
        control:control,
        name: "rembousementEmp",
    });

    return (<tr >
         <td> Remboursement emprunt</td>
         <td> <Controller
         control={control}
         //defaultValue={rembousementEmp.mois1}
        name={`rembousementEmp.mois1`}
        render={() => <input {...register('rembousementEmp.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={rembousementEmp.mois2}
        name={`rembousementEmp.mois2`}
        render={() => <input {...register('rembousementEmp.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={rembousementEmp.mois3}
        name={`rembousementEmp.mois3`}
        render={() => <input {...register('rembousementEmp.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={rembousementEmp.mois4}
        name={`rembousementEmp.mois4`}
        render={() => <input {...register('rembousementEmp.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={rembousementEmp.mois5}
        name={`rembousementEmp.mois5`}
        render={() => <input {...register('rembousementEmp.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={rembousementEmp.mois6}
      name={`rembousementEmp.mois6`}
      render={() => <input {...register('rembousementEmp.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={rembousementEmp.mois7}
    name={`rembousementEmp.mois7`}
    render={() => <input {...register('rembousementEmp.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={rembousementEmp.mois8}
  name={`rembousementEmp.mois8`}
  render={() => <input {...register('rembousementEmp.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={rembousementEmp.mois9}
        name={`rembousementEmp.mois9`}
        render={() => <input {...register('rembousementEmp.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={rembousementEmp.mois10}
      name={`rembousementEmp.mois10`}
      render={() => <input {...register('rembousementEmp.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={rembousementEmp.mois11}
    name={`rembousementEmp.mois11`}
    render={() => <input {...register('rembousementEmp.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={rembousementEmp.mois12}
  name={`rembousementEmp.mois12`}
  render={() => <input {...register('rembousementEmp.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlCoutFonctionement=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const coutFonctionement= useWatch({
        control:control,
        name: "coutFonctionement",
    });
   
    return (<tr >
         <td> Autres coût de fonctionnement</td>
         <td> <Controller
         control={control}
         //defaultValue={coutFonctionement.mois1}
        name={`coutFonctionement.mois1`}
        render={() => <input {...register('coutFonctionement.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={coutFonctionement.mois2}
        name={`coutFonctionement.mois2`}
        render={() => <input {...register('coutFonctionement.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={coutFonctionement.mois3}
        name={`coutFonctionement.mois3`}
        render={() => <input {...register('coutFonctionement.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={coutFonctionement.mois4}
        name={`coutFonctionement.mois4`}
        render={() => <input {...register('coutFonctionement.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={coutFonctionement.mois5}
        name={`coutFonctionement.mois5`}
        render={() => <input {...register('coutFonctionement.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={coutFonctionement.mois6}
      name={`coutFonctionement.mois6`}
      render={() => <input {...register('coutFonctionement.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={coutFonctionement.mois7}
    name={`coutFonctionement.mois7`}
    render={() => <input {...register('coutFonctionement.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={coutFonctionement.mois8}
  name={`coutFonctionement.mois8`}
  render={() => <input {...register('coutFonctionement.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={coutFonctionement.mois9}
        name={`coutFonctionement.mois9`}
        render={() => <input {...register('coutFonctionement.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={coutFonctionement.mois10}
      name={`coutFonctionement.mois10`}
      render={() => <input {...register('coutFonctionement.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={coutFonctionement.mois11}
    name={`coutFonctionement.mois11`}
    render={() => <input {...register('coutFonctionement.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={coutFonctionement.mois12}
  name={`coutFonctionement.mois12`}
  render={() => <input {...register('coutFonctionement.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlTotalCharge=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const totalCharge= useWatch({
        control:control,
        name: "totalCharge",
    });
   
    return (<tr >
         <td> TOTAL CHARGES(B)</td>
         <td> <Controller
         control={control}
         //defaultValue={totalCharge.mois1}
        name={`totalCharge.mois1`}
        render={() => <input {...register('totalCharge.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={totalCharge.mois2}
        name={`totalCharge.mois2`}
        render={() => <input {...register('totalCharge.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={totalCharge.mois3}
        name={`totalCharge.mois3`}
        render={() => <input {...register('totalCharge.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={totalCharge.mois4}
        name={`totalCharge.mois4`}
        render={() => <input {...register('totalCharge.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={totalCharge.mois5}
        name={`totalCharge.mois5`}
        render={() => <input {...register('totalCharge.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={totalCharge.mois6}
      name={`totalCharge.mois6`}
      render={() => <input {...register('totalCharge.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={totalCharge.mois7}
    name={`totalCharge.mois7`}
    render={() => <input {...register('totalCharge.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={totalCharge.mois8}
  name={`totalCharge.mois8`}
  render={() => <input {...register('totalCharge.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={totalCharge.mois9}
        name={`totalCharge.mois9`}
        render={() => <input {...register('totalCharge.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={totalCharge.mois10}
      name={`totalCharge.mois10`}
      render={() => <input {...register('totalCharge.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={totalCharge.mois11}
    name={`totalCharge.mois11`}
    render={() => <input {...register('totalCharge.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={totalCharge.mois12}
  name={`totalCharge.mois12`}
  render={() => <input {...register('totalCharge.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
  const ControlResultatNet=({control,register})=> {
   // const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const resultatNet= useWatch({
        control:control,
        name: "resultatNet",
    });
  
    return (<tr >
         <td> RESULTAT NET (A-B)</td>
         <td> <Controller
         control={control}
         //defaultValue={resultatNet.mois1}
        name={`resultatNet.mois1`}
        render={() => <input {...register('resultatNet.mois1')}  type="text" id=""/>
        }
      /></td> 
         <td> <Controller
         control={control}
         //defaultValue={resultatNet.mois2}
        name={`resultatNet.mois2`}
        render={() => <input {...register('resultatNet.mois2')}  type="text" id=""/>}
      /></td> 
      <td> <Controller
      control={control}
      //defaultValue={resultatNet.mois3}
        name={`resultatNet.mois3`}
        render={() => <input {...register('resultatNet.mois3')}  type="text"  id=""/>
        }
      /></td>
    <td> <Controller
    control={control}
    //defaultValue={resultatNet.mois4}
        name={`resultatNet.mois4`}
        render={() => <input {...register('resultatNet.mois4')}  type="text"  id=""/>
        }
      /></td>
       <td> <Controller
       control={control}
       //defaultValue={resultatNet.mois5}
        name={`resultatNet.mois5`}
        render={() => <input {...register('resultatNet.mois5')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={resultatNet.mois6}
      name={`resultatNet.mois6`}
      render={() => <input {...register('resultatNet.mois6')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={resultatNet.mois7}
    name={`resultatNet.mois7`}
    render={() => <input {...register('resultatNet.mois7')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={resultatNet.mois8}
  name={`resultatNet.mois8`}
  render={() => <input {...register('resultatNet.mois8')}  type="text"  id=""/>
  }
/></td> <td> <Controller
control={control}
//defaultValue={resultatNet.mois9}
        name={`resultatNet.mois9`}
        render={() => <input {...register('resultatNet.mois9')}  type="text"  id=""/>
        }
      /></td> <td> <Controller
      control={control}
      //defaultValue={resultatNet.mois10}
      name={`resultatNet.mois10`}
      render={() => <input {...register('resultatNet.mois10')}  type="text"  id=""/>
      }
    /></td> <td> <Controller
    control={control}
    //defaultValue={resultatNet.mois11}
    name={`resultatNet.mois11`}
    render={() => <input {...register('resultatNet.mois11')}  type="text"  id=""/>
    }
  /></td> <td> <Controller
  control={control}
  //defaultValue={resultatNet.mois12}
  name={`resultatNet.mois12`}
  render={() => <input {...register('resultatNet.mois12')}  type="text"  id=""/>
  }
/></td>
    </tr>    );
  }
function TableResultaltPrevision() {
    const {control,register}=useFormContext()
   
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
               <ControlVenteResultat 
             {...{control,register}}
            
             />  
           <ControlChiffreDaffaire  
                          {...{control,register}}
          
             />  
                  <ControlAchatMarchandises  
                          {...{control,register}}
     
             />             
                 <ControlMainDoeuvreSalaire  
                          {...{control,register}}
             /> 
             <ControlPubliciteMarketing  
                          {...{control,register}}
             /> 
              <ControlDotationAmortissement  
                          {...{control,register}}
             />
              <ControlRembousementEmp  
                          {...{control,register}}
             />         
             <ControlCoutFonctionement  
                          {...{control,register}}
             />
             <ControlTotalCharge  
                          {...{control,register}}
             />
             <ControlResultatNet  
                          {...{control,register}}
             />

           </tbody> 
           <tfoot>
           </tfoot>
                          
    </table>

    </div>
  )
}

export default TableResultaltPrevision