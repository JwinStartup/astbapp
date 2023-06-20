import React, { useEffect, useState } from 'react'
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import Fmenu from "../../components/fmenu/fmenu"
import Entete from "../../components/Entete/entete"
import 'react-loading-skeleton/dist/skeleton.css'
import "./pe.css"
import TableCursus from '../../components/tableCursus/tableCursus'
import TableExperience from '../../components/tableExperience/tableExperience'
import InputCompetence from '../../components/Input/inputCompetence'
import {Controller, FormProvider, useFieldArray, useForm, useWatch} from 'react-hook-form'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import SousEntet from '../../components/functionSousEntet/functionSousEntet'
import { ThreeDots } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'

export default function Pe() {
  const navigate = useNavigate()
    const {bid,id} = useParams()
  const methods=useForm({
 defaultValues: async ()=>await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/presententrepreneur/voir/${id}`) 
  })
  const {fields,append,remove}=useFieldArray({
    control:methods.control,
    name:"entrepreneur",
}) 


const onSubmit= async d=>{
  const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/presententrepreneur/modifie",d);
  /*if(response){
      navigate(`/projet/businessplan/${bid}`)
    }*/
    console.log(response)
  }
  useEffect(()=>{
console.log(methods.watch())
},[methods.formState])
  return (
    <div className="BusinesPlan">
    <Entete/>
    <SousEntet parent='Business plan' enfant='Presentation entrepreneur'/>
     
    <div className="HautBp">
                 <div >
                    
                    <ol  style={{background:'white',fontSize:"14px",width:"300px",borderRadius:"30px",marging:"5px",padding:"30px",height:"200px",listStyleType:'upper-roman'}}>
                    <li style={{margin:'0px 0px 10px 10px'}}> 
                     <a href="#ec" >ETAT CIVIL</a>
                     </li>

                     <li style={{margin:'10px'}}> 
                     <a href="#dc" > DOMAINES DES COMPETENCES</a>
                     </li>
                     
                    <li style={{margin:'10px'}}> 
                      <a href="#csudo">CURSUS SCOLAIRE-UNIVERSITAIRE ET DIPLOMES OBTENUS</a>
                     </li>
                     
                    <li style={{margin:'10px'}}> 
                      <a href="#ep">EXPERIENCES PROFESSIONNELLES</a>
                     </li>
                     <li style={{margin:'10px'}}> 
                      <a href="#ad">ATOUTS ET DIVERS</a>
                     </li>
                   </ol>
                   <button onClick={()=>append()} style={{
                        padding: '13px',
                        border: 'none',
                        borderRadius: '66px',
                        margin: '5px',
                        boxShadow: '2px 2px white',}}>ajouter un associé</button>
                </div>
                <div className="gaucheB">
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
                    {fields.map((item,index)=>{return(
                    
                    <div class="containers">
                    <h3><u>
                    <Controller
                       
                       render={({field})=>
                        <select {...field} defaultValue="PROMOTEUR" >
                       <option>PROMOTEUR</option><option>ASSOCIE</option>
                      </select>}
                      name= {`entrepreneur[${index}].type`}
                          control={methods.control}
                          defaultValue={item.type}
                      />
                      </u></h3>
                  <div class="promoteur">
                    <ol type="1">
                      <h4><u id="ec">ETAT CIVIL</u></h4>
                      <div class="presntation" style={{width:'1000px'}}>
                     <div class="nom">
                            <p>Nom et prénoms : <Controller
                             render={({field})=><input required  {...field} style={{width: "50%"}} type="text"/>
                          }
                          name= {`entrepreneur[${index}].nom`}
                          control={methods.control}
                          defaultValue={item.nom}/></p>
                            <p>Age : <Controller
                             render={({field})=><input required  {...field} style={{width: "50%"}} type="number"/>
                          }
                          name= {`entrepreneur[${index}].age`}
                          control={methods.control}
                          defaultValue={item.age}/></p>
                            <p>Situation matrimoniale : <Controller
                             render={({field})=><input required  {...field} style={{width:"50%"}} type="text"/>
                          }
                          name= {`entrepreneur[${index}].situation`}
                          control={methods.control}
                          defaultValue={item.situation}/></p>
                            <p>Contacts télephonique : <Controller
                             render={({field})=><input required  {...field} style={{width:"50%"}} type="tel"/>
                          }
                          name= {`entrepreneur[${index}].contact`}
                          control={methods.control}
                          defaultValue={item.contact}/></p>
                            <p>Email : <Controller
                             render={({field})=><input required  {...field} style={{width: "80%"}} type="email"/>
                          }
                          name= {`entrepreneur[${index}].email`}
                          control={methods.control}
                          defaultValue={item.email}/></p>
                        </div>
                        <div class="photo">
                            {/*<Controller
                             render={({field})=><input required   type="image" src={photoLo} alt="PHOTO" style={{border:"none"}}/>*/}
                        </div>
                    </div>

                    <h4><u id="dc">DOMAINES DES COMPETENCES</u></h4>
                    <InputCompetence name={`entrepreneur[${index}]`} />
                    <br/>

                    <h4><u id="csudo">CURSUS SCOLAIRE-UNIVERSITAIRE ET DIPLOMES OBTENUS </u>(<i>à énumerer</i>)</h4><br/>

                   <TableCursus name={`entrepreneur[${index}]`} />
                    
                    <h4><u id="ep">EXPERIENCES PROFESSIONNELLES</u><i> (à énumerer)</i></h4><br/>
                    <TableExperience name={`entrepreneur[${index}]`} />

                    <h4><u id="ad">ATOUTS ET DIVERS</u></h4><br/>
                    <ul>
                        <li><h4>Informatique : 
                          <Controller
                             render={({field})=><input required {...field} style={{width:"70%"}} type="text"/>}
                                name= {`entrepreneur[${index}].informatique`}
                                control={methods.control}
                                defaultValue={item.informatique}

                           />
                             </h4>
                            </li>
                        <li><h4>Langues : 
                          <Controller
                             render={({field})=><input required {...field} style={{width:"70%"}} type="text"/>}
                                name= {`entrepreneur[${index}].langues`}
                                control={methods.control}
                                defaultValue={item.langues}
                           />
                             </h4>
                            </li>
                        <li><h4>Loisirs : 
                          <Controller
                             render={({field})=><input required {...field} style={{width:"70%"}} type="text"/>}
                                name= {`entrepreneur[${index}].loisir`}
                                control={methods.control}
                                defaultValue={item.loisir}
                           />
                             </h4>
                            </li>
                        <li><h4>Permis de conduire : 
                          <Controller
                             render={({field})=><input required {...field} style={{width:"70%"}} type="text"/>}
                                name= {`entrepreneur[${index}].permis`}
                                control={methods.control}
                                defaultValue={item.permis}
                           />
                             </h4>
                            </li><br/>
                    </ul><br/>
                 </ol>
                 <br/>
                    </div>
                 </div>)})}
                {methods.watch().entrepreneur&&<div class="envoyer">
                 {<button  type="submit" className="submit">
                       {methods.formState.isSubmitting && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
                        />}
                        ENVOYER</button>}
                        {<button onClick={()=>navigate(`/pdf/pe`)} type="submit" className="submit">Télècharger le pdf</button>}
                 </div>}
                 </form>
                 </FormProvider>
                 </div>
                 </div>
                 </div>

                  
           
  )
}
