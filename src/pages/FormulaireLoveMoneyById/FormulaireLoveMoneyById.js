import React, { useEffect} from 'react'
import Entete from '../../components/Entete/entete'
import TableLove from '../../components/tableLove/tableLove.js'
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
  export default function FormulaireLoveMoneyById() {
    const {id} = useParams()
    const navigate = useNavigate()

    const methods=useForm({
     //   {defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/loveMoney/voir/${id}`)}
    })
        const onSubmit= async d=>{
            console.log(d)
         const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/loveMoney/modifie",d);
        }

        console.log(methods.watch())

    return(
        <div className="Recherche_financement">
          <Entete/>
          <SousEntet parent='Recherche financement' enfant='Love money'/>
         
          <div className="HautBp_financement">
           
             <div className="gaucheB_financement">
                <FormProvider {...methods}>
                <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)} style={{backgroundColor: 'white',padding:"20px",margin:"10px"}}>
                       <div class="containers_Financement">
                       <p>Combien sont vos conjoints/conjointes - partenaires amoureux ou compagnies amoureuses que vous comptez ou avez contacté pour le financement de votre projet ? <input  {...methods.register('nombre_personne_contact')} style={{width: "50%"}} type="text"/></p>
                       <span>(veuillez dresser la liste de ces personnes ici:)</span>
                  
                       <TableLove />
                           <h2>Plan B</h2>
                           <p>Quel est votre plan B au ca oû la première Strategie de financement ne marche pas?</p><br/>
                           <textarea {...methods.register('planB')} rows={5} style={{width:"500px",height: "209px"}} placeholder='Décrivez le ici'></textarea>
                         </div>
                         <div class="envoyer">
                       <button  type="submit" className="submit">ENVOYER</button>
                       <button onClick={()=>navigate(`/pdf/LoveMoney`)} type="submit" className="submit">Télècharger le pdf</button> 
                       </div>
                </form>
                </FormProvider>
               </div>

         
         </div>
                
            </div>
                
                )

            }
        








