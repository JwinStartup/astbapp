import "./pp.css"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useEffect, useState } from 'react'
import Fmenu from "../../components/fmenu/fmenu"
import Entete from "../../components/Entete/entete"
import InputAssocier from "../../components/Input/inputAssocier.js"
import axios from 'axios'
import {Controller, FormProvider, useFieldArray, useForm, useFormContext} from 'react-hook-form'
import TableRealisation from "../../components/tableRealisation/tableRealisation"
import AutrePlan from "../../components/autreplan/autrplan"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { fetchWrapper } from "../../reducer/helpers/helpers"
import SousEntet from "../../components/functionSousEntet/functionSousEntet"
import { ThreeDots } from "react-loader-spinner"

 const initial={
        nom :"",
        le :"",
        pays :"",
        ville:"",
        autrelieu:"",
        etatespace:"",
        dimension:"",
        raisons:"",
        besoins:"",
        objectifcourtterme:"",
        objectifmoyenterme:"",
        objectiflongterme:"",
        clientel:"",
        serviceproduit:"",
        avantage:"",
        model:"",
       contrainte:"",
       formejuridique:"",
       proprietaire:"",
       associe:[],
       planeconomique:"",
       plansocial:"",
       planpersonnel:"",
       autreplan:[],
       realisation:[],
       pp_Id:''

 }


