
//import './pfp.css'
import React, { useEffect} from 'react'
import Entete from '../../components/Entete/entete'
import TableEpargne from '../../components/tableEpargne/tableEpargne.js'
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

  export default function EpargneById (){
    const {id} = useParams()
    const navigate = useNavigate()
    const methods =useForm({
      defaultValues:async ()=>await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/epargnePersonelle/voir/${id}`)})
        const onSubmit= async d=>{
            console.log(d)
          const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/epargnePersonelle/modifie",d);
           // navigate(`/projet/${id}/projet/businessplan`)
      
      // console.log(response)
        }
   /*     useEffect(()=>{
          methods.setValue('_id',{id})
      },[])
*/
        console.log(methods.watch())

    return(
        <div className="Recherche_financement">
          <Entete/>
          <SousEntet parent='Recherche financement' enfant='Epargne personnelle'/>
         
          <div className="HautBp_financement" style={{display: 'flex',justifyContent: 'center',flex: '1 1', background: 'gainsboro'}}>
           
             <div className="gaucheB" style={{width:'1000px'}}>
                <FormProvider  {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} style={{backgroundColor: 'white',margin:"10px"}}>
                       <div class="containers_Financement" style={{ width: '100%',margin: '10px'     ,display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                       <div style={{width: '96%',margin:"15px"}}><p>A combien s'élève le cout de demarrage de votre projet? <input  {...methods.register('cout_demarrage_projet')} style={{width: "50%"}} type="text"/></p>
                       <p>Combien comptez-vous apporter personnellement? <input  {...methods.register('apport_personnel')} style={{width: "50%"}} type="text"/></p>
                       <p>Avez-vous déja rassemblez ce montant? <input  {...methods.register('disponible_montant')} style={{width: "50%"}} type="text"/></p>
                       <p>En combien de temps comptez-vous obtenir ce montant? <input  {...methods.register('duree_obtention_montant')} style={{width: "50%"}} type="text"/></p>
                       </div><span>(veuillez planifier votre épargne dans le tableau ci-dessous.)</span>
                          
                          <h2>PROGRAMME D'EPARGNE</h2>
                          <TableEpargne />
                          <h2>OBSERVATION DURANT LA PERIODE D'EPARGNE</h2>
                          <textarea {...methods.register('observation_epargne')} rows={5} style={{width:"500px",height: "209px"}}></textarea>
                          <div><p>Date de l'atteinte du montant de l'epargne:<input  {...methods.register('date_atteinte_epargne')} style={{width: "50%"}} type="text"/></p>
                           <p>Avez-vous respecté le delai de financement?:<select {...methods.register('delai_respecte')}><option>oui</option><option>non</option></select></p>
                           </div><h2>Plan B</h2>
                           <p>Quel est votre plan B au ca oû la première Strategie de financement ne marche pas?</p><br/>
                           <textarea {...methods.register('planB')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                            
                         </div>
                         <div class="envoyer">
                       <button  type="submit" className="submit">ENVOYER</button>
                       <button onClick={()=>navigate(`/pdf/epargne`)} type="submit" className="submit">Télècharger le pdf</button>          
                       </div>
                </form>
                </FormProvider>
               </div>

         
         </div>
                
            </div>
                
                )

            }
        








