
//import './pfp.css'
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
import {  useForm } from 'react-hook-form'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import functionSousEntet from '../../components/functionSousEntet/functionSousEntet.js'
import SousEntet from '../../components/functionSousEntet/functionSousEntet.js'
import Menuprojet from '../../components/MenuProjet/menuprojet'
import Fmenu from '../../components/fmenu/fmenu'
import { useSelector } from 'react-redux'

  export default function ModeById (){
      const {rid} = useParams()
      const navigate = useNavigate()
      const [tab,setTab]=useState([])
   const methods=useForm({})
      const data=[
        {id:"apportPersonelle",name:"L'apport personnel ou l'epargne personnelle"},
        {id:"soutienFamilial",name:"L'apport  ou le soutien familial  et des connaissances"},
        {id:"loveMoney",name:"Le love money"},
        {id:"pret",name:"Le pret d'honneur et subventions"},
        {id:"businessAngel",name:"Les business angels"},
        {id:"capitalRisque",name:"Capital risque"},
        {id:"pretBancaire",name:"Le pret bancaire ou des microfinances"},
        {id:"creditBail",name:"Le crédit-bail"},
        {id:"affacturage",name:"L'affacturage"},
        {id:"appelAssocies",name:"Appel à des associés"},
        {id:"subvention",name:"Les subventions étatiques ou des organismes publics"}
      ]
         
     
        const onSubmit= async d=>{
            console.log(d)
           const response = await fetchWrapper.post("http://localhost:8080/api/mode/creer",d);
           if(response.aChoisirMode==true){
               navigate(`/projet/rFinancement/${response.rechercheFinancement}`)
           }
      
        }
        //methods.setValue('id_rfinancement',id)
        useEffect(()=>{
          methods.setValue('id_rfinancement',rid)

     },[])

    return(
        <div className="BusinesPlan">
          <Entete/>
          <div className="HautBp">
         < form autoComplete='off' style={{background:"white"}} onSubmit={methods.handleSubmit(onSubmit)}>
        <div class="containerBOX" style={{margin:'20px'}}>
        
                   <fieldset style={{width:"630px"}}>
                      <legend>Choisir la ou les methodes de financement adapté à votre projet</legend>
                           {data.map((u,index,tab)=> <div key={index} style={{height:"50px",display:"flex",justifyContent:"flex-start",alignContent:"flex-start",border:'2px solid limegreen',margin:"10px"}} >
                            <input {...methods.register(`${u.id}`
                            )} 
                             style={{width:"16px"  ,height:"16px",margin:'10px'}}
                             type="checkbox"   />
                            <label style={{fontSize:'18px'}} >{u.name}</label>
                            </div>)}
                   </fieldset>

               <div class="envoyer">
                 <input value="ENVOYER" type="submit" className="submit" />
             </div>
        </div>
    </form>
                
                </div>
                
            </div>
                
                )

            }
        






