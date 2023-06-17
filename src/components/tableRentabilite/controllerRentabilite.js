import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import React, { useEffect } from 'react'


  const ControlRentableProduitOne=(props)=> {
    const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const produitOne= useWatch({
        control:control,
        name: "produitOne",
    });
    useEffect(() => {
      const souscription = watch((data)=>{
        props.produitOne(data)
       
       })
         return ()=>{
            souscription.unsubscribe()  
           }
       }, [watch]) 

    return (
      <>
      <tr>
      <td>
      <Controller
        control={control}
        name={`produitOne.nom_produit`}
        render={({ field }) => <input {...field} type="text" placeholder='Nom produit'/>
        }
      /></td>
         <td colSpan={13} style={{background:'black'}} > </td>
    </tr> 
      <tr>
      <td> Quantite</td> 
         <td> <Controller
        control={control}
        name={`produitOne.quantite.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitOne.quantite.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.quantite.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.quantite.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.quantite.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.quantite.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.quantite.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.quantite.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.quantite.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.quantite.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.quantite.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.quantite.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr >
         <td> Prix unitaire</td> 
         <td> <Controller
        control={control}
        name={`produitOne.prix.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitOne.prix.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.prix.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.prix.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.prix.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.prix.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.prix.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.prix.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.prix.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.prix.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.prix.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.prix.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr>
    <td>Montant Total</td> 
         <td> <Controller
        control={control}
        name={`produitOne.total.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitOne.total.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.total.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.total.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.total.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.total.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.total.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.total.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitOne.total.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitOne.total.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitOne.total.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitOne.total.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 
    
     </>);
  }

  const ControlRentableProduitTwo=(props)=> {
    const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const produitTwo= useWatch({
        control:control,
        name: "produitTwo",
    });
    useEffect(() => {
      const souscription = watch((data)=>{
        props.produitTwo(data)
       
       })
         return ()=>{
            souscription.unsubscribe()  
           }
       }, [watch]) 

    return (
      <>
      <tr>
      <td>
      <Controller
        control={control}
        name={`produitTwo.nom_produit`}
        render={({ field }) => <input {...field} type="text" placeholder='Nom produit'/>
        }
      /></td>
         <td colSpan={13} style={{background:'black'}} > </td>
    </tr> 
      <tr>
      <td> Quantite</td> 
         <td> <Controller
        control={control}
        name={`produitTwo.quantite.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitTwo.quantite.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.quantite.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.quantite.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.quantite.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.quantite.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.quantite.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.quantite.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.quantite.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.quantite.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.quantite.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.quantite.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr >
         <td> Prix unitaire</td> 
         <td> <Controller
        control={control}
        name={`produitTwo.prix.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitTwo.prix.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.prix.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.prix.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.prix.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.prix.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.prix.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.prix.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.prix.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.prix.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.prix.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.prix.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr>
    <td>Montant Total</td> 
         <td> <Controller
        control={control}
        name={`produitTwo.total.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitTwo.total.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.total.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.total.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.total.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.total.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.total.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.total.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitTwo.total.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitTwo.total.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitTwo.total.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitTwo.total.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 
    
     </>);
  }

  const ControlRentableProduitFour=(props)=> {
    const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const produitFour= useWatch({
        control:control,
        name: "produitFour",
    });
    useEffect(() => {
      const souscription = watch((data)=>{
        props.produitFour(data)
       
       })
         return ()=>{
            souscription.unsubscribe()  
           }
       }, [watch]) 

    return (
      <>
      <tr>
      <td>
      <Controller
        control={control}
        name={`produitFour.nom_produit`}
        render={({ field }) => <input {...field} type="text" placeholder='Nom produit'/>
        }
      /></td>
         <td colSpan={13} style={{background:'black'}} > </td>
    </tr> 
      <tr>
      <td> Quantite</td> 
         <td> <Controller
        control={control}
        name={`produitFour.quantite.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitFour.quantite.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.quantite.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.quantite.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.quantite.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.quantite.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.quantite.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.quantite.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.quantite.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.quantite.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.quantite.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.quantite.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr >
         <td> Prix unitaire</td> 
         <td> <Controller
        control={control}
        name={`produitFour.prix.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitFour.prix.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.prix.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.prix.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.prix.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.prix.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.prix.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.prix.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.prix.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.prix.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.prix.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.prix.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr>
    <td>Montant Total</td> 
         <td> <Controller
        control={control}
        name={`produitFour.total.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitFour.total.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.total.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.total.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.total.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.total.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.total.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.total.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitFour.total.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitFour.total.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitFour.total.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitFour.total.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 
    
     </>);
  }

  const ControlRentableProduitThree=(props)=> {
    const {register,handleSubmit,watch,control,getValues,setValue}=useForm()
    const produitThree= useWatch({
        control:control,
        name: "produitThree",
    });
    useEffect(() => {
      const souscription = watch((data)=>{
        props.produitThree(data)
       
       })
         return ()=>{
            souscription.unsubscribe()  
           }
       }, [watch]) 

    return (
      <>
      <tr>
      <td>
      <Controller
        control={control}
        name={`produitThree.nom_produit`}
        render={({ field }) => <input {...field} type="text" placeholder='Nom produit'/>
        }
      /></td>
         <td colSpan={13} style={{background:'black'}} > </td>
    </tr> 
      <tr>
      <td> Quantite</td> 
         <td> <Controller
        control={control}
        name={`produitThree.quantite.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitThree.quantite.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.quantite.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.quantite.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.quantite.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.quantite.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.quantite.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.quantite.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.quantite.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.quantite.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.quantite.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.quantite.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr >
         <td> Prix unitaire</td> 
         <td> <Controller
        control={control}
        name={`produitThree.prix.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitThree.prix.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.prix.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.prix.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.prix.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.prix.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.prix.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.prix.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.prix.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.prix.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.prix.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.prix.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 


    <tr>
    <td>Montant Total</td> 
         <td> <Controller
        control={control}
        name={`produitThree.total.Mois1`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> 
      <td> <Controller
        control={control}
        name={`produitThree.total.Mois2`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.total.Mois3`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.total.Mois4`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.total.Mois5`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.total.Mois6`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.total.Mois7`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.total.Mois8`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td> <td> <Controller
  control={control}
  name={`produitThree.total.Mois9`}
  render={({ field }) => <input {...field} type="text" id=""/>
  }
/></td> <td> <Controller
        control={control}
        name={`produitThree.total.Mois10`}
        render={({ field }) => <input {...field} type="text" id=""/>
        }
      /></td> <td> <Controller
      control={control}
      name={`produitThree.total.Mois11`}
      render={({ field }) => <input {...field} type="text" id=""/>
      }
    /></td> <td> <Controller
    control={control}
    name={`produitThree.total.Mois12`}
    render={({ field }) => <input {...field} type="text" id=""/>
    }
  /></td>
    </tr> 
    
     </>);
  }

const estimation_produit_service=[]
  function ControleRentabilite(props) {
    const {register,handleSubmit,watch,control,getValues,setValue}=useForm({defaultValues:estimation_produit_service})
    const {fields,append,remove}=useFieldArray({
      control,
    name:"estimation_produit_service",
  }) 
  useEffect(() => {
    const souscription = watch((data)=>{
      props.produit(data)
     
     })
       return ()=>{
          souscription.unsubscribe()  
         }
     }, [watch]) 
return( 
              <>              
                           <ControlRentableProduitFour  {...props} 
                           produitFour={(p)=>{setValue('produitFour',p.produitFour)}} />
                           <ControlRentableProduitThree  {...props} 
                           produitThree={(p)=>{setValue('produitThree',p.produitThree)}} />
                           <ControlRentableProduitTwo  {...props} 
                           produitTwo={(p)=>{setValue('produitTwo',p.produitTwo)}} />
                           <ControlRentableProduitOne  {...props} 
                           produitOne={(p)=>{setValue('produitOne',p.produitOne)}} />           
             </>             
  )}
  export default ControleRentabilite