


    import React, { useEffect} from 'react'
    import Entete from '../../components/Entete/entete'
    import TablePret from '../../components/tablePret/tablePret.js'
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
  
      export default function FormulairePretById() {
      
        const {id} = useParams()
        const navigate = useNavigate()
    
        const methods=useForm({
            //   {defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/pret/voir/${id}`)}
           })
               const onSubmit= async d=>{
                   console.log(d)
                const response = await fetchWrapper.post("http://localhost:8080/api/pret/modifie",d);
               }
       
               console.log(methods.watch())
       
    
        return(
            <div className="Recherche_financement">
              <Entete/>
              <SousEntet parent='Recherche financement' enfant='Pret bancaire'/>
             
              <div className="HautBp_financement">
               
                 <div className="gaucheB_financement">
                    <FormProvider {...methods}>
                    <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
                           <div class="containers_Financement">
                           <p>Sur Combien de temps voudriez vous le rembourser? <input  {...methods.register('nombre_temps')} style={{width: "50%"}} type="text"/></p>
                           <p>Combien allez-vous rembouser pour chaque  période? <input  {...methods.register('montant_rembourse_par_periode')} style={{width: "50%"}} type="text"/></p>
                           <p>Nom et adresse de la banque ou  de la microfinance où vous avez contracté le pret? <input  {...methods.register('nom_adresse_microfinance')} style={{width: "50%"}} type="text"/></p>
                           <h2>PROGRAMME DE REMBOURSEMENT</h2>
                              <TablePret />
                           <p>Date de la finalisation du remboursement? <input  {...methods.register('date_remboursement')} style={{width: "50%"}} type="text"/></p>
                           <p>Delai de remboursement respecté? <select  {...methods.register('delai_respecte')} style={{width: "50%"}} type="text">
                            <option>non</option>
                            <option>oui</option>
                            </select></p>

                               <h2>Plan B</h2>
                               <p>Quel est votre plan B au ca oû la première Strategie de financement ne marche pas?</p><br/>
                               <textarea {...methods.register('planB')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                             </div>
                             <div class="envoyer">
                       <button  type="submit" className="submit">ENVOYER</button>
                       <button onClick={()=>navigate(`/pdf/Pret`)} type="submit" className="submit">Télècharger le pdf</button> 
                       </div>
                    </form>
                    </FormProvider>
                   </div>
    
             
             </div>
                    
                </div>
                    
                    )
    
                }
            
    
    
    
    
    
    
    
    
    