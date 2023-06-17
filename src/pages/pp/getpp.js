import "./pp.css"
import React, { useEffect, useState } from 'react'
import Fmenu from "../../components/fmenu/fmenu"
import Entete from "../../components/Entete/entete"
import GetInputAssocier from "../../components/Input/getinputAssocier.js"
import axios from 'axios'
import {Controller, useFieldArray, useForm, useWatch} from 'react-hook-form'
import TableRealisation from "../../components/tableRealisation/tableRealisation"
import AutrePlan from "../../components/autreplan/autrplan"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { fetchWrapper } from "../../reducer/helpers/helpers"
import SousEntet from "../../components/functionSousEntet/functionSousEntet"

export default function Getpp() {
    const [donnee,setDonnee]=useState(null)
    const {id} = useParams()
    const navigate = useNavigate()


useEffect(()=>{
   const getdata= async ()=>{
       await fetchWrapper.get(`http://localhost:8080/api/presentProjet/voir/${id}`).then((data)=>setDonnee(data)) 
    }
    getdata()
},[id])
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
                    
                <div class="containers">
                <ol type="1">
                    <h4><li id='ntlp'>Nom , type et localisation du projet</li></h4>
                    <p>
                        Mon projet intitulé<p >{donnee==null? '..' : donnee.nom}</p>  est le/la: <p   style={{width:"60%"}}>{donnee==null? '..' :donnee.le}</p>  <br/><br/>
                        il se situera en (Pays) <p>{donnee==null? '..' :donnee.pays}</p> dans la ville de : <p   style={{width:"50%"}}>{donnee==null? '..' :donnee.ville}</p> 
                        <br/><br/>précisement de: (<i>nom de la commune du quartier et du répère géographique précis</i>) <p   style={{width:"60%"}}>{donnee==null? '..' :donnee.autrelieu}</p> <br/><br/>
                        Et s'étendra sur un espace :  <p > {donnee==null? '..' :donnee.etatespace}  </p> d'environ <p  >{donnee==null? '..' :donnee.dimension}</p> mètres carrés
                    </p><br/>
                    
                    <h4><li id='jf'>Justification du projet</li></h4>
                    <p>
                        Les raisons qui motivent la mise en place du projet sont les suivantes: <br/><br/> <p >{donnee==null? '..' :donnee.raisons}</p><br/><br/>
                    </p>
                    
                    <h4><li id='barlp'>Bésoins auxquels répond le projet</li></h4>
                    <p>
                        Ce projet vise en géneral à répondre aux bésoins que sont: <br/><br/><p >{donnee==null? '..' :donnee.besoins}</p>
                    </p>
                    <h4><li id='odp'>Objectif du projet</li></h4>
                    <p>
                        Les objectifs à court terme sont : <br/><br/><p >{donnee==null? '..' :donnee.objectifcourtterme}</p><br/><br/>
                        Les objectifs à moyen terme sont :<br/><br/><p >{donnee==null? '..' :donnee.objectifmoyenterme}</p><br/><br/> 
                        Les objectifs à long terme sont :<br/><br/><p >{donnee==null? '..' :donnee.objectiflongterme}</p><br/><br/> 

                    </p><br/>
                    <h4><li id='cv'>Clientèle visée</li></h4>
                    <p>
                        Cette offre vise comme clientèle : <br/><br/> <p >{donnee==null? '..' :donnee.clientel}</p><br/><br/>
                    </p>
                    <h4><li id='sopdle'>Services ou produits de l'entreprise</li></h4>
                    <p>
                        Pour satisfaire  une telle clientèle l'entreprise offrira les services ou produits suivants : <br/><br/><p >{donnee==null? '..' :donnee.serviceproduit}</p><br/><br/>
                    </p>
                    <h4><li id='acdps'>Avantages concurrentiels (les forces) des produits / services</li></h4>
                    <p>
                        Les avantages concurrentiels des services / produits de l'entreprise  <p  >{donnee==null? '..' :donnee.servicesproduit}</p>   sont les suivants : <br/><br/> <p >{donnee==null? '..' :donnee.avantage}</p> <br/> <br/>
                    </p>
                    <h4><li id='mdv'>Models de vente</li></h4>
                    <p>
                        Les modes de vente des (services/produits) seront les suivants : <br/><br/><p >{donnee==null? '..' :donnee.model}</p><br/><br/>
                    </p>
                    <h4><li id='cdp'>Contraintes du projet</li></h4>
                    <p>
                        Les Contraintes (difficultés) liées au projet sont les suivants : <br/><br/><p >{donnee==null? '..' :donnee.contrainte}</p><br/><br/>
                    </p>
                    <h4><li id='fjdle'>Forme juridique de l'entreprise</li></h4>
                    <p>
                        le présent projet d'entreprise sera exploité dans le cadre (forme juridique choisie) <p   style={{width:"40%"}}>{donnee==null? '..' :donnee.formejuridique}</p> <br/><br/>
                        Le propriétaire de cette entreprise est la personne de (M/Mme/Mile) : <p   style={{width:"50%"}}>{donnee==null? '..' :donnee.proprietaire}</p> <br/><br/>
                        Elle a pour associer , les personnes suivantes : <br/><br/>
                    <div></div>
                  <GetInputAssocier associer={donnee.associer}/>
                    </p>
                    <h4><li id='idp'>Interêt du projet</li></h4>
                    <div>
                        Au plan économique : <br/><br/>
                        Dans le contexte actuel que connaît notre pays, la mise en place d'une telle entreprise :
                        <ul>
                            <li>contibuera à la création de PME tant souhaitée par l'Etat ivoirien;</li><br/>
                            <li>constituera une source de revenu pour l'Etat par l'assujettissement aux différents impôts et taxes</li><br/>
                            <li>permettra la création d'emplois paticipant ainsi à la résorption du chômage</li><br/>
                            <p >{donnee==null? '..' :donnee.planeconomique}</p>
                        </ul><br/><br/>

                        Au plan social <br/><br/>
                        Ce projet que promoteur(s), ce projet me/nous permettra : <br/><br/> <p >{donnee==null? '..' :donnee.plansocial}</p><br/><br/>

                        Au plan personnel <br/><br/>
                        En tant que promoteur(s), ce projet me/nous permettra : <br/><br/> <p >{donnee==null? '..' :donnee.planpersonnel}</p><br/><br/>
                        <div>
                      { /* <AutrePlan />*/}
                       </div>
                    </div>
                    <h4><li id='pdr'>Programme de réalisation</li></h4>
                 {/*  <TableRealisation   />*/}
                </ol>
            <div class="envoyer">
            <p value="ENVOYER" type="submit" className="submit" />
             </div><br/>
    </div>
   

    </div>

    </div>
    </div>
  )
}