export default function Pp() {
    const [initialData, setInitialData] = useState(initial)
    const [rea, setRea] = useState([])
    const [asso, setAsso] = useState([])
    const [autre, setAutre] = useState([])
    const navigate = useNavigate()
    const {bid,id} = useParams()
    const [loading,setLoading]= useState(false)

    
const methods=useForm({
    defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/presentProjet/voir/${id}`)
//.then((u)=>console.log(u))
})


const  loadingp = methods.formState.isLoading      
const onSubmit= async d=>{
   console.log(d)
 //  setLoading(true)
    const response = await fetchWrapper.post("http://localhost:8080/api/presentProjet/modifie",d);
    console.log(response)
   
   
    if(response){
      //  setLoading(false)
        navigate(`/projet/businessplan/${bid}`)
       }    
}

useEffect(()=>{
    // setLoadingp(true)
    // methods.setValue('_id',{id})
    console.log(methods.formState.isLoading)
},[methods.formState.isLoading])
return (
    <div className="BusinesPlan">
    <Entete/>
    <SousEntet parent='Business plan' enfant='Presentation projet'/>

    <div className="HautBp">
    <div >
                    
                    <ol  style={{background:'white',width:"300px",borderRadius:"30px",marging:"9px",padding:"40px",listStyleType:'decimal'}}>
                    <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#ntlp" >Nom , type et localisation du projet</a>
                     </li>

                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#jf" > Justification du projet</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#barlp" > Bésoins auxquels répond le projet</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#odp" > Objectif du projet</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#cv" >Clientèle visée</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#sopdle" >Services ou produits de l'entreprise</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#acdps" >Avantages concurrentiels (les forces) des produits / services</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#mdv" >Models de vente</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#cdp" >Contraintes du projet</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#fjdle" >Forme juridique de l'entreprise</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#idp" >Interêt du projet</a>
                     </li>
                     <li style={{margin:'0px 0px 5px '}}> 
                     <a href="#pdr" >Programme de réalisation</a>
                     </li>
                   </ol>
               
                </div>  
               
                <div className="gaucheB">
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
                <div class="containers">
                <ol type="1">
                    <h4><li id='ntlp'>Nom , type et localisation du projet</li></h4>
                    <p>
                        Mon projet intitulé{loadingp==true?<Skeleton/>:<input  {...methods.register('nom')} type="text"/>} est le/la: {loadingp==true?<Skeleton/>:<input  {...methods.register('le')} style={{width:"60%"}} type="text"/>} <br/><br/>
                        il se situera en (Pays) {loadingp==true?<Skeleton/>:<input  {...methods.register('pays')} type="text"  />} dans la ville de : {loadingp==true?<Skeleton/>:<input  {...methods.register('ville')} style={{width:"50%"}} type="text"/>}
                        <br/><br/>précisement de: (<i>nom de la commune du quartier et du répère géographique précis</i>) {loadingp==true?<Skeleton/>:<input  {...methods.register('autrelieu')} style={{width:"60%"}} type="text"/>}<br/><br/>
                        Et s'étendra sur un espace :  {loadingp==true?<Skeleton/>:<select  {...methods.register('etatespace')} defaultValue='Loué'><option>Loué</option><option>acheté</option><option>construit</option> </select>} d'environ {loadingp==true?<Skeleton/>:<input  {...methods.register('dimension')} type="number"  />} mètres carrés
                    </p><br/>
                    
                    <h4><li id='jf'>Justification du projet</li></h4>
                    <p>
                        Les raisons qui motivent la mise en place du projet sont les suivantes: <br/><br/> {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('raisons')}   cols="55" rows="15"></textarea>}<br/><br/>
                    </p>
                    
                    <h4><li id='barlp'>Bésoins auxquels répond le projet</li></h4>
                    <p>
                        Ce projet vise en géneral à répondre aux bésoins que sont: <br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('besoins')}   cols="55" rows="15"></textarea>}
                    </p>
                    <h4><li id='odp'>Objectif du projet</li></h4>
                    <p>
                        Les objectifs à court terme sont : <br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('objectifcourtterme')}   cols="55" rows="15"></textarea>}<br/><br/>
                        Les objectifs à moyen terme sont :<br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('objectifmoyenterme')}   cols="55" rows="15"></textarea>}<br/><br/> 
                        Les objectifs à long terme sont :<br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('objectiflongterme')}   cols="55" rows="15"></textarea>}<br/><br/> 

                    </p><br/>
                    <h4><li id='cv'>Clientèle visée</li></h4>
                    <p>
                        Cette offre vise comme clientèle : <br/><br/> {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('clientel')}   cols="55" rows="15"></textarea>}<br/><br/>
                    </p>
                    <h4><li id='sopdle'>Services ou produits de l'entreprise</li></h4>
                    <p>
                        Pour satisfaire  une telle clientèle l'entreprise offrira les services ou produits suivants : <br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('serviceproduit')}   cols="55" rows="15"></textarea>}<br/><br/>
                    </p>
                    <h4><li id='acdps'>Avantages concurrentiels (les forces) des produits / services</li></h4>
                    <p>
                        Les avantages concurrentiels des services / produits de l'entreprise  {loadingp==true?<Skeleton/>:<input  {...methods.register('avantageCon')} type="text"/>}  sont les suivants : <br/><br/> {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('avantage')}   cols="55" rows="15"></textarea>} <br/> <br/>
                    </p>
                    <h4><li id='mdv'>Models de vente</li></h4>
                    <p>
                        Les modes de vente des (services/produits) seront les suivants : <br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('model')}   cols="55" rows="15"></textarea>}<br/><br/>
                    </p>
                    <h4><li id='cdp'>Contraintes du projet</li></h4>
                    <p>
                        Les Contraintes (difficultés) liées au projet sont les suivants : <br/><br/>{loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('contrainte')}  cols="55" rows="15"></textarea>}<br/><br/>
                    </p>
                    <h4><li id='fjdle'>Forme juridique de l'entreprise</li></h4>
                    <p>
                        le présent projet d'entreprise sera exploité dans le cadre (forme juridique choisie) {loadingp==true?<Skeleton/>:<input  {...methods.register('formejuridique')} style={{width:"40%"}} type="text"/>}<br/><br/>
                        Le propriétaire de cette entreprise est la personne de (M/Mme/Mile) : {loadingp==true?<Skeleton/>:<input  {...methods.register('proprietaire')} style={{width:"50%"}} type="text"/>}<br/><br/>
                        Elle a pour associer , les personnes suivantes : <br/><br/>
                    <div></div>
                       <InputAssocier  />
                  
                    </p>
                    <h4><li id='idp'>Interêt du projet</li></h4>
                    <div>
                        Au plan économique : <br/><br/>
                        Dans le contexte actuel que connaît notre pays, la mise en place d'une telle entreprise :
                        <ul>
                            <li>contibuera à la création de PME tant souhaitée par l'Etat ivoirien;</li><br/>
                            <li>constituera une source de revenu pour l'Etat par l'assujettissement aux différents impôts et taxes</li><br/>
                            <li>permettra la création d'emplois paticipant ainsi à la résorption du chômage</li><br/>
                            {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('plan_economique')}   cols="55" rows="15"></textarea>}
                        </ul><br/><br/>

                        Au plan social <br/><br/>
                        Ce projet que promoteur(s), ce projet me/nous permettra : <br/><br/> {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('plansocial')}   cols="55" rows="15"></textarea>}<br/><br/>

                        Au plan personnel <br/><br/>
                        En tant que promoteur(s), ce projet me/nous permettra : <br/><br/> {loadingp==true?<Skeleton style={{height:"50px",width:"100px"}}/>:<textarea {...methods.register('planpersonnel')}   cols="55" rows="15"></textarea>}<br/><br/>
                        <div>
                        <AutrePlan  />
                       </div>
                    </div>
                    <h4><li id='pdr'>Programme de réalisation</li></h4>
                   <TableRealisation />
                </ol>
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
                        <button onClick={()=>navigate(`/pdf/pp/${id}`)} type="submit" className="submit">Télècharger le pdf</button>          
             </div><br/>
    </div>
    </form>    
    </FormProvider>
    </div>

    </div>
    </div>
  )
}
