import React, { useEffect} from 'react'
import Entete from '../../components/Entete/entete'
import TableApport from '../../components/tableApport/tableApport.js'
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

  export default function FormulaireApportById() {
    const {id} = useParams()
    const navigate = useNavigate()
     const methods=useForm(
     //   {defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/apport/voir/${id}`)}
     )
        const onSubmit= async d=>{
            console.log(d)
          const response = await fetchWrapper.post("http://localhost:8080/api/apport/modifie",d);
      
        }

  
console.log(methods.watch())
    return(
        <div className="Recherche_financement">
          <Entete/>
          <SousEntet parent='Recherche financement' enfant='Apport familial'/>
         
          <div className="HautBp_financement" style={{display: 'flex',justifyContent: 'center',flex: '1 1', background: 'gainsboro'}}>
           <FormProvider {...methods}>
             <div className="gaucheB" style={{width:'1000px'}}>
                
                <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)} style={{backgroundColor: 'white',padding:"20px",margin:"10px"}}>
                       <div class="containers_Financement" style={{ width: '100%',padding: '15px'     ,display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                       <p>A combien de personnes comptez-vous ou avez-vous contacté au sein de la famille ou de vos connaissances proches pour le financement de votre projet? <input  {...methods.register('nombre_personne_contact')} style={{width: "50%"}} type="text"/></p>
                    
                       <span>(veuillez dresser la liste de ces personnes ici:)</span>
                  
                          <TableApport />
                          <p>Montant total recolté auprés de kla famille ou des connaissance proches<input  {...methods.register('montant_recolte')} style={{width: "50%"}} type="text"/></p>
                           <h2>Plan B</h2>
                           <p>Quel est votre plan B au ca oû la première Strategie de financement ne marche pas?</p><br/>
                           <textarea {...methods.register('planB')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                         </div>
                         <div class="envoyer">
                       <button  type="submit" className="submit">ENVOYER</button>
                       <button onClick={()=>navigate(`/pdf/Apport`)} type="submit" className="submit">Télècharger le pdf</button> 
                       </div>
                
                </form>
               </div>
               </FormProvider>
         </div>
                
            </div>
                
                )

            }
        








