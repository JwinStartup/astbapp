import './pfp.css'
import React, { useEffect, useState} from 'react'
import Entete from '../../components/Entete/entete'
import TableCoutProjet from '../../components/tableCoutProjet/tableCoutProjet.js'
import TableRessources from '../../components/tableRessource/tableRessource'
import TableMarchandises from "../../components/tableMarchandises/tableMarchandises.js"
import TableSalaires from "../../components/tableSalaires/tableSalaires.js"
import TablePub from "../../components/tablePub/tablePub.js"
import TableAutresCout from "../../components/tableAutresCout/tableAutresCout.js"
import TableAmortissementMateriel from "../../components/tableAmortissement/tableAmortissement.js"
import TableAmortissementEmprunt from "../../components/tableAmortissementEmprunt/tableAmortissementEmprunt.js"
import TableChargesProduction from "../../components/tableChargesProduction/tableChargesProduction.js"
import TableRentabilite from "../../components/tableRentabilite/tableRentabilite.js"
import TableResultaltPrevision from "../../components/tableResultaltPrevision/tableResultaltPrevision.js"
import TableDecaissement from "../../components/tableDecaissement/tableDecaissement.js"
import TableRecette from '../../components/tableRecettes/tableRecettes'
import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import {  FormProvider, useForm } from 'react-hook-form'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import functionSousEntet from '../../components/functionSousEntet/functionSousEntet.js'
import SousEntet from '../../components/functionSousEntet/functionSousEntet.js'
import Menuprojet from '../../components/MenuProjet/menuprojet'
import Fmenu from '../../components/fmenu/fmenu'
import { ThreeDots } from 'react-loader-spinner'

  export default function Pfp (){
    const navigate = useNavigate()
    const methods =useForm({defaultValues: async ()=>await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/pfp/voir/${id}`)})
    const [loading,setLoading]= useState(false)
    const {bid,id} = useParams()
    useEffect(()=>{
        methods.setValue('pfpid',{id})
        
        console.log(methods.getValues())
    },[])

        const onSubmit= async d=>{
             setLoading(true)
            console.log(d)
           const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/pfp/modifie",d);
           // navigate(`/projet/${id}/businessplan')
           console.log(response)
           if(response){
            setLoading(false)
            navigate(`/projet/businessplan/${bid}`)
           }
        }


    return(
        <div className="BusinesPlan">
          <Entete/>
          <SousEntet parent='Business plan' enfant='Prevision financieres'/>
         
          <div className="HautBp">
                 <div >
                    
                      <ol  style={{background:'white',width:"300px",borderRadius:"30px",marging:"5px",padding:"21px",height:"200px",listStyleType:'upper-roman'}}>
                      <li style={{margin:'5px'}}> 
                       <a href="#ef" > ETUDE FINANCIERE</a>
                      
                         <ol type='1' >
                         <li> 
                         <a href="#ccp" >Calcul du coût du projet</a></li>
                         <li> 
                         <a href="#pfp" >Plan de Financement du projet</a></li>
                         </ol>
                       </li>

                       <li style={{margin:'5px'}}> 
                       <a href="#pf" > PREVISIONS FINANCIERES</a>
                      
                         <ol type='1'>
                         <li> 
                         <a href="#eve" >Evaluation mensuel des charges de production ou de fonctionnement de l'entreprise</a></li>
                         <li> 
                         <a href="#er" >Etude de rentabilité</a></li>
                         </ol>
                         
                       </li>
                     </ol>
                 
                  </div>  

                <div className="gaucheB">
                <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
                    <div class="containers">
                    <ol className='olDiv' type="I">
                            <h3><li id='ef'>ETUDE FINANCIERE</li></h3>
                             <ol type="1">
                             <h4><li id='ccp'>Calcul du coût du projet</li></h4>
                         <TableCoutProjet />
                             <p>
                        + Coût des besoins de transport des courses de démarrage <span class="tlpro"><input {...methods.register('cout_total_besoin_transport_course_demarrage')} type="text"/></span>FCFA <br/><br/>
                        + Coût des besoins d'appels telephonique de démarrage  <span class="tlpro"><input {...methods.register('cout_total_appel_telephonique_demarrage')} type="text"/></span>FCFA <br/><br/>
                        + Coût des besoins de formalités  administratives <span class="tlpro"><input {...methods.register('cout_total_besoin_formalite_administrative')} type="text"/></span>FCFA <br/><br/>
                        + Coût d'acquisition  et amenagement d'un local <span class="tlpro"><input {...methods.register('cout_aquisition_amenagement_local')} type="text"/></span>FCFA <br/><br/>
                        + Coût des besoins d'équipements materiels <span class="tlpro"><input {...methods.register('cout_total_besoin_equipement_materiel')} type="text"/></span>FCFA <br/><br/>
                        + Coût des besoins en fonds de roulement <span class="tlpro"><input {...methods.register('cout_total_besoin_fonds_roulement')} type="text"/></span>FCFA <br/><br/>
                        + Coût des autres besoins divers de démarrage <span class="tlpro"><input {...methods.register('cout_total_autres_besoin_divers_demarrage')} type="text"/></span>FCFA <br/><br/>
                        <h3>TOTAL COUT DU PROJET  = <span class="partlpro"><span class="tlpro"><input  type="text"/></span>FCFA</span></h3>
                             </p><br/>
                          <h4><li id='pfp'>Plan de Financement du projet</li></h4>
                   <TableRessources />
                        <br/>
                        </ol>
                   
                   <h3><li id='pf'>PREVISIONS FINANCIERES</li></h3>
                   <ol type="1">
                    <h4><li id='eve'>Evaluation mensuel des charges de production ou de fonctionnement de l'entreprise</li></h4>
                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Coûts d'achat des matières premières ou des marchandises</b></p></u><br/>
                       <TableMarchandises />
                   <br/><br/>

                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Salaire du gérant de l'entreprise et des emplooyés</b></p></u><br/>
                    <TableSalaires/>                 
                    <br/><br/>

                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Coût de publicités et marketing</b></p></u><br/>
                   <TablePub/>
                    <br/><br/>


                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Autres coût de fonctionnement ou de production</b></p></u><br/>
                  <TableAutresCout />
                   <br/><br/>

                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Coût de l'amortissement matériel</b></p></u><br/>
                  
                       <TableAmortissementMateriel />
                  <br/><br/>


                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Coût de l'amortissement de l'emprunt financier</b></p></u>
                   <TableAmortissementEmprunt />
                    <br/><br/>


                    <u><p style={{fontSize:"18px",fontStyle:"italic"}}><b>Total de charges de production ou de fonctionnement de l'entreprise</b></p></u><br/>
                    <TableChargesProduction />
                <br/><br/>


                <h4><li id='er'>Etude de rentabilité</li></h4>
                <p style={{fontSize:"18px",fontStyle:"italic"}}><b>a- Estimation du chiffre d'affaire mensuel et annuel</b></p><br/>
                
             <TableRentabilite  />
               <p style={{fontSize:"18px",fontStyle:"italic"}}><b>b- plan de tresorerie</b></p><br/>
                <u><p>Prévision des recettes</p></u><br/>
          <TableRecette />

       <u><p>Prévision des décaissements</p></u><br/>
             <TableDecaissement />
               
        
                <p style={{fontSize:"18px",fontStyle:"italic"}}><b>c- Compte de résultat Prévision</b></p><br/>
                <p><b>Compte de résultat prévisionnel mensuel et annuel</b></p>
               
               <TableResultaltPrevision/>
                
                
                <p style={{fontSize:"18px",fontStyle:"italic"}}><b>d- Determination du seuil de rentabilité</b></p><br/>
                <p>
                    Au vu des tableaux du compte de résultat prévisionnel, le projet atteindra son seuil de
                    rentabilité à partir du <span class="mois"><input {...methods.register('mois_seul_rentabilite')} type="text"/></span> ième mois d'activité
                    c'est-à-dire  dans le courant du mois de <span class="tlpro"><input {...methods.register('courant_du_mois_rentable')} type="text"/></span>
                    de l'année <span class="tlpro"><input {...methods.register('annee_de_rentabilite')} style={{width:"150px"}} type="date"/></span> avec un chiffre d'affaire de : <span class="tlpro"><input {...methods.register('chiffre_d_affaire_annuel')} type="number"/></span>FCFA.
                </p>
            </ol>
            <br/>
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
                        <button onClick={()=>navigate(`/pdf/pfp`)} type="submit" className="submit">Télècharger le pdf</button>
                       </div>
                    </div>
               </form>
               </FormProvider>
                </div>
                
                
                </div>
                
            </div>
                
                )

            }
        
