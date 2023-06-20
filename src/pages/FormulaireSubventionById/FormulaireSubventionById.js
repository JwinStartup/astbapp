
import React, { useEffect} from 'react'
import Entete from '../../components/Entete/entete'
import TableSubvention from '../../components/tableSubvention/tableSubvention.js'
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

  export default function FormulaireSubventionById() {
    const {id} = useParams()
    const navigate = useNavigate()
    
    const methods=useForm({
      //   {defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/subvention/voir/${id}`)}
     })
         const onSubmit= async d=>{
             console.log(d)
          const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/subvention/modifie",d);
         }
 
         console.log(methods.watch())
 


    return(
        <div className="Recherche_financement">
          <Entete/>
          <SousEntet parent='Recherche financement' enfant='Subventions étatique'/>
         
          <div className="HautBp_financement">
           
             <div className="gaucheB_financement">
              <FormProvider {...methods}>
                <form autoComplete='off'  onSubmit={methods.handleSubmit(onSubmit)}>
                       <div class="containers_Financement">
                       <p>A combien s'élève le montant de  démarrage de votre activité? <input  {...methods.register('montant_demarrage')} style={{width: "50%"}} type="text"/></p>
                       <p>Quelles sont les organisations publiques ou privées/ nationales ou internationnales que vous comptez contacter? <input  {...methods.register('organisation_contacter')} style={{width: "50%"}} type="text"/></p>
                       <p>Et combien espérez-vous avoir auprés de chacun? <input  {...methods.register('montant_attendu')} style={{width: "50%"}} type="text"/></p>
                            <br/>
                          <TableSubvention />
                       <p>Montant total des apports réunis: <input  {...methods.register('montant_total_reunis')} style={{width: "50%"}} type="text"/></p>
                         <h2>Observation durant la periode de financement</h2>
                         <textarea {...methods.register('observation')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                         <p>Date de l'atteinte du financement  <input  {...methods.register('delai_attendu')} style={{width: "50%"}} type="text"/></p>
                         <p>Periode respecté  <select {...methods.register('statut_periode')} style={{width: "50%"}} type="text">
                            <option>non</option>
                            <option>oui</option>
                            </select></p>

                         <h2>Plan B</h2>
                           <p>Quel est votre plan B au ca oû la première Strategie de financement ne marche pas?</p><br/>
                           <textarea {...methods.register('planB')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                         </div>
                         <div class="envoyer">
                       <button  type="submit" className="submit">ENVOYER</button>
                       <button onClick={()=>navigate(`/pdf/Subvention`)} type="submit" className="submit">Télècharger le pdf</button> 
                       </div>
                </form>
                </FormProvider>
               </div>

         
         </div>
                
            </div>
                
                )

            }
        








