import React, { useEffect, useState } from 'react'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import TableBureau from '../../components/tableTechnique/tableTechnique.js'
import {Controller, FormProvider, useFieldArray, useForm, useWatch} from 'react-hook-form'

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import './gop.css'
import TableAmenagement from '../../components/tablePoste/tablePoste'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import SousEntet from '../../components/functionSousEntet/functionSousEntet'
import { ThreeDots } from 'react-loader-spinner'
    const initialGop={
        etape_procedure:"",
        periode_reunion:"",
        service1:"",
        service2:"",
        service3:"",
        service4:"",
        service5:"",
        service6:"",
        service7:"",
        service8:"",
        service9:"",
        service10:""
       
    }
        function Gop (){
            const navigate = useNavigate()
            const [loading,setLoading]= useState(false)
            const {bid,id} = useParams()
      const methods=useForm({
        defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/gestionOperationnelle/voir/${id}`)
        //||initialGop
        })
      
       const onSubmit= async d=>{
       console.log(d)
       const response = await fetchWrapper.post("http://localhost:8080/api/gestionOperationnelle/modifie",d);
       console.log(response)
       if(response){
        setLoading(false)
        navigate(`/projet/businessplan/${bid}`)
       }
        }
        useEffect(()=>{
         //   methods.setValue('_id',{id})
         
        },[])
        console.log(methods.getValues())

    return(
        <div className="BusinesPlan">
            
          <Entete/>
          <SousEntet parent='Business plan' enfant='Gestion operationnelle'/>

          <div className="HautBp">
          <div >
                    
          <ol  style={{background:'white',width:"300px",borderRadius:"30px",marging:"5px",padding:"35px",listStyleType:'upper-roman'}}>
                    <li style={{margin:'5px'}}> 
                     <a href="#gt" > GESTION TECHNIQUE</a>
                    
                       <ol type='1' >
                       <li> 
                       <a href="#dpte">Description de la procédure de travail dans l'entreprise</a></li>
                       <li> 
                       <a href="#dibee" >Description des infrastuctures et besoin en équipement de l'entreprise</a></li>
                       </ol>
                     </li>

                     <li style={{margin:'5px'}}> 
                     <a href="#grh" >GESTION RESSOURCES HUMAINES</a>
                    
                       <ol type='1'>
                       <li> 
                       <a href="#dpfpse" >Définition des postes et fixation des profils et salaires des employés</a></li>
                       <li> 
                       <a href="#oe" >Organigramme de l'entreprise</a></li>
                       
                       </ol>
                       </li>
                   </ol>
               
                </div>  
                <div className="gaucheB">
                <FormProvider {...methods} >
                  <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
                <div class="containers">
                      <ol type="I">
                    <h2><li id='gt'>GESTION TECHNIQUE</li></h2>
                    <ol type="1"> <br/>
                       <h3><li id='dpte'>Description de la procédure de travail dans l'entreprise </li></h3>
                        <p>Les différentes étapes de la procédure du travail: <br/><br/> {methods.formState.isloading?<Skeleton/>: <textarea {...methods.register("etape_procedure")}  id="" cols="55" rows="15"></textarea> }</p><br/>
                        <p>Le but de la réunion avec tout le personnel chaque (jour/ semaine/ quinzaine/ mois /trimestre): <br/><br/><textarea {...methods.register("periode_reunion")}  id="" cols="55" rows="10"></textarea></p><br/>
                        <h3><li id='dibee'>Description des infrastuctures et besoin en équipement de l'entreprise</li></h3>
                        <p>le local de l'entreprise séra aménagé et compartimenté de sorte à comporter les différentes pièces (salles/ bureaux /équipement): <br/>
                        <TableBureau />
                        </p>
                     </ol><br/>
                  
                     <h2><li id='grh'>GESTION RESSOURCES HUMAINES</li></h2>

                     <ol type="1">
                    <h3><li id='dpfpse'>Définition des postes et fixation des profils et salaires des employés</li></h3>
                   
                        <TableAmenagement />

                    <h3><li id='oe'>Organigramme de l'entreprise</li></h3>
                    <p>L'organigramme de l'entreprise se présente comme suit :</p><br/>
                    <div class="organigramme">
                        <div class="service1">
                            <span>
                                <h4>Service 1</h4>
                                <input type="text" {...methods.register("service1")}/>
                            </span>
                        </div><br/><br/>
                        <div class="service2">
                            <span>
                                <h4>Service 2</h4>
                                <input type="text" {...methods.register("service2")}/>
                            </span>
                            <span><h4>Service 3</h4><input type="text" {...methods.register("service3")}/></span>
                            <span><h4>Service 4</h4><input type="text" {...methods.register("service4")}/></span>
                        </div> <br/><br/>   
                        <div class="service3">
                            <span><h4>Service 5</h4><input type="text" {...methods.register("service5")}/></span>
                            <span><h4>Service 6</h4><input type="text" {...methods.register("service6")}/></span>
                            <span><h4>Service 7</h4><input type="text" {...methods.register("service7")}/></span>
                        </div><br/><br/>
                        <div class="service4">
                            <span><h4>Service 8</h4><input type="text" {...methods.register("service8")}/></span>
                            <span><h4>Service 9</h4><input type="text" {...methods.register("service9")}/></span>
                            <span><h4>Service 10</h4><input type="text" {...methods.register("service10")}/></span>
                        </div><br/><br/><br/>
                        
                        <div class="envoyer">
                        <button  type="submit" className="submit">
                       {loading===true && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
                        />}
                        ENVOYER</button>
                        <button onClick={()=>navigate(`/pdf/gop`)} type="submit" className="submit">Télècharger le pdf</button> 
             </div><br/>
                    </div>
                    

                   
                </ol>




                    </ol>

                     </div>
                </form>
        </FormProvider>
                </div>
          </div>
        </div>
    )
}
export default Gop